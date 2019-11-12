import { BFSTraverseNR } from './bfs';

describe('BFS', () => {
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
    results = [1, 2, 3, 4, 5, 6, 10];
  });

  it('breadth-first search non-recursion', () => {
    const nodes = [];
    BFSTraverseNR(root, node => {
      nodes.push(node.name);
    });
    expect(nodes).toEqual(results);
  });
});
