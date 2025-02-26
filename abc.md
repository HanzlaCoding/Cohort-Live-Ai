# Tailwind CSS Grid Guide

## 📌 Enable Grid Layout
```html
<div class="grid">
  <!-- Grid Items -->
</div>
```

## 🔹 Define Columns
```html
<div class="grid grid-cols-3 gap-4">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

## 🔹 Define Rows
```html
<div class="grid grid-rows-3 gap-2">
  <div>Row 1</div>
  <div>Row 2</div>
  <div>Row 3</div>
</div>
```

## 🔹 Spacing Between Items
```html
<div class="grid grid-cols-2 gap-6">
  <div>A</div>
  <div>B</div>
</div>
```

## 🔹 Item Sizing
```html
<div class="grid grid-cols-3 gap-2">
  <div class="col-span-2">Spans 2 columns</div>
  <div class="row-span-2">Spans 2 rows</div>
</div>
```

## 🔹 Alignment
```html
<div class="grid grid-cols-3 justify-items-center">
  <div>A</div>
  <div>B</div>
  <div>C</div>
</div>
```

## 🔹 Responsive Grid
```html
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</div>