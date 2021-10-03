class Scroll {
    constructor(obj) {
        this.el = obj.el instanceof HTMLElement ? obj.el : document.querySelector(obj.el)
        this.el.style.position = 'fixed'
        this.scroll()
        window.addEventListener('scroll', () => this.scroll())
    }
    scroll() {
        if (window.innerHeight - this.el.clientHeight - window.scrollY >= 0) {
            this.el.style.top = window.innerHeight - this.el.clientHeight - window.scrollY + 'px'
        } else {
            this.el.style.top = 0
        }
    }
}
const scroll = new Scroll({
    el: '.header__nav'
})



class Text {
    constructor(obj) {
        this.el = document.querySelector(obj.el)
        this.text = this.el.innerHTML
        this.el.innerHTML = ''
        this.str()
    }
    str(i = 0) {
        this.el.innerHTML += this.text[i]
        i++
        if (i < this.text.length) {
            setTimeout(() => {
                this.str(i)
            }, 100);
        }
    }
}
const text = new Text({
    el: '.header__content h1'
})
const text2 = new Text({
    el: '.header__content p'
})
const text3 = new Text({
    el: '.info__scroll-title'
})

// class headerContent {
//     constructor(obj){
//         this.el = document.querySelector(obj.el)
//         this.randNum()
//         this.el.addEventListener('mouseover', function () {
//             this.el.style.marginTop = `${this.randNum().num1}px`
//         })
//     }
//     randNum() {
//         var num1 = Math.round(Math.random() * (window.innerHeight - this.el.clientHeight))
//         return num1
//     }
// }

// const randTop = new headerContent({
//     el: '.header__content'
// })



let header__content = document.querySelector('.header__content');

header__content.addEventListener('mouseover' , function () {
    header__content.style.marginLeft = `${rand2()}px`
    header__content.style.marginTop = `${rand()}px` 
})

let rand = function randNum() {
    var num1 = Math.round(Math.random() * (window.innerHeight - header__content.clientHeight))
    return num1
}

let rand2 = function randNum2() {
    var num2 = Math.round(Math.random() * (window.innerWidth - header__content.clientWidth))
    return num2
}

// console.log(window.innerHeight - header__content.clientHeight);
// console.log(rand());
// console.log(header__content.clientHeight);
// console.log(window.innerHeight);


let openBtn = document.querySelector('.openBtn'),
    clickNavbar = document.querySelector('.click__navbar'),
    navbarSpan = document.querySelector('.navbar__span');


openBtn.addEventListener('click' , function (){
    clickNavbar.style.display = 'flex'
})
navbarSpan.addEventListener('click' , function (){
    clickNavbar.style.display = 'none'
})
