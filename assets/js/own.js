//Adding (and importing navbar items) a left sidenav for mobile devices
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
});

$(document).ready(() => {
    $('.sidenav').sidenav();
})