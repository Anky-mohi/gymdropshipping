! function() {
    function n(d) {
        for (var f, a, g, b, c = [], e = 0; e < x.length; e++) {
            var h = x[e];
            if (h.Tag === d) {
                c = h.CategoryId;
                break
            }
            var l = (f = h.Tag, b = g = a = void 0, a = -1 !== (b = f).indexOf("http:") ? b.replace("http:", "") : b.replace("https:", ""), -1 !== (g = a.indexOf("?")) ? a.replace(a.substring(g), "") : a);
            if (d && (-1 !== d.indexOf(l) || -1 !== h.Tag.indexOf(d))) {
                c = h.CategoryId;
                break
            }
        }
        if (!c.length && z) {
            var r = function(k) {
                var v = document.createElement("a");
                v.href = k;
                k = v.hostname.split(".");
                return -1 !== k.indexOf("www") || 2 < k.length ? k.slice(1).join(".") :
                    v.hostname
            }(d);
            A.some(function(k) {
                return k === r
            }) && (c = ["C0004"])
        }
        return c
    }

    function m(d) {
        return d && window.OptanonActiveGroups && d.every(function(f) {
            return -1 !== window.OptanonActiveGroups.indexOf(f)
        })
    }

    function p(d) {
        return -1 !== (d.getAttribute("class") || "").indexOf("optanon-category")
    }

    function q(d) {
        return d.hasAttribute("data-ot-ignore")
    }

    function t(d, f) {
        d = d.join("-");
        var a = f.getAttribute("class") || ""; - 1 === a.indexOf("optanon-category-" + d) && (d = w(d, a), f.setAttribute("class", d))
    }

    function w(d, f) {
        return ("optanon-category-" +
            d + " " + f).trim()
    }
    var x = JSON.parse('[{"Tag":"https://eu.gymshark.com/favicon.ico","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://au.gymshark.com/favicon.ico","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://www.googletagmanager.com/gtm.js","CategoryId":["C0002","C0004"],"Vendor":null},{"Tag":"https://www.google-analytics.com/analytics.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://se.gymshark.com/favicon.ico","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://sc-static.net/scevent.min.js","CategoryId":["C0002","C0004"],"Vendor":null},{"Tag":"https://nl.gymshark.com/favicon.ico","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://secure.wufoo.com/scripts/embed/form.js","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://bam-cell.nr-data.net/1/1e390569c3","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://cdn.shopify.com/s/trekkie.storefront.3bc22f7b201bea3154c99666f2373bcf9a3e8fb1.min.js","CategoryId":["C0002","C0004"],"Vendor":null},{"Tag":"https://ca.gymshark.com/favicon.ico","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://de.gymshark.com/favicon.ico","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://connect.facebook.net/signals/config/293240424340622","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://row.gymshark.com/favicon.ico","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://www.pinterest.ie/ct.html","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://googleads.g.doubleclick.net/pagead/viewthroughconversion/857238814/","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://fi.gymshark.com/favicon.ico","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://uk.gymshark.com/favicon.ico","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://cdn.scarabresearch.com/js/1352691A681B6315/scarab-v2.js","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://fr.gymshark.com/favicon.ico","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://s.pinimg.com/ct/lib/main.d71a97dd.js","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://dk.gymshark.com/favicon.ico","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://www.googletagmanager.com/gtag/js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://www.facebook.com/tr/","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://s.pinimg.com/ct/lib/main.2a04f3ee.js","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://bat.bing.com/bat.js","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://ch.gymshark.com/favicon.ico","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://analytics-static.ugc.bazaarvoice.com/prod/static/3/bv-analytics.js","CategoryId":["C0002","C0003","C0004"],"Vendor":null},{"Tag":"https://tr.snapchat.com/p","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://cdn.shopify.com/shopifycloud/shopify/assets/storefront/load_feature-24ff1222c9aa13bb217653c0d3ea28c40a796a280e6da29ad421eec2a6075c86.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://connect.nosto.com/include/shopify-13675217","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://www.pinterest.com/ct.html","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://no.gymshark.com/favicon.ico","CategoryId":["C0003"],"Vendor":null}]'),
        z = JSON.parse("true"),
        A = [""],
        u = ["embed", "iframe", "img", "script"];
    (new MutationObserver(function(d) {
        Array.prototype.forEach.call(d, function(f) {
            Array.prototype.forEach.call(f.addedNodes, function(e) {
                var h, l;
                if (1 === e.nodeType && -1 !== u.indexOf(e.tagName.toLowerCase()) && !p(e) && !q(e))
                    if ("script" === e.tagName.toLowerCase()) {
                        if ((l = n(h = e.src || "")).length) {
                            t(l, e);
                            m(l) || (e.type = "text/plain");
                            var r = function(k) {
                                "text/plain" === e.getAttribute("type") && k.preventDefault();
                                e.removeEventListener("beforescriptexecute", r)
                            };
                            e.addEventListener("beforescriptexecute", r)
                        }
                    } else(l = n(h = e.src || "")).length && (t(l, e), m(l) || (e.removeAttribute("src"), e.setAttribute("data-src", h)))
            });
            var a = f.target;
            if (f.attributeName && (!p(a) || !q(a)))
                if ("script" === a.nodeName.toLowerCase()) {
                    if ((c = n(b = a.src || "")).length) {
                        t(c, a);
                        m(c) || (a.type = "text/plain");
                        var g = function(e) {
                            "text/plain" === a.getAttribute("type") && e.preventDefault();
                            a.removeEventListener("beforescriptexecute", g)
                        };
                        a.addEventListener("beforescriptexecute", g)
                    }
                } else if (-1 !== u.indexOf(f.target.nodeName.toLowerCase())) {
                var b,
                    c;
                (c = n(b = a.src || "")).length && (t(c, a), m(c) || (a.removeAttribute("src"), a.setAttribute("data-src", b)))
            }
        })
    })).observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        attributes: !0,
        attributeFilter: ["src"]
    });
    var y = document.createElement;
    document.createElement = function() {
        for (var d = [], f = 0; f < arguments.length; f++) d[f] = arguments[f];
        if ("script" !== d[0].toLowerCase() && -1 === u.indexOf(d[0].toLowerCase())) return y.bind(document).apply(void 0, d);
        var a = y.bind(document).apply(void 0, d),
            g = a.setAttribute.bind(a);
        return Object.defineProperties(a, {
            src: {
                get: function() {
                    return a.getAttribute("src") || ""
                },
                set: function(b) {
                    var c = "";
                    "string" == typeof b ? c = b : b instanceof Object && (c = b.toString());
                    c = n(c);
                    !c.length || "script" !== d[0].toLowerCase() || p(a) || m(c) || q(a) ? !c.length || -1 === u.indexOf(d[0].toLowerCase()) || p(a) || m(c) || q(a) ? g("src", b) : (a.removeAttribute("src"), g("data-src", b), b = a.getAttribute("class"), c = c.join("-"), b || (b = w(c, b || ""), g("class", b))) : (g("type", "text/plain"), g("src", b));
                    return !0
                }
            },
            type: {
                set: function(b) {
                    var c = n(a.src || "");
                    b = !c.length || p(a) ||
                        m(c) || q(a) ? b : "text/plain";
                    return g("type", b), !0
                }
            },
            class: {
                set: function(b) {
                    var c = n(a.src);
                    !c.length || p(a) || m(c) || q(a) ? g("class", b) : (b = w(c.join("-"), b), g("class", b));
                    return !0
                }
            }
        }), a.setAttribute = function(b, c, e) {
            "type" !== b && "src" !== b || e ? g(b, c) : a[b] = c
        }, a
    }
}();