import { add } from './mathOperations';

const body = document.querySelector('body');

body.textContent = `2 + 3 = ${add(2, 3)}`;
