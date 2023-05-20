self.__BUILD_MANIFEST = function(e, s, c, t, a, n, o, d, i, u, r, p, l) {
    return {
        __rewrites: {
            beforeFiles: [],
            afterFiles: [{
                source: "/:nextInternalLocale(en\\-GB|en\\-AU|en\\-CA|en\\-DK|en\\-FI|fr\\-FR|de\\-DE|nl\\-NL|en\\-NO|en\\-SE|de\\-CH|en\\-US|en\\-EU|en\\-RW)/sitemap:route*.xml",
                destination: "/:nextInternalLocale/api/sitemap"
            }, {
                source: "/:nextInternalLocale(en\\-GB|en\\-AU|en\\-CA|en\\-DK|en\\-FI|fr\\-FR|de\\-DE|nl\\-NL|en\\-NO|en\\-SE|de\\-CH|en\\-US|en\\-EU|en\\-RW)/pages/gdpr-:slug",
                destination: "/:nextInternalLocale/gdpr/:slug"
            }, {
                source: "/:nextInternalLocale(en\\-GB|en\\-AU|en\\-CA|en\\-DK|en\\-FI|fr\\-FR|de\\-DE|nl\\-NL|en\\-NO|en\\-SE|de\\-CH|en\\-US|en\\-EU|en\\-RW)/account/login",
                destination: "/:nextInternalLocale/api/auth/login"
            }, {
                source: "/:nextInternalLocale(en\\-GB|en\\-AU|en\\-CA|en\\-DK|en\\-FI|fr\\-FR|de\\-DE|nl\\-NL|en\\-NO|en\\-SE|de\\-CH|en\\-US|en\\-EU|en\\-RW)/account/register",
                destination: "/:nextInternalLocale/api/auth/login?tab=signup"
            }, {
                source: "/:nextInternalLocale(en\\-GB|en\\-AU|en\\-CA|en\\-DK|en\\-FI|fr\\-FR|de\\-DE|nl\\-NL|en\\-NO|en\\-SE|de\\-CH|en\\-US|en\\-EU|en\\-RW)/account/logout",
                destination: "/:nextInternalLocale/api/auth/logout"
            }, {
                source: "/:nextInternalLocale(en\\-GB|en\\-AU|en\\-CA|en\\-DK|en\\-FI|fr\\-FR|de\\-DE|nl\\-NL|en\\-NO|en\\-SE|de\\-CH|en\\-US|en\\-EU|en\\-RW)/robots.txt",
                destination: "/:nextInternalLocale/api/robots"
            }],
            fallback: []
        },
        "/": [e, t, s, c, d, i, "static/chunks/pages/index-c2f719e965754e75.js"],
        "/500": [u, "static/chunks/pages/500-ba31182c0456eeab.js"],
        "/_error": [e, s, c, u, "static/chunks/pages/_error-2fa4d83432982365.js"],
        "/account": [a, e, s, c, n, o, "static/chunks/pages/account-2506cb83b786455e.js"],
        "/account/addresses": [a, e, s, c, n, o, "static/chunks/pages/account/addresses-9cc86cc1755dddc8.js"],
        "/account/forgotten-password": [a, e, s, c, n, o, "static/chunks/pages/account/forgotten-password-afd7f48fa085cfaa.js"],
        "/account/orders/[id]": [a, e, s, c, n, o, "static/chunks/pages/account/orders/[id]-7a5a0c160bcb8b70.js"],
        "/cart": [e, s, c, "static/chunks/pages/cart-e567b47f39e698e9.js"],
        "/collections/[...collectionSlug]": [e, t, s, c, "static/css/cdce55aa5273112b.css", "static/chunks/pages/collections/[...collectionSlug]-feeb635a6b55fa00.js"],
        "/gdpr/[requestType]": [e, s, c, "static/chunks/pages/gdpr/[requestType]-952ad9ecc4ed93ba.js"],
        "/pages/commitment-to-accessibility": [e, s, c, "static/css/f529bec873a494fc.css", "static/chunks/pages/pages/commitment-to-accessibility-55dd18e1fa15489f.js"],
        "/pages/sign-up-to-our-newsletter": [e, s, c, "static/chunks/pages/pages/sign-up-to-our-newsletter-2f7d5845ba017f6a.js"],
        "/pages/studentbeans": [e, s, c, "static/chunks/pages/pages/studentbeans-d650526354ccd13d.js"],
        "/pages/submit-a-fake": [e, "static/chunks/169-379969c1309ca6e5.js", s, c, "static/css/639d8fc76238ecea.css", "static/chunks/pages/pages/submit-a-fake-d0913b1a7fbea77c.js"],
        "/pages/updated-preferences": [e, t, s, c, d, i, "static/css/5b254eed6f6ad5e0.css", "static/chunks/pages/pages/updated-preferences-a8a092cb80578fc1.js"],
        "/pages/youth-discount": [e, s, c, "static/css/dd2a8a97689b2fc4.css", "static/chunks/pages/pages/youth-discount-06c4f24dae8f6f9f.js"],
        "/pages/[slug]": [e, t, s, c, d, i, "static/chunks/pages/pages/[slug]-0a5f933bde3c18be.js"],
        "/password-protected/login": ["static/css/67923b6c6e9a1c91.css", "static/chunks/pages/password-protected/login-47b9a7b9dec805e3.js"],
        "/products/[productSlug]": [e, s, c, "static/chunks/pages/products/[productSlug]-712e57d0a9cd238a.js"],
        "/search": [e, r, s, c, p, l, "static/chunks/pages/search-97298c8f0f8d3a60.js"],
        "/wishlist": [e, r, s, c, p, l, "static/css/20d839ef44fcea69.css", "static/chunks/pages/wishlist-427a7847bc7f4a24.js"],
        sortedPages: ["/", "/500", "/_app", "/_error", "/account", "/account/addresses", "/account/forgotten-password", "/account/orders/[id]", "/cart", "/collections/[...collectionSlug]", "/gdpr/[requestType]", "/pages/commitment-to-accessibility", "/pages/sign-up-to-our-newsletter", "/pages/studentbeans", "/pages/submit-a-fake", "/pages/updated-preferences", "/pages/youth-discount", "/pages/[slug]", "/password-protected/login", "/products/[productSlug]", "/search", "/wishlist"]
    }
}("static/chunks/172-5cc1e90f43234f94.js", "static/css/6ac29cbeb41d99ba.css", "static/chunks/427-7f056ff1b484b8dc.js", "static/chunks/90-eaf7ff9d82893112.js", "static/chunks/ddf3e784-e84c17a2e2954971.js", "static/css/338ada9d5e91bf5e.css", "static/chunks/167-4c1c66c9d5f93a74.js", "static/css/0cfd60615f410819.css", "static/chunks/549-dd67c2ca70cb3b51.js", "static/css/2c21bf74098f9684.css", "static/chunks/131-32ba42d7534ec058.js", "static/css/a80c1002e15436b8.css", "static/chunks/949-7c3e025324e16001.js"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();