const subtract = require('./subtract')

test('Properly adds two numbers', () => {
    expect(
        subtract(1, 2)
    ).toBe(-1);
})