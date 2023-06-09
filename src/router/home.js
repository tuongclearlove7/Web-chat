const express = require('express');
const {homePage} = require('../controller/homeController');
const {middleware} = require('../middleware/middleware');
let router = express.Router();
//route path home page : tuyến đường trang home và các trang khác cùng tuyến đường với home
router.get('/shop',homePage.shop);

router.get('/contact', homePage.contact);
router.get('/message', homePage.message);
router.get('/create', middleware.middlewareCreate, homePage.create);

router.get('/login', homePage.login);
router.get('/account', homePage.account);
router.get('/:slug', homePage.show);
router.get('/', homePage.index);

router.post('/', homePage.postHome);
router.post('/contact', homePage.postcontact);
router.post('/message', homePage.postmessage);
router.post('/store', homePage.postStore);
router.post('/account', homePage.postLogin);

module.exports = router;
















