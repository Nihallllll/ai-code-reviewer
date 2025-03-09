Creating a backEnd folder
npm init -y : json-pakage initialization
npm i express
make an src folder : inside which make app.js file which exports module.export=app;
in backend folder make server.js which uses app to listen in port 3000
in pakage.json change main to "server.js" 
then in terminal type npx nodemon

AI integrating :

go to api.google.dev
then go to explore models in google ai studio
then get api key : 

after that 

in src make a .env file and paste that api key in an variable there 
in server.js require('dotenv').config();

