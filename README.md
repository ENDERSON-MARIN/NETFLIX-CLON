## INICIALIZACIÓN DEL PROYECTO

`npx create-react-app netflix-clon --template redux`

## PROCESO DE LIMPIEZA

## IMPORTAR LAS LIBRERIAS

-material-ui/core, axios, firebase, react-router-dom, react-uuid, styled-components

## LAYOUT INICIAL

-Creamos las rutas
-Renderizamos Login o el resto del App condicionado a la existencia de un usuario

## ESTILOS

-Utilizamos el hook useStylyes de material-ui para asignar una infraestructura que nos permita crear estilos a cada uno de los componentes

## CREAR LAS CARPETAS DE COMPONENTES: PAGES

-Creamos la infraestructura básica de los componentes que representan una página: Home, Login, Paypal, Profile, SignUp

## CREAR LOS ESTILOS PARA LOS COMPONENTES DE PAGES

-Patrón para anadir la infraestructura de estilos a todos los componentes de páginas

## CREAR LAS CARPETAS DE COMPONENTES: COMPONENTS

-Creamos la infraestructura básica de los componentes que no representan una página: Banner, Header, Plans, Rows

## CREAR LOS ESTILOS PARA LOS COMPONENTES DE PAGES

-Patrón para anadir la infraestructura de estilos a todos los componentes de páginas: Banner, Header, Plans, Rows

## COMPONENTE HEADER

-Importamos el logo
-Añadimos al AppBar una clase transparent condicional, esta clase se activa si la variable show = true.
-La variable show se concierte en true cuando hacemos un scroll vertical mayor a 100px.
-Para escuchar cuando el usuario hace scroll vertical añadimos un event listener al window.
-El eventListener está activo una sola vez cada vez que refrescamos la página mediante el hook (useEffect con []).
-Una vez montado el componente hay que limpiarlo para que no nos quede colgado el listener.
-Añadimos las rutas tanto al logo como al Avatar.

## COMPONENTE BANNER

-Hemos importado una imagen para el backgroundImage
-En React tenemos que acompañar las bacgroundsImages con estilos como object-fit, background-size y background-position.
-Hemos posicionado el título de la pelicula, los botones y la descripción.
-Como la descripción va a venir de la API tenemos que asegurarnos de truncarla para que quepa, para ello hemos declarado la función truncate.
-Anadimos un efecto fade al final de la imagen mediante u div vacio con estilos.

