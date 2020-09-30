// const React = require('react');
// const { Component} = require('react')
import React, {Component} from 'react';

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
  render() {
    return (
      <>
        <h1>{this.state.result}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
        </form>
        <div>시도: {this.state.tries.length}</div>
        <ul>
          {[
            { fruit: 'apple', taste: 'good'},
            { fruit: 'banana', taste: 'bad'},
            { fruit: 'orange', taste: 'long'},
          ].map((v)=> (
            <li key={v.fruit + v.taste}><b>{v.fruit}</b> - {v.taste}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default NumberBaseball;
// module.exports = NumberBaseball;