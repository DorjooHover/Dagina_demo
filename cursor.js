const cursor = document.querySelector('.cursor')
const balloon = document.querySelector('.balloon')
const text = document.querySelector('.main_text')
var start, end

balloon.addEventListener('mousedown', e => {
    mouseDown()
    document.styleSheets[0].addRule('.main_text::before', 'width:100%;')
})
balloon.addEventListener('mouseup', e => {
    console.log('asdf')
    mouseUp()
    if ((end - start) >= 2000) {
        window.location.href = 'index.html'
    }
})

function mouseDown() {
    start = +new Date();
}

function mouseUp() {
    end = +new Date()
    console.log(end - start)
}
balloon.addEventListener('mousemove', e => {
    cursor.setAttribute('style', 'top: ' + (e.pageY - 10) + 'px; left: ' + e.pageX + 'px; display:block; ')
    document.querySelector('body').style.cursor = 'none'
})
text.addEventListener('mousemove', e => {
    cursor.setAttribute('style', 'top: ' + (e.pageY - 10) + 'px; left: ' + e.pageX + 'px; display:block; ')
    document.querySelector('body').style.cursor = 'none'
})