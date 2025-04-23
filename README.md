# Projet L'Arche de Zoé - Documentation

## Description du projet
Ce projet consiste en un site e-commerce pour "L'Arche de Zoé", un magasin vendant des disques de musique. Le site permet de visualiser une sélection d'albums et d'afficher leurs détails sur une page produit.

## Fichiers modifiés

### 1. `script.js`
Ce fichier est responsable de l'affichage des albums sur la page d'accueil.

#### Fonctionnalités implémentées :
- Récupération des données depuis l'API `https://637d41d916c1b892ebca9a5a.mockapi.io/api/discs`
- Filtrage des albums pour exclure celui avec l'ID 7 qui possède une image invalide
- Affichage dynamique des albums sur la page d'accueil
- Gestion des erreurs lors de la récupération des données
- Logs de débogage pour faciliter l'identification des problèmes

#### Détails techniques :
- Utilisation de `fetch` pour les requêtes API
- Implémentation de la méthode `filter()` pour exclure l'album problématique
- Génération dynamique du HTML pour chaque album
- Gestion des erreurs d'affichage des images avec `onerror`

### 2. `product.js`
Ce fichier permet d'afficher les détails d'un album spécifique lorsqu'on clique dessus.

#### Fonctionnalités implémentées :
- Récupération de l'ID de l'album à partir de l'URL (paramètre `id`)
- Requête à l'API pour obtenir les détails de l'album correspondant
- Affichage des informations détaillées (nom, artiste, année, prix)
- Gestion de la quantité et de l'ajout au panier
- Gestion des erreurs (album inexistant, données incomplètes)
- Logs de débogage pour faciliter l'identification des problèmes

#### Détails techniques :
- Utilisation de `URLSearchParams` pour analyser les paramètres d'URL
- Manipulation du DOM pour afficher les informations
- Gestion des événements pour le bouton "Ajouter au panier"
- Validation des données avant affichage

## Correction des problèmes potentiels

Plusieurs améliorations ont été apportées pour résoudre les problèmes d'affichage :

1. **Amélioration de la gestion des erreurs** : Messages d'erreur plus détaillés dans la console et sur la page
2. **Vérification des types de données** : Conversion explicite des prix et des quantités
3. **Gestion des images manquantes** : Ajout d'une image par défaut en cas d'échec de chargement
4. **Vérification de l'existence des éléments DOM** : Protection contre les erreurs liées à des éléments manquants
5. **Logs de débogage** : Ajout de messages de log détaillés pour suivre l'exécution du code

### Lien vers le projet : https://enzobeu.github.io/e-commerce/

*Projet réalisé dans le cadre des travaux pratiques R209*
