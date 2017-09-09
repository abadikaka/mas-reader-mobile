/**
 * Created by michaelabadi on 9/4/17.
 */
import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  b: {
    fontWeight: Metrics.bold
  },
  p: {
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.medium
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
    fontSize: Fonts.size.h4
  },
  wordCountText: {
    textAlign: 'center',
    color: Colors.white,
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.h6,
    backgroundColor: Colors.panther
  },
  textChapterView: {
    flexDirection: 'row',
    height: 80
  },
  numberView: {
    flex: 0.2,
    margin: Metrics.baseMargin + 5,
    padding: Metrics.baseMargin - 5,
    backgroundColor: Colors.panther,
    borderRadius: Metrics.baseMargin
  },
  chapterNameView: {
    flex: 0.8,
    margin: Metrics.baseMargin + 5,
    padding: Metrics.baseMargin - 5,
    backgroundColor: Colors.panther,
    borderRadius: Metrics.baseMargin
  },
  htmlView: {
    padding: Metrics.baseMargin,
    backgroundColor: Colors.white
  }
})
