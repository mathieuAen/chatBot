import './index.scss';

import Tchat from './tchat-class';
import Bot from './bot-class';
import Conversation from './conversation-class';
import links from './link';

const tchat = new Tchat();
const conversation = new Conversation();
const bots = [
    new Bot('Eole', 'https://collections.geneve.ch/mah/sites/default/files/styles/scale_w1148/public/image/2019-11/464507.jpeg?itok=JUnzUYry', ['Bonjour', 'Bien', 'Bye'], conversation),
    new Bot('Janus', 'https://mythologica.fr/rome/pic/janus.jpg', ['Bonjour', 'Qui', 'Nez'], conversation),
    new Bot('Athena', links[1], ['Bonjour', 'Cat', 'Situation'], conversation),
    new Bot('Me', links[0], ['help'], conversation)
];
tchat.run(bots, conversation);