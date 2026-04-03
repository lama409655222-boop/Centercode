
const loginModal = document.getElementById('login-modal');
const openBtn = document.getElementById('open-login-btn');
const closeBtn = document.getElementById('close-btn');
const loginForm = document.getElementById('login-form');
const loggedOutView = document.getElementById('logged-out-view');
const loggedInView = document.getElementById('logged-in-view');

openBtn.onclick = () => {
    loginModal.style.display = "flex";
}
closeBtn.onclick = () => {
    loginModal.style.display = "none";
}
window.onclick = (event) => {
    if (event.target == loginModal) {
        loginModal.style.display = "none";
    }
}
loginForm.onsubmit = (e) => {
    e.preventDefault(); 
    loginModal.style.display = "none";
    loggedOutView.style.display = "none";
    loggedInView.style.display = "block";
    localStorage.setItem("isLoggedIn", "true");
}
const userEmailInput = document.getElementById('user-email');
const userInitialDiv = document.getElementById('user-initial');

loginForm.onsubmit = (e) => {
    e.preventDefault(); 
    const emailValue = userEmailInput.value;
    if (emailValue) {
        const firstLetter = emailValue.charAt(0).toUpperCase();
        userInitialDiv.innerText = firstLetter;
        loginModal.style.display = "none";
        loggedOutView.style.display = "none";
        loggedInView.style.display = "flex";
        localStorage.setItem("userLetter", firstLetter);
    }
};


const courseCards = document.querySelectorAll('.course-card');
const namecoures = document.getElementById('namecoures');


courseCards.forEach(card => {
    card.addEventListener('click', () => {
        // البحث عن الاسم والصورة داخل البطاقة التي تم الضغط عليها فقط
        const name = card.querySelector('h3').innerText; // افترضنا أن الاسم في tag h3
        const imageSrc = card.querySelector('.course-image img').src;
           localStorage.setItem('selectedCourse', name);
        
  window.location.href = 'informatioofcourse.html'; // استبدل هذا باسم صفحتك
  namecoures.textContent = name;
    });
});
const courseCards1 = document.querySelectorAll('.detailed-card');
courseCards1.forEach(card => {
    card.addEventListener('click', () => {
  window.location.href = 'informatioofcourse.html'; // استبدل هذا باسم صفحتك
    });
});
