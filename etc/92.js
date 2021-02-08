var reverseBetween = function(head, m, n) {
    let prev =null, curr = head, next = head;
    for(let i = 1; i < m; i++){
        prev = curr;
        curr = curr.next;
    }
    let prev2 = prev;
    let curr2 = curr;
    for(let i = m; i <= n; i++){
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    if(prev2 !== null){
        prev2.next = prev;
    }else{
        head = prev;
    }
    curr2.next = curr;
    return head;
};