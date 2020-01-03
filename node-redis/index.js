/*
    Author : Aziz Amerul Faozi
    Desctiption :
        copied form book that i have read
*/

var redis = require("redis");
var client = redis.createClient();
client.set("my_key", "Helllo worl using nodejs and redis");
client.get("my_key", redis.print);
client.quit()