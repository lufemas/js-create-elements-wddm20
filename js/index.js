// Create an element with class dot
// <li class="dot"></li>

const $stage = document.querySelector('.stage')

const addADot = (event) => {

	// $stage.innerHTML += `<li class="dot"></li>`

	// document.querySelector('.dot:last-child').style.left = `${Math.random() * 100}%`
	// document.querySelector('.dot:last-child').style.top = `${Math.random() * 100}%`
	console.log(event)


	// Create the new element
	const $dot = document.createElement('li')

	// Add a class to it
	$dot.classList.add('dot')

	// Move the element around
	const dotEmSize = Math.random() * 10 
	const dotPxRadius = parseInt( dotEmSize * 14 / 2 ) // CHANGE 14 for something as  getComputedStyle($dot).fontSize

	let dotTopPx = event.clientY
	let dotLeftPx = event.clientX

	if ( dotTopPx - dotPxRadius < 0 ) dotTopPx += dotPxRadius + 10;
	if ( dotTopPx + dotPxRadius > window.innerHeight ) dotTopPx -= dotPxRadius - 10;
	if ( dotLeftPx - dotPxRadius < 0 ) dotLeftPx += dotPxRadius + 10;
	if ( dotLeftPx + dotPxRadius > window.innerHeight ) dotLeftPx -= dotPxRadius - 10;

	const dotLeft = dotLeftPx/window.innerWidth*100
	const dotTop = dotTopPx/window.innerHeight*100

	$dot.style.left = `${dotLeft}%`
	$dot.style.top = `${dotTop}%`
	$dot.style.width = $dot.style.height = `${dotEmSize}em`
	$dot.style.backgroundColor = `#${ Math.floor(Math.random() * 16777215).toString(16)}`

	console.log(dotEmSize)

	console.log($dot.getBoundingClientRect().width)

	// Insert it into the document
	$stage.appendChild($dot)

}


window.addEventListener('click', addADot)


// 1. Insert the dot at the point (left/top) you clicked, not randomly
// 2. Insert the dot at the point, BUT, apply as a %, not a px value
// 3. Randomize the size
// 4. Randomize the colour

// ADVANCED:
// - If the new element is inserted such that it would be partially outside the window boundary, move it over in the appropriate direction.
