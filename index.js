let counter = 0;

// Function to create a bubble
function createBubble() {
    const bubble = document.createElement("span");
    bubble.classList.add("bubble");

    // Random size for the bubble
    const size = Math.random() * 100 + 50; // Size between 50px and 150px
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;

    // Random position
    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.top = `${Math.random() * 80 + 10}%`; // Avoid top overlap with the counter

    // Apply a random color
    const randomHue = Math.random() * 360;
    bubble.style.background = `hsl(${randomHue}, 70%, 50%)`;

    // Append bubble to body
    document.body.appendChild(bubble);

    // Remove bubble after animation ends
    bubble.addEventListener("animationend", () => {
        bubble.remove();
    });

    // Increment counter on bubble click
    bubble.addEventListener("click", (e) => {
        e.stopPropagation(); // Prevent body click event
        counter++;
        updateCounter();
        bubble.remove(); // Remove bubble immediately on click
    });
}

// Function to update the counter in the DOM
function updateCounter() {
    document.getElementById("counter").textContent = counter;
}

// Add event listener to the body to spawn a bubble on click
document.body.addEventListener("click", createBubble);

// Auto-spawn bubbles every 1 second for added interactivity
setInterval(createBubble, 1000);
