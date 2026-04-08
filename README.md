# Task List App

A simple to-do list app built with HTML, CSS, and JavaScript.

---

## How it works

The project has three files that each do a different job:

### [index.html](index.html)

This is the structure of the page — what the browser reads first. It contains:

- A text `<input>` where the user types a new task
- A `<button>` labelled "Add"
- An empty `<ul>` (unordered list) where tasks will appear

### [style.css](style.css)

Controls how the page looks — colours, spacing, fonts, etc. Currently empty, so everything uses the browser's default styling.

### [script.js](script.js)

This is the brain. Here's what each part does:

```js
document.addEventListener("DOMContentLoaded", function () { ... });
```

Waits until the HTML has fully loaded before running any JavaScript. This prevents errors caused by trying to find elements that don't exist yet.

```js
const input  = document.querySelector("#taskInput");
const button = document.querySelector("#addBtn");
const list   = document.querySelector("#taskList");
```

Grabs references to the three HTML elements by their `id` so JavaScript can interact with them.

```js
function addTask() {
    const taskText = input.value.trim();
    const li = document.createElement("li");
    li.textContent = taskText;
    list.appendChild(li);
    input.value = "";
}
```

`addTask` is called whenever the user wants to add an item. It:

1. Reads the text from the input box (`.value`) and removes leading/trailing spaces (`.trim()`)
2. Creates a new `<li>` element
3. Sets its text to what the user typed
4. Appends it to the `<ul>` on the page
5. Clears the input box ready for the next task

```js
button.addEventListener("click", addTask);
input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") { addTask(); }
});
```

Listens for two ways to trigger `addTask`: clicking the button, or pressing Enter inside the input.

---

## Ideas to improve the app

These are great practice challenges! Each one is self-contained, so you can do them in any order.

---

### 1 — Click an item to remove it from the list

Right now items stay on the list forever. Make it so clicking a task deletes it.

**Hint:** Each `<li>` is a JavaScript object. Look up how to add a click listener to an element — the same way the button already has one. Then search for a method that removes an element from the page.

---

### 2 — Prevent blank entries

If the user clicks Add without typing anything, a blank item is added. Stop that from happening.

**Hint:** `taskText` is already available at the top of `addTask`. Check its value before doing anything else — if it's empty, the function should stop early without adding anything.

---

### 3 — Add a Reset / Clear All button

Let the user wipe the whole list with one click.

**Hint:** You'll need to add a new button to the HTML and wire it up in JavaScript, just like the Add button was. Then figure out how to empty the `<ul>` — think about what property holds its contents.

---

### 4 — Improve the styling

Open [style.css](style.css) and start experimenting. Think about: fonts, colours, spacing, and how the list items look and feel to interact with. Search for CSS properties as you go — you don't need to know them all upfront.

---

### 5 — Show a count of how many items are on the list

Display something like "3 tasks" that updates automatically as items are added or removed.

**Hint:** You'll need a place in the HTML to display the number, and a way to count how many `<li>` elements are currently in the list. Think about when that count needs to be recalculated — it's more than just when items are added.
