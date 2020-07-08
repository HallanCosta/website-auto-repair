
window.addEventListener('load', () => {
  btnIntagram = document.querySelector('a#btn-instagram');
  btnEmail = document.querySelector('a#btn-email');
  btnLocation = document.querySelector('a#btn-location');

  btnIntagram.addEventListener('click', () => {
    alert('Intagram: AutoRepair.ofical');
  });

  btnEmail.addEventListener('click', () => {
    alert('Email: AutoRepair@ofical.com');
  });
  btnLocation.addEventListener('click', () => {
    const location = {
      address: "Rua vila grande, 438",
      uf: "SP",
      city: "Araçatuba",
    }

    alert(`${location.city}, ${location.uf} \n${location.address}`);
  });

});