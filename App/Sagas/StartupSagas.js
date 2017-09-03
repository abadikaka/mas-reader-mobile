import { select } from 'redux-saga/effects'

// exported to make available for tests
export const selectAvatar = (state) => state.inkittCore.chapterPayload

// process STARTUP actions
export function * startup () {
  console.log(yield select(selectAvatar))
}
