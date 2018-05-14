import { ViewPropTypes } from "react-native";
import PropTypes from "prop-types";

export const ComponentProptypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.number
    })
  ),
  textInputStyle: ViewPropTypes.style,
  dropdownStyle: ViewPropTypes.style,
  labelStyle: ViewPropTypes.style,
  valueStyle: ViewPropTypes.style
};

export const ItemProptypes = {
  label: PropTypes.string,
  onValueSelect: PropTypes.func,
  value: PropTypes.number
};
