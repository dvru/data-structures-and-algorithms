class MyArray {
    constructor() {
        this.length = 0; // array has length
        this.data = {};   // object, data within the array 
    }

    get(index) { // get data within array
        return this.data[index]
    }

    push(item) {
        this.data[this.length] = item;
        this.length++
        return this.data;
    }

    pop() {
        const lastItem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return lastItem;
    }

    deleteAtIndex(index) {
        const item = this.data[index];
        this.shiftItems(index);
        return item;
    }
    shiftItems(index) {
        for(let i = index; i < this.length - 1; i++)
        {
            this.data[i] = this.data[i+1]
        }
        console.log(this.data[this.length - 1]);
    }
}

const newArray = new MyArray();
newArray.push('hi');    // MyArray { length: 1, data: { '0': 'hi' } }
newArray.push('you');   // MyArray { length: 2, data: { '0': 'hi', '1': 'you' } }
newArray.push('!');
newArray.pop();
newArray.pop();
console.log(newArray);