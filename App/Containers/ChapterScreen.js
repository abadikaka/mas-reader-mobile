/**
 * Created by michaelabadi on 9/3/17.
 */
import React from 'react'
import { ScrollView } from 'react-native'
import {connect} from 'react-redux'
import InkittHtmlView from '../Components/InkittHtmlView'
import InkittCoreActions from '../Redux/InkittCoreRedux'
import CustomActivityIndicator from '../Components/CustomActivityIndicator'

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

  setupChapter () {
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

  checkChapter (newProps) {
    if (newProps.chapterPayload) {
      this.setState({
        chapterName: newProps.chapterPayload.name,
        chapterWordCount: newProps.chapterPayload.words_count,
        chapterText: newProps.chapterPayload.text,
        chapterNumber: newProps.chapterPayload.chapter_number
      })
    }
  }

  componentWillMount () {
    // setup initial Chapter if Redux exist
    this.setupChapter()
  }

  componentWillReceiveProps (newProps) {
    // check new Chapter after request the chapter
    this.checkChapter(newProps)
  }

  render () {
    return (
      <ScrollView bounces={false}>
        <InkittHtmlView chapterText={this.state.chapterText} chapterNumber={this.state.chapterNumber} chapterWordCount={this.state.chapterWordCount} chapterName={this.state.chapterName} />
        <CustomActivityIndicator fetching={this.props.chapterFetching} />
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
