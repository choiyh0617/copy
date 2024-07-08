// function changebg(color){
//     var result=document.querySelector("#262626");
//     result.style.backgroundColor = color
// }
// var button1 = document.querySelector('#home')
// button1.addEventListener('click', function(){
//     button1.style.backgroundColor = ('#262626')
// })

// var buttonss = document.querySelector("#shorts")
// buttonss.addEventListener('click',function(){
//     window.open('https://www.youtube.com/shorts/jJDpyrAHEi4')
// })

// var buttons = document.querySelector("#subscribe")
// buttons.addEventListener('click',function(){
//     buttons.style.backgroundColor = ('#262626')
// })

// const button2 = document.querySelector("#me")
// button2.addEventListener('click',function(){
//     button2.style.backgroundColor = ('#262626')
// })

// let name = prompt("이름을 입력해주세요")
// alert(`${name}님 환영합니다.`)

const buttons = document.querySelectorAll('.lit');

let activeButton = null;

buttons.forEach(button => {
    button.addEventListener('click', function() {
        if (activeButton) {
            activeButton.style.backgroundColor ='#000';
        }
        this.style.backgroundColor = '#262626';
        activeButton = this;
    });
});

const rogo = document.getElementById('rogo');
rogo.addEventListener('click',function(){
    window.location.href='youtube.html'
})