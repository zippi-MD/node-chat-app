const expect = require('expect');

const {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        let from = 'Zippi';
        let text = 'Kiubas, como estan';
        let date = new Date().getTime();
        let generatedMessage = generateMessage(from, text);

        expect(generatedMessage.from).toBe(from);
        expect(generatedMessage.text).toBe(text);
        expect(generatedMessage.createdAt).toBeGreaterThan(date);


    });
});