/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let s = [], b = [], i = 0;
    while(head) {
        console.log(head);
        head.val < x ? s.push(head) : b.push(head);
        head = head.next;
    }

     if (small.length === 0) return big[0] || head

     for(i = 1; i <= small.length; i++) small[i - 1].next = small[i] || big[0] || null

     for (i = 1; i <= big.length; i++) big[i - 1].next = big[i] || null

     return small[0]
};