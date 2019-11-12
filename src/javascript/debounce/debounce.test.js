import debounce from './debounce';
import sleep from './../../shared/sleep';

describe('debounce', () => {
  it('when front debounce: immediate call', async () => {
    let count = 0;
    const addCount = () => {
      count += 1;
    };

    // set immediate param is true
    const timer = setInterval(debounce(addCount, 500, true), 200);
    setTimeout(() => {
      clearInterval(timer);
    }, 1000);
    await sleep(300);
    // count will be 1
    expect(count).toBe(1);
  });

  it('when back debounce, is not immediate call', async () => {
    let count = 0;
    const addCount = () => {
      count += 1;
    };

    const timer = setInterval(debounce(addCount, 500), 200);
    setTimeout(() => {
      clearInterval(timer);
    }, 1000);
    await sleep(300);
    expect(count).toBe(0);
  });

  it('front debounce: when less than interval, could just call only once', async () => {
    let count = 0;
    const addCount = () => {
      count += 1;
    };

    const timer = setInterval(debounce(addCount, 500, true), 200);
    setTimeout(() => {
      clearInterval(timer);
    }, 1000);
    await sleep(1500);
    expect(count).toBe(1);
  });

  it('front debounce: when greate than interval, call more than once', async () => {
    let count = 0;
    const addCount = () => {
      count += 1;
    };

    const timer = setInterval(debounce(addCount, 200, true), 400);
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

  it('back debounce: when less than interval, could just call only once', async () => {
    let count = 0;
    const addCount = () => {
      count += 1;
    };

    const timer = setInterval(debounce(addCount, 500), 200);
    setTimeout(() => {
      clearInterval(timer);
    }, 1000);
    await sleep(1500);
    expect(count).toBe(1);
  });

  it('back debounce: when greate than interval, call more than once', async () => {
    let count = 0;
    const addCount = () => {
      count += 1;
    };

    const timer = setInterval(debounce(addCount, 200), 400);
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
});
