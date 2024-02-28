const COMMANDS = [
  {
    command: "about",
    description: "About Me",
  },
  {
    command: "education",
    description: "My Education",
  },
  {
    command: "skills",
    description: "My Tech Skills",
  },
  {
    command: "projects",
    description: "My Tech Projects",
  },
  {
    command: "resume",
    description: "My Resume",
  },
  {
    command: "contact",
    description: "My Contacts",
  },

  {
    command:
      // 'clear <span style="color: var(--primary)">(Ctrl+L shortcut)</span>',
      "clear",
    description: "Clear terminal",
  },
]

const getProjects = async () => {
  const data = await fetch(
    "https://terminal-based-portfolio.vercel.app/api/project"
  )
  const projects= await data.json()
  const projectHTML =
    `<h3>My Projects (You can scroll)</h3>` +
    projects
      .map(
        (project) => `<div class="command">
        <a href="${project.link}" target="_blank"><b class="command">${
          project.name
        }</b></a> - <b>${project.stack.join(", ")}</b>
        <p class="meaning">${project.description}</p>
      </div>`
      )
      .join("")
  return projectHTML
}

const getContacts = async () => {


  const data = await fetch(
    "https://terminal-based-portfolio.vercel.app/api/contacts"
  )
  const contactMediums=await data.json();
  return contactMediums
    .map(
      (contact) => `<div style="display: flex; justify-content: space-between;">
      <p style="font-size: 15px">${contact.medium}</p>
      <a class="meaning" href="${contact.link}" target="_blank">${contact.username}</a>
    </div>`
    )
    .join("")
}

export const CONTENTS = {
  help: () =>
    COMMANDS.map(
      (command) => `<div style="display: flex; justify-content: space-between;">
        <p style="font-size: 15px">${command.command}</p>
        <p>${command.description}</p>
      </div>`
    ).join("") +
    `<br />
      <div class="command">Type one of the above to view. For eg. <span style="color: var(--secondary)">about</span></div>`,
  about: () => `My name is Md Rizabul I am ${getAge(
    "January 25, 2003"
  )} and I\'m a fullstack web developer
    <br/><br/>
    I love coding in Javascript, Typescript , Python,C++  and have worked with frameworks like ReactJS, Express, and Flask. I currently use NextJSand NodeJS in a lot of my projects.
    <br /><br />
    I am a sophomore at <a href="http://dtu.ac.in/" target="_blank">Delhi technological University</a>.
    <br />

  `,
  education: () =>
    `I am a sophomore from <a href="http://dtu.ac.in/" target="_blank">, Delhi technological University/a> `,
  skills: () => `
  I am experienced with Javascript, Typescript and Python and the web technologies dominating at the time:<br />
  <div class="skill"><b>core</b>: HTML, CSS, Node.js and PHP<br /></div>
  <div class="skill"><b>frameworks</b>: React, NextJS, Django, Express <br /></div>
  <div class="skill"><b>database</b>: MongoDB, PostgreSQL, MySQL, and SQLite<br /></div>
   <div class="skill"><b>DevOps : Docker , AWS , CloudFlare <br /></div>
<br /><br />

  `,
  projects: getProjects,
  contact: getContacts,
  resume: () => {
    window.open(
      "https://drive.google.com/file/d/1nQWkqyAUIQ7S3xZiTD6EXf8zipVSk5Hk/view",
      "_blank"
    )
    return ""
  },
  error: (input) =>
    `<div class="help-command">sh: Unknown command: ${input}</div><div class="help-command">See \`help\` for info`,
 
 
}

function getAge(dateString) {
  const today = new Date()
  const birthDate = new Date(dateString)

  let age = today.getFullYear() - birthDate.getFullYear()
  const m = today.getMonth() - birthDate.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--

  return age
}
