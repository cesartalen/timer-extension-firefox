let statusText = document.getElementById('statusText')
let startBtn = document.getElementById('startBtn')
let timerInput = document.getElementById('timerInput')
let stopBtn = document.getElementById('stopBtn')

startBtn.onclick = () => {
  let minutes = timerInput.value

  if (minutes === '' || isNaN(minutes) || minutes <= 0 || minutes[0] === '0') {
    statusText.innerText = 'Please enter a valid number'
    return
  }

  browser.alarms.create('timer', { delayInMinutes: parseInt(minutes) })

  statusText.innerText = `Timer set for ${minutes} minutes`
}

stopBtn.onclick = () => {
  browser.alarms.clear('timer')
  statusText.innerText = 'Timer stopped'
}
