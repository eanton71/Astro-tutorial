# Tutorial de Astro

Necesario:

- [x] Control de versiones y hosting, Github: https://github.com/
- [ ] Netlify: https://www.netlify.com/
- [x] Terminal para ejecutar comandos: bash, zsh, cmd, powershell
- [ ] Node.js: https://nodejs.org/
- [ ] Editor de codigo: Visual Studio Code: https://code.visualstudio.com/

## Crear un nuevo proyecto en terminal

Usar npm, pnpm o yarn

- nombre del directorio: blog
- template (plantilla): Empty
- dependencias? si
- ts (Typescript)? no
- git? si

```shell
> pnpm create astro@latest
   dir   Where should we create your new project?
         ./blog

  tmpl   How would you like to start your new project?
         Empty

  deps   Install dependencies?
         Yes

    ts   Do you plan to write TypeScript?
         No
      ◼  No worries! TypeScript is supported in Astro by default,
         but you are free to continue writing JavaScript instead.

   git   Initialize a new git repository?
         Yes

      ✔  Project initialized!
         ■ Template copied
         ■ Dependencies installed
         ■ Git initialized

  next   Liftoff confirmed. Explore your project!

         Enter your project directory using cd ./blog
         Run pnpm dev to start the dev server. CTRL+C to stop.
         Add frameworks like react or tailwind using astro add.

         Stuck? Join us at https://astro.build/chat

╭─────╮  Houston:
│ ◠ ◡ ◠  Good luck out there, astronaut! 🚀
╰─────╯
```

Ejecutar en modo desarrollo

```sh
pnpm run dev
```

Ver en el navegador en la direccion `http://localhost:4321`

## Almacenar en un repositorio en linea

- Crear repostiroio en Github
- Subir el codigo local a al repositorio de Github
- Puede ser necesario instalar git (lo indicara VS Code)
- Arriaba ala izquierda (Control de codio fuente) Ir a menu ... y seleccionar Remoto-> add remoto
- Te pedira iniciar sesion en Github. Despues se abre una pestaña arriba donde se elige el repositior al que se quiere mandar

## Desplegar el sitio en la web

- Crear una cuenta en Netlify.
- Para añadir un nuvevo sitio ir a la pestaña Sites y al boton a la derecha `Add new site`.
- Se le puede añadir un proyecto desde Github `Import a existing project`, despues `Deploy with Github`
- Saldra una lista con los repositirios de Github despues de autorizar la entrada a nuestro Github.

## Crear nuevas paginas

- En la carpeta `src/pages/` crearemos las nuevas paginas:
- Cramos una pagina `about.astro`. Podemos copiar el cidogo del la pagina index. Modificamcos olo que hay dentro del `<body>':

  > ```html
  > <body>
  >   <h1>Mi sitio Astro</h1>
  >   <h1>Sobre mi</h1>
  >   <h2>... ¡y mi nuevo sitio Astro!</h2>
  > 
  >   <p>
  >     Estoy trabajando en el tutorial introductorio de Astro. Esta es la segunda
  >     página de mi sitio web, ¡y es la primera que he construido yo mismo!
  >   </p>
  > 
  >   <p>
  >     Este sitio se irá actualizando a medida que vaya completando más partes del
  >     tutorial, ¡así que no dejes de visitarlo para ver cómo va mi viaje!
  >   </p>
  > </body>
  > ```
- [Paginas astro](https://docs.astro.build/es/basics/astro-pages/#p%C3%A1ginas-de-astro)
## Navegacion entre paginas

- Incluimos en todas las dos paginas los enlaces de ambas:

  >```html
  ><a href="/">Inicio</a> <a href="/about/">Sobre mi</a>
  >```

- Creamos una pagina para el blog y ñadimos en enlace a esta en las paginas

  >```html
  ><body>
  >  <a href="/">Inicio</a>
  >  <a href="/about/">Sobre mi</a>
  >  <a href="/blog/">Blog</a>
  >  <h1>Blog en Astro</h1>
  >  <p>aqui pondre las entradas de blog</p>
  ></body>
  >```

- Mas inforamcaion sobre enrutamiento basico en : [Enrutamiento basado en archivos](https://docs.astro.build/es/basics/astro-pages/#enrutamiento-basado-en-archivos)

## Archivos Markdown

- Creamos un directorio para las paginas del blog en una carpeta nueva `blog`dentro de `src/pages`
- Añadimos un nuevo fichero con extension `md`

  > ```js
  > --- 
  > data: 2022-07-01
  > autor: 'Alumno de Astro'
  > tags: ["astro", "bloguear", "aprender en público"]
  > ---
  > # Mi primera publicación en el blog
  > Publicado el: 2022-07-01
  > ...
  > ```

- Se puede ver como queda al acceder a `http://localhost:4321/blog/1`
- Añadimos el enlace de la nueva pagina en la pagina `blog`

  > ```html
  > <ul>
  >   <li><a href="/blog/1/">Publicación 1</a></li>
  > </ul>
  > ``` 
- Añadimos mas publicaciones `md`y sus enlaces en la pagina blog.
- [Sintaxis markdown](https://www.markdownguide.org/cheat-sheet/)
- El espacio entre `---`se llama frontmatter y permite añadir variables con las que se puede interactuar en codigo javascript inseratado en el resto de la pagina.  
- [frontmatter YAML](https://assemble.io/docs/YAML-front-matter.html)
## Componentes

Son fragmentos de html reutilizables y que nos permiten ahorrar codigo y tiempo.
Podemos hacer distintos componentes para los elementos de la pagina:

- Cabecera (Header)
- Navegacion, que  se incluye en la cabecera
- Pie de pagina
- Redes sociales, que se incluira en el pie de pagina

Pasos:

- Crear una carpeta `src/components` y dentro los archivos:  
  > Cabecera.astro
  > ```html
  > ---
  > import Navigation from './Navigation.astro';
  > ---
  > <header>
  >   <nav>
  >     <Navigation />
  >   </nav>
  > </header>
  > ```
 
  
  > Navegacion.astro
  >
  > ```html
  > ---
  > ---
  >
  > <a href="/">Inicio</a>
  > <a href="/about/">Sobre mi</a>
  > <a href="/blog/">Blog</a>
  > ```
  >
- Importarlo en las paginas y eliminar el codigo de navegacion sustituyendolo por la etiqueta `<Cabecera /> .
  > index.astro, blog.astro, about.astro
  >
  > ```js
  > ---
  > import Cabecera from '../components/Cabecera.astro';
  > ---
  > ```
- Creamos los componentes Pie de Pagina y para las redes sociales que estara incluido en este:
  > PiePg.astro
  >```javascript
  >---
  >import Social from './Social.astro';
  >---
  ><footer>
  >  <Social platform="twitter" username="astrodotbuild" />
  >  <Social platform="github" username="withastro" />
  >  <Social platform="youtube" username="astrodotbuild" />
  ></footer>
  >```

  > Social.astro
  > ```js
  > ---
  > const { platform, username } = Astro.props;
  > ---
  > ```
  > ```html
  > <a href={`https://www.${platform}.com/${username}`}>{platform}</a>
  > ```

- Importamos en las paginas astro y añadimos `<PiePg />` al final de las paginas.

- Mas adelante añadiremos estilos

## Plantillas   

- Sirven para refactorizar elementos comune a varias paginas. Incluyeb el codigo repetido en estas como el contenido de `<head>`, el  contenido de 
  navegacion, el pie de pagina, ..., estilos CSS, scripts, etc...
- En la plantilla qse incluye el tag __`<slot /> `__, que 
en la pagina sera cambiado por el conteinido que se pone entre las etiquetas de la plantilla
- `Astro.props` nos permite pasar variables llamadas '__PROPS__', cuyo valor sera inicializado en la declaracion del layout , en la pagina donde se utilizara. 

-   Creamos una nueva carpeta `src/layouts` y creamos una plantillas para las paginas: 
    > Base.astro
    >```js
    >---
    >import Cabecera from '../components/Cabecera.astro';
    >import PiePg from '../components/Cabecera.astro';
    >const {tituloPg} = "Astro.props;
    >---
    >```
    >```js
    ><html lang="es">
    >  <head>
    >    <meta charset="utf-8" />
    >    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    >    <meta name="viewport" content="width=device-width" />
    >    <meta name="generator" content={Astro.generator} />
    >    <title>{tituloPg}</title>
    >  </head>
    >  <body>
    >    <Header />
    >    <h1>{tituloPg}</h1>
    >    <slot />
    >    <Footer />     
    >  </body>
    ></html>
    >```

  - Se importa en las paginas sustituyendo el codigo  que incluyen por la etiqueta `<Base > </Base>`. La etiqueta inicializa el __prop__  pageTitle con el valor que le queramos dar a esta pagina en concreto. Para la pagina de inicio: "Pagina de inicio", Para la pagina del blog: "Blog", etc...:

     >   index.astro
     >   ```js
     > ---
     > import BaseLayout from '../layouts/BaseLayout.astro';
     > const pageTitle = "Página de inicio";
     > ---
      >```
     >```html
     > <BaseLayout tituloPg = {tituloPg}>
     >   <h2>Mi impresionante subtítulo del blog</h2>
     > </BaseLayout>
     >   ```
   
## Plantillas para archivos markdown
- Igual que las plantillas para paginas. En este caso se puede incluir la palabra frontmatter como __prop__. De esta manera se pasan todos llos valores __YAML__ del __frontmatter__ como props al archivo `md`.
- Para que el contenido de la entrada de blog vaya integrado en el esquema general de la pagina web es enecesario integrar la plantilla base para las pagtinas astro. De esta manera :
  > __MDPostLayout.astro__
  >```javascript
  >---
  >import BaseLayout from "./Base.astro";
  >const { frontmatter } = Astro.props;
  >---
  >```
  >```html
  ><BaseLayout tituloPg={frontmatter.titulo}> 
  >  <p>Publicado el {frontmatter.data.slice(0, 10)}</p> 
  >  <p>Escrito por: {frontmatter.autor}</p> 
  >  <slot />
  ></BaseLayout>
  >```

- En cada archivo markdown se importara el layout de esta manera:
  > __post.md__
  > ```js
  > ---
  > layout: ../../layouts/MDPostLayout.astro
  > titulo: 'Mi segunda publicación en el blog'
  > data: 2022-07-01 
  > autor: 'Alumno de Astro' 
  > tags: ["astro", "bloguear", "aprender en público"]
  > ---
  >  texto del blog
  > ```

- Cuando se renderice en la web e mostrara la estructura general de la web y en el lugar de la entrada de blog, en la forma en que se indica en la plantilla `MDPostLayout.astro` que esta definida en la variable `layout`: Titulo de la pagina(en pestaña superior y en H1: "Mi segunda publiacacion en el blog", publicado en 2022-07-01 EScrito por ' Alumno de Astro'). En la parte definida por la etiqueta `<slot>`, el texto de la entrada de blog.

## Entradas de blog dinamicas con  `Astro.glob()`


- En vez de tener que poner un enlace para cada entrada nueva en la pagina de blog podenmos acceder  dinamicamente a todas los archivos markdopwn que se encuentren en la pagina blog.
- Añadimos en el frontmatter de la pagina del blog una variable donde guiardamos la llamada a AStro.glob() de forma asincrona `await`.
- Daremos opcion tambien para incluir archivos MDX. Estos son archivos markdown que permiten el uso de javascreipt y compoentes integrados en el archivo.
- PAra poder usar archivos MDX es necesario instalar la integracion con MDX con el comando `pnpm astro add mdx`. TAmbien modificar el archivo:
   > __astro.config.mjs__
   > ```mjs
   > import { defineConfig } from 'astro/config';
   > import mdx from '@astrojs/mdx';
   > export default defineConfig({
   >   // ...
   >   integrations: [mdx()],
   > });
   > ```
   > __blog.astro__
   > ```js
   > ---
   > const posts = await Astro.glob('../pages/blog/*.{md,mdx}');
   > ---
   > ```
   > ```html
   >   ...
   > <ul>
   >   {posts.map((post) => 
   >     <li>
   >       <a href={post.url}>{post.frontmatter.titulo}</a>
   >     </li>)}
   > </ul>
   >   ...
   >```




# Colecciones de contenido
Sirven para gestionar grupos de archivos con contenido similar, por ejemplo un blog.


- Actualiza a Astro v4.x
  > ```bash
  > pnpm install astro@latest
  > ```

- Configurar Typescript en el archivo tsconfig.json. Configuracion si no se usa Typescript: 
  > __tsconfig.json__
  > ```json
  > {
  >   // Nota: No se necesitan cambios si se utiliza "astro/tsconfigs/strict" o "astro/tsconfigs/strictest"
  >   "extends": "astro/tsconfigs/base",
  >   "compilerOptions": {
  >     "strictNullChecks": true,
  >     "allowJs": true
  >   }
  > }
  > ```

- Hay que mover las publicaciones a un nuevo directorio: `src/content`. Dentro de este, a una carpeta llamada por ejemplo `blog`.
## Archivo de esquema `config.ts`
- Crear un archivo en la carpeta `src/content` con el nombre `config.ts` donde definiremos un esquema para la coleccion que llamaremos `blogColeccion`
  >__config.ts__
  >```ts 
  >import { z, defineCollection } from "astro:content"; 
  >const blogColeccion = defineCollection({
  >    type: 'content',
  >    schema: z.object({
  >      titulo: z.string(),
  >      data: z.date(), 
  >      autor: z.string(), 
  >      tags: z.array(z.string())
  >    })
  >}); 
  >export const colecciones = {
  >  blog: blogColeccion,
  >};
  >```
- Ejecutar el comando `npx astro sync` despues de parar el servidor (despues reiniciarlo). Esto hace que astro reconozca el esquema. 

## `[...slug].astro` 
- En la carpeta `src/pages/blog` donde estaban antes los archivos md,mdx, ahora crearemos un archivo con el nombre:  
  >__`[...slug].astro`__
  >```js
  >---
  >import { getCollection } from 'astro:content';
  >import MDPostLayout from '../../layouts/MDPostLayout.astro';
  >
  >export async function getStaticPaths() {
  >  const entradas = await getCollection('blog');
  >  return entradas.map(entrada => ({
  >    params: { slug: entrada.slug }, props: { entrada },
  >  }));
  >}
  >
  >const { entrada } = Astro.props;
  >const { Content } = await entry.render();
  >---
  >```
  >```html
  ><MDPostLayout frontmatter={entry.data}>
  >  <Content />
  ></MDPostLayout>
  >```

- Elimnar las declaraciones de la variable layout en los frontmatter de los archivvos md, mdx, ya que ahor se encarga el archivo`[...slug].astro`de indicar donde esta el layout.
## Cambiar `Astro.glob()`por `getCollection()` 
- Modificar la pagina blog.astro y cualquier pagina donde haya una lista de enlaces a las entradas de blog con la funcion `getCollection()` 
  >__blog.astro__
  >```javascript
  >---
  >import { getCollection } from "astro:content";
  >import Base from "../layouts/Base.astro";
  >const posts = await getCollection("blog");
  >const tituloPg = "Blog";
  >---
  >```
  >```html
  ><Base tituloPg={tituloPg}>
  >  <p>aqui pondre las entradas de blog</p>
  >  <ul>
  >    {
  >      posts.map((post) => (
  >        <li>
  >          <a href={`/blog/${post.slug}/`}>{post.data.titulo}</a>
  >        </li>
  >      ))
  >    }
  >  </ul>
  ></Base>
  >```

# Conceptos sobre Astro
## Contenido dinamico
- Que es el frontmatter: se puede añadir a la parte superior de los archivos astro, md,mdx. 
- Se delimita entre dos filas de tres guiones `---` . 
- Permite añadir variables. Lo hacemos en la pagina __`about.astro`__:
  >```js 
  >---
  >import Base from '../layouts/Base.astro';
  >const tituloPg = 'Sobre mi'; 
  >const misdatos = {
  >  nombre: 'Enrique',
  >  pais: 'España',
  >  soy:'desarrollador fullstack',
  >  aficciones:['montaña','historia','cocina'],
  >  conocimientos:['HTML','CSS','Javascript','React','Astro'],
  >} 
  >const fin = false;
  >const llevo_dias = 5; 
  >const estudiando = {
  >  blog:    llevo_dias <= 3, //llevamos 3 dias o menos estudiando?
  >  content: llevo_dias <= 6, // 
  >  view:    llevo_dias <= 9,
  >};
  >---
  >```
  >```html
  ><Base tituloPg={tituloPg}>
  >  ...
  >  ...
  >  <li>Soy {misdatos.nombre} y vivo en {misdatos.pais} .Soy {misdatos.soy}.</li>
  >  {misdatos.aficciones.length >= 2 &&
  >    <li>Dos de mis aficiones son: {misdatos.aficciones[0]} y {misdatos.aficciones[1]}</li>
  >  }
  ></ul>
  ><p>Mis habilidades son:</p>
  ><ul>
  >  {misdatos.conocimientos.map((skill) => <li>{skill}</li>)}
  ></ul>
  >{fin && <p>¡He terminado este tutorial!</p>}
  > {
  >     estudiando.blog    ? 
  >    ( <p>Ahora estoy construyendo un blog .</p> ) 
  >    :
  >    (estudiando.content ?
  >      <p>Estoy viendo como gestionar colecciones de contenido.</p> 
  >      :
  >      <p>WoW ¡View Transitions!.</p> )
  >  }
  ></Base>
  >```
- Como se renderizan los elementos de forma dinamica: las variables estan declaradas en el frontmatter. En la parte html, entre  llaves se ejecutara codigo javascript.
-La funcion map funciona como un bucle, recorre la lista y la muestra element a elemento colocandolo dentro de un elemtno de lista.  
- Hay varias expresiones booleannas. La variable fin esta en false, por tanto no se mostrara el texto que  esta a la derecha.
- El objeto estudiando contiene varias expresiones booleanas que dependen del valor de dias. Con el condicional ternario `?`, se mostrara una parte u otra del texto. 
- La pagina cuando llega a la web queda renderizada totalmetne en HTML sin nada de Javascript. 
 
# View transitions
actualizar
pnpm install astro@latest

Añadir viewtransitions al layout base
