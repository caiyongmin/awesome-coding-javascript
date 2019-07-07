const defaultOption = {
  libraryName: 'milk-ui',
};

function getOption(opts, source) {
  let option = Object.assign({}, defaultOption);
  const opt = Array.isArray(opts)
    ? opts.find(opt => opt.libraryName === source.name)
    : opts;

  return Object.assign({}, option, opt);
}

function transformSourceName(name, option) {
  const { libraryName, transformer } = option;

  if (libraryName === defaultOption.libraryName) {
    return `${libraryName}/build/${name}`;
  }

  if (typeof transformer === 'function') {
    return transformer(name);
  }

  // default transform
  return `${libraryName}/${name}`;
}

module.exports = function ({ types }) {
  return {
    visitor: {
      ImportDeclaration(path, { opts }) {
        const { node } = path;
        const { specifiers, source } = node;
        const option = getOption(opts, source);

        if (types.isImportSpecifier(specifiers[0])) {
          const declarations = specifiers.map(specifier => {
            const importedName = specifier.imported.name;
            const sourceName = transformSourceName(importedName, option);
            return types.ImportDeclaration(
              [types.ImportDefaultSpecifier(specifier.local)], types.StringLiteral(sourceName)
            );
          });
          path.replaceWithMultiple(declarations);
        }
      }
    }
  };
};
