(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [549], {
        26352: function(e, t, o) {
            "use strict";
            o.d(t, {
                g: function() {
                    return h
                }
            });
            var l = o(24246),
                c = o(88038),
                r = o.n(c),
                a = o(40815),
                n = o(83854),
                i = o(90187),
                s = o(97281),
                d = o(90929),
                m = o(59703);
            let u = "cdn.shopify.com/s/files/1/0098/8822/files/gymshark_social_banner_1200x1200.jpg?v=1549554764",
                h = e => {
                    let {
                        title: t = "",
                        description: o = "",
                        canonicalUrl: c,
                        noIndex: h,
                        noFollow: _
                    } = e, {
                        url: p
                    } = (0, a.a)(), {
                        asPath: g
                    } = (0, s.B)();
                    return (0, l.jsxs)(r(), {
                        children: [(0, l.jsx)("title", {
                            children: t
                        }), (0, l.jsx)("meta", {
                            name: "description",
                            content: o
                        }), (0, l.jsx)("link", {
                            rel: "canonical",
                            href: c || "".concat(p).concat((0, d._)(g))
                        }), (0, m.A)(!!h, !!_, "page-robots"), (0, n.J)({
                            url: p,
                            title: t,
                            description: o,
                            type: "website",
                            image: "http://".concat(u),
                            secureImage: "https://".concat(u)
                        }), (0, i.K)({
                            title: t,
                            description: o
                        })]
                    })
                }
        },
        83854: function(e, t, o) {
            "use strict";
            o.d(t, {
                J: function() {
                    return c
                }
            });
            var l = o(24246);
            let c = e => {
                let {
                    url: t,
                    title: o,
                    description: c,
                    type: r,
                    image: a,
                    secureImage: n
                } = e;
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)("meta", {
                        property: "og:url",
                        content: t
                    }), (0, l.jsx)("meta", {
                        property: "og:site_name",
                        content: "Gymshark"
                    }), (0, l.jsx)("meta", {
                        property: "og:title",
                        content: o
                    }), (0, l.jsx)("meta", {
                        property: "og:description",
                        content: c
                    }), (0, l.jsx)("meta", {
                        property: "og:type",
                        content: r
                    }), (0, l.jsx)("meta", {
                        property: "og:image",
                        content: a
                    }), (0, l.jsx)("meta", {
                        property: "og:image:secure_url",
                        content: n
                    })]
                })
            }
        },
        90187: function(e, t, o) {
            "use strict";
            o.d(t, {
                K: function() {
                    return c
                }
            });
            var l = o(24246);
            let c = e => {
                let {
                    title: t,
                    description: o,
                    card: c = "summary_large_image",
                    image: r,
                    label1: a,
                    data1: n,
                    label2: i,
                    data2: s
                } = e;
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)("meta", {
                        name: "twitter:site",
                        content: "@"
                    }), (0, l.jsx)("meta", {
                        name: "twitter:card",
                        content: c
                    }), (0, l.jsx)("meta", {
                        name: "twitter:title",
                        content: t
                    }), (0, l.jsx)("meta", {
                        name: "twitter:description",
                        content: o
                    }), r && (0, l.jsx)("meta", {
                        name: "twitter:image",
                        content: r
                    }), a && (0, l.jsx)("meta", {
                        name: "twitter:label1",
                        content: a
                    }), n && (0, l.jsx)("meta", {
                        name: "twitter:data1",
                        content: n
                    }), i && (0, l.jsx)("meta", {
                        name: "twitter:label2",
                        content: i
                    }), s && (0, l.jsx)("meta", {
                        name: "twitter:data2",
                        content: s
                    })]
                })
            }
        },
        59703: function(e, t, o) {
            "use strict";
            o.d(t, {
                A: function() {
                    return c
                }
            });
            var l = o(24246);
            o(27378);
            let c = (e, t, o) => {
                let c = "";
                return (e && !t ? c = "noindex, follow" : e && t ? c = "noindex, nofollow" : !e && t && (c = "index, nofollow"), e || t) ? (0, l.jsx)("meta", {
                    "data-id": o,
                    name: "robots",
                    content: c
                }) : null
            }
        },
        87558: function(e, t, o) {
            "use strict";
            o.d(t, {
                j: function() {
                    return l
                }
            });
            let l = () => {
                let e = () => {
                    window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "instant"
                    })
                };
                return e
            }
        },
        3593: function(e, t, o) {
            "use strict";
            o.d(t, {
                T: function() {
                    return K
                }
            });
            var l = o(24246),
                c = o(27378),
                r = o(79894),
                a = o.n(r),
                n = o(40653),
                i = o(60042),
                s = o.n(i),
                d = o(64926),
                m = o.n(d),
                u = o(70090),
                h = o(11134),
                _ = o(18465),
                p = o(68759),
                g = o.n(p);
            let b = e => {
                let {
                    video: t,
                    image: o,
                    desktopVideo: c,
                    desktopImage: r,
                    alt: a,
                    gradient: n,
                    quality: i = 90,
                    priority: s = !1
                } = e;
                return t || o || c || r ? (0, l.jsxs)(l.Fragment, {
                    children: [t ? (0, l.jsx)("div", {
                        className: g()["media-wrapper"],
                        children: (0, l.jsx)("video", {
                            poster: o,
                            autoPlay: !0,
                            muted: !0,
                            loop: !0,
                            playsInline: !0,
                            className: g().video,
                            children: (0, l.jsx)("source", {
                                src: "https:".concat(t || c)
                            })
                        })
                    }) : o && (0, l.jsx)(h.E, {
                        src: o,
                        alt: a,
                        layout: "fill",
                        objectFit: "cover",
                        loaderType: "contentful",
                        quality: i,
                        className: g().image,
                        priority: s
                    }), c ? (0, l.jsx)("div", {
                        className: g()["media-wrapper"],
                        children: (0, l.jsx)("video", {
                            poster: o,
                            autoPlay: !0,
                            muted: !0,
                            loop: !0,
                            playsInline: !0,
                            className: g()["desktop-video"],
                            children: (0, l.jsx)("source", {
                                src: "https:".concat(c)
                            })
                        })
                    }) : (r || o) && (0, l.jsx)(h.E, {
                        src: r || o,
                        alt: a,
                        layout: "fill",
                        objectFit: "cover",
                        loaderType: "contentful",
                        quality: i,
                        className: g()["desktop-image"],
                        priority: s
                    }), n && (0, l.jsx)("div", {
                        className: g().gradient
                    })]
                }) : null
            };
            var x = o(70787),
                k = o.n(x);
            let v = {
                    "Left - Middle": "left",
                    "Left - Bottom": "left-bottom",
                    "Middle - Middle": "center",
                    "Middle - Bottom": "bottom"
                },
                j = {
                    Light: "light",
                    Dark: "dark"
                },
                y = e => {
                    let {
                        heading: t,
                        desktopImage: o,
                        desktopImageGradient: r,
                        desktopVideo: a,
                        desktopImageOverlay: i,
                        mobileImage: d,
                        mobileImageGradient: p,
                        mobileVideo: g,
                        mobileImageOverlay: x,
                        theme: y,
                        mobileTheme: f,
                        copy: w,
                        mobileCopy: N,
                        mobileHeading: E,
                        contentAlignment: T,
                        firstButtonLabel: P,
                        firstButtonLink: S,
                        secondButtonLabel: C,
                        secondButtonLink: B,
                        id: I,
                        position: L,
                        trackingID: z
                    } = e, {
                        promo: {
                            click: F,
                            impression: M
                        }
                    } = (0, _.rS)();
                    (0, c.useEffect)(() => {
                        M(z || I, P, t, L)
                    }, []);
                    let A = (e, o) => {
                        F(z || I, e, t, o, L)
                    };
                    return (0, l.jsxs)("section", {
                        className: s()(k()["hero-section"], k()["--".concat(v[T])]),
                        "data-tracking-id": z,
                        children: [(0, l.jsx)("div", {
                            className: s()(k().media, k()["--".concat(v[T])], {
                                [k()["--mobile-gradient"]]: p,
                                [k()["--desktop-gradient"]]: r
                            }),
                            children: (0, l.jsx)(b, {
                                alt: t,
                                image: null == d ? void 0 : d.url,
                                video: null == g ? void 0 : g.url,
                                desktopImage: null == o ? void 0 : o.url,
                                desktopVideo: null == a ? void 0 : a.url,
                                gradient: !1,
                                priority: 0 === L
                            })
                        }), (0, l.jsxs)("div", {
                            className: s()(k().content, k()["--desktop-".concat(j[y])], k()["--mobile-".concat(j[f])], k()["--".concat(v[T])]),
                            children: [(null == x ? void 0 : x.url) && (0, l.jsx)("div", {
                                className: k()["mobile-overlay-image"],
                                children: (0, l.jsx)(h.E, {
                                    src: null == x ? void 0 : x.url,
                                    layout: "fill",
                                    loaderType: "contentful",
                                    quality: 90,
                                    alt: "image overlay"
                                })
                            }), (null == i ? void 0 : i.url) && (0, l.jsx)("div", {
                                className: k()["desktop-overlay-image"],
                                children: (0, l.jsx)(h.E, {
                                    src: null == i ? void 0 : i.url,
                                    layout: "fill",
                                    loaderType: "contentful",
                                    quality: 90,
                                    alt: "image overlay"
                                })
                            }), t && (0, l.jsx)("h1", {
                                className: k().desktop,
                                children: (0, u.ZP)(m()(t, {
                                    allowedTags: ["br"]
                                }))
                            }), E && (0, l.jsx)("h1", {
                                className: k().mobile,
                                children: (0, u.ZP)(m()(E, {
                                    allowedTags: ["br"]
                                }))
                            }), w && (0, l.jsx)("p", {
                                className: k().desktop,
                                children: (0, u.ZP)(m()(w, {
                                    allowedTags: ["br"]
                                }))
                            }), N && (0, l.jsx)("p", {
                                className: k().mobile,
                                children: (0, u.ZP)(m()(null != N ? N : w, {
                                    allowedTags: ["br"]
                                }))
                            }), P && S && (0, l.jsxs)("div", {
                                className: s()(k()["button-group"], k()["--".concat(v[T])]),
                                children: [(0, l.jsx)("div", {
                                    className: k()["mobile-cta"],
                                    children: (0, l.jsx)(n.zx, {
                                        href: S,
                                        variant: j[f] === j.Light ? "white" : "primary",
                                        onClick: () => A(P, S),
                                        children: P
                                    })
                                }), (0, l.jsx)("div", {
                                    className: k()["desktop-cta"],
                                    children: (0, l.jsx)(n.zx, {
                                        href: S,
                                        variant: j[y] === j.Light ? "white" : "primary",
                                        onClick: () => A(P, S),
                                        children: P
                                    })
                                }), C && (0, l.jsx)(n.zx, {
                                    href: B,
                                    variant: "secondary",
                                    onClick: () => A(C, B),
                                    children: C
                                })]
                            })]
                        })]
                    })
                };
            var f = o(89293),
                w = o(10132),
                N = o(85232),
                E = o.n(N);
            let T = {
                    home: "home",
                    "shop-men": "home_men",
                    "shop-women": "home_women",
                    seamless: "seamless"
                },
                P = e => {
                    let {
                        title: t,
                        slug: o,
                        products: r,
                        gender: n,
                        pageSlug: i
                    } = e, {
                        product: {
                            impression: s
                        },
                        cart: {
                            add: d
                        }
                    } = (0, _.rS)(), {
                        t: m
                    } = (0, f.$G)();
                    (0, c.useEffect)(() => {
                        (null == r ? void 0 : r.length) && s(T[i] || i, r)
                    }, []);
                    let u = e => (t, o) => {
                        d({
                            product: t,
                            type: "quick-add",
                            variant: o,
                            position: e,
                            list: T[i]
                        })
                    };
                    return r && r.length ? (0, l.jsxs)("section", {
                        className: E().section,
                        children: [(0, l.jsxs)("div", {
                            className: E().header,
                            children: [n && "None" !== n && (0, l.jsx)("span", {
                                children: m("womens" === n.toLowerCase() ? "common.womens" : "common.mens")
                            }), (0, l.jsx)("h2", {
                                children: t
                            }), (0, l.jsx)(a(), {
                                href: "/collections/".concat(o).concat(n && "None" !== n ? "/".concat(null == n ? void 0 : n.toLowerCase()) : ""),
                                children: m("common.viewall")
                            })]
                        }), (0, l.jsx)("div", {
                            className: E()["product-wrapper"],
                            children: (0, l.jsx)("div", {
                                children: null == r ? void 0 : r.map((e, t) => (0, l.jsx)(w.Il, {
                                    product: e,
                                    position: t + 1,
                                    list: T[i],
                                    quickAddCallback: u(t + 1)
                                }, e.id))
                            })
                        })]
                    }) : null
                };
            var S = o(94653),
                C = o(79844),
                B = o.n(C);
            let I = e => {
                let {
                    title: t,
                    scrollable: o,
                    cards: r
                } = e, [a, i] = (0, c.useState)(null);
                return r ? (0, l.jsxs)("section", {
                    className: s()(B().section, {
                        [B()["section--scrollable"]]: o
                    }),
                    "data-length": r.length,
                    children: [t && (0, l.jsx)("h2", {
                        children: t
                    }), (0, l.jsx)("div", {
                        className: B().wrapper,
                        children: (0, l.jsx)("div", {
                            children: r.map((e, t) => {
                                let {
                                    copy: o,
                                    title: c,
                                    image: a,
                                    darkTheme: d,
                                    gradient: m,
                                    url: u,
                                    video: h,
                                    desktopImage: _,
                                    desktopVideo: p
                                } = e;
                                return (0, l.jsx)("div", {
                                    className: s()(B().card, {
                                        [B()["card--dark"]]: d
                                    }),
                                    style: {
                                        "--basis": r.length,
                                        "--image": "https:".concat(a.url)
                                    },
                                    children: (0, l.jsx)(S.xb, {
                                        href: u,
                                        title: c,
                                        children: (0, l.jsxs)("article", {
                                            onMouseEnter: () => i(t),
                                            onMouseLeave: () => i(null),
                                            children: [(0, l.jsx)("div", {
                                                className: B()["aspect-ratio"]
                                            }), (0, l.jsxs)("div", {
                                                className: B()["card-content"],
                                                children: [(0, l.jsx)(b, {
                                                    alt: c,
                                                    image: null == a ? void 0 : a.url,
                                                    video: null == h ? void 0 : h.url,
                                                    desktopImage: null == _ ? void 0 : _.url,
                                                    desktopVideo: null == p ? void 0 : p.url,
                                                    gradient: m
                                                }), (0, l.jsx)("h3", {
                                                    children: c
                                                }), (0, l.jsx)("p", {
                                                    className: u && B()["has--link"],
                                                    children: o
                                                }), u && (0, l.jsx)("div", {
                                                    className: B().cta,
                                                    children: (0, l.jsx)(n.zx, {
                                                        variant: d ? "secondary" : "primary",
                                                        pulsate: !0,
                                                        "aria-label": c,
                                                        children: (0, l.jsx)(n.fb, {
                                                            ligature: n.JO.ChevronRight
                                                        })
                                                    })
                                                })]
                                            })]
                                        })
                                    }, c)
                                })
                            })
                        })
                    })]
                }) : null
            };
            var L = o(55323),
                z = o.n(L);
            let F = e => {
                let {
                    categories: t,
                    seo: o
                } = e;
                return t || o ? (0, l.jsxs)("section", {
                    className: z().section,
                    children: [t && (0, l.jsx)("ul", {
                        children: t.map(e => {
                            var t;
                            return (0, l.jsxs)("li", {
                                children: [(0, l.jsx)("h5", {
                                    children: e.title
                                }), (0, l.jsx)("ul", {
                                    children: null === (t = e.collections) || void 0 === t ? void 0 : t.map(e => (0, l.jsx)("li", {
                                        children: (0, l.jsx)(S.xb, {
                                            href: e.slug ? "/collections/".concat(e.slug).concat(e.gender && "None" !== e.gender ? "/".concat(e.gender.toLowerCase()) : "") : e.url,
                                            title: e.title,
                                            children: e.title
                                        })
                                    }, "seo-collection-".concat(e.slug)))
                                })]
                            }, "seo-category-".concat(e.title))
                        })
                    }), o && (0, l.jsx)("section", {
                        className: z().seo,
                        dangerouslySetInnerHTML: {
                            __html: m()(o, {
                                allowedTags: ["p", "br", "a", "h1", "h2", "h3", "h4", "h5", "h6", "details", "summary"]
                            })
                        }
                    })]
                }) : null
            };
            var M = o(3557),
                A = o(4127);
            let U = e => {
                var t;
                return null === (t = e.split(/[#?]/)[0].split(".").pop()) || void 0 === t ? void 0 : t.trim()
            };
            var q = o(7631),
                D = o.n(q);
            let G = e => {
                let {
                    copy: t,
                    image: o,
                    copyPlacement: c,
                    socialOverlay: r,
                    buttonText: a,
                    buttonLink: i,
                    theme: d
                } = e, {
                    t: _
                } = (0, f.$G)(), {
                    footer: p
                } = (0, A.U)(), g = e => (0, u.ZP)(m()(e.replaceAll("\n", "<br>"), {
                    allowedTags: ["p", "br", "a", "h1", "h2", "h3", "h4", "h5", "h6", "b", "i", "strong", "ul", "li"]
                })), b = "black" !== d;
                return (0, l.jsx)("div", {
                    className: s()(D().background, {
                        [D()["container--black"]]: "black" === d,
                        [D()["container--grey"]]: "grey" === d
                    }),
                    children: (0, l.jsx)("div", {
                        className: s()(D().container, {
                            [D()["container--text-only"]]: !(null == o ? void 0 : o.url)
                        }),
                        children: (null == o ? void 0 : o.url) ? (0, l.jsxs)("section", {
                            className: s()(D().section, {
                                [D().reverse]: !c
                            }),
                            children: [o && ((e => {
                                let t = U(e);
                                return !!t && ["mp4", "mov", "webm"].includes(t)
                            })(o.url) ? (0, l.jsx)("div", {
                                className: D().video,
                                children: (0, l.jsx)("video", {
                                    className: D().video,
                                    autoPlay: !0,
                                    muted: !0,
                                    loop: !0,
                                    playsInline: !0,
                                    children: (0, l.jsx)("source", {
                                        src: o.url,
                                        type: "video/".concat(U(o.url))
                                    })
                                })
                            }) : (0, l.jsxs)("div", {
                                className: D().image,
                                children: [(0, l.jsx)(h.E, {
                                    src: o.url,
                                    layout: "fill",
                                    objectFit: "cover",
                                    objectPosition: "top",
                                    quality: 90,
                                    alt: "",
                                    loaderType: "contentful"
                                }), r && (null == p ? void 0 : p.socialChannels) && (0, l.jsxs)("div", {
                                    className: D().socials,
                                    children: [(0, l.jsx)("h2", {
                                        children: _("common.follow_us")
                                    }), (0, l.jsx)(M.q, {
                                        socialChannels: null == p ? void 0 : p.socialChannels
                                    })]
                                })]
                            })), (0, l.jsxs)("div", {
                                className: s()(D().content, {
                                    [D()["content--black"]]: "black" === d,
                                    [D()["content--grey"]]: "grey" === d
                                }),
                                children: [t && (0, l.jsx)("div", {
                                    className: D().copy,
                                    children: g(t)
                                }), a && i && (0, l.jsx)("div", {
                                    children: (0, l.jsx)(n.zx, {
                                        variant: b ? "primary" : "white",
                                        type: "button",
                                        href: i,
                                        children: a
                                    })
                                })]
                            })]
                        }) : (0, l.jsx)("section", {
                            className: s()(D().section, D()["section--text-only"]),
                            children: (0, l.jsxs)("div", {
                                className: D().content,
                                children: [t && (0, l.jsx)("div", {
                                    className: D().copy,
                                    children: g(t)
                                }), a && i && (0, l.jsx)("div", {
                                    children: (0, l.jsx)(n.zx, {
                                        variant: b ? "primary" : "white",
                                        type: "button",
                                        href: i,
                                        children: a
                                    })
                                })]
                            })
                        })
                    })
                })
            };
            var J = o(75723),
                R = o.n(J);
            let K = e => {
                var t, o;
                let {
                    content: r
                } = e, i = null == r ? void 0 : null === (t = r.body) || void 0 === t ? void 0 : t.reduce((e, t, o) => (null == t ? void 0 : t.component) === "HeroBlock" ? [...e, o] : e, []);
                return r ? (0, l.jsxs)("div", {
                    children: [null == r ? void 0 : null === (o = r.body) || void 0 === o ? void 0 : o.map((e, t) => e ? "HeroBlock" === e.component ? c.createElement(y, { ...e,
                        key: "hero-block-".concat(t),
                        position: i.findIndex(e => e === t) + 1
                    }) : "ProductBlock" === e.component ? c.createElement(P, { ...e,
                        pageSlug: r.slug,
                        key: "collection-block-".concat(t)
                    }) : "CardsBlock" === e.component ? c.createElement(I, { ...e,
                        key: "cards-block-".concat(t)
                    }) : "SeoBlock" === e.component ? c.createElement(F, { ...e,
                        key: "seo-block-".concat(t)
                    }) : "webImagetextBlock" === e.component ? c.createElement(G, { ...e,
                        key: "image-text-block-".concat(t)
                    }) : void 0 : null), (0, l.jsxs)(a(), {
                        href: "#",
                        className: R()["back-to-top"],
                        children: [(0, l.jsx)(n.fb, {
                            ligature: n.JO.ChevronUp
                        }), "Back to top"]
                    })]
                }) : null
            };
            var O = o(95827),
                V = o(69041),
                Z = o.n(V),
                H = o(13853),
                W = o(13157),
                Q = o(11547);
            (0, O.gn)([(0, H.f)(Q.n), (0, O.w6)("design:type", "undefined" == typeof Logger ? Object : Logger)], (class {
                async getPageBySlug(e) {
                    let {
                        slug: t,
                        storeCode: o,
                        locale: l,
                        preview: c,
                        isAuthenticated: r
                    } = e;
                    try {
                        var a;
                        let e = (0, W.aE)(),
                            n = c && t ? "".concat(e.preview, "/generate/webPage?slug=").concat(t, "&storeCode=").concat(o, "&contentfulLocale=").concat(l, "&preview=true") : "".concat(e.live, "/web-page/").concat(t, "/").concat(o, "/").concat(l, ".json"),
                            i = await (await fetch(n)).json(),
                            s = null === (a = i.body) || void 0 === a ? void 0 : a.reduce((e, t, o) => t && "ProductBlock" === t.component ? [...e, o] : e, []);
                        return (null == s ? void 0 : s.length) && (i = await this.formatProductBlock(i, s, !!r)), i
                    } catch (e) {
                        throw this.logger.error({
                            type: "home_service",
                            message: "Fetching page by slug in home service",
                            error: e
                        }), Error("Error calling getPageBySlug with slug: ".concat(t, ", language: ").concat(l, ", preview: ").concat(c))
                    }
                }
                intialiseIndex() {
                    let e = (0, W.oG)(this._locale, W.ar.SEARCH);
                    return this._searchService.initIndex(e)
                }
                async fetchProducts(e, t) {
                    let o = this.intialiseIndex(),
                        l = Promise.all(e.map(async e => (await Promise.all(e.map(async e => {
                            try {
                                let l = await o.search('"'.concat(e, '"'), {
                                    restrictSearchableAttributes: ["id", "availableSizes.sku"],
                                    ruleContexts: t ? ["logged-in-user"] : ["logged-out-user"],
                                    attributesToHighlight: [],
                                    attributesToSnippet: [],
                                    attributesToRetrieve: ["id", "sku", "objectID", "sizeInStock", "availableSizes", "handle", "title", "type", "gender", "fit", "labels", "colour", "price", "tier", "compareAtPrice", "discountPercentage", "featuredMedia", "promotionalMessaging", "inStock"]
                                });
                                if (!l || !l.nbHits) return null;
                                return l.hits[0]
                            } catch (e) {
                                return this.logger.error({
                                    type: "home_service",
                                    message: "Fetching products in home service",
                                    error: e
                                }), null
                            }
                        }))).filter(Boolean)));
                    return l
                }
                async formatProductBlock(e, t, o) {
                    try {
                        let l = [];
                        t.forEach(t => {
                            l = [...l, e.body[t].products]
                        });
                        let c = await this.fetchProducts(l.filter(Boolean), !!o);
                        if (!c.length) return e;
                        let r = e;
                        return t.forEach((t, o) => {
                            let l = { ...e.body[t],
                                products: c[o]
                            };
                            r = { ...r,
                                body: [...r.body.slice(0, t), l, ...r.body.slice(t + 1)]
                            }
                        }), r
                    } catch (l) {
                        this.logger.error({
                            type: "home_service",
                            message: "Product block formatting error",
                            error: l
                        });
                        let o = e;
                        return t.forEach((t, l) => {
                            let c = { ...e.body[t],
                                products: null
                            };
                            o = { ...o,
                                body: [...o.body.slice(0, t), c, ...o.body.slice(t + 1)]
                            }
                        }), o
                    }
                }
                constructor(e) {
                    this._locale = e, this._searchService = Z()("2DEAES0CUO", "932fd4562e8443c09e3d14fd4ab94295")
                }
            }).prototype, "logger", void 0)
        },
        68759: function(e) {
            e.exports = {
                "media-wrapper": "media_media-wrapper__R8KJD",
                video: "media_video__V7t_U",
                image: "media_image__enh70",
                "desktop-image": "media_desktop-image__aiDUJ",
                "desktop-video": "media_desktop-video__KTi1D",
                gradient: "media_gradient__rkp8O"
            }
        },
        79844: function(e) {
            e.exports = {
                section: "cards-block_section__zOK5_",
                "section--scrollable": "cards-block_section--scrollable__W1iVE",
                wrapper: "cards-block_wrapper__Be9_c",
                card: "cards-block_card__UeUUK",
                "card--dark": "cards-block_card--dark__rAdX_",
                cta: "cards-block_cta__0qTDT",
                "aspect-ratio": "cards-block_aspect-ratio__V9DDV",
                "card-content": "cards-block_card-content__M_k5H",
                "has--link": "cards-block_has--link__xWU8E",
                "remove-animation": "cards-block_remove-animation__rkkRZ"
            }
        },
        70787: function(e) {
            e.exports = {
                "hero-section": "hero-block_hero-section__FzF1q",
                "--left": "hero-block_--left__8MJs7",
                "--left-bottom": "hero-block_--left-bottom__8iUA1",
                "--center": "hero-block_--center__CKCrR",
                "--bottom": "hero-block_--bottom__ohKBW",
                content: "hero-block_content__hdcJf",
                "--mobile-light": "hero-block_--mobile-light__xokUp",
                "--mobile-dark": "hero-block_--mobile-dark__p3Jw1",
                desktop: "hero-block_desktop__dGZZG",
                "--desktop-light": "hero-block_--desktop-light__86wQC",
                "--desktop-dark": "hero-block_--desktop-dark__7ajOP",
                mobile: "hero-block_mobile__FE016",
                "button-group": "hero-block_button-group__4ZRgq",
                "desktop-cta": "hero-block_desktop-cta__8jlSi",
                "mobile-cta": "hero-block_mobile-cta__7wdU4",
                media: "hero-block_media__m1SjS",
                "--mobile-gradient": "hero-block_--mobile-gradient__f3yxd",
                "--desktop-gradient": "hero-block_--desktop-gradient___zQST",
                "mobile-overlay-image": "hero-block_mobile-overlay-image__zGOVL",
                "desktop-overlay-image": "hero-block_desktop-overlay-image__AMwx1"
            }
        },
        7631: function(e) {
            e.exports = {
                background: "image-text-block_background__EtgLc",
                container: "image-text-block_container__OdCbN",
                "container--text-only": "image-text-block_container--text-only__iT4es",
                "container--grey": "image-text-block_container--grey___Idsp",
                "container--black": "image-text-block_container--black__wTmMu",
                section: "image-text-block_section__TdExK",
                image: "image-text-block_image__S_Wpc",
                video: "image-text-block_video__rAYfb",
                content: "image-text-block_content__7PTVL",
                copy: "image-text-block_copy__3T_o9",
                "content--grey": "image-text-block_content--grey__mFvFE",
                "content--black": "image-text-block_content--black__wWvtR",
                socials: "image-text-block_socials__tkEDT",
                "section--text-only": "image-text-block_section--text-only__P5rR5",
                reverse: "image-text-block_reverse__apgGS"
            }
        },
        85232: function(e) {
            e.exports = {
                section: "product-block_section__eRrGs",
                header: "product-block_header__tF2_4",
                "product-wrapper": "product-block_product-wrapper__JHtXQ"
            }
        },
        55323: function(e) {
            e.exports = {
                section: "seo-block_section__sBi6I",
                seo: "seo-block_seo__6GTVD"
            }
        },
        75723: function(e) {
            e.exports = {
                "back-to-top": "page_back-to-top__gyv1z"
            }
        }
    }
]);