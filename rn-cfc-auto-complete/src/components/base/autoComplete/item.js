import React, { Component } from "react";
import { View, Text, TouchableHighlight } from "react-native";

import { ItemProptypes } from "./propTypes";

export default class AutoCompleteItem extends Component {
  static propTypes = ItemProptypes;

  onPress = () => {
    const { label, value, onValueSelect } = this.props;
    onValueSelect && onValueSelect(label, value);
  };

  render() {
    const { label, itemContainerStyle, itemTextColor } = this.props;
    return (
      <TouchableHighlight onPress={this.onPress}>
        <View style={itemContainerStyle}>
          <Text style={itemTextColor}>{label}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}
