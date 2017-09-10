import numeral from 'numeral';
import 'bugsnag-3.min.js';
import './index.css';

/* eslint-disable no-console */

const courseValue = numeral(1000).format('$0,0.00');

Bugsnag.notify("Syntax err", "Syntax err");

console.log('I would pay ' + courseValue + ' for this awesome course!');

