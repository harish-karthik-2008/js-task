
  // Global student info object
  const studentInfo = {
    name: "",
    birthYear: null,
    city: ""
  };

  // Tabs switching logic
  const tabs = document.querySelectorAll(".tab-btn");
  const sections = document.querySelectorAll("section");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      const target = tab.getAttribute("data-tab");
      sections.forEach(sec => {
        sec.id === target ? sec.classList.add("active") : sec.classList.remove("active");
      });
    });
  });

  // Profile form submit
  document.getElementById("profile-form").addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const birthYear = Number(document.getElementById("birthYear").value);
    const city = document.getElementById("city").value.trim();
    const output = document.getElementById("profile-output");

    try {
      if (!name || !city) throw new Error("Name and city cannot be empty.");
      if (!birthYear || birthYear < 1900 || birthYear > new Date().getFullYear())
        throw new Error("Please enter a valid birth year.");

      // Save info
      studentInfo.name = name;
      studentInfo.birthYear = birthYear;
      studentInfo.city = city;

      output.textContent = `Profile saved! Hello, ${name} from ${city}.`;
      updateJSONDisplay();

      // Reset age input field in age checker for convenience
      document.getElementById("birthYearAge").value = birthYear;

    } catch (error) {
      output.textContent = "Error: " + error.message;
      output.style.color = "red";
    }
  });

  // Age checker form submit
  document.getElementById("age-form").addEventListener("submit", e => {
    e.preventDefault();
    const birthYearAge = Number(document.getElementById("birthYearAge").value);
    const output = document.getElementById("age-output");
    try {
      if (!birthYearAge || birthYearAge < 1900 || birthYearAge > new Date().getFullYear())
        throw new Error("Please enter a valid birth year.");

      const currentYear = new Date().getFullYear();
      const age = currentYear - birthYearAge;

      let eligibility = age >= 18 ? "You are eligible (18+)." : "You are not eligible (under 18).";

      output.style.color = "black";
      output.textContent = `You are ${age} years old. ${eligibility}`;

    } catch (error) {
      output.style.color = "red";
      output.textContent = "Error: " + error.message;
    }
  });

  // Greeting button
  document.getElementById("greet-btn").addEventListener("click", () => {
    const output = document.getElementById("greeting-output");
    const now = new Date();
    const hour = now.getHours();
    let greeting;

    if (hour >= 5 && hour < 12) greeting = "Good morning";
    else if (hour >= 12 && hour < 17) greeting = "Good afternoon";
    else if (hour >= 17 && hour < 22) greeting = "Good evening";
    else greeting = "Good night";

    let namePart = studentInfo.name ? `, ${studentInfo.name}` : "";
    output.textContent = `${greeting}${namePart}! Hope you have a great day.`;
  });

  // Calculator form submit
  document.getElementById("calc-form").addEventListener("submit", e => {
    e.preventDefault();
    const n1 = Number(document.getElementById("num1").value);
    const n2 = Number(document.getElementById("num2").value);
    const op = document.getElementById("operation").value;
    const output = document.getElementById("calc-output");

    try {
      if (isNaN(n1) || isNaN(n2)) throw new Error("Please enter valid numbers.");
      let result;

      switch(op) {
        case "+":
          result = n1 + n2;
          break;
        case "-":
          result = n1 - n2;
          break;
        case "*":
          result = n1 * n2;
          break;
        case "/":
          if (n2 === 0) throw new Error("Cannot divide by zero.");
          result = n1 / n2;
          break;
        default:
          throw new Error("Invalid operation selected.");
      }

      output.style.color = "black";
      output.textContent = `Result: ${result}`;

    } catch (error) {
      output.style.color = "red";
      output.textContent = "Error: " + error.message;
    }
  });

  // Quotes and JSON display
  const quotes = [
    "Believe you can and you're halfway there.",
    "Your limitation—it’s only your imagination.",
    "Push yourself, because no one else is going to do it for you.",
    "Sometimes later becomes never. Do it now.",
    "Great things never come from comfort zones.",
    "Dream it. Wish it. Do it.",
    "Success doesn’t just find you. You have to go out and get it."
  ];

  document.getElementById("quote-btn").addEventListener("click", () => {
    const output = document.getElementById("quote-output");
    const randomIndex = Math.floor(Math.random() * quotes.length);
    output.textContent = quotes[randomIndex];
  });

  // Display student info JSON in Quotes section
  function updateJSONDisplay() {
    const jsonOutput = document.getElementById("json-output");
    jsonOutput.textContent = JSON.stringify(studentInfo, null, 2);
  }

  // Initialize JSON display with empty object
  updateJSONDisplay();
