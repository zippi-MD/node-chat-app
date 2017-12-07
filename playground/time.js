const moment = require('moment');

const someTimestamp = moment.value();
const createdAt = 1234000000000;
const date = moment(createdAt);

console.log(date.format('YYYY h:mm a'));