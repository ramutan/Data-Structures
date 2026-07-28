/* ---------------- Curriculum Data ---------------- */
const MODULES = [
  {
    id: "m1",
    title: "1.0 Foundations of Data Structures",
    badgeTitle: "Foundations Pioneer",
    badgeIcon: "🧱",
    lessons: [
      { 
        id: "1.0.1",
        title: "1.0.1 Welcome to the Journey",
        kind: "reading",
        body: "Welcome to Data Structures Academy! This is an educational platform designed to guide you through the fundamental building blocks of software development.<br><br><img src='pictures/Data Structures slide 1.png' style='width: 100%; border-radius: 8px; margin: 10px 0;'><br><br>A data structure is a specialized way of organizing, storing, and managing data in computer memory so it can be accessed and modified efficiently.<br><br><b>Core Classifications:</b><ul><li><b>Linear Data Structures:</b> Data elements are arranged sequentially in a straight line, where each element connects directly to its adjacent neighbors. Examples include Arrays, Stacks, Queues, and Linked Lists.</li><li><b>Non-Linear Data Structures:</b> Data elements are organized hierarchically or networked together rather than in a sequence. Examples include Trees and Graphs.</li></ul><br>Get ready to master these core concepts and level up your software engineering foundation!<br><br>For additional course materials and updates, visit <strong>www.DataStructuresAcademy.com</strong>."
      },
      { 
         
        id: "1.0.2", 
        title: "1.0.2 What is a Data Structure?", 
        kind: "reading", 
        body: "A data structure is a method of storing and organizing data. How we choose to arrange data depends on the type of information we have and what we plan to do with it.<br><br><b>A Real-World Analogy: The Family Tree</b><br>To understand this concept without computers, imagine organizing information about your relatives. You would use a family tree structure because it clearly maps out relationships, making it simple to trace family members back several generations. Without the connected links between parents and children, seeing these relationships would be far more difficult.<br><br><b>Why Data Structures Matter?</b><br>Data structures allow us to handle large volumes of information efficiently, powering major applications like massive databases and web search engines. They serve as foundational elements for building fast algorithms by keeping data organized, lowering system complexity, and boosting overall performance.<br><br><b>Two Main Types in Computer Science:</b><ul><li><b>Primitive Data Structures:</b> Built-in, basic types provided directly by programming languages to hold single values (such as integers, floats, characters, and booleans).</li><li><b>Abstract Data Structures:</b> Advanced structures constructed using primitive types to handle complex operations (such as arrays, linked lists, stacks, queues, trees, and graphs).</li></ul>"
      },

      { 
        id: "1.0.3", 
        title: "1.0.3 Video — Why Data Structures Matter?", 
        kind: "video", 
        body: "In this video walkthrough, you’ll see why data structures actually matter. Think of them as the storage containers of programming. The right container makes your code faster, cleaner, and more efficient. Watch how different structures handle the same data in different ways.<br><br><small style='opacity: 0.8;'><em>Credits to <strong>Reducible</strong> for the video.</em></small>",
        videoUrl: "https://www.youtube-nocookie.com/embed/VAt2mR7gY0k",
      },
      { 
        id: "1.0.4", 
        title: "1.0.4 Activity — Match the Structure", 
        kind: "activity", 
        body: "Match each real-world problem (undo stack, print queue, phonebook, social graph) to the data structure that fits best.",
        activity: {
          title: "Matching Challenge",
          task: "Match each real-world scenario to its appropriate data structure:",
          pairs: [
            { id: "p1", scenario: "1. Browser Back Button", options: ["Graph", "Stack", "Circular List"], correct: "Stack" },
            { id: "p2", scenario: "2. Playlist Loop", options: ["Graph", "Stack", "Circular List"], correct: "Circular List" },
            { id: "p3", scenario: "3. City Map", options: ["Graph", "Stack", "Circular List"], correct: "Graph" }
          ],
          hint: "Back button uses LIFO (Last In, First Out)."
      } 
    },
      { 
        id: "1.0.5", 
        title: "1.0.5 Video - Module Review", 
        kind: "video", 
        body: "Watch this review video to reinforce your understanding of the key concepts covered in Module 1. <br><br><small style='opacity: 0.8;'><em>Credits to <strong>mycodeschool</strong> for the video.</em></small>",
        videoUrl: "https://www.youtube-nocookie.com/embed/92S4zgXN17o",
      },
  ]
},
       {
      id: "m2",
      title: "1.1 Linear Structures — Arrays, Lists, Stacks, Queues",
      badgeTitle: "Linear Master",
      badgeIcon: "⚡",
      lessons: [
      { 
        id: "1.1.1", 
        title: "1.1.1 Arrays and Indexing", 
        kind: "reading", 
        body: "An array is a linear data structure that stores multiple items of the same type in sequential, back-to-back memory blocks. Because elements sit next to each other, accessing any element directly using its index takes constant time <b>O(1)</b>.<br><br><b>How Array Indexing Works Under the Hood:</b><br>When an array is allocated in memory, the system uses a simple mathematical formula to instantly calculate the exact memory location of any element at runtime:<br><br><div style='background: rgba(255, 255, 255, 0.05); padding: 12px; border-radius: 6px; font-family: monospace; text-align: center; margin: 10px 0;'>element_address = base_address + (index * element_size)</div><br><b>Key Formula Breakdown:</b><ul><li><b>Base Address:</b> The starting memory location of the array (where index 0 sits).</li><li><b>Element Index:</b> The numerical position of the element starting from 0. It represents how many items come before it.</li><li><b>Size of Element:</b> The fixed memory footprint required by the data type (e.g., <code>int</code> = 4 bytes, <code>char</code> = 1 byte, <code>long</code> = 8 bytes).</li></ul><br><b>Performance Trade-offs:</b><ul><li><b>Access:</b> Instant direct lookup using indices — <b>O(1)</b>.</li><li><b>Insertion/Deletion:</b> Inserting or removing items in the middle requires shifting surrounding elements — <b>O(n)</b>.</li><li><b>Best Used For:</b> Scenarios where the dataset size is fixed or known in advance.</li></ul>",
      },
      { 
        id: "1.1.2", 
        title: "1.1.2 Linked Lists", 
        kind: "video", 
        body: "Watch this video to learn about linked lists and their implementation. Linked lists are a linear data structure where each element (node) contains a reference (pointer) to the next node in the sequence. This allows for efficient insertions and deletions, especially in dynamic memory scenarios.<br><br><small style='opacity: 0.8;'><em>Credits to <strong>Neso Academy</strong> for the video.</em></small>",
        videoUrl: "https://www.youtube-nocookie.com/embed/R9PTBwOzceo",
      },
      { 
        id: "1.1.3", 
        title: "1.1.3 Stacks — Last In, First Out", 
        kind: "video", 
        body: "Stacks power function calls, undo history, and expression parsing. Two operations rule everything: push and pop. Watch how a stack handles these operations in real time.<br><br><small style='opacity: 0.8;'><em>Credits to <strong>mycodeschool</strong> for the video.</em></small>",
        videoUrl: "https://www.youtube-nocookie.com/embed/F1F2imiOJfk",
      },
      { 
        id: "1.1.4", 
        title: "1.1.4 Queues — First In, First Out", 
        kind: "video", 
        body: "This video introduces the Queue data structure as an Abstract Data Type (ADT), explaining FIFO operations (enqueue, dequeue, front) and real-world scenarios like shared printer tasks and CPU scheduling. See how a queue handles these operations in real time.<br><br><small style='opacity: 0.8;'><em>Credits to <strong>mycodeschool</strong> for the video.</em></small>",
        videoUrl: "https://www.youtube-nocookie.com/embed/XuCbpw6Bj1U",
      },
      { 
        id: "1.1.5", 
        title: "1.1.5 Activity — Build a Stack", 
        kind: "activity", 
        body: "Implement push, pop, and peek using JavaScript arrays.",
        activity: {
          title: "Coding a Simple Stack",
          task: "Analyze the code execution below and select the correct array length for each step:",
          hint: ".push() adds an element to the end, while .pop() removes the last element!!",
          pairs: [
            { id: "s1", scenario: "1. Start with an empty stack and push 5.", options: ["Length = 0", "Length = 1", "Length = 2"], correct: "Length = 1" },
            { id: "s2", scenario: "2. Push 10 onto the stack.", options: ["Length = 1", "Length = 2", "Length = 3"], correct: "Length = 2" },
            { id: "s3", scenario: "3. Pop the top element.", options: ["Length = 1", "Length = 2", "Length = 3"], correct: "Length = 1" }
          ]
        }
      },
      { 
        id: "1.1.6", 
        title: "1.1.6 Module Check", 
        kind: "video", 
        body: "A short knowledge check on linear structures in 1 minute. Watch the video to refresh your understanding of arrays, linked lists, stacks, and queues.<br><br><small style='opacity: 0.8;'><em>Credits to <strong>Prof Korupt</strong> for the video.</em></small>",
        videoUrl:"https://www.youtube-nocookie.com/embed/jyw1eLn_YRc",
        }
    ]
  },
  {
    id: "m3",
    title: "1.2 Non-Linear Structures — Trees and Graphs",
    badgeTitle: "Graph Explorer",
    badgeIcon: "🌳",
    lessons: [
      { 
        id: "1.2.1", 
        title: "1.2.1 Trees and Hierarchy", 
        kind: "video", 
        body: "Trees model hierarchy: file systems, DOMs, org charts. A binary search tree lets you find an item in O(log n) on average. Watch this video to see how trees work and how they can be traversed.<br><br><small style='opacity: 0.8;'><em>Credits to <strong>mycodeschool</strong> for the video.</em></small>",
        videoUrl: "https://www.youtube-nocookie.com/embed/qH6yxkw0u78",
      },
      { 
        id: "1.2.2", 
        title: "1.2.2 Traversals — DFS and BFS", 
        kind: "video", 
        body: "Depth-first goes deep before wide. Breadth-first sweeps level by level. Same nodes, different order — and different problems solved. Watch this video to see how DFS and BFS work in real time.<br><br><small style='opacity: 0.8;'><em>Credits to <strong>AlgoMonster</strong> for the video.</em></small>",
        videoUrl: "https://www.youtube-nocookie.com/embed/cS-198wtfj0",
      },
      { 
        id: "1.2.3", 
        title: "1.2.3 Graphs — Nodes and Edges", 
        kind: "reading", 
        body: "A graph is a non-linear data structure composed of <b>vertices</b> (nodes) and <b>edges</b> (connections) that model how different entities relate to one another. Unlike linear structures like arrays or linked lists, elements in a graph do not follow a strict sequential order.<br><br><b>Real-World Example:</b><br>Think of a navigation map: each city acts as a vertex, and every highway connecting two cities serves as an edge. This maps out how locations interconnect.<br><br><div style='text-align: center; margin: 15px 0;'><img src='pictures/introtographs.jpg' alt='Introduction to Graphs Diagram' style='max-width: 100%; height: auto; border-radius: 6px;'><br><span style='font-size: 0.85em; opacity: 0.8;'>Image source/credit: W3Schools</span></div><br><b>Core Components of a Graph:</b><ul><li><b>Vertices (Nodes):</b> The fundamental individual data units within the graph. Vertices can either be labeled or unlabeled.</li><li><b>Edges (Arcs):</b> The links used to connect pairs of nodes. In directed graphs, edges represent an ordered pair. Connections can link any two nodes flexibly, and edges may also be labeled or unlabeled.</li></ul>"
      },
      { 
        id: "1.2.4", 
        title: "1.2.4 Activity — Traverse a Graph", 
        kind: "activity", 
        body: "Given a small graph, list the visit order for DFS and BFS starting from node A.",
        activity: {
          title: "Graph Traversal Trace",
          task: "Start at Node A connected to B and C. B connects to D. What is the BFS visit order starting from A?",
          hint: "BFS visits all direct neighbors first (A, then B & C)!",
          answer: "A, B, C, D"
        }
      },
      { 
        id: "1.2.5", 
        title: "1.2.5 Module Check", 
        kind: "video", 
        body: "A short knowledge check on trees and graphs. This video will help you review the key concepts of non-linear structures, including trees, graphs, and their traversal methods.<br><br><small style='opacity: 0.8;'><em>Credits to <strong>WilliamFiset</strong> for the video.</em></small>",
        videoUrl: "https://www.youtube-nocookie.com/embed/1XC3p2zBK34",
      }
    ]
  },
  {
    id: "m4",
    title: "1.3 Core Operations — Insert, Delete, Search, Sort",
    badgeTitle: "Operations Specialist",
    badgeIcon: "🏆",
    lessons: [
      { 
        id: "1.3.1", 
        title: "1.3.1 Insertion and Deletion", 
        kind: "reading", 
        body: "<b>Insertion</b> and <b>deletion</b> represent two foundational operations for modifying data structures: inserting new values and removing existing ones.<br><br>The mechanics and efficiency of these operations vary significantly depending on the underlying structure:<br><br><b>1. Arrays</b><ul><li><b>Insertion:</b> Inserting at the start or middle requires shifting subsequent elements to open up space (<b>O(n)</b> worst case). Inserting at the end takes <b>O(1)</b> if capacity permits.</li><li><b>Deletion:</b> Removing any item except the last requires shifting elements left to close the gap (<b>O(n)</b> worst case).</li></ul><b>2. Linked Lists</b><ul><li><b>Insertion & Deletion:</b> If you hold a direct pointer to the target node, modifying pointers takes <b>O(1)</b> time. However, searching to locate that specific position takes <b>O(n)</b>.</li></ul><b>3. Stacks & Queues</b><ul><li><b>Stacks:</b> Pushing to or popping from the top takes <b>O(1)</b> time.</li><li><b>Queues:</b> Enqueuing at the back and dequeuing from the front operate in <b>O(1)</b> time using a linked list or circular array.</li></ul><b>4. Binary Search Trees (BST)</b><ul><li><b>Insertion:</b> Traverses down to locate the appropriate spot (Average: <b>O(log n)</b>, Worst case for unbalanced trees: <b>O(n)</b>).</li><li><b>Deletion:</b> Requires handling three distinct scenarios: removing a leaf, a single-child node, or a two-child node (using an in-order successor/predecessor) (Average: <b>O(log n)</b>, Worst case: <b>O(n)</b>).</li></ul><b>5. Hash Tables</b><ul><li><b>Insertion & Deletion:</b> Uses a hash function to map keys directly to buckets for average <b>O(1)</b> operations (Worst case drops to <b>O(n)</b> under heavy collisions).</li></ul>",
      },
      { 
        id: "1.3.2", 
        title: "1.3.2 Searching", 
        kind: "reading", 
        body: "Linear search, binary search, hash lookup. Same goal, wildly different cost. Watch this video to see how searching works in different data structures and why the right choice matters.<br><br><small style='opacity: 0.8;'><em>Credits to <strong>Revise Computer Science</strong> for the video.</em></small>",
        videoUrl: "https://www.youtube-nocookie.com/embed/ZpFqAoO4YPc",
      },
      { 
        id: "1.3.3", 
        title: "1.3.3 Sorting Fundamentals", 
        kind: "video", 
        body: "This video will introduce you to the fundamental concepts of sorting algorithms and their applications.<br><br><small style='opacity: 0.8;'><em>Credits to <strong>ByteQuest</strong> for the video.</em></small>",
        videoUrl: "https://www.youtube-nocookie.com/embed/5d1pyghLs3M",
      },
      { 
        id: "1.3.4", 
        title: "1.3.4 Activity — Big-O Sort", 
        kind: "activity", 
        body: "Test your knowledge on searching algorithm efficiencies.",
        activity: {
          title: "Binary Search Time Complexity",
          task: "What is the average time complexity of performing a Binary Search on a sorted array of size n? (e.g., O(1), O(n), O(log n), O(n^2))",
          hint: "Binary search cuts the remaining search space in half with every comparison.",
          answer: "O(log n)"
        }
      },
      { 
        id: "1.3.5", 
        title: "1.3.5 Final Check", 
        kind: "video", 
        body: "Watch this video to review all the concepts covered in this module and claim your final badge. <br><br><small style='opacity: 0.8;'><em>Credits to <strong>Codebagel</strong> for the video.</em></small>",
        videoUrl: "https://www.youtube-nocookie.com/embed/cQWr9DFE1ww",
      }
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

  // Log In Submission (Supports Email OR Username)
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
  document.getElementById("btn-course").addEventListener("click", () => switchView("course"));
  document.getElementById("btn-about").addEventListener("click", () => switchView("about"));
  document.getElementById("btn-contact").addEventListener("click", () => switchView("contact"));
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

/* ---------------- Dynamic Lesson, Video & Activity Renderer ---------------- */
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

  // CHANGED: Using .innerHTML instead of .textContent to render HTML formatting & images properly
  document.getElementById("lesson-body-text").innerHTML = activeLesson.body;

  // 1. Render Video Iframe
 const videoFrame = document.getElementById("video-placeholder");
 if (videoFrame) {
   if (activeLesson.videoUrl) {
     videoFrame.style.display = "flex";
     videoFrame.innerHTML = `
       <iframe 
         width="100%" 
         height="360" 
         src="${activeLesson.videoUrl}" 
         title="${activeLesson.title}" 
         frameborder="0" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
         referrerpolicy="strict-origin-when-cross-origin"
         allowfullscreen
         style="border-radius: 8px; border: 0; width: 100%;">
       </iframe>
     `;
   } else {
     videoFrame.style.display = "none";
     videoFrame.innerHTML = "";
   }
 }

 // 2. Render Activity Card
const activityCard = document.getElementById("activity-card");
if (activityCard) {
 if (activeLesson.activity) {
   activityCard.style.display = "block";
   
   // --- CASE 1: Matching activity with drop-down pairs ---
   if (activeLesson.activity.pairs) {
     let pairsHtml = activeLesson.activity.pairs.map(p => `
       <div style="display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-bottom: 10px; background: rgba(0,0,0,0.2); padding: 8px 12px; border-radius: 6px;">
         <span style="font-weight: 500;">${p.scenario}</span>
         <select class="activity-select" data-pair-id="${p.id}" style="padding: 6px 10px; border-radius: 4px; border: 1px solid var(--border-color, #444); background: var(--bg-color, #222); color: var(--text-color, #fff);">
           <option value="">-- Select Structure --</option>
           ${p.options.map(opt => `<option value="${opt}">${opt}</option>`).join("")}
         </select>
       </div>
     `).join("");

     activityCard.innerHTML = `
       <div style="padding: 18px; border-radius: 8px; background: rgba(255, 255, 255, 0.05); border-left: 4px solid #3b82f6; margin-top: 15px;">
         <h3 style="margin: 0 0 8px 0; font-size: 1.1rem;">⚡ ${activeLesson.activity.title}</h3>
         <p style="margin: 0 0 12px 0;">${activeLesson.activity.task}</p>
         
         <form id="matching-activity-form" style="margin-bottom: 12px;">
           ${pairsHtml}
           <button type="button" id="btn-check-activity" style="margin-top: 10px; padding: 8px 16px; border-radius: 6px; border: none; background: #3b82f6; color: white; cursor: pointer; font-weight: bold;">Check Answers</button>
         </form>

         <div id="activity-feedback" style="display: none; font-weight: bold; margin-bottom: 8px;"></div>
         ${activeLesson.activity.hint ? `<small style="opacity: 0.8; font-style: italic; display: block;"><strong>Hint:</strong> ${activeLesson.activity.hint}</small>` : ""}
       </div>
     `;

     document.getElementById("btn-check-activity").addEventListener("click", () => {
       const selects = activityCard.querySelectorAll(".activity-select");
       const feedback = document.getElementById("activity-feedback");
       let allCorrect = true;
       let unanswered = false;

       selects.forEach(select => {
         const pairId = select.getAttribute("data-pair-id");
         const pairData = activeLesson.activity.pairs.find(p => p.id === pairId);

         if (!select.value) {
           unanswered = true;
         } else if (select.value !== pairData.correct) {
           allCorrect = false;
         }
       });

       feedback.style.display = "block";
       if (unanswered) {
         feedback.style.color = "#f59e0b";
         feedback.textContent = "Please select an answer for all scenarios.";
       } else if (allCorrect) {
         feedback.style.color = "#10b981";
         feedback.textContent = "Excellent! All matches are correct!";
         if (typeof markComplete === "function") markComplete(activeLesson.id);
       } else {
         feedback.style.color = "#ef4444";
         feedback.textContent = "Some matches are incorrect. Try again!";
       }
     });

   // --- CASE 2: Text input activities (e.g. Graph Traversal, Stacks) ---
   } else if (activeLesson.activity.answer !== undefined) {
     activityCard.innerHTML = `
       <div style="padding: 18px; border-radius: 8px; background: rgba(255, 255, 255, 0.05); border-left: 4px solid #3b82f6; margin-top: 15px;">
         <h3 style="margin: 0 0 8px 0; font-size: 1.1rem;">⚡ ${activeLesson.activity.title}</h3>
         <p style="margin: 0 0 12px 0; line-height: 1.5;">${activeLesson.activity.task}</p>
         
         <div style="margin: 12px 0; display: flex; gap: 8px; align-items: center;">
           <input type="text" id="activity-user-answer" placeholder="e.g. A, B, C, D" style="padding: 8px 12px; border-radius: 6px; border: 1px solid var(--border-color, #444); background: var(--bg-color, #222); color: var(--text-color, #fff); width: 220px;">
           <button type="button" id="btn-check-input-activity" style="padding: 8px 16px; border-radius: 6px; border: none; background: #3b82f6; color: white; cursor: pointer; font-weight: bold;">Submit Answer</button>
         </div>

         <div id="activity-feedback" style="display: none; font-weight: bold; margin-bottom: 8px;"></div>
         ${activeLesson.activity.hint ? `<small style="opacity: 0.8; font-style: italic; display: block;"><strong>Hint:</strong> ${activeLesson.activity.hint}</small>` : ""}
       </div>
     `;

     document.getElementById("btn-check-input-activity").addEventListener("click", () => {
       const userInput = document.getElementById("activity-user-answer").value.trim();
       const feedback = document.getElementById("activity-feedback");

       feedback.style.display = "block";

       if (!userInput) {
         feedback.style.color = "#f59e0b";
         feedback.textContent = "Please enter an answer before submitting.";
         return;
       }

       // Clean user input and target answer (remove commas, spaces, dashes)
       const cleanUser = userInput.toUpperCase().replace(/[^A-Z0-9]/g, "");
       const cleanTarget = String(activeLesson.activity.answer).toUpperCase().replace(/[^A-Z0-9]/g, "");

       if (cleanUser === cleanTarget) {
         feedback.style.color = "#10b981";
         feedback.textContent = "Correct! BFS visits level-by-level: A, then B and C, then D.";
         if (typeof markComplete === "function") markComplete(activeLesson.id);
       } else {
         feedback.style.color = "#ef4444";
         feedback.textContent = "Not quite right. Remember, BFS explores all immediate neighbors first!";
       }
     });

   // --- CASE 3: Fallback static view ---
   } else {
     activityCard.innerHTML = `
       <div style="padding: 16px; border-radius: 8px; background: rgba(255, 255, 255, 0.05); border-left: 4px solid #3b82f6; margin-top: 15px;">
         <h3 style="margin: 0 0 8px 0; font-size: 1.1rem;">⚡ ${activeLesson.activity.title}</h3>
         <p style="margin: 0 0 10px 0; line-height: 1.5;">${activeLesson.activity.task}</p>
         ${activeLesson.activity.hint ? `<small style="opacity: 0.8; font-style: italic; display: block;"><strong>Hint:</strong> ${activeLesson.activity.hint}</small>` : ""}
       </div>
     `;
   }

 } else {
   activityCard.style.display = "none";
   activityCard.innerHTML = "";
 }
}

/* ---------------- Profile & Badges View ---------------- */
function renderProfileView() {
 if (!currentAccount) return;

 const userTitle = document.getElementById("profile-user-title");
 const userEmail = document.getElementById("profile-user-email");
 if (userTitle) userTitle.textContent = currentAccount.username || "User";
 if (userEmail) userEmail.textContent = currentAccount.email || "";

 const grid = document.getElementById("badges-grid");
 if (!grid) return;
 grid.innerHTML = "";

 MODULES.forEach((m) => {
   const doneCount = m.lessons.filter((l) => completedLessons.has(l.id)).length;
   const isCompleted = doneCount === m.lessons.length && m.lessons.length > 0;
   const isClaimed = claimedBadges.has(m.id);

   const card = document.createElement("div");
   card.className = `badge-card ${isCompleted || isClaimed ? "unlocked" : ""}`;

   let buttonHtml = `<button class="btn btn-outline btn-block btn-claim" disabled>Locked (${doneCount}/${m.lessons.length})</button>`;
   if (isClaimed) {
     buttonHtml = `<button class="btn btn-ghost btn-block btn-claim" disabled>✓ Badge Earned</button>`;
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
}}