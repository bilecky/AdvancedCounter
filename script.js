const startBtn = document.querySelector('.start')
const pauseBtn = document.querySelector('.pause')
const stopBtn = document.querySelector('.stop')
const resetBtn = document.querySelector('.reset')
const historyBtn = document.querySelector('.history')
const stopwatch = document.querySelector('.stopwatch')
const time = document.querySelector('.time')
const timeList = document.querySelector('.time-list')

const infoBtn = document.querySelector('.info')
const modalShadow = document.querySelector('.modal-shadow')
const closeModalBtn = document.querySelector('.close')
let ms = 0
let minutes = 0
let seconds = 0
let countTime

let hour = 0
let lessSeconds = 0
let lessMinutes = 0
let lessHours = 0
let startInterval = null

let timesArray = []

const watchStart = () => {
	clearInterval(countTime)
	countTime = setInterval(() => {
		// if (seconds < 9) {
		// 	seconds++
		// 	stopwatch.textContent = `${minutes}:0${seconds}`
		// } else if (seconds >= 9 && seconds < 59) {
		// 	seconds++
		// 	stopwatch.textContent = `${minutes}:${seconds}`
		// } else {
		// 	minutes++
		// 	seconds = 0
		// 	stopwatch.textContent = `${minutes}:00`
		// }

		ms += 10
		if (ms / 1000 === 1) {
			ms = 0

			seconds++
		}
		if (seconds / 60 === 1) {
			seconds = 0
			minutes++
			if (minutes / 60 === 1) {
				minutes = 0
				hour++
			}
		}
		const miliSeconds = ms > 99 ? ms : ms > 9 ? '0' + ms : '00' + ms

		if (seconds < 10) {
			lessSeconds = `0${seconds}`
		} else lessSeconds = seconds
		if (minutes < 10) {
			lessMinutes = `0${minutes}`
		} else lessMinutes = minutes
		if (hour < 10) {
			lessHours = `0${hour}`
		} else lessHours = hour

		stopwatch.innerHTML = `${lessHours}:${lessMinutes}:${lessSeconds}.<span style = "font-size: 40px">${miliSeconds
			.toString()
			.slice(0, -1)}</span>`
	}, 10)
}

const watchPause = () => {
	clearInterval(countTime)
}

const watchStop = () => {
	time.innerHTML = `Ostatni czas: ${stopwatch.textContent}`

	if (stopwatch.textContent !== '00:00:00.00') {
		time.style.visibility = 'visible'
		timesArray.push(stopwatch.textContent)
		console.log(timesArray)
	}
	clearAll()
}

const watchReset = () => {
	time.style.visibility = 'hidden'
	timesArray = []
	clearAll()
}

const clearAll = () => {
	clearInterval(countTime)
	stopwatch.innerHTML = `00:00:00.<span style = "font-size: 40px">00</span>`
	timeList.textContent = ''
	seconds = 0
	minutes = 0
	hour = 0
}

const watchHistory = () => {
	timeList.textContent = ''

	let newTime = 1
	timesArray.forEach(el => {
		const newEl = document.createElement('li')
		newEl.innerHTML = `Pomiar nr ${newTime}: <span>${el}</span>`
		newTime++
		timeList.appendChild(newEl)
	})
}

startBtn.addEventListener('click', watchStart)
pauseBtn.addEventListener('click', watchPause)
stopBtn.addEventListener('click', watchStop)
resetBtn.addEventListener('click', watchReset)
historyBtn.addEventListener('click', watchHistory)

const showModal = () => {
	if (!(modalShadow.style.display === 'block')) {
		modalShadow.style.display = 'block'
	} else {
		modalShadow.style.display = 'none'
	}
	modalShadow.classList.toggle('modal-animation')
}

infoBtn.addEventListener('click', showModal)
closeModalBtn.addEventListener('click', showModal)
window.addEventListener('click', e => {
	e.target === modalShadow ? showModal() : false
})
