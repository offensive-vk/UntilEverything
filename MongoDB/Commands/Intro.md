mongo # connects to mongodb://127.0.0.1:27017 by default

mongo --host <host> --port <port> -u <user> -p <pwd> # omit the password if you want a prompt

mongo "mongodb://192.168.1.1:27017"

mongo "mongodb+srv://cluster-name.abcde.mongodb.net/<dbname>" --username <username> # MongoDB 


> show dbs :
db // prints the current database

Switch database :
> use <database_name>

Show collections :
> show collections

Run JavaScript file :
> load("myScript.js")