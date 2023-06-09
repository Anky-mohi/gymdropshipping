(async function() {
    const a = "rtbhEvents",
        b = "__rtbh.",
        c = ["uid", "sid", "aid", "eid", "lid"],
        d = 31536000000,
        e = [];
    if (Array.isArray(window.rtbhEvents) || (window.rtbhEvents = []), window.rtbhEvents.length && !window.rtbhEvents.push.prototype) try {
        function f(a, b = "ams") {
            const d = document.referrer ? document.referrer : "";
            return null === a ? void 0 : function(e, f, h = null) {
                try {
                    const i = f.filter(a => !c.includes(a.eventType) && "init" !== a.eventType);
                    return g(`https://${b}.creativecdn.com/tags/v2?type=json`, {
                        method: "POST",
                        mode: "cors",
                        credentials: "include",
                        referrerPolicy: "no-referrer-when-downgrade",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        redirect: "follow",
                        body: JSON.stringify({
                            v: "v0.1.5",
                            sr: d,
                            su: location.href,
                            th: h ? h : a,
                            tags: [...i, ...r]
                        })
                    }, e)
                } catch (a) {}
            }
        }
        async function g(a, b, c, d) {
            try {
                const e = "function" == typeof c ? c : () => {},
                    f = await fetch(a, b),
                    g = f.status;
                if (200 <= g && 300 > g) return e(d ? await f.json() : await f.text(), f)
            } catch (a) {}
        }

        function h(a) {
            try {
                return JSON.parse(a)
            } catch (a) {
                return null
            }
        }

        function i() {
            const b = window[a].filter(a => a.eventType && "init" === a.eventType)[0];
            return b || null
        }

        function j(a = null) {
            return a && a.value ? a.value : null
        }

        function k(a = null) {
            return a && a.dc && ["ams", "us", "phx", "sin", "ash", "asia"].includes(a.dc) ? a.dc : "ams"
        }

        function l(a) {
            if (u) {
                const b = a || [];
                for (const a of b) a()
            }
        }

        function m(a) {
            try {
                const b = JSON.parse(a),
                    c = Array.isArray(b) ? b : [];
                for (const a of c)
                    if (a && a.url && a.type)
                        if ("img" === (a.type + "").toLowerCase()) {
                            const b = new Image;
                            b.src = a.url, b.setAttribute("width", "1"), b.setAttribute("height", "1"), b.setAttribute("scrolling", "no"), b.setAttribute("frameBorder", "0"), b.setAttribute("style", "display:none"), document.body.appendChild(b)
                        } else if ("iframe" === (a.type + "").toLowerCase()) {
                    const b = document.createElement("iframe");
                    b.setAttribute("width", "1"), b.setAttribute("height", "1"), b.setAttribute("scrolling", "no"), b.setAttribute("frameBorder", "0"), b.setAttribute("style", "display:none"), b.setAttribute("src", a.url), document.body.appendChild(b)
                }
            } catch (a) {}
        }

        function n(a) {
            try {
                const b = o(a),
                    c = Object.keys(b);
                for (const a of c) v(m, b[a], a)
            } catch (a) {}
        }

        function o(a) {
            try {
                return a.reduce((a, b) => {
                    const c = b.hash ? b.hash : u;
                    return (a[c] = a[c] || []).push(b), a
                }, {})
            } catch (a) {}
        }
        const p = new RegExp(`^(${c.join("|")})$`),
            q = function() {
                function a(a, b, c, d, e) {
                    const f = e && "" !== e ? ";domain=" + encodeURIComponent(e) : "",
                        g = c && "" !== c ? ";expires=" + new Date(new Date().getTime() + c).toString() : "",
                        h = d && "none" === d.toLowerCase(),
                        i = h ? " ;Secure" : "";
                    document.cookie = a + "=" + encodeURIComponent(b) + g + ";path=/" + f + (d ? ";SameSite=" + d : "") + i
                }

                function d(a) {
                    const b = window.document.cookie.match("(^|;)\\s*" + a + "\\s*=\\s*([^;]*)\\s*(;|$)");
                    return b ? decodeURIComponent(b[2]) : null
                }

                function e(a, b) {
                    window.localStorage.setItem(a, b)
                }

                function f(a) {
                    return window.localStorage.getItem(a)
                }

                function g(a, b) {
                    window.sessionStorage.setItem(a, b)
                }

                function i(a) {
                    return window.sessionStorage.getItem(a)
                }
                return {
                    getAllStorages: a => {
                        const b = i(a);
                        return b ? b : d(a) || f(a)
                    },
                    setAllStorages: (b, c, d, f, h) => {
                        b && c && (a(b, c, d, f, h), e(b, c), g(b, c))
                    },
                    getStorageTags: () => {
                        const a = [];
                        for (const d of c) {
                            const c = q.getAllStorages(b + d),
                                e = h(c);
                            e && e.eventType && a.push(e)
                        }
                        return a
                    }
                }
            }();
        let r = q.getStorageTags(),
            s = i(),
            t = k(s),
            u = j(s),
            v = f(u, t);
        l(e);
        for (const e of c) {
            const c = b + e,
                f = q.getAllStorages(`__rtbhouse.${e}`),
                g = q.getAllStorages(c),
                h = window[a].find(a => a.eventType === e && a.id);
            if (h && q.setAllStorages(c, JSON.stringify(h), d), !g && f && !f.includes("eventType")) {
                q.setAllStorages(b + e, JSON.stringify({
                    eventType: e,
                    id: f
                }), d)
            }
            r = q.getStorageTags()
        }
        const w = b + "lid";
        q.getAllStorages(w) || (q.setAllStorages(w, JSON.stringify({
            eventType: "lid",
            id: function() {
                var a = Math.floor;
                let b = "";
                for (let c = 0; 20 > c; c++) b += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(a(Math.random() * 62));
                return b
            }()
        }), d), r = q.getStorageTags()), n(window[a]), window[a].push = function() {
            try {
                const a = Array.prototype.slice.call(arguments).filter(a => (p.test((a || {}).eventType + "") && (q.setAllStorages(b + a.eventType, JSON.stringify(a), d), r = q.getStorageTags()), !0));
                return null === u && (s = i(), t = k(s), u = j(s), v = f(u, t), l(e)), Array.prototype.push.apply(this, arguments), n(a), !0
            } catch (a) {}
        }
    } catch (a) {}
})();