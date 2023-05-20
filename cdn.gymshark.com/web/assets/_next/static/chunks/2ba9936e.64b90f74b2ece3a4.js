(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8], {
        18631: function(e, t, a) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n, i = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== a.g ? a.g : "undefined" != typeof self ? self : {},
                o = (function(e) {
                    (function() {
                        ! function(t, a) {
                            if (e.exports) {
                                var n = a();
                                e.exports = n, e.exports.default = n
                            } else if (t.appboy) {
                                var i, o = a();
                                for (i in o) t.appboy[i] = o[i]
                            } else t.appboy = a()
                        }("undefined" != typeof self ? self : this, function() {
                            var t = {};

                            function a(e) {
                                var t, a = "undefined" != typeof Symbol && Symbol.iterator && e[Symbol.iterator];
                                return a ? a.call(e) : {
                                    next: (t = 0, function() {
                                        return t < e.length ? {
                                            done: !1,
                                            value: e[t++]
                                        } : {
                                            done: !0
                                        }
                                    })
                                }
                            }
                            var n = "function" == typeof Object.create ? Object.create : function(e) {
                                    function t() {}
                                    return t.prototype = e, new t
                                },
                                o = "function" == typeof Object.defineProperties ? Object.defineProperty : function(e, t, a) {
                                    return e == Array.prototype || e == Object.prototype || (e[t] = a.value), e
                                },
                                r = function(e) {
                                    e = ["object" == typeof globalThis && globalThis, e, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof i && i];
                                    for (var t = 0; t < e.length; ++t) {
                                        var a = e[t];
                                        if (a && a.Math == Math) return a
                                    }
                                    throw Error("Cannot find global object")
                                }(this);

                            function s(e, t) {
                                if (t) e: {
                                    var a = r;e = e.split(".");
                                    for (var n = 0; n < e.length - 1; n++) {
                                        var i = e[n];
                                        if (!(i in a)) break e;
                                        a = a[i]
                                    }(t = t(n = a[e = e[e.length - 1]])) != n && null != t && o(a, e, {
                                        configurable: !0,
                                        writable: !0,
                                        value: t
                                    })
                                }
                            }
                            if ("function" == typeof Object.setPrototypeOf) nC = Object.setPrototypeOf;
                            else {
                                e: {
                                    var l = {};
                                    try {
                                        l.__proto__ = {
                                            Og: !0
                                        }, nN = l.Og;
                                        break e
                                    } catch (e) {}
                                    nN = !1
                                }
                                nC = nN ? function(e, t) {
                                    if (e.__proto__ = t, e.__proto__ !== t) throw TypeError(e + " is not extensible");
                                    return e
                                } : null
                            }
                            var c = nC;

                            function u(e, t) {
                                if (e.prototype = n(t.prototype), e.prototype.constructor = e, c) c(e, t);
                                else
                                    for (var a in t)
                                        if ("prototype" != a) {
                                            if (Object.defineProperties) {
                                                var i = Object.getOwnPropertyDescriptor(t, a);
                                                i && Object.defineProperty(e, a, i)
                                            } else e[a] = t[a]
                                        }
                                e.gi = t.prototype
                            }
                            s("String.prototype.repeat", function(e) {
                                return e || function(e) {
                                    if (null == this) throw TypeError("The 'this' value for String.prototype.repeat must not be null or undefined");
                                    var t = this + "";
                                    if (0 > e || 1342177279 < e) throw RangeError("Invalid count value");
                                    e |= 0;
                                    for (var a = ""; e;) 1 & e && (a += t), (e >>>= 1) && (t += t);
                                    return a
                                }
                            }), s("Promise", function(e) {
                                function t(e) {
                                    this.Ub = 0, this.Rd = void 0, this.sb = [];
                                    var t = this.Ad();
                                    try {
                                        e(t.resolve, t.reject)
                                    } catch (e) {
                                        t.reject(e)
                                    }
                                }

                                function n() {
                                    this.Ha = null
                                }

                                function i(e) {
                                    return e instanceof t ? e : new t(function(t) {
                                        t(e)
                                    })
                                }
                                if (e) return e;
                                n.prototype.Te = function(e) {
                                    if (null == this.Ha) {
                                        this.Ha = [];
                                        var t = this;
                                        this.Ue(function() {
                                            t.eh()
                                        })
                                    }
                                    this.Ha.push(e)
                                };
                                var o = r.setTimeout;
                                n.prototype.Ue = function(e) {
                                    o(e, 0)
                                }, n.prototype.eh = function() {
                                    for (; this.Ha && this.Ha.length;) {
                                        var e = this.Ha;
                                        this.Ha = [];
                                        for (var t = 0; t < e.length; ++t) {
                                            var a = e[t];
                                            e[t] = null;
                                            try {
                                                a()
                                            } catch (e) {
                                                this.Sg(e)
                                            }
                                        }
                                    }
                                    this.Ha = null
                                }, n.prototype.Sg = function(e) {
                                    this.Ue(function() {
                                        throw e
                                    })
                                }, t.prototype.Ad = function() {
                                    function e(e) {
                                        return function(n) {
                                            a || (a = !0, e.call(t, n))
                                        }
                                    }
                                    var t = this,
                                        a = !1;
                                    return {
                                        resolve: e(this.uh),
                                        reject: e(this.Qd)
                                    }
                                }, t.prototype.uh = function(e) {
                                    if (e === this) this.Qd(TypeError("A Promise cannot resolve to itself"));
                                    else if (e instanceof t) this.Kh(e);
                                    else {
                                        e: switch (typeof e) {
                                            case "object":
                                                var a = null != e;
                                                break e;
                                            case "function":
                                                a = !0;
                                                break e;
                                            default:
                                                a = !1
                                        }
                                        a ? this.sh(e) : this.ef(e)
                                    }
                                }, t.prototype.sh = function(e) {
                                    var t = void 0;
                                    try {
                                        t = e.then
                                    } catch (e) {
                                        this.Qd(e);
                                        return
                                    }
                                    "function" == typeof t ? this.Lh(t, e) : this.ef(e)
                                }, t.prototype.Qd = function(e) {
                                    this.qf(2, e)
                                }, t.prototype.ef = function(e) {
                                    this.qf(1, e)
                                }, t.prototype.qf = function(e, t) {
                                    if (0 != this.Ub) throw Error("Cannot settle(" + e + ", " + t + "): Promise already settled in state" + this.Ub);
                                    this.Ub = e, this.Rd = t, this.fh()
                                }, t.prototype.fh = function() {
                                    if (null != this.sb) {
                                        for (var e = 0; e < this.sb.length; ++e) s.Te(this.sb[e]);
                                        this.sb = null
                                    }
                                };
                                var s = new n;
                                return t.prototype.Kh = function(e) {
                                    var t = this.Ad();
                                    e.Cc(t.resolve, t.reject)
                                }, t.prototype.Lh = function(e, t) {
                                    var a = this.Ad();
                                    try {
                                        e.call(t, a.resolve, a.reject)
                                    } catch (e) {
                                        a.reject(e)
                                    }
                                }, t.prototype.then = function(e, a) {
                                    function n(e, t) {
                                        return "function" == typeof e ? function(t) {
                                            try {
                                                i(e(t))
                                            } catch (e) {
                                                o(e)
                                            }
                                        } : t
                                    }
                                    var i, o, r = new t(function(e, t) {
                                        i = e, o = t
                                    });
                                    return this.Cc(n(e, i), n(a, o)), r
                                }, t.prototype.catch = function(e) {
                                    return this.then(void 0, e)
                                }, t.prototype.Cc = function(e, t) {
                                    function a() {
                                        switch (n.Ub) {
                                            case 1:
                                                e(n.Rd);
                                                break;
                                            case 2:
                                                t(n.Rd);
                                                break;
                                            default:
                                                throw Error("Unexpected state: " + n.Ub)
                                        }
                                    }
                                    var n = this;
                                    null == this.sb ? s.Te(a) : this.sb.push(a)
                                }, t.resolve = i, t.reject = function(e) {
                                    return new t(function(t, a) {
                                        a(e)
                                    })
                                }, t.race = function(e) {
                                    return new t(function(t, n) {
                                        for (var o = a(e), r = o.next(); !r.done; r = o.next()) i(r.value).Cc(t, n)
                                    })
                                }, t.all = function(e) {
                                    var n = a(e),
                                        o = n.next();
                                    return o.done ? i([]) : new t(function(e, t) {
                                        var a = [],
                                            r = 0;
                                        do a.push(void 0), r++, i(o.value).Cc(function(t) {
                                            return function(n) {
                                                a[t] = n, 0 == --r && e(a)
                                            }
                                        }(a.length - 1), t), o = n.next(); while (!o.done)
                                    })
                                }, t
                            });
                            var b = {
                                    Vh: function(e) {
                                        var t = "=".repeat((4 - e.length % 4) % 4);
                                        e = atob(e = (e + t).replace(/\-/g, "+").replace(/_/g, "/")), t = new Uint8Array(e.length);
                                        for (var a = 0; a < e.length; ++a) t[a] = e.charCodeAt(a);
                                        return t
                                    }
                                },
                                p = {
                                    Ia: function() {
                                        function e(e) {
                                            var t = (Math.random().toString(16) + "000000000").substr(2, 8);
                                            return e ? "-" + t.substr(0, 4) + "-" + t.substr(4, 4) : t
                                        }
                                        return e() + e(!0) + e(!0) + e()
                                    }
                                };

                            function d(e) {
                                this.Le = "undefined" == typeof window ? self : window, this.C = e, this.F = A
                            }

                            function h(e) {
                                if ("indexedDB" in e.Le) return e.Le.indexedDB
                            }

                            function f(e) {
                                try {
                                    if (null == h(e)) return !1;
                                    if (h(e).open("Braze IndexedDB Support Test"), "undefined" != typeof window) {
                                        var t = window.bi || window.Ya || window.di;
                                        if (t && t.wh && t.wh.id) return e.F.info("Not using IndexedDB for storage because we are running inside an extension"), !1
                                    }
                                    return !0
                                } catch (t) {
                                    return e.F.info("Not using IndexedDB for storage due to following error: " + t), !1
                                }
                            }

                            function g(e, t, a) {
                                var n = h(e).open(e.C.P, e.C.VERSION);
                                return null == n ? ("function" == typeof a && a(), !1) : (n.onupgradeneeded = function(t) {
                                    for (var a in e.F.info("Upgrading indexedDB " + e.C.P + " to v" + e.C.VERSION + "..."), t = t.target.result, e.C.G) e.C.G.hasOwnProperty(a) && !t.objectStoreNames.contains(e.C.G[a]) && t.createObjectStore(e.C.G[a])
                                }, n.onsuccess = function(n) {
                                    var i = n.target.result;
                                    i.onversionchange = function() {
                                        i.close(), "function" == typeof a && a(), e.F.error("Needed to close the database unexpectedly because of an upgrade in another tab")
                                    }, t(i)
                                }, n.onerror = function(t) {
                                    return e.F.info("Could not open indexedDB " + e.C.P + " v" + e.C.VERSION + ": " + t.target.errorCode), "function" == typeof a && a(), !0
                                }, !0)
                            }

                            function m(e, t, a, n) {
                                f(e) ? g(e, function(i) {
                                    i.objectStoreNames.contains(t) ? ((i = i.transaction([t], "readonly").objectStore(t).openCursor(null, "prev")).onerror = function() {
                                        e.F.error("Could not open cursor for " + t + " on indexedDB " + e.C.P), "function" == typeof n && n()
                                    }, i.onsuccess = function(e) {
                                        null != (e = e.target.result) && null != e.value && null != e.key ? a(e.key, e.value) : "function" == typeof n && n()
                                    }) : (e.F.error("Could not retrieve last record from " + t + " on indexedDB " + e.C.P + " - " + t + " is not a valid objectStore"), "function" == typeof n && n())
                                }, n) : "function" == typeof n && n()
                            }

                            function v(e, t, a) {
                                f(e) && g(e, function(n) {
                                    n.objectStoreNames.contains(t) ? n.transaction([t], "readwrite").objectStore(t).delete(a).onerror = function() {
                                        e.F.error("Could not delete record " + a + " from " + t + " on indexedDB " + e.C.P)
                                    } : e.F.error("Could not delete record " + a + " from " + t + " on indexedDB " + e.C.P + " - " + t + " is not a valid objectStore")
                                })
                            }

                            function w(e, t, a) {
                                f(e) && g(e, function(n) {
                                    if (n.objectStoreNames.contains(t)) {
                                        var i = n.transaction([t], "readwrite").objectStore(t);
                                        n = i.openCursor();
                                        var o = [];
                                        n.onerror = function() {
                                            0 < o.length ? (e.F.info("Cursor closed midway through for " + t + " on indexedDB " + e.C.P), a(o)) : e.F.error("Could not open cursor for " + t + " on indexedDB " + e.C.P)
                                        }, n.onsuccess = function(e) {
                                            var t = e.target.result;
                                            null != t ? (null != t.value && null != t.key && (i.delete(t.key).onsuccess = function() {
                                                o.push(t.value)
                                            }), t.continue()) : 0 < o.length && a(o)
                                        }
                                    } else e.F.error("Could not retrieve objects from " + t + " on indexedDB " + e.C.P + " - " + t + " is not a valid objectStore")
                                })
                            }
                            d.prototype.setItem = function(e, t, a, n, i) {
                                if (!f(this)) return "function" == typeof i && i(), !1;
                                var o = this;
                                return g(this, function(r) {
                                    r.objectStoreNames.contains(e) ? ((r = r.transaction([e], "readwrite").objectStore(e).put(a, t)).onerror = function() {
                                        o.F.error("Could not store object " + t + " in " + e + " on indexedDB " + o.C.P), "function" == typeof i && i()
                                    }, r.onsuccess = function() {
                                        "function" == typeof n && n()
                                    }) : (o.F.error("Could not store object " + t + " in " + e + " on indexedDB " + o.C.P + " - " + e + " is not a valid objectStore"), "function" == typeof i && i())
                                }, i)
                            }, d.prototype.getItem = function(e, t, a) {
                                if (!f(this)) return !1;
                                var n = this;
                                return g(this, function(i) {
                                    i.objectStoreNames.contains(e) ? ((i = i.transaction([e], "readonly").objectStore(e).get(t)).onerror = function() {
                                        n.F.error("Could not retrieve object " + t + " in " + e + " on indexedDB " + n.C.P)
                                    }, i.onsuccess = function(e) {
                                        null != (e = e.target.result) && a(e)
                                    }) : n.F.error("Could not retrieve object " + t + " in " + e + " on indexedDB " + n.C.P + " - " + e + " is not a valid objectStore")
                                })
                            }, d.prototype.clearData = function() {
                                if (!f(this)) return !1;
                                var e, t = [];
                                for (e in this.C.G) this.C.G.hasOwnProperty(e) && this.C.G[e] !== this.C.G.xb && t.push(this.C.G[e]);
                                var a = this;
                                return g(this, function(e) {
                                    e = e.transaction(t, "readwrite");
                                    for (var n = 0; n < t.length; n++) e.objectStore(t[n]).clear().onerror = function() {
                                        a.F.error("Could not clear " + this.source.name + " on indexedDB " + a.C.P)
                                    };
                                    e.onerror = function() {
                                        a.F.error("Could not clear object stores on indexedDB " + a.C.P)
                                    }
                                })
                            };
                            var y = {
                                    Gd: function(e) {
                                        (void 0 !== e || void 0 === y.Ea) && (y.Ea = !!e), y.He || (y.He = !0)
                                    },
                                    Jb: function() {
                                        y.He = !1, y.Ea = void 0, y.F = void 0
                                    },
                                    Td: function(e) {
                                        "function" != typeof e ? y.info("Ignoring setLogger call since logger is not a function") : (y.Gd(), y.F = e)
                                    },
                                    Yd: function() {
                                        y.Gd(), y.Ea ? (console.log("Disabling Appboy logging"), y.Ea = !1) : (console.log("Enabled Appboy logging"), y.Ea = !0)
                                    },
                                    info: function(e) {
                                        y.Ea && (e = "Appboy: " + e, null != y.F ? y.F(e) : console.log(e))
                                    },
                                    warn: function(e) {
                                        y.Ea && (e = "Appboy SDK Warning: " + e + " (v3.5.0)", null != y.F ? y.F(e) : console.warn(e))
                                    },
                                    error: function(e) {
                                        y.Ea && (e = "Appboy SDK Error: " + e + " (v3.5.0)", null != y.F ? y.F(e) : console.error(e))
                                    }
                                },
                                x = {
                                    CustomEvent: "ce",
                                    eg: "p",
                                    sg: "pc",
                                    $h: "ca",
                                    fg: "i",
                                    Yc: "ie",
                                    Jf: "cci",
                                    Lf: "ccic",
                                    Hf: "ccc",
                                    If: "ccd",
                                    ve: "ss",
                                    yg: "se",
                                    dg: "si",
                                    ke: "sc",
                                    je: "sbc",
                                    cg: "sfe",
                                    Mf: "iec",
                                    lg: "lr",
                                    Df: "uae",
                                    Gf: "ci",
                                    Ff: "cc",
                                    jg: "lcaa",
                                    kg: "lcar",
                                    Of: "inc",
                                    Nf: "add",
                                    Pf: "rem",
                                    Qf: "set",
                                    zg: "sgu"
                                },
                                k = {
                                    $f: "feed_displayed",
                                    Kf: "content_cards_displayed"
                                },
                                E = {
                                    ba: {
                                        P: "AppboyServiceWorkerAsyncStorage",
                                        VERSION: 6,
                                        G: {
                                            Rf: "data",
                                            oe: "pushClicks",
                                            gd: "pushSubscribed",
                                            Yh: "fallbackDevice",
                                            Ef: "cardUpdates",
                                            xb: "optOut",
                                            me: "pendingData",
                                            qe: "sdkAuthenticationSignature"
                                        },
                                        kb: 1
                                    }
                                },
                                A = y,
                                S = {
                                    Af: "allowCrawlerActivity",
                                    Rc: "baseUrl",
                                    ng: "noCookies",
                                    ee: "devicePropertyAllowlist",
                                    Vc: "devicePropertyWhitelist",
                                    Wf: "disablePushTokenMaintenance",
                                    Yf: "enableLogging",
                                    Zf: "enableSdkAuthentication",
                                    mg: "manageServiceWorkerExternally",
                                    ag: "minimumIntervalBetweenTriggerActionsInSeconds",
                                    xg: "sessionTimeoutInSeconds",
                                    Cf: "appVersion",
                                    wg: "serviceWorkerLocation",
                                    ug: "safariWebsitePushId",
                                    cd: "localization",
                                    be: "contentSecurityNonce",
                                    fe: "enableHtmlInAppMessages",
                                    Zd: "allowUserSuppliedJavascript",
                                    bg: "inAppMessageZIndex",
                                    pg: "openInAppMessagesInNewTab",
                                    qg: "openNewsFeedCardsInNewTab",
                                    tg: "requireExplicitInAppMessageDismissal",
                                    Xf: "doNotLoadFontAwesome",
                                    re: "sdkFlavor",
                                    $c: "language",
                                    og: "openCardsInNewTab"
                                };

                            function C(e, t, a, n) {
                                return -1 !== (e = O(e)).indexOf(t) || (A.error(a + " Valid values from " + n + ' are "' + e.join('"/"') + '".'), !1)
                            }

                            function N(e) {
                                return Array.isArray ? Array.isArray(e) : "[object Array]" === Object.prototype.toString.call(e)
                            }

                            function T(e) {
                                return "[object Date]" === Object.prototype.toString.call(e)
                            }

                            function _(e) {
                                return "[object Object]" === Object.prototype.toString.call(e)
                            }

                            function D(e) {
                                var t, a = [];
                                for (t in e) e.hasOwnProperty(t) && a.push(t);
                                return a
                            }

                            function O(e) {
                                var t, a = [];
                                for (t in e) e.hasOwnProperty(t) && void 0 !== e[t] && a.push(e[t]);
                                return a
                            }

                            function I(e, t) {
                                if (e === t) return 0 !== e || 1 / e == 1 / t;
                                if (null == e || null == t) return e === t;
                                var a = e.toString();
                                if (a !== t.toString()) return !1;
                                switch (a) {
                                    case "[object RegExp]":
                                    case "[object String]":
                                        return "" + e == "" + t;
                                    case "[object Number]":
                                        return +e != +e ? +t != +t : 0 == +e ? 1 / +e == 1 / t : +e == +t;
                                    case "[object Date]":
                                    case "[object Boolean]":
                                        return +e == +t
                                }
                                if (!(a = "[object Array]" === a)) {
                                    if ("object" != typeof e || "object" != typeof t) return !1;
                                    var n = e.constructor,
                                        i = t.constructor;
                                    if (n !== i && !("function" == typeof n && n instanceof n && "function" == typeof i && i instanceof i) && "constructor" in e && "constructor" in t) return !1
                                }
                                n = [], i = [];
                                for (var o = n.length; o--;)
                                    if (n[o] === e) return i[o] === t;
                                if (n.push(e), i.push(t), a) {
                                    if ((o = e.length) !== t.length) return !1;
                                    for (; o--;)
                                        if (!I(e[o], t[o])) return !1
                                } else {
                                    if (o = (a = D(e)).length, D(t).length !== o) return !1;
                                    for (; o--;) {
                                        var r = a[o];
                                        if (!t.hasOwnProperty(r) || !I(e[r], t[r])) return !1
                                    }
                                }
                                return n.pop(), i.pop(), !0
                            }

                            function M(e, t) {
                                return e /= 1e3, t && (e = Math.floor(e)), e
                            }

                            function P(e) {
                                var t = parseInt(e);
                                return null == e || isNaN(t) ? null : new Date(1e3 * t)
                            }

                            function U(e) {
                                return null != e && T(e) ? e.toISOString().replace(/\.[0-9]{3}Z$/, "") : e
                            }

                            function z(e) {
                                return null == e || "" === e ? null : new Date(e)
                            }

                            function L(e, t, a, n, i) {
                                this.gb = e, this.type = t, this.time = null == a || "" === a ? (new Date).valueOf() : a, this.sessionId = n, this.data = i
                            }

                            function R(e) {
                                return null != e && _(e) && null != e.t && "" !== e.t
                            }

                            function B(e) {
                                return new L(e.u, e.t, e.ts, e.s, e.d)
                            }

                            function F(e, t, a) {
                                null == e && (e = p.Ia()), (isNaN(a = parseInt(a)) || 0 === a) && (a = (new Date).valueOf()), this.ia = e, this.Ib = a, this.Ob = (new Date).valueOf(), this.Cd = t
                            }

                            function G(e) {
                                for (var t = e.length, a = e.length - 1; 0 <= a; a--) {
                                    var n = e.charCodeAt(a);
                                    127 < n && 2047 >= n ? t++ : 2047 < n && 65535 >= n && (t += 2), 56320 <= n && 57343 >= n && a--
                                }
                                return t
                            }

                            function j(e, t, a, n) {
                                return (n = "string" == typeof e || null === e && n) || A.error("Cannot " + t + " because " + a + ' "' + e + '" is invalid.'), n
                            }

                            function H(e, t, a) {
                                var n = null != e && "string" == typeof e && ("" === e || e.match(X));
                                return n || A.error("Cannot " + t + " because " + a + ' "' + e + '" is invalid.'), n
                            }

                            function K(e, t, n, i, o) {
                                if (null == e && (e = {}), "object" != typeof e || N(e)) return A.error(t + " requires that " + n + " be an object. Ignoring " + o + "."), [!1, null];
                                if (G(t = JSON.stringify(e)) > V) return A.error("Could not " + i + " because " + n + " was greater than the max size of " + Y + "."), [!1, null];
                                try {
                                    var r = JSON.parse(t)
                                } catch (e) {
                                    return A.error("Could not " + i + " because " + n + " did not contain valid JSON."), [!1, null]
                                }
                                for (var s in e) {
                                    if (!H(s, i, "the " + o + " property name")) return [!1, null];
                                    if (null == (n = e[s])) delete e[s], delete r[s];
                                    else {
                                        T(n) && (r[s] = U(n));
                                        var l = "the " + o + ' property "' + s + '"';
                                        if ((t = _(n) || N(n) ? function e(t, n) {
                                                if (N(t) && N(n)) {
                                                    for (var i = 0; i < t.length && i < n.length; i++)
                                                        if (T(t[i]) && (n[i] = U(t[i])), !e(t[i], n[i])) return !1
                                                } else {
                                                    if (!_(t)) return W(t);
                                                    i = a(D(t));
                                                    for (var o = i.next(); !o.done; o = i.next())
                                                        if (T(t[o = o.value]) && (n[o] = U(t[o])), !e(t[o], n[o])) return !1
                                                }
                                                return !0
                                            }(n, r[s]) : W(n)) || A.error("Cannot " + i + " because " + l + ' "' + n + '" is invalid.'), !t) return [!1, null]
                                    }
                                }
                                return [!0, r]
                            }

                            function W(e) {
                                var t = typeof e;
                                return null == e || "number" === t || "boolean" === t || T(e) || "string" === t
                            }
                            L.prototype.Ac = function() {
                                var e = {
                                    name: this.type,
                                    time: M(this.time),
                                    data: this.data || {},
                                    session_id: this.sessionId
                                };
                                return null != this.gb && (e.user_id = this.gb), e
                            }, L.prototype.A = function() {
                                return {
                                    u: this.gb,
                                    t: this.type,
                                    ts: this.time,
                                    s: this.sessionId,
                                    d: this.data
                                }
                            }, F.prototype.A = function() {
                                return {
                                    g: this.ia,
                                    e: this.Cd,
                                    c: this.Ib,
                                    l: this.Ob
                                }
                            };
                            var X = /^[^\x00-\x1F\x22]+$/,
                                q = new RegExp(/^.+@.+\..+$/),
                                V = 51200,
                                Y = "50KB",
                                J = {};

                            function Z(e, t) {
                                this.f = e, this.H = t
                            }(nS = Z.prototype).o = function(e) {
                                null == e && A.error("getUserId must be supplied with a callback. e.g., appboy.getUser().getUserId(function(userId) {console.log('the user id is ' + userId)})"), "function" == typeof e && e(this.f.o())
                            }, nS.Pg = function(e, t) {
                                if (!j(e, "add alias", "the alias", !1) || 0 >= e.length) return A.error("addAlias requires a non-empty alias"), !1;
                                if (!j(t, "add alias", "the label", !1) || 0 >= t.length) return A.error("addAlias requires a non-empty label"), !1;
                                var a = this.H,
                                    n = new t0,
                                    i = no(a.D),
                                    o = x.Df;
                                return n.j.push(new L(a.f.o(), o, (new Date).valueOf(), i, {
                                    a: e,
                                    l: t
                                })), n.h = ef(a.b, n.j), n.h
                            }, nS.Eh = function(e) {
                                return !!j(e, "set first name", "the firstName", !0) && ns(this.f, "first_name", e)
                            }, nS.Ih = function(e) {
                                return !!j(e, "set last name", "the lastName", !0) && ns(this.f, "last_name", e)
                            }, nS.Ch = function(e) {
                                return null === e || "string" == typeof e && null != e.toLowerCase().match(q) ? ns(this.f, "email", e) : (A.error('Cannot set email address - "' + e + '" did not pass RFC-5322 validation.'), !1)
                            }, nS.Fh = function(e) {
                                return "string" == typeof e && (e = e.toLowerCase()), !!(null === e || C(Q, e, 'Gender "' + e + '" is not a valid gender.', "User.Genders")) && ns(this.f, "gender", e)
                            }, nS.Bh = function(e, t, a) {
                                return null === e && null === t && null === a ? ns(this.f, "dob", null) : (e = parseInt(e), t = parseInt(t), a = parseInt(a), isNaN(e) || isNaN(t) || isNaN(a) || 12 < t || 1 > t || 31 < a || 1 > a ? (A.error("Cannot set date of birth - parameters should comprise a valid date e.g. setDateOfBirth(1776, 7, 4);"), !1) : ns(this.f, "dob", "" + e + "-" + t + "-" + a))
                            }, nS.yh = function(e) {
                                return !!j(e, "set country", "the country", !0) && ns(this.f, "country", e)
                            }, nS.Gh = function(e) {
                                return !!j(e, "set home city", "the homeCity", !0) && ns(this.f, "home_city", e)
                            }, nS.Hh = function(e) {
                                return !!j(e, "set language", "the language", !0) && ns(this.f, "language", e)
                            }, nS.Dh = function(e) {
                                return !!C(ee, e, 'Email notification setting "' + e + '" is not a valid subscription type.', "User.NotificationSubscriptionTypes") && ns(this.f, "email_subscribe", e)
                            }, nS.Ud = function(e) {
                                return !!C(ee, e, 'Push notification setting "' + e + '" is not a valid subscription type.', "User.NotificationSubscriptionTypes") && ns(this.f, "push_subscribe", e)
                            }, nS.Jh = function(e) {
                                return !!j(e, "set phone number", "the phoneNumber", !0) && (null === e || e.match($) ? ns(this.f, "phone", e) : (A.error('Cannot set phone number - "' + e + '" did not pass validation.'), !1))
                            }, nS.xh = function(e) {
                                return ns(this.f, "image_url", e)
                            }, nS.Oc = function(e, t, a, n, i) {
                                return null == e || null == t ? (A.error("Cannot set last-known location - latitude and longitude are required."), !1) : (e = parseFloat(e), t = parseFloat(t), null != a && (a = parseFloat(a)), null != n && (n = parseFloat(n)), null != i && (i = parseFloat(i)), isNaN(e) || isNaN(t) || null != a && isNaN(a) || null != n && isNaN(n) || null != i && isNaN(i) ? (A.error("Cannot set last-known location - all supplied parameters must be numeric."), !1) : 90 < e || -90 > e || 180 < t || -180 > t ? (A.error("Cannot set last-known location - latitude and longitude are bounded by \xb190 and \xb1180 respectively."), !1) : null != a && 0 > a || null != i && 0 > i ? (A.error("Cannot set last-known location - accuracy and altitudeAccuracy may not be negative."), !1) : this.H.Oc(this.f.o(), e, t, n, a, i).h)
                            }, nS.Sd = function(e, t) {
                                if (!H(e, "set custom user attribute", "the given key")) return !1;
                                var a = typeof t,
                                    n = T(t),
                                    i = N(t);
                                if ("number" !== a && "boolean" !== a && !n && !i && null !== t && !H(t, 'set custom user attribute "' + e + '"', "the given value")) return !1;
                                if (n && (t = U(t)), i) {
                                    for (a = 0; a < t.length; a++)
                                        if (!H(t[a], 'set custom user attribute "' + e + '"', "the element in the given array")) return !1;
                                    return aX(this.H, x.Qf, e, t).h
                                }
                                return this.f.Sd(e, t)
                            }, nS.Qg = function(e, t) {
                                return !!(H(e, "add to custom user attribute array", "the given key") && (null == t || H(t, "add to custom user attribute array", "the given value"))) && aX(this.H, x.Nf, e, t).h
                            }, nS.qh = function(e, t) {
                                return !!(H(e, "remove from custom user attribute array", "the given key") && (null == t || H(t, "remove from custom user attribute array", "the given value"))) && aX(this.H, x.Pf, e, t).h
                            }, nS.kh = function(e, t) {
                                if (!H(e, "increment custom user attribute", "the given key")) return !1;
                                null == t && (t = 1);
                                var a = parseInt(t);
                                return isNaN(a) || a !== parseFloat(t) ? (A.error('Cannot increment custom user attribute because the given incrementValue "' + t + '" is not an integer.'), !1) : aX(this.H, x.Of, e, a).h
                            }, nS.Pd = function(e, t, a, n, i) {
                                this.f.Pd(e, t, a, n, i), aV(this.H)
                            }, nS.Sb = function(e) {
                                this.f.Sb(e)
                            }, nS.Ah = function(e, t, a) {
                                if (!H(e, "set custom location attribute", "the given key")) return !1;
                                if ((null !== t || null !== a) && (t = parseFloat(t), a = parseFloat(a), isNaN(t) || 90 < t || -90 > t || isNaN(a) || 180 < a || -180 > a)) return A.error("Received invalid values for latitude and/or longitude. Latitude and longitude are bounded by \xb190 and \xb1180 respectively, or must both be null for removal."), !1;
                                var n = this.H,
                                    i = a;
                                if (a = new t0, na(n.J, e)) A.info('Custom Attribute "' + e + '" is blocklisted, ignoring.'), a.h = !1;
                                else {
                                    var o = no(n.D);
                                    if (null === t && null === i) {
                                        var r = x.kg;
                                        e = {
                                            key: e
                                        }
                                    } else r = x.jg, e = {
                                        key: e,
                                        latitude: t,
                                        longitude: i
                                    };
                                    a.j.push(new L(n.f.o(), r, (new Date).valueOf(), o, e)), a.h = ef(n.b, a.j)
                                }
                                return a.h
                            }, nS.Rg = function(e) {
                                return !j(e, "add user to subscription group", "subscription group ID", !1) || 0 >= e.length ? (A.error("addToSubscriptionGroup requires a non-empty subscription group ID"), !1) : aY(this.H, e, et).h
                            }, nS.rh = function(e) {
                                return !j(e, "remove user from subscription group", "subscription group ID", !1) || 0 >= e.length ? (A.error("removeFromSubscriptionGroup requires a non-empty subscription group ID"), !1) : aY(this.H, e, ea).h
                            };
                            var $ = /^[0-9 .\\(\\)\\+\\-]+$/,
                                Q = {
                                    MALE: "m",
                                    FEMALE: "f",
                                    OTHER: "o",
                                    UNKNOWN: "u",
                                    NOT_APPLICABLE: "n",
                                    PREFER_NOT_TO_SAY: "p"
                                },
                                ee = {
                                    OPTED_IN: "opted_in",
                                    SUBSCRIBED: "subscribed",
                                    UNSUBSCRIBED: "unsubscribed"
                                },
                                et = "subscribed",
                                ea = "unsubscribed";

                            function en() {}

                            function ei(e, t) {
                                if (e && t) {
                                    if (e = e.toLowerCase(), N(t.O)) {
                                        for (var a = 0; a < t.O.length; a++)
                                            if (-1 !== e.indexOf(t.O[a].toLowerCase())) return t.S
                                    } else if (-1 !== e.indexOf(t.O.toLowerCase())) return t.S
                                }
                            }
                            J.User = Z, J.User.Genders = Q, J.User.NotificationSubscriptionTypes = ee, J.User.prototype.getUserId = Z.prototype.o, J.User.prototype.setFirstName = Z.prototype.Eh, J.User.prototype.setLastName = Z.prototype.Ih, J.User.prototype.setEmail = Z.prototype.Ch, J.User.prototype.setGender = Z.prototype.Fh, J.User.prototype.setDateOfBirth = Z.prototype.Bh, J.User.prototype.setCountry = Z.prototype.yh, J.User.prototype.setHomeCity = Z.prototype.Gh, J.User.prototype.setLanguage = Z.prototype.Hh, J.User.prototype.setEmailNotificationSubscriptionType = Z.prototype.Dh, J.User.prototype.setPushNotificationSubscriptionType = Z.prototype.Ud, J.User.prototype.setPhoneNumber = Z.prototype.Jh, J.User.prototype.setAvatarImageUrl = Z.prototype.xh, J.User.prototype.setLastKnownLocation = Z.prototype.Oc, J.User.prototype.setCustomUserAttribute = Z.prototype.Sd, J.User.prototype.addToCustomAttributeArray = Z.prototype.Qg, J.User.prototype.removeFromCustomAttributeArray = Z.prototype.qh, J.User.prototype.incrementCustomUserAttribute = Z.prototype.kh, J.User.prototype.addAlias = Z.prototype.Pg, J.User.prototype.setCustomLocationAttribute = Z.prototype.Ah, J.User.prototype.addToSubscriptionGroup = Z.prototype.Rg, J.User.prototype.removeFromSubscriptionGroup = Z.prototype.rh, en.prototype.Ed = function() {}, en.prototype.Fd = function() {}, en.prototype.qb = function() {};
                            var eo = {
                                ae: "Chrome",
                                Wc: "Edge",
                                dc: "Internet Explorer",
                                le: "Opera",
                                hd: "Safari",
                                Zh: "Firefox"
                            };

                            function er() {
                                if (this.userAgentData = navigator.userAgentData) {
                                    var e = this.userAgentData.brands;
                                    if (e && e.length) {
                                        e = a(e);
                                        for (var t = e.next(); !t.done; t = e.next()) {
                                            t = t.value;
                                            var n = void 0,
                                                i = [];
                                            for (n in eo) eo[n] !== eo.dc && i.push(eo[n]);
                                            if ((n = t.brand.match(RegExp("(" + i.join("|") + ")", "i"))) && 0 < n.length) {
                                                var o = n[0],
                                                    r = t.version;
                                                break
                                            }
                                        }
                                    }
                                    this.Ya = o || "Unknown Browser", this.version = r || "Unknown Version"
                                }
                            }

                            function es() {
                                this.We = function() {
                                    var e = navigator.userAgent || "",
                                        t = e.match(/(samsungbrowser|tizen|roku|konqueror|icab|crios|opera|ucbrowser|chrome|safari|firefox|camino|msie|trident(?=\/))\/?\s*(\.?\d+(\.\d+)*)/i) || [];
                                    if (/trident/i.test(t[1])) {
                                        var a = /\brv[ :]+(\.?\d+(\.\d+)*)/g.exec(e) || [];
                                        return [eo.dc, a[1] || ""]
                                    }
                                    return -1 !== e.indexOf("(Web0S; Linux/SmartTV)") ? ["LG Smart TV", null] : -1 !== e.indexOf("CrKey") ? ["Chromecast", null] : -1 !== e.indexOf("BRAVIA") || -1 !== e.indexOf("SonyCEBrowser") || -1 !== e.indexOf("SonyDTV") ? ["Sony Smart TV", null] : -1 !== e.indexOf("PhilipsTV") ? ["Philips Smart TV", null] : e.match(/\b(Roku)\b/) ? ["Roku", null] : e.match(/\bAFTM\b/) ? ["Amazon Fire Stick", null] : t[1] === eo.ae && null != (a = e.match(/\b(OPR|Edge|EdgA|Edg|UCBrowser)\/(\.?\d+(\.\d+)*)/)) ? ((a = a.slice(1))[0] = a[0].replace("OPR", eo.le), a[0] = a[0].replace("EdgA", eo.Wc), "Edg" === a[0] && (a[0] = eo.Wc), [a[0], a[1]]) : t[1] === eo.hd && null != (a = e.match(/\b(EdgiOS)\/(\.?\d+(\.\d+)*)/)) ? ((a = a.slice(1))[0] = a[0].replace("EdgiOS", eo.Wc), [a[0], a[1]]) : ((t = t[2] ? [t[1], t[2]] : [null, null])[0] === eo.hd && null != (a = e.match(/version\/(\.?\d+(\.\d+)*)/i)) && t.splice(1, 1, a[1]), null != (a = e.match(/\b(UCBrowser)\/(\.?\d+(\.\d+)*)/)) && t.splice(1, 1, a[2]), t[0] === eo.le && null != (a = e.match(/mini\/(\.?\d+(\.\d+)*)/i))) ? ["Opera Mini", a[1] || ""] : (t[0] && ("msie" === (e = t[0].toLowerCase()) && (t[0] = eo.dc), "crios" === e && (t[0] = eo.ae), "tizen" === e && (t[0] = "Samsung Smart TV", t[1] = null), "samsungbrowser" === e && (t[0] = "Samsung Browser")), t)
                                }()
                            }

                            function el() {
                                var e = this;
                                this.Md = new(navigator.userAgentData ? er : es), this.userAgent = navigator.userAgent, this.Ya = this.Md.Ed(), this.version = this.Md.Fd(), this.qb().then(function(t) {
                                    return e.ga = t
                                }), this.language = (navigator.ji || navigator.language || navigator.browserLanguage || navigator.ii || "").toLowerCase(), this.lh = function(e) {
                                    e = e.toLowerCase();
                                    for (var t = "googlebot bingbot slurp duckduckbot baiduspider yandex facebookexternalhit sogou ia_archiver https://github.com/prerender/prerender aolbuild bingpreview msnbot adsbot mediapartners-google teoma".split(" "), a = 0; a < t.length; a++)
                                        if (-1 !== e.indexOf(t[a])) return !0;
                                    return !1
                                }(this.userAgent)
                            }
                            u(er, en), er.prototype.Ed = function() {
                                return this.Ya
                            }, er.prototype.Fd = function() {
                                return this.version
                            }, er.prototype.qb = function(e) {
                                var t = this;
                                return this.ga ? Promise.resolve(this.ga) : (this.userAgentData.getHighEntropyValues ? this.userAgentData.getHighEntropyValues(["platform"]) : Promise.reject()).then(function(a) {
                                    a = a.platform;
                                    for (var n = 0; n < e.length; n++) {
                                        var i = ei(a, e[n]);
                                        if (i) return t.ga = i, t.ga
                                    }
                                    return a
                                }).catch(function() {
                                    return navigator.platform
                                })
                            }, u(es, en), es.prototype.Ed = function() {
                                return this.We[0] || "Unknown Browser"
                            }, es.prototype.Fd = function() {
                                return this.We[1] || "Unknown Version"
                            }, es.prototype.qb = function(e) {
                                for (var t = 0; t < e.length; t++) {
                                    var a = ei(e[t].U, e[t]);
                                    if (a) return "Mac" === a && 1 < navigator.maxTouchPoints && (a = "iOS"), Promise.resolve(a)
                                }
                                return Promise.resolve(navigator.platform)
                            }, el.prototype.qb = function() {
                                var e = this;
                                return this.ga ? Promise.resolve(this.ga) : this.Md.qb(ec).then(function(t) {
                                    return e.ga = t
                                })
                            };
                            var ec = [{
                                    U: navigator.platform,
                                    O: "Win",
                                    S: "Windows"
                                }, {
                                    U: navigator.platform,
                                    O: "Mac",
                                    S: "Mac"
                                }, {
                                    U: navigator.platform,
                                    O: "BlackBerry",
                                    S: "BlackBerry"
                                }, {
                                    U: navigator.platform,
                                    O: "FreeBSD",
                                    S: "FreeBSD"
                                }, {
                                    U: navigator.platform,
                                    O: "OpenBSD",
                                    S: "OpenBSD"
                                }, {
                                    U: navigator.platform,
                                    O: "Nintendo",
                                    S: "Nintendo"
                                }, {
                                    U: navigator.platform,
                                    O: "SunOS",
                                    S: "SunOS"
                                }, {
                                    U: navigator.platform,
                                    O: "PlayStation",
                                    S: "PlayStation"
                                }, {
                                    U: navigator.platform,
                                    O: "X11",
                                    S: "X11"
                                }, {
                                    U: navigator.userAgent,
                                    O: ["iPhone", "iPad", "iPod"],
                                    S: "iOS"
                                }, {
                                    U: navigator.platform,
                                    O: "Pike v",
                                    S: "iOS"
                                }, {
                                    U: navigator.userAgent,
                                    O: ["Web0S"],
                                    S: "WebOS"
                                }, {
                                    U: navigator.platform,
                                    O: ["Linux armv7l", "Android"],
                                    S: "Android"
                                }, {
                                    U: navigator.userAgent,
                                    O: ["Android"],
                                    S: "Android"
                                }, {
                                    U: navigator.platform,
                                    O: "Linux",
                                    S: "Linux"
                                }],
                                eu = new el;

                            function eb(e, t) {
                                this.rc = e, this.R = t
                            }

                            function ep(e, t, a) {
                                var n = a;
                                null != a && a instanceof F && (n = a.A()), e.rc.store(t, n)
                            }

                            function ed(e, t) {
                                var a = eh(e, t);
                                null != a && (a.Ob = (new Date).valueOf(), ep(e, t, a))
                            }

                            function eh(e, t) {
                                return null == (e = e.rc.Z(t)) || null == e.g ? e = null : ((t = new F(e.g, e.e, e.c)).Ob = e.l, e = t), e
                            }

                            function ef(e, t) {
                                if (null == t || 0 === t.length) return !1;
                                N(t) || (t = [t]);
                                var a = e.R.Z(eE.Wb);
                                null != a && N(a) || (a = []);
                                for (var n = 0; n < t.length; n++) a.push(t[n].A());
                                return e.R.store(eE.Wb, a)
                            }

                            function eg(e) {
                                var t = e.R.Z(eE.Wb);
                                e.R.remove(eE.Wb), null == t && (t = []), e = [];
                                var a = !1,
                                    n = null;
                                if (N(t))
                                    for (var i = 0; i < t.length; i++) R(t[i]) ? e.push(B(t[i])) : n = i;
                                else a = !0;
                                return (a || null != n) && (i = "Stored events could not be deserialized as Events", a && (i += ", was " + Object.prototype.toString.call(t) + " not an array"), null != n && (i += ", value at index " + n + " does not look like an event"), i += ", serialized values were of type " + typeof t + ": " + JSON.stringify(t), e.push(new L(null, x.Yc, (new Date).valueOf(), null, {
                                    e: i
                                }))), e
                            }

                            function em(e, t, a) {
                                C(eE, t, "StorageManager cannot store object.", "StorageManager.KEYS.OBJECTS") && e.R.store(t, a)
                            }

                            function ev(e, t) {
                                return !!C(eE, t, "StorageManager cannot retrieve object.", "StorageManager.KEYS.OBJECTS") && e.R.Z(t)
                            }

                            function ew(e, t) {
                                C(eE, t, "StorageManager cannot remove object.", "StorageManager.KEYS.OBJECTS") && e.R.remove(t)
                            }

                            function ey(e, t) {
                                var a = e.R.Z(eE.Qa);
                                null == a && (a = {});
                                var n, i = t.user_id || eE.Qc;
                                for (n in t) "user_id" === n || null != a[i] && null != a[i][n] || ex(e, t.user_id, n, t[n])
                            }

                            function ex(e, t, a, n) {
                                var i = e.R.Z(eE.Qa);
                                null == i && (i = {});
                                var o = t || eE.Qc,
                                    r = i[o];
                                if (null == r && (r = {}, null != t && (r.user_id = t)), "custom" === a)
                                    for (var s in null == r[a] && (r[a] = {}), n) r[a][s] = n[s];
                                else r[a] = n;
                                return i[o] = r, e.R.store(eE.Qa, i)
                            }
                            eb.prototype.clearData = function() {
                                for (var e = D(ek), t = D(eE), a = 0; a < e.length; a++) this.rc.remove(ek[e[a]]);
                                for (e = 0; e < t.length; e++) this.R.remove(eE[t[e]])
                            };
                            var ek = {
                                    lc: "ab.storage.userId",
                                    Uc: "ab.storage.deviceId",
                                    Ta: "ab.storage.sessionId"
                                },
                                eE = {
                                    jd: "ab.test",
                                    Wb: "ab.storage.events",
                                    Qa: "ab.storage.attributes",
                                    Qc: "ab.storage.attributes.anonymous_user",
                                    cc: "ab.storage.device",
                                    se: "ab.storage.sdk_metadata",
                                    ue: "ab.storage.session_id_for_cached_metadata",
                                    kc: "ab.storage.pushToken",
                                    dd: "ab.storage.newsFeed",
                                    bd: "ab.storage.lastNewsFeedRefresh",
                                    vb: "ab.storage.cardImpressions",
                                    te: "ab.storage.serverConfig",
                                    kd: "ab.storage.triggers",
                                    md: "ab.storage.triggers.ts",
                                    hg: "ab.storage.lastTriggeredTime",
                                    gg: "ab.storage.lastTriggeredTimesById",
                                    ig: "ab.storage.lastTriggerEventDataById",
                                    hc: "ab.storage.messagingSessionStart",
                                    wb: "ab.storage.cc",
                                    ac: "ab.storage.ccLastFullSync",
                                    $b: "ab.storage.ccLastCardUpdated",
                                    hb: "ab.storage.ccClicks",
                                    ib: "ab.storage.ccImpressions",
                                    ua: "ab.storage.ccDismissals",
                                    fc: "ab.storage.lastDisplayedTriggerTimesById",
                                    ad: "ab.storage.lastDisplayedTriggerTime",
                                    zb: "ab.storage.triggerFireInstancesById",
                                    jb: "ab.storage.signature"
                                };

                            function eA(e) {
                                this.$ = e, this.df = eu.Ya === eo.hd ? 3 : 10
                            }

                            function eS(e, t) {
                                this.$ = e, e = 0;
                                for (var a = document.location.hostname, n = a.split("."); e < n.length - 1 && -1 === document.cookie.indexOf("ab._gd=ab._gd");) e++, a = "." + n.slice(-1 - e).join("."), document.cookie = "ab._gd=ab._gd;domain=" + a + ";";
                                document.cookie = "ab._gd=;expires=" + new Date(0).toGMTString() + ";domain=" + a + ";", this.Me = a, this.Ee = 525949, this.Qe = !!t
                            }

                            function eC(e) {
                                var t = new Date;
                                return t.setTime(t.getTime() + 6e4 * e.Ee), t.getFullYear()
                            }

                            function eN(e, t) {
                                t = t + "=;expires=" + new Date(0).toGMTString(), document.cookie = t, document.cookie = t + ";path=/", document.cookie = t + ";path=" + document.location.pathname, e = t + ";domain=" + e.Me, document.cookie = e, document.cookie = e + ";path=/", document.cookie = e + ";path=" + document.location.pathname
                            }

                            function eT() {
                                this.ud = {}, this.Ke = 5242880, this.df = 3
                            }

                            function e_(e, t, a) {
                                this.ma = [], t && this.ma.push(new eS(e)), a && this.ma.push(new eA(e)), this.ma.push(new eT)
                            }

                            function eD() {
                                this.Fb = {}
                            }

                            function eO(e, t) {
                                if ("function" != typeof t) return null;
                                var a = p.Ia();
                                return e.Fb[a] = t, a
                            }

                            function eI(e, t) {
                                var a, n = [];
                                for (a in e.Fb) n.push(e.Fb[a](t))
                            }

                            function eM() {
                                if (null == eB) {
                                    eB = !1;
                                    try {
                                        var e = Object.defineProperty({}, "passive", {
                                            get: function() {
                                                eB = !0
                                            }
                                        });
                                        window.addEventListener("testPassive", null, e), window.removeEventListener("testPassive", null, e)
                                    } catch (e) {}
                                }
                                return eB
                            }

                            function eP(e, t, a) {
                                e.addEventListener(t, a, !!eM() && {
                                    passive: !0
                                })
                            }

                            function eU(e, t, a, n) {
                                return null != e && (t = t || !1, a = a || !1, null != (e = e.getBoundingClientRect()) && (0 <= e.top && e.top <= (window.innerHeight || document.documentElement.clientHeight) || !t) && (0 <= e.left || !n) && (0 <= e.bottom && e.bottom <= (window.innerHeight || document.documentElement.clientHeight) || !a) && (e.right <= (window.innerWidth || document.documentElement.clientWidth) || !n))
                            }

                            function ez(e) {
                                if (e.onclick) {
                                    var t = document.createEvent("MouseEvents");
                                    t.initEvent("click", !0, !0), e.onclick.apply(e, [t])
                                }
                            }

                            function eL(e, t, a) {
                                var n = null,
                                    i = null;
                                eP(e, "touchstart", function(e) {
                                    n = e.touches[0].clientX, i = e.touches[0].clientY
                                }), eP(e, "touchmove", function(o) {
                                    if (null != n && null != i) {
                                        var r = n - o.touches[0].clientX,
                                            s = i - o.touches[0].clientY;
                                        Math.abs(r) > Math.abs(s) && 25 <= Math.abs(r) ? (0 < r && t === ej ? a(o) : 0 > r && t === eH && a(o), i = n = null) : 25 <= Math.abs(s) && (0 < s && t === eF && e.scrollTop === e.scrollHeight - e.offsetHeight ? a(o) : 0 > s && t === eG && 0 === e.scrollTop && a(o), i = n = null)
                                    }
                                })
                            }

                            function eR(e, t, a) {
                                var n = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                                return n.setAttribute("viewBox", e), n.setAttribute("xmlns", "http://www.w3.org/2000/svg"), (e = document.createElementNS("http://www.w3.org/2000/svg", "path")).setAttribute("d", t), null != a && e.setAttribute("fill", a), n.appendChild(e), n
                            }
                            eA.prototype.Xa = function(e) {
                                return e + "." + this.$
                            }, eA.prototype.store = function(e, t) {
                                t = {
                                    v: t
                                };
                                try {
                                    return localStorage.setItem(this.Xa(e), JSON.stringify(t)), !0
                                } catch (e) {
                                    return A.info("Storage failure: " + e.message), !1
                                }
                            }, eA.prototype.Z = function(e) {
                                try {
                                    var t = JSON.parse(localStorage.getItem(this.Xa(e)));
                                    return null == t ? null : t.v
                                } catch (e) {
                                    return A.info("Storage retrieval failure: " + e.message), null
                                }
                            }, eA.prototype.remove = function(e) {
                                try {
                                    localStorage.removeItem(this.Xa(e))
                                } catch (e) {
                                    return A.info("Storage removal failure: " + e.message), !1
                                }
                            }, eS.prototype.Xa = function(e) {
                                return null != this.$ ? e + "." + this.$ : e
                            }, eS.prototype.store = function(e, t) {
                                for (var a = O(ek), n = document.cookie.split(";"), i = 0; i < n.length; i++) {
                                    for (var o = n[i];
                                        " " === o.charAt(0);) o = o.substring(1);
                                    for (var r = !1, s = 0; s < a.length; s++)
                                        if (0 === o.indexOf(a[s])) {
                                            r = !0;
                                            break
                                        }
                                    r && -1 === (o = o.split("=")[0]).indexOf("." + this.$) && eN(this, o)
                                }
                                return ((a = new Date).setTime(a.getTime() + 6e4 * this.Ee), a = "expires=" + a.toUTCString(), n = "domain=" + this.Me, t = this.Qe ? t : encodeURIComponent(JSON.stringify(t)), 4093 <= (e = this.Xa(e) + "=" + t + ";" + a + ";" + n + ";path=/").length) ? (A.info("Storage failure: string is " + e.length + " chars which is too large to store as a cookie."), !1) : (document.cookie = e, !0)
                            }, eS.prototype.Z = function(e) {
                                for (var t = [], a = this.Xa(e) + "=", n = document.cookie.split(";"), i = 0; i < n.length; i++) {
                                    for (var o = n[i];
                                        " " === o.charAt(0);) o = o.substring(1);
                                    if (0 === o.indexOf(a)) try {
                                        var r = void 0;
                                        r = this.Qe ? o.substring(a.length, o.length) : JSON.parse(decodeURIComponent(o.substring(a.length, o.length))), t.push(r)
                                    } catch (t) {
                                        return A.info("Storage retrieval failure: " + t.message), this.remove(e), null
                                    }
                                }
                                return 0 < t.length ? t[t.length - 1] : null
                            }, eS.prototype.remove = function(e) {
                                eN(this, this.Xa(e))
                            }, eT.prototype.store = function(e, t) {
                                var a = {
                                        value: t
                                    },
                                    n = [];
                                t = [t];
                                for (var i = 0; t.length;) {
                                    var o = t.pop();
                                    if ("boolean" == typeof o) i += 4;
                                    else if ("string" == typeof o) i += 2 * o.length;
                                    else if ("number" == typeof o) i += 8;
                                    else if ("object" == typeof o && -1 === n.indexOf(o))
                                        for (var r in n.push(o), o) t.push(o[r])
                                }
                                return (n = i) > this.Ke ? (A.info("Storage failure: object is ≈" + n + " bytes which is greater than the max of " + this.Ke), !1) : (this.ud[e] = a, !0)
                            }, eT.prototype.Z = function(e) {
                                return null == (e = this.ud[e]) ? null : e.value
                            }, eT.prototype.remove = function(e) {
                                this.ud[e] = null
                            }, e_.prototype.store = function(e, t) {
                                for (var a = !0, n = 0; n < this.ma.length; n++) a = this.ma[n].store(e, t) && a;
                                return a
                            }, e_.prototype.Z = function(e) {
                                for (var t = 0; t < this.ma.length; t++) {
                                    var a = this.ma[t].Z(e);
                                    if (null != a) return a
                                }
                                return null
                            }, e_.prototype.remove = function(e) {
                                for (var t = 0; t < this.ma.length; t++) this.ma[t].remove(e)
                            }, eD.prototype.N = function(e) {
                                delete this.Fb[e]
                            }, eD.prototype.K = function() {
                                this.Fb = {}
                            };
                            var eB = null,
                                eF = "up",
                                eG = "down",
                                ej = "left",
                                eH = "right";

                            function eK(e, t, a) {
                                var n = document.createElement("button");
                                return n.setAttribute("aria-label", e), n.setAttribute("tabindex", "0"), n.setAttribute("role", "button"), eP(n, "touchstart", function() {}), n.className = "ab-close-button", e = eR("0 0 15 15", "M15 1.5L13.5 0l-6 6-6-6L0 1.5l6 6-6 6L1.5 15l6-6 6 6 1.5-1.5-6-6 6-6z", t), n.appendChild(e), n.addEventListener("keydown", function(e) {
                                    (32 === e.keyCode || 13 === e.keyCode) && (a(), e.stopPropagation())
                                }), n.onclick = function(e) {
                                    a(), e.stopPropagation()
                                }, n
                            }
                            var eW = {
                                nh: function() {
                                    return 600 >= screen.width
                                },
                                hh: function() {
                                    if ("orientation" in window) return 90 === Math.abs(window.orientation) || 270 === window.orientation ? eW.Sa.Zc : eW.Sa.jc;
                                    if ("screen" in window) {
                                        var e = window.screen.orientation || screen.ci || screen.ei;
                                        if (null != e && "object" == typeof e && (e = e.type), "landscape-primary" === e || "landscape-secondary" === e) return eW.Sa.Zc
                                    }
                                    return eW.Sa.jc
                                },
                                oh: function(e, t, a) {
                                    a || null != t && t.metaKey ? window.open(e) : window.location = e
                                },
                                Sa: {
                                    jc: 0,
                                    Zc: 1
                                }
                            };

                            function eX(e, t, a, n, i, o, r, s, l, c, u, b, p, d, h, f) {
                                this.id = e, this.viewed = t || !1, this.title = a || "", this.imageUrl = n, this.description = i || "", this.created = o || null, this.updated = r || null, this.categories = s || [], this.expiresAt = l || null, this.url = c, this.linkText = u, b = parseFloat(b), this.aspectRatio = isNaN(b) ? null : b, this.extras = p, this.pinned = d || !1, this.dismissible = h || !1, this.dismissed = !1, this.clicked = f || !1, this.test = !1, this.pd = this.X = null
                            }

                            function eq(e) {
                                return null == e.X && (e.X = new eD), e.X
                            }

                            function eV(e) {
                                return null == e.pd && (e.pd = new eD), e.pd
                            }

                            function eY(e, t) {
                                if (null == t || t[e1.wa] !== e.id) return !0;
                                if (t[e1.pe]) return !1;
                                if (null != t[e1.ea] && null != e.updated && t[e1.ea] < M(e.updated.valueOf())) return !0;
                                if (t[e1.za] && !e.viewed && (e.viewed = !0), t[e1.ta] && !e.clicked && (e.clicked = t[e1.ta]), null != t[e1.Ua] && (e.title = t[e1.Ua]), null != t[e1.xa] && (e.imageUrl = t[e1.xa]), null != t[e1.Ra] && (e.description = t[e1.Ra]), null != t[e1.ea]) {
                                    var a = P(t[e1.ea]);
                                    null != a && (e.updated = a)
                                }
                                return null != t[e1.ca] && (e.expiresAt = t[e1.ca] === eQ ? null : P(t[e1.ca])), null != t[e1.URL] && (e.url = t[e1.URL]), null != t[e1.ya] && (e.linkText = t[e1.ya]), null != t[e1.sa] && (a = parseFloat(t[e1.sa]), e.aspectRatio = isNaN(a) ? null : a), null != t[e1.ka] && (e.extras = t[e1.ka]), null != t[e1.la] && (e.pinned = t[e1.la]), null != t[e1.va] && (e.dismissible = t[e1.va]), null != t[e1.V] && (e.test = t[e1.V]), !0
                            }

                            function eJ(e) {
                                if (e[e1.pe]) return null;
                                var t = e[e1.wa],
                                    a = e[e1.TYPE],
                                    n = e[e1.za],
                                    i = e[e1.Ua],
                                    o = e[e1.xa],
                                    r = e[e1.Ra],
                                    s = P(e[e1.ea]),
                                    l = e[e1.ca] === eQ ? null : P(e[e1.ca]),
                                    c = e[e1.URL],
                                    u = e[e1.ya],
                                    b = e[e1.sa],
                                    p = e[e1.ka],
                                    d = e[e1.la],
                                    h = e[e1.va],
                                    f = e[e1.ta];
                                if (e = e[e1.V] || !1, a === e0.xe || a === e0.ic) t = new e8(t, n, i, o, r, null, s, null, l, c, u, b, p, d, h, f);
                                else if (a === e0.Yb) t = new e4(t, n, i, o, r, null, s, null, l, c, u, b, p, d, h, f);
                                else if (a === e0.Xb) t = new e2(t, n, o, null, s, null, l, c, u, b, p, d, h, f);
                                else {
                                    if (a !== e0.Sc) return A.error("Ignoring card with unknown type " + a), null;
                                    t = new e7(t, n, s, l, p, d)
                                }
                                return t.test = e, t
                            }

                            function eZ(e) {
                                var t = e[e3.wa],
                                    a = e[e3.TYPE],
                                    n = e[e3.za],
                                    i = e[e3.Ua],
                                    o = e[e3.xa],
                                    r = e[e3.Ra],
                                    s = z(e[e3.bc]),
                                    l = z(e[e3.ea]),
                                    c = e[e3.Zb],
                                    u = z(e[e3.ca]),
                                    b = e[e3.URL],
                                    p = e[e3.ya],
                                    d = e[e3.sa],
                                    h = e[e3.ka],
                                    f = e[e3.la],
                                    g = e[e3.va],
                                    m = e[e3.ta];
                                if (e = e[e3.V] || !1, a === e0.ic) t = new e8(t, n, i, o, r, s, l, c, u, b, p, d, h, f, g, m);
                                else if (a === e0.Yb) t = new e4(t, n, i, o, r, s, l, c, u, b, p, d, h, f, g, m);
                                else if (a === e0.Xb) t = new e2(t, n, o, s, l, c, u, b, p, d, h, f, g, m);
                                else {
                                    if (a !== e0.Sc) return;
                                    t = new e7(t, n, l, u, h, f)
                                }
                                return t.test = e, t
                            }

                            function e$(e) {
                                null != e && null != (e = e.querySelectorAll(".ab-unread-indicator")[0]) && (e.className += " read")
                            }
                            J.WindowUtils = eW, J.WindowUtils.openUri = eW.oh, (nS = eX.prototype).Vb = function(e) {
                                return eO(eq(this), e)
                            }, nS.Wd = function(e) {
                                return eO(eV(this), e)
                            }, nS.N = function(e) {
                                eq(this).N(e), eV(this).N(e)
                            }, nS.K = function() {
                                eq(this).K(), eV(this).K()
                            }, nS.Od = function() {
                                this.viewed = !0
                            }, nS.fb = function() {
                                this.clicked = this.viewed = !0, eI(eq(this))
                            }, nS.Nd = function() {
                                return !!this.dismissible && !this.dismissed && (this.dismissed = !0, eI(eV(this)), !0)
                            }, nS.aa = function(e, t, a) {
                                function n(t) {
                                    return e$(o), r && (e(i), eW.openUri(i.url, t, a)), !1
                                }
                                var i = this,
                                    o = document.createElement("div");
                                o.className = "ab-card ab-effect-card " + this.Dc, o.setAttribute("data-ab-card-id", this.id), o.setAttribute("role", "article"), o.setAttribute("tabindex", "0");
                                var r = this.url && "" !== this.url;
                                if (this.pinned) {
                                    var s = document.createElement("div");
                                    s.className = "ab-pinned-indicator";
                                    var l = document.createElement("i");
                                    l.className = "fa fa-star", s.appendChild(l), o.appendChild(s)
                                }
                                if (this.imageUrl && "" !== this.imageUrl && ((s = document.createElement("div")).className = "ab-image-area", (l = document.createElement("img")).setAttribute("src", this.imageUrl), this.xc(l), s.appendChild(l), o.className += " with-image", r && !this.Gc ? ((l = document.createElement("a")).setAttribute("href", this.url), l.onclick = n, l.appendChild(s), o.appendChild(l)) : o.appendChild(s)), (s = document.createElement("div")).className = "ab-card-body", this.dismissible) {
                                    this.Je = t;
                                    var c = eK("Dismiss Card", void 0, this.bf.bind(this));
                                    o.appendChild(c), eL(s, ej, function(e) {
                                        o.className += " ab-swiped-left", c.onclick(e)
                                    }), eL(s, eH, function(e) {
                                        o.className += " ab-swiped-right", c.onclick(e)
                                    })
                                }
                                if (t = this.title && "" !== this.title) {
                                    if ((l = document.createElement("h1")).className = "ab-title", l.id = p.Ia(), o.setAttribute("aria-labelledby", l.id), r) {
                                        var u = document.createElement("a");
                                        u.setAttribute("href", this.url), u.onclick = n, u.appendChild(document.createTextNode(this.title)), l.appendChild(u)
                                    } else l.appendChild(document.createTextNode(this.title));
                                    s.appendChild(l)
                                }
                                return (l = document.createElement("div")).className = t ? "ab-description" : "ab-description ab-no-title", l.id = p.Ia(), o.setAttribute("aria-describedby", l.id), l.appendChild(document.createTextNode(this.description)), r && ((t = document.createElement("div")).className = "ab-url-area", (u = document.createElement("a")).setAttribute("href", this.url), u.appendChild(document.createTextNode(this.linkText)), u.onclick = n, t.appendChild(u), l.appendChild(t)), s.appendChild(l), o.appendChild(s), (s = document.createElement("div")).className = "ab-unread-indicator", this.viewed && (s.className += " read"), o.appendChild(s), this.Gg = o
                            }, nS.xc = function(e) {
                                var t = "";
                                this.title || this.description || (t = "Feed Image"), e.setAttribute("alt", t)
                            }, nS.bf = function() {
                                if (this.dismissible && !this.dismissed) {
                                    this.Je && this.Je(this);
                                    var e = this.Gg;
                                    e && (e.style.height = e.offsetHeight + "px", e.className += " ab-hide", setTimeout(function() {
                                        e && e.parentNode && (e.style.height = "0", e.style.margin = "0", setTimeout(function() {
                                            e && e.parentNode && e.parentNode.removeChild(e)
                                        }, e5))
                                    }, tY))
                                }
                            };
                            var eQ = -1,
                                e0 = {
                                    Yb: "captioned_image",
                                    xe: "text_announcement",
                                    ic: "short_news",
                                    Xb: "banner_image",
                                    Sc: "control"
                                },
                                e1 = {
                                    wa: "id",
                                    za: "v",
                                    va: "db",
                                    pe: "r",
                                    ea: "ca",
                                    la: "p",
                                    ca: "ea",
                                    ka: "e",
                                    TYPE: "tp",
                                    xa: "i",
                                    Ua: "tt",
                                    Ra: "ds",
                                    URL: "u",
                                    ya: "dm",
                                    sa: "ar",
                                    ta: "cl",
                                    V: "t"
                                },
                                e3 = {
                                    wa: "id",
                                    za: "v",
                                    va: "db",
                                    bc: "cr",
                                    ea: "ca",
                                    la: "p",
                                    Zb: "t",
                                    ca: "ea",
                                    ka: "e",
                                    TYPE: "tp",
                                    xa: "i",
                                    Ua: "tt",
                                    Ra: "ds",
                                    URL: "u",
                                    ya: "dm",
                                    sa: "ar",
                                    ta: "cl",
                                    V: "s"
                                },
                                e5 = 400;

                            function e2(e, t, a, n, i, o, r, s, l, c, u, b, p, d) {
                                eX.call(this, e, t, null, a, null, n, i, o, r, s, l, c, u, b, p, d), this.Dc = "ab-banner", this.Gc = !1
                            }

                            function e4(e, t, a, n, i, o, r, s, l, c, u, b, p, d, h, f) {
                                eX.call(this, e, t, a, n, i, o, r, s, l, c, u, b, p, d, h, f), this.Dc = "ab-captioned-image", this.Gc = !0
                            }

                            function e8(e, t, a, n, i, o, r, s, l, c, u, b, p, d, h, f) {
                                eX.call(this, e, t, a, n, i, o, r, s, l, c, u, b, p, d, h, f), this.Dc = "ab-classic-card", this.Gc = !0
                            }

                            function e7(e, t, a, n, i, o) {
                                eX.call(this, e, t, null, null, null, null, a, null, n, null, null, null, i, o, null), this.Dc = "ab-control-card", this.Gc = !1
                            }

                            function e6(e) {
                                if (isNaN(e = parseInt(e))) return "";
                                var t = parseFloat(t);
                                isNaN(t) && (t = 1);
                                var a = 255 & (e >>>= 0),
                                    n = (65280 & e) >>> 8,
                                    i = (16711680 & e) >>> 16;
                                return (eu.Ya === eo.dc ? 8 < eu.version : 1) ? "rgba(" + [i, n, a, ((4278190080 & e) >>> 24) / 255 * t].join() + ")" : "rgb(" + [i, n, a].join() + ")"
                            }

                            function e9(e, t, a, n, i, o, r, s, l, c, u, b, p, d, h, f, g, m, v, w, y, x, k, E, A, S, C, N, T, _, D) {
                                this.message = e, this.messageAlignment = t || tv, this.duration = b || 5e3, this.slideFrom = a || tl, this.extras = n || {}, this.campaignId = i, this.cardId = o, this.triggerId = r, this.clickAction = s || tb, this.uri = l, this.openTarget = c || td, this.dismissType = u || tp, this.icon = p, this.imageUrl = d, this.imageStyle = h || tf, this.iconColor = f || tr.nd, this.iconBackgroundColor = g || tr.$d, this.backgroundColor = m || tr.nd, this.textColor = v || tr.ce, this.closeButtonColor = w || tr.Sf, this.animateIn = y, null == this.animateIn && (this.animateIn = !0), this.animateOut = x, null == this.animateOut && (this.animateOut = !0), this.header = k, this.headerAlignment = E || tv, this.headerTextColor = A || tr.ce, this.frameColor = S || tr.vg, this.buttons = C || [], this.cropType = N || ty, this.orientation = T, this.htmlId = _, this.css = D, this.Fe = this.Wa = this.Ge = !1, this.X = new eD, this.nc = new eD
                            }

                            function te(e) {
                                return null != e.htmlId && 4 < e.htmlId.length
                            }

                            function tt(e) {
                                return te(e) && null != e.css && 0 < e.css.length
                            }

                            function ta(e) {
                                if (te(e) && tt(e)) return e.htmlId + "-css"
                            }

                            function tn(e) {
                                if (e.is_control) return new tM(e.trigger_id);
                                var t = e.type;
                                null != t && (t = t.toUpperCase());
                                var a = e.message,
                                    n = e.text_align_message,
                                    i = e.slide_from,
                                    o = e.extras,
                                    r = e.campaign_id,
                                    s = e.card_id,
                                    l = e.trigger_id,
                                    c = e.click_action,
                                    u = e.uri,
                                    b = e.open_target,
                                    p = e.message_close,
                                    d = e.duration,
                                    h = e.icon,
                                    f = e.image_url,
                                    g = e.image_style,
                                    m = e.icon_color,
                                    v = e.icon_bg_color,
                                    w = e.bg_color,
                                    y = e.text_color,
                                    x = e.close_btn_color,
                                    k = e.header,
                                    E = e.text_align_header,
                                    S = e.header_text_color,
                                    C = e.frame_color,
                                    N = [],
                                    T = e.btns;
                                null == T && (T = []);
                                for (var _ = 0; _ < T.length; _++) {
                                    var D = T[_];
                                    N.push(new tO(D.text, D.bg_color, D.text_color, D.border_color, D.click_action, D.uri, D.id))
                                }
                                T = e.crop_type, _ = e.orientation, D = e.animate_in;
                                var O = e.animate_out,
                                    I = e.html_id,
                                    M = e.css;
                                if ((null == I || "" === I || null == M || "" === M) && (M = I = void 0), t === tk || t === tE) a = new tG(a, n, o, r, s, l, c, u, b, p, d, h, f, g, m, v, w, y, x, D, O, k, E, S, C, N, T, I, M);
                                else if (t === tA) a = new tL(a, n, o, r, s, l, c, u, b, p, d, h, f, g, m, v, w, y, x, D, O, k, E, S, C, N, T, _, I, M);
                                else if (t === tx) a = new tj(a, n, i, o, r, s, l, c, u, b, p, d, h, f, m, v, w, y, x, D, O, I, M);
                                else if (t === tS || t === tC)(a = new tF(a, o, r, s, l, p, d, D, O, C, I, M, e.message_fields)).Th = e.trusted || !1;
                                else {
                                    A.error("Ignoring message with unknown type " + t);
                                    return
                                }
                                return a.nf = t, a
                            }

                            function ti(e, t, a) {
                                if (null != t) {
                                    e.sc = null;
                                    var n = -1 === t.className.indexOf("ab-in-app-message") ? t.getElementsByClassName("ab-in-app-message")[0] : t,
                                        i = !1;
                                    n && (i = function(e, t) {
                                        if (t && t.parentNode) {
                                            var a = t.closest(".ab-iam-root");
                                            null == a && (a = t), e.Ja() && null != a.parentNode && ((t = a.parentNode.classList) && t.contains(tD) && t.remove(tD), document.body.removeEventListener("touchmove", to)), a.className = a.className.replace(tT, t_)
                                        }
                                        return e.animateOut
                                    }(e, n));
                                    var o = document.body;
                                    if (null != o) var r = o.scrollTop;
                                    n = function() {
                                        if (t && t.parentNode) {
                                            var n = t.closest(".ab-iam-root");
                                            null == n && (n = t), n.parentNode && n.parentNode.removeChild(n)
                                        }
                                        null != ta(e) && (n = document.getElementById(ta(e))) && n.parentNode && n.parentNode.removeChild(n), null != o && "Safari" === eu.Ya && (o.scrollTop = r), a ? a() : e.Nd()
                                    }, i ? setTimeout(n, tN) : n(), e.tc && e.tc.focus()
                                }
                            }

                            function to(e) {
                                e.targetTouches && 1 < e.targetTouches.length || e.target.classList && e.target.classList.contains("ab-message-text") && e.target.scrollHeight > e.target.clientHeight || document.querySelector("." + tD) && e.preventDefault()
                            }
                            J.Card = eX, J.Card.fromContentCardsJson = eJ, J.Card.prototype.dismissCard = eX.prototype.bf, J.Card.prototype.subscribeToClickedEvent = eX.prototype.Vb, J.Card.prototype.subscribeToDismissedEvent = eX.prototype.Wd, J.Card.prototype.removeSubscription = eX.prototype.N, J.Card.prototype.removeAllSubscriptions = eX.prototype.K, u(e2, eX), e2.prototype.A = function() {
                                var e = {};
                                return e[e3.TYPE] = e0.Xb, e[e3.wa] = this.id, e[e3.za] = this.viewed, e[e3.xa] = this.imageUrl, e[e3.ea] = this.updated, e[e3.bc] = this.created, e[e3.Zb] = this.categories, e[e3.ca] = this.expiresAt, e[e3.URL] = this.url, e[e3.ya] = this.linkText, e[e3.sa] = this.aspectRatio, e[e3.ka] = this.extras, e[e3.la] = this.pinned, e[e3.va] = this.dismissible, e[e3.ta] = this.clicked, e[e3.V] = this.test, e
                            }, J.Banner = e2, u(e4, eX), e4.prototype.A = function() {
                                var e = {};
                                return e[e3.TYPE] = e0.Yb, e[e3.wa] = this.id, e[e3.za] = this.viewed, e[e3.Ua] = this.title, e[e3.xa] = this.imageUrl, e[e3.Ra] = this.description, e[e3.ea] = this.updated, e[e3.bc] = this.created, e[e3.Zb] = this.categories, e[e3.ca] = this.expiresAt, e[e3.URL] = this.url, e[e3.ya] = this.linkText, e[e3.sa] = this.aspectRatio, e[e3.ka] = this.extras, e[e3.la] = this.pinned, e[e3.va] = this.dismissible, e[e3.ta] = this.clicked, e[e3.V] = this.test, e
                            }, J.CaptionedImage = e4, u(e8, eX), e8.prototype.A = function() {
                                var e = {};
                                return e[e3.TYPE] = e0.ic, e[e3.wa] = this.id, e[e3.za] = this.viewed, e[e3.Ua] = this.title, e[e3.xa] = this.imageUrl, e[e3.Ra] = this.description, e[e3.ea] = this.updated, e[e3.bc] = this.created, e[e3.Zb] = this.categories, e[e3.ca] = this.expiresAt, e[e3.URL] = this.url, e[e3.ya] = this.linkText, e[e3.sa] = this.aspectRatio, e[e3.ka] = this.extras, e[e3.la] = this.pinned, e[e3.va] = this.dismissible, e[e3.ta] = this.clicked, e[e3.V] = this.test, e
                            }, J.ClassicCard = e8, u(e7, eX), e7.prototype.A = function() {
                                var e = {};
                                return e[e3.TYPE] = e0.Sc, e[e3.wa] = this.id, e[e3.za] = this.viewed, e[e3.ea] = this.updated, e[e3.ca] = this.expiresAt, e[e3.ka] = this.extras, e[e3.la] = this.pinned, e[e3.V] = this.test, e
                            }, J.ControlCard = e7, (nS = e9.prototype).Ja = function() {
                                return !0
                            }, nS.xf = function() {
                                return this.Ja()
                            }, nS.Vb = function(e) {
                                return eO(this.X, e)
                            }, nS.Wd = function(e) {
                                return eO(this.nc, e)
                            }, nS.N = function(e) {
                                this.X.N(e), this.nc.N(e)
                            }, nS.K = function() {
                                this.X.K(), this.nc.K()
                            }, nS.Od = function() {
                                return !this.Ge && (this.Ge = !0)
                            }, nS.fb = function() {
                                return !this.Wa && (this.Wa = !0, eI(this.X), !0)
                            }, nS.Nd = function() {
                                return !this.Fe && (this.Fe = !0, eI(this.nc), !0)
                            }, nS.Ye = function() {
                                ti(this, this.sc)
                            }, nS.aa = function(e, t, a, n, i) {
                                function o() {
                                    -1 !== l.className.indexOf("ab-start-hidden") && (l.className = l.className.replace("ab-start-hidden", ""), a(l))
                                }
                                var r, s = this,
                                    l = document.createElement("div");
                                l.className = "ab-in-app-message ab-start-hidden ab-background", i && (l.style.zIndex = i + 1), this.Ja() && (l.className += " ab-modal-interactions", l.setAttribute("tabindex", "-1")), tt(this) || (l.style.color = e6(this.textColor), l.style.backgroundColor = e6(this.backgroundColor), isNaN(r = parseInt(r = this.backgroundColor)) || 0 != (4278190080 & r) >>> 24 || (l.className += " ab-no-shadow")), this.imageStyle === tg && (l.className += " graphic"), this.orientation === tm && (l.className += " landscape"), 0 === this.buttons.length && (this.clickAction !== tb && (l.className += " ab-clickable"), l.onclick = function(a) {
                                    return ti(s, l, function() {
                                        e.Jc(s), s.clickAction === tu ? eW.openUri(s.uri, a, n || s.openTarget === th) : s.clickAction === tc && t()
                                    }), a.stopPropagation(), !1
                                });
                                var c = eK("Close Message", tt(this) ? void 0 : e6(this.closeButtonColor), function() {
                                    ti(s, l)
                                });
                                l.appendChild(c), i && (c.style.zIndex = i + 2), (i = document.createElement("div")).className = "ab-message-text", i.className += " " + (this.messageAlignment || this.Bd).toLowerCase() + "-aligned", c = !1;
                                var u = document.createElement("div");
                                if (u.className = "ab-image-area", this.imageUrl) {
                                    if (this.cropType === tw) {
                                        var b = document.createElement("span");
                                        b.className = "ab-center-cropped-img", b.style.backgroundImage = "url(" + this.imageUrl + ")", b.setAttribute("role", "img"), b.setAttribute("aria-label", "Modal Image"), this.xc(b), u.appendChild(b)
                                    } else(b = document.createElement("img")).setAttribute("src", this.imageUrl), this.xc(b), c = !0, b.onload = o, setTimeout(o, 1e3), u.appendChild(b);
                                    l.appendChild(u), i.className += " ab-with-image"
                                } else if (this.icon) {
                                    u.className += " ab-icon-area", (b = document.createElement("span")).className = "ab-icon", tt(this) || (b.style.backgroundColor = e6(this.iconBackgroundColor), b.style.color = e6(this.iconColor));
                                    var d = document.createElement("i");
                                    d.className = "fa", d.appendChild(document.createTextNode(this.icon)), d.setAttribute("aria-hidden", !0), b.appendChild(d), u.appendChild(b), l.appendChild(u), i.className += " ab-with-icon"
                                }
                                return eP(i, "touchstart", function() {}), this.header && 0 < this.header.length && ((u = document.createElement("h1")).className = "ab-message-header", this.qd = p.Ia(), u.id = this.qd, u.className += " " + (this.headerAlignment || tv).toLowerCase() + "-aligned", tt(this) || (u.style.color = e6(this.headerTextColor)), u.appendChild(document.createTextNode(this.header)), i.appendChild(u)), i.appendChild(this.Xe()), l.appendChild(i), c || o(), this.sc = l
                            }, nS.Xe = function() {
                                return document.createTextNode(this.message)
                            }, nS.xc = function(e) {
                                var t = "";
                                this.message || this.header || !this.Ja() || (t = "Modal Image"), e.setAttribute("alt", t)
                            }, nS.Kc = function(e) {
                                this.Ja() && null != e.parentNode && this.orientation !== tm && (null != e.parentNode.classList && e.parentNode.classList.add(tD), document.body.addEventListener("touchmove", to, !!eM() && {
                                    passive: !1
                                })), e.className += " " + tT
                            }, nS.oa = function() {
                                var e = "";
                                return this.animateIn && (e += " ab-animate-in"), this.animateOut && (e += " ab-animate-out"), e
                            };
                            var tr = {
                                    ce: 4281545523,
                                    nd: 4294967295,
                                    $d: 4278219733,
                                    Tf: 4293914607,
                                    Uf: 4283782485,
                                    vg: 3224580915,
                                    Sf: 4288387995
                                },
                                ts = {
                                    ge: "hd",
                                    Bf: "ias",
                                    rg: "of",
                                    Vf: "do",
                                    Ab: "umt",
                                    yb: "tf",
                                    ie: "te"
                                },
                                tl = "BOTTOM",
                                tc = "NEWS_FEED",
                                tu = "URI",
                                tb = "NONE",
                                tp = "AUTO_DISMISS",
                                td = "NONE",
                                th = "BLANK",
                                tf = "TOP",
                                tg = "GRAPHIC",
                                tm = "LANDSCAPE",
                                tv = "CENTER",
                                tw = "CENTER_CROP",
                                ty = "FIT_CENTER",
                                tx = "SLIDEUP",
                                tk = "MODAL",
                                tE = "MODAL_STYLED",
                                tA = "FULL",
                                tS = "WEB_HTML",
                                tC = "HTML",
                                tN = 500,
                                tT = "ab-show",
                                t_ = "ab-hide",
                                tD = "ab-pause-scrolling";

                            function tO(e, t, a, n, i, o, r) {
                                this.text = e || "", this.backgroundColor = t || tr.$d, this.textColor = a || tr.nd, this.borderColor = n || this.backgroundColor, this.clickAction = i || tb, this.uri = o, null == r && (r = tI), this.id = r, this.Wa = !1, this.X = new eD
                            }
                            J.InAppMessage = e9, J.InAppMessage.SlideFrom = {
                                TOP: "TOP",
                                BOTTOM: tl
                            }, J.InAppMessage.ClickAction = {
                                NEWS_FEED: tc,
                                URI: tu,
                                NONE: tb
                            }, J.InAppMessage.DismissType = {
                                AUTO_DISMISS: tp,
                                MANUAL: "SWIPE"
                            }, J.InAppMessage.OpenTarget = {
                                NONE: td,
                                BLANK: th
                            }, J.InAppMessage.ImageStyle = {
                                TOP: tf,
                                GRAPHIC: tg
                            }, J.InAppMessage.TextAlignment = {
                                START: "START",
                                CENTER: tv,
                                END: "END"
                            }, J.InAppMessage.Orientation = {
                                PORTRAIT: "PORTRAIT",
                                LANDSCAPE: tm
                            }, J.InAppMessage.CropType = {
                                CENTER_CROP: tw,
                                FIT_CENTER: ty
                            }, J.InAppMessage.fromJson = tn, J.InAppMessage.prototype.subscribeToClickedEvent = e9.prototype.Vb, J.InAppMessage.prototype.subscribeToDismissedEvent = e9.prototype.Wd, J.InAppMessage.prototype.removeSubscription = e9.prototype.N, J.InAppMessage.prototype.removeAllSubscriptions = e9.prototype.K, J.InAppMessage.prototype.closeMessage = e9.prototype.Ye, tO.prototype.Vb = function(e) {
                                return eO(this.X, e)
                            }, tO.prototype.N = function(e) {
                                this.X.N(e)
                            }, tO.prototype.K = function() {
                                this.X.K()
                            }, tO.prototype.fb = function() {
                                return !this.Wa && (this.Wa = !0, eI(this.X), !0)
                            };
                            var tI = -1;

                            function tM(e) {
                                this.triggerId = e
                            }

                            function tP(e) {
                                for (var t = e.querySelectorAll(".ab-close-button, .ab-message-text, .ab-message-button"), a = 0; a < t.length; a++) t[a].tabIndex = 0;
                                if (0 < t.length) {
                                    var n = t[0],
                                        i = t[t.length - 1];
                                    e.addEventListener("keydown", function(t) {
                                        var a = document.activeElement;
                                        9 !== t.keyCode || (t.shiftKey || a !== i && a !== e ? t.shiftKey && (a === n || a === e) && (t.preventDefault(), i.focus()) : (t.preventDefault(), n.focus()))
                                    })
                                }
                            }

                            function tU(e, t) {
                                t.setAttribute("role", "dialog"), t.setAttribute("aria-modal", !0), t.setAttribute("aria-label", "Modal Message"), e && t.setAttribute("aria-labelledby", e)
                            }

                            function tz(e, t, a, n, i) {
                                if (0 < e.buttons.length) {
                                    var o = document.createElement("div");
                                    o.className = "ab-message-buttons", n.appendChild(o);
                                    var r = n.getElementsByClassName("ab-message-text")[0];
                                    null != r && (r.className += " ab-with-buttons"), r = function(o) {
                                        return function(r) {
                                            return ti(e, n, function() {
                                                t.Ic(o, e), o.clickAction === tu ? eW.openUri(o.uri, r, i || e.openTarget === th) : o.clickAction === tc && a()
                                            }), r.stopPropagation(), !1
                                        }
                                    };
                                    for (var s = 0; s < e.buttons.length; s++) {
                                        var l = e.buttons[s],
                                            c = document.createElement("button");
                                        c.className = "ab-message-button", c.setAttribute("type", "button"), eP(c, "touchstart", function() {});
                                        var u = l.text;
                                        "" === l.text && (u = "\xa0"), c.appendChild(document.createTextNode(u)), tt(e) || (c.style.backgroundColor = e6(l.backgroundColor), c.style.color = e6(l.textColor), c.style.borderColor = e6(l.borderColor)), c.onclick = r(l), o.appendChild(c)
                                    }
                                }
                            }

                            function tL(e, t, a, n, i, o, r, s, l, c, u, b, p, d, h, f, g, m, v, w, y, x, k, E, A, S, C, N, T, _) {
                                C = C || tw, e9.call(this, e, t, null, a, n, i, o, r, s, l, c || "SWIPE", u, b, p, d, h, f, g, m, v, w, y, x, k, E, A, S, C, N || "PORTRAIT", T, _)
                            }
                            J.InAppMessageButton = tO, J.InAppMessageButton.prototype.subscribeToClickedEvent = tO.prototype.Vb, J.InAppMessageButton.prototype.removeSubscription = tO.prototype.N, J.InAppMessageButton.prototype.removeAllSubscriptions = tO.prototype.K, J.ControlMessage = tM, u(tL, e9), tL.prototype.aa = function(e, t, a, n, i, o) {
                                return this.tc = document.activeElement, t = e9.prototype.aa.call(this, e, a, n, i, o), t.className += " ab-fullscreen ab-centered", tz(this, e, a, t, i), tP(t), tU(this.qd, t), t
                            }, tL.prototype.oa = function() {
                                return e9.prototype.oa.call(this) + " ab-effect-fullscreen"
                            }, r.Object.defineProperties(tL.prototype, {
                                Bd: {
                                    configurable: !0,
                                    enumerable: !0,
                                    get: function() {
                                        return tv
                                    }
                                }
                            }), J.FullScreenMessage = tL;
                            var tR = new function() {
                                this.$e = ".ab-pause-scrolling,body.ab-pause-scrolling,html.ab-pause-scrolling{overflow:hidden;touch-action:none}.ab-centering-div,.ab-iam-root.v3{position:fixed;top:0;right:0;bottom:0;left:0;pointer-events:none;z-index:1050;-webkit-tap-highlight-color:transparent}.ab-centering-div:focus,.ab-iam-root.v3:focus{outline:0}.ab-centering-div.ab-effect-fullscreen,.ab-centering-div.ab-effect-html,.ab-centering-div.ab-effect-modal,.ab-iam-root.v3.ab-effect-fullscreen,.ab-iam-root.v3.ab-effect-html,.ab-iam-root.v3.ab-effect-modal{opacity:0}.ab-centering-div.ab-effect-fullscreen.ab-show,.ab-centering-div.ab-effect-html.ab-show,.ab-centering-div.ab-effect-modal.ab-show,.ab-iam-root.v3.ab-effect-fullscreen.ab-show,.ab-iam-root.v3.ab-effect-html.ab-show,.ab-iam-root.v3.ab-effect-modal.ab-show{opacity:1}.ab-centering-div.ab-effect-fullscreen.ab-show.ab-animate-in,.ab-centering-div.ab-effect-html.ab-show.ab-animate-in,.ab-centering-div.ab-effect-modal.ab-show.ab-animate-in,.ab-iam-root.v3.ab-effect-fullscreen.ab-show.ab-animate-in,.ab-iam-root.v3.ab-effect-html.ab-show.ab-animate-in,.ab-iam-root.v3.ab-effect-modal.ab-show.ab-animate-in{-webkit-transition:opacity .5s;-moz-transition:opacity .5s;-o-transition:opacity .5s;transition:opacity .5s}.ab-centering-div.ab-effect-fullscreen.ab-hide,.ab-centering-div.ab-effect-html.ab-hide,.ab-centering-div.ab-effect-modal.ab-hide,.ab-iam-root.v3.ab-effect-fullscreen.ab-hide,.ab-iam-root.v3.ab-effect-html.ab-hide,.ab-iam-root.v3.ab-effect-modal.ab-hide{opacity:0}.ab-centering-div.ab-effect-fullscreen.ab-hide.ab-animate-out,.ab-centering-div.ab-effect-html.ab-hide.ab-animate-out,.ab-centering-div.ab-effect-modal.ab-hide.ab-animate-out,.ab-iam-root.v3.ab-effect-fullscreen.ab-hide.ab-animate-out,.ab-iam-root.v3.ab-effect-html.ab-hide.ab-animate-out,.ab-iam-root.v3.ab-effect-modal.ab-hide.ab-animate-out{-webkit-transition:opacity .5s;-moz-transition:opacity .5s;-o-transition:opacity .5s;transition:opacity .5s}.ab-centering-div.ab-effect-slide .ab-in-app-message,.ab-iam-root.v3.ab-effect-slide .ab-in-app-message{-webkit-transform:translateX(535px);-moz-transform:translateX(535px);-ms-transform:translateX(535px);transform:translateX(535px)}.ab-centering-div.ab-effect-slide.ab-show .ab-in-app-message,.ab-iam-root.v3.ab-effect-slide.ab-show .ab-in-app-message{-webkit-transform:translateX(0);-moz-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0)}.ab-centering-div.ab-effect-slide.ab-show.ab-animate-in .ab-in-app-message,.ab-iam-root.v3.ab-effect-slide.ab-show.ab-animate-in .ab-in-app-message{-webkit-transition:transform .5s ease-in-out;-moz-transition:transform .5s ease-in-out;-o-transition:transform .5s ease-in-out;transition:transform .5s ease-in-out}.ab-centering-div.ab-effect-slide.ab-hide .ab-in-app-message,.ab-iam-root.v3.ab-effect-slide.ab-hide .ab-in-app-message{-webkit-transform:translateX(535px);-moz-transform:translateX(535px);-ms-transform:translateX(535px);transform:translateX(535px)}.ab-centering-div.ab-effect-slide.ab-hide .ab-in-app-message.ab-swiped-left,.ab-iam-root.v3.ab-effect-slide.ab-hide .ab-in-app-message.ab-swiped-left{-webkit-transform:translateX(-535px);-moz-transform:translateX(-535px);-ms-transform:translateX(-535px);transform:translateX(-535px)}.ab-centering-div.ab-effect-slide.ab-hide .ab-in-app-message.ab-swiped-up,.ab-iam-root.v3.ab-effect-slide.ab-hide .ab-in-app-message.ab-swiped-up{-webkit-transform:translateY(-535px);-moz-transform:translateY(-535px);-ms-transform:translateY(-535px);transform:translateY(-535px)}.ab-centering-div.ab-effect-slide.ab-hide .ab-in-app-message.ab-swiped-down,.ab-iam-root.v3.ab-effect-slide.ab-hide .ab-in-app-message.ab-swiped-down{-webkit-transform:translateY(535px);-moz-transform:translateY(535px);-ms-transform:translateY(535px);transform:translateY(535px)}.ab-centering-div.ab-effect-slide.ab-hide.ab-animate-out .ab-in-app-message,.ab-iam-root.v3.ab-effect-slide.ab-hide.ab-animate-out .ab-in-app-message{-webkit-transition:transform .5s ease-in-out;-moz-transition:transform .5s ease-in-out;-o-transition:transform .5s ease-in-out;transition:transform .5s ease-in-out}.ab-centering-div .ab-ios-scroll-wrapper,.ab-iam-root.v3 .ab-ios-scroll-wrapper{position:fixed;top:0;right:0;bottom:0;left:0;overflow:auto;pointer-events:all;touch-action:auto;-webkit-overflow-scrolling:touch}.ab-centering-div .ab-in-app-message,.ab-iam-root.v3 .ab-in-app-message{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:fixed;text-align:center;-webkit-box-shadow:0 0 4px rgba(0,0,0,.3);-moz-box-shadow:0 0 4px rgba(0,0,0,.3);box-shadow:0 0 4px rgba(0,0,0,.3);line-height:normal;letter-spacing:normal;font-family:'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif;z-index:1050;max-width:100%;overflow:hidden;display:inline-block;pointer-events:all;color:#333}.ab-centering-div .ab-in-app-message.ab-no-shadow,.ab-iam-root.v3 .ab-in-app-message.ab-no-shadow{-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none}.ab-centering-div .ab-in-app-message :focus,.ab-centering-div .ab-in-app-message:focus,.ab-iam-root.v3 .ab-in-app-message :focus,.ab-iam-root.v3 .ab-in-app-message:focus{outline:0}.ab-centering-div .ab-in-app-message.ab-clickable,.ab-iam-root.v3 .ab-in-app-message.ab-clickable{cursor:pointer}.ab-centering-div .ab-in-app-message.ab-background,.ab-iam-root.v3 .ab-in-app-message.ab-background{background-color:#fff}.ab-centering-div .ab-in-app-message .ab-close-button,.ab-iam-root.v3 .ab-in-app-message .ab-close-button{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;background-color:transparent;background-size:15px;border:none;width:15px;min-width:15px;height:15px;cursor:pointer;display:block;font-size:15px;line-height:0;padding-top:15px;padding-right:15px;padding-left:15px;padding-bottom:15px;position:absolute;right:0;top:0;z-index:1060}.ab-centering-div .ab-in-app-message .ab-close-button svg,.ab-iam-root.v3 .ab-in-app-message .ab-close-button svg{-webkit-transition:.2s ease;-moz-transition:.2s ease;-o-transition:.2s ease;transition:.2s ease;fill:#9b9b9b}.ab-centering-div .ab-in-app-message .ab-close-button svg.ab-chevron,.ab-iam-root.v3 .ab-in-app-message .ab-close-button svg.ab-chevron{display:none}.ab-centering-div .ab-in-app-message .ab-close-button:active,.ab-iam-root.v3 .ab-in-app-message .ab-close-button:active{background-color:transparent}.ab-centering-div .ab-in-app-message .ab-close-button:focus,.ab-iam-root.v3 .ab-in-app-message .ab-close-button:focus{background-color:transparent}.ab-centering-div .ab-in-app-message .ab-close-button:hover,.ab-iam-root.v3 .ab-in-app-message .ab-close-button:hover{background-color:transparent}.ab-centering-div .ab-in-app-message .ab-close-button:hover svg,.ab-iam-root.v3 .ab-in-app-message .ab-close-button:hover svg{fill-opacity:.8}.ab-centering-div .ab-in-app-message .ab-message-text,.ab-iam-root.v3 .ab-in-app-message .ab-message-text{float:none;line-height:1.5;margin:20px 25px;max-width:100%;overflow:hidden;overflow-y:auto;vertical-align:text-bottom;word-wrap:break-word;white-space:pre-wrap;font-family:'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif}.ab-centering-div .ab-in-app-message .ab-message-text.start-aligned,.ab-iam-root.v3 .ab-in-app-message .ab-message-text.start-aligned{text-align:left;text-align:start}.ab-centering-div .ab-in-app-message .ab-message-text.end-aligned,.ab-iam-root.v3 .ab-in-app-message .ab-message-text.end-aligned{text-align:right;text-align:end}.ab-centering-div .ab-in-app-message .ab-message-text.center-aligned,.ab-iam-root.v3 .ab-in-app-message .ab-message-text.center-aligned{text-align:center}.ab-centering-div .ab-in-app-message .ab-message-text::-webkit-scrollbar,.ab-iam-root.v3 .ab-in-app-message .ab-message-text::-webkit-scrollbar{-webkit-appearance:none;width:14px}.ab-centering-div .ab-in-app-message .ab-message-text::-webkit-scrollbar-thumb,.ab-iam-root.v3 .ab-in-app-message .ab-message-text::-webkit-scrollbar-thumb{-webkit-appearance:none;border:4px solid transparent;background-clip:padding-box;-webkit-border-radius:7px;-moz-border-radius:7px;border-radius:7px;background-color:rgba(0,0,0,.2)}.ab-centering-div .ab-in-app-message .ab-message-text::-webkit-scrollbar-button,.ab-iam-root.v3 .ab-in-app-message .ab-message-text::-webkit-scrollbar-button{width:0;height:0;display:none}.ab-centering-div .ab-in-app-message .ab-message-text::-webkit-scrollbar-corner,.ab-iam-root.v3 .ab-in-app-message .ab-message-text::-webkit-scrollbar-corner{background-color:transparent}.ab-centering-div .ab-in-app-message .ab-message-header,.ab-iam-root.v3 .ab-in-app-message .ab-message-header{float:none;letter-spacing:0;margin:0;font-weight:700;font-family:'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif;display:block;font-size:20px;margin-bottom:10px;line-height:1.3}.ab-centering-div .ab-in-app-message .ab-message-header.start-aligned,.ab-iam-root.v3 .ab-in-app-message .ab-message-header.start-aligned{text-align:left;text-align:start}.ab-centering-div .ab-in-app-message .ab-message-header.end-aligned,.ab-iam-root.v3 .ab-in-app-message .ab-message-header.end-aligned{text-align:right;text-align:end}.ab-centering-div .ab-in-app-message .ab-message-header.center-aligned,.ab-iam-root.v3 .ab-in-app-message .ab-message-header.center-aligned{text-align:center}.ab-centering-div .ab-in-app-message.ab-fullscreen,.ab-centering-div .ab-in-app-message.ab-modal,.ab-centering-div .ab-in-app-message.ab-slideup,.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen,.ab-iam-root.v3 .ab-in-app-message.ab-modal,.ab-iam-root.v3 .ab-in-app-message.ab-slideup{-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px}.ab-centering-div .ab-in-app-message.ab-slideup,.ab-iam-root.v3 .ab-in-app-message.ab-slideup{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;cursor:pointer;overflow:hidden;word-wrap:break-word;text-overflow:ellipsis;font-size:14px;font-weight:700;margin:20px;margin-top:calc(constant(safe-area-inset-top,0) + 20px);margin-right:calc(constant(safe-area-inset-right,0) + 20px);margin-bottom:calc(constant(safe-area-inset-bottom,0) + 20px);margin-left:calc(constant(safe-area-inset-left,0) + 20px);margin-top:calc(env(safe-area-inset-top,0) + 20px);margin-right:calc(env(safe-area-inset-right,0) + 20px);margin-bottom:calc(env(safe-area-inset-bottom,0) + 20px);margin-left:calc(env(safe-area-inset-left,0) + 20px);max-height:150px;padding:10px;right:0;background-color:#efefef}.ab-centering-div .ab-in-app-message.ab-slideup.simulate-phone,.ab-iam-root.v3 .ab-in-app-message.ab-slideup.simulate-phone{max-height:66px;margin:10px;margin-top:calc(constant(safe-area-inset-top,0) + 10px);margin-right:calc(constant(safe-area-inset-right,0) + 10px);margin-bottom:calc(constant(safe-area-inset-bottom,0) + 10px);margin-left:calc(constant(safe-area-inset-left,0) + 10px);margin-top:calc(env(safe-area-inset-top,0) + 10px);margin-right:calc(env(safe-area-inset-right,0) + 10px);margin-bottom:calc(env(safe-area-inset-bottom,0) + 10px);margin-left:calc(env(safe-area-inset-left,0) + 10px);max-width:90%;max-width:calc(100% - 40px);min-width:90%;min-width:calc(100% - 40px)}.ab-centering-div .ab-in-app-message.ab-slideup.simulate-phone .ab-close-button,.ab-iam-root.v3 .ab-in-app-message.ab-slideup.simulate-phone .ab-close-button{display:none}.ab-centering-div .ab-in-app-message.ab-slideup.simulate-phone .ab-close-button svg:not(.ab-chevron),.ab-iam-root.v3 .ab-in-app-message.ab-slideup.simulate-phone .ab-close-button svg:not(.ab-chevron){display:none}.ab-centering-div .ab-in-app-message.ab-slideup.simulate-phone.ab-clickable .ab-close-button,.ab-iam-root.v3 .ab-in-app-message.ab-slideup.simulate-phone.ab-clickable .ab-close-button{display:block;height:20px;padding:0 20px 0 18px;pointer-events:none;top:50%;-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);width:12px}.ab-centering-div .ab-in-app-message.ab-slideup.simulate-phone.ab-clickable .ab-close-button svg.ab-chevron,.ab-iam-root.v3 .ab-in-app-message.ab-slideup.simulate-phone.ab-clickable .ab-close-button svg.ab-chevron{display:inline}.ab-centering-div .ab-in-app-message.ab-slideup.simulate-phone.ab-clickable .ab-message-text,.ab-iam-root.v3 .ab-in-app-message.ab-slideup.simulate-phone.ab-clickable .ab-message-text{border-right-width:40px}.ab-centering-div .ab-in-app-message.ab-slideup.simulate-phone .ab-message-text,.ab-iam-root.v3 .ab-in-app-message.ab-slideup.simulate-phone .ab-message-text{max-width:100%;border-right-width:10px}.ab-centering-div .ab-in-app-message.ab-slideup.simulate-phone .ab-message-text span,.ab-iam-root.v3 .ab-in-app-message.ab-slideup.simulate-phone .ab-message-text span{max-height:66px}.ab-centering-div .ab-in-app-message.ab-slideup.simulate-phone .ab-message-text.ab-with-icon,.ab-centering-div .ab-in-app-message.ab-slideup.simulate-phone .ab-message-text.ab-with-image,.ab-iam-root.v3 .ab-in-app-message.ab-slideup.simulate-phone .ab-message-text.ab-with-icon,.ab-iam-root.v3 .ab-in-app-message.ab-slideup.simulate-phone .ab-message-text.ab-with-image{max-width:80%;max-width:calc(100% - 50px - 5px - 10px - 25px)}.ab-centering-div .ab-in-app-message.ab-slideup.simulate-phone .ab-image-area,.ab-iam-root.v3 .ab-in-app-message.ab-slideup.simulate-phone .ab-image-area{width:50px;height:50px}.ab-centering-div .ab-in-app-message.ab-slideup.simulate-phone .ab-image-area img,.ab-iam-root.v3 .ab-in-app-message.ab-slideup.simulate-phone .ab-image-area img{max-width:100%;max-height:100%;width:auto;height:auto}.ab-centering-div .ab-in-app-message.ab-slideup.ab-clickable:active .ab-message-text,.ab-centering-div .ab-in-app-message.ab-slideup.ab-clickable:focus .ab-message-text,.ab-centering-div .ab-in-app-message.ab-slideup.ab-clickable:hover .ab-message-text,.ab-iam-root.v3 .ab-in-app-message.ab-slideup.ab-clickable:active .ab-message-text,.ab-iam-root.v3 .ab-in-app-message.ab-slideup.ab-clickable:focus .ab-message-text,.ab-iam-root.v3 .ab-in-app-message.ab-slideup.ab-clickable:hover .ab-message-text{opacity:.8}.ab-centering-div .ab-in-app-message.ab-slideup.ab-clickable:active .ab-close-button svg.ab-chevron,.ab-centering-div .ab-in-app-message.ab-slideup.ab-clickable:focus .ab-close-button svg.ab-chevron,.ab-centering-div .ab-in-app-message.ab-slideup.ab-clickable:hover .ab-close-button svg.ab-chevron,.ab-iam-root.v3 .ab-in-app-message.ab-slideup.ab-clickable:active .ab-close-button svg.ab-chevron,.ab-iam-root.v3 .ab-in-app-message.ab-slideup.ab-clickable:focus .ab-close-button svg.ab-chevron,.ab-iam-root.v3 .ab-in-app-message.ab-slideup.ab-clickable:hover .ab-close-button svg.ab-chevron{fill-opacity:.8}.ab-centering-div .ab-in-app-message.ab-slideup .ab-message-text,.ab-iam-root.v3 .ab-in-app-message.ab-slideup .ab-message-text{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:table-cell;border-color:transparent;border-style:solid;border-width:5px 25px 5px 10px;max-width:430px;vertical-align:middle;margin:0}.ab-centering-div .ab-in-app-message.ab-slideup .ab-message-text span,.ab-iam-root.v3 .ab-in-app-message.ab-slideup .ab-message-text span{display:block;max-height:150px;overflow:auto}.ab-centering-div .ab-in-app-message.ab-slideup .ab-message-text.ab-with-icon,.ab-centering-div .ab-in-app-message.ab-slideup .ab-message-text.ab-with-image,.ab-iam-root.v3 .ab-in-app-message.ab-slideup .ab-message-text.ab-with-icon,.ab-iam-root.v3 .ab-in-app-message.ab-slideup .ab-message-text.ab-with-image{max-width:365px;border-top:0;border-bottom:0}.ab-centering-div .ab-in-app-message.ab-slideup .ab-close-button,.ab-iam-root.v3 .ab-in-app-message.ab-slideup .ab-close-button{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;background-color:transparent;background-size:15px;border:none;width:15px;min-width:15px;height:15px;cursor:pointer;display:block;font-size:15px;line-height:0;padding-top:15px;padding-right:15px;padding-left:15px;padding-bottom:15px;position:absolute;right:0;top:0;z-index:1060}.ab-centering-div .ab-in-app-message.ab-slideup .ab-close-button svg,.ab-iam-root.v3 .ab-in-app-message.ab-slideup .ab-close-button svg{-webkit-transition:.2s ease;-moz-transition:.2s ease;-o-transition:.2s ease;transition:.2s ease;fill:#9b9b9b}.ab-centering-div .ab-in-app-message.ab-slideup .ab-close-button svg.ab-chevron,.ab-iam-root.v3 .ab-in-app-message.ab-slideup .ab-close-button svg.ab-chevron{display:none}.ab-centering-div .ab-in-app-message.ab-slideup .ab-close-button:active,.ab-iam-root.v3 .ab-in-app-message.ab-slideup .ab-close-button:active{background-color:transparent}.ab-centering-div .ab-in-app-message.ab-slideup .ab-close-button:focus,.ab-iam-root.v3 .ab-in-app-message.ab-slideup .ab-close-button:focus{background-color:transparent}.ab-centering-div .ab-in-app-message.ab-slideup .ab-close-button:hover,.ab-iam-root.v3 .ab-in-app-message.ab-slideup .ab-close-button:hover{background-color:transparent}.ab-centering-div .ab-in-app-message.ab-slideup .ab-close-button:hover svg,.ab-iam-root.v3 .ab-in-app-message.ab-slideup .ab-close-button:hover svg{fill-opacity:.8}.ab-centering-div .ab-in-app-message.ab-slideup .ab-image-area,.ab-iam-root.v3 .ab-in-app-message.ab-slideup .ab-image-area{float:none;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:table-cell;border-color:transparent;border-style:solid;border-width:5px 0 5px 5px;vertical-align:top;width:60px;margin:0}.ab-centering-div .ab-in-app-message.ab-slideup .ab-image-area.ab-icon-area,.ab-iam-root.v3 .ab-in-app-message.ab-slideup .ab-image-area.ab-icon-area{width:auto}.ab-centering-div .ab-in-app-message.ab-slideup .ab-image-area img,.ab-iam-root.v3 .ab-in-app-message.ab-slideup .ab-image-area img{float:none;width:100%}.ab-centering-div .ab-in-app-message.ab-fullscreen,.ab-centering-div .ab-in-app-message.ab-modal,.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen,.ab-iam-root.v3 .ab-in-app-message.ab-modal{font-size:14px}.ab-centering-div .ab-in-app-message.ab-fullscreen .ab-image-area,.ab-centering-div .ab-in-app-message.ab-modal .ab-image-area,.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen .ab-image-area,.ab-iam-root.v3 .ab-in-app-message.ab-modal .ab-image-area{float:none;position:relative;display:block;overflow:hidden}.ab-centering-div .ab-in-app-message.ab-fullscreen .ab-image-area .ab-center-cropped-img,.ab-centering-div .ab-in-app-message.ab-modal .ab-image-area .ab-center-cropped-img,.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen .ab-image-area .ab-center-cropped-img,.ab-iam-root.v3 .ab-in-app-message.ab-modal .ab-image-area .ab-center-cropped-img{background-size:cover;background-repeat:no-repeat;background-position:50% 50%;position:absolute;top:0;right:0;bottom:0;left:0}.ab-centering-div .ab-in-app-message.ab-fullscreen .ab-icon,.ab-centering-div .ab-in-app-message.ab-modal .ab-icon,.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen .ab-icon,.ab-iam-root.v3 .ab-in-app-message.ab-modal .ab-icon{margin-top:20px}.ab-centering-div .ab-in-app-message.ab-fullscreen.graphic,.ab-centering-div .ab-in-app-message.ab-modal.graphic,.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.graphic,.ab-iam-root.v3 .ab-in-app-message.ab-modal.graphic{padding:0}.ab-centering-div .ab-in-app-message.ab-fullscreen.graphic .ab-message-text,.ab-centering-div .ab-in-app-message.ab-modal.graphic .ab-message-text,.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.graphic .ab-message-text,.ab-iam-root.v3 .ab-in-app-message.ab-modal.graphic .ab-message-text{display:none}.ab-centering-div .ab-in-app-message.ab-fullscreen.graphic .ab-message-buttons,.ab-centering-div .ab-in-app-message.ab-modal.graphic .ab-message-buttons,.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.graphic .ab-message-buttons,.ab-iam-root.v3 .ab-in-app-message.ab-modal.graphic .ab-message-buttons{bottom:0;left:0}.ab-centering-div .ab-in-app-message.ab-fullscreen.graphic .ab-image-area,.ab-centering-div .ab-in-app-message.ab-modal.graphic .ab-image-area,.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.graphic .ab-image-area,.ab-iam-root.v3 .ab-in-app-message.ab-modal.graphic .ab-image-area{float:none;height:auto;margin:0}.ab-centering-div .ab-in-app-message.ab-fullscreen.graphic .ab-image-area img,.ab-centering-div .ab-in-app-message.ab-modal.graphic .ab-image-area img,.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.graphic .ab-image-area img,.ab-iam-root.v3 .ab-in-app-message.ab-modal.graphic .ab-image-area img{display:block;top:0;-webkit-transform:none;-moz-transform:none;-ms-transform:none;transform:none}.ab-centering-div .ab-in-app-message.ab-modal,.ab-iam-root.v3 .ab-in-app-message.ab-modal{padding-top:20px;width:450px;max-width:450px;max-height:720px}.ab-centering-div .ab-in-app-message.ab-modal.simulate-phone,.ab-iam-root.v3 .ab-in-app-message.ab-modal.simulate-phone{max-width:91%;max-width:calc(100% - 30px)}.ab-centering-div .ab-in-app-message.ab-modal.simulate-phone.graphic .ab-image-area img,.ab-iam-root.v3 .ab-in-app-message.ab-modal.simulate-phone.graphic .ab-image-area img{max-width:91vw;max-width:calc(100vw - 30px)}.ab-centering-div .ab-in-app-message.ab-modal .ab-message-text,.ab-iam-root.v3 .ab-in-app-message.ab-modal .ab-message-text{max-height:660px}.ab-centering-div .ab-in-app-message.ab-modal .ab-message-text.ab-with-image,.ab-iam-root.v3 .ab-in-app-message.ab-modal .ab-message-text.ab-with-image{max-height:524.82758621px}.ab-centering-div .ab-in-app-message.ab-modal .ab-message-text.ab-with-icon,.ab-iam-root.v3 .ab-in-app-message.ab-modal .ab-message-text.ab-with-icon{max-height:610px}.ab-centering-div .ab-in-app-message.ab-modal .ab-message-text.ab-with-buttons,.ab-iam-root.v3 .ab-in-app-message.ab-modal .ab-message-text.ab-with-buttons{margin-bottom:93px;max-height:587px}.ab-centering-div .ab-in-app-message.ab-modal .ab-message-text.ab-with-buttons.ab-with-image,.ab-iam-root.v3 .ab-in-app-message.ab-modal .ab-message-text.ab-with-buttons.ab-with-image{max-height:451.82758621px}.ab-centering-div .ab-in-app-message.ab-modal .ab-message-text.ab-with-buttons.ab-with-icon,.ab-iam-root.v3 .ab-in-app-message.ab-modal .ab-message-text.ab-with-buttons.ab-with-icon{max-height:537px}.ab-centering-div .ab-in-app-message.ab-modal .ab-image-area,.ab-iam-root.v3 .ab-in-app-message.ab-modal .ab-image-area{margin-top:-20px;max-height:155.17241379px}.ab-centering-div .ab-in-app-message.ab-modal .ab-image-area img,.ab-iam-root.v3 .ab-in-app-message.ab-modal .ab-image-area img{max-width:100%;max-height:155.17241379px}.ab-centering-div .ab-in-app-message.ab-modal .ab-image-area.ab-icon-area,.ab-iam-root.v3 .ab-in-app-message.ab-modal .ab-image-area.ab-icon-area{height:auto}.ab-centering-div .ab-in-app-message.ab-modal.graphic,.ab-iam-root.v3 .ab-in-app-message.ab-modal.graphic{width:auto;overflow:hidden}.ab-centering-div .ab-in-app-message.ab-modal.graphic .ab-image-area,.ab-iam-root.v3 .ab-in-app-message.ab-modal.graphic .ab-image-area{display:inline}.ab-centering-div .ab-in-app-message.ab-modal.graphic .ab-image-area img,.ab-iam-root.v3 .ab-in-app-message.ab-modal.graphic .ab-image-area img{max-height:720px;max-width:450px}.ab-centering-div .ab-in-app-message.ab-fullscreen,.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen{width:450px;max-height:720px}.ab-centering-div .ab-in-app-message.ab-fullscreen.landscape,.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.landscape{width:720px;max-height:450px}.ab-centering-div .ab-in-app-message.ab-fullscreen.landscape .ab-image-area,.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.landscape .ab-image-area{height:225px}.ab-centering-div .ab-in-app-message.ab-fullscreen.landscape.graphic .ab-image-area,.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.landscape.graphic .ab-image-area{height:450px}.ab-centering-div .ab-in-app-message.ab-fullscreen.landscape .ab-message-text,.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.landscape .ab-message-text{max-height:112px}.ab-centering-div .ab-in-app-message.ab-fullscreen .ab-message-text,.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen .ab-message-text{max-height:247px}.ab-centering-div .ab-in-app-message.ab-fullscreen .ab-message-text.ab-with-buttons,.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen .ab-message-text.ab-with-buttons{margin-bottom:93px}.ab-centering-div .ab-in-app-message.ab-fullscreen .ab-image-area,.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen .ab-image-area{height:360px}.ab-centering-div .ab-in-app-message.ab-fullscreen.graphic .ab-image-area,.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.graphic .ab-image-area{height:720px}.ab-centering-div .ab-in-app-message.ab-fullscreen.simulate-phone,.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.simulate-phone{-webkit-transition:top none;-moz-transition:top none;-o-transition:top none;transition:top none;top:0;right:0;bottom:0;left:0;height:100%;width:100%;max-height:none;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;-webkit-transform:none;-moz-transform:none;-ms-transform:none;transform:none;height:auto!important}.ab-centering-div .ab-in-app-message.ab-fullscreen.simulate-phone.landscape .ab-close-button,.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.simulate-phone.landscape .ab-close-button{margin-right:calc(constant(safe-area-inset-bottom,0) + constant(safe-area-inset-top,0));margin-right:calc(env(safe-area-inset-bottom,0) + env(safe-area-inset-top,0));margin-left:calc(constant(safe-area-inset-bottom,0) + constant(safe-area-inset-top,0));margin-left:calc(env(safe-area-inset-bottom,0) + env(safe-area-inset-top,0))}.ab-centering-div .ab-in-app-message.ab-fullscreen.simulate-phone .ab-image-area,.ab-centering-div .ab-in-app-message.ab-fullscreen.simulate-phone.landscape .ab-image-area,.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.simulate-phone .ab-image-area,.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.simulate-phone.landscape .ab-image-area{height:50%}.ab-centering-div .ab-in-app-message.ab-fullscreen.simulate-phone .ab-message-text,.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.simulate-phone .ab-message-text{max-height:48%;max-height:calc(50% - 20px - 20px)}.ab-centering-div .ab-in-app-message.ab-fullscreen.simulate-phone .ab-message-text.ab-with-buttons,.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.simulate-phone .ab-message-text.ab-with-buttons{margin-bottom:20px;max-height:30%;max-height:calc(50% - 93px - 20px)}.ab-centering-div .ab-in-app-message.ab-fullscreen.simulate-phone.landscape .ab-message-text.ab-with-buttons,.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.simulate-phone.landscape .ab-message-text.ab-with-buttons{max-height:20%;max-height:calc(50% - 93px - 20px)}.ab-centering-div .ab-in-app-message.ab-fullscreen.simulate-phone:not(.graphic),.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.simulate-phone:not(.graphic){padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom,0);padding-bottom:env(safe-area-inset-bottom,0)}.ab-centering-div .ab-in-app-message.ab-fullscreen.simulate-phone:not(.graphic) .ab-message-buttons,.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.simulate-phone:not(.graphic) .ab-message-buttons{padding-top:0;position:relative}.ab-centering-div .ab-in-app-message.ab-fullscreen.simulate-phone.graphic,.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.simulate-phone.graphic{display:block}.ab-centering-div .ab-in-app-message.ab-fullscreen.simulate-phone.graphic .ab-image-area,.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.simulate-phone.graphic .ab-image-area{height:100%}.ab-centering-div .ab-in-app-message.ab-fullscreen.simulate-phone.graphic .ab-message-button,.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.simulate-phone.graphic .ab-message-button{margin-bottom:0;margin-bottom:constant(safe-area-inset-bottom,0);margin-bottom:env(safe-area-inset-bottom,0)}.ab-centering-div .ab-in-app-message.ab-html-message,.ab-iam-root.v3 .ab-in-app-message.ab-html-message{background-color:transparent;border:none;height:100%;overflow:auto;position:relative;touch-action:auto;width:100%}.ab-centering-div .ab-in-app-message .ab-message-buttons,.ab-iam-root.v3 .ab-in-app-message .ab-message-buttons{position:absolute;bottom:0;width:100%;padding:17px 25px 30px 25px;z-index:inherit;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.ab-centering-div .ab-in-app-message .ab-message-button,.ab-iam-root.v3 .ab-in-app-message .ab-message-button{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none;cursor:pointer;display:inline-block;font-size:14px;font-weight:700;font-family:'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif;height:44px;line-height:normal;letter-spacing:normal;margin:0;max-width:100%;min-width:80px;padding:0 12px;position:relative;text-transform:none;width:48%;width:calc(50% - 5px);border:1px solid #1b78cf;-webkit-transition:.2s ease;-moz-transition:.2s ease;-o-transition:.2s ease;transition:.2s ease;overflow:hidden;word-wrap:break-word;text-overflow:ellipsis;word-wrap:normal;white-space:nowrap}.ab-centering-div .ab-in-app-message .ab-message-button:first-of-type,.ab-iam-root.v3 .ab-in-app-message .ab-message-button:first-of-type{float:left;background-color:#fff;color:#1b78cf}.ab-centering-div .ab-in-app-message .ab-message-button:last-of-type,.ab-iam-root.v3 .ab-in-app-message .ab-message-button:last-of-type{float:right;background-color:#1b78cf;color:#fff}.ab-centering-div .ab-in-app-message .ab-message-button:first-of-type:last-of-type,.ab-iam-root.v3 .ab-in-app-message .ab-message-button:first-of-type:last-of-type{float:none;width:auto}.ab-centering-div .ab-in-app-message .ab-message-button:after,.ab-iam-root.v3 .ab-in-app-message .ab-message-button:after{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background-color:transparent}.ab-centering-div .ab-in-app-message .ab-message-button:after,.ab-iam-root.v3 .ab-in-app-message .ab-message-button:after{-webkit-transition:.2s ease;-moz-transition:.2s ease;-o-transition:.2s ease;transition:.2s ease}.ab-centering-div .ab-in-app-message .ab-message-button:hover,.ab-iam-root.v3 .ab-in-app-message .ab-message-button:hover{opacity:.8}.ab-centering-div .ab-in-app-message .ab-message-button:active:after,.ab-iam-root.v3 .ab-in-app-message .ab-message-button:active:after{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.08)}.ab-centering-div .ab-in-app-message .ab-message-button:focus:after,.ab-iam-root.v3 .ab-in-app-message .ab-message-button:focus:after{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.15)}.ab-centering-div .ab-in-app-message .ab-message-button a,.ab-iam-root.v3 .ab-in-app-message .ab-message-button a{color:inherit;text-decoration:inherit}.ab-centering-div .ab-in-app-message img,.ab-iam-root.v3 .ab-in-app-message img{float:none;display:inline-block}.ab-centering-div .ab-in-app-message .ab-icon,.ab-iam-root.v3 .ab-in-app-message .ab-icon{float:none;display:inline-block;padding:10px;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px}.ab-centering-div .ab-in-app-message .ab-icon .fa,.ab-iam-root.v3 .ab-in-app-message .ab-icon .fa{float:none;font-size:30px;width:30px}.ab-centering-div .ab-start-hidden,.ab-iam-root.v3 .ab-start-hidden{visibility:hidden}.ab-centering-div .ab-centered,.ab-centering-div.ab-centering-div .ab-modal,.ab-iam-root.v3 .ab-centered,.ab-iam-root.v3.ab-centering-div .ab-modal{margin:auto;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.ab-email-capture,.ab-iam-root.v3{-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.ab-email-capture .ab-page-blocker,.ab-iam-root.v3 .ab-page-blocker{position:fixed;top:0;left:0;width:100%;height:100%;z-index:1040;pointer-events:all;background-color:rgba(51,51,51,.75)}.ab-email-capture .ab-in-app-message.ab-modal .ab-email-capture-input{margin-bottom:30px}.ab-email-capture .ab-in-app-message.ab-modal .ab-message-buttons~.ab-message-text{max-height:541px;margin-bottom:160px}.ab-email-capture .ab-in-app-message.ab-modal .ab-message-buttons~.ab-message-text.with-explanatory-link{max-height:513px;margin-bottom:188px}.ab-email-capture .ab-in-app-message.ab-modal .ab-image-area~.ab-message-text{max-height:385.82758621px}.ab-email-capture .ab-in-app-message.ab-modal .ab-image-area~.ab-message-text.with-explanatory-link{max-height:357.82758621px}.ab-email-capture .ab-in-app-message.ab-modal .ab-email-validation-error{margin-top:62px}.ab-email-capture .ab-in-app-message.ab-modal .ab-explanatory-link{display:block}.ab-email-capture .ab-in-app-message.ab-modal .ab-background,.ab-email-capture .ab-in-app-message.ab-modal .ab-mask{position:absolute;top:0;right:0;bottom:0;left:0;z-index:-1}.ab-email-capture .ab-in-app-message.ab-modal .ab-close-button{line-height:normal}.ab-email-capture .ab-in-app-message.ab-modal .ab-html-close-button{right:3px;top:-1px;font-size:34px;padding-top:0}@media (max-width:600px){.ab-iam-root.v3 .ab-in-app-message.ab-slideup{max-height:66px;margin:10px;margin-top:calc(constant(safe-area-inset-top,0) + 10px);margin-right:calc(constant(safe-area-inset-right,0) + 10px);margin-bottom:calc(constant(safe-area-inset-bottom,0) + 10px);margin-left:calc(constant(safe-area-inset-left,0) + 10px);margin-top:calc(env(safe-area-inset-top,0) + 10px);margin-right:calc(env(safe-area-inset-right,0) + 10px);margin-bottom:calc(env(safe-area-inset-bottom,0) + 10px);margin-left:calc(env(safe-area-inset-left,0) + 10px);max-width:90%;max-width:calc(100% - 40px);min-width:90%;min-width:calc(100% - 40px)}.ab-iam-root.v3 .ab-in-app-message.ab-slideup .ab-close-button{display:none}.ab-iam-root.v3 .ab-in-app-message.ab-slideup .ab-close-button svg:not(.ab-chevron){display:none}.ab-iam-root.v3 .ab-in-app-message.ab-slideup.ab-clickable .ab-close-button{display:block;height:20px;padding:0 20px 0 18px;pointer-events:none;top:50%;-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);width:12px}.ab-iam-root.v3 .ab-in-app-message.ab-slideup.ab-clickable .ab-close-button svg.ab-chevron{display:inline}.ab-iam-root.v3 .ab-in-app-message.ab-slideup.ab-clickable .ab-message-text{border-right-width:40px}.ab-iam-root.v3 .ab-in-app-message.ab-slideup .ab-message-text{max-width:100%;border-right-width:10px}.ab-iam-root.v3 .ab-in-app-message.ab-slideup .ab-message-text span{max-height:66px}.ab-iam-root.v3 .ab-in-app-message.ab-slideup .ab-message-text.ab-with-icon,.ab-iam-root.v3 .ab-in-app-message.ab-slideup .ab-message-text.ab-with-image{max-width:80%;max-width:calc(100% - 50px - 5px - 10px - 25px)}.ab-iam-root.v3 .ab-in-app-message.ab-slideup .ab-image-area{width:50px;height:50px}.ab-iam-root.v3 .ab-in-app-message.ab-slideup .ab-image-area img{max-width:100%;max-height:100%;width:auto;height:auto}.ab-iam-root.v3 .ab-in-app-message:not(.force-desktop).ab-fullscreen,.ab-iam-root.v3 .ab-in-app-message:not(.force-desktop).ab-fullscreen.landscape{-webkit-transition:top none;-moz-transition:top none;-o-transition:top none;transition:top none;top:0;right:0;bottom:0;left:0;height:100%;width:100%;max-height:none;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;-webkit-transform:none;-moz-transform:none;-ms-transform:none;transform:none;height:auto!important}.ab-iam-root.v3 .ab-in-app-message:not(.force-desktop).ab-fullscreen.landscape .ab-close-button,.ab-iam-root.v3 .ab-in-app-message:not(.force-desktop).ab-fullscreen.landscape.landscape .ab-close-button{margin-right:calc(constant(safe-area-inset-bottom,0) + constant(safe-area-inset-top,0));margin-right:calc(env(safe-area-inset-bottom,0) + env(safe-area-inset-top,0));margin-left:calc(constant(safe-area-inset-bottom,0) + constant(safe-area-inset-top,0));margin-left:calc(env(safe-area-inset-bottom,0) + env(safe-area-inset-top,0))}.ab-iam-root.v3 .ab-in-app-message:not(.force-desktop).ab-fullscreen .ab-image-area,.ab-iam-root.v3 .ab-in-app-message:not(.force-desktop).ab-fullscreen.landscape .ab-image-area,.ab-iam-root.v3 .ab-in-app-message:not(.force-desktop).ab-fullscreen.landscape.landscape .ab-image-area{height:50%}.ab-iam-root.v3 .ab-in-app-message:not(.force-desktop).ab-fullscreen .ab-message-text,.ab-iam-root.v3 .ab-in-app-message:not(.force-desktop).ab-fullscreen.landscape .ab-message-text{max-height:48%;max-height:calc(50% - 20px - 20px)}.ab-iam-root.v3 .ab-in-app-message:not(.force-desktop).ab-fullscreen .ab-message-text.ab-with-buttons,.ab-iam-root.v3 .ab-in-app-message:not(.force-desktop).ab-fullscreen.landscape .ab-message-text.ab-with-buttons{margin-bottom:20px;max-height:30%;max-height:calc(50% - 93px - 20px)}.ab-iam-root.v3 .ab-in-app-message:not(.force-desktop).ab-fullscreen.landscape .ab-message-text.ab-with-buttons,.ab-iam-root.v3 .ab-in-app-message:not(.force-desktop).ab-fullscreen.landscape.landscape .ab-message-text.ab-with-buttons{max-height:20%;max-height:calc(50% - 93px - 20px)}.ab-iam-root.v3 .ab-in-app-message:not(.force-desktop).ab-fullscreen.landscape:not(.graphic),.ab-iam-root.v3 .ab-in-app-message:not(.force-desktop).ab-fullscreen:not(.graphic){padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom,0);padding-bottom:env(safe-area-inset-bottom,0)}.ab-iam-root.v3 .ab-in-app-message:not(.force-desktop).ab-fullscreen.landscape:not(.graphic) .ab-message-buttons,.ab-iam-root.v3 .ab-in-app-message:not(.force-desktop).ab-fullscreen:not(.graphic) .ab-message-buttons{padding-top:0;position:relative}.ab-iam-root.v3 .ab-in-app-message:not(.force-desktop).ab-fullscreen.graphic,.ab-iam-root.v3 .ab-in-app-message:not(.force-desktop).ab-fullscreen.landscape.graphic{display:block}.ab-iam-root.v3 .ab-in-app-message:not(.force-desktop).ab-fullscreen.graphic .ab-image-area,.ab-iam-root.v3 .ab-in-app-message:not(.force-desktop).ab-fullscreen.landscape.graphic .ab-image-area{height:100%}.ab-iam-root.v3 .ab-in-app-message:not(.force-desktop).ab-fullscreen.graphic .ab-message-button,.ab-iam-root.v3 .ab-in-app-message:not(.force-desktop).ab-fullscreen.landscape.graphic .ab-message-button{margin-bottom:0;margin-bottom:constant(safe-area-inset-bottom,0);margin-bottom:env(safe-area-inset-bottom,0)}}@media (max-width:480px){.ab-email-capture .ab-in-app-message.ab-modal:not(.force-desktop),.ab-iam-root.v3 .ab-in-app-message.ab-modal:not(.force-desktop){max-width:91%;max-width:calc(100% - 30px)}.ab-email-capture .ab-in-app-message.ab-modal:not(.force-desktop).graphic .ab-image-area img,.ab-iam-root.v3 .ab-in-app-message.ab-modal:not(.force-desktop).graphic .ab-image-area img{max-width:91vw;max-width:calc(100vw - 30px)}}@media (max-height:750px){.ab-email-capture .ab-in-app-message.ab-modal:not(.force-desktop),.ab-iam-root.v3 .ab-in-app-message.ab-modal:not(.force-desktop){max-height:91%;max-height:calc(100% - 30px)}.ab-email-capture .ab-in-app-message.ab-modal:not(.force-desktop).graphic .ab-image-area img,.ab-iam-root.v3 .ab-in-app-message.ab-modal:not(.force-desktop).graphic .ab-image-area img{max-height:91vh;max-height:calc(100vh - 30px)}.ab-email-capture .ab-in-app-message.ab-modal:not(.force-desktop) .ab-message-text,.ab-iam-root.v3 .ab-in-app-message.ab-modal:not(.force-desktop) .ab-message-text{max-height:65vh;max-height:calc(100vh - 30px - 60px)}.ab-email-capture .ab-in-app-message.ab-modal:not(.force-desktop) .ab-message-text.ab-with-image,.ab-iam-root.v3 .ab-in-app-message.ab-modal:not(.force-desktop) .ab-message-text.ab-with-image{max-height:45vh;max-height:calc(100vh - 30px - 155.17241379310346px - 40px)}.ab-email-capture .ab-in-app-message.ab-modal:not(.force-desktop) .ab-message-text.ab-with-icon,.ab-iam-root.v3 .ab-in-app-message.ab-modal:not(.force-desktop) .ab-message-text.ab-with-icon{max-height:45vh;max-height:calc(100vh - 30px - 70px - 40px)}.ab-email-capture .ab-in-app-message.ab-modal:not(.force-desktop) .ab-message-text.ab-with-buttons,.ab-iam-root.v3 .ab-in-app-message.ab-modal:not(.force-desktop) .ab-message-text.ab-with-buttons{max-height:50vh;max-height:calc(100vh - 30px - 93px - 40px)}.ab-email-capture .ab-in-app-message.ab-modal:not(.force-desktop) .ab-message-text.ab-with-buttons.ab-with-image,.ab-iam-root.v3 .ab-in-app-message.ab-modal:not(.force-desktop) .ab-message-text.ab-with-buttons.ab-with-image{max-height:30vh;max-height:calc(100vh - 30px - 155.17241379310346px - 93px - 20px)}.ab-email-capture .ab-in-app-message.ab-modal:not(.force-desktop) .ab-message-text.ab-with-buttons.ab-with-icon,.ab-iam-root.v3 .ab-in-app-message.ab-modal:not(.force-desktop) .ab-message-text.ab-with-buttons.ab-with-icon{max-height:30vh;max-height:calc(100vh - 30px - 70px - 93px - 20px)}}@media (min-width:601px){.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen .ab-image-area img{max-height:100%;max-width:100%}}@media (max-height:750px) and (min-width:601px){.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen:not(.landscape):not(.force-desktop){-webkit-transition:top none;-moz-transition:top none;-o-transition:top none;transition:top none;top:0;right:0;bottom:0;left:0;height:100%;width:100%;max-height:none;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;-webkit-transform:none;-moz-transform:none;-ms-transform:none;transform:none;height:auto!important;width:450px}.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen:not(.landscape):not(.force-desktop).landscape .ab-close-button{margin-right:calc(constant(safe-area-inset-bottom,0) + constant(safe-area-inset-top,0));margin-right:calc(env(safe-area-inset-bottom,0) + env(safe-area-inset-top,0));margin-left:calc(constant(safe-area-inset-bottom,0) + constant(safe-area-inset-top,0));margin-left:calc(env(safe-area-inset-bottom,0) + env(safe-area-inset-top,0))}.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen:not(.landscape):not(.force-desktop) .ab-image-area,.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen:not(.landscape):not(.force-desktop).landscape .ab-image-area{height:50%}.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen:not(.landscape):not(.force-desktop) .ab-message-text{max-height:48%;max-height:calc(50% - 20px - 20px)}.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen:not(.landscape):not(.force-desktop) .ab-message-text.ab-with-buttons{margin-bottom:20px;max-height:30%;max-height:calc(50% - 93px - 20px)}.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen:not(.landscape):not(.force-desktop).landscape .ab-message-text.ab-with-buttons{max-height:20%;max-height:calc(50% - 93px - 20px)}.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen:not(.landscape):not(.force-desktop):not(.graphic){padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom,0);padding-bottom:env(safe-area-inset-bottom,0)}.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen:not(.landscape):not(.force-desktop):not(.graphic) .ab-message-buttons{padding-top:0;position:relative}.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen:not(.landscape):not(.force-desktop).graphic{display:block}.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen:not(.landscape):not(.force-desktop).graphic .ab-image-area{height:100%}.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen:not(.landscape):not(.force-desktop).graphic .ab-message-button{margin-bottom:0;margin-bottom:constant(safe-area-inset-bottom,0);margin-bottom:env(safe-area-inset-bottom,0)}}@media (max-height:480px){.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.landscape:not(.force-desktop){-webkit-transition:top none;-moz-transition:top none;-o-transition:top none;transition:top none;top:0;right:0;bottom:0;left:0;height:100%;width:100%;max-height:none;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;-webkit-transform:none;-moz-transform:none;-ms-transform:none;transform:none;height:auto!important}.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.landscape:not(.force-desktop).landscape .ab-close-button{margin-right:calc(constant(safe-area-inset-bottom,0) + constant(safe-area-inset-top,0));margin-right:calc(env(safe-area-inset-bottom,0) + env(safe-area-inset-top,0));margin-left:calc(constant(safe-area-inset-bottom,0) + constant(safe-area-inset-top,0));margin-left:calc(env(safe-area-inset-bottom,0) + env(safe-area-inset-top,0))}.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.landscape:not(.force-desktop) .ab-image-area,.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.landscape:not(.force-desktop).landscape .ab-image-area{height:50%}.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.landscape:not(.force-desktop) .ab-message-text{max-height:48%;max-height:calc(50% - 20px - 20px)}.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.landscape:not(.force-desktop) .ab-message-text.ab-with-buttons{margin-bottom:20px;max-height:30%;max-height:calc(50% - 93px - 20px)}.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.landscape:not(.force-desktop).landscape .ab-message-text.ab-with-buttons{max-height:20%;max-height:calc(50% - 93px - 20px)}.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.landscape:not(.force-desktop):not(.graphic){padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom,0);padding-bottom:env(safe-area-inset-bottom,0)}.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.landscape:not(.force-desktop):not(.graphic) .ab-message-buttons{padding-top:0;position:relative}.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.landscape:not(.force-desktop).graphic{display:block}.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.landscape:not(.force-desktop).graphic .ab-image-area{height:100%}.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.landscape:not(.force-desktop).graphic .ab-message-button{margin-bottom:0;margin-bottom:constant(safe-area-inset-bottom,0);margin-bottom:env(safe-area-inset-bottom,0)}}@media (max-width:750px){.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.landscape:not(.force-desktop){-webkit-transition:top none;-moz-transition:top none;-o-transition:top none;transition:top none;top:0;right:0;bottom:0;left:0;height:100%;width:100%;max-height:none;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;-webkit-transform:none;-moz-transform:none;-ms-transform:none;transform:none;height:auto!important}.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.landscape:not(.force-desktop).landscape .ab-close-button{margin-right:calc(constant(safe-area-inset-bottom,0) + constant(safe-area-inset-top,0));margin-right:calc(env(safe-area-inset-bottom,0) + env(safe-area-inset-top,0));margin-left:calc(constant(safe-area-inset-bottom,0) + constant(safe-area-inset-top,0));margin-left:calc(env(safe-area-inset-bottom,0) + env(safe-area-inset-top,0))}.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.landscape:not(.force-desktop) .ab-image-area,.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.landscape:not(.force-desktop).landscape .ab-image-area{height:50%}.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.landscape:not(.force-desktop) .ab-message-text{max-height:48%;max-height:calc(50% - 20px - 20px)}.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.landscape:not(.force-desktop) .ab-message-text.ab-with-buttons{margin-bottom:20px;max-height:30%;max-height:calc(50% - 93px - 20px)}.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.landscape:not(.force-desktop).landscape .ab-message-text.ab-with-buttons{max-height:20%;max-height:calc(50% - 93px - 20px)}.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.landscape:not(.force-desktop):not(.graphic){padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom,0);padding-bottom:env(safe-area-inset-bottom,0)}.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.landscape:not(.force-desktop):not(.graphic) .ab-message-buttons{padding-top:0;position:relative}.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.landscape:not(.force-desktop).graphic{display:block}.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.landscape:not(.force-desktop).graphic .ab-image-area{height:100%}.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.landscape:not(.force-desktop).graphic .ab-message-button{margin-bottom:0;margin-bottom:constant(safe-area-inset-bottom,0);margin-bottom:env(safe-area-inset-bottom,0)}}body>.ab-feed{position:fixed;top:0;right:0;bottom:0;width:421px;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}body>.ab-feed .ab-feed-body{position:absolute;top:0;left:0;right:0;border:none;border-left:1px solid #d0d0d0;padding-top:70px;min-height:100%}body>.ab-feed .ab-initial-spinner{float:none}body>.ab-feed .ab-no-cards-message{position:absolute;width:100%;margin-left:-20px;top:40%}.ab-feed{-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:0 1px 7px 1px rgba(66,82,113,.15);-moz-box-shadow:0 1px 7px 1px rgba(66,82,113,.15);box-shadow:0 1px 7px 1px rgba(66,82,113,.15);width:402px;background-color:#eee;font-family:'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif;font-size:13px;line-height:130%;letter-spacing:normal;overflow-y:auto;overflow-x:visible;z-index:1050;-webkit-overflow-scrolling:touch}.ab-feed :focus,.ab-feed:focus{outline:0}.ab-feed .ab-feed-body{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;border:1px solid #d0d0d0;border-top:none;padding:20px 20px 0 20px}.ab-feed.ab-effect-slide{-webkit-transform:translateX(450px);-moz-transform:translateX(450px);-ms-transform:translateX(450px);transform:translateX(450px);-webkit-transition:transform .5s ease-in-out;-moz-transition:transform .5s ease-in-out;-o-transition:transform .5s ease-in-out;transition:transform .5s ease-in-out}.ab-feed.ab-effect-slide.ab-show{-webkit-transform:translateX(0);-moz-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0)}.ab-feed.ab-effect-slide.ab-hide{-webkit-transform:translateX(450px);-moz-transform:translateX(450px);-ms-transform:translateX(450px);transform:translateX(450px)}.ab-feed .ab-card{position:relative;-webkit-box-shadow:0 2px 3px 0 rgba(178,178,178,.5);-moz-box-shadow:0 2px 3px 0 rgba(178,178,178,.5);box-shadow:0 2px 3px 0 rgba(178,178,178,.5);-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;width:100%;border:1px solid #d0d0d0;margin-bottom:20px;overflow:hidden;background-color:#fff;-webkit-transition:height .4s ease-in-out,margin .4s ease-in-out;-moz-transition:height .4s ease-in-out,margin .4s ease-in-out;-o-transition:height .4s ease-in-out,margin .4s ease-in-out;transition:height .4s ease-in-out,margin .4s ease-in-out}.ab-feed .ab-card .ab-pinned-indicator{position:absolute;right:0;top:0;margin-right:-1px;width:0;height:0;border-style:solid;border-width:0 24px 24px 0;border-color:transparent #1676d0 transparent transparent}.ab-feed .ab-card .ab-pinned-indicator .fa-star{position:absolute;right:-21px;top:2px;font-size:9px;color:#fff}.ab-feed .ab-card.ab-effect-card.ab-hide{-webkit-transition:all .5s ease-in-out;-moz-transition:all .5s ease-in-out;-o-transition:all .5s ease-in-out;transition:all .5s ease-in-out}.ab-feed .ab-card.ab-effect-card.ab-hide.ab-swiped-left{-webkit-transform:translateX(-450px);-moz-transform:translateX(-450px);-ms-transform:translateX(-450px);transform:translateX(-450px)}.ab-feed .ab-card.ab-effect-card.ab-hide.ab-swiped-right{-webkit-transform:translateX(450px);-moz-transform:translateX(450px);-ms-transform:translateX(450px);transform:translateX(450px)}.ab-feed .ab-card.ab-effect-card.ab-hide:not(.ab-swiped-left):not(.ab-swiped-right){opacity:0}.ab-feed .ab-card .ab-close-button{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;background-color:transparent;background-size:15px;border:none;width:15px;min-width:15px;height:15px;cursor:pointer;display:block;font-size:15px;line-height:0;padding-top:15px;padding-right:15px;padding-left:15px;padding-bottom:15px;position:absolute;right:0;top:0;z-index:1060;opacity:0;-webkit-transition:.5s;-moz-transition:.5s;-o-transition:.5s;transition:.5s}.ab-feed .ab-card .ab-close-button svg{-webkit-transition:.2s ease;-moz-transition:.2s ease;-o-transition:.2s ease;transition:.2s ease;fill:#9b9b9b}.ab-feed .ab-card .ab-close-button svg.ab-chevron{display:none}.ab-feed .ab-card .ab-close-button:active{background-color:transparent}.ab-feed .ab-card .ab-close-button:focus{background-color:transparent}.ab-feed .ab-card .ab-close-button:hover{background-color:transparent}.ab-feed .ab-card .ab-close-button:hover svg{fill-opacity:.8}.ab-feed .ab-card .ab-close-button:hover{opacity:1}.ab-feed .ab-card .ab-close-button:focus{opacity:1}.ab-feed .ab-card a{float:none;color:inherit;text-decoration:none}.ab-feed .ab-card a:hover{text-decoration:underline}.ab-feed .ab-card .ab-image-area{float:none;display:inline-block;vertical-align:top;line-height:0;overflow:hidden;width:100%;-webkit-box-sizing:initial;-moz-box-sizing:initial;box-sizing:initial}.ab-feed .ab-card .ab-image-area img{float:none;height:auto;width:100%}.ab-feed .ab-card.ab-banner .ab-card-body{display:none}.ab-feed .ab-card .ab-card-body{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:inline-block;width:100%;position:relative}.ab-feed .ab-card .ab-unread-indicator{position:absolute;bottom:0;margin-right:-1px;width:100%;height:5px;background-color:#1676d0}.ab-feed .ab-card .ab-unread-indicator.read{background-color:transparent}.ab-feed .ab-card .ab-title{float:none;letter-spacing:0;margin:0;font-weight:700;font-family:'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif;display:block;overflow:hidden;word-wrap:break-word;text-overflow:ellipsis;font-size:18px;line-height:130%;padding:20px 25px 0 25px}.ab-feed .ab-card .ab-description{float:none;color:#545454;padding:15px 25px 20px 25px;word-wrap:break-word;white-space:pre-wrap}.ab-feed .ab-card .ab-description.ab-no-title{padding-top:20px}.ab-feed .ab-card .ab-url-area{float:none;color:#1676d0;margin-top:12px;font-family:'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif}.ab-feed .ab-card.ab-classic-card .ab-card-body{min-height:40px;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px}.ab-feed .ab-card.ab-classic-card.with-image .ab-card-body{min-height:100px;padding-left:72px}.ab-feed .ab-card.ab-classic-card.with-image .ab-image-area{width:60px;height:60px;padding:20px 0 25px 25px;position:absolute}.ab-feed .ab-card.ab-classic-card.with-image .ab-image-area img{-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;max-width:100%;max-height:100%;width:auto;height:auto}.ab-feed .ab-card.ab-classic-card.with-image .ab-title{background-color:transparent;font-size:16px}.ab-feed .ab-card.ab-classic-card.with-image .ab-description{padding-top:10px}.ab-feed .ab-card.ab-control-card{height:0;width:0;margin:0;border:0}.ab-feed .ab-feed-buttons-wrapper{float:none;position:relative;background-color:#282828;height:50px;-webkit-box-shadow:0 2px 3px 0 rgba(178,178,178,.5);-moz-box-shadow:0 2px 3px 0 rgba(178,178,178,.5);box-shadow:0 2px 3px 0 rgba(178,178,178,.5);z-index:1}.ab-feed .ab-feed-buttons-wrapper .ab-close-button,.ab-feed .ab-feed-buttons-wrapper .ab-refresh-button{float:none;cursor:pointer;color:#fff;font-size:18px;padding:16px;-webkit-transition:.2s;-moz-transition:.2s;-o-transition:.2s;transition:.2s}.ab-feed .ab-feed-buttons-wrapper .ab-close-button:hover,.ab-feed .ab-feed-buttons-wrapper .ab-refresh-button:hover{font-size:22px}.ab-feed .ab-feed-buttons-wrapper .ab-close-button{float:right}.ab-feed .ab-feed-buttons-wrapper .ab-close-button:hover{padding-top:12px;padding-right:14px}.ab-feed .ab-feed-buttons-wrapper .ab-refresh-button{padding-left:17px}.ab-feed .ab-feed-buttons-wrapper .ab-refresh-button:hover{padding-top:13px;padding-left:14px}.ab-feed .ab-no-cards-message{text-align:center;margin-bottom:20px}@media (max-width:600px){body>.ab-feed{width:100%}}"
                            };

                            function tB(e) {
                                return !!e && (0 === (e = e.toString().toLowerCase()).lastIndexOf("javascript:", 0) || 0 === e.lastIndexOf("data:", 0))
                            }

                            function tF(e, t, a, n, i, o, r, s, l, c, u, b, p) {
                                null != e && 0 < e.length && 0 < e.indexOf('"ab-in-app-message ab-html-message ab-email-capture"') && 0 < e.indexOf('"ab-in-app-message ab-show ab-modal ab-effect-modal"') && (l = s = !0), e9.call(this, e, null, null, t, a, n, i, null, null, null, o || "SWIPE", r, null, null, null, null, null, null, null, null, s, l, null, null, null, c, void 0, void 0, void 0, u, b), this.messageFields = p
                            }

                            function tG(e, t, a, n, i, o, r, s, l, c, u, b, p, d, h, f, g, m, v, w, y, x, k, E, A, S, C, N, T) {
                                C = C || ty, e9.call(this, e, t, null, a, n, i, o, r, s, l, c || "SWIPE", u, b, p, d, h, f, g, m, v, w, y, x, k, E, A, S, C, void 0, N, T)
                            }

                            function tj(e, t, a, n, i, o, r, s, l, c, u, b, p, d, h, f, g, m, v, w, y, x, k) {
                                m = m || tr.Uf, g = g || tr.Tf, e9.call(this, e, t || "START", a, n, i, o, r, s, l, c, u, b, p, d, null, h, f, g, m, v, w, y, void 0, void 0, void 0, void 0, void 0, void 0, void 0, x, k)
                            }

                            function tH(e, t) {
                                this.cards = e, this.lastUpdated = t
                            }

                            function tK(e, t) {
                                t && (t.className = t.className.replace("ab-show", "ab-hide"), setTimeout(function() {
                                    t && t.parentNode && t.parentNode.removeChild(t)
                                }, tY));
                                var a = t.getAttribute(tJ);
                                null != a && e.N(a)
                            }

                            function tW(e, t, a) {
                                var n = document.createElement("div");
                                if (n.className = "ab-feed-body", n.setAttribute("aria-label", "Feed"), n.setAttribute("role", "feed"), null == e.lastUpdated) {
                                    (a = document.createElement("div")).className = "ab-no-cards-message";
                                    var i = document.createElement("i");
                                    i.className = "fa fa-spinner fa-spin fa-4x ab-initial-spinner", a.appendChild(i), n.appendChild(a)
                                } else {
                                    i = !1;
                                    for (var o = function(a) {
                                            e.La(t, a)
                                        }, r = function(e) {
                                            t.Hc(e)
                                        }, s = 0; s < e.cards.length; s++) {
                                        var l = e.cards[s] instanceof e7;
                                        !l || e instanceof tQ ? (n.appendChild(e.cards[s].aa(o, r, a)), i = i || !l) : A.error("Received a control card for a legacy news feed. Control cards are only supported with content cards.")
                                    }
                                    i || ((a = document.createElement("div")).className = "ab-no-cards-message", a.innerHTML = nT[n_].NO_CARDS_MESSAGE, a.setAttribute("role", "article"), n.appendChild(a))
                                }
                                return n
                            }

                            function tX(e, t, a) {
                                if (null != a) {
                                    var n = [];
                                    a = a.querySelectorAll(".ab-card"), e.od || (e.od = {});
                                    for (var i = 0; i < a.length; i++) {
                                        var o = a[i].getAttribute("data-ab-card-id");
                                        if (!e.od[o]) {
                                            var r = a[i];
                                            r = null != r && !!r.getAttribute("data-ab-had-top-impression");
                                            var s = a[i];
                                            s = null != s && !!s.getAttribute("data-ab-had-bottom-impression");
                                            var l = r,
                                                c = s,
                                                u = eU(a[i], !0, !1, !1),
                                                b = eU(a[i], !1, !0, !1);
                                            if (!r && u) {
                                                r = !0;
                                                var p = a[i];
                                                null != p && p.setAttribute("data-ab-had-top-impression", !0)
                                            }
                                            if (!s && b && (s = !0, null != (p = a[i]) && p.setAttribute("data-ab-had-bottom-impression", !0)), r && s && (u || b || e$(a[i]), !l || !c)) {
                                                for (r = 0; r < e.cards.length; r++)
                                                    if (e.cards[i].id === o) {
                                                        e.od[e.cards[i].id] = !0, n.push(e.cards[i]);
                                                        break
                                                    }
                                            }
                                        }
                                    }
                                    0 < n.length && e.Ma(t, n)
                                }
                            }

                            function tq(e, t, a) {
                                a.setAttribute("aria-busy", "true");
                                var n = a.querySelectorAll(".ab-refresh-button")[0];
                                null != n && (n.className += " fa-spin");
                                var i = (new Date).valueOf().toString();
                                a.setAttribute(tZ, i), setTimeout(function() {
                                    if (a.getAttribute(tZ) === i) {
                                        for (var e = a.querySelectorAll(".fa-spin"), t = 0; t < e.length; t++) e[t].className = e[t].className.replace(/fa-spin/g, "");
                                        null != (e = a.querySelectorAll(".ab-initial-spinner")[0]) && ((t = document.createElement("span")).innerHTML = nT[n_].FEED_TIMEOUT_MESSAGE, e.parentNode.appendChild(t), e.parentNode.removeChild(e)), "true" === a.getAttribute("aria-busy") && a.setAttribute("aria-busy", "false")
                                    }
                                }, t$), e.Se(t)
                            }

                            function tV(e, t, a, n, i, o) {
                                if (N(t)) {
                                    for (var r = [], s = 0; s < t.length; s++) t[s] instanceof eX && r.push(t[s]);
                                    e.cards = r, e.lastUpdated = a, null != n && (n.setAttribute("aria-busy", "false"), null == e.lastUpdated ? tK(i, n) : null != (t = n.querySelectorAll(".ab-feed-body")[0]) && (o = tW(e, i, o), t.parentNode.replaceChild(o, t), tX(e, i, o.parentNode)))
                                }
                            }
                            u(tF, e9), tF.prototype.xf = function() {
                                return !1
                            }, tF.prototype.fb = function(e) {
                                if (this.nf === tS) {
                                    if (this.Wa) return !1;
                                    this.Wa = !0
                                }
                                return eI(this.X, e), !0
                            }, tF.prototype.aa = function(e, t, a, n, i, o) {
                                function r(e, t, a) {
                                    return (a = e.match(RegExp("([\\w]+)\\s*=\\s*document.createElement\\(['\"]" + a + "['\"]\\)"))) ? e.slice(0, a.index + a[0].length) + ";" + a[1] + '.setAttribute("nonce", "' + t + '");' + e.slice(a.index + a[0].length) : null
                                }

                                function s(t) {
                                    var a = t.getAttribute("href"),
                                        n = t.onclick;
                                    return function(o) {
                                        if (null == n || "function" != typeof n || !1 !== n()) {
                                            var r = function(e) {
                                                null == e && (e = "");
                                                var t = e.split("?").slice(1).join("?");
                                                if (e = {}, null != t) {
                                                    t = t.split("&");
                                                    for (var a = 0; a < t.length; a++) {
                                                        var n = t[a].split("=");
                                                        "" !== n[0] && (e[n[0]] = n[1])
                                                    }
                                                }
                                                return e
                                            }(a).abButtonId;
                                            if ((null == r || "" === r) && (r = t.getAttribute("id")), null != a && "" !== a && 0 !== a.indexOf("#")) {
                                                var s = "blank" === (t.getAttribute("target") || "").toLowerCase().replace("_", ""),
                                                    u = i || l.openTarget === th || s;
                                                s = function() {
                                                    e.Pb(l, r, a), eW.openUri(a, o, u)
                                                }, u ? s() : ti(l, c, s)
                                            } else e.Pb(l, r, a);
                                            return o.stopPropagation(), !1
                                        }
                                    }
                                }
                                var l = this;
                                this.tc = document.activeElement;
                                var c = document.createElement("iframe");
                                return c.setAttribute("title", "Modal Message"), o && (c.style.zIndex = o + 1), c.onload = function() {
                                    function a(e) {
                                        return function() {
                                            t[e].apply(t, Array.prototype.slice.call(arguments))
                                        }
                                    }
                                    var i = null,
                                        o = e.ih();
                                    if (null != o) {
                                        (i = document.createElement("html")).innerHTML = l.message;
                                        for (var u = i.getElementsByTagName("style"), b = 0; b < u.length; b++) u[b].setAttribute("nonce", o);
                                        for (b = 0, u = i.getElementsByTagName("script"); b < u.length; b++) {
                                            u[b].setAttribute("nonce", o), u[b].innerHTML = u[b].innerHTML.replace(/<style>/g, "<style nonce='" + o + "'>");
                                            var p = r(u[b].innerHTML, o, "script");
                                            p && (u[b].innerHTML = p), (p = r(u[b].innerHTML, o, "style")) && (u[b].innerHTML = p)
                                        }
                                    }
                                    for (c.contentWindow.focus(), c.contentWindow.document.write(i ? i.innerHTML : l.message), null != (i = c.contentWindow.document.getElementsByTagName("head")[0]) && ((u = document.createElement("style")).innerHTML = tR.$e, null != o && u.setAttribute("nonce", o), i.appendChild(u), tt(l) && ((u = document.createElement("style")).innerHTML = l.css, u.id = ta(l), null != o && u.setAttribute("nonce", o), i.appendChild(u)), (o = c.contentWindow.document.createElement("base")).setAttribute("target", "_parent"), i.appendChild(o)), 0 < (o = c.contentWindow.document.getElementsByTagName("title")).length && c.setAttribute("title", o[0].textContent), o = {
                                            closeMessage: function() {
                                                ti(l, c)
                                            },
                                            logClick: function() {
                                                var e = [l];
                                                0 < arguments.length && e.push(arguments[0]), t.logInAppMessageHtmlClick.apply(t, e)
                                            },
                                            display: {},
                                            web: {}
                                        }, i = ["requestImmediateDataFlush", "logCustomEvent", "logPurchase", "unregisterAppboyPushMessages"], u = 0; u < i.length; u++) o[i[u]] = a(i[u]);
                                    i = "setFirstName setLastName setEmail setGender setDateOfBirth setCountry setHomeCity setEmailNotificationSubscriptionType setLanguage addAlias setPushNotificationSubscriptionType setPhoneNumber setCustomUserAttribute addToCustomAttributeArray removeFromCustomAttributeArray incrementCustomUserAttribute setCustomLocationAttribute addToSubscriptionGroup removeFromSubscriptionGroup".split(" ");
                                    var d = {};
                                    for (u = 0; u < i.length; u++) d[i[u]] = function(e) {
                                        return function() {
                                            var a = t.getUser();
                                            a[e].apply(a, Array.prototype.slice.call(arguments))
                                        }
                                    }(i[u]);
                                    for (u = 0, o.getUser = function() {
                                            return d
                                        }, i = ["showFeed"]; u < i.length; u++) o.display[i[u]] = function(e) {
                                        return function() {
                                            var a = arguments;
                                            ti(l, c, function() {
                                                t.display[e].apply(t.display, Array.prototype.slice.call(a))
                                            })
                                        }
                                    }(i[u]);
                                    for (u = 0, i = ["registerAppboyPushMessages", "trackLocation"]; u < i.length; u++) o.web[i[u]] = a(i[u]);
                                    if (c.contentWindow.appboyBridge = o, c.contentWindow.brazeBridge = o, l.nf !== tC) {
                                        for (u = 0, i = c.contentWindow.document.getElementsByTagName("a"); u < i.length; u++) i[u].onclick = s(i[u]);
                                        for (u = 0, i = c.contentWindow.document.getElementsByTagName("button"); u < i.length; u++) i[u].onclick = s(i[u])
                                    }
                                    null != (i = c.contentWindow.document.body) && (te(l) && (i.id = l.htmlId), (u = document.createElement("hidden")).onclick = o.closeMessage, u.className = "ab-programmatic-close-button", i.appendChild(u)), c.contentWindow.dispatchEvent(new CustomEvent("ab.BridgeReady")), -1 !== c.className.indexOf("ab-start-hidden") && (c.className = c.className.replace("ab-start-hidden", ""), n(c)), document.activeElement !== c && c.focus()
                                }, c.className = "ab-in-app-message ab-start-hidden ab-html-message ab-modal-interactions", "iOS" === eu.ga ? ((a = document.createElement("div")).className = "ab-ios-scroll-wrapper", a.appendChild(c), this.sc = a) : this.sc = c
                            }, tF.prototype.oa = function() {
                                return e9.prototype.oa.call(this) + " ab-effect-html"
                            }, J.HtmlMessage = tF, u(tG, e9), tG.prototype.aa = function(e, t, a, n, i, o) {
                                return this.tc = document.activeElement, t = e9.prototype.aa.call(this, e, a, n, i, o), t.className += " ab-modal ab-centered", tz(this, e, a, t, i), tP(t), tU(this.qd, t), t
                            }, tG.prototype.oa = function() {
                                return e9.prototype.oa.call(this) + " ab-effect-modal"
                            }, r.Object.defineProperties(tG.prototype, {
                                Bd: {
                                    configurable: !0,
                                    enumerable: !0,
                                    get: function() {
                                        return tv
                                    }
                                }
                            }), J.ModalMessage = tG, u(tj, e9), (nS = tj.prototype).Ja = function() {
                                return !1
                            }, nS.aa = function(e, t, a, n, i, o) {
                                var r = e9.prototype.aa.call(this, e, a, n, i, o);
                                r.className += " ab-slideup";
                                var s = r.getElementsByClassName("ab-close-button")[0];
                                if (null != s && ((e = eR("0 0 11.38 19.44", "M11.38 9.72l-9.33 9.72L0 17.3l7.27-7.58L0 2.14 2.05 0l9.33 9.72z", tt(this) ? void 0 : e6(this.closeButtonColor))).setAttribute("class", "ab-chevron"), s.appendChild(e)), eL(r, ej, function(e) {
                                        r.className += " ab-swiped-left", s.onclick(e)
                                    }), eL(r, eH, function(e) {
                                        r.className += " ab-swiped-right", s.onclick(e)
                                    }), "TOP" === this.slideFrom) {
                                    e = eF;
                                    var l = " ab-swiped-up"
                                } else e = eG, l = " ab-swiped-down";
                                return eL(r, e, function(e) {
                                    r.className += l, s.onclick(e)
                                }), r
                            }, nS.Xe = function() {
                                var e = document.createElement("span");
                                return e.appendChild(document.createTextNode(this.message)), e
                            }, nS.Kc = function(e) {
                                var t = e.getElementsByClassName("ab-in-app-message")[0];
                                eU(t, !0, !0) || ("TOP" === this.slideFrom ? t.style.top = "0px" : t.style.bottom = "0px"), e9.prototype.Kc.call(this, e)
                            }, nS.oa = function() {
                                return e9.prototype.oa.call(this) + " ab-effect-slide"
                            }, r.Object.defineProperties(tj.prototype, {
                                Bd: {
                                    configurable: !0,
                                    enumerable: !0,
                                    get: function() {
                                        return "START"
                                    }
                                }
                            }), J.SlideUpMessage = tj, (nS = tH.prototype).ff = function() {
                                for (var e = 0, t = 0; t < this.cards.length; t++) this.cards[t].viewed || this.cards[t] instanceof e7 || e++;
                                return e
                            }, nS.Ma = function(e, t) {
                                e.Ma(t)
                            }, nS.La = function(e, t) {
                                e.La(t)
                            }, nS.Se = function(e) {
                                e.Nc()
                            }, nS.aa = function(e, t) {
                                function a(t) {
                                    tq(i, e, o), t.stopPropagation()
                                }

                                function n(t) {
                                    tK(e, o), t.stopPropagation()
                                }
                                var i = this,
                                    o = document.createElement("div");
                                o.className = "ab-feed ab-hide ab-effect-slide", o.setAttribute("role", "dialog"), o.setAttribute("tabindex", "-1");
                                var r = document.createElement("div");
                                r.className = "ab-feed-buttons-wrapper", r.setAttribute("role", "group"), o.appendChild(r);
                                var s = document.createElement("i");
                                s.className = "fa fa-times ab-close-button", s.setAttribute("aria-label", "Close Feed"), s.setAttribute("tabindex", "0"), s.setAttribute("role", "button"), s.addEventListener("keydown", function(e) {
                                    32 !== e.keyCode && 13 !== e.keyCode || n(e)
                                }), s.onclick = n;
                                var l = document.createElement("i");
                                return l.className = "fa fa-refresh ab-refresh-button", null == this.lastUpdated && (l.className += " fa-spin"), l.setAttribute("aria-label", "Refresh Feed"), l.setAttribute("tabindex", "0"), l.setAttribute("role", "button"), l.addEventListener("keydown", function(e) {
                                    32 !== e.keyCode && 13 !== e.keyCode || a(e)
                                }), l.onclick = a, r.appendChild(l), r.appendChild(s), o.appendChild(tW(this, e, t)), o.onscroll = function() {
                                    tX(i, e, o)
                                }, o
                            };
                            var tY = 500,
                                tJ = "data-update-subscription-id",
                                tZ = "data-last-requested-refresh",
                                t$ = 1e4;

                            function tQ(e, t) {
                                tH.call(this, e, t)
                            }

                            function t0() {
                                this.h = !1, this.j = []
                            }

                            function t1(e) {
                                this.bb = e
                            }

                            function t3(e, t, a, n) {
                                this.lf = e, this.Mc = t, this.nb = a, this.I = n, this.Mc === ao && this.nb !== t8 && this.nb !== t6 && this.nb !== aa && this.nb !== an && (this.I = P(this.I))
                            }
                            J.Feed = tH, J.Feed.prototype.getUnreadCardCount = tH.prototype.ff, u(tQ, tH), tQ.prototype.jh = function() {
                                return tH.prototype.ff.call(this)
                            }, tQ.prototype.Ma = function(e, t) {
                                e.Ma(t, !0)
                            }, tQ.prototype.La = function(e, t) {
                                e.La(t, !0)
                            }, tQ.prototype.Se = function(e) {
                                e.Na()
                            }, J.ContentCards = tQ, J.ContentCards.prototype.getUnviewedCardCount = tQ.prototype.jh, t1.prototype.fa = function(e) {
                                return null == this.bb || this.bb === e[0]
                            }, t1.prototype.A = function() {
                                return this.bb
                            }, t3.prototype.fa = function(e) {
                                var t = null;
                                switch (null != e && (t = e[this.lf]), this.nb) {
                                    case t5:
                                        return null != t && t.valueOf() === this.I.valueOf();
                                    case t2:
                                        return null == t || t.valueOf() !== this.I.valueOf();
                                    case t4:
                                        return typeof t == typeof this.I && t > this.I;
                                    case t8:
                                        return this.Mc === ao ? null != t && T(t) && ((new Date).valueOf() - t.valueOf()) / 1e3 <= this.I : typeof t == typeof this.I && t >= this.I;
                                    case t7:
                                        return typeof t == typeof this.I && t < this.I;
                                    case t6:
                                        return this.Mc === ao ? null != t && T(t) && ((new Date).valueOf() - t.valueOf()) / 1e3 >= this.I : typeof t == typeof this.I && t <= this.I;
                                    case t9:
                                        return null != t && "string" == typeof t && typeof t == typeof this.I && null != t.match(this.I);
                                    case ae:
                                        return null != t;
                                    case at:
                                        return null == t;
                                    case aa:
                                        return null != t && T(t) && (t.valueOf() - (new Date).valueOf()) / 1e3 < this.I;
                                    case an:
                                        return null != t && T(t) && (t.valueOf() - (new Date).valueOf()) / 1e3 > this.I;
                                    case ai:
                                        return null == t || typeof t != typeof this.I || "string" != typeof t || null == t.match(this.I)
                                }
                                return !1
                            }, t3.prototype.A = function() {
                                var e = this.I;
                                return T(this.I) && (e = M(e.valueOf())), {
                                    k: this.lf,
                                    t: this.Mc,
                                    c: this.nb,
                                    v: e
                                }
                            };
                            var t5 = 1,
                                t2 = 2,
                                t4 = 3,
                                t8 = 4,
                                t7 = 5,
                                t6 = 6,
                                t9 = 10,
                                ae = 11,
                                at = 12,
                                aa = 15,
                                an = 16,
                                ai = 17,
                                ao = "date";

                            function ar(e) {
                                this.filters = e
                            }

                            function as(e) {
                                if (null == e || !N(e)) return null;
                                for (var t = [], a = 0; a < e.length; a++) {
                                    for (var n = [], i = e[a], o = 0; o < i.length; o++) {
                                        var r = i[o];
                                        n.push(new t3(r.property_key, r.property_type, r.comparator, r.property_value))
                                    }
                                    t.push(n)
                                }
                                return new ar(t)
                            }

                            function al(e) {
                                for (var t = [], a = 0; a < e.length; a++) {
                                    for (var n = [], i = e[a], o = 0; o < i.length; o++) {
                                        var r = i[o];
                                        n.push(new t3(r.k, r.t, r.c, r.v))
                                    }
                                    t.push(n)
                                }
                                return new ar(t)
                            }

                            function ac(e, t) {
                                this.bb = e, this.eb = t
                            }

                            function au(e, t) {
                                this.Za = e, this.Gb = t
                            }

                            function ab(e) {
                                this.cb = e
                            }

                            function ap(e, t) {
                                this.cb = e, this.eb = t
                            }

                            function ad(e) {
                                this.Za = e
                            }
                            ar.prototype.fa = function(e) {
                                for (var t = !0, a = 0; a < this.filters.length; a++) {
                                    for (var n = this.filters[a], i = !1, o = 0; o < n.length; o++)
                                        if (n[o].fa(e)) {
                                            i = !0;
                                            break
                                        }
                                    if (!i) {
                                        t = !1;
                                        break
                                    }
                                }
                                return t
                            }, ar.prototype.A = function() {
                                for (var e = [], t = 0; t < this.filters.length; t++) {
                                    for (var a = this.filters[t], n = [], i = 0; i < a.length; i++) n.push(a[i].A());
                                    e.push(n)
                                }
                                return e
                            }, ac.prototype.fa = function(e) {
                                if (null == this.bb || null == this.eb) return !1;
                                var t = e[1];
                                return e[0] === this.bb && this.eb.fa(t)
                            }, ac.prototype.A = function() {
                                return {
                                    e: this.bb,
                                    pf: this.eb.A()
                                }
                            }, au.prototype.fa = function(e) {
                                if (null == this.Za) return !1;
                                var t = am(e[0], this.Za);
                                if (!t) return !1;
                                var a = null == this.Gb || 0 === this.Gb.length;
                                if (null != this.Gb) {
                                    for (var n = 0; n < this.Gb.length; n++)
                                        if (this.Gb[n] === e[1]) {
                                            a = !0;
                                            break
                                        }
                                }
                                return t && a
                            }, au.prototype.A = function() {
                                return this.Za
                            }, ab.prototype.fa = function(e) {
                                return null == this.cb || e[0] === this.cb
                            }, ab.prototype.A = function() {
                                return this.cb
                            }, ap.prototype.fa = function(e) {
                                if (null == this.cb || null == this.eb) return !1;
                                var t = e[1];
                                return e[0] === this.cb && this.eb.fa(t)
                            }, ap.prototype.A = function() {
                                return {
                                    id: this.cb,
                                    pf: this.eb.A()
                                }
                            }, ad.prototype.fa = function(e) {
                                return null == this.Za || am(e[0], this.Za)
                            }, ad.prototype.A = function() {
                                return this.Za
                            };
                            var ah = {
                                OPEN: "open",
                                fd: "purchase",
                                ne: "push_click",
                                Tc: "custom_event",
                                ec: "iam_click",
                                V: "test"
                            };

                            function af(e, t) {
                                this.type = e, this.data = t
                            }

                            function ag(e, t, a) {
                                return aC[e.type] === t && (null == e.data || e.data.fa(a))
                            }

                            function am(e, t) {
                                var a = null;
                                try {
                                    a = window.atob(e)
                                } catch (t) {
                                    return A.info("Failed to unencode analytics id " + e + ": " + t.message), !1
                                }
                                return t === a.split("_")[0]
                            }
                            af.prototype.A = function() {
                                return {
                                    t: this.type,
                                    d: this.data ? this.data.A() : null
                                }
                            };
                            var av = "open",
                                aw = "purchase",
                                ay = "purchase_property",
                                ax = "push_click",
                                ak = "custom_event",
                                aE = "custom_event_property",
                                aA = "iam_click",
                                aS = "test",
                                aC = {};

                            function aN(e, t, a, n, i, o, r, s, l, c, u, b) {
                                this.id = e, this.ob = t || [], void 0 === a && (a = null), this.startTime = a, void 0 === n && (n = null), this.endTime = n, this.priority = i || 0, this.type = o, this.ab = s || 0, null == c && (c = 1e3 * (this.ab + 30)), this.Oa = c, this.data = r, null == l && (l = a_), this.Rb = l, this.kf = u, this.Ca = b || null
                            }

                            function aT(e, t) {
                                var a = (new Date).valueOf() - t;
                                return (t = null == t || isNaN(a) || null == e.Oa || a < e.Oa) || A.info("Trigger action " + e.type + " is no longer eligible for display - fired " + a + "ms ago and has a timeout of " + e.Oa + "ms"), !t
                            }
                            aC[av] = ah.OPEN, aC[aw] = ah.fd, aC[ay] = ah.fd, aC[ax] = ah.ne, aC[ak] = ah.Tc, aC[aE] = ah.Tc, aC[aA] = ah.ec, aC[aS] = ah.V, aN.prototype.A = function() {
                                for (var e = [], t = 0; t < this.ob.length; t++) e.push(this.ob[t].A());
                                return {
                                    i: this.id,
                                    c: e,
                                    s: this.startTime,
                                    e: this.endTime,
                                    p: this.priority,
                                    t: this.type,
                                    da: this.data,
                                    d: this.ab,
                                    r: this.Rb,
                                    tm: this.Oa,
                                    ss: this.kf,
                                    ld: this.Ca
                                }
                            };
                            var a_ = -1,
                                aD = {
                                    Xc: "inapp",
                                    we: "templated_iam"
                                };

                            function aO(e, t) {
                                return e = Math.ceil(e), Math.floor(Math.random() * ((t = Math.floor(t)) - e + 1)) + e
                            }

                            function aI(e) {
                                var t, a = !1;
                                try {
                                    if (window.XMLHttpRequest && (t = new XMLHttpRequest) && void 0 !== t.withCredentials || ("undefined" != typeof XDomainRequest ? a = (t = new XDomainRequest).async = !0 : A.error("This browser does not have any supported ajax options!")), null != t) {
                                        var n = function() {
                                            "function" == typeof e.error && e.error(t.status), "function" == typeof e.zc && e.zc(!1)
                                        };
                                        t.onload = function() {
                                            if (a) var i = !0;
                                            else {
                                                if (4 !== t.readyState) return;
                                                i = 200 <= t.status && 300 > t.status || 304 === t.status
                                            }
                                            if (i) {
                                                if ("function" == typeof e.h) {
                                                    try {
                                                        var o = JSON.parse(t.responseText)
                                                    } catch (a) {
                                                        e.h({
                                                            error: "" === t.responseText ? "empty_response" : "invalid_json_response",
                                                            response: t.responseText
                                                        })
                                                    }
                                                    o && e.h(o)
                                                }
                                                "function" == typeof e.zc && e.zc(!0)
                                            } else n()
                                        }, t.onerror = function() {
                                            n()
                                        }, t.ontimeout = function() {
                                            n()
                                        };
                                        var i = JSON.stringify(e.data);
                                        if (a) t.onprogress = function() {}, t.open("post", e.url);
                                        else {
                                            t.open("POST", e.url, !0), t.setRequestHeader("Content-type", "application/json"), t.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                                            for (var o = e.headers || [], r = 0; r < o.length; r++) t.setRequestHeader(o[r][0], o[r][1])
                                        }
                                        t.send(i)
                                    }
                                } catch (e) {
                                    A.error("Network request error: " + e.message)
                                }
                            }

                            function aM(e, t, a, n, i, o, r, s, l, c, u, b) {
                                var p = this;
                                this.$ = e, this.Kg = t, this.Oe = a, this.Fg = n, this.Bb = i, this.lb = 0, this.pc = c.R.df, this.Ie = null, this.D = o, this.mc = r, this.f = s, this.J = l, this.b = c, this.W = b, this.Dg = u, this.sd = new eD, this.Eb = ["npm"], this.Ag = 50, this.Va = 0, eO(this.W.td, function() {
                                    p.Va = 0
                                }), this.Cg = 1e3, this.Bg = 6e4
                            }

                            function aP(e, t) {
                                var a = aQ(e.mc),
                                    n = a.Ac();
                                return I(ev(e.b, eE.cc), n) || (t.device = n), t.api_key = e.$, t.time = M((new Date).valueOf(), !0), t.sdk_version = e.Kg, e.Oe && (t.sdk_flavor = e.Oe), t.app_version = e.Fg, t.device_id = a.id, a = ev(e.b, eE.se) || [], n = ev(e.b, eE.ue) || "", 0 < e.Eb.length && (!I(a, e.Eb) || n !== e.D.Kb()) && (t.sdk_metadata = e.Eb), t
                            }

                            function aU(e, t, n, i) {
                                var o = n.auth_error,
                                    r = n.error;
                                if (!o && !r) return !0;
                                if (o) {
                                    for (e.Va += 1, n = {
                                            errorCode: o.error_code
                                        }, r = (i = a(i)).next(); !r.done; r = i.next()) N(r = r.value) && "X-Braze-Auth-Signature" === r[0] && (n.signature = r[1]);
                                    return t.respond_with && t.respond_with.user_id ? n.userId = t.respond_with.user_id : t.user_id && (n.userId = t.user_id), (i = o.reason) ? (n.reason = i, o = "due to " + i) : o = "with error code " + o.error_code + ".", e.W.Db || (o += ' Please use the "enableSdkAuthentication" initialization option to enable authentication.'), A.error("SDK Authentication failed " + o), aR(e, t), eI(e.W.ze, n), !1
                                }
                                if (r) {
                                    switch (o = r) {
                                        case "empty_response":
                                            return ef(e.b, [new L(e.f.o(), x.Yc, (new Date).valueOf(), e.D.Kb, {
                                                e: "Received successful response with empty body."
                                            })]), A.info("Received successful response with empty body."), !1;
                                        case "invalid_json_response":
                                            return ef(e.b, [new L(e.f.o(), x.Yc, (new Date).valueOf(), e.D.Kb, {
                                                e: "Received successful response with invalid JSON: " + n.response
                                            })]), A.info("Received successful response with invalid JSON"), !1;
                                        case "invalid_api_key":
                                            o = 'The API key "' + t.api_key + '" is invalid for the baseUrl ' + e.Bb;
                                            break;
                                        case "blacklisted":
                                            o = "Sorry, we are not currently accepting your requests. If you think this is in error, please contact us.";
                                            break;
                                        case "no_device_identifier":
                                            o = "No device identifier. Please contact support@braze.com"
                                    }
                                    A.error("Backend error: " + o)
                                }
                                return !1
                            }

                            function az(e, t, n, i, o, r, s, l) {
                                null == i && (i = !0), i && aW(e);
                                var c, u, b, p, d = eg(e.b),
                                    h = function(e) {
                                        var t = e.R.Z(eE.Qa);
                                        for (var a in e.R.remove(eE.Qa), e = [], t) null != t[a] && e.push(t[a]);
                                        return e
                                    }(e.b),
                                    f = (c = e.D, u = (new Date).valueOf(), b = nt(c.J).Ld, (null == (p = ev(c.b, eE.hc)) || null != b) && ((b = null == p || u - p > 1e3 * b) && em(c.b, eE.hc, u), b));
                                if (0 < d.length)
                                    for (var g = e.f.o(), m = a(d), v = m.next(); !v.done; v = m.next()) {
                                        var w = null == (v = v.value).gb && null == g || v.gb === g;
                                        v.type === x.ve && w && (f = !0)
                                    }
                                if (l || f || !(e.Va >= e.Ag)) {
                                    if (l = n || f, !i || 0 !== d.length || 0 !== h.length || t || l) {
                                        var y = !1,
                                            k = function(t, a) {
                                                var n = !1;
                                                aI({
                                                    url: "" + e.Bb + "/data/",
                                                    data: t,
                                                    headers: a,
                                                    h: function(i) {
                                                        if (null != t.respond_with && t.respond_with.triggers && (e.lb = Math.max(e.lb - 1, 0)), aU(e, t, i, a)) {
                                                            e.Va = 0;
                                                            var r = e.J;
                                                            if (null != i && null != i.config) {
                                                                var s = i.config;
                                                                if (s.time > nt(r).Nb) {
                                                                    s = new a9(s.time, s.events_blacklist, s.attributes_blacklist, s.purchases_blacklist, s.messaging_session_timeout, s.vapid_public_key, s.content_cards);
                                                                    var l = !1;
                                                                    null != s.ra && nt(r).ra !== s.ra && (l = !0);
                                                                    var c = !1;
                                                                    null != s.Hb.enabled && (nt(r).Hb.enabled || !1) !== s.Hb.enabled && (c = !0), r.uc = s, em(r.b, eE.te, s.A()), l && eI(r.xd), c && eI(r.Ae)
                                                                }
                                                            }(null == t.respond_with || t.respond_with.user_id == e.f.o()) && (null != t.device && em(e.b, eE.cc, t.device), null != t.sdk_metadata && (em(e.b, eE.se, t.sdk_metadata), em(e.b, eE.ue, e.D.Kb())), e.Dg(i), "function" == typeof o && o())
                                                        } else i.auth_error && (n = !0)
                                                    },
                                                    error: function() {
                                                        null != t.respond_with && t.respond_with.triggers && (e.lb = Math.max(e.lb - 1, 0)), aR(e, t), "function" == typeof r && r()
                                                    },
                                                    zc: function(t) {
                                                        "function" == typeof s && s(t), i && !y && (t && !n ? aK(e) : ((null == (t = e.Ie) || t < 1e3 * e.pc) && (t = 1e3 * e.pc), aK(e, Math.min(3e5, aO(1e3 * e.pc, 3 * t)))), y = !0)
                                                    }
                                                })
                                            },
                                            E = function(e) {
                                                return null != e ? e : ""
                                            },
                                            S = {};
                                        for (n = E(e.f.o()), (t || l) && (S[n] = aF(e, t, l), l && e.lb++), t = function(t, a) {
                                                var n = E(a.user_id);
                                                S[n] || (S[n] = aF(e, !1, !1, n)), S[n][t] || (S[n][t] = []), S[n][t].push(a)
                                            }, l = (d = a(d)).next(); !l.done; l = d.next()) t("events", l.value.Ac());
                                        for (d = (h = a(h)).next(); !d.done; d = h.next()) t("attributes", d.value);
                                        for (var C in h = !1, d = {}, S) e.W.Db && C !== n ? aR(e, S[C]) : (d.ub = aP(e, S[C]), d.Pc = aG(e, d.ub), aL(d.ub, function(e) {
                                            return function() {
                                                return k(e.ub, e.Pc)
                                            }
                                        }(d)), h = !0), d = {
                                            ub: d.ub,
                                            Pc: d.Pc
                                        };
                                        i && !h ? aK(e) : f && (A.info("Invoking new session subscriptions"), eI(e.sd))
                                    } else aK(e), "function" == typeof s && s(!0)
                                } else A.info("Declining to flush data due to 50 consecutive authentication failures")
                            }

                            function aL(e, t) {
                                var a = e.device;
                                a && a.os_version instanceof Promise ? a.os_version.then(function(a) {
                                    e.device.os_version = a, t()
                                }) : t()
                            }

                            function aR(e, t) {
                                if (t.events) {
                                    for (var n = [], i = a(t.events), o = i.next(); !o.done; o = i.next()) o = o.value, o = new L(o.user_id, o.name, o.time, o.session_id, o.data), o.time *= 1e3, n.push(o);
                                    ef(e.b, n)
                                }
                                if (t.attributes)
                                    for (n = (t = a(t.attributes)).next(); !n.done; n = t.next()) ey(e.b, n.value)
                            }

                            function aB(e, t) {
                                var a = "HTTP error ";
                                null != e && (a += e + " "), A.error(a + t)
                            }

                            function aF(e, t, a, n) {
                                var i = {};
                                return t && (i.feed = !0), a && (i.triggers = !0), (t = null != n ? n : e.f.o()) && (i.user_id = t), i.config = {
                                    config_time: nt(e.J).Nb
                                }, {
                                    respond_with: i
                                }
                            }

                            function aG(e, t) {
                                var a = [
                                        ["X-Braze-Api-Key", e.$]
                                    ],
                                    n = !1;
                                return null != t.respond_with && t.respond_with.triggers && (a.push(["X-Braze-TriggersRequest", "true"]), n = !0), null != t.respond_with && t.respond_with.feed && (a.push(["X-Braze-FeedRequest", "true"]), n = !0), n && a.push(["X-Braze-DataRequest", "true"]), e.W.Db && null != (e = ev(e.W.b, eE.jb)) && a.push(["X-Braze-Auth-Signature", e]), a
                            }

                            function aj(e) {
                                if (null == e.campaignId && null == e.cardId && null == e.triggerId) return A.info("The in-app message has no analytics id. Not logging event to Braze servers."), null;
                                var t = {};
                                return null != e.cardId && (t.card_ids = [e.cardId]), null != e.campaignId && (t.campaign_ids = [e.campaignId]), null != e.triggerId && (t.trigger_ids = [e.triggerId]), t
                            }

                            function aH(e) {
                                for (var t = null, a = 0; a < e.length; a++) null != e[a].id && "" !== e[a].id && ((t = t || {}).ids = t.ids || [], t.ids.push(e[a].id));
                                return t
                            }

                            function aK(e, t) {
                                e.Ce || (null == t && (t = 1e3 * e.pc), aW(e), e.qc = setTimeout(function() {
                                    if (document.hidden) {
                                        var t = function() {
                                            document.hidden || (document.removeEventListener("visibilitychange", t, !1), az(e))
                                        };
                                        document.addEventListener("visibilitychange", t, !1)
                                    } else az(e)
                                }, t), e.Ie = t)
                            }

                            function aW(e) {
                                null != e.qc && (clearTimeout(e.qc), e.qc = null)
                            }

                            function aX(e, t, a, n) {
                                var i = new t0,
                                    o = no(e.D);
                                return na(e.J, a) ? (A.info('Custom Attribute "' + a + '" is blocklisted, ignoring.'), i) : (i.j.push(new L(e.f.o(), t, (new Date).valueOf(), o, {
                                    key: a,
                                    value: n
                                })), i.h = ef(e.b, i.j), i)
                            }

                            function aq(e, t) {
                                var a = new t0,
                                    n = no(e.D);
                                return a.j.push(new L(e.f.o(), x.fg, (new Date).valueOf(), n, {
                                    n: t
                                })), a.h = ef(e.b, a.j), a
                            }

                            function aV(e) {
                                var t = E.ba;
                                new d(t).setItem(t.G.Rf, 1, {
                                    baseUrl: e.Bb,
                                    data: {
                                        api_key: e.$,
                                        device_id: aQ(e.mc).id
                                    },
                                    userId: e.f.o(),
                                    sdkAuthEnabled: e.W.Db
                                })
                            }

                            function aY(e, t, a) {
                                var n = new t0,
                                    i = no(e.D);
                                return t = {
                                    group_id: t,
                                    status: a
                                }, n.j.push(new L(e.f.o(), x.zg, (new Date).valueOf(), i, t)), n.h = ef(e.b, n.j), n
                            }(nS = aM.prototype).Na = function(e, t, a, n, i) {
                                var o = this,
                                    r = aP(this, {});
                                r.last_full_sync_at = e, r.last_card_updated_at = t, null != (e = this.f.o()) && (r.user_id = e);
                                var s = [
                                    ["X-Braze-Api-Key", this.$],
                                    ["X-Braze-DataRequest", "true"],
                                    ["X-Braze-ContentCardsRequest", "true"]
                                ];
                                this.W.Db && null != (e = ev(this.W.b, eE.jb)) && s.push(["X-Braze-Auth-Signature", e]), aL(r, function() {
                                    aI({
                                        url: "" + o.Bb + "/content_cards/sync",
                                        data: r,
                                        headers: s,
                                        h: function(e) {
                                            aU(o, r, e, s) ? (o.Va = 0, a(e), "function" == typeof n && n()) : "function" == typeof i && i()
                                        },
                                        error: function(e) {
                                            aB(e, "retrieving content cards"), "function" == typeof i && i()
                                        }
                                    })
                                })
                            }, nS.Hd = function() {
                                this.Ce = !1, aK(this)
                            }, nS.Jb = function() {
                                this.sd.K(), this.W.td.K(), aW(this), this.Ce = !0, az(this, null, null, !1), this.qc = null
                            }, nS.Lc = function(e) {
                                var t = this,
                                    a = this.D.Kb();
                                if ((a = a !== no(this.D)) && (ed(this.b, ek.Uc), ed(this.b, ek.lc)), az(this, null, !1, null, null, null), aV(this), a && null != e && (e.Mb() || e.Ka())) {
                                    var n = function() {
                                        e.Hg ? A.info("Push token maintenance is disabled, not refreshing token for backend.") : e.subscribe()
                                    };
                                    a = E.ba, m(new d(a), a.G.gd, function(e, t) {
                                        t && n()
                                    }, function() {
                                        var e = ev(t.b, eE.kc);
                                        (null == e || e) && n()
                                    })
                                }
                            }, nS.$a = function(e, t, a, n) {
                                var i = this.f.o();
                                if (i !== e) {
                                    var o = this.D,
                                        r = eh(o.b, ek.Ta);
                                    if (null != r && (o.b.rc.remove(ek.Ta), null == (r = ni(o, (new Date).valueOf(), r)) || ef(o.b, [r])), null != i && az(this, null, !1, null, null, null), r = null == (o = this.f).o(), ep(o.b, ek.lc, new F(e)), r) {
                                        if (null != (r = (o = o.b).R.Z(eE.Qa))) {
                                            var s = eE.Qc,
                                                l = r[s];
                                            null != l && (r[s] = void 0, o.R.store(eE.Qa, r), l.user_id = e, ey(o, l))
                                        }
                                        if (s = eh(o, ek.Ta), r = null, null != s && (r = s.ia), null != (s = eg(o)))
                                            for (l = 0; l < s.length; l++) {
                                                var c = s[l];
                                                null == c.gb && c.sessionId == r && (c.gb = e), null == c || ef(o, [c])
                                            }
                                    }
                                    for (n ? this.W.Tb(n) : (ew((n = this.W).b, eE.jb), o = E.ba, v(new d(o), o.G.qe, n.ye)), n = 0; n < t.length; n++) t[n].$a(null == i);
                                    null != i && ew(this.b, eE.vb), ew(this.b, eE.cc), this.Lc(a), A.info('Changed user to "' + e + '".')
                                } else t = "Doing nothing.", n && ev(this.W.b, eE.jb) !== n && (this.W.Tb(n), t = "Updated SDK authentication signature"), A.info("Current user is already " + e + ". " + t)
                            }, nS.rb = function() {
                                return new Z(this.f, this)
                            }, nS.tb = function(e) {
                                aW(this), no(this.D), az(this, null, null, null, null, null, e, !0)
                            }, nS.Nc = function() {
                                no(this.D), az(this, !0)
                            }, nS.Jd = function(e, t) {
                                var a = new t0,
                                    n = no(this.D);
                                return -1 !== nt(this.J).cf.indexOf(e) ? (A.info('Custom Event "' + e + '" is blocklisted, ignoring.'), a) : (a.j.push(new L(this.f.o(), x.CustomEvent, (new Date).valueOf(), n, {
                                    n: e,
                                    p: t
                                })), a.h = ef(this.b, a.j), a)
                            }, nS.Kd = function(e, t, a, n, i) {
                                var o = new t0,
                                    r = no(this.D);
                                return -1 !== nt(this.J).mf.indexOf(e) ? (A.info('Purchase "' + e + '" is blocklisted, ignoring.'), o) : (o.j.push(new L(this.f.o(), x.eg, (new Date).valueOf(), r, {
                                    pid: e,
                                    c: a,
                                    p: t,
                                    q: n,
                                    pr: i
                                })), o.h = ef(this.b, o.j), o)
                            }, nS.Oc = function(e, t, a, n, i, o) {
                                var r = new t0,
                                    s = no(this.D);
                                return t = {
                                    latitude: t,
                                    longitude: a
                                }, null != n && (t.altitude = n), null != i && (t.ll_accuracy = i), null != o && (t.alt_accuracy = o), r.j.push(new L(e, x.lg, (new Date).valueOf(), s, t)), r.h = ef(this.b, r.j), r
                            }, nS.Qb = function(e) {
                                var t = new t0,
                                    a = no(this.D);
                                if (e instanceof tM) t.j.push(new L(this.f.o(), x.Mf, (new Date).valueOf(), a, {
                                    trigger_ids: [e.triggerId]
                                }));
                                else {
                                    if (!e.Od()) return A.info("This in-app message has already received an impression. Ignoring analytics event."), t;
                                    if (null == (e = aj(e))) return t;
                                    t.j.push(new L(this.f.o(), x.dg, (new Date).valueOf(), a, e))
                                }
                                return t.h = ef(this.b, t.j), t
                            }, nS.Jc = function(e) {
                                var t = new t0,
                                    a = no(this.D);
                                return e.fb() ? (null == (e = aj(e)) || (t.j.push(new L(this.f.o(), x.ke, (new Date).valueOf(), a, e)), t.h = ef(this.b, t.j)), t) : (A.info("This in-app message has already received a click. Ignoring analytics event."), t)
                            }, nS.Ic = function(e, t) {
                                var a = new t0,
                                    n = no(this.D);
                                return e.fb() ? null == (t = aj(t)) ? a : e.id === tI ? (A.info("This in-app message button does not have a tracking id. Not logging event to Braze servers."), a) : (null != e.id && (t.bid = e.id), a.j.push(new L(this.f.o(), x.je, (new Date).valueOf(), n, t)), a.h = ef(this.b, a.j), a) : (A.info("This in-app message button has already received a click. Ignoring analytics event."), a)
                            }, nS.Pb = function(e, t, a) {
                                var n = new t0,
                                    i = no(this.D);
                                return e.fb(a) ? (null == (e = aj(e)) || (a = x.ke, null != t && (e.bid = t, a = x.je), n.j.push(new L(this.f.o(), a, (new Date).valueOf(), i, e)), n.h = ef(this.b, n.j)), n) : (A.info("This in-app message has already received a click. Ignoring analytics event."), n)
                            }, nS.M = function(e, t) {
                                var a = new t0,
                                    n = no(this.D);
                                return e = {
                                    trigger_ids: [e],
                                    error_code: t
                                }, a.j.push(new L(this.f.o(), x.cg, (new Date).valueOf(), n, e)), a.h = ef(this.b, a.j), a
                            }, nS.Ma = function(e, t) {
                                for (var a = new t0, n = no(this.D), i = [], o = [], r = t ? ev(this.b, eE.ib) || {} : ev(this.b, eE.vb) || {}, s = 0; s < e.length; s++) e[s].Od(), e[s] instanceof e7 ? o.push(e[s]) : i.push(e[s]), r[e[s].id] = !0;
                                return e = aH(i), o = aH(o), null == e && null == o || (t ? em(this.b, eE.ib, r) : em(this.b, eE.vb, r), null != e && a.j.push(new L(this.f.o(), t ? x.Jf : x.Gf, (new Date).valueOf(), n, e)), null != o && t && a.j.push(new L(this.f.o(), x.Lf, (new Date).valueOf(), n, o)), a.h = ef(this.b, a.j)), a
                            }, nS.La = function(e, t) {
                                var a = new t0,
                                    n = no(this.D);
                                if (e.fb(), null == e.url || "" === e.url) return A.info("Card " + e.id + " has no url. Not logging click to Braze servers."), a;
                                if (t) {
                                    var i = ev(this.b, eE.hb) || {};
                                    i[e.id] = !0, em(this.b, eE.hb, i)
                                }
                                return null == (e = aH([e])) || (a.j.push(new L(this.f.o(), t ? x.Hf : x.Ff, (new Date).valueOf(), n, e)), a.h = ef(this.b, a.j)), a
                            }, nS.Hc = function(e) {
                                var t = new t0,
                                    a = no(this.D);
                                if (!e.Nd()) return A.info("Card " + e.id + " refused this dismissal. Ignoring analytics event."), t;
                                var n = ev(this.b, eE.ua) || {};
                                return n[e.id] = !0, em(this.b, eE.ua, n), null == (e = aH([e])) || (t.j.push(new L(this.f.o(), x.If, (new Date).valueOf(), a, e)), t.h = ef(this.b, t.j)), t
                            }, nS.zd = function(e) {
                                e = a(e);
                                for (var t = e.next(); !t.done; t = e.next()) t = t.value, -1 === this.Eb.indexOf(t) && this.Eb.push(t)
                            };
                            var aJ = {
                                BROWSER: "browser",
                                BROWSER_VERSION: "browserVersion",
                                OS: "os",
                                RESOLUTION: "resolution",
                                LANGUAGE: "language",
                                TIME_ZONE: "timeZone",
                                USER_AGENT: "userAgent"
                            };

                            function aZ(e) {
                                this.id = e
                            }

                            function a$(e, t) {
                                this.b = e, null == t && (t = O(aJ)), this.De = t
                            }

                            function aQ(e) {
                                var t = eh(e.b, ek.Uc);
                                null == t && (t = new F(p.Ia()), ep(e.b, ek.Uc, t)), t = new aZ(t.ia);
                                for (var a = 0; a < e.De.length; a++) {
                                    var n = e.De[a];
                                    switch (n) {
                                        case "browser":
                                            t[n] = eu.Ya;
                                            break;
                                        case "browserVersion":
                                            t[n] = eu.version;
                                            break;
                                        case "os":
                                            var i = eu.ga ? eu.ga || null : (i = ev(e.b, eE.cc)) && i.os_version ? i.os_version : eu.qb();
                                            t[n] = i;
                                            break;
                                        case "resolution":
                                            t[n] = screen.width + "x" + screen.height;
                                            break;
                                        case "language":
                                            t[n] = eu.language;
                                            break;
                                        case "timeZone":
                                            e: {
                                                if (i = new Date, "undefined" != typeof Intl && "function" == typeof Intl.DateTimeFormat) try {
                                                    if ("function" == typeof Intl.DateTimeFormat().resolvedOptions) {
                                                        var o = Intl.DateTimeFormat().resolvedOptions().timeZone;
                                                        if (null != o && "" !== o) {
                                                            var r = o;
                                                            break e
                                                        }
                                                    }
                                                } catch (e) {
                                                    A.info("Intl.DateTimeFormat threw an error, probably https://bugs.chromium.org/p/chromium/issues/detail?id=811403, falling back to GTM offset: " + e.message)
                                                }
                                                i = parseInt((r = i.getTimezoneOffset()) / 60);
                                                var s = parseInt(r % 60),
                                                    l = "GMT";0 !== r && (l = l + (0 > r ? "+" : "-") + ("00" + Math.abs(i)).slice(-2) + ":" + ("00" + Math.abs(s)).slice(-2)),
                                                r = l
                                            }
                                            t[n] = r;
                                            break;
                                        case "userAgent":
                                            t[n] = eu.userAgent
                                    }
                                }
                                return t
                            }

                            function a0(e) {
                                this.Fa = e, this.wc = null, this.Re = "geolocation" in navigator
                            }

                            function a1(e) {
                                e.Re ? null != e.wc && (navigator.geolocation.clearWatch(e.wc), e.wc = null, A.info("Stopped watching Geolocation")) : A.info(e.ed)
                            }

                            function a3(e, t, a, n, i) {
                                this.endpoint = e || null, this.Ze = t || null, this.publicKey = a || null, this.Wh = n || null, this.ra = i || null
                            }

                            function a5(e, t, a, n, i, o, r, s, l, c) {
                                this.Fa = e, this.$ = t, this.mc = a, this.Jg = n, this.Pe = i || "/service-worker.js", this.Ne = o, this.J = r, this.rd = s || !1, this.Hg = l || !1, this.b = c, this.vc = "serviceWorker" in navigator && "undefined" != typeof ServiceWorkerRegistration && "showNotification" in ServiceWorkerRegistration.prototype && "PushManager" in window, this.vd = "safari" in window && "pushNotification" in window.safari
                            }

                            function a2(e, t, a, n, i, o) {
                                t.unsubscribe().then(function(t) {
                                    t ? a7(e, a, n, i, o) : (A.error("Failed to unsubscribe device from push."), "function" == typeof o && o(!1))
                                }).catch(function(e) {
                                    A.error("Push unsubscription error: " + e), "function" == typeof o && o(!1)
                                })
                            }

                            function a4(e, t, a, n) {
                                var i, o, r = function(e) {
                                        if ("string" == typeof e) return e;
                                        if (0 !== e.endpoint.indexOf("https://android.googleapis.com/gcm/send")) return e.endpoint;
                                        var t = e.endpoint;
                                        return e.subscriptionId && -1 === e.endpoint.indexOf(e.subscriptionId) && (t = e.endpoint + "/" + e.subscriptionId), t
                                    }(t),
                                    s = null,
                                    l = null;
                                if (null != t.getKey) try {
                                    s = btoa(String.fromCharCode.apply(null, new Uint8Array(t.getKey("p256dh")))), l = btoa(String.fromCharCode.apply(null, new Uint8Array(t.getKey("auth"))))
                                } catch (e) {
                                    if ("invalid arguments" !== e.message) throw e
                                }
                                t = (i = t).options && (o = i.options.applicationServerKey) && o.byteLength && 0 < o.byteLength ? btoa(String.fromCharCode.apply(null, new Uint8Array(o))).replace(/\+/g, "-").replace(/\//g, "_") : null, e.Fa.Pd(r, n, s, l, t), r && "function" == typeof a && a(r, s, l)
                            }

                            function a8(e, t, a) {
                                e.Fa.Sb(!1), A.info(t), "function" == typeof a && a(!1)
                            }

                            function a7(e, t, a, n, i) {
                                var o = {
                                    userVisibleOnly: !0
                                };
                                null != a && (o.applicationServerKey = a), t.pushManager.subscribe(o).then(function(t) {
                                    A.info("Device successfully subscribed to push."), a4(e, t, n, new Date)
                                }).catch(function(t) {
                                    e.Ka() ? (A.info("Permission for push notifications was denied."), "function" == typeof i && i(!1)) : A.error("Push subscription failed: " + t)
                                })
                            }

                            function a6(e) {
                                return e.rd ? navigator.serviceWorker.getRegistration() : navigator.serviceWorker.register(e.Pe).then(function() {
                                    return navigator.serviceWorker.ready.then(function(e) {
                                        return e && "function" == typeof e.update && e.update().catch(function(e) {
                                            A.info("ServiceWorker update failed: " + e)
                                        }), e
                                    })
                                })
                            }

                            function a9(e, t, a, n, i, o, r) {
                                this.Nb = e || 0, this.cf = t || [], this.Ve = a || [], this.mf = n || [], this.Ld = i, (null == i || "" === i) && (this.Ld = null), this.ra = o || null, this.Hb = r || {}
                            }

                            function ne(e) {
                                this.b = e, this.xd = new eD, this.Ae = new eD, this.uc = null
                            }

                            function nt(e) {
                                if (null == e.uc) {
                                    var t = ev(e.b, eE.te);
                                    if (null != t) {
                                        var a = t.l;
                                        "3.5.0" !== t.s && (a = 0), t = new a9(a, t.e, t.a, t.p, t.m, t.v, t.c)
                                    } else t = new a9;
                                    e.uc = t
                                }
                                return e.uc
                            }

                            function na(e, t) {
                                return -1 !== nt(e).Ve.indexOf(t)
                            }

                            function nn(e, t, a, n) {
                                this.b = e, this.f = t, this.J = a, this.Cb = 1e3, isNaN(n = parseFloat(n)) && (n = 1800), n < this.Cb / 1e3 && (A.info("Specified session timeout of " + n + "s is too small, using the minimum session timeout of " + this.Cb / 1e3 + "s instead."), n = this.Cb / 1e3), this.Lg = n
                            }

                            function ni(e, t, a) {
                                return new L(e.f.o(), x.yg, t, a.ia, {
                                    d: M(t - a.Ib)
                                })
                            }

                            function no(e) {
                                var t = (new Date).valueOf(),
                                    a = t + 1e3 * e.Lg,
                                    n = eh(e.b, ek.Ta);
                                if (null == n || (t - n.Ib < e.Cb ? 0 : n.Cd < t)) {
                                    var i = "Generating session start event with time " + t;
                                    if (null != n) {
                                        var o = n.Ob;
                                        o - n.Ib < e.Cb && (o = n.Ib + e.ai), null == (n = ni(e, o, n)) || ef(e.b, [n]), i += " (old session ended " + o + ")"
                                    }
                                    return i += ". Will expire " + a.valueOf(), A.info(i), a = new F(p.Ia(), a), i = new L(e.f.o(), x.ve, t, a.ia), ef(e.b, [i]), ep(e.b, ek.Ta, a), null == ev(e.b, eE.hc) && em(e.b, eE.hc, t), a.ia
                                }
                                return n.Ob = t, n.Cd = a, ep(e.b, ek.Ta, n), n.ia
                            }

                            function nr(e, t) {
                                this.J = e, this.b = t
                            }

                            function ns(e, t, a) {
                                return ex(e.b, e.o(), t, a)
                            }

                            function nl(e, t, a) {
                                this.b = e, this.Db = t || !1, this.ze = a, this.td = new eD, this.ye = 1
                            }

                            function nc() {}

                            function nu(e, t, a, n, i) {
                                this.ha = e, this.H = t, this.b = a, this.J = n, this.Eg = i, this.Aa = this.Da = 0, this.Ga()
                            }

                            function nb(e, t, a) {
                                for (var n = ev(e.b, eE.hb) || {}, i = ev(e.b, eE.ib) || {}, o = ev(e.b, eE.ua) || {}, r = {}, s = {}, l = {}, c = 0; c < t.length; c++) n[t[c].id] && (t[c].clicked = !0, r[t[c].id] = !0), i[t[c].id] && (t[c].viewed = !0, s[t[c].id] = !0), o[t[c].id] && (t[c].dismissed = !0, l[t[c].id] = !0);
                                return a && (em(e.b, eE.hb, r), em(e.b, eE.ib, s), em(e.b, eE.ua, l)), t
                            }

                            function np(e, t) {
                                for (var a = [], n = new Date, i = ev(e.b, eE.ua) || {}, o = !1, r = 0; r < t.length; r++) {
                                    var s = t[r].url;
                                    !e.Eg && s && tB(s) ? A.error('Card with url "' + s + '" will not be displayed because Javascript URLs are disabled. Use the "allowUserSuppliedJavascript" option for appboy.initialize to enable this card.') : (null == t[r].expiresAt || t[r].expiresAt >= n) && !t[r].dismissed ? a.push(t[r]) : o = i[t[r].id] = !0
                                }
                                return o && em(e.b, eE.ua, i), a
                            }

                            function nd(e) {
                                return !!nt(e.J).Hb.enabled || (0 !== nt(e.J).Nb && (eI(e.ha, new tQ([], (new Date).valueOf())), ew(e.b, eE.wb)), !1)
                            }

                            function nh(e, t) {
                                this.ha = e, this.b = t, this.Ga()
                            }

                            function nf(e, t, a, n, i) {
                                this.Pa = e, this.zf = t, this.yf = a, this.Ec = n, this.Oa = i
                            }

                            function ng(e, t, a, n) {
                                this.Ig = e, this.ha = t, this.b = a, this.H = n, this.oc = [], this.na = [], this.Ba = null, this.L = {}, this.Y = {}, nv(this),
                                    function(e) {
                                        for (var t = {}, a = 0; a < e.T.length; a++) t[e.T[a].id] = e.T[a];
                                        a = !1;
                                        for (var n = 0; n < e.T.length; n++) {
                                            var i = e.T[n];
                                            if (null != e.L[i.id]) {
                                                for (var o = e.L[i.id], r = [], s = 0; s < o.length; s++) {
                                                    var l = o[s],
                                                        c = Math.max(l.Ec + 1e3 * i.ab - (new Date).valueOf(), 0);
                                                    if (0 < c) {
                                                        r.push(l);
                                                        var u = void 0,
                                                            b = void 0;
                                                        null != l.wf && (u = l.wf), null != l.yd && R(l.yd) && (b = B(l.yd));
                                                        var p = [];
                                                        if (N(l.Dd))
                                                            for (var d = 0; d < l.Dd.length; d++) {
                                                                var h = t[l.Dd[d]];
                                                                null != h && p.push(h)
                                                            }
                                                        e.na.push(setTimeout(function(t, a, n, i, o) {
                                                            return function() {
                                                                nw(e, t, a, n, i, o)
                                                            }
                                                        }(i, l.Ec, u, b, p), c))
                                                    }
                                                }
                                                e.L[i.id].length > r.length && (e.L[i.id] = r, a = !0, 0 === e.L[i.id].length && delete e.L[i.id])
                                            }
                                        }
                                        a && em(e.b, eE.zb, e.L)
                                    }(this)
                            }

                            function nm(e) {
                                e.Ba = ev(e.b, eE.ad) || e.Ba, e.L = ev(e.b, eE.zb) || e.L, e.Y = ev(e.b, eE.fc) || e.Y;
                                for (var t = 0; t < e.T.length; t++) {
                                    var a = e.T[t];
                                    null != e.Y[a.id] && (a.Ca = e.Y[a.id])
                                }
                            }

                            function nv(e) {
                                e.wd = ev(e.b, eE.md) || 0;
                                for (var t = ev(e.b, eE.kd) || [], a = [], n = 0; n < t.length; n++) a.push(function(e) {
                                    for (var t = [], a = 0; a < e.c.length; a++) t.push(function(e) {
                                        switch (e.t) {
                                            case av:
                                                var t = null;
                                                break;
                                            case aw:
                                                t = new ab(e.d);
                                                break;
                                            case ay:
                                                t = e.d || {}, t = new ap(t.id, al(t.pf || []));
                                                break;
                                            case ax:
                                                t = new ad(e.d);
                                                break;
                                            case ak:
                                                t = new t1(e.d);
                                                break;
                                            case aE:
                                                t = e.d || {}, t = new ac(t.e, al(t.pf || []));
                                                break;
                                            case aA:
                                                t = new au(e.d);
                                                break;
                                            case aS:
                                                t = null
                                        }
                                        return new af(e.t, t)
                                    }(e.c[a]));
                                    return new aN(e.i, t, z(e.s), z(e.e), e.p, e.t, e.da, e.d, e.r, e.tm, e.ss, e.ld)
                                }(t[n]));
                                e.T = a, nm(e)
                            }

                            function nw(e, t, a, n, i, o) {
                                function r(i) {
                                    nm(e);
                                    var o = (new Date).valueOf();
                                    aT(t, a) ? t.type === aD.we ? e.H.M(t.id, ts.yb) : e.H.M(t.id, ts.ie) : !1 === navigator.onLine && t.type === aD.Xc && i.imageUrl ? (A.info("Not showing " + t.type + " trigger action " + t.id + " due to offline state."), e.H.M(t.id, ts.Vf)) : (null == t.Ca || t.Rb !== a_ && o - t.Ca >= 1e3 * t.Rb) && ny(e, t, o, n) ? (eI(e.ha, [i]), nm(e), t.Ca = o, e.Ba = o, em(e.b, eE.ad, o), e.Y[t.id] = o, em(e.b, eE.fc, e.Y)) : A.info("Not displaying trigger " + t.id + " because display time fell outside of the acceptable time window.")
                                }
                                switch (t.type) {
                                    case aD.Xc:
                                        var s, l, c = tn(t.data);
                                        if (null == c) {
                                            A.error("Could not parse trigger data for trigger " + t.id + ", ignoring."), e.H.M(t.id, ts.Ab);
                                            break
                                        }
                                        r(c);
                                        break;
                                    case aD.we:
                                        if (s = t.data, l = t.Oa, null == (c = null == s || null == s.trigger_id ? null : new nf(s.trigger_id, r, function t() {
                                                nm(e);
                                                var r = o.pop();
                                                if (null != r) {
                                                    if (nx(e, r, a, n, i, o), aT(r, a)) {
                                                        var s = "Server aborted in-app message display, but the timeout on fallback trigger " + r.id + "has already elapsed.";
                                                        0 < o.length && (s += " Continuing to fall back."), A.info(s), e.H.M(r.id, ts.ie), t()
                                                    } else A.info("Server aborted in-app message display. Falling back to lower priority " + r.type + " trigger action " + r.id), 0 < (s = 1e3 * r.ab - ((new Date).valueOf() - a)) ? e.na.push(setTimeout(function() {
                                                        nw(e, r, a, n, i, o)
                                                    }, s)) : nw(e, r, a, n, i, o)
                                                }
                                            }, a, l))) {
                                            A.error("Could not parse trigger data for trigger " + t.id + ", ignoring."), e.H.M(t.id, ts.Ab);
                                            break
                                        }! function e(t, a, n, i, o) {
                                            var r = aF(t, !1, !1);
                                            (r = aP(t, r)).template = {
                                                trigger_id: a.Pa,
                                                trigger_event_type: n
                                            }, null != i && (r.template.data = i.Ac());
                                            var s = aG(t, r);
                                            aL(r, function() {
                                                aI({
                                                    url: "" + t.Bb + "/template/",
                                                    data: r,
                                                    headers: s,
                                                    h: function(e) {
                                                        aU(t, r, e, s) ? (t.Va = 0, null == e || null == e.templated_message ? t.M(a.Pa, ts.yb) : (e = e.templated_message).type !== aD.Xc ? t.M(a.Pa, ts.Ab) : null == (e = tn(e.data)) ? t.M(a.Pa, ts.Ab) : "function" == typeof a.zf ? a.zf(e) : t.M(a.Pa, ts.yb)) : (t.M(a.Pa, ts.yb), "function" == typeof a.yf && a.yf())
                                                    },
                                                    error: function(r) {
                                                        var s = "getting user personalization for message " + a.Pa;
                                                        if ((new Date).valueOf() - a.Ec > a.Oa) t.M(a.Pa, ts.yb);
                                                        else {
                                                            var l = Math.min(a.Oa, t.Bg),
                                                                c = t.Cg;
                                                            null == o && (o = c);
                                                            var u = Math.min(l, aO(c, 3 * o));
                                                            s += ". Retrying in " + u + "ms", setTimeout(function() {
                                                                e(t, a, n, i, u)
                                                            }, u)
                                                        }
                                                        aB(r, s)
                                                    }
                                                })
                                            })
                                        }(e.H, c, n, i);
                                        break;
                                    default:
                                        A.error("Trigger " + t.id + " was of unexpected type " + t.type + ", ignoring."), e.H.M(t.id, ts.Ab)
                                }
                            }

                            function ny(e, t, a, n) {
                                return null == e.Ba || (n === ah.V ? (A.info("Ignoring minimum interval between trigger because it is a test type."), !0) : (null == (t = t.kf) && (t = e.Ig), a - e.Ba >= 1e3 * t))
                            }

                            function nx(e, t, a, n, i, o) {
                                nm(e), e.L[t.id] = e.L[t.id] || [];
                                var r, s = {};
                                for (s.Ec = a, s.wf = n, null != i && (r = i.A()), s.yd = r, a = [], n = 0; n < o.length; n++) a.push(o[n].id);
                                s.Dd = a, e.L[t.id].push(s), em(e.b, eE.zb, e.L)
                            }
                            J.DeviceProperties = aJ, aZ.prototype.Ac = function() {
                                var e = {};
                                return null != this.browser && (e.browser = this.browser), null != this.browserVersion && (e.browser_version = this.browserVersion), null != this.os && (e.os_version = this.os), null != this.resolution && (e.resolution = this.resolution), null != this.language && (e.locale = this.language), null != this.timeZone && (e.time_zone = this.timeZone), null != this.userAgent && (e.user_agent = this.userAgent), e
                            }, a0.prototype.Ng = function(e) {
                                var t = this;
                                if (document.hidden) {
                                    a1(this);
                                    var a = function() {
                                        document.hidden || (document.removeEventListener("visibilitychange", a, !1), t.watchPosition())
                                    };
                                    document.addEventListener("visibilitychange", a, !1)
                                }
                                this.Fa.Oc(e.coords.latitude, e.coords.longitude, e.coords.accuracy, e.coords.altitude, e.coords.altitudeAccuracy)
                            }, a0.prototype.Mg = function(e) {
                                e.code === e.PERMISSION_DENIED ? A.info(e.message) : A.error("Could not detect user location: " + e.code + " - " + e.message)
                            }, a0.prototype.watchPosition = function() {
                                this.Re ? (a1(this), this.wc = navigator.geolocation.watchPosition(this.Ng.bind(this), this.Mg.bind(this)), A.info("Requested Geolocation")) : A.info(this.ed)
                            }, a3.prototype.A = function() {
                                return {
                                    e: this.endpoint,
                                    c: this.Ze,
                                    p: this.publicKey,
                                    u: this.Wh,
                                    v: this.ra
                                }
                            }, (nS = a5.prototype).qa = function() {
                                return this.vc || this.vd
                            }, nS.Ka = function() {
                                var e = this.qa() && "Notification" in window && null != window.Notification && null != window.Notification.permission && "denied" === window.Notification.permission,
                                    t = this.qa() && (!("Notification" in window) || null == window.Notification);
                                return e || t
                            }, nS.Mb = function() {
                                return this.qa() && "Notification" in window && null != window.Notification && null != window.Notification.permission && "granted" === window.Notification.permission
                            }, nS.Id = function(e, t, a) {
                                var n = this;
                                a = this.Ne || a, this.qa() ? this.vc ? a6(this).then(function(a) {
                                    n.Ka() ? t() : null == a ? t() : a.pushManager.getSubscription().then(function(a) {
                                        a ? e() : t()
                                    }).catch(function() {
                                        t()
                                    })
                                }).catch(function() {
                                    t()
                                }) : null == a || "" === a ? A.error("You must supply the safariWebsitePushId argument in order to use isPushGranted on Safari") : "granted" === window.safari.pushNotification.permission(a).permission ? e() : t() : t()
                            }, nS.subscribe = function(e, t, a) {
                                var n = this;
                                if (e = this.Ne || e, this.qa()) {
                                    if (this.vc) {
                                        if (!this.rd && null != window.location) {
                                            var i, o, r = this.Pe;
                                            if (-1 === r.indexOf(window.location.host) && (r = window.location.host + r), -1 === r.indexOf(window.location.protocol) && (r = window.location.protocol + "//" + r), 0 !== window.location.href.indexOf(r.substr(0, r.lastIndexOf("/") + 1))) {
                                                A.error("Cannot subscribe to push from a path higher than the service worker location (tried to subscribe from " + window.location.pathname + " but service worker is at " + r + ")");
                                                return
                                            }
                                        }
                                        if (this.Ka()) a8(this, "Notifications from this site are blocked. This may be a temporary embargo or a permanent denial.", a);
                                        else if (this.J && !nt(this.J).ra && 0 === nt(this.J).Nb) A.info("Waiting for VAPID key from server config before subscribing to push."), i = this.J, o = function() {
                                            n.subscribe(e, t, a)
                                        }, o = eO(i.xd, o), i.Be && i.xd.N(i.Be), i.Be = o;
                                        else {
                                            var s = this.Mb();
                                            ! function(e, t, a) {
                                                function n(n) {
                                                    switch (n) {
                                                        case "granted":
                                                            "function" == typeof e && e();
                                                            break;
                                                        case "default":
                                                            "function" == typeof t && t();
                                                            break;
                                                        case "denied":
                                                            "function" == typeof a && a();
                                                            break;
                                                        default:
                                                            A.error("Received unexpected permission result " + n)
                                                    }
                                                }
                                                var i = !1,
                                                    o = window.Notification.requestPermission(function(e) {
                                                        i && n(e)
                                                    });
                                                o ? o.then(function(e) {
                                                    n(e)
                                                }) : i = !0
                                            }(function() {
                                                s || n.Fa.Ud("opted_in"), a6(n).then(function(e) {
                                                    null == e ? (A.error("No service worker registration. Set the `manageServiceWorkerExternally` initialization option to false or ensure that your service worker is registered before calling registerAppboyPushMessages."), "function" == typeof a && a()) : e.pushManager.getSubscription().then(function(i) {
                                                        var o = null;
                                                        if (n.J && null != nt(n.J).ra && (o = b.Vh(nt(n.J).ra)), i) {
                                                            var r = null,
                                                                s = null,
                                                                l = ev(n.b, eE.kc);
                                                            if (l && !N(l)) {
                                                                try {
                                                                    var c = new a3(l.e, z(l.c), l.p, l.u, l.v).Ze
                                                                } catch (e) {
                                                                    c = null
                                                                }
                                                                null == c || isNaN(c.getTime()) || 0 === c.getTime() || (r = c, (s = new Date(r)).setMonth(r.getMonth() + 6))
                                                            }
                                                            null != o && i.options && i.options.applicationServerKey && i.options.applicationServerKey.byteLength && 0 < i.options.applicationServerKey.byteLength && !I(o, new Uint8Array(i.options.applicationServerKey)) ? (12 < i.options.applicationServerKey.byteLength ? A.info("Device was already subscribed to push using a different VAPID provider, creating new subscription.") : A.info("Attempting to upgrade a gcm_sender_id-based push registration to VAPID - depending on the browser this may or may not result in the same gcm_sender_id-based subscription."), a2(n, i, e, o, t, a)) : i.expirationTime && new Date(i.expirationTime) <= (new Date).valueOf() ? (A.info("Push subscription is expired, creating new subscription."), a2(n, i, e, o, t, a)) : l && N(l) ? a2(n, i, e, o, t, a) : null == s ? (A.info("No push subscription creation date found, creating new subscription."), a2(n, i, e, o, t, a)) : s <= (new Date).valueOf() ? (A.info("Push subscription older than 6 months, creating new subscription."), a2(n, i, e, o, t, a)) : (A.info("Device already subscribed to push, sending existing subscription to backend."), a4(n, i, t, r))
                                                        } else a7(n, e, o, t, a)
                                                    }).catch(function(e) {
                                                        A.error("Error checking current push subscriptions: " + e)
                                                    })
                                                }).catch(function(e) {
                                                    A.error("ServiceWorker registration failed: " + e)
                                                })
                                            }, function() {
                                                var e = "Permission for push notifications was ignored.";
                                                n.Ka() && (e += " The browser has automatically blocked further permission requests for a period (probably 1 week)."), A.info(e), "function" == typeof a && a(!0)
                                            }, function() {
                                                A.info("Permission for push notifications was denied."), "function" == typeof a && a(!1)
                                            })
                                        }
                                    } else this.vd && (null == e || "" === e ? A.error("You must supply the safariWebsitePushId argument in order to use registerAppboyPushMessages on Safari") : (r = window.safari.pushNotification.permission(e), function e(t, a, n, i, o) {
                                        if ("default" === n.permission) try {
                                            window.safari.pushNotification.requestPermission(t.Jg, a, {
                                                api_key: t.$,
                                                device_id: aQ(t.mc).id
                                            }, function(n) {
                                                "granted" === n.permission && t.Fa.Ud("opted_in"), e(t, a, n, i, o)
                                            })
                                        } catch (e) {
                                            a8(t, "Could not request permission for push: " + e, o)
                                        } else "denied" === n.permission ? a8(t, "The user has blocked notifications from this site, or Safari push is not configured in the Braze dashboard.", o) : "granted" === n.permission && (A.info("Device successfully subscribed to push."), a4(t, n.deviceToken, i, new Date))
                                    }(this, e, r, t, a)))
                                } else A.info(this.ed)
                            }, nS.unsubscribe = function(e, t) {
                                var a = this;
                                this.qa() ? this.vc ? navigator.serviceWorker.getRegistration().then(function(n) {
                                    n && n.pushManager.getSubscription().then(function(i) {
                                        i && (a.Fa.Sb(!0), i.unsubscribe().then(function(i) {
                                            i ? (A.info("Device successfully unsubscribed from push."), "function" == typeof e && e()) : (A.error("Failed to unsubscribe device from push."), "function" == typeof t && t()), a.rd || (n.unregister(), A.info("Service worker successfully unregistered."))
                                        }).catch(function(e) {
                                            A.error("Push unsubscription error: " + e), "function" == typeof t && t()
                                        }))
                                    }).catch(function(e) {
                                        A.error("Error unsubscribing from push: " + e), "function" == typeof t && t()
                                    })
                                }) : this.vd && (this.Fa.Sb(!0), A.info("Device unsubscribed from push."), "function" == typeof e && e()) : A.info(this.ed)
                            }, a9.prototype.A = function() {
                                return {
                                    s: "3.5.0",
                                    l: this.Nb,
                                    e: this.cf,
                                    a: this.Ve,
                                    p: this.mf,
                                    m: this.Ld,
                                    v: this.ra,
                                    c: this.Hb
                                }
                            }, nn.prototype.Kb = function() {
                                var e = eh(this.b, ek.Ta);
                                return null == e ? null : e.ia
                            }, nr.prototype.o = function() {
                                var e = eh(this.b, ek.lc);
                                if (null == e) return null;
                                var t = e.ia,
                                    a = G(t);
                                if (997 < a) {
                                    for (; 997 < a;) a = G(t = t.slice(0, t.length - 1));
                                    e.ia = t, ep(this.b, ek.lc, e)
                                }
                                return t
                            }, nr.prototype.Sd = function(e, t) {
                                if (na(this.J, e)) return A.info('Custom Attribute "' + e + '" is blocklisted, ignoring.'), !1;
                                var a = {};
                                return a[e] = t, ns(this, "custom", a)
                            }, nr.prototype.Pd = function(e, t, a, n, i) {
                                ns(this, "push_token", e), ns(this, "custom_push_public_key", a), ns(this, "custom_push_user_auth", n), ns(this, "custom_push_vapid_public_key", i);
                                var o = E.ba,
                                    r = new d(o);
                                em(this.b, eE.kc, new a3(e, t, a, n, i).A()), r.setItem(o.G.gd, o.kb, !0)
                            }, nr.prototype.Sb = function(e) {
                                if (ns(this, "push_token", null), ns(this, "custom_push_public_key", null), ns(this, "custom_push_user_auth", null), ns(this, "custom_push_vapid_public_key", null), e) {
                                    e = E.ba;
                                    var t = new d(e);
                                    em(this.b, eE.kc, !1), t.setItem(e.G.gd, e.kb, !1)
                                }
                            }, nl.prototype.Tb = function(e) {
                                var t = ev(this.b, eE.jb);
                                em(this.b, eE.jb, e);
                                var a = E.ba;
                                new d(a).setItem(a.G.qe, this.ye, e), t !== e && eI(this.td)
                            }, nl.prototype.Xd = function(e) {
                                return eO(this.ze, e)
                            }, nc.prototype.Lb = function() {}, nc.prototype.$a = function() {}, nc.prototype.clearData = function() {}, u(nu, nc), (nS = nu.prototype).Ga = function() {
                                for (var e = ev(this.b, eE.wb) || [], t = [], a = 0; a < e.length; a++) {
                                    var n = eZ(e[a]);
                                    null != n && t.push(n)
                                }
                                this.B = np(this, nb(this, t, !1)), this.Da = ev(this.b, eE.ac) || this.Da, this.Aa = ev(this.b, eE.$b) || this.Aa
                            }, nS.Lb = function(e) {
                                if (nd(this) && null != e && e.cards) {
                                    var t = e.full_sync;
                                    t || this.Ga();
                                    var n = e.cards,
                                        i = e.last_full_sync_at;
                                    if (e = e.last_card_updated_at, t)
                                        for (var o = [], r = a(this.B), s = r.next(); !s.done; s = r.next())(s = s.value).test && o.push(s);
                                    else o = this.B.slice();
                                    for (r = 0; r < n.length; r++) {
                                        s = n[r];
                                        for (var l = null, c = 0; c < this.B.length; c++)
                                            if (s.id === this.B[c].id) {
                                                l = this.B[c];
                                                break
                                            }
                                        if (t) s = eJ(s), null != l && l.viewed && (s.viewed = !0), null != s && o.push(s);
                                        else if (null == l) null != (s = eJ(s)) && o.push(s);
                                        else if (!eY(l, s)) {
                                            for (l = 0; l < o.length; l++)
                                                if (s.id === o[l].id) {
                                                    o.splice(l, 1);
                                                    break
                                                }
                                        }
                                    }
                                    this.B = np(this, nb(this, o, t)), this.yc(), this.Da = i || 0, em(this.b, eE.ac, this.Da), this.Aa = e || 0, em(this.b, eE.$b, this.Aa), eI(this.ha, this.pb(!0))
                                }
                            }, nS.yc = function() {
                                for (var e = [], t = 0; t < this.B.length; t++) e.push(this.B[t].A());
                                em(this.b, eE.wb, e)
                            }, nS.Na = function(e, t) {
                                if (nd(this)) return this.H.Na(this.Da, this.Aa, this.Lb.bind(this), e, t)
                            }, nS.pb = function(e) {
                                e || this.Ga(), (e = np(this, this.B)).sort(function(e, t) {
                                    return e.pinned && !t.pinned ? -1 : t.pinned && !e.pinned ? 1 : e.updated > t.updated ? -1 : t.updated > e.updated ? 1 : 0
                                });
                                var t = Math.max(this.Aa || 0, this.Da || 0);
                                return 0 === t && (t = void 0), new tQ(e, P(t))
                            }, nS.$a = function(e) {
                                e || (this.B = [], eI(this.ha, new tQ(this.B.slice(), null)), ew(this.b, eE.wb), ew(this.b, eE.hb), ew(this.b, eE.ib), ew(this.b, eE.ua)), this.Aa = this.Da = 0, ew(this.b, eE.ac), ew(this.b, eE.$b)
                            }, nS.clearData = function(e) {
                                this.Aa = this.Da = 0, this.B = [], eI(this.ha, new tQ(this.B.slice(), null)), e && (ew(this.b, eE.wb), ew(this.b, eE.hb), ew(this.b, eE.ib), ew(this.b, eE.ua), ew(this.b, eE.ac), ew(this.b, eE.$b))
                            }, u(nh, nc), (nS = nh.prototype).Ga = function() {
                                for (var e = ev(this.b, eE.dd) || [], t = [], a = 0; a < e.length; a++) {
                                    var n = eZ(e[a]);
                                    null != n && t.push(n)
                                }
                                this.B = t, this.mb = z(ev(this.b, eE.bd))
                            }, nS.yc = function() {
                                for (var e = [], t = 0; t < this.B.length; t++) e.push(this.B[t].A());
                                em(this.b, eE.dd, e)
                            }, nS.Lb = function(e) {
                                if (null != e && e.feed) {
                                    this.Ga(), e = e.feed;
                                    for (var t, a = [], n = ev(this.b, eE.vb) || {}, i = {}, o = 0; o < e.length; o++) {
                                        var r = (t = e[o]).id,
                                            s = t.type,
                                            l = t.viewed,
                                            c = t.title,
                                            u = t.image,
                                            b = t.description,
                                            p = P(t.created),
                                            d = P(t.updated),
                                            h = t.categories,
                                            f = P(t.expires_at),
                                            g = t.url,
                                            m = t.domain,
                                            v = t.aspect_ratio;
                                        t = t.extras, null != (r = s === e0.xe || s === e0.ic ? new e8(r, l, c, u, b, p, d, h, f, g, m, v, t, !1, !1) : s === e0.Yb ? new e4(r, l, c, u, b, p, d, h, f, g, m, v, t, !1, !1) : s === e0.Xb ? new e2(r, l, u, p, d, h, f, g, m, v, t, !1, !1) : null) && (n[r.id] && (r.viewed = !0, i[r.id] = !0), a.push(r))
                                    }
                                    em(this.b, eE.vb, i), this.B = a, this.yc(), this.mb = new Date, em(this.b, eE.bd, this.mb), eI(this.ha, new tH(this.B.slice(), this.mb))
                                }
                            }, nS.Fc = function() {
                                this.Ga();
                                for (var e = [], t = new Date, a = 0; a < this.B.length; a++)(null == this.B[a].expiresAt || this.B[a].expiresAt >= t) && e.push(this.B[a]);
                                return new tH(e, this.mb)
                            }, nS.clearData = function(e) {
                                null == e && (e = !1), this.B = [], this.mb = null, e && (ew(this.b, eE.dd), ew(this.b, eE.bd)), eI(this.ha, new tH(this.B.slice(), this.mb))
                            }, u(ng, nc), ng.prototype.Lb = function(e) {
                                var t = !1;
                                if (null != e && e.triggers) {
                                    nm(this);
                                    var a = {},
                                        n = {};
                                    this.T = [];
                                    for (var i = 0; i < e.triggers.length; i++) {
                                        for (var o = e.triggers[i], r = o.id, s = [], l = 0; l < o.trigger_condition.length; l++) s.push(function(e) {
                                            var t = e.type;
                                            switch (t) {
                                                case av:
                                                    var a = null;
                                                    break;
                                                case aw:
                                                    e = e.data, a = new ab(e ? e.product_id : null);
                                                    break;
                                                case ay:
                                                    e = e.data, a = new ap(e ? e.product_id : null, e ? as(e.property_filters) : null);
                                                    break;
                                                case ax:
                                                    e = e.data, a = new ad(e ? e.campaign_id : null);
                                                    break;
                                                case ak:
                                                    e = e.data, a = new t1(e ? e.event_name : null);
                                                    break;
                                                case aE:
                                                    e = e.data, a = new ac(e ? e.event_name : null, e ? as(e.property_filters) : null);
                                                    break;
                                                case aA:
                                                    e = e.data, a = new au(e ? e.id : null, e ? e.buttons : null);
                                                    break;
                                                case aS:
                                                    a = null
                                            }
                                            return new af(t, a)
                                        }(o.trigger_condition[l]));
                                        l = P(o.start_time);
                                        var c = P(o.end_time),
                                            u = o.priority,
                                            b = o.type,
                                            p = o.delay,
                                            d = o.re_eligibility,
                                            h = o.timeout,
                                            f = o.data;
                                        for (o = o.min_seconds_since_last_trigger, r = C(aD, b, "Could not construct Trigger from server data", "Trigger.Types") ? new aN(r, s, l, c, u, b, f, p, d, h, o) : null, null != this.Y[r.id] && (r.Ca = this.Y[r.id], a[r.id] = this.Y[r.id]), null != this.L[r.id] && (n[r.id] = this.L[r.id]), s = 0; s < r.ob.length; s++)
                                            if (ag(r.ob[s], ah.V, null)) {
                                                t = !0;
                                                break
                                            }
                                        null != r && this.T.push(r)
                                    }
                                    for (I(this.Y, a) || (this.Y = a, em(this.b, eE.fc, this.Y)), I(this.L, n) || (this.L = n, em(this.b, eE.zb, this.L)), e = [], a = 0; a < this.T.length; a++) e.push(this.T[a].A());
                                    for (this.wd = (new Date).valueOf(), em(this.b, eE.kd, e), em(this.b, eE.md, this.wd), t && (A.info("Trigger with test condition found, firing test."), this.pa(ah.V)), this.pa(ah.OPEN), t = this.oc, this.oc = [], e = 0; e < t.length; e++) this.pa.apply(this, t[e])
                                }
                            }, ng.prototype.pa = function(e, t, a) {
                                var n = this;
                                if (C(ah, e, "Cannot fire trigger action.", "TriggerEvents")) {
                                    if (0 < this.H.lb) A.info("Trigger sync is currently in progress, awaiting sync completion before firing trigger event."), this.oc.push(arguments);
                                    else {
                                        (ev(this.b, eE.md) || 0) > this.wd ? nv(this) : nm(this);
                                        for (var i = (new Date).valueOf(), o = i - this.Ba, r = !0, s = !0, l = [], c = 0; c < this.T.length; c++) {
                                            var u = this.T[c],
                                                b = i + 1e3 * u.ab;
                                            if ((null == u.Ca || u.Rb !== a_ && b - u.Ca >= 1e3 * u.Rb) && (null == u.startTime || u.startTime <= i) && (null == u.endTime || u.endTime >= i)) {
                                                for (var p = !1, d = 0; d < u.ob.length; d++)
                                                    if (ag(u.ob[d], e, t)) {
                                                        p = !0;
                                                        break
                                                    }
                                                p && (r = !1, ny(this, u, b, e) && (s = !1, l.push(u)))
                                            }
                                        }
                                        if (r) A.info("Trigger event " + e + " did not match any trigger conditions.");
                                        else if (s) A.info("Ignoring " + e + " trigger event because a trigger was displayed " + o / 1e3 + "s ago.");
                                        else {
                                            l.sort(function(e, t) {
                                                return e.priority - t.priority
                                            });
                                            var h = l.pop();
                                            null != h && (A.info("Firing " + h.type + " trigger action " + h.id + " from trigger event " + e + "."), nx(this, h, i, e, a, l), 0 === h.ab ? nw(this, h, i, e, a, l) : this.na.push(setTimeout(function() {
                                                nw(n, h, i, e, a, l)
                                            }, 1e3 * h.ab)))
                                        }
                                    }
                                }
                            }, ng.prototype.$a = function(e) {
                                if (this.T = [], ew(this.b, eE.kd), !e) {
                                    for (e = 0, this.oc = [], this.Ba = null, this.Y = {}, this.L = {}; e < this.na.length; e++) clearTimeout(this.na[e]);
                                    this.na = [], ew(this.b, eE.ad), ew(this.b, eE.fc), ew(this.b, eE.zb), ew(this.b, eE.hg), ew(this.b, eE.gg), ew(this.b, eE.ig)
                                }
                            }, ng.prototype.clearData = function() {
                                this.T = [], this.Ba = null, this.Y = {}, this.L = {};
                                for (var e = 0; e < this.na.length; e++) clearTimeout(this.na[e]);
                                this.na = []
                            };
                            var nk = {
                                GOOGLE_TAG_MANAGER: "gg",
                                MPARTICLE: "mp",
                                SEGMENT: "sg",
                                TEALIUM: "tl",
                                MANUAL: "manu",
                                NPM: "npm",
                                CDN: "wcd"
                            };
                            J.BrazeSdkMetadata = nk, "undefined" == typeof console && (window.console = {
                                log: function() {}
                            });
                            var nE = window.Element.prototype;
                            if ("function" != typeof nE.matches && (nE.matches = nE.msMatchesSelector || nE.mozMatchesSelector || nE.webkitMatchesSelector || function(e) {
                                    e = (this.document || this.ownerDocument).querySelectorAll(e);
                                    for (var t = 0; e[t] && e[t] !== this;) ++t;
                                    return !!e[t]
                                }), Element.prototype.closest || (Element.prototype.closest = function(e) {
                                    var t = this;
                                    if (!document.documentElement.contains(t)) return null;
                                    do {
                                        if (t.matches(e)) return t;
                                        t = t.parentElement || t.parentNode
                                    } while (null !== t && 1 === t.nodeType);
                                    return null
                                }), "function" != typeof window.CustomEvent) {
                                var nA = function(e, t) {
                                    t = t || {
                                        bubbles: !1,
                                        cancelable: !1,
                                        detail: null
                                    };
                                    var a = document.createEvent("CustomEvent");
                                    return a.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), a
                                };
                                nA.prototype = window.Event.prototype, window.CustomEvent = nA
                            }
                            e.exports ? e.exports : (window.appboy || (window.appboy = {}), window.appboy);
                            var nS, nC, nN, nT, n_, nD, nO, nI = new function(e) {
                                    function t(e, t, a) {
                                        e = "The '" + e + "' " + t + " is deprecated.", a && (e += " Please use '" + a + "' instead."), A.warn(e)
                                    }

                                    function n() {
                                        A.Jb(), B && (eI(z), z.K(), g.clearData(!1), g = null, _.clearData(!1), _ = null, f.K(), f = null, I.K(), I = null, y.K(), y = null, b.K(), b = null, c.Jb(), M = c = null, a1(P), u = o = s = P = null, R = [], l = null), F = B = !1
                                    }

                                    function i() {
                                        if (F) return !1;
                                        if (!B) throw Error("Appboy must be initialized before calling methods.");
                                        return !0
                                    }
                                    null == e && (e = {
                                        Ug: function(e, t, a) {
                                            return new nl(e, t, a)
                                        },
                                        Wg: function(e, t) {
                                            return new a$(e, t)
                                        },
                                        $g: function(e, t, a, n, i, o, r, s, l, c) {
                                            null == i && (i = {});
                                            var u = new nr(l, r),
                                                b = new nn(r, u, l, i[S.xg]);
                                            return new aM(e, a, n, i[S.Cf], t, b, s, u, l, r, o, c)
                                        },
                                        Bc: function() {
                                            return new eD
                                        },
                                        Xg: function(e, t) {
                                            return new nh(e, t)
                                        },
                                        Vg: function(e, t, a, n) {
                                            return new nu(e, t, a, n)
                                        },
                                        ah: function(e, t, a, n) {
                                            return new ng(e, t, a, n)
                                        },
                                        Zg: function(e, t, a, n, i, o, r) {
                                            return null == i && (i = {}), new a5(e, t, a, n + "/safari/" + t, i[S.wg], i[S.ug], o, i[S.mg], i[S.Wf], r)
                                        },
                                        Yg: function(e) {
                                            return new a0(e)
                                        }
                                    });
                                    var o, r, s, l, c, u, b, h, f, g, y, T, _, I, M, P, U = new eD,
                                        z = new eD,
                                        R = [],
                                        B = !1,
                                        F = !1;
                                    return {
                                        Oh: function(e) {
                                            return eO(U, e)
                                        },
                                        Nh: function(e) {
                                            return eO(z, e)
                                        },
                                        Hd: function(n, i) {
                                            if (B) return A.info("Braze has already been initialized with an API key."), !0;
                                            if (A.Gd(null != i && i[S.Yf]), null == n || "" === n || "string" != typeof n) return A.error("Braze requires a valid API key to be initialized."), !1;
                                            if (o = n, s = i || {}, eu.lh && !s[S.Af]) return A.info("Ignoring activity from crawler bot " + navigator.userAgent), F = !0, !1;
                                            r = i = function(e, t) {
                                                var a = !1;
                                                try {
                                                    if (localStorage && localStorage.getItem) try {
                                                        localStorage.setItem(eE.jd, !0), localStorage.getItem(eE.jd) && (localStorage.removeItem(eE.jd), a = !0)
                                                    } catch (e) {
                                                        if (("QuotaExceededError" === e.name || "NS_ERROR_DOM_QUOTA_REACHED" === e.name) && 0 < localStorage.length) a = !0;
                                                        else throw e
                                                    }
                                                } catch (e) {
                                                    A.info("Local Storage not supported!")
                                                }
                                                var n = navigator.cookieEnabled || "cookie" in document && (0 < document.cookie.length || -1 < (document.cookie = "test").indexOf.call(document.cookie, "test"));
                                                return t = new e_(e, n && !t, a), new eb(t, a ? new eA(e) : new eT)
                                            }(n, s[S.ng] || !1);
                                            var p = new eS(null, !0);
                                            if (p.Z("ab.optOut")) return A.info("Ignoring all activity due to previous opt out"), p.store("ab.optOut", "This-cookie-will-expire-in-" + eC(p)), F = !0, !1;
                                            p = a(D(s));
                                            for (var d = p.next(); !d.done; d = p.next()) d = d.value, -1 === O(S).indexOf(d) && A.warn("Ignoring unknown initialization option '" + d + "'.");
                                            p = ["mparticle", "wordpress", "tealium"], null != s[S.re] && (d = s[S.re], -1 !== p.indexOf(d) ? l = d : A.error("Invalid sdk flavor passed: " + d));
                                            var m = [];
                                            if (f = e.Bc(), R.push(f), g = e.Xg(f, i), m.push(g), I = e.Bc(), R.push(I), null == (p = s[S.Rc]) || "" === p || "string" != typeof p) return A.error("Braze requires a valid SDK Endpoint to be initialized. Please set the 'baseUrl' initialization option to the value of your SDK Endpoint."), !1;
                                            if (0 !== (p = p.replace(/(\.[a-z]+)[^\.]*$/i, "$1/api/v3")).indexOf("http") && (p = "https://" + p), d = s[S.ee] || s[S.Vc], s[S.Vc] && t(S.Vc, "initialization option", S.ee), null != d) {
                                                if (N(d)) {
                                                    for (var v = [], w = 0; w < d.length; w++) C(aJ, d[w], "devicePropertyAllowlist contained an invalid value.", "DeviceProperties") && v.push(d[w]);
                                                    d = v
                                                } else A.error("devicePropertyAllowlist must be an array. Defaulting to all properties."), d = null
                                            }
                                            return h = e.Wg(i, d), d = new ne(i), b = e.Bc(), u = e.Ug(i, s[S.Zf], b), R.push(b), c = e.$g(o, p, "3.5.0", l, s, function(e) {
                                                    if (B)
                                                        for (var t = 0; t < m.length; t++) m[t].Lb(e)
                                                }, i, h, d, u), null == (v = s[S.ag]) && (v = 30), _ = e.ah(v, I, i, c), m.push(_), v = !0 === s[S.Zd] || !0 === s[S.fe], null != s.enableHtmlInAppMessages && t("enableHtmlInAppMessages", "initialization option", "allowUserSuppliedJavascript"), y = e.Bc(), R.push(y), T = e.Vg(y, c, i, d, v), m.push(T), eO(d.Ae, function() {
                                                    T.Na()
                                                }), eO(c.sd, function() {
                                                    T.Na()
                                                }), c.Hd(), M = e.Zg(c.rb(), o, h, p, s, d, i), P = e.Yg(c.rb()), i = "Initialized ", s && s[S.Rc] && (i += 'for the Braze backend at "' + s[S.Rc] + '" '), A.info(i + 'with API key "' + n + '".'), n = eu.language, i = !1, s && (s[S.$c] && (t(S.$c, "initialization option", S.cd), n = s[S.$c], i = !0), s[S.cd] && (n = s[S.cd], i = !0)),
                                                function(e, t) {
                                                    if (nT = {
                                                            en: {
                                                                NO_CARDS_MESSAGE: "We have no updates for you at this time.<br/>Please check again later.",
                                                                FEED_TIMEOUT_MESSAGE: "Sorry, this refresh timed out.<br/>Please try again later."
                                                            },
                                                            ar: {
                                                                NO_CARDS_MESSAGE: "ليس لدينا أي تحديث. يرجى التحقق مرة أخرى لاحقاً",
                                                                FEED_TIMEOUT_MESSAGE: "يرجى تكرار المحاولة لاحقا"
                                                            },
                                                            cs: {
                                                                NO_CARDS_MESSAGE: "V tuto chv\xedli pro v\xe1s nem\xe1me ž\xe1dn\xe9 aktualizace.<br/>Zkontrolujte pros\xedm znovu později.",
                                                                FEED_TIMEOUT_MESSAGE: "Pros\xedm zkuste to znovu později."
                                                            },
                                                            da: {
                                                                NO_CARDS_MESSAGE: "Vi har ingen updates.<br/>Pr\xf8v venligst senere.",
                                                                FEED_TIMEOUT_MESSAGE: "Pr\xf8v venligst senere."
                                                            },
                                                            de: {
                                                                NO_CARDS_MESSAGE: "Derzeit sind keine Updates verf\xfcgbar.<br/>Bitte sp\xe4ter noch einmal versuchen.",
                                                                FEED_TIMEOUT_MESSAGE: "Bitte sp\xe4ter noch einmal versuchen."
                                                            },
                                                            es: {
                                                                NO_CARDS_MESSAGE: "No tenemos actualizaciones.<br/>Por favor compru\xe9belo m\xe1s tarde.",
                                                                FEED_TIMEOUT_MESSAGE: "Por favor int\xe9ntelo m\xe1s tarde."
                                                            },
                                                            "es-mx": {
                                                                NO_CARDS_MESSAGE: "No tenemos ninguna actualizaci\xf3n.<br/>Vuelva a verificar m\xe1s tarde.",
                                                                FEED_TIMEOUT_MESSAGE: "Por favor, vuelva a intentarlo m\xe1s tarde."
                                                            },
                                                            et: {
                                                                NO_CARDS_MESSAGE: "Uuendusi pole praegu saadaval.<br/>Proovige hiljem uuesti.",
                                                                FEED_TIMEOUT_MESSAGE: "Palun proovige hiljem uuesti."
                                                            },
                                                            fi: {
                                                                NO_CARDS_MESSAGE: "P\xe4ivityksi\xe4 ei ole saatavilla.<br/>Tarkista my\xf6hemmin uudelleen.",
                                                                FEED_TIMEOUT_MESSAGE: "Yrit\xe4 my\xf6hemmin uudelleen."
                                                            },
                                                            fr: {
                                                                NO_CARDS_MESSAGE: "Aucune mise \xe0 jour disponible.<br/>Veuillez v\xe9rifier ult\xe9rieurement.",
                                                                FEED_TIMEOUT_MESSAGE: "Veuillez r\xe9essayer ult\xe9rieurement."
                                                            },
                                                            he: {
                                                                NO_CARDS_MESSAGE: ".אין לנו עדכונים. בבקשה בדוק שוב בקרוב",
                                                                FEED_TIMEOUT_MESSAGE: ".בבקשה נסה שוב בקרוב"
                                                            },
                                                            hi: {
                                                                NO_CARDS_MESSAGE: "हमारे पास कोई अपडेट नहीं हैं। कृपया बाद में फिर से जाँच करें.।",
                                                                FEED_TIMEOUT_MESSAGE: "कृपया बाद में दोबारा प्रयास करें।."
                                                            },
                                                            id: {
                                                                NO_CARDS_MESSAGE: "Kami tidak memiliki pembaruan. Coba lagi nanti.",
                                                                FEED_TIMEOUT_MESSAGE: "Coba lagi nanti."
                                                            },
                                                            it: {
                                                                NO_CARDS_MESSAGE: "Non ci sono aggiornamenti.<br/>Ricontrollare pi\xf9 tardi.",
                                                                FEED_TIMEOUT_MESSAGE: "Riprovare pi\xf9 tardi."
                                                            },
                                                            ja: {
                                                                NO_CARDS_MESSAGE: "アップデートはありません。<br/>後でもう一度確認してください。",
                                                                FEED_TIMEOUT_MESSAGE: "後でもう一度試してください。"
                                                            },
                                                            ko: {
                                                                NO_CARDS_MESSAGE: "업데이트가 없습니다. 다음에 다시 확인해 주십시오.",
                                                                FEED_TIMEOUT_MESSAGE: "나중에 다시 시도해 주십시오."
                                                            },
                                                            ms: {
                                                                NO_CARDS_MESSAGE: "Tiada kemas kini. Sila periksa kemudian.",
                                                                FEED_TIMEOUT_MESSAGE: "Sila cuba kemudian."
                                                            },
                                                            nl: {
                                                                NO_CARDS_MESSAGE: "Er zijn geen updates.<br/>Probeer het later opnieuw.",
                                                                FEED_TIMEOUT_MESSAGE: "Probeer het later opnieuw."
                                                            },
                                                            no: {
                                                                NO_CARDS_MESSAGE: "Vi har ingen oppdateringer.<br/>Vennligst sjekk igjen senere.",
                                                                FEED_TIMEOUT_MESSAGE: "Vennligst pr\xf8v igjen senere."
                                                            },
                                                            pl: {
                                                                NO_CARDS_MESSAGE: "Brak aktualizacji.<br/>Proszę sprawdzić ponownie p\xf3źniej.",
                                                                FEED_TIMEOUT_MESSAGE: "Proszę spr\xf3bować ponownie p\xf3źniej."
                                                            },
                                                            pt: {
                                                                NO_CARDS_MESSAGE: "N\xe3o temos atualiza\xe7\xf5es.<br/>Por favor, verifique mais tarde.",
                                                                FEED_TIMEOUT_MESSAGE: "Por favor, tente mais tarde."
                                                            },
                                                            "pt-br": {
                                                                NO_CARDS_MESSAGE: "N\xe3o temos nenhuma atualiza\xe7\xe3o.<br/>Verifique novamente mais tarde.",
                                                                FEED_TIMEOUT_MESSAGE: "Tente novamente mais tarde."
                                                            },
                                                            ru: {
                                                                NO_CARDS_MESSAGE: "Обновления недоступны.<br/>Пожалуйста, проверьте снова позже.",
                                                                FEED_TIMEOUT_MESSAGE: "Пожалуйста, повторите попытку позже."
                                                            },
                                                            sv: {
                                                                NO_CARDS_MESSAGE: "Det finns inga uppdateringar.<br/>F\xf6rs\xf6k igen senare.",
                                                                FEED_TIMEOUT_MESSAGE: "F\xf6rs\xf6k igen senare."
                                                            },
                                                            th: {
                                                                NO_CARDS_MESSAGE: "เราไม่มีการอัพเดต กรุณาตรวจสอบภายหลัง.",
                                                                FEED_TIMEOUT_MESSAGE: "กรุณาลองใหม่ภายหลัง."
                                                            },
                                                            uk: {
                                                                NO_CARDS_MESSAGE: "Оновлення недоступні.<br/>ласка, перевірте знову пізніше.",
                                                                FEED_TIMEOUT_MESSAGE: "Будь ласка, спробуйте ще раз пізніше."
                                                            },
                                                            vi: {
                                                                NO_CARDS_MESSAGE: "Ch\xfang t\xf4i kh\xf4ng c\xf3 cập nhật n\xe0o.<br/>Vui l\xf2ng kiểm tra lại sau.",
                                                                FEED_TIMEOUT_MESSAGE: "Vui l\xf2ng thử lại sau."
                                                            },
                                                            "zh-hk": {
                                                                NO_CARDS_MESSAGE: "暫時沒有更新.<br/>請稍候再試.",
                                                                FEED_TIMEOUT_MESSAGE: "請稍候再試."
                                                            },
                                                            "zh-hans": {
                                                                NO_CARDS_MESSAGE: "暂时没有更新.<br/>请稍后再试.",
                                                                FEED_TIMEOUT_MESSAGE: "请稍候再试."
                                                            },
                                                            "zh-hant": {
                                                                NO_CARDS_MESSAGE: "暫時沒有更新.<br/>請稍候再試.",
                                                                FEED_TIMEOUT_MESSAGE: "請稍候再試."
                                                            },
                                                            "zh-tw": {
                                                                NO_CARDS_MESSAGE: "暫時沒有更新.<br/>請稍候再試.",
                                                                FEED_TIMEOUT_MESSAGE: "請稍候再試."
                                                            },
                                                            zh: {
                                                                NO_CARDS_MESSAGE: "暂时没有更新.<br/>请稍后再试.",
                                                                FEED_TIMEOUT_MESSAGE: "请稍候再试."
                                                            }
                                                        }, null != e && (e = e.toLowerCase()), null != e && null == nT[e]) {
                                                        var a = e.indexOf("-");
                                                        0 < a && (e = e.substring(0, a))
                                                    }
                                                    null == nT[e] && (e = "Braze does not yet have a localization for language " + e + ", defaulting to English. Please contact us if you are willing and able to help us translate our SDK into this language.", t ? A.error(e) : A.info(e), e = "en"), n_ = e
                                                }(n, i), eI(U, s), B = !0
                                        },
                                        Jb: function() {
                                            A.info("Destroying appboy instance"), r = null, n()
                                        },
                                        gh: function(e) {
                                            i() && (null == e && A.error("getDeviceId must be supplied with a callback. e.g., appboy.getDeviceId(function(deviceId) {console.log('the device id is ' + deviceId)})"), "function" == typeof e && e(aQ(h).id))
                                        },
                                        Yd: function() {
                                            A.Yd()
                                        },
                                        Td: function(e) {
                                            A.Td(e)
                                        },
                                        Lc: function() {
                                            if (i()) {
                                                c.Lc(M);
                                                var e = E.ba,
                                                    t = new d(e);
                                                m(t, e.G.oe, function(a, n) {
                                                    function i() {
                                                        _.pa(ah.ne, [u], b)
                                                    }
                                                    var o, r, s, l = n.lastClick,
                                                        u = n.trackingString;
                                                    A.info("Firing push click trigger from " + u + " push click at " + l);
                                                    var b = (r = no((o = c).D), new L(o.f.o(), x.sg, l, r, {
                                                        cid: u
                                                    }));
                                                    no((s = c).D), A.info("Requesting explicit trigger refresh."), az(s, null, !0, null, i, i), v(t, e.G.oe, a)
                                                }), w(t, e.G.Ef, function(e) {
                                                    ! function(e, t) {
                                                        if (nd(e)) {
                                                            e.Ga();
                                                            var a = e.B.slice();
                                                            e.H.rb().o(function(n) {
                                                                for (var i = 0; i < t.length; i++)
                                                                    if (n === t[i].userId || null == n && null == t[i].userId) {
                                                                        for (var o = t[i].card, r = null, s = 0; s < e.B.length; s++)
                                                                            if (o.id === e.B[s].id) {
                                                                                r = e.B[s];
                                                                                break
                                                                            }
                                                                        if (null == r) null != (o = eJ(o)) && a.push(o);
                                                                        else if (!eY(r, o)) {
                                                                            for (r = 0; r < a.length; r++)
                                                                                if (o.id === a[r].id) {
                                                                                    a.splice(r, 1);
                                                                                    break
                                                                                }
                                                                        }
                                                                    }
                                                                e.B = np(e, nb(e, a, !1)), e.yc(), eI(e.ha, e.pb(!0))
                                                            })
                                                        }
                                                    }(T, e)
                                                }), w(t, e.G.me, function(e) {
                                                    var t = c;
                                                    e = a(e);
                                                    for (var n = e.next(); !n.done; n = e.next())
                                                        if ((n = n.value).api_key !== t.$) {
                                                            var i = E.ba;
                                                            new d(i).setItem(i.G.me, p.Ia(), n)
                                                        } else aR(t, n)
                                                })
                                            }
                                        },
                                        $a: function(e, t) {
                                            if (i()) {
                                                if (null == e || 0 === e.length || e != e) A.error("changeUser requires a non-empty userId.");
                                                else if (997 < G(e)) A.error('Rejected user id "' + e + '" because it is longer than 997 bytes.');
                                                else {
                                                    if (null != t && !j(t, "set signature for new user", "signature", !1)) return !1;
                                                    c.$a(e.toString(), [g, T, _], M, t)
                                                }
                                            }
                                        },
                                        rb: function() {
                                            if (i()) return c.rb()
                                        },
                                        ih: function() {
                                            if (i()) return s[S.be]
                                        },
                                        tb: function(e) {
                                            i() && c.tb(e)
                                        },
                                        Nc: function() {
                                            i() && c.Nc()
                                        },
                                        uf: function(e) {
                                            if (i()) return eO(f, e)
                                        },
                                        Fc: function() {
                                            if (i()) return g.Fc()
                                        },
                                        Na: function(e, t) {
                                            if (i()) return T.Na(e, t)
                                        },
                                        tf: function(e) {
                                            if (i()) return eO(y, e)
                                        },
                                        pb: function() {
                                            if (i()) return T.pb(!1)
                                        },
                                        Ph: function(e) {
                                            if (i()) return t("subscribeToNewInAppMessages", "method", "subscribeToInAppMessage"), eO(I, e)
                                        },
                                        vf: function(e) {
                                            if (i()) return "function" != typeof e ? null : eO(I, function(t) {
                                                return e(t[0]), t.slice(1)
                                            })
                                        },
                                        Qb: function(e) {
                                            if (i()) return e instanceof e9 || e instanceof tM ? c.Qb(e).h : (A.error("inAppMessage must be an InAppMessage object"), !1)
                                        },
                                        Jc: function(e) {
                                            if (i()) {
                                                if (!(e instanceof e9)) return A.error("inAppMessage must be an InAppMessage object"), !1;
                                                var t = c.Jc(e);
                                                if (t.h)
                                                    for (var a = 0; a < t.j.length; a++) _.pa(ah.ec, [e.triggerId], t.j[a]);
                                                return t.h
                                            }
                                        },
                                        Ic: function(e, t) {
                                            if (i()) {
                                                if (!(e instanceof tO)) return A.error("button must be an InAppMessageButton object"), !1;
                                                if (!(t instanceof e9)) return A.error("inAppMessage must be an InAppMessage object"), !1;
                                                var a = c.Ic(e, t);
                                                if (a.h)
                                                    for (var n = 0; n < a.j.length; n++) _.pa(ah.ec, [t.triggerId, e.id], a.j[n]);
                                                return a.h
                                            }
                                        },
                                        Pb: function(e, t, a) {
                                            if (i()) {
                                                if (!(e instanceof tF)) return A.error("inAppMessage argument to logInAppMessageHtmlClick must be an HtmlMessage object."), !1;
                                                if ((a = c.Pb(e, t, a)).h)
                                                    for (var n = 0; n < a.j.length; n++) _.pa(ah.ec, [e.triggerId, t], a.j[n]);
                                                return a.h
                                            }
                                        },
                                        M: function(e, t) {
                                            if (i()) return e instanceof e9 || e instanceof tM ? !!C(ts, t, t + " is not a valid in-app message display failure", "InAppMessage.DisplayFailures") && c.M(e.triggerId, t).h : (A.error("inAppMessage must be an InAppMessage object"), !1)
                                        },
                                        Ma: function(e, t) {
                                            if (i()) {
                                                if (!N(e)) return A.error("cards must be an array"), !1;
                                                for (var a = 0; a < e.length; a++)
                                                    if (!(e[a] instanceof eX)) return A.error("Each card in cards must be a Card object"), !1;
                                                return c.Ma(e, t).h
                                            }
                                        },
                                        La: function(e, t) {
                                            if (i()) return e instanceof eX ? c.La(e, t).h : (A.error("card must be a Card object"), !1)
                                        },
                                        Hc: function(e) {
                                            if (i()) return e instanceof eX ? c.Hc(e).h : (A.error("card must be a Card object"), !1)
                                        },
                                        jf: function() {
                                            if (i()) return aq(c, k.$f).h
                                        },
                                        hf: function() {
                                            if (i()) return aq(c, k.Kf).h
                                        },
                                        N: function(e) {
                                            if (i()) {
                                                for (var t = a(R), n = t.next(); !n.done; n = t.next()) n.value.N(e);
                                                U.N(e), z.N(e)
                                            }
                                        },
                                        K: function() {
                                            if (i())
                                                for (var e = a(R), t = e.next(); !t.done; t = e.next()) t.value.K()
                                        },
                                        Jd: function(e, t) {
                                            if (i()) {
                                                if (null == e || 0 >= e.length) return A.error('logCustomEvent requires a non-empty eventName, got "' + e + '". Ignoring event.'), !1;
                                                if (!H(e, "log custom event", "the event name")) return !1;
                                                var n = a(K(t, "logCustomEvent", "eventProperties", 'log custom event "' + e + '"', "event")),
                                                    o = n.next().value;
                                                if (n = n.next().value, !o) return !1;
                                                if ((o = c.Jd(e, n)).h)
                                                    for (A.info('Logged custom event "' + e + '".'), n = 0; n < o.j.length; n++) _.pa(ah.Tc, [e, t], o.j[n]);
                                                return o.h
                                            }
                                        },
                                        Kd: function(e, t, n, o, r) {
                                            if (i()) {
                                                if (null == n && (n = "USD"), null == o && (o = 1), null == e || 0 >= e.length) return A.error('logPurchase requires a non-empty productId, got "' + e + '", ignoring.'), !1;
                                                if (!H(e, "log purchase", "the purchase name")) return !1;
                                                var s = parseFloat(t);
                                                if (isNaN(s)) return A.error("logPurchase requires a numeric price, got " + t + ", ignoring."), !1;
                                                if (s = s.toFixed(2), isNaN(t = parseInt(o))) return A.error("logPurchase requires an integer quantity, got " + o + ", ignoring."), !1;
                                                if (1 > t || 100 < t) return A.error("logPurchase requires a quantity >1 and <100, got " + t + ", ignoring."), !1;
                                                if (n = n.toUpperCase(), -1 === "AED AFN ALL AMD ANG AOA ARS AUD AWG AZN BAM BBD BDT BGN BHD BIF BMD BND BOB BRL BSD BTC BTN BWP BYR BZD CAD CDF CHF CLF CLP CNY COP CRC CUC CUP CVE CZK DJF DKK DOP DZD EEK EGP ERN ETB EUR FJD FKP GBP GEL GGP GHS GIP GMD GNF GTQ GYD HKD HNL HRK HTG HUF IDR ILS IMP INR IQD IRR ISK JEP JMD JOD JPY KES KGS KHR KMF KPW KRW KWD KYD KZT LAK LBP LKR LRD LSL LTL LVL LYD MAD MDL MGA MKD MMK MNT MOP MRO MTL MUR MVR MWK MXN MYR MZN NAD NGN NIO NOK NPR NZD OMR PAB PEN PGK PHP PKR PLN PYG QAR RON RSD RUB RWF SAR SBD SCR SDG SEK SGD SHP SLL SOS SRD STD SVC SYP SZL THB TJS TMT TND TOP TRY TTD TWD TZS UAH UGX USD UYU UZS VEF VND VUV WST XAF XAG XAU XCD XDR XOF XPD XPF XPT YER ZAR ZMK ZMW ZWL".split(" ").indexOf(n)) return A.error("logPurchase requires a valid currencyCode, got " + n + ", ignoring."), !1;
                                                var l = a(K(r, "logPurchase", "purchaseProperties", 'log purchase "' + e + '"', "purchase"));
                                                if (o = l.next().value, l = l.next().value, !o) return !1;
                                                if ((o = c.Kd(e, s, n, t, l)).h)
                                                    for (A.info("Logged " + t + " purchase" + (1 < t ? "s" : "") + ' of "' + e + '" for ' + n + " " + s + "."), n = 0; n < o.j.length; n++) _.pa(ah.fd, [e, r], o.j[n]);
                                                return o.h
                                            }
                                        },
                                        qa: function() {
                                            if (i()) return M.qa()
                                        },
                                        Ka: function() {
                                            if (i()) return M.Ka()
                                        },
                                        Id: function(e, a, n) {
                                            i() && (t("isPushGranted", "method", "isPushPermissionGranted"), M.Id(e, a, n))
                                        },
                                        Mb: function() {
                                            if (i()) return M.Mb()
                                        },
                                        ph: function(e, t, a) {
                                            if (i()) return M.subscribe(a, function(t, a, n) {
                                                c.tb(), "function" == typeof e && e(t, a, n)
                                            }, t)
                                        },
                                        Uh: function(e, t) {
                                            if (i()) return M.unsubscribe(e, t)
                                        },
                                        Tb: function(e) {
                                            if (i()) return !!("" !== e && j(e, "set signature", "signature", !1)) && (u.Tb(e), !0)
                                        },
                                        Xd: function(e) {
                                            if (i()) return u.Xd(e)
                                        },
                                        Sh: function() {
                                            i() && (t("trackLocation", "method"), P.watchPosition())
                                        },
                                        zd: function(e) {
                                            if (i()) {
                                                if (!N(e)) return A.error("Cannot set SDK metadata because metadata is not an array."), !1;
                                                for (var t = a(e), n = t.next(); !n.done; n = t.next())
                                                    if (!C(nk, n.value, "sdkMetadata contained an invalid value.", "BrazeSdkMetadata")) return !1;
                                                return c.zd(e), !0
                                            }
                                        },
                                        Mh: function() {
                                            t("stopWebTracking", "method", "disableSDK"), null != c && c.tb();
                                            var e = new eS(null, !0);
                                            e.store("ab.optOut", "This-cookie-will-expire-in-" + eC(e)), e = E.ba, new d(e).setItem(e.G.xb, e.kb, !0), n(), F = !0
                                        },
                                        bh: function() {
                                            null != c && c.tb();
                                            var e = new eS(null, !0);
                                            e.store("ab.optOut", "This-cookie-will-expire-in-" + eC(e)), e = E.ba, new d(e).setItem(e.G.xb, e.kb, !0), n(), F = !0
                                        },
                                        vh: function() {
                                            t("resumeWebTracking", "method", "enableSDK"), new eS(null, !0).remove("ab.optOut");
                                            var e = E.ba;
                                            v(new d(e), e.G.xb, e.kb), n()
                                        },
                                        dh: function() {
                                            new eS(null, !0).remove("ab.optOut");
                                            var e = E.ba;
                                            v(new d(e), e.G.xb, e.kb), n()
                                        },
                                        mh: function() {
                                            return !!new eS(null, !0).Z("ab.optOut")
                                        },
                                        Xh: function() {
                                            if (null == r) throw Error("Appboy must be initialized before calling methods.");
                                            r.clearData();
                                            for (var e = D(E), t = 0; t < e.length; t++) new d(E[e[t]]).clearData();
                                            B && (g.clearData(!0), _.clearData(!0))
                                        }
                                    }
                                },
                                nM = {};
                            for (nO in J) nM[nO] = J[nO];
                            for (var nP in nM.initialize = nI.Hd, nM.destroy = nI.Jb, nM.getDeviceId = nI.gh, nM.toggleAppboyLogging = nI.Yd, nM.setLogger = nI.Td, nM.openSession = nI.Lc, nM.changeUser = nI.$a, nM.getUser = nI.rb, nM.requestImmediateDataFlush = nI.tb, nM.requestFeedRefresh = nI.Nc, nM.getCachedFeed = nI.Fc, nM.subscribeToFeedUpdates = nI.uf, nM.requestContentCardsRefresh = nI.Na, nM.getCachedContentCards = nI.pb, nM.subscribeToContentCardsUpdates = nI.tf, nM.logCardImpressions = nI.Ma, nM.logCardClick = nI.La, nM.logCardDismissal = nI.Hc, nM.logFeedDisplayed = nI.jf, nM.logContentCardsDisplayed = nI.hf, nM.logInAppMessageImpression = nI.Qb, nM.logInAppMessageClick = nI.Jc, nM.logInAppMessageButtonClick = nI.Ic, nM.logInAppMessageHtmlClick = nI.Pb, nM.subscribeToNewInAppMessages = nI.Ph, nM.subscribeToInAppMessage = nI.vf, nM.removeSubscription = nI.N, nM.removeAllSubscriptions = nI.K, nM.logCustomEvent = nI.Jd, nM.logPurchase = nI.Kd, nM.isPushSupported = nI.qa, nM.isPushBlocked = nI.Ka, nM.isPushGranted = nI.Id, nM.isPushPermissionGranted = nI.Mb, nM.registerAppboyPushMessages = nI.ph, nM.unregisterAppboyPushMessages = nI.Uh, nM.setSdkAuthenticationSignature = nI.Tb, nM.subscribeToSdkAuthenticationFailures = nI.Xd, nM.trackLocation = nI.Sh, nM.addSdkMetadata = nI.zd, nM.stopWebTracking = nI.Mh, nM.disableSDK = nI.bh, nM.resumeWebTracking = nI.vh, nM.enableSDK = nI.dh, nM.wipeData = nI.Xh, nM.isDisabled = nI.mh, nM) t[nP] = nM[nP];
                            var nU = t,
                                nz = new function(e, t) {
                                    var a = !1,
                                        n = !1,
                                        i = !1,
                                        o = !1,
                                        r = null,
                                        s = null,
                                        l = null,
                                        c = null;
                                    return e.Oh(function(t) {
                                        function s(e) {
                                            if (27 === e.keyCode && !i && 0 < document.querySelectorAll(".ab-modal-interactions").length) {
                                                e = document.getElementsByClassName("ab-html-message");
                                                for (var t = !1, a = 0; a < e.length; a++) {
                                                    var n = e[a].contentWindow.document.getElementsByClassName("ab-programmatic-close-button")[0];
                                                    null != n && (ez(n), t = !0)
                                                }
                                                t || null != (e = document.querySelectorAll(".ab-modal-interactions > .ab-close-button")[0]) && ez(e)
                                            }
                                        }
                                        if (a = t[S.pg] || !1, n = t[S.og] || t[S.qg] || !1, i = t[S.tg] || !1, o = t[S.fe] || !1, !0 === t[S.Zd] && (o = !0), r = null, l = t[S.be] || null, c = t[S.bg] || null, t[S.Xf] || null !== document.querySelector('link[rel=stylesheet][href="https://use.fontawesome.com/7f85a56ba4.css"]') || ((t = document.createElement("link")).setAttribute("rel", "stylesheet"), t.setAttribute("href", "https://use.fontawesome.com/7f85a56ba4.css"), document.getElementsByTagName("head")[0].appendChild(t)), t = "ab-css-definitions-" + "3.5.0".replace(/\./g, "-"), null == document.getElementById(t)) {
                                            var u = document.createElement("style");
                                            u.innerHTML = tR.$e, u.id = t, null != l && u.setAttribute("nonce", l), document.getElementsByTagName("head")[0].appendChild(u)
                                        }
                                        i || (document.addEventListener("keydown", s, !1), e.Nh(function() {
                                            document.removeEventListener("keydown", s)
                                        }))
                                    }), {
                                        Tg: function() {
                                            return null == r && (r = e.vf(function(t) {
                                                e.display.sf(t)
                                            })), r
                                        },
                                        sf: function(n, r, s) {
                                            if (null == n) return !1;
                                            if (n instanceof tM) return A.info("User received control for a multivariate test, logging to Braze servers."), e.Qb(n), !0;
                                            if (!(n instanceof e9)) return !1;
                                            var u = n instanceof tF;
                                            if (u && !n.Th && !o) return A.error('HTML in-app messages are disabled. Use the "allowUserSuppliedJavascript" option for appboy.initialize to enable these messages.'), e.M(n, ts.ge), !1;
                                            if (null == r && (r = document.body), n.Ja() && 0 < r.querySelectorAll(".ab-modal-interactions").length) return A.info("Cannot show in-app message '" + n.message + "' because another message is being shown."), e.M(n, ts.Bf), !1;
                                            if (eW.nh()) {
                                                var b = eW.hh();
                                                if (b === eW.Sa.jc && n.orientation === tm || b === eW.Sa.Zc && "PORTRAIT" === n.orientation) return A.info("Not showing " + ("PORTRAIT" === n.orientation ? "portrait" : "landscape") + " in-app message '" + n.message + "' because the screen is currently " + (b === eW.Sa.jc ? "portrait" : "landscape")), e.M(n, ts.rg), !1
                                            }
                                            if (!o) {
                                                if (b = !1, n.buttons && 0 < n.buttons.length)
                                                    for (var p = n.buttons, d = 0; d < p.length; d++) p[d].clickAction === tu && (b = tB(p[d].uri));
                                                else n.clickAction === tu && (b = tB(n.uri));
                                                if (b) return A.error('Javascript click actions are disabled. Use the "allowUserSuppliedJavascript" option for appboy.initialize to enable these actions.'), e.M(n, ts.ge), !1
                                            }
                                            var h = document.createElement("div");
                                            h.className = "ab-iam-root v3", h.className += n.oa(), h.setAttribute("role", "complementary"), te(n) && (h.id = n.htmlId), c && (h.style.zIndex = c + 1), r.appendChild(h), tt(n) && ((r = document.createElement("style")).innerHTML = n.css, r.id = ta(n), null != l && r.setAttribute("nonce", l), document.getElementsByTagName("head")[0].appendChild(r));
                                            var f = n instanceof tj;
                                            return r = n.aa(e, t, function() {
                                                e.display.Vd()
                                            }, function(t) {
                                                if (n.Ja() && n.xf()) {
                                                    var a = document.createElement("div");
                                                    if (a.className = "ab-page-blocker", tt(n) || (a.style.backgroundColor = e6(n.frameColor)), c && (a.style.zIndex = c), h.appendChild(a), !i) {
                                                        var o = (new Date).valueOf();
                                                        a.onclick = function(e) {
                                                            200 < (new Date).valueOf() - o && (ti(n, t), e.stopPropagation())
                                                        }
                                                    }
                                                    h.appendChild(t), t.focus(), n.Kc(h)
                                                } else if (f) {
                                                    var r = document.querySelectorAll(".ab-slideup");
                                                    a = null;
                                                    for (var l = r.length - 1; 0 <= l; l--)
                                                        if (r[l] !== t) {
                                                            a = r[l];
                                                            break
                                                        }
                                                    "TOP" === n.slideFrom ? (r = 0, null != a && (r = a.offsetTop + a.offsetHeight), t.style.top = Math.max(r, 0) + "px") : (r = 0, null != a && (r = (window.innerHeight || document.documentElement.clientHeight) - a.offsetTop), t.style.bottom = Math.max(r, 0) + "px")
                                                } else u && !i && t.contentWindow.addEventListener("keydown", function(e) {
                                                    27 === e.keyCode && n.Ye()
                                                });
                                                e.Qb(n), n.dismissType === tp && setTimeout(function() {
                                                    h.contains(t) && ti(n, t)
                                                }, n.duration), "function" == typeof s && s()
                                            }, a, c), (u || f) && (h.appendChild(r), n.Kc(h)), !0
                                        },
                                        Vd: function(t, a, i) {
                                            function o(t) {
                                                for (var a = t.querySelectorAll(".ab-feed"), n = null, i = 0; i < a.length; i++) a[i].parentNode === t && (n = a[i]);
                                                null != n ? (tK(e, n), n.parentNode.replaceChild(b, n)) : t.appendChild(b), setTimeout(function() {
                                                    b.className = b.className.replace("ab-hide", "ab-show")
                                                }, 0), l && b.focus(), e.jf(), tX(u, e, b)
                                            }

                                            function r(e, t) {
                                                if (null == t) return e;
                                                for (var a = [], n = 0; n < t.length; n++) a.push(t[n].toLowerCase());
                                                for (n = 0, t = []; n < e.length; n++) {
                                                    for (var i = [], o = 0; o < e[n].categories.length; o++) i.push(e[n].categories[o].toLowerCase());
                                                    0 < function(e) {
                                                        null == e && (e = []);
                                                        for (var t = [], a = arguments.length, n = 0, i = e.length; n < i; n++) {
                                                            var o, r = e[n];
                                                            if (-1 === t.indexOf(r)) {
                                                                for (o = 1; o < a && -1 !== arguments[o].indexOf(r); o++);
                                                                o === a && t.push(r)
                                                            }
                                                        }
                                                        return t
                                                    }(i, a).length && t.push(e[n])
                                                }
                                                return t
                                            }
                                            var s, l = !1;
                                            null == t && (t = document.body, l = !0);
                                            var c = !1,
                                                u = null;
                                            null == a ? (tV(u = e.Fc(), r(u.cards, i), u.lastUpdated, null, e, n), c = !0) : u = new tH(r(a, i), new Date);
                                            var b = u.aa(e, n);
                                            if (c) {
                                                (null == u.lastUpdated || 6e4 < (new Date).valueOf() - u.lastUpdated.valueOf()) && (A.info("Cached feed was older than max TTL of 60000 ms, requesting an update from the server."), tq(u, e, b));
                                                var p = (new Date).valueOf();
                                                a = e.uf(function(t) {
                                                    var a = b.querySelectorAll(".ab-refresh-button")[0];
                                                    if (null != a) {
                                                        var o = 500,
                                                            s = parseInt(b.getAttribute(tZ));
                                                        setTimeout(function() {
                                                            a.className = a.className.replace(/fa-spin/g, "")
                                                        }, Math.max(o = isNaN(s) ? o - ((new Date).valueOf() - p) : o - ((new Date).valueOf() - s), 0))
                                                    }
                                                    tV(u, r(t.cards, i), t.lastUpdated, b, e, n)
                                                }), b.setAttribute(tJ, a)
                                            }
                                            null != t ? o(t) : window.onload = (s = window.onload, function() {
                                                "function" == typeof s && s(), o(document.body)
                                            })
                                        },
                                        af: function() {
                                            for (var t = document.querySelectorAll(".ab-feed"), a = 0; a < t.length; a++) tK(e, t[a])
                                        },
                                        Rh: function(t, a, n) {
                                            0 < document.querySelectorAll(".ab-feed").length ? e.display.af() : e.display.Vd(t, a, n)
                                        },
                                        rf: function(t, a) {
                                            function i(t) {
                                                for (var a = t.querySelectorAll(".ab-feed"), n = null, i = 0; i < a.length; i++) a[i].parentNode === t && (n = a[i]);
                                                null != n ? (tK(e, n), n.parentNode.replaceChild(c, n)) : t.appendChild(c), setTimeout(function() {
                                                    c.className = c.className.replace("ab-hide", "ab-show")
                                                }, 0), r && c.focus(), e.hf(), tX(l, e, c)
                                            }
                                            var o, r = !1;
                                            null == t && (t = document.body, r = !0);
                                            var l = null;
                                            l = e.pb(), "function" == typeof a && tV(l, a(l.cards.slice()), l.lastUpdated, null, e, n);
                                            var c = l.aa(e, n);
                                            (null == l.lastUpdated || 6e4 < (new Date).valueOf() - l.lastUpdated.valueOf()) && (null == s || 6e4 < (new Date).valueOf() - s.valueOf()) && (A.info("Cached content cards were older than max TTL of 60000 ms, requesting a sync from the server."), tq(l, e, c), s = (new Date).valueOf());
                                            var u = (new Date).valueOf(),
                                                b = e.tf(function(t) {
                                                    var i = c.querySelectorAll(".ab-refresh-button")[0];
                                                    if (null != i) {
                                                        var o = 500,
                                                            r = parseInt(c.getAttribute(tZ));
                                                        setTimeout(function() {
                                                            i.className = i.className.replace(/fa-spin/g, "")
                                                        }, Math.max(o = isNaN(r) ? o - ((new Date).valueOf() - u) : o - ((new Date).valueOf() - r), 0))
                                                    }
                                                    o = t.cards, "function" == typeof a && (o = a(o.slice())), tV(l, o, t.lastUpdated, c, e, n)
                                                });
                                            c.setAttribute(tJ, b), null != t ? i(t) : window.onload = (o = window.onload, function() {
                                                "function" == typeof o && o(), i(document.body)
                                            })
                                        },
                                        gf: function(t) {
                                            for (var a = document.querySelectorAll(".ab-feed"), n = 0; n < a.length; n++)(null == t || null != t && a[n].parentNode === t) && tK(e, a[n])
                                        },
                                        Qh: function(t, a) {
                                            0 < document.querySelectorAll(".ab-feed").length ? e.display.gf() : e.display.rf(t, a)
                                        }
                                    }
                                }(nI, nU);
                            return nU.display = {}, nU.display.automaticallyShowNewInAppMessages = nz.Tg, nU.display.showInAppMessage = nz.sf, nU.display.showFeed = nz.Vd, nU.display.destroyFeed = nz.af, nU.display.toggleFeed = nz.Rh, nU.display.showContentCards = nz.rf, nU.display.hideContentCards = nz.gf, nU.display.toggleContentCards = nz.Qh, nI.display = nz, t
                        })
                    }).call(window)
                }(n = {
                    exports: {}
                }, n.exports), n.exports);
            window.appboy = o;
            var r = "Appboy",
                s = {
                    PageView: 3,
                    PageEvent: 4,
                    Commerce: 16
                },
                l = {
                    "01": "sdk.iad-01.braze.com",
                    "02": "sdk.iad-02.braze.com",
                    "03": "sdk.iad-03.braze.com",
                    "04": "sdk.iad-04.braze.com",
                    "05": "sdk.iad-05.braze.com",
                    "06": "sdk.iad-06.braze.com",
                    "08": "sdk.iad-08.braze.com",
                    EU: "sdk.fra-01.braze.eu",
                    EU02: "sdk.fra-02.braze.eu"
                },
                c = function() {
                    var e, t, a = this,
                        n = {};
                    a.name = r;
                    var i = {
                        $LastName: "setLastName",
                        $FirstName: "setFirstName",
                        Email: "setEmail",
                        $Gender: "setGender",
                        $Country: "setCountry",
                        $City: "setHomeCity",
                        $Mobile: "setPhoneNumber",
                        $Age: "setDateOfBirth",
                        last_name: "setLastName",
                        first_name: "setFirstName",
                        email: "setEmail",
                        gender: "setGender",
                        country: "setCountry",
                        home_city: "setHomeCity",
                        email_subscribe: "setEmailNotificationSubscriptionType",
                        push_subscribe: "setPushNotificationSubscriptionType",
                        phone: "setPhoneNumber",
                        image_url: "setAvatarImageUrl",
                        dob: "setDateOfBirth"
                    };

                    function o(e, t) {
                        if ("dob" === e) {
                            if (!(t instanceof Date)) return "Can't call removeUserAttribute or setUserAttribute on forwarder " + r + ", removeUserAttribute or setUserAttribute must set 'dob' to a date";
                            g("appoy.getUser().setDateOfBirth", t.getFullYear(), t.getMonth() + 1, t.getDate()), appboy.getUser().setDateOfBirth(t.getFullYear(), t.getMonth() + 1, t.getDate())
                        } else if ("$Age" === e) {
                            if ("number" != typeof t) return "$Age must be a number";
                            var a = new Date().getFullYear() - t;
                            g("appboy.getUser().setDateOfBirth", a, 1, 1), appboy.getUser().setDateOfBirth(a, 1, 1)
                        } else {
                            if (null == t && (t = ""), "string" != typeof t) return "Can't call removeUserAttribute or setUserAttribute on forwarder " + r + ", removeUserAttribute or setUserAttribute must set this value to a string";
                            var n = [];
                            n.push(t), g("appboy.getUser()." + i[e], n);
                            var o = appboy.getUser();
                            if (!o[i[e]].apply(o, n)) return "removeUserAttribute or setUserAttribute on forwarder " + r + " failed to call, an invalid attribute value was passed in"
                        }
                    }

                    function c(e) {
                        var t = h(e.EventName),
                            a = f(e.EventAttributes);
                        return null == a ? "Properties did not pass validation for " + t : (g("appboy.logCustomEvent", t, a), !0 === appboy.logCustomEvent(t, a))
                    }

                    function b(t) {
                        appboy.addSdkMetadata(["mp"]), appboy.subscribeToInAppMessage(function(t) {
                            var a = !0,
                                n = !1;
                            t instanceof appboy.InAppMessage && "push-primer" == t.extras["msg-id"] && (n = !0, (!appboy.isPushSupported() || appboy.isPushPermissionGranted() || appboy.isPushBlocked()) && (a = !1), null != t.buttons[0] && t.buttons[0].subscribeToClickedEvent(function() {
                                appboy.registerAppboyPushMessages()
                            })), (n && a || !n && "True" === e.register_inapp) && appboy.display.showInAppMessage(t)
                        }), appboy.openSession(), t.softPushCustomEventName && (g("appboy.logCustomEvent", t.softPushCustomEventName), appboy.logCustomEvent(t.softPushCustomEventName))
                    }

                    function p(e) {
                        if (e) {
                            var t = e.replace(/&amp;/g, "&");
                            t = e.replace(/&quot;/g, '"');
                            try {
                                var a = JSON.parse(t);
                                if (a && a.JS) return "https://" + a.JS + "/api/v3"
                            } catch (e) {
                                console.log("Unable to configure custom Appboy cluster: " + e.toString())
                            }
                        }
                    }

                    function d(e) {
                        return "string" == typeof e ? "$" === e.substr(0, 1) ? e.replace(/^\$+/g, "") : e : null
                    }

                    function h(e) {
                        if ("string" == typeof e) return d(e);
                        if (Array.isArray(e)) {
                            var t = [];
                            for (var a in e) {
                                var n = d(e[a]);
                                if (null == n) return null;
                                t.push(n)
                            }
                            return t
                        }
                        return e
                    }

                    function f(e) {
                        var t, a, n, i = {};
                        if (null == e && (e = {}), "object" != typeof e) return null;
                        for (var o in e) t = e[o], a = h(o), n = "string" == typeof t ? h(t) : t, i[a] = n;
                        return i
                    }

                    function g(e) {
                        var t = "mParticle - Braze Web Kit log:",
                            n = Array.prototype.slice.call(arguments, 1);
                        t += "\n" + e + ":\n", n.forEach(function(e) {
                            u(e) || Array.isArray(e) ? t += JSON.stringify(e) : t += e, t += ",\n"
                        }), a.logger.verbose(t)
                    }
                    this.init = function(i, o, s, c, u, d, h, f, g) {
                        a.logger || (a.logger = {
                            verbose: function() {}
                        });
                        try {
                            e = i, t = o, n.sessionTimeoutInSeconds = e.ABKSessionTimeoutKey || 1800, n.sdkFlavor = "mparticle", n.enableHtmlInAppMessages = "True" == e.enableHtmlInAppMessages, n.doNotLoadFontAwesome = "True" == e.doNotLoadFontAwesome, e.safariWebsitePushId && (n.safariWebsitePushId = e.safariWebsitePushId), e.serviceWorkerLocation && (n.serviceWorkerLocation = e.serviceWorkerLocation);
                            var m = e.cluster || e.dataCenterLocation;
                            if (l.hasOwnProperty(m)) n.baseUrl = l[m];
                            else {
                                var v = p(m);
                                v && (n.baseUrl = v)
                            }
                            if (g && g["28"]) {
                                var w = g["28"];
                                "function" == typeof w.initOptions && w.initOptions(n)
                            }
                            if (!0 !== s) appboy.initialize(e.apiKey, n), b(e);
                            else {
                                if (!appboy.initialize(e.apiKey, n)) return "Failed to initialize: " + r;
                                b(e)
                            }
                            return "Successfully initialized: " + r
                        } catch (e) {
                            return "Failed to initialize: " + r + " with error: " + e.message
                        }
                    }, this.process = function(n) {
                        var i, o, l, u, b = !1;
                        if (n.EventDataType == s.Commerce && n.EventCategory == mParticle.CommerceEventType.ProductPurchase) i = !1, n.ProductAction.ProductList && n.ProductAction.ProductList.forEach(function(t) {
                            null == t.Attributes && (t.Attributes = {}), t.Attributes.Sku = t.Sku, a = "True" === e.forwardSkuAsProductName ? h(String(t.Sku)) : h(String(t.Name));
                            var a, o = f(function() {
                                for (var e = {}, t = 0; t < arguments.length; t += 1)
                                    for (var a = arguments[t], n = Object.keys(a), i = 0; i < n.length; i += 1) e[n[i]] = a[n[i]];
                                return e
                            }(t.Attributes, {
                                "Transaction Id": n.ProductAction.TransactionId
                            }));
                            if (null == o) return "Properties did not pass validation for " + a;
                            var r = parseFloat(t.Price);
                            g("appboy.logPurchase", a, r, n.CurrencyCode, t.Quantity, o), i = appboy.logPurchase(a, r, n.CurrencyCode, t.Quantity, o)
                        }), b = !0 === i;
                        else if (n.EventDataType == s.Commerce) {
                            var p = mParticle.eCommerce.expandCommerceEvent(n);
                            if (null != p) {
                                for (var d = 0; d < p.length; d++) {
                                    var m = !1;
                                    try {
                                        b = c(p[d]), !0 === b && (m = !0)
                                    } catch (e) {
                                        return "Error logging page event" + e.message
                                    }
                                }
                                b = !0 === m
                            }
                        } else if (n.EventDataType == s.PageEvent) b = c(n);
                        else {
                            if (n.EventDataType != s.PageView) return "Can't send event type to forwarder " + r + ", event type is not supported";
                            "True" == e.forwardScreenViews && ((u = n.EventAttributes || {}).hostname = window.location.hostname, u.title = window.document.title, g("appboy.logCustomEvent", o = h("True" === e.setEventNameForPageView ? n.EventName : window.location.pathname), l = f(u)), b = !0 === appboy.logCustomEvent(o, l))
                        }!0 === b && t && t(a, n)
                    }, this.setUserIdentity = function(e, t) {
                        if ("1" === window.mParticle.getVersion().split(".")[0]) {
                            if (t == window.mParticle.IdentityType.CustomerId) g("appboy.changeUser", e), appboy.changeUser(e);
                            else {
                                if (t != window.mParticle.IdentityType.Email) return "Can't call setUserIdentity on forwarder " + r + ", identity type not supported.";
                                g("appboy.getUser().setEmail", e), appboy.getUser().setEmail(e)
                            }
                        }
                    }, this.setUserAttribute = function(e, t) {
                        if (e in i) return o(e, t);
                        var a = h(e),
                            n = h(t);
                        if (null != t && null == n) return "Value did not pass validation for " + e;
                        g("appboy.getUser().setCustomUserAttribute", a, n), appboy.getUser().setCustomUserAttribute(a, n)
                    }, this.onUserIdentified = function(t) {
                        var a, n = t.getUserIdentities().userIdentities;
                        g("appboy.changeUser", a = "MPID" === e.userIdentificationType ? t.getMPID() : n[e.userIdentificationType.toLowerCase()]), appboy.changeUser(a), n.email && (g("appboy.getUser().setEmail", n.email), appboy.getUser().setEmail(n.email))
                    }, this.removeUserAttribute = function(e) {
                        if (e in i) return o(e, null);
                        var t = h(e);
                        g("appboy.getUser().setCustomUserAttribute", t, null), appboy.getUser().setCustomUserAttribute(t, null)
                    }, this.decodeClusterSetting = p
                };

            function u(e) {
                return null != e && "object" == typeof e && !1 === Array.isArray(e)
            }
            window && window.mParticle && window.mParticle.addForwarder && window.mParticle.addForwarder({
                name: r,
                constructor: c,
                getId: function() {
                    return 28
                }
            });
            var b = {
                    register: function(e) {
                        if (!e) {
                            window.console.log("You must pass a config object to register the kit " + r);
                            return
                        }
                        if (!u(e)) {
                            window.console.log("'config' must be an object. You passed in a " + typeof e);
                            return
                        }
                        u(e.kits) || (e.kits = {}), e.kits[r] = {
                            constructor: c
                        }, window.console.log("Successfully registered " + r + " to your mParticle configuration")
                    },
                    getVersion: function() {
                        return "3.0.4"
                    }
                },
                p = b.register,
                d = b.getVersion;
            t.default = b, t.getVersion = d, t.register = p
        }
    }
]);