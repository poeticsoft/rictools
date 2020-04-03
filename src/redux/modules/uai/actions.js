
import * as Actions from '~/redux/actions'

import { speak } from '~/utils/texttospeech'
const panDirections = {
  2: 'LEFT',
  4: 'RIGHT',
  8: 'UP',
  16: 'DOWN'
}

export const uaiDoAction = data => (dispatch, getState) => {
  if(
    data.type == 'pan' && 
    data.direction == 1
  ) return
  
  const actionName = 'UAI_GESTURE_'+
    data.type.toUpperCase() + 
    (
      data.type == 'pan' && panDirections[data.direction] ? 
        '_' + panDirections[data.direction]
        :
        ''
    )

    speak(actionName.replace(/\_/g, ' '))


  dispatch({ type: actionName})
}