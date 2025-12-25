(function () {
  const allowed = "bartapince.wineshop.hu";

  if (location.hostname !== allowed) {
    alert("Illegal use detected. Brand infringement logged.");
    return; // jangan redirect, cukup stop
  }

  document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
    alert('100$ dulu bang');
  });

  document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.key === 'u') {
      event.preventDefault();
      alert('Weeet weeet weeet Mo ngapain bg?');
    }
  });

  setInterval(function () {
    const threshold = 160;
    const widthThreshold = window.outerWidth - window.innerWidth > threshold;
    const heightThreshold = window.outerHeight - window.innerHeight > threshold;

    if (widthThreshold || heightThreshold) {
      alert('Masing-masing aja yaa bang.');
      window.location.reload();
    }
  }, 1000);
})();
