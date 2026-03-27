// =====================
// Mood Tracker
// =====================
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

// =====================
// Forum (Community)
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
// Appointment Booking
// =====================
function bookAppointment() {
    let name = document.getElementById("name").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;

    if (name === "" || date === "" || time === "") {
        alert("Please fill all fields!");
        return;
    }

    let appointment = {
        name: name,
        date: date,
        time: time
    };

    localStorage.setItem("appointment", JSON.stringify(appointment));

    document.getElementById("confirmation").innerText =
        "✅ Appointment booked for " + name + " on " + date + " at " + time;
}

// =====================
// Load data on page start
// =====================
displayMood();
displayPosts();