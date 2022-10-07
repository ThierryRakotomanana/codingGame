/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const LON = readline();
const LAT = readline();
const N = parseInt(readline());
let data = []
for (let i = 0; i < N; i++) {
     data[i] = readline();
}


function degrees_to_radians(degrees){
    var pi = Math.PI;
    return parseFloat(degrees.replace(',','.')) * (pi/180);
  }
  
  function distance(longitudeA , latitudeA , longitudeB, latitudeB){
    let x = 0, y = 0, d = 0 ,a = 0, b = 0, c = 0 , e = 0  ;
    a = degrees_to_radians(longitudeA)
    b = degrees_to_radians(latitudeA)
    c = degrees_to_radians(longitudeB)
    e = degrees_to_radians(latitudeB)
    y = (e - b)
    x = (c - a) * Math.cos((b+e)/2)
    d = Math.sqrt( x*x + y*y ) * 6371
    return d
  }
  function min( arr ){
    let min = Number.POSITIVE_INFINITY
    for(let i = 0; i < arr.length ; i++){
      if( arr[i] < min) min = arr[i]
    }
    return min
  }
  let dist = []
  for(let i = 0; i < N ; i++){
    latitudeB = data[i].split(';')[data[i].split(';').length -1] ;
    longtitudeB = data[i].split(';')[data[i].split(';').length -2] ;
    dist[i] = distance(LON, LAT, longtitudeB, latitudeB )
  }
  console.log(data[dist.indexOf(min(dist))].split(';')[1])