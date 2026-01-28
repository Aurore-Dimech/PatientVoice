FROM php:8.2-apache

WORKDIR /var/www

RUN a2enmod rewrite \
    && echo "ServerName localhost" >> /etc/apache2/apache2.conf

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

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

RUN docker-php-ext-install gettext mbstring exif intl bcmath pdo_mysql gd

RUN docker-php-ext-configure gd --enable-gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) gd

RUN echo "Listen \${PORT}" > /etc/apache2/ports.conf \
    && sed -i 's/VirtualHost \*:80/VirtualHost *:\${PORT}/g' /etc/apache2/sites-available/000-default.conf

EXPOSE ${PORT:-10000}

CMD ["apache2-foreground"]