;

function $(obj) {
  return document.getElementById(obj);
}


document.body.addEventListener("keydown", function (e) { console.log(e.bubbles, e.cancelable, e.key, e.char, e.keyCode) });

document.body.addEventListener("keyup", function (e) { console.log(e.bubbles, e.cancelable, e.key, e.char, e.keyCode) });

$('up').addEventListener('mousedown', function () {
  var e = new KeyboardEvent("keydown", { bubbles: true, cancelable: true, key: 'ArrowUp', keyCode: '38' });
  document.body.dispatchEvent(e);
});
$('up').addEventListener('mouseup', function () {
  var e = new KeyboardEvent("keyup", { bubbles: true, cancelable: true, key: 'ArrowUp', keyCode: '38' });
  document.body.dispatchEvent(e);  
});
$('up').addEventListener('touchstart', function () {
  var e = new KeyboardEvent("keydown", { bubbles: true, cancelable: true, key: 'ArrowUp', keyCode: '38' });
  document.body.dispatchEvent(e);
});
$('up').addEventListener('touchend', function () {
  var e = new KeyboardEvent("keyup", { bubbles: true, cancelable: true, key: 'ArrowUp', keyCode: '38' });
  document.body.dispatchEvent(e);  
});
//===========================================
$('down').addEventListener('mousedown', function () {
  var e = new KeyboardEvent("keydown", { bubbles: true, cancelable: true, key: 'ArrowDown', keyCode: '40' });
  document.body.dispatchEvent(e);
});
$('down').addEventListener('mouseup', function () {
  var e = new KeyboardEvent("keyup", { bubbles: true, cancelable: true, key: 'ArrowDown', keyCode: '40' });
  document.body.dispatchEvent(e);
});
$('down').addEventListener('touchstart', function () {
  var e = new KeyboardEvent("keydown", { bubbles: true, cancelable: true, key: 'ArrowDown', keyCode: '40' });
  document.body.dispatchEvent(e);
});
$('down').addEventListener('touchend', function () {
  var e = new KeyboardEvent("keyup", { bubbles: true, cancelable: true, key: 'ArrowDown', keyCode: '40' });
  document.body.dispatchEvent(e);
});
//===========================================
$('right').addEventListener('mousedown', function () {
  var e = new KeyboardEvent("keydown", { bubbles: true, cancelable: true, key: 'ArrowRight', keyCode: '39' });
  document.body.dispatchEvent(e);
});
$('right').addEventListener('mouseup', function () {
  var e = new KeyboardEvent("keyup", { bubbles: true, cancelable: true, key: 'ArrowRight', keyCode: '39' });
  document.body.dispatchEvent(e);
});
$('right').addEventListener('touchstart', function () {
  var e = new KeyboardEvent("keydown", { bubbles: true, cancelable: true, key: 'ArrowRight', keyCode: '39' });
  document.body.dispatchEvent(e);
});
$('right').addEventListener('touchend', function () {
  var e = new KeyboardEvent("keyup", { bubbles: true, cancelable: true, key: 'ArrowRight', keyCode: '39' });
  document.body.dispatchEvent(e);
});
//===========================================
$('left').addEventListener('mousedown', function () {
  var e = new KeyboardEvent("keydown", { bubbles: true, cancelable: true, key: 'ArrowLeft', keyCode: '37' });
  document.body.dispatchEvent(e);
});
$('left').addEventListener('mouseup', function () {
  var e = new KeyboardEvent("keyup", { bubbles: true, cancelable: true, key: 'ArrowLeft', keyCode: '37' });
  document.body.dispatchEvent(e);
});
$('left').addEventListener('touchstart', function () {
  var e = new KeyboardEvent("keydown", { bubbles: true, cancelable: true, key: 'ArrowLeft', keyCode: '37' });
  document.body.dispatchEvent(e);
});
$('left').addEventListener('touchend', function () {
  var e = new KeyboardEvent("keyup", { bubbles: true, cancelable: true, key: 'ArrowLeft', keyCode: '37' });
  document.body.dispatchEvent(e);
});