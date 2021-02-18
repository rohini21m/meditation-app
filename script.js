const container = document.querySelector(".container")
const text = document.querySelector("#text")

const  totalCount = 10000
const  inhaleCount = (totalCount/5)*3.5
const HoldCount = totalCount


inhaleAnimation()

function inhaleAnimation() {
    text.innerHTML = "Breathe In"
    container.className = 'container shrink'


    setTimeout(() => {
        text.innerHTML = "Hold"
    
        setTimeout(() => {
            text.innerHTML = "Breathe Out"
            container.className = 'container grow'
        }, HoldCount)
    }, inhaleCount)
}
setInterval(inhaleAnimation(),totalCount)