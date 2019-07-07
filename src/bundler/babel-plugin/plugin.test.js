const babel = require('@babel/core');
const fs = require('fs');
const path = require('path');
const plugin = require('./babel-plugin-simple-import');

const actualFile = fs.readFileSync(path.join(__dirname, './test/actual.js'), 'utf-8');
const expectedFile = fs.readFileSync(path.join(__dirname, './test/expected.js'), 'utf-8');

describe('babel-plugin-simple-import', () => {
  it('simple use', () => {
    const actual = babel.transform(actualFile, {
      presets: ['@babel/preset-env'],
      plugins: [plugin]
    }).code;

    expect(actual.trim()).toBe(expectedFile.trim());
  });
});
