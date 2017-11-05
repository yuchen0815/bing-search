
$('#search-input').on('keyup',function(){
    var searchText = $('#search-input').val()
    $.get('http://api.bing.com/qsonhs.aspx?q='+searchText,function(d){
        
    },'json')
    $('#search-suggest').show().css({
        top:$('#search-form').offset().top+$('#search-form').height()+10,
        left:$('#search-form').offset().left,
        position:"absolute"
    })
})