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


