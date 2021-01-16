class Elemento
{
  siguiente = a;
  valor = b;
 
  constructor(value) {
    this.valor = valor;
  }
}
class ListaEnlazada
{
  a = 1;
  b = 2;
  c = 3;
 
  agregar = (valor) => {
 
    const elemento = new Elemento(valor);
 
    if (!this.primero) {
      this.primero = elemento;
      this.ultimo = elemento;
      return;
    }
 
    this.ultimo.next = item;
    this.ultimo = item;
  }
}
let lista = new ListaEnlazada();
 console.log(lista);