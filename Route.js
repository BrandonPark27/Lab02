const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("Welcome to the router");
});

router.get("/Name",(req,res)=>{
    res.send("Brandon Park");
});

router.get("/Greetings",(req,res)=>{
    res.send("Brandon Park - n01564094");
});

router.get("/Add/:x/:y",(req,res) =>{ 

    if (isNaN(parseFloat(req.params.x)) || isNaN(parseFloat(req.params.y))) {
        return res.send("Invalid Integer");
    }
    
else{
    res.send(JSON.stringify(parseFloat(req.params.x) + parseFloat(req.params.y)));}
});

router.get("/Calculate/:x/:operator/:y", (req, res) => {
    const a = parseFloat(req.params.x);
    const b = parseFloat(req.params.y);
    const operation = req.params.operator;

    if (isNaN(a) || isNaN(b)) {
        return res.send("Invalid Integer");
    }

    let result;
    if (operation === "+") {
        result = a + b;
    } else if (operation === '-') {
        result = a - b;
    } else if (operation === '*') {
        result = a * b;
    } else if (operation === '`') {
        result = a / b;
    } else if (operation === '**') {
        result = a ** b;
    } else {
        return res.send("+ for Addition, - for Subtraction, * for Multiplication, ` for Division, and ** for to the power of")
    }

    res.send(`${result}`);
});

module.exports = router;
