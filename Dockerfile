# Utiliser Node.js 22.14 comme image de base
FROM node:22.14

# Définir le répertoire de travail
WORKDIR /server

# Copier les fichiers nécessaires et installer les dépendances
COPY server/package.json server/package-lock.json ./
RUN npm install

# Copier le reste du code
COPY . .

# Exposer le port utilisé par ton serveur Express
EXPOSE 5000

# Définir la commande de démarrage
CMD ["node", "server/server.js"]
