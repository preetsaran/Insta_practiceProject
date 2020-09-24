const userDb = require('../Model/users.json');
const fs = require('fs');
const path = require('path');

async function createUser(req, res)
{
    let user = req.body;
    console.log(user);
    userDb.push(user);

    await fs.writeFile("C:/Users/saran-champakali/Desktop/NEW DEV/InstaGram_App/Model/users.json", JSON.stringify(userDb), () => {});

    res.status(201).json({
        Success: "User Created",
        Data: userDb
    })
 
}

function getUser(req, res) {

    let enroll = req.params.id;

    let user = userDb.filter((user) => {

        return user.Enrollment_Number == enroll;
    })

    res.status(200).json({
        status: user.length == 0 ? "user not found" : "Received get user request from client",
        data: user
    });
}

async function updateUser(req, res){

    let enroll = req.params.id;
    let obj = req.body;

    let idx = 0;

    for (let i = 0; i < userDb.length; i++) {
        if (userDb[i].Enrollment_Number == enroll) {
            idx = i;
        }
    }

    for (let key in obj) {
        userDb[idx][`${key}`] = obj[`${key}`];
    }

    await fs.writeFile(path.join(__dirname, "users.json"), JSON.stringify(userDb), () => {});

    res.status(200).json({
        status: obj.length == 0 ? "data not found" : "Received get user request from client",
        data: userDb
    });
}

async function deleteUser(req, res) {

    let enroll = req.params.id;

    let user = userDb.filter((user) => {

        return user.Enrollment_Number != enroll;
    })


    await fs.writeFile(path.join(__dirname, "users.json"), JSON.stringify(user), () => {});

    res.status(200).json({
        status: user.length == 0 ? "data not found" : "Received get user request from client",
        data: user
    });
}

module.exports.createUser = createUser;
module.exports.getUser = getUser;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;