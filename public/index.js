console.log("Linked");

const $body = $(`body`);

$(document).ready(function () {
  let $div = $(`<div>Test </div>`);
  $body.append($div);
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
