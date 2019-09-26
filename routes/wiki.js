const express = require('express');
const router = express.Router()
const addPage = require('../views/addPage');
const models = require('../models/index');

router.get('/', async(req, res, next)=>{
    try{
        // res.send('model page', await models.Page.findAll().map())
        res.send('got to GET /wiki/')
    } catch (err){
       console.log(err)
    }
})

router.post('/', async(req, res, next)=>{
    try{
        const name = req.body.name
        const email = req.body.email
        const title = req.body.title

        function getSlug (title){
            let regex = /[^0-9a-zA-Z]/gi
            return title.replace(regex, '_');
        }
        let slug = getSlug(title)
        console.log('slug', slug)

        const page = new models.Page({
            title: req.body.title,
            content: req.body.content,
            slug: slug,
            status: req.body.status
          });
          await page.save();
          res.redirect('/');
        
    } catch (err){
       console.log(err)
    }
})

router.get('/add', async(req, res, next)=>{
    try{
        res.send(addPage())
    } catch (err){
       console.log(err)
    }
})

module.exports = router;