# MinifyLink
MinifyLink est un raccourcisseur d'URL développé avec **React** et **Firebase** avec le bundler **Vite**.

## Installation
Pour installer le projet en local exécutez la commande suivante :
```shell
npm install
```

Ensuite, créez un fichier `.env` à la racine du projet et renseignez les données nécessaires en suivant le modèle présent dans le fichier `.env.example`.

## HotReloading
Pour développer le projet tout en ayant le **HotReloading** exécutez la commande suivante :
```shell
npm run dev
```

## Déploiement en version de production
Pour déployer l'application en production, il faut compiler avec la commande suivante :
```shell
npm run build
```

## Utilisation de Git
Le projet utilise **Git** pour gérer l'historique de version.  

Pour assurer une bonne lecture, vous devez utiliser le package `gitmoji-cli` pour commit vos modifications.

### Utilisation de `gitmoji`
Pour utiliser `gitmoji` vous devez installer un hook sur le projet. Pour ce faire, tapez la commande suivante dans votre terminal :
```shell
gitmoji -i
```

Une fois le hook installé, vous pouvez utiliser git de façon standard, `gitmoji` se chargera d'ouvrir la CLI dès lors que vous effectuerez un commit.

### Syntaxe des commits
Les différents commits doivent respecter une syntaxe précise :
```txt
[EMOJI] #[NUMÉRO DE CARTE TRELLO] - Titre du commit
```

Les commits doivent être créés après chaque modification apportée au projet suivant le numéro de carte Trello.