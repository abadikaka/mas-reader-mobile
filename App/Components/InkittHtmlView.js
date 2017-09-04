/**
 * Created by michaelabadi on 9/4/17.
 */
import React, { Component } from 'react'
import { Images } from '../Themes'
import PropTypes from 'prop-types'
import { Image, View, Text } from 'react-native'
import styles from './Styles/InkittHtmlViewStyle'
import HTMLView from 'react-native-htmlview'
import I18n from 'react-native-i18n'
import ExamplesRegistry from '../Services/ExamplesRegistry'

// Note that this file (App/Components/RoundedButton) needs to be
// imported in your app somewhere, otherwise your component won't be
// compiled and added to the examples dev screen.

// Ignore in coverage report
/* istanbul ignore next */
ExamplesRegistry.addComponentExample('Inkitt HTML View', () =>
  <InkittHtmlView
    chapterName=''
    chapterText=''
    chapterNumber={0}
    chapterWordCount={0}
    onLinkPress={() => window.alert('Inkitt Link Pressed!')}
  />
)

export default class InkittHtmlView extends Component {
  static propTypes = {
    onLinkPress: PropTypes.func,
    chapterName: PropTypes.string,
    chapterText: PropTypes.string,
    chapterNumber: PropTypes.number,
    chapterWordCount: PropTypes.number,
    children: PropTypes.string,
    navigator: PropTypes.object
  }

  render () {
    return (
      <View>
        <Image source={Images.inkittFamily} style={styles.avatarImg} resizeMode='cover' />
        <Text style={styles.headerNameText}>
          {this.props.chapterName + ',' + I18n.t('number') + ' : ' + this.props.chapterNumber}
        </Text>
        <HTMLView
          value={this.props.chapterText}
          stylesheet={styles}
        />
        <Text style={styles.wordCountText}>
          {I18n.t('wordCount') + ' : ' + this.props.chapterWordCount}
        </Text>
      </View>
    )
  }
}
