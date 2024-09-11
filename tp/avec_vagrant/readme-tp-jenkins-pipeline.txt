Une fois que Jenkins est installé et démarré une première fois avec compte admin/admin123 et plugins installé, et que l'on s'est connecté à la console Jenkins (http://localhost:8080),
----
Configurer le Tools "maven_3.9.9" avec path=/usr/share/apache-maven-3.9.9
via le menu "administrer Jenkins" / installation de maven (ajout mais pas auto-install si déjàa installé)
----
1) new job/item (de type pipeline) nom=javaPipeline
2) config essentielle : 
ajuster le fichier temporaire pipeline.txt (à idéalement stocker quelquepart dans git)
copier/coller le contenu de pipeline.txt dans la partie pipeline .

3) config "ce qui déclenche le build"
   - scrutation de l'outil de gestion de version , et planning valant */1 8-20 * * 1-5
-----------
lancer le build en direct et vérifier "sortie console"
-----------
modifier le code de l'appli springBoot "demo" , effectuer un commit/push
puis attendre un déclenchement automatique 
