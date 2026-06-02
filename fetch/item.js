window.addEventListener("load", () => {
  fetch("items.json")
    .then((response) => response.json())
    .then((data) => {
      const itemContainer = document.querySelector("#items");

      data.forEach((item) => {
        const itemElement = document.createElement("div");

        itemElement.innerHTML = `
          <img src="${item.image}" alt="${item.title}">
          <h3>${item.title}</h3>
        `;

        itemContainer.appendChild(itemElement);
        itemElement.addEventListener("click", () => {
          showDetail(item);
        });
      });
    })
    .catch((error) => {
      console.log(error);
    });
  function showDetail(item) {
    // console.log(item)
    const detailContainer = document.querySelector("#detail");
    detailContainer.innerHTML = `<img src="${item.image}" alt="${item.title}">
            <h2>${item.title}</h2>
            <p>${item.description}</p>
    `;
  }
});
