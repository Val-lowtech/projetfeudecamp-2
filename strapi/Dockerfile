# Utilisez l'image Node.js officielle comme point de départ
FROM node:20.10.0

# Définissez le répertoire de travail dans lequel seront copiés les fichiers
WORKDIR /Users/val/Documents/dev_backup/projetfeudecamp-2/strapi

# Copiez le package.json et le yarn.lock pour installer les dépendances
COPY package*.json ./

# Installez les dépendances
RUN yarn install

# Copiez le reste des fichiers de l'application
COPY . .

# Exposez le port sur lequel Strapi fonctionne par défaut
EXPOSE 1337

# Commande de démarrage personnalisée
CMD ["yarn develop"]
