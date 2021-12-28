const express = require("express");
const CurrencyService = require("../services/currency");
const router = express.Router();

router.get('/', async (req, res) => {
    const {from, to, amount} = req.query;
    if(from == undefined || to == undefined || amount == undefined)
        res.json({error: "Enter valid params"})
    try{
        res.json(await CurrencyService.convert({from, to, amount}))
    } catch(e){
        res.json(e);
    }
})

module.exports = router;