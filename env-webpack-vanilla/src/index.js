import './index.scss';

import Tchat from './tchat-class';
import Bot from './bot-class';
import Conversation from './conversation-class';

const tchat = new Tchat();
const conversation = new Conversation();
const bots = [
    new Bot('Eole', 'https://collections.geneve.ch/mah/sites/default/files/styles/scale_w1148/public/image/2019-11/464507.jpeg?itok=JUnzUYry', ['Bonjour', 'Bien', 'Bye'], conversation),
    new Bot('Janus', 'https://mythologica.fr/rome/pic/janus.jpg', ['Bonjour', 'Qui', 'Nez'], conversation),
    new Bot('Athena', 'data:image/jpeg;base64,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', ['Bonjour', 'Cat', 'Situation'], conversation),
    new Bot('Me', 'data:image/jpeg;base64,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', [], conversation)
];
// const messages = [
//     new Message('hello!', bots[0].name, '10/12/2000'),
//     new Message('hello!!!!!!!', bots[1].name, '10/12/1200'),
//     new Message('hello!', bots[0].name, '10/12/1200'),
//     new Message('wesh!', 'Me', '10/122222/1200')
// ];
tchat.run(bots, conversation);