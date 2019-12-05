// ==UserScript==
// @name           AutoSwitchOldMail
// @namespace      virtonomica
// @author         mr_Sumkin
// @description    Замена линков ведущих на новую почту линками ко старому интерфейсу почты. Если задолбала новая почта то это ваш скрипт.
// @include        http*://virtonomic*.*/
// @require        https://code.jquery.com/jquery-1.11.1.min.js
// @version        1.0
// ==/UserScript==
$(document).ready(() => {
    let $a = $(document.body).find("a[href$='/main/user/privat/persondata/message']");
    $a.each((i, el) => {
        let href = el.getAttribute("href");
        el.setAttribute("href", href + "?old");
    });
});
