import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

export default class ButtonIcon extends React.Component {
  render() {
    return (
      <Ionicons
        name={this.props.name}
        size={75}
        //style={{ marginBottom: -3 }}
        color="#fff"
      />
    );
  }
}
