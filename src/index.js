const getAllDropdowns = [...document.getElementsByClassName("awsome-dropdown")];
getAllDropdowns.forEach((item) => {
  const divs = item.getElementsByTagName("div");
  divs[0].addEventListener("click", () => {
    item.classList.toggle("clicked");
  });
  const unorderedList = [...divs[1].getElementsByTagName("ul")];
  if (divs[1].offsetWidth + 50 > divs[0].offsetWidth) {
    divs[0].style.minWidth = `${divs[1].offsetWidth}px`;
  }
  // divs[0].style.width = divs[0].style.minWidth;
  const options = [...unorderedList[0].getElementsByTagName("li")];
  options.forEach((opt) => {
    opt.addEventListener("click", () => {
      const value = opt.textContent;
      item.setAttribute("value", value);
      item.classList.toggle("clicked");
      const optionSpan = divs[0].getElementsByTagName("span")[0];
      optionSpan.textContent = value;
      item.dispatchEvent(new Event("change"));
    });
  });

  // SPECIFIC STUFF

  // DISCO
  // if (item.className.includes("disco")) {
  //   const RainBowColors = [
  //     "violet",
  //     "indigo",
  //     "blue",
  //     "green",
  //     "yellow",
  //     "orange",
  //     "red",
  //   ];
  //   options.forEach((o) => {
  //     const currentOption = o;
  //     currentOption.style.background =
  //       RainBowColors[parseInt(Math.random() * 6, 10) + 1];
  //     currentOption.style.color = "black";
  //     // o.setAttribute("style", `background: ${getRandomColor()} ;`);
  //   });
  // }
});
