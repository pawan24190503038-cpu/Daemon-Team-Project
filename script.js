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

    if (!container) return;

    container.innerHTML = "";

    posts.forEach(post => {
        let div = document.createElement("div");
        div.className = "card";
        div.innerText = post;
        container.appendChild(div);
    });
}

// Load data on start
displayMood();
displayPosts();