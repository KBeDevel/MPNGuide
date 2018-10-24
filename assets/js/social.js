function loadJson(){
    //Configure Firefox parsing condition
    $.ajaxSetup({beforeSend: function(xhr){
        if (xhr.overrideMimeType)
        {
          xhr.overrideMimeType('application/json')
        }
      }
      })
    $.getJSON('assets/json/social.json', function(json){
        $('#social-items').html('')
        json.forEach(e => {
            $('#social-items').append('<a target="_blank" href="'+e.url+'" title="'+e.nam+'"><img class="social-img" src="'+e.icon+'">')
        })
    })
}
loadJson()