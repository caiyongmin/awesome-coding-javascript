import EventEmitter from './event-emitter';

describe('EventEmitter', () => {
  let emitter;

  beforeEach(() => {
    emitter = new EventEmitter();
  });

  it('should exposes the public API', () => {
    expect(emitter).toHaveProperty('on');
    expect(emitter).toHaveProperty('emit');
    expect(emitter).toHaveProperty('once');
    expect(emitter).toHaveProperty('off');
  });

  it('on', () => {
    const foo = jest.fn();
    const bar = jest.fn();
    emitter.on('foo', foo);
    expect(emitter.listeners['foo'].listeners).toEqual([foo]);
    emitter.on('foo', bar);
    expect(emitter.listeners['foo'].listeners).toEqual([foo, bar]);
  });

  it('once', () => {
    const foo = jest.fn();
    const bar = jest.fn();
    emitter.once('foo', foo);
    expect(emitter.listeners['foo'].listeners).toEqual([foo]);
    emitter.once('foo', bar);
    expect(emitter.listeners['foo'].listeners).toEqual([bar]);
  });

  it('emit', () => {
    // use emitter.on
    const foo = jest.fn();
    emitter.on('foo', foo);
    emitter.emit('foo', 'x');
    expect(foo).toHaveBeenNthCalledWith(1, 'x');
    emitter.emit('foo', 'x');
    expect(foo).toHaveBeenCalledTimes(2);

    // use emitter.once
    const bar = jest.fn();
    emitter.once('bar', bar);
    emitter.emit('bar', 'x');
    expect(bar).toHaveBeenNthCalledWith(1, 'x');
    emitter.emit('bar', 'x');
    expect(bar).toHaveBeenCalledTimes(1);
  });

  it('off, remove all listener', () => {
    const foo = jest.fn();
    emitter.on('foo', foo);
    emitter.emit('foo', 'x');
    emitter.off('foo');
    emitter.emit('foo', 'x');
    expect(foo).toHaveBeenCalledTimes(1);
  });

  it('off, remove specific listener', () => {
    const foo = jest.fn();
    const bar = jest.fn();
    emitter.on('foo', foo);
    emitter.on('foo', bar);
    emitter.emit('foo', 'x');
    expect(foo).toHaveBeenCalledTimes(1);
    expect(bar).toHaveBeenCalledTimes(1);
    emitter.off('foo', foo);
    emitter.emit('foo', 'x');
    expect(foo).toHaveBeenCalledTimes(1);
    expect(bar).toHaveBeenCalledTimes(2);
  });
});
