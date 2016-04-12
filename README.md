# postit

## Hey Ya! This a AngularJs app with bootstrap, node as backend and Postgresql as database!

## What you need?

### NodeJS
### NPM
### Postgres

### To run this application do the steps above:

1. Clone wherever folder you want 

2. Open your terminal and go to your diretory where you cloned this application

3. Download the ZIP file from http://www.enterprisedb.com/products-services-training/pgbindownload

4. Unzip the archive into a directory of your choice (the archive is created such that unzipping it, it will create a directory pgsql with everything else below that) 

5. Run initdb (this can be found in the subdirectory pgsql\bin)

6. initdb -D c:\Users\Arhtur\pgdata -U postgres -W -E UTF8 -A md5
This will create the postgres "data directory" (aka the "cluster") in c:\Users\Arhtur\pgdata. You need to make sure that the user running this command has full read/write privileges on that directory.

-U postgres creates the superuser as postgres, -W will prompt you for the password of the superuser, -E UTF8 will create the database with UTF-8 encoding and -A md5 enables the password authentication.

7. To start Postgres, run:

pg_ctl -D c:\Users\Bruno\pgdata start
this has(!) to be done as the user who ran initdb to avoid any problems with the access to the data directory.

8. To shutdown Postgres, run:

pg_ctl -D c:\Users\Bruno\pgdata stop
psql.exe (the command line client) and pgAdmin3.exe are both located in the bin directory.

9. Run npm install on prompt

10. Open file \server\config\config.json and configure you database connection(user,password,database...).

11. Create a database in your Postgre Database called "postit" or any name you want.

12. Run ..\node_modules\.bin\sequelize db:migrate 

13. Run npm install gulp -g

14. Run gulp

15. Your default browser will be opened at adress, localhost:5000 --if doesn`t work try localhost:3000---

### To add a new user, run the server - gulp - and then run the following in a new terminal window:

curl --data "email=anyEmailYouWant&password=anyPasswordYouWant" http://127.0.0.1:3000/users

### To add a new post it by terminal:

curl --data "title=anyTitleYouWant&text=anTitleYouWant&color=greenOrRedOrBlue&user_id=1" http://127.0.0.1:3000/postits

============================================================================================================

## That`s it!

### Now you should log in with e-mail: bruno@gmail.com and password: 12345 , and then can delete and create new post its