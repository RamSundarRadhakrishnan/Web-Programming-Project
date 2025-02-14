let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

let slideIndexNonVeg = 1;
showSlidesnonVeg(slideIndexNonVeg);

// Next/previous controls for non-veg carousel
function plusSlidesnonVeg(n) {
  showSlidesnonVeg(slideIndexNonVeg += n);
}

// Thumbnail image controls for non-veg carousel
function currentSlidenonVeg(n) {
  showSlidesnonVeg(slideIndexNonVeg = n);
}

function showSlidesnonVeg(n) {
  let i;
  // Get all slides with class "mySlidesnonVeg"
  let slides = document.getElementsByClassName("mySlidesnonVeg");
  // Get all dots (if these dots are unique to this carousel, 
  // consider giving them a unique class such as "dotNonVeg")
  let dots = document.getElementsByClassName("dot");
  
  if (n > slides.length) { 
    slideIndexNonVeg = 1;
  }
  if (n < 1) { 
    slideIndexNonVeg = slides.length;
  }
  
  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  // Remove "active" class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  // Display the current slide and add "active" class to its corresponding dot
  slides[slideIndexNonVeg-1].style.display = "block";
  dots[slideIndexNonVeg-1].className += " active";
}
// Global cart array
let shoppingCart = [];

// Function to add an item to the cart
function addToCart(itemData) {
  // Check if the item already exists in the cart
  const existingItem = shoppingCart.find(item => item.id === itemData.id);
  
  if (existingItem) {
    // Increase quantity if item exists
    existingItem.quantity++;
    alert(itemData.name + " quantity updated to " + existingItem.quantity + ".");
  } else {
    // Otherwise, add the item with quantity 1
    shoppingCart.push({ ...itemData, quantity: 1 });
    alert(itemData.name + " added to cart.");
  }
  
}

// Attach event listeners to all Add-to-Cart buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', function() {
    // Retrieve data from the button's data attributes
    const id = this.dataset.id;
    const name = this.dataset.name;
    const price = parseFloat(this.dataset.price);
    
    // Create an object for the item
    const itemData = { id, name, price };
    
    // Add the item to the cart
    addToCart(itemData);
  });
});

// Add event listener for the Order button
document.getElementById('order-button').addEventListener('click', function() {
  if (shoppingCart.length === 0) {
    alert("Your cart is empty.");
  } else {
    // Build a summary message for the cart
    let message = "Items in your cart:\n";
    let totalCost = 0;
    shoppingCart.forEach(item => {
      const itemCost = item.price * item.quantity;
      totalCost+=itemCost;
      message += `${item.name} (Quantity: ${item.quantity})\n`;
      message += `Total Cost: Rs`+ totalCost + `\n`;
    });
    alert(message);
  }
});