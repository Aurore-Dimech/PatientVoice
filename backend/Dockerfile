FROM php:8.2-apache

# Set the working directory
WORKDIR /var/www

# Enable Apache mod_rewrite and set ServerName
RUN a2enmod rewrite \
    && echo "ServerName localhost" >> /etc/apache2/apache2.conf

# Install system dependencies and PHP extensions
RUN apt-get update -y && apt-get install -y \
    libicu-dev \
    libmariadb-dev \
    unzip zip \
    zlib1g-dev \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libjpeg62-turbo-dev \
    libonig-dev \
    libxml2-dev

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Install PHP extensions
RUN docker-php-ext-install gettext mbstring exif intl bcmath pdo_mysql gd

# Configure and install GD extension
RUN docker-php-ext-configure gd --enable-gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) gd

# Copy Composer files first for better caching
COPY composer.json composer.lock ./

# Install PHP dependencies (skip dev for production)
RUN composer install --no-dev --optimize-autoloader

# Copy the Laravel application code
COPY . .

# Set proper permissions for Laravel
RUN chown -R www-data:www-data /var/www \
    && chmod -R 755 /var/www/storage \
    && chmod -R 755 /var/www/bootstrap/cache

# Create a custom Apache virtual host config for Laravel
RUN echo '<VirtualHost *:${PORT}>' > /etc/apache2/sites-available/laravel.conf \
    && echo '    DocumentRoot /var/www/public' >> /etc/apache2/sites-available/laravel.conf \
    && echo '    <Directory /var/www/public>' >> /etc/apache2/sites-available/laravel.conf \
    && echo '        AllowOverride All' >> /etc/apache2/sites-available/laravel.conf \
    && echo '        Require all granted' >> /etc/apache2/sites-available/laravel.conf \
    && echo '        DirectoryIndex index.php index.html' >> /etc/apache2/sites-available/laravel.conf \
    && echo '    </Directory>' >> /etc/apache2/sites-available/laravel.conf \
    && echo '    ErrorLog ${APACHE_LOG_DIR}/error.log' >> /etc/apache2/sites-available/laravel.conf \
    && echo '    CustomLog ${APACHE_LOG_DIR}/access.log combined' >> /etc/apache2/sites-available/laravel.conf \
    && echo '</VirtualHost>' >> /etc/apache2/sites-available/laravel.conf

# Disable the default site and enable the custom Laravel site
RUN a2dissite 000-default.conf \
    && a2ensite laravel.conf

# Configure Apache to listen on the PORT environment variable (default 10000 on Render)
RUN echo "Listen \${PORT}" > /etc/apache2/ports.conf

# Debug: Verify the config and directory
RUN cat /etc/apache2/sites-available/laravel.conf \
    && ls -la /var/www/public/ \
    && echo "PORT is set to: \${PORT}"

# Expose the port (Render will use PORT env var)
EXPOSE ${PORT:-10000}

# Start Apache in the foreground
CMD ["apache2-foreground"]