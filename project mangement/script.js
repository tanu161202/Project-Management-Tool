// Dummy data
const projects = [
    { id: 1, name: "Amazon clone", description: "Description for project 1", progress: 100, tasks: [
      { id: 1, name: "Design UI", deadline: "30/11/2024", status: "complete" },
      { id: 2, name: "Develop Backend", deadline: "15/12/2024", status: "Not Started" }
    ]},
    { id: 2, name: "Animated Loginpage", description: "Description for project 2", progress: 80, tasks: [
      { id: 1, name: "Set up Database", deadline: "1/12/2024", status: "In Progress" },
      { id: 2, name: "Integrate API", deadline: "20/12/2024", status: "Not Started" }
    ]}
  ];
  
  // DOM Elements
  const mainContent = document.getElementById("main-content");
  const projectListSection = document.getElementById("project-list-section");
  const createProjectSection = document.getElementById("create-project-section");
  const projectDetailSection = document.getElementById("project-detail-section");
  const projectListContainer = document.getElementById("projects-container");
  const createProjectForm = document.getElementById("create-project-form");
  const projectNameInput = document.getElementById("project-name");
  const projectDescInput = document.getElementById("project-desc");
  const projectDetailTitle = document.getElementById("project-detail-title");
  const taskListContainer = document.getElementById("task-list");
  
  // Display the dashboard
  const showDashboard = () => {
    projectListSection.style.display = "block";
    createProjectSection.style.display = "none";
    projectDetailSection.style.display = "none";
    renderProjects();
  };
  
  // Display the create project form
  const showCreateProject = () => {
    projectListSection.style.display = "none";
    createProjectSection.style.display = "block";
    projectDetailSection.style.display = "none";
  };
  
  // Display project details
  const showProjectDetail = (projectId) => {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;
  
    projectListSection.style.display = "none";
    createProjectSection.style.display = "none";
    projectDetailSection.style.display = "block";
  
    projectDetailTitle.textContent = project.name;
    renderTasks(project.tasks);
  };
  
  // Render project list
  const renderProjects = () => {
    projectListContainer.innerHTML = "";
    projects.forEach(project => {
      const projectCard = document.createElement("div");
      projectCard.classList.add("project-card");
      projectCard.innerHTML = `
        <h3>${project.name}</h3>
        <p>Progress: ${project.progress}%</p>
        <button onclick="showProjectDetail(${project.id})">View Project</button>
      `;
      projectListContainer.appendChild(projectCard);
    });
  };
  
  // Render task list
  const renderTasks = (tasks) => {
    taskListContainer.innerHTML = "";
    tasks.forEach(task => {
      const taskCard = document.createElement("div");
      taskCard.classList.add("task-card");
      taskCard.innerHTML = `
        <h3>${task.name}</h3>
        <p>Deadline: ${task.deadline}</p>
        <p>Status: ${task.status}</p>
      `;
      taskListContainer.appendChild(taskCard);
    });
  };
  
  // Handle Create Project Form
  createProjectForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    const newProject = {
      id: projects.length + 1,
      name: projectNameInput.value,
      description: projectDescInput.value,
      progress: 0,
      tasks: []
    };
  
    projects.push(newProject);
    showDashboard();
    projectNameInput.value = "";
    projectDescInput.value = "";
  });
  
  // Add event listeners for navigation links
  document.getElementById("dashboard-link").addEventListener("click", showDashboard);
  document.getElementById("create-project-link").addEventListener("click", showCreateProject);
  
  // Initialize the app
  showDashboard();