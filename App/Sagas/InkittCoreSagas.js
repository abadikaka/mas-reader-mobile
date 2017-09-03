/**
 * Created by michaelabadi on 9/3/17.
 */
import { call, put } from 'redux-saga/effects'
import InkittCoreActions from '../Redux/InkittCoreRedux'

export function * chapterRequest (api) {
  // make the call to the api
  const response = yield call(api.getChapter)
  if (response.status === 200) {
    // do json conversion here if needed
    yield put(InkittCoreActions.chapterSuccess(response.data.response))
  } else {
    // the error should come from API ( Wrong header etc )
    yield put(InkittCoreActions.chapterFailure('Error'))
  }
}
