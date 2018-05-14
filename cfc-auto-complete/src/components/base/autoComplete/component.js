import React, { Component } from "react";
import { View, TextInput, ListView, Text, Platform } from "react-native";

import AutoCompleteItem from "./item";
import styles from "./styles";
import { ComponentProptypes } from "./propTypes";

export default class AutoComplete extends Component {
  static propTypes = ComponentProptypes;

  constructor() {
    super();
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: this.ds.cloneWithRows([])
    };
  }

  static filter(label, text) {
    return label && text && label.toLowerCase().startsWith(text.toLowerCase());
  }

  updateFilter = text => {
    const { data = [] } = this.props;
    const filtered = !text
      ? []
      : data.filter(({ label }) => AutoComplete.filter(label, text));
    const dataSource = this.ds.cloneWithRows(filtered);
    this.setState({ inputValue: text, dataSource });
  };

  onChangeText = text => {
    this.updateFilter(text);
  };

  onBlur = () => {
    // Hide drop down if web only
    if (Platform.OS === "web") {
      const dataSource = this.ds.cloneWithRows([]);
      this.setState({ dataSource });
    }
  };

  onFocus = () => {
    // display drop down
    const { inputValue } = this.state;
    this.updateFilter(inputValue);
  };

  onSubmitEditing = () => {
    const { inputValue } = this.state;
    const { data = [] } = this.props;
    const { label, value } =
      data.find(({ label }) => AutoComplete.filter(label, inputValue)) || {};
    this.onValueSelect(label, value);
  };

  onValueSelect = (label, value) => {
    const dataSource = this.ds.cloneWithRows([]);
    this.setState({ label, value, inputValue: label, dataSource });
  };

  renderRow = rowData => {
    const { itemContainerStyle, itemTextColor } = this.props;
    const { label, value } = rowData;
    return (
      <AutoCompleteItem
        itemContainerStyle={itemContainerStyle}
        itemTextColor={itemTextColor}
        label={label}
        onValueSelect={this.onValueSelect}
        value={value}
      />
    );
  };

  render() {
    const {
      textInputStyle,
      dropdownStyle,
      labelStyle,
      valueStyle
    } = this.props;
    const { label = "", value = "", dataSource, inputValue = "" } = this.state;
    return (
      <View style={styles.container}>
        <TextInput
          onBlur={this.onBlur}
          onChangeText={this.onChangeText}
          onFocus={this.onFocus}
          onSubmitEditing={this.onSubmitEditing}
          style={textInputStyle}
          value={inputValue}
        />
        <ListView
          dataSource={dataSource}
          enableEmptySections={true}
          renderRow={this.renderRow}
          style={dropdownStyle}
        />
        <View style={styles.resultContainer}>
          <Text style={labelStyle}>{`Label: ${label}`}</Text>
          <Text style={valueStyle}>{`Value: ${value}`}</Text>
        </View>
      </View>
    );
  }
}
