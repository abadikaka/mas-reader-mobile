/**
 * Created by michaelabadi on 9/3/17.
 */
import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin,
    backgroundColor: Colors.white
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  centered: {
    alignItems: 'center'
  },
  middlePadding: {
    padding: Metrics.doubleBaseMargin * 3
  },
  indicatorView: {
    ...StyleSheet.absoluteFillObject,
    position: 'absolute',
    zIndex: 1,
    top: Metrics.screenHeight / 4
  },
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
  },
})
