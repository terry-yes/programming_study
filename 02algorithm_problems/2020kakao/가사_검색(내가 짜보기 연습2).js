class Trie {
  constructor () {
    this.children = {};
    this.sum = 0;
  }

  insert (word) {
    let trie = this;
    this.sum++;

    for (const c of word) {
      if (typeof this.children[c] === 'undefined') {
        trie.children[c] = new Trie();
      }
      trie = trie.children[c];
      trie.sum++;
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
    }
  }
}
function solution(words, queries) {
  let trie = {};
  for (const word of words) {
    if (!trie[word.length]){
      trie[word.length] = new Trie();
    }
    trie[word.length].insert(word);
  }
  for (const query of queries) {
    if (typeof tries[query.length] === 'undefined') {
      return 0;
    }
    return (tries[query.length].getSum(query));
  }
}


let sol = solution(["fro", 'arc', 'hello'], ["?r?"])
console.log(sol);

