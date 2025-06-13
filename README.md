# 🛍️ Product Grid UI with Server-Side Fallback

This is a modern product grid built with **React** (Next.js ready) that:
- Fetches product data from an API server-side
- Falls back to local static data if the API call fails
- Renders beautiful responsive product cards using **Tailwind CSS**

---

## 📁 Project Structure
<pre>
/components
└── ProductGrid.jsx // Server Component for rendering product grid
└── ProductCard.jsx // Individual product card UI
/data
└── products.js // Local fallback product data (used on API failure)
/public
└── ... // Static assets (images etc.)
/README.md // Project overview and usage
</pre>

---
