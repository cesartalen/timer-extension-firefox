let statusText = document.getElementById('statusText')
let startBtn = document.getElementById('startBtn')
let timerInput = document.getElementById('timerInput')

startBtn.onclick = () => {
  let minutes = timerInput.value

  if (minutes === '' || isNaN(minutes) || minutes <= 0) {
    statusText.innerText = 'Please enter a valid number'
    return
  }

  statusText.innerText = `Timer set for ${minutes} minutes`
}
