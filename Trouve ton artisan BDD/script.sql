CREATE DATABASE trouve_ton_artisan;
USE trouve_ton_artisan;

CREATE TABLE categories (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom_categorie VARCHAR(55),
    slug VARCHAR(55)
);

CREATE TABLE specialites (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom_specialite VARCHAR(55),
    categorie INT, FOREIGN KEY (categorie) REFERENCES categories(id)
);

CREATE TABLE artisans (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom_artisan VARCHAR(155),
    specialite INT, FOREIGN KEY(specialite) REFERENCES specialites(id),
    note DECIMAL (2,1) NOT NULL,
    ville VARCHAR (55) NOT NULL,
    a_propos TEXT,
    email VARCHAR(155) UNIQUE NOT NULL,
    site_web VARCHAR(155),
    top_artisan BOOLEAN
);

CREATE USER 'admin2'@'localhost' IDENTIFIED VIA mysql_native_password USING '***';
GRANT SELECT ON *.* TO 'admin2'@'localhost' REQUIRE NONE WITH MAX_QUERIES_PER_HOUR 0 MAX_CONNECTIONS_PER_HOUR 0 MAX_UPDATES_PER_HOUR 0 MAX_USER_CONNECTIONS 0;

