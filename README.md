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

En la carpeta `src/pages/` crearemos las nuevas paginas:
Cramos una pagina `about.astro`. Podemos copiar el cidogo del la pagina index. Modificamcos olo que hay dentro del `<body>':

```html
<body>
  <h1>Mi sitio Astro</h1>
  <h1>Sobre mi</h1>
  <h2>... ¡y mi nuevo sitio Astro!</h2>

  <p>
    Estoy trabajando en el tutorial introductorio de Astro. Esta es la segunda
    página de mi sitio web, ¡y es la primera que he construido yo mismo!
  </p>

  <p>
    Este sitio se irá actualizando a medida que vaya completando más partes del
    tutorial, ¡así que no dejes de visitarlo para ver cómo va mi viaje!
  </p>
</body>
```

## Navegacion entre paginas

Incluimos en todas las dos paginas los enlaces de ambas:

```html
<a href="/">Inicio</a> <a href="/about/">Sobre mi</a>
```

Creamos una pagina para el blog y ñadimos en enlace a esta en las paginas

```html
<body>
  <a href="/">Inicio</a>
  <a href="/about/">Sobre mi</a>
  <a href="/blog/">Blog</a>
  <h1>Blog en Astro</h1>
  <p>aqui pondre las entradas de blog</p>
</body>
```

## Archivos Markdown

- Creamos un directorio para las paginas del blog en una carpeta nueva `blog`dentro de `src/pages`
- Añadimos un nuevo fichero con extension `md`

```md
data: 2022-07-01
autor: 'Alumno de Astro'
tags: ["astro", "bloguear", "aprender en público"]

---

# Mi primera publicación en el blog

Publicado el: 2022-07-01
...
```

- Se puede ver como queda al acceder a `http://localhost:4321/blog/1`
- Añadimos el enlace de la nueva pagina en la pagina `blog`

```html
<ul>
  <li><a href="/blog/1/">Publicación 1</a></li>
</ul>
```

Añadimos mas publicaciones `md`y sus enlaces en la pagina blog

## Componentes

Son fragmentos de html reutilizables y que nos permiten ahorrar codigo y tiempo.
Podemos hacer distintos componentes para los elementos de la pagina:

- Cabecera (Header)
- Navegacion, que  se incluye en la cabecera
- Pie de pagina
- Redes sociales, que se incluira en el pie de pagina

Pasos:

- Crear una carpeta `src/components`
- Crear componente Cabecera:
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

- Crear componente de Navegacion:
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
  > Importarlo en las paginas y eliminar el codigo de navegacion sustituyendolo por la etiqueta `<Cabecera /> .
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
  > ```html
  > ---
  > const { platform, username } = Astro.props;
  > ---
  > <a href={`https://www.${platform}.com/${username}`}>{platform}</a>
  > ```

  - Importamos en las paginas astro y añadimos `<PiePg />` al final de las paginas.

  - Mas adelante añadiremos estilos

## Plantillas   

- Sirven para refactorizar elementos comune a varias paginas. Incluyeb el codigo repetido en estas como el contenido de `<head>`, el  contenido de 
  navegacion, el pie de pagina, ..., estilos CSS, scripts, etc...
- En la plantilla qse incluye el tag __`<slot /> `__, que 
en la pagina sera cambiado por el conteinido que se pone entre las etiuetas de la plantilla
- Astro.props nos permite pasar variables llamadas '__PROPS__', cuyo valor sera inicializado en la declaracion del layout , en la pagina donde se utilizara. 

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

  - Se importa en las paginas elimnando sustituyendoi el codigo  que incluyen por la etiqueta `<Base > </Base>`. La etiqueta inicializa el __prop__  pageTitle con el valor que le queramos dar a esta pagina enc concreto. Para la pagina de inicio: "Pagina de inicio", Para la pagina del blog: "Blog", etc...:

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

