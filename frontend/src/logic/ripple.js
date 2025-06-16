const createRippleEffect = event => {
  const buttonElement = event.currentTarget;
  const rippleX = event.clientX - buttonElement.offsetLeft;
  const rippleY = event.clientY - buttonElement.offsetTop;
  const rippleElement = document.createElement("span");

  rippleElement.className = "ripple__effect";
  rippleElement.style.left = `${rippleX}px`;
  rippleElement.style.top = `${rippleY}px`;

  buttonElement.appendChild(rippleElement);

  setTimeout(() => {
    rippleElement.remove();
  }, 1000);
};

export default createRippleEffect;
