

function cheesify() {
  document.querySelectorAll('img').forEach( (img) => {
    img.src = 'https://img.freepik.com/free-photo/delicious-pieces-cheese_144627-43352.jpg?t=st=1724614215~exp=1724617815~hmac=8135027ab18782c8d32f9d712d9c47c1742c89b8385ddf1fc8b51b36d727de6e&w=826';
    img.srcset = img.src;
  })
}

// TODO: Write a function to listen for messages on the content page using chrome.runtime.onMessage
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.action === 'cheesify') cheesify();
  }
);