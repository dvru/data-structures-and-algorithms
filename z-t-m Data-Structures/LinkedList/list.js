// 10-->5-->16

// let myLinkedList = {
//     head: {             // node with value/next prop
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null // null terminated, end of list
//             }
//         }
//     }
// }

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null 
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
    const newNode = {
        value: value,
        next: null
        }
    // console.log(newNode)
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this; // this linkedlist
    }
    prepend(value) { // 1-->10-->5-->16
        const newNode = {
            value: value,
            next: null
        };
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
      }
}

const myLinkedList = new LinkedList(10);

myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
console.log(myLinkedList)
// LinkedList {
//     head: { value: 10, next: null },
//     tail: { value: 10, next: null },
//     length: 1
//  }
  