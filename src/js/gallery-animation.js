const galleryTilesSet = document.querySelectorAll('.gallery__img');

function getRandomInt(max) {
  return (Math.floor(Math.random() * max));
}

[].forEach.call(galleryTilesSet, function(galleryTile) {
    galleryTile.style.animationDuration = getRandomInt(6) + 4 + "s";
});