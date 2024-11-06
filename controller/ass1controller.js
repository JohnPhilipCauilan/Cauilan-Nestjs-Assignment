const express = require('express');
const router = express.Router();


router.get('/prime/:number', (req, res) => {
    const number = parseInt(req.params.number);
    if (isNaN(number) || number <= 1) {
        return res.status(400).json({ error: 'Invalid input. Please provide an integer greater than 1.' });
    }

    const isPrime = (num) => {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };

    const primeStatus = isPrime(number);

    res.json({ isPrime: primeStatus });
});

module.exports = router;  
