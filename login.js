const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register_btn');
const loginBtn = document.querySelector('.login_btn');
const loginForm = document.querySelector('#loginForm');
const registerForm = document.querySelector('#registerForm');
const alertBox = document.getElementById('customAlert');
const alertMessage = document.getElementById('alertMessage');

registerBtn?.addEventListener('click', () => {
  container?.classList.add('active');
});

loginBtn?.addEventListener('click', () => {
  container?.classList.remove('active');
});

function showAlert(message) {
  if (!alertBox || !alertMessage) return;
  alertMessage.textContent = message;
  alertBox.classList.remove('hidden');
}

function closeAlert() {
  alertBox?.classList.add('hidden');
}

loginForm?.addEventListener('submit', function (e) {
  e.preventDefault();

  const username = loginForm.querySelector('input[type="text"]')?.value.trim();
  const password = loginForm.querySelector('input[type="password"]')?.value.trim();

  if (!username || !password) {
    showAlert('Please enter both username and password.');
    return;
  }

  localStorage.setItem('isLoggedIn', 'true');
  localStorage.setItem('studentUser', JSON.stringify({ username }));
  window.location.href = 'dashboard.html';
});

registerForm?.addEventListener('submit', function (e) {
  e.preventDefault();

  const username = registerForm.querySelector('input[type="text"]')?.value.trim();
  const email = registerForm.querySelector('input[type="email"]')?.value.trim();
  const password = registerForm.querySelector('input[type="password"]')?.value.trim();

  if (!username || !email || !password) {
    showAlert('Please fill in all registration fields.');
    return;
  }

  localStorage.setItem('isLoggedIn', 'true');
  localStorage.setItem('studentUser', JSON.stringify({ username, email }));
  window.location.href = 'dashboard.html';
});