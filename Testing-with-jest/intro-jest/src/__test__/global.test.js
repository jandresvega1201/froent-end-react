const text = "Hola Mundo"
const fruits = ['Melon', 'Manzana', 'Mandarina', 'uva']

//Probar Strings
test('Debe contener un texto', () => {
    expect(text).toMatch(/Mundo/)
})

//probar Arrays
test('Tenemos Manzana?', () => {
    expect(fruits).toContain('Manzana');
})

//probar Numeros
test('Mayor que otro', () => {
    expect(10).toBeGreaterThan(9)
})

//probar booleanos
test('es verdadero?', () => {
    expect(true).toBeTruthy()
})

const reverseStrings = (str, callback) => {
    callback(str.split('').reverse().join(''))
}

//Probar callbacks
test('probar callback', () => {
    reverseStrings('Hola', (str) => {
        expect(str).toBe('aloH')
    })
})

const reverseStrings2 = (str) => {
    return new Promise((resolve, reject) => {
        if (!str){
            reject(Error('Error'))
        }
        resolve(str.split('').reverse().join(""))
    })
}
//Probar promesas
test('Probar promesas', () => {
    return reverseStrings2('Hola').then(string => {
        expect(string).toBe('aloH')
    })
})

test('Probar async await', async() => {
    const string = await  reverseStrings2('Hola')
    expect(string).toBe('aloH')
})
//
// afterEach(() => console.log('Despues de cada prueba'))
// afterAll(() => console.log('Despues de todas las pruebas'))
//
//
// beforeEach(() => console.log('Antes de cada prueba'))
// beforeAll(() => console.log('Antes de todas las prueba'))

