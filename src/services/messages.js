const express = require('express');
const moment = require('moment');

//format data users
//ham dinh dang du lieu nguoi dung
function formatData(id, username, text, room, state, countUsers, countMessages, automatic){
   
    return {
        id,
        username,
        text,
        room,
        state,
        countUsers,   
        countMessages,
        automatic,
        time : moment().format('h:mm a')
    };
}

module.exports = {formatData};
























