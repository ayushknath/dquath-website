# DQuath website

## Guidelines

### HTML

- Add a `<div>` element with the class of `container` which is used to give spacing to the content (refer `index.html`). A code snippet has been provided below as an example:

```HTML
<header>
  <div class="container">
    <!-- Other tags -->
  </div>
</header>

<section>
  <div class="container">
    <!-- Other tags -->
  </div>
</section>
```

- A comment has been added in the `index.html` file specifying where to place the _services section_.

### CSS

- Custom variables specifying the page colors and font-family have been set in the `variables.css` file. Therefore, update the CSS property values accordingly.
- You can add your own custom variables (if any) in the `variables.css` file.
- The custom variables are as follows:

```CSS
/* Colours */
  --accent-clr: #0c8ce9;
  --custom-black: #111;
  --custom-white: #f0f0f0;
  --light-grey: #aaa;
  --dark-grey: #404040;

  /* Font properties */
  --default-font: "Poppins", sans-serif;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-bold: 700;

  /* Default border radius */
  --border-rad: 8px;

  /* Default Animation time */
  --animation-time: 0.25s;
```

### JS

⚠️ The code in `main.js` has not been formatted properly. So put your code at the bottom of the file or create your own `.js` file to add your JavaScript code.

**Note:** Be sure to add comments that briefly describe your code.

### References folder

This folder contains design of the desktop and mobile versions of the website in PNG format.

### Assets folder

This folder contains the images and SVG files and any other stuff required for the website.
