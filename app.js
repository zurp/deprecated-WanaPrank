window.onload = function () {
  let timers = document.querySelectorAll('.timer')
  timers.forEach((timer) => {
    setInterval(function () {
      let parts = timer.innerText.split(':')
      let h = parseInt(parts[0]), m = parseInt(parts[1]), s=parseInt(parts[2])
      s -= 1
      if (s == 0) {
        s = 59
        m -= 1
      }
      if (m == 0) {
        m = 59
        h -= 1
      }
      timer.innerText = pf(h) + ':' + pf(m) + ':' + pf(s)
    }, 1000)
  })
}

function pf (num) {
  if (num < 10) {
    return '0' + num
  }
  return num
}
