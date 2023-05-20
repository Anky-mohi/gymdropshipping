(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [737], {
        76106: function(e, t, s) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/wishlist", function() {
                return s(23799)
            }])
        },
        23799: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                __N_SSP: function() {
                    return w
                },
                default: function() {
                    return x
                }
            });
            var i = s(24246),
                l = s(27378),
                n = s(88038),
                o = s.n(n),
                r = s(97281),
                c = s(72494),
                a = s(30689),
                u = s(26434),
                _ = s(20949),
                h = s(97073),
                d = s(89293),
                j = s(77178),
                f = s.n(j),
                w = !0;

            function x(e) {
                let {
                    isAuthenticated: t,
                    error: s
                } = e, {
                    t: n
                } = (0, d.$G)(), {
                    wishlistItems: u,
                    setHeaderNotifcation: j,
                    discontinuedItems: w,
                    setSnackbox: x
                } = (0, a.Ei)(), m = (0, c.Xm)({
                    key: "ecom.web.wishlist-v2",
                    fallback: !1
                }), {
                    query: b
                } = (0, r.B)(), p = Object.keys(b).length, [g, k] = (0, l.useState)(!0), E = (0, l.useMemo)(() => u.sort((e, t) => e.addedAt - t.addedAt).map(e => e.productData).map(e => e.objectID), [u]);
                return ((0, l.useEffect)(() => {
                    j(!1)
                }, [j]), (0, l.useEffect)(() => {
                    0 === p ? k(!0) : k(!1)
                }, [p]), (0, l.useEffect)(() => {
                    w && x({
                        type: "discontinued",
                        state: "success"
                    })
                }, [w]), m) ? s ? (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(o(), {
                        children: (0, i.jsx)("title", {
                            children: n("wishlist.seo.page_title")
                        })
                    }), (0, i.jsx)(_.jj, {})]
                }) : t ? 0 === u.length ? (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(o(), {
                        children: (0, i.jsx)("title", {
                            children: n("wishlist.seo.page_title")
                        })
                    }), (0, i.jsx)(a.HN, {})]
                }) : (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(o(), {
                        children: (0, i.jsx)("title", {
                            children: n("wishlist.seo.page_title")
                        })
                    }), (0, i.jsxs)(h.SV, {
                        fallbackRender: () => (0, i.jsx)(_.jj, {}),
                        children: [(0, i.jsx)(_.Xf, {
                            allowedFacets: ["sizeInStock", "canonicalColour", "discountPercentage", "patternType", "fit", "price", "gender", "features"],
                            list: E,
                            collectionName: n("wishlist.title.yourwishlist"),
                            onError: () => k(!1),
                            gtmList: "wishlist"
                        }), g && (0, i.jsx)("div", {
                            className: f()["remove-all"],
                            children: (0, i.jsx)(a._h, {})
                        })]
                    })]
                }) : (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(o(), {
                        children: (0, i.jsx)("title", {
                            children: n("wishlist.seo.page_title")
                        })
                    }), (0, i.jsx)(a.MO, {})]
                }) : null
            }
            x.Layout = u.X
        },
        77178: function(e) {
            e.exports = {
                filters: "wishlist_filters__txHIE",
                sort: "wishlist_sort__4y0UA",
                "mobile-buttons": "wishlist_mobile-buttons__ClDkK",
                "mobile-button": "wishlist_mobile-button__qkLoR",
                "mobile-button--active": "wishlist_mobile-button--active__hJ9OU",
                "remove-all": "wishlist_remove-all__zkGQx"
            }
        }
    },
    function(e) {
        e.O(0, [172, 131, 427, 949, 774, 888, 179], function() {
            return e(e.s = 76106)
        }), _N_E = e.O()
    }
]);