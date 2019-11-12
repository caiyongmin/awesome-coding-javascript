import { DFSTraverse, DFSTraverseNR } from './dfs';

describe('DFS', () => {
  let root;
  let results;

  beforeEach(() => {
    root = {
      name: 1,
      children: [
        { name: 2, children: [
          { name: 4 }, { name: 5 }
        ] },
        { name: 3, children: [
          { name: 6 }, { name: 10 }
        ] }
      ]
    };
    results = [1, 2, 4, 5, 3, 6, 10];
  });

  it('depth-first search', () => {
    const nodes = [];
    DFSTraverse(root, node => {
      nodes.push(node.name);
    });
    expect(nodes).toEqual(results);
  });

  it('depth-first search non-recursion', () => {
    const nodes = [];
    DFSTraverseNR(root, node => {
      nodes.push(node.name);
    });
    expect(nodes).toEqual(results);
  });
});
