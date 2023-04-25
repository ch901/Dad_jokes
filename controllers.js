const axios = require('axios');

const dadJoke = async(req, res) => {

    const options = {
      method: 'GET',
      url: 'https://dad-jokes.p.rapidapi.com/random/joke',
      headers: {
        'content-type': 'application/octet-stream',
        'X-RapidAPI-Key': process.env.API_KEY ,
        'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
      }
    };
    
    try {
        const response = await axios.request(options);
        res.json(response.data);
    } catch (error) {
      res.json({ error: error.data.message});
    }
}
module.exports = {
    dadJoke
}