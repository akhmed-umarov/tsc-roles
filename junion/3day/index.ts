const currRate:string = '1.05';

const fetchCurr = (responce:string): number=> { 
   const data = JSON.parse(responce);
   return data
}

function transferEurToUsd (available: boolean , amount: number , commission: number):void { 
   if (available)  { 
      let res:number = fetchCurr(currRate) * amount * commission; 
      console.log(res);
   } else { 
      console.log("Сейчас обмен недоступен");
   }
}

transferEurToUsd(true , 500 , 1.05);

