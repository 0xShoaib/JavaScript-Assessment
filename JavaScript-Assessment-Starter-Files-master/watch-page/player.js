var playlist = document.getElementById("playlist-wrapper");
const createCard = (id, thumbnail, title) => {
  var cardDiv = document.createElement("div");
  cardDiv.id = "card" + id;
  cardDiv.className = "playlist-card active-card";

  var cardImg = document.createElement("img");
  cardImg.className = "thumbnail";
  cardImg.src = thumbnail;

  var cardTitle = document.createElement("h3");
  cardTitle.className = "video-card-title";
  cardTitle.innerHTML = title;

  cardDiv.appendChild(cardImg);
  cardDiv.appendChild(cardImg);
  cardDiv.appendChild(cardTitle);
  return cardDiv;
};

$.get("https://5d76bf96515d1a0014085cf9.mockapi.io/playlist", data => {
  var cardData = data;
  console.log(cardData);

  for (var i = 0; i < cardData.length; i++) {
    playlist.appendChild(
      createCard(cardData[i].id, cardData[i].thumbnail, cardData[i].title)
    );
  }
});
$.get("http://5d76bf96515d1a0014085cf9.mockapi.io/video/1", videoData => {
  var videoPlayer = document.getElementById("video-player");
  var viewCounts = document.getElementById("views-count");
  var videoTitle = document.getElementById("video-title");

  var videoDescription = document.getElementById("video-description");
  videoPlayer.src = "https://player.vimeo.com/video/" + videoData.vimeoId;
  viewCounts.innerHTML = videoData.views;
  videoTitle.innerHTML = videoData.title;
  videoDescription.innerHTML = videoData.description;
});
