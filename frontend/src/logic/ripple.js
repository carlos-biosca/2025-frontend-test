const createRippleEffect = event => {
  const button = event.currentTarget;

  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 4;
  const y = event.clientY - rect.top - size / 4;

  const ripple = document.createElement('span');
  ripple.className = 'ripple__effect';
  ripple.style.width = ripple.style.height = `${size / 2}px`;
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;

  button.appendChild(ripple);

  ripple.addEventListener('animationend', () => {
    ripple.remove();
  });
};

export default createRippleEffect;
