# Use official MySQL 8.0 image as base
FROM mysql:8.0

# Set root password
ENV MYSQL_ROOT_PASSWORD=test@123

# Create database and user
ENV MYSQL_DATABASE=dashboard_db
ENV MYSQL_USER=dashboard_user
ENV MYSQL_PASSWORD=dashboard_password

# Copy initialization scripts
COPY ./script-init/init.sql /docker-entrypoint-initdb.d/

# Expose port 3306
EXPOSE 3306
