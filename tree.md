A tree is a widely used Abstract Data Type (ADT) that simulates a hierarchical tree structure, with a root value and subtrees of children with a parent node, represented as a set of linked nodes.

A tree data structure can be defined recursively (locally) as a collection of nodes (starting at a root node), where each node is a data structure consisting of a value, together with a list of references to nodes (the "children"), with the constraints that no reference is duplicated, and none points to the root.

Binary trees

A worthwhile simplification is to consider only binary trees. A binary tree is one in which each node has at most two descendants - a node can have just one but it can't have more than two.
Clearly each node in a binary tree can have a left and/or a right descendant.

Binary Search Trees
- A binary search tree, sometimes called BST, is a type of binary tree which maintains the property that the value in each node must be greater than or equal to any value stored in the left sub-tree, and less than or equal to any value stored in the right sub-tree
- Time Complexity:
- Access: O(log(n))
- Search: O(log(n))
- Insert: O(log(n))
- Remove: O(log(n))
