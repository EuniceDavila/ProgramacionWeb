# Modelo de caja / Display

## Modelo de caja de HTML

**¿Qué es el modelo de caja de HTML?**  
El modelo de caja de HTML es la manera en que los elementos se organizan y se presentan en el entorno de una página web.  Cada elemento HTML se considera como una caja rectangular, a la cual se le asignan características visuales y especiales. Este concepto es fundamental al momento de idear y crear la apariencia visual de una página.

**Partes que componen la caja :**  

- *Contenido (content):* Corresponde al material propio del elemento, ya sea texto, imágenes u otros componentes. Constituye aquello que se encuentra alojado en las etiquetas HTML. El tamaño puede cambiarse utilizando propiedades como width y height.

- *Relleno (padding):* Es un espacio transparente que rodea el contenido dentro de la caja; es posible controlar su tamaño usando la propiedad padding y otras propiedades relacionadas.

- *Borde (border):* Es una línea que rodea el relleno y el contenido de la caja. Puede tener un grosor, color y estilo específicos. Las propiedades CSS relacionadas incluyen border-width, border-color y border-style.

- *Margen (margin):* El margen es la capa más externa. Envuelve el contenido, el relleno y el borde como espacio en blanco entre la caja y otros elementos. Es posible controlar su tamaño usando la propiedad margin y otras propiedades relacionadas.

## Propiedad Display

**¿Qué es la propiedad display?**  
La propiedad display controla el comportamiento de visualización de un elemento en términos de su caja, su posición, y cómo afecta al flujo del contenido en el diseño.  
La propiedad display nos ayuda a controlar dónde se va a ver un elemento HTML dentro de la pantalla para estructurar nuestra página web. Esta propiedad se basa en la lógica del modelo de caja en CSS.

**Valores de la propiedad display :**

- *block:* Hace que el elemento sea un bloque y ocupe todo el ancho disponible. Genera un salto de línea antes y después del elemento.

- *inline:* Hace que el elemento sea un elemento en línea y ocupe solo el espacio necesario para su contenido. No genera saltos de línea antes ni después.

- *inline-block:* Combina las propiedades de "block" e "inline". El elemento se comporta como un elemento en línea, pero permite aplicar propiedades de bloque como ancho y alto.

- *none:* Hace que el elemento no se muestre en la página. Es como si el elemento no existiera en el código.

- *grid:* Introduce un contenedor de cuadrícula que organiza los elementos secundarios en filas y columnas.

- *subgrid:* Si el elemento padre tiene display:grid, el elemento en sí y su contenido se establecen de acuerdo con el modelo de cuadrícula.

- *ruby:* El elemento se comporta como un elemento en línea y establece su contenido de acuerdo con el modelo de formato ruby.

- *flex:* Introduce un contenedor flexible que permite un diseño flexible de los elementos secundarios dentro de él.

- *table:* Hace que el elemento se comporte como una tabla.

- *table-cell:* Hace que el elemento se comporte como una celda de tabla.

- *table-row:* Hace que el elemento se comporte como una fila de tabla.

- *initial:* Restablece la propiedad "display" al valor inicial por defecto.

- *unset:* Restablece la propiedad "display" al valor que tendría por defecto si no se hubiera aplicado ningún estilo.

- *run-in:* El elemento genera un cuadro de ejecución. Los elementos de ejecución actúan como líneas o bloques, dependiendo de los elementos circundantes.
