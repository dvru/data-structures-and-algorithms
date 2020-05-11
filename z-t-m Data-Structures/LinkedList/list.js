10-->5-->16

let myLinkedList = {
    head: {             // node with value/next prop
        value: 10,
        next: {
            value: 5,
            next: {
                value: 16,
                next: null // null terminated, end of list
            }
        }
    }
}