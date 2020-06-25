//双指针
(head)=> {
    if(!head) return head;
    let p = head;
    while(p){
        let q = p;
        while(q.next){
            if(q.next.val === p.val){
                q.next = q.next.next;
            }
            else{
                q = q.next;
            }
        }
        p = p.next;
    }
    return head;

}
//哈希表
const removeDuplicateNodes = (head) => {
    if (head === null) return head;
    const map = {};
    map[head.val] = true;
    let node = head.next;
    let prev = head;
    while (node) {
      if (map[node.val]) {
        prev.next = node.next;
      } else {
        map[node.val] = true;
        prev = prev.next;
      }
      node = node.next;
    }
    return head;
  };
  