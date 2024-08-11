const router = require('express').Router();
const Show = require('../models/showModel');

router.post('/add-show', async (req, res) =>{
    try{
        const newShow = new Show(req.body);
        await newShow.save();
        res.send({
            sucess: true,
            message: 'New show has been added!'
        });

    }catch(err){
        res.send({
            status: false,
            message: err.message
        })
    }
});

module.exports = router;