const store = (function(){
  let info = {
    list: [],
    formOpen: false
  }

  function getForm(){
    return info.formOpen;
  }
  function toggleForm(){
    info.formOpen = !info.formOpen;
  }
  function newItem(name, url, desc, rating){
    info.list.push({
      name,
      url,
      desc,
      rating,
      expanded: false
    });
    console.log(getDom());
    $('.entries').html(getDom());
  }
  function getDom(){
    return info.list.map((item) => createDomElement(item));
  }

  return {
    getForm,
    toggleForm,
    newItem,
    getDom
  }
}());

function createDomElement(item){
  if (item.expanded)
    return `<div class = "entry">
    <h1>${item.name}</h1>
    <p>${item.rating}</p>
    <p>${item.desc}</p>
    <p><a href = "${item.url}">Visit site</a></p>
    </div>`;
  else 
    return `<div class = "entry">
    <h1>${item.name}</h1>
    <p>${item.rating}</p>
    </div>`;
}