{"filter":false,"title":"index.js","tooltip":"/js/index.js","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":9,"column":2},"action":"insert","lines":["var socketio = io()","","var sendEvent = function(){","    msg = $('input#msg-input').val()","    socketio.emit('eventA', {message: msg})","}","","socketio.on('eventB', function(data){","    $('div#msg-whole').prepend(\"<div>\"+ data.msg +\"</div>\")","})"],"id":1}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":9,"column":2},"end":{"row":9,"column":2},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1559228416016,"hash":"e4cb6da3bf2a8507028348c28a8f37b00547df70"}