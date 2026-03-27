// =====================
// SPLASH SCREEN
// =====================
function goToHome() {
    let body = document.getElementById("splashBody");

    if (body) {
        body.classList.add("fade-out");

        setTimeout(() => {
            window.location.href = "index.html";
        }, 800);
    } else {
        window.location.href = "index.html";
    }
}

// =====================
// MOOD TRACKER
// =====================
function saveMood(mood) {
    localStorage.setItem("userMood", mood);
    displayMood();
}

function displayMood() {
    let mood = localStorage.getItem("userMood");
    let el = document.getElementById("moodDisplay");

    if (mood && el) {
        el.innerText = "Last Mood: " + mood;
    }
}

// =====================
// COMMUNITY
// =====================
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

    if (!container) return;

    container.innerHTML = "";

    posts.forEach(post => {
        let div = document.createElement("div");
        div.className = "card";
        div.innerText = post;
        container.appendChild(div);
    });
}

// =====================
// APPOINTMENT
// =====================
function bookAppointment() {
    let name = document.getElementById("name")?.value;
    let date = document.getElementById("date")?.value;
    let time = document.getElementById("time")?.value;

    if (!name || !date || !time) {
        alert("Please fill all fields!");
        return;
    }

    let confirm = document.getElementById("confirmation");

    if (confirm) {
        confirm.innerText =
            `✅ Appointment booked for ${name} on ${date} at ${time}`;
    }
}

// =====================
// CHATBOT
// =====================
function sendMessage() {
    let input = document.getElementById("userInput");
    let message = input.value.trim();

    if (message === "") return;

    addMessage("You", message);

    setTimeout(() => {
        addMessage("Bot", getReply(message));
    }, 500);

    input.value = "";
}

function addMessage(sender, text) {
    let chatBox = document.getElementById("chatBox");
    if (!chatBox) return;

    let msg = document.createElement("div");
    msg.classList.add("message");

    if (sender === "You") {
        msg.classList.add("user");
    } else {
        msg.classList.add("bot");
    }

    msg.innerText = text;

    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getReply(msg) {
    msg = msg.toLowerCase();

    if (msg.includes("sad")) return "I'm here for you 💙";
    if (msg.includes("happy")) return "That's great 😊";
    if (msg.includes("stress")) return "Take a deep breath 🌿";

    return "Tell me more...";
}

// =====================
// LOAD
// =====================
document.addEventListener("DOMContentLoaded", () => {
    displayMood();
    displayPosts();
});

// =====================
// HOME TOGGLE
// =====================
function toggleMode() {
    let toggle = document.getElementById("helpToggle");
    let left = document.getElementById("leftLabel");
    let right = document.getElementById("rightLabel");

    if (!toggle || !left || !right) return;

    if (toggle.checked) {
        left.classList.remove("active-label");
        right.classList.add("active-label");
    } else {
        right.classList.remove("active-label");
        left.classList.add("active-label");
    }
}