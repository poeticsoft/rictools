import immutableUpdate from 'immutable-update'

const initialState = {
  
}

const reducers = { 

  UAI_BASE: (state, action) => {

    return immutableUpdate(
      state,
      {}
    )
  }
}

const uai = (state = initialState, action) => reducers[action.type] ? 
  reducers[action.type](state, action)
  :
  { ...state }

export default uai 