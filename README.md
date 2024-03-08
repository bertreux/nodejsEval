# Guide d'installation

   Suiver ces étapes pour l'initialisation de ce projet nodejs.



## Prérequis

   - node OU docker

## Docker (si node locale ne pas faire)

1**Lancer les images :**

   ```
   docker compose up -d
   ```

2**Créer la bdd :**

   ```
   docker compose exec -ti db bash
   ```

   lancer le script de création de base de données (user = root et password = root)

   ```
   mysql -u root -p < /app/jeux_olympiques.sql
   ```

## Installation

1**Installer les dépendances :**

   ```
   npm install
   ```

2**Configure `.env`:**

   Créer le fichier `.env` a partir de .env.sample et assurer vous de bien configurer le `.env`.

3**Demarrer le serveur Nodejs:**

   ```
   npm run dev
   ```

   Cette commande va lancer le serveur sur le lien `http://127.0.0.1:<port du .env>` dans votre navigateur.
   Si sous docker il faut lancer cette commande dans le conteneur node, pour ce connecter :

   ```
   docker compose exec -ti node bash
   ```