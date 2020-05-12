var x = 0
var t =setInterval(function(){
  console.log('x = ',x)
  x++
  if(x===3){
    clearInterval(t)
  }

},1000)