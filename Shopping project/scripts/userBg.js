export let userBg = {
  selectedBg: 'bg-white',
  load: function () {
    const loadingColor = localStorage.getItem('yourBg');
    if (loadingColor !== undefined || loadingColor !== null)
      userBg.selectedBg = loadingColor;
  },
  save: function () {
    localStorage.setItem('yourBg', userBg.selectedBg);
  },
  set: function (activeColor) {
    userBg.selectedBg = 'bg-' + activeColor + '-200';
  }
};
