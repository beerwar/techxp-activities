<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First Page</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <!-- everything the visitor sees goes here -->
</body>
</html>



css

/* Make width include padding + border — saves endless headaches */
* { box-sizing: border-box; }

.card {
  padding: 16px;            /* space INSIDE the border */
  border: 1px solid #ccc;
  margin: 16px;             /* space OUTSIDE the border */
}

.navbar {
  display: flex;
  justify-content: space-between;  /* logo left, links right */
  align-items: center;          /* vertically centred */
  gap: 1rem;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);  /* 3 equal columns */
  gap: 1rem;
}

mobile-first responsive gallery

/* BASE: phones — one column */
.gallery { display: grid; grid-template-columns: 1fr; gap: 1rem; }

/* TABLET and up (≥768px) — three columns */
@media (min-width: 768px) {
  .gallery { grid-template-columns: repeat(3, 1fr); }
}

css — variables + fluid sizing

:root { --brand: #0d6efd; }        /* a reusable variable */
.btn { background: var(--brand); }

h1 { font-size: clamp(1.5rem, 5vw, 3rem); } /* fluid, min–ideal–max */