---
title: Usar y reusar todo en SVG … ¡Incluso animaciones!
excerpt: Cómo crear y optimizar SVG y animaciones CSS
subtitle: Cómo crear y optimizar SVG y animaciones CSS
date: 10 March 2020
createdAt: 2020-03-10
image: /blog/blog-use-and-reuse-01.png
category: 
- svg 
- css
- tutorial
- espanol
---

> Read the english version [here](/posts/use-and-reuse-everything-in-svg-even-animations).

<div class="separator" aria-hidden="true">***</div>

Si estás familiarizado con SVG y animaciones CSS, o empezaste a trabajar con ellas a menudo, acá hay algunas ideas a tener en cuenta antes de comenzar a trabajar. Este artículo trata sobre cómo escribir y optimizar código con **el elemento `<use>`, las variables CSS y las animaciones CSS.**

<video autoplay="" controls="" loop="" src="https://css-tricks.com/wp-content/uploads/2020/01/cubes.mp4" name="fitvid0"></video>

## Parte 1: El elemento SVG <use>
Si sos un desarrollador al que le gusta mantener su código [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) o sos de usar las variables Sass / CSS, es muy probable que te guste esta etiqueta.

Digamos que tenés un elemento que se repite muchas veces en tu gráfico. En lugar de repetir una parte compleja del código varias veces en el SVG, se puede definir esta parte una vez y luego clonarla en otro lugar del documento con el elemento `<use>`. Esto no solo reducirá una enorme cantidad de código, sino que también lo hará más simple y fácil de manipular.

Para comenzar a implementar el elemento `<use>`, abrí tu SVG y seguí estos pasos:

1. Identificá la parte del código que querés clonar
2. Agregale un ID a esa parte
3. Linkeala dentro del tag `<use>` de esta forma: `<use xlink:href="#id"/>`

Eso es todo! Tu nuevo clon está listo, ahora podés cambiarle los atributos que necesites (por ej. la posición `x` o la posición `y`).

### Veamos un ejemplo muy conveniente
Este es un caso real donde necesitaba animar un cubo grande compuesto por cubos más pequeños. Algo así como un [Cubo Rubik](https://www.rubiks.com/en-us/).

Empecemos a dibujar un pequeño cubo en SVG usando formas básicas (SVG basic shapes, en este caso sólo rect) y transformaciones (transforms):

```html
<svg viewBox="-130 -20 300 100">   
 <g id="cubo">     
  <rect width="21" height="24" transform="skewY(30)"/>     
  <rect width="21" height="24" transform="skewY(-30) translate(21 24.3)"/>     
  <rect width="21" height="21"  transform="scale(1.41,.81)   rotate(45) translate(0 -21)"/>   
 </g> 
</svg>
```

<iframe width="100%" height="300" scrolling="no" title="1. Cube unit with SVG shapes and transforms" src="https://codepen.io/marianab/embed/XWWQbYP?height=265&theme-id=dark&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/marianab/pen/XWWQbYP'>1. Cube unit with SVG shapes and transforms</a> by Mariana
  (<a href='https://codepen.io/marianab'>@marianab</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Las formas (rects) están agrupadas con el elemento `<g>` (group) para poner agregarle un `ID` (#cubo) a toda la figura.

Ahora, hagamos un cubo más grande clonando la unidad que acabamos de crear. Primero hay que ubicar el grupo dentro del elemento `<defs>` dentro del tag de SVG. Dentro de `<defs>` podemos poner cualquier cosa que queramos reutilizar, puede ser una forma, un grupo, una gradiente, casi cualquier elemento de SVG. No se renderizará nada de lo que incluyamos dentro de `<defs>`, hasta que lo usemos fuera de él.

Para poder usar la figura que acabamos de definir, vamos a linkearla con su ID dentro del elemento `<use>` todas las veces que lo necesitemos, cambiando su posición `x` y su posición `y` en cada clon de la siguiente manera:

```html
<use xlink:href="#cubo" x="142" y="124"/> 
<use xlink:href="#cubo" x="100" y="124"/> 
<!-- ... -->
```

<iframe width="100%" height="300" scrolling="no" title="2. Big cube reusing content SVG &lt;use&gt;" src="https://codepen.io/marianab/embed/wvvZXqG?height=265&theme-id=dark&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/marianab/pen/wvvZXqG'>2. Big cube reusing content SVG &lt;use&gt;</a> by Mariana
  (<a href='https://codepen.io/marianab'>@marianab</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Ahora hay que ubicar cada clon del cubo pequeño, recordando que el último elemento se muestra al frente, con esto tendremos nuestro primer gran cubo listo!

> `xlink:href `está obsoleto desde SVG2, pero es mejor usarlo por cuestiones de compatibilidad. En algunos navegadores modernos se puede simplemente usar `href` pero al momento de escribir esta nota lo testié en Safari y no está funcionando ahí. Si usás `xlink:href` asegurate de incluir este namespace en tu SVG tag: `xmlns:xlink="http://www.w3.org/1999/xlink"` (no lo necesitas si decidís usar `href`).

<div class="separator" aria-hidden="true">***</div>

## Parte 2: Usando variables CSS para aplicar diferentes estilos al gráfico reutilizado

Elegí un color principal para el cubo, con tonalidades más claras y oscuras en los lados y el borde. Pero qué pasa si quiero crear un nuevo cubo con otro color?
Podemos reemplazar el color de relleno y bordes con variables CSS para hacer estos atributos más flexibles. De esta manera, podremos reutilizar la misma unidad del pequeño cubo con otra paleta, en vez de definir un segundo pequeño cubo con distintos colores.

Por qué no agregar una clase al nuevo cubo y cambiar los colores con CSS? Eso haremos, pero primero, intentá inspeccionar el elemento `<use>`. Vas a notar que se renderiza en el Shadow DOM. Significa que no es vulnerable a scripts o estilos, como los elementos en el DOM normal. Cualquier valor que definas en la figura dentro de `<defs>` será heredado por todas sus instancias y no podrán reescribirse con CSS. Pero si remplazamos esos valores con variables, podremos [controlarlas con CSS](https://tympanus.net/codrops/2015/07/16/styling-svg-use-content-css/).

En nuestra unidad de cubo pequeño, reemplazaremos cada valor de relleno y borde con un nombre de variable semántico.

Por ejemplo esto:

```html
<rect fill="#00affa" stroke="#0079ad" />
```

… puede reemplazarse con esto:

```html
<rect fill="var(--colorPrincipal)" stroke="var(--colorBorde)" />
```

A partir de acá, podemos duplicar el SVG anterior para crear un nuevo cubo grande. Sin embargo, no necesitamos duplicar el elemento `<defs>` si vamos a tener ambos cubos en el mismo documento. Podemos agregar una clase a cada SVG y controlar la paleta de colores con CSS, defefiniendo los valores de cada variable.

Creemos una paleta para el cubo azul y otra para el cubo rosa:

```css
.cubo-azul {   
 --colorPrincipal: #009CDE;   
 --colorBorde: #0079ad;   
 --colorClaro: #00affa;   
 --colorOscuro: #008bc7; 
}  
.cubo-rosa {   
 --colorPrincipal: #de0063;   
 --colorBorde: #ad004e;   
 --colorClaro: #fa0070;   
 --colorOscuro: #c7005a; 
}
```

<iframe width="100%" height="300" scrolling="no" title="3. Duplicating big cube with SVG &lt;use&gt; and CSS variables" src="https://codepen.io/marianab/embed/gOOJQmw?height=265&theme-id=dark&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/marianab/pen/gOOJQmw'>3. Duplicating big cube with SVG &lt;use&gt; and CSS variables</a> by Mariana
  (<a href='https://codepen.io/marianab'>@marianab</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

De esta manera podemos crear la cantidad de cubos que queramos y cambiar todos los colores desde un solo lugar.

<div class="separator" aria-hidden="true">***</div>

## Parte 3: Reusando animaciones
La idea de esta parte es quebrar el cubo cuando pasamos el mouse sobre él — algo así como una vista explotada, algunas piezas se alejarán del centro cuando pasamos el cursor sobre los cubos.

<iframe width="100%" height="300" scrolling="no" title="4. Big cubes animation with SVG &lt;use&gt; and CSS variables" src="https://codepen.io/marianab/embed/KKKYdxE?height=265&theme-id=dark&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/marianab/pen/KKKYdxE'>4. Big cubes animation with SVG &lt;use&gt; and CSS variables</a> by Mariana
  (<a href='https://codepen.io/marianab'>@marianab</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Empecemos definiendo dos movimientos, uno por cada eje: `move Y` y `move X`. Al definir las animaciones en movimientos, podremos reutilizarlas en cada cubo. Las animaciones consistirán en mover al cubo desde su posición inicial hasta 30px o 50px de distancia en una misma dirección. Podemos usar un transform translate (`X` o `Y`) para lograrlo. Por ejemplo:

```css
@keyframes moveX {   
 to { transform: translateX(-35px); } 
}
```

Pero si queremos reutilizar esta animación, es mejor remplazar el valor numérico por una variable:

```css
@keyframes moveX {   
 to { transform: translateX(var(--translate, 35px)); } 
}
```

Si la variable no está definida, el valor por defecto va a ser 35px.
Ahora necesitamos al menos una clase para enlazar a esta animación. En este caso serán dos clases, para mover los cubos en el eje x: `.m-izquierda` y `.m-derecha`.

```css
.m-izquierda, .m-derecha {    
 animation: 2s moveX alternate infinite;  
}
```

Para que el cubo se mueva a la izquierda, necesitamos un valor negativo, pero también podemos declarar un valor numérico distinto. Podemos definir nuestra variable dentro de la clase `.m-izquierda` así:

```css
.m-izquierda { --translate: -50px; }
```

Acá estamos declarando que, cuando agreguemos la clase `.m-izquierda` a un elemento, se lanzará la animación `moveX` (la que definimos en los` @keyframes`) que tardará dos segundos en moverse en el eje x hasta alcanzar una nueva posición 50px a la izquierda (los números negativos se mueven a la izquierda). Luego, la animación alterna de dirección para empezar a moverse desde esta última posición durante dos segundos hasta alcanzar su estado inicial. Lo hará en un loop infinito, porque eso hemos declarado al poner infinite.

Podemos declarar otra variable para la clase `.m-derecha` pero si no lo hacemos, recordá que tomará el valor por defecto de 35px que declaramos al principio.

Por defecto el valor de `animation-play-state` es `running` pero quizás no queremos que los cubos se muevan todo el tiempo. Sería muy molesto si usamos estas cubos en un sitio con texto cerca de ellos. Así que intentaremos hacer que la animación se ejecute sólo cuando pasamos el cursor por encima:

```css
svg:hover .m-izquierda {
 animation: 2s moveX alternate infinite; 
}
```

Podés probar este código por tu cuenta y verás que la animación salta muy rápido a su estado inicial cada vez que quitamos el cursor de encima. Para evitar esto, podemos usar el valor `paused` al final de la propiedad animation:

```css
.m-izquierda {   
 animation: 2s moveX alternate infinite paused; 
}
```

Ahora la animación está pausada pero se disparará on hover agregando esta línea de CSS:

```css
svg:hover * {
 animation-play-state: running;
}
```

Podemos aplicar cada una de estas clases a diferentes elementos dentro del SVG. En el primer cubo estamos moviendo algunas unidades; en el segundo cubo, estamos aplicando estas clases a grupos de unidades.

### Para terminar…
Tardé mucho en darme cuenta que podía reutilizar un simple cubo pequeño para construir todo. Trabajé en esa unidad para hacerla isométrica y así poder alinearla fácilmente con las demás unidades. A esta altura mi unidad era un `path`, pero decidí reemplazarlo por SVG rect para reducir la cantidad de código y hacerlo más legible.

Aprendí que es mejor tomarse un tiempo para analizar qué se puede hacer con SVG antes de embarcarse en la tarea. En este caso hubo que modificar el diseño original levemente, pero esa modificación permitió hacer un código más mantenible y escalable. Puede tomar más tiempo al principio pero a largo plazo ganaremos mucho más.

> Este artículo fue publicado originalmente en  [CSS-Tricks](https://css-tricks.com/use-and-reuse-everything-in-svg-even-animations/) editado por [Chris Coyier](https://chriscoyier.net/) y [Geoff Graham](https://geoffgraham.me/)