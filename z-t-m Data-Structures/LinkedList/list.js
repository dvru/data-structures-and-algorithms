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
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
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
    const newNode = new Node(value)
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this; // this linkedlist
    }
    prepend(value) { // 1-->10-->5-->16
        const newNode = new Node(value)
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
      }
      printList() {
            const array = [];
            let currentNode = this.head;
            while(currentNode !== null) {
                array.push(currentNode.value)
                currentNode = currentNode.next;
            }
            return array;
        }
      insert(index, value) {
    //Check for proper parameters;
        if(index >= this.length) {
        console.log('yes')
        return this.append(value);
      }

      }
}

const myLinkedList = new LinkedList(10);

myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
myLinkedList.insert(200, 99)
console.log(myLinkedList.printList())
// console.log(myLinkedList)

  