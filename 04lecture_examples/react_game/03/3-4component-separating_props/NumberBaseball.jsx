// const React = require('react');
// const { Component} = require('react')
import React, {Component} from 'react';
import Try from './Try';

const getNumbers = () => {

};

class NumberBaseball extends Component {
  state = {
    result: '',
    value: '',
    answer: getNumbers(),
    tries: [],
  }

  onSubmitForm = () => {

  }
  onChangeInput = () => {

  }
  fruits = [
    { fruit: 'apple', taste: 'good'},
    { fruit: 'banana', taste: 'bad'},
    { fruit: 'orange', taste: 'long'},
  ];
  render() {
    return (
      <>
        <h1>{this.state.result}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
        </form>
        <div>시도: {this.state.tries.length}</div>
        <ul>
          {this.fruits.map((v, i)=> (
            <Try value={v} index={i}/>
          ))}
        </ul>
      </>
    );
  }
}

export default NumberBaseball;
// module.exports = NumberBaseball;