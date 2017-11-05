
var getDom = function(id){
    return document.getElementById('id')
}

var addEvent = function(id,event,fn){
    var el = getDom(id)||document;
    if(el.addEventListener){
        el.addEventListener(event,fn,false)
    }else(el.attachEvent){
        el.attachEvent("on"+event,fn)
    }
}

var getElementLeft = function(element){
    var actualLeft = element.offsetLeft
    var current = element.offsetParent;
    while(current !== null){
        actualLeft += current.offsetLeft;
        current = current.offsetParent;
    }
    return actualLeft;
}

var getElementTop = function(element){
    var actualTop = element.offsetTop
    var current = element.offsetParent;
    while(current !== null){
        actualTop += current.offsetTop;
        current = current.offsetParent;
    }
    return actualTop;
}