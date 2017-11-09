const frontend = require('../index');

describe('Dataset', () => {
  it('exports two arrays', () => {
    expect(Array.isArray(frontend.css)).toBe(true);
    expect(Array.isArray(frontend.html)).toBe(true);
  });
});
