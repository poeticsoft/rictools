import { getElementById } from './compatdom'

export const TextToSpeech = {

  // https://developers.google.com/web/updates/2014/01/Web-apps-that-talk-Introduction-to-the-Speech-Synthesis-API

  /* SPEECH */

  var msg

  function startSpeech() {

    msg = new SpeechSynthesisUtterance();
    msg.text = 'Buenos días, empezamos a trabajaaaar???';
    msg.lang = 'es-ES';

    msg.onend = function(event) {

      console.log('Finished in ' + event.elapsedTime + ' seconds.');
    };

    msg.onerror = function(event) { 
      
      console.log('Error ' + event.error);
    };

    speechSynthesis.speak(msg);
  }

  function speak(text) {

    msg.text = text;
    speechSynthesis.speak(msg);
  }

  SpeechButton.addEventListener('click', startSpeech)
  SpeechButton.click()

  setTimeout(() => {
    
    speak('dame una orden')
  }, 3000)     
}