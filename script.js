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

	clearInterval(countTime)

	stopwatch.textContent = '0:00'
	timeList.textContent = ''
	seconds = 0
	minutes = 0
}

startBtn.addEventListener('click', watchStart)
pauseBtn.addEventListener('click', watchPause)
stopBtn.addEventListener('click', watchStop)
pauseBtn.addEventListener('click', watchPause)
