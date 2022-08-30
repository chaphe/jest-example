const Stack = require('./stack');

describe('Mi Stack Impl', () => {

    test('Probando Indice', () => {
        const stack = new Stack();

        expect(stack.top).toBe(-1);
    });
    test.todo('Probando Meter Elemento');
    test.todo('Probando Sacar Elemento');
})