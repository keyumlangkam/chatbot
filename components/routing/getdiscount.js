const getDiscount = async() => {
  const response = await fetch('https://chatbot-lovq.onrender.com/discount');
  console.log(response)
}