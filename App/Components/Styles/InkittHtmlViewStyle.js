/**
 * Created by michaelabadi on 9/4/17.
 */
import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  b: {
    fontWeight: Metrics.bold
  },
  imageView: {
    ...StyleSheet.absoluteFillObject,
    ...ApplicationStyles.center
  },
  avatarImg: {
    height: Metrics.baseMargin * 25,
    width: Metrics.screenWidth
  },
  headerNameText: {
    textAlign: 'center',
    color: Colors.white,
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.h4,
    backgroundColor: Colors.panther
  },
  wordCountText: {
    textAlign: 'center',
    color: Colors.white,
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.h6,
    backgroundColor: Colors.panther
  }
})
