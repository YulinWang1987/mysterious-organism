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
// factory function
const pAequorFactory = (num, arr) => {
  return {specimenNum: num,
          dna: arr,
          mutate() {
            //randomly select i = 0 ~15
            let i = Math.floor(Math.random() * 16);
            let newBase;
            do {newBase = returnRandBase()} while (newBase === arr[i]);
            arr[i] = newBase;
            },
          compareDNA(newObj) {
            let count = 0;
            for (i = 0; i < this.dna.length; i++) {
              if (this.dna[i] === newObj.dna[i]) {
                count++;
              }
            }
            let pct = count/ 15 * 100
            console.log(`specimen #${this.specimenNum} and specimen #${newObj.specimenNum} have ${Math.round(pct)}% DNA in common.`);
          },
          willLikelySurvive() {
            let num = 0;
            for (let base of this.dna) {
              if (base === "C" || base === "G")
              num++;
            }
            if (num / 15 >= 0.6) {
              return true;
            } else {
              return false;
            }
          }
          }
          };

let pAequorArr = [];
let numOfpAequor = 1;
while (numOfpAequor <= 30) {
  let obj = pAequorFactory(numOfpAequor, mockUpStrand());
  if (obj.willLikelySurvive()) {
    pAequorArr.push(obj);
    numOfpAequor++;
  }
}

console.log(pAequorArr);
