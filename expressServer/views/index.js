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
  console.log(record);
  console.log("clicked");
});
