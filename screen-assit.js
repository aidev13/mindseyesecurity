let size = document.getElementById("size");

function updateSize() {
  size.innerHTML =
    "<p id='sa_title'>Width: " +
    window.innerWidth +
    ", Height: " +
    window.innerHeight +
    " || " +
    "</p>";
}

updateSize();

window.addEventListener("resize", updateSize);

let elName = document.getElementById("getName");

window.addEventListener("mouseover", (e) => {
  const tagName = e.target.tagName.toLowerCase();
  const id = e.target.id ? `#${e.target.id}` : "";
  const className = e.target.className
    ? `.${e.target.className.split(" ").join(".")}`
    : "";
  elName.innerText = `Hovered Element: ${tagName}${id}${className}`;

  // Add border when element is hovered
  if (e.target.id === "draggable" || e.target.id === "size" || e.target.id === "getName" || e.target.id === 'sa_title') {
    e.target.classList.add(null);
  } else e.target.classList.add("hovered-element");
});

window.addEventListener("mouseout", (e) => {
  // Remove border when mouse leaves the element
  e.target.classList.remove("hovered-element");
});

// Make it draggable
const draggable = document.getElementById("draggable");

let offsetX = 0;
let offsetY = 0;
let isDragging = false;

draggable.addEventListener("mousedown", (event) => {
  // Calculate the offset from the element's position
  offsetX = event.clientX - draggable.getBoundingClientRect().left;
  offsetY = event.clientY - draggable.getBoundingClientRect().top;
  isDragging = true;

  // Change cursor style for dragging
  draggable.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (event) => {
  if (isDragging) {
    // Prevent default behavior to avoid text selection
    event.preventDefault();

    // Calculate new position
    const left = event.clientX - offsetX;
    const top = event.clientY - offsetY;

    // Set new position
    draggable.style.left = `${left}px`;
    draggable.style.top = `${top}px`;
  }
});

document.addEventListener("mouseup", () => {
  if (isDragging) {
    isDragging = false;

    // Reset cursor style
    draggable.style.cursor = "grab";
  }
});
