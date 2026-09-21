# 📘 The Code Magazine

Welcome to my first web development project! This project started as an HTML-only exercise and has now been enhanced with CSS styling.

## Project Description

The Code Magazine is a clean, semantic HTML layout with CSS styling for improved readability, visual appeal, interactive link states, and a solid understanding of the CSS Box Model, display property, positioning, pseudo-elements, float layouts, box-sizing, and flexbox.

## 🖼️ Project Preview

**Before CSS (HTML only):**
![Code Magazine Before](images/unstyled-code-magazine-preview.png)

**After CSS (Styled):**
![Code Magazine After](images/code-magazine-preview.png)

## Key Features

- **Semantic HTML5 Structure**: Uses `<header>`, `<article>`, `<aside>`, and `<footer>` tags for better accessibility and SEO.
- **Content Organization**: Implemented ordered and unordered lists, and proper heading hierarchy.
- **External & Internal Linking**: Includes navigation between pages and secure external links using `target="_blank"`.
- **Media**: Integrated images with descriptive `alt` tags.
- **CSS Styling**: Added fonts, colors, text transforms, spacing, pseudo-class-based link styling (`:link`, `:visited`, `:hover`, `:active`), and a top border on the body for visual structure.
- **CSS Box Model**: Applied padding, margin, borders, and dimensions to control spacing and layout.
- **CSS Box Sizing**: Applied `box-sizing: border-box;` to ensure consistent width/height calculations across all elements (padding and border are included in the element's total dimensions).
- **CSS Display & Positioning**: Applied block, inline, and inline-block display properties; used normal flow and absolute positioning for layout control.
- **CSS Pseudo-elements**: Used `::first-line`, `::first-letter`, `::before`, and `::after` to style specific parts of elements and insert decorative content.
- **CSS Float Styling**: Applied `float: left;` and `float: right;` with clearfix techniques for wrapping text around images and controlling layout flow.
- **CSS Flexbox**: Applied `display: flex;` for modern one-dimensional layouts; used `flex-grow`, `flex-shrink`, `flex-basis`, `gap`, `align-items`, `align-self`, and `justify-content` to build flexible, responsive component layouts.
- **Chrome DevTools**: Used for inspecting and debugging CSS styles.

## Technologies Used

- HTML5
- CSS3

## What I Learned

- Structuring a magazine-style layout with semantic HTML
- Using CSS for typography, colors, and spacing
- Styling link states with pseudo-classes (`:link`, `:visited`, `:hover`, `:active`)
- Applying borders to elements for visual hierarchy
- Understanding CSS inheritance (body styles inherited by children, but can be overridden)
- Using the universal selector (`*`) for global resets
- **CSS Box Model**:
  - **Content** — the actual text or image inside an element
  - **Border** — the line wrapping around the padding/content
  - **Padding** — space between the content and the border (inside)
  - **Margin** — space outside the border (between elements)
  - **Fill Area** — background color or image covering the element
  - **Height & Width** — setting explicit dimensions for elements
  - **Shorthand Styling** — `margin: 10px 20px;` and `padding: 10px;`
  - **Collapsing Margins** — when vertical margins of adjacent elements combine into one
- **CSS Box Sizing**:
  - `box-sizing: border-box;` — ensures that `width` and `height` include padding and border, making layout calculations predictable and consistent
  - Prevents elements from overflowing containers when padding or border is added
  - Applied via universal reset (`* { box-sizing: border-box; }`) for global consistency
- **CSS Display Property**:
  - **Block-level boxes** — take full width, stack vertically (`<div>`, `<h1>`, `<p>`)
  - **Inline boxes** — only take needed width, sit next to each other (`<span>`, `<a>`)
  - **Inline-block boxes** — like inline but can have width/height/margin/padding
  - `display: block;` `display: inline;` `display: inline-block;`
- **CSS Positioning**:
  - **Normal Flow** — default layout where elements stack based on display type
  - **Absolute Positioning** — removes element from normal flow; positions relative to nearest positioned ancestor
  - **Position Property** — `static` (default), `relative`, `absolute`, `fixed`
  - **Offset Properties** — `top`, `right`, `bottom`, `left`
- **CSS Pseudo-elements**:
  - `::first-line` — styles the first line of a block of text
  - `::first-letter` — styles the first letter of a block of text
  - `::before` — inserts content before an element's content (using `content` property)
  - `::after` — inserts content after an element's content (using `content` property)
  - Adjacent pseudo-elements — using multiple pseudo-elements on the same selector
  - Double colon syntax (`::`) distinguishes pseudo-elements from pseudo-classes (`:`)
- **CSS Float Styling**:
  - `float: left;` and `float: right;` — pushing elements to the left or right
  - `clear: left;`, `clear: right;`, `clear: both;` — stopping elements from wrapping around floats
  - Parent collapse problem — what happens when a parent contains only floated children
  - Clearfix hack — using `::after` with `clear: both` to fix parent collapse
  - `display: flow-root;` — modern way to fix parent collapse
  - Use cases: wrapping text around images, drop caps, old-school layouts
- **CSS Flexbox**:
  - `display: flex;` — turns an element into a flex container, enabling flexible layout of its children
  - `flex-grow` — how much a flex item grows to fill available space
  - `flex-shrink` — how much a flex item shrinks when space is tight
  - `flex-basis` — the initial size of a flex item before growing/shrinking
  - `gap` — space between flex items
  - `align-items` — aligns items along the cross axis (`stretch`, `center`, `flex-start`, `flex-end`)
  - `align-self` — overrides `align-items` for a single flex item
  - `justify-content` — aligns items along the main axis (`center`, `flex-start`, `flex-end`, `space-between`, `space-around`)

## Project Status

✅ HTML structure complete  
✅ CSS styling added (fonts, colors, typography, link states, body border)  
✅ CSS Box Model applied (padding, margin, borders, dimensions)  
✅ CSS Box Sizing (`border-box`) applied  
✅ CSS Display & Positioning applied  
✅ CSS Pseudo-elements applied  
✅ CSS Float Styling applied  
✅ CSS Flexbox applied (flex-grow, flex-shrink, flex-basis, gap, alignment)  
⏳ Responsive design (coming soon)  
⏳ JavaScript interactivity (future)

## How to View

To view this project on your computer:

1. Download or clone this repository
2. Navigate to the `code-magazine/` folder
3. Double-click `index.html` — it will open in your browser

No special software or commands needed — just double-click and go!