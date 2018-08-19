const hbs = require('hbs')

hbs.registerHelper('getAnio', () => new Date().getFullYear());
hbs.registerHelper('putSaludo', (text, yo) => `Hola zoquete ${text}, ${yo} es bien chido`);