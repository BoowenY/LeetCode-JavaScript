var recoverFromPreorder = function(S) {
    const parentStack = [new TreeNode(0)];
    for (let i = 0, curDepth = 0, num = '', len = S.length; i < len; ++i) {
      if (S[i] === '-') {
        ++curDepth
      } else {
        while(i < len && S[i] !== '-') num += S[i++];
        while (parentStack.length - curDepth !== 1) parentStack.pop();
        const parent = parentStack[parentStack.length - 1];
        const node = new TreeNode(num);
        if (!parent.left) parent.left = node
        else parent.right = node
        parentStack.push(node);
        num = '';
        curDepth = 1;
      }
    }
    return parentStack[0].left;
  };
