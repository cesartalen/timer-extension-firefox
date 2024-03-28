let alarmSound = new Audio('sounds/alarm.mp3')

browser.alarms.onAlarm.addListener(() => {
  alarmSound.play()
})
