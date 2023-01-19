import Message from './message-class';
import Conversation from './conversation-classe';

const Tchat = class Tchat {
  renderHeader() {
    return `
      <header>
        <nav class="navbar navbar-dark bg-dark">
          <div class="container-fluid">
            <span class="navbar-brand mb-0 h1">
            <span class="text-danger">
              <strong>MARVEL</strong>
            </span> / 
            <span class="text-primary">Chatbot</span>
            </span>
          </div>
        </nav>
      </header>
    `;
  }

  renderBots(bots) {
    let display = '';
    bots.forEach((bot) => {
      display += `
        <li class="col-12 mt-2" style="color:white">
            <img width="50" class="rounded-circle border border-white border-2 col-2" src=${bot.image} />
            <strong class="col-10 center">${bot.name}</strong>
            <span class="badge bg-primary rounded-pill center">${bot.nbMessage}</span>
        </li>
        `;
    });
    return display;
  }

  renderListOfBot(bots) {
    return `
    <div class="col-2">
        <h3 style="color:white">Liste des contacts </h2>
        <ul>
            ${this.renderBots(bots)}
        </ul>
    </div>
  
    `;
  }

  renderMessage(bot, message) {
    if (bot.name === 'Me') {
         return this.renderMyMessage(bot, message);
    }
    return `
    <div class="row mt-2">
        <div class="col-6">
            <div class="card text-bg-light">
                <h5 class="card-header">
                <img  width="20%" src=${bot.image} class="rounded-circle img-thumbnail" alt="...">
                ${bot.name}
                </h5>
                <div class="card-body">
                    <h5 class="card-title">${message.date}</h5>
                    <p class="card-text">${message.text}</p>
                </div>
            </div>
        </div>
        <div class="col-6"></div>
    </div>
    `;
  }

  renderMyMessage(me, message) {
    console.log('eeeeeeeeeeeeeee');
    console.log(me.name);
    return `
    <div class="row mt-2">
        <div class="col-6"></div>
        <div class="col-6">
            <div class="card text-bg-light">
                <h5 class="card-header">
                <img  width="20%" src=${me.image} class="rounded-circle img-thumbnail" alt="...">
                ${me.name}
                </h5>
                <div class="card-body">
                    <h5 class="card-title">${message.date}</h5>
                    <p class="card-text">${message.text}</p>
                </div>
            </div>
        </div>
        <div class="col-6"></div>
    </div>
    `;
  }

  renderSender() {
    return `
    <section class="typing mt-3">
        <div class="row">
        <div class="col-12">
            <div class="input-group mb-3">
                <input type="text" class="form-control" id="senderText" placeholder="Message">
                <button class="btn btn-primary" type="button" id="senderButton">Send</button>
            </div>
        </div>
        </div>
    </section>
    `;
  }

  sendMessage(textBox, messages, bots) {
    messages.setConversation(new Message(textBox.value, 'Me', Date.now));
    this.run(bots);
  }

  renderChat(bots, messages) {
    let display = '';
    messages.forEach((message) => {
        display += this.renderMessage(bots.find((bot) => bot.name === message.botName), message);
    });
    return display + this.renderSender();
  }

  render(bots, messages) {
    return `
      <div id="app" class="row">
        ${this.renderHeader()}
        ${this.renderListOfBot(bots)}
        <main class="container-fluid mt-3 col-8" id="chat">
        ${this.renderChat(bots, messages)}
        </main>
      </div>
    `;
  }

  run(bots) {
    const messages = new Conversation();
    console.log(messages);
    document.body.innerHTML = this.render(bots, messages.conversation);
    const button = document.getElementById('senderButton');
    const textBox = document.getElementById('senderText');
    button.addEventListener('click', () => this.sendMessage(textBox, messages, bots));
  }
};

export default Tchat;