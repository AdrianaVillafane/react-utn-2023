function suma (a,b,callback){
    let c = a +b;
    callback();
    }
// El tercer parametro es una funcion que se pasa como argumento, para utilizarla cuando sea necesario

// Estas funciones son comunes en JavaScript y se utilizan en situaciones en las que se necesita realizar algún tipo de trabajo asincrónico o realizar acciones después de que se haya completado una tarea específica. Por ejemplo, se utilizan con frecuencia en llamadas a API




function miCallback() {
    console.log("La suma se ha calculado.");
  }
  
  suma(3, 5, miCallback);
  