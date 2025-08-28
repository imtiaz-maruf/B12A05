let callCount = 0;
let copyCount = 0;
let historyList = document.getElementById("history-list");
let callCountElement = document.getElementById("call-count");
let copyCountElement = document.getElementById("copy-count");

document.addEventListener("DOMContentLoaded", function () {
    // --- Love Count ---
    const loveCountEl = document.getElementById("love-count");
    let loveCount = 0;

    document.querySelectorAll(".btn-love").forEach(button => {
        button.addEventListener("click", function () {
            loveCount++;
            loveCountEl.textContent = loveCount;
        });
    });

    // --- Copy Number ---
    document.querySelectorAll(".btn-copy").forEach(button => {
        button.addEventListener("click", function () {
            const card = this.closest(".card");
            const number = card.querySelector(".number").textContent.trim();

            navigator.clipboard.writeText(number).then(() => {
                alert(`${number} copied.`);

            }).catch(err => console.error("Failed to copy: ", err));
        });
    });

    // --- Call Functionality ---
    const coinCountEl = document.getElementById("coin-count");
    let coinCount = parseInt(coinCountEl.textContent, 10);

    const historyList = document.querySelector(".history-list");

    document.querySelectorAll(".btn-call").forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent actual call from triggering

            const card = this.closest(".card");
            const sub = card.querySelector(".sub").textContent.trim();
            const number = card.querySelector(".number").textContent.trim();

            // Show alert
            alert(`Calling.. ${sub} ${number}`);

            // Deduct 20 coins
            if (coinCount >= 20) {
                coinCount -= 20;
                coinCountEl.textContent = coinCount;
            } else {
                alert("Not enough coins!");
                return;
            }

            // Add to Call History
            const currentTime = new Date().toLocaleTimeString();

            const li = document.createElement("li");
            li.classList.add("history-item");
            li.innerHTML = `
                <div class="history-item-left">
                    <strong>${card.querySelector("h3").textContent.trim()}</strong>
                    <span class="tiny">${number}</span>
                </div>
                <div class="history-item-right">
                    <time>${currentTime}</time>
                </div>
            `;
            // historyList.prepend(li); // Add at the top of history
            historyList.appendChild(li);
        });
    });
});



// Handle Call Button Click
document.querySelectorAll(".btn-call").forEach(btn => {
    btn.addEventListener("click", function () {
        let number = this.getAttribute("data-number");
        callCount++;
        callCountElement.textContent = callCount;

        // Add to history
        let li = document.createElement("li");
        li.textContent = `Called: ${number}`;
        historyList.appendChild(li);
    });
});

// Handle Copy Button Click
document.querySelectorAll(".btn-copy").forEach(btn => {
    btn.addEventListener("click", function () {
        let number = this.getAttribute("data-number");
        navigator.clipboard.writeText(number).then(() => {
            copyCount++;
            copyCountElement.textContent = copyCount;

            // Add to history
            let li = document.createElement("li");
            li.textContent = `Copied: ${number}`;
            historyList.appendChild(li);
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const clearBtn = document.getElementById("btn-clear");
    const historyList = document.querySelector(".history-list");

    clearBtn.addEventListener("click", () => {
        historyList.innerHTML = "";
        alert("Call history cleared.");
    });
});

