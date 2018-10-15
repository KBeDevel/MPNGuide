var socialList = [];

function loadJson(){
    //Configure Firefox parsing condition
    $.ajaxSetup({beforeSend: function(xhr){
        if (xhr.overrideMimeType)
        {
          xhr.overrideMimeType("application/json");
        }
      }
      });
    $.getJSON("../json/social.json", function(json){
        socialList = this;
    });
}

function appendSocial(list){
    
}

$(document).on('ready', () => {
    loadJson();
    //And at this moment is when Stalin is crying on his tomb
    appendSocial(socialList);
})