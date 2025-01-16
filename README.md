# Projet de fin de module NoSQL

# Question: Quelles sont les informations sensibles à ne jamais commiter ?

Les informations sensibles incluent les identifiants, mots de passe, clés API, URL de bases de données, et tout secret lié à la sécurité ou à la configuration.

# Question: Pourquoi utiliser des variables d'environnement ?

Les variables d'environnement permettent de gérer les configurations sensibles et spécifiques à chaque environnement de manière sécurisée et flexible.

# Question: Pourquoi est-il important de valider les variables d'environnement au démarrage ?

Fiabilité,Détection précoce,Sécurité,Facilité de débogage

# Question: Que se passe-t-il si une variable requise est manquante ?

Si une variable requise est absente et qu'elle n'est pas validée, l'application peut échouer de manière imprévisible

# Question : Pourquoi créer un module séparé pour les connexions aux bases de données ?

Créer un module séparé pour les connexions aux bases de données offre plusieurs avantages : Réutilisabilité,Séparation des responsabilités,Gestion centralisée des connexions,Gestion des erreurs

# Question : Comment gérer proprement la fermeture des connexions ?

MongoDB Utilisez mongoClient.close() pour fermer la connexion et Redis Utilisez redisClient.quit() pour fermer proprement la connexion Redis.

### Je vous conseille de procéder étape par étape :

1. Commencez par lire et comprendre la structure du projet
2. Répondez aux questions des commentaires dans le README
3. Implémentez progressivement les TODOs
4. Testez chaque fonctionnalité au fur et à mesure
5. Documentez vos choix et vos réflexions en ajoutant des copies d'écrans à votre fichier README.md

#### Bon courage
