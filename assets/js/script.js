const skills = [
  { name: "JavaScript", icon: "https://skillforge.com/wp-content/uploads/2020/10/javascript.png" },
  { name: "TypeScript", icon: "https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/377/square_480/typescriptlang.png" },
  { name: "VueJs", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/640px-Vue.js_Logo_2.svg.png" },
  { name: "AngularJs", icon: "https://railsware.com/blog/wp-content/uploads/2014/09/Make-AngularJS.png" },
  { name: "NextJs", icon: "https://static-00.iconduck.com/assets.00/nextjs-icon-1024x1024-5et230l7.png" },
  { name: "NestJs", icon: "https://static-00.iconduck.com/assets.00/nestjs-icon-512x510-9nvpcyc3.png" },
  { name: "C#", icon: "https://www.vikingsoftware.com/wp-content/uploads/2024/02/C.png" },
  { name: "GraphQL", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/800px-GraphQL_Logo.svg.png" },
  { name: "Python", icon: "https://banner2.cleanpng.com/20180325/kpq/av0y5r3i9.webp" },
  { name: "PostgreSQL", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png" },
  { name: "MySQL", icon: "https://i0.wp.com/saixiii.com/wp-content/uploads/2017/04/mysql.png" },
  { name: "MongoDB", icon: "https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png" },
  { name: "Bootstrap", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png" },
  { name: "TailwindCSS", icon: "https://static-00.iconduck.com/assets.00/tailwind-css-icon-2048x1229-u8dzt4uh.png" },
  { name: "Cypress", icon: "https://i0.wp.com/letzdotesting.com/wp-content/uploads/2024/03/Cypress.png" },
  { name: "Git", icon: "https://miro.medium.com/v2/resize:fit:383/0*5g3mp6zgIoqprOgV.png" },
  { name: "AWS Lambda", icon: "https://d1.awsstatic.com/serverless/Lambda%20Resources%20images/lambda_logo.674434aff2888039ce0552276bd963e73852e8a4.png" },
  { name: "AWS SQS", icon: "https://whatthelogo.com/storage/logos/aws-sqs-simple-queue-service-275002.png" },
];

const skillsContainer = document.getElementById("skillsContainer");

skills.forEach(skill => {
  const skillElement = document.createElement("div");
  skillElement.classList.add("skill");

  const icon = document.createElement("img");
  icon.src = skill.icon;
  icon.alt = skill.name;

  const name = document.createElement("p");
  name.textContent = skill.name;

  skillElement.appendChild(icon);
  skillElement.appendChild(name);

  skillsContainer.appendChild(skillElement);
});

document.getElementById('scrollLink').addEventListener('click', function (event) {
  event.preventDefault();
  const target = document.querySelector(this.getAttribute('href'));
  target.scrollIntoView({ behavior: 'smooth' });
});

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert(`Copied: ${text}`);
  }).catch(err => {
    console.error('Failed to copy!', err);
  });
}

document.querySelectorAll('.fas.fa-copy').forEach(icon => {
  icon.addEventListener('click', function () {
    this.classList.add('copied-animation');
    setTimeout(() => this.classList.remove('copied-animation'), 300);
  });
});

document.querySelector('.download-cv').addEventListener('click', function () {
  const fileUrl = 'assets/files/cv.pdf';
  window.open(fileUrl, '_blank');
});
