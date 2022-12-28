function treeHeight(root) {
    if (root == null) return 0;
    return 1 + Math.max(treeHeight(root.left), treeHeight(root.right))
}