var head =document.querySelector('header')
var btn = document.querySelector(".start")
btn.addEventListener('mouseover',() =>{
    head.style.background = "green"

})

btn.addEventListener('mouseleave',() =>{
    head.style.background = "#2f0272"

})
var btn2 = document.querySelector(".next")
btn2.addEventListener('mouseover', () =>{
    head.style.background = '#e8d804'
})
btn2.addEventListener('mouseleave',() =>{
    head.style.background = "#2f0272"

})

var html =  document.querySelector(".html")
var css =  document.querySelector(".css")
var js =  document.querySelector(".js")
var python =  document.querySelector(".python")

html.addEventListener("mouseover",() =>{
    head.style.background = 'orange'
})
html.addEventListener('mouseleave',() =>{
    head.style.background = "#2f0272"

})
css.addEventListener("mouseover",() =>{
    head.style.background = 'blue'
})
css.addEventListener('mouseleave',() =>{
    head.style.background = "#2f0272"

})
js.addEventListener("mouseover",() =>{
    head.style.background = 'yellow'
})
js.addEventListener('mouseleave',() =>{
    head.style.background = "#2f0272"

})


