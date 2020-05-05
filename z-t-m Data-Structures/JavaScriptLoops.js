const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
const large = new Array(10).fill('nemo');

const findNemo2 = array => {
    array.forEach(name => {
        if(name === 'nemo') {
            console.log('Found NEMO!')
        }
    })
}

const findNemo3 = array => {
    for (let fish of array) {
        if(fish === 'nemo') {
            console.log('Found NEMO!');
        }
    }
}

findNemo2(everyone);
findNemo3(everyone);