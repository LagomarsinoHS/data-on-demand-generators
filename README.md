## Introducción

Cuando estamos trabajando con mucha data, es normal que el proceso se bloquee o sea lento debido a que tenemos que tener toda la información antes de pasar al siguiente proceso. Aqui, se verán 2 formas de hacer esto

1. La clasica, que es obtener toda la data y al final comenzar a mostrarla o trabajarla
2. Data-on-demand, es decir, mientras avanzo voy consiguiendo información


Crearemos 3 archivos

`Server1.js`

Este archivo simulará ser una API que obtendrá información pasandole el nombre de un producto, el resultado será un objeto
    
```javascript
{
 id:"randmomId",
 product:"nameOfProdudct"
}
```


`Server2.js`
    
Este archivo simulará ser otra API que hara un POST a la API con la información del producto anteriormente recibido

`Client.js`

Este archivo simulará ser el usuario navegando por la página. Crearemos una BD falsa con 1000 registros e intentaremos realizar las peticiones


## Resultados

En la primera función del archivo `client.js` podemos ver que el proceso del client.js demora debido a que el `servidor1 y servidor 2` estan recibiendo toda la data, una vez recibido toda, la envía de vuelta


En la segunda función, podemos ver que el proceso de client.js no se queda "pegado" esperando la información, ya que con la función generadora esta consiguiendo la data "on demand" es decir, recibe una y la va entregando en ese mismo momento, así no tiene que esperar a que finalice para dar la respuesta


# Porque sirve esto?
Porque aumentamos la eficiencia de la carga de paginas, no esperamos a que tenga que cargar todo antes de ejecutar alguna acción y mas importante de todo, mientras va cargando la pagina vamos consiguiendo la información necesaria.

Tu esperarías una pagina que demora 2 minutos en cargar?