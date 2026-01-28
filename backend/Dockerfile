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

# Create a custom Apache virtual host config template for Laravel
RUN echo '<VirtualHost *:__PORT__>' > /etc/apache2/sites-available/laravel.conf \
    && echo '    DocumentRoot /var/www/public' >> /etc/apache2/sites-available/laravel.conf \
    && echo '    <Directory /var/www/public>' >> /etc/apache2/sites-available/laravel.conf \
    && echo '        AllowOverride All' >> /etc/apache2/sites-available/laravel.conf \
    && echo '        Require all granted' >> /etc/apache2/sites-available/laravel.conf \
    && echo '        DirectoryIndex index.php index.html' >> /etc/apache2/sites-available/laravel.conf \
    && echo '    </Directory>' >> /etc/apache2/sites-available/laravel.conf \
    && echo '    ErrorLog ${APACHE_LOG_DIR}/error.log' >> /etc/apache2/sites-available/laravel.conf \
    && echo '    CustomLog ${APACHE_LOG_DIR}/access.log combined' >> /etc/apache2/sites-available/laravel.conf \
    && echo '</VirtualHost>' >> /etc/apache2/sites-available/laravel.conf

# Disable and remove the default site, enable the custom Laravel site, and validate config
RUN a2dissite 000-default.conf \
    && rm -f /etc/apache2/sites-enabled/000-default.conf \
    && a2ensite laravel.conf \
    && apache2ctl configtest

# Create a startup script to set PORT dynamically and debug
RUN echo '#!/bin/bash' > /usr/local/bin/start-apache.sh \
    && echo 'echo "Script started successfully!"' >> /usr/local/bin/start-apache.sh \
    && echo 'PORT=${PORT:-10000}' >> /usr/local/bin/start-apache.sh \
    && echo 'echo "Setting PORT to $PORT"' >> /usr/local/bin/start-apache.sh \
    && echo 'sed -i "s/__PORT__/$PORT/g" /etc/apache2/sites-available/laravel.conf' >> /usr/local/bin/start-apache.sh \
    && echo 'echo "Listen $PORT" > /etc/apache2/ports.conf' >> /usr/local/bin/start-apache.sh \
    && echo 'echo "Final Apache config:"' >> /usr/local/bin/start-apache.sh \
    && echo 'cat /etc/apache2/sites-available/laravel.conf' >> /usr/local/bin/start-apache.sh \
    && echo 'echo "Contents of /var/www/public/:"' >> /usr/local/bin/start-apache.sh \
    && echo 'ls -la /var/www/public/' >> /usr/local/bin/start-apache.sh \
    && echo 'echo "Enabled sites:"' >> /usr/local/bin/start-apache.sh \
    && echo 'ls /etc/apache2/sites-enabled/' >> /usr/local/bin/start-apache.sh \
    && echo 'echo "Starting Apache..."' >> /usr/local/bin/start-apache.sh \
    && echo 'apache2-foreground' >> /usr/local/bin/start-apache.sh \
    && chmod +x /usr/local/bin/start-apache.sh

# Expose the port (Render will use PORT env var)
EXPOSE ${PORT:-10000}

# Override the base CMD with the startup script
CMD ["/usr/local/bin/start-apache.sh"]