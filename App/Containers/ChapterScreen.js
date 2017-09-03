/**
 * Created by michaelabadi on 9/3/17.
 */
import React from 'react'
import { ScrollView, Text, Image, View, ActivityIndicator } from 'react-native'
import {connect} from 'react-redux'
import {Metrics, Colors, Images} from '../Themes'
import styles from './Styles/ChapterScreenStyle'

import InkittCoreActions from '../Redux/InkittCoreRedux'
import HTMLView from 'react-native-htmlview'
import I18n from 'react-native-i18n'

class ChapterScreen extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      chapterName: '',
      chapterWordCount: 0,
      chapterText: '<div></div>',
      chapterNumber: 0
    }
  }

  componentWillMount () {
    if (!this.props.chapterPayload) {
      this.props.chapterRequest()
    } else {
      this.setState({
        chapterName: this.props.chapterPayload.name,
        chapterWordCount: this.props.chapterPayload.words_count,
        chapterText: this.props.chapterPayload.text,
        chapterNumber: this.props.chapterPayload.chapter_number
      })
    }
  }

  componentWillReceiveProps (newProps) {
    if (newProps.chapterPayload) {
      this.setState({
        chapterName: newProps.chapterPayload.name,
        chapterWordCount: newProps.chapterPayload.words_count,
        chapterText: newProps.chapterPayload.text,
        chapterNumber: newProps.chapterPayload.chapter_number
      })
    }
  }

  renderWait = () => {
    if (this.props.chapterFetching) {
      return (
        <View style={styles.indicatorView}>
          <ActivityIndicator
            animating
            color={Colors.fire}
            style={[{'transform': [{scale: 2}]}, {backgroundColor: Colors.transparent, marginTop: Metrics.doubleBaseMargin}]}
            size='large'
          />
        </View>
      )
    } else {
      return null
    }
  }

  render () {
    return (
      <ScrollView bounces={false}>
        <Image source={Images.inkittFamily} style={styles.avatarImg} resizeMode='cover' />
        <Text style={styles.headerNameText}>
          {this.state.chapterName + ',' + I18n.t('number') + ' : ' + this.state.chapterNumber}
        </Text>
        <HTMLView
          value={this.state.chapterText}
          stylesheet={styles}
        />
        <Text style={styles.wordCountText}>
          {I18n.t('wordCount') + ' : ' + this.state.chapterWordCount}
        </Text>
        {this.renderWait()}
      </ScrollView>

    )
  }
}

ChapterScreen.propTypes = {}

const mapStateToProps = (state) => {
  return {
    chapterPayload: state.inkittCore.chapterPayload,
    chapterError: state.inkittCore.chapterError,
    chapterFetching: state.inkittCore.chapterFetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    chapterRequest: () => dispatch(InkittCoreActions.chapterRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChapterScreen)
