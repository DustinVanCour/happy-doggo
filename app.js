let doggos = [{
  name: "Doggo",
  moods: "standard", "happy", "super happy", "ZOMG!!! So Happy!"
  pets: 0,
  moodIndex: 0
  happiness: 3
  images: ['assets/standard-doggo.jpg', 'assets/happy-doggo.jpg', 'assets/super-happy-doggo.jpg', 'mega-happy-doggo.jpg']
}]

function pet() {
  doggos.pets++
  if (doggos.pets % doggos.happiness == 0) {
    doggos.moodIndex++;
  }
  drawDoggo()
}

function drawDoggo() {
  document.getElementById("pets").innerText = doggos.pets
  document.getElementById("doggo-image").setAttribute("src", doggos.images)
  document.getElementById("mood").innerText = doggos.moods[moodIndex]
  if (doggos.moodIndex == doggos.moods.length - 1) {
    document.getElementById('pet-button').disabled = true;
  }
  else {
    document.getElementById('pet-button').disabled = false;
  }

}