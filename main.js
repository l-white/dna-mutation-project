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

const pAequorFactory = (number, array) => {
    return {
        number: number,
        array: array,
        mutate() {
            let newDnaBases = [];
            const returnNewDnaBase = newDnaBases => {
                return newDnaBases[Math.floor(Math.random() * 3)];
            }
            // select DNA property
            let dnaProperty = returnRandBase();
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
        } 
    }
}; 
