let container = document.querySelector(".container");
let songsContainer = container.querySelector(".songs-container");
let addButton = container.querySelector(".form__submit-btn_action_add");
let resetButton = container.querySelector(".form__submit-btn_action_reset");

// // функция для того, как меняется страница, когда в плейлисте есть песни и когда нет. Когда нет песен - кнопка Очистить неактивна, есть надпись Нет добавленных песен
function renderAdded() {
  let songs = songsContainer.querySelectorAll(".song"); //получили список всех песен в плейлисте
  let noSongsElement = container.querySelector(".no-songs");

  //проверяем, есть ли песни в плейлисте
  if (songs.length === 0) {
    resetButton.setAttribute("disabled", true);
    resetButton.classList.add("form__submit-btn_disabled");
    noSongsElement.classList.remove("no-songs_hidden");
  } else {
    resetButton.removeAttribute("disabled");
    resetButton.classList.remove("form__submit-btn_disabled");
    noSongsElement.classList.add("no-songs_hidden");
  }
}

function addSong() {
  let artist = document.querySelector(".input__text_type_artist");
  let song = document.querySelector(".input__text_type_song");

  //добавляется информация, которую пользователь сам вводит в поля ввода артист и песня
  songsContainer.insertAdjacentHTML(
    "beforeend",
    `
          <div class="song">
        <h4 class="song__artist">${artist.value}</h4>
        <p class="song__title">${song.value}</p>
            <button class="song__like"></button>
          </div>
    `
  );

  artist.value = ""; // после добавления песни блок инпут очищается;
  song.value = "";

  renderAdded(); //при добавлении новых песен условная конструкция будет срабатывать, меняя цвет кнопки;
}

addButton.addEventListener("click", addSong); // добавить песню по клику

renderAdded(); //чтобы покрасить кнопку «Очистить плейлист» в серый цвет при загрузке страницы.
