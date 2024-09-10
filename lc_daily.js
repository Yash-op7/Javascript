/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertGreatestCommonDivisors = function(head) {
    gcd = (x, y) => {
        if (x > y) {
            swap(x, y);
        }
        if (x === 0) return y;
        return gcd(y%x, x);
    };
};