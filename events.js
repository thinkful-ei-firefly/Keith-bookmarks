const eventHandlers = (function(){
  function showForm(){
    $('#foot').submit(function(event){
      event.preventDefault();
      openForm();
    });
  }
  function formSubmit(){
    $('#newItem').submit(function(event){
      event.preventDefault();
      collectItem();
      closeForm();
      console.log('ree');
    });
  }

  return{
    showForm,
    formSubmit
  }
}());

function closeForm(){
  $('#newItem').toggleClass('hidden', true);
  $('#foot').toggleClass('hidden', false);
  $('.entries').toggleClass('hidden', false);
  store.toggleForm();
}

function openForm(){
  /**
   * get form and toggle class hidden off
   */
  $('#newItem').toggleClass('hidden', false);
  $('#foot').toggleClass('hidden', true);
  $('.entries').toggleClass('hidden', true);
  store.toggleForm();
}

function collectItem(){
  const name = $('.js-name').val();
  const url = $('.js-url').val();
  const desc = $('.js-desc').val();
  const rate = $('.js-rate').val();
  store.newItem(name, url, desc, rate);
}