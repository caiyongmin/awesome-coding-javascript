import throttle from './throttle';
import sleep from './../../shared/sleep';

describe('throttle test cases', () => {
  it('throttle call when less than interval', async () => {
    let count = 0;
    const addCount = () => {
      count += 1;
    };

    const timer = setInterval(throttle(addCount, 400), 200);
    /**
     * 400 -> 1
     * 800 -> 2
     */
    setTimeout(() => {
      clearInterval(timer);
    }, 1000);
    await sleep(1500);
    expect(count).toBe(2);
  });

  it('normally call when greate than interval', async () => {
    let count = 0;
    const addCount = () => {
      count += 1;
    };

    const timer = setInterval(throttle(addCount, 200), 300);
    /**
     * 300 -> 1
     * 600 -> 2
     * 900 -> 3
     */
    setTimeout(() => {
      clearInterval(timer);
    }, 1000);
    await sleep(1500);
    expect(count).toBe(3);
  });
});
