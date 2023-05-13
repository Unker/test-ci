import fetchData from '../http';

test('should throw exeption', () => {
  expect(() => fetchData(1)).toThrow('Mock this! url=1');
});
