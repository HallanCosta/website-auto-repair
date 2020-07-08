window.addEventListener('load', () => {
  const formContactInfo = document.querySelector('form#form-contact-info');

  formContactInfo.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(formContactInfo);
    
    const name = formData.get('name');
    const phone = formData.get('phone');
    const email = formData.get('email');
    const message = formData.get('message');

    if (name == '' || name == null|| name.length < 3) {
      alert('Digite um nome válido');
      return;
    }

    if (phone == '' || phone == null) {
      alert('Digite um número de válido');
      return;
    }

    if (email == '' || email == null  || email.indexOf('@') == -1) {
      alert('Email Inválido!');
      return;
    }

    if (message == '' || message == null) {
      alert('Você deve escrever alguma mensagem.');
      return;
    }

    alert('Email enviado!');
  });


});