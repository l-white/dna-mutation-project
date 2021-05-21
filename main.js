const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G'];
    return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
        newStrand.push(returnRandBase());
    }
    return newStrand;
};

const pAequorFactory = (number=1, array = mockUpStrand()) => {
    return {
        number: number,
        array: array,
        mutate() {
            console.log(array);
            let newDnaBases = [];
            const returnNewDnaBase = newDnaBases => {
                return newDnaBases[Math.floor(Math.random() * 3)];
            }
            // select DNA property
            let dnaProperty = array[0];
            console.log(dnaProperty);
            // change the DNA property
            if (dnaProperty === 'A') {
                newDnaBases = ['T', 'C', 'G'];
            } else if (dnaProperty === 'C') {
                newDnaBases = ['A', 'T', 'G'];
            } else if (dnaProperty === 'T') {
                newDnaBases = ['A', 'C', 'G'];
            } else if (dnaProperty === 'G') {
                newDnaBases = ['A', 'T', 'C'];
            }
            dnaProperty = returnNewDnaBase(newDnaBases);
            array[0] = dnaProperty;
            return `dnaProperty: ${dnaProperty}, array: ${array}`;
        },
        compareDNA(newPAequor) {
            newPAequor = pAequorFactory();
            let newArray = [];
            let getDiff = 0;
            console.log(newPAequor.array);
            console.log(array);
            if (array.length !== newPAequor.array.length) {
                if (array.length > newPAequor.array.length) {
                  getDiff = array.length - newPAequor.array.length;
                  array = array.slice(0, array.length - getDiff);
                }
                else if (newPAequor.array.length > array.length){
                  getDiff = newPAequor.array.length - array.length;
                  newPAequor.array = newPAequor.array.slice(0, newPAequor.array.length - getDiff);
                  console.log(`newPAequor array ${newPAequor.array}`);
                  console.log(getDiff);
                }
            }
            for (let i = 0; i < array.length; i++) {
                  if (array[i] === newPAequor.array[i]) {
                      newArray.push(array[i]);
                      console.log(newArray);
                  }
            }
            return "new array " + newArray;
        }
    }
}; 
const firstFactory = pAequorFactory(2, ['G', 'A', 'T', 'C', 'C', 'G', 'A', 'T', 'C', 'C', 'G', 'A', 'T', 'C', 'C', 'G', 'A', 'T', 'C', 'C']);
//console.log(firstFactory.mutate());
//console.log(firstFactory.number);

console.log(firstFactory.mutate());
console.log(firstFactory.compareDNA());
