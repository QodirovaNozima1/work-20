alert("Assalomu alekum")
{
    //while 1
    function while1(a, b) {
    let i = 0
    while (a > b) {
        a = a - b
        i++
    }
    console.log((` "${i}" Kesmaning bo'sh qismi `));
    }
    // console.log( while1( 15, 2) );
}


{
    //while 2
    function while2(a, b) {
        let i = 0
       while (a > b) {
        a >= b
        a -= b
        i++
    }
    console.log((`${i} ta  joylashtirish mumkin`));
    }
    // console.log( while2 ( 15, 2));
}


{
    //while 3
    function while3(n, k) {
    let i = 0
    while (n >= k) {
        n = n - k
        i++
    }
    console.log(`${i} -butun qismi`);
    console.log(`${n} -qoldiqli qismi`);
    }
    // console.log( while3( 6, 2 ) );
}


{
    //while 4
    function while4(n) {
      let i = 1;
      while (i < n) {
          i *= 3;
      }
      return i === n ? "3 ning darajasi" : "3 ning darajasi emas";
    }
    // console.log(while4(31));
  }


// USTOZ BERGANLARI

{
    // 1 masala
    function masala1(array){
        let musbat = 0, manfiy = 0
        for(let i = 0; i < array.length; i++){
            if(array[i] > 0){
                musbat += array[i]
            }else{

                manfiy += array[i]
            }
        }
        return `${musbat} ${manfiy}`
    }
        // console.log( masala1 ([4, 2, 3, 6, -7, -5 ]));
  }    
  
  {
    // 1 masala while
    function masala1(array){
        let musbat = 0, manfiy = 0;
        let i = 0;
        while(i < array.length){
            if(array[i] > 0){
                musbat += array[i]
            }else{
                manfiy += array[i]
            }
            
            i++
        }
        return `${musbat} ${manfiy}`
    }
    // console.log( masala([ 4, 2, 3, 6, -7, -5]) );
  }
     
{
    // 1 masala do while
    function masala1(array){
        let musbat = 0, manfiy = 0
        let i = 0
        do{
            if(array[i] > 0){
             musbat += array[i]
            }else{
            manfiy += array[i]
            }
            i++
        }while(i < array.length)
            return `musbat =${musbat} 
            manfiy =${manfiy}`
    }
    // console.log( masala1 ([4, 2, 3, 6, -7, -5 ]) );
}
{
    // 2 masala
    function masala2(array){
        let sum = 0
        for(let i = 0; i <= array; i += 2){
            sum += i
        }
        return     `${sum} juft sonlar yigindisi`  
    }
    // console.log( masala2(32) );
}
{
       //2 masala while
    function masala2(array){
        let sum = 0
        let i = 0
        while(i <= array){
            sum += i
            i += 2
        }
        return  `${sum} juft sonlar yigindisi` 
    }
    // console.log( masala2(32) );
}
{
        //2 masala do while
    function masala2(array){
        let sum = 0
        let i = 0
        do{
            sum += i
            i += 2
        }while(i <= array)
            return  `${sum} juft sonlar yigindisi`  
    }
    // console.log( masala2(32) );
}

{
    // 3 masala
    function masala3(a, b) {
        let sum = 0
        for (let i = a; i <= b; i++) {
            sum += i
        }
        return sum
    }
    // console.log( masala3(2, 8) );
}
{
    // 3 masala while
    function masala3(a, b) {
            let i = a
            let sum = 0
        while (i <= b){
          sum += i
          i++
          
        }
        return sum
       
    }
    // console.log( masala3(2, 8) );
}
{
    // 3 masala do while 
    function masala3(a, b){
        let sum = 0
        let i = a
        do{
            sum += i
            i++
        }while(i <= b)
            return sum
    }
    // console.log( masala3 (2, 8) );
}

{
    // 4 masala
    function masala4(n){
        for(let i = n; i >= 0; i -- ){
            if (i % 2 !== 0) {
                console.log(i);
            }
           
        }
        return("toq sonlar")
    }
    // console.log( masala4 ( 18 ) );
}
{
    // 4 masala while 
   function masala4(n){
    let i = n
    while(i > 0){
        i --
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
    return("toq sonlar")
   }
//    console.log( masala4( 18 ) );
}
{
    // 4 masala do while
    function masala4(n){
        let i = n
        do{
            i--
            if (i % 2 !== 0) {
                console.log(i);
            }
        }while(i > 0)
            return("toq sonlar")
    }
    console.log( masala4 (18) );
}
