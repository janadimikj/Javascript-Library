
//JSON
var songs = [
    {
      "id": 1,
      "name": "Von dutch",
      "image": "vondutch.jpg",
      "color": "#ff00ff",
      "link": "https://open.spotify.com/track/01TnMXIy7mJJQ7E8uy937N?si=27f82bc511c04fb4"
    },
    {
      "id": 2,
      "name": "Club classics",
      "image": "clubclassics.jpeg",
      "color": "#0000ff",
      "link": "https://open.spotify.com/track/7BoOmRrtNCbIT9yQ4xidk5?si=e4255e8f9c32458b"
    },
    {
      "id": 3,
      "name": "B2b",
      "image": "brat.jpeg",
      "color": "#69ff00",
      "link": "https://open.spotify.com/track/6tYGrpUyqB4yao5lAs3AR4?si=3e03ff7456e14805"
    }
  ];

//rendering the JSON data

var albumElement = document.getElementById('album');
//var individualsElement = document.getElementByClass('individuals');

songs.forEach(function(songs) {
  var songsDiv = document.createElement('div');
  songsDiv.classList.add('songs');

  var image = document.createElement('img');
  image.src = songs.image;

  var name = document.createElement('p');
  name.textContent = songs.name;

  var color = document.createElement('div');
  color.style.borderColor = songs.color;
  color.classList.add('color');

  var link = document.createElement('a');
  link.href = songs.link;
  link.textContent = "spotify link";

  songsDiv.appendChild(name);
  songsDiv.appendChild(image);
  songsDiv.appendChild(color);
  songsDiv.appendChild(link);

albumElement.appendChild(songsDiv);

}
)
;

//anime library//

anime ({
  targets: ".anime",
  translateX: 1200
});