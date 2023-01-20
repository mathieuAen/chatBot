const Bot = class Bot {
  constructor(name, image, availableAction, conversation) {
    this.name = name;
    this.image = image;
    this.setNbMessage(conversation);
    this.availableAction = availableAction;
  }

  setNbMessage(conversation) {
    this.nbMessage = conversation.getConversation()
    .filter((message) => message.name === this.name).length;
  }

  answer(message, callback, conversation, bots, chat) {
    if (!this.availableAction.includes(message)) {
      return null;
    }
    return this[message.toLowerCase()](callback, conversation, bots, chat);
  }

  help(callback, conversation, bots, chat) {
    callback(conversation, 'Ah oui c\'est vrai les sujets de conversation apprécié des dieux sont: "Bonjour", "Bye", "Situation", "Nez", "Qui", "Cat", "Bien"', this.name, bots, chat);
  }

  bonjour(callback, conversation, bots, chat) {
    callback(conversation, 'Bonjour', this.name, bots, chat);
  }

  bye(callback, conversation, bots, chat) {
    callback(conversation, 'bye', this.name, bots, chat);
  }

  situation(callback, conversation, bots, chat) {
    callback(conversation, 'Vous savez, moi je ne crois pas qu’il y ait de bonne ou de mauvaise situation. Moi, si je devais résumer ma vie aujourd’hui avec vous, je dirais que c’est d’abord des rencontres. Des gens qui m’ont tendu la main, peut-être à un moment où je ne pouvais pas, où j’étais seul chez moi. Et c’est assez curieux de se dire que les hasards, les rencontres forgent une destinée... Parce que quand on a le goût de la chose, quand on a le goût de la chose bien faite, le beau geste, parfois on ne trouve pas l’interlocuteur en face je dirais, le miroir qui vous aide à avancer. Alors ça n’est pas mon cas, comme je disais là, puisque moi au contraire, j’ai pu ; et je dis merci à la vie, je lui dis merci, je chante la vie, je danse la vie... je ne suis qu’amour ! Et finalement, quand des gens me disent « Mais comment fais-tu pour avoir cette humanité ? », je leur réponds très simplement que c’est ce goût de l’amour, ce goût donc qui m’a poussé aujourd’hui à entreprendre une construction mécanique... mais demain qui sait ? Peut-être simplement à me mettre au service de la communauté, à faire le don, le don de soi.', this.name, bots, chat);
  }

  nez(callback, conversation, bots, chat) {
    callback(conversation, `Ah ! non ! c’est un peu court, jeune homme !
    On pouvait dire… Oh ! Dieu ! … bien des choses en somme…
    En variant le ton, – par exemple, tenez :
    Agressif : « Moi, monsieur, si j’avais un tel nez,
    Il faudrait sur-le-champ que je me l’amputasse ! »
    Amical : « Mais il doit tremper dans votre tasse
    Pour boire, faites-vous fabriquer un hanap ! »
    Descriptif : « C’est un roc ! … c’est un pic ! … c’est un cap !
    Que dis-je, c’est un cap ? … C’est une péninsule ! »
    Curieux : « De quoi sert cette oblongue capsule ?
    D’écritoire, monsieur, ou de boîte à ciseaux ? »
    Gracieux : « Aimez-vous à ce point les oiseaux
    Que paternellement vous vous préoccupâtes
    De tendre ce perchoir à leurs petites pattes ? »
    Truculent : « Ça, monsieur, lorsque vous pétunez,
    La vapeur du tabac vous sort-elle du nez
    Sans qu’un voisin ne crie au feu de cheminée ? »
    Prévenant : « Gardez-vous, votre tête entraînée
    Par ce poids, de tomber en avant sur le sol ! »
    Tendre : « Faites-lui faire un petit parasol
    De peur que sa couleur au soleil ne se fane ! »
    Pédant : « L’animal seul, monsieur, qu’Aristophane
    Appelle Hippocampéléphantocamélos
    Dut avoir sous le front tant de chair sur tant d’os ! »
    Cavalier : « Quoi, l’ami, ce croc est à la mode ?
    Pour pendre son chapeau, c’est vraiment très commode ! »
    Emphatique : « Aucun vent ne peut, nez magistral,
    T’enrhumer tout entier, excepté le mistral ! »
    Dramatique : « C’est la Mer Rouge quand il saigne ! »
    Admiratif : « Pour un parfumeur, quelle enseigne ! »
    Lyrique : « Est-ce une conque, êtes-vous un triton ? »
    Naïf : « Ce monument, quand le visite-t-on ? »
    Respectueux : « Souffrez, monsieur, qu’on vous salue,
    C’est là ce qui s’appelle avoir pignon sur rue ! »
    Campagnard : « Hé, ardé ! C’est-y un nez ? Nanain !
    C’est queuqu’navet géant ou ben queuqu’melon nain ! »
    Militaire : « Pointez contre cavalerie ! »
    Pratique : « Voulez-vous le mettre en loterie ?
    Assurément, monsieur, ce sera le gros lot ! »
    Enfin parodiant Pyrame en un sanglot :
    « Le voilà donc ce nez qui des traits de son maître
    A détruit l’harmonie ! Il en rougit, le traître ! »
    – Voilà ce qu’à peu près, mon cher, vous m’auriez dit
    Si vous aviez un peu de lettres et d’esprit
    Mais d’esprit, ô le plus lamentable des êtres,
    Vous n’en eûtes jamais un atome, et de lettres
    Vous n’avez que les trois qui forment le mot : sot !
    Eussiez-vous eu, d’ailleurs, l’invention qu’il faut
    Pour pouvoir là, devant ces nobles galeries,
    me servir toutes ces folles plaisanteries,
    Que vous n’en eussiez pas articulé le quart
    De la moitié du commencement d’une, car
    Je me les sers moi-même, avec assez de verve,
    Mais je ne permets pas qu’un autre me les serve.`, this.name, bots, chat);
  }

  async qui(callback, conversation, bots, chat) {
    await fetch('https://random-data-api.com/api/v2/users')
      .then((response) => response.json())
      .then((data) => {
        callback(conversation, data.first_name, this.name, bots, chat);
      });
  }

  async cat(callback, conversation, bots, chat) {
    await fetch('https://cat-fact.herokuapp.com/facts')
      .then((response) => response.json())
      .then((data) => {
        callback(
          conversation,
          data[Math.floor(Math.random() * data.length)].text,
          this.name,
          bots,
          chat
        );
      });
  }

  async bien(callback, conversation, bots, chat) {
    await fetch('https://yesno.wtf/api')
      .then((response) => response.json())
      .then((data) => {
        callback(
          conversation,
          data.answer,
          this.name,
          bots,
          chat
        );
      });
  }

};

export default Bot;