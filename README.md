## Procédure d'installation de l'API sur un poste local

1. Copier le .env.example, en faire un .env à la racide du projet. Changer la variable "MONGODB" pour le string de connection de MongoDB sur le poste local.
2. Noter que l'exemple "mongodb://localhost:27017/devweb3" termine par devweb3 pour spécifier quelle BD utiliser.
3. Spécifier également le host, le port.

## Procédure de création de la base de données

1. Créer une BD sur MongoDB avec le même nom de BD qui termine l'URL de connection.
2. Y créer les tables Aquariums et Poissons avec les données de bases trouvés sous /Dev/import_bd.

## Script pour lancer l'API :

Lancer le projet avec "npm run dev"

## URL de l'api publiée :

https://aquarium-api-anhfabd8c2f8a6b9.canadacentral-01.azurewebsites.net

## Documentation de l'api :

URL_API/api/docs
https://aquarium-api-anhfabd8c2f8a6b9.canadacentral-01.azurewebsites.net/api/docs/
