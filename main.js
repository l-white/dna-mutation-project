// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}
let newArray = [];
// pAequor factor function
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
            //let newArray = [];
            let getDiff = 0;
            if (array.length !== newPAequor.array.length) {
                if (array.length > newPAequor.array.length) {
                  getDiff = array.length - newPAequor.array.length;
                  array = array.slice(0, array.length - getDiff);
                }
                else if (newPAequor.array.length > array.length){
                  getDiff = newPAequor.array.length - array.length;
                  newPAequor.array = newPAequor.array.slice(0, newPAequor.array.length - getDiff);
                  console.log(`newPAequor array ${newPAequor.array}`);
                }
            }
            for (let i = 0; i < array.length; i++) {
                  if (array[i] === newPAequor.array[i]) {
                      newArray.push(array[i]);
                  }
            }
            const sharedDNAPercentage = newArray.length / array.length * 100;
            return `The two specimens have ${sharedDNAPercentage.toFixed(2)} percent DNA in common.`;
        },
        willLikelySurvive(){
          const survivalRate = newArray.filter(element => element === 'C' || element === 'G');
          return survivalRate.length / newArray.length >= 0.6;
        }
    }
};
