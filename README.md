# Manual de Instalación y ejecución de pruebas en Cypress

## Requisitos Previos

Node.js y npm instalados en tu sistema. Puedes descargar e instalar Node.js desde su página oficial.
Un editor de código como Visual Studio Code, Atom o Sublime Text.

## Crear un Nuevo Proyecto de Cypress
 
Abre tu terminal o línea de comandos.
Crea un nuevo directorio para tu proyecto de Cypress:

_mkdir mi-proyecto-cypress_

 3. Navega hasta el directorio recién creado:
    
_cd mi-proyecto-cypress_

## Inicializar el Proyecto con npm

 1. Inicializa un nuevo proyecto de Node.js en el directorio:
    
    _npm init -y_
    
Esto creará un archivo package.json en el directorio con la configuración por defecto.

## Instalar Cypress

1. Instala Cypress como una dependencia de desarrollo en tu proyecto:
   
   _npm install cypress --save-dev_
   
Esto descargará e instalará Cypress en tu proyecto y lo añadirá como una dependencia de desarrollo en el archivo package.json

## Abrir Cypress y ejecución de pruebas

Una vez instalado Cypress, puedes abrirlo ejecutando el siguiente comando en tu terminal:

   _npx cypress open_
   
Esto iniciará Cypress y abrirá su interfaz de usuario. Cypress creará una estructura de archivos básica si es la primera vez que lo ejecutas.
Selecciona la carpeta donde se encuentran los scripts **(Para ejecutar las pruebas seleccionar la carpeta donde se descargo el repo y dirigirse a la carpeta e2e)** donde solo basta seleccionar cualquier de los scripts para que se ejecute.
