! function(n) {
    "use strict";
    n(document).ready(function() {
        window.location.protocol, window.location.host;
        for (var o = window.location.pathname.split("/"), i = 1; i < o.length - 1; i++) "/", o[i];
        var s = n(".csi-header-bottom"),
            t = s.position();
        if (n(window).on("scroll", function() {
                n(window).scrollTop() >= t.top ? s.addClass("menu-onscroll") : s.removeClass("menu-onscroll")
            }), n("a.csi-scroll").on("click", function(o) {
                var i = n(this),
                    s = n(i.attr("href")).offset().top;
                return window.innerWidth < 768 && (s -= 90), n("html, body").stop().animate({
                    scrollTop: s
                }, 1500, "easeInOutExpo"), o.preventDefault(), !1
            }), n("#csi-countdown").length) {
            var a = n("#csi-countdown").data("date");
            n("#csi-countdown").countdown(a, function(o) {
                n(this).html(o.strftime('<span class="csi-days">%D <i> Days </i></span> <span class="csi-hr">%H <i> Hour </i></span> <span class="csi-min">%M <i> Minu </i></span> <span class="csi-sec">%S <i> Seco </i></span>'))
            })
        }
    })
}(jQuery);
