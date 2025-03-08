`src`-> Inside the source folder all the code for the project is available and can be used

let us look inside the src folder

`config`=> contains all the configuration for the project which includes
        =>Looger it includes the code for logging the logs and saving them in combined.log file
        =>serverConf it includes the configuration for all environment variables and exports them in object

`controllers`=> it contains all the functions which will be used for the buisness logic and in rout section
            =>index.js it imports all the function and then exports them for better understandability

`middlewaress`=>it contains all the middlewares which will be used in the function

`models`=> it includes the schema and model for the database and on which schema our project will be based on

`routes`=>it includes all the routes in which our application or project will be working for

`index.js`=>it is the main file which will be running and our server will also be running in it

`.env`=>it includes all the environment variables we have created and is accessed to server-config file 

`.gitignore`=> it includes all the files and folder which we will not include in github repo

`combined logs`=>it is the log file and includes all the logging of our application
