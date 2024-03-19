const mobileLinks = document.querySelector(".mobile-links");
const hamburgerIcon = document.querySelector(".hamburgerIcon");
const mobileClose = document.querySelector(".mobile-close");
const mainContainer = document.querySelector(".main-container");

hamburgerIcon.addEventListener("click", () => {
  hamburgerIcon.style.display = "none";
  mobileLinks.style.display = "flex";
  mobileClose.style.display = "flex";
  mainContainer.style.opacity = 0.25;
});
mobileClose.addEventListener("click", () => {
  mobileLinks.style.display = "none";
  mobileClose.style.display = "none";
  hamburgerIcon.style.display = "flex";
  mainContainer.style.opacity = 1;
});

// LINKED Button Boxes Logic

let linkBtnBox = document.querySelectorAll(".link-btn__box");
const h1Content = document
  .getElementsByTagName("h1")[0]
  .innerHTML.toLowerCase();

const contentParagraph = document.getElementById("content");
const wikiLinkContent = document.getElementById("wiki-link");
const OverviewContent = document.querySelector(".overview-content").innerHTML;
const internalContent = document.querySelector(".internal-content").innerHTML;
const surfaceContent = document.querySelector(".surface-content").innerHTML;

const planetImg = document.querySelector(".planet-img");
const internalImg = document.querySelector(".internal-img");
const geologyImg = document.querySelector(".geology-img");

linkBtnBox.forEach((box) => {
  box.addEventListener("click", function () {
    linkBtnBox.forEach((link) => {
      link.style.backgroundColor = "#070724";
    });

    this.style.backgroundColor = this.dataset.color;

    switch (this.id) {
      case "button2":
        contentParagraph.innerHTML = internalContent;
        wikiLinkContent.href = `https://en.wikipedia.org/wiki/${h1Content}_(planet)#Internal_structure`;
        internalImg.style.display = "flex";
        planetImg.style.display = "none";
        geologyImg.style.display = "none";

        break;
      case "button3":
        contentParagraph.innerHTML = surfaceContent;
        wikiLinkContent.href = `https://en.wikipedia.org/wiki/${h1Content}_(planet)#Surface_geology  `;
        if (h1Content === "saturn") {
          wikiLinkContent.href =
            " https://en.wikipedia.org/wiki/Saturn#Atmosphere ";
        }
        if (h1Content === "jupiter") {
          wikiLinkContent.href =
            "https://en.wikipedia.org/wiki/Jupiter#Great_Red_Spot_and_other_vortices";
        }
        if (h1Content === "uranus") {
          wikiLinkContent.href =
            " https://en.wikipedia.org/wiki/Uranus#Atmosphere ";
        }
        if (h1Content === "neptune") {
          wikiLinkContent.href =
            "https://en.wikipedia.org/wiki/Neptune#Atmosphere";
        }
        geologyImg.style.display = "flex";
        planetImg.style.display = "flex";
        internalImg.style.display = "none";

        break;
      default:
        contentParagraph.innerHTML = OverviewContent;
        wikiLinkContent.href = `https://en.wikipedia.org/wiki/${h1Content}_(planet)`;
        planetImg.style.display = "flex";
        internalImg.style.display = "none";
        geologyImg.style.display = "none";
    }
  });
});
