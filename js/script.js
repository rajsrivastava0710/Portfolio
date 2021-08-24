let skillBar = document.querySelectorAll('.skill-progress > div');

let skillContainer = document.querySelector('.skill-display');

let menu = document.querySelectorAll('.nav-bar a');

let animationAllowed = true;

let event;

window.onunload = function(){ window.scrollTo(0,0); }

menu.forEach(function(item,index){
	item.addEventListener('click',function(e){
		e.preventDefault();
		let new_filler = item.getAttribute('href');
		// let fillerText;
		// if(index==0){
		// 	fillerText = 'body-header';
		// }else{
		// 	fillerText = item.textContent.trim().toLowerCase();
		// }
		// let section = document.querySelector('#'+fillerText);
		let section = document.querySelector(new_filler);
		let prevPos,currPos;
		event = setInterval(scrollVertical,15,section)
	})
})


window.addEventListener('scroll',checkScroll);

initializeBar();

function scrollVertical(section){
			currPos = section.getBoundingClientRect().top;
			if(currPos<=0){
				clearInterval(event);
				// console.log('Stopped');
				return;
			}
			window.scrollBy(0,50);
			prevPos = section.getBoundingClientRect().top;
			if(currPos == prevPos){
				clearInterval(event);
				// console.log('Stopped');
				return;
			}
}

let animateAllowed = [];
for(let i=0;i<skillBar.length;i++){
	animateAllowed[i] = true;
}
function checkScroll(){
	skillBar.forEach(function(singleSkill, index){
		if(animateAllowed[index] &&  singleSkill.getBoundingClientRect().top<window.innerHeight){
			animateAllowed[index] = false;
			fillEachBar(singleSkill);
		}
	})
}

function fillEachBar(bar){
	let currentWidth = 0;
	let targetWidth = bar.getAttribute('data-skill');
	
	let filler = setInterval(function(){
		currentWidth+=1;
		bar.style.width = currentWidth+'%';
		if(currentWidth >= targetWidth){
			clearInterval(filler);
		}
	},30)

}

// function startFillingBars(){
// 	for(let bar of skillBar){
// 		fillEachBar(bar);		
// 	}
// }

function initializeBar(){
for(let bar of skillBar){
	bar.style.width = '0'
	}
}

// if ($(".text-slider").length == 1) {
              
// 	var typed_strings = 
// 		$(".text-slider-items").text();

// 	var typed = new Typed(".text-slider", {
// 		strings: typed_strings.split(", "),
// 		typeSpeed: 50,
// 		loop: true,
// 		backDelay: 900,
// 		backSpeed: 30,
// 	});
// }
// new TypeIt(".text-slider-items", {
// 	strings: "Hello Viewer &#128515;",
// 	speed: 200,
// 	waitUntilVisible: true,
//   }).go();
	let color = ["darkblue","red","greenyellow","yellow","orange"];
	function getRandomColor() {
		var idx = Math.floor(Math.random() * 5);
		return color[idx];
	}
  const instance = new TypeIt(".text-slider-items", {
	strings: ["Hello Viewer &#128515;"],
	speed: 200,
	waitUntilVisible: true,
	afterStep: function (instance) {
	  instance.getElement().style.color = getRandomColor();
	},
  }).go();

//   var cw = $('.child').width();
	var element = document.querySelector('.exp-data')
	var cw = element.style.width;
	element.style.height = cw + "px";

// $('.child').css({'height':cw+'px'});

  new TypeIt(".intro-text", {
		// strings: "I am currently working at Tata Consultancy Services as a System Engineer. <br> I enjoy solving algorithmic problems and have made some Full Stack Web Development projects using majorly MERN stack.",
		speed: 45,
		waitUntilVisible: true,
	})
	.type("I am currently working at Tata Consultancy Services as a System Engineer",{ delay: 300 })
	.delete(72)
	.type("I enjoy solving problems",{delay:200})
	.move(-8)
	.type("algorithmic ")
	.move(null, { to: "END" })
	.type(" and have made some Full Stack Web Development projects using majorly MERN stack.",{delay:400})
	.delete(117)
	.pause(300)
	// .delay(400)
	.type("Ok, Now you may proceed &#128521;")
	.go()
