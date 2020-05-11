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

// Singly LinkedList
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null, 
            prev: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = {
            value: value,
            next: null,
            prev: null
        }
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this; // this linkedlist
    }
    prepend(value) { // 1-->10-->5-->16
        const newNode = {
            value: value,
            next: null,
            prev: null
        }
        newNode.next = this.head;
        this.head.prev = newNode;
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
      const newNode = {
        value: value,
        next: null,
        prev: null
     }
        const leader = this.traverseToIndex(index-1);
        const follower = leader.next;
        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = follower;
        follower.prev = newNode
        this.length++;
        console.log(this)
        return this.printList();
      }
      traverseToIndex(index) {
        //Check parameters
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index){
          currentNode = currentNode.next;
          counter++;
        }
        return currentNode;
      }
      remove(index) {
        // Check Parameters      
        const leader = this.traverseToIndex(index-1);
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        this.length--;
        return this.printList();
      }
}

const myLinkedList = new DoublyLinkedList(10);

myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
myLinkedList.insert(1, 99)
// myLinkedList.insert(20, 88)
// myLinkedList.remove(2)
// // myLinkedList.remove(2)
console.log(myLinkedList.printList())
// console.log(myLinkedList)

  