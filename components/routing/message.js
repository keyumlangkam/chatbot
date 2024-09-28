import quickReplyMessage from '../routing/quickReplyMessage'
import quickReply from './quickReply';
import q1 from '../data/q1';


 async function message(event){
  const senderID = event.sender.id;
  const pageID = event.recipient.id;
  const statement = event.message.text 
  
  if(statement === 'start game'){ 
    await quickReply(senderID,pageID,q1);  
  }
  if(event.message.quick_reply){
    await quickReplyMessage(event)
  }
}

module.exports = message;