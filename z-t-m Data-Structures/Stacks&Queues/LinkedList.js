// Stack Exercise: LinkedLists

class Node {
    constructor(value){
      this.value = value;
      this.next = null;
    }
  }
  
  class Stack {
    constructor(){
      this.top = null; // top plate
      this.bottom = null; // bottom plate 
      this.length = 0;
    }
    peek() {  // see top item
        return this.top
    }
    push(value){ // add to stack
        const newNode = new Node(value);
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const holdingPointer = this.top;
            this.top - newNode;
            this.top.next = holdingPointer
        }
        this.length++;
        return this;
    }
    pop(){
        if (this.top) {
            return null;
          }
          const holdingPointer = this.top;
          this.top = this.top.next;
          this.length--;
          return this;
    }
    //isEmpty
  }
  
const myStack = new Stack();
myStack.push('google');
myStack.push('Udemy');
myStack.push('Discord');
myStack.peek();
myStack.pop();
myStack.pop();
  
  
  
  
  //Discord
  //Udemy
  //google
  