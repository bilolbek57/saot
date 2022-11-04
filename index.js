const day = document.querySelector(".day")
const time = document.querySelector(".time")
const year = document.querySelector(".year")


function changeTime() {
    let sana = new Date()

    let soat = sana.getHours().toString().padStart(2, "0")
    let daqiqa = sana.getMinutes().toString().padStart(2, "0")
    let soniya = sana.getSeconds().toString().padStart(2, "0")

   time.innerHTML = `${soat}:${daqiqa}:${soniya}`


   let haftaKun = sana.getDay()
   if(haftaKun === 0){
    day.innerHTML = "Yakshanba"
   }else if(haftaKun === 1){
    day.innerHTML = "Dushanba"
   }else if (haftaKun === 2){
    day.innerHTML = "Seshanba"
   }else if (haftaKun === 3){
    day.innerHTML = "Chorsanba"
   }else if (haftaKun === 4){
    day.innerHTML = "Payshanba"
   }else if (haftaKun === 5){
    day.innerHTML = "Juma"
   }else if (haftaKun === 6){
    day.innerHTML = "Shanba"
   }
   year.innerHTML = `${sana.getDate()}.${sana.getMonth()+1}.${sana.getFullYear()}`
   

}
changeTime()

setInterval(function(){
    changeTime()
}, 1000)
