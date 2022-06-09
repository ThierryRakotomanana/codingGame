
let message = '%CB2'

const toBinary = function(input) {
		var result = "";
		for (var i = 0; i < input.length; i++) {
			var bin = input[i].charCodeAt().toString(2);
			result += Array(7 - bin.length + 1).join("0") + bin;
		} 
		return result;
	}

message = toBinary(message)

let compteur = 1
let bloc = []
for(let i=0; i < message.length; i++){
  if(i != message.length-1 && message[i] === message[i+1]){
    compteur++
  }else {
    bloc.push({type : parseInt(message[i]), nombre : compteur}) 
    compteur = 1
  }
}

let Bloc = ''
for(let i = 0 ; i< bloc.length ; i++){
  if(bloc[i].type == 1){
    Bloc += '0 '
  }else{
    Bloc += '00 '
  }
  for(let j = 0; j< parseInt(bloc[i].nombre); j++){
    Bloc += 0
  }
  Bloc += ' '
}
Bloc = Bloc.slice(0, Bloc.length-1);
console.log(Bloc)
