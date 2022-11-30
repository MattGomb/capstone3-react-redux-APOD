import { fetchApod } from '../redux/pictures/PicturesSlice';

describe('fetchApod function test', () => {
  it('fetchApod is a function', () => {
    expect(typeof fetchApod).toBe('function');
  });
});
