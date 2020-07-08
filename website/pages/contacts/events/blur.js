

window.addEventListener('load', () => {

  /*Blur*/
  const inputName = document.querySelector('input#name');
  const inputPhone = document.querySelector('input#phone');
  const inputEmail = document.querySelector('input#email');
  const textAreaMessage = document.querySelector('textarea#message');

  const spanErros = document.querySelector('span#errors');

  

  inputName.addEventListener('blur', () => {
    if (inputName.value === '') {

      handleStyleErrorData({
        field: {element: inputName},
        messageError: {text: 'Digite um nome válido'}
      });
      
    } else {
      handleStyleCorrectData({
        field: {element: inputName}
      });
    }

  });

  inputPhone.addEventListener('blur', () => {
    if (inputPhone.value === '') {
      handleStyleErrorData({
        field: {element: inputPhone},
        messageError: {text: 'Digite um telefone válido'}
      });
    } else {
      handleStyleCorrectData({
        field: {element: inputPhone}
      });
    }

    if (inputPhone.value.length == 11) {

      const regex = /(^\d{2})(\d{5})(\d{4})/g;
      const phoneFormated = inputPhone.value.replace(regex, '($1) $2-$3');

      console.log(phoneFormated);
      inputPhone.value = phoneFormated;
    }

  });

  inputEmail.addEventListener('blur', () => {
    if (inputEmail.value.indexOf('@') === -1) {
      handleStyleErrorData({
        field: {element: inputEmail},
        messageError: {text: 'Digite um email válido'}
      });
    } else {
      handleStyleCorrectData({
        field: {element: inputEmail}
      });
    }
  });

  textAreaMessage.addEventListener('blur', () => {
    if (textAreaMessage.value == "") {
      handleStyleErrorData({
        field: {element: textAreaMessage},
        messageError: {text: 'Campo message não pode estar vazio'}
      });
    } else {
      handleStyleCorrectData({
        field: {element: textAreaMessage}
      });
    }
  });




  /*Functions*/
  function handleStyleErrorData(data) {

    const object = {
      field: {
        element: data.field.element,
        border: '1px solid #ea202e',
        boxShadow: '0 0 5px red',
      },
      messageError: {
        text: data.messageError.text,
        fontSize: '25px',
        color: '#ea202e',
      }
    };

    object.field.element.style.border = object.field.border;
    object.field.element.style["boxShadow"] = object.field.boxShadow;

    spanErros.innerHTML = `${object.messageError.text}`;
    spanErros.style.fontSize = object.messageError.fontSize;
    spanErros.style.color = object.messageError.color;
  }

  function handleStyleCorrectData(data) {

    const object = {
      field: {
        element: data.field.element,
        border: '1px solid #77dd77',
        boxShadow: '0 0 5px #77dd77',
      }
    };

    spanErros.innerHTML = '';
    inputName.style.border = object.field.border;
    inputName.style["boxShadow"] = object.field.boxShadow;
  }



})