// =========================================================
// Data Structures site — interactions
// Built by Prince Ram
// =========================================================

// In-memory "database" for this demo (no backend / no localStorage).
const demoAccounts = [];

// ---------- Page navigation (Home / About / Contact) ----------
function showSection(target) {
  document.querySelectorAll('.page-section').forEach((sec) => {
    sec.classList.toggle('active', sec.id === target);
  });
  document.querySelectorAll('.nav-link').forEach((link) => {
    link.classList.toggle('active', link.dataset.target === target);
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.querySelectorAll('[data-target]').forEach((el) => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    showSection(el.dataset.target);
  });
});

// ---------- Modal open/close ----------
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const tabLogin = document.getElementById('tabLogin');
const tabSignup = document.getElementById('tabSignup');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const breadcrumbs = document.getElementById('breadcrumbs');

function openModal(mode) {
  modalOverlay.classList.add('open');
  setMode(mode || 'login');
}
function closeModal() {
  modalOverlay.classList.remove('open');
}

document.getElementById('openLogin').addEventListener('click', () => openModal('login'));
document.getElementById('openSignup').addEventListener('click', () => openModal('signup'));
document.getElementById('heroSignup').addEventListener('click', () => openModal('signup'));
modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

function setMode(mode) {
  const isLogin = mode === 'login';
  tabLogin.classList.toggle('active', isLogin);
  tabSignup.classList.toggle('active', !isLogin);
  loginForm.classList.toggle('hidden', !isLogin);
  signupForm.classList.toggle('hidden', isLogin);
  breadcrumbs.classList.toggle('hidden', isLogin);
  if (!isLogin) goToStep(1);
}
tabLogin.addEventListener('click', () => setMode('login'));
tabSignup.addEventListener('click', () => setMode('signup'));

// ---------- Password show/hide (eye toggle) ----------
document.querySelectorAll('.eye-toggle').forEach((btn) => {
  btn.addEventListener('click', () => {
    const input = document.getElementById(btn.dataset.for);
    const showing = input.type === 'text';
    input.type = showing ? 'password' : 'text';
    btn.textContent = showing ? '👁' : '🙈';
    btn.classList.toggle('showing', !showing);
  });
});

// ---------- Signup: step navigation + breadcrumbs ----------
function goToStep(step) {
  document.querySelectorAll('.signup-step').forEach((s) => {
    s.classList.toggle('hidden', Number(s.dataset.step) !== step);
  });
  document.querySelectorAll('.crumb').forEach((c) => {
    const n = Number(c.dataset.step);
    c.classList.toggle('active', n === step);
    c.classList.toggle('done', n < step);
  });
}

document.querySelectorAll('.next-step').forEach((btn) => {
  btn.addEventListener('click', () => {
    const nextStep = Number(btn.dataset.next);
    if (nextStep === 2 && !validateSignupStep1()) return;
    if (nextStep === 3 && !validateSignupStep2()) return;
    if (nextStep === 3) fillReview();
    goToStep(nextStep);
  });
});
document.querySelectorAll('.prev-step').forEach((btn) => {
  btn.addEventListener('click', () => goToStep(Number(btn.dataset.prev)));
});

function fillReview() {
  document.getElementById('reviewUsername').textContent = document.getElementById('signupUsername').value;
  document.getElementById('reviewEmail').textContent = document.getElementById('signupEmail').value;
}

// ---------- Validation helpers ----------
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateSignupStep1() {
  const email = document.getElementById('signupEmail').value.trim();
  const errorEl = document.getElementById('signupEmailError');
  if (!emailPattern.test(email)) {
    errorEl.textContent = 'Enter a valid email address, like name@example.com';
    return false;
  }
  errorEl.textContent = '';
  return true;
}

function checkPasswordRules(password) {
  const rules = {
    length: password.length >= 8,
    upper: /[A-Z]/.test(password),
    lower: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[!@#$%^&*(),.?":{}|<>_\-]/.test(password),
  };
  document.querySelectorAll('#passwordRules li').forEach((li) => {
    li.classList.toggle('met', rules[li.dataset.rule]);
  });
  return Object.values(rules).every(Boolean);
}

document.getElementById('signupPassword').addEventListener('input', (e) => {
  checkPasswordRules(e.target.value);
});

function validateSignupStep2() {
  const password = document.getElementById('signupPassword').value;
  const confirm = document.getElementById('signupConfirmPassword').value;
  const errorEl = document.getElementById('confirmPasswordError');

  if (!checkPasswordRules(password)) {
    errorEl.textContent = 'Your password needs to meet every requirement above.';
    return false;
  }
  if (password !== confirm) {
    errorEl.textContent = "Passwords don't match yet.";
    return false;
  }
  errorEl.textContent = '';
  return true;
}

// ---------- Login submit ----------
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;
  const emailError = document.getElementById('loginEmailError');
  const passwordError = document.getElementById('loginPasswordError');
  const note = document.getElementById('loginNote');

  emailError.textContent = '';
  passwordError.textContent = '';
  note.textContent = '';
  note.classList.remove('error');

  let valid = true;
  if (!emailPattern.test(email)) {
    emailError.textContent = 'Enter a valid email address.';
    valid = false;
  }
  if (password.length === 0) {
    passwordError.textContent = 'Enter your password.';
    valid = false;
  }
  if (!valid) return;

  note.textContent = "You're logged in — welcome back to the journey!";
  setTimeout(closeModal, 1200);
});

// ---------- Signup submit (final confirm) ----------
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('signupUsername').value.trim();
  const email = document.getElementById('signupEmail').value.trim();
  const password = document.getElementById('signupPassword').value;
  const note = document.getElementById('signupNote');

  demoAccounts.push({ username, email, password });
  note.textContent = `Account created — welcome aboard, ${username}!`;
  note.classList.remove('error');
  setTimeout(closeModal, 1400);
});

// ---------- Contact form (demo submit, no backend) ----------
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const note = document.getElementById('contactNote');
  note.textContent = "Thanks — your message has been sent. We'll get back to you soon.";
});