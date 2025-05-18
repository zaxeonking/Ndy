const buttons = document.querySelectorAll('.copy-button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const account = button.getAttribute('data-account');
    navigator.clipboard.writeText(account).then(() => {
      button.textContent = 'Copied!';
      setTimeout(() => button.textContent = 'Copy', 1000);
    });
  });
});

function toggleQRIS() {
  const qrisImg = document.getElementById('qrisImage');
  qrisImg.style.display = qrisImg.style.display === 'block' ? 'none' : 'block';
}
