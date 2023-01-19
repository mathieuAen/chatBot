import './index.scss';

import Tchat from './tchat-class';
import Bot from './bot-class';

const tchat = new Tchat();
const bots = [
    new Bot('Meteo', 'https://avatarfiles.alphacoders.com/149/149041.jpg'),
    new Bot('Sport', 'https://avatarfiles.alphacoders.com/149/149041.jpg'),
    new Bot('Cuisine', 'https://avatarfiles.alphacoders.com/149/149041.jpg'),
    new Bot('Me', 'https://avatarfiles.alphacoders.com/149/149041.jpg')
];
// const messages = [
//     new Message('hello!', bots[0].name, '10/12/2000'),
//     new Message('hello!!!!!!!', bots[1].name, '10/12/1200'),
//     new Message('hello!', bots[0].name, '10/12/1200'),
//     new Message('wesh!', 'Me', '10/122222/1200')
// ];
tchat.run(bots);