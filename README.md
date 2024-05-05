Manual de Instalación y ejecución de pruebas en Cypress

 1. Requisitos Previos
Node.js y npm instalados en tu sistema. Puedes descargar e instalar Node.js desde su página oficial.
Un editor de código como Visual Studio Code, Atom o Sublime Text.
 2. Crear un Nuevo Proyecto de Cypress
Abre tu terminal o línea de comandos.
Crea un nuevo directorio para tu proyecto de Cypress:
mkdir mi-proyecto-cypress
 3. Navega hasta el directorio recién creado:
cd mi-proyecto-cypress

Inicializar el Proyecto con npm
 1. Inicializa un nuevo proyecto de Node.js en el directorio:
    npm init -y
Esto creará un archivo package.json en el directorio con la configuración por defecto.

Instalar Cypress
1. Instala Cypress como una dependencia de desarrollo en tu proyecto:
   npm install cypress --save-dev
Esto descargará e instalará Cypress en tu proyecto y lo añadirá como una dependencia de desarrollo en el archivo package.json

Abrir Cypress y ejecución de pruebas
Una vez instalado Cypress, puedes abrirlo ejecutando el siguiente comando en tu terminal:
   npx cypress open
Esto iniciará Cypress y abrirá su interfaz de usuario. Cypress creará una estructura de archivos básica si es la primera vez que lo ejecutas.
Selecciona la carpeta donde se encuentran los scripts (Para ejecutar las pruebas seleccionar la carpeta donde se descargo el repo y dirigirse a la carpeta e2e) donde solo basta seleecioinar cualquier de los scripts para que se ejecute.
