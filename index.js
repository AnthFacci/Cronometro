var minutos = 0
var segundos = 0
var dezenas = 0
var Interval 
const deze = document.getElementById("dezenas") 
const seg = document.getElementById("segundos")
const min = document.getElementById("minutos")
const btnStop = document.getElementById("stop")
const btnReset = document.getElementById("reset")

//SetInterval(function(), TimeSet) = Vai executar a função continuamente pelo 
//tempo definido, como exemplo abaixo, a cada 10 milesegundo(0,01) vai executar
//a função e só é pausado utilizando o clearInterval. 


const start = document.getElementById("start").addEventListener('click', () =>{
    
   Interval = setInterval(startTimer, 10)
    
   btnStop.addEventListener('click', () =>{
     clearInterval(Interval)
   })

   btnReset.addEventListener('click', () =>{
    minutos = 0
    segundos = 0 
    dezenas = 0

    deze.innerHTML = "0" + dezenas
    seg.innerHTML = "0" + segundos
    min.innerHTML = "0" + minutos
   })



})





function startTimer(){
    dezenas++

    if(dezenas <= 9){
        deze.innerHTML = "0" + dezenas
    }else {
        deze.innerHTML = dezenas
    }
     if(dezenas > 99){
        segundos++
        seg.innerHTML = "0" + segundos
        dezenas = 0

    }if(segundos > 9){
        seg.innerHTML = segundos
    }
     if(segundos >= 60 ){
        minutos++
        segundos = 0
        min.innerHTML = "0" + minutos
        

    } if(minutos > 9){
        min.innerHTML = minutos
    }
}
