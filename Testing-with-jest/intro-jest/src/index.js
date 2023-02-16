const cities = ['Buenos aires', 'Bogota', 'lima', 'New York'];

const randomString = () => {
    return cities[Math.floor(Math.random() * cities.length)];
}
const reverseStrings2 = (str) => {
    return new Promise((resolve, reject) => {
        if (!str){
            reject(Error('Error'))
        }
        resolve(str.split('').reverse().join(""))
    })
}

module.exports = randomString