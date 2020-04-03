
import * as Actions from '~/redux/actions'
import { init } from '~/utils/texttospeech'

export const ttsInit = data => (dispatch, getState) => {

  init()
}

export const TTS_READY = 'TTS_READY'
export const ttsReady = ready => (
  { 
    type: TTS_READY,
    payload: {
      ready: ready
    }
  }
)