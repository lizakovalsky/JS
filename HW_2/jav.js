var term = {
    Irak:11,
    Iran:9,
    Tyrkey:-5,
    Siria:6,
  };

function Obj(term) { 
  var str = "<tr><td>Страна</td><td>Температура</td></tr>"; 
    for(key in term) { 
        str += "<tr><td>"+key+"</td><td>"+ term[key]+"</td></tr>"; 
    }
    document.getElementById('object').innerHTML = str;
} 
  
function getSrZnach(term){
  let sum = 0, sr = 0;
    for(let i in term){
      sr++;
      sum += term[i];
    }
    sr=(sum/sr).toFixed(2);
    document.getElementById('sr').innerHTML = sr;
}
  
function getMaxZnach(term) {
  let max = 0 ;
    for(let i in term){
        if (term[i] > max){ 
            max = term[i]; 
        } 
    }
    document.getElementById('max').innerHTML = max;
}
