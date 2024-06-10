window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  var object = document.querySelectorAll("[data-acc-text='next']"); 
gsap.to(object, {
  scale: 1.25,
  opacity: 20,
  duration: 1, ease: "expo.out",
  stagger: {
    each: 0.5,
    repeat: -1
  }
});
}

window.Script2 = function()
{
  var object = document.querySelectorAll("[data-acc-text='next']"); 
gsap.to(object, {
  scale: 1.25,
  opacity: 20,
  duration: 1, ease: "expo.out",
  stagger: {
    each: 0.5,
    repeat: -1
  }
});
}

window.Script3 = function()
{
  var object = document.querySelectorAll("[data-acc-text='next']"); 
gsap.to(object, {
  scale: 1.25,
  opacity: 20,
  duration: 1, ease: "expo.out",
  stagger: {
    each: 0.5,
    repeat: -1
  }
});
}

window.Script4 = function()
{
  var object = document.querySelectorAll("[data-acc-text='next']"); 
gsap.to(object, {
  scale: 1.25,
  opacity: 20,
  duration: 1, ease: "expo.out",
  stagger: {
    each: 0.5,
    repeat: -1
  }
});
}

window.Script5 = function()
{
  var object = document.querySelectorAll("[data-acc-text='next']"); 
gsap.to(object, {
  scale: 1.25,
  opacity: 20,
  duration: 1, ease: "expo.out",
  stagger: {
    each: 0.5,
    repeat: -1
  }
});
}

};
