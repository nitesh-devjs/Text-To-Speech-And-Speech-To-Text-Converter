    // Text to Speech
    function textToSpeech() {
      const text = document.getElementById("text").value;
      if (!text.trim()) {
        alert("Please enter some text to speak.");
        return;
      }

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US'; // Change to your desired language
      speechSynthesis.speak(utterance);
    }

    // Speech to Text
    function speechToText() {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SpeechRecognition) {
        alert("Speech Recognition not supported. Try using Google Chrome.");
        return;
      }

      const recognition = new SpeechRecognition();
      recognition.lang = 'en-US';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.start();

      recognition.onstart = () => {
        document.getElementById("text").value = "Listening...";
      };

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        document.getElementById("text").value = transcript;
      };

      recognition.onerror = (event) => {
        document.getElementById("text").value = "Error: " + event.error;
      };
    }