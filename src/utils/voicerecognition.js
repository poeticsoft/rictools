export const VoiceRecognition = () => {

  // https://codeburst.io/html5-speech-recognition-api-670846a50e92

    /* recognize */      

    var recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;

    function startRecognition(event) {
      
      final_transcript = '';
      recognition.lang = 'es-ES';
      recognition.start();
    }      

    function onResult(event) {

      speak('onresult')

      var interim_transcript = '';

      for (var i = event.resultIndex; i < event.results.length; ++i) {

        if (event.results[i].isFinal) {

          final_transcript += event.results[i][0].transcript;

        } else {

          interim_transcript += event.results[i][0].transcript;
        }
      }

      speak(final_transcript)
    }

    function onEnd(event) {

      speak('corto y vuelvo a empezar')
      startRecognition()
    }

    recognition.onstart = function() { speak('onstart') }
    recognition.onresult = onResult
    recognition.onerror = function(event) { speak('onerror') }
    recognition.onend = onEnd

    RecognizeButton.addEventListener('click', startRecognition)
    RecognizeButton.click()
}