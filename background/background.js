let alarmSound = new Audio(browser.extension.getURL('sounds/alarm.mp3'))

browser.alarms.onAlarm.addListener(() => {
  alarmSound.play()
})
