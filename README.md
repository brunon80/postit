# postit

## Hey Ya! This a AngularJs app with bootstrap, node as backend and Postgresql as database!

### To run this application do the steps above:

1. Clone wherever folder you want
2. Leave your PostgreSql runing and listen on default port (5432)
3. Open your terminal and go to your diretory where you cloned this application
4. Run npm install
5. Create a database in your Postgre Database called "Postitdbp" and another called "User"
6. Run node_modules/.bin/sequelize db:migrate 
7. Run gulp
8. Your default browser will be opened at adress, localhost:5000 --if doesn`t work try localhost:3000---

### There is no post its and users rigth now coz we did not add no one, to do that follow the steps above:

To add a new user, run the server - gulp - and then run the following in a new terminal window:

curl --data "email=bruno@gmail.com&password=12345" http://127.0.0.1:3000/users

To add a new post it by terminal:

curl --data "title=TitleTest&text=this is the text test&color=green&user_id=1" http://127.0.0.1:3000/postits

============================================================================================================

## That`s it!

### Now you should log in with e-mail: bruno@gmail.com and password: 12345 , and then can delete and create new post its