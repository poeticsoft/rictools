import immutableUpdate from 'immutable-update'

const initialState = {
  
}

const reducers = { 

  UAI_GESTURE_TAP: (state, action) => {

    console.log('UAI_GESTURE_TAP')

    return immutableUpdate(
      state,
      {}
    )
  },

  UAI_GESTURE_DOUBLETAP: (state, action) => {

    console.log('UAI_GESTURE_DOUBLETAP')

    return immutableUpdate(
      state,
      {}
    )
  },
  UAI_GESTURE_PAN_UP: (state, action) => {
    
    console.log('UAI_GESTURE_PAN_UP')

    return immutableUpdate(
      state,
      {}
    )
  },
  
  UAI_GESTURE_PAN_DOWN: (state, action) => {
    
    console.log('UAI_GESTURE_PAN_DOWN')

    return immutableUpdate(
      state,
      {}
    )
  },

  UAI_GESTURE_PAN_LEFT: (state, action) => {
    
    console.log('UAI_GESTURE_PAN_LEFT')

    return immutableUpdate(
      state,
      {}
    )
  },

  UAI_GESTURE_PAN_RIGHT: (state, action) => {
    
    console.log('UAI_GESTURE_PAN_RIGHT')

    return immutableUpdate(
      state,
      {}
    )
  },

  UAI_GESTURE_PRESS: (state, action) => {
    
    console.log('UAI_GESTURE_PRESS')

    return immutableUpdate(
      state,
      {}
    )
  }
}

const uai = (state = initialState, action) => {

  return reducers[action.type] ? 
    reducers[action.type](state, action)
    :
    { ...state }
}

export default uai 