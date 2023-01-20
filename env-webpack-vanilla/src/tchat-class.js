const Tchat = class Tchat {
  renderHeader() {
    return `
      <header>
        <nav class="navbar navbar-dark bg-dark">
          <div class="container-fluid">
            <span class="navbar-brand mb-0 h1">
            <span class="text-danger">
              <strong>God</strong>
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

  botsAnswer(bots, message, conversation) {
    bots.forEach((bot) => {
      bot.answer(message, this.updateBotAnswer, conversation, bots, this);
    });
  }

  updateBotAnswer(conversation, texte, nom, bots, chat) {
    const date = new Date(Date.now());
    conversation.addMessage({
      text: texte,
      name: nom,
      date: `${date.getHours()}:${date.getMinutes()}`
    });
    bots.forEach((bot) => {
      bot.setNbMessage(conversation);
    });
    chat.run(bots, conversation);
  }

  sendMessage(textBox, conversation, bots) {
    const date = new Date(Date.now());
    conversation.addMessage({
      text: textBox.value, name: 'Me', date: `${date.getHours()}:${date.getMinutes()}`
    });
    this.botsAnswer(bots, textBox.value, conversation);
    this.run(bots, conversation);
  }

  renderChat(bots, messages) {
    let display = '';
    messages.forEach((message) => {
        display += this.renderMessage(bots.find((bot) => bot.name === message.name), message);
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

  run(bots, conversation) {
    document.body.innerHTML = this.render(bots, conversation.getConversation());
    const button = document.getElementById('senderButton');
    const textBox = document.getElementById('senderText');
    button.addEventListener('click', () => this.sendMessage(textBox, conversation, bots));
    textBox.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        this.sendMessage(textBox, conversation, bots);
      }
    });
    window.scrollTo(0, document.body.scrollHeight);
  }

};

export default Tchat;