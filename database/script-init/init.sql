CREATE DATABASE IF NOT EXISTS dashboard_db;
CREATE USER IF NOT EXISTS 'dashboard_user'@'%' IDENTIFIED BY 'dashboard_password';
GRANT ALL PRIVILEGES ON dashboard_db.* TO 'dashboard_user'@'%';
FLUSH PRIVILEGES;