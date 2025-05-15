# Trouve-ton-artisan
App full stack : ReactJS, NodeJS, express, Sequelize(ORM) et MySQL

Le dépôt est divisé en trois dossiers:
- client : partie front-end (port 3000)
- server : partie back-end (port 5000)
- Trouve ton artisan BDD : qui contient le script.sql de creation des tables et donnees_artisan.sql qui contient les données.


Le site est alimenté par une API privée qui questionne la base de données MySQL (utilisation de phpMyadmin en local).
Le front-end via des requetes Fetch() sollicite le back-end afin d'obtenir les données relatives aux artisans.

## 🚀 Installation et démarrage

### Prérequis

Avant de commencer, assurez-vous d'avoir installé :
- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)
- xampp qui inclus phpMyAdmin et MySql
- [npm](https://www.npmjs.com/)

Il est préciser qu'il est nécessaire de créer un fichier .env avec le mot de passe de connexion à la base de données.

### Étapes d'installation

1. Clonez le projet :
     ```sh
     git clone <url-du-repo>
     cd Trouve-ton-artisan
2. Installer les dépendances:
    installer xampp
   ```sh
    cd server
    npm install
    cd ../client
    npm install
3. lancer le serveur:
   lancer le serveur mySQL via xampp
   ```sh
   cd server
   npm start
4. lancer le front end :
 ```sh
   cd client
   npm start






