# Parcial 1 - Tópicos de Calidad para el Diseño de Software

Página de evaluación de Luis Ortega basada en la referencia visual del PDF.
Profesor: MATSI. Isaac Omar Reyes Lara.
Valor indicado: 50 %. Entrega indicada: 2 de octubre, 10:00 hrs.
El documento corresponde al primer parcial de septiembre/octubre de 2026.

## Antes de entregar

1. Confirma tu nombre completo en `index.html`. Si tienes otro apellido, agrégalo.
2. Revisa tu correo escolar, confirmado por la cuenta de GitHub conectada:
   `luis_3142250095@utd.edu.mx`.
3. Coloca tu foto profesional cuadrada de 400 x 400 píxeles en `images/foto-profesional.jpg`.
4. En la última etiqueta `<img>` cambia `images/foto-profesional.svg` por `images/foto-profesional.jpg` y actualiza el texto `alt`.

La imagen actual es un espacio marcado como pendiente. No es una foto del estudiante
y no cumple por sí sola el requisito de fotografía profesional.

## Abrir el proyecto

Abre `index.html` con tu navegador. No necesita instalación, internet ni servidor.
Puedes abrir toda esta carpeta en Visual Studio Code para editarla.

## Contenido

- `index.html`: interfaz principal de HTML con estilos CSS básicos.
- `images/logo-utd.png`: logo extraído del PDF proporcionado.
- `images/foto-profesional.svg`: espacio temporal de 400 x 400 píxeles.
- `diagrams/`: tres diagramas de flujo y tres diagramas UML de casos de uso,
  cada uno con su página HTML y su imagen SVG.
- `game/mario.html` y `game/game.js`: mini juego local de plataformas.

El PDF exige crear la interfaz mostrada; no define el contenido de los seis
diagramas ni exige programar un juego. Los destinos incluidos son complementos
para que los botones y el enlace funcionen. Los diagramas son ejemplos nuevos de
un sistema genérico de servicios. Si el profesor pidió usar tus diagramas de clase,
reemplaza estos ejemplos. El mini juego es una práctica original, no el juego
oficial de Nintendo. La portada conserva las etiquetas en inglés del ejemplo.

## Repositorio y commit

El PDF muestra `partial1_perez_juan` y el commit `partial 1 Perez Sosa Juan`.
Se interpreta que son ejemplos y que se sustituyen por los datos del estudiante.
Para el nombre conocido Luis Ortega:

- Repositorio: `partial1_ortega_luis`.
- Commit: `partial 1 Ortega Luis`.
- Si tienes otro apellido, inclúyelo en el mensaje del commit:
  `partial 1 Ortega SEGUNDO_APELLIDO Luis`.

## Publicar por la web de GitHub

1. En tu cuenta de GitHub crea un repositorio nuevo: `partial1_ortega_luis`.
2. Selecciona Public para usar GitHub Pages con una cuenta gratuita.
3. Elige subir un archivo existente (`uploading an existing file` o
   `Add file > Upload files`).
4. Arrastra `index.html`, `README.md` y las carpetas `images`, `diagrams` y `game`.
   No subas el ZIP ni la carpeta contenedora: `index.html` debe quedar en la raíz.
5. En el mensaje del commit escribe `partial 1 Ortega Luis`, añadiendo el otro
   apellido si corresponde. Confirma con `Commit changes`.
6. Ve a `Settings > Pages`.
7. En `Source` elige `Deploy from a branch`; selecciona la rama `main` y la
   carpeta `/(root)`. Guarda con `Save`.
8. Cuando termine la publicación, abre `Visit site`. Puede tardar hasta 10 minutos.
9. Comprueba que la foto, el logo, los seis botones y `PLAY MARIO` funcionan.

## Alternativa: terminal de VS Code

Crea primero un repositorio NUEVO y vacío en GitHub, sin README ni otros archivos.
En VS Code abre esta carpeta, abre una terminal y ejecuta:

```bash
git init -b main
git add .
git commit -m "partial 1 Ortega Luis"
git remote add origin https://github.com/TU_USUARIO/partial1_ortega_luis.git
git push -u origin main
```

Reemplaza `TU_USUARIO` por tu usuario real de GitHub. Si tienes otro apellido,
ajusta el mensaje del commit ANTES de ejecutarlo. Si aparece una solicitud de
autenticación, inicia sesión en tu cuenta de GitHub. Después activa Pages siguiendo
los pasos 6 a 9 del método web. Usa un método de subida, no ambos sobre el mismo
repositorio sin comprender cómo sincronizarlo.

## Entrega en Classroom

Entrega DOS enlaces reales, después de comprobarlos:

```text
Repositorio: https://github.com/TU_USUARIO/partial1_ortega_luis
Página publicada: https://TU_USUARIO.github.io/partial1_ortega_luis/
```

Las direcciones anteriores muestran el FORMATO: sustituye TU_USUARIO por el usuario real.
Usa la dirección de tu repositorio y la que aparezca en `Settings > Pages`.
Subir los archivos a GitHub y activar Pages son acciones diferentes.
El repositorio remoto se creó en la cuenta conectada del estudiante:
https://github.com/luis3142250095-cell/partial1_ortega_luis
La actividad todavía no se ha entregado en Classroom. La fotografía profesional sigue pendiente.

## Qué significa el código

- `<h1>`, `<h2>`, `<h3>` y `<h4>`: títulos de distintos niveles.
- `<img>`: muestra una imagen local; `src` indica el archivo y `alt` lo describe.
- `width="400" height="400"`: tamaño de presentación de la foto. Tu archivo
  final también debe medir 400 x 400 píxeles; esos atributos no cambian el archivo.
- `<a href="...">`: enlace a otra página.
- `<form action="..."><button>...</button></form>`: botón que abre el diagrama.
- `<style>`: CSS sencillo para centrar y espaciar el contenido.

## Fuentes de la guía de publicación

- https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

Consultadas el 1 de octubre de 2026. La evaluación original proporcionada por
el estudiante es la fuente de los requisitos académicos.
