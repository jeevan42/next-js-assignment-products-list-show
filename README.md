# 🛍️ Product Grid UI with Server-Side Fallback

This is a modern product grid built with **React** (Next.js ready) that:
- Fetches product data from an API server-side
- Falls back to local static data if the API call fails
- Renders beautiful responsive product cards using **Tailwind CSS**

---

## 📁 Project Structure
<pre>
Directory structure:
└── root
    ├── README.md
    ├── eslint.config.mjs
    ├── jsconfig.json
    ├── next.config.mjs
    ├── package.json
    ├── postcss.config.mjs
    ├── public/
    └── src/
        ├── app/
        │   ├── globals.css
        │   ├── layout.js
        │   └── page.js
        ├── components/
        │   ├── Header.jsx
        │   ├── ProductCard.jsx
        │   └── ProductGrid.jsx
        └── data/
            └── products.js
</pre>
---

## 🚀 Features

- ✅ Server-side rendering (no `use client`)
- ✅ API fetch with graceful fallback
- ✅ Responsive layout (1-4 columns based on screen size)
- ✅ Clean, modular code structure

---
