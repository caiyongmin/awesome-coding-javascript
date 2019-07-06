export default {
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
