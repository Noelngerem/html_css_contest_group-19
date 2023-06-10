function voiceTalk () {
    const paragraph = document.getElementById('wlcm-speech');
    const text = paragraph.innerText;
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
}

const delay = 3000;

setTimeout(voiceTalk, delay);