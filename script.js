document.querySelectorAll('.ripple').forEach(button => {
  button.addEventListener('click', function (e) {
    const ripple = document.createElement('span');
    ripple.classList.add('ripple-effect');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    const oldRipples = button.querySelectorAll('.ripple-effect');
    oldRipples.forEach(oldRipple => {
      if (oldRipple.parentNode === button) {
        button.removeChild(oldRipple);
      }
    });
    button.appendChild(ripple);
    setTimeout(() => {
      if (ripple.parentNode === button) {
        button.removeChild(ripple);
      }
    }, 600);
  });
});
