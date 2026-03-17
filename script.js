const words = ["Frontend Developer", "UI Designer", "Web Creator"];
let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type() {
    current = words[i];

    if (!isDeleting) {
        document.querySelector(".typing").textContent = current.substring(0, j++);
        if (j > current.length) {
            isDeleting = true;
            setTimeout(type, 1000);
            return;
        }
    } else {
        document.querySelector(".typing").textContent = current.substring(0, j--);
        if (j === 0) {
            isDeleting = false;
            i = (i + 1) % words.length;
        }
    }

    setTimeout(type, isDeleting ? 50 : 100);
}

type();
const navLinks = document.querySelectorAll(".sidebar a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
    });
});