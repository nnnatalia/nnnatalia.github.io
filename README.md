# Panadería
## Web https://nnnatalia.github.io

Entra en nuestra Panadería y conoce nuestros deliciosos productos:
Magdalenas, Croissants, Tartas, Galletas, Bizcochos, .. 


# Cómo se ha implementado
Se ha dado interactividad a esta web como parte de la práctica de **FP 2DAW** en la asignatura de **Diseño de Interfaces Web**

Práctica **Añadir un carrusel a la interfaz del escaparate virtual y mejorar el aspecto e interactividad de una interfaz web**

### **Carrusel**

**Enunciado:** Incluir un carrusel de al menos tres imágenes de productos destacados en la sección de novedades y promociones de la página principal de la interfaz del escaparate virtual

En la sección de novedades del escaparate virtual "Panadería" se ha incluido un carrusel automático que muestra las imágenes de tres de los productos de la panadería.

Este carrusel usa **JQuery** para agregar o quitar las clases "semueve" y "nosemueve" a las diferentes imágenes del carrusel de forma secuencial según la variable "activa", en intervalos
de dos segundos y medio usando **setInterval**.

### **Mayor vistosidad e interactividad**

**Enunciado: Además, hemos recibido un encargo de nuestro cliente, que ha solicitado que modifiquemos su página web actual para que sea más vistosa e interactiva, para ello, nos ha hecho llegar los siguientes requisitos:** 

- **La página debe ser más vistosa, acaban de ver la página http://annaeshwood.com/ y quieren ese mismo efecto al hacer scroll hacia abajo, implementar un efecto similar.**

  He incluido en la parte inmediatamente visible de la página un una flecha hacia abajo que mueve verticalmente indicando que hay más contenido al hacer scroll. Ésta flecha contiene un enlace a la sección de novedades, donde se ha añadido el carrusel.

  Del mismo modo, al final de la página, justo antes del pie de página, he agregado otra flecha, que apunta esta vez hacia arriba, con un enlace que permite ir directamente al inicio de la página.

- **También les gustaría tener microinteracciones al pulsar botones, pasar el ratón por ciertas secciones, cambiar de página, etc.**

  He modificado el botón del carrito que había originalmente en la página a la derecha del menú para que al pulsarlo se muestre una animación svg con un carrito llenándose.
  
  También he creado una microinteracción en el campo del buscador, para que al colocar el puntero del ratón sobre él se amplíe a un mayor ancho, y que al retirar el puntero del ratón, vuelva a su ancho normal.

- **Menú de navegación: Lo ven muy soso, después de ver el menú flotante de http://reseau.coop/ y sus animaciones quieren algo similar pero ya mismo cueste lo que cueste**

  He creado un menú de navegación con submenús usando también **JQuery** que abre cada submenú al hacer click en él, y lo cierra al seleccionar una opción del submenú o al volver a hacer click sobre él. El funcionamiento es muy sencillo: al hacer click en un submenú, si éste tiene hijos y no está previamente seleccionado, le agrega la clase "seleccionado" y aplica el efecto **fadeIn()** de **JQuery** sobre la etiqueta ul que tiene dentro que contiene los hijos de ese submenú. En caso de que ya tenga la clase "seleccionado", y por tanto, ya se esté mostrando el submenú, le retira la clase "seleccionado" y aplica el efecto de **JQuery** **fadeOut()** sobre la etiqueta ul que contiene los elementos del submenú.


