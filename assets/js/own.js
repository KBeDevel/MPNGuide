function dropdownPadding(){
    var navHeight = $('header').height();
    //alert($('header').height());
    $('#modeler-items').css('padding-top', navHeight);
    $('#studio-items').css('padding-top', navHeight);
}


$(document).ready(() => {
    //dropdownPadding();
    $('.sidenav').sidenav();
    $('.dropdown-trigger').dropdown({hover: false});
})