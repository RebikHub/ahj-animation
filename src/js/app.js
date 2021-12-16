import CallbackChat from './callbackChat';
import Collapse from './collapse';
import Liker from './liker';

console.log('app started');

const coll = new Collapse();
const call = new CallbackChat();
const lik = new Liker();

coll.events();
call.events();
lik.events();
