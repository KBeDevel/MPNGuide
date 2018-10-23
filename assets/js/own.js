var subt;
var sm;
var smContent;

subt = document.getElementsByClassName('brand-logo-text')[0].innerHTML.substr(6,99);
sm = document.createElement('SMALL');
smContent = document.createTextNode(subt);

function hideBrandChild(){
    sm.appendChild(smContent);
    sm.setAttribute('class', 'brand-logo-text');

    if(window.innerWidth < 601){
        //document.getElementsByClassName('brand-logo-text')[0].style.fontSize = '0';
        document.getElementsByClassName('brand-logo')[0].innerHTML = 'TeaTeam';
    }else{ 
        document.getElementsByClassName('brand-logo')[0].innerHTML = 'TeaTeam | ';
        document.getElementsByClassName('brand-logo')[0].appendChild(sm);
        document.getElementsByClassName('brand-logo-text')[0].style.fontSize = '20px';
    }
}

function dropdownPadding(){
    var navHeight = $('header').height();
    //alert($('header').height());
    $('#modeler-items').css('padding-top', navHeight);
    $('#studio-items').css('padding-top', navHeight);
}

window.onresize = function(event){
    hideBrandChild();
}

$(function () {
    $('.pannable-image').ImageViewer();
});

//dropdownPadding();
$('.sidenav').sidenav();
$('.dropdown-trigger').dropdown({hover: false});
hideBrandChild();