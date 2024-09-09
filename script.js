(function () {
  document.addEventListener("DOMContentLoaded", () => {
    console.log('DOM fully loaded and parsed');
    window.variationID = '1004241571';
    console.log('variationID set to:', window.variationID);

    document.querySelectorAll('.emailInput')?.forEach((ele) => {
      ele.style.display = 'none';
    });
  });
})();
