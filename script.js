// Mood Tracker
function saveMood(mood) {
    localStorage.setItem("userMood", mood);
    displayMood();
}

function displayMood() {
    let mood = localStorage.getItem("userMood");
    if (mood) {
        document.getElementById("moodDisplay").innerText = "Last Mood: " + mood;
    }
}

// Forum
function addPost() {
    let input = document.getElementById("postInput");
    let text = input.value.trim();
    if (text === "") return;

    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.unshift(text);
    localStorage.setItem("posts", JSON.stringify(posts));

    input.value = "";
    displayPosts();
}

function displayPosts() {
    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    let container = document.getElementById("postsContainer");
    container.innerHTML = "";

    posts.forEach(post => {
        let div = document.createElement("div");
        div.className = "card";
        div.innerText = post;
        container.appendChild(div);
    });
}

// Appointment
function bookAppointment() {
    let name = document.getElementById("name").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;

    if (!name || !date || !time) {
        alert("Fill all fields");
        return;
    }

    document.getElementById("confirmation").innerText =
        `Appointment booked for ${name} on ${date} at ${time}`;
}

// Chatbot
function sendMessage() {
    let input = document.getElementById("userInput");
    let msg = input.value.trim();
    if (msg === "") return;

    addMessage("You", msg);

    setTimeout(() => {
        addMessage("Friend 🤖", getReply(msg));
    }, 500);

    input.value = "";
}

function addMessage(sender, text) {
    let chatBox = document.getElementById("chatBox");
    let p = document.createElement("p");
    p.innerHTML = `<strong>${sender}:</strong> ${text}`;
    chatBox.appendChild(p);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getReply(msg) {
    msg = msg.toLowerCase();

    if (msg.includes("sad")) return "I'm here for you 💙";
    if (msg.includes("happy")) return "That's great 😊";
    if (msg.includes("stress")) return "Take a deep breath 🌿";

    return "Tell me more...";
}

// Load data
displayMood();
displayPosts();