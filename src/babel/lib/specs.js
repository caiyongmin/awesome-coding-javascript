/**
 * ref:
 * - https://github.com/estree/estree
 * - https://astexplorer.net/#/1CHlCXc4n4
 */

export class Program {
  constructor(options = {}) {
    this.type = 'Program';
    this.body = options.body || [];
    this.sourceType = options.sourceType || 'module';
  }
}

export class ExpressionStatement {
  constructor(options = {}) {
    this.type = 'ExpressionStatement';
    this.expression = options.expression || null;
    this.directive = options.directive || '';
  }
}

export class FunctionExpression {
  constructor(options = {}) {
    this.type = 'FunctionExpression';
    this.id = options.id || null;
    this.expression = options.expression || false;
    this.generator = options.generator || false;
    this.params = options.params || [];
    this.body = options.body || {};
  }
}

export class ArrowFunctionExpression extends FunctionExpression {
  constructor(options = {}) {
    super(options);
    this.type = 'ArrowFunctionExpression';
  }
}

export class VariableDeclarator {
  constructor(options = {}) {
    this.type = 'VariableDeclarator';
    this.id = options.id || null;
    this.init = options.init || null;
  }
}

export class VariableDeclaration {
  constructor(options = {}) {
    this.type = 'VariableDeclaration';
    this.declarations = options.declarations || [new VariableDeclarator()];
    this.kind = options.kind || 'var';
  }
}

export class Identifier {
  constructor(options = {}) {
    this.type = 'Identifier';
    this.name = options.name || '';
  }
}

export class BlockStatement {
  constructor(options = {}) {
    this.type = 'BlockStatement';
    this.body = options.body || [];
  }
}

export class BinaryExpression {
  constructor(options = {}) {
    this.type = 'BinaryExpression';
    this.left = options.left || null;
    this.operator = options.operator || '';
    this.right = options.right || null;
  }
}

export class ReturnStatement {
  constructor(options = {}) {
    this.type = 'ReturnStatement';
    this.argument = options.argument || new BinaryExpression();
  }
}

export class Literal {
  constructor(options = {}) {
    this.type = 'Literal';
    this.value = options.value || '';
  }
}

export const tokenTypeMap = {
  colon: {
    type: 'Colon',
    chars: [';'],
  },
  comma: {
    type: 'Comma',
    chars: [','],
  },
  parens: {
    type: 'Parens',
    chars: ['(', ')'],
  },
  brace: {
    type: 'Brace',
    chars: ['{', '}'],
  },
  operator: {
    type: 'Operator',
    chars: ['+', '-', '*', '/', '<', '>'],
  },
  equal: {
    type: 'Equal',
    chars: ['='],
  },
  arrow: {
    type: 'Arrow',
    chars: ['=>'],
  },
  string: {
    type: 'String',
    chars: ['"', '\''],
  },
  number: {
    type: 'Number',
    regx: /[0-9]/,
  },
  identifier: {
    type: 'Identifier',
    // TODO: process eslint error
    // eslint-disable-next-line no-useless-escape
    regx: /[a-zA-Z\$\_]/,
  },
  whitespace: {
    type: 'Equal',
    regx: /\s/,
  },
  eof: {
    type: 'EOF',
  }
};
