const axios = require('axios')

const getDiscount = async() => {
  const response = await axios.get('https://chatbot-lovq.onrender.com/discount');
  console.log(response,response.data,response.body)
}

module.exports = getDiscount;