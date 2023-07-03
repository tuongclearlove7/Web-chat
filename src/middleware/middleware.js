const express = require('express');

//controller render pages 
// bộ điều khiển kết xuất trang
/** Middleware trong framework là một 
phần mềm trung gian được sử dụng để xử lý các 
yêu cầu và phản hồi giữa các thành 
phần trong một ứng dụng web hoặc framework.
**/
class middleware {
   
    middleware1 = async (req, res, next)=>{
        if(['tuong', 'thao'].includes(req.query.user)){
            req.user2 = 'ThaoRose9';
            return next();
        }
        res.status(403).json({
            message:'Access denied'
        });
    }
    middleware2 = async (req, res, next)=>{
        res.status(403).json({
            user1:'TuongClearlove7',
            user2: req.user2,
        });
    }

    middlewareCreate = async (req, res, next)=> {
        if(req.query.join === 'admin'){
            return next();
        } 
        res.status(404).json({message:'Unable to access!'});
    }

}

module.exports = {
    middleware : new middleware,
}