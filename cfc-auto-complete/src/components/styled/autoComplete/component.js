import React, { Component } from "react";

import AutoCompleteBase from "../../base/autoComplete";

import styles from "./styles";
import { data } from "./data";

export default class AutoComplete extends Component {
  render() {
    return (
      <AutoCompleteBase
        data={data}
        dropdownStyle={styles.dropdown}
        itemContainerStyle={styles.itemContainer}
        itemTextColor={styles.itemText}
        labelStyle={styles.label}
        textInputStyle={styles.textInput}
        valueStyle={styles.value}
      />
    );
  }
}
