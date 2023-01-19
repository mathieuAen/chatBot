import Message from './message-class';

const Conversation = class Conversation {
    constructor() {
        const messages = [
            new Message('hello!', 'Me', '10/12/2000')
        ];
        this.setConversation(messages);
        this.conversation = this.getConversation();
    }

    getConversation() {
        console.log(localStorage.getItem('conversation'));
        return JSON.parse(localStorage.getItem('conversation'));
    }

    setConversation(messages) {
        console.log(JSON.stringify(messages));
        localStorage.setItem('conversation', JSON.stringify(messages));
    }
  };

  export default Conversation;