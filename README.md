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

# Question: Pourquoi séparer les routes dans différents fichiers ?

Séparer les routes dans différents fichiers permet de maintenir un code plus lisible, modulaire et évolutif, en facilitant l'ajout de nouvelles fonctionnalités et la gestion de grandes applications avec plusieurs types de ressources.

# Question : Comment organiser les routes de manière cohérente ?

Les routes doivent être organisées par ressource ou fonctionnalité, avec des fichiers dédiés pour chaque entité (par exemple, courses.js, users.js), en suivant une structure logique pour faciliter la gestion des demandes HTTP et leur évolution.

# Question: Quelle est la différence entre un contrôleur et une route ?

Un contrôleur contient la logique de gestion des requêtes, tandis qu'une route définit l'URL et la méthode HTTP qui déclenchent l'exécution de cette logique

# Question : Pourquoi séparer la logique métier des routes ?

Séparer la logique métier des routes permet de rendre l'application plus modulaire, réutilisable, testable et maintenable

# Question : Comment gérer efficacement le cache avec Redis ?

# Question: Quelles sont les bonnes pratiques pour les clés Redis ?

# Question: Pourquoi créer des services séparés ?

# Question: Comment organiser le point d'entrée de l'application ?

# Question: Quelle est la meilleure façon de gérer le démarrage de l'application ?

# Question: Quelles sont les informations sensibles à ne jamais commiter ?

# Question: Pourquoi utiliser des variables d'environnement ?
