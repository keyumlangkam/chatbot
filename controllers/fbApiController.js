exports.verifyConnection = async(req,res,next)=> {
  if(req.query['hub.verify_token'] === process.env.VERIFY_TOKEN){
    res.status(200).send(req.query['hub.challenge'])
   } else {
    res.json('token not match')
  }
}