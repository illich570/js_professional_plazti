//tipos de datos

let muted: boolean = true;
muted = false;

// Numeros
let numerador : number = 32;

let nombre : string = 'Me llamo Illich';

//Arreglos

let nombres : string[] = ['Hola'];
let nombresYnumeros : Array<string | number> = ['Hola',100];

//Tipo de dato propio, ENUM

enum Color{
  Rojo = 'Rojo',
  Verde = 'Verde',
  Azul = 'Azul',
  Amarillo = 'Amarillo'
}

let superColor : Color = Color.Rojo;

//cualquier tipo de dato, comodin

let comodin : any = 'Joker';

//Object

let objeto : Object = {value: 'wilcard'}