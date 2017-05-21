// hi I'm a one liner

/*
 * I'm a paragraph
 */

/**
 * I'm a function header, tell everyone what the function does!
 * We must know why
 * If it's particularly complicated we should also explain 'how, what'
 *   e.g. if using an unusual algorithm then how and what.
 */

// this is Google Analytics

(function(i, s, o, g, r, a, m) {
    i["GoogleAnalyticsObject"] = r;
    i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-93042910-1', 'auto');
ga('send', 'pageview');
