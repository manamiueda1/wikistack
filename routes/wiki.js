const express = require('express');
const router = express.Router()

const models = require('../models');

router.get('/', async(req, res, next)=>{
    try{
        res.send('got to GET /wiki/')
    } catch (err){
       console.log(err)
    }
})

router.post('/', async(req, res, next)=>{
    try{
        res.send('got to POST /wiki/')
    } catch (err){
       console.log(err)
    }
})

router.get('/add', async(req, res, next)=>{
    try{
        res.send('got to GET /wiki/add')
    } catch (err){
       console.log(err)
    }
})

module.exports = router;