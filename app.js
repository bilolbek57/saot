let title = document.querySelector(".title span")

//local time (Qurilmaga asoslangangan)
let sana = new Date()

console.log(sana.getFullYear());
console.log(sana.getMonth() + 1);
// oy sanasi
console.log(sana.getDate());
// hafta kuni
console.log( sana.getDay() );

let time = `${sana.getHours()}:${sana.getMinutes()}:${sana.getSeconds()}`

console.log(time);

title.innerHTML = time