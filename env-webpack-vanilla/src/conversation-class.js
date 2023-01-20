const Conversation = class Conversation {

  getConversation() {
    if (localStorage.getItem('conversation') == null) {
      localStorage.setItem('conversation', JSON.stringify([]));
    }
    return JSON.parse(localStorage.getItem('conversation'));
  }

  addMessage(message) {
    const conversation = this.getConversation();
    if (message === null || message.text === null) {
      return conversation;
    }
    conversation.push(message);
    localStorage.setItem('conversation', JSON.stringify(conversation));
    return conversation;
  }
};

export default Conversation;