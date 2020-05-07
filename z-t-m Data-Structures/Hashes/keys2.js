// keys without collision

// keys() {
//     if (!this.data.length) {
//       return undefined
//     }
//     let result = []
//     // loop through all the elements
//     for (let i = 0; i < this.data.length; i++) {
//         // if it's not an empty memory cell
//         if (this.data[i] && this.data[i].length) {
//           // but also loop through all the potential collisions
//           if (this.data.length > 1) {
//             for (let j = 0; j < this.data[i].length; j++) {
//               result.push(this.data[i][j][0])
//             }
//           } else {
//             result.push(this.data[i][0])
//           } 
//         }
//     }
//     return result; 
//   }