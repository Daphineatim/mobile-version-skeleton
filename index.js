const data = [
  {
    id: 'portfolio-1',
    name: 'Tonic',
    job: {
      client: 'Canopy',
      role: 'Back End Dev',
      year: '2015',
    },
    description: {
      summary: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',

      portfolio:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s",
    },
    image: {
      mobile: './assets/tonic.svg.svg',
      desktop: './assets/nature.svg',
    },
    technologies: {
      html: 'html',
      css: 'css',
      javascript: 'javascript',
    },
    card: 'card-img-left',
  },
  {
    id: 'portfolio-2',
    name: 'Multi Stories Post',
    job: {
      client: 'Canopy',
      role: 'Back End Dev',
      year: '2015',
    },
    description: {
      summary: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      portfolio:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s",
    },
    image: {
      mobile: './assets/multi-post-2.svg',
      desktop: './assets/multi-post-2.svg',
    },
    technologies: {
      html: 'html',
      ror: 'ruby on rails',
      css: 'css',
      javascript: 'javascript',
    },
    card: 'card-img-right',
  },
  {
    id: 'portfolio-3',
    name: 'Tonic',
    job: {
      client: 'Canopy',
      role: 'Back End Dev',
      year: '2015',
    },
    description: {
      summary: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      portfolio:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s",
    },
    image: {
      mobile: './assets/tonic-2.svg',
      desktop: './assets/tonic.svg.svg',
    },
    technologies: {
      html: 'html',
      ror: 'Ruby on rails',
      css: 'css',
      javascript: 'javascript',
    },
    card: 'card-img-left',
  },
  {
    id: 'portfolio-4',
    name: 'Multi Stories Post',
    job: {
      client: 'Canopy',
      role: 'Back End Dev',
      year: '2015',
    },
    description: {
      summary: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      portfolio:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s",
    },
    image: {
      mobile: './assets/multi-post-2.svg',
      desktop: './assets/multi-post-1.svg',
    },
    technologies: {
      html: 'html',
      ror: 'Ruby on rails',
      css: 'css',
      javascript: 'javascript',
    },
    card: 'card-img-left',
  },
];

const hamburger = document.querySelector('#hamburger');
const close = document.querySelector('#close');
const navigation = document.querySelector('.nav-ul');
const textPortfolio = document.querySelector('.nav-text-1');
const about = document.querySelector('.nav-text-2');
const contact = document.querySelector('.nav-text-3');

hamburger.addEventListener('click', (e) => {
  e.preventDefault();

  navigation.classList.toggle('show');
  hamburger.classList.add('hide');
  close.classList.remove('hide');
  textPortfolio.classList.add('menu-text');
  about.classList.add('menu-text');
  contact.classList.add('menu-text');
});

close.addEventListener('click', () => {
  hamburger.classList.remove('hide');
  navigation.classList.remove('show');
});

textPortfolio.addEventListener('click', (e) => {
  e.stopPropagation();

  navigation.classList.remove('show');
  hamburger.classList.remove('hide');
});

about.addEventListener('click', (e) => {
  e.stopPropagation();

  navigation.classList.remove('show');
  hamburger.classList.remove('hide');
});

contact.addEventListener('click', (e) => {
  e.stopPropagation();

  navigation.classList.remove('show');
  hamburger.classList.remove('hide');
});

// popup
const portfolio = document.querySelector('#portfolio');
const modal = document.querySelector('#myModal');

portfolio.classList.add('works');

Array.from(portfolio.children).forEach((child, index) => {
  child.innerHTML = `
  <section class="${data[index].card}">
    <ul>
      <li><img src="${data[index].image.mobile}" alt="icon" class="img-1-1" /></li>
      <li><img src="${data[index].image.desktop}" alt="icon" class="img-1-2" /></li>
    </ul>
    <div class="block-1">
      <div class="text-group">
        <h2 class="lg-text-2">${data[index].name}</h2>
        <div class="client-info">
          <h3 class="client">${data[index].job.client}</h3>
          <a href="#"><img src="./assets/Counter.svg" alt="counter" /></a>
          <h3 class="role">${data[index].job.role}</h3>
          <a href="#"><img src="./assets/Counter.svg" alt="counter" /></a>
          <h3 class="year-label">${data[index].job.year}</h3>
        </div>
      </div>
      <h3 class="sm-text-2">${data[index].description.summary}</h3>
      <ul class="tags">
        <li>${data[index].technologies.html}</li>
        <li>${data[index].technologies.css}</li>
        <li>${data[index].technologies.javascript}</li>
      </ul>
      <div class="actions" id="${data[index].id}">
        <button class="btn" id="btn" type="button">See Project</button>
      </div>
    </div>
  </section>`;
});

// modals
Array.from(portfolio.children).forEach((item, index) => {
  item.firstElementChild.lastElementChild.lastElementChild.firstElementChild.addEventListener('click', () => {
    modal.innerHTML = `
    // <!-- Modal content -->
    <section class="modal-content">
      <div class="popup-text-group">
        <div class="text-group">
          <h2 class="popup-text-lg">${data[index].name}</h2>
          <div class="client-info">
            <h3 class="client">${data[index].job.client}</h3>
            <a href="#"><img src="./assets/Counter.svg" alt="counter" /></a>
            <h3 class="role">${data[index].job.role}</h3>
            <a href="#"><img src="./assets/Counter.svg" alt="counter" /></a>
            <h3 class="year-label">${data[index].job.year}</h3>
          </div>
        </div>
        <span class="close">&times;</span>
      </div>
      <ul>
        <li><img src="${data[index].image.mobile}" alt="icon" class="img-1-1" /></li>
        <li><img src="${data[index].image.desktop}" alt="icon" class="img-1-2 popup-img" /></li>
      </ul>
      <div class="popup-bottom">
        <p class="popup-text-sm">${data[index].description.portfolio}</p>
        <div class="popup-block">
          <ul class="tags ${data[index].id}">
          </ul>
          <div class="popup-actions">
            <button class="btn btnImg" id="btn" type="button">See Live
              <img src="./assets/Icon.svg" alt="icon" id="imgIcon" />
            </button>
            <button class="btn btnImg" id="btn" type="button">See Source
              <img src="./assets/github.svg.svg" alt="icon" id="imgIcon" />
            </button>
          </div>
        </div>
      </div>
    </section>
    `;

    const ulList = document.querySelector('.popup-block .tags');

    Object.keys(data[index].technologies).forEach((e) => {
      ulList.innerHTML += `<li>${data[index].technologies[e]}</li>`;
    });

    modal.style.display = 'block';
    const span = document.getElementsByClassName('close')[0];
    span.addEventListener('click', () => {
      modal.style.display = 'none';
    });
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
});

// form validation
const form = document.querySelector('.form');
const emailInput = form.elements.email;

const INPUT_LOWERCASE = 'Error : Please enter a lowercase input';

function showMessage(input, message, type) {
  const msg = document.querySelector('.error-text');
  msg.innerText = message;
  input.className = type ? 'success' : 'error';
  return type;
}

function showError(input, message) {
  return showMessage(input, message, false);
}

function validateEmail(input, invalidLowercase) {
  if (input.value === input.value.toLowerCase()) {
    return true;
  }
  return showError(input, invalidLowercase);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailValid = validateEmail(emailInput, INPUT_LOWERCASE);
  if (emailValid) {
    form.submit();
  }
});

// local storage
function saveUserDetails() {
  const formData = new FormData(form);
  const fullname = formData.get('fullname');
  const email = formData.get('email');
  const feedback = formData.get('feedback');
  const myFormData = { name: fullname, email, feedback };
  localStorage.setItem('myFormData', JSON.stringify(myFormData));
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailValid = validateEmail(emailInput, INPUT_LOWERCASE);
  if (emailValid) {
    form.submit();
    saveUserDetails();
  }
});

const stored = localStorage.getItem('myFormData');

function getUserDetails(localObj) {
  const userDetails = JSON.parse(localObj);
  form.fullname.value = userDetails.name;
  form.email.value = userDetails.email;
  form.feedback.value = userDetails.feedback;
}

getUserDetails(stored);