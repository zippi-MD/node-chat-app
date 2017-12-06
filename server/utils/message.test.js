const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        let from = 'Zippi';
        let text = 'Kiubas, como estan';
        let date = new Date().getTime();
        let generatedMessage = generateMessage(from, text);

        expect(generatedMessage.from).toBe(from);
        expect(generatedMessage.text).toBe(text);
        expect(generatedMessage.createdAt).toBe(date);


    });
});

describe('generateLocationMessage', () => {
   it('Should generate te correct location message', () => {
      let from = 'Zippi';
      let latitude = 1;
      let longitude = 2;
      let date = new Date().getTime();
      let generatedMessage = generateLocationMessage(from, latitude, longitude);

      expect(generatedMessage.from).toBe(from);
      expect(generatedMessage.createdAt).toBe(date);
      expect(generatedMessage.url).toBe(`https://www.google.com/maps?q=${latitude},${longitude}`);
   });
});