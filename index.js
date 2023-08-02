// Our Services

const tab = document.querySelectorAll(".iteam-list");
const text = document.querySelectorAll(".inform-servis");

tab.forEach(element => {
  element.addEventListener("click", () => {
    let currentBtn = element;
    let tabId = currentBtn.getAttribute("data-text");
    let currentTab = document.querySelector(tabId);
    currentBtn.getAttribute("data-text");
    tab.forEach(element => {
      element.classList.remove("iteam-list-active");
    });
    text.forEach(element => {
      element.classList.remove("inform-servis-active");
    });
    currentBtn.classList.add("iteam-list-active");
    currentTab.classList.add("inform-servis-active");
  });
});

// Our Amazing Work

const tabFoto = document.querySelectorAll(".ofer-list-btn");
const fotoActive = document.querySelectorAll(".list");

for (let btnTab of tabFoto) {
  btnTab.addEventListener("click", event => {
    tabFoto.forEach(element => {
      element.classList.remove("active");
    });
    event.target.classList.add("active");
    for (let foto of fotoActive) {
      foto.classList.remove("active");
      if (event.target.dataset.tab === foto.dataset.fotoAll) {
        foto.classList.add("active");
      } else if (event.target.dataset.tab === foto.dataset.fotoOne) {
        foto.classList.add("active");
      } else if (event.target.dataset.tab === foto.dataset.fotoTwo) {
        foto.classList.add("active");
      } else if (event.target.dataset.tab === foto.dataset.fotoThree) {
        foto.classList.add("active");
      } else if (event.target.dataset.tab === foto.dataset.fotoFour) {
        foto.classList.add("active");
      }
    }
  });
}

// Our Amazing Work

const addBtn = document.querySelector(".btn-add");
const addFoto = document.querySelectorAll(".list-add");
const load = document.querySelector(".lds-roller");
const tabFotoAdd = document.querySelectorAll(".ofer-list-btn");

addBtn.addEventListener("click", () => {
  load.classList.add("active");
  addBtn.style.display = "none";
  setTimeout(() => {
    addFoto.forEach(element => {
      element.classList.add("active");
    });
    load.classList.remove("active");
  }, 3000);
  for (let newTab of tabFotoAdd) {
    newTab.addEventListener("click", event => {
      tabFotoAdd.forEach(element => {
        element.classList.remove("active");
      });
      event.target.classList.add("active");
      for (let newFoto of addFoto) {
        newFoto.classList.remove("active");
        if (event.target.dataset.tab === newFoto.dataset.fotoAll) {
          newFoto.classList.add("active");
        } else if (event.target.dataset.tab === newFoto.dataset.fotoOne) {
          newFoto.classList.add("active");
        } else if (event.target.dataset.tab === newFoto.dataset.fotoTwo) {
          newFoto.classList.add("active");
        } else if (event.target.dataset.tab === newFoto.dataset.fotoThree) {
          newFoto.classList.add("active");
        } else if (event.target.dataset.tab === newFoto.dataset.fotoFour) {
          newFoto.classList.add("active");
        }
      }
    });
  }
});

// SLIDER

const bigFoto = document.querySelectorAll(".img-foto-big");
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");
const smalFoto = document.querySelectorAll(".img-foto-small");
const imagesArray = Array.from(smalFoto);
const textSlider = document.querySelectorAll(".text-section-people");
const list = document.querySelector(".slider");
rightBtn.addEventListener("click", () => {
  const lastImage = imagesArray.pop();
  imagesArray.unshift(lastImage);
  list.innerHTML = "";
  imagesArray.forEach(image => {
    const listItem = document.createElement("li");
    listItem.appendChild(image);
    list.appendChild(listItem);
    list.appendChild(leftBtn);
    list.appendChild(rightBtn);
    bigFoto.forEach(element => {
      element.classList.remove("active");
      if (element.dataset.big === imagesArray[2].dataset.small) {
        element.classList.add("active");
      }
      image.classList.remove("active");
      if (imagesArray[0].dataset.small === element.dataset.big) {
        imagesArray[2].classList.add("active");
      }
      textSlider.forEach(elem => {
        elem.classList.remove("active");

        if (elem.dataset.text === imagesArray[2].dataset.small) {
          elem.classList.add("active");
        }
      });
    });
  });
});

leftBtn.addEventListener("click", () => {
  bigFoto.forEach(element => {
    element.classList.remove("active");
    if (element.dataset.big === imagesArray[3].dataset.small) {
      element.classList.add("active");
    }
  });
  const firstImage = imagesArray.shift();
  imagesArray.push(firstImage);

  list.innerHTML = "";
  imagesArray.forEach(image => {
    const listItem = document.createElement("li");
    listItem.appendChild(image);
    list.appendChild(listItem);
    list.appendChild(leftBtn);
    list.appendChild(rightBtn);
    bigFoto.forEach(element => {
      element.classList.remove("active");
      if (element.dataset.big === imagesArray[2].dataset.small) {
        element.classList.add("active");
      }
      image.classList.remove("active");
      if (imagesArray[0].dataset.small === element.dataset.big) {
        imagesArray[2].classList.add("active");
      }
      textSlider.forEach(elem => {
        elem.classList.remove("active");

        if (elem.dataset.text === imagesArray[2].dataset.small) {
          elem.classList.add("active");
        }
      });
    });
  });
});

slider.addEventListener("click", event => {
  let parentImg = event.target;
  if (event.target.tagName === "IMG") {
    parentImg = event.target.parentElement;
  }
  if (
    parentImg.tagName === "LI" &&
    !parentImg.classList.contains("left") &&
    !parentImg.classList.contains("right")
  ) {
    smalFoto.forEach(element => {
      element.classList.remove("active");
    });
    parentImg.classList.add("active");
    bigFoto.forEach(element => {
      element.classList.remove("active");
      if (parentImg.dataset.small === element.dataset.big) {
        element.classList.add("active");
      }
    });
    textSlider.forEach(elem => {
      elem.classList.remove("active");

      if (elem.dataset.text === parentImg.dataset.small) {
        elem.classList.add("active");
      }
    });
  }
});
