// Discounted Products Swiper title slice
const discountedProducts = document.querySelectorAll(".discounted");

discountedProducts.forEach((product) => {
  for (let i = 0; i < product.childElementCount; i++) {
    if (product.children[i].className === "body") {
      const title = product.children[i].children[0].textContent;
      product.children[i].children[0].innerHTML = title.slice(0, 65) + "...";
    }
  }
});

const products = document.querySelectorAll(".product-box");

products.forEach((product, productIndex) => {
  for (let i = 0; i < product.childElementCount; i++) {
    if (product.children[i].className === "body") {
      const body = product.children[i];

      // Product Title slice
      const title = product.children[i].children[0].textContent;
      product.children[i].children[0].innerHTML = title.slice(0, 65) + "...";

      // Ordering & Count box increase & decrease
      body.childNodes.forEach((child) => {
        const allCountBoxes = document.querySelectorAll(".count-box");

        if (child.className === "order-btn") {
          child.addEventListener("click", (e) => {
            e.preventDefault();
            child.style = "display: none";

            allCountBoxes[productIndex].classList.add("show");
          });
        }

        if (child.className === "count-box") {
          child.childNodes.forEach((countBoxChild) => {
            const input = child.childNodes[3];

            if (countBoxChild.className === "count-increaser") {
              countBoxChild.addEventListener("click", (e) => {
                e.stopPropagation();
                let currentAmount = Number.parseInt(input.value);

                if (currentAmount < 99) currentAmount++;
                input.value = currentAmount;
              });
            }

            if (countBoxChild.className === "count-decreaser") {
              countBoxChild.addEventListener("click", (e) => {
                e.stopPropagation();
                let currentAmount = Number.parseInt(input.value);
                if (currentAmount > 1) currentAmount--;
                input.value = currentAmount;
              });
            }
          });
        }
      });
    }

    if (product.children[i].className === "favourite-btn") {
      product.children[i].addEventListener("click", (e) => {
        e.stopPropagation();
        e.target.className = "fa-solid fa-heart";
        e.target.style.color = "red";
      });
    }
  }
});
