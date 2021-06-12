import helloWorld from './hello'

test('should return Hello Mother Fucker.', () => {
    expect(helloWorld()).toBe('Hello Mother Fucker.')
})
