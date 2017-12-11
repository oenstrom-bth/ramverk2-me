# Black Jack

My Black Jack app is a desktop application that lets you play Black Jack with multiple players simultaneously. You will be able to create an account and login. Once signed in you will be able to join a table and start playing. Only fake money is used in this application and you will start with 1000$. When you run out of money, you can refill your account balance with an other 1000$.

Techniques/frameworks/etc. to be used in the Black Jack app.
* Express.js
* Socket.io
* MongoDB
* Electron
* React


### Realtime

I'm using Socket.io to handle realtime in my Black Jack application. An user will be able to list available rooms (tables) and join one. I will be using Socket.io's rooms for this. An example with some events for this is up on the GitHub repo now.

After an user has joined a room there will be realtime events for pretty much everything. First everyone bets using some bet event, they will however do it one by one so I have to check that the right person is calling the bet event. After the betting there will be events for all the normal stuff you can do in Black Jack, hit, stand, double and more. I will always need to check that it's the right person that makes the event. I don't want people to get around the order if they manage to manipulate the client somehow.

There will be a lot of events and stuff to keep track of, as I want all the players to be updated about what the other players are doing. If I have time I will also add a chat, so players can chat with each other while playing in a room.


### Database

I will be using MongoDB in my application. I might use the Mongoose module, I haven't decided yet. The database will store the user acconts and their money. There will not be much more to save. Unless I get some time over do something extra that requires the use of a database.


### Module

I wanted to make a module for validating JavaScript Objects easily. For example when you get a POST request from a register form, you want to make sure the correct fields are submitted using the right format. So that's why I made the module JOV, JavaScript Object Validator. You use it by defining a schema that the JavaScript object should be validated against. The following example schema ensures the data contains an username field, an email field and a password field:
```
{
    username: new jov.string().required().alphanum().min(3).max(20),
    email: new jov.string().required().email(),
    password: new jov.string().required().min(6)
}
```
It's pretty self explanatory:
* The username is required, only accepts alphanumeric characters, it has a required minimum length of 3 and a maximum of 20 characters.
* The email is required and is only accepted in an email format.
* The password is required and has a minimum required length of 6 characters.

You can check it out over at [GitHub](https://github.com/oenstrom/jov) or [NPM](https://www.npmjs.com/package/jov).


### Server and client
The Black Jack app will consist of two parts, a server and a client. So far I have only started to work on the server.

[Black Jack server](https://github.com/oenstrom/ramverk2-blackjack-server)  
~~[Black Jack client](#)~~
