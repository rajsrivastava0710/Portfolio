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

