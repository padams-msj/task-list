# Task List App

A simple to-do list app built with HTML, CSS, and JavaScript. Great for beginners!

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

**Hint:** Inside `addTask`, after you create `li`, add a click listener to it:
```js
li.addEventListener("click", function () {
    li.remove();
});
```
`remove()` deletes an element from the page entirely.

---

### 2 — Prevent blank entries

If the user clicks Add without typing anything, a blank item is added. Stop that from happening.

**Hint:** At the top of `addTask`, check whether `taskText` is empty and return early if it is:
```js
if (taskText === "") return;
```
`return` stops the function from running any further.

---

### 3 — Add a Reset / Clear All button

Let the user wipe the whole list with one click.

**Hint:** Add a new button in `index.html`:
```html
<button id="clearBtn">Clear All</button>
```
Then in `script.js`, grab it and listen for clicks:
```js
const clearBtn = document.querySelector("#clearBtn");
clearBtn.addEventListener("click", function () {
    list.innerHTML = "";
});
```
Setting `innerHTML` to an empty string removes all child elements (every `<li>`) at once.

---

### 4 — Improve the styling

Open [style.css](style.css) and start adding rules. Some ideas to try:
- `font-family` on `body` to change the font
- `background-color` on `.container` to add a card effect
- `padding` and `border-radius` to give elements breathing room
- `cursor: pointer` on `li` to show the pointer cursor when hovering over items (useful once you add challenge 1)
- `list-style: none` on `ul` to remove the bullet points

---

### 5 — Show a count of how many items are on the list

Display something like "3 tasks" that updates automatically as items are added or removed.

**Hint:** Add an element in `index.html` to hold the count:
```html
<p id="taskCount">0 tasks</p>
```
Then write a helper function in `script.js` and call it every time the list changes:
```js
function updateCount() {
    const count = list.querySelectorAll("li").length;
    document.querySelector("#taskCount").textContent = count + " tasks";
}
```
Call `updateCount()` at the end of `addTask`, and again inside the clear/remove handlers so the number stays accurate.
