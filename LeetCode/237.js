//序列化
var serialize = function(root) {
    let result = []
    helper(root, result)
    return JSON.stringify(result)
};

function helper(root, result) {
    if (!root) return result.push('#')
    result.push(root.val)
    helper(root.left, result)
    helper(root.right, result)
}

// 反序列化
var deserialize = function(data) {
    data = JSON.parse(data)
    return helper2(data)
};

function helper2(data) {
    const val = data.shift()
    if (val === '#') return null
    const root = new TreeNode(val)
    root.left = helper2(data)
    root.right = helper2(data)
    return root
}
