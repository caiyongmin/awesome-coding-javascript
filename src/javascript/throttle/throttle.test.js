import throttle from './throttle';
import sleep from './../../shared/sleep';

describe('throttle', () => {
  it('when less than interval, will throttle', async () => {
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

  it('when greate than interval, normally call', async () => {
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
