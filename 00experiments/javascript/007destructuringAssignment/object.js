const example = {
  a: 123,
  b: {
    c: 135,
    d: 146,
  },
}
let {a} = example;
let {b:{c}} = example;
let{b} = example;


console.log(a);
console.log(b);
console.log(c);