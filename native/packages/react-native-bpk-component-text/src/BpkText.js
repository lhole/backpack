/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2017 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Text, Platform, StyleSheet } from 'react-native';

const tokens = Platform.select({
  ios: () => require('bpk-tokens/tokens/ios/base.react.native.common.js'), // eslint-disable-line global-require
  android: () => require('bpk-tokens/tokens/android/base.react.native.common.js'), // eslint-disable-line global-require
})();

const TEXT_STYLES = ['xs', 'sm', 'base', 'lg', 'xl', 'xxl'];

const emphasizePropType = (props, propName, componentName) => {
  const value = props[propName];
  if (typeof (value) !== 'boolean') {
    return new Error(`Invalid prop \`${propName}\` of type \`${typeof (value)}\` supplied to \`${componentName}\`, expected \`boolean\`.`); // eslint-disable-line max-len
  }

  const enabled = !!value;

  if (enabled && props.textStyle === 'xxl') {
    return new Error(`Invalid prop \`${propName}\` of value \`${value}\` supplied to \`${componentName}\`. \`textStyle\` value of \`xxl\` cannot be emphasized.`); // eslint-disable-line max-len
  }

  return false;
};

const stylePropType = (props, propName, componentName) => {
  const value = StyleSheet.flatten(props[propName]);

  if (value === undefined) return false;

  if (value.fontWeight) {
    return new Error(`Invalid prop \`${propName}\` with \`fontWeight\` value \`${value.fontWeight}\` supplied to \`${componentName}\`. Use \`emphasize\` prop instead.`); // eslint-disable-line max-len
  }

  return false;
};

const getAndroidFontFamily = fontWeight =>
  (fontWeight === '500' ? 'sans-serif-medium' : 'sans-serif');

const getStyleByTextStyle = (textStyle) => {
  const camelCasedStyle = textStyle[0].toUpperCase() + textStyle.slice(1);

  const color = tokens.colorGray700;
  const fontSize = tokens[`text${camelCasedStyle}FontSize`];
  const lineHeight = tokens[`text${camelCasedStyle}LineHeight`];
  const fontWeight = Platform.OS === 'ios' ? tokens[`text${camelCasedStyle}FontWeight`] : undefined;
  const androidFontFamily = getAndroidFontFamily(tokens[`text${camelCasedStyle}FontWeight`]);
  const fontFamily = Platform.OS === 'android' ? androidFontFamily : 'System';

  return { fontSize, lineHeight, fontWeight, color, fontFamily };
};

const styles = StyleSheet.create({
  xs: { ...getStyleByTextStyle('xs') },
  sm: { ...getStyleByTextStyle('sm') },
  base: { ...getStyleByTextStyle('base') },
  lg: { ...getStyleByTextStyle('lg') },
  xl: { ...getStyleByTextStyle('xl') },
  xxl: { ...getStyleByTextStyle('xxl') },
  emphasize: { fontWeight: '600' },
});

const BpkText = (props) => {
  const { children, textStyle, style, emphasize, ...rest } = props;

  return <Text style={[styles[textStyle], emphasize && styles.emphasize, style]} {...rest}>{children}</Text>;
};

BpkText.propTypes = {
  children: PropTypes.node.isRequired,
  textStyle: PropTypes.oneOf(TEXT_STYLES),
  emphasize: emphasizePropType,
  style: stylePropType,
};

BpkText.defaultProps = {
  textStyle: 'base',
  emphasize: false,
  style: {},
};

export default BpkText;
export { TEXT_STYLES };
