
 $(function(){
  eventHandlers.showForm();
  eventHandlers.formSubmit();
  $('.entries').html(store.getDom());
 });