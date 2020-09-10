class Trie {
  constructor() {
    this.children = {};
    this.sum = 0;
  }

  insert(word) {
    let trie = this;
    ++this.sum;

    for (const letter of word) {
      if (typeof trie.children[letter] === 'undefined') {
        trie.children[letter] = new Trie();
      }

      trie = trie.children[letter];
      ++trie.sum;
    }
  }

  getSum(query) {
    let trie = this;
    for (const letter of query) {
      if (letter === '?') {
        return trie.sum;
      } else if (typeof trie.children[letter] === 'undefined') {
        return 0;
      }

      trie = trie.children[letter];
    }
  }
}

function solution(words, queries) {
  const tries = {};
  const reverseds = {};

  for (const word of words) {
    const length = word.length;
    // if (typeof tries[length] === 'undefined') {
      tries[length] = new Trie();
      reverseds[length] = new Trie();
    // }

    tries[length].insert(word);
    console.dir(tries)
    reverseds[length].insert([...word].reverse().join(''));
  }
  console.log('tries', tries);

  return queries.map((query) => {
    const length = query.length;
    if (typeof tries[length] === 'undefined') {
      return 0;
    }

    if (query[0] === '?') {
      return reverseds[length].getSum([...query].reverse().join(''));
    }

    return tries[length].getSum(query);
  });
}
// let sol = solution(["frodo", "front", "frost", "frozen", "frame", "kakao"], ["fro??", "????o", "fr???", "fro???", "pro?"])
let sol = solution(["fro", 'arc'], ["?r?"])
console.log(sol);