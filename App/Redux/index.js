import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const appReducer = combineReducers({
    nav: require('./NavigationRedux').reducer,
    github: require('./GithubRedux').reducer,
    search: require('./SearchRedux').reducer,
    inkittCore: require('./InkittCoreRedux').reducer
  })

  const rootReducer = (state, action) => {
    return appReducer(state, action)
  }

  return configureStore(rootReducer, rootSaga)
}
