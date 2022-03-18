import fizzBuzz from './fizzbuzz';

describe('fizzbuzzArr()', () => {
  it('should return an array', () => {
    expect(fizzBuzz(2)).toBeInstanceOf(Array);
  });

  it('should return an array with length 9', () => {
    expect(fizzBuzz(9)).toHaveLength(9);
  });

  it('should return "fizzbuzz" if number passed is divisible by 5 and 3', () => {
    const correctresult = [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz'];
    expect(fizzBuzz(12)).toEqual(correctresult);
  });

  it('should return "fizz" if number passed is divisible by 3', () => {
    expect(fizzBuzz(4)).toEqual([1, 2, 'fizz', 4]);
  });

  it('should return "buzz" if number passed is divisible by 5', () => {
    expect(fizzBuzz(6)).toEqual([1, 2, 'fizz', 4, 'buzz', 'fizz']);
  });
});
