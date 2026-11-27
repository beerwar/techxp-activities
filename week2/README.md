<!DOCTYPE html>                          1. Use modern standards mode
<html lang="en">                         2. Language: screen readers & search
<head>                                 3. ABOUT the page — not shown
  <meta charset="UTF-8">                 4. Text encoding. Always first.
  <meta name="viewport"
        content="width=device-width, initial-scale=1.0">  5. Mobile
  <title>My First Page</title>          6. Tab text, bookmark, search result
  <link rel="stylesheet" href="css/style.css">  7. Styles
</head>
<body>                                 8. THE page — everything visible
  <h1>Hello, world</h1>
  <p>My first page, served over HTTP.</p>
  <script src="js/main.js" defer></script>   9. Behaviour
</body>
</html>

git init                    # once per project

git add .                   # stage what changed
git commit -m "Add contact form validation"   # snapshot it
git log --oneline           # see the history