2 Estado y Ciclo de vida

El metodo shouldComponentUpdate lo utilizaria para actualizar el ciclo de vida del componente. Hace mucho que no utilizo componentes de clase pero tengo entendido que es uno de los ciclos de vida mas utilizados en temas de rendimiento y optimizacion.

4 Diferencia entre forEach y map

La diferencia principal entre uno y otro es que el map te devuelve un array con los datos modificados o no, en cambio el foreach no retorna nada, a menos que este implicito.


6 Hooks

La funcionalidad del Hook useEffect es renovar el ciclo de vida de un componente teniendo en cuenta que ponemos en el array de dependencia. por ejemplo yo tengo un codigo de mis proyectos en el que lo utilizo, algo bastante sencillo

cuando estoy en una SPA lo utilizo para devolver al usuario al login si no tiene acceso, por ejemplo.

 useEffect(() => {
    !access && navigate("/");
  }, [access]);


7 browser-router & hash-router


Browser-Router seria como un componente que tiene adentro de si mismo las rutas, yo las veces que lo utilice fue en mi main.jsx para poder habilitar las <Routes></Routes> en otros componentes de mi pagina

Hash-Router tuve que ir a la documentacion de React-router-dom para poder ver porque nunca trabaje con el pero veo que es para que no se envie al servidor el nombre de la ruta, me imagino cuando uno hace un router.asPath o algo similar.


8 Context API

Con total sinceridad tengo poco conocimiento en Context API, conozco REDUX y se que se utiliza para poder manejar sistemas muy grandes en los que se necesita acceder a la informacion desde todos los componentes de la pagina.

tengo entendido que Context API es lo mismo pero para un caso particular.


9 HOC

Desconozco de High Order Component.


10 Testing en React

Conozco Jest y Mocha, a Jest hice pocas pruebas unitarias pero a Mocha no conozco nada, solo el nombre
