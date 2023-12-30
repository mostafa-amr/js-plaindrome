



function plain(){

    do{
        var tagroba =prompt ('enter your word')
                    if(tagroba===null)
                {
                    return
                }
        var cond =/^[A-Za-z]+$/.test(tagroba)
        if(cond == false){
            alert('enter valid words')
        }
    }while (cond == false || tagroba==[])

var x =confirm('do you want it to be case senstive?')
if (x){
    var y =tagroba.length -1
    for(var i = 0;i<tagroba.length;i++){
       
        // console.log(tagroba.charAt(i) )
        // console.log(tagroba.charAt(y))
         if(tagroba.charAt(i) != tagroba.charAt(y)){
            var r =0
            break 
            
        }
        y--
            }
            if(r == 0){
                alert('what you entered not plaindrome ')
            }
            else{
                alert('you entered plaindrome') 
            }
    
}
else{
    var y =tagroba.length -1
    for(var i = 0;i<tagroba.length;i++){
       
        // console.log(tagroba.charAt(i) )
        // console.log(tagroba.charAt(y))
         if((tagroba.charAt(i)).toLocaleLowerCase() != (tagroba.charAt(y)).toLocaleLowerCase()){
            var r =0
            break 
            
        }
        y--
            }
            if(r == 0){
                alert('what you entered not plaindrome ')
            }
            else{
                alert('you entered plaindrome') 
            }
           
}
}
plain()


