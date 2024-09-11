Une fois que Jenkins est installé et démarré une première fois avec compte admin/admin123 et plugins installé, et que l'on s'est connecté à la console Jenkins (http://localhost:8080),
----
Configurer le Tools "maven_3.9.9" avec path=/usr/share/apache-maven-3.9.9
via le menu "administrer Jenkins" / installation de maven (ajout mais pas auto-install si déjàa installé)
----
1) new job/item (de type freeStyle) nom=appliJavaDemo
2) config git : RepositoryURL=https://github.com/didier-tp/devOpsSeptembre2024.git ou autre
                branch=main ou master

3) config "ce qui déclenche le build"
   - scrutation de l'outil de gestion de version , et planning valant */1 8-20 * * 1-5
4) Etape de build , "invoquer des cibles maven de haut niveau"
    version maven :   "maven_3.9.9"
    cible maven: clean package
    éventuelle config avancée (si nécessaire) : tp/appliJava/demo/pom.xml
-----------
lancer le build en direct et vérifier "sortie console"
-----------
modifier le code de l'appli springBoot "demo" , effectuer un commit/push
puis attendre un déclenchement automatique 
