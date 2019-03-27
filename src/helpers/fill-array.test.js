import fillArray from './fill-array';

describe('fillArray function suite', () => {
  it('should call a callback n times', () => {
    const callback = jest.fn();
    fillArray(10, callback);
    expect(callback).toHaveBeenCalledTimes(10);
  });
});
