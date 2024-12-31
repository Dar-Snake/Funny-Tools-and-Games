const projectNames = [
   
    "Pig Game","Guess My Number", "QR Code Generator", "Quote Generator" , "Notes App", "Age Calculator"
  ];

  // Base URL for the demos
  const baseUrl = "https://dar-snake.github.io";

  // Create an array of projects
  const projects = projectNames.map(name => ({
    img: `./images/${name}.png`,
    demo: `${baseUrl}/${name.replace(/\s+/g, "-")}/`,
    title: name
  }));

  const container = document.getElementById('projects-container');

  // Dynamically create cards
  projects.forEach(project => {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
      <img src="${project.img}" alt="${project.title}">
      <div class="content">
        <h3>${project.title}</h3>
        <button onclick="window.open('${project.demo}', '_blank')">View Demo</button>
      </div>
    `;

    container.appendChild(card);
  });