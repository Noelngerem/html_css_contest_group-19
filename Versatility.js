function voiceTalk () {
    const paragraph = document.getElementById('wlcm-speech');
    const text = paragraph.innerText;
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
}

window.onload = voiceTalk();

function emailUs() {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "duenn1357@gmail.com",
        Password : "Noelngerem2004*",
        To : 'emmanuelngerem05@gmail.com',
        From : document.getElementById('email').value,
        Subject : "WELLNESS AVAIL",
        Body : "First name:" + document.getElementById("first-name").value
            + "<br> Last name:" + document.getElementById("last-name").value
            + "<br> Email:" + document.getElementById("email").value
            + "<br> Reach Out Info:" + document.getElementById("reach-out").value 
    }).then(
        alert("Reach Out received Successfully")
    );
}