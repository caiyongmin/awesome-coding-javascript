export default {
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
