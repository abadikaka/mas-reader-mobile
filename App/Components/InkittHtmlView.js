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

  calculateWpm () {
    let wpm = this.props.chapterWordCount / 60
    return Math.floor(wpm)
  }

  render () {
    return (
      <View>
        <Image source={Images.inkittFamily} style={styles.avatarImg} resizeMode='cover' />
        <View style={styles.textChapterView}>
          <View style={styles.chapterNameView}>
            <Text style={styles.headerNameText}>
              {this.props.chapterName}
            </Text>
          </View>
          <View style={styles.numberView}>
            <Text style={styles.headerNameText}>
              {this.props.chapterNumber}
            </Text>
          </View>
        </View>
        <View style={styles.htmlView}>
          <HTMLView
            value={this.props.chapterText}
            stylesheet={styles}
          />
        </View>
        {this.props.chapterName
          ? <Text style={styles.wordCountText}>
            {this.calculateWpm() + ' ' + I18n.t('minRead') + ' ( ' + this.props.chapterWordCount + I18n.t('word') + ' )'}
          </Text>
          : <View />
        }

      </View>
    )
  }
}
