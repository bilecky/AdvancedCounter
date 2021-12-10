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

let minutes = 0
let seconds = 0
let countTime

let timesArray = []

const watchStart = () => {
	clearInterval(countTime)
	countTime = setInterval(() => {
		if (seconds < 9) {
			seconds++
			stopwatch.textContent = `${minutes}:0${seconds}`
		} else if (seconds >= 9 && seconds < 59) {
			seconds++
			stopwatch.textContent = `${minutes}:${seconds}`
		} else {
			minutes++
			seconds = 0
			stopwatch.textContent = `${minutes}:00`
		}
	}, 1000)
}

const watchPause = () => {
	clearInterval(countTime)
}

const watchStop = () => {
	time.innerHTML = `Ostatni czas: ${stopwatch.textContent}`

	if (stopwatch.textContent !== '0:00') {
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
	stopwatch.textContent = '0:00'
	timeList.textContent = ''
	seconds = 0
	minutes = 0
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
