import { combineReducers } from 'redux';

import uai from './modules/uai/reducers'
import data from './modules/data/reducers'
import tts from './modules/tts/reducers'

const reducers = combineReducers({
  uai,
  data,
  tts
});

export default reducers;