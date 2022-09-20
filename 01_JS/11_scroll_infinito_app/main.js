//selectores
const postContainer = document.querySelector('.posts-container');
const loading = document.querySelector('.loader');
const filter = document.querySelector('#filter');

//GLOBALES
let limit = 5;
let page = 1;

//handlers - logica - UI

//FETCH POST
const getPost = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
  );
  const data = await res.json();
  page++;
  console.log(data);
  return data;
};

//UI
//Algo que se encargue de dibujar los post
const showPost = (posts) => {
  const postHTML = posts
    .map((post) => {
      return `
        <div class="post">
            <div class="number">${post.id}</div>
            <div class="post-info">
                <h2 class="post-title">${post.title}</h2>
                <p class="post-body">
                   ${post.body}
                </p>
            </div>
        </div>`;
    })
    .join('');

  postContainer.innerHTML += postHTML;
};

// loading.classList.remove('show') //
//Algo que muestre la animacion
const showLoading = (posts) => {
  loading.classList.add('show');
  setTimeout(() => {
    loading.classList.remove('show');
    setTimeout(() => {
      showPost(posts);
    });
  }, 1000);
};

//Filter
const filterPost = ({ target }) => {
  const value = target.value.toUpperCase();
  console.log(value);
  const posts = document.querySelectorAll('.post');

  for (let post of posts) {
    const title = post.querySelector('.post-title').innerText.toUpperCase();
    const body = post.querySelector('.post-body').innerText.toUpperCase();
    if (title.includes(value) || body.includes(value)) {
      post.style.display = 'flex';
    } else {
      post.style.display = 'none';
    }
  }
};

//init() -> inicializador de la app! aca van a estar los eventos!!

function init() {
  window.addEventListener('DOMContentLoaded', async () => {
    let posts = await getPost();
    showPost(posts);
  });
  window.addEventListener('scroll', async () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 1) {
      let posts = await getPost();
      showLoading(posts);
    }
  });
  filter.addEventListener('input', filterPost);
}

init();

//https://jsonplaceholder.typicode.com/posts/${id} 1 2 3 4 5 10 1000
