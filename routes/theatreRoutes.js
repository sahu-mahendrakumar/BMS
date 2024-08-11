const router = require('express').Router();
const Theatre = require('../models/theatreModel');

router.post('/add-theatre', async(req, res)=> {
    try{
        const newTheatre = new Theatre(req.body);
        await newTheatre.save();
        res.send({
            sucess:true,
            message: "New theatre has been added!!"
        })
    }catch(err){
        res.send({
            sucess:false,
            message: err.message
        })
    }
});

router.get('/get-all-theatres', async(req, res)=> {
    try{
        const allTheatres = await Theatre.find().populate('owner');
        res.send({
            sucess: true,
            message: "all theatres data!",
            data: allTheatres
        })
    }catch(err){
        res.send({
            sucess: false,
            message: err.message
        })
    }
})
router.get('/get-all-theatres-by-owner', async(req, res)=> {
    try{
        const allTheatres = await Theatre.find({owner:req.body.owner}).populate('owner');
        res.send({
            sucess: true,
            message: "all theatres data!",
            data: allTheatres
        })
    }catch(err){
        res.send({
            sucess: false,
            message: err.message
        })
    }
})

router.put('/delete-theatre', async (req, res)=>{
    try{
        await Theatre.findByIdAndDelete(req.body.theatreId);
        res.send({
            sucess: true,
            message: 'The theatre has been deleted!'
        })
    }catch(err){
        res.send({
            sucess: false,
            message: err.message
        })
    }
});

router.put('/update-theatre', async(req, res)=>{
    try{
        await Theatre.findByIdAndUpdate(req.body.theatreId, req.body);
        res.send({
            sucess: true,
            message: 'Theatre has been udpated!'
        })
    }catch(err){
        res.send({
            sucess: false,
            message: err.message
        })

    }
})

module.exports = router;
