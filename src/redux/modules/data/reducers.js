import immutableUpdate from 'immutable-update'

const initialState = {
  
}

const reducers = { 

  DATA_LOAD_DATA_SUCCESS: (state, action) => {

    return immutableUpdate(
      state,
      {}
    )
  }
}

const data = (state = initialState, action) => {

  return reducers[action.type] ? 
    reducers[action.type](state, action)
    :
    { ...state }
}

export default data 