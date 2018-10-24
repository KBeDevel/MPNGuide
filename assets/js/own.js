var subt = document.getElementsByClassName('brand-logo-text')[0].innerHTML.substr(6,99)
var sm = document.createElement('SMALL')
var smContent = document.createTextNode(subt)
function hideBrandChild(){
    sm.appendChild(smContent)
    sm.setAttribute('class', 'brand-logo-text')
    if(window.innerWidth < 601){
        //document.getElementsByClassName('brand-logo-text')[0].style.fontSize = '0';
        document.getElementsByClassName('brand-logo')[0].innerHTML = 'TeaTeam'
    }else{ 
        document.getElementsByClassName('brand-logo')[0].innerHTML = 'TeaTeam | '
        document.getElementsByClassName('brand-logo')[0].appendChild(sm)
        document.getElementsByClassName('brand-logo-text')[0].style.fontSize = '20px'
    }
}
function dropdownPadding(){
    var navHeight = document.getElementsByTagName('header').height //$('header').height()
    document.getElementById('modeler-items').style.paddingTop = navHeight
    document.getElementById('studio-items').style.paddingTop = navHeight
}
window.onresize = function(event){
    hideBrandChild()
}
$(function () {
    $('.pannable-image').ImageViewer()
})
//dropdownPadding();
$('.sidenav').sidenav()
$('.dropdown-trigger').dropdown({hover: false})
hideBrandChild()