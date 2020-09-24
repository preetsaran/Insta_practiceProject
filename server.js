const express = require('express');
const app = express();
const userRouter = require('./router/userRouter');
const postRouter = require('./router/postRouter');

app.listen(4000, () => {
    console.log("server is listening");
})

app.use(express.json());


app.use('/api/users', userRouter);
app.use('/api/posts', postRouter);




// NOTES

//What is Re-Routing or Routing ?
// We can split our application into multiple sub routes
// basically all requests from client firstly visit our app and then accoding to type and route gets processed further
//like app.typeofRequest(Route) => ex:- app.get('/api/users);
// so dividing app into sub apps accodingly we can use concept of Routers
// for that we do for ex:- const userRoouter  = new express.Router();   const postRoouter  = new express.Router();  
// so if any request comes for route('/api/users') we should re-route it to userRouter and do same for other routes accodingly


// What is MVC ?
// Model View Controller

// Model =>
// Buisness Logic
// DataBase , Schema ,Validation

