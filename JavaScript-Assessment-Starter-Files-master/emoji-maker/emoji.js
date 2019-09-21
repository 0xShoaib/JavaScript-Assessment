var skinCard = document.getElementById("select-skin-card");
var eyesCard = document.getElementById("select-eyes-card");
var mouthCard = document.getElementById("select-mouth-card");

let skin = document.getElementById("skin");
let eyes = document.getElementById("eyes");
let mouth = document.getElementById("mouth");

//----------- Change Skin Color -------------------

let yellowSkin = document.getElementById("yellow-skin");
let greenSkin = document.getElementById("green-skin");
let redSkin = document.getElementById("red-skin");

yellowSkin.addEventListener("click", () => {
  skin.src = yellowSkin.src;
  skinCard.style.display = "none";
  eyesCard.style.display = "block";
});

greenSkin.addEventListener("click", () => {
  skin.src = greenSkin.src;
  skinCard.style.display = "none";
  eyesCard.style.display = "block";
});

redSkin.addEventListener("click", () => {
  skin.src = redSkin.src;
  skinCard.style.display = "none";
  eyesCard.style.display = "block";
});

//----------- Change Eyes -------------------

let eyeNormal = document.getElementById("eye-normal");
let eyeClosed = document.getElementById("eye-closed");
let eyeLong = document.getElementById("eye-long");
let eyeLaughing = document.getElementById("eye-laughing");
let eyeRolling = document.getElementById("eye-rolling");
let eyeWinking = document.getElementById("eye-winking");

eyeNormal.addEventListener("click", () => {
  eyes.src = eyeNormal.src;
  eyesCard.style.display = "none";
  mouthCard.style.display = "block";
});

eyeClosed.addEventListener("click", () => {
  eyes.src = eyeClosed.src;
  eyesCard.style.display = "none";
  mouthCard.style.display = "block";
});

eyeLong.addEventListener("click", () => {
  eyes.src = eyeLong.src;
  eyesCard.style.display = "none";
  mouthCard.style.display = "block";
});

eyeLaughing.addEventListener("click", () => {
  eyes.src = eyeLaughing.src;
  eyesCard.style.display = "none";
  mouthCard.style.display = "block";
});

eyeRolling.addEventListener("click", () => {
  eyes.src = eyeRolling.src;
  eyesCard.style.display = "none";
  mouthCard.style.display = "block";
});

eyeWinking.addEventListener("click", () => {
  eyes.src = eyeWinking.src;
  eyesCard.style.display = "none";
  mouthCard.style.display = "block";
});

//----------- Change Mouth -------------------
let mouthOpen = document.getElementById("mouth-open");
let mouthOSmiling = document.getElementById("mouth-smiling");
let mouthStraight = document.getElementById("mouth-straight");
let mouthSad = document.getElementById("mouth-sad");
let mouthTeeth = document.getElementById("mouth-teeth");

mouthOpen.addEventListener("click", () => {
  mouth.src = mouthOpen.src;
});
mouthOSmiling.addEventListener("click", () => {
  mouth.src = mouthOSmiling.src;
});
mouthStraight.addEventListener("click", () => {
  mouth.src = mouthStraight.src;
});
mouthSad.addEventListener("click", () => {
  mouth.src = mouthSad.src;
});
mouthTeeth.addEventListener("click", () => {
  mouth.src = mouthTeeth.src;
});

//----------- Previous and Next Button -------------------

let showEyesCard = document.getElementById("show-eyes-card");
let showMouthCard = document.getElementById("show-mouth-card");
let showSkinCard = document.getElementById("show-skin-card");

showEyesCard.addEventListener("click", () => {
  skinCard.style.display = "none";
  eyesCard.style.display = "block";
  mouthCard.style.display = "none";
});

showMouthCard.addEventListener("click", () => {
  skinCard.style.display = "none";
  eyesCard.style.display = "none";
  mouthCard.style.display = "block";
});

showSkinCard.addEventListener("click", () => {
  skinCard.style.display = "block";
  eyesCard.style.display = "none";
  mouthCard.style.display = "none";
});
