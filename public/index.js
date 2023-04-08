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
  let $record = $(
    `<label>Record Name:</label><input id="recordName"></input><br/>`
  );
  let $artist = $(
    `<label>Artist Name:</label><input id="artistName"></input><br/>`
  );
  let $genre = createGenreList();
  $container.append($record);
  $container.append($artist);
  $container.append($genre);
}

async function createGenreList() {
  let $genre = $(`<label>Genre:</label><select id="genres"/>`);
  try {
    let results = await fetch(`/api/genres`);
    let genres = await results.json();

    // forEach(genre => {

    // });
    console.log(genres);
  } catch (error) {
    console.log(error);
  }
  return $genre;
}
