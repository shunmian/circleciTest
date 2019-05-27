const { add } = require('../src/add') 
describe('test add', () => {
    it('Should return 3 for add(1,2)', () => {
        expect(add(1,2)).toBe(3)
    })
})