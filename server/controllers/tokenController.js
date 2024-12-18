require('dotenv').config();

const axios = require('axios');

const getTokenBalance = async (req, res) => {
  try {
    const { address, tokenContract } = req.body;
    const response = await axios.get(`https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=${tokenContract}&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=${process.env.ETHERSCAN_API_KEY}`);
    const balance = response.data.result.reduce((acc, curr) => acc + parseInt(curr.value), 0);
    res.json({ balance: balance });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao consultar saldo' });
  }
};

module.exports = { getTokenBalance };