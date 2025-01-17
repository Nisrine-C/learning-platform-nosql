# Projet de fin de module NoSQL

Il s'agit de l'API backend d'une plateforme d'apprentissage en ligne, construite avec NoSQL. Elle suit une structure de code modulaire et les meilleures pratiques pour le développement de logiciels professionnels.

## Table des matières

- [Installation](#installation)
- [Structure du projet](#project-structure)
- [Choix techniques](#choix-techniques)
- [Reponses aux questions](#reponses-aux-questions)

# Installation

1.Cloner ce dépôt:

```bash
    git clone https://github.com/[votre-compte]/learning-platform-nosql
    cd learning-platform-nosql
```

2.Installer les dépendances:

```bash
    npm install
```

3.Configurer les variables d’environnement:

Créez un fichier .env dans le répertoire racine.
Configurez votre connexion à la base de données et les autres configurations nécessaires conformément au fichier .env.example.

4.Exécutez le projet:

```bash
   npm start
```

# Project Structure

Le projet suit une architecture modulaire avec une séparation claire des préoccupations. Voici un aperçu des répertoires clés :

    - controllers/ : contient la logique de gestion des requêtes HTTP
    - services/ : contient la logique métier, gère le traitement des données et interagit avec la base de données
    - routes/ : définit les routes de l'API et les associe aux contrôleurs
    - config/ : fichiers de configuration, y compris les connexions à la base de données et les paramètres d'environnement

## Fichiers clés :

`server.js` point d'entrée de l'application.

`env.example` exemple de fichier de variable d'environnement pour la configuration de la base de données.

# Choix Techniques

1.Pourquoi ai-je choisi NoSQL pour la base de données ?

NoSQL a été choisi pour son évolutivité et sa flexibilité, ce qui nous permet de gérer facilement différentes structures de données, en particulier pour les ensembles de données en évolution rapide tels que les cours, les étudiants et les inscriptions.

2.Pourquoi ai-je choisi cette structure ?

La structure modulaire assure une séparation claire des préoccupations, ce qui rend l'application plus facile à maintenir et à faire évoluer à mesure que les fonctionnalités se développent. L'architecture MVC offre un moyen robuste d'organiser le code, avec des contrôleurs gérant les requêtes HTTP et des services axés sur la logique métier.

3.Comment fonctionne la gestion des erreurs dans l'application ?

La gestion des erreurs est centralisée dans les services, où toutes les exceptions sont détectées et les codes d'état et messages HTTP appropriés sont renvoyés. Un middleware d'erreur personnalisé est utilisé pour gérer les erreurs inattendues à l'échelle mondiale.

# Reponses aux Questions

## Question: Quelles sont les informations sensibles à ne jamais commiter ?

Les informations sensibles incluent les identifiants, mots de passe, clés API, URL de bases de données, et tout secret lié à la sécurité ou à la configuration.

## Question: Pourquoi utiliser des variables d'environnement ?

Les variables d'environnement permettent de gérer les configurations sensibles et spécifiques à chaque environnement de manière sécurisée et flexible.

## Question: Pourquoi est-il important de valider les variables d'environnement au démarrage ?

Fiabilité,Détection précoce,Sécurité,Facilité de débogage

## Question: Que se passe-t-il si une variable requise est manquante ?

Si une variable requise est absente et qu'elle n'est pas validée, l'application peut échouer de manière imprévisible

## Question : Pourquoi créer un module séparé pour les connexions aux bases de données ?

Créer un module séparé pour les connexions aux bases de données offre plusieurs avantages : Réutilisabilité,Séparation des responsabilités,Gestion centralisée des connexions,Gestion des erreurs

## Question : Comment gérer proprement la fermeture des connexions ?

MongoDB Utilisez mongoClient.close() pour fermer la connexion et Redis Utilisez redisClient.quit() pour fermer proprement la connexion Redis.

## Question: Pourquoi séparer les routes dans différents fichiers ?

Séparer les routes dans différents fichiers permet de maintenir un code plus lisible, modulaire et évolutif, en facilitant l'ajout de nouvelles fonctionnalités et la gestion de grandes applications avec plusieurs types de ressources.

## Question : Comment organiser les routes de manière cohérente ?

Les routes doivent être organisées par ressource ou fonctionnalité, avec des fichiers dédiés pour chaque entité (par exemple, courses.js, users.js), en suivant une structure logique pour faciliter la gestion des demandes HTTP et leur évolution.

## Question: Quelle est la différence entre un contrôleur et une route ?

Un contrôleur contient la logique de gestion des requêtes, tandis qu'une route définit l'URL et la méthode HTTP qui déclenchent l'exécution de cette logique

## Question : Pourquoi séparer la logique métier des routes ?

Séparer la logique métier des routes permet de rendre l'application plus modulaire, réutilisable, testable et maintenable

## Comment gérer efficacement le cache avec Redis ?

Utiliser des TTL et invalider le cache lors de changements de données.

## Quelles sont les bonnes pratiques pour les clés Redis ?

Utiliser des clés uniques, descriptives, et définir un TTL.

## Pourquoi créer des services séparés ?

Pour rendre le code modulaire, réutilisable et testable.

## Comment organiser le point d'entrée de l'application ?

Initialiser les configurations, connexions et démarrer le serveur.

## Quelle est la meilleure façon de gérer le démarrage de l'application ?

Utiliser une fonction asynchrone pour initialiser et démarrer le serveur.

## Quelles sont les informations sensibles à ne jamais commiter ?

Mots de passe, clés d'API et informations de connexion.

## Pourquoi utiliser des variables d'environnement ?

Pour séparer la configuration du code et sécuriser les données sensibles.
