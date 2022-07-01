const letters = document.querySelectorAll(".letter")
const audios = document.querySelectorAll('audio')

function word () {
    let divD = this
    const dataKey = this.attributes[1].textContent
    audios.forEach(el => {
        if (dataKey === el.id) {
           elem = document.getElementById(`${dataKey}`)
           divD.classList.add("active")
           setTimeout(() => {
            divD.classList.remove("active");
          }, 800)
           elem.play()
        }
    })
}

letters.forEach (el => {
    el.onclick = word
})

document.onkeydown = function (event) {
    audios.forEach(el => {
       if (event.keyCode == el.id) {
        letters.forEach(e => {
        if (e.attributes[1].textContent === el.id) {
        let sound = event.keyCode
        elem = document.getElementById(`${sound}`)
        e.classList.add("active")
        setTimeout(() => {
        e.classList.remove("active");
        }, 800)
        elem.play(0)
        }
        
        })
       }
    }
        )
}