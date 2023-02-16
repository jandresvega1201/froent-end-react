const randomString = require('../index');

// test('Probar Funcionalidad', () => {
//     expect(typeof (randomString())).toBe('string');
// })

describe('Probar funcionalidades', () => {
    test('Probar Funcionalidad', () => {
        expect(typeof (randomString())).toBe('string');
    })
    test('Comprobar que no existe una ciudad', () => {
        expect(randomString()).toBe('/Bogota/');
    })
})