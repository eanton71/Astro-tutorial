# Tutorial de Astro 


Necesario:
- [x] Control de versiones y hosting,  Github: https://github.com/
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

Ejecutar  en modo desarrollo 
```sh
pnpm run dev
````
Ver en el navegador en la direccion `http://localhost:4321`

## Almacenar en un repositorio en linea
- Crear repostiroio en Github
- Subir el codigo local a  al repositorio de Github
- Puede ser necesario instalar git (lo indicara VS Code)
- Arriaba ala izquierda (Control de codio fuente) Ir a  menu ... y seleccionar Remoto-> add remoto
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

  <p>Estoy trabajando en el tutorial introductorio de Astro. Esta es la segunda página de mi sitio web, ¡y es la primera que he construido yo mismo!</p>

  <p>Este sitio se irá actualizando a medida que vaya completando más partes del tutorial, ¡así que no dejes de visitarlo para ver cómo va mi viaje!</p>
</body>
```
## Navegacion entre paginas
Incluimos en todas las dos paginas los enlaces de ambas:
```html
<a href="/">Inicio</a>
<a href="/about/">Sobre mi</a>
````
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
````
- Se puede ver como queda al acceder a `http://localhost:4321/blog/1`
- Añadimos el enlace de la nueva pagina en la pagina `blog`
```html
<ul>
    <li><a href="/blog/1/">Publicación 1</a></li>
</ul>
```
Añadimos mas publicaciones `md`y sus enlaces en la pagina blog

