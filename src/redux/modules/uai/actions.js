
import * as Actions from '~/redux/actions'

export const UAI_BASE = 'UAI_BASE'
export const uaiBase = data => (
  {
    type: UAI_BASE,
    payload: {
      data: data
    }
  }
)