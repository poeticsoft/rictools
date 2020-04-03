import immutableUpdate from 'immutable-update'

const initialState = {
  
}

const reducers = { 

  TTS_INIT_SUCCESS: (state, action) => {

    return immutableUpdate(
      state,
      {}
    )
  },

  TTS_READY: (state, action) => {

    return immutableUpdate(
      state,
      {}
    )
  }
}

const tts = (state = initialState, action) => {

  return reducers[action.type] ? 
    reducers[action.type](state, action)
    :
    { ...state }
}

export default tts 