console.log("Linked");

const $body = $(`body`);
const $container = $(`.container`);

$(document).ready(function () {
  createInput();
});

const $record = $(`#record`);
const $artist = $(`#artist`);
const $genre = $(`#genre`);
const $submit = $(`#submit`);

$submit.on("click", () => {
  let record = $record.val();
  let artistname = $artist.val();
  let genrename = $genre.val();
  let albumJson = { recordname: record, artist: artistname, genre: genrename };

  fetch(`/api/records`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(albumJson),
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
});

function createInput() {
  let $record = $(`<label>Record Name:</label><input id="recordName"></input>`);
  let $artist = $(`<label>Artist Name:</label><input id="artistName"></input>`);
  let $genre = createGenreList();
  $container.append($record);
  $container.append($artist);
  $container.append($genre);
}

async function createGenreList() {
  let $genre = $(`<label>Genre:</label><select id="genres"/>`);
  let genres = await fetch(`/api/genres`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
  console.log(genres);
  return $genre;
}
