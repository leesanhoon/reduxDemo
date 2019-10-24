import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {connect} from 'react-redux';

class ChangeColor extends React.Component {
  ChangeColor() {
    this.props.dispatch({type: 'CHANGE_COLOR'});
  }

  render() {
    const color = this.props.highlight ? 'red' : 'green';
    return (
      <TouchableOpacity onPress={() => this.ChangeColor()}>
        <Text style={{color}}>ChangeColor</Text>
      </TouchableOpacity>
    );
  }
}

function changeHighlight(state) {
  return {
    highlight: state.highlight
  };
}

export default connect(changeHighlight)(ChangeColor);
