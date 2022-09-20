//Selectore
const form = document.getElementById('form');
const search = form.querySelector('#search');
const result = document.getElementById('result');
const more = document.getElementById('more');

const API_URL = 'https://api.lyrics.ovh';

//handlers
const searchSongs = async (value) => {
  //mostrar spinner
  const res = await fetch(`${API_URL}/suggest/${value}`);
  const data = await res.json();
  //chau spinner
  console.log(data);
  //
  if (data.data.length < 1) {
    console.log('no hay nada');
  }
  showSongs(data);
};

const showSongs = ({ data, next, prev }) => {
  result.innerHTML = `
  <ul class="songs">
      ${data
        .map((song) => {
          return `
          <li>
              <span><strong>${song.artist.name}</strong> - ${song.title} </span>
              <button class="btn" data-artist="${song.artist.name}" data-song="${song.title}">
                  Letra
              </button>
          </li>
      `;
        })
        .join('')}
      
  </ul>
  `;
  if (next || prev) {
    more.innerHTML = `
            ${
              prev
                ? `<button class="btn" onclick="getMoreSongs('${prev}')">Anterior</button>`
                : ''
            }

            ${
              next
                ? `<button class="btn" onclick="getMoreSongs('${next}')">Siguiente</button>`
                : ''
            }
        
        `;
  }

  //   <button class="btn">Anterior</button>
  //   <button class="btn">Siguiente</button>
};
const getMoreSongs = async (url) => {
  const res = await fetch(`https://cors-anywhere.herokuapp.com/${url}`);
  const data = await res.json();
  showSongs(data);
};

const getLyric = async (artist, songTitle) => {
  const res = await fetch(`${API_URL}/v1/${artist}/${songTitle}`);
  const data = await res.json();
  const lyric = data.lyrics.replace(/(\r\n|\r|\n)/g, '<br>');
  result.innerHTML = `
    <h2><strong>${artist}</strong> - ${songTitle} </h2>
    <span>
        ${lyric}
    </span> 
  `;
  more.innerHTML = '';
};

//INIT
function init() {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchValue = search.value.trim();
    if (!searchValue) {
      return;
    }
    searchSongs(searchValue);
  });

  result.addEventListener('click', (e) => {
    const element = e.target;
    if (element.nodeName.toLowerCase() === 'button') {
      console.log(element);
      console.dir(element);
      const artist = element.dataset.artist;
      const song = element.dataset.song;
      getLyric(artist, song);
    }
  });
}

init();

// MOTRAR UN SPINNER
