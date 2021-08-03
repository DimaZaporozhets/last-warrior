import React from 'react';
import {Text as TextRN, Dimensions} from 'react-native';
import {StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {Colors} from "../styling";

const standartWidth = 414;

const Text = (props) => {
  const {
    children,
    bold,
    style,
    semiBold,
    italic,
    numberOfLines,
    hyperlinksColor,
    onPress,
  } = props;
  const windowWidth = Dimensions.get('window').width;
  const coeficient = windowWidth / standartWidth;
  const oldFontSize = style ? StyleSheet.flatten(style).fontSize : null;
  const oldLineHeight = style ? StyleSheet.flatten(style).lineHeight : null;
  const hyperlinkColor = {color: Colors.aqua};
  return (
    <TextRN
      {...props}
      style={[
        style,
        oldFontSize && {fontSize: oldFontSize * coeficient},
        oldLineHeight && {lineHeight: oldLineHeight * coeficient},
        {fontFamily: 'SourceCodePro-Regular'},
        bold && {fontFamily: 'SourceCodePro-Bold'},
        semiBold && {fontFamily: 'SourceCodePro-SemiBold'},
        italic && {fontFamily: 'SourceCodePro-Italic'},
        hyperlinksColor && hyperlinkColor,
      ]}
      onPress={onPress}
      numberOfLines={numberOfLines}>
      {children}
    </TextRN>
  );
};

export default Text;

Text.defaultProps = {
  style: [],
  bold: false,
  italic: false,
  semiBold: false,
  hyperlinksColor: false,
};

Text.propTypes = {
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  bold: PropTypes.bool,
  semiBold: PropTypes.bool,
  italic: PropTypes.bool,
  hyperlinksColor: PropTypes.bool,
  onPress: PropTypes.any,
  numberOfLines: PropTypes.number,
};
