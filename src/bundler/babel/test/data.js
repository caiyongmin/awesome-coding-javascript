export const input = ''
+ 'const a = 1;'
+ 'const b = 2;'
+ 'const add = (a, b) => {'
+   'return a + b;'
+ '};';

export const output = ''
+ '"use strict";'
+ 'var a = 1;'
+ 'var b = 2;'
+ 'var add = function add(a, b) {'
+   'return a + b;'
+ '};';

export const tokens = [
  { type: 'Identifier', value: 'const' },
  { type: 'Identifier', value: 'a' },
  { type: 'Equal', value: '=' },
  { type: 'Number', value: '1' },
  { type: 'Colon', value: ';' },
  { type: 'Identifier', value: 'const' },
  { type: 'Identifier', value: 'b' },
  { type: 'Equal', value: '=' },
  { type: 'Number', value: '2' },
  { type: 'Colon', value: ';' },
  { type: 'Identifier', value: 'const' },
  { type: 'Identifier', value: 'add' },
  { type: 'Equal', value: '=' },
  { type: 'Parens', value: '(' },
  { type: 'Identifier', value: 'a' },
  { type: 'Comma', value: ',' },
  { type: 'Identifier', value: 'b' },
  { type: 'Parens', value: ')' },
  { type: 'Arrow', value: '=>' },
  { type: 'Brace', value: '{' },
  { type: 'Identifier', value: 'return' },
  { type: 'Identifier', value: 'a' },
  { type: 'Operator', value: '+' },
  { type: 'Identifier', value: 'b' },
  { type: 'Colon', value: ';' },
  { type: 'Brace', value: '}' },
  { type: 'Colon', value: ';' }
];

export const ast = {
  type: 'Program',
  body: [
    {
      type: 'VariableDeclaration',
      declarations: [
        {
          type: 'VariableDeclarator',
          id: {
            type: 'Identifier',
            name: 'a',
          },
          init: {
            type: 'Literal',
            value: 1,
          },
        },
      ],
      kind: 'const',
    },
    {
      type: 'VariableDeclaration',
      declarations: [
        {
          type: 'VariableDeclarator',
          id: {
            type: 'Identifier',
            name: 'b',
          },
          init: {
            type: 'Literal',
            value: 2,
          },
        },
      ],
      kind: 'const',
    },
    {
      type: 'VariableDeclaration',
      declarations: [
        {
          type: 'VariableDeclarator',
          id: {
            type: 'Identifier',
            name: 'add',
          },
          init: {
            type: 'ArrowFunctionExpression',
            id: null,
            expression: false,
            generator: false,
            params: [
              {
                type: 'Identifier',
                name: 'a',
              },
              {
                type: 'Identifier',
                name: 'b',
              },
            ],
            body: {
              type: 'BlockStatement',
              body: [
                {
                  type: 'ReturnStatement',
                  argument: {
                    type: 'BinaryExpression',
                    left: {
                      type: 'Identifier',
                      name: 'a',
                    },
                    operator: '+',
                    right: {
                      type: 'Identifier',
                      name: 'b',
                    },
                  },
                },
              ],
            },
          },
        },
      ],
      kind: 'const',
    },
  ],
  sourceType: 'module',
};

export const newAst = {
  type: 'Program',
  body: [
    {
      type: 'ExpressionStatement',
      expression: {
        type: 'Literal',
        value: 'use strict',
      },
      directive: 'use strict',
    },
    {
      type: 'VariableDeclaration',
      declarations: [
        {
          type: 'VariableDeclarator',
          id: {
            type: 'Identifier',
            name: 'a',
          },
          init: {
            type: 'Literal',
            value: 1,
          },
        },
      ],
      kind: 'var',
    },
    {
      type: 'VariableDeclaration',
      declarations: [
        {
          type: 'VariableDeclarator',
          id: {
            type: 'Identifier',
            name: 'b',
          },
          init: {
            type: 'Literal',
            value: 2,
          },
        },
      ],
      kind: 'var',
    },
    {
      type: 'VariableDeclaration',
      declarations: [
        {
          type: 'VariableDeclarator',
          id: {
            type: 'Identifier',
            name: 'add',
          },
          init: {
            type: 'FunctionExpression',
            id: {
              type: 'Identifier',
              name: 'add',
            },
            expression: false,
            generator: false,
            params: [
              {
                type: 'Identifier',
                name: 'a',
              },
              {
                type: 'Identifier',
                name: 'b',
              },
            ],
            body: {
              type: 'BlockStatement',
              body: [
                {
                  type: 'ReturnStatement',
                  argument: {
                    type: 'BinaryExpression',
                    left: {
                      type: 'Identifier',
                      name: 'a',
                    },
                    operator: '+',
                    right: {
                      type: 'Identifier',
                      name: 'b',
                    },
                  },
                },
              ],
            },
          },
        },
      ],
      kind: 'var',
    },
  ],
  sourceType: 'module',
};
