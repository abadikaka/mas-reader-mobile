/**
 * Created by michaelabadi on 9/3/17.
 */
import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  chapterRequest: null,
  chapterSuccess: ['chapterPayload'],
  chapterFailure: ['chapterError']
})

export const InkittCoreTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  chapterPayload: null,
  chapterFetching: null,
  chapterError: null
})

/* ------------- Reducers ------------- */

// request the inkitt chapter
export const chapterRequest = (state) =>
  state.merge({ chapterFetching: true })

// successful chapter request
export const chapterSuccess = (state, action) => {
  const { chapterPayload } = action
  return state.merge({ chapterFetching: false, chapterError: null, chapterPayload })
}

// failed to get the chapter
export const chapterFailure = (state, action) => {
  const { chapterError } = action
  return state.merge({chapterFetching: false, chapterError})
}
/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CHAPTER_REQUEST]: chapterRequest,
  [Types.CHAPTER_SUCCESS]: chapterSuccess,
  [Types.CHAPTER_FAILURE]: chapterFailure
})
