function maxNode(root) {
    if (root == null) return -Infinity
    
    const leftMax = maxNode(root.left)
    const rightMax = maxNode(root.right)
    return Math.max(root.data, leftMax, rightMax)
}