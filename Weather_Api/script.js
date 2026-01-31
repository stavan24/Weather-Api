// ===== Cursor Follow =====
const cursor = document.getElementById("cursor");
document.addEventListener("mousemove", (e) => {
  if (cursor) {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  }
});

// ===== Navigation =====
function goNext() {
  document.body.style.opacity = "0";
  setTimeout(() => {
    window.location.href = "weather.html";
  }, 400);
}

function goAbout() {
  document.body.style.opacity = "0";
  setTimeout(() => {
    window.location.href = "about.html";
  }, 400);
}
function goIndex() {
  document.body.style.opacity = "0";
  setTimeout(() => {
    window.location.href = "index.html";
  }, 400);
}

// ===== Reveal Message =====
const btn = document.getElementById("nextBtn");
const intro = document.getElementById("intro");
const msg = document.getElementById("message");
const continueBtn = document.getElementById("continueBtn");

if (btn && intro && msg && continueBtn) {
  btn.addEventListener("click", () => {
    // Hide intro block
    intro.classList.add("hidden");

    // Show message block
    msg.classList.remove("hidden");

    // Optional: intensify cursor glow
    if(cursor) {
      cursor.style.background = "radial-gradient(circle, rgba(255,105,180,0.6), transparent 60%)";
    }

    // The message stays until user clicks Continue
    // No auto-fade
  });
}
