import {connect} from './helpers/db/connect.js';
import { movis } from './js/module/movis.js';

let mongo = new movis()
console.log(await mongo.getAllMovis());
console.log(await mongo.getAllMovisOfAction());