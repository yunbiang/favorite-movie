// const progress = document.getElementById('progress');
// const prev = document.getElementById('prev');
// const next = document.getElementById('next');
// const circles = document.querySelectorAll('circle');

// let cur = 1;
// next.addEventListener('click',( )=> {
//     cur++;
//     if(cur > circles.length){
//         cur = cur.length
//     }
//     update();
// })

// prev.addEventListener('click',( )=> {
//     cur--;
//     if(cur < 1){
//         cur = 0;
//     }
//     update();
// })

// function update(){
//     circles.forEach((circle,index) => {
//         if(idx < cur){
//             circle.classList.add('active')
//         }else{
//             circle.classList.remove('active')
//         }
//     })

//     const active = document.querySelectorAll('.active');

//     progress.style.width = ((active.length - 1) / (circles.length -1))*100 + '%';

//     if(cur === 1){
//         prev.disabled = true;
//     }else if(cur === circles.length){
//         next.disabled = true;
//     }else{
//         prev.disabled = false;
//         next.disabled = false
//     }
// }