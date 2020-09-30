function ListNode(val, next) {
   this.val = (val===undefined ? 0 : val)
   this.next = (next===undefined ? null : next)
 }

 let list = new ListNode( );

let list1 = new ListNode(20, list);
console.log(list1);