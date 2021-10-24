const getAllDropdowns = [...document.getElementsByClassName('black-awsome-dropdown')];
getAllDropdowns.forEach((item) => {
  const divs = item.getElementsByTagName('div');
  divs[0].addEventListener('click', () => {
    item.classList.toggle('clicked');
  });
  const unorderedList = [...divs[1].getElementsByTagName('ul')];
  if (divs[1].offsetWidth > divs[0].offsetWidth) { divs[0].style.minWidth = `${item.offsetWidth + 60}px`; }
  const options = [...unorderedList[0].getElementsByTagName('li')];
  options.forEach((opt) => {
    opt.addEventListener('click', () => {
      const value = opt.textContent;
      item.dispatchEvent(new Event('change'));
      item.setAttribute('value', value);
      item.classList.toggle('clicked');
      const optionSpan = divs[0].getElementsByTagName('span')[0];
      optionSpan.textContent = value;
    });
  });
});
