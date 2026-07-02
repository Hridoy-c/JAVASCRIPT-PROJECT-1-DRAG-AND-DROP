const lists = document.getElementsByClassName("list");
const leftbox = document.getElementById("left");
const rightbox = document.getElementById("right");

for (itemone of lists) {
  itemone.addEventListener("dragstart", function (e) {
    let section = e.target;

    rightbox.addEventListener("dragover", function (e) {
      e.preventDefault();
    });

    rightbox.addEventListener("drop", function (e) {
      rightbox.appendChild(section);
      section = null;
    });

    leftbox.addEventListener("dragover", function (e) {
        e.preventDefault();
    })

    leftbox.addEventListener("drop", function (e) {
    leftbox.appendChild(section);
    section = null;
    })
  });
}
