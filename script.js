let title = document.querySelectorAll('div');
console.log(title)
// title.onmouseover = function(){
//     this.style.width='25%';
//     this.style.height='300px';
//     this.style.border='2px solid red';
//     this.style.borderRadius='50%';
// }

for (let i = 0; i < title.length; i++) {
    title[i].onmouseover= function(){
        this.style.width='25%';
        this.style.height='300px';
        this.style.border='2px solid red';
        this.style.borderRadius='10px';
}
}
for (let i = 0; i < title.length; i++) {
    title[i].onmouseout= function(){
        this.style.width='25%';
        this.style.height='300px';
        this.style.border='2px solid red';
        this.style.borderRadius='50%';
}
}