import { add } from '<our newly published package>';

const body = document.querySelector('body');

body.textContent = `2 + 3 = ${add(2, 3)}`;
