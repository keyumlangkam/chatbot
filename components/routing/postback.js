const senderAction = require('./senderaction');
const sendermessage = require('./sendermessage');
const getSenderName = require('./getSenderName');


 async function postBack(event){
  const senderID = event.sender.id;
  const pageID = event.recipient.id;
  const payload = event.postback.payload;
  
  if(payload === 'welcome'){
    const data = await getSenderName(senderID)
    let greeeting = `hello ${data.first_name} `
    let message2 = 'Solve the puzzles to get a discount coupon';
    let message3 = 'to start/reset the game type - start game'

      await senderAction(senderID,pageID);
      await sendermessage(senderID, {text: greeeting},pageID)
      await sendermessage(senderID, {text: message2 },pageID)
      await sendermessage(senderID, {text: message3},pageID)
  }
  
}
module.exports = postBack