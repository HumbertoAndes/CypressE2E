# README GENERAL

## Integrantes

HUMBERTO ENRIQUE SOSA CADENA – H.SOSA@UNIANDES.EDU.CO

LINA MARIA AVILA SOLANO – LM.AVILAS1@UNIANDES.EDU.CO

_Entregado por Humberto Enrique Sosa Cadena_

## Funcionalidades probadas

### Members:

Funcioanlidad donde tenemos la capacidad de añadir usuarios adicionales al equipo editorial o de administración del sitio. Estos miembros pueden tener diferentes roles y permisos, lo que les permite realizar diversas acciones dentro del sistema, como escribir y publicar contenido, gestionar comentarios, acceder a estadísticas y configurar la apariencia del sitio

### Tags:

Esta funcionalidad nos permite a los usuarios agregar nuevas etiquetas para al momento de etiquetar nuestras publicaciones con palabras clave relevantes que describan el contenido de la entrada. Esto facilita la navegación y la búsqueda de contenido relacionado para los lectores, ya que podemos hacer clic en un tag específico para ver todas las publicaciones que están asociadas con esa etiqueta

### Pages:

Esta funcionaldiad nos permite crear contenido estatico, es decir, las paginas que se pueden observar en nuestro sitio web


### Published:

En la funcoianlidad de published, podemos realizar la creacion de posty directamente sera publicada

### View site:

Esta funcionalidad nos da la posibilidad de ver una maqueta de nuestra pagina web, sin neceidad de salirnos como administradores de Ghost

## Pros y contras Cypress & Kraken

## _Cypress_

### Pros:

### Facilidad de Uso: 

Cypress proporciona una API sencilla y fácil de entender para escribir pruebas E2E, lo que facilita su adopción incluso para aquellos que no son expertos en pruebas automatizadas.

### Interfaz Gráfica Intuitiva: 

Cypress incluye una interfaz gráfica de usuario que permite la ejecución y depuración de pruebas de forma visual, lo que facilita el proceso de desarrollo y depuración de pruebas.

### Tiempo de Ejecución Rápido: 

Cypress está diseñado para ejecutar pruebas de manera eficiente y rápida, lo que resulta en tiempos de ejecución más cortos en comparación con otras herramientas de pruebas E2E.

### Control Completo del Entorno: 

Cypress ejecuta pruebas en el mismo contexto que el navegador, lo que proporciona un control completo sobre el entorno de la aplicación y permite una mejor simulación de la interacción del usuario real.

### Selector de Elementos Inteligente: 

Cypress utiliza su propio motor de selección de elementos, lo que simplifica la escritura de selectores y hace que las pruebas sean más robustas y menos propensas a romperse debido a cambios en la estructura del DOM.

### Registro Detallado: 

Cypress proporciona un registro detallado de todas las acciones realizadas durante la ejecución de las pruebas, lo que facilita la identificación y solución de problemas.

### Contras:

### Soporte Limitado para Navegadores: 

Cypress actualmente solo es compatible con Chrome, Chromium y Electron, lo que limita su utilidad para pruebas multi-navegador y en entornos específicos.

### Sin Soporte para Navegadores Móviles: 

Cypress no admite pruebas en navegadores móviles, lo que puede ser una limitación para las aplicaciones que requieren pruebas en dispositivos móviles.

### Requiere Conocimientos de JavaScript: 

Aunque Cypress es fácil de usar, requiere conocimientos básicos de JavaScript para escribir pruebas personalizadas y scripts de soporte.

### Dependencia del Entorno de Desarrollo: 

Cypress se ejecuta dentro del navegador, lo que significa que está limitado por las restricciones de seguridad del navegador y puede no ser adecuado para todas las aplicaciones.

## _Kraken_

### Pros:

### Soporte Multi-Navegador: 

Kraken es compatible con varios navegadores web, incluyendo Chrome, Firefox, Safari y Edge, lo que permite realizar pruebas en una variedad de entornos de usuario.

### Integración con Selenium WebDriver: 

Kraken se basa en Selenium WebDriver, lo que significa que puede aprovechar las capacidades de Selenium para interactuar con elementos de la página web y realizar acciones como hacer clic, llenar formularios, etc.

### Amplia Comunidad y Documentación: 

Kraken cuenta con una comunidad activa de usuarios y una documentación completa, lo que facilita la resolución de problemas y la obtención de ayuda cuando sea necesario.

### Flexibilidad y Personalización: 

Kraken proporciona una API flexible que permite personalizar y extender las pruebas según las necesidades específicas del proyecto.

### Soporte para Pruebas en Dispositivos Móviles: 

Kraken es compatible con pruebas en dispositivos móviles, lo que permite realizar pruebas E2E en aplicaciones web móviles y sitios responsivos.

### Compatibilidad con Diferentes Tecnologías: 

Kraken es compatible con una variedad de tecnologías web, incluyendo HTML, CSS, JavaScript, Angular, React, entre otras, lo que lo hace adecuado para una amplia gama de aplicaciones web.

### Contras:

### Curva de Aprendizaje: 

Kraken puede tener una curva de aprendizaje más pronunciada para aquellos que no están familiarizados con Selenium WebDriver o la automatización de pruebas en general.

### Configuración Compleja: 

Configurar Kraken puede ser más complejo en comparación con otras herramientas de pruebas, especialmente para entornos de prueba más avanzados o con requisitos específicos.

### Tiempo de Ejecución más Lento: 

En comparación con algunas otras herramientas de pruebas E2E, Kraken puede tener tiempos de ejecución más largos debido a su arquitectura basada en Selenium WebDriver.

### Menos Funcionalidades Integradas: 

Kraken puede carecer de algunas características avanzadas que se encuentran en otras herramientas de pruebas E2E, como la capacidad de grabar y reproducir pruebas o la integración con herramientas de CI/CD.

### Dependencia de Infraestructura Externa: 

Kraken depende de la disponibilidad y estabilidad de la infraestructura de Selenium Grid u otros servicios de ejecución de pruebas en la nube para ejecutar pruebas en paralelo o en diferentes navegadores.
