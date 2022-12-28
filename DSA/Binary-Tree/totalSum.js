function treeSum(root) {
    if (root == null) return 0;

    const leftSum = treeSum(root.left)
    const rightSum = treeSum(root.right)
    return root.data + leftSum + rightSum;
}