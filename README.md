# Urban Waffle

Embedded survey application, which is shown to the user based on information that may be stored within the browser.

### Dependencies

Application built with [React](), using [Ant Design]() component library and [Vite]() for the application build and final library bundle.

### How to use

After cloning the project, run the following commands

```bash
npm install
npm run build
```

After building the application, three files should've been generated in the `dist` folder, `styles.css`, `ys.es.js` and `ys.umd.js`.

With these files in hand, we can go to our final application, and embed them into it.

First, copy the generated files to your project:

```diff
index.html
+/third-party/urban-waffle/styles.css
+/third-party/urban-waffle/ys.es.js
+/third-party/urban-waffle/ys.umd.js
```

Then in the `index.html` file we modify it as the following:

```diff
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

+   <link rel="stylesheet" href="./third-party/urban-waffle/style.css" />

    <title>Sample application</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>

+   <script src="./third-party/urban-waffle/ys.umd.js"></script>
  </body>
</html>
```

Then, when running your application through your preferred static server, after waiting a few seconds, you should see the following modal:

![Survey preview]('./docs/preview.png')
