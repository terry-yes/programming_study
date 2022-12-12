const getAllSubsets =
      theArray => theArray.reduce((subsets, value) => {
        console.log('subsets:', subsets, 'value:', value);
          return subsets.concat(subsets.map(set => {
            console.log('set', set);
            console.log('...set', ...set);
            console.log(...set, value);
            return [...set, value]
          }))
        }
        ,
        [[]]
      );

console.log(getAllSubsets([1,2,3]));
