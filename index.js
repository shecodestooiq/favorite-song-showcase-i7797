function displaySongInfo() {


  var songName = document.getElementById("songName").value;
  var youtubeLink = document.getElementById("youtubeLink").value;
  var description = document.getElementById("description").value;
  var year = document.getElementById("year").value;
  var embedLink = youtubeLink.replace("watch?v=", "embed/");

  
  var displayArea = document.getElementById("displayArea");
  displayArea.innerHTML = `
      <h2>${songName}</h2>
      <p>${description}</p>
      <p>Year first listened: ${year}</p>
      <iframe width="560" height="315" src="${embedLink}" frameborder="0" allowfullscreen></iframe>
  `;

  document.getElementById("formArea").style.display = "none";
  displayArea.style.display = "block";

}
module.exports = {
    displaySongInfo: displaySongInfo,
};