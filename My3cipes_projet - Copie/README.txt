Etapes pour l'installation du site web :

Requirements : 
Il est important que les deux applications ci-dessous soient installés afin que le site puisse fonctionner en local.

Mysql
Node

Mise en place :

Lancer le script SQL all_script sur mysql workbench

Assurez vous que votre base de données soit connectée sur localhost avec "root" comme utilisateur et "1234" comme mot de passe.
Sinon, changez directement ces paramètres dans le fichier /server/app/config/db.cong.js afin qu'ils correspondent à vos identifiants SQL.

Ouvrir le fichier My3cipes_projet dans un IDE.


--- Ouvrir le fichier "server" dans une console et lancer la commande :
	"npm install express sequelize mysql2 cors jsonwebtoken bcryptjs --save" 


--- Ouvrir le fichier "front" dans une console et lancer les commandes
	npm install vue
	npm install vue-router@4
	npm install vuex@4
	npm install vee-validate@4 yup
	npm install axios
	npm install bootstrap@4 jquery popper.js
	npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/vue-fontawesome@prerelease


--- Puis Dans l'invite de commande du server:
	"node server"
--- Puis dans l'invite de commande du front:
	"npm run serve"

--- Cliquer sur le lien obtenu 
 



