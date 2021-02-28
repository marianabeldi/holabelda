---
title: SVG más allá de la compresión automática con el elemento “use”
excerpt: Reducí el tamaño de tus archivos y mejorá tu código
subtitle: Reducí el tamaño de tus archivos y mejorá tu código
date: 6 December 2019
createdAt: 2019-12-06
image: /blog/blog-going-beyond.jpg
category: 
- svg 
- tutorial
- espanol
---


> Read the english version [here](/posts/going-beyond-automatic-compression-with-use-element).

<div class="separator" aria-hidden="true">***</div>

Si dibujas tus propios SVG o si los descargas de internet, herramientas como este [editor de SVG](https://petercollingridge.appspot.com/svg-editor) o [SVGOMG](https://jakearchibald.github.io/svgomg/) son tus amigos. Comprimir los archivos con estas herramientas puede tomar solo unos segundos y reducir su tamaño muchísimo. Pero si usás tu SVG inline para animar o interactuar con el código, hay mucho que podés hacer respecto a su legibilidad.
Reutilizar contenido con el elemento `<use>` de SVG no siempre es una opción, pero cuando lo es, vale la pena tomarse unos minutos extra para ponerlo en práctica.

En este artículo, voy a mostrar un ejemplo del cual pude sacar mucha ventaja con este elemento — no solo para mantener un archivo liviano, sino también conseguir un código limpio, legible y fácil de mantener.

Este es el primer diseño con el que tenía que trabajar. Fue originalmente creado en Illustrator:

<figure>
    <img src="/blog/blog-going-beyond-01.png" alt=""/>
    <figcaption>First draft with user flow.</figcaption>
</figure>

En el siguiente Codepen se ve el código original directamente exportado desde el software, pesa **2.05kb**:

<iframe width="100%" height="300" scrolling="no" title="SVG exported from Illustrator" src="https://codepen.io/marianab/embed/RwwmmLd?height=265&theme-id=dark&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/marianab/pen/RwwmmLd'>SVG exported from Illustrator</a> by Mariana
  (<a href='https://codepen.io/marianab'>@marianab</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

No es un archivo pesado para nada. Sin embargo al abrirlo encontraremos un montón de tags vacíos, namespaces en desuso, espacio en blanco innecesario, comas e información extra [aplicada por el software](https://css-tricks.com/one-illustration-three-svg-outputs/). Esto hace que el código sea difícil para trabajar, molesto para escanear y genera un scroll eterno con cientos de líneas en nuestro documento.

También notarás que este archivo está efectivamente usando elementos `<use>` y `<defs>`, pero no de la mejor manera posible. Y eso no es culpa del software! En el archivo original cada ilustración del astronauta tiene una máscara de recorte: un círculo invisible que actúa como ventana a través de la cual podemos ver a nuestro personaje. Sin ella, veríamos el traje del astronauta desbordando por fuera del círculo. Hay maneras de evitar esto en Illustrator, como por ejemplo cropeando esas partes con una opción de pathfinder. De esa forma ganaríamos algunos bytes y evitaríamos usar un círculo extra sólo para clipear información que no mostraremos en el gráfico. La compresión del archivo empieza en el software. Aun así, hay muchas cosas que podemos mejorar en el código en caso de que no podamos editar el archivo original.

> Comprimir el SVG en SVGOMG manteniendo las opciones por defecto, no costará ningún esfuerzo y obtendremos un archivo que pesa **1.46kb**. Eso es una reducción de 30% comparado al peso original y se ve exactamente igual.

## Reusando contenido

Esto implicará revisar el SVG y hacer algunos ajustes. Sé que esta opción suele tomar más tiempo respecto a la anterior, pero no es tan difícil como parece.

Tenemos un elemento que se repite, que es el astronauta dentro del círculo. Este será el que comprimiremos en SVGOMG, el resultado se verá así:

```html
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 95.8 95.8"> <style>.st3,.st4{fill:#ffcb2f;stroke:#12192c;stroke-width:1.4891;stroke-miterlimit:10}.st4{fill:#69b2b1}</style> 
<circle cx="47.9" cy="47.9" r="47.9" fill="#12192c"/>    
<circle cx="47.9" cy="47.9" r="40.7" fill="#f6a2a4"/>    
<defs><circle id="SVGID_1_" cx="47.9" cy="47.9" r="40.7"/></defs>    <clipPath id="SVGID_2_"><use xlink:href="#SVGID_1_" overflow="visible"/></clipPath> 
<g clip-path="url(#SVGID_2_)">      
<path class="st3" d="M63.9 45.6H32c-4 0-7.2 1.9-7.3 4.3l-.8 26.6H72l-.8-26.6c-.2-2.5-3.4-4.3-7.3-4.3z"/>      
<path class="st4" d="M74.3 86.9L66 88.2C53.8 90 41.4 90 29.1 88.1l-7.7-1.2v-14c0-4 3.2-7.2 7.2-7.2h38.5c4 0 7.2 3.2 7.2 7.2v14z"/>      <path class="st3" d="M31.8 47.3h-.6c-.7 0-1.2-.6-1.2-1.2V23.2c0-.7.6-1.2 1.2-1.2h.6c.7 0 1.2.6 1.2 1.2v22.9c0 .7-.6 1.2-1.2 1.2z"/>      
<circle class="st4" cx="31.5" cy="20.7" r="2.8"/>      
<circle class="st4" cx="47.9" cy="51.4" r="20.3"/>      
<path d="M64.5 53.1c0 8-7.4 11.2-16.5 11.2S31.4 61 31.4 53.1s7.4-14.4 16.5-14.4 16.6 6.4 16.6 14.4z" fill="#13192d" stroke="#12192c" stroke-width="1.489" stroke-miterlimit="10"/>      
<path fill="none" stroke="#12192c" stroke-width="1.489" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="9.6793,3.7228" d="M65.9 88V76.9"/>      
<path fill="none" stroke="#12192c" stroke-width="1.489" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M29.6 87.9v-11"/>
</g>
</svg>
```

### Primeras recomendaciones:

1. Mové el contenido de los estilos al archivo CSS (asumiendo que podés usar el SVG inline y que tenés una hoja de estilos linkeada al documento).
2. Renombrá los IDs con algo que tenga sentido para vos.
3. Redondeá esos números complicados, como `stroke-width="1.489"` a `stroke-width="1.5"`. Esos números suelen aparecer cuando cambiás el tamaño del gráfico en Illustrator con la opción de `“escalar borders”` activa.
4. Borrá los `stroke-miterlimit="10"` ya que no se necesitan cuando `stroke-linejoin `tiene el varlor `round`.
5. Este código será nuestro template para los astronautas. Ahora hay que envolverlo en un grupo, agregar un ID a ese grupo y ubicarlo dentro del tag `<defs>`. Hay que tener en cuenta que ya tenemos un elemento `<defs>` con un círculo adentro. Movamos todo dentro del mismo tag para quedarnos con una sola etiqueta.

Los primeros dos círculos que aparecen son dos figuras rellenas con diferente radio y color. Podemos mantener sólo el más pequeño y agregarle un borde lo suficientemente grande para conseguir el mismo efecto — de nuevo, algo que pudimos haber evitado desde el principio, usando un círculo con borde en Illustrator.

Otra cosa importante es que nuestro viewBox actual es muy pequeño para lo que queremos construir. Podemos agrandarlo agregando espacio negativo en el eje x para poder empezar a clonar el astronauta desde el medio.

> Para aprender más acerca del viewBox, mirá esta [hermosa guía](https://wattenberger.com/guide/scaling-svg) sobre escalar SVG hecha por Amelia Wattenberger.

El resultado será algo así:

```html
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-400 0 1000 5000">  
<defs>
<g id="astronaut">    
<circle cx="94.5" cy="48" r="44" fill="currentColor" stroke="#12192c" stroke-width="8"/><clipPath id="a"><circle cx="94.5" cy="47.9" r="40"/></clipPath>    
<g clip-path="url(#a)"><path class="st3" d="M110.5 45.6H78.6c-4 0-7.2 1.9-7.3 4.3l-.8 26.6h48.1l-.8-26.6c-.1-2.5-3.4-4.3-7.3-4.3z"/><path class="st4" d="M121 86.9l-8.3 1.3C100.4 90 88 90 75.8 88.1l-7.7-1.2v-14c0-4 3.2-7.2 7.2-7.2h38.5c4 0 7.2 3.2 7.2 7.2v14z"/><path class="st3" d="M78.4 47.3h-.6c-.7 0-1.2-.6-1.2-1.2V23.2c0-.7.6-1.2 1.2-1.2h.6c.7 0 1.2.6 1.2 1.2v22.9c0 .7-.5 1.2-1.2 1.2z"/><circle class="st4" cx="78.1" cy="20.7" r="2.8"/><circle class="st4" cx="94.5" cy="51.4" r="20.3"/><path d="M111.1 53.1c0 8-7.4 11.2-16.5 11.2S78 61 78 53.1s7.4-14.4 16.5-14.4 16.6 6.4 16.6 14.4z" fill="#13192d" /><path fill="none" stroke="#12192c" stroke-width="1.5" stroke-linecap="round" d="M112.5 88V76.9"/><path fill="none" stroke="#12192c" stroke-width="1.5" stroke-linecap="round" d="M76.3 87.9v-11"/></g>
<g>
</defs> 
</svg>
```

Lo que va dentro de `<defs>` no se renderiza en ningún lado. Para empezar a clonar nuestro astronauta, debemos linkear su ID dede el elemento `<use>` así:

```html
<use xlink:href="#astronaut"/>
```

> `xlink:href `está obsoleto desde SVG2, pero es mejor usarlo por cuestiones de compatibilidad. En algunos navegadores modernos se puede simplemente usar `href` pero al momento de escribir esta nota lo testié en Safari y no está funcionando ahí. Si usás `xlink:href` asegurate de incluir este namespace en tu SVG tag: `xmlns:xlink="http://www.w3.org/1999/xlink"` (no lo necesitarás si decidís usar `href`).

Ahora podemos agregar el texto correspondiente a este primer clon y alinearlo con el atributo transform. Es recomendable ubicar ambos elementos dentro de un mismo grupo, para que en futuras instancias podamos trasladar todo junto a la posición que corresponde:

```html
<g transform="translate(-95 210)">   
 <use xlink:href="#astronaut"/>   
 <text transform="translate(25 130)">Tech Leader</text> 
</g>
```

Las líneas conectoras son simples formas que puede ser dibujadas directamente con `<path>`. Los paths parecen complejos, pero para líneas rectas, no hay mucho de qué preocuparse. Voy a explicar el siguiente código:

```html
<path class="line" d="M-4 200v-25h200"/>
```

`d=""` significa data y ahí dentro escribiremos los comandos necesarios. `M` es el comando para mover la mano al lugar de la hoja donde empezaremos a dibujar (pero no dibuja nada). `-4 200` significa que ubicaremos el lápiz cuatro unidades a la izquierda y 200 unidades para abajo dentro de nuestro viewBox (siguiendo la orientación del sistema de coordenadas de SVG). `v` es el comando para empezar a dibujar una línea vertical que irá desde este punto -25 unidades arriba (negativo va para arriba). `h` es el comando para línea horizontal, así que dibujaremos una línea desde allí hasta 200 unidades a la derecha. Casi como el logo writer.

Separé todas las líneas en tres paths, pero podemos usar sólo una cambiando el valor de M después de una serie de comandos para mover la mano y seguir dibujando desde un nuevo punto dentro del sistema de coordenadas.

Si ves el código del documento final, ahora el archivo pesa **779 bytes** y tiene sólo **12 líneas de código** legible y escalable:

<iframe width="100%" height="300" scrolling="no" title="SVG with &lt;use&gt;" src="https://codepen.io/marianab/embed/gOOJJVp?height=265&theme-id=dark&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/marianab/pen/gOOJJVp'>SVG with &lt;use&gt;</a> by Mariana
  (<a href='https://codepen.io/marianab'>@marianab</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Si declaramos algún valor en los atributos que definimos dentro del elemento `<defs>` no será posible cambiarlo dentro de sus clones debido a la naturaleza del elemento `<use>`. Por eso en el ejemplo de arriba, el relleno del círculo principal fue reemplazado por el valor currentColor para poder tener control de los colores de fondo de todas las instancias replicadas. currentColor heredará en CSS el valor del color del elemento (o cualquier elemento arriba de éste). En el SVG, estoy agregando una clase a algunas replicas del astronauta y agregando un valor de color a esas clases en CSS. De esta forma, podré cambiar el color en todas las instancias del elemento `<use>` con esa clase. Para entender más acerca del `<use>` y cómo estilear su contenido, [este post](https://tympanus.net/codrops/2015/07/16/styling-svg-use-content-css/) de [Sara Soueidan](https://www.sarasoueidan.com/) tiene todo lo que necesitas saber.

Con el código listo, seremos capaces de escalar más fácilemente el gráfico inicial a algo así:

<figure>
    <img src="/blog/blog-going-beyond-02.png" alt=""/>
    <figcaption>SVG Org Chart.</figcaption>
</figure>

El código completo está en este Codepen:

<iframe width="100%" height="300" scrolling="no" title="SVG Org Chart - reusing content " src="https://codepen.io/marianab/embed/abbrgag?height=265&theme-id=dark&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/marianab/pen/abbrgag'>SVG Org Chart - reusing content </a> by Mariana
  (<a href='https://codepen.io/marianab'>@marianab</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Acá están los tres ejemplos lado a lado para comparar legibilidad y cantidad de código, fuimos de 241 a 12 líneas:

<figure>
    <img src="/blog/blog-going-beyond-03.jpg" alt=""/>
    <figcaption>From left to right: Code direct from Illustrator, code after SVGOMG, code after optimization.</figcaption>
</figure>

> Este artículo fue publicado originalmente en  [CSS-Tricks](https://css-tricks.com/going-beyond-automatic-svg-compression-with-the-use-element/) editado por [Chris Coyier](https://chriscoyier.net/) y [Geoff Graham](https://geoffgraham.me/)