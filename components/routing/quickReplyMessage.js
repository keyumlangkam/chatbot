const q1 = require('../data/q1');
const q2 = require('../data/q2');
const q3 = require('../data/q3');
const q4 = require('../data/q4');
const q5 = require('../data/q5');
const getDiscount = require('./getdiscount')

const quickReply = require('./quickReply');
const sendermessage = require('./sendermessage');
const quickReply2 = require('./quickReply2');
 
async function quickReplyMessage(event){
  
  const quickReplyPayload = event.message.quick_reply.payload
  const correctReply = 'That is correct'
  const incorrectReply = 'incorrect answer try again';
  const senderID = event.sender.id;
  const pageID = event.recipient.id;
  

  if(quickReplyPayload === 'correct ans for q1'){
  await sendermessage(senderID, {text: correctReply},pageID);
  await quickReply(senderID,pageID,q2);
}
if(quickReplyPayload === 'correct ans for q2'){
  await sendermessage(senderID, {text: correctReply},pageID);
  await quickReply(senderID,pageID,q3);
}
if(quickReplyPayload === 'correct ans for q3'){
  await sendermessage(senderID, {text: correctReply},pageID);
  await quickReply(senderID,pageID,q4);
}
if(quickReplyPayload === 'correct ans for q4'){
  await sendermessage(senderID, {text: correctReply},pageID);
  await quickReply(senderID,pageID,q5);
}
if(quickReplyPayload === 'correct ans for q5'){
  const d = await getDiscount()
  const congrats = `hey you finished the game, your discount code is ${d} `
  await sendermessage(senderID, {text: congrats},pageID);
}
if(quickReplyPayload === 'wrong ans for q1'){
  await sendermessage(senderID, {text: incorrectReply},pageID);
  await quickReply2(senderID,pageID,q1);
}
if(quickReplyPayload === 'wrong ans for q2'){
  await sendermessage(senderID, {text: incorrectReply},pageID);
  await quickReply2(senderID,pageID,q2);
}
if(quickReplyPayload === 'wrong ans for q3'){
  await sendermessage(senderID, {text: incorrectReply},pageID);
  await quickReply2(senderID,pageID,q3);
}
if(quickReplyPayload === 'wrong ans for q4'){
  await sendermessage(senderID, {text: incorrectReply},pageID);
  await quickReply2(senderID,pageID,q4);
}
if(quickReplyPayload === 'wrong ans for q5'){
  await sendermessage(senderID, {text: incorrectReply},pageID);
  await quickReply2(senderID,pageID,q5);
}

}

module.exports = quickReplyMessage