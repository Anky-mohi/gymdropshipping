var OneTrustStub = function(t) {
    "use strict";
    var u = new function() {
        this.optanonCookieName = "OptanonConsent", this.optanonHtmlGroupData = [], this.optanonHostData = [], this.genVendorsData = [], this.vendorsServiceData = [], this.IABCookieValue = "", this.oneTrustIABCookieName = "eupubconsent", this.oneTrustIsIABCrossConsentEnableParam = "isIABGlobal", this.isStubReady = !0, this.geolocationCookiesParam = "geolocation", this.EUCOUNTRIES = ["BE", "BG", "CZ", "DK", "DE", "EE", "IE", "GR", "ES", "FR", "IT", "CY", "LV", "LT", "LU", "HU", "MT", "NL", "AT", "PL", "PT", "RO", "SI", "SK", "FI", "SE", "GB", "HR", "LI", "NO", "IS"], this.stubFileName = "otSDKStub", this.DATAFILEATTRIBUTE = "data-domain-script", this.bannerScriptName = "otBannerSdk.js", this.mobileOnlineURL = [], this.isMigratedURL = !1, this.migratedCCTID = "[[OldCCTID]]", this.migratedDomainId = "[[NewDomainId]]", this.userLocation = {
            country: "",
            state: ""
        }
    };
    (l = m = m || {})[l.Days = 1] = "Days", l[l.Weeks = 7] = "Weeks", l[l.Months = 30] = "Months", l[l.Years = 365] = "Years", (l = e = e || {}).Name = "OTGPPConsent", l[l.ChunkSize = 4e3] = "ChunkSize", l.ChunkCountParam = "GPPCookiesCount", (l = {
        CPRA: 8,
        8: "CPRA",
        CCPA: 8
    })[8] = "CCPA", l[l.CDPA = 9] = "CDPA", l[l.USNATIONAL = 7] = "USNATIONAL", l[l.COLORADO = 10] = "COLORADO", l[l.UCPA = 11] = "UCPA", l[l.CONNECTICUT = 12] = "CONNECTICUT";
    var r, e, a = "geo",
        o = "otpreview",
        s = (e.Name, "PRODUCTION"),
        n = ((l = {})[m.Days] = "PCenterVendorListLifespanDay", l[m.Weeks] = "LfSpnWk", l[m.Months] = "PCenterVendorListLifespanMonth", l[m.Years] = "LfSpnYr", i.prototype.camelize = function(t) {
            return t.split("-").map(function(t, e) {
                return 0 === e ? t : t[0].toUpperCase() + t.slice(1)
            }).join("")
        }, i.prototype.strToObj = function(t) {
            for (var e = {}, i = t.split(";").map(function(t) {
                    return t.trim()
                }), n = 0, a = void 0; n < i.length; ++n)
                if (/:/.test(i[n])) {
                    if (!(a = i[n].split(/:(.+)/))[1]) return null;
                    e[this.camelize(a[0])] = a[1].trim()
                }
            return e
        }, i);

    function i() {
        var t = this;
        this.implementThePolyfill = function() {
            var a = t,
                o = Element.prototype.setAttribute;
            return Element.prototype.setAttribute = function(t, e) {
                if ("style" !== t.toLowerCase() && o.apply(this, [t, e]), "style" !== t.toLowerCase() || e || this.removeAttribute("style"), "style" === t.toLowerCase() && e) {
                    this.removeAttribute("style");
                    var i, n = a.strToObj(e);
                    for (i in n) this.style[i] = n[i]
                }
            }, !0
        }
    }

    function p(t, e, i) {
        void 0 === i && (i = !1);

        function n(t) {
            return t ? (";" !== (t = t.trim()).charAt(t.length - 1) && (t += ";"), t.trim()) : null
        }
        var o = n(t.getAttribute("style")),
            s = n(e),
            e = "",
            e = i && o ? function() {
                for (var t = o.split(";").concat(s.split(";")).filter(function(t) {
                        return 0 !== t.length
                    }), e = "", i = "", n = t.length - 1; 0 <= n; n--) {
                    var a = t[n].substring(0, t[n].indexOf(":") + 1).trim();
                    e.indexOf(a) < 0 && (e += a, i += t[n] + ";")
                }
                return i
            }() : s;
        t.setAttribute("style", e)
    }(e = r = r || {}).ping = "ping", e.addEventListener = "addEventListener", e.removeEventListener = "removeEventListener", e.hasSection = "hasSection", e.getSection = "getSection", e.getField = "getField", e.getGPPData = "getGPPData";
    var c = new function() {
            var s = this;
            this.LOCATOR_NAME = "__gppLocator", this.win = window, this.customInit = "CUSTOMINIT", this.init = function() {
                s.win.__gpp && "function" == typeof s.win.__gpp || (s.win.__gpp = s.executeGppApi, window.addEventListener("message", s.messageHandler, !1), s.addFrame(s.LOCATOR_NAME))
            }, this.removeGppApi = function() {
                delete s.win.__gpp;
                var t = document.querySelectorAll("iframe[name=" + s.LOCATOR_NAME + "]")[0];
                t && t.parentElement.removeChild(t)
            }, this.executeGppApi = function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                var i = null == (i = s.win) ? void 0 : i.__gpp;
                if (i.queue = i.queue || [], i.events = i.events || [], !t.length || 1 === t.length && "queue" === t[0]) return i.queue;
                if (1 === t.length && "events" === t[0]) return i.events;
                var n = t[0],
                    a = 1 < t.length ? t[1] : null,
                    o = 2 < t.length ? t[2] : null;
                switch (n) {
                    case r.ping:
                        return s.getPingRequest(a);
                    case r.addEventListener:
                        return s.addEventListener(a, o);
                    case r.removeEventListener:
                        return s.removeEventListener(o);
                    default:
                        return void s.addToQueue(n, a, o)
                }
            }, this.getPingRequest = function(t) {
                var e = {
                    gppVersion: 1,
                    cmpStatus: "stub",
                    cmpDisplayStatus: "hidden",
                    apiSupport: ["uspcav1", "uspvav1"],
                    currentAPI: "",
                    cmpId: Number.parseInt("28")
                };
                return t && t(e, !0), e
            }, this.addFrame = function(t) {
                var e, i = s.win.document,
                    n = Boolean(s.win.frames[t]);
                return n || (i.body ? ((e = i.createElement("iframe")).style.cssText = "display:none", e.name = t, e.setAttribute("title", "GPP Locator"), i.body.appendChild(e)) : setTimeout(function() {
                    s.addFrame(t)
                }, 5)), !n
            }, this.addEventListener = function(t, e) {
                var i, n = s.win.__gpp;
                return n.events = n.events || [], null != (i = n) && i.lastId || (n.lastId = 0), n.lastId++, n.events.push({
                    id: n.lastId,
                    callback: t,
                    parameter: e
                }), {
                    eventName: "listenerRegistered",
                    listenerId: n.lastId,
                    data: !0,
                    pingData: s.getPingRequest()
                }
            }, this.removeEventListener = function(e) {
                var i = !1,
                    t = s.win.__gpp;
                return t.events = t.events || [], t.events = t.events.filter(function(t) {
                    return t.id.toString() !== e.toString() || !(i = !0)
                }), {
                    eventName: "listenerRemoved",
                    listenerId: e,
                    data: i,
                    pingData: s.getPingRequest()
                }
            }, this.addToQueue = function(t, e, i) {
                var n = s.win.__gpp;
                n.queue = n.queue || [], n.queue.push([t, e, i])
            }, this.messageHandler = function(i) {
                var e, n, a = "string" == typeof i.data;
                try {
                    e = a ? JSON.parse(i.data) : i.data
                } catch (t) {
                    e = null
                }
                e && e.__gppCall && (n = e.__gppCall, (0, s.win.__gpp)(n.command, function(t, e) {
                    t = {
                        __gppReturn: {
                            returnValue: t,
                            success: e,
                            callId: n.callId
                        }
                    };
                    i && i.source && i.source.postMessage && i.source.postMessage(a ? JSON.stringify(t) : t, i.origin || "*")
                }, n.parameter))
            }, this.customInit || this.init()
        },
        l = (d.prototype.initConsentSDK = function() {
            this.initCustomEventPolyfill(), this.ensureHtmlGroupDataInitialised(), this.setStubScriptElement(), this.setOTDataLayer(), this.getParam(), this.fetchBannerSDKDependency(), this.captureNonce()
        }, d.prototype.captureNonce = function() {
            this.nonce = u.stubScriptElement.nonce || u.stubScriptElement.getAttribute("nonce") || null
        }, d.prototype.fetchBannerSDKDependency = function() {
            this.setDomainDataFileURL(), this.crossOrigin = u.stubScriptElement.getAttribute("crossorigin") || null, this.previewMode = "true" === u.stubScriptElement.getAttribute("data-preview-mode"), this.otFetch(u.bannerDataParentURL, this.getLocation.bind(this))
        }, d.prototype.setDomainIfBulkDomainEnabled = function(t) {
            var e = t && t.TenantFeatures,
                i = window.location.hostname,
                n = t.Domain,
                a = t.BulkDomainCheckUrl;
            e && e.CookieV2BulkDomainManagement && i !== n && t.ScriptType === s && ((e = window.sessionStorage) && e.getItem("bulkDomainMgmtEnabled") ? this.handleBulkDomainMgmt({
                isValid: "true" === window.sessionStorage.getItem("bulkDomainMgmtEnabled")
            }, t) : (n = {
                location: u.storageBaseURL.replace(/^https?:\/\//, ""),
                domainId: this.domainId,
                url: i
            }, this.otFetch(a, this.handleBulkDomainMgmt, !1, n, t)))
        }, d.prototype.getLocation = function(t) {
            if (this.setDomainIfBulkDomainEnabled(t), (t.TenantFeatures && t.TenantFeatures.CookieV2CSP || t.CookieV2CSPEnabled) && this.nonce && (this.setAttributePolyfillIsActive = !0, (new n).implementThePolyfill()), !t.RuleSet[0].Type) return this.iabTypeAdded = !1, window.__cmp = this.executeCmpApi, window.__tcfapi = this.executeTcfApi, this.intializeIabStub(), this.addBannerSDKScript(t);
            var e, i = window;
            i.OneTrust && i.OneTrust.geolocationResponse ? (i = i.OneTrust.geolocationResponse, this.setGeoLocation(i.countryCode, i.stateCode), this.addBannerSDKScript(t)) : (i = this.readCookieParam(u.optanonCookieName, u.geolocationCookiesParam)) || t.SkipGeolocation ? (e = i.split(";")[0], i = i.split(";")[1], this.setGeoLocation(e, i), this.addBannerSDKScript(t)) : this.getGeoLocation(t)
        }, d.prototype.handleBulkDomainMgmt = function(t, e) {
            window.sessionStorage && window.sessionStorage.setItem("bulkDomainMgmtEnabled", JSON.stringify(t.isValid)), t.isValid && (e.Domain = window.location.hostname)
        }, d.prototype.getGeolocationURL = function(t) {
            t.TenantFeatures;
            var e = "" + u.stubScriptElement.getAttribute("src").split(u.stubFileName)[0] + t.Version;
            return new RegExp("^file://", "i").test(e) && t.MobileSDK ? (e = "/" + t.GeolocationUrl.replace(/^(http|https):\/\//, "").split("/").slice(1).join("/") + ".js", u.storageBaseURL + e) : t.GeolocationUrl
        }, d.prototype.geoLocationJsonCallback = function(t, e) {
            e && this.setGeoLocation(e.country, e.state), this.addBannerSDKScript(t)
        }, d.prototype.getGeoLocation = function(t) {
            var e = this.getGeolocationURL(t);
            this.otFetch(e, this.geoLocationJsonCallback.bind(this, t), !0)
        }, d.prototype.setOTDataLayer = function() {
            var t = "data-dLayer-ignore",
                e = u.stubScriptElement.hasAttribute(t),
                t = u.stubScriptElement.getAttribute(t);
            this.otDataLayer = {
                ignore: e && "true" === t || e && "" === t,
                name: u.stubScriptElement.getAttribute("data-dLayer-name") || "dataLayer"
            }
        }, d.prototype.setGeoLocation = function(t, e) {
            u.userLocation = {
                country: t,
                state: e = void 0 === e ? "" : e
            }
        }, d.prototype.otFetch = function(t, i, e, n, a) {
            void 0 === e && (e = !1), void 0 === n && (n = null);
            var o = window.sessionStorage && window.sessionStorage.getItem("otPreviewData");
            if (new RegExp("^file://", "i").test(t)) this.otFetchOfflineFile(t, i);
            else if (0 <= t.indexOf("/consent/") && this.previewMode && o) {
                o = JSON.parse(o).domainJson;
                i(o)
            } else {
                u.mobileOnlineURL.push(t);
                var s = new XMLHttpRequest;
                if (s.onload = function(t) {
                        var e;
                        this && this.responseText ? e = this.responseText : t && t.target && (e = t.target.responseText), a ? i(JSON.parse(e), a) : i(JSON.parse(e))
                    }, s.onerror = function() {
                        i()
                    }, s.open("GET", t), s.withCredentials = !1, e && s.setRequestHeader("accept", "application/json"), n)
                    for (var r in n) s.setRequestHeader(r, n[r]);
                s.send()
            }
        }, d.prototype.otFetchOfflineFile = function(t, e) {
            var i = (t = t.replace(".json", ".js")).split("/"),
                n = i[i.length - 1].split(".js")[0];
            this.jsonp(t, function() {
                e(window[n])
            })
        }, d.prototype.jsonp = function(t, e) {
            var i = document.createElement("script");
            i.setAttribute("src", t), this.nonce && i.setAttribute("nonce", this.nonce), i.async = !0, i.type = "text/javascript", this.crossOrigin && i.setAttribute("crossorigin", this.crossOrigin), document.getElementsByTagName("head")[0].appendChild(i), new RegExp("^file://", "i").test(t) || u.mobileOnlineURL.push(t), e && (i.onload = i.onerror = function() {
                e()
            })
        }, d.prototype.getRegionSet = function(t) {
            var e, i, n, a = u.userLocation,
                o = t.RuleSet.filter(function(t) {
                    return !0 === t.Default
                });
            if (!a.country && !a.state) return o && 0 < o.length ? o[0] : null;
            for (var s = a.state.toLowerCase(), r = a.country.toLowerCase(), p = 0; p < t.RuleSet.length; p++)
                if (!0 === t.RuleSet[p].Global) n = t.RuleSet[p];
                else {
                    var l = t.RuleSet[p].States;
                    if (l[r] && 0 <= l[r].indexOf(s)) {
                        i = t.RuleSet[p];
                        break
                    }
                    0 <= t.RuleSet[p].Countries.indexOf(r) && (e = t.RuleSet[p])
                }
            return i || e || n
        }, d.prototype.ensureHtmlGroupDataInitialised = function() {
            this.initializeIABData(), this.initializeGroupData(), this.initializeHostData(), this.initializeGenVenData()
        }, d.prototype.initializeGroupData = function() {
            var t = this.readCookieParam(u.optanonCookieName, "groups");
            t && (u.optanonHtmlGroupData = this.deserialiseStringToArray(t))
        }, d.prototype.initializeHostData = function() {
            var t = this.readCookieParam(u.optanonCookieName, "hosts");
            t && (u.optanonHostData = this.deserialiseStringToArray(t))
        }, d.prototype.initializeGenVenData = function() {
            var t = this.readCookieParam(u.optanonCookieName, "genVendors");
            t && (u.genVendorsData = this.deserialiseStringToArray(t))
        }, d.prototype.initializeIABData = function() {
            this.validateIABGDPRApplied(), this.validateIABGlobalScope()
        }, d.prototype.validateIABGlobalScope = function() {
            var t = this.readCookieParam(u.optanonCookieName, u.oneTrustIsIABCrossConsentEnableParam);
            t ? "true" === t ? (u.hasIABGlobalScope = !0, u.isStubReady = !1) : (u.hasIABGlobalScope = !1, u.IABCookieValue = this.getCookie(u.oneTrustIABCookieName)) : u.isStubReady = !1
        }, d.prototype.validateIABGDPRApplied = function() {
            var t = this.readCookieParam(u.optanonCookieName, u.geolocationCookiesParam).split(";")[0];
            t ? this.isBoolean(t) ? u.oneTrustIABgdprAppliesGlobally = "true" === t : u.oneTrustIABgdprAppliesGlobally = 0 <= u.EUCOUNTRIES.indexOf(t) : u.isStubReady = !1
        }, d.prototype.isBoolean = function(t) {
            return "true" === t || "false" === t
        }, d.prototype.readCookieParam = function(t, e) {
            var i, n, a, o, t = this.getCookie(t);
            if (t) {
                for (n = {}, a = t.split("&"), i = 0; i < a.length; i += 1) o = a[i].split("="), n[decodeURIComponent(o[0])] = decodeURIComponent(o[1]).replace(/\+/g, " ");
                return e && n[e] ? n[e] : e && !n[e] ? "" : n
            }
            return ""
        }, d.prototype.getCookie = function(t) {
            if (this.isAmp) {
                var e = JSON.parse(window.localStorage.getItem(this.domainId)) || {};
                if (e) return e[t] || null
            }
            for (var i, n = t + "=", a = document.cookie.split(";"), o = 0; o < a.length; o += 1) {
                for (i = a[o];
                    " " == i.charAt(0);) i = i.substring(1, i.length);
                if (0 == i.indexOf(n)) return i.substring(n.length, i.length)
            }
            return null
        }, d.prototype.updateGtmMacros = function() {
            for (var t = [], e = u.optanonHtmlGroupData.length, i = 0; i < e; i++) this.endsWith(u.optanonHtmlGroupData[i], ":1") && t.push(u.optanonHtmlGroupData[i].replace(":1", ""));
            for (e = u.optanonHostData.length, i = 0; i < e; i++) this.endsWith(u.optanonHostData[i], ":1") && t.push(u.optanonHostData[i].replace(":1", ""));
            for (e = u.genVendorsData.length, i = 0; i < e; i++) this.endsWith(u.genVendorsData[i], ":1") && t.push(u.genVendorsData[i].replace(":1", ""));
            for (e = u.vendorsServiceData.length, i = 0; i < e; i++) this.endsWith(u.vendorsServiceData[i], ":1") && t.push(u.vendorsServiceData[i].replace(":1", ""));
            var n, a = "," + this.serialiseArrayToString(t) + ",",
                o = (window.OnetrustActiveGroups = a, window.OptanonActiveGroups = a, window),
                s = (this.otDataLayer.ignore || void 0 === o[this.otDataLayer.name] ? this.otDataLayer.ignore || (o[this.otDataLayer.name] = [{
                    event: "OneTrustLoaded",
                    OnetrustActiveGroups: a
                }, {
                    event: "OptanonLoaded",
                    OptanonActiveGroups: a
                }]) : o[this.otDataLayer.name].constructor === Array && (o[this.otDataLayer.name].push({
                    OnetrustActiveGroups: a
                }), o[this.otDataLayer.name].push({
                    OptanonActiveGroups: a
                })), new CustomEvent("consent.onetrust", {
                    detail: t
                }));
            !this.otDataLayer.ignore && t.length && (o[this.otDataLayer.name].constructor === Array && o[this.otDataLayer.name].push({
                event: "OneTrustGroupsUpdated",
                OnetrustActiveGroups: a
            }), n = new CustomEvent("OneTrustGroupsUpdated", {
                detail: t
            })), setTimeout(function() {
                t.length && window.dispatchEvent(s), n && window.dispatchEvent(n)
            })
        }, d.prototype.deserialiseStringToArray = function(t) {
            return t ? t.split(",") : []
        }, d.prototype.endsWith = function(t, e) {
            return -1 !== t.indexOf(e, t.length - e.length)
        }, d.prototype.serialiseArrayToString = function(t) {
            return t.toString()
        }, d.prototype.setStubScriptElement = function() {
            u.stubScriptElement = document.querySelector("script[src*='" + u.stubFileName + "']");
            var t = u.stubScriptElement && 0 <= u.stubScriptElement.getAttribute("src").indexOf("did=");
            u.stubScriptElement && u.stubScriptElement.hasAttribute(u.DATAFILEATTRIBUTE) ? this.domainId = u.stubScriptElement.getAttribute(u.DATAFILEATTRIBUTE).trim() : t ? this.domainId = u.stubScriptElement.getAttribute("src").split("did=")[1] : u.stubScriptElement || (u.stubScriptElement = document.querySelector("script[src*='" + u.migratedCCTID + "']"), u.stubScriptElement && (u.isMigratedURL = !0, this.domainId = u.migratedDomainId.trim()))
        }, d.prototype.setDomainDataFileURL = function() {
            var t = u.stubScriptElement.getAttribute("src"),
                e = -1 < t.indexOf("/consent");
            t && (u.isMigratedURL ? u.storageBaseURL = t.split("/consent/" + u.migratedCCTID)[0] : u.storageBaseURL = (e ? t.split("/consent") : t.split("/scripttemplates/" + u.stubFileName))[0]), this.storageBaseURL = u.storageBaseURL, this.isPreview && -1 === this.domainId.indexOf("test") ? this.domainId = this.domainId + "-test" : this.isPreview = !1, u.bannerBaseDataURL = u.storageBaseURL && u.storageBaseURL + "/consent/" + this.domainId, u.bannerDataParentURL = u.bannerBaseDataURL + "/" + this.domainId + ".json"
        }, d.prototype.initCustomEventPolyfill = function() {
            if ("function" == typeof window.CustomEvent) return !1;

            function t(t, e) {
                e = e || {
                    bubbles: !1,
                    cancelable: !1,
                    detail: void 0
                };
                var i = document.createEvent("CustomEvent");
                return i.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), i
            }
            t.prototype = window.Event.prototype, window.CustomEvent = t
        }, d.prototype.removeTcf = function() {
            delete window.__tcfapi;
            var t = document.querySelectorAll("iframe[name='__tcfapiLocator']")[0];
            t && t.parentElement.removeChild(t)
        }, d.prototype.getParamForIE = function() {
            return {
                get: function(t) {
                    t = new RegExp("[?&]" + t + "=([^&#]*)").exec(window.location.search);
                    return null === t ? null : decodeURI(t[1]) || ""
                }
            }
        }, d.prototype.getParam = function() {
            window.document.documentMode || !window.URLSearchParams ? this.urlParams = this.getParamForIE() : this.urlParams = new URLSearchParams(window.location.search);
            var t = "true" === this.urlParams.get("otreset"),
                e = "true" === this.urlParams.get("otpreview"),
                i = (this.geoFromUrl = (this.urlParams.get("otgeo") || "").toLowerCase(), this.readCookieParam(o, "expiry")),
                n = this.readCookieParam(o, a);
            this.isReset = t || i && new Date(i) < new Date, this.isPreview = !this.isReset && (e || i && new Date(i) > new Date), this.setGeoParam(this.geoFromUrl || n)
        }, d.prototype.setGeoParam = function(t) {
            var e;
            t && ((e = window).OneTrust || (e.OneTrust = {}), t = t.split(","), e.OneTrust.geolocationResponse = {
                countryCode: t[0],
                stateCode: t[1]
            })
        }, d);

    function d() {
        var l = this;
        this.iabType = null, this.iabTypeAdded = !0, this.crossOrigin = null, this.isAmp = !1, this.domainId = "", this.isReset = !1, this.isPreview = !1, this.geoFromUrl = "", this.nonce = "", this.setAttributePolyfillIsActive = !1, this.storageBaseURL = "", this.charset = null, this.addBannerSDKScript = function(t) {
            var e = l.getRegionSet(t),
                i = (e.GCEnable || (l.updateGtmMacros(), l.gtmUpdated = !0), l.iabTypeAdded && ("IAB" !== e.Type && "IAB2" !== e.Type || (l.iabType = e.Type, l.intializeIabStub()), "IAB2" !== e.Type) && l.removeTcf(), e.IsGPPEnabled ? c.init() : c.removeGppApi(), u.stubScriptElement.cloneNode(!0)),
                n = "",
                n = t.UseSDKRefactor ? (u.isMigratedURL && (i.src = u.storageBaseURL + "/scripttemplates/new/scripttemplates/" + u.stubFileName + ".js"), u.storageBaseURL + "/scripttemplates/new/scripttemplates/" + t.Version + "/" + u.bannerScriptName) : "5.11.0" === t.Version ? (u.isMigratedURL && (i.src = u.storageBaseURL + "/scripttemplates/old/scripttemplates/" + u.stubFileName + ".js"), u.storageBaseURL + "/scripttemplates/old/scripttemplates/5.11.0/" + u.bannerScriptName) : (u.isMigratedURL && (i.src = u.storageBaseURL + "/scripttemplates/" + u.stubFileName + ".js"), u.storageBaseURL + "/scripttemplates/" + t.Version + "/" + u.bannerScriptName);
            ["charset", "data-language", "data-document-language", "data-domain-script", "crossorigin", "data-ignore-ga"].forEach(function(t) {
                u.stubScriptElement.getAttribute(t) && i.setAttribute(t, u.stubScriptElement.getAttribute(t))
            }), l.charset = u.stubScriptElement.getAttribute("charset"), l.isAmp = !!u.stubScriptElement.getAttribute("amp"), window.otStubData = {
                bannerBaseDataURL: u.bannerBaseDataURL,
                crossOrigin: l.crossOrigin,
                domainData: t,
                domainId: l.domainId,
                geoFromUrl: l.geoFromUrl,
                isAmp: l.isAmp,
                isPreview: l.isPreview,
                isReset: l.isReset,
                mobileOnlineURL: u.mobileOnlineURL,
                nonce: l.nonce,
                otDataLayer: l.otDataLayer,
                regionRule: e,
                setAttributePolyfillIsActive: l.setAttributePolyfillIsActive,
                storageBaseURL: l.storageBaseURL,
                stubElement: i,
                urlParams: l.urlParams,
                userLocation: u.userLocation,
                gtmUpdated: l.gtmUpdated,
                previewMode: l.previewMode,
                charset: l.charset
            }, l.jsonp(n, null)
        }, this.intializeIabStub = function() {
            var t = window;
            l.iabTypeAdded ? ("IAB" === l.iabType ? void 0 === t.__cmp && (window.__cmp = l.executeCmpApi) : void 0 === t.__tcfapi && (window.__tcfapi = l.executeTcfApi), l.addIabFrame()) : l.addBackwardIabFrame(), t.receiveOTMessage = l.receiveIabMessage, (t.attachEvent || window.addEventListener)("message", t.receiveOTMessage, !1)
        }, this.addIabFrame = function() {
            var t = window,
                e = "IAB" === l.iabType ? "__cmpLocator" : "__tcfapiLocator";
            !t.frames[e] && (t.document.body ? l.addLocator(e, "CMP") : setTimeout(l.addIabFrame, 5))
        }, this.addBackwardIabFrame = function() {
            var t = window,
                e = "__cmpLocator",
                e = (!!t.frames[e] || (t.document.body ? l.addLocator(e, "CMP") : setTimeout(l.addIabFrame, 5)), "__tcfapiLocator");
            !t.frames[e] && (t.document.body ? l.addLocator(e, "TCF") : setTimeout(l.addIabFrame, 5))
        }, this.addLocator = function(t, e) {
            var i = window,
                n = i.document.createElement("iframe");
            p(n, "display: none;", !0), n.name = t, n.setAttribute("title", e + " Locator"), i.document.body.appendChild(n)
        }, this.receiveIabMessage = function(i) {
            var n, a, o, s, t, e, r = "string" == typeof i.data,
                p = {};
            try {
                p = r ? JSON.parse(i.data) : i.data
            } catch (t) {}
            p.__cmpCall && "IAB" === l.iabType ? (n = p.__cmpCall.callId, a = p.__cmpCall.command, t = p.__cmpCall.parameter, l.executeCmpApi(a, t, function(t, e) {
                t = {
                    __cmpReturn: {
                        returnValue: t,
                        success: e,
                        callId: n,
                        command: a
                    }
                };
                i.source.postMessage(r ? JSON.stringify(t) : t, i.origin)
            })) : p.__cmpCall && "IAB2" === l.iabType && console.log("Expecting IAB TCF v2.0 vendor iFrame call; Received IAB TCF v1.1"), p.__tcfapiCall && "IAB2" === l.iabType ? (o = p.__tcfapiCall.callId, s = p.__tcfapiCall.command, t = p.__tcfapiCall.parameter, e = p.__tcfapiCall.version, l.executeTcfApi(s, t, function(t, e) {
                t = {
                    __tcfapiReturn: {
                        returnValue: t,
                        success: e,
                        callId: o,
                        command: s
                    }
                };
                i && i.source && i.source.postMessage && i.source.postMessage(r ? JSON.stringify(t) : t, "*")
            }, e)) : p.__tcfapiCall && "IAB" === l.iabType && console.log("Expecting IAB TCF v1.1 vendor iFrame call; Received IAB TCF v2.0")
        }, this.executeCmpApi = function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            l.iabType = "IAB";
            var i = t[0],
                n = t[1],
                a = t[2];
            if ("function" == typeof a && i)
                if (u.isStubReady && u.IABCookieValue) switch (i) {
                    case "ping":
                        l.getPingRequest(a, !0);
                        break;
                    case "getConsentData":
                        l.getConsentDataRequest(a);
                        break;
                    default:
                        l.addToQueue(i, n, a)
                } else l.addToQueue(i, n, a)
        }, this.executeTcfApi = function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            if (l.iabType = "IAB2", !t.length) return window.__tcfapi.a || [];
            var i = t[0],
                n = t[1],
                a = t[2],
                o = t[3];
            "function" == typeof a && i && ("ping" === i ? l.getPingRequest(a) : l.addToQueue(i, n, a, o))
        }, this.addToQueue = function(t, e, i, n) {
            var a = window,
                o = "IAB" === l.iabType ? "__cmp" : "__tcfapi";
            a[o].a = a[o].a || [], a[o].a.push([t, e, i, n])
        }, this.getPingRequest = function(t, e) {
            var i, n;
            void 0 === e && (e = !1), t && (n = !(i = {}), "IAB" === l.iabType ? (i = {
                gdprAppliesGlobally: u.oneTrustIABgdprAppliesGlobally,
                cmpLoaded: e
            }, n = !0) : "IAB2" === l.iabType && (i = {
                gdprApplies: u.oneTrustIABgdprAppliesGlobally,
                cmpLoaded: !1,
                cmpStatus: "stub",
                displayStatus: "stub",
                apiVersion: "2.0",
                cmpVersion: void 0,
                cmpId: void 0,
                gvlVersion: void 0,
                tcfPolicyVersion: void 0
            }, n = !0), t(i, n))
        }, this.getConsentDataRequest = function(t) {
            t && u.IABCookieValue && t({
                gdprApplies: u.oneTrustIABgdprAppliesGlobally,
                hasGlobalScope: u.hasIABGlobalScope,
                consentData: u.IABCookieValue
            }, !0)
        }, this.initConsentSDK()
    }
    var m = new l;
    return t.OtSDKStub = l, t.otSdkStub = m, t
}({});