const getDiscount = async() => {
  const response = await fetch('/discount');
  console.log(response)
}