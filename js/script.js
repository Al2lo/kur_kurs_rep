window.onload = function() {
    document.addEventListener("click", documentActions) //Actions (делегирования события клик)
    function documentActions(e) {
        const targetElement = e.target;
        if (window.innerWidth > 768 && isMobile.any()) {
            if (targetElement.classList.contains('menu_arrow')) {
                targetElement.closest('.menu_item').classList.toggle('hover');
            }
            if (!targetElement.closest('.menu_item') && document.querySelectorAll('.menu_item._hover').length > 0) {
                _removeClasses(document.querySelectorAll('menu_item._hover'), "_hover");
            }
        }
        if (targetElement.classList.contains('search-form_icon')) {
            document.querySelector('.search-form').classList.roggle('_active');
        } else if (!targetElement.closest('.search-form') && document.querySelectorAll('.search-form._active').length > 0) {
            document.querySelector('.search-form').classList.remove('_active');
        }
    }
}
$(document).ready(function() {
    $('._block-title').click(function(event) {
        $(this).toggleClass('active').next().sliderToggle(300);
    });
}); <
script src = "https://code.jquery.com/jquery-3.4.1.min/js" > < /script> <
    div class = "footer_container _container" >
    <
    div class = "footer_body" >
    <
    div class = "footer_main" >
    <
    a href = ""
class = "footer_logo _footer-title" > SunRise < /a> <
    div class = "footer_text" > bfdniwdnunajsndjkvnaeu9ha.ucmjijaeiacjmf9ijewchgu9mw.emjxmjfoimqwjomghmo.uwqhgmiojfomkoa.nvygbu9w < /div> <
    div class = "footer_contacts contacts-footer" >
    <
    a href = ""
class = "contacts-footer_item _icon-location" > wertyuio < /a> <
    a href = ""
class = "contacts-footer_item _icon-phone" > +375(29) 189 - 24 - 77 < /a> <
    a href = ""
class = "contacts-footer_item" > www / mgrwmg < /a> <
    /div> <
    /div> <
    div data - spoller = "768,max"
class = "footer_menu menu-footer" >
    <
    div class = "menu-footer_column" >
    <
    button data - spoller type = "button"
class = "menu-footer_title _footer-title" > Menu < /button> <
    ul class = "menu-footer_list" >
    <
    li >
    <
    a href = ""
class = "menu-footer_link" > products < /a> <
    /li> <
    li >
    <
    a href = ""
class = "menu-footer_link" > rooms < /a> <
    /li> <
    li >
    <
    a href = ""
class = "menu-footer_link" > iijfdigi < /a> <
    /li> <
    li >
    <
    a href = ""
class = "menu-footer_link" > ngjsnjn < /a> <
    /li> <
    li >
    <
    a href = ""
class = "menu-footer_link" > efjnejnfwu < /a> <
    /li> <
    /ul> <
    /div> <
    div class = "menu-footer_column" >
    <
    button data - spoller type = "button"
class = "menu-footer_title _footer-title" > Account < /button> <
    ul class = "menu-footer_list" >
    <
    li >
    <
    a href = ""
class = "menu-footer_link" > products < /a> <
    /li> <
    li >
    <
    a href = ""
class = "menu-footer_link" > rooms < /a> <
    /li> <
    li >
    <
    a href = ""
class = "menu-footer_link" > iijfdigi < /a> <
    /li> <
    li >
    <
    a href = ""
class = "menu-footer_link" > ngjsnjn < /a> <
    /li> <
    /ul> <
    /div> <
    div class = "menu-footer_column" >
    <
    button type = "button"
class = "menu-footer_title _footer-title" > Stay Connected < /button> <
    ul class = "menu-footer_list" >
    <
    li >
    <
    a href = ""
class = "menu-footer_link" > products < /a> <
    /li> <
    li >
    <
    a href = ""
class = "menu-footer_link" > rooms < /a> <
    /li> <
    li >
    <
    a href = ""
class = "menu-footer_link" > iijfdigi < /a> <
    /li> <
    /ul> <
    /div> <
    /div> <
    div class = "footer_subscribe subscribe" >
    <
    div class = "subscribe_title _footer-title" > Stay UpDate < /div> <
    form data - message = "subscribe"
data - test action = "#"
class = "subscribe_form" >
    <
    input autocomplete = "off"
type = "text"
name = "form[]"
data - error = "Ошибка"
data - value = "Enter your E-mail"
class = "subscribe_input _req _email" >
    <
    button type = "submit"
class = "subscribe_button _icon-send" > < /button> <
    div class = "form_error" > Ошибка < /div> <
    /form> <
    /div> <
    /div> <
    /div>