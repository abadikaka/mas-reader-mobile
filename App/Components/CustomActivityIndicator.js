/**
 * Created by michaelabadi on 9/4/17.
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ActivityIndicator, View } from 'react-native'
import { Colors, Metrics } from '../Themes'
import styles from './Styles/CustomActivityIndicatorStyle'
import ExamplesRegistry from '../Services/ExamplesRegistry'

// Note that this file (App/Components/RoundedButton) needs to be
// imported in your app somewhere, otherwise your component won't be
// compiled and added to the examples dev screen.

// Ignore in coverage report
/* istanbul ignore next */
ExamplesRegistry.addComponentExample('Custom Activity Indicator', () =>
  <CustomActivityIndicator
    fetching
  />
)

export default class CustomActivityIndicator extends Component {
  static propTypes = {
    fetching: PropTypes.bool
  }

  render () {
    if (this.props.fetching) {
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
}
