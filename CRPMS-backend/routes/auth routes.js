const express = require ('express');

const router = express.router();

const {createAdmin,login,logout} = require ('../controllers/auth_controller');

router.Post('/seed',createAdmin);

router.Post('/logout',logout);

router.Post('/login',login);

module.exports =router;