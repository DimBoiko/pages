const navigation = document.querySelector('.header .container')
const modal = document.querySelector('.nav-modal')
const home = document.querySelector('.main')
const about = document.querySelector('.about')
const pages = document.querySelector('.chapters')
const contact = document.querySelector('.footer')

const isMobile = window.innerWidth < 1050
const nav = navigation.firstChild
const burger = navigation.lastChild

if(isMobile){
	modal.addEventListener('click',(e)=>scrollNavigation(e))
	burger.onclick = toggleModal
}
if(!isMobile){
	modal.addEventListener('click',(e)=>scrollNavigation(e))
	burger.onclick = toggleModal
}


function scrollNavigation (target) {
	target.preventDefault()
	console.log(target)
	if(target.target.text === 'Home'){
		home.scrollIntoView({block:'start',behavior:'smooth'})
	}
	if(target.target.text === 'About'){
		about.scrollIntoView({block:'start',behavior:'smooth'})
	}
	if(target.target.text === 'Pages'){
		pages.scrollIntoView({block:'start',behavior:'smooth'})
	}
	if(target.target.text === 'Contact Us'){
		contact.scrollIntoView({block:'start',behavior:'smooth'})
	}
	toggleModal()
}

function toggleModal () {
	modal.classList.toggle('show')	
	burger.classList.toggle('close')
	document.body.classList.toggle('offScroll')
}