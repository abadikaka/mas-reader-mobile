import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'
import RoundedButton from '../Components/RoundedButton'
import I18n from 'react-native-i18n'

export default class LaunchScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      roundedText: I18n.t('getStories')
    }
  }

  _handleStories (navigate) {
    navigate('ChapterScreen')
  }

  render () {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.mainLogo} style={styles.logo} />
          </View>
          <View style={styles.middlePadding} />
          <View style={styles.section} >
            <RoundedButton text={this.state.roundedText} onPress={() => this._handleStories(navigate)} />
          </View>
        </ScrollView>
      </View>
    )
  }
}
