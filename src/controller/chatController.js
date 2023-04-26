const express = require('express');
require("dotenv").config();
const renderView = require('../models/database_function.js');
const {User_db} = require('../models/users_db.js');

//controller render pages 
// bộ điều khiển kết xuất trang
class chatController {
     //render chat page ...
    // kết xuất trang chat và các trang khác ...
    chat = async (req,res, next)=>{

        console.log(req.query);
        renderView.render_database(User_db ,req, res , next, 'chat.cl7');
        //res.render('./chat.cl7',{username : req.body.username, room : req.body.room});
    }

    postChat = async (req,res, next)=>{

        const userInput_username = req.body.username;
        req.query = userInput_username;
        console.log(req.query);
        if (userInput_username.indexOf('  ') !== -1){
            return res.status(400).send('Vui lòng nhập tên người dùng.');
        }
        else if(userInput_username === ' '){
            return res.status(400).send('Vui lòng nhập tên người dùng.');
        }
        else {
    
            res.render('chat.cl7');
        }
    }
    show = async (req,res, next)=>{
       
        return res.send(`Chat detail <h2>${req.params.slug}</h2>`);
    }
}

module.exports = {
    chatPage : new chatController,
}

