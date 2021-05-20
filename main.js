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
            /*
            if (array.length !== pAequorFactory.array.length) {
                if (array.length > pAequorFactory.array.length) {

                }
            }
            */
            for (let i = 0; i < array.length; i++) {
                for (let j = 0; j < newPAequor.array.length; j++) {
                    if (array[i] === newPAequor.array[j]) {
                        newArray.push(newPAequor.array[j]);
                    }
                }
            }
            return newArray;
        }
    }
}; 




const firstFactory = pAequorFactory(2, ['A', 'T', 'C', 'C']);
//console.log(firstFactory.mutate());
//console.log(firstFactory.number);

console.log(firstFactory.mutate());
console.log(firstFactory.compareDNA());
//console.log(returnRandBase());
//console.log(mockUpStrand());
//const secondFactory = pAequorFactory(3);
//console.log(secondFactory.mutate());

const array1 = ['a', 'b', 'c', 'd'];
const array2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
const getDiff = array2.length - array1.length;
console.log(getDiff);
console.log(array2.slice(0, getDiff + 1));
console.log(array1);
