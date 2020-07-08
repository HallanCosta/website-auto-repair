


window.addEventListener('load', () => {
  const btnAll = document.querySelector('button#btn-all');
  const btnFirst = document.querySelector('button#btn-first');
  const btnSecond = document.querySelector('button#btn-second');
  const btnThird = document.querySelector('button#btn-third');
  const ulListPrice = document.querySelector('ul#list-price');


  const handleActivationButton = {

    all: () => {
      btnAll.style.background = '#ea202e';
      btnAll.style.border = '1px solid #ea202e';

      btnFirst.style.background = '#4c4e50';
      btnFirst.style.border = '1px solid #fff';
      btnSecond.style.background = '#4c4e50';
      btnSecond.style.border = '1px solid #fff';
      btnThird.style.background = '#4c4e50';
      btnThird.style.border = '1px solid #fff';
    
      document.querySelector('div.container-price').style.height = '120vh';
    },
    first: () => {
      btnFirst.style.background = '#ea202e';
      btnFirst.style.border = '1px solid #ea202e'; 
    
      btnAll.style.background = '#4c4e50';
      btnAll.style.border = '1px solid #fff';
      btnSecond.style.background = '#4c4e50';
      btnSecond.style.border = '1px solid #fff';
      btnThird.style.background = '#4c4e50';
      btnThird.style.border = '1px solid #fff';

      document.querySelector('div.container-price').style.height = '100vh';
    },
    second: () => {
      btnSecond.style.background = '#ea202e';
      btnSecond.style.border = '1px solid #ea202e';
      
      btnAll.style.background = '#4c4e50';
      btnAll.style.border = '1px solid #fff';
      btnFirst.style.background = '#4c4e50';
      btnFirst.style.border = '1px solid #fff';
      btnThird.style.background = '#4c4e50';
      btnThird.style.border = '1px solid #fff';
      
      document.querySelector('div.container-price').style.height = '100vh';
    },
    third: () => {
      btnThird.style.background = '#ea202e';
      btnThird.style.border = '1px solid #ea202e';
    
      btnAll.style.background = '#4c4e50';
      btnAll.style.border = '1px solid #fff';
      btnFirst.style.background = '#4c4e50';
      btnFirst.style.border = '1px solid #fff';
      btnSecond.style.background = '#4c4e50';
      btnSecond.style.border = '1px solid #fff';
    
      document.querySelector('div.container-price').style.height = '100vh';
    }

  }

  handleActivationButton.all(btnAll);

  btnAll.addEventListener('click', () => {
    handleActivationButton.all(btnAll);
    handleCleanUl();
    handleAllCategory();
  });

  btnFirst.addEventListener('click', () => {
    handleActivationButton.first(btnFirst);
    handleCleanUl();
    handleFirstCategory();
  });

  btnSecond.addEventListener('click', () => {
    handleActivationButton.second(btnSecond);
    handleCleanUl();
    handleSecondCategory();
  });

  btnThird.addEventListener('click', () => {
    handleActivationButton.third(btnThird);
    handleCleanUl();
    handleThirdCategory();
  });









  function createItem(title, value, appointment='MAKE AN APPOINTMENT') {

    const ul = document.querySelector('ul#list-price');
    
    const li = document.createElement('li');
    const divItem = document.createElement('div');
    const aTitle = document.createElement('a');
    const aValue = document.createElement('a');
    const aAppointment = document.createElement('a');

    const textTitle = document.createTextNode(title);
    const textValue = document.createTextNode(value);
    const textAppointment = document.createTextNode(appointment);

    divItem.className = 'list-price-item';
    aTitle.className = 'list-price-title';
    aValue.className = 'list-price-value';
    aAppointment.className = 'list-price-appointment';

    aTitle.appendChild(textTitle);
    aValue.appendChild(textValue);
    aAppointment.appendChild(textAppointment);
    
    divItem.appendChild(aTitle);
    divItem.appendChild(aValue);
    divItem.appendChild(aAppointment);

    li.appendChild(divItem);
    ul.appendChild(li);
  }

  function handleCleanUl() {
    const ul = document.querySelector('ul#list-price')
    ul.innerHTML = '';
  }

  function handleAllCategory() {
    ulListPrice.classList.remove('fadeOut', 'fadeIn');
    ulListPrice.classList.toggle('fadeOut');

    setTimeout(() => {
      ulListPrice.classList.toggle('fadeIn');

      prices.map(({ title, value, appointment }) => {
        createItem(title, `$${value}`, appointment);
      });
    }, 800);
  }

  function handleFirstCategory() {
    ulListPrice.classList.remove('fadeOut', 'fadeIn');
    ulListPrice.classList.toggle('fadeOut');

    setTimeout(() => {
      ulListPrice.classList.toggle('fadeIn');
    
      prices.map(({ title, value, appointment }) => {
        if (value >= 100)
          createItem(title, `$${value}`, appointment);
      });

    }, 800);
  }

  function handleSecondCategory() {
    ulListPrice.classList.remove('fadeOut', 'fadeIn');
    ulListPrice.classList.toggle('fadeOut');

    setTimeout(() => {
      ulListPrice.classList.toggle('fadeIn');

      prices.map(({ title, value, appointment }) => {
        if (value >= 50 && value < 100)
          createItem(title, `$${value}`, appointment);
      });
    }, 800);
  }

  function handleThirdCategory() {
    ulListPrice.classList.remove('fadeOut', 'fadeIn');
    ulListPrice.classList.toggle('fadeOut');

    setTimeout(() => {
      ulListPrice.classList.toggle('fadeIn');

      prices.map(({ title, value, appointment }) => {
        if (value <= 50)
          createItem(title, `$${value}`, appointment);
      });
    }, 800);
  }


})