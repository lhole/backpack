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
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Platform,
} from 'react-native';

import PropTypes from 'prop-types';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import BpkThemeProvider from 'react-native-bpk-theming';
import BpkText from 'react-native-bpk-component-text';

import BpkButton, { BpkButtonThemed, BUTTON_TYPES } from './src/BpkButton';

import ArrowImageSrc from './long-arrow-right-3x.png';

const tokens = Platform.OS === 'ios' ?
  require('bpk-tokens/tokens/ios/base.react.native.common.js') :
  require('bpk-tokens/tokens/android/base.react.native.common.js')
;

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: tokens.spacingMd,
    paddingRight: tokens.spacingMd,
  },
  btnContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  image: {
    height: 15,
    width: 17,
    tintColor: tokens.colorWhite,
  },
  imageLarge: {
    height: 22,
    width: 26,
    tintColor: tokens.colorWhite,
  },
  imageSecondary: {
    tintColor: tokens.colorBlue500,
  },
  imageDestructive: {
    tintColor: tokens.colorRed500,
  },
  bottomMargin: {
    marginBottom: tokens.spacingSm,
  },
  buttonStyles: {
    marginBottom: tokens.spacingMd,
    marginRight: tokens.spacingMd,
  },
});

// Utility for creating arrow icons to show in the buttons.
const ArrowImage = ({ large, type }) => {
  const style = [large ? styles.imageLarge : styles.image];
  if (type === 'destructive') {
    style.push(styles.imageDestructive);
  }
  if (type === 'secondary') {
    style.push(styles.imageSecondary);
  }
  return <Image source={ArrowImageSrc} style={style} />;
};

ArrowImage.propTypes = {
  large: PropTypes.bool,
  type: PropTypes.string,
};

ArrowImage.defaultProps = {
  large: false,
  type: '',
};

// TODO nicer colors.
const themeAttributes = {
  gradientStartColor: '#CE93D8',
  gradientEndColor: '#AB47BC',
  textColor: 'rgba(255, 255, 255, 0.8)',

  selectedGradientStartColor: '#FF5722',
  selectedGradientEndColor: '#E64A19',
  selectedTextColor: '#FFEB3B',

  disabledBackgroundColor: '#B2FF59',
  disabledTextColor: '#b71c1c',
};

const generateButtonStoryForType = (type, theme = null) => {
  const StoryButton = theme ? BpkButtonThemed : BpkButton;
  return (
    <View key={type}>
      <BpkText textStyle="sm" style={styles.bottomMargin}>Default</BpkText>
      <View style={styles.btnContainer}>
        <StoryButton
          type={type}
          title="Button"
          onPress={action(`${type} pressed`)}
          style={styles.buttonStyles}
        />
        <StoryButton
          type={type}
          selected
          title="Selected"
          onPress={action(`${type} selected pressed`)}
          style={styles.buttonStyles}
        />
        <StoryButton
          type={type}
          disabled
          title="Disabled"
          onPress={action(`${type} disabled pressed, somehow`)}
          style={styles.buttonStyles}
        />
        <StoryButton
          type={type}
          title="With icon"
          icon={<ArrowImage type={type} />}
          onPress={action(`${type} with icon clicked`)}
          style={styles.buttonStyles}
        />
        <StoryButton
          type={type}
          title="Icon only"
          icon={<ArrowImage type={type} />}
          iconOnly
          onPress={action(`${type} icon only button clicked`)}
          style={styles.buttonStyles}
        />
      </View>

      <BpkText textStyle="sm" style={styles.bottomMargin}>Large</BpkText>
      <View style={styles.btnContainer}>
        <StoryButton
          large
          type={type}
          title="Button"
          onPress={action(`${type} pressed`)}
          style={styles.buttonStyles}
        />
        <StoryButton
          large
          type={type}
          selected
          title="Selected"
          onPress={action(`${type} selected pressed`)}
          style={styles.buttonStyles}
        />
        <StoryButton
          large
          type={type}
          disabled
          title="Disabled"
          onPress={action(`${type} disabled pressed, somehow`)}
          style={styles.buttonStyles}
        />
        <StoryButton
          large
          type={type}
          title="With icon"
          icon={<ArrowImage large type={type} />}
          onPress={action(`${type} with icon clicked`)}
          style={styles.buttonStyles}
        />
        <StoryButton
          large
          type={type}
          title="Icon only"
          icon={<ArrowImage large type={type} />}
          iconOnly
          onPress={action(`${type} icon only button clicked`)}
          style={styles.buttonStyles}
        />
      </View>
    </View>
  );
};

const allButtonStories = BUTTON_TYPES.map(generateButtonStoryForType);

storiesOf('BpkButton', module)
  .addDecorator(getStory =>
    <View style={styles.centered}>
      {getStory()}
    </View>,
  )
  .add('docs:primary', () => (
    <View>
      {generateButtonStoryForType('primary')}
    </View>
  ))
  .add('docs:secondary', () => (
    <View>
      {generateButtonStoryForType('secondary')}
    </View>
  ))
  .add('docs:destructive', () => (
    <View>
      {generateButtonStoryForType('destructive')}
    </View>
  ))
  .add('docs:featured', () => (
    <View>
      {generateButtonStoryForType('featured')}
    </View>
  ))
  .add('docs:withTheme', () => (
    <BpkThemeProvider theme={themeAttributes}>
      <ScrollView>
        <BpkText textStyle="xxl">Primary</BpkText>
        {generateButtonStoryForType('primary', themeAttributes)}
      </ScrollView>
    </BpkThemeProvider>
  ))
  .add('All Button Types', () => (
    <ScrollView>
      <BpkText textStyle="xxl">All Types</BpkText>
      {allButtonStories}
    </ScrollView>
  ))
  .add('Edge Cases', () => (
    <View>
      <BpkText textStyle="xxl">Edge Cases</BpkText>

      <BpkText textStyle="sm" style={styles.bottomMargin}>Long button titles</BpkText>
      <BpkButton
        type="primary"
        title="I have a really long title"
        onPress={action('Button with long title pressed')}
        style={styles.buttonStyles}
      />
      <BpkButton
        large
        type="primary"
        title="I also have a really long title"
        onPress={action('Large button with long title pressed')}
        style={styles.buttonStyles}
      />
      <BpkButton
        type="primary"
        title="I have an absurdly long title and an icon and may cause wrapping"
        icon={<ArrowImage />}
        onPress={action('Button with icon and long title pressed')}
        style={styles.buttonStyles}
      />
      <BpkButton
        large
        type="primary"
        title="I also have an absurdly long title and an icon and may cause wrapping"
        icon={<ArrowImage />}
        onPress={action('Large button with icon and long title pressed')}
        style={styles.buttonStyles}
      />
    </View>
  ));
