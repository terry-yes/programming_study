const React = require('react');
const { Component} = React;

class WordRelay extends Component {
  state = {
    word: '제로초',
    value: '',
    result: '',
  };

  render() {
    return (
      <>
        <div>{this.state.word}</div>
        <form onSubmit = {this.onSubmit}>
          <input type="text" value={this.state.value} onChange = {this.onChange} />
          <input type="submit" value="입력"/>
          <div>{this.state.result}</div>
        </form>
      </>
    )
  }
}

module.exports = WordRelay;