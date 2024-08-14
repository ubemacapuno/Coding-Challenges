// LeetCode 206. Reverse Linked List
// Given the head of a singly linked list, reverse the list, and return the reversed list.
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */
//Pseudocode:
//The last node points to null (aka tail points to null)
//We eventually want the first node to point to null once everything is reversed (aka head will point to null . . . becoming the new tail)
//We want to point the nodes to the previous node:
    //Create a variable ("previous") and set it to null
    //That way we take what WAS the head, and essentially make it the tail
    //And then we will work our way to reassign the nodes' next properties to the number before it
//Iterative solution:        
var reverseList = function(head) {
    let previous = null //use previous so the head will be the new tail
    let next = null //

    while(head != null){//"while head is not the tail/null (only tails point to null):
        //The purpose of this loop is to keep updating head to be the next node in the chain (That is how we are iterating.):
        next = head.next
        head.next = previous//connection has been severed for head.
        previous = head //We need to sever the other connections
        head = next
        //Once head DOES equal null, we have reached the end of reversing the list since the head will now be the tail. 
       // We can then return previous
    }
    return previous
}
//Test case (array...not linked list)
console.log(reverseList([1,2,3,4,5]))