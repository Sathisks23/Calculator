
let output= document.getElementById("screen")
let y=document.getElementById("y")
 
function display(num){
   output.value += num
   y.play()
}
 function clr(){
    output.value = output.value.slice(0,-1)
    y.play()
 }
 function equal(){
    output.value=eval(output.value)
    y.play()
 }
 function ac(){
    output.value=" "
    y.play()
    
 }