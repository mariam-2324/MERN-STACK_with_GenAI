const btn = document.querySelector('#btn');

btn.addEventListener('mouseover',(e) => {
  const x =(e.pageX - btn.offsetLeft);
  const y =(e.pageY - btn.offsetTop);

  btn.style.setProperty("--xPos", x + "px");
  btn.style.setProperty("--yPos", y + "px");

});































  // remove any existing ripples (optional; helps avoid stacking)
//   const old = btn.querySelector('.ripple');
//   if (old) old.remove();

//   const rect = btn.getBoundingClientRect();

//   const size = Math.max(rect.width, rect.height);
//   const x = e.clientX - rect.left - size / 2;
//   const y = e.clientY - rect.top - size / 2;

//   const ripple = document.createElement('span');
//   ripple.className = 'ripple';
//   ripple.style.width = `${size}px`;
//   ripple.style.height = `${size}px`;
//   ripple.style.left = `${x}px`;
//   ripple.style.top = `${y}px`;

//   btn.appendChild(ripple);

//   // cleanup after animation
//   ripple.addEventListener('animationend', () => ripple.remove());
// });

