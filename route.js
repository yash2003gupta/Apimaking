const express = require('express');
const router = express.Router();

router.post('/bfhl', (req, res) => {
    const { data } = req.body;
    // Custom logic based on provided requirements
    const evenNumbers = data.filter(num => parseInt(num) % 2 === 0 && !isNaN(num));
    const oddNumbers = data.filter(num => parseInt(num) % 2 !== 0 && !isNaN(num));
    const uppercaseAlphabets = data.filter(char => /[a-zA-Z]/.test(char)).map(char => char.toUpperCase());

    const response = {
        is_success: true,
        user_id: "replit_ai_28092021",
        email: "replit_ai@example.com",
        roll_number: "20210928",
        odd_numbers: oddNumbers,
        even_numbers: evenNumbers,
        alphabets: uppercaseAlphabets
    };

    res.json(response);
});

module.exports = router;
