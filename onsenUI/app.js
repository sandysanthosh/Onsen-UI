window.fn = {};

window.fn.open = function() {
  var menu = document.getElementById('menu');
  menu.open();
};

window.fn.load = function(page) {
  var content = document.getElementById('content');
  var menu = document.getElementById('menu');
  content.load(page)
    .then(menu.close.bind(menu));
};


var db = null;

function onError(tx,e)
{
    alert("something went wrong" + e.message);
}
function onSuccess(tx, r)
{
    
}

function openDB(
{
    
}