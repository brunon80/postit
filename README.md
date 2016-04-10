# postit

## Hey Ya! This a AngularJs app with bootstrap, node as backend and Postgresql as database!

### To run this application do the steps above:

1. Clone wherever folder you want 
2. Open your terminal and go to your diretory where you cloned this application
3. Run your PostgreSql witn command pg_ctl -D "path to where you cloned\Atividade\pgdata" start ->this will run server with this database
4. Run npm install on prompt
5. Open file config/config.json and configure you database connection
6. Create a database in your Postgre Database called "postit"
7. Run node_modules/.bin/sequelize db:migrate 
8. Run gulp
9. Your default browser will be opened at adress, localhost:5000 --if doesn`t work try localhost:3000---

### The default log in is e-mail: bruno@gmail.com and password: 12345, to add more follow the steps above:

To add a new user, run the server - gulp - and then run the following in a new terminal window:

curl --data "email=anyEmailYouWant&password=anyPasswordYouWant" http://127.0.0.1:3000/users

To add a new post it by terminal:

curl --data "title=anyTitleYouWant&text=anTitleYouWant&color=greenOrRedOrBlue&user_id=1" http://127.0.0.1:3000/postits

============================================================================================================

## That`s it!

### Now you should log in with e-mail: bruno@gmail.com and password: 12345 , and then can delete and create new post its