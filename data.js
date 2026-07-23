/* ---------------- Curriculum Data ---------------- */
const MODULES = [
  {
    id: "m1",
    title: "1.0 Foundations of Data Structures",
    badgeTitle: "Foundations Pioneer",
    badgeIcon: "🧱",
    lessons: [
      { id: "1.0.1", title: "1.0.1 Welcome to the Journey", kind: "reading", body: "Data structures are how programs remember. Every algorithm you'll ever write depends on picking the right container for the job. In this module, you'll meet the six core structures and the vocabulary engineers use to talk about them." },
      { id: "1.0.2", title: "1.0.2 What is a Data Structure?", kind: "reading", body: "A data structure is a way of organizing and storing data so it can be accessed and modified efficiently. Think of it as the shape of your memory: an array is a shelf, a linked list is a chain of sticky notes, a tree is a family diagram." },
      { id: "1.0.3", title: "1.0.3 Video — Why Structures Matter", kind: "video", body: "▶ In this video walkthrough, we compare a naive O(n²) approach with a well-chosen structure that solves the same problem in O(n log n)." },
      { id: "1.0.4", title: "1.0.4 Activity — Match the Structure", kind: "activity", body: "Match each real-world problem (undo stack, print queue, phonebook, social graph) to the data structure that fits best. Check your answer at the bottom of the lesson." },
      { id: "1.0.5", title: "1.0.5 Module Check", kind: "activity", body: "A short knowledge check. Get 4/5 to complete this module." }
    ]
  },
  {
    id: "m2",
    title: "1.1 Linear Structures — Arrays, Lists, Stacks, Queues",
    badgeTitle: "Linear Master",
    badgeIcon: "⚡",
    lessons: [
      { id: "1.1.1", title: "1.1.1 Arrays and Indexing", kind: "reading", body: "Arrays store items in contiguous memory. Access is O(1). Insertion in the middle is O(n). Great when you know the size up front." },
      { id: "1.1.2", title: "1.1.2 Linked Lists", kind: "reading", body: "A linked list trades random access for cheap insertion. Each node points to the next; some point both ways. Traversal is linear." },
      { id: "1.1.3", title: "1.1.3 Stacks — Last In, First Out", kind: "reading", body: "Stacks power function calls, undo history, and expression parsing. Two operations rule everything: push and pop." },
      { id: "1.1.4", title: "1.1.4 Queues — First In, First Out", kind: "video", body: "▶ Watch how a queue schedules print jobs, keyboard input, and BFS traversals." },
      { id: "1.1.5", title: "1.1.5 Activity — Build a Stack", kind: "activity", body: "Implement push, pop, and peek. Try it in the embedded sandbox below." },
      { id: "1.1.6", title: "1.1.6 Module Check", kind: "activity", body: "A short knowledge check on linear structures." }
    ]
  },
  {
    id: "m3",
    title: "1.2 Non-Linear Structures — Trees and Graphs",
    badgeTitle: "Graph Explorer",
    badgeIcon: "🌳",
    lessons: [
      { id: "1.2.1", title: "1.2.1 Trees and Hierarchy", kind: "reading", body: "Trees model hierarchy: file systems, DOMs, org charts. A binary search tree lets you find an item in O(log n) on average." },
      { id: "1.2.2", title: "1.2.2 Traversals — DFS and BFS", kind: "reading", body: "Depth-first goes deep before wide. Breadth-first sweeps level by level. Same nodes, different order — and different problems solved." },
      { id: "1.2.3", title: "1.2.3 Graphs — Nodes and Edges", kind: "video", body: "▶ Graphs are the shape of the internet, social networks, and road maps. Learn adjacency lists vs. matrices." },
      { id: "1.2.4", title: "1.2.4 Activity — Traverse a Graph", kind: "activity", body: "Given a small graph, list the visit order for DFS and BFS starting from node A." },
      { id: "1.2.5", title: "1.2.5 Module Check", kind: "activity", body: "A short knowledge check on trees and graphs." }
    ]
  },
  {
    id: "m4",
    title: "1.3 Core Operations — Insert, Delete, Search, Sort",
    badgeTitle: "Operations Specialist",
    badgeIcon: "🏆",
    lessons: [
      { id: "1.3.1", title: "1.3.1 Insertion and Deletion", kind: "reading", body: "The cost of adding or removing depends entirely on the structure. We'll compare arrays, lists, and trees side by side." },
      { id: "1.3.2", title: "1.3.2 Searching", kind: "reading", body: "Linear search, binary search, hash lookup. Same goal, wildly different cost." },
      { id: "1.3.3", title: "1.3.3 Sorting Fundamentals", kind: "video", body: "▶ Bubble, insertion, merge, quick — a tour of the classics and when each one shines." },
      { id: "1.3.4", title: "1.3.4 Activity — Big-O Sort", kind: "activity", body: "Rank the operations by their worst-case complexity." },
      { id: "1.3.5", title: "1.3.5 Final Check", kind: "activity", body: "The course wrap-up quiz. 8/10 unlocks your completion badge." }
    ]
  }
];

/* ---------------- Application State ---------------- */
let registeredAccount = null; // Stores created account
let currentAccount = null;    // Stores logged-in account
let currentTheme = "dark";
let completedLessons = new Set();
let claimedBadges = new Set();
let activeLessonId = MODULES[0].lessons[0].id;
let openModules = new Set([MODULES[0].id]);
let searchQuery = "";
let currentView = "course"; // 'course' | 'about' | 'contact' | 'profile'

/* ---------------- DOM Initializations ---------------- */
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initAuthEvents();
  initAppEvents();
});

/* ---------------- Theme Handlers ---------------- */
function initTheme() {
  document.documentElement.setAttribute("data-theme", currentTheme);
  const themeBtns = [
    document.getElementById("theme-toggle-auth"),
    document.getElementById("theme-toggle-app"),
    document.getElementById("theme-toggle-main")
  ];

  themeBtns.forEach((btn) => {
    if (btn) {
      btn.addEventListener("click", () => {
        currentTheme = currentTheme === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", currentTheme);
        themeBtns.forEach((b) => (b.textContent = currentTheme === "dark" ? "☀" : "☾"));
      });
    }
  });
}

/* ---------------- Authentication Logic ---------------- */
function initAuthEvents() {
  const tabLogin = document.getElementById("tab-login");
  const tabSignup = document.getElementById("tab-signup");
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");

  // Tab Switcher
  tabLogin.addEventListener("click", () => showAuthTab("login"));
  tabSignup.addEventListener("click", () => showAuthTab("signup"));

  // Password Visibility Toggles
  setupPasswordToggle("toggle-signup-pw", "signup-password");
  setupPasswordToggle("toggle-signup-confirm-pw", "signup-confirm-password");
  setupPasswordToggle("toggle-login-pw", "login-password");

  // Password Live Validator
  document.getElementById("signup-password").addEventListener("input", validatePasswordRules);

  // Sign Up Submission
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    hideMessages();

    const username = document.getElementById("signup-username").value.trim();
    const email = document.getElementById("signup-email").value.trim();
    const password = document.getElementById("signup-password").value;
    const confirm = document.getElementById("signup-confirm-password").value;

    if (!username) return showError("Choose a username.");
    if (!validateEmail(email)) return showError("Enter a valid email address.");
    if (!validatePasswordRules()) return showError("Password does not meet all security requirements.");
    if (password !== confirm) return showError("Passwords do not match.");

    // Store account and force switch to login tab
    registeredAccount = { username, email, password };
    showSuccess("Account created successfully! Please log in with your credentials.");
    
    setTimeout(() => {
      document.getElementById("login-email").value = email;
      showAuthTab("login");
    }, 1200);
  });

  // Log In Submission
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    hideMessages();

    const identifier = document.getElementById("login-email").value.trim().toLowerCase();
    const password = document.getElementById("login-password").value;

    if (!registeredAccount) {
      return showError("No account found. Please sign up first.");
    }

    const matchesEmail = registeredAccount.email.toLowerCase() === identifier;
    const matchesUsername = registeredAccount.username.toLowerCase() === identifier;

    if ((!matchesEmail && !matchesUsername) || password !== registeredAccount.password) {
      return showError("Invalid username/email or password.");
    }

    authenticate(registeredAccount);
  });
}

function showAuthTab(tab) {
  hideMessages();
  const tabLogin = document.getElementById("tab-login");
  const tabSignup = document.getElementById("tab-signup");
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");

  if (tab === "login") {
    tabLogin.classList.add("active");
    tabSignup.classList.remove("active");
    loginForm.style.display = "block";
    signupForm.style.display = "none";
  } else {
    tabSignup.classList.add("active");
    tabLogin.classList.remove("active");
    signupForm.style.display = "block";
    loginForm.style.display = "none";
  }
}

function setupPasswordToggle(btnId, inputId) {
  const btn = document.getElementById(btnId);
  const input = document.getElementById(inputId);
  if (!btn || !input) return;

  btn.addEventListener("click", () => {
    const isPw = input.type === "password";
    input.type = isPw ? "text" : "password";
    btn.textContent = isPw ? "🙈" : "👁";
  });
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePasswordRules() {
  const pw = document.getElementById("signup-password").value;
  const rules = {
    length: pw.length >= 8,
    upper: /[A-Z]/.test(pw),
    lower: /[a-z]/.test(pw),
    number: /[0-9]/.test(pw),
    special: /[!@#$%^&*(),.?":{}|<>_\-]/.test(pw)
  };

  document.getElementById("rule-length").className = rules.length ? "met" : "";
  document.getElementById("rule-upper").className = rules.upper ? "met" : "";
  document.getElementById("rule-lower").className = rules.lower ? "met" : "";
  document.getElementById("rule-number").className = rules.number ? "met" : "";
  document.getElementById("rule-special").className = rules.special ? "met" : "";

  return Object.values(rules).every(Boolean);
}

function showError(msg) {
  const err = document.getElementById("auth-error");
  err.textContent = msg;
  err.style.display = "block";
}

function showSuccess(msg) {
  const succ = document.getElementById("auth-success");
  succ.textContent = msg;
  succ.style.display = "block";
}

function hideMessages() {
  document.getElementById("auth-error").style.display = "none";
  document.getElementById("auth-success").style.display = "none";
}

function authenticate(account) {
  currentAccount = account;
  document.getElementById("auth-screen").style.display = "none";
  document.getElementById("app-shell").style.display = "flex";

  // Set header info
  document.getElementById("user-avatar").textContent = account.username.charAt(0).toUpperCase();
  document.getElementById("user-display-name").textContent = account.username;
  document.getElementById("user-display-email").textContent = account.email;

  switchView("course");
  renderCourseOutline();
  renderActiveLesson();
}

/* ---------------- Application Events & Navigation ---------------- */
function initAppEvents() {
  // Topbar Page Switchers
  document.getElementById("nav-course").addEventListener("click", () => switchView("course"));
  document.getElementById("nav-about").addEventListener("click", () => switchView("about"));
  document.getElementById("nav-contact").addEventListener("click", () => switchView("contact"));

  // Dropdown Toggle
  const userBtn = document.getElementById("user-menu-btn");
  const dropdown = document.getElementById("user-dropdown");
  userBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdown.style.display = dropdown.style.display === "none" ? "block" : "none";
  });

  document.addEventListener("click", () => {
    dropdown.style.display = "none";
  });

  // User Dropdown Options
  document.getElementById("btn-view-profile").addEventListener("click", () => switchView("profile"));
  document.getElementById("btn-logout").addEventListener("click", () => {
    currentAccount = null;
    document.getElementById("app-shell").style.display = "none";
    document.getElementById("auth-screen").style.display = "flex";
    showAuthTab("signup");
  });

  // Contact Form Submission Handler
  document.getElementById("contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! Your message has been sent.");
    e.target.reset();
  });

  // Search Handler
  document.getElementById("course-search").addEventListener("input", (e) => {
    searchQuery = e.target.value.toLowerCase();
    renderCourseOutline();
  });

  // Navigation Arrow Listeners
  document.getElementById("btn-prev-lesson").addEventListener("click", goPrevLesson);
  document.getElementById("arrow-prev").addEventListener("click", goPrevLesson);

  document.getElementById("btn-next-lesson").addEventListener("click", () => {
    markComplete(activeLessonId);
    goNextLesson();
  });
  document.getElementById("arrow-next").addEventListener("click", goNextLesson);
}

function switchView(viewName) {
  currentView = viewName;

  // Toggle navigation tab highlights
  document.getElementById("nav-course").classList.toggle("active", viewName === "course");
  document.getElementById("nav-about").classList.toggle("active", viewName === "about");
  document.getElementById("nav-contact").classList.toggle("active", viewName === "contact");

  // Toggle Views
  document.getElementById("view-course").style.display = viewName === "course" ? "block" : "none";
  document.getElementById("view-about").style.display = viewName === "about" ? "block" : "none";
  document.getElementById("view-contact").style.display = viewName === "contact" ? "block" : "none";
  document.getElementById("view-profile").style.display = viewName === "profile" ? "block" : "none";

  // Sidebar display
  const sidebar = document.getElementById("app-sidebar");
  const body = document.querySelector(".app-body");
  if (viewName === "course") {
    sidebar.style.display = "block";
    body.classList.remove("no-sidebar");
  } else {
    sidebar.style.display = "none";
    body.classList.add("no-sidebar");
  }

  if (viewName === "profile") {
    renderProfileView();
  }
}

/* ---------------- Course Navigation & Badges ---------------- */
function markComplete(id) {
  completedLessons.add(id);
  updateProgressUI();
  renderCourseOutline();
}

function getFlatLessons() {
  return MODULES.flatMap((m) => m.lessons.map((l) => ({ mId: m.id, id: l.id })));
}

function goNextLesson() {
  const flat = getFlatLessons();
  const idx = flat.findIndex((x) => x.id === activeLessonId);
  if (idx >= 0 && idx < flat.length - 1) {
    const next = flat[idx + 1];
    activeLessonId = next.id;
    openModules.add(next.mId);
    renderCourseOutline();
    renderActiveLesson();
  }
}

function goPrevLesson() {
  const flat = getFlatLessons();
  const idx = flat.findIndex((x) => x.id === activeLessonId);
  if (idx > 0) {
    const prev = flat[idx - 1];
    activeLessonId = prev.id;
    openModules.add(prev.mId);
    renderCourseOutline();
    renderActiveLesson();
  }
}

function updateProgressUI() {
  const total = MODULES.reduce((s, m) => s + m.lessons.length, 0);
  const pct = Math.round((completedLessons.size / total) * 100);

  document.getElementById("topbar-progress-fill").style.width = `${pct}%`;
  document.getElementById("topbar-progress-num").textContent = `${pct}%`;
  document.getElementById("sidebar-progress-fill").style.width = `${pct}%`;
  document.getElementById("sidebar-progress-num").textContent = `${pct}%`;
}

function renderCourseOutline() {
  const container = document.getElementById("modules-container");
  container.innerHTML = "";

  MODULES.forEach((m) => {
    const filtered = searchQuery
      ? m.lessons.filter((l) => l.title.toLowerCase().includes(searchQuery))
      : m.lessons;

    if (searchQuery && filtered.length === 0) return;

    const isOpen = openModules.has(m.id) || !!searchQuery;
    const doneCount = m.lessons.filter((l) => completedLessons.has(l.id)).length;

    const moduleEl = document.createElement("div");
    moduleEl.className = "module";

    const headBtn = document.createElement("button");
    headBtn.className = "module-head";
    const statusDotClass = doneCount === m.lessons.length ? "done" : doneCount > 0 ? "partial" : "";

    headBtn.innerHTML = `
      <span class="mod-dot ${statusDotClass}"></span>
      <span class="module-title">${m.title}</span>
      <span class="module-count">${doneCount} / ${m.lessons.length}</span>
      <span class="chev ${isOpen ? "open" : ""}">▾</span>
    `;

    headBtn.addEventListener("click", () => {
      if (openModules.has(m.id)) openModules.delete(m.id);
      else openModules.add(m.id);
      renderCourseOutline();
    });

    moduleEl.appendChild(headBtn);

    if (isOpen) {
      const ul = document.createElement("ul");
      ul.className = "lessons";

      filtered.forEach((l) => {
        const isDone = completedLessons.has(l.id);
        const isActive = activeLessonId === l.id;

        const li = document.createElement("li");
        const btn = document.createElement("button");
        btn.className = `lesson-item ${isActive ? "active" : ""}`;
        btn.innerHTML = `
          <span class="lesson-dot ${isDone ? "done" : ""}">${isDone ? "✓" : ""}</span>
          <span class="lesson-title">${l.title}</span>
        `;

        btn.addEventListener("click", () => {
          activeLessonId = l.id;
          renderCourseOutline();
          renderActiveLesson();
        });

        li.appendChild(btn);
        ul.appendChild(li);
      });

      moduleEl.appendChild(ul);
    }

    container.appendChild(moduleEl);
  });
}

function renderActiveLesson() {
  let activeModule = MODULES[0];
  let activeLesson = MODULES[0].lessons[0];

  for (const m of MODULES) {
    const l = m.lessons.find((x) => x.id === activeLessonId);
    if (l) {
      activeModule = m;
      activeLesson = l;
      break;
    }
  }

  document.getElementById("crumb-lesson-title").textContent = activeLesson.title;
  document.getElementById("lesson-h1").textContent = activeLesson.title;
  document.getElementById("module-title-lead").textContent = activeModule.title.replace(/^\d+\.\d+ /, "");

  const kindBadge = document.getElementById("lesson-kind-badge");
  if (activeLesson.kind === "video") kindBadge.textContent = "▶ Video";
  else if (activeLesson.kind === "activity") kindBadge.textContent = "🧩 Activity";
  else kindBadge.textContent = "📖 Reading";

  document.getElementById("lesson-body-text").textContent = activeLesson.body;

  const videoFrame = document.getElementById("video-placeholder");
  const activityCard = document.getElementById("activity-card");

  videoFrame.style.display = activeLesson.kind === "video" ? "flex" : "none";
  if (activeLesson.kind === "video") {
    document.getElementById("video-placeholder-id").textContent = `Video placeholder — ${activeLesson.id}`;
  }

  activityCard.style.display = activeLesson.kind === "activity" ? "block" : "none";

  const nextBtn = document.getElementById("btn-next-lesson");
  nextBtn.textContent = completedLessons.has(activeLesson.id)
    ? "Next lesson →"
    : "Mark complete & continue →";
}

/* ---------------- Profile & Badges View ---------------- */
function renderProfileView() {
  if (!currentAccount) return;

  document.getElementById("profile-user-title").textContent = currentAccount.username;
  document.getElementById("profile-user-email").textContent = currentAccount.email;

  const grid = document.getElementById("badges-grid");
  grid.innerHTML = "";

  MODULES.forEach((m) => {
    const doneCount = m.lessons.filter((l) => completedLessons.has(l.id)).length;
    const isCompleted = doneCount === m.lessons.length;
    const isClaimed = claimedBadges.has(m.id);

    const card = document.createElement("div");
    card.className = `badge-card ${isCompleted ? "unlocked" : ""}`;

    let buttonHtml = `<button class="btn btn-outline btn-block btn-claim" disabled>Locked (${doneCount}/${m.lessons.length})</button>`;
    if (isClaimed) {
      buttonHtml = `<button class="btn btn-ghost btn-block btn-claim" disabled>✓ Claimed</button>`;
    } else if (isCompleted) {
      buttonHtml = `<button class="btn btn-primary btn-block btn-claim" data-module="${m.id}">Claim Badge</button>`;
    }

    card.innerHTML = `
      <div class="badge-icon">${m.badgeIcon}</div>
      <h4 class="badge-title">${m.badgeTitle}</h4>
      <p class="badge-desc">${m.title}</p>
      ${buttonHtml}
    `;

    const claimBtn = card.querySelector("button[data-module]");
    if (claimBtn) {
      claimBtn.addEventListener("click", () => {
        claimedBadges.add(m.id);
        renderProfileView();
      });
    }

    grid.appendChild(card);
  });
}