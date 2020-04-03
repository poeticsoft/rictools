import { getElementById } from './compatdom'
import * as Actions from '~/redux/actions'
import store from '~/redux/store'

let msg

const startSpeech = () => {

  const SpeechButton = getElementById('SpeechButton')

  msg = new SpeechSynthesisUtterance();
  msg.lang = 'es-ES';

  msg.text = 'Buenos días, empezamos a trabajaaaar???';

  msg.onend = function(event) { store.dispatch(Actions.ttsReady(true)) };
  msg.onerror = function(event) { store.dispatch(Actions.ttsReady('Error ' + event.error)); };

  speechSynthesis.speak(msg);
}

export const init = () => {

  const SpeechButton = getElementById('SpeechButton')

  console.log(SpeechButton)

  SpeechButton.addEventListener('click', startSpeech)
  SpeechButton.click()
}

export const speak = text => {

  store.dispatch(Actions.ttsReady(false))

  msg.text = text;
  speechSynthesis.speak(msg);
}