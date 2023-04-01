(window.webpackJsonp = window.webpackJsonp || []).push([
    [7], {
        0: function(n, e) {},
        "03b280d13c7955996505": function(n, e, o) {
            "use strict";
            var t, i = o("8af190b70a6bc55c6f1b"),
                r = o.n(i),
                c = (o("8a2d1b95e05b6a321e74"),
                    o("6938d226fd372a75cbf9")),
                a = o("b912ecc4473ae8a2ff0b"),
                l = o.n(a),
                s = o("e95a63b25fb92ed15721"),
                d = o("1037a6e0d5914309f74c"),
                b = o.n(d),
                f = o("9a0a7af05ba70da6456a"),
                p = o.n(f),
                u = o("ab4cb61bcb2dc161defb"),
                g = o("d7dd51e1bf6bfc2c9c3d"),
                m = o("336be1f03a45da13ce56"),
                h = o.n(m),
                y = o("e777244f8e08c53fe98b"),
                x = o.n(y),
                v = o("9c830e9234ad5c36a7e4"),
                k = o.n(v),
                w = o("432aae369667202efa42"),
                A = o.n(w),
                C = o("572290fc0c3d9f9c7cde"),
                M = o.n(C),
                I = o("c87810b6e820b5433784"),
                S = o.n(I),
                N = o("be638c054224589367e1"),
                j = o.n(N),
                T = o("8eef12c383e3c845d72d"),
                L = o.n(T),
                E = o("80e80f602055becd595c"),
                D = o.n(E),
                O = o("9731344539086d7b0d1d"),
                z = o("9c34ccdbe0206ee16163");
            o("41faec4f9c404c63b15e");

            function P(n, e, o, i) {
                t || (t = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var r = n && n.defaultProps,
                    c = arguments.length - 3;
                if (e || 0 === c || (e = {
                        children: void 0
                    }),
                    1 === c)
                    e.children = i;
                else if (c > 1) {
                    for (var a = new Array(c), l = 0; l < c; l++)
                        a[l] = arguments[l + 3];
                    e.children = a
                }
                if (e && r)
                    for (var s in r)
                        void 0 === e[s] && (e[s] = r[s]);
                else
                    e || (e = r || {});
                return {
                    $$typeof: t,
                    type: n,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: e,
                    _owner: null
                }
            }

            function B() {
                return (B = Object.assign || function(n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var o = arguments[e];
                        for (var t in o)
                            Object.prototype.hasOwnProperty.call(o, t) && (n[t] = o[t])
                    }
                    return n
                }).apply(this, arguments)
            }
            var F = r.a.forwardRef((function(n, e) {
                    return r.a.createElement(s.NavLink, B({
                        to: n.to
                    }, n, {
                        innerRef: e
                    }))
                })),
                R = P(z.Icon, {
                    icon: "ic:outline-fiber-new",
                    color: "#06C1A7",
                    height: "28"
                }),
                J = P(L.a, {}),
                Q = P(D.a, {}),
                Z = P(L.a, {}),
                W = P(D.a, {});
            var Y, G = function(n, e) {
                    return {
                        type: "OPEN_SUBMENU",
                        key: n,
                        keyParent: e
                    }
                },
                U = Object(g.connect)((function(n) {
                    return {
                        force: n,
                        open: n.getIn(["ui", "subMenuOpen"])
                    }
                }), (function(n) {
                    return {
                        openSubMenu: Object(u.bindActionCreators)(G, n)
                    }
                }))((function(n) {
                    var e = n.classes,
                        o = n.openSubMenu,
                        t = n.open,
                        i = n.dataMenu;
                    return n.closeMenuStatus,
                        P("div", {}, void 0, function i(r) {
                            return r.map((function(r, c) {
                                var a = new URL(document.location).searchParams,
                                    s = a.get("chain"),
                                    d = a.get("ref");
                                null == s && (s = "BSC");
                                var b = d ? "?ref=".concat(d, "&chain=").concat(s) : "?chain=".concat(s);
                                return r.newItem ? P("div", {}, c.toString(), P(x.a, {
                                    button: !0,
                                    component: F,
                                    to: r.linkParent ? r.linkParent + b : b,
                                    className: l()(e.head, r.icon ? e.iconed : "", t.indexOf(r.key) > -1 ? e.opened : ""),
                                    onClick: function() {
                                        r.isNavLink && n.toggleDrawerOpen(),
                                            o(r.key, r.keyParent)
                                    }
                                }, void 0, r.icon && P(k.a, {
                                    className: e.icon
                                }, void 0, P(z.Icon, {
                                    icon: r.icon
                                })), P(A.a, {
                                    classes: {
                                        primary: e.primary
                                    },
                                    variant: "inset"
                                }, void 0, r.name, " ", R), !r.linkParent && P("span", {}, void 0, t.indexOf(r.key) > -1 ? J : Q)), !r.linkParent && P(S.a, {
                                    component: "div",
                                    className: l()(e.nolist, r.keyParent ? e.child : ""),
                                    in: t.indexOf(r.key) > -1,
                                    timeout: "auto",
                                    unmountOnExit: !0
                                }, void 0, P(h.a, {
                                    className: e.dense,
                                    component: "nav",
                                    dense: !0
                                }, void 0, i(r.child)))) : r.child || r.linkParent ? P("div", {}, c.toString(), P(x.a, {
                                    button: !0,
                                    component: F,
                                    to: r.linkParent ? r.linkParent + b : b,
                                    className: l()(e.head, r.icon ? e.iconed : "", t.indexOf(r.key) > -1 ? e.opened : ""),
                                    onClick: function() {
                                        r.isNavLink && n.toggleDrawerOpen(),
                                            o(r.key, r.keyParent)
                                    }
                                }, void 0, r.icon && P(k.a, {
                                    className: e.icon
                                }, void 0, P(z.Icon, {
                                    icon: r.icon
                                })), P(A.a, {
                                    classes: {
                                        primary: e.primary
                                    },
                                    variant: "inset"
                                }, void 0, r.name), !r.linkParent && P("span", {}, void 0, t.indexOf(r.key) > -1 ? Z : W)), !r.linkParent && P(S.a, {
                                    component: "div",
                                    className: l()(e.nolist, r.keyParent ? e.child : ""),
                                    in: t.indexOf(r.key) > -1,
                                    timeout: "auto",
                                    unmountOnExit: !0
                                }, void 0, P(h.a, {
                                    className: e.dense,
                                    component: "nav",
                                    dense: !0
                                }, void 0, i(r.child)))) : r.title ? P(M.a, {
                                    disableSticky: !0,
                                    component: "div",
                                    className: e.title
                                }, c.toString(), r.name) : P(x.a, {
                                    button: !0,
                                    exact: !0,
                                    className: e.nested,
                                    activeClassName: e.active,
                                    component: F,
                                    to: r.link + b,
                                    onClick: function() {
                                        return e = n.toggleDrawerOpen,
                                            o = n.loadTransition,
                                            e(),
                                            void o(!1);
                                        var e, o
                                    }
                                }, c.toString(), P(A.a, {
                                    classes: {
                                        primary: e.primary
                                    },
                                    inset: !0,
                                    primary: r.name
                                }), r.badge && P(j.a, {
                                    color: "primary",
                                    label: r.badge,
                                    className: e.badge
                                }))
                            }))
                        }(i))
                })),
                V = Object(c.withStyles)(O.a)(U),
                H = o("0d939196e59ed73c94e6");

            function X(n, e, o, t) {
                Y || (Y = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var i = n && n.defaultProps,
                    r = arguments.length - 3;
                if (e || 0 === r || (e = {
                        children: void 0
                    }),
                    1 === r)
                    e.children = t;
                else if (r > 1) {
                    for (var c = new Array(r), a = 0; a < r; a++)
                        c[a] = arguments[a + 3];
                    e.children = c
                }
                if (e && i)
                    for (var l in i)
                        void 0 === e[l] && (e[l] = i[l]);
                else
                    e || (e = i || {});
                return {
                    $$typeof: Y,
                    type: n,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: e,
                    _owner: null
                }
            }

            function q(n, e) {
                return function(n) {
                    if (Array.isArray(n))
                        return n
                }(n) || function(n, e) {
                    var o = null == n ? null : "undefined" !== typeof Symbol && n[Symbol.iterator] || n["@@iterator"];
                    if (null == o)
                        return;
                    var t, i, r = [],
                        c = !0,
                        a = !1;
                    try {
                        for (o = o.call(n); !(c = (t = o.next()).done) && (r.push(t.value), !e || r.length !== e); c = !0)
                        ;
                    } catch (n) {
                        a = !0,
                            i = n
                    } finally {
                        try {
                            c || null == o.return || o.return()
                        } finally {
                            if (a)
                                throw i
                        }
                    }
                    return r
                }(n, e) || function(n, e) {
                    if (!n)
                        return;
                    if ("string" === typeof n)
                        return K(n, e);
                    var o = Object.prototype.toString.call(n).slice(8, -1);
                    "Object" === o && n.constructor && (o = n.constructor.name);
                    if ("Map" === o || "Set" === o)
                        return Array.from(n);
                    if ("Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
                        return K(n, e)
                }(n, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function K(n, e) {
                (null == e || e > n.length) && (e = n.length);
                for (var o = 0, t = new Array(e); o < e; o++)
                    t[o] = n[o];
                return t
            }
            var _ = X(H.Divider, {
                    variant: "middle"
                }),
                $ = X("a", {
                    href: "https://archives.dx.app/",
                    target: "_blank"
                }, void 0, " ", X(H.Chip, {
                    label: "Archives",
                    color: "primary",
                    variant: "outlined"
                }));

            function nn(n) {
                var e = q(Object(i.useState)(0), 2),
                    o = (e[0],
                        e[1]),
                    t = function(n) {
                        var e = n.target.scrollTop;
                        o(e)
                    };
                Object(i.useEffect)((function() {
                    var n = document.getElementById("sidebar");
                    return n.addEventListener("scroll", t),
                        function() {
                            n.removeEventListener("scroll", t)
                        }
                }), []);
                var r = n.classes,
                    c = n.turnDarker,
                    a = n.drawerPaper,
                    d = n.toggleDrawerOpen,
                    f = n.loadTransition,
                    u = n.leftSidebar,
                    g = n.dataMenu,
                    m = n.isLogin,
                    h = n.closeMenuStatus;
                return X("div", {
                    className: l()(r.drawerInner, a ? "" : r.drawerPaperClose)
                }, void 0, X("div", {
                    id: "sidebar",
                    className: l()(r.menuContainer, u && r.rounded, m && r.withProfile)
                }, void 0, X(V, {
                    loadTransition: f,
                    dataMenu: g,
                    toggleDrawerOpen: d,
                    closeMenuStatus: h
                }), _, X("div", {
                    style: {
                        display: "flex",
                        marginTop: "20px",
                        justifyContent: "center"
                    }
                }, void 0, $)), X("div", {
                    className: r.drawerHeader
                }, void 0, X(s.NavLink, {
                    to: "/app",
                    className: l()(r.brand, r.brandBar, c && r.darker)
                }, void 0, X("img", {
                    src: p.a,
                    alt: b.a.name
                }), X("span", {
                    style: {
                        fontSize: "80%",
                        fontWeight: "bold",
                        color: "#51adf6"
                    }
                }, void 0, "V4"))))
            }
            nn.defaultProps = {
                turnDarker: !1,
                toggleDrawerOpen: function() {},
                loadTransition: function() {},
                closeMenuStatus: function() {},
                anchorEl: null,
                isLogin: !0
            };
            e.a = Object(c.withStyles)(O.a)(nn)
        },
        "0785de3f40b134973d35": function(n, e, o) {
            var t = o("ab039aecd4a1d4fedc0e").addLocaleData,
                i = o("58d82b287428be065a42"),
                r = o("529d37966b19afdce782"),
                c = o("7dd68a64079d1d4cd439"),
                a = o("2e499298bcfce3b3045c");
            t(i),
                t(r);
            var l = function n(e, o) {
                    var t = "en" !== e ? n("en", c) : {};
                    return Object.keys(o).reduce((function(n, i) {
                        var r = o[i] || "en" === e ? o[i] : t[i];
                        return Object.assign(n, function(n, e, o) {
                            return e in n ? Object.defineProperty(n, e, {
                                    value: o,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : n[e] = o,
                                n
                        }({}, i, r))
                    }), {})
                },
                s = {
                    en: l("en", c),
                    de: l("de", a)
                };
            e.appLocales = ["en", "de"],
                e.formatTranslationMessages = l,
                e.translationMessages = s,
                e.DEFAULT_LOCALE = "en"
        },
        "0831e06f5b798810af4b": function(n, e, o) {
            n.exports = o.p + "99b8b0a673e602ef32c5bee5eeb7d39c.svg"
        },
        "0cbc23df16a5c6ceec4d": function(n, e, o) {
            n.exports = o.p + ".htaccess"
        },
        "1037a6e0d5914309f74c": function(n, e) {
            n.exports = {
                name: "Dx",
                desc: "A decentralized DeFi Platform",
                prefix: "Dx",
                footerText: "Dx 2021",
                logoText: "Dx"
            }
        },
        "11ec301131ba0a159504": function(n, e, o) {
            n.exports = o.p + "aee06baf85ea5f336afc323e216b7411.woff"
        },
        "18e5e4c6c5b9d9db99d8": function(n, e, o) {
            (n.exports = o("0e326f80368fd0b1333e")(!1)).push([n.i, ".sidebar-btm-container {\n  margin-top: 5%;\n  /* background-color: red; */\n}\n\n.tester {\n  background-color: blue;\n  color: teal;\n}\n\n@keyframes shake {\n  0% { transform: translate(1px, 1px) rotate(0deg); }\n  10% { transform: translate(-1px, -2px) rotate(-1deg); }\n  20% { transform: translate(-3px, 0px) rotate(1deg); }\n  30% { transform: translate(3px, 2px) rotate(0deg); }\n  40% { transform: translate(1px, -1px) rotate(1deg); }\n  50% { transform: translate(-1px, 2px) rotate(-1deg); }\n  60% { transform: translate(-3px, 1px) rotate(0deg); }\n  70% { transform: translate(3px, 1px) rotate(-1deg); }\n  80% { transform: translate(-1px, -1px) rotate(1deg); }\n  90% { transform: translate(1px, 2px) rotate(0deg); }\n  100% { transform: translate(1px, -2px) rotate(-1deg); }\n}\n", ""])
        },
        "1d8e0bfdbaced0d12266": function(n, e, o) {
            n.exports = o.p + "favicon.ico"
        },
        2: function(n, e, o) {
            o("5b15df55c1316f23e9d0"),
                n.exports = o("8b703812aa8ae3c41814")
        },
        "2016427df3ea7ebdba8e": function(n, e, o) {
            n.exports = o.p + "c74f807fc25f4c9b60157b1c677c7d07.ttf"
        },
        "223c386a802e79b70f02": function(n, e, o) {
            n.exports = o.p + "2e3e00915d591db0a4274dff874c7204.eot"
        },
        "27ee4cbfb80567b90d7f": function(n, e) {
            n.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzMDAgNDcuMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzAwIDQ3LjE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojMzAzMDMxO30KPC9zdHlsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTMwMCw0Ni45TDAsNDcuMVY4LjljMCwwLDIxLjEsMTQuMyw2NS4yLDE0LjFjNDAuNi0wLjIsNzYuNC0yMywxMjgtMjNDMjQzLjMsMCwzMDAsMTYuNCwzMDAsMTYuNFY0Ni45eiIvPgo8L3N2Zz4K"
        },
        "29a0bd83601ce40a59e6": function(n, e) {
            n.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAWuSURBVHgB1VpNUBxVEO43u/yoBCY5WaXsLjkaCODJMkuxlJdIeYCbyiF4MhsPUF4kXggHA54Ay4BelBh+PBlS+anyoCw/qcpJFtCrzFJeLWYVBPav7X67M8wu+5flJztf1ey+edPvve7X3W/e6x4BJwS1utoD0QpfArGZbn0ChIqAKj8yaKhOA4EaIgRRYDAajy/uw74GJwABx4AKqppQYv3E4DVi2gMlATViYz6SiI0fR6iSBFGdNT6a1UG6fHCCoMmYiibiQ6UI9FyCkAY8cREbFQK64BRRikCOYglrlVf6ya7nSIgWOGWQqbY4hOiqVCr1CEbXimlTlCC1Ss0YdT9IxWo4MwiVBOqqEJVqBCM/F6TO9zDlzAtUPHUt5AWtcgo6O3TQ9VwkOQUpGyEMFBBGydWurIRgkG8mhOQpK7L6SNInTndlKgkCXs3lM0cEOec410v2NgxlCuLtrSpRET7A6LOM+kPweyKhxEl9pb6lzww67QRare+ZNB8hIQZtIARDrRDOUWuFqZGkNmKbYCMkEtCxAzsBLpsaSWrDXqBdhsmz1IgdtWFASTjP87tFaoSE6AObwuA9ZVqi/N4ZRQN7+VfY2awM0FLsUeKOuA9sjgqHw6eI5Bnb1hAoWpx8UKIjq8Tkd9+A1+dNIwrrYfC+eQWKBfexHFiG2R9m0upnf5qDppYms8+N4AYMfPqZLGfDh9d6oE6tg8nxCSgIOnI7AYWHS4yJ8Tswc3ca/H2fgMvtgpt5BsoFl8clr0ywEFLAuzMpwX6kRVOnMQay9uNtbzPYMlGnqsRPll28oGgN7XQx85qemsalhSXz/oPu91Hf1lHb1DC0GcLGhkuyfnjotqzXt7dxhtrUX3gNlwNLuB5cl/UMbsu0IU3D27e+kOX6C6/TfQjvjH2NjRcvyTbct9FPZ8e7aIDbMP0hjS7HzeB5uyhBeNDrvR/L8sP5hzj9/eFgjQ1vSAGY0c6Oq3LA6al7qX7uSXpDEGbC+Of+ue2V1rdNAa19Mg88DtezwGura2k0PKaVZycUYypkZv7+G0m7PV8HK9qyrN/SQrAV2kqazsVGs82WtmX+e9vdZj2bLZvW7P05eLq0Itu6yEndHjes/PYU9O3sZswmpdK4j355Iu/ZRDPBgrDRqZADzAz7ycjQMDx+8Aiami/T1SSZ4AFcbjeVQ7Dx5x/g/+g65IN08rUNovPD41+fSIa87V7ZHy8o7BdtvrYsPNCEaS54751OeX9z8PMjNApFKvSjA6ZX8eoyMjoiB5+9PwvhcBhWFpflDPNMbv39F5DvEJPrklljgchcKAxNcVu+/H036H+FFoLLsm9/n19OCt/z857eHpqg32HyqwlpAUzDY9W76zP6Rk2Qfa1ClrM5L32ZjLCJGaZkpbMyndnOuM/Wn/WZ0YeVLlvf1ntTDIQAC8IHlH6wN8YURYiiInnlDExgUIG4IwA2RxTiiwodSjSZt7ArEDUOQsjzCEe/wa4QYl7+8U8qPLoNNgSdRRpMjfCZl5cwsBnYkozYlhkOqoEan6LAAtgIhja4bIaDOD5EWpkHm8CqDUaWkGlsFfLsvcoCtFJFMN5hFSQtiE0P9CqsOKCV4CqUMchy+v+DvUVr3ZFo/AFEn3HonqPeUIagMOnYDux+mVmfM2NVK2gzKcoo0cOgrNU/uNOa7VHOjBWnubghlAtSqbdcjwsnQznd9aI1U0QyNG96mpx//wAi375In2Gf+Bd2upmXfHRF5dk5Z1eJVSFO5JN2zmZpRtDjiAO7sDtUDHnRXz5EIBJ8CV5+gEJ+8XOqpsYv5ijGuvdgr+CHAgZK+6gmmWscNCLhJwXe79F1i3YZi8/b9rifOXlkfgIpLSFKzD2i0BKIU05wjudz5kI4liBWyC+HIO4TCjbTrLaQP3nShEMOO3HEBnUaNYAJEYxCNEBOHIITwP9ccVAM8EyPVQAAAABJRU5ErkJggg=="
        },
        "2e499298bcfce3b3045c": function(n) {
            n.exports = {
                "boilerplate.components.Footer.author.message": "Mit Liebe gemacht von {author}.",
                "boilerplate.components.Footer.license.message": "Dieses Projekt wird unter der MIT-Lizenz ver\xf6ffentlicht.",
                "boilerplate.components.Header.features": "",
                "boilerplate.components.Header.home": "",
                "boilerplate.containers.FeaturePage.css.header": "",
                "boilerplate.containers.FeaturePage.css.message": "Die n\xe4chste Generation von CSS",
                "boilerplate.containers.FeaturePage.feedback.header": "Sofortiges Feedback",
                "boilerplate.containers.FeaturePage.feedback.message": "Genie\xdfen Sie die beste Entwicklungserfahrung und programmieren Sie Ihre App so schnell wie noch nie! Ihre \xc4nderungen an dem CSS und JavaScript sind sofort reflektiert, ohne die Seite aktualisieren zu m\xfcssen. So bleibt der Anwendungszustand bestehen, auch wenn Sie etwas in dem darunter liegenden Code aktualisieren!",
                "boilerplate.containers.FeaturePage.header": "",
                "boilerplate.containers.FeaturePage.internationalization.header": "Komplette i18n Standard-Internationalisierung und Pluralisierung",
                "boilerplate.containers.FeaturePage.internationalization.message": "Das Internet ist global. Mehrsprachige- und Pluralisierungsunterst\xfctzung ist entscheidend f\xfcr gro\xdfe Web-Anwendungen.",
                "boilerplate.containers.FeaturePage.javascript.header": "Das Internet ist global. Mehrsprachige- und Pluralisierungsunterst\xfctzung ist entscheidend f\xfcr gro\xdfe Web-Anwendungen.",
                "boilerplate.containers.FeaturePage.javascript.message": "Benutzen Sie ES6 template strings, object destructuring, arrow functions, JSX syntax und mehr, heute.",
                "boilerplate.containers.FeaturePage.network.header": "",
                "boilerplate.containers.FeaturePage.network.message": "The next frontier in performant web apps: availability without a\n      network connection from the instant your users load the app.",
                "boilerplate.containers.FeaturePage.routing.header": "Standard Routing",
                "boilerplate.containers.FeaturePage.routing.message": "Schreiben Sie CSS, das am selben Ort wie ihre Komponenten ist. Deterministisch generierte, einzigartige Klassennamen halten die Spezifit\xe4t niedrig w\xe4hrend styling Konflikte vermieden werden. Senden Sie nur das CSS an ihre Benutzer welches dann wirklich sichtbar ist f\xfcr die schnellste Performance!",
                "boilerplate.containers.FeaturePage.scaffolding.header": "Schnelles Scaffolding",
                "boilerplate.containers.FeaturePage.scaffolding.message": "Automatisieren Sie die Kreation von Komponenten, Containern, Routen, Selektoren und Sagas \u2013 und ihre Tests \u2013 direkt von dem Terminal!",
                "boilerplate.containers.FeaturePage.state_management.header": "Berechenbare Stateverwaltung",
                "boilerplate.containers.FeaturePage.state_management.message": "Unidirectional data flow erlaubt uns alle \xc4nderungen ihrer Applikation zu loggen und time travel debugging einzusetzen.",
                "boilerplate.containers.HomePage.start_project.header": "Beginnen Sie Ihr n\xe4chstes React Projekt in Sekunden",
                "boilerplate.containers.HomePage.start_project.message": "Ein skalierendes, offline-first Fundament mit der besten DX und einem Fokus auf Performance und bew\xe4hrte Methoden",
                "boilerplate.containers.HomePage.tryme.atPrefix": "",
                "boilerplate.containers.HomePage.tryme.header": "Probiere mich!",
                "boilerplate.containers.HomePage.tryme.message": "Zeige die Github Repositories von",
                "boilerplate.containers.LocaleToggle.de": "",
                "boilerplate.containers.LocaleToggle.en": "",
                "boilerplate.containers.NotFoundPage.header": "Seite nicht gefunden."
            }
        },
        3: function(n, e) {},
        "347764a13df7d492f3c9": function(n, e, o) {
            (e = n.exports = o("0e326f80368fd0b1333e")(!1)).push([n.i, "/**\n * Retrieves a color value from the $material-colors Sass map\n * Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette/\n *\n * @function\n * @param {string} color-name             - quoted, lower-case, dasherized color\n *                                          name (e.g. 'pink', 'amber')\n * @param {string} [color-variant='500']  - quoted, lowercase color variant (e.g.\n *                                          '200', 'a100')\n */\n.bgInfo__s5-ty div {\n  background: #64b5f6;\n}\n\n.bgSuccess__2lduF div {\n  background: #81c784;\n}\n\n.bgWarning__3XA-f div {\n  background: #ffb74d;\n}\n\n.bgError__3fMak div {\n  background: #e57373;\n}\n\n.bgDefault__TURBt div {\n  background: #616161;\n}\n", ""]),
                e.locals = {
                    bgInfo: "bgInfo__s5-ty",
                    bgSuccess: "bgSuccess__2lduF",
                    bgWarning: "bgWarning__3XA-f",
                    bgError: "bgError__3fMak",
                    bgDefault: "bgDefault__TURBt"
                }
        },
        "3567f8229efe691bb9de": function(n, e, o) {
            (n.exports = o("0e326f80368fd0b1333e")(!1)).push([n.i, ".ui-colors {\n  color: #2196F3 /*primary*/\n         #9aa4b3 /*text*/\n         #657180 /*dark grey text*/\n         #424e65 /*dm lighter color content highlight sections*/\n         #1e2735 /*dm elements like cards, paper etc*/\n         #061121 /*dm dark background color*/\n         #1a1e27 /*dm main background color*/\n         rgb(33, 150, 243, 0.4) /*dm button background*/\n         #51adf6 /*dm button hover background*/\n         #CCD7E9 /*dm text*/\n}\n\n/* Socials */\n#top-social {\n  display: -ms-flexbox;\n  display: flex;\n  justify-content: center;\n  margin: 0;\n}\n#top-social li {\n  position: relative;\n  list-style: none;\n  border-left: 0px solid #eeeeee;\n}\n#top-social li:first-child {\n  border-left: 0 !important;\n}\n#top-social li .ts-icon,\n#top-social li .ts-text {\n  display: block;\n  -ms-flex-preferred-size: 0;\n  flex-basis: 0;\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  height: 22px;\n  line-height: 22px;\n}\n#top-social li .ts-icon {\n  width: 40px;\n  text-align: center;\n  font-size: 0.875rem;\n}\n#top-social li .ts-text {\n  max-width: 0;\n  white-space: nowrap;\n  -webkit-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n}\n#top-social li a:hover .ts-text {\n  max-width: 200px;\n  padding-right: 12px;\n  -webkit-transition: all 0.4s ease;\n  transition: all 0.4s ease;\n}\n#top-social a {\n  display: -ms-flexbox;\n  display: flex;\n  width: auto;\n  overflow: hidden;\n  font-weight: bold;\n  color: #ffffff;\n}\n#top-social a:hover {\n  color: #fff !important;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);\n}\n\n.social-icon {\n  margin: 0 5px 5px 0;\n  width: 40px;\n  height: 40px;\n  font-size: 1.25rem;\n  line-height: 38px !important;\n  color: #555555;\n  text-shadow: none;\n  border: 1px solid #aaaaaa;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.d-flex > .social-icon,\n.d-sm-flex > .social-icon,\n.d-md-flex > .social-icon,\n.d-lg-flex > .social-icon,\n.d-xl-flex > .social-icon {\n  float: none;\n}\n.social-icon i {\n  display: block;\n  position: relative;\n}\nbody:not(.device-touch) .social-icon i {\n  -webkit-transition: all 0.3s ease;\n  -o-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n.social-icon i:last-child {\n  color: #fff !important;\n}\n.social-icon:hover i:first-child {\n  /* margin-top: -38px; */\n}\n.social-icon.si-large {\n  margin: 0 10px 10px 0;\n  width: 56px;\n  height: 56px;\n  font-size: 30px;\n  line-height: 54px !important;\n}\n.social-icon.si-large:hover i:first-child {\n  /* margin-top: -54px; */\n}\n.social-icon.si-small {\n  width: 32px;\n  height: 32px;\n  font-size: 14px;\n  line-height: 30px !important;\n}\n.social-icon.si-small:hover i:first-child {\n  /* margin-top: -30px; */\n}\n.social-icon:hover {\n  color: #555555;\n  border-color: transparent;\n}\n.social-icon.si-colored {\n  border-color: transparent;\n}\n\n", ""])
        },
        "369440987c47420c551d": function(n, e, o) {
            n.exports = o.p + "7837391660df4b0f44f059d48d02e4ba.gif"
        },
        "3b9cb77b6401dd134077": function(n, e) {
            n.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTM0IiBoZWlnaHQ9IjEzNCIgdmlld0JveD0iMCAwIDEzNCAxMzQiPgogIDxkZWZzPgogICAgPGZpbHRlciBpZD0iUmVjdGFuZ2xlXzEiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMzQiIGhlaWdodD0iMTM0IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8ZmVPZmZzZXQgZHk9IjMiIGlucHV0PSJTb3VyY2VBbHBoYSIvPgogICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIzIiByZXN1bHQ9ImJsdXIiLz4KICAgICAgPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMC4xNjEiLz4KICAgICAgPGZlQ29tcG9zaXRlIG9wZXJhdG9yPSJpbiIgaW4yPSJibHVyIi8+CiAgICAgIDxmZUNvbXBvc2l0ZSBpbj0iU291cmNlR3JhcGhpYyIvPgogICAgPC9maWx0ZXI+CiAgPC9kZWZzPgogIDxnIGlkPSJHcm91cF8zIiBkYXRhLW5hbWU9Ikdyb3VwIDMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIgLTIpIj4KICAgIDxnIGlkPSJHcm91cF8xIiBkYXRhLW5hbWU9Ikdyb3VwIDEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDcgOCkiPgogICAgICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLCAwLCAwLCAxLCAtOSwgLTYpIiBmaWx0ZXI9InVybCgjUmVjdGFuZ2xlXzEpIj4KICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlXzEtMiIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgMSIgd2lkdGg9IjExNiIgaGVpZ2h0PSIxMTYiIHJ4PSIyMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOSA2KSIgZmlsbD0iI2ZmZiIvPgogICAgICA8L2c+CiAgICAgIDxnIGlkPSJHcm91cF8xLTIiIGRhdGEtbmFtZT0iR3JvdXAgMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzYuMjYxIDM1LjUyNCkiIG9wYWNpdHk9IjAuOTk5IiBzdHlsZT0iaXNvbGF0aW9uOiBpc29sYXRlIj4KICAgICAgICA8dGV4dCBpZD0iRHgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00IDM3LjUpIiBmb250LXNpemU9IjQ1IiBmb250LWZhbWlseT0iQmFobnNjaHJpZnQiIGZvbnQtd2VpZ2h0PSI2MDAiPjx0c3BhbiB4PSIwIiB5PSIwIj5EeDwvdHNwYW4+PC90ZXh0PgogICAgICA8L2c+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K"
        },
        "3f28c8d3a90f76203810": function(n, e, o) {
            n.exports = o.p + "145814c17606a16dbd33c7652508886e.png"
        },
        "3f46a6218bc9ef19bec6": function(n, e, o) {
            var t = o("6df34197578e4e374faf");
            "string" === typeof t && (t = [
                [n.i, t, ""]
            ]);
            var i = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            o("1e4534d1d62a11482e97")(t, i);
            t.locals && (n.exports = t.locals)
        },
        4: function(n, e) {},
        "41faec4f9c404c63b15e": function(n, e, o) {
            var t = o("18e5e4c6c5b9d9db99d8");
            "string" === typeof t && (t = [
                [n.i, t, ""]
            ]);
            var i = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            o("1e4534d1d62a11482e97")(t, i);
            t.locals && (n.exports = t.locals)
        },
        "4450cc78ff21b2cfaf67": function(n, e, o) {
            var t = o("5c11c196d90771da1367");
            "string" === typeof t && (t = [
                [n.i, t, ""]
            ]);
            var i = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            o("1e4534d1d62a11482e97")(t, i);
            t.locals && (n.exports = t.locals)
        },
        "48c47d39618c1de84788": function(n, e, o) {
            (e = n.exports = o("0e326f80368fd0b1333e")(!1)).push([n.i, "/**\n * Retrieves a color value from the $material-colors Sass map\n * Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette/\n *\n * @function\n * @param {string} color-name             - quoted, lower-case, dasherized color\n *                                          name (e.g. 'pink', 'amber')\n * @param {string} [color-variant='500']  - quoted, lowercase color variant (e.g.\n *                                          '200', 'a100')\n */\n.bgGovernance__3LR8c,\ndiv.bgGovernance__3LR8c {\n  background: #fff9c4;\n}\n\n.bgGovernance__3LR8c button,\ndiv.bgGovernance__3LR8c button {\n  color: #f57f17;\n}\n\n.bgPending__XWSCR,\ndiv.bgPending__XWSCR {\n  background: #b2ebf2;\n}\n\n.bgPending__XWSCR button,\ndiv.bgPending__XWSCR button {\n  color: #006064;\n}\n\n.bgInfo__14Qno,\ndiv.bgInfo__14Qno {\n  background: #bbdefb;\n}\n\n.bgInfo__14Qno button,\ndiv.bgInfo__14Qno button {\n  color: #0d47a1;\n}\n\n.bgSuccess__2_usN,\ndiv.bgSuccess__2_usN {\n  background: #e8f5e9;\n}\n\n.bgSuccess__2_usN button,\ndiv.bgSuccess__2_usN button {\n  color: #1b5e20;\n}\n\n.bgWarning__3WPH-,\ndiv.bgWarning__3WPH- {\n  background: #eeeeee;\n}\n\n.bgWarning__3WPH- button,\ndiv.bgWarning__3WPH- button {\n  color: #212121;\n}\n\n.bgError__sfkLL,\ndiv.bgError__sfkLL {\n  background: #ffcdd2;\n}\n\n.bgError__sfkLL button,\ndiv.bgError__sfkLL button {\n  color: #f44336;\n}\n\n.bgDefault__529O2,\ndiv.bgDefault__529O2 {\n  background: #616161;\n}\n\ntable tr.bgInfo__14Qno {\n  background: #e3f2fd;\n}\n\ntable tr.bgInfo__14Qno td {\n  color: #2196f3;\n}\n\ntable tr.bgSuccess__2_usN {\n  background: #e8f5e9;\n}\n\ntable tr.bgSuccess__2_usN td {\n  color: #4caf50;\n}\n\ntable tr.bgWarning__3WPH- {\n  background: #fff3e0;\n}\n\ntable tr.bgWarning__3WPH- td {\n  color: #ff9800;\n}\n\ntable tr.bgError__sfkLL {\n  background: #ffebee;\n}\n\ntable tr.bgError__sfkLL td {\n  color: #f44336;\n}\n\ntable tr.bgDefault__529O2 {\n  background: #fff;\n}\n\ntable tr.bgDefault__529O2 td {\n  color: #212121;\n}\n\n.messageInfo__SGNdb {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 10px;\n  background: none;\n  border: none;\n}\n\n.messageInfo__SGNdb .icon__2vEt1 {\n  background: #64b5f6;\n}\n\n.messageSuccess__1g7Sr {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 10px;\n  background: none;\n  border: none;\n}\n\n.messageSuccess__1g7Sr .icon__2vEt1 {\n  background: #81c784;\n}\n\n.messageWarning__2Fiwl {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 10px;\n  background: none;\n  border: none;\n}\n\n.messageWarning__2Fiwl .icon__2vEt1 {\n  background: #ffb74d;\n}\n\n.messageError__3DJND {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 10px;\n  background: none;\n  border: none;\n}\n\n.messageError__3DJND .icon__2vEt1 {\n  background: #e57373;\n}\n\n.messageDefault__3hsMB {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 10px;\n  background: none;\n  border: none;\n}\n\n.messageDefault__3hsMB .icon__2vEt1 {\n  background: #e0e0e0;\n}\n", ""]),
                e.locals = {
                    bgGovernance: "bgGovernance__3LR8c",
                    bgPending: "bgPending__XWSCR",
                    bgInfo: "bgInfo__14Qno",
                    bgSuccess: "bgSuccess__2_usN",
                    bgWarning: "bgWarning__3WPH-",
                    bgError: "bgError__sfkLL",
                    bgDefault: "bgDefault__529O2",
                    messageInfo: "messageInfo__SGNdb",
                    icon: "icon__2vEt1",
                    messageSuccess: "messageSuccess__1g7Sr",
                    messageWarning: "messageWarning__2Fiwl",
                    messageError: "messageError__3DJND",
                    messageDefault: "messageDefault__3hsMB"
                }
        },
        "4ac45f26c1b39a85d229": function(n, e, o) {
            n.exports = o.p + "28deedabc4d38266209d9de6a244e2b5.png"
        },
        "4b6880e02e792d319abe": function(n, e, o) {
            n.exports = o.p + "596814caa4fbaecbf5014bcfe8e363fb.ttf"
        },
        "4dd2a92e69dcbe1bab10": function(n, e, o) {
            "use strict";
            var t = o("8af190b70a6bc55c6f1b"),
                i = o.n(t),
                r = (o("8a2d1b95e05b6a321e74"),
                    o("6938d226fd372a75cbf9")),
                c = o("435859b6b76fb67a754a"),
                a = o.n(c),
                l = o("921c0b8c557fe6ba5da8"),
                s = o.n(l),
                d = o("be638c054224589367e1"),
                b = o.n(d),
                f = o("c82f135c42c3c148fae5"),
                p = o.n(f),
                u = o("b912ecc4473ae8a2ff0b"),
                g = o.n(u),
                m = o("ff6e9e4426c40f54986b"),
                h = o.n(m),
                y = o("b27e083e7741c2dccb3f"),
                x = o.n(y),
                v = o("b02fe3f80d4238b52f20"),
                k = o.n(v),
                w = o("e95a63b25fb92ed15721"),
                A = o("2e6203f54f25f851cd3c"),
                C = o.n(A),
                M = o("2aea235afd5c55b8b19b"),
                I = o.n(M),
                S = o("9c34ccdbe0206ee16163"),
                N = o("f9490eacf75fbbd31de8"),
                j = o("65cc170443ce25a629f0"),
                T = o("5d5132055e0156eab4de"),
                L = o.n(T),
                E = o("1f77ad992887d96bf5d9"),
                D = o.n(E),
                O = o("e4449fa5d9288ba0b50e"),
                z = o.n(O),
                P = o("b4198646ff0c3202dded"),
                B = o.n(P),
                F = o("1f6626b7f0d6a759a3dd"),
                R = o.n(F),
                J = o("c538fa98c1201b32fc57"),
                Q = o.n(J),
                Z = o("6a1ee81a5a3ce53ccfdc"),
                W = o.n(Z),
                Y = [L.a[400], D.a[500], Q.a[500], B.a[500], z.a[600], R.a[600], W.a.A200],
                G = o("b0c37be7de20d933b466"),
                U = o("539e6a99d006e79c3a40"),
                V = o("c043cc14cfc50e8a9a6c"),
                H = o.n(V),
                X = o("03027ef652f840147476"),
                q = o.n(X);

            function K(n, e, o) {
                return e in n ? Object.defineProperty(n, e, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : n[e] = o,
                    n
            }
            var _ = function(n) {
                    var e, o, t, i, r;
                    return {
                        rootCounter: {
                            flexGrow: 1
                        },
                        rootCounterFull: {
                            flexGrow: 1
                        },
                        rootContact: {
                            flexGrow: 1,
                            width: "100%",
                            backgroundColor: n.palette.background.paper,
                            overflow: "hidden",
                            "& header + div": {
                                padding: "8px !important"
                            }
                        },
                        divider: {
                            margin: "".concat(n.spacing(3), "px 0")
                        },
                        dividerBig: {
                            margin: "".concat(n.spacing(2), "px 0")
                        },
                        centerItem: {},
                        smallTitle: {
                            padding: "0 ".concat(n.spacing(2), "px"),
                            color: "dark" === n.palette.type ? n.palette.primary.light : n.palette.primary.dark
                        },
                        leftIcon: {
                            marginRight: n.spacing(1)
                        },
                        secondaryWrap: {
                            padding: "1px ".concat(n.spacing(2), "px"),
                            borderRadius: 4,
                            justifyContent: "space-around",
                            "& > $centerItem": {
                                position: "relative",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center"
                            },
                            "& li": {
                                marginBottom: 30
                            },
                            "& $chip": {
                                top: 50,
                                position: "absolute",
                                fontSize: 11,
                                fontWeight: 400
                            },
                            "& $centerImg": {
                                top: 1,
                                position: "absolute",
                                fontSize: 11,
                                fontWeight: 400
                            }
                        },
                        bigResume: (e = {
                                marginBottom: n.spacing(5),
                                justifyContent: "space-between",
                                display: "flex"
                            },
                            K(e, n.breakpoints.down("xs"), {
                                height: 160,
                                display: "block"
                            }),
                            K(e, "& li", K({
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-start"
                            }, n.breakpoints.down("xs"), {
                                paddingRight: 0,
                                paddingBottom: n.spacing(2),
                                width: "50%",
                                float: "left"
                            })),
                            K(e, "& $avatar", K({}, n.breakpoints.up("sm"), {
                                width: 50,
                                height: 50,
                                "& svg": {
                                    fontSize: 32
                                }
                            })),
                            e),
                        sm: {},
                        mc: {},
                        avatar: {
                            marginRight: n.spacing(1),
                            boxShadow: n.glow.light,
                            "& svg": {
                                fontSize: 24
                            },
                            "&$sm": {
                                width: 30,
                                height: 30
                            },
                            "&$mc": {
                                width: 24,
                                height: 24,
                                top: 0,
                                left: 8,
                                marginRight: 0
                            }
                        },
                        pinkAvatar: {
                            margin: 10,
                            color: "#fff",
                            backgroundColor: Y[0]
                        },
                        pinkText: {
                            color: Y[0],
                            "& svg": {
                                fill: Y[0]
                            }
                        },
                        purpleAvatar: {
                            margin: 10,
                            color: "#fff",
                            backgroundColor: Y[1]
                        },
                        purpleText: {
                            color: Y[1],
                            "& svg": {
                                fill: Y[1]
                            }
                        },
                        blueAvatar: {
                            margin: 10,
                            color: "#fff",
                            backgroundColor: Y[2]
                        },
                        blueText: {
                            color: Y[2],
                            "& svg": {
                                fill: Y[2]
                            }
                        },
                        tealAvatar: {
                            margin: 10,
                            color: "#fff",
                            backgroundColor: Y[3]
                        },
                        tealText: {
                            color: Y[3],
                            "& svg": {
                                fill: Y[3]
                            }
                        },
                        orangeAvatar: {
                            margin: 10,
                            color: "#fff",
                            backgroundColor: Y[4]
                        },
                        orangeText: {
                            color: Y[4],
                            "& svg": {
                                fill: Y[4]
                            }
                        },
                        indigoAvatar: {
                            margin: 10,
                            color: "#fff",
                            backgroundColor: Y[6]
                        },
                        indigoText: {
                            color: Y[6],
                            "& svg": {
                                fill: Y[6]
                            }
                        },
                        pinkProgress: {
                            color: Y[0],
                            "& div": {
                                backgroundColor: Y[0]
                            }
                        },
                        greenProgress: {
                            color: Y[5],
                            "& div": {
                                backgroundColor: Y[5]
                            }
                        },
                        orangeProgress: {
                            color: Y[4],
                            "& div": {
                                backgroundColor: Y[4]
                            }
                        },
                        purpleProgress: {
                            color: Y[1],
                            "& div": {
                                backgroundColor: Y[1]
                            }
                        },
                        blueProgress: {
                            color: Y[2],
                            "& div": {
                                backgroundColor: Y[2]
                            }
                        },
                        root: {
                            width: "100%",
                            marginTop: n.spacing(3),
                            overflowX: "auto"
                        },
                        chip: {
                            margin: "8px 0 8px auto",
                            color: "#000"
                        },
                        centerImg: {
                            margin: "8px 0 8px auto",
                            color: "#000"
                        },
                        flex: {
                            display: "flex",
                            alignItems: "center"
                        },
                        textCenter: {
                            textAlign: "center"
                        },
                        textRight: {
                            textAlign: "right"
                        },
                        red: {},
                        orange: {},
                        indigo: {},
                        purple: {},
                        lime: {},
                        taskIcon: {
                            display: "block",
                            textAlign: "center",
                            margin: "0 10px",
                            color: n.palette.primary.main
                        },
                        productPhoto: {
                            borderRadius: n.spacing(.5),
                            marginRight: n.spacing(1),
                            width: n.spacing(10),
                            height: n.spacing(10)
                        },
                        done: {},
                        listItem: {
                            padding: 5,
                            background: n.palette.background.paper,
                            "&:hover": {
                                backgroundColor: "dark" === n.palette.type ? Object(G.darken)(n.palette.background.paper, .3) : n.palette.secondary.light
                            },
                            "&$done": {
                                textDecoration: "line-through"
                            }
                        },
                        title: {},
                        subtitle: {},
                        styledPaper: {
                            backgroundColor: "dark" === n.palette.type ? n.palette.secondary.dark : n.palette.secondary.main,
                            padding: 20,
                            "& $title, & $subtitle": {
                                color: n.palette.common.white
                            }
                        },
                        progressWidget: {
                            marginTop: 20,
                            background: n.palette.secondary.dark,
                            "& div": {
                                background: n.palette.primary.light
                            }
                        },
                        chipProgress: {
                            marginTop: 20,
                            background: n.palette.primary.light,
                            color: n.palette.secondary.main,
                            "& div": {
                                background: Y[4],
                                color: n.palette.common.white
                            }
                        },
                        taskStatus: {
                            display: "flex",
                            alignItems: "center",
                            "& a": {
                                textDecoration: "none",
                                color: n.palette.primary.main
                            }
                        },
                        counterIcon: {
                            color: n.palette.common.white,
                            opacity: .7,
                            fontSize: 84
                        },
                        progressCircle: {
                            borderRadius: "50%",
                            background: Object(G.lighten)(n.palette.divider, .7)
                        },
                        itemCarousel: {
                            textAlign: "center",
                            "& img": {
                                margin: "10px auto"
                            }
                        },
                        albumRoot: {
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "space-around",
                            overflow: "hidden",
                            backgroundColor: n.palette.background.paper
                        },
                        gridList: K({
                            height: "auto"
                        }, n.breakpoints.up("sm"), {
                            width: 500
                        }),
                        icon: {
                            color: "rgba(255, 255, 255, 0.54)"
                        },
                        img: {
                            maxWidth: "none"
                        },
                        mapWrap: {
                            position: "relative",
                            overflow: "hidden"
                        },
                        address: {
                            display: "block"
                        },
                        carouselItem: {
                            margin: "0 5px",
                            boxShadow: n.shadows[3],
                            borderRadius: n.rounded.medium,
                            overflow: "hidden",
                            height: 380,
                            padding: "60px 20px",
                            position: "relative"
                        },
                        iconBg: {
                            color: n.palette.common.white,
                            opacity: .25,
                            position: "absolute",
                            bottom: 10,
                            right: 10,
                            fontSize: 96
                        },
                        carouselTitle: {
                            color: n.palette.common.white,
                            display: "flex",
                            flexDirection: "column",
                            fontWeight: 500,
                            fontSize: 20,
                            marginBottom: n.spacing(10)
                        },
                        carouselDesc: {
                            color: n.palette.common.white
                        },
                        chartWrap: {
                            overflow: "auto",
                            marginTop: n.spacing(2)
                        },
                        chartFluid: {
                            width: "100%",
                            minWidth: 400,
                            height: 300,
                            marginLeft: -3 * n.spacing(1)
                        },
                        tabNotif: {
                            "& > span": {
                                top: -20,
                                right: 0
                            }
                        },
                        button: {
                            marginRight: n.spacing(1)
                        },
                        wrapperDate: K({
                            overflow: "hidden"
                        }, n.breakpoints.up("sm"), {
                            display: "flex"
                        }),
                        calendarWrap: (o = {},
                            K(o, n.breakpoints.up("sm"), {
                                maxWidth: 300
                            }),
                            K(o, "zIndex", 1),
                            K(o, "background", "dark" === n.palette.type ? n.palette.secondary.dark : n.palette.secondary.main),
                            K(o, "& > div", {
                                border: "none",
                                background: "none",
                                width: "auto",
                                color: "#FFF",
                                padding: n.spacing(1),
                                "& button": {
                                    color: "#FFF",
                                    fontSize: 12,
                                    borderRadius: n.rounded.big,
                                    padding: n.spacing(1),
                                    '&[class*="navigation__label"]': {
                                        fontSize: 18
                                    },
                                    '&[class*="tile--active"]': {
                                        background: n.palette.primary.main,
                                        boxShadow: n.glow.light
                                    },
                                    '&[class*="tile--now"]': {
                                        background: n.palette.primary.main,
                                        boxShadow: n.glow.light
                                    },
                                    '&[class*="__year-view"]': {
                                        padding: "1em 0.5em",
                                        margin: "2px 0"
                                    },
                                    '&[class*="__day--weekend"]': {
                                        color: "#FFF"
                                    },
                                    '&[class*="__day--neighboringMonth"]': {
                                        color: "rgba(255,255,255,0.5)"
                                    },
                                    "&:hover": {
                                        background: "".concat(n.palette.secondary.light, " !important"),
                                        color: n.palette.secondary.main
                                    },
                                    "&:focus": {
                                        background: "none !important",
                                        boxShadow: "0 0 0 1px ".concat(n.palette.secondary.light),
                                        color: n.palette.secondary.light
                                    }
                                },
                                '& div[class*="__navigation"] button': {
                                    minWidth: 0,
                                    padding: n.spacing(1),
                                    height: "auto"
                                }
                            }),
                            o),
                        clockWrap: (t = {
                                flex: 1,
                                display: "flex",
                                justifyContent: "flex-end",
                                flexDirection: "column",
                                alignItems: "center",
                                background: "dark" === n.palette.type ? n.palette.secondary.dark : n.palette.secondary.main
                            },
                            K(t, n.breakpoints.down("sm"), {
                                paddingTop: n.spacing(3)
                            }),
                            K(t, "& > time", {
                                border: "10px solid ".concat(n.palette.secondary.main),
                                boxShadow: "dark" === n.palette.type ? "0 0 0 10px ".concat(Object(G.fade)(n.palette.secondary.main, .6)) : "0 0 0 10px ".concat(Object(G.fade)(n.palette.secondary.light, .6)),
                                borderRadius: "50%",
                                "& > div": {
                                    background: n.palette.secondary.main,
                                    border: "none"
                                }
                            }),
                            K(t, '& [class*="__mark__body"], [class*="__hand__body"]', {
                                background: n.palette.secondary.light
                            }),
                            t),
                        today: {
                            fontSize: 18,
                            margin: n.spacing(3),
                            fontWeight: n.typography.fontWeightRegular,
                            color: n.palette.primary.light
                        },
                        storageInfo: {
                            display: "flex",
                            textAlign: "center",
                            justifyContent: "center",
                            "& li": {
                                margin: "".concat(n.spacing(3), "px ").concat(n.spacing(1), "px ").concat(n.spacing(2), "px")
                            }
                        },
                        buttonReadMore: {
                            borderColor: "#FFF",
                            color: "#FFF",
                            marginTop: n.spacing(1)
                        },
                        sliderWrap: {
                            height: 360,
                            overflow: "hidden",
                            "& $title": {
                                textOverflow: "ellipsis",
                                overflow: "hidden",
                                whiteSpace: "nowrap"
                            }
                        },
                        sliderContent: {
                            borderBottomLeftRadius: 0,
                            borderBottomRightRadius: 0,
                            boxShadow: "none"
                        },
                        mobileStepper: K({
                            margin: "0 auto ".concat(n.spacing(4), "px"),
                            textAlign: "center",
                            borderRadius: "0 0 12px 12px"
                        }, n.breakpoints.down("sm"), {
                            marginBottom: 0
                        }),
                        downloadInvoice: {
                            fontSize: 11,
                            color: "dark" === n.palette.type ? n.palette.primary.main : n.palette.primary.dark,
                            textDecoration: "none",
                            "& svg": {
                                width: "0.5em"
                            }
                        },
                        messages: {
                            "& p": {
                                textOverflow: "ellipsis",
                                overflow: "hidden",
                                whiteSpace: "nowrap"
                            }
                        },
                        rootCalculator: {
                            width: "100%",
                            height: 420,
                            padding: n.spacing(2),
                            backgroundImage: "dark" === n.palette.type ? Object(U.b)(n) : Object(U.c)(n),
                            "& button": {
                                background: Object(G.fade)(n.palette.background.paper, .3),
                                color: n.palette.common.white,
                                borderRadius: n.rounded.medium
                            }
                        },
                        stripped: {
                            "& tbody tr:nth-child(even)": {
                                background: "dark" === n.palette.type ? Object(G.fade)(n.palette.grey[900], .5) : n.palette.grey[50]
                            }
                        },
                        activityWrap: {
                            "& ul:before": K({
                                content: '""',
                                position: "absolute",
                                height: "100%",
                                left: -2,
                                borderLeft: "2px solid ".concat(n.palette.primary.main)
                            }, n.breakpoints.up("sm"), {
                                left: 104
                            })
                        },
                        activityList: K({
                            paddingLeft: n.spacing(4),
                            paddingRight: 0,
                            position: "relative"
                        }, n.breakpoints.down("xs"), {
                            display: "block"
                        }),
                        activityText: {
                            paddingLeft: n.spacing(4),
                            "& span": {
                                fontSize: 12,
                                fontWeight: n.typography.fontWeightMedium
                            },
                            "& p": {
                                overflow: "hidden",
                                textOverflow: "ellipsis"
                            }
                        },
                        timeDot: {
                            position: "relative",
                            "& span": K({
                                border: "3px solid ".concat(n.palette.primary.main),
                                width: 15,
                                height: 15,
                                borderRadius: "50%",
                                position: "absolute",
                                background: n.palette.background.paper,
                                top: 0,
                                left: -8
                            }, n.breakpoints.up("sm"), {
                                left: 66
                            }),
                            "& time": K({
                                fontSize: 12,
                                textAlign: "left",
                                whiteSpace: "pre-wrap",
                                wordBreak: "break-word",
                                display: "block",
                                paddingLeft: n.spacing(2)
                            }, n.breakpoints.up("sm"), {
                                textAlign: "right",
                                width: 60,
                                paddingLeft: 0
                            })
                        },
                        formControl: {
                            width: "100%",
                            marginBottom: n.spacing(3),
                            marginTop: -2 * n.spacing(1)
                        },
                        formControlTrade: {
                            width: "100%",
                            marginTop: -2 * n.spacing(1),
                            marginBottom: n.spacing(2)
                        },
                        tradeUp: {
                            color: H.a[500],
                            "& svg": {
                                fill: H.a[500]
                            }
                        },
                        tradeDown: {
                            color: q.a[500],
                            "& svg": {
                                fill: q.a[500]
                            }
                        },
                        tradeFlat: {
                            color: n.palette.divider,
                            "& svg": {
                                fill: n.palette.divider
                            }
                        },
                        btnArea: (i = {
                                textAlign: "center"
                            },
                            K(i, n.breakpoints.up("sm"), {
                                justifyContent: "space-between",
                                display: "flex",
                                alignItems: "center"
                            }),
                            K(i, "& button", K({}, n.breakpoints.down("xs"), {
                                marginTop: n.spacing(2)
                            })),
                            i),
                        walletLabel: {
                            marginBottom: n.spacing(3)
                        },
                        tabContainer: {
                            margin: "0 ".concat(-3 * n.spacing(1), "px"),
                            overflow: "hidden"
                        },
                        rootTable: {
                            width: "100%",
                            marginTop: "24",
                            overflowX: "auto"
                        },
                        table: {
                            minWidth: 400
                        },
                        tableLong: {
                            minWidth: 900
                        },
                        sun: {},
                        cloud: {},
                        weathercard: (r = {
                                borderRadius: n.rounded.medium,
                                position: "relative",
                                overflow: "hidden",
                                height: 270
                            },
                            K(r, n.breakpoints.down("xs"), {
                                height: 260
                            }),
                            K(r, "backgroundColor", n.palette.common.white),
                            K(r, "backgroundSize", "cover"),
                            K(r, "boxShadow", "0px 0px 25px 1px rgba(50, 50, 50, 0.1)"),
                            K(r, "animation", "appear 500ms ease-out forwards"),
                            K(r, "& h1", {
                                position: "absolute",
                                fontWeight: "300",
                                fontSize: 80,
                                color: n.palette.common.white,
                                bottom: 0,
                                left: 35,
                                opacity: 0,
                                transform: "translateX(150px)",
                                animation: "title-appear 500ms ease-out 500ms forwards"
                            }),
                            K(r, "& p", {
                                position: "absolute",
                                fontWeight: 300,
                                fontSize: 28,
                                color: n.palette.common.white,
                                bottom: 0,
                                left: 35,
                                animation: "title-appear 1s ease-out 500ms forwards"
                            }),
                            K(r, "&$sun", {
                                backgroundPosition: "0 -120px"
                            }),
                            K(r, "&$cloud", {
                                backgroundPosition: "0 -120px"
                            }),
                            r)
                    }
                },
                $ = o("491470064c0e5990dc82"),
                nn = o("2a6448bbba59779def58"),
                en = o.n(nn),
                on = o("997281530ff2d95e3172");

            function tn(n, e, o) {
                return e in n ? Object.defineProperty(n, e, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : n[e] = o,
                    n
            }
            var rn, cn = function(n) {
                var e;
                return {
                    root: n.mixins.gutters({
                        paddingTop: n.spacing(3),
                        paddingBottom: n.spacing(3),
                        marginBottom: n.spacing(3),
                        boxShadow: n.shade.light,
                        color: n.palette.text.primary,
                        "&$noMargin": {
                            margin: 0
                        }
                    }),
                    descBlock: tn({
                        backgroundColor: "dark" === Object(on.a)() && "#1e2735",
                        display: "flex",
                        alignItems: "center",
                        paddingBottom: n.spacing(5)
                    }, n.breakpoints.down("sm"), {
                        paddingBottom: n.spacing(3)
                    }),
                    titleText: {
                        flex: 1
                    },
                    title: tn({
                        position: "relative",
                        textTransform: "capitalize",
                        textAlign: "left",
                        fontSize: 24,
                        fontWeight: 400,
                        color: "dark" === n.palette.type ? n.palette.primary.main : n.palette.primary.dark
                    }, n.breakpoints.down("xs"), {
                        textAlign: "center",
                        fontWeight: 600,
                        marginBottom: n.spacing(1)
                    }),
                    description: tn({
                        maxWidth: 960,
                        textAlign: "left",
                        paddingLeft: "3px",
                        paddingTop: n.spacing(.5)
                    }, n.breakpoints.down("xs"), {
                        textAlign: "center"
                    }),
                    content: tn({
                        marginTop: n.spacing(0),
                        padding: n.spacing(1),
                        borderRadius: n.rounded.medium,
                        backgroundColor: n.palette.background.default
                    }, n.breakpoints.up("lg"), {
                        padding: n.spacing(2)
                    }),
                    whiteBg: {
                        backgroundColor: "dark" === Object(on.a)() ? "#1e2735" : "transparent",
                        margin: 0,
                        padding: 0
                    },
                    noMargin: {},
                    colorMode: {
                        backgroundColor: "dark" === n.palette.type ? n.palette.primary.dark : n.palette.primary.main,
                        "& $title": {
                            color: n.palette.grey[100],
                            "&:after": {
                                borderBottom: "5px solid ".concat(n.palette.primary.light)
                            }
                        },
                        "& $description": {
                            color: n.palette.grey[100]
                        }
                    },
                    overflowX: {
                        width: "100%",
                        overflowX: "auto"
                    },
                    iconTitle: (e = {
                            borderRadius: n.rounded.small,
                            border: "dark" === n.palette.type ? "none" : "1px solid ".concat(Object(G.lighten)(n.palette.primary.dark, .9)),
                            boxShadow: "0 2px 15px -5px ".concat(n.palette.primary.main),
                            background: "dark" === n.palette.type ? n.palette.primary.main : Object(G.lighten)(n.palette.primary.light, .5),
                            width: 48,
                            height: 48,
                            textAlign: "center",
                            lineHeight: "44px",
                            verticalAlign: "middle",
                            marginRight: n.spacing(3)
                        },
                        tn(e, n.breakpoints.down("xs"), {
                            display: "none"
                        }),
                        tn(e, "& svg", {
                            width: "60%",
                            height: "60%",
                            verticalAlign: "middle",
                            fill: "dark" === n.palette.type ? n.palette.common.white : n.palette.primary.main
                        }),
                        e)
                }
            };

            function an(n, e, o, t) {
                rn || (rn = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var i = n && n.defaultProps,
                    r = arguments.length - 3;
                if (e || 0 === r || (e = {
                        children: void 0
                    }),
                    1 === r)
                    e.children = t;
                else if (r > 1) {
                    for (var c = new Array(r), a = 0; a < r; a++)
                        c[a] = arguments[a + 3];
                    e.children = c
                }
                if (e && i)
                    for (var l in i)
                        void 0 === e[l] && (e[l] = i[l]);
                else
                    e || (e = i || {});
                return {
                    $$typeof: rn,
                    type: n,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: e,
                    _owner: null
                }
            }

            function ln(n, e) {
                var o = Object.keys(n);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(n);
                    e && (t = t.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))),
                        o.push.apply(o, t)
                }
                return o
            }

            function sn(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var o = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? ln(Object(o), !0).forEach((function(e) {
                        dn(n, e, o[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : ln(Object(o)).forEach((function(e) {
                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e))
                    }))
                }
                return n
            }

            function dn(n, e, o) {
                return e in n ? Object.defineProperty(n, e, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : n[e] = o,
                    n
            }
            var bn = an("div", {});

            function fn(n) {
                var e, o = n.classes,
                    t = n.title,
                    i = n.desc,
                    r = n.children,
                    c = n.whiteBg,
                    a = n.smallTitle,
                    l = (n.noMargin,
                        n.colorMode,
                        n.overflowX),
                    d = n.imgIcon,
                    b = n.imgUrl,
                    f = n.noTop,
                    p = n.icon,
                    u = n.promoted,
                    m = n.isFlag,
                    h = n.containerStyle,
                    y = n.customStyle,
                    x = u ? "linear-gradient(250deg, rgba(255, 250, 230,10) 5%, rgba(240, 248, 255,1) 50%)" : null,
                    v = a ? "80%" : "100%";
                return an("div", {
                    style: h
                }, void 0, an(k.a, {
                    elevation: 1,
                    style: sn({
                        backgroundImage: x,
                        backgroundColor: "dark" === Object(on.a)() && "#1e2735",
                        padding: "20px"
                    }, y)
                }, void 0, f ? bn : an("div", {
                    className: o.descBlock
                }, void 0, d ? an("div", {}, void 0, an("img", {
                    src: (e = b,
                        "PNG" != ("" + e).substr(e.length - 3, e.length).toUpperCase() && "JPG" != ("" + e).substr(e.length - 3, e.length).toUpperCase() && "GIF" != ("" + e).substr(e.length - 3, e.length).toUpperCase() && "JPEG" != ("" + e).substr(e.length - 4, e.length).toUpperCase() || "HTTPS" != ("" + e).substr(0, 5).toUpperCase() ? "https://i.postimg.cc/wMfDQ70V/dx-New-Black.png" : e),
                    onError: function(n) {
                        n.target.onerror = null,
                            n.target.src = "https://i.postimg.cc/wMfDQ70V/dx-New-Black.png"
                    },
                    style: {
                        borderRadius: "10%",
                        height: "80px",
                        width: "80px",
                        marginRight: "10px",
                        marginBottom: "5px"
                    }
                })) : an("span", {
                    className: o.iconTitle
                }, void 0, an(en.a, {
                    icon: p
                })), an("div", {
                    className: o.titleText
                }, void 0, an(s.a, {
                    variant: "h6",
                    component: "h2",
                    className: o.title,
                    style: {
                        fontSize: v
                    }
                }, void 0, t), an(s.a, {
                    component: "p",
                    className: o.description,
                    style: {
                        fontSize: v
                    }
                }, void 0, i))), m ? an("div", {
                    width: "100%"
                }, void 0, an("section", {
                    className: g()(o.content, c && o.whiteBg, l && o.overflowX),
                    style: {
                        display: "inline-flex"
                    }
                }, void 0, r)) : an("section", {
                    className: g()(o.content, c && o.whiteBg, l && o.overflowX)
                }, void 0, r)))
            }
            fn.defaultProps = {
                whiteBg: !1,
                smallTitle: !1,
                promoted: !1,
                elevatedCard: !1,
                noMargin: !1,
                colorMode: !1,
                overflowX: !1,
                imgIcon: !1,
                noTop: !1,
                imgUrl: "",
                icon: "ios-bookmark-outline",
                isFlag: !1
            };
            var pn, un = Object($.compose)(Object(r.withStyles)(cn))(fn);

            function gn(n, e, o, t) {
                pn || (pn = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var i = n && n.defaultProps,
                    r = arguments.length - 3;
                if (e || 0 === r || (e = {
                        children: void 0
                    }),
                    1 === r)
                    e.children = t;
                else if (r > 1) {
                    for (var c = new Array(r), a = 0; a < r; a++)
                        c[a] = arguments[a + 3];
                    e.children = c
                }
                if (e && i)
                    for (var l in i)
                        void 0 === e[l] && (e[l] = i[l]);
                else
                    e || (e = i || {});
                return {
                    $$typeof: pn,
                    type: n,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: e,
                    _owner: null
                }
            }
            var mn = gn("br", {}),
                hn = gn("br", {}),
                yn = gn("span", {}, void 0, gn(s.a, {
                    variant: "caption",
                    gutterBottom: !0
                }, void 0, "\u2705 DxMint Verified")),
                xn = gn("span", {}, void 0, gn(s.a, {
                    variant: "caption",
                    gutterBottom: !0
                }, void 0, "\u26a0\ufe0f Custom Contract")),
                vn = gn(a.a, {
                    item: !0,
                    md: 2,
                    xs: 2,
                    container: !0,
                    direction: "column",
                    alignItems: "center",
                    justify: "center"
                }, void 0, gn(I.a, {
                    color: "primary",
                    disabled: !0
                }, void 0, gn(S.Icon, {
                    icon: j.a
                }))),
                kn = gn("br", {}),
                wn = gn("span", {}, void 0, "Token", gn("br", {}), "Launched"),
                An = gn("span", {}, void 0, "Launch", gn("br", {}), "Cancelled"),
                Cn = gn("span", {}, void 0, "Launch", gn("br", {}), "Pending"),
                Mn = gn("br", {}),
                In = gn(S.Icon, {
                    icon: N.a
                }),
                Sn = gn(a.a, {
                    item: !0,
                    md: 3,
                    xs: 1,
                    container: !0,
                    direction: "column",
                    alignItems: "center",
                    justify: "center"
                }),
                Nn = gn(s.a, {}, void 0, "Please wait for SALES to be loaded from the blockchain."),
                jn = gn(s.a, {}, void 0, "You might be the first one here, get started by creating your own sale!"),
                Tn = gn("br", {}),
                Ln = gn("br", {}),
                En = gn("div", {}, void 0, gn(s.a, {}, void 0, "No presales in this section yet! Get started by creating your own.")),
                Dn = gn(a.a, {
                    item: !0,
                    md: 3,
                    xs: 1,
                    container: !0,
                    direction: "column",
                    alignItems: "center",
                    justify: "center"
                });
            Object(r.withStyles)(_)((function(n) {
                var e = n.classes,
                    t = n.data,
                    i = n.filterEnabled,
                    r = Object(w.useHistory)(),
                    c = "",
                    l = !1;
                "" + t === "" ? l = !1 : (c = t,
                    l = !0);
                var d = function(n) {
                    switch (n) {
                        case "Error":
                            return h.a.bgError;
                        case "EndedX":
                            return h.a.bgWarning;
                        case "SuccessX":
                            return h.a.bgInfo;
                        case "RunningX":
                            return h.a.bgSuccess;
                        case "PendingX":
                            return h.a.bgGovernance;
                        case "PendingGovX":
                            return h.a.bgPending;
                        case "Default":
                        default:
                            return h.a.bgDefault
                    }
                };
                return gn("div", {}, void 0, l ? gn(a.a, {
                    container: !0,
                    spacing: 3
                }, void 0, c.map((function(n) {
                    return [gn(a.a, {
                        item: !0,
                        xl: 3,
                        lg: 3,
                        md: 4,
                        sm: 12,
                        xs: 12
                    }, n, gn(un, {
                        whiteBg: !0,
                        smallTitle: !0,
                        promoted: n.promoted,
                        noMargin: !0,
                        title: n.id,
                        imgIcon: !0,
                        desc: n.name,
                        imgUrl: n.photo
                    }, void 0, gn("div", {
                        id: "mainCard" + n.saleNo,
                        onMouseEnter: function(e) {
                            var o = "cardToChange" + n.saleNo,
                                t = "mainCard" + n.saleNo;
                            document.getElementById(o).innerHTML = " Click for Details ",
                                document.getElementById(o).style = "Width: 100px",
                                document.getElementById(t).style = "opacity: 0.6"
                        },
                        onMouseLeave: function(e) {
                            var o = "cardToChange" + n.saleNo,
                                t = "mainCard" + n.saleNo;
                            document.getElementById(o).innerText = n.statusMessage,
                                document.getElementById(t).style = "background-color: primary"
                        },
                        onClick: function(e) {
                            r.push("/app/v3/fairviewsale?saleID=" + n.saleNo + "&chain=" + n.chainType)
                        }
                    }, void 0, gn("div", {
                        className: e.secondaryWrap
                    }, void 0, gn("div", {
                        className: e.centerItem,
                        id: "eachChip" + n.saleNo
                    }, void 0, gn(b.a, {
                        id: "cardToChange" + n.saleNo,
                        style: {
                            width: "95px"
                        },
                        label: n.statusMessage,
                        className: g()(e.chip, d(n.status))
                    }), gn(p.a, {
                        variant: "static",
                        className: e.progressCircle,
                        size: 140,
                        thickness: 4,
                        value: n.percentTokensAdded
                    })), gn("ul", {
                        className: e.storageInfo
                    }, void 0, gn("li", {}, void 0, gn(s.a, {
                        variant: "caption",
                        color: "primary",
                        gutterBottom: !0
                    }, void 0, "Token %:", gn("span", {}, void 0, " " + n.percentTokensAdded)), mn, gn(s.a, {
                        variant: "caption",
                        gutterBottom: !0
                    }, void 0, "Liquidity:", " " + n.totalStock + " " + n.currency), hn, n.dxMintVerified ? yn : xn)))), gn(x.a, {
                        className: e.divider
                    }), gn(a.a, {
                        container: !0
                    }, void 0, vn, gn(a.a, {
                        item: !0,
                        md: 8,
                        xs: 8,
                        container: !0,
                        direction: "column",
                        alignItems: "center",
                        justify: "center"
                    }, void 0, Date.now() >= 1e3 * n.startTimeEx ? gn("div", {}, void 0, gn(s.a, {
                        align: "center",
                        style: {
                            fontSize: "80%"
                        }
                    }, void 0, "SuccessX" == n.status ? wn : null, "EndedX" == n.status ? An : null, "PendingX" == n.status ? Cn : null, Mn)) : gn("div", {
                        align: "center",
                        style: {
                            fontSize: "80%"
                        }
                    }, void 0, "Launch Starts In:", kn, gn(C.a, {
                        date: (o = n.startTimeEx,
                            t = 1e16,
                            Date.now() >= 1e3 * o ? 1e3 * t : 1e3 * o),
                        align: "center"
                    }))), gn(a.a, {
                        item: !0,
                        md: 2,
                        xs: 2,
                        container: !0,
                        direction: "column",
                        alignItems: "center",
                        justify: "center"
                    }, void 0, gn(I.a, {
                        color: "primary",
                        onClick: function(e) {
                            var o = "&chain=" + n.chainType;
                            window.open("" + "".concat(window.location.origin.toString(), "/app/v3/fairviewsale?saleID=") + n.saleNo + o, "_blank").focus()
                        }
                    }, void 0, In)))))];
                    var o, t
                }))) : gn(k.a, {
                    elevation: 3,
                    style: {
                        paddingTop: "8px",
                        paddingBottom: "8px",
                        marginBottom: "20px"
                    }
                }, void 0, gn(a.a, {
                    container: !0
                }, void 0, Sn, gn(a.a, {
                    item: !0,
                    md: 6,
                    xs: 10,
                    container: !0,
                    direction: "column",
                    alignItems: "center",
                    justify: "center"
                }, void 0, i ? gn("div", {}, void 0, Nn, jn, Tn, gn("div", {
                    align: "center"
                }, void 0, gn("img", {
                    height: "100px",
                    width: "100px",
                    src: o("369440987c47420c551d"),
                    alt: "Loading"
                })), Ln) : En), Dn)))
            }));
            var On, zn = o("9b4cf02f7f3c4453e043"),
                Pn = o.n(zn),
                Bn = o("b78ee477e6ac6a65dd83"),
                Fn = o.n(Bn),
                Rn = o("282d5645b44ba868741e"),
                Jn = o.n(Rn),
                Qn = o("e96e82762cfd5fe3a589"),
                Zn = o.n(Qn),
                Wn = o("29df10ef1bee6d38fd67"),
                Yn = o.n(Wn),
                Gn = o("e799c547a20a503b338f"),
                Un = o.n(Gn),
                Vn = o("c7fd554010f79f6c0ef8"),
                Hn = o.n(Vn),
                Xn = o("ea78a4d6077b4ce99010"),
                qn = o.n(Xn),
                Kn = o("b9ee47cd19ac03a22933"),
                _n = o.n(Kn),
                $n = (o("d0e31aab2824a48e8a68"),
                    o("ab7ebb4f5c369f043e8f")),
                ne = o.n($n),
                ee = o("e61a87a9a868f6feefd8"),
                oe = o.n(ee),
                te = o("e2af2251560851f21613"),
                ie = o("25f7f49eb8693bc9a507"),
                re = o("17efff332f6165736010");
            o("18fd55adb10446515347");

            function ce(n, e, o, t) {
                On || (On = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var i = n && n.defaultProps,
                    r = arguments.length - 3;
                if (e || 0 === r || (e = {
                        children: void 0
                    }),
                    1 === r)
                    e.children = t;
                else if (r > 1) {
                    for (var c = new Array(r), a = 0; a < r; a++)
                        c[a] = arguments[a + 3];
                    e.children = c
                }
                if (e && i)
                    for (var l in i)
                        void 0 === e[l] && (e[l] = i[l]);
                else
                    e || (e = i || {});
                return {
                    $$typeof: On,
                    type: n,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: e,
                    _owner: null
                }
            }

            function ae(n, e) {
                return function(n) {
                    if (Array.isArray(n))
                        return n
                }(n) || function(n, e) {
                    var o = null == n ? null : "undefined" !== typeof Symbol && n[Symbol.iterator] || n["@@iterator"];
                    if (null == o)
                        return;
                    var t, i, r = [],
                        c = !0,
                        a = !1;
                    try {
                        for (o = o.call(n); !(c = (t = o.next()).done) && (r.push(t.value), !e || r.length !== e); c = !0)
                        ;
                    } catch (n) {
                        a = !0,
                            i = n
                    } finally {
                        try {
                            c || null == o.return || o.return()
                        } finally {
                            if (a)
                                throw i
                        }
                    }
                    return r
                }(n, e) || function(n, e) {
                    if (!n)
                        return;
                    if ("string" === typeof n)
                        return le(n, e);
                    var o = Object.prototype.toString.call(n).slice(8, -1);
                    "Object" === o && n.constructor && (o = n.constructor.name);
                    if ("Map" === o || "Set" === o)
                        return Array.from(n);
                    if ("Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
                        return le(n, e)
                }(n, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function le(n, e) {
                (null == e || e > n.length) && (e = n.length);
                for (var o = 0, t = new Array(e); o < e; o++)
                    t[o] = n[o];
                return t
            }
            var se = ce(ie.a, {}),
                de = ce(re.ToastContainer, {
                    position: "top-center",
                    limit: 1
                });
            var be, fe = function(n) {
                    var e = ae(Object(t.useState)(""), 2),
                        o = e[0],
                        r = e[1],
                        c = ae(Object(t.useState)(!1), 2),
                        l = (c[0],
                            c[1],
                            ae(Object(t.useState)(!1), 2)),
                        s = l[0],
                        d = l[1];
                    return Object(t.useEffect)((function() {
                            s || (Object(ie.b)(6),
                                d(!0))
                        })),
                        i.a.createElement(i.a.Fragment, null, ce(a.a, {
                            container: !0,
                            direction: "column",
                            item: !0,
                            xs: 12,
                            style: {
                                marginTop: "25px"
                            },
                            alignContent: "center",
                            alignItems: "center"
                        }, void 0, se, ce(Hn.a, {
                            style: {
                                marginTop: "5px"
                            },
                            label: "Captcha",
                            onChange: function(n) {
                                r(n.target.value)
                            }
                        }), ce(I.a, {
                            variant: "contained",
                            color: "secondary",
                            onClick: function() {
                                1 == Object(ie.c)(o) ? (n.sendToParent(!0),
                                    re.toast.success("Captcha Matched And Message sent"),
                                    d(!1),
                                    r("")) : (re.toast.error("Captcha Does Not Match"),
                                    n.sendToParent(!1),
                                    r(""))
                            },
                            style: {
                                marginTop: "20px"
                            }
                        }, void 0, "Check Captcha & Send Message")), de)
                },
                pe = o("a81dcbc0abe3f1d189ea");

            function ue(n, e, o, t) {
                be || (be = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var i = n && n.defaultProps,
                    r = arguments.length - 3;
                if (e || 0 === r || (e = {
                        children: void 0
                    }),
                    1 === r)
                    e.children = t;
                else if (r > 1) {
                    for (var c = new Array(r), a = 0; a < r; a++)
                        c[a] = arguments[a + 3];
                    e.children = c
                }
                if (e && i)
                    for (var l in i)
                        void 0 === e[l] && (e[l] = i[l]);
                else
                    e || (e = i || {});
                return {
                    $$typeof: be,
                    type: n,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: e,
                    _owner: null
                }
            }

            function ge(n, e, o, t, i, r, c) {
                try {
                    var a = n[r](c),
                        l = a.value
                } catch (n) {
                    return void o(n)
                }
                a.done ? e(l) : Promise.resolve(l).then(t, i)
            }

            function me(n, e) {
                return function(n) {
                    if (Array.isArray(n))
                        return n
                }(n) || function(n, e) {
                    var o = null == n ? null : "undefined" !== typeof Symbol && n[Symbol.iterator] || n["@@iterator"];
                    if (null == o)
                        return;
                    var t, i, r = [],
                        c = !0,
                        a = !1;
                    try {
                        for (o = o.call(n); !(c = (t = o.next()).done) && (r.push(t.value), !e || r.length !== e); c = !0)
                        ;
                    } catch (n) {
                        a = !0,
                            i = n
                    } finally {
                        try {
                            c || null == o.return || o.return()
                        } finally {
                            if (a)
                                throw i
                        }
                    }
                    return r
                }(n, e) || function(n, e) {
                    if (!n)
                        return;
                    if ("string" === typeof n)
                        return he(n, e);
                    var o = Object.prototype.toString.call(n).slice(8, -1);
                    "Object" === o && n.constructor && (o = n.constructor.name);
                    if ("Map" === o || "Set" === o)
                        return Array.from(n);
                    if ("Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
                        return he(n, e)
                }(n, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function he(n, e) {
                (null == e || e > n.length) && (e = n.length);
                for (var o = 0, t = new Array(e); o < e; o++)
                    t[o] = n[o];
                return t
            }
            var ye = function(n, e) {
                    oe.a.event({
                        category: n,
                        action: e,
                        label: "labelName",
                        value: 10,
                        nonInteraction: !1
                    })
                },
                xe = ue(qn.a, {}),
                ve = ue(ne.a, {}),
                ke = ue("hr", {}),
                we = ue("div", {}, void 0, ue("a", {
                    href: "https://app.uniswap.org/#/swap?inputCurrency=0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2&outputCurrency=0xF063fE1aB7a291c5d06a86e14730b00BF24cB589",
                    target: "_blank"
                }, void 0, ue("button", {
                    className: "buy-btn",
                    id: "uni"
                }, void 0, "Uniswap")), ue("a", {
                    href: "https://pancakeswap.finance/swap#/swap?outputCurrency=0x04f73a09e2eb410205be256054794fb452f0d245",
                    target: "_blank"
                }, void 0, ue("button", {
                    className: "buy-btn",
                    id: "pcake"
                }, void 0, "Pancakeswap")), ue("a", {
                    href: "https://quickswap.exchange/#/swap?outputCurrency=0x8f6196901a4a153d8eE8F3fa779A042F6092D908",
                    target: "_blank"
                }, void 0, ue("button", {
                    className: "buy-btn",
                    id: "quick"
                }, void 0, "Quickswap")), ue("a", {
                    href: "https://swap.safemoon.net/#/swap?outputCurrency=0x04F73A09e2eb410205BE256054794fB452f0D245",
                    target: "_blank"
                }, void 0, ue("button", {
                    className: "buy-btn",
                    id: "safeswap"
                }, void 0, "SafeMoonSwap")), ue("a", {
                    href: "https://www.hotbit.io/exchange?symbol=SALE_ETH",
                    target: "_blank"
                }, void 0, ue("button", {
                    className: "buy-btn",
                    id: "hotbit"
                }, void 0, "Hotbit")), ue("a", {
                    href: "https://bilaxy.com/trade/SALE_ETH",
                    target: "_blank"
                }, void 0, ue("button", {
                    className: "buy-btn",
                    id: "bilaxy"
                }, void 0, "Bilaxy"))),
                Ae = ue(ne.a, {}),
                Ce = ue("hr", {}),
                Me = ue("br", {});
            var Ie, Se = Object(r.withStyles)(te.a)((function(n) {
                    var e = me(Object(t.useState)(!1), 1)[0],
                        r = me(Object(t.useState)(0), 2),
                        c = r[0],
                        l = r[1],
                        s = me(Object(t.useState)(!1), 2),
                        d = s[0],
                        b = s[1],
                        f = me(Object(t.useState)(!1), 2),
                        p = (f[0],
                            f[1]),
                        u = me(i.a.useState(!1), 2),
                        m = u[0],
                        h = u[1],
                        y = me(i.a.useState(!1), 2),
                        x = y[0],
                        v = y[1],
                        w = me(Object(t.useState)(!1), 2),
                        A = w[0],
                        C = w[1],
                        M = me(Object(t.useState)(""), 2),
                        N = M[0],
                        j = M[1],
                        T = me(Object(t.useState)(""), 2),
                        L = T[0],
                        E = T[1],
                        D = me(Object(t.useState)(""), 2),
                        O = D[0],
                        z = D[1],
                        P = !1,
                        B = !1,
                        F = function() {
                            var n = document.documentElement,
                                e = (window.pageYOffset || n.scrollTop) - (n.clientTop || 0),
                                o = e > 30,
                                t = e > 40;
                            P !== o && (b(o),
                                    P = o),
                                B !== t && (p(t),
                                    B = t)
                        };
                    Object(t.useEffect)((function() {
                        return oe.a.initialize("UA-222430901-1"),
                            Object(pe.f)().then((function(n) {
                                return l(n)
                            })),
                            window.addEventListener("scroll", F),
                            function() {
                                window.removeEventListener("scroll", F)
                            }
                    }), []);
                    var R, J = n.classes,
                        Q = n.toggleDrawerOpen,
                        Z = n.margin,
                        W = n.position,
                        Y = n.gradient,
                        G = (n.mode,
                            n.title,
                            n.openGuide,
                            n.history,
                            function() {
                                h(!1)
                            }
                        ),
                        U = function() {
                            v(!1)
                        },
                        V = function() {
                            var n, e = (n = regeneratorRuntime.mark((function n() {
                                    var e;
                                    return regeneratorRuntime.wrap((function(n) {
                                        for (;;)
                                            switch (n.prev = n.next) {
                                                case 0:
                                                    return e = '{"name": "'.concat(N, '",\n        "message" : "').concat(O, '",\n        "contact" : "').concat(L, '"}'),
                                                        console.log(e),
                                                        n.next = 4,
                                                        fetch("https://scan.dx.app/telegraf/submit", {
                                                            method: "POST",
                                                            headers: {
                                                                Accept: "application/json",
                                                                "Content-type": "application/json; charset=UTF-8"
                                                            },
                                                            body: e
                                                        });
                                                case 4:
                                                case "end":
                                                    return n.stop()
                                            }
                                    }), n)
                                })),
                                function() {
                                    var e = this,
                                        o = arguments;
                                    return new Promise((function(t, i) {
                                        var r = n.apply(e, o);

                                        function c(n) {
                                            ge(r, t, i, c, a, "next", n)
                                        }

                                        function a(n) {
                                            ge(r, t, i, c, a, "throw", n)
                                        }
                                        c(void 0)
                                    }))
                                }
                            );
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        H = ue(fe, {
                            toChild: A,
                            sendToParent: C
                        });
                    return !0 === A && (V(),
                            C(!1),
                            v(!1)),
                        ue(Fn.a, {
                            className: g()(J.appBar, J.floatingBar, Z && J.appBarShift, (R = W,
                                "right-sidebar" === R ? J.right : "left-sidebar-big" === R ? J.leftBig : J.left), d && J.darker, Y ? J.gradientBg : J.solidBg)
                        }, void 0, ue(Jn.a, {
                            disableGutters: !e
                        }, void 0, ue(Zn.a, {
                            size: "small",
                            className: J.menuButton,
                            "aria-label": "Menu",
                            onClick: Q
                        }, void 0, xe), ue(Pn.a, {
                            smDown: !0
                        }, void 0, ue("div", {
                            className: J.headerProperties
                        })), ue("div", {
                            className: "right-sidebar-content"
                        }, void 0, ue(Yn.a, {
                            title: "Submit an Idea",
                            placement: "bottom",
                            id: "right-btn"
                        }, void 0, ue(Un.a, {
                            onClick: function() {
                                ye("Buttons", "Submit an Idea"),
                                    v(!0)
                            },
                            target: "_blank",
                            style: {
                                marginLeft: "5px",
                                marginRight: "5px"
                            }
                        }, void 0, ue(S.Icon, {
                            style: {
                                color: "white",
                                height: "22px",
                                width: "22px"
                            },
                            icon: "icons8:idea"
                        }))), ue(Yn.a, {
                            title: "Help",
                            placement: "bottom"
                        }, void 0, ue(Un.a, {
                            onClick: function() {
                                ye("Buttons", "Docs/Help"),
                                    window.open("https://docs.dxsale.network", "_blank")
                            },
                            target: "_blank",
                            id: "right-btn"
                        }, void 0, ue(S.Icon, {
                            style: {
                                color: "white",
                                height: "22px",
                                width: "22px",
                                marginRight: "5px"
                            },
                            icon: "ic:outline-help-center"
                        }))), ue(Yn.a, {
                            title: "Chat",
                            placement: "bottom",
                            id: "right-btn"
                        }, void 0, ue(Un.a, {
                            onClick: function() {
                                ye("Buttons", "Chat"),
                                    window.open("https://t.me/dxsale", "_blank")
                            },
                            target: "_blank",
                            style: {
                                marginRight: "5px"
                            }
                        }, void 0, ue(S.Icon, {
                            style: {
                                color: "white",
                                height: "22px",
                                width: "22px"
                            },
                            icon: "ph:telegram-logo-duotone"
                        }))), ue(Yn.a, {
                            title: "Coinmarketcap",
                            placement: "bottom",
                            style: {
                                marginLeft: "0px"
                            }
                        }, void 0, ue(I.a, {
                            onClick: function() {
                                ye("Buttons", "Coinmarketcap"),
                                    window.open("https://coinmarketcap.com/currencies/dxsale-network/", "_blank")
                            },
                            style: {
                                color: "white",
                                marginRight: "0px",
                                textDecoration: "none",
                                fontSize: "85%",
                                paddingRight: "10px",
                                paddingLeft: "8px"
                            }
                        }, void 0, ue("img", {
                            src: o("4ac45f26c1b39a85d229"),
                            style: {
                                height: "22px",
                                width: "22px",
                                marginRight: "3px"
                            }
                        }), "  ", ue("span", {
                            style: {
                                fontSize: "98%",
                                marginLeft: "5px"
                            }
                        }, void 0, c.toFixed(2)))), ue(Pn.a, {
                            smDown: !0
                        }, void 0, ue(I.a, {
                            onClick: function() {
                                ye("Buttons", "Buy Sale"),
                                    h(!0)
                            },
                            style: {
                                marginLeft: "5px",
                                marginRight: "10px",
                                color: "white",
                                borderColor: "white"
                            },
                            variant: "outlined",
                            color: "white"
                        }, void 0, ue("span", {
                            style: {
                                fontSize: "80%"
                            }
                        }, void 0, "Buy SALE"))), ue(_n.a, {
                            open: m,
                            onClose: G
                        }, void 0, ue(k.a, {
                            className: "mpaper"
                        }, void 0, ue("img", {
                            style: {
                                marginLeft: "45%"
                            },
                            src: o("4ac45f26c1b39a85d229"),
                            height: "50px",
                            width: "50px"
                        }), ue("button", {
                            className: "closebtn",
                            onClick: G
                        }, void 0, ve), ue(a.a, {
                            container: !0,
                            spacing: 2,
                            direction: "column",
                            item: !0,
                            xs: 12,
                            alignContent: "center",
                            alignItems: "center"
                        }, void 0, ue("div", {}, void 0, ke, ue("h2", {
                            style: {
                                textAlign: "center",
                                fontSize: "1rem"
                            }
                        }, void 0, "Buy & Sell SALE Token On")), we))), ue(_n.a, {
                            open: x,
                            onClose: U
                        }, void 0, ue(k.a, {
                            className: "mpaper"
                        }, void 0, ue("img", {
                            style: {
                                marginLeft: "45%"
                            },
                            src: o("3b9cb77b6401dd134077"),
                            height: "50px",
                            width: "50px"
                        }), ue("button", {
                            style: {
                                marginTop: "10px"
                            },
                            className: "closebtn",
                            onClick: U
                        }, void 0, Ae), Ce, ue(a.a, {
                            container: !0,
                            direction: "column",
                            item: !0,
                            xs: 12,
                            alignContent: "center",
                            alignItems: "center"
                        }, void 0, ue("div", {}, void 0, ue("h2", {
                            style: {
                                textAlign: "center",
                                fontSize: "1rem"
                            }
                        }, void 0, "Submit an Idea")), ue(a.a, {
                            container: !0,
                            direction: "column",
                            item: !0,
                            xs: 12,
                            alignContent: "left",
                            alignItems: "left"
                        }, void 0, ue(Hn.a, {
                            label: "Name",
                            onChange: function(n) {
                                j(n.target.value)
                            }
                        }), ue(Hn.a, {
                            label: "Email / Telegram ID",
                            onChange: function(n) {
                                E(n.target.value)
                            }
                        }), ue(Hn.a, {
                            multiline: !0,
                            rows: 20,
                            maxRows: 6,
                            onChange: function(n) {
                                z(n.target.value)
                            },
                            label: "Message"
                        })), H), Me, ue("a", {
                            href: "https://t.me/DxSale",
                            target: "_blank"
                        }, void 0, ue("h2", {
                            style: {
                                textAlign: "center",
                                fontSize: "0.70rem"
                            }
                        }, void 0, "For dedicated support join our Telegram group by clicking here!")))))))
                })),
                Ne = o("baa88efd5d685b20131b"),
                je = o.n(Ne),
                Te = o("dc266c052eac816608b1"),
                Le = o.n(Te),
                Ee = o("9731344539086d7b0d1d"),
                De = o("03b280d13c7955996505");

            function Oe(n, e, o, t) {
                Ie || (Ie = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var i = n && n.defaultProps,
                    r = arguments.length - 3;
                if (e || 0 === r || (e = {
                        children: void 0
                    }),
                    1 === r)
                    e.children = t;
                else if (r > 1) {
                    for (var c = new Array(r), a = 0; a < r; a++)
                        c[a] = arguments[a + 3];
                    e.children = c
                }
                if (e && i)
                    for (var l in i)
                        void 0 === e[l] && (e[l] = i[l]);
                else
                    e || (e = i || {});
                return {
                    $$typeof: Ie,
                    type: n,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: e,
                    _owner: null
                }
            }

            function ze(n, e) {
                return function(n) {
                    if (Array.isArray(n))
                        return n
                }(n) || function(n, e) {
                    var o = null == n ? null : "undefined" !== typeof Symbol && n[Symbol.iterator] || n["@@iterator"];
                    if (null == o)
                        return;
                    var t, i, r = [],
                        c = !0,
                        a = !1;
                    try {
                        for (o = o.call(n); !(c = (t = o.next()).done) && (r.push(t.value), !e || r.length !== e); c = !0)
                        ;
                    } catch (n) {
                        a = !0,
                            i = n
                    } finally {
                        try {
                            c || null == o.return || o.return()
                        } finally {
                            if (a)
                                throw i
                        }
                    }
                    return r
                }(n, e) || function(n, e) {
                    if (!n)
                        return;
                    if ("string" === typeof n)
                        return Pe(n, e);
                    var o = Object.prototype.toString.call(n).slice(8, -1);
                    "Object" === o && n.constructor && (o = n.constructor.name);
                    if ("Map" === o || "Set" === o)
                        return Array.from(n);
                    if ("Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
                        return Pe(n, e)
                }(n, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Pe(n, e) {
                (null == e || e > n.length) && (e = n.length);
                for (var o = 0, t = new Array(e); o < e; o++)
                    t[o] = n[o];
                return t
            }

            function Be(n) {
                var e = ze(Object(t.useState)(null), 2),
                    o = e[0],
                    i = e[1],
                    r = ze(Object(t.useState)(!1), 2),
                    c = r[0],
                    a = r[1],
                    l = !1,
                    s = function() {
                        var n = document.documentElement,
                            e = (window.pageYOffset || n.scrollTop) - (n.clientTop || 0) > 30;
                        l !== e && (a(e),
                            l = e)
                    };
                Object(t.useEffect)((function() {
                    return window.addEventListener("scroll", s),
                        function() {
                            window.removeEventListener("scroll", s)
                        }
                }), []);
                var d = function(n) {
                        i(n.currentTarget)
                    },
                    b = function() {
                        i(null)
                    },
                    f = function(n) {
                        b()
                    },
                    p = n.classes,
                    u = n.open,
                    m = n.toggleDrawerOpen,
                    h = n.loadTransition,
                    y = n.leftSidebar,
                    x = n.dataMenu;
                return Oe(t.Fragment, {}, void 0, Oe(Pn.a, {
                    lgUp: !0
                }, void 0, Oe(Le.a, {
                    onClose: m,
                    onOpen: m,
                    open: !u,
                    anchor: y ? "left" : "right"
                }, void 0, Oe("div", {
                    className: p.swipeDrawerPaper
                }, void 0, Oe(De.a, {
                    drawerPaper: !0,
                    leftSidebar: y,
                    toggleDrawerOpen: m,
                    loadTransition: h,
                    dataMenu: x,
                    anchorEl: o,
                    openMenuStatus: d,
                    closeMenuStatus: b,
                    changeStatus: f
                })))), Oe(Pn.a, {
                    mdDown: !0
                }, void 0, Oe(je.a, {
                    variant: "permanent",
                    onClose: m,
                    className: u ? p.drawer : "",
                    classes: {
                        paper: g()(p.drawer, p.drawerPaper, u ? "" : p.drawerPaperClose)
                    },
                    open: u,
                    anchor: y ? "left" : "right"
                }, void 0, Oe(De.a, {
                    drawerPaper: u,
                    leftSidebar: y,
                    turnDarker: c,
                    loadTransition: h,
                    dataMenu: x,
                    anchorEl: o,
                    openMenuStatus: d,
                    closeMenuStatus: b,
                    changeStatus: f
                }))))
            }
            Be.defaultProps = {
                leftSidebar: !0
            };
            var Fe, Re = Object(r.withStyles)(Ee.a)(Be),
                Je = o("2abb2ecfab271efcf057"),
                Qe = o.n(Je),
                Ze = o("f466c6fac21e2bd173f8"),
                We = o.n(Ze),
                Ye = o("f0d76769f542545382df"),
                Ge = o.n(Ye),
                Ue = o("2de20a79156911f204a2"),
                Ve = o.n(Ue),
                He = o("a289f12938702445a8e7"),
                Xe = o.n(He),
                qe = o("d1481ba7d88efe885afa"),
                Ke = o.n(qe),
                _e = o("ecbdedbb63dd08b2841e"),
                $e = o.n(_e),
                no = o("ef58856f4f875bd36582"),
                eo = o.n(no),
                oo = o("74955b686065192ac90b"),
                to = o.n(oo);

            function io(n, e, o, t) {
                Fe || (Fe = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var i = n && n.defaultProps,
                    r = arguments.length - 3;
                if (e || 0 === r || (e = {
                        children: void 0
                    }),
                    1 === r)
                    e.children = t;
                else if (r > 1) {
                    for (var c = new Array(r), a = 0; a < r; a++)
                        c[a] = arguments[a + 3];
                    e.children = c
                }
                if (e && i)
                    for (var l in i)
                        void 0 === e[l] && (e[l] = i[l]);
                else
                    e || (e = i || {});
                return {
                    $$typeof: Fe,
                    type: n,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: e,
                    _owner: null
                }
            }

            function ro(n, e, o, t, i, r, c, a, l, s, d, b, f) {
                return {
                    id: n,
                    name: e,
                    website: o,
                    startDate: t,
                    endDate: i,
                    softCap: r,
                    hardCap: c,
                    photo: a,
                    type: l,
                    currentStock: s,
                    totalStock: d,
                    status: b,
                    statusMessage: f
                }
            }
            var co = [ro("CORE", "cVault.Finance", "https://cvault.finance", "13 Sep 2020", "20 Sep 2020", 300, 300, "https://assets.coingecko.com/coins/images/12635/large/cvault.finance_logo.png?1601353499", "", 300, 300, "Success", "Completed"), ro("SALE", "DxSale", "https://dxsale.network", "19 Aug 2020", "26 Aug 2020", 100, 1e3, "https://i.postimg.cc/fTrGxGX1/dx-New-Black-Middle-White.png", "", 484, 1e3, "Success", "Completed"), ro("BAT", "Basic Attention Token", "https://basicattentiontoken.org/", "5 Oct 2020", "10 Oct 2020", 500, 1e3, "https://media.cointral.com/wp-content/uploads/2019/11/08013926/buy-basic-attention-token.png", "", 579, 1e3, "Info", "In Governance"), ro("OMG", "OMG Network", "https://omg.network/", "10 Dec 2020", "22 Dec 2020", 50, 50, "https://omg.network/wp-content/uploads/2020/05/omg-token-1.png", "", 0, 50, "Warning", "Pending")],
                ao = io(Ve.a, {}, void 0, io(Xe.a, {}, void 0, io(Ge.a, {
                    padding: "default"
                }, void 0, "My Sales"), io(Ge.a, {}, void 0, "Start Date / End Date"), io(Ge.a, {}, void 0, "Hard Cap / Soft Cap"), io(Ge.a, {}, void 0, "Status"), io(Ge.a, {}, void 0, "Progress"), io(Ge.a, {}, void 0, "Actions"))),
                lo = io(Ge.a, {}, void 0, io("div", {}, void 0, io(s.a, {
                    variant: "caption"
                }, void 0, "View Sale"), io("br", {}), io(s.a, {
                    variant: "caption"
                }, void 0, "Manage Sale")));
            var so, bo = Object(r.withStyles)(_)((function(n) {
                var e = n.classes,
                    o = function(n) {
                        switch (n) {
                            case "Error":
                                return h.a.bgError;
                            case "Warning":
                                return h.a.bgWarning;
                            case "Info":
                                return h.a.bgInfo;
                            case "Success":
                                return h.a.bgSuccess;
                            default:
                                return h.a.bgDefault
                        }
                    },
                    t = function(n) {
                        switch (n) {
                            case "Error":
                                return to.a.bgError;
                            case "Warning":
                                return to.a.bgWarning;
                            case "Info":
                                return to.a.bgInfo;
                            case "Success":
                                return to.a.bgSuccess;
                            default:
                                return to.a.bgDefault
                        }
                    };
                return io("div", {}, void 0, io(Qe.a, {
                    className: g()(e.tableLong, e.stripped),
                    padding: "default"
                }, void 0, ao, io(We.a, {}, void 0, co.map((function(n) {
                    return [io(Xe.a, {}, n.id, io(Ge.a, {
                        padding: "default"
                    }, void 0, io("div", {
                        className: e.flex
                    }, void 0, io($e.a, {
                        alt: n.name,
                        src: n.photo,
                        className: e.productPhoto
                    }), io("div", {}, void 0, io(s.a, {
                        variant: "caption"
                    }, void 0, n.id), io(s.a, {
                        variant: "subtitle1"
                    }, void 0, n.name), io("a", {
                        href: n.website,
                        target: "_blank",
                        className: e.downloadInvoice
                    }, void 0, "Website")))), io(Ge.a, {}, void 0, io("div", {
                        className: e.flex
                    }, void 0, io("div", {}, void 0, io(s.a, {}, void 0, "Start Date:\xa0", n.startDate), io(s.a, {
                        variant: "caption"
                    }, void 0, "End Date:\xa0", n.endDate)))), io(Ge.a, {}, void 0, io("div", {}, void 0, io(s.a, {}, void 0, "Soft Cap:\xa0", n.softCap), io(s.a, {
                        variant: "caption"
                    }, void 0, "Hard Cap:\xa0", n.hardCap))), io(Ge.a, {}, void 0, io(b.a, {
                        label: n.statusMessage,
                        className: g()(e.chip, o(n.status))
                    })), io(Ge.a, {}, void 0, io("div", {
                        className: e.taskStatus
                    }, void 0, io(eo.a, {
                        className: e.taskIcon
                    }, void 0, n.type), io(s.a, {
                        variant: "caption"
                    }, void 0, n.currentStock, "\xa0/\xa0", n.totalStock)), io(Ke.a, {
                        variant: "determinate",
                        className: t(n.status),
                        value: n.currentStock / n.totalStock * 100
                    })), lo)]
                })))))
            }));

            function fo(n, e, o, t) {
                so || (so = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var i = n && n.defaultProps,
                    r = arguments.length - 3;
                if (e || 0 === r || (e = {
                        children: void 0
                    }),
                    1 === r)
                    e.children = t;
                else if (r > 1) {
                    for (var c = new Array(r), a = 0; a < r; a++)
                        c[a] = arguments[a + 3];
                    e.children = c
                }
                if (e && i)
                    for (var l in i)
                        void 0 === e[l] && (e[l] = i[l]);
                else
                    e || (e = i || {});
                return {
                    $$typeof: so,
                    type: n,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: e,
                    _owner: null
                }
            }

            function po(n, e) {
                return Date.now() >= 1e3 * n ? 1e3 * e : 1e3 * n
            }
            var uo = fo("br", {}),
                go = fo("br", {}),
                mo = fo(a.a, {
                    item: !0,
                    md: 2,
                    xs: 2,
                    container: !0,
                    direction: "column",
                    alignItems: "center",
                    justify: "center"
                }, void 0, fo(I.a, {
                    color: "primary",
                    disabled: !0
                }, void 0, fo(S.Icon, {
                    icon: j.a
                }))),
                ho = fo("div", {}, void 0, "Sale Ends in:"),
                yo = fo("div", {}, void 0, "Sale Starts in:"),
                xo = fo("span", {}, void 0, "Starts"),
                vo = fo("span", {}, void 0, "Ends"),
                ko = fo(s.a, {
                    align: "center"
                }, void 0, "Presale", fo("br", {}), "Ended"),
                wo = fo(S.Icon, {
                    icon: N.a
                }),
                Ao = fo(a.a, {
                    item: !0,
                    md: 3,
                    xs: 1,
                    container: !0,
                    direction: "column",
                    alignItems: "center",
                    justify: "center"
                }),
                Co = fo("div", {}, void 0, fo(s.a, {}, void 0, "Please wait for SALES to be loaded from the blockchain."), fo(s.a, {}, void 0, "You might be the first one here, get started by creating your own sale!"), fo("br", {}), fo("div", {
                    align: "center"
                }, void 0, fo("img", {
                    height: "25px",
                    width: "25px",
                    src: "https://i.gifer.com/VAyR.gif",
                    alt: "Loading"
                })), fo("br", {})),
                Mo = fo("div", {}, void 0, fo(s.a, {}, void 0, "No presales in this section yet! Get started by creating your own.")),
                Io = fo(a.a, {
                    item: !0,
                    md: 3,
                    xs: 1,
                    container: !0,
                    direction: "column",
                    alignItems: "center",
                    justify: "center"
                });
            var So;
            Object(r.withStyles)(_)((function(n) {
                var e = n.classes,
                    o = n.data,
                    t = n.filterEnabled,
                    i = Object(w.useHistory)(),
                    r = "",
                    c = !1;
                "" + o === "" ? c = !1 : (r = o,
                    c = !0);
                var l = function(n) {
                    switch (n) {
                        case "Error":
                            return h.a.bgError;
                        case "EndedX":
                            return h.a.bgWarning;
                        case "VotingX":
                            return h.a.bgInfo;
                        case "RunningX":
                            return h.a.bgSuccess;
                        case "PendingGovX":
                            return h.a.bgGovernance;
                        case "PendingX":
                            return h.a.bgPending;
                        case "Default":
                        default:
                            return h.a.bgDefault
                    }
                };
                return fo("div", {}, void 0, c ? fo(a.a, {
                    container: !0,
                    spacing: 3
                }, void 0, r.map((function(n) {
                    return [fo(a.a, {
                        item: !0,
                        xl: 3,
                        lg: 3,
                        md: 4,
                        sm: 12,
                        xs: 12
                    }, n, fo(un, {
                        whiteBg: !0,
                        noMargin: !0,
                        title: n.id,
                        imgIcon: !0,
                        desc: n.name,
                        imgUrl: n.photo
                    }, void 0, fo("div", {
                        id: "mainCard" + n.saleNo,
                        onMouseEnter: function(e) {
                            var o = "cardToChange" + n.saleNo,
                                t = "mainCard" + n.saleNo;
                            document.getElementById(o).innerHTML = " Click for Details ",
                                document.getElementById(o).style = "Width: 100px",
                                document.getElementById(t).style = "opacity: 0.6"
                        },
                        onMouseLeave: function(e) {
                            var o = "cardToChange" + n.saleNo,
                                t = "mainCard" + n.saleNo;
                            document.getElementById(o).innerText = n.statusMessage,
                                document.getElementById(t).style = "background-color: primary"
                        },
                        onClick: function(e) {
                            i.push("/app/pages/presale?saleID=" + n.saleNo + "&chain=" + n.chainType)
                        }
                    }, void 0, fo("div", {
                        className: e.secondaryWrap
                    }, void 0, fo("div", {
                        className: e.centerItem,
                        id: "eachChip" + n.presaleNo
                    }, void 0, fo(b.a, {
                        id: "cardToChange" + n.saleNo,
                        style: {
                            width: "95px"
                        },
                        label: n.statusMessage,
                        className: g()(e.chip, l(n.status))
                    }), fo(p.a, {
                        variant: "static",
                        className: e.progressCircle,
                        size: 140,
                        thickness: 4,
                        value: n.currentStock / n.totalStock * 100
                    })), fo("ul", {
                        className: e.storageInfo
                    }, void 0, fo("li", {}, void 0, fo(s.a, {
                        variant: "caption",
                        color: "primary",
                        gutterBottom: !0
                    }, void 0, "Raised:", fo("span", {}, void 0, n.currentStock, "/", n.totalStock)), uo, fo(s.a, {
                        variant: "caption",
                        gutterBottom: !0
                    }, void 0, "Soft Cap:", n.softCap, " ", n.currencySymbol), go, fo(s.a, {
                        variant: "caption",
                        gutterBottom: !0
                    }, void 0, "Min:", n.minCont.toFixed(2), " / Max:", n.maxCont.toFixed(2), " ", n.currencySymbol))))), fo(x.a, {
                        className: e.divider
                    }), fo(a.a, {
                        container: !0
                    }, void 0, mo, fo(a.a, {
                        item: !0,
                        md: 8,
                        xs: 8,
                        container: !0,
                        direction: "column",
                        alignItems: "center",
                        justify: "center"
                    }, void 0, Date.now() >= 1e3 * n.endTimeEx || n.currentStock == n.totalStock ? fo("div", {}, void 0, n.govPercent > 0 && Date.now() < 1e3 * n.govEnd && n.currentStock >= n.softCap ? fo("div", {
                        align: "center"
                    }, void 0, fo(s.a, {
                        align: "center"
                    }, void 0, "Governance", Date.now() < 1e3 * n.govStart ? xo : vo, " ", "In:"), fo(C.a, {
                        date: po(n.govStart, n.govEnd),
                        align: "center"
                    })) : ko) : fo("div", {
                        align: "center"
                    }, void 0, Date.now() >= 1e3 * n.startTimeEx ? ho : yo, fo(C.a, {
                        date: po(n.startTimeEx, n.endTimeEx),
                        align: "center"
                    }))), fo(a.a, {
                        item: !0,
                        md: 2,
                        xs: 2,
                        container: !0,
                        direction: "column",
                        alignItems: "center",
                        justify: "center"
                    }, void 0, fo(I.a, {
                        color: "primary",
                        onClick: function(e) {
                            var o = "&chain=" + n.chainType;
                            window.open("" + "".concat(window.location.origin.toString(), "/app/pages/presale?saleID=") + n.saleNo + o, "_blank").focus()
                        }
                    }, void 0, wo)))))]
                }))) : fo(k.a, {
                    elevation: 3,
                    style: {
                        paddingTop: "8px",
                        paddingBottom: "8px",
                        marginBottom: "20px"
                    }
                }, void 0, fo(a.a, {
                    container: !0
                }, void 0, Ao, fo(a.a, {
                    item: !0,
                    md: 6,
                    xs: 10,
                    container: !0,
                    direction: "column",
                    alignItems: "center",
                    justify: "center"
                }, void 0, t ? Co : Mo), Io)))
            }));

            function No(n, e, o, t) {
                So || (So = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var i = n && n.defaultProps,
                    r = arguments.length - 3;
                if (e || 0 === r || (e = {
                        children: void 0
                    }),
                    1 === r)
                    e.children = t;
                else if (r > 1) {
                    for (var c = new Array(r), a = 0; a < r; a++)
                        c[a] = arguments[a + 3];
                    e.children = c
                }
                if (e && i)
                    for (var l in i)
                        void 0 === e[l] && (e[l] = i[l]);
                else
                    e || (e = i || {});
                return {
                    $$typeof: So,
                    type: n,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: e,
                    _owner: null
                }
            }
            var jo = No("br", {}),
                To = No("br", {}),
                Lo = No("br", {}),
                Eo = No("span", {}, void 0, No(s.a, {
                    variant: "caption",
                    gutterBottom: !0
                }, void 0, "\u2705 DxMint Verified")),
                Do = No("span", {}, void 0, No(s.a, {
                    variant: "caption",
                    gutterBottom: !0
                }, void 0, "\u26a0\ufe0f Custom Contract")),
                Oo = No(a.a, {
                    item: !0,
                    md: 2,
                    xs: 2,
                    container: !0,
                    direction: "column",
                    alignItems: "center",
                    justify: "center"
                }, void 0, No(I.a, {
                    color: "primary",
                    disabled: !0
                }, void 0, No(S.Icon, {
                    icon: j.a
                }))),
                zo = No("div", {}, void 0, "Sale Ends in:"),
                Po = No("div", {}, void 0, "Sale Starts in:"),
                Bo = No("br", {}),
                Fo = No(S.Icon, {
                    icon: N.a
                }),
                Ro = No(a.a, {
                    item: !0,
                    md: 3,
                    xs: 1,
                    container: !0,
                    direction: "column",
                    alignItems: "center",
                    justify: "center"
                }),
                Jo = No("div", {}, void 0, No(s.a, {}, void 0, "Please wait for SALES to be loaded from the blockchain."), No(s.a, {}, void 0, "You might be the first one here, get started by creating your own sale!"), No("br", {}), No("div", {
                    align: "center"
                }, void 0, No("img", {
                    height: "25px",
                    width: "25px",
                    src: "https://i.gifer.com/VAyR.gif",
                    alt: "Loading"
                })), No("br", {})),
                Qo = No("div", {}, void 0, No(s.a, {}, void 0, "No presales in this section yet! Get started by creating your own.")),
                Zo = No(a.a, {
                    item: !0,
                    md: 3,
                    xs: 1,
                    container: !0,
                    direction: "column",
                    alignItems: "center",
                    justify: "center"
                });
            var Wo;
            Object(r.withStyles)(_)((function(n) {
                var e = n.classes,
                    o = n.data,
                    t = n.filterEnabled,
                    i = Object(w.useHistory)(),
                    r = "",
                    c = !1;
                "" + o === "" ? c = !1 : (r = o,
                    c = !0);
                var l = function(n) {
                    switch (n) {
                        case "Error":
                            return h.a.bgError;
                        case "EndedX":
                            return h.a.bgWarning;
                        case "SuccessX":
                            return h.a.bgInfo;
                        case "RunningX":
                            return h.a.bgSuccess;
                        case "PendingX":
                            return h.a.bgGovernance;
                        case "PendingGovX":
                            return h.a.bgPending;
                        case "Default":
                        default:
                            return h.a.bgDefault
                    }
                };
                return No("div", {}, void 0, c ? No(a.a, {
                    container: !0,
                    spacing: 3
                }, void 0, r.map((function(n) {
                    return [No(a.a, {
                        item: !0,
                        xl: 3,
                        lg: 3,
                        md: 4,
                        sm: 12,
                        xs: 12
                    }, n, No(un, {
                        whiteBg: !0,
                        smallTitle: !0,
                        promoted: n.promoted,
                        noMargin: !0,
                        title: n.id,
                        imgIcon: !0,
                        desc: n.name,
                        imgUrl: n.photo
                    }, void 0, No("div", {
                        id: "mainCard" + n.saleNo,
                        onMouseEnter: function(e) {
                            var o = "cardToChange" + n.saleNo,
                                t = "mainCard" + n.saleNo;
                            document.getElementById(o).innerHTML = " Click for Details ",
                                document.getElementById(o).style = "Width: 100px",
                                document.getElementById(t).style = "opacity: 0.6"
                        },
                        onMouseLeave: function(e) {
                            var o = "cardToChange" + n.saleNo,
                                t = "mainCard" + n.saleNo;
                            document.getElementById(o).innerText = n.statusMessage,
                                document.getElementById(t).style = "background-color: primary"
                        },
                        onClick: function(e) {
                            i.push("/app/pages/defipresale?saleID=" + n.saleNo + "&chain=" + n.chainType)
                        }
                    }, void 0, No("div", {
                        className: e.secondaryWrap
                    }, void 0, No("div", {
                        className: e.centerItem,
                        id: "eachChip" + n.presaleNo
                    }, void 0, No(b.a, {
                        id: "cardToChange" + n.saleNo,
                        style: {
                            width: "95px"
                        },
                        label: n.statusMessage,
                        className: g()(e.chip, l(n.status))
                    }), No(p.a, {
                        variant: "static",
                        className: e.progressCircle,
                        size: 140,
                        thickness: 4,
                        value: n.currentStock / n.totalStock * 100
                    })), No("ul", {
                        className: e.storageInfo
                    }, void 0, No("li", {}, void 0, No(s.a, {
                        variant: "caption",
                        color: "primary",
                        gutterBottom: !0
                    }, void 0, "Raised:", No("span", {}, void 0, " " + n.currentStock, "/", n.totalStock)), jo, No(s.a, {
                        variant: "caption",
                        gutterBottom: !0
                    }, void 0, "Soft Cap:", " " + n.softCap, " ", n.currency), To, No(s.a, {
                        variant: "caption",
                        gutterBottom: !0
                    }, void 0, "Min:", n.minCont.toFixed(2), " / Max:", n.maxCont.toFixed(2)), Lo, n.dxMintVerified ? Eo : Do)))), No(x.a, {
                        className: e.divider
                    }), No(a.a, {
                        container: !0
                    }, void 0, Oo, No(a.a, {
                        item: !0,
                        md: 8,
                        xs: 8,
                        container: !0,
                        direction: "column",
                        alignItems: "center",
                        justify: "center"
                    }, void 0, Date.now() >= 1e3 * n.endTimeEx || n.currentStock == n.totalStock ? No("div", {}, void 0, No(s.a, {
                        align: "center",
                        style: {
                            fontSize: "80%"
                        }
                    }, void 0, "Presale", Bo, "Ended")) : No("div", {
                        align: "center",
                        style: {
                            fontSize: "80%"
                        }
                    }, void 0, Date.now() >= 1e3 * n.startTimeEx ? zo : Po, No(C.a, {
                        date: (o = n.startTimeEx,
                            t = n.endTimeEx,
                            Date.now() >= 1e3 * o ? 1e3 * t : 1e3 * o),
                        align: "center"
                    }))), No(a.a, {
                        item: !0,
                        md: 2,
                        xs: 2,
                        container: !0,
                        direction: "column",
                        alignItems: "center",
                        justify: "center"
                    }, void 0, No(I.a, {
                        color: "primary",
                        onClick: function(e) {
                            var o = "&chain=" + n.chainType;
                            window.open("" + "".concat(window.location.origin.toString(), "/app/pages/defipresale?saleID=") + n.saleNo + o, "_blank").focus()
                        }
                    }, void 0, Fo)))))];
                    var o, t
                }))) : No(k.a, {
                    elevation: 3,
                    style: {
                        paddingTop: "8px",
                        paddingBottom: "8px",
                        marginBottom: "20px"
                    }
                }, void 0, No(a.a, {
                    container: !0
                }, void 0, Ro, No(a.a, {
                    item: !0,
                    md: 6,
                    xs: 10,
                    container: !0,
                    direction: "column",
                    alignItems: "center",
                    justify: "center"
                }, void 0, t ? Jo : Qo), Zo)))
            }));

            function Yo(n, e, o, t) {
                Wo || (Wo = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var i = n && n.defaultProps,
                    r = arguments.length - 3;
                if (e || 0 === r || (e = {
                        children: void 0
                    }),
                    1 === r)
                    e.children = t;
                else if (r > 1) {
                    for (var c = new Array(r), a = 0; a < r; a++)
                        c[a] = arguments[a + 3];
                    e.children = c
                }
                if (e && i)
                    for (var l in i)
                        void 0 === e[l] && (e[l] = i[l]);
                else
                    e || (e = i || {});
                return {
                    $$typeof: Wo,
                    type: n,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: e,
                    _owner: null
                }
            }

            function Go(n, e) {
                return Date.now() >= 1e3 * n ? 1e3 * e : 1e3 * n
            }
            var Uo = Yo("br", {}),
                Vo = Yo("br", {}),
                Ho = Yo(a.a, {
                    item: !0,
                    md: 2,
                    xs: 2,
                    container: !0,
                    direction: "column",
                    alignItems: "center",
                    justify: "center"
                }, void 0, Yo(I.a, {
                    color: "primary",
                    disabled: !0
                }, void 0, Yo(S.Icon, {
                    icon: j.a
                }))),
                Xo = Yo("div", {}, void 0, "Sale Ends in:"),
                qo = Yo("div", {}, void 0, "Sale Starts in:"),
                Ko = Yo("span", {}, void 0, "Starts"),
                _o = Yo("span", {}, void 0, "Ends"),
                $o = Yo(s.a, {
                    align: "center"
                }, void 0, "Presale", Yo("br", {}), "Ended"),
                nt = Yo(S.Icon, {
                    icon: N.a
                }),
                et = Yo(a.a, {
                    item: !0,
                    md: 3,
                    xs: 1,
                    container: !0,
                    direction: "column",
                    alignItems: "center",
                    justify: "center"
                }),
                ot = Yo("div", {}, void 0, Yo(s.a, {}, void 0, "Please wait for SALES to be loaded from the blockchain."), Yo(s.a, {}, void 0, "You might be the first one here, get started by creating your own sale!"), Yo("br", {}), Yo("div", {
                    align: "center"
                }, void 0, Yo("img", {
                    height: "25px",
                    width: "25px",
                    src: "https://i.gifer.com/VAyR.gif",
                    alt: "Loading"
                })), Yo("br", {})),
                tt = Yo("div", {}, void 0, Yo(s.a, {}, void 0, "No presales in this section yet! Get started by creating your own.")),
                it = Yo(a.a, {
                    item: !0,
                    md: 3,
                    xs: 1,
                    container: !0,
                    direction: "column",
                    alignItems: "center",
                    justify: "center"
                });
            var rt;
            Object(r.withStyles)(_)((function(n) {
                var e = n.classes,
                    o = n.data,
                    t = n.filterEnabled,
                    i = Object(w.useHistory)(),
                    r = "",
                    c = !1;
                "" + o === "" ? c = !1 : (r = o,
                    c = !0);
                var l = function(n) {
                    switch (n) {
                        case "Error":
                            return h.a.bgError;
                        case "EndedX":
                            return h.a.bgWarning;
                        case "SuccessX":
                            return h.a.bgInfo;
                        case "RunningX":
                            return h.a.bgSuccess;
                        case "PendingX":
                            return h.a.bgGovernance;
                        case "PendingGovX":
                            return h.a.bgPending;
                        case "Default":
                        default:
                            return h.a.bgDefault
                    }
                };
                return Yo("div", {}, void 0, c ? Yo(a.a, {
                    container: !0,
                    spacing: 3
                }, void 0, r.map((function(n) {
                    return [Yo(a.a, {
                        item: !0,
                        xl: 3,
                        lg: 3,
                        md: 4,
                        sm: 12,
                        xs: 12
                    }, n, Yo(un, {
                        whiteBg: !0,
                        promoted: n.promoted,
                        noMargin: !0,
                        title: n.id,
                        imgIcon: !0,
                        desc: n.name,
                        imgUrl: n.photo
                    }, void 0, Yo("div", {
                        id: "mainCard" + n.saleNo,
                        onMouseEnter: function(e) {
                            var o = "cardToChange" + n.saleNo,
                                t = "mainCard" + n.saleNo;
                            document.getElementById(o).innerHTML = " Click for Details ",
                                document.getElementById(o).style = "Width: 100px",
                                document.getElementById(t).style = "opacity: 0.6"
                        },
                        onMouseLeave: function(e) {
                            var o = "cardToChange" + n.saleNo,
                                t = "mainCard" + n.saleNo;
                            document.getElementById(o).innerText = n.statusMessage,
                                document.getElementById(t).style = "background-color: primary"
                        },
                        onClick: function(e) {
                            "BSC" == n.chainType || "BNB" == n.currency ? i.push("/app/pages/defipresalev1?saleID=" + n.saleNo + "&chain=BSC") : i.push("/app/pages/defipresalev1?saleID=" + n.saleNo)
                        }
                    }, void 0, Yo("div", {
                        className: e.secondaryWrap
                    }, void 0, Yo("div", {
                        className: e.centerItem,
                        id: "eachChip" + n.presaleNo
                    }, void 0, Yo(b.a, {
                        id: "cardToChange" + n.saleNo,
                        style: {
                            width: "95px"
                        },
                        label: n.statusMessage,
                        className: g()(e.chip, l(n.status))
                    }), Yo(p.a, {
                        variant: "static",
                        className: e.progressCircle,
                        size: 140,
                        thickness: 4,
                        value: n.currentStock / n.totalStock * 100
                    })), Yo("ul", {
                        className: e.storageInfo
                    }, void 0, Yo("li", {}, void 0, Yo(s.a, {
                        variant: "caption",
                        color: "primary",
                        gutterBottom: !0
                    }, void 0, "Raised:", Yo("span", {}, void 0, n.currentStock, "/", n.totalStock)), Uo, Yo(s.a, {
                        variant: "caption",
                        gutterBottom: !0
                    }, void 0, "Soft Cap:", n.softCap, " ", n.currency), Vo, Yo(s.a, {
                        variant: "caption",
                        gutterBottom: !0
                    }, void 0, "Min:", n.minCont.toFixed(2), " / Max:", n.maxCont.toFixed(2), " ", n.currency))))), Yo(x.a, {
                        className: e.divider
                    }), Yo(a.a, {
                        container: !0
                    }, void 0, Ho, Yo(a.a, {
                        item: !0,
                        md: 8,
                        xs: 8,
                        container: !0,
                        direction: "column",
                        alignItems: "center",
                        justify: "center"
                    }, void 0, Date.now() >= 1e3 * n.endTimeEx || n.currentStock == n.totalStock ? Yo("div", {}, void 0, n.govPercent > 0 && Date.now() < 1e3 * n.govEnd && n.currentStock >= n.softCap ? Yo("div", {
                        align: "center"
                    }, void 0, Yo(s.a, {
                        align: "center"
                    }, void 0, "Governance", Date.now() < 1e3 * n.govStart ? Ko : _o, " ", "In:"), Yo(C.a, {
                        date: Go(n.govStart, n.govEnd),
                        align: "center"
                    })) : $o) : Yo("div", {
                        align: "center"
                    }, void 0, Date.now() >= 1e3 * n.startTimeEx ? Xo : qo, Yo(C.a, {
                        date: Go(n.startTimeEx, n.endTimeEx),
                        align: "center"
                    }))), Yo(a.a, {
                        item: !0,
                        md: 2,
                        xs: 2,
                        container: !0,
                        direction: "column",
                        alignItems: "center",
                        justify: "center"
                    }, void 0, Yo(I.a, {
                        color: "primary",
                        onClick: function(e) {
                            var o = "BSC" == n.chainType || "BNB" == n.currency ? "&chain=BSC" : "";
                            window.open("" + "".concat(window.location.origin.toString(), "/app/pages/defipresalev1?saleID=") + n.saleNo + o, "_blank").focus()
                        }
                    }, void 0, nt)))))]
                }))) : Yo(k.a, {
                    elevation: 3,
                    style: {
                        paddingTop: "8px",
                        paddingBottom: "8px",
                        marginBottom: "20px"
                    }
                }, void 0, Yo(a.a, {
                    container: !0
                }, void 0, et, Yo(a.a, {
                    item: !0,
                    md: 6,
                    xs: 10,
                    container: !0,
                    direction: "column",
                    alignItems: "center",
                    justify: "center"
                }, void 0, t ? ot : tt), it)))
            }));

            function ct(n, e, o, t) {
                rt || (rt = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var i = n && n.defaultProps,
                    r = arguments.length - 3;
                if (e || 0 === r || (e = {
                        children: void 0
                    }),
                    1 === r)
                    e.children = t;
                else if (r > 1) {
                    for (var c = new Array(r), a = 0; a < r; a++)
                        c[a] = arguments[a + 3];
                    e.children = c
                }
                if (e && i)
                    for (var l in i)
                        void 0 === e[l] && (e[l] = i[l]);
                else
                    e || (e = i || {});
                return {
                    $$typeof: rt,
                    type: n,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: e,
                    _owner: null
                }
            }
            var at = ct("br", {}),
                lt = ct("br", {}),
                st = ct("br", {}),
                dt = ct("span", {}, void 0, ct(s.a, {
                    variant: "caption",
                    gutterBottom: !0
                }, void 0, "\u2705 DxMint Verified")),
                bt = ct("span", {}, void 0, ct(s.a, {
                    variant: "caption",
                    gutterBottom: !0
                }, void 0, "\u26a0\ufe0f Custom Contract")),
                ft = ct(a.a, {
                    item: !0,
                    md: 2,
                    xs: 2,
                    container: !0,
                    direction: "column",
                    alignItems: "center",
                    justify: "center"
                }, void 0, ct(I.a, {
                    color: "primary",
                    disabled: !0
                }, void 0, ct(S.Icon, {
                    icon: j.a
                }))),
                pt = ct("div", {}, void 0, "Sale Ends in:"),
                ut = ct("div", {}, void 0, "Sale Starts in:"),
                gt = ct("br", {}),
                mt = ct(S.Icon, {
                    icon: N.a
                }),
                ht = ct(a.a, {
                    item: !0,
                    md: 3,
                    xs: 1,
                    container: !0,
                    direction: "column",
                    alignItems: "center",
                    justify: "center"
                }),
                yt = ct("div", {}, void 0, ct(s.a, {}, void 0, "Please wait for SALES to be loaded from the blockchain."), ct(s.a, {}, void 0, "You might be the first one here, get started by creating your own sale!"), ct("br", {}), ct("div", {
                    align: "center"
                }, void 0, ct("img", {
                    height: "25px",
                    width: "25px",
                    src: "https://i.gifer.com/VAyR.gif",
                    alt: "Loading"
                })), ct("br", {})),
                xt = ct("div", {}, void 0, ct(s.a, {}, void 0, "No presales in this section yet! Get started by creating your own.")),
                vt = ct(a.a, {
                    item: !0,
                    md: 3,
                    xs: 1,
                    container: !0,
                    direction: "column",
                    alignItems: "center",
                    justify: "center"
                });
            Object(r.withStyles)(_)((function(n) {
                var e = n.classes,
                    o = n.data,
                    t = n.filterEnabled,
                    i = Object(w.useHistory)(),
                    r = "",
                    c = !1;
                "" + o === "" ? c = !1 : (r = o,
                    c = !0);
                var l = function(n) {
                    switch (n) {
                        case "Error":
                            return h.a.bgError;
                        case "EndedX":
                            return h.a.bgWarning;
                        case "SuccessX":
                            return h.a.bgInfo;
                        case "RunningX":
                            return h.a.bgSuccess;
                        case "PendingX":
                            return h.a.bgGovernance;
                        case "PendingGovX":
                            return h.a.bgPending;
                        case "Default":
                        default:
                            return h.a.bgDefault
                    }
                };
                return ct("div", {}, void 0, c ? ct(a.a, {
                    container: !0,
                    spacing: 3
                }, void 0, r.map((function(n) {
                    return [ct(a.a, {
                        item: !0,
                        xl: 3,
                        lg: 3,
                        md: 4,
                        sm: 12,
                        xs: 12
                    }, n, ct(un, {
                        whiteBg: !0,
                        smallTitle: !0,
                        promoted: n.promoted,
                        noMargin: !0,
                        title: n.id,
                        imgIcon: !0,
                        desc: n.name,
                        imgUrl: n.photo
                    }, void 0, ct("div", {
                        id: "mainCard" + n.saleNo,
                        onMouseEnter: function(e) {
                            var o = "cardToChange" + n.saleNo,
                                t = "mainCard" + n.saleNo;
                            document.getElementById(o).innerHTML = " Click for Details ",
                                document.getElementById(o).style = "Width: 100px",
                                document.getElementById(t).style = "opacity: 0.6"
                        },
                        onMouseLeave: function(e) {
                            var o = "cardToChange" + n.saleNo,
                                t = "mainCard" + n.saleNo;
                            document.getElementById(o).innerText = n.statusMessage,
                                document.getElementById(t).style = "background-color: primary"
                        },
                        onClick: function(e) {
                            i.push("/app/v2_9/defipresale?saleID=" + n.saleNo + "&chain=" + n.chainType)
                        }
                    }, void 0, ct("div", {
                        className: e.secondaryWrap
                    }, void 0, ct("div", {
                        className: e.centerItem,
                        id: "eachChip" + n.presaleNo
                    }, void 0, ct(b.a, {
                        id: "cardToChange" + n.saleNo,
                        style: {
                            width: "95px"
                        },
                        label: n.statusMessage,
                        className: g()(e.chip, l(n.status))
                    }), ct(p.a, {
                        variant: "static",
                        className: e.progressCircle,
                        size: 140,
                        thickness: 4,
                        value: n.currentStock / n.totalStock * 100
                    })), ct("ul", {
                        className: e.storageInfo
                    }, void 0, ct("li", {}, void 0, ct(s.a, {
                        variant: "caption",
                        color: "primary",
                        gutterBottom: !0
                    }, void 0, "Raised:", ct("span", {}, void 0, " " + n.currentStock, "/", n.totalStock)), at, ct(s.a, {
                        variant: "caption",
                        gutterBottom: !0
                    }, void 0, "Soft Cap:", " " + n.softCap, " ", n.currency), lt, ct(s.a, {
                        variant: "caption",
                        gutterBottom: !0
                    }, void 0, "Min:", n.minCont.toFixed(2), " / Max:", n.maxCont.toFixed(2)), st, n.dxMintVerified ? dt : bt)))), ct(x.a, {
                        className: e.divider
                    }), ct(a.a, {
                        container: !0
                    }, void 0, ft, ct(a.a, {
                        item: !0,
                        md: 8,
                        xs: 8,
                        container: !0,
                        direction: "column",
                        alignItems: "center",
                        justify: "center"
                    }, void 0, Date.now() >= 1e3 * n.endTimeEx || n.currentStock == n.totalStock ? ct("div", {}, void 0, ct(s.a, {
                        align: "center",
                        style: {
                            fontSize: "80%"
                        }
                    }, void 0, "Presale", gt, "Ended")) : ct("div", {
                        align: "center",
                        style: {
                            fontSize: "80%"
                        }
                    }, void 0, Date.now() >= 1e3 * n.startTimeEx ? pt : ut, ct(C.a, {
                        date: (o = n.startTimeEx,
                            t = n.endTimeEx,
                            Date.now() >= 1e3 * o ? 1e3 * t : 1e3 * o),
                        align: "center"
                    }))), ct(a.a, {
                        item: !0,
                        md: 2,
                        xs: 2,
                        container: !0,
                        direction: "column",
                        alignItems: "center",
                        justify: "center"
                    }, void 0, ct(I.a, {
                        color: "primary",
                        onClick: function(e) {
                            var o = "&chain=" + n.chainType;
                            window.open("" + "".concat(window.location.origin.toString(), "/app/v2_9/defipresale?saleID=") + n.saleNo + o, "_blank").focus()
                        }
                    }, void 0, mt)))))];
                    var o, t
                }))) : ct(k.a, {
                    elevation: 3,
                    style: {
                        paddingTop: "8px",
                        paddingBottom: "8px",
                        marginBottom: "20px"
                    }
                }, void 0, ct(a.a, {
                    container: !0
                }, void 0, ht, ct(a.a, {
                    item: !0,
                    md: 6,
                    xs: 10,
                    container: !0,
                    direction: "column",
                    alignItems: "center",
                    justify: "center"
                }, void 0, t ? yt : xt), vt)))
            }));
            var kt, wt = o("6d718b77e62c18a4d9b3"),
                At = o.n(wt);
            o("6bd44007027bab998389"),
                o("9ac6f79a66b6a73a8ffa"),
                o("3f28c8d3a90f76203810"),
                o("e4dc84676b0c76afa45a"),
                o("f2c6a753886bdb90da54"),
                o("29a0bd83601ce40a59e6"),
                o("59a41fff0033f9a55224"),
                o("4e6c1ca99a68ea366d07"),
                o("9b37dd762206c53cc88c"),
                o("506af4fc792db77fcf83");

            function Ct(n, e, o, t) {
                kt || (kt = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var i = n && n.defaultProps,
                    r = arguments.length - 3;
                if (e || 0 === r || (e = {
                        children: void 0
                    }),
                    1 === r)
                    e.children = t;
                else if (r > 1) {
                    for (var c = new Array(r), a = 0; a < r; a++)
                        c[a] = arguments[a + 3];
                    e.children = c
                }
                if (e && i)
                    for (var l in i)
                        void 0 === e[l] && (e[l] = i[l]);
                else
                    e || (e = i || {});
                return {
                    $$typeof: kt,
                    type: n,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: e,
                    _owner: null
                }
            }
            var Mt = Ct("span", {}, void 0, "Audit"),
                It = Ct("span", {}, void 0, "DxMint"),
                St = Ct("span", {}, void 0, "KYC"),
                Nt = Ct("span", {}),
                jt = Ct("strong", {}, void 0, "Launch Type"),
                Tt = Ct("br", {}),
                Lt = Ct("strong", {}, void 0, "Soft Cap"),
                Et = Ct("br", {}),
                Dt = Ct("strong", {}, void 0, "Liquidity"),
                Ot = Ct("br", {}),
                zt = Ct("strong", {}, void 0, "Unlocks in"),
                Pt = Ct("br", {}),
                Bt = Ct("br", {}),
                Ft = Ct("div", {}, void 0, "Sale Ends in:"),
                Rt = Ct("div", {}, void 0, "Sale Starts in:"),
                Jt = Ct("strong", {}, void 0, "Sale", Ct("br", {}), "Ended"),
                Qt = Ct(a.a, {
                    item: !0,
                    md: 3,
                    xs: 1,
                    container: !0,
                    direction: "column",
                    alignItems: "center",
                    justify: "center"
                }),
                Zt = Ct(s.a, {}, void 0, "Please wait for SALES to be loaded from the blockchain."),
                Wt = Ct("br", {}),
                Yt = Ct("br", {}),
                Gt = Ct("div", {}, void 0, Ct(s.a, {}, void 0, "No sales in this section yet! Get started by creating your own.")),
                Ut = Ct(a.a, {
                    item: !0,
                    md: 3,
                    xs: 1,
                    container: !0,
                    direction: "column",
                    alignItems: "center",
                    justify: "center"
                });
            Object(r.withStyles)(_)((function(n) {
                var e = n.classes,
                    t = n.data,
                    i = n.filterEnabled,
                    r = Object(w.useHistory)(),
                    c = "",
                    l = !1;
                "" + t === "" ? l = !1 : (c = t,
                    l = !0);
                var d = function(n) {
                    switch (n) {
                        case "Error":
                            return h.a.bgError;
                        case "EndedX":
                            return h.a.bgWarning;
                        case "SuccessX":
                            return h.a.bgInfo;
                        case "RunningX":
                            return h.a.bgSuccess;
                        case "PendingX":
                            return h.a.bgGovernance;
                        case "PendingGovX":
                            return h.a.bgPending;
                        case "Default":
                        default:
                            return h.a.bgDefault
                    }
                };
                return Ct("div", {}, void 0, l ? Ct(a.a, {
                    container: !0,
                    spacing: 3
                }, void 0, c.map((function(n) {
                    return [Ct(a.a, {
                        item: !0,
                        xl: 3,
                        lg: 4,
                        md: 6,
                        sm: 6,
                        xs: 12
                    }, n, Ct(k.a, {
                        elevation: 1,
                        align: "center",
                        alignItems: "center",
                        style: {
                            paddingTop: "20px",
                            paddingBottom: "20px",
                            paddingLeft: "2px",
                            paddingRight: "2px",
                            borderRadius: "6%"
                        }
                    }, void 0, Ct("div", {
                        id: "mainCard" + n.saleNo,
                        onMouseEnter: function(e) {
                            var o = "cardToChange" + n.saleNo,
                                t = "mainCard" + n.saleNo;
                            document.getElementById(o).innerHTML = " Click for Details ",
                                document.getElementById(t).style = "opacity: 0.6"
                        },
                        onMouseLeave: function(e) {
                            var o = "cardToChange" + n.saleNo,
                                t = "mainCard" + n.saleNo;
                            document.getElementById(o).innerText = n.statusMessage,
                                document.getElementById(t).style = "background-color: primary"
                        },
                        onClick: function(e) {
                            r.push("/app/v3/defipresale?saleID=" + n.saleNo + "&chain=" + n.chainType)
                        }
                    }, void 0, Ct(s.a, {
                        style: {
                            fontSize: "80%"
                        }
                    }, void 0, Ct("strong", {}, void 0, n.name, " (", Ct("span", {
                        style: {
                            color: "#2196F3"
                        }
                    }, void 0, n.id), ")")), Ct("div", {
                        className: e.secondaryWrap
                    }, void 0, Ct("div", {
                        className: e.centerItem,
                        id: "eachChip" + n.presaleNo,
                        style: {
                            marginTop: "4px"
                        }
                    }, void 0, Ct("img", {
                        className: g()(e.centerImg),
                        id: "cardToChange" + n.saleNo,
                        style: {
                            borderRadius: "50%",
                            width: "100px",
                            height: "100px"
                        },
                        src: (i = n.photo,
                            "PNG" != ("" + i).substr(i.length - 3, i.length).toUpperCase() && "JPG" != ("" + i).substr(i.length - 3, i.length).toUpperCase() && "GIF" != ("" + i).substr(i.length - 3, i.length).toUpperCase() && "JPEG" != ("" + i).substr(i.length - 4, i.length).toUpperCase() || "HTTPS" != ("" + i).substr(0, 5).toUpperCase() ? "https://i.postimg.cc/MTLDLghy/DX-white.png" : i),
                        onError: function(n) {
                            n.target.onerror = null,
                                n.target.src = "https://i.postimg.cc/wMfDQ70V/dx-New-Black.png"
                        }
                    }), Ct(p.a, {
                        variant: "static",
                        className: e.progressCircle,
                        size: 120,
                        thickness: 4,
                        value: n.currentStock / n.totalStock * 100
                    })), Ct("strong", {}, void 0, Ct(s.a, {
                        color: "primary",
                        style: {
                            marginBottom: "5px"
                        }
                    }, void 0, Ct("span", {
                        style: {
                            fontSize: "90%"
                        }
                    }, void 0, Ct("strong", {}, void 0, " " + n.currentStock, "/", n.totalStock, " ", n.currency))), n.auditedContract ? Ct("span", {}, void 0, Ct(b.a, {
                        color: "secondary",
                        label: Mt,
                        style: {
                            marginLeft: "5px",
                            fontSize: "70%",
                            height: "30px",
                            backgroundColor: "#78c0fa",
                            color: "black"
                        }
                    })) : Ct("span", {}, void 0, n.dxMintVerified ? Ct(b.a, {
                        label: It,
                        style: {
                            marginLeft: "5px",
                            backgroundColor: "#78c0fa",
                            fontSize: "70%",
                            height: "30px"
                        }
                    }) : null), Ct(b.a, {
                        label: n.statusMessage,
                        style: "PendingX" == n.status ? {
                            marginLeft: "5px",
                            fontSize: "70%",
                            height: "30px"
                        } : {
                            marginLeft: "5px",
                            fontSize: "70%",
                            height: "30px",
                            color: "black"
                        },
                        className: g()(d(n.status))
                    }), n.kycOwner ? Ct("span", {}, void 0, Ct(b.a, {
                        color: "secondary",
                        label: St,
                        style: {
                            marginLeft: "5px",
                            fontSize: "70%",
                            height: "30px",
                            backgroundColor: "#74d68b",
                            color: "black"
                        }
                    })) : Nt), Ct(k.a, {
                        elevation: 0,
                        style: {
                            marginTop: "10px",
                            paddingTop: "10px",
                            paddingBottom: "10px",
                            width: "100%",
                            backgroundColor: "#F4FCFF"
                        }
                    }, void 0, Ct(a.a, {
                        container: !0,
                        direction: "row"
                    }, void 0, Ct(a.a, {
                        item: !0,
                        xs: 6,
                        container: !0,
                        direction: "row",
                        alignItems: "center",
                        justify: "center"
                    }, void 0, Ct(s.a, {
                        style: {
                            fontSize: "80%",
                            marginTop: "4px"
                        }
                    }, void 0, jt, " ", Tt, "IDO")), Ct(a.a, {
                        item: !0,
                        xs: 6,
                        container: !0,
                        direction: "row",
                        alignItems: "center",
                        justify: "center"
                    }, void 0, Ct(s.a, {
                        style: {
                            fontSize: "80%",
                            marginTop: "4px"
                        }
                    }, void 0, Lt, Et, " " + n.softCap, " ", n.currency)), Ct(a.a, {
                        item: !0,
                        xs: 6,
                        container: !0,
                        direction: "row",
                        alignItems: "center",
                        justify: "center"
                    }, void 0, Ct(s.a, {
                        style: {
                            fontSize: "80%",
                            marginTop: "4px"
                        }
                    }, void 0, Dt, " ", Ot, n.minCont, "%")), Ct(a.a, {
                        item: !0,
                        xs: 6,
                        container: !0,
                        direction: "row",
                        alignItems: "center",
                        justify: "center"
                    }, void 0, Ct(s.a, {
                        style: {
                            fontSize: "80%",
                            marginTop: "4px"
                        }
                    }, void 0, Ct("span", {
                        style: {
                            textAlign: "left"
                        }
                    }, void 0, zt), Pt, " ", ((1e3 * n.maxCont - Date.now()) / 864e5).toFixed(0), " ", "Days")))))), Bt, Ct("div", {
                        align: "center"
                    }, void 0, Ct(a.a, {
                        container: !0,
                        direction: "row",
                        spacing: 1
                    }, void 0, Ct(a.a, {
                        item: !0,
                        md: 3,
                        xs: 3,
                        alignItems: "right",
                        justify: "flex-end"
                    }, void 0, n.website.length > 9 ? Ct("a", {
                        href: n.website,
                        target: "_blank"
                    }, void 0, Ct(S.Icon, {
                        icon: "eva:globe-2-outline",
                        style: {
                            color: "#2196F3",
                            fontSize: "17px"
                        }
                    })) : null, n.telegram.length > 9 ? Ct("a", {
                        href: n.telegram,
                        target: "_blank"
                    }, void 0, Ct(S.Icon, {
                        icon: "la:telegram",
                        style: {
                            color: "#2196F3",
                            fontSize: "18px",
                            marginLeft: "12px"
                        }
                    })) : Ct("span", {}, void 0, n.discord.length > 9 ? Ct("a", {
                        href: n.discord,
                        target: "_blank"
                    }, void 0, Ct(S.Icon, {
                        icon: "la:discord",
                        style: {
                            color: "#2196F3",
                            fontSize: "19px",
                            marginLeft: "12px"
                        }
                    })) : null)), Ct(a.a, {
                        item: !0,
                        md: 6,
                        xs: 6,
                        alignItems: "center",
                        justifyContent: "center"
                    }, void 0, Ct("div", {
                        align: "center"
                    }, void 0, Date.now() >= 1e3 * n.endTimeEx || n.currentStock == n.totalStock ? Ct("div", {}, void 0, Ct(s.a, {
                        align: "center",
                        style: {
                            fontSize: "100%"
                        }
                    }, void 0, Jt)) : Ct("div", {
                        align: "center",
                        style: {
                            fontSize: "100%"
                        }
                    }, void 0, Ct("strong", {}, void 0, Date.now() >= 1e3 * n.startTimeEx ? Ft : Rt), Ct(C.a, {
                        date: (o = n.startTimeEx,
                            t = n.endTimeEx,
                            Date.now() >= 1e3 * o ? 1e3 * t : 1e3 * o),
                        align: "center"
                    })))), Ct(a.a, {
                        item: !0,
                        md: 3,
                        xs: 3,
                        alignItems: "center",
                        justify: "center"
                    }, void 0, Ct("span", {
                        style: {
                            fontSize: "85%",
                            color: "#2196F3"
                        }
                    }, void 0, Ct(At.a, {
                        href: "/app/v3/defipresale?saleID=" + n.saleNo + "&chain=" + n.chainType,
                        target: "_blank",
                        style: {
                            textDecoration: "None",
                            color: "#2196F3"
                        }
                    }, void 0, "View", " ", Ct(S.Icon, {
                        style: {
                            marginLeft: "5px"
                        },
                        icon: N.a
                    }))))))))];
                    var o, t, i
                }))) : Ct(k.a, {
                    elevation: 0,
                    style: {
                        paddingTop: "8px",
                        paddingBottom: "8px",
                        marginBottom: "20px"
                    }
                }, void 0, Ct(a.a, {
                    container: !0
                }, void 0, Qt, Ct(a.a, {
                    item: !0,
                    md: 6,
                    xs: 10,
                    container: !0,
                    direction: "column",
                    alignItems: "center",
                    justify: "center"
                }, void 0, i ? Ct("div", {}, void 0, Zt, Wt, Ct("div", {
                    align: "center"
                }, void 0, Ct("img", {
                    height: "100px",
                    width: "100px",
                    src: o("369440987c47420c551d"),
                    alt: "Loading"
                })), Yt) : Gt), Ut)))
            }));
            var Vt, Ht = o("0d939196e59ed73c94e6"),
                Xt = o("b344b807b8a0dc6068bf");

            function qt(n, e, o, t) {
                Vt || (Vt = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var i = n && n.defaultProps,
                    r = arguments.length - 3;
                if (e || 0 === r || (e = {
                        children: void 0
                    }),
                    1 === r)
                    e.children = t;
                else if (r > 1) {
                    for (var c = new Array(r), a = 0; a < r; a++)
                        c[a] = arguments[a + 3];
                    e.children = c
                }
                if (e && i)
                    for (var l in i)
                        void 0 === e[l] && (e[l] = i[l]);
                else
                    e || (e = i || {});
                return {
                    $$typeof: Vt,
                    type: n,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: e,
                    _owner: null
                }
            }

            function Kt(n, e, o, t, i, r, c) {
                try {
                    var a = n[r](c),
                        l = a.value
                } catch (n) {
                    return void o(n)
                }
                a.done ? e(l) : Promise.resolve(l).then(t, i)
            }

            function _t(n) {
                return function() {
                    var e = this,
                        o = arguments;
                    return new Promise((function(t, i) {
                        var r = n.apply(e, o);

                        function c(n) {
                            Kt(r, t, i, c, a, "next", n)
                        }

                        function a(n) {
                            Kt(r, t, i, c, a, "throw", n)
                        }
                        c(void 0)
                    }))
                }
            }
            var $t = "0x0",
                ni = !1;

            function ei() {
                return (ei = _t(regeneratorRuntime.mark((function n(e) {
                    return regeneratorRuntime.wrap((function(n) {
                        for (;;)
                            switch (n.prev = n.next) {
                                case 0:
                                    return $t = e,
                                        ni = !0,
                                        n.next = 4,
                                        new Promise((function(n) {
                                            return setTimeout(n, 1e3)
                                        }));
                                case 4:
                                    $t = "0x0",
                                        ni = !1;
                                case 6:
                                case "end":
                                    return n.stop()
                            }
                    }), n)
                })))).apply(this, arguments)
            }
            var oi = qt(Ht.Grid, {
                    container: !0,
                    direction: "row"
                }, void 0, qt(Ht.Grid, {
                    item: !0,
                    sm: 4,
                    xs: 12
                }, void 0, qt("strong", {}, void 0, "Token Name "), "(Type)"), qt(Ht.Grid, {
                    item: !0,
                    sm: 4,
                    xs: 12
                }, void 0, qt("strong", {}, void 0, "Token Address")), qt(Ht.Grid, {
                    item: !0,
                    sm: 4,
                    xs: 12
                }, void 0, qt("strong", {}, void 0, "Options"))),
                ti = qt(S.Icon, {
                    icon: "eva:checkmark-circle-2-outline"
                }),
                ii = qt(S.Icon, {
                    icon: "fa-regular:copy"
                }),
                ri = qt(S.Icon, {
                    icon: "charm:certificate"
                });
            var ci = Object(r.withStyles)(_)((function(n) {
                var e = n.activeChainInWallet,
                    o = n.tokenList;
                return n.clickMe,
                    qt("div", {}, void 0, "" != o ? qt("div", {}, void 0, qt(Ht.Typography, {
                        style: {
                            fontSize: "70%",
                            backgroundColor: "dark" === Object(on.a)() ? "#424e65" : "#f2f9ff",
                            paddingTop: "5px",
                            paddingBottom: "5px"
                        }
                    }, void 0, oi), o.map((function(o) {
                        return [qt("div", {
                            style: {
                                marginTop: "30px"
                            }
                        }, Object(Xt.a)(), qt(Ht.Typography, {
                            style: {
                                fontSize: "70%"
                            }
                        }, void 0, qt(Ht.Grid, {
                            style: {
                                display: "flex",
                                alignItems: "center"
                            },
                            container: !0,
                            direction: "row"
                        }, void 0, qt(Ht.Grid, {
                            item: !0,
                            sm: 4,
                            xs: 12
                        }, void 0, qt("div", {}, void 0, qt("strong", {}, void 0, o.tokenName, " "), "(", o.tokenType, ")")), qt(Ht.Grid, {
                            item: !0,
                            sm: 4,
                            xs: 12
                        }, void 0, qt("div", {}, void 0, o.tokenAddress.substring(0, 6) + "..." + o.tokenAddress.substring(38, 42) + "  ", qt(Ht.Tooltip, {
                            title: "Copy to clipboard!",
                            placement: "bottom"
                        }, void 0, qt(Ht.IconButton, {
                            variant: "text",
                            style: {
                                fontSize: "120%",
                                padding: "-50px",
                                marginTop: "-50px",
                                marginBottom: "-50px"
                            },
                            onClick: function() {
                                navigator.clipboard.writeText(o.tokenAddress),
                                    function(n) {
                                        ei.apply(this, arguments)
                                    }(o.tokenAddress)
                            }
                        }, void 0, ni && $t == o.tokenAddress ? ti : ii)))), qt(Ht.Grid, {
                            item: !0,
                            sm: 4,
                            xs: 12
                        }, void 0, qt(Ht.Button, {
                            variant: "outlined",
                            style: {
                                fontSize: "100%"
                            },
                            onClick: function() {
                                return n.clickMe(o.tokenType, o.tokenAddress)
                            }
                        }, void 0, "Manage"), qt(Ht.IconButton, {
                            style: {
                                width: "42px",
                                height: "42px"
                            },
                            color: "primary",
                            variant: "text",
                            component: w.Link,
                            to: "/dxcertificate?cer=".concat(o.tokenAddress, "&chain=").concat(e, "&type=mint"),
                            target: "_blank"
                        }, void 0, ri)))), qt("hr", {
                            style: {
                                opacity: "0.3"
                            }
                        }))]
                    })).reverse()) : null)
            }));
            o.d(e, "a", (function() {
                    return Se
                })),
                o.d(e, "c", (function() {
                    return Re
                })),
                o.d(e, "b", (function() {
                    return un
                })),
                o.d(e, "d", (function() {
                    return bo
                })),
                o.d(e, "e", (function() {
                    return ci
                }))
        },
        "4e6c1ca99a68ea366d07": function(n, e, o) {
            n.exports = o.p + "1b6ce9a68217e27f9bf4a93b4da4d67a.png"
        },
        5: function(n, e) {},
        "506af4fc792db77fcf83": function(n, e) {
            n.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAACXBIWXMAABcSAAAXEgFnn9JSAAAGi2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4xLWMwMDAgNzkuYTg3MzFiOSwgMjAyMS8wOS8wOS0wMDozNzozOCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMS0xMS0zMFQwNzo1MjoxMiswMjowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0xMS0zMFQwNzo1MjoxMiswMjowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjEtMTEtMzBUMDc6NTI6MTIrMDI6MDAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjFlMGJlMDAtOTFkNy0zMzRlLWJhMzctMjZhOTRmNzlkYTI2IiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZjEzMjFkOGUtNDY3My0yNjQyLTlhMDQtYTE2MGI0ZWUxODJhIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NmE2ZDNiN2QtMTBmYy0xZjQ0LWE2OTQtMTYxNDRlNzY2MDMzIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NmE2ZDNiN2QtMTBmYy0xZjQ0LWE2OTQtMTYxNDRlNzY2MDMzIiBzdEV2dDp3aGVuPSIyMDIxLTExLTMwVDA3OjUyOjEyKzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjMuMCAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjIxZTBiZTAwLTkxZDctMzM0ZS1iYTM3LTI2YTk0Zjc5ZGEyNiIgc3RFdnQ6d2hlbj0iMjAyMS0xMS0zMFQwNzo1MjoxMiswMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIzLjAgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8cGhvdG9zaG9wOlRleHRMYXllcnM+IDxyZGY6QmFnPiA8cmRmOmxpIHBob3Rvc2hvcDpMYXllck5hbWU9Ikhhc2hFeCIgcGhvdG9zaG9wOkxheWVyVGV4dD0iSGFzaEV4Ii8+IDxyZGY6bGkgcGhvdG9zaG9wOkxheWVyTmFtZT0iIyIgcGhvdG9zaG9wOkxheWVyVGV4dD0iIyIvPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOlRleHRMYXllcnM+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+v75x+AAAHotJREFUeJztnXtwVdW9xz9xtGoUy0u9PIQAxwcmIEgRUWukIQo6PMZ7uN72okhvK2Knrdepvcn0dqrj3ElGOmqn01iYTjsU2l5rrhPE1rGGAi1iFJWiiaBEE6nANby8jgk6XNj3j3VOXpzHPmevtdd+/D4zP0dNztq/ZK/fN3uv9Vu/X4njOAiCEE/OBCgpKbHth1A8o4ExwCjgYuAiYCQwAhgGDAUuAM4HSoFzgbOBs4AzUmOcAk4AnwPHgR7gU+AT4GPgGHAEOAx0AR8BB4H9wAGjP51gDMdxKHEcRwQg+IwALgUSwCRgIlAGjAfGAbZuoAPsAz4AOoH3gfeAdmAvSjSEgCICEEwuBKYAFUA5MDllI206VQSHgd0pawNagbeAQzadEvoQAQgGE4AZwNXAdOAq1ON8FDkI7AJ2Am8ArwMdVj2KMSIAdhgGzAZmAdcAM1GP+HHkCLADeBV4BXgZtd4g+IAIgH8kgC8D16fsCrvuBJY9wEsp+ytqLUEwhAiAWS4HbkpZJdF9rDfFQWArsCVl79h0JoqIAOhnNDA3ZVWp/xa8cwDYBDSnTLYeNSACoI+bgVtSVm7Zl6jTBryQsj9Z9iXUiAB4YzxwG3ArMJ++pBrBH04BzwN/BP6AykUQCkAEoDiuBRakbIplXwTFW8DGlLVY9iU0OI6T+ofghvnAalQarCMWSPsodY/mZ7mHQj9EANxxO/AbVI687Qku5s6Op+7Z7Rnup5BCBCA3SeAp1Lum7QktVpydSt3DJMJpiABkZiHwW+Ak9iewmB47mbqnCxF6EQEYyBzgF0A39iesmBnrTt3jOQgiACmmAI+ikktsT1Axf+xA6p7Hehcn7gIwHLgfdTLN9oQUs2M7UXNgODEkzgKwGNiA/QkoFgzbgJoTsSKOAnAl8GPgKPYnnViw7ChqblxJTIibACxHHTO1PdHEgm0voeZK5ImLAEwFfoYqeml7comFw06g5sxUIkwcBOAuYDv2J5RYOG07ag5FkigLQBmwClXa2vYkEgu3fYqaS2VEjKgKwHzgOexPHLFo2XNE7JBRFAXgO6h69LYni1g0bS9qjkWCKAnABOAJ7E8QsXjYE6g5F2qiIgCVQBP2J4VYvKwJNfdCSxQE4GvAa9ifDGLxtNdQczCUhF0AHkAO8IjZtwOouRg6wioAw4F65Ly+WHDsJGpOhupQURgFYBKwBvs3XEwsk61BzdFQELaqwNOBWmCJbUf8Ztp1Iym7VO8fl/89+hmbN+7TOqYJPwGa1r6rfUyDPA3UoY4aBxrHcTjTthMuuQH4ATDPtiM2+O5DN1IxQ39nse/fvVGrCJjyE0IlAkuAIcB/Atss+5KXMDSzqEb9MmMZ/ABjxg81Mq7uJwBTfu74y9+NjGuQeag5W23bkXwE/QngNuCHqFbasWTadSMZNvJc7eO+t+eI1vHGTDjXiJ/HDh9nf8dx7eP6wI3AI8AXUJ2LAkmQBWAB8CNghm1HbDJ1ppn+on9//5jW8aoWXqp1vDR73z5kZFyfmAU8jHrS3mjZl4wEVQAWAA8BV1v2wzpTvmTmnfqt1w5qHW/S5JFax0vzQbteobLADNRchgCKQBDXAG5D/eWPffADXDJxmJFx39yht8P25VMu0jpemh1/0btOYYmrUXP6NtuODCZoAlCNeueP9WN/fyZdMUL7mMcOH+dv2w9rHdOEn6B/odIiM1BzO1ALg0ESgBuA/yDGC36DWbzsMiPj7v/gY63jzVkwTut4aXQvVAaAWag5foNtR9IERQCmo/b5b7TtSJC4rMLMY/XuXV1ax5t5oxkBeOctvX4GhBtRc326bUcgGAIwCZXhF9t9/mxMvsqMALzbqjewxifMrFO8t1vva0qAmIea89bThm0LwHDg34lheq8bEoZW1nVn1V165YVax0uz6dm9RsYNCEtQc9/qASLbAvB94JuWfQgk064byTmlZ2kf98C+T7SOJwlAnvgmKgasYUUAUicQHwAetHH9MHBdlZmKU7of/yUByDMPAg/YOpVrRQBKSkq+BnzP1vXDwITLzDwZdrx7VOt4kgDkmTOA76ViwsrF/aYS9dffTIpbRDC1A7B9U4fW8SQBSAujUDFR6feF/RaACcC/IYk+eRk97gLtY37WcyIUCUCf9ZyIUgKQW2agYsPXasN+C8B3gUU+XzN0mEoAate8rWYqAWi/5oXKELEIFSO+4acAfAeff7iwMn32WCPj7nv/Y63jSQKQEb6Lj81H/BKA+cC3fbpW6Bk3caiRcXe+/KHW8UwlAOn2M4R8G5/akPkhAGXAt4CED9eKBHFPAAphBSDdJFAxU2b6Qn4IwLcI4DHIoBL3BKAD+z6JQwKQG25DxY5RTAvAXcBKw9eIFHFPAPqw82Mj44aUlagYMoZJAZgK3AucZ/AakSPuCUBtb/yPkXFDynmoGJpq6gImBWAFMNvg+JEk7glAu//2kZFxQ8xsVCwZwZQALAfuMTR2ZBkz4VxJAIpfApAb7kHFlHZMCMCVwDcIbsHRwDLzxkuMjCsJQKHnTFRMXal7YBMC8HXgOgPjRh5JAIp1AlA+rkPFllZ0C8BiDDgZF0y9V0sCUGT4OirGtKGzOehw4FfAQh2DhYXFyy7jB48FqtCrADz9y108+mDgW/MVw7Oo9QDP2zqO42h9AriLmAU/mHtsF4QsLERjboAuAZgCLNM0Vqgw9dgueCPi9QSWoWLOM7oE4E5gmqaxQoWphhiCNyK+nTgNFXOe0SEAc4ClGsYJHaa2wwRvRLChSCaWomLPEzoE4F+IaXkvU9thgjdisp04ChV7nvAqAAuBr3p1IqyYatwheCPCDUUG81U8Lrx7FYB/Bko9jhFaTJ3bF7wR8YYi/SlFxWDReBGAJHCHl4uHGVPn9gVvxKShSH/uQMViUXgRgCUePx9qTJ3bF7wRo4Yiac7AQ2u9YgP4di8XjQLlV/+DbReEDMSooUh/lqBismCKFYB/BLTkD4cVU/XwBG9EPAEoGyWomCyYYgRgPkWqTVQwVQ9P8E7EE4BycTtFVBIuRgAWA+cU8bnIYKoenuCNmCQAZeMcijgpWKgAXFvMRaLGlC/FMu8p8MQkASgXi1Ex6ppCBWABEPvsF1N1+wRvSD0BLkLFqGsKEYDxhQ4eRUzV7RO8Iw1FABWj491+cyECcBuajiCGGVN1+wRvSEORXqZQQCOeQgTg1sJ9iR5SACSYSEORAbiOVbcCcDM+NSsMOlIAJJhIQ5EBzEfFbF7clu6+hRin/fbnSFe3lnGGjyw1kktw7PBxjh7u0TZeWPyUhiIDOAMVs3/K941uioKOTg1Ursc3AeDhn3+FW5dM1j7ur554lYZHdmgbz5SfES7aGRTaUE8BB7J9g9uioHOR4NeOqVeJsLQA092sVDiNclTs5sStAAiaMdVaKwwtwACa1r5rZFxhAJ4F4HKgSo8vQhpTtQTD0gIs5im7flKFiuGs5BOAm1BrAIJGTNUS1N0CbPK0i7WOl+bv78fyyK4NRqNiOCtuBEDQTFhaa5mqedDxruemNoJ7bsr1xVwCkAAqtboiAOZqCehOhR1bNlTreGl0L1QKOalExXJGcgnAl4lpuW+TmKoloDsV1tSZBxMLlUJORqFiOSO5BOB6/b4IpmoJ6E6FNXXmQfdCpeCKrLGcTQCG5fqQUDyTDJUS150Ka+rMg+6FSsEV16Ni+jSyCcBs4Apj7sQYU4k1ulNhx00cqnW8NHJm3wpXoGL6NLIJwCxzvsQbU4k1umvhmWp6Imf2rZExprMJwDUGHYktYUmsMdX0RM7sWyVjTGcSgAnATLO+xBNTCUC6a+GZanoiZ/atMhMV2wPIJAAzAGl6bwBTCUC6m2FOuGy41vHSxLRpR1AYgYrtAWQSgKvN+xJPTCUA6W6GeclEM0IV06YdQeK02M4kANN9cCR2mEoAMtEMMywLlULBnBbbgwXgQuAqf3yJF6YSgPZ/8LHW8RYvu0zreGnkBGAguAoV470MFoApSPqvEUwlAO3epXcB0FTPA2naEQhGMaiy9+CagBX++RJ87vvhTC4eM0TLWLPnlGkZZzDjE8N4+Odf0TbetFljtI3Vn3ETh2rx873dh/n1T97U4FFsqQD+nP6PwTUBVwP32PAqiOw48i3bLgiD+KznBF++ZI1tN8LMGmAFZK4JqL/6Y0gxlbQjeGP/vk9suxB2BsR4fwEYMfiLccZU0o7gDVlL8Mxk+uX59BeASwEzK1UhZPJV0gAkiMhhIs+MRMU6MFAAslYNiSOmDsMI3pDDRFrojfX+AjDJgiOBZM6CcUYOwwjekMNE2uiN9f4CMNGCI4HEVDVcwRtymEgbvbHeXwDK/PcjmJiqhit4QxqAaqMs/S/9BWC8/34EE1OHdgRvSANQbfTGeloARgOy74UqhmHi0I7gHTlMpI1xpBr+pAVgDJCzRXBcmDpTGiEFETlMpJUSVMz3CoAcAEox5UvyqwgikgCknVHQJwCy7J3C1Gk4wRu6qx4JKubTAiCzHnPdcATv6K56JKiYTwuApL1hrhuO4A0TVY8EFfNpAZAioJjrhiN4Y+/bh2y7EEVGQJ8AmKkCGTJMde0RvCHVhI0wDPoEYKg9P4KDqWKYgjfebZUdAAMMhT4BiP3Kl6limIJ3mta+a9uFKHIB9AnA+RYdCQSy/RdMJAHIGOdDX1HQUouOBIIdf9nHeUO+oGWscROHUjFDf0LRe3uOaE2IGXnxeVxjoPLRscPHeXlzp5axZP/fGKXQJwCxT37fvHGftlzzVetu0TLOYN7Y/iGPPrhN23g6qwn35+XNnfzo3j/n/0bBJudC3yvA2RYdiRxhaa01buJQreOlkbJdoeBs6BMAKX+jkbC01jJV9kzKdoWCs6BPADL1CBSKICyttaZdN9JI2TMp2xUazuj9h6CPsLTWuq7qtFbxWpCyXeEiLQCnrHoRIUyVE9e9Gj7hsuFax0sjZbtCwynoE4ATFh2JFGPGDzUyru7TcKaeVKRsV2g4AX0C8LlFRyLDmAnnGiknZuI0nIljz5/1nJCyXeHhc+gTAFm10UDVwkvzf1MR6D4NZ2qhUvr2hYrj0CcAPRYdiQyTDG2r6T4NZ+rYs5TtChU90CcAn1p0JDKYOk4sCUCCAT6FPgGQZzcNSAKQJACFiE+gTwA+tudHNJizwExbBUkAEgzxMfQJgJRc8YipfoKSACQY4hj0CYAcuvaIqX6CkgAkGOII9AmAHLr2yNiyoUbGlQQgwRCHoU8AZP/GA6b6CUgCkGCQLugTAJFvD5jqJyAJQIJBPoI+ATho0ZHQYyqxRhKABIMchD4B2A849nwJN3FPAJK6faHDQcV8rwAcAOQlrkjGGOonGJYEIOnbFzr2oWJ+QEGQD+z4Em5MJdaEJQFI+vaFkt5Y7y8Anf77EX5MJdaEJQFI+vaFks70v/QXgPf99yP8mEqsCUsCkPTtCyW9sd5fAN6z4EjoMZVYE5YEIN0LlYIv9MZ6fwFot+BI6IlzAhDoX6gUfKE31vsLwF4kJbggTCXWhCUBSPr2hZLDqFgHBgrAEWC37+6EmAuGnmNk3LC8V0sCUCjZTb/DfyWO41BSUpL+79XAPTa8EgTBF9YAKwAcxzmtMUib//4IguAjA2J8sAC0+uiIIAj+MyDGBwvAW8jBIEGIKgdRMd7LYAE4BOzyzR1BEPxkFyrGe8nUHHSnP74IguAzp8V2JgF4wwdHBEHwn9NiO5MAvI4UCRWEqHEEFdsDyCQAHcAO4+4IguAnO1CxPYBMAgDwqllfBEHwmYwxnU0AXjHoiCAI/pMxprMJwMvAHnO+CEGhtbUVx3FOs9ZWyQmLEHtQMX0a2QTgGPCSMXcEQfCTl8jS/u/MPB/6VxPeJJNJHnrooYxfq6ioCN11BD3U1NSwdOlS3663ceNGamtrfbueRbL+Mc8lAH9FpQ6O0u3NiBEjKC8v1z2stesI3mloaGDlypW+XnPnzljkvB1ExXJGsr0CgKoaslW7O4KQgWQyaduFqLKVHNW+cgkAwBatrghCFi688ELbLkSVLbm+6EYADujyRBAEXzmARwF4B9ikyxtBEHxlEyqGs5JrETBNM3CnFncEoUDa2tqMLdZt27bNyLgBojnfN7gVgDZAltMF39m5cyd33il/f4qgDRcCkO8VANR7xAue3QkxmTLl3FhHRwdNTU1FrXBXVlbS1NSUNVPPrbW0tHj62detW1fQ9bq6umhpaaGurs7TdW3R3d2d8+crNEOyubk553jd3d0kEgkTP8oLuFm/cxxXXcFvBk6i2gp7thUrVjjZ0HUNndfRQUtLi5NIJFxdr6GhQcs1HcdxWltbc16rtbU15+fWrVtX9LW7urqcFStWePodr1u3TuucyGfJZNLp7u7O+XM1Nze7Gqu5uTnv78jt76dAO4mK2Zw4joNbAQB4TpeDcRQAx3Gcjo6OvCLgJeAyYVMA0tTV1RX9O/ZbAPLNmzT5RMBN8Lv5vRRpz+ECJ0NZ8Fz8sYDvFTJQVlZGU1NT1q8nk0lfU2H9oqamJlSJPqtXr6a+vj7n91RVVbFu3bqMX6urq6Oqqirn5+vr602mIbuO1UIE4A8MqigqFE55eXnW9+N7773XZ2/8I9uZjKBSW1ubVwSWLl162r2sq6ujpqYm5+c2bNhgMvjfQsWqK9zsAqT5ANgITCnUo0LQeQz1vPPO0zaWThYsWJBxAsyePduCN/5QXl5OZWUlW7cWl12uc164PQhWW1vL2LFjcz6VpYO9trbWVfBv2rSJxYsXu/a1CDaiYtUVhQhAevBvAGZ6TUMgD+/0a53mmmQyyapVqygrKzvta9l+xtLS0oz//5VXXmHv3uLahbe1eWv2VOhe+Q033JDxZwaYN29e0QJga17ceeedjBo1KucjfU1NDV/84hfzHmbatGkTc+fO1e1if7pQMeqaQgWgBWhC+gfmpbGxkUOHDrFlyxbPY+3du9d1IK5evdrz9QaPV8iYiUSCXbt2ZRSzsWPH6nTNN+bOnUtzc3NOEcgX/J2dnaaDH1RsFrbv67jfBUgzHziO4VVW07jxM5FIOA0NDU5ra2vW1fJsJJPJnKvbma6ni+7ubqe5udmprKzM+zPm2wUoxrKNmWtFPxvpz+hE98+VDze7PxrseCo2XeMUuAuQ5nngmSI+Fyrq6urYtWsXK1eupLy8vOBH0BEjRhR8zVde0VOKsbS0lKqqKrZs2UJDQ4OWMQVYvHgxnZ2dBX2ms7OT6upq2tuznsjVxTOo2CyIYgQA4L9RqhNJmpubqampyfpOborNmzdrH3PlypVZt6uEwmhvb6e6utq1CPT09HD33Xf7EfwOKiYLptA1gDTPAE8D/1Tk57Oyfv16bWPlW7zJRE1NTcGf0UVtbS1z5sxh1qxZWsddunQp27Zt074+4Cc654UX2tvbufvuu12t7TzwwANFL3oWyNMU+1TuFL4GkCZJkenBQc4E7OrqKuo9bzDpFM9Cr59IJIp+18xFtnf6sKwBBMlaWlo8/c4120lULBaMU+QaQJpG4CkPnw8cNTU11ivTtLe3U1FRQX19fcHvm7lI78ML3mhubnb9hFZeXk5zc94DeV55ChWLRVHsK0Ca/wIWAf6+LBvi2muvzfq1J598kl273HdO9/q4XVtbS21tLYlEoqBXkuXLl2edoF724QXybgVmoqqqiubmZlNbgD2oGCwarwLwLPA7DJUP95tsxzLXr1/Pfffd57M3ivb29oIWkVavXk13d3ek9uGDQENDQ9FrQ1VVVTQ1NZnIAPwdKgaLxssrQJrfoEoPR5awVY7p6uqy7UKkqKury5voky/jctGiRbprJBxExZ4ndAjAZiAYS7SGWL58eVGfW7FihWZP8pNMJrOm4gaZnp6ejP9/+vTpPnsyELf5/RUVFXl3KmpqanSKwHpU7HnC6ytAmnVANTBN03hWaG9vz5jwM2vWLFpbWwuqTTdkyBCqq6szfu3QoUMZ/39TU5Pn6jC5Epa8ngswSUdHR0bfy8vL6erqMvJUk68zUDKZdBX86fd7t+cGAK+nAf+GijnvOMVvAw7mfgxuzxVjhV6npqbG1faOV5qamgraPtNBd3d3xnTUoGwD6qyC5JZc/ripDNTR0ZHxs/mKgXR3d/emihdp97uMyZw4HrcBB/NrPC5I2Eb31ls2Hn/8cePXGMwzzzzjR0Za0Tz22GNZXwP8JplMsnbt2pyZoOkU30zMnTs3Z1p3aWkpa9euLbZIyrOoWNOCTgE4CvyKLF1Iw8KDDz5odPz169f7vhXX2dnJww8/7Os1C6W9vZ1HHnnEthskEgkaGhpcBX8uQV26dGnOPyZFisAxVIwdLeRDudApAKCOI/5S85i+0tjYSH19vZG/Rps2bfK9xHVnZ6df+eieqa+vz1uFxySJRIIXX3wxZzKY2/x+N+cGSktLWbVqVSHrPr9ExZg2dAsAKCe3GxjXN2pra7n11lu1LZr19PRQX1/vx3nwAddcv3491dXVoUr+qa2tZcmSJb4vWKaDP9cOSk9PD8uWLXP9+0yLQLZFX1B1Il988UU3IrAdA39cde0C9Odt4BfANdnG37Nnjy+HO7xcZ+vWrVRUVFBZWcm8efOKTqJpa2tz/Vdt48aNWrrgtLW10djY6OqvfrZrfvjhh0VfP9uYbvMpGhsbaWxspLKykjvuuIMhQ4YU7Usu+vszZswYtm3bltPHDRs20NhYWNZte3s79913H4sWLcr5fVVVVbnu1/+hYurtgi7uBkffLsBgfob5gxBiYnGwn2EA3bsAg1kNvGxwfEGIAy+jYskIJgXgTeDnQLfBawhClOlGxdCbpi5gUgBA7Vc+afgaghBVnkTjnn8mTAsAqPcX140KBEEAVMwYeffvjx8C0In6QYK/ES0IwaAdFTOdpi/khwCAqlb6U5+uJQhh56cUUeG3KAxuA2biCexvqYiJBdmewCdMbwNm4ifABp+vKQhhYQMqRnzDbwHoAB4HXvf5uoIQdF5HxUaHnxf1WwAAtgKPEfEyYoJQAAdRMeH7oQ0bAgDwW+DHwClL1xeEoHAKFQu/tXJ1nxcBB1OP/UUXMTGbZu38s+M42BaA4cAa7N8EMTEbtgYVA1YIggAATAJ+j/2bISbmp/0eNfetERQBAJiOSnywfVPExPyw51Fz3ipBEgCAG1CroLZvjpiYSduKmuvWCZoAgOot0IL9myQmZsJaUHM8EARRAABuA17D/s0SE9Npr6HmdmAIqgAALEBlRtm+aWJiOux11JwOFEEWAFC/MHkSEAu7vUYAgx8IvACAemSSNQGxsFoLAXvs708YBADUoonsDoiFzbYSoAW/TIRFAEBtm0iegFhY7HkCstWXizAJAKjECckYFAu6/Z4AJPm4IWwCACp1Us4OiAXV1mA5vbcQwigAoA5P1AMnsX/DxcQc1Fysx+LBnmIIqwCkeQA4gP2bLxZvO4Cai6Ej7AIA8DUkV0DMnr2GmoOhJAoCAFCJ6pluezKIxcuaUHMvtERFAAAmICXHxfyzJ1BzLtRESQDSfAfYi/0JIhZN24uaY5EgigIAMB94DvuTRSxa9hxqbkWGqAoAQBmwCvgU+xNHLNz2KWoulRExoiwAae4CtmN/EomF07aj5lAkiYMAAExFdVo9gf0JJRYOO4GaM1OJMHERgDTLgZewP7nEgm0voeZK5ImbAABcierCchT7E00sWHYUNTeuJCbEUQDSLEZ1YrU96cSCYRtQcyJWxFkAQB3cuB/Yif0JKGbHdqLmQKgO8egi7gKQZgrwKHKwKE52IHXPpxBjRAAGMgf4BdCN/QkqZsa6U/d4DoIIQBYWolo1S72B6NjJ1D1diNCLCEBuksBTqP7ttiewWHF2KnUPkwinIQLgjtuB3wDHsT+hxdzZ8dQ9uz3D/RRSiAAUxnxgNfAR9ie4WGb7KHWPInVoxxSO41DiOA4lJSW2fQkT16I6vSwg5qvIAeItYGPKWiz7EhpEALwxHtX15VbUX5wz7LoTO06h6u//EfgD8IFdd8KHCIA+bgZuSVm5ZV+iThvwQsr+ZNmXUCMCoJ/RwNyUVaX+W/DOAWAT0JyyA3bdiQYiAGa5HLgpZZXAKJvOhJCDqP56W1L2jk1noogIgH8kgC8D16fsCrvuBJY9qOO4LwF/BdrtuhNtRADsMAyYDcwCrgFmAiOsemSPI8AO4FXgFeBl4JhVj2KECEAwmADMAK5GNZW8iui+LhwEdqFO4b0BvA50WPUoxogABJMLUfkFFagdhckpG2nTqSI4DOxOWRvQitqvP2TTKaEPEYDwMAK4FLWWMAmYiKpSOx4YB9i6gQ6wD7UH3wm8D7yHenffi3rEFwKKCEA0GA2MQb02XAxchHpaGIFabxgKXACcD5QC5wJnA2fRl7x0ClUI83NUHn0Pqhz2J8DHqPfyI6i/6l2olNuDwH5kSy609AqAIAjx5P8BDDkDNzzXO5wAAAAASUVORK5CYII="
        },
        "539e6a99d006e79c3a40": function(n, e, o) {
            "use strict";
            o.d(e, "c", (function() {
                    return s
                })),
                o.d(e, "b", (function() {
                    return d
                }));
            var t = o("b0c37be7de20d933b466"),
                i = o("5df79c82a80d7ca8e003"),
                r = o.n(i);

            function c(n, e) {
                var o = Object.keys(n);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(n);
                    e && (t = t.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))),
                        o.push.apply(o, t)
                }
                return o
            }

            function a(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var o = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? c(Object(o), !0).forEach((function(e) {
                        l(n, e, o[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : c(Object(o)).forEach((function(e) {
                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e))
                    }))
                }
                return n
            }

            function l(n, e, o) {
                return e in n ? Object.defineProperty(n, e, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : n[e] = o,
                    n
            }
            var s = function(n) {
                    return "linear-gradient(-45deg, ".concat(n.palette.primary.main, " 0%, ").concat(n.palette.primary.main, " 33%, ").concat(n.palette.secondary.main, " 100%);")
                },
                d = function(n) {
                    return "linear-gradient(-45deg, ".concat(Object(t.darken)(n.palette.primary.main, .4), " 0%, ").concat(Object(t.darken)(n.palette.primary.main, .4), " 33%, ").concat(Object(t.darken)(n.palette.secondary.main, .4), " 100%);")
                },
                b = {
                    display: "flex",
                    width: "100%",
                    minHeight: "100%",
                    zIndex: 1
                };
            e.a = function(n) {
                var e, o;
                return {
                    root: {
                        width: "100%",
                        marginTop: 0,
                        zIndex: 1,
                        overflow: "auto"
                    },
                    blogWrap: {
                        color: n.palette.text.primary,
                        position: "relative"
                    },
                    appFrameInner: a({
                        color: n.palette.text.primary
                    }, b),
                    appFrameOuter: a({
                        color: n.palette.text.primary
                    }, b),
                    appFrameLanding: {
                        color: n.palette.text.primary,
                        backgroundColor: n.palette.background.default,
                        minHeight: 1e3
                    },
                    appFrameSlider: (e = {
                            display: "flex",
                            width: "100%",
                            height: "100%",
                            color: n.palette.text.primary
                        },
                        l(e, n.breakpoints.up("lg"), {
                            position: "absolute",
                            overflow: "hidden"
                        }),
                        l(e, "backgroundColor", n.palette.background.default),
                        e),
                    topNav: {
                        flexDirection: "column"
                    },
                    sideNav: {
                        flexDirection: "row"
                    },
                    content: l({
                        width: "100%",
                        padding: n.spacing(2),
                        minHeight: "100%",
                        overflow: "hidden"
                    }, n.breakpoints.down("md"), {
                        paddingLeft: n.spacing(1),
                        paddingRight: n.spacing(1)
                    }),
                    petal: {
                        background: "url(".concat(r.a, ") no-repeat"),
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundAttachment: "fixed",
                        width: "100%",
                        height: "100%",
                        position: "fixed"
                    },
                    outerContent: {
                        width: "100%",
                        backgroundSize: "cover",
                        flexDirection: "column",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    bgWrap: {
                        position: "fixed",
                        background: n.palette.background.default,
                        width: "100%",
                        height: "100%",
                        top: 0,
                        left: 0
                    },
                    headerBg: {},
                    halfBg: {},
                    fullBg: {},
                    bgbar: {
                        backgroundAttachment: "fixed",
                        width: "100%",
                        top: 0,
                        left: 0,
                        position: "absolute",
                        "&$headerBg": {
                            height: 64
                        },
                        "&$halfBg": {
                            height: 400
                        },
                        "&$fullBg": {
                            height: "100%"
                        }
                    },
                    gradientBg: {
                        backgroundImage: "dark" === n.palette.type ? d(n) : s(n),
                        backgroundAttachment: "fixed"
                    },
                    solidBg: {
                        backgroundColor: "dark" === n.palette.type ? Object(t.darken)(n.palette.primary.main, .4) : n.palette.primary.main
                    },
                    decorationWave: l({
                        width: "100%",
                        height: "auto",
                        position: "absolute",
                        left: -2,
                        bottom: -32,
                        transform: "scale(1.1,0.8)",
                        transformOrigin: "bottom"
                    }, n.breakpoints.down("xs"), {
                        display: "none"
                    }),
                    decorationPetal: {
                        width: "100%",
                        height: "auto",
                        position: "absolute",
                        left: 0,
                        top: 0
                    },
                    sidebarLayout: {},
                    topbarLayout: {},
                    mainWrap: {
                        height: "100%",
                        position: "relative",
                        "& > div": {
                            willChange: "inherit !important"
                        },
                        "&$sidebarLayout": {
                            paddingTop: n.spacing(8)
                        },
                        "&$topbarLayout": {
                            width: "100%"
                        }
                    },
                    preloader: {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        zIndex: 1e3,
                        background: "transparent",
                        height: 3
                    },
                    materialBg: {
                        position: "absolute",
                        left: 0,
                        bottom: 0,
                        width: "100%",
                        opacity: .5
                    },
                    contentPaddingLeft: {
                        paddingLeft: n.spacing(10)
                    },
                    contentPaddingLeftBig: {
                        paddingLeft: n.spacing(2)
                    },
                    contentPaddingRight: {
                        paddingRight: n.spacing(10)
                    },
                    hideApp: {
                        display: "none"
                    },
                    circularProgress: {
                        position: "fixed",
                        top: "calc(50% - 45px)",
                        left: "calc(50% - 45px)"
                    },
                    brand: {
                        height: 54,
                        display: "flex",
                        padding: "10px 10px 5px",
                        position: "relative",
                        alignItems: "center",
                        justifyContent: "center",
                        "& img": {
                            width: 20
                        },
                        "& h3": {
                            margin: 0,
                            fontSize: 16,
                            fontWeight: 500,
                            paddingLeft: 10,
                            color: n.palette.common.white
                        }
                    },
                    light: {},
                    pageTitle: (o = {
                            padding: n.spacing(1),
                            paddingBottom: n.spacing(3)
                        },
                        l(o, n.breakpoints.up("lg"), {
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "flex-end"
                        }),
                        l(o, "& h4", l({
                            fontWeight: 700,
                            textTransform: "capitalize"
                        }, n.breakpoints.down("md"), {
                            marginBottom: n.spacing(3)
                        })),
                        o),
                    darkTitle: {
                        color: "dark" === n.palette.type ? n.palette.primary.main : n.palette.primary.dark
                    },
                    lightTitle: {
                        color: n.palette.common.white
                    }
                }
            }
        },
        "55aba059d8fc764a7c65": function(n, e, o) {
            (n.exports = o("0e326f80368fd0b1333e")(!1)).push([n.i, ".mpaper {\n  width: 50%;\n  margin: auto;\n  padding: 2%;\n  margin-top: 5%;\n}\n\n.buy-btn {\n  width: 100%;\n  height: 45px;\n  margin-top: 2%;\n  word-wrap: break-word;\n  border-radius: 12px;\n  text-align: center;\n  color: #fff;\n}\n\n.center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 40px;\n  /* border: 3px solid green;  */\n}\n\n.contact-btn {\n  background-color: #2096f3;\n  border-radius: 1px;\n  color: white;\n}\n\n.contact-btn:hover {\n  background-color: #2e8cd4;\n}\n\n.closebtn {\n  float: right;\n  height: 30px;\n  font-size: 3px;\n  background-color: white;\n  margin-bottom: 2%;\n}\n\n.closebtn:hover {\n  background-color: #3467b3;\n  color: white;\n}\n\n/* Extra small devices (phones, 600px and down) */\n@media only screen and (max-width: 357px) {\n  #right-btn {\n    display: none;\n  }\n}\n\n/* Extra small devices (phones, 600px and down) */\n@media only screen and (max-width: 600px) {\n  .mpaper {\n    width: 95%;\n  }\n}\n/* Small devices (portrait tablets and large phones, 600px and up) */\n@media only screen and (min-width: 600px) {\n  .mpaper {\n    width: 90%;\n  }\n}\n/* Medium devices (landscape tablets, 768px and up) */\n@media only screen and (min-width: 768px) {\n  .mpaper {\n    width: 90%;\n  }\n}\n/* Large devices (laptops/desktops, 992px and up) */\n@media only screen and (min-width: 992px) {\n  .mpaper {\n    width: 30%;\n  }\n}\n/* Extra large devices (large laptops and desktops, 1200px and up) */\n@media only screen and (min-width: 1440px) {\n  .mpaper {\n    width: 40%;\n  }\n}\n\n#uni {\n  background-color: rgb(196, 44, 175);\n  color: rgb(255, 255, 255);\n}\n\n#uni:hover {\n  background-color: rgb(218, 56, 196);\n}\n\n#pcake {\n  color: #3c3c3b;\n  background-color: rgb(55, 235, 235);\n}\n\n#pcake:hover {\n  background-color: rgb(45, 214, 214);\n}\n\n#quick {\n  background-color: rgb(74, 63, 226);\n}\n\n#quick:hover {\n  background-color: rgb(88, 79, 214);\n}\n\n#hotbit {\n  background-color: #01ffce;\n  color: rgb(29, 27, 27);\n}\n#safeswap {\n  background-color: rgb(88, 79, 214);\n  color: rgb(255, 255, 255);\n}\n#safeswap:hover {\n  background-color: #4ec5e6;\n}\n\n#hotbit:hover {\n  background-color: #28e4be;\n}\n\n#bilaxy {\n  background-color: #62d8fa;\n  color: black;\n}\n#bilaxy:hover {\n  background-color: #4ec5e6;\n}\n\n.iconbtnnone:hover {\n  background-color: transparent;\n  border-radius: 1px;\n}\n", ""])
        },
        "59a41fff0033f9a55224": function(n, e) {
            n.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAMqADAAQAAAABAAAAMgAAAABWA42RAAAD2klEQVRoBe2azyt1QRjHn3td+VVsRRYkS9aItWzIQsmfoUgRK0XyL9hZKUX+AUU2tqL8iiwsyO/fzDufxzvzXrrlvde95xp56pyZM3fOOd/PzDPnPDP3xF5fX41YM8b4zZZp/unpSeLxuMRiMU0LCgqoGomhBx0vLy9+Q0uynuR8AlUOwgFwMlZSUuIhtCBPO6fr9vZWXOPSqOgGBotZ0fb4rTdcCxQWFkoioYx5kp76tuh8fn6Wm5sbrQAEQNoz9gcFcRBFRUWeMvXl8l+KxwADFCAKA2VIEDQjwsvKyrTB3RiKOxDcyflb/tv8cwUOhprAKAgw33FMfIaDZjYFYce4CNF4LeBiDI23Z1eIFH81+yeXe9mFyoJ+fdIyaEI3fVBBFLrhXsGPETrhx4AoTOhu5fT/CNcC5ssh7s7OjhwcHMjd3Z1UVVVp6N/Q0BB9pGDje6LfjK2zs5OJ2bvNzmNMe3u72dvby/i66ZwIQ1Zdq6KiQl9O9M7Kyoq0tbXJ0dGRc+OcplkDGR4elvPzc7m4uJCFhQXhJXV8fCyLi4s5BXAXzxqIuyDhQnd3t3R0dGjR2tqapldXV7K7u6ubdRtXXQ4PD7Xs9PTUl2WSyTqIE8GAx05OTjS9vLyUpqYmqa+vl/n5eS3b2tqS2tpaLdve3tayTHc5A/koqLq6WnA/bHx8XEPviYkJTfv6+qSlpeXjKWkdRwaCqoGBAe2Bzc1NAWJubk5KS0tlcnIyLdGpKkcKUlxcLNPT06pjdHRUZ3aDg4NSU1OTSltaZZGCoKynp0fKy8u9SECyYZGDPDw8CAMfYy7k1qi+CpMzkPX1ddVWV1f3TuPU1JQ/Zr1gaGjIH38pk60Qpbe319i4y2xsbJiRkREfsszOzvpoY39/3xC+2MmcWVpaMnbhQPOrq6u+TiYZGFhLzeRcf06qWMu2rIK0trYa60a+bldXl5b39/dr2djYmB43Njaar+jICYh9Mpnm5mZjH7Xm+vraQywvL6tofrfRspbze2VlpZbPzMz4uulmAImxC3FxLnk8sQacs8GefKMo8r8gUbRyOvf47ZF0WiuKur89EkUr/+899G8F4p3QTd8j0IRsNgqQx8dHiQMSOsyPeLP7HmFJnq6hIERjmQmzHHF1rRAHvQ14dc2ZmWacf6zYmIKGBMO4YGUTT9I/eoAgg93f3wcBAwTzflJ6412PcIC5bzy+65jBc87OztSD3AcDaI9ZKqv53/couBePYyq5D2zotXyZa1BSO6PUMYEWvMj1BmnCiUx2MfJ0G4PJnZCcRgFFY6KBhnVaKEOH2xwIx38AbH5Zdno1yVwAAAAASUVORK5CYII="
        },
        "5c11c196d90771da1367": function(n, e, o) {
            (n.exports = o("0e326f80368fd0b1333e")(!1)).push([n.i, ":root {\n  --icon-size: 1.5rem;\n  --indicator-spacing: calc(var(--icon-size) / 8);\n  --border-radius: calc(var(--icon-size) / 4);\n  --nav-item-padding: calc(var(--icon-size) / 2);\n  --footer-nav-background-color: #2196f3;\n}\n\n.footer-navbar-main {\n  color: white;\n}\n\n.footer-navbar-container {\n  background-color: white;\n  border-top-left-radius: var(--border-radius);\n  border-top-right-radius: var(--border-radius);\n  width: 100%;\n  margin: 0 auto;\n  padding: 0 calc(var(--nav-item-padding) * 1.5);\n  position: fixed;\n  z-index: 999;\n  bottom: 0;\n  border-top: 4px #2196f3 solid;\n  border-top-width: calc(var(--indicator-spacing));\n}\n\n.footer-nav-list {\n  display: flex;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  justify-content: space-between;\n}\n\n.footer-nav-list a {\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 12px;\n  white-space: nowrap;\n  text-decoration: none;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: var(--nav-item-padding);\n}\n\n.footer-nav-list .text {\n  font-size: 0.8em;\n  opacity: 0;\n  pointer-events: none;\n  transition: 250ms ease-in-out;\n  position: absolute;\n  bottom: calc(0.5 * var(--nav-item-padding));\n  transform: translateY(50%);\n}\n\n.footer-nav-list .icon {\n  position: relative;\n  transition: 250ms ease-in-out;\n}\n\n.footer-nav-list .icon svg {\n  fill: currentColor;\n  width: var(--icon-size);\n  height: var(--icon-size);\n  display: block;\n}\n\n.footer-nav-list .active .text {\n  pointer-events: all;\n  opacity: 1;\n  transform: translateY(0);\n}\n\n.footer-nav-list .active .icon {\n  color: white;\n  transform: translateY(calc(-50% - var(--nav-item-padding)));\n}\n\n.footer-nav-list {\n  position: relative;\n}\n\n.footer-nav-anchor {\n  position: relative;\n}\n\n.indicator {\n  position: absolute;\n  left: var(--position);\n  transition: 250ms ease-in-out;\n}\n\n.indicator::after,\n.indicator::before {\n  content: '';\n  position: absolute;\n  border-radius: 100%;\n}\n\n.indicator::after {\n  width: calc(var(--icon-size) * 2);\n  height: calc(var(--icon-size) * 2);\n  top: calc(-1 * var(--icon-size));\n}\n\n.indicator::before {\n  background-color: var(--footer-nav-background-color);\n  width: calc((var(--icon-size) + var(--indicator-spacing)) * 2);\n  height: calc((var(--icon-size) + var(--indicator-spacing)) * 2);\n  top: calc(-1 * var(--icon-size) - var(--indicator-spacing));\n  left: calc(-1 * var(--indicator-spacing));\n}\n\n.corners::before {\n  content: '';\n  box-sizing: content-box;\n  position: absolute;\n  width: var(--border-radius);\n  height: var(--border-radius);\n  background-color: transparent;\n  z-index: 1;\n  top: calc(-1 * var(--indicator-spacing));\n  left: calc(0.2 * var(--indicator-spacing));\n  transform: translateX(-100%);\n  border-top-right-radius: 100%;\n  border-width: calc(var(--indicator-spacing));\n  border-color: var(--footer-nav-background-color);\n  border-style: solid;\n  border-bottom: none;\n  border-left: none;\n}\n\n.corners::after {\n  content: '';\n  box-sizing: content-box;\n  position: absolute;\n  width: var(--border-radius);\n  height: var(--border-radius);\n  background-color: transparent;\n  z-index: 1;\n  top: calc(-1 * var(--indicator-spacing));\n  left: calc(var(--icon-size) * 2 + -0.2 * var(--indicator-spacing));\n  border-top-left-radius: 100%;\n  border-width: calc(var(--indicator-spacing));\n  border-color: var(--footer-nav-background-color);\n  border-style: solid;\n  border-bottom: none;\n  border-right: none;\n}\n\n.d-none {\n  display: none;\n}\n", ""])
        },
        "5df79c82a80d7ca8e003": function(n, e) {
            n.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxNDQwIDgzMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTQ0MCA4MzI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7b3BhY2l0eTowLjI7fQoJLnN0MXtmaWx0ZXI6dXJsKCNBZG9iZV9PcGFjaXR5TWFza0ZpbHRlcik7fQoJLnN0MntmaWxsOiNGRkZGRkY7fQoJLnN0M3ttYXNrOnVybCgjbWFzay0yXzFfKTtmaWxsOiNGRkZGRkY7fQoJLnN0NHtmaWx0ZXI6dXJsKCNBZG9iZV9PcGFjaXR5TWFza0ZpbHRlcl8xXyk7fQoJLnN0NXttYXNrOnVybCgjbWFzay00XzFfKTtmaWxsOiNGRkZGRkY7fQoJLnN0NntvcGFjaXR5OjAuNDt9Cgkuc3Q3e29wYWNpdHk6NS4wMDAwMDBlLTAyO30KCS5zdDh7ZmlsdGVyOnVybCgjQWRvYmVfT3BhY2l0eU1hc2tGaWx0ZXJfMl8pO30KCS5zdDl7bWFzazp1cmwoI21hc2stNl8xXyk7ZmlsbDojRkZGRkZGO30KCS5zdDEwe29wYWNpdHk6MC4xO30KCS5zdDExe2ZpbHRlcjp1cmwoI0Fkb2JlX09wYWNpdHlNYXNrRmlsdGVyXzNfKTt9Cgkuc3QxMnttYXNrOnVybCgjbWFzay04XzFfKTtmaWxsOiNGRkZGRkY7fQo8L3N0eWxlPgo8dGl0bGU+R3JvdXA8L3RpdGxlPgo8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KPGcgaWQ9IldlbGNvbWUiPgoJPGcgaWQ9IkRlc2t0b3AtSEQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAtNzYuMDAwMDAwKSI+CgkJPGcgaWQ9Ikdyb3VwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTA5LjAwMDAwMCwgNzYuMDAwMDAwKSI+CgkJCTxnIGlkPSJMaW5lIiBjbGFzcz0ic3QwIj4KCQkJCQoJCQkJCTxnIGlkPSJHcm91cC0zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3OTYuNTAwMDAwLCAxMzkuMTg2MTA5KSBzY2FsZSgtMSwgLTEpIHRyYW5zbGF0ZSgtNzk2LjUwMDAwMCwgLTEzOS4xODYxMDkpIHRyYW5zbGF0ZSgwLjAwMDAwMCwgMC4xODYxMDkpIj4KCQkJCQk8ZyBpZD0iQ2xpcC0yIj4KCQkJCQk8L2c+CgkJCQkJPGRlZnM+CgkJCQkJCTxmaWx0ZXIgaWQ9IkFkb2JlX09wYWNpdHlNYXNrRmlsdGVyIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiPgoJCQkJCQkJPGZlQ29sb3JNYXRyaXggIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIxIDAgMCAwIDAgIDAgMSAwIDAgMCAgMCAwIDEgMCAwICAwIDAgMCAxIDAiLz4KCQkJCQkJPC9maWx0ZXI+CgkJCQkJPC9kZWZzPgoJCQkJCTxtYXNrIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJtYXNrLTJfMV8iPgoJCQkJCQk8ZyBjbGFzcz0ic3QxIj4KCQkJCQkJCTxwb2x5Z29uIGlkPSJwYXRoLTFfMV8iIGNsYXNzPSJzdDIiIHBvaW50cz0iLTEwLDAgMTU4MywwIDE1ODMsMjc3LjMgLTEwLDI3Ny4zIAkJCQkJCQkiLz4KCQkJCQkJPC9nPgoJCQkJCTwvbWFzaz4KCQkJCQk8cGF0aCBpZD0iRmlsbC0xIiBjbGFzcz0ic3QzIiBkPSJNLTksMjMxLjd2LTI0LjFjLTAuMS0wLjEtMC4zLTAuMS0wLjQtMC4xQy0xMC45LDIwNy41LTksMjE0LjItOSwyMzEuN3ogTTEyMzEsMC4yCgkJCQkJCUM5OTIuNCw3LDQ5My40LDIyMi45LDI1MC45LDIyNC40Yy0xNjYsMC0yNjAtOTguMy0yNjAtOTguM3Y4MS40YzYsMi43LDQ0LjksNjEuNSwyNTMuNyw2OS4yYzguNiwwLjMsMTcuNCwwLjUsMjYuMywwLjUKCQkJCQkJYzI3MC4zLDAsNjg5LjktMTQwLjYsOTI4LjktMTQwLjZjNi44LDAsMTMuNSwwLjEsMjAsMC4zYzMyMC41LDExLjUsMzYzLjIsNTkuNywzNjMuMiw1OS43di03MC42YzAsMC0xMTMuNy0xMjYuMS0zMzUuNC0xMjYuMQoJCQkJCQlDMTI0Mi4yLDAsMTIzNi42LDAuMSwxMjMxLDAuMnogTTEzOTMsMjAuNGMzNi45LDEwLjQsNzIuMSwyNSwxMDQuNSw0My4yYzUzLjQsMzAsODIsNjAuMyw4NC4yLDYyLjh2NjgKCQkJCQkJYy01LjMtNC0yMC44LTEzLjUtNTkuNy0yMy44Yy0yOS41LTcuOC02Ni42LTE0LjYtMTEwLjEtMjBjLTU0LjMtNi44LTExOS0xMS42LTE5Mi4xLTE0LjJjLTYuNC0wLjItMTMuMi0wLjMtMjAtMC4zCgkJCQkJCWMtMTE2LDAtMjcyLjIsMzIuNi00MzcuNSw2Ny4xYy0xNzMuMSwzNi4xLTM1Mi4yLDczLjUtNDkxLjMsNzMuNWMtOSwwLTE3LjgtMC4yLTI2LjItMC41Yy03OC43LTIuOS0xNDIuNC0xMy40LTE4OS40LTMxLjEKCQkJCQkJYy0zNy41LTE0LjEtNTMuMy0yOC44LTYwLjEtMzVjLTEuNi0xLjQtMi40LTIuMi0zLjEtMi43di03OC41YzcsNi43LDI5LjUsMjcsNjUuMyw0N2MyNS42LDE0LjMsNTIuOSwyNS43LDgxLjIsMzMuOQoJCQkJCQljMzUuMywxMC4yLDcyLjMsMTUuNCwxMDkuOCwxNS40YzMyLjQtMC4yLDY2LjctMy41LDEwNy40LTEwLjJjMzYuMi02LDc2LjYtMTQuNSwxMjMuNS0yNmM4Ny4xLTIxLjQsMTgzLjYtNTAuMSwyNzYuOS03Ny45CgkJCQkJCWM4OC40LTI2LjMsMTc5LjktNTMuNiwyNjEuNi03My45QzExMDkuMiwxNC4yLDExNzksMi40LDEyMzEuMSwxYzUuNS0wLjIsMTEuMS0wLjIsMTYuNi0wLjJDMTI5OCwwLjcsMTM0Ni45LDcuMywxMzkzLDIwLjR6Ii8+CgkJCQk8L2c+CgkJCQkKCQkJCQk8ZyBpZD0iR3JvdXAtMy1Db3B5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3OTMuNDk0OTk3LCA2OTMuMDAwMDAwKSBzY2FsZSgtMSwgLTEpIHRyYW5zbGF0ZSgtNzkzLjQ5NDk5NywgLTY5My4wMDAwMDApIHRyYW5zbGF0ZSgxOS40OTQ5OTcsIDU1NC4wMDAwMDApIj4KCQkJCQk8ZyBpZD0iQ2xpcC0yXzFfIj4KCQkJCQk8L2c+CgkJCQkJPGRlZnM+CgkJCQkJCTxmaWx0ZXIgaWQ9IkFkb2JlX09wYWNpdHlNYXNrRmlsdGVyXzFfIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiPgoJCQkJCQkJPGZlQ29sb3JNYXRyaXggIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIxIDAgMCAwIDAgIDAgMSAwIDAgMCAgMCAwIDEgMCAwICAwIDAgMCAxIDAiLz4KCQkJCQkJPC9maWx0ZXI+CgkJCQkJPC9kZWZzPgoJCQkJCTxtYXNrIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJtYXNrLTRfMV8iPgoJCQkJCQk8ZyBjbGFzcz0ic3Q0Ij4KCQkJCQkJCTxwb2x5Z29uIGlkPSJwYXRoLTNfMV8iIGNsYXNzPSJzdDIiIHBvaW50cz0iLTEwLDAgMTUzNy4zLDAgMTUzNy4zLDI3Ny4zIC0xMCwyNzcuMyAJCQkJCQkJIi8+CgkJCQkJCTwvZz4KCQkJCQk8L21hc2s+CgkJCQkJPHBhdGggaWQ9IkZpbGwtMV8xXyIgY2xhc3M9InN0NSIgZD0iTS05LjQsMjA3LjVjLTEuNSwwLDAuNCw2LjcsMC40LDI0LjJ2LTI0LjFDLTkuMiwyMDcuNS05LjMsMjA3LjUtOS40LDIwNy41IE0xMjExLjYsMAoJCQkJCQljLTUuMywwLTEwLjcsMC4xLTE2LjIsMC4yQzk2My43LDcsNDc5LDIyMi45LDI0My40LDIyNC40Yy0wLjgsMC0xLjYsMC0yLjQsMGMtMTU4LjgsMC0yNTAuMS05OC4zLTI1MC4xLTk4LjN2ODEuNAoJCQkJCQljNS44LDIuNyw0My42LDYxLjUsMjQ2LjUsNjkuMmM4LjQsMC4zLDE2LjksMC41LDI1LjYsMC41YzI2Mi42LDAsNjcwLjEtMTQwLjYsOTAyLjItMTQwLjZjNi42LDAsMTMuMSwwLjEsMTkuNCwwLjMKCQkJCQkJYzMxMS4zLDExLjUsMzUyLjgsNTkuNywzNTIuOCw1OS43di03MC42QzE1MzcuMywxMjYuMSwxNDI2LjksMCwxMjExLjYsMCBNMTIxMS42LDAuN2M0OC45LDAsOTYuNCw2LjYsMTQxLjEsMTkuNgoJCQkJCQljMzUuOCwxMC40LDcwLDI1LDEwMS41LDQzLjJjNTEuOCwzMCw3OS42LDYwLjMsODEuOCw2Mi44djY4Yy01LjEtNC0yMC4yLTEzLjUtNTcuOS0yMy44Yy0yOC43LTcuOC02NC43LTE0LjYtMTA2LjktMjAKCQkJCQkJYy01Mi44LTYuOC0xMTUuNi0xMS42LTE4Ni42LTE0LjJjLTYuMi0wLjItMTIuOC0wLjMtMTkuNS0wLjNjLTExMi43LDAtMjY0LjQsMzIuNi00MjUsNjcuMWMtMTY4LjIsMzYuMS0zNDIuMSw3My41LTQ3Ny4yLDczLjUKCQkJCQkJYy04LjcsMC0xNy4zLTAuMi0yNS41LTAuNWMtNzYuNC0yLjktMTM4LjMtMTMuNC0xODMuOS0zMS4xYy0zNi40LTE0LjEtNTEuOC0yOC44LTU4LjMtMzVjLTEuNS0xLjQtMi40LTIuMi0zLjEtMi43di03OC41CgkJCQkJCWM2LjgsNi43LDI4LjYsMjcsNjMuNSw0N2MyNC45LDE0LjMsNTEuNCwyNS43LDc4LjgsMzMuOWMzNC4zLDEwLjIsNzAuMiwxNS40LDEwNi42LDE1LjRjMC44LDAsMS42LDAsMi40LDAKCQkJCQkJYzI5LjEtMC4yLDYyLjQtMy41LDEwMi0xMC4yYzM1LjEtNiw3NC40LTE0LjUsMTE5LjktMjZjODQuNi0yMS40LDE3OC4zLTUwLjEsMjY4LjktNzcuOUM4MjAuMiw4NC43LDkwOSw1Ny40LDk4OC4zLDM3LjEKCQkJCQkJYzg4LjgtMjIuOCwxNTYuNS0zNC42LDIwNy4xLTM2LjFDMTIwMC44LDAuOCwxMjA2LjIsMC43LDEyMTEuNiwwLjdMMTIxMS42LDAuNyIvPgoJCQkJPC9nPgoJCQk8L2c+CgkJCTxnIGlkPSJXaW5nIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyOC4wMDAwMDAsIDUwNC4wMDAwMDApIiBjbGFzcz0ic3Q2Ij4KCQkJCTxnIGlkPSJHcm91cC0zXzFfIiBjbGFzcz0ic3Q3Ij4KCQkJCQk8ZyBpZD0iQ2xpcC0yXzJfIj4KCQkJCQk8L2c+CgkJCQkJPGRlZnM+CgkJCQkJCTxmaWx0ZXIgaWQ9IkFkb2JlX09wYWNpdHlNYXNrRmlsdGVyXzJfIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjEwIiB5PSIwIiB3aWR0aD0iMTUzOSIgaGVpZ2h0PSIyNzciPgoJCQkJCQkJPGZlQ29sb3JNYXRyaXggIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIxIDAgMCAwIDAgIDAgMSAwIDAgMCAgMCAwIDEgMCAwICAwIDAgMCAxIDAiLz4KCQkJCQkJPC9maWx0ZXI+CgkJCQkJPC9kZWZzPgoJCQkJCTxtYXNrIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjEwIiB5PSIwIiB3aWR0aD0iMTUzOSIgaGVpZ2h0PSIyNzciIGlkPSJtYXNrLTZfMV8iPgoJCQkJCQk8ZyBjbGFzcz0ic3Q4Ij4KCQkJCQkJCTxwb2x5Z29uIGlkPSJwYXRoLTVfMV8iIGNsYXNzPSJzdDIiIHBvaW50cz0iMTAsMCAxNTQ5LDAgMTU0OSwyNzcgMTAsMjc3IAkJCQkJCQkiLz4KCQkJCQkJPC9nPgoJCQkJCTwvbWFzaz4KCQkJCQk8cGF0aCBpZD0iRmlsbC0xXzJfIiBjbGFzcz0ic3Q5IiBkPSJNMTU0OSwxOTYuNWMwLDAtNDEuMy00OC4xLTM1MC45LTU5LjZjLTIzNC4zLTguNy02NzUuMywxNDkuOC05NDIuMSwxMzkuNgoJCQkJCQlDLTE4LjYsMjY2LjEsMTAuOSwxNjAuOSwxMC45LDIzMS40VjEyNmMwLDAsOTEuNyw5OS4xLDI1MS4xLDk4LjJDNDk2LjQsMjIyLjcsOTc4LjUsNi45LDEyMDguOSwwLjIKCQkJCQkJQzE0MzMuNi02LjMsMTU0OSwxMjYsMTU0OSwxMjZWMTk2LjV6Ii8+CgkJCQk8L2c+CgkJCQk8ZyBpZD0iR3JvdXAtM18yXyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDQ2LjUzMDE4NCkiIGNsYXNzPSJzdDEwIj4KCQkJCQk8ZyBpZD0iQ2xpcC0yXzNfIj4KCQkJCQk8L2c+CgkJCQkJPGRlZnM+CgkJCQkJCTxmaWx0ZXIgaWQ9IkFkb2JlX09wYWNpdHlNYXNrRmlsdGVyXzNfIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjEwIiB5PSIwIiB3aWR0aD0iMTUzOSIgaGVpZ2h0PSIyMjMuMiI+CgkJCQkJCQk8ZmVDb2xvck1hdHJpeCAgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjEgMCAwIDAgMCAgMCAxIDAgMCAwICAwIDAgMSAwIDAgIDAgMCAwIDEgMCIvPgoJCQkJCQk8L2ZpbHRlcj4KCQkJCQk8L2RlZnM+CgkJCQkJPG1hc2sgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMTAiIHk9IjAiIHdpZHRoPSIxNTM5IiBoZWlnaHQ9IjIyMy4yIiBpZD0ibWFzay04XzFfIj4KCQkJCQkJPGcgY2xhc3M9InN0MTEiPgoJCQkJCQkJPHBvbHlnb24gaWQ9InBhdGgtN18xXyIgY2xhc3M9InN0MiIgcG9pbnRzPSIxMCwwIDE1NDksMCAxNTQ5LDIyMy4yIDEwLDIyMy4yIAkJCQkJCQkiLz4KCQkJCQkJPC9nPgoJCQkJCTwvbWFzaz4KCQkJCQk8cGF0aCBpZD0iRmlsbC0xXzNfIiBjbGFzcz0ic3QxMiIgZD0iTTE1NDksMTYyLjdjMCwwLTQxLjMtNTQuMi0zNTAuOS02Ny4yQzk2My44LDg1LjcsNTIyLjgsMjM0LDI1Ni4xLDIyMi42CgkJCQkJCWMtMjc0LjYtMTEuOC0yNDUuMS0xMDAtMjQ1LjEtMjAuNVY4My4yYzAsMCw4NS43LDE0MC41LDI0NS4xLDEzOS4zQzQ5MC40LDIyMC45LDk5Mi45LDgsMTIyMy40LDAuNAoJCQkJCQlDMTQ0OC4xLTYuOSwxNTQ5LDgzLjIsMTU0OSw4My4yVjE2Mi43eiIvPgoJCQkJPC9nPgoJCQk8L2c+CgkJPC9nPgoJPC9nPgo8L2c+Cjwvc3ZnPgo="
        },
        6: function(n, e) {},
        "6893e04995d18ad630c9": function(n, e, o) {
            n.exports = o.p + "5db2ea1bcb7a6cc078755c90458c3b65.svg"
        },
        "6ae4ab08c7313c975417": function(n, e, o) {
            (n.exports = o("0e326f80368fd0b1333e")(!1)).push([n.i, 'button, input[type="button"], input[type="submit"] {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  border: 0;\n  border-radius: 3px;\n  color: contrast-switch(#e0e0e0);\n  cursor: pointer;\n  display: inline-block;\n  font-family: "Manrope", sans-serif;\n  font-size: 16px;\n  -webkit-font-smoothing: antialiased;\n  font-weight: 600;\n  line-height: 1;\n  padding: 0.75em 1.5em;\n  text-align: center;\n  text-decoration: none;\n  -webkit-transition: background-color 150ms ease;\n  transition: background-color 150ms ease;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  vertical-align: middle;\n  white-space: nowrap;\n}\n\nbutton:focus, input[type="button"]:focus, input[type="submit"]:focus {\n  outline: none;\n  outline-offset: inherit;\n}\n\nbutton:disabled, input[type="button"]:disabled, input[type="submit"]:disabled {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n\nbutton:disabled:hover, input[type="button"]:disabled:hover, input[type="submit"]:disabled:hover {\n  background-color: #e0e0e0;\n}\n\nfieldset {\n  background-color: transparent;\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  font-weight: 600;\n  margin-bottom: 0.375em;\n  padding: 0;\n}\n\ntextarea {\n  resize: vertical;\n}\n\n[type="checkbox"],\n[type="radio"] {\n  display: inline;\n  margin-right: 0.375em;\n}\n\n[type="file"] {\n  margin-bottom: 0.75em;\n  width: 100%;\n}\n\nselect {\n  margin-bottom: 0.75em;\n  width: 100%;\n}\n\n[type="checkbox"]:focus,\n[type="radio"]:focus,\n[type="file"]:focus,\nselect:focus {\n  outline: 3px solid rgba(224, 224, 224, 0.6);\n  outline-offset: 2px;\n}\n\ninput[type="text"],\ninput[type="email"],\ninput[type="search"],\ninput[type="url"],\ninput[type="number"] {\n  word-break: normal;\n}\n\nhtml {\n  background-color: #fff;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n*,\n*::before,\n*::after {\n  -webkit-box-sizing: inherit;\n          box-sizing: inherit;\n}\n\n*:focus {\n  outline: none;\n}\n\nhtml,\nbody {\n  height: 100%;\n}\n\nbody {\n  margin: 0;\n}\n\nul,\nol {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\ndl {\n  margin: 0;\n}\n\ndt {\n  font-weight: 600;\n  margin: 0;\n}\n\ndd {\n  margin: 0;\n}\n\nfigure {\n  margin: 0;\n}\n\nimg,\npicture {\n  margin: 0;\n  max-width: 100%;\n}\n\ntable {\n  border-collapse: collapse;\n  margin: 1.5em 0;\n  text-align: left;\n  width: 100%;\n}\n\nthead {\n  line-height: 1.2;\n  vertical-align: bottom;\n}\n\ntbody {\n  vertical-align: top;\n}\n\ntr {\n  border-bottom: 1px solid #e0e0e0;\n}\n\nth {\n  font-weight: 600;\n}\n\nth,\ntd {\n  padding: 0.75em 1.5em;\n}\n\n@media screen and (max-width: 1400px) {\n  th,\n  td {\n    padding: 0.75em;\n    padding-left: 1.5em;\n  }\n}\n\n/**\n * Retrieves a color value from the $material-colors Sass map\n * Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette/\n *\n * @function\n * @param {string} color-name             - quoted, lower-case, dasherized color\n *                                          name (e.g. \'pink\', \'amber\')\n * @param {string} [color-variant=\'500\']  - quoted, lowercase color variant (e.g.\n *                                          \'200\', \'a100\')\n */\nhtml {\n  color: #424242;\n  font-family: "Manrope", sans-serif;\n  font-size: 100%;\n  line-height: 1.5;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-family: "Manrope", sans-serif;\n  font-size: 1.25em;\n  line-height: 1.2;\n  margin: 0 0 0.75em;\n}\n\np {\n  margin: 0 0 0.75em;\n}\n\na {\n  color: #2196f3;\n  -webkit-text-decoration-skip: ink;\n          text-decoration-skip-ink: auto;\n  -webkit-transition: color 150ms ease;\n  transition: color 150ms ease;\n}\n\na:focus {\n  outline: none;\n  outline-offset: none;\n}\n\nhr {\n  border-bottom: 1px solid #e0e0e0;\n  border-left: 0;\n  border-right: 0;\n  border-top: 0;\n  margin: 1.5em 0;\n}\n\n[textalign="center"] {\n  text-align: center !important;\n}\n\n[textalign="left"] {\n  text-align: left;\n}\n\n[textalign="right"] {\n  text-align: right;\n}\n\n[textalign="justify"] {\n  text-align: justify;\n}\n\n@tailwind base;\n@tailwind components;\n@tailwind utilities;\na {\n  color: inherit;\n  text-decoration: none;\n}\n\n* {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n/* Scrollbars */\n* {\n  scrollbar-color: #d5d5d5 transparent;\n  scrollbar-width: thin;\n}\n\n*::-webkit-scrollbar {\n  -webkit-appearance: none;\n}\n\n*::-webkit-scrollbar:vertical {\n  width: 4px;\n}\n\n*::-webkit-scrollbar-button:increment,\n*::-webkit-scrollbar-button {\n  display: none;\n}\n\n*::-webkit-scrollbar:horizontal {\n  height: 4px;\n}\n\n*::-webkit-scrollbar-thumb {\n  cursor: move;\n  background-color: #d5d5d5;\n  border-radius: 8px;\n  border: none;\n}\n\n*::-webkit-scrollbar-track {\n  background: transparent;\n  border-radius: 4px;\n}\n', ""])
        },
        "6bd44007027bab998389": function(n, e, o) {
            n.exports = o.p + "642f57b9577e4fa206556faec5510735.png"
        },
        "6df34197578e4e374faf": function(n, e, o) {
            e = n.exports = o("0e326f80368fd0b1333e")(!1);
            var t = o("f728176e63b408a85aea"),
                i = t(o("223c386a802e79b70f02")),
                r = t(o("fb8f8ae888ce6315f040")),
                c = t(o("2016427df3ea7ebdba8e")),
                a = t(o("7d52b6a04bdd48faa2b8")),
                l = t(o("b2b4587baaf3d367ed36")),
                s = t(o("11ec301131ba0a159504")),
                d = t(o("f64730a1de7df64ef19b")),
                b = t(o("0831e06f5b798810af4b")),
                f = t(o("7520c34c029d758440f4")),
                p = t(o("7520c34c029d758440f4") + "?#iefix"),
                u = t(o("8781482f9a475c60bffd")),
                g = t(o("4b6880e02e792d319abe")),
                m = t(o("6893e04995d18ad630c9") + "#Simple-Line-Icons");
            e.push([n.i, '/* ----------------------------------------------------------------\n\n\ttopbar.scss\n\n-----------------------------------------------------------------*/\n/* ----------------------------------------------------------------\n\tTop Bar\n-----------------------------------------------------------------*/\n#top-bar {\n    position: relative;\n    border-bottom: 1px solid #eeeeee;\n    font-size: 0.815rem;\n    background-color: #FFF;\n  }\n\n  /* Top Links\n  ---------------------------------*/\n  .top-links {\n    position: relative;\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    border-bottom: 1px solid #eeeeee;\n  }\n  @media (min-width: 768px) {\n    .top-links {\n      border-bottom: 0;\n    }\n  }\n  .top-links-container {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n    flex-wrap: wrap;\n    -ms-flex-align: center;\n    align-items: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    list-style: none;\n    margin-bottom: 0;\n  }\n  .top-links-item {\n    position: relative;\n    border-left: 1px solid #eeeeee;\n  }\n  .top-links-item:first-child, .top-links-sub-menu .top-links-item {\n    border-left: 0 !important;\n  }\n  .top-links-item > a {\n    display: block;\n    padding: 12px;\n    font-size: 0.75rem;\n    line-height: 20px;\n    font-weight: 700;\n    text-transform: uppercase;\n    color: #666666;\n  }\n  .top-links-item > a > i {\n    vertical-align: top;\n  }\n  .top-links-item > a > i.icon-angle-down {\n    margin: 0 0 0 5px !important;\n  }\n  .top-links-item > a > i:first-child {\n    margin-right: 3px;\n  }\n  .top-links-item.full-icon > a > i {\n    top: 2px;\n    font-size: 0.875rem;\n    margin: 0;\n  }\n  .top-links-item:hover {\n    background-color: #EEE;\n  }\n  .top-links-sub-menu, .top-links-section {\n    position: absolute;\n    visibility: hidden;\n    pointer-events: none;\n    opacity: 0;\n    list-style: none;\n    z-index: -1;\n    line-height: 1.5;\n    background: #FFF;\n    border: 0;\n    top: 100%;\n    left: -1px;\n    width: 140px;\n    margin-top: 10px;\n    border: 1px solid #eeeeee;\n    border-top: 1px solid #1ABC9C;\n    box-shadow: 0px 13px 42px 11px rgba(0, 0, 0, 0.05);\n    transition: opacity .25s ease, margin .2s ease;\n  }\n  .top-links:not(.on-click) .top-links-item:hover > .top-links-sub-menu, .top-links:not(.on-click) .top-links-item:hover > .top-links-section, .top-links.on-click .top-links-sub-menu, .top-links.on-click .top-links-section {\n    opacity: 1;\n    visibility: visible;\n    margin-top: 0;\n    pointer-events: auto;\n    z-index: 499;\n  }\n  .top-links.on-click .top-links-sub-menu, .top-links.on-click .top-links-section {\n    display: none;\n  }\n  .top-links-sub-menu .top-links-sub-menu {\n    top: -1px;\n    left: 100%;\n  }\n  .top-links-sub-menu .top-links-item:not(:first-child) {\n    border-top: 1px solid whitesmoke;\n  }\n  .top-links-sub-menu .top-links-item:hover {\n    background-color: #f9f9f9;\n  }\n  .top-links-sub-menu .top-links-item > a {\n    padding-top: 9px;\n    padding-bottom: 9px;\n    font-size: 0.6875rem;\n  }\n  .top-links-sub-menu .top-links-item > a > img {\n    display: inline-block;\n    position: relative;\n    top: -1px;\n    width: 16px;\n    height: 16px;\n    margin-right: 4px;\n  }\n  .top-links-sub-menu .top-links-item > a i.icon-angle-down {\n    margin: 0 !important;\n    position: absolute;\n    top: 50%;\n    left: auto;\n    right: 10px;\n    transform: translateY(-50%) rotate(-90deg);\n  }\n  .top-links-sub-menu.top-demo-lang .top-links-item > a > img {\n    top: 4px;\n    width: 16px;\n    height: 16px;\n  }\n  .top-links-section {\n    padding: 25px;\n    left: 0;\n    width: 280px;\n  }\n  .top-links-section.menu-pos-invert {\n    left: auto;\n    right: 0;\n  }\n\n  /* Top Social\n  -----------------------------------------------------------------*/\n  #top-social {\n    display: -ms-flexbox;\n    display: flex;\n    justify-content: center;\n    margin: 0;\n  }\n  #top-social li {\n    position: relative;\n    list-style: none;\n    border-left: 1px solid #eeeeee;\n  }\n  #top-social li:first-child {\n    border-left: 0 !important;\n  }\n  #top-social li .ts-icon,\n  #top-social li .ts-text {\n    display: block;\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    height: 44px;\n    line-height: 44px;\n  }\n  #top-social li .ts-icon {\n    width: 40px;\n    text-align: center;\n    font-size: 0.875rem;\n  }\n  #top-social li .ts-text {\n    max-width: 0;\n    white-space: nowrap;\n    -webkit-transition: all .2s ease;\n    transition: all .2s ease;\n  }\n  #top-social li a:hover .ts-text {\n    max-width: 200px;\n    padding-right: 12px;\n    -webkit-transition: all .4s ease;\n    transition: all .4s ease;\n  }\n  #top-social a {\n    display: -ms-flexbox;\n    display: flex;\n    width: auto;\n    overflow: hidden;\n    font-weight: bold;\n    color: #666;\n  }\n  #top-social a:hover {\n    color: #FFF !important;\n    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);\n  }\n\n  /* Top Login\n  -----------------------------------------------------------------*/\n  #top-login {\n    margin-bottom: 0;\n  }\n  #top-login .checkbox {\n    margin-bottom: 10px;\n  }\n  #top-login .form-control {\n    position: relative;\n  }\n  #top-login .form-control:focus {\n    border-color: #CCC;\n  }\n  #top-login .input-group#top-login-username {\n    margin-bottom: -1px;\n  }\n  #top-login #top-login-username input,\n  #top-login #top-login-username .input-group-addon {\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n  #top-login .input-group#top-login-password {\n    margin-bottom: 10px;\n  }\n  #top-login #top-login-password input,\n  #top-login #top-login-password .input-group-addon {\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n  }\n\n  /*-----------------------------------------------------------------------------------\n\n\tShortcodes: social-icons.scss\n\n-----------------------------------------------------------------------------------*/\n/* ----------------------------------------------------------------\n\tSocial Icons\n-----------------------------------------------------------------*/\n.social-icon {\n    margin: 0 5px 5px 0;\n    width: 40px;\n    height: 40px;\n    font-size: 1.25rem;\n    line-height: 38px !important;\n    color: #555555;\n    text-shadow: none;\n    border: 1px solid #aaaaaa;\n    border-radius: 3px;\n    overflow: hidden;\n    /* Social Icons - Large\n    -----------------------------------------------------------------*/\n    /* Social Icons - Small\n    -----------------------------------------------------------------*/\n    /* Social Icons - Hover\n        -----------------------------------------------------------------*/\n  }\n  .d-flex > .social-icon, .d-sm-flex > .social-icon, .d-md-flex > .social-icon, .d-lg-flex > .social-icon, .d-xl-flex > .social-icon {\n    float: none;\n  }\n  .social-icon i {\n    display: block;\n    position: relative;\n  }\n  body:not(.device-touch) .social-icon i {\n    -webkit-transition: all .3s ease;\n    -o-transition: all .3s ease;\n    transition: all .3s ease;\n  }\n  .social-icon i:last-child {\n    color: #FFF !important;\n  }\n  .social-icon:hover i:first-child {\n    margin-top: -38px;\n  }\n  .social-icon.si-large {\n    margin: 0 10px 10px 0;\n    width: 56px;\n    height: 56px;\n    font-size: 30px;\n    line-height: 54px !important;\n  }\n  .social-icon.si-large:hover i:first-child {\n    margin-top: -54px;\n  }\n  .social-icon.si-small {\n    width: 32px;\n    height: 32px;\n    font-size: 14px;\n    line-height: 30px !important;\n  }\n  .social-icon.si-small:hover i:first-child {\n    margin-top: -30px;\n  }\n  .social-icon:hover {\n    color: #555555;\n    border-color: transparent;\n  }\n  .social-icon.si-colored {\n    border-color: transparent;\n  }\n\n  /* Social Icons - Rounded\n  -----------------------------------------------------------------*/\n  .si-rounded {\n    border-radius: 50%;\n  }\n\n  /* Social Icons - Borderless\n  -----------------------------------------------------------------*/\n  .si-borderless {\n    border-color: transparent !important;\n  }\n\n  /* Social Icons - Dark\n  -----------------------------------------------------------------*/\n  .si-dark {\n    background-color: #444;\n    color: #fff !important;\n    border-color: transparent;\n  }\n\n  /* Social Icons - Light\n  -----------------------------------------------------------------*/\n  .si-light {\n    background-color: #EEE;\n    color: #555555 !important;\n    border-color: transparent;\n  }\n\n  /* Social Icons - Colored\n  -----------------------------------------------------------------*/\n  .si-colored {\n    border-color: transparent !important;\n  }\n  .si-colored i {\n    color: #FFF;\n  }\n\n  /* Social Icons - Sticky\n  -----------------------------------------------------------------*/\n  .si-sticky {\n    position: fixed;\n    top: 50%;\n    left: 5px;\n    width: 36px;\n    z-index: 499;\n    transform: translateY(-50%);\n    /* Social Icons - Sticky Right\n    -----------------------------------------------------------------*/\n  }\n  .si-sticky.si-sticky-right {\n    left: auto;\n    right: 8px;\n  }\n\n  /* Social Icons - Share\n  -----------------------------------------------------------------*/\n  .si-share {\n    position: relative;\n    padding-left: 5px;\n    border-top: 1px solid #eeeeee;\n    border-bottom: 1px solid #eeeeee;\n  }\n  .si-share span {\n    line-height: 36px;\n    font-weight: bold;\n    font-size: 13px;\n  }\n  .si-share .social-icon {\n    margin: -1px 0;\n    border-radius: 0;\n    font-size: 15px;\n  }\n\n  /* Social Icons - bg-colors\n  -----------------------------------------------------------------*/\n  .si-facebook:hover,\n  .si-colored.si-facebook {\n    background-color: #3B5998 !important;\n  }\n\n  .si-whatsapp:hover,\n  .si-colored.si-whatsapp {\n    background-color: #25d366 !important;\n  }\n\n  .si-delicious:hover,\n  .si-colored.si-delicious {\n    background-color: #205CC0 !important;\n  }\n\n  .si-paypal:hover,\n  .si-colored.si-paypal {\n    background-color: #00588B !important;\n  }\n\n  .si-flattr:hover,\n  .si-colored.si-flattr {\n    background-color: #F67C1A !important;\n  }\n\n  .si-android:hover,\n  .si-colored.si-android {\n    background-color: #A4C639 !important;\n  }\n\n  .si-smashmag:hover,\n  .si-colored.si-smashmag {\n    background-color: #E53B2C !important;\n  }\n\n  .si-gplus:hover,\n  .si-colored.si-gplus {\n    background-color: #DD4B39 !important;\n  }\n\n  .si-wikipedia:hover,\n  .si-colored.si-wikipedia {\n    background-color: #333 !important;\n  }\n\n  .si-stumbleupon:hover,\n  .si-colored.si-stumbleupon {\n    background-color: #F74425 !important;\n  }\n\n  .si-foursquare:hover,\n  .si-colored.si-foursquare {\n    background-color: #25A0CA !important;\n  }\n\n  .si-call:hover,\n  .si-colored.si-call {\n    background-color: #444 !important;\n  }\n\n  .si-ninetyninedesigns:hover,\n  .si-colored.si-ninetyninedesigns {\n    background-color: #F26739 !important;\n  }\n\n  .si-forrst:hover,\n  .si-colored.si-forrst {\n    background-color: #5B9A68 !important;\n  }\n\n  .si-digg:hover,\n  .si-colored.si-digg {\n    background-color: #191919 !important;\n  }\n\n  .si-spotify:hover,\n  .si-colored.si-spotify {\n    background-color: #81B71A !important;\n  }\n\n  .si-reddit:hover,\n  .si-colored.si-reddit {\n    background-color: #C6C6C6 !important;\n  }\n\n  .si-blogger:hover,\n  .si-colored.si-blogger {\n    background-color: #FC4F08 !important;\n  }\n\n  .si-cc:hover,\n  .si-colored.si-cc {\n    background-color: #688527 !important;\n  }\n\n  .si-dribbble:hover,\n  .si-colored.si-dribbble {\n    background-color: #EA4C89 !important;\n  }\n\n  .si-evernote:hover,\n  .si-colored.si-evernote {\n    background-color: #5BA525 !important;\n  }\n\n  .si-flickr:hover,\n  .si-colored.si-flickr {\n    background-color: #FF0084 !important;\n  }\n\n  .si-google:hover,\n  .si-colored.si-google {\n    background-color: #DD4B39 !important;\n  }\n\n  .si-instapaper:hover,\n  .si-colored.si-instapaper {\n    background-color: #333 !important;\n  }\n\n  .si-klout:hover,\n  .si-colored.si-klout {\n    background-color: #FF5F52 !important;\n  }\n\n  .si-linkedin:hover,\n  .si-colored.si-linkedin {\n    background-color: #0E76A8 !important;\n  }\n\n  .si-vk:hover,\n  .si-colored.si-vk {\n    background-color: #2B587A !important;\n  }\n\n  .si-rss:hover,\n  .si-colored.si-rss {\n    background-color: #EE802F !important;\n  }\n\n  .si-skype:hover,\n  .si-colored.si-skype {\n    background-color: #00AFF0 !important;\n  }\n\n  .si-twitter:hover,\n  .si-colored.si-twitter {\n    background-color: #00ACEE !important;\n  }\n\n  .si-youtube:hover,\n  .si-colored.si-youtube {\n    background-color: #C4302B !important;\n  }\n\n  .si-vimeo:hover,\n  .si-colored.si-vimeo {\n    background-color: #86C9EF !important;\n  }\n\n  .si-aim:hover,\n  .si-colored.si-aim {\n    background-color: #FCD20B !important;\n  }\n\n  .si-yahoo:hover,\n  .si-colored.si-yahoo {\n    background-color: #720E9E !important;\n  }\n\n  .si-email3:hover,\n  .si-colored.si-email3 {\n    background-color: #6567A5 !important;\n  }\n\n  .si-macstore:hover,\n  .si-colored.si-macstore {\n    background-color: #333333 !important;\n  }\n\n  .si-myspace:hover,\n  .si-colored.si-myspace {\n    background-color: #666666 !important;\n  }\n\n  .si-podcast:hover,\n  .si-colored.si-podcast {\n    background-color: #E4B21B !important;\n  }\n\n  .si-cloudapp:hover,\n  .si-colored.si-cloudapp {\n    background-color: #525557 !important;\n  }\n\n  .si-dropbox:hover,\n  .si-colored.si-dropbox {\n    background-color: #3D9AE8 !important;\n  }\n\n  .si-ebay:hover,\n  .si-colored.si-ebay {\n    background-color: #89C507 !important;\n  }\n\n  .si-github:hover,\n  .si-colored.si-github {\n    background-color: #171515 !important;\n  }\n\n  .si-googleplay:hover,\n  .si-colored.si-googleplay {\n    background-color: #DD4B39 !important;\n  }\n\n  .si-itunes:hover,\n  .si-colored.si-itunes {\n    background-color: #222 !important;\n  }\n\n  .si-plurk:hover,\n  .si-colored.si-plurk {\n    background-color: #CF5A00 !important;\n  }\n\n  .si-pinboard:hover,\n  .si-colored.si-pinboard {\n    background-color: #0000E6 !important;\n  }\n\n  .si-soundcloud:hover,\n  .si-colored.si-soundcloud {\n    background-color: #FF7700 !important;\n  }\n\n  .si-tumblr:hover,\n  .si-colored.si-tumblr {\n    background-color: #34526F !important;\n  }\n\n  .si-wordpress:hover,\n  .si-colored.si-wordpress {\n    background-color: #1E8CBE !important;\n  }\n\n  .si-yelp:hover,\n  .si-colored.si-yelp {\n    background-color: #C41200 !important;\n  }\n\n  .si-intensedebate:hover,\n  .si-colored.si-intensedebate {\n    background-color: #009EE4 !important;\n  }\n\n  .si-eventbrite:hover,\n  .si-colored.si-eventbrite {\n    background-color: #F16924 !important;\n  }\n\n  .si-scribd:hover,\n  .si-colored.si-scribd {\n    background-color: #666666 !important;\n  }\n\n  .si-stripe:hover,\n  .si-colored.si-stripe {\n    background-color: #008CDD !important;\n  }\n\n  .si-print:hover,\n  .si-colored.si-print {\n    background-color: #111 !important;\n  }\n\n  .si-dwolla:hover,\n  .si-colored.si-dwolla {\n    background-color: #FF5C03 !important;\n  }\n\n  .si-statusnet:hover,\n  .si-colored.si-statusnet {\n    background-color: #131A30 !important;\n  }\n\n  .si-acrobat:hover,\n  .si-colored.si-acrobat {\n    background-color: #D3222A !important;\n  }\n\n  .si-drupal:hover,\n  .si-colored.si-drupal {\n    background-color: #27537A !important;\n  }\n\n  .si-buffer:hover,\n  .si-colored.si-buffer {\n    background-color: #333333 !important;\n  }\n\n  .si-pocket:hover,\n  .si-colored.si-pocket {\n    background-color: #EE4056 !important;\n  }\n\n  .si-bitbucket:hover,\n  .si-colored.si-bitbucket {\n    background-color: #0E4984 !important;\n  }\n\n  .si-stackoverflow:hover,\n  .si-colored.si-stackoverflow {\n    background-color: #EF8236 !important;\n  }\n\n  .si-hackernews:hover,\n  .si-colored.si-hackernews {\n    background-color: #FF6600 !important;\n  }\n\n  .si-xing:hover,\n  .si-colored.si-xing {\n    background-color: #126567 !important;\n  }\n\n  .si-instagram:hover,\n  .si-colored.si-instagram {\n    background-color: #8A3AB9 !important;\n  }\n\n  .si-quora:hover,\n  .si-colored.si-quora {\n    background-color: #A82400 !important;\n  }\n\n  .si-openid:hover,\n  .si-colored.si-openid {\n    background-color: #E16309 !important;\n  }\n\n  .si-steam:hover,\n  .si-colored.si-steam {\n    background-color: #111 !important;\n  }\n\n  .si-amazon:hover,\n  .si-colored.si-amazon {\n    background-color: #E47911 !important;\n  }\n\n  .si-disqus:hover,\n  .si-colored.si-disqus {\n    background-color: #E4E7EE !important;\n  }\n\n  .si-plancast:hover,\n  .si-colored.si-plancast {\n    background-color: #222 !important;\n  }\n\n  .si-appstore:hover,\n  .si-colored.si-appstore {\n    background-color: #000 !important;\n  }\n\n  .si-pinterest:hover,\n  .si-colored.si-pinterest {\n    background-color: #C8232C !important;\n  }\n\n  .si-fivehundredpx:hover,\n  .si-colored.si-fivehundredpx {\n    background-color: #111 !important;\n  }\n\n  .si-tiktok:hover,\n  .si-colored.si-tiktok { background-color: #000 !important; }\n\n  .si-whatsapp:hover,\n  .si-colored.si-whatsapp { background-color: #25D366 !important; }\n\n  .si-tripadvisor:hover,\n  .si-colored.si-tripadvisor { background-color: #00AF87 !important; }\n\n  .si-gpay:hover,\n  .si-colored.si-gpay { background-color: #6877DF !important; }\n\n  .si-unsplash:hover,\n  .si-colored.si-unsplash { background-color: #111 !important; }\n\n  .si-snapchat:hover,\n  .si-colored.si-snapchat { background-color: #FFFC00 !important; }\n\n  /* Social Icons - colors\n  -----------------------------------------------------------------*/\n  .si-text-color.si-facebook i {\n    color: #3B5998;\n  }\n  .si-text-color.si-whatsapp i {\n    color: #25d366;\n  }\n  .si-text-color.si-delicious i {\n    color: #205CC0;\n  }\n  .si-text-color.si-paypal i {\n    color: #00588B;\n  }\n  .si-text-color.si-flattr i {\n    color: #F67C1A;\n  }\n  .si-text-color.si-android i {\n    color: #A4C639;\n  }\n  .si-text-color.si-smashmag i {\n    color: #E53B2C;\n  }\n  .si-text-color.si-gplus i {\n    color: #DD4B39;\n  }\n  .si-text-color.si-wikipedia i {\n    color: #333;\n  }\n  .si-text-color.si-stumbleupon i {\n    color: #F74425;\n  }\n  .si-text-color.si-foursquare i {\n    color: #25A0CA;\n  }\n  .si-text-color.si-call i {\n    color: #444;\n  }\n  .si-text-color.si-ninetyninedesigns i {\n    color: #F26739;\n  }\n  .si-text-color.si-forrst i {\n    color: #5B9A68;\n  }\n  .si-text-color.si-digg i {\n    color: #191919;\n  }\n  .si-text-color.si-spotify i {\n    color: #81B71A;\n  }\n  .si-text-color.si-reddit i {\n    color: #C6C6C6;\n  }\n  .si-text-color.si-blogger i {\n    color: #FC4F08;\n  }\n  .si-text-color.si-cc i {\n    color: #688527;\n  }\n  .si-text-color.si-dribbble i {\n    color: #EA4C89;\n  }\n  .si-text-color.si-evernote i {\n    color: #5BA525;\n  }\n  .si-text-color.si-flickr i {\n    color: #FF0084;\n  }\n  .si-text-color.si-google i {\n    color: #DD4B39;\n  }\n  .si-text-color.si-instapaper i {\n    color: #333;\n  }\n  .si-text-color.si-klout i {\n    color: #FF5F52;\n  }\n  .si-text-color.si-linkedin i {\n    color: #0E76A8;\n  }\n  .si-text-color.si-vk i {\n    color: #2B587A;\n  }\n  .si-text-color.si-rss i {\n    color: #EE802F;\n  }\n  .si-text-color.si-skype i {\n    color: #00AFF0;\n  }\n  .si-text-color.si-twitter i {\n    color: #00ACEE;\n  }\n  .si-text-color.si-youtube i {\n    color: #C4302B;\n  }\n  .si-text-color.si-vimeo i {\n    color: #86C9EF;\n  }\n  .si-text-color.si-aim i {\n    color: #FCD20B;\n  }\n  .si-text-color.si-yahoo i {\n    color: #720E9E;\n  }\n  .si-text-color.si-email3 i {\n    color: #6567A5;\n  }\n  .si-text-color.si-macstore i {\n    color: #333333;\n  }\n  .si-text-color.si-myspace i {\n    color: #666666;\n  }\n  .si-text-color.si-podcast i {\n    color: #E4B21B;\n  }\n  .si-text-color.si-cloudapp i {\n    color: #525557;\n  }\n  .si-text-color.si-dropbox i {\n    color: #3D9AE8;\n  }\n  .si-text-color.si-ebay i {\n    color: #89C507;\n  }\n  .si-text-color.si-github i {\n    color: #171515;\n  }\n  .si-text-color.si-googleplay i {\n    color: #DD4B39;\n  }\n  .si-text-color.si-itunes i {\n    color: #222;\n  }\n  .si-text-color.si-plurk i {\n    color: #CF5A00;\n  }\n  .si-text-color.si-pinboard i {\n    color: #0000E6;\n  }\n  .si-text-color.si-soundcloud i {\n    color: #FF7700;\n  }\n  .si-text-color.si-tumblr i {\n    color: #34526F;\n  }\n  .si-text-color.si-wordpress i {\n    color: #1E8CBE;\n  }\n  .si-text-color.si-yelp i {\n    color: #C41200;\n  }\n  .si-text-color.si-intensedebate i {\n    color: #009EE4;\n  }\n  .si-text-color.si-eventbrite i {\n    color: #F16924;\n  }\n  .si-text-color.si-scribd i {\n    color: #666666;\n  }\n  .si-text-color.si-stripe i {\n    color: #008CDD;\n  }\n  .si-text-color.si-print i {\n    color: #111;\n  }\n  .si-text-color.si-dwolla i {\n    color: #FF5C03;\n  }\n  .si-text-color.si-statusnet i {\n    color: #131A30;\n  }\n  .si-text-color.si-acrobat i {\n    color: #D3222A;\n  }\n  .si-text-color.si-drupal i {\n    color: #27537A;\n  }\n  .si-text-color.si-buffer i {\n    color: #333333;\n  }\n  .si-text-color.si-pocket i {\n    color: #EE4056;\n  }\n  .si-text-color.si-bitbucket i {\n    color: #0E4984;\n  }\n  .si-text-color.si-stackoverflow i {\n    color: #EF8236;\n  }\n  .si-text-color.si-hackernews i {\n    color: #FF6600;\n  }\n  .si-text-color.si-xing i {\n    color: #126567;\n  }\n  .si-text-color.si-instagram i {\n    color: #8A3AB9;\n  }\n  .si-text-color.si-quora i {\n    color: #A82400;\n  }\n  .si-text-color.si-openid i {\n    color: #E16309;\n  }\n  .si-text-color.si-steam i {\n    color: #111;\n  }\n  .si-text-color.si-amazon i {\n    color: #E47911;\n  }\n  .si-text-color.si-disqus i {\n    color: #E4E7EE;\n  }\n  .si-text-color.si-plancast i {\n    color: #222;\n  }\n  .si-text-color.si-appstore i {\n    color: #000;\n  }\n  .si-text-color.si-pinterest i {\n    color: #C8232C;\n  }\n  .si-text-color.si-fivehundredpx i {\n    color: #111;\n  }\n  .si-text-color.si-tiktok i { color: #000; }\n  .si-text-color.si-whatsapp i { color: #25D366; }\n  .si-text-color.si-tripadvisor i { color: #00AF87; }\n  .si-text-color.si-gpay i { color: #DB4437; }\n  .si-text-color.si-unsplash i { color: #111; }\n  .si-text-color.si-snapchat i { color: #FFFC00; }\n  .si-text-color:hover {\n    color: #FFF;\n  }\n\n\n  @font-face {\n    font-family: "font-icons";\n    src: url(' + i + ");\n    src: url(" + i + ') format("embedded-opentype"),\n      url(' + r + ') format("woff"),\n      url(' + c + ') format("truetype"),\n      url(' + a + ') format("svg");\n    font-weight: normal;\n    font-style: normal;\n  }\n\n  @font-face {\n    font-family: "lined-icons";\n    src: url(' + l + ");\n    src: url(" + l + ') format("embedded-opentype"),\n      url(' + s + ') format("woff"),\n      url(' + d + ') format("truetype"),\n      url(' + b + ') format("svg");\n    font-weight: normal;\n    font-style: normal;\n  }\n\n  @font-face {\n    font-family: "Simple-Line-Icons";\n    src: url(' + f + ");\n    src: url(" + p + ') format("embedded-opentype"),\n      url(' + u + ') format("woff"),\n      url(' + g + ') format("truetype"),\n      url(' + m + ') format("svg");\n    font-weight: normal;\n    font-style: normal;\n  }\n\n  [class^="icon-"],\n  [class*=" icon-"],\n  [class^="icon-line-"],\n  [class*=" icon-line-"],\n  [class^="icon-line2-"],\n  [class*=" icon-line2-"],\n  .side-header .primary-menu ul > li.sub-menu > a:after,\n  .docs-navigation ul ul li.current a:after {\n    display: inline-block;\n    font-family: "font-icons";\n    speak: none;\n    font-style: normal;\n    font-weight: normal;\n    font-variant: normal;\n    text-transform: none;\n    line-height: inherit;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  [class^="icon-line-"],\n  [class*=" icon-line-"] {\n    font-family: "lined-icons";\n  }\n\n  [class^="icon-line2-"],\n  [class*=" icon-line2-"] {\n    font-family: "Simple-Line-Icons";\n  }\n\n  .icon-lg {\n    font-size: 1.3333333333333333em;\n    line-height: 0.75em;\n    vertical-align: -15%;\n  }\n  .icon-2x {\n    font-size: 2em;\n  }\n  .icon-3x {\n    font-size: 3em;\n  }\n  .icon-4x {\n    font-size: 4em;\n  }\n  .icon-5x {\n    font-size: 5em;\n  }\n  .icon-fw {\n    width: 1.2857142857142858em;\n    text-align: center;\n  }\n\n  .iconlist {\n    padding-left: 0;\n    margin-left: 0;\n    list-style-type: none;\n  }\n\n  .iconlist li {\n    position: relative;\n    display: flex;\n    align-items: baseline;\n  }\n\n  .iconlist ul {\n    list-style-type: none;\n    margin: 0.5rem 0 0.5rem 1.5rem;\n  }\n\n  .iconlist > li [class^="icon-"]:first-child,\n  .iconlist > li [class*=" icon-"]:first-child {\n    position: relative;\n    text-align: center;\n    top: 1px;\n    width: 1rem;\n      margin-right: 0.75rem;\n      flex: 0 0 auto;\n  }\n\n  .rtl .iconlist > li [class^="icon-"]:first-child,\n  .rtl .iconlist > li [class*=" icon-"]:first-child {\n    margin-left: 0.75rem;\n    margin-right: 0;\n  }\n\n  .iconlist.iconlist-large {\n    font-size: 1.5rem;\n  }\n\n  .iconlist.iconlist-large li {\n    margin: 4px 0;\n  }\n\n  .iconlist.iconlist-large > li [class^="icon-"],\n  .iconlist.iconlist-large > li [class*=" icon-"] {\n    width: 1.5rem;\n    margin-right: 5px;\n  }\n\n  .rtl .iconlist.iconlist-large > li [class^="icon-"],\n  .rtl .iconlist.iconlist-large > li [class*=" icon-"] {\n    margin-left: 5px;\n    margin-right: 0;\n  }\n\n  .iconlist > li [class^="icon-"]:first-child {\n    color: #1ABC9C;\n    color: var(--themecolor);\n  }\n\n  .icon-border {\n    padding: 0.2em 0.25em 0.15em;\n    border: solid 0.08em #eeeeee;\n    border-radius: 0.1em;\n  }\n  .icon.pull-left {\n    margin-right: 0.3em;\n  }\n  .icon.pull-right {\n    margin-left: 0.3em;\n  }\n  .icon-spin {\n    -webkit-animation: spin 2s infinite linear;\n    -moz-animation: spin 2s infinite linear;\n    -o-animation: spin 2s infinite linear;\n    animation: spin 2s infinite linear;\n  }\n  @-moz-keyframes spin {\n    0% {\n      -moz-transform: rotate(0deg);\n    }\n    100% {\n      -moz-transform: rotate(359deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    0% {\n      -webkit-transform: rotate(0deg);\n    }\n    100% {\n      -webkit-transform: rotate(359deg);\n    }\n  }\n  @-o-keyframes spin {\n    0% {\n      -o-transform: rotate(0deg);\n    }\n    100% {\n      -o-transform: rotate(359deg);\n    }\n  }\n  @-ms-keyframes spin {\n    0% {\n      -ms-transform: rotate(0deg);\n    }\n    100% {\n      -ms-transform: rotate(359deg);\n    }\n  }\n  @keyframes spin {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(359deg);\n    }\n  }\n  .icon-rotate-90 {\n    filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=1);\n    -webkit-transform: rotate(90deg);\n    -moz-transform: rotate(90deg);\n    -ms-transform: rotate(90deg);\n    -o-transform: rotate(90deg);\n    transform: rotate(90deg);\n  }\n  .icon-rotate-180 {\n    filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2);\n    -webkit-transform: rotate(180deg);\n    -moz-transform: rotate(180deg);\n    -ms-transform: rotate(180deg);\n    -o-transform: rotate(180deg);\n    transform: rotate(180deg);\n  }\n  .icon-rotate-270 {\n    filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);\n    -webkit-transform: rotate(270deg);\n    -moz-transform: rotate(270deg);\n    -ms-transform: rotate(270deg);\n    -o-transform: rotate(270deg);\n    transform: rotate(270deg);\n  }\n  .icon-flip-horizontal {\n    filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1);\n    -webkit-transform: scale(-1, 1);\n    -moz-transform: scale(-1, 1);\n    -ms-transform: scale(-1, 1);\n    -o-transform: scale(-1, 1);\n    transform: scale(-1, 1);\n  }\n  .icon-flip-vertical {\n    filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1);\n    -webkit-transform: scale(1, -1);\n    -moz-transform: scale(1, -1);\n    -ms-transform: scale(1, -1);\n    -o-transform: scale(1, -1);\n    transform: scale(1, -1);\n  }\n  .icon-stacked {\n    position: relative;\n    display: inline-block;\n    width: 2em;\n    height: 2em;\n    line-height: 2em;\n    vertical-align: middle;\n  }\n  .icon-stacked-1x,\n  .icon-stacked-2x {\n    position: absolute;\n    left: 0;\n    width: 100%;\n    text-align: center;\n  }\n  .rtl .icon-stacked-1x,\n  .rtl .icon-stacked-2x {\n    left: auto;\n    right: 0;\n  }\n  .icon-stacked-1x {\n    line-height: inherit;\n  }\n  .icon-stacked-2x {\n    font-size: 2em;\n  }\n  .icon-inverse {\n    color: #ffffff;\n  }\n\n  .icon-type:before {\n    content: "\\e600";\n  }\n  .icon-box1:before {\n    content: "\\e601";\n  }\n  .icon-archive1:before {\n    content: "\\e602";\n  }\n  .icon-envelope2:before {\n    content: "\\e603";\n  }\n  .icon-email:before {\n    content: "\\e604";\n  }\n  .icon-files:before {\n    content: "\\e605";\n  }\n  .icon-printer2:before {\n    content: "\\e606";\n  }\n  .icon-folder-add:before {\n    content: "\\e607";\n  }\n  .icon-folder-settings:before {\n    content: "\\e608";\n  }\n  .icon-folder-check:before {\n    content: "\\e609";\n  }\n  .icon-wifi-low:before {\n    content: "\\e60a";\n  }\n  .icon-wifi-mid:before {\n    content: "\\e60b";\n  }\n  .icon-wifi-full:before {\n    content: "\\e60c";\n  }\n  .icon-connection-empty:before {\n    content: "\\e60d";\n  }\n  .icon-battery-full1:before {\n    content: "\\e60e";\n  }\n  .icon-settings:before {\n    content: "\\e60f";\n  }\n  .icon-arrow-left1:before {\n    content: "\\e610";\n  }\n  .icon-arrow-up1:before {\n    content: "\\e611";\n  }\n  .icon-arrow-down1:before {\n    content: "\\e612";\n  }\n  .icon-arrow-right1:before {\n    content: "\\e613";\n  }\n  .icon-reload:before {\n    content: "\\e614";\n  }\n  .icon-download1:before {\n    content: "\\e615";\n  }\n  .icon-tag1:before {\n    content: "\\e616";\n  }\n  .icon-trashcan:before {\n    content: "\\e617";\n  }\n  .icon-search1:before {\n    content: "\\e618";\n  }\n  .icon-zoom-in:before {\n    content: "\\e619";\n  }\n  .icon-zoom-out:before {\n    content: "\\e61a";\n  }\n  .icon-chat:before {\n    content: "\\e61b";\n  }\n  .icon-clock2:before {\n    content: "\\e61c";\n  }\n  .icon-printer:before {\n    content: "\\e61d";\n  }\n  .icon-home1:before {\n    content: "\\e61e";\n  }\n  .icon-flag2:before {\n    content: "\\e61f";\n  }\n  .icon-meter:before {\n    content: "\\e620";\n  }\n  .icon-switch:before {\n    content: "\\e621";\n  }\n  .icon-forbidden:before {\n    content: "\\e622";\n  }\n  .icon-phone-landscape:before {\n    content: "\\e623";\n  }\n  .icon-tablet1:before {\n    content: "\\e624";\n  }\n  .icon-tablet-landscape:before {\n    content: "\\e625";\n  }\n  .icon-laptop1:before {\n    content: "\\e626";\n  }\n  .icon-camera1:before {\n    content: "\\e627";\n  }\n  .icon-microwave-oven:before {\n    content: "\\e628";\n  }\n  .icon-credit-cards:before {\n    content: "\\e629";\n  }\n  .icon-map-marker1:before {\n    content: "\\e62a";\n  }\n  .icon-map2:before {\n    content: "\\e62b";\n  }\n  .icon-support:before {\n    content: "\\e62c";\n  }\n  .icon-newspaper2:before {\n    content: "\\e62d";\n  }\n  .icon-barbell:before {\n    content: "\\e62e";\n  }\n  .icon-stopwatch1:before {\n    content: "\\e62f";\n  }\n  .icon-atom1:before {\n    content: "\\e630";\n  }\n  .icon-image2:before {\n    content: "\\e631";\n  }\n  .icon-cube1:before {\n    content: "\\e632";\n  }\n  .icon-bars1:before {\n    content: "\\e633";\n  }\n  .icon-chart:before {\n    content: "\\e634";\n  }\n  .icon-pencil:before {\n    content: "\\e635";\n  }\n  .icon-measure:before {\n    content: "\\e636";\n  }\n  .icon-eyedropper:before {\n    content: "\\e637";\n  }\n  .icon-file-settings:before {\n    content: "\\e638";\n  }\n  .icon-file-add:before {\n    content: "\\e639";\n  }\n  .icon-file2:before {\n    content: "\\e63a";\n  }\n  .icon-align-left1:before {\n    content: "\\e63b";\n  }\n  .icon-align-right1:before {\n    content: "\\e63c";\n  }\n  .icon-align-center1:before {\n    content: "\\e63d";\n  }\n  .icon-align-justify1:before {\n    content: "\\e63e";\n  }\n  .icon-file-broken:before {\n    content: "\\e63f";\n  }\n  .icon-browser:before {\n    content: "\\e640";\n  }\n  .icon-windows1:before {\n    content: "\\e641";\n  }\n  .icon-window:before {\n    content: "\\e642";\n  }\n  .icon-folder2:before {\n    content: "\\e643";\n  }\n  .icon-connection-25:before {\n    content: "\\e644";\n  }\n  .icon-connection-50:before {\n    content: "\\e645";\n  }\n  .icon-connection-75:before {\n    content: "\\e646";\n  }\n  .icon-connection-full:before {\n    content: "\\e647";\n  }\n  .icon-list1:before {\n    content: "\\e648";\n  }\n  .icon-grid:before {\n    content: "\\e649";\n  }\n  .icon-stack3:before {\n    content: "\\e64a";\n  }\n  .icon-battery-charging:before {\n    content: "\\e64b";\n  }\n  .icon-battery-empty1:before {\n    content: "\\e64c";\n  }\n  .icon-battery-25:before {\n    content: "\\e64d";\n  }\n  .icon-battery-50:before {\n    content: "\\e64e";\n  }\n  .icon-battery-75:before {\n    content: "\\e64f";\n  }\n  .icon-refresh:before {\n    content: "\\e650";\n  }\n  .icon-volume:before {\n    content: "\\e651";\n  }\n  .icon-volume-increase:before {\n    content: "\\e652";\n  }\n  .icon-volume-decrease:before {\n    content: "\\e653";\n  }\n  .icon-mute:before {\n    content: "\\e654";\n  }\n  .icon-microphone1:before {\n    content: "\\e655";\n  }\n  .icon-microphone-off:before {\n    content: "\\e656";\n  }\n  .icon-book1:before {\n    content: "\\e657";\n  }\n  .icon-checkmark:before {\n    content: "\\e658";\n  }\n  .icon-checkbox-checked:before {\n    content: "\\e659";\n  }\n  .icon-checkbox:before {\n    content: "\\e65a";\n  }\n  .icon-paperclip1:before {\n    content: "\\e65b";\n  }\n  .icon-chat-1:before {\n    content: "\\e65c";\n  }\n  .icon-chat-2:before {\n    content: "\\e65d";\n  }\n  .icon-chat-3:before {\n    content: "\\e65e";\n  }\n  .icon-comment2:before {\n    content: "\\e65f";\n  }\n  .icon-calendar2:before {\n    content: "\\e660";\n  }\n  .icon-bookmark2:before {\n    content: "\\e661";\n  }\n  .icon-email2:before {\n    content: "\\e662";\n  }\n  .icon-heart2:before {\n    content: "\\e663";\n  }\n  .icon-enter:before {\n    content: "\\e664";\n  }\n  .icon-cloud1:before {\n    content: "\\e665";\n  }\n  .icon-book2:before {\n    content: "\\e666";\n  }\n  .icon-star2:before {\n    content: "\\e667";\n  }\n  .icon-lock1:before {\n    content: "\\e668";\n  }\n  .icon-unlocked:before {\n    content: "\\e669";\n  }\n  .icon-unlocked2:before {\n    content: "\\e66a";\n  }\n  .icon-users1:before {\n    content: "\\e66b";\n  }\n  .icon-user2:before {\n    content: "\\e66c";\n  }\n  .icon-users2:before {\n    content: "\\e66d";\n  }\n  .icon-user21:before {\n    content: "\\e66e";\n  }\n  .icon-bullhorn1:before {\n    content: "\\e66f";\n  }\n  .icon-share1:before {\n    content: "\\e670";\n  }\n  .icon-screen:before {\n    content: "\\e671";\n  }\n  .icon-phone1:before {\n    content: "\\e672";\n  }\n  .icon-phone-portrait:before {\n    content: "\\e673";\n  }\n  .icon-calculator1:before {\n    content: "\\e674";\n  }\n  .icon-bag:before {\n    content: "\\e675";\n  }\n  .icon-diamond:before {\n    content: "\\e676";\n  }\n  .icon-drink:before {\n    content: "\\e677";\n  }\n  .icon-shorts:before {\n    content: "\\e678";\n  }\n  .icon-vcard:before {\n    content: "\\e679";\n  }\n  .icon-sun2:before {\n    content: "\\e67a";\n  }\n  .icon-bill:before {\n    content: "\\e67b";\n  }\n  .icon-coffee1:before {\n    content: "\\e67c";\n  }\n  .icon-tv2:before {\n    content: "\\e67d";\n  }\n  .icon-newspaper3:before {\n    content: "\\e67e";\n  }\n  .icon-stack:before {\n    content: "\\e67f";\n  }\n  .icon-syringe1:before {\n    content: "\\e680";\n  }\n  .icon-health:before {\n    content: "\\e681";\n  }\n  .icon-bolt1:before {\n    content: "\\e682";\n  }\n  .icon-pill:before {\n    content: "\\e683";\n  }\n  .icon-bones:before {\n    content: "\\e684";\n  }\n  .icon-lab:before {\n    content: "\\e685";\n  }\n  .icon-clipboard2:before {\n    content: "\\e686";\n  }\n  .icon-mug:before {\n    content: "\\e687";\n  }\n  .icon-bucket:before {\n    content: "\\e688";\n  }\n  .icon-select:before {\n    content: "\\e689";\n  }\n  .icon-graph:before {\n    content: "\\e68a";\n  }\n  .icon-crop1:before {\n    content: "\\e68b";\n  }\n  .icon-heart21:before {\n    content: "\\e68c";\n  }\n  .icon-cloud2:before {\n    content: "\\e68d";\n  }\n  .icon-star21:before {\n    content: "\\e68e";\n  }\n  .icon-pen1:before {\n    content: "\\e68f";\n  }\n  .icon-diamond2:before {\n    content: "\\e690";\n  }\n  .icon-display:before {\n    content: "\\e691";\n  }\n  .icon-paperplane:before {\n    content: "\\e692";\n  }\n  .icon-params:before {\n    content: "\\e693";\n  }\n  .icon-banknote:before {\n    content: "\\e694";\n  }\n  .icon-vynil:before {\n    content: "\\e695";\n  }\n  .icon-truck1:before {\n    content: "\\e696";\n  }\n  .icon-world:before {\n    content: "\\e697";\n  }\n  .icon-tv1:before {\n    content: "\\e698";\n  }\n  .icon-sound:before {\n    content: "\\e699";\n  }\n  .icon-video1:before {\n    content: "\\e69a";\n  }\n  .icon-trash1:before {\n    content: "\\e69b";\n  }\n  .icon-user3:before {\n    content: "\\e69c";\n  }\n  .icon-key1:before {\n    content: "\\e69d";\n  }\n  .icon-search2:before {\n    content: "\\e69e";\n  }\n  .icon-settings2:before {\n    content: "\\e69f";\n  }\n  .icon-camera2:before {\n    content: "\\e6a0";\n  }\n  .icon-tag2:before {\n    content: "\\e6a1";\n  }\n  .icon-lock2:before {\n    content: "\\e6a2";\n  }\n  .icon-bulb:before {\n    content: "\\e6a3";\n  }\n  .icon-location:before {\n    content: "\\e6a4";\n  }\n  .icon-eye2:before {\n    content: "\\e6a5";\n  }\n  .icon-bubble:before {\n    content: "\\e6a6";\n  }\n  .icon-stack2:before {\n    content: "\\e6a7";\n  }\n  .icon-cup:before {\n    content: "\\e6a8";\n  }\n  .icon-phone2:before {\n    content: "\\e6a9";\n  }\n  .icon-news:before {\n    content: "\\e6aa";\n  }\n  .icon-mail:before {\n    content: "\\e6ab";\n  }\n  .icon-like:before {\n    content: "\\e6ac";\n  }\n  .icon-photo:before {\n    content: "\\e6ad";\n  }\n  .icon-note:before {\n    content: "\\e6ae";\n  }\n  .icon-clock21:before {\n    content: "\\e6af";\n  }\n  .icon-data:before {\n    content: "\\e6b0";\n  }\n  .icon-music1:before {\n    content: "\\e6b1";\n  }\n  .icon-megaphone:before {\n    content: "\\e6b2";\n  }\n  .icon-study:before {\n    content: "\\e6b3";\n  }\n  .icon-lab2:before {\n    content: "\\e6b4";\n  }\n  .icon-food:before {\n    content: "\\e6b5";\n  }\n  .icon-t-shirt:before {\n    content: "\\e6b6";\n  }\n  .icon-fire1:before {\n    content: "\\e6b7";\n  }\n  .icon-clip:before {\n    content: "\\e6b8";\n  }\n  .icon-shop:before {\n    content: "\\e6b9";\n  }\n  .icon-calendar21:before {\n    content: "\\e6ba";\n  }\n  .icon-wallet1:before {\n    content: "\\e6bb";\n  }\n  .icon-glass:before {\n    content: "\\e6bc";\n  }\n  .icon-music2:before {\n    content: "\\e6bd";\n  }\n  .icon-search3:before {\n    content: "\\e6be";\n  }\n  .icon-envelope21:before {\n    content: "\\e6bf";\n  }\n  .icon-heart3:before {\n    content: "\\e6c0";\n  }\n  .icon-star3:before {\n    content: "\\e6c1";\n  }\n  .icon-star-empty:before {\n    content: "\\e6c2";\n  }\n  .icon-user4:before {\n    content: "\\e6c3";\n  }\n  .icon-film1:before {\n    content: "\\e6c4";\n  }\n  .icon-th-large1:before {\n    content: "\\e6c5";\n  }\n  .icon-th1:before {\n    content: "\\e6c6";\n  }\n  .icon-th-list1:before {\n    content: "\\e6c7";\n  }\n  .icon-ok:before {\n    content: "\\e6c8";\n  }\n  .icon-remove:before {\n    content: "\\e6c9";\n  }\n  .icon-zoom-in2:before {\n    content: "\\e6ca";\n  }\n  .icon-zoom-out2:before {\n    content: "\\e6cb";\n  }\n  .icon-off:before {\n    content: "\\e6cc";\n  }\n  .icon-signal1:before {\n    content: "\\e6cd";\n  }\n  .icon-cog1:before {\n    content: "\\e6ce";\n  }\n  .icon-trash2:before {\n    content: "\\e6cf";\n  }\n  .icon-home2:before {\n    content: "\\e6d0";\n  }\n  .icon-file21:before {\n    content: "\\e6d1";\n  }\n  .icon-time:before {\n    content: "\\e6d2";\n  }\n  .icon-road1:before {\n    content: "\\e6d3";\n  }\n  .icon-download-alt:before {\n    content: "\\e6d4";\n  }\n  .icon-download2:before {\n    content: "\\e6d5";\n  }\n  .icon-upload1:before {\n    content: "\\e6d6";\n  }\n  .icon-inbox1:before {\n    content: "\\e6d7";\n  }\n  .icon-play-circle2:before {\n    content: "\\e6d8";\n  }\n  .icon-repeat:before {\n    content: "\\e6d9";\n  }\n  .icon-refresh2:before {\n    content: "\\e6da";\n  }\n  .icon-list-alt2:before {\n    content: "\\e6db";\n  }\n  .icon-lock3:before {\n    content: "\\e6dc";\n  }\n  .icon-flag21:before {\n    content: "\\e6dd";\n  }\n  .icon-headphones1:before {\n    content: "\\e6de";\n  }\n  .icon-volume-off1:before {\n    content: "\\e6df";\n  }\n  .icon-volume-down1:before {\n    content: "\\e6e0";\n  }\n  .icon-volume-up1:before {\n    content: "\\e6e1";\n  }\n  .icon-qrcode1:before {\n    content: "\\e6e2";\n  }\n  .icon-barcode1:before {\n    content: "\\e6e3";\n  }\n  .icon-tag3:before {\n    content: "\\e6e4";\n  }\n  .icon-tags1:before {\n    content: "\\e6e5";\n  }\n  .icon-book3:before {\n    content: "\\e6e6";\n  }\n  .icon-bookmark21:before {\n    content: "\\e6e7";\n  }\n  .icon-print2:before {\n    content: "\\e6e8";\n  }\n  .icon-camera3:before {\n    content: "\\e6e9";\n  }\n  .icon-font1:before {\n    content: "\\e6ea";\n  }\n  .icon-bold1:before {\n    content: "\\e6eb";\n  }\n  .icon-italic1:before {\n    content: "\\e6ec";\n  }\n  .icon-text-height1:before {\n    content: "\\e6ed";\n  }\n  .icon-text-width1:before {\n    content: "\\e6ee";\n  }\n  .icon-align-left2:before {\n    content: "\\e6ef";\n  }\n  .icon-align-center2:before {\n    content: "\\e6f0";\n  }\n  .icon-align-right2:before {\n    content: "\\e6f1";\n  }\n  .icon-align-justify2:before {\n    content: "\\e6f2";\n  }\n  .icon-list2:before {\n    content: "\\e6f3";\n  }\n  .icon-indent-left:before {\n    content: "\\e6f4";\n  }\n  .icon-indent-right:before {\n    content: "\\e6f5";\n  }\n  .icon-facetime-video:before {\n    content: "\\e6f6";\n  }\n  .icon-picture:before {\n    content: "\\e6f7";\n  }\n  .icon-pencil2:before {\n    content: "\\e6f8";\n  }\n  .icon-map-marker2:before {\n    content: "\\e6f9";\n  }\n  .icon-adjust1:before {\n    content: "\\e6fa";\n  }\n  .icon-tint1:before {\n    content: "\\e6fb";\n  }\n  .icon-edit2:before {\n    content: "\\e6fc";\n  }\n  .icon-share2:before {\n    content: "\\e6fd";\n  }\n  .icon-check1:before {\n    content: "\\e6fe";\n  }\n  .icon-move:before {\n    content: "\\e6ff";\n  }\n  .icon-step-backward1:before {\n    content: "\\e700";\n  }\n  .icon-fast-backward1:before {\n    content: "\\e701";\n  }\n  .icon-backward1:before {\n    content: "\\e702";\n  }\n  .icon-play1:before {\n    content: "\\e703";\n  }\n  .icon-pause1:before {\n    content: "\\e704";\n  }\n  .icon-stop1:before {\n    content: "\\e705";\n  }\n  .icon-forward1:before {\n    content: "\\e706";\n  }\n  .icon-fast-forward1:before {\n    content: "\\e707";\n  }\n  .icon-step-forward1:before {\n    content: "\\e708";\n  }\n  .icon-eject1:before {\n    content: "\\e709";\n  }\n  .icon-chevron-left1:before {\n    content: "\\e70a";\n  }\n  .icon-chevron-right1:before {\n    content: "\\e70b";\n  }\n  .icon-plus-sign:before {\n    content: "\\e70c";\n  }\n  .icon-minus-sign:before {\n    content: "\\e70d";\n  }\n  .icon-remove-sign:before {\n    content: "\\e70e";\n  }\n  .icon-ok-sign:before {\n    content: "\\e70f";\n  }\n  .icon-question-sign:before {\n    content: "\\e710";\n  }\n  .icon-info-sign:before {\n    content: "\\e711";\n  }\n  .icon-screenshot:before {\n    content: "\\e712";\n  }\n  .icon-remove-circle:before {\n    content: "\\e713";\n  }\n  .icon-ok-circle:before {\n    content: "\\e714";\n  }\n  .icon-ban-circle:before {\n    content: "\\e715";\n  }\n  .icon-arrow-left2:before {\n    content: "\\e716";\n  }\n  .icon-arrow-right2:before {\n    content: "\\e717";\n  }\n  .icon-arrow-up2:before {\n    content: "\\e718";\n  }\n  .icon-arrow-down2:before {\n    content: "\\e719";\n  }\n  .icon-share-alt1:before {\n    content: "\\e71a";\n  }\n  .icon-resize-full:before {\n    content: "\\e71b";\n  }\n  .icon-resize-small:before {\n    content: "\\e71c";\n  }\n  .icon-plus1:before {\n    content: "\\e71d";\n  }\n  .icon-minus1:before {\n    content: "\\e71e";\n  }\n  .icon-asterisk1:before {\n    content: "\\e71f";\n  }\n  .icon-exclamation-sign:before {\n    content: "\\e720";\n  }\n  .icon-gift1:before {\n    content: "\\e721";\n  }\n  .icon-leaf1:before {\n    content: "\\e722";\n  }\n  .icon-fire2:before {\n    content: "\\e723";\n  }\n  .icon-eye-open:before {\n    content: "\\e724";\n  }\n  .icon-eye-close:before {\n    content: "\\e725";\n  }\n  .icon-warning-sign:before {\n    content: "\\e726";\n  }\n  .icon-plane1:before {\n    content: "\\e727";\n  }\n  .icon-calendar3:before {\n    content: "\\e728";\n  }\n  .icon-random1:before {\n    content: "\\e729";\n  }\n  .icon-comment21:before {\n    content: "\\e72a";\n  }\n  .icon-magnet1:before {\n    content: "\\e72b";\n  }\n  .icon-chevron-up1:before {\n    content: "\\e72c";\n  }\n  .icon-chevron-down1:before {\n    content: "\\e72d";\n  }\n  .icon-retweet1:before {\n    content: "\\e72e";\n  }\n  .icon-shopping-cart:before {\n    content: "\\e72f";\n  }\n  .icon-folder-close:before {\n    content: "\\e730";\n  }\n  .icon-folder-open2:before {\n    content: "\\e731";\n  }\n  .icon-resize-vertical:before {\n    content: "\\e732";\n  }\n  .icon-resize-horizontal:before {\n    content: "\\e733";\n  }\n  .icon-bar-chart:before {\n    content: "\\e734";\n  }\n  .icon-twitter-sign:before {\n    content: "\\e735";\n  }\n  .icon-facebook-sign:before {\n    content: "\\e736";\n  }\n  .icon-camera-retro1:before {\n    content: "\\e737";\n  }\n  .icon-key2:before {\n    content: "\\e738";\n  }\n  .icon-cogs1:before {\n    content: "\\e739";\n  }\n  .icon-comments2:before {\n    content: "\\e73a";\n  }\n  .icon-thumbs-up2:before {\n    content: "\\e73b";\n  }\n  .icon-thumbs-down2:before {\n    content: "\\e73c";\n  }\n  .icon-star-half2:before {\n    content: "\\e73d";\n  }\n  .icon-heart-empty:before {\n    content: "\\e73e";\n  }\n  .icon-signout:before {\n    content: "\\e73f";\n  }\n  .icon-linkedin-sign:before {\n    content: "\\e740";\n  }\n  .icon-pushpin:before {\n    content: "\\e741";\n  }\n  .icon-external-link:before {\n    content: "\\e742";\n  }\n  .icon-signin:before {\n    content: "\\e743";\n  }\n  .icon-trophy1:before {\n    content: "\\e744";\n  }\n  .icon-github-sign:before {\n    content: "\\e745";\n  }\n  .icon-upload-alt:before {\n    content: "\\e746";\n  }\n  .icon-lemon2:before {\n    content: "\\e747";\n  }\n  .icon-phone3:before {\n    content: "\\e748";\n  }\n  .icon-check-empty:before {\n    content: "\\e749";\n  }\n  .icon-bookmark-empty:before {\n    content: "\\e74a";\n  }\n  .icon-phone-sign:before {\n    content: "\\e74b";\n  }\n  .icon-twitter2:before {\n    content: "\\e74c";\n  }\n  .icon-facebook2:before {\n    content: "\\e74d";\n  }\n  .icon-github2:before {\n    content: "\\e74e";\n  }\n  .icon-unlock1:before {\n    content: "\\e74f";\n  }\n  .icon-credit:before {\n    content: "\\e750";\n  }\n  .icon-rss2:before {\n    content: "\\e751";\n  }\n  .icon-hdd2:before {\n    content: "\\e752";\n  }\n  .icon-bullhorn2:before {\n    content: "\\e753";\n  }\n  .icon-bell2:before {\n    content: "\\e754";\n  }\n  .icon-certificate1:before {\n    content: "\\e755";\n  }\n  .icon-hand-right:before {\n    content: "\\e756";\n  }\n  .icon-hand-left:before {\n    content: "\\e757";\n  }\n  .icon-hand-up:before {\n    content: "\\e758";\n  }\n  .icon-hand-down:before {\n    content: "\\e759";\n  }\n  .icon-circle-arrow-left:before {\n    content: "\\e75a";\n  }\n  .icon-circle-arrow-right:before {\n    content: "\\e75b";\n  }\n  .icon-circle-arrow-up:before {\n    content: "\\e75c";\n  }\n  .icon-circle-arrow-down:before {\n    content: "\\e75d";\n  }\n  .icon-globe1:before {\n    content: "\\e75e";\n  }\n  .icon-wrench1:before {\n    content: "\\e75f";\n  }\n  .icon-tasks1:before {\n    content: "\\e760";\n  }\n  .icon-filter1:before {\n    content: "\\e761";\n  }\n  .icon-briefcase1:before {\n    content: "\\e762";\n  }\n  .icon-fullscreen:before {\n    content: "\\e763";\n  }\n  .icon-group:before {\n    content: "\\e764";\n  }\n  .icon-link1:before {\n    content: "\\e765";\n  }\n  .icon-cloud3:before {\n    content: "\\e766";\n  }\n  .icon-beaker:before {\n    content: "\\e767";\n  }\n  .icon-cut1:before {\n    content: "\\e768";\n  }\n  .icon-copy2:before {\n    content: "\\e769";\n  }\n  .icon-paper-clip:before {\n    content: "\\e76a";\n  }\n  .icon-save2:before {\n    content: "\\e76b";\n  }\n  .icon-sign-blank:before {\n    content: "\\e76c";\n  }\n  .icon-reorder:before {\n    content: "\\e76d";\n  }\n  .icon-list-ul1:before {\n    content: "\\e76e";\n  }\n  .icon-list-ol1:before {\n    content: "\\e76f";\n  }\n  .icon-strikethrough1:before {\n    content: "\\e770";\n  }\n  .icon-underline1:before {\n    content: "\\e771";\n  }\n  .icon-table1:before {\n    content: "\\e772";\n  }\n  .icon-magic1:before {\n    content: "\\e773";\n  }\n  .icon-truck2:before {\n    content: "\\e774";\n  }\n  .icon-pinterest2:before {\n    content: "\\e775";\n  }\n  .icon-pinterest-sign:before {\n    content: "\\e776";\n  }\n  .icon-google-plus-sign:before {\n    content: "\\e777";\n  }\n  .icon-google-plus1:before {\n    content: "\\e778";\n  }\n  .icon-money:before {\n    content: "\\e779";\n  }\n  .icon-caret-down1:before {\n    content: "\\e77a";\n  }\n  .icon-caret-up1:before {\n    content: "\\e77b";\n  }\n  .icon-caret-left1:before {\n    content: "\\e77c";\n  }\n  .icon-caret-right1:before {\n    content: "\\e77d";\n  }\n  .icon-columns1:before {\n    content: "\\e77e";\n  }\n  .icon-sort1:before {\n    content: "\\e77f";\n  }\n  .icon-sort-down1:before {\n    content: "\\e780";\n  }\n  .icon-sort-up1:before {\n    content: "\\e781";\n  }\n  .icon-envelope-alt:before {\n    content: "\\e782";\n  }\n  .icon-linkedin2:before {\n    content: "\\e783";\n  }\n  .icon-undo1:before {\n    content: "\\e784";\n  }\n  .icon-legal:before {\n    content: "\\e785";\n  }\n  .icon-dashboard:before {\n    content: "\\e786";\n  }\n  .icon-comment-alt2:before {\n    content: "\\e787";\n  }\n  .icon-comments-alt:before {\n    content: "\\e788";\n  }\n  .icon-bolt2:before {\n    content: "\\e789";\n  }\n  .icon-sitemap1:before {\n    content: "\\e78a";\n  }\n  .icon-umbrella1:before {\n    content: "\\e78b";\n  }\n  .icon-paste1:before {\n    content: "\\e78c";\n  }\n  .icon-lightbulb2:before {\n    content: "\\e78d";\n  }\n  .icon-exchange:before {\n    content: "\\e78e";\n  }\n  .icon-cloud-download:before {\n    content: "\\e78f";\n  }\n  .icon-cloud-upload:before {\n    content: "\\e790";\n  }\n  .icon-user-md1:before {\n    content: "\\e791";\n  }\n  .icon-stethoscope1:before {\n    content: "\\e792";\n  }\n  .icon-suitcase1:before {\n    content: "\\e793";\n  }\n  .icon-bell-alt:before {\n    content: "\\e794";\n  }\n  .icon-coffee2:before {\n    content: "\\e795";\n  }\n  .icon-food2:before {\n    content: "\\e796";\n  }\n  .icon-file-alt2:before {\n    content: "\\e797";\n  }\n  .icon-building2:before {\n    content: "\\e798";\n  }\n  .icon-hospital2:before {\n    content: "\\e799";\n  }\n  .icon-ambulance1:before {\n    content: "\\e79a";\n  }\n  .icon-medkit1:before {\n    content: "\\e79b";\n  }\n  .icon-fighter-jet1:before {\n    content: "\\e79c";\n  }\n  .icon-beer1:before {\n    content: "\\e79d";\n  }\n  .icon-h-sign:before {\n    content: "\\e79e";\n  }\n  .icon-plus-sign2:before {\n    content: "\\e79f";\n  }\n  .icon-double-angle-left:before {\n    content: "\\e7a0";\n  }\n  .icon-double-angle-right:before {\n    content: "\\e7a1";\n  }\n  .icon-double-angle-up:before {\n    content: "\\e7a2";\n  }\n  .icon-double-angle-down:before {\n    content: "\\e7a3";\n  }\n  .icon-angle-left:before {\n    content: "\\e7a4";\n  }\n  .icon-angle-right:before {\n    content: "\\e7a5";\n  }\n  .icon-angle-up:before {\n    content: "\\e7a6";\n  }\n  .icon-angle-down:before {\n    content: "\\e7a7";\n  }\n  .icon-desktop1:before {\n    content: "\\e7a8";\n  }\n  .icon-laptop2:before {\n    content: "\\e7a9";\n  }\n  .icon-tablet2:before {\n    content: "\\e7aa";\n  }\n  .icon-mobile1:before {\n    content: "\\e7ab";\n  }\n  .icon-circle-blank:before {\n    content: "\\e7ac";\n  }\n  .icon-quote-left1:before {\n    content: "\\e7ad";\n  }\n  .icon-quote-right1:before {\n    content: "\\e7ae";\n  }\n  .icon-spinner1:before {\n    content: "\\e7af";\n  }\n  .icon-circle2:before {\n    content: "\\e7b0";\n  }\n  .icon-reply1:before {\n    content: "\\e7b1";\n  }\n  .icon-github-alt1:before {\n    content: "\\e7b2";\n  }\n  .icon-folder-close-alt:before {\n    content: "\\e7b3";\n  }\n  .icon-folder-open-alt:before {\n    content: "\\e7b4";\n  }\n  .icon-expand-alt:before {\n    content: "\\e7b5";\n  }\n  .icon-collapse-alt:before {\n    content: "\\e7b6";\n  }\n  .icon-smile2:before {\n    content: "\\e7b7";\n  }\n  .icon-frown2:before {\n    content: "\\e7b8";\n  }\n  .icon-meh2:before {\n    content: "\\e7b9";\n  }\n  .icon-gamepad1:before {\n    content: "\\e7ba";\n  }\n  .icon-keyboard2:before {\n    content: "\\e7bb";\n  }\n  .icon-flag-alt:before {\n    content: "\\e7bc";\n  }\n  .icon-flag-checkered1:before {\n    content: "\\e7bd";\n  }\n  .icon-terminal1:before {\n    content: "\\e7be";\n  }\n  .icon-code1:before {\n    content: "\\e7bf";\n  }\n  .icon-reply-all1:before {\n    content: "\\e7c0";\n  }\n  .icon-star-half-full:before {\n    content: "\\e7c1";\n  }\n  .icon-location-arrow1:before {\n    content: "\\e7c2";\n  }\n  .icon-crop2:before {\n    content: "\\e7c3";\n  }\n  .icon-code-fork:before {\n    content: "\\e7c4";\n  }\n  .icon-unlink1:before {\n    content: "\\e7c5";\n  }\n  .icon-question1:before {\n    content: "\\e7c6";\n  }\n  .icon-info1:before {\n    content: "\\e7c7";\n  }\n  .icon-exclamation1:before {\n    content: "\\e7c8";\n  }\n  .icon-superscript1:before {\n    content: "\\e7c9";\n  }\n  .icon-subscript1:before {\n    content: "\\e7ca";\n  }\n  .icon-eraser1:before {\n    content: "\\e7cb";\n  }\n  .icon-puzzle:before {\n    content: "\\e7cc";\n  }\n  .icon-microphone2:before {\n    content: "\\e7cd";\n  }\n  .icon-microphone-off2:before {\n    content: "\\e7ce";\n  }\n  .icon-shield:before {\n    content: "\\e7cf";\n  }\n  .icon-calendar-empty:before {\n    content: "\\e7d0";\n  }\n  .icon-fire-extinguisher1:before {\n    content: "\\e7d1";\n  }\n  .icon-rocket1:before {\n    content: "\\e7d2";\n  }\n  .icon-maxcdn1:before {\n    content: "\\e7d3";\n  }\n  .icon-chevron-sign-left:before {\n    content: "\\e7d4";\n  }\n  .icon-chevron-sign-right:before {\n    content: "\\e7d5";\n  }\n  .icon-chevron-sign-up:before {\n    content: "\\e7d6";\n  }\n  .icon-chevron-sign-down:before {\n    content: "\\e7d7";\n  }\n  .icon-html52:before {\n    content: "\\e7d8";\n  }\n  .icon-css31:before {\n    content: "\\e7d9";\n  }\n  .icon-anchor1:before {\n    content: "\\e7da";\n  }\n  .icon-unlock-alt1:before {\n    content: "\\e7db";\n  }\n  .icon-bullseye1:before {\n    content: "\\e7dc";\n  }\n  .icon-ellipsis-horizontal:before {\n    content: "\\e7dd";\n  }\n  .icon-ellipsis-vertical:before {\n    content: "\\e7de";\n  }\n  .icon-rss-sign:before {\n    content: "\\e7df";\n  }\n  .icon-play-sign:before {\n    content: "\\e7e0";\n  }\n  .icon-ticket:before {\n    content: "\\e7e1";\n  }\n  .icon-minus-sign-alt:before {\n    content: "\\e7e2";\n  }\n  .icon-check-minus:before {\n    content: "\\e7e3";\n  }\n  .icon-level-up:before {\n    content: "\\e7e4";\n  }\n  .icon-level-down:before {\n    content: "\\e7e5";\n  }\n  .icon-check-sign:before {\n    content: "\\e7e6";\n  }\n  .icon-edit-sign:before {\n    content: "\\e7e7";\n  }\n  .icon-external-link-sign:before {\n    content: "\\e7e8";\n  }\n  .icon-share-sign:before {\n    content: "\\e7e9";\n  }\n  .icon-compass2:before {\n    content: "\\e7ea";\n  }\n  .icon-collapse:before {\n    content: "\\e7eb";\n  }\n  .icon-collapse-top:before {\n    content: "\\e7ec";\n  }\n  .icon-expand1:before {\n    content: "\\e7ed";\n  }\n  .icon-euro:before {\n    content: "\\e7ee";\n  }\n  .icon-gbp:before {\n    content: "\\e7ef";\n  }\n  .icon-dollar:before {\n    content: "\\e7f0";\n  }\n  .icon-rupee:before {\n    content: "\\e7f1";\n  }\n  .icon-yen:before {\n    content: "\\e7f2";\n  }\n  .icon-renminbi:before {\n    content: "\\e7f3";\n  }\n  .icon-won:before {\n    content: "\\e7f4";\n  }\n  .icon-bitcoin2:before {\n    content: "\\e7f5";\n  }\n  .icon-file3:before {\n    content: "\\e7f6";\n  }\n  .icon-file-text:before {\n    content: "\\e7f7";\n  }\n  .icon-sort-by-alphabet:before {\n    content: "\\e7f8";\n  }\n  .icon-sort-by-alphabet-alt:before {\n    content: "\\e7f9";\n  }\n  .icon-sort-by-attributes:before {\n    content: "\\e7fa";\n  }\n  .icon-sort-by-attributes-alt:before {\n    content: "\\e7fb";\n  }\n  .icon-sort-by-order:before {\n    content: "\\e7fc";\n  }\n  .icon-sort-by-order-alt:before {\n    content: "\\e7fd";\n  }\n  .icon-thumbs-up21:before {\n    content: "\\e7fe";\n  }\n  .icon-thumbs-down21:before {\n    content: "\\e7ff";\n  }\n  .icon-youtube-sign:before {\n    content: "\\e800";\n  }\n  .icon-youtube2:before {\n    content: "\\e801";\n  }\n  .icon-xing2:before {\n    content: "\\e802";\n  }\n  .icon-xing-sign:before {\n    content: "\\e803";\n  }\n  .icon-youtube-play:before {\n    content: "\\e804";\n  }\n  .icon-dropbox2:before {\n    content: "\\e805";\n  }\n  .icon-stackexchange:before {\n    content: "\\e806";\n  }\n  .icon-instagram2:before {\n    content: "\\e807";\n  }\n  .icon-flickr2:before {\n    content: "\\e808";\n  }\n  .icon-adn1:before {\n    content: "\\e809";\n  }\n  .icon-bitbucket2:before {\n    content: "\\e80a";\n  }\n  .icon-bitbucket-sign:before {\n    content: "\\e80b";\n  }\n  .icon-tumblr2:before {\n    content: "\\e80c";\n  }\n  .icon-tumblr-sign:before {\n    content: "\\e80d";\n  }\n  .icon-long-arrow-down:before {\n    content: "\\e80e";\n  }\n  .icon-long-arrow-up:before {\n    content: "\\e80f";\n  }\n  .icon-long-arrow-left:before {\n    content: "\\e810";\n  }\n  .icon-long-arrow-right:before {\n    content: "\\e811";\n  }\n  .icon-apple1:before {\n    content: "\\e812";\n  }\n  .icon-windows3:before {\n    content: "\\e813";\n  }\n  .icon-android2:before {\n    content: "\\e814";\n  }\n  .icon-linux1:before {\n    content: "\\e815";\n  }\n  .icon-dribbble2:before {\n    content: "\\e816";\n  }\n  .icon-skype2:before {\n    content: "\\e817";\n  }\n  .icon-foursquare2:before {\n    content: "\\e818";\n  }\n  .icon-trello1:before {\n    content: "\\e819";\n  }\n  .icon-female1:before {\n    content: "\\e81a";\n  }\n  .icon-male1:before {\n    content: "\\e81b";\n  }\n  .icon-gittip:before {\n    content: "\\e81c";\n  }\n  .icon-sun21:before {\n    content: "\\e81d";\n  }\n  .icon-moon2:before {\n    content: "\\e81e";\n  }\n  .icon-archive2:before {\n    content: "\\e81f";\n  }\n  .icon-bug1:before {\n    content: "\\e820";\n  }\n  .icon-renren1:before {\n    content: "\\e821";\n  }\n  .icon-weibo2:before {\n    content: "\\e822";\n  }\n  .icon-vk2:before {\n    content: "\\e823";\n  }\n  .icon-duckduckgo:before {\n    content: "\\e830";\n  }\n  .icon-aim:before {\n    content: "\\e831";\n  }\n  .icon-delicious1:before {\n    content: "\\e832";\n  }\n  .icon-paypal1:before {\n    content: "\\e833";\n  }\n  .icon-flattr:before {\n    content: "\\e834";\n  }\n  .icon-android1:before {\n    content: "\\e835";\n  }\n  .icon-eventful:before {\n    content: "\\e836";\n  }\n  .icon-smashmag:before {\n    content: "\\e837";\n  }\n  .icon-gplus:before {\n    content: "\\e838";\n  }\n  .icon-wikipedia:before {\n    content: "\\e839";\n  }\n  .icon-lanyrd:before {\n    content: "\\e83a";\n  }\n  .icon-calendar-1:before {\n    content: "\\e83b";\n  }\n  .icon-stumbleupon1:before {\n    content: "\\e83c";\n  }\n  .icon-fivehundredpx:before {\n    content: "\\e83d";\n  }\n  .icon-pinterest1:before {\n    content: "\\e83e";\n  }\n  .icon-bitcoin1:before {\n    content: "\\e83f";\n  }\n  .icon-w3c:before {\n    content: "\\e840";\n  }\n  .icon-foursquare1:before {\n    content: "\\e841";\n  }\n  .icon-html51:before {\n    content: "\\e842";\n  }\n  .icon-ie:before {\n    content: "\\e843";\n  }\n  .icon-call:before {\n    content: "\\e844";\n  }\n  .icon-grooveshark:before {\n    content: "\\e845";\n  }\n  .icon-ninetyninedesigns:before {\n    content: "\\e846";\n  }\n  .icon-forrst:before {\n    content: "\\e847";\n  }\n  .icon-digg1:before {\n    content: "\\e848";\n  }\n  .icon-spotify1:before {\n    content: "\\e849";\n  }\n  .icon-reddit1:before {\n    content: "\\e84a";\n  }\n  .icon-guest:before {\n    content: "\\e84b";\n  }\n  .icon-gowalla:before {\n    content: "\\e84c";\n  }\n  .icon-appstore:before {\n    content: "\\e84d";\n  }\n  .icon-blogger1:before {\n    content: "\\e84e";\n  }\n  .icon-cc:before {\n    content: "\\e84f";\n  }\n  .icon-dribbble1:before {\n    content: "\\e850";\n  }\n  .icon-evernote:before {\n    content: "\\e851";\n  }\n  .icon-flickr1:before {\n    content: "\\e852";\n  }\n  .icon-google1:before {\n    content: "\\e853";\n  }\n  .icon-viadeo1:before {\n    content: "\\e854";\n  }\n  .icon-instapaper:before {\n    content: "\\e855";\n  }\n  .icon-weibo1:before {\n    content: "\\e856";\n  }\n  .icon-klout:before {\n    content: "\\e857";\n  }\n  .icon-linkedin1:before {\n    content: "\\e858";\n  }\n  .icon-meetup1:before {\n    content: "\\e859";\n  }\n  .icon-vk1:before {\n    content: "\\e85a";\n  }\n  .icon-plancast:before {\n    content: "\\e85b";\n  }\n  .icon-disqus:before {\n    content: "\\e85c";\n  }\n  .icon-rss1:before {\n    content: "\\e85d";\n  }\n  .icon-skype1:before {\n    content: "\\e85e";\n  }\n  .icon-twitter1:before {\n    content: "\\e85f";\n  }\n  .icon-youtube1:before {\n    content: "\\e860";\n  }\n  .icon-vimeo1:before {\n    content: "\\e861";\n  }\n  .icon-windows2:before {\n    content: "\\e862";\n  }\n  .icon-xing1:before {\n    content: "\\e863";\n  }\n  .icon-yahoo1:before {\n    content: "\\e864";\n  }\n  .icon-chrome1:before {\n    content: "\\e865";\n  }\n  .icon-email3:before {\n    content: "\\e866";\n  }\n  .icon-macstore:before {\n    content: "\\e867";\n  }\n  .icon-myspace:before {\n    content: "\\e868";\n  }\n  .icon-podcast1:before {\n    content: "\\e869";\n  }\n  .icon-amazon1:before {\n    content: "\\e86a";\n  }\n  .icon-steam1:before {\n    content: "\\e86b";\n  }\n  .icon-cloudapp:before {\n    content: "\\e86c";\n  }\n  .icon-dropbox1:before {\n    content: "\\e86d";\n  }\n  .icon-ebay1:before {\n    content: "\\e86e";\n  }\n  .icon-facebook:before {\n    content: "\\e86f";\n  }\n  .icon-github1:before {\n    content: "\\e870";\n  }\n  .icon-github-circled:before {\n    content: "\\e871";\n  }\n  .icon-googleplay:before {\n    content: "\\e872";\n  }\n  .icon-itunes1:before {\n    content: "\\e873";\n  }\n  .icon-plurk:before {\n    content: "\\e874";\n  }\n  .icon-songkick:before {\n    content: "\\e875";\n  }\n  .icon-lastfm1:before {\n    content: "\\e876";\n  }\n  .icon-gmail:before {\n    content: "\\e877";\n  }\n  .icon-pinboard:before {\n    content: "\\e878";\n  }\n  .icon-openid1:before {\n    content: "\\e879";\n  }\n  .icon-quora1:before {\n    content: "\\e87a";\n  }\n  .icon-soundcloud1:before {\n    content: "\\e87b";\n  }\n  .icon-tumblr1:before {\n    content: "\\e87c";\n  }\n  .icon-eventasaurus:before {\n    content: "\\e87d";\n  }\n  .icon-wordpress1:before {\n    content: "\\e87e";\n  }\n  .icon-yelp1:before {\n    content: "\\e87f";\n  }\n  .icon-intensedebate:before {\n    content: "\\e880";\n  }\n  .icon-eventbrite:before {\n    content: "\\e881";\n  }\n  .icon-scribd1:before {\n    content: "\\e882";\n  }\n  .icon-posterous:before {\n    content: "\\e883";\n  }\n  .icon-stripe1:before {\n    content: "\\e884";\n  }\n  .icon-opentable:before {\n    content: "\\e885";\n  }\n  .icon-cart:before {\n    content: "\\e886";\n  }\n  .icon-print1:before {\n    content: "\\e887";\n  }\n  .icon-angellist1:before {\n    content: "\\e888";\n  }\n  .icon-instagram1:before {\n    content: "\\e889";\n  }\n  .icon-dwolla:before {\n    content: "\\e88a";\n  }\n  .icon-appnet:before {\n    content: "\\e88b";\n  }\n  .icon-statusnet:before {\n    content: "\\e88c";\n  }\n  .icon-acrobat:before {\n    content: "\\e88d";\n  }\n  .icon-drupal1:before {\n    content: "\\e88e";\n  }\n  .icon-buffer:before {\n    content: "\\e88f";\n  }\n  .icon-pocket:before {\n    content: "\\e890";\n  }\n  .icon-bitbucket1:before {\n    content: "\\e891";\n  }\n  .icon-lego:before {\n    content: "\\e892";\n  }\n  .icon-login:before {\n    content: "\\e893";\n  }\n  .icon-stackoverflow:before {\n    content: "\\e894";\n  }\n  .icon-hackernews:before {\n    content: "\\e895";\n  }\n  .icon-lkdto:before {\n    content: "\\e896";\n  }\n  .icon-ad:before {\n    content: "\\e900";\n  }\n  .icon-address-book:before {\n    content: "\\e901";\n  }\n  .icon-address-card:before {\n    content: "\\e902";\n  }\n  .icon-adjust:before {\n    content: "\\e903";\n  }\n  .icon-air-freshener:before {\n    content: "\\e904";\n  }\n  .icon-align-center:before {\n    content: "\\e905";\n  }\n  .icon-align-justify:before {\n    content: "\\e906";\n  }\n  .icon-align-left:before {\n    content: "\\e907";\n  }\n  .icon-align-right:before {\n    content: "\\e908";\n  }\n  .icon-allergies:before {\n    content: "\\e909";\n  }\n  .icon-ambulance:before {\n    content: "\\e90a";\n  }\n  .icon-american-sign-language-interpreting:before {\n    content: "\\e90b";\n  }\n  .icon-anchor:before {\n    content: "\\e90c";\n  }\n  .icon-angle-double-down:before {\n    content: "\\e90d";\n  }\n  .icon-angle-double-left:before {\n    content: "\\e90e";\n  }\n  .icon-angle-double-right:before {\n    content: "\\e90f";\n  }\n  .icon-angle-double-up:before {\n    content: "\\e910";\n  }\n  .icon-angle-down1:before {\n    content: "\\e911";\n  }\n  .icon-angle-left1:before {\n    content: "\\e912";\n  }\n  .icon-angle-right1:before {\n    content: "\\e913";\n  }\n  .icon-angle-up1:before {\n    content: "\\e914";\n  }\n  .icon-angry:before {\n    content: "\\e915";\n  }\n  .icon-ankh:before {\n    content: "\\e916";\n  }\n  .icon-apple-alt:before {\n    content: "\\e917";\n  }\n  .icon-archive:before {\n    content: "\\e918";\n  }\n  .icon-archway:before {\n    content: "\\e919";\n  }\n  .icon-arrow-alt-circle-down:before {\n    content: "\\e91a";\n  }\n  .icon-arrow-alt-circle-left:before {\n    content: "\\e91b";\n  }\n  .icon-arrow-alt-circle-right:before {\n    content: "\\e91c";\n  }\n  .icon-arrow-alt-circle-up:before {\n    content: "\\e91d";\n  }\n  .icon-arrow-circle-down:before {\n    content: "\\e91e";\n  }\n  .icon-arrow-circle-left:before {\n    content: "\\e91f";\n  }\n  .icon-arrow-circle-right:before {\n    content: "\\e920";\n  }\n  .icon-arrow-circle-up:before {\n    content: "\\e921";\n  }\n  .icon-arrow-down:before {\n    content: "\\e922";\n  }\n  .icon-arrow-left:before {\n    content: "\\e923";\n  }\n  .icon-arrow-right:before {\n    content: "\\e924";\n  }\n  .icon-arrow-up:before {\n    content: "\\e925";\n  }\n  .icon-arrows-alt-h:before {\n    content: "\\e926";\n  }\n  .icon-arrows-alt-v:before {\n    content: "\\e927";\n  }\n  .icon-arrows-alt:before {\n    content: "\\e928";\n  }\n  .icon-assistive-listening-systems:before {\n    content: "\\e929";\n  }\n  .icon-asterisk:before {\n    content: "\\e92a";\n  }\n  .icon-at:before {\n    content: "\\e92b";\n  }\n  .icon-atlas:before {\n    content: "\\e92c";\n  }\n  .icon-atom:before {\n    content: "\\e92d";\n  }\n  .icon-audio-description:before {\n    content: "\\e92e";\n  }\n  .icon-award:before {\n    content: "\\e92f";\n  }\n  .icon-backspace:before {\n    content: "\\e930";\n  }\n  .icon-backward:before {\n    content: "\\e931";\n  }\n  .icon-balance-scale:before {\n    content: "\\e932";\n  }\n  .icon-ban:before {\n    content: "\\e933";\n  }\n  .icon-band-aid:before {\n    content: "\\e934";\n  }\n  .icon-barcode:before {\n    content: "\\e935";\n  }\n  .icon-bars:before {\n    content: "\\e936";\n  }\n  .icon-baseball-ball:before {\n    content: "\\e937";\n  }\n  .icon-basketball-ball:before {\n    content: "\\e938";\n  }\n  .icon-bath:before {\n    content: "\\e939";\n  }\n  .icon-battery-empty:before {\n    content: "\\e93a";\n  }\n  .icon-battery-full:before {\n    content: "\\e93b";\n  }\n  .icon-battery-half:before {\n    content: "\\e93c";\n  }\n  .icon-battery-quarter:before {\n    content: "\\e93d";\n  }\n  .icon-battery-three-quarters:before {\n    content: "\\e93e";\n  }\n  .icon-bed:before {\n    content: "\\e93f";\n  }\n  .icon-beer:before {\n    content: "\\e940";\n  }\n  .icon-bell-slash:before {\n    content: "\\e941";\n  }\n  .icon-bell:before {\n    content: "\\e942";\n  }\n  .icon-bezier-curve:before {\n    content: "\\e943";\n  }\n  .icon-bible:before {\n    content: "\\e944";\n  }\n  .icon-bicycle:before {\n    content: "\\e945";\n  }\n  .icon-binoculars:before {\n    content: "\\e946";\n  }\n  .icon-birthday-cake:before {\n    content: "\\e947";\n  }\n  .icon-blender:before {\n    content: "\\e948";\n  }\n  .icon-blind:before {\n    content: "\\e949";\n  }\n  .icon-bold:before {\n    content: "\\e94a";\n  }\n  .icon-bolt:before {\n    content: "\\e94b";\n  }\n  .icon-bomb:before {\n    content: "\\e94c";\n  }\n  .icon-bone:before {\n    content: "\\e94d";\n  }\n  .icon-bong:before {\n    content: "\\e94e";\n  }\n  .icon-book-open:before {\n    content: "\\e94f";\n  }\n  .icon-book-reader:before {\n    content: "\\e950";\n  }\n  .icon-book:before {\n    content: "\\e951";\n  }\n  .icon-bookmark:before {\n    content: "\\e952";\n  }\n  .icon-bowling-ball:before {\n    content: "\\e953";\n  }\n  .icon-box-open:before {\n    content: "\\e954";\n  }\n  .icon-box:before {\n    content: "\\e955";\n  }\n  .icon-boxes:before {\n    content: "\\e956";\n  }\n  .icon-braille:before {\n    content: "\\e957";\n  }\n  .icon-brain:before {\n    content: "\\e958";\n  }\n  .icon-briefcase-medical:before {\n    content: "\\e959";\n  }\n  .icon-briefcase:before {\n    content: "\\e95a";\n  }\n  .icon-broadcast-tower:before {\n    content: "\\e95b";\n  }\n  .icon-broom:before {\n    content: "\\e95c";\n  }\n  .icon-brush:before {\n    content: "\\e95d";\n  }\n  .icon-bug:before {\n    content: "\\e95e";\n  }\n  .icon-building:before {\n    content: "\\e95f";\n  }\n  .icon-bullhorn:before {\n    content: "\\e960";\n  }\n  .icon-bullseye:before {\n    content: "\\e961";\n  }\n  .icon-burn:before {\n    content: "\\e962";\n  }\n  .icon-bus-alt:before {\n    content: "\\e963";\n  }\n  .icon-bus:before {\n    content: "\\e964";\n  }\n  .icon-business-time:before {\n    content: "\\e965";\n  }\n  .icon-calculator:before {\n    content: "\\e966";\n  }\n  .icon-calendar-alt:before {\n    content: "\\e967";\n  }\n  .icon-calendar-check:before {\n    content: "\\e968";\n  }\n  .icon-calendar-minus:before {\n    content: "\\e969";\n  }\n  .icon-calendar-plus:before {\n    content: "\\e96a";\n  }\n  .icon-calendar-times:before {\n    content: "\\e96b";\n  }\n  .icon-calendar:before {\n    content: "\\e96c";\n  }\n  .icon-camera-retro:before {\n    content: "\\e96d";\n  }\n  .icon-camera:before {\n    content: "\\e96e";\n  }\n  .icon-cannabis:before {\n    content: "\\e96f";\n  }\n  .icon-capsules:before {\n    content: "\\e970";\n  }\n  .icon-car-alt:before {\n    content: "\\e971";\n  }\n  .icon-car-battery:before {\n    content: "\\e972";\n  }\n  .icon-car-crash:before {\n    content: "\\e973";\n  }\n  .icon-car-side:before {\n    content: "\\e974";\n  }\n  .icon-car:before {\n    content: "\\e975";\n  }\n  .icon-caret-down:before {\n    content: "\\e976";\n  }\n  .icon-caret-left:before {\n    content: "\\e977";\n  }\n  .icon-caret-right:before {\n    content: "\\e978";\n  }\n  .icon-caret-square-down:before {\n    content: "\\e979";\n  }\n  .icon-caret-square-left:before {\n    content: "\\e97a";\n  }\n  .icon-caret-square-right:before {\n    content: "\\e97b";\n  }\n  .icon-caret-square-up:before {\n    content: "\\e97c";\n  }\n  .icon-caret-up:before {\n    content: "\\e97d";\n  }\n  .icon-cart-arrow-down:before {\n    content: "\\e97e";\n  }\n  .icon-cart-plus:before {\n    content: "\\e97f";\n  }\n  .icon-certificate:before {\n    content: "\\e980";\n  }\n  .icon-chalkboard-teacher:before {\n    content: "\\e981";\n  }\n  .icon-chalkboard:before {\n    content: "\\e982";\n  }\n  .icon-charging-station:before {\n    content: "\\e983";\n  }\n  .icon-chart-area:before {\n    content: "\\e984";\n  }\n  .icon-chart-bar:before {\n    content: "\\e985";\n  }\n  .icon-chart-line:before {\n    content: "\\e986";\n  }\n  .icon-chart-pie:before {\n    content: "\\e987";\n  }\n  .icon-check-circle:before {\n    content: "\\e988";\n  }\n  .icon-check-double:before {\n    content: "\\e989";\n  }\n  .icon-check-square:before {\n    content: "\\e98a";\n  }\n  .icon-check:before {\n    content: "\\e98b";\n  }\n  .icon-chess-bishop:before {\n    content: "\\e98c";\n  }\n  .icon-chess-board:before {\n    content: "\\e98d";\n  }\n  .icon-chess-king:before {\n    content: "\\e98e";\n  }\n  .icon-chess-knight:before {\n    content: "\\e98f";\n  }\n  .icon-chess-pawn:before {\n    content: "\\e990";\n  }\n  .icon-chess-queen:before {\n    content: "\\e991";\n  }\n  .icon-chess-rook:before {\n    content: "\\e992";\n  }\n  .icon-chess:before {\n    content: "\\e993";\n  }\n  .icon-chevron-circle-down:before {\n    content: "\\e994";\n  }\n  .icon-chevron-circle-left:before {\n    content: "\\e995";\n  }\n  .icon-chevron-circle-right:before {\n    content: "\\e996";\n  }\n  .icon-chevron-circle-up:before {\n    content: "\\e997";\n  }\n  .icon-chevron-down:before {\n    content: "\\e998";\n  }\n  .icon-chevron-left:before {\n    content: "\\e999";\n  }\n  .icon-chevron-right:before {\n    content: "\\e99a";\n  }\n  .icon-chevron-up:before {\n    content: "\\e99b";\n  }\n  .icon-child:before {\n    content: "\\e99c";\n  }\n  .icon-church:before {\n    content: "\\e99d";\n  }\n  .icon-circle-notch:before {\n    content: "\\e99e";\n  }\n  .icon-circle:before {\n    content: "\\e99f";\n  }\n  .icon-city:before {\n    content: "\\e9a0";\n  }\n  .icon-clipboard-check:before {\n    content: "\\e9a1";\n  }\n  .icon-clipboard-list:before {\n    content: "\\e9a2";\n  }\n  .icon-clipboard:before {\n    content: "\\e9a3";\n  }\n  .icon-clock:before {\n    content: "\\e9a4";\n  }\n  .icon-clone:before {\n    content: "\\e9a5";\n  }\n  .icon-closed-captioning:before {\n    content: "\\e9a6";\n  }\n  .icon-cloud-download-alt:before {\n    content: "\\e9a7";\n  }\n  .icon-cloud-upload-alt:before {\n    content: "\\e9a8";\n  }\n  .icon-cloud:before {\n    content: "\\e9a9";\n  }\n  .icon-cocktail:before {\n    content: "\\e9aa";\n  }\n  .icon-code-branch:before {\n    content: "\\e9ab";\n  }\n  .icon-code:before {\n    content: "\\e9ac";\n  }\n  .icon-coffee:before {\n    content: "\\e9ad";\n  }\n  .icon-cog:before {\n    content: "\\e9ae";\n  }\n  .icon-cogs:before {\n    content: "\\e9af";\n  }\n  .icon-coins:before {\n    content: "\\e9b0";\n  }\n  .icon-columns:before {\n    content: "\\e9b1";\n  }\n  .icon-comment-alt:before {\n    content: "\\e9b2";\n  }\n  .icon-comment-dollar:before {\n    content: "\\e9b3";\n  }\n  .icon-comment-dots:before {\n    content: "\\e9b4";\n  }\n  .icon-comment-slash:before {\n    content: "\\e9b5";\n  }\n  .icon-comment:before {\n    content: "\\e9b6";\n  }\n  .icon-comments-dollar:before {\n    content: "\\e9b7";\n  }\n  .icon-comments:before {\n    content: "\\e9b8";\n  }\n  .icon-compact-disc:before {\n    content: "\\e9b9";\n  }\n  .icon-compass:before {\n    content: "\\e9ba";\n  }\n  .icon-compress:before {\n    content: "\\e9bb";\n  }\n  .icon-concierge-bell:before {\n    content: "\\e9bc";\n  }\n  .icon-cookie-bite:before {\n    content: "\\e9bd";\n  }\n  .icon-cookie:before {\n    content: "\\e9be";\n  }\n  .icon-copy:before {\n    content: "\\e9bf";\n  }\n  .icon-copyright:before {\n    content: "\\e9c0";\n  }\n  .icon-couch:before {\n    content: "\\e9c1";\n  }\n  .icon-credit-card:before {\n    content: "\\e9c2";\n  }\n  .icon-crop-alt:before {\n    content: "\\e9c3";\n  }\n  .icon-crop:before {\n    content: "\\e9c4";\n  }\n  .icon-cross:before {\n    content: "\\e9c5";\n  }\n  .icon-crosshairs:before {\n    content: "\\e9c6";\n  }\n  .icon-crow:before {\n    content: "\\e9c7";\n  }\n  .icon-crown:before {\n    content: "\\e9c8";\n  }\n  .icon-cube:before {\n    content: "\\e9c9";\n  }\n  .icon-cubes:before {\n    content: "\\e9ca";\n  }\n  .icon-cut:before {\n    content: "\\e9cb";\n  }\n  .icon-database:before {\n    content: "\\e9cc";\n  }\n  .icon-deaf:before {\n    content: "\\e9cd";\n  }\n  .icon-desktop:before {\n    content: "\\e9ce";\n  }\n  .icon-dharmachakra:before {\n    content: "\\e9cf";\n  }\n  .icon-diagnoses:before {\n    content: "\\e9d0";\n  }\n  .icon-dice-five:before {\n    content: "\\e9d1";\n  }\n  .icon-dice-four:before {\n    content: "\\e9d2";\n  }\n  .icon-dice-one:before {\n    content: "\\e9d3";\n  }\n  .icon-dice-six:before {\n    content: "\\e9d4";\n  }\n  .icon-dice-three:before {\n    content: "\\e9d5";\n  }\n  .icon-dice-two:before {\n    content: "\\e9d6";\n  }\n  .icon-dice:before {\n    content: "\\e9d7";\n  }\n  .icon-digital-tachograph:before {\n    content: "\\e9d8";\n  }\n  .icon-directions:before {\n    content: "\\e9d9";\n  }\n  .icon-divide:before {\n    content: "\\e9da";\n  }\n  .icon-dizzy:before {\n    content: "\\e9db";\n  }\n  .icon-dna:before {\n    content: "\\e9dc";\n  }\n  .icon-dollar-sign:before {\n    content: "\\e9dd";\n  }\n  .icon-dolly-flatbed:before {\n    content: "\\e9de";\n  }\n  .icon-dolly:before {\n    content: "\\e9df";\n  }\n  .icon-donate:before {\n    content: "\\e9e0";\n  }\n  .icon-door-closed:before {\n    content: "\\e9e1";\n  }\n  .icon-door-open:before {\n    content: "\\e9e2";\n  }\n  .icon-dot-circle:before {\n    content: "\\e9e3";\n  }\n  .icon-dove:before {\n    content: "\\e9e4";\n  }\n  .icon-download:before {\n    content: "\\e9e5";\n  }\n  .icon-drafting-compass:before {\n    content: "\\e9e6";\n  }\n  .icon-draw-polygon:before {\n    content: "\\e9e7";\n  }\n  .icon-drum-steelpan:before {\n    content: "\\e9e8";\n  }\n  .icon-drum:before {\n    content: "\\e9e9";\n  }\n  .icon-dumbbell:before {\n    content: "\\e9ea";\n  }\n  .icon-edit:before {\n    content: "\\e9eb";\n  }\n  .icon-eject:before {\n    content: "\\e9ec";\n  }\n  .icon-ellipsis-h:before {\n    content: "\\e9ed";\n  }\n  .icon-ellipsis-v:before {\n    content: "\\e9ee";\n  }\n  .icon-envelope-open-text:before {\n    content: "\\e9ef";\n  }\n  .icon-envelope-open:before {\n    content: "\\e9f0";\n  }\n  .icon-envelope-square:before {\n    content: "\\e9f1";\n  }\n  .icon-envelope:before {\n    content: "\\e9f2";\n  }\n  .icon-equals:before {\n    content: "\\e9f3";\n  }\n  .icon-eraser:before {\n    content: "\\e9f4";\n  }\n  .icon-euro-sign:before {\n    content: "\\e9f5";\n  }\n  .icon-exchange-alt:before {\n    content: "\\e9f6";\n  }\n  .icon-exclamation-circle:before {\n    content: "\\e9f7";\n  }\n  .icon-exclamation-triangle:before {\n    content: "\\e9f8";\n  }\n  .icon-exclamation:before {\n    content: "\\e9f9";\n  }\n  .icon-expand-arrows-alt:before {\n    content: "\\e9fa";\n  }\n  .icon-expand:before {\n    content: "\\e9fb";\n  }\n  .icon-external-link-alt:before {\n    content: "\\e9fc";\n  }\n  .icon-external-link-square-alt:before {\n    content: "\\e9fd";\n  }\n  .icon-eye-dropper:before {\n    content: "\\e9fe";\n  }\n  .icon-eye-slash:before {\n    content: "\\e9ff";\n  }\n  .icon-eye:before {\n    content: "\\ea00";\n  }\n  .icon-fast-backward:before {\n    content: "\\ea01";\n  }\n  .icon-fast-forward:before {\n    content: "\\ea02";\n  }\n  .icon-fax:before {\n    content: "\\ea03";\n  }\n  .icon-feather-alt:before {\n    content: "\\ea04";\n  }\n  .icon-feather:before {\n    content: "\\ea05";\n  }\n  .icon-female:before {\n    content: "\\ea06";\n  }\n  .icon-fighter-jet:before {\n    content: "\\ea07";\n  }\n  .icon-file-alt:before {\n    content: "\\ea08";\n  }\n  .icon-file-archive:before {\n    content: "\\ea09";\n  }\n  .icon-file-audio:before {\n    content: "\\ea0a";\n  }\n  .icon-file-code:before {\n    content: "\\ea0b";\n  }\n  .icon-file-contract:before {\n    content: "\\ea0c";\n  }\n  .icon-file-download:before {\n    content: "\\ea0d";\n  }\n  .icon-file-excel:before {\n    content: "\\ea0e";\n  }\n  .icon-file-export:before {\n    content: "\\ea0f";\n  }\n  .icon-file-image:before {\n    content: "\\ea10";\n  }\n  .icon-file-import:before {\n    content: "\\ea11";\n  }\n  .icon-file-invoice-dollar:before {\n    content: "\\ea12";\n  }\n  .icon-file-invoice:before {\n    content: "\\ea13";\n  }\n  .icon-file-medical-alt:before {\n    content: "\\ea14";\n  }\n  .icon-file-medical:before {\n    content: "\\ea15";\n  }\n  .icon-file-pdf:before {\n    content: "\\ea16";\n  }\n  .icon-file-powerpoint:before {\n    content: "\\ea17";\n  }\n  .icon-file-prescription:before {\n    content: "\\ea18";\n  }\n  .icon-file-signature:before {\n    content: "\\ea19";\n  }\n  .icon-file-upload:before {\n    content: "\\ea1a";\n  }\n  .icon-file-video:before {\n    content: "\\ea1b";\n  }\n  .icon-file-word:before {\n    content: "\\ea1c";\n  }\n  .icon-file:before {\n    content: "\\ea1d";\n  }\n  .icon-fill-drip:before {\n    content: "\\ea1e";\n  }\n  .icon-fill:before {\n    content: "\\ea1f";\n  }\n  .icon-film:before {\n    content: "\\ea20";\n  }\n  .icon-filter:before {\n    content: "\\ea21";\n  }\n  .icon-fingerprint:before {\n    content: "\\ea22";\n  }\n  .icon-fire-extinguisher:before {\n    content: "\\ea23";\n  }\n  .icon-fire:before {\n    content: "\\ea24";\n  }\n  .icon-first-aid:before {\n    content: "\\ea25";\n  }\n  .icon-fish:before {\n    content: "\\ea26";\n  }\n  .icon-flag-checkered:before {\n    content: "\\ea27";\n  }\n  .icon-flag:before {\n    content: "\\ea28";\n  }\n  .icon-flask:before {\n    content: "\\ea29";\n  }\n  .icon-flushed:before {\n    content: "\\ea2a";\n  }\n  .icon-folder-minus:before {\n    content: "\\ea2b";\n  }\n  .icon-folder-open:before {\n    content: "\\ea2c";\n  }\n  .icon-folder-plus:before {\n    content: "\\ea2d";\n  }\n  .icon-folder:before {\n    content: "\\ea2e";\n  }\n  .icon-font-awesome-logo-full:before {\n    content: "\\ea2f";\n  }\n  .icon-font:before {\n    content: "\\ea30";\n  }\n  .icon-football-ball:before {\n    content: "\\ea31";\n  }\n  .icon-forward:before {\n    content: "\\ea32";\n  }\n  .icon-frog:before {\n    content: "\\ea33";\n  }\n  .icon-frown-open:before {\n    content: "\\ea34";\n  }\n  .icon-frown:before {\n    content: "\\ea35";\n  }\n  .icon-funnel-dollar:before {\n    content: "\\ea36";\n  }\n  .icon-futbol:before {\n    content: "\\ea37";\n  }\n  .icon-gamepad:before {\n    content: "\\ea38";\n  }\n  .icon-gas-pump:before {\n    content: "\\ea39";\n  }\n  .icon-gavel:before {\n    content: "\\ea3a";\n  }\n  .icon-gem:before {\n    content: "\\ea3b";\n  }\n  .icon-genderless:before {\n    content: "\\ea3c";\n  }\n  .icon-gift:before {\n    content: "\\ea3d";\n  }\n  .icon-glass-martini-alt:before {\n    content: "\\ea3e";\n  }\n  .icon-glass-martini:before {\n    content: "\\ea3f";\n  }\n  .icon-glasses:before {\n    content: "\\ea40";\n  }\n  .icon-globe-africa:before {\n    content: "\\ea41";\n  }\n  .icon-globe-americas:before {\n    content: "\\ea42";\n  }\n  .icon-globe-asia:before {\n    content: "\\ea43";\n  }\n  .icon-globe:before {\n    content: "\\ea44";\n  }\n  .icon-golf-ball:before {\n    content: "\\ea45";\n  }\n  .icon-gopuram:before {\n    content: "\\ea46";\n  }\n  .icon-graduation-cap:before {\n    content: "\\ea47";\n  }\n  .icon-greater-than-equal:before {\n    content: "\\ea48";\n  }\n  .icon-greater-than:before {\n    content: "\\ea49";\n  }\n  .icon-grimace:before {\n    content: "\\ea4a";\n  }\n  .icon-grin-alt:before {\n    content: "\\ea4b";\n  }\n  .icon-grin-beam-sweat:before {\n    content: "\\ea4c";\n  }\n  .icon-grin-beam:before {\n    content: "\\ea4d";\n  }\n  .icon-grin-hearts:before {\n    content: "\\ea4e";\n  }\n  .icon-grin-squint-tears:before {\n    content: "\\ea4f";\n  }\n  .icon-grin-squint:before {\n    content: "\\ea50";\n  }\n  .icon-grin-stars:before {\n    content: "\\ea51";\n  }\n  .icon-grin-tears:before {\n    content: "\\ea52";\n  }\n  .icon-grin-tongue-squint:before {\n    content: "\\ea53";\n  }\n  .icon-grin-tongue-wink:before {\n    content: "\\ea54";\n  }\n  .icon-grin-tongue:before {\n    content: "\\ea55";\n  }\n  .icon-grin-wink:before {\n    content: "\\ea56";\n  }\n  .icon-grin:before {\n    content: "\\ea57";\n  }\n  .icon-grip-horizontal:before {\n    content: "\\ea58";\n  }\n  .icon-grip-vertical:before {\n    content: "\\ea59";\n  }\n  .icon-h-square:before {\n    content: "\\ea5a";\n  }\n  .icon-hamsa:before {\n    content: "\\ea5b";\n  }\n  .icon-hand-holding-heart:before {\n    content: "\\ea5c";\n  }\n  .icon-hand-holding-usd:before {\n    content: "\\ea5d";\n  }\n  .icon-hand-holding:before {\n    content: "\\ea5e";\n  }\n  .icon-hand-lizard:before {\n    content: "\\ea5f";\n  }\n  .icon-hand-paper:before {\n    content: "\\ea60";\n  }\n  .icon-hand-peace:before {\n    content: "\\ea61";\n  }\n  .icon-hand-point-down:before {\n    content: "\\ea62";\n  }\n  .icon-hand-point-left:before {\n    content: "\\ea63";\n  }\n  .icon-hand-point-right:before {\n    content: "\\ea64";\n  }\n  .icon-hand-point-up:before {\n    content: "\\ea65";\n  }\n  .icon-hand-pointer:before {\n    content: "\\ea66";\n  }\n  .icon-hand-rock:before {\n    content: "\\ea67";\n  }\n  .icon-hand-scissors:before {\n    content: "\\ea68";\n  }\n  .icon-hand-spock:before {\n    content: "\\ea69";\n  }\n  .icon-hands-helping:before {\n    content: "\\ea6a";\n  }\n  .icon-hands:before {\n    content: "\\ea6b";\n  }\n  .icon-handshake:before {\n    content: "\\ea6c";\n  }\n  .icon-hashtag:before {\n    content: "\\ea6d";\n  }\n  .icon-haykal:before {\n    content: "\\ea6e";\n  }\n  .icon-hdd:before {\n    content: "\\ea6f";\n  }\n  .icon-heading:before {\n    content: "\\ea70";\n  }\n  .icon-headphones-alt:before {\n    content: "\\ea71";\n  }\n  .icon-headphones:before {\n    content: "\\ea72";\n  }\n  .icon-headset:before {\n    content: "\\ea73";\n  }\n  .icon-heart:before {\n    content: "\\ea74";\n  }\n  .icon-heartbeat:before {\n    content: "\\ea75";\n  }\n  .icon-helicopter:before {\n    content: "\\ea76";\n  }\n  .icon-highlighter:before {\n    content: "\\ea77";\n  }\n  .icon-history:before {\n    content: "\\ea78";\n  }\n  .icon-hockey-puck:before {\n    content: "\\ea79";\n  }\n  .icon-home:before {\n    content: "\\ea7a";\n  }\n  .icon-hospital-alt:before {\n    content: "\\ea7b";\n  }\n  .icon-hospital-symbol:before {\n    content: "\\ea7c";\n  }\n  .icon-hospital:before {\n    content: "\\ea7d";\n  }\n  .icon-hot-tub:before {\n    content: "\\ea7e";\n  }\n  .icon-hotel:before {\n    content: "\\ea7f";\n  }\n  .icon-hourglass-end:before {\n    content: "\\ea80";\n  }\n  .icon-hourglass-half:before {\n    content: "\\ea81";\n  }\n  .icon-hourglass-start:before {\n    content: "\\ea82";\n  }\n  .icon-hourglass:before {\n    content: "\\ea83";\n  }\n  .icon-i-cursor:before {\n    content: "\\ea84";\n  }\n  .icon-id-badge:before {\n    content: "\\ea85";\n  }\n  .icon-id-card-alt:before {\n    content: "\\ea86";\n  }\n  .icon-id-card:before {\n    content: "\\ea87";\n  }\n  .icon-image:before {\n    content: "\\ea88";\n  }\n  .icon-images:before {\n    content: "\\ea89";\n  }\n  .icon-inbox:before {\n    content: "\\ea8a";\n  }\n  .icon-indent:before {\n    content: "\\ea8b";\n  }\n  .icon-industry:before {\n    content: "\\ea8c";\n  }\n  .icon-infinity:before {\n    content: "\\ea8d";\n  }\n  .icon-info-circle:before {\n    content: "\\ea8e";\n  }\n  .icon-info:before {\n    content: "\\ea8f";\n  }\n  .icon-italic:before {\n    content: "\\ea90";\n  }\n  .icon-jedi:before {\n    content: "\\ea91";\n  }\n  .icon-joint:before {\n    content: "\\ea92";\n  }\n  .icon-journal-whills:before {\n    content: "\\ea93";\n  }\n  .icon-kaaba:before {\n    content: "\\ea94";\n  }\n  .icon-key:before {\n    content: "\\ea95";\n  }\n  .icon-keyboard:before {\n    content: "\\ea96";\n  }\n  .icon-khanda:before {\n    content: "\\ea97";\n  }\n  .icon-kiss-beam:before {\n    content: "\\ea98";\n  }\n  .icon-kiss-wink-heart:before {\n    content: "\\ea99";\n  }\n  .icon-kiss:before {\n    content: "\\ea9a";\n  }\n  .icon-kiwi-bird:before {\n    content: "\\ea9b";\n  }\n  .icon-landmark:before {\n    content: "\\ea9c";\n  }\n  .icon-language:before {\n    content: "\\ea9d";\n  }\n  .icon-laptop-code:before {\n    content: "\\ea9e";\n  }\n  .icon-laptop:before {\n    content: "\\ea9f";\n  }\n  .icon-laugh-beam:before {\n    content: "\\eaa0";\n  }\n  .icon-laugh-squint:before {\n    content: "\\eaa1";\n  }\n  .icon-laugh-wink:before {\n    content: "\\eaa2";\n  }\n  .icon-laugh:before {\n    content: "\\eaa3";\n  }\n  .icon-layer-group:before {\n    content: "\\eaa4";\n  }\n  .icon-leaf:before {\n    content: "\\eaa5";\n  }\n  .icon-lemon:before {\n    content: "\\eaa6";\n  }\n  .icon-less-than-equal:before {\n    content: "\\eaa7";\n  }\n  .icon-less-than:before {\n    content: "\\eaa8";\n  }\n  .icon-level-down-alt:before {\n    content: "\\eaa9";\n  }\n  .icon-level-up-alt:before {\n    content: "\\eaaa";\n  }\n  .icon-life-ring:before {\n    content: "\\eaab";\n  }\n  .icon-lightbulb:before {\n    content: "\\eaac";\n  }\n  .icon-link:before {\n    content: "\\eaad";\n  }\n  .icon-lira-sign:before {\n    content: "\\eaae";\n  }\n  .icon-list-alt:before {\n    content: "\\eaaf";\n  }\n  .icon-list-ol:before {\n    content: "\\eab0";\n  }\n  .icon-list-ul:before {\n    content: "\\eab1";\n  }\n  .icon-list:before {\n    content: "\\eab2";\n  }\n  .icon-location-arrow:before {\n    content: "\\eab3";\n  }\n  .icon-lock-open:before {\n    content: "\\eab4";\n  }\n  .icon-lock:before {\n    content: "\\eab5";\n  }\n  .icon-long-arrow-alt-down:before {\n    content: "\\eab6";\n  }\n  .icon-long-arrow-alt-left:before {\n    content: "\\eab7";\n  }\n  .icon-long-arrow-alt-right:before {\n    content: "\\eab8";\n  }\n  .icon-long-arrow-alt-up:before {\n    content: "\\eab9";\n  }\n  .icon-low-vision:before {\n    content: "\\eaba";\n  }\n  .icon-luggage-cart:before {\n    content: "\\eabb";\n  }\n  .icon-magic:before {\n    content: "\\eabc";\n  }\n  .icon-magnet:before {\n    content: "\\eabd";\n  }\n  .icon-mail-bulk:before {\n    content: "\\eabe";\n  }\n  .icon-male:before {\n    content: "\\eabf";\n  }\n  .icon-map-marked-alt:before {\n    content: "\\eac0";\n  }\n  .icon-map-marked:before {\n    content: "\\eac1";\n  }\n  .icon-map-marker-alt:before {\n    content: "\\eac2";\n  }\n  .icon-map-marker:before {\n    content: "\\eac3";\n  }\n  .icon-map-pin:before {\n    content: "\\eac4";\n  }\n  .icon-map-signs:before {\n    content: "\\eac5";\n  }\n  .icon-map:before {\n    content: "\\eac6";\n  }\n  .icon-marker:before {\n    content: "\\eac7";\n  }\n  .icon-mars-double:before {\n    content: "\\eac8";\n  }\n  .icon-mars-stroke-h:before {\n    content: "\\eac9";\n  }\n  .icon-mars-stroke-v:before {\n    content: "\\eaca";\n  }\n  .icon-mars-stroke:before {\n    content: "\\eacb";\n  }\n  .icon-mars:before {\n    content: "\\eacc";\n  }\n  .icon-medal:before {\n    content: "\\eacd";\n  }\n  .icon-medkit:before {\n    content: "\\eace";\n  }\n  .icon-meh-blank:before {\n    content: "\\eacf";\n  }\n  .icon-meh-rolling-eyes:before {\n    content: "\\ead0";\n  }\n  .icon-meh:before {\n    content: "\\ead1";\n  }\n  .icon-memory:before {\n    content: "\\ead2";\n  }\n  .icon-menorah:before {\n    content: "\\ead3";\n  }\n  .icon-mercury:before {\n    content: "\\ead4";\n  }\n  .icon-microchip:before {\n    content: "\\ead5";\n  }\n  .icon-microphone-alt-slash:before {\n    content: "\\ead6";\n  }\n  .icon-microphone-alt:before {\n    content: "\\ead7";\n  }\n  .icon-microphone-slash:before {\n    content: "\\ead8";\n  }\n  .icon-microphone:before {\n    content: "\\ead9";\n  }\n  .icon-microscope:before {\n    content: "\\eada";\n  }\n  .icon-minus-circle:before {\n    content: "\\eadb";\n  }\n  .icon-minus-square:before {\n    content: "\\eadc";\n  }\n  .icon-minus:before {\n    content: "\\eadd";\n  }\n  .icon-mobile-alt:before {\n    content: "\\eade";\n  }\n  .icon-mobile:before {\n    content: "\\eadf";\n  }\n  .icon-money-bill-alt:before {\n    content: "\\eae0";\n  }\n  .icon-money-bill-wave-alt:before {\n    content: "\\eae1";\n  }\n  .icon-money-bill-wave:before {\n    content: "\\eae2";\n  }\n  .icon-money-bill:before {\n    content: "\\eae3";\n  }\n  .icon-money-check-alt:before {\n    content: "\\eae4";\n  }\n  .icon-money-check:before {\n    content: "\\eae5";\n  }\n  .icon-monument:before {\n    content: "\\eae6";\n  }\n  .icon-moon:before {\n    content: "\\eae7";\n  }\n  .icon-mortar-pestle:before {\n    content: "\\eae8";\n  }\n  .icon-mosque:before {\n    content: "\\eae9";\n  }\n  .icon-motorcycle:before {\n    content: "\\eaea";\n  }\n  .icon-mouse-pointer:before {\n    content: "\\eaeb";\n  }\n  .icon-music:before {\n    content: "\\eaec";\n  }\n  .icon-neuter:before {\n    content: "\\eaed";\n  }\n  .icon-newspaper:before {\n    content: "\\eaee";\n  }\n  .icon-not-equal:before {\n    content: "\\eaef";\n  }\n  .icon-notes-medical:before {\n    content: "\\eaf0";\n  }\n  .icon-object-group:before {\n    content: "\\eaf1";\n  }\n  .icon-object-ungroup:before {\n    content: "\\eaf2";\n  }\n  .icon-oil-can:before {\n    content: "\\eaf3";\n  }\n  .icon-om:before {\n    content: "\\eaf4";\n  }\n  .icon-outdent:before {\n    content: "\\eaf5";\n  }\n  .icon-paint-brush:before {\n    content: "\\eaf6";\n  }\n  .icon-paint-roller:before {\n    content: "\\eaf7";\n  }\n  .icon-palette:before {\n    content: "\\eaf8";\n  }\n  .icon-pallet:before {\n    content: "\\eaf9";\n  }\n  .icon-paper-plane:before {\n    content: "\\eafa";\n  }\n  .icon-paperclip:before {\n    content: "\\eafb";\n  }\n  .icon-parachute-box:before {\n    content: "\\eafc";\n  }\n  .icon-paragraph:before {\n    content: "\\eafd";\n  }\n  .icon-parking:before {\n    content: "\\eafe";\n  }\n  .icon-passport:before {\n    content: "\\eaff";\n  }\n  .icon-pastafarianism:before {\n    content: "\\eb00";\n  }\n  .icon-paste:before {\n    content: "\\eb01";\n  }\n  .icon-pause-circle:before {\n    content: "\\eb02";\n  }\n  .icon-pause:before {\n    content: "\\eb03";\n  }\n  .icon-paw:before {\n    content: "\\eb04";\n  }\n  .icon-peace:before {\n    content: "\\eb05";\n  }\n  .icon-pen-alt:before {\n    content: "\\eb06";\n  }\n  .icon-pen-fancy:before {\n    content: "\\eb07";\n  }\n  .icon-pen-nib:before {\n    content: "\\eb08";\n  }\n  .icon-pen-square:before {\n    content: "\\eb09";\n  }\n  .icon-pen:before {\n    content: "\\eb0a";\n  }\n  .icon-pencil-alt:before {\n    content: "\\eb0b";\n  }\n  .icon-pencil-ruler:before {\n    content: "\\eb0c";\n  }\n  .icon-people-carry:before {\n    content: "\\eb0d";\n  }\n  .icon-percent:before {\n    content: "\\eb0e";\n  }\n  .icon-percentage:before {\n    content: "\\eb0f";\n  }\n  .icon-phone-slash:before {\n    content: "\\eb10";\n  }\n  .icon-phone-square:before {\n    content: "\\eb11";\n  }\n  .icon-phone-volume:before {\n    content: "\\eb12";\n  }\n  .icon-phone:before {\n    content: "\\eb13";\n  }\n  .icon-piggy-bank:before {\n    content: "\\eb14";\n  }\n  .icon-pills:before {\n    content: "\\eb15";\n  }\n  .icon-place-of-worship:before {\n    content: "\\eb16";\n  }\n  .icon-plane-arrival:before {\n    content: "\\eb17";\n  }\n  .icon-plane-departure:before {\n    content: "\\eb18";\n  }\n  .icon-plane:before {\n    content: "\\eb19";\n  }\n  .icon-play-circle:before {\n    content: "\\eb1a";\n  }\n  .icon-play:before {\n    content: "\\eb1b";\n  }\n  .icon-plug:before {\n    content: "\\eb1c";\n  }\n  .icon-plus-circle:before {\n    content: "\\eb1d";\n  }\n  .icon-plus-square:before {\n    content: "\\eb1e";\n  }\n  .icon-plus:before {\n    content: "\\eb1f";\n  }\n  .icon-podcast:before {\n    content: "\\eb20";\n  }\n  .icon-poll-h:before {\n    content: "\\eb21";\n  }\n  .icon-poll:before {\n    content: "\\eb22";\n  }\n  .icon-poo:before {\n    content: "\\eb23";\n  }\n  .icon-poop:before {\n    content: "\\eb24";\n  }\n  .icon-portrait:before {\n    content: "\\eb25";\n  }\n  .icon-pound-sign:before {\n    content: "\\eb26";\n  }\n  .icon-power-off:before {\n    content: "\\eb27";\n  }\n  .icon-pray:before {\n    content: "\\eb28";\n  }\n  .icon-praying-hands:before {\n    content: "\\eb29";\n  }\n  .icon-prescription-bottle-alt:before {\n    content: "\\eb2a";\n  }\n  .icon-prescription-bottle:before {\n    content: "\\eb2b";\n  }\n  .icon-prescription:before {\n    content: "\\eb2c";\n  }\n  .icon-print:before {\n    content: "\\eb2d";\n  }\n  .icon-procedures:before {\n    content: "\\eb2e";\n  }\n  .icon-project-diagram:before {\n    content: "\\eb2f";\n  }\n  .icon-puzzle-piece:before {\n    content: "\\eb30";\n  }\n  .icon-qrcode:before {\n    content: "\\eb31";\n  }\n  .icon-question-circle:before {\n    content: "\\eb32";\n  }\n  .icon-question:before {\n    content: "\\eb33";\n  }\n  .icon-quidditch:before {\n    content: "\\eb34";\n  }\n  .icon-quote-left:before {\n    content: "\\eb35";\n  }\n  .icon-quote-right:before {\n    content: "\\eb36";\n  }\n  .icon-quran:before {\n    content: "\\eb37";\n  }\n  .icon-random:before {\n    content: "\\eb38";\n  }\n  .icon-receipt:before {\n    content: "\\eb39";\n  }\n  .icon-recycle:before {\n    content: "\\eb3a";\n  }\n  .icon-redo-alt:before {\n    content: "\\eb3b";\n  }\n  .icon-redo:before {\n    content: "\\eb3c";\n  }\n  .icon-registered:before {\n    content: "\\eb3d";\n  }\n  .icon-reply-all:before {\n    content: "\\eb3e";\n  }\n  .icon-reply:before {\n    content: "\\eb3f";\n  }\n  .icon-retweet:before {\n    content: "\\eb40";\n  }\n  .icon-ribbon:before {\n    content: "\\eb41";\n  }\n  .icon-road:before {\n    content: "\\eb42";\n  }\n  .icon-robot:before {\n    content: "\\eb43";\n  }\n  .icon-rocket:before {\n    content: "\\eb44";\n  }\n  .icon-route:before {\n    content: "\\eb45";\n  }\n  .icon-rss-square:before {\n    content: "\\eb46";\n  }\n  .icon-rss:before {\n    content: "\\eb47";\n  }\n  .icon-ruble-sign:before {\n    content: "\\eb48";\n  }\n  .icon-ruler-combined:before {\n    content: "\\eb49";\n  }\n  .icon-ruler-horizontal:before {\n    content: "\\eb4a";\n  }\n  .icon-ruler-vertical:before {\n    content: "\\eb4b";\n  }\n  .icon-ruler:before {\n    content: "\\eb4c";\n  }\n  .icon-rupee-sign:before {\n    content: "\\eb4d";\n  }\n  .icon-sad-cry:before {\n    content: "\\eb4e";\n  }\n  .icon-sad-tear:before {\n    content: "\\eb4f";\n  }\n  .icon-save:before {\n    content: "\\eb50";\n  }\n  .icon-school:before {\n    content: "\\eb51";\n  }\n  .icon-screwdriver:before {\n    content: "\\eb52";\n  }\n  .icon-search-dollar:before {\n    content: "\\eb53";\n  }\n  .icon-search-location:before {\n    content: "\\eb54";\n  }\n  .icon-search-minus:before {\n    content: "\\eb55";\n  }\n  .icon-search-plus:before {\n    content: "\\eb56";\n  }\n  .icon-search:before {\n    content: "\\eb57";\n  }\n  .icon-seedling:before {\n    content: "\\eb58";\n  }\n  .icon-server:before {\n    content: "\\eb59";\n  }\n  .icon-shapes:before {\n    content: "\\eb5a";\n  }\n  .icon-share-alt-square:before {\n    content: "\\eb5b";\n  }\n  .icon-share-alt:before {\n    content: "\\eb5c";\n  }\n  .icon-share-square:before {\n    content: "\\eb5d";\n  }\n  .icon-share:before {\n    content: "\\eb5e";\n  }\n  .icon-shekel-sign:before {\n    content: "\\eb5f";\n  }\n  .icon-shield-alt:before {\n    content: "\\eb60";\n  }\n  .icon-ship:before {\n    content: "\\eb61";\n  }\n  .icon-shipping-fast:before {\n    content: "\\eb62";\n  }\n  .icon-shoe-prints:before {\n    content: "\\eb63";\n  }\n  .icon-shopping-bag:before {\n    content: "\\eb64";\n  }\n  .icon-shopping-basket:before {\n    content: "\\eb65";\n  }\n  .icon-shopping-cart1:before {\n    content: "\\eb66";\n  }\n  .icon-shower:before {\n    content: "\\eb67";\n  }\n  .icon-shuttle-van:before {\n    content: "\\eb68";\n  }\n  .icon-sign-in-alt:before {\n    content: "\\eb69";\n  }\n  .icon-sign-language:before {\n    content: "\\eb6a";\n  }\n  .icon-sign-out-alt:before {\n    content: "\\eb6b";\n  }\n  .icon-sign:before {\n    content: "\\eb6c";\n  }\n  .icon-signal:before {\n    content: "\\eb6d";\n  }\n  .icon-signature:before {\n    content: "\\eb6e";\n  }\n  .icon-sitemap:before {\n    content: "\\eb6f";\n  }\n  .icon-skull:before {\n    content: "\\eb70";\n  }\n  .icon-sliders-h:before {\n    content: "\\eb71";\n  }\n  .icon-smile-beam:before {\n    content: "\\eb72";\n  }\n  .icon-smile-wink:before {\n    content: "\\eb73";\n  }\n  .icon-smile:before {\n    content: "\\eb74";\n  }\n  .icon-smoking-ban:before {\n    content: "\\eb75";\n  }\n  .icon-smoking:before {\n    content: "\\eb76";\n  }\n  .icon-snowflake:before {\n    content: "\\eb77";\n  }\n  .icon-socks:before {\n    content: "\\eb78";\n  }\n  .icon-solar-panel:before {\n    content: "\\eb79";\n  }\n  .icon-sort-alpha-down:before {\n    content: "\\eb7a";\n  }\n  .icon-sort-alpha-up:before {\n    content: "\\eb7b";\n  }\n  .icon-sort-amount-down:before {\n    content: "\\eb7c";\n  }\n  .icon-sort-amount-up:before {\n    content: "\\eb7d";\n  }\n  .icon-sort-down:before {\n    content: "\\eb7e";\n  }\n  .icon-sort-numeric-down:before {\n    content: "\\eb7f";\n  }\n  .icon-sort-numeric-up:before {\n    content: "\\eb80";\n  }\n  .icon-sort-up:before {\n    content: "\\eb81";\n  }\n  .icon-sort:before {\n    content: "\\eb82";\n  }\n  .icon-spa:before {\n    content: "\\eb83";\n  }\n  .icon-space-shuttle:before {\n    content: "\\eb84";\n  }\n  .icon-spinner:before {\n    content: "\\eb85";\n  }\n  .icon-splotch:before {\n    content: "\\eb86";\n  }\n  .icon-spray-can:before {\n    content: "\\eb87";\n  }\n  .icon-square-full:before {\n    content: "\\eb88";\n  }\n  .icon-square-root-alt:before {\n    content: "\\eb89";\n  }\n  .icon-square:before {\n    content: "\\eb8a";\n  }\n  .icon-stamp:before {\n    content: "\\eb8b";\n  }\n  .icon-star-and-crescent:before {\n    content: "\\eb8c";\n  }\n  .icon-star-half-alt:before {\n    content: "\\eb8d";\n  }\n  .icon-star-half:before {\n    content: "\\eb8e";\n  }\n  .icon-star-of-david:before {\n    content: "\\eb8f";\n  }\n  .icon-star-of-life:before {\n    content: "\\eb90";\n  }\n  .icon-star:before {\n    content: "\\eb91";\n  }\n  .icon-step-backward:before {\n    content: "\\eb92";\n  }\n  .icon-step-forward:before {\n    content: "\\eb93";\n  }\n  .icon-stethoscope:before {\n    content: "\\eb94";\n  }\n  .icon-sticky-note:before {\n    content: "\\eb95";\n  }\n  .icon-stop-circle:before {\n    content: "\\eb96";\n  }\n  .icon-stop:before {\n    content: "\\eb97";\n  }\n  .icon-stopwatch:before {\n    content: "\\eb98";\n  }\n  .icon-store-alt:before {\n    content: "\\eb99";\n  }\n  .icon-store:before {\n    content: "\\eb9a";\n  }\n  .icon-stream:before {\n    content: "\\eb9b";\n  }\n  .icon-street-view:before {\n    content: "\\eb9c";\n  }\n  .icon-strikethrough:before {\n    content: "\\eb9d";\n  }\n  .icon-stroopwafel:before {\n    content: "\\eb9e";\n  }\n  .icon-subscript:before {\n    content: "\\eb9f";\n  }\n  .icon-subway:before {\n    content: "\\eba0";\n  }\n  .icon-suitcase-rolling:before {\n    content: "\\eba1";\n  }\n  .icon-suitcase:before {\n    content: "\\eba2";\n  }\n  .icon-sun:before {\n    content: "\\eba3";\n  }\n  .icon-superscript:before {\n    content: "\\eba4";\n  }\n  .icon-surprise:before {\n    content: "\\eba5";\n  }\n  .icon-swatchbook:before {\n    content: "\\eba6";\n  }\n  .icon-swimmer:before {\n    content: "\\eba7";\n  }\n  .icon-swimming-pool:before {\n    content: "\\eba8";\n  }\n  .icon-synagogue:before {\n    content: "\\eba9";\n  }\n  .icon-sync-alt:before {\n    content: "\\ebaa";\n  }\n  .icon-sync:before {\n    content: "\\ebab";\n  }\n  .icon-syringe:before {\n    content: "\\ebac";\n  }\n  .icon-table-tennis:before {\n    content: "\\ebad";\n  }\n  .icon-table:before {\n    content: "\\ebae";\n  }\n  .icon-tablet-alt:before {\n    content: "\\ebaf";\n  }\n  .icon-tablet:before {\n    content: "\\ebb0";\n  }\n  .icon-tablets:before {\n    content: "\\ebb1";\n  }\n  .icon-tachometer-alt:before {\n    content: "\\ebb2";\n  }\n  .icon-tag:before {\n    content: "\\ebb3";\n  }\n  .icon-tags:before {\n    content: "\\ebb4";\n  }\n  .icon-tape:before {\n    content: "\\ebb5";\n  }\n  .icon-tasks:before {\n    content: "\\ebb6";\n  }\n  .icon-taxi:before {\n    content: "\\ebb7";\n  }\n  .icon-teeth-open:before {\n    content: "\\ebb8";\n  }\n  .icon-teeth:before {\n    content: "\\ebb9";\n  }\n  .icon-terminal:before {\n    content: "\\ebba";\n  }\n  .icon-text-height:before {\n    content: "\\ebbb";\n  }\n  .icon-text-width:before {\n    content: "\\ebbc";\n  }\n  .icon-th-large:before {\n    content: "\\ebbd";\n  }\n  .icon-th-list:before {\n    content: "\\ebbe";\n  }\n  .icon-th:before {\n    content: "\\ebbf";\n  }\n  .icon-theater-masks:before {\n    content: "\\ebc0";\n  }\n  .icon-thermometer-empty:before {\n    content: "\\ebc1";\n  }\n  .icon-thermometer-full:before {\n    content: "\\ebc2";\n  }\n  .icon-thermometer-half:before {\n    content: "\\ebc3";\n  }\n  .icon-thermometer-quarter:before {\n    content: "\\ebc4";\n  }\n  .icon-thermometer-three-quarters:before {\n    content: "\\ebc5";\n  }\n  .icon-thermometer:before {\n    content: "\\ebc6";\n  }\n  .icon-thumbs-down:before {\n    content: "\\ebc7";\n  }\n  .icon-thumbs-up:before {\n    content: "\\ebc8";\n  }\n  .icon-thumbtack:before {\n    content: "\\ebc9";\n  }\n  .icon-ticket-alt:before {\n    content: "\\ebca";\n  }\n  .icon-times-circle:before {\n    content: "\\ebcb";\n  }\n  .icon-times:before {\n    content: "\\ebcc";\n  }\n  .icon-tint-slash:before {\n    content: "\\ebcd";\n  }\n  .icon-tint:before {\n    content: "\\ebce";\n  }\n  .icon-tired:before {\n    content: "\\ebcf";\n  }\n  .icon-toggle-off:before {\n    content: "\\ebd0";\n  }\n  .icon-toggle-on:before {\n    content: "\\ebd1";\n  }\n  .icon-toolbox:before {\n    content: "\\ebd2";\n  }\n  .icon-tooth:before {\n    content: "\\ebd3";\n  }\n  .icon-torah:before {\n    content: "\\ebd4";\n  }\n  .icon-torii-gate:before {\n    content: "\\ebd5";\n  }\n  .icon-trademark:before {\n    content: "\\ebd6";\n  }\n  .icon-traffic-light:before {\n    content: "\\ebd7";\n  }\n  .icon-train:before {\n    content: "\\ebd8";\n  }\n  .icon-transgender-alt:before {\n    content: "\\ebd9";\n  }\n  .icon-transgender:before {\n    content: "\\ebda";\n  }\n  .icon-trash-alt:before {\n    content: "\\ebdb";\n  }\n  .icon-trash:before {\n    content: "\\ebdc";\n  }\n  .icon-tree:before {\n    content: "\\ebdd";\n  }\n  .icon-trophy:before {\n    content: "\\ebde";\n  }\n  .icon-truck-loading:before {\n    content: "\\ebdf";\n  }\n  .icon-truck-monster:before {\n    content: "\\ebe0";\n  }\n  .icon-truck-moving:before {\n    content: "\\ebe1";\n  }\n  .icon-truck-pickup:before {\n    content: "\\ebe2";\n  }\n  .icon-truck:before {\n    content: "\\ebe3";\n  }\n  .icon-tshirt:before {\n    content: "\\ebe4";\n  }\n  .icon-tty:before {\n    content: "\\ebe5";\n  }\n  .icon-tv:before {\n    content: "\\ebe6";\n  }\n  .icon-umbrella-beach:before {\n    content: "\\ebe7";\n  }\n  .icon-umbrella:before {\n    content: "\\ebe8";\n  }\n  .icon-underline:before {\n    content: "\\ebe9";\n  }\n  .icon-undo-alt:before {\n    content: "\\ebea";\n  }\n  .icon-undo:before {\n    content: "\\ebeb";\n  }\n  .icon-universal-access:before {\n    content: "\\ebec";\n  }\n  .icon-university:before {\n    content: "\\ebed";\n  }\n  .icon-unlink:before {\n    content: "\\ebee";\n  }\n  .icon-unlock-alt:before {\n    content: "\\ebef";\n  }\n  .icon-unlock:before {\n    content: "\\ebf0";\n  }\n  .icon-upload:before {\n    content: "\\ebf1";\n  }\n  .icon-user-alt-slash:before {\n    content: "\\ebf2";\n  }\n  .icon-user-alt:before {\n    content: "\\ebf3";\n  }\n  .icon-user-astronaut:before {\n    content: "\\ebf4";\n  }\n  .icon-user-check:before {\n    content: "\\ebf5";\n  }\n  .icon-user-circle:before {\n    content: "\\ebf6";\n  }\n  .icon-user-clock:before {\n    content: "\\ebf7";\n  }\n  .icon-user-cog:before {\n    content: "\\ebf8";\n  }\n  .icon-user-edit:before {\n    content: "\\ebf9";\n  }\n  .icon-user-friends:before {\n    content: "\\ebfa";\n  }\n  .icon-user-graduate:before {\n    content: "\\ebfb";\n  }\n  .icon-user-lock:before {\n    content: "\\ebfc";\n  }\n  .icon-user-md:before {\n    content: "\\ebfd";\n  }\n  .icon-user-minus:before {\n    content: "\\ebfe";\n  }\n  .icon-user-ninja:before {\n    content: "\\ebff";\n  }\n  .icon-user-plus:before {\n    content: "\\ec00";\n  }\n  .icon-user-secret:before {\n    content: "\\ec01";\n  }\n  .icon-user-shield:before {\n    content: "\\ec02";\n  }\n  .icon-user-slash:before {\n    content: "\\ec03";\n  }\n  .icon-user-tag:before {\n    content: "\\ec04";\n  }\n  .icon-user-tie:before {\n    content: "\\ec05";\n  }\n  .icon-user-times:before {\n    content: "\\ec06";\n  }\n  .icon-user:before {\n    content: "\\ec07";\n  }\n  .icon-users-cog:before {\n    content: "\\ec08";\n  }\n  .icon-users:before {\n    content: "\\ec09";\n  }\n  .icon-utensil-spoon:before {\n    content: "\\ec0a";\n  }\n  .icon-utensils:before {\n    content: "\\ec0b";\n  }\n  .icon-vector-square:before {\n    content: "\\ec0c";\n  }\n  .icon-venus-double:before {\n    content: "\\ec0d";\n  }\n  .icon-venus-mars:before {\n    content: "\\ec0e";\n  }\n  .icon-venus:before {\n    content: "\\ec0f";\n  }\n  .icon-vial:before {\n    content: "\\ec10";\n  }\n  .icon-vials:before {\n    content: "\\ec11";\n  }\n  .icon-video-slash:before {\n    content: "\\ec12";\n  }\n  .icon-video:before {\n    content: "\\ec13";\n  }\n  .icon-vihara:before {\n    content: "\\ec14";\n  }\n  .icon-volleyball-ball:before {\n    content: "\\ec15";\n  }\n  .icon-volume-down:before {\n    content: "\\ec16";\n  }\n  .icon-volume-off:before {\n    content: "\\ec17";\n  }\n  .icon-volume-up:before {\n    content: "\\ec18";\n  }\n  .icon-walking:before {\n    content: "\\ec19";\n  }\n  .icon-wallet:before {\n    content: "\\ec1a";\n  }\n  .icon-warehouse:before {\n    content: "\\ec1b";\n  }\n  .icon-weight-hanging:before {\n    content: "\\ec1c";\n  }\n  .icon-weight:before {\n    content: "\\ec1d";\n  }\n  .icon-wheelchair:before {\n    content: "\\ec1e";\n  }\n  .icon-wifi:before {\n    content: "\\ec1f";\n  }\n  .icon-window-close:before {\n    content: "\\ec20";\n  }\n  .icon-window-maximize:before {\n    content: "\\ec21";\n  }\n  .icon-window-minimize:before {\n    content: "\\ec22";\n  }\n  .icon-window-restore:before {\n    content: "\\ec23";\n  }\n  .icon-wine-glass-alt:before {\n    content: "\\ec24";\n  }\n  .icon-wine-glass:before {\n    content: "\\ec25";\n  }\n  .icon-won-sign:before {\n    content: "\\ec26";\n  }\n  .icon-wrench:before {\n    content: "\\ec27";\n  }\n  .icon-x-ray:before {\n    content: "\\ec28";\n  }\n  .icon-yen-sign:before {\n    content: "\\ec29";\n  }\n  .icon-yin-yang:before {\n    content: "\\ec2a";\n  }\n  .icon-address-book1:before {\n    content: "\\ec2b";\n  }\n  .icon-address-card1:before {\n    content: "\\ec2c";\n  }\n  .icon-angry1:before {\n    content: "\\ec2d";\n  }\n  .icon-arrow-alt-circle-down1:before {\n    content: "\\ec2e";\n  }\n  .icon-arrow-alt-circle-left1:before {\n    content: "\\ec2f";\n  }\n  .icon-arrow-alt-circle-right1:before {\n    content: "\\ec30";\n  }\n  .icon-arrow-alt-circle-up1:before {\n    content: "\\ec31";\n  }\n  .icon-bell-slash1:before {\n    content: "\\ec32";\n  }\n  .icon-bell1:before {\n    content: "\\ec33";\n  }\n  .icon-bookmark1:before {\n    content: "\\ec34";\n  }\n  .icon-building1:before {\n    content: "\\ec35";\n  }\n  .icon-calendar-alt1:before {\n    content: "\\ec36";\n  }\n  .icon-calendar-check1:before {\n    content: "\\ec37";\n  }\n  .icon-calendar-minus1:before {\n    content: "\\ec38";\n  }\n  .icon-calendar-plus1:before {\n    content: "\\ec39";\n  }\n  .icon-calendar-times1:before {\n    content: "\\ec3a";\n  }\n  .icon-calendar1:before {\n    content: "\\ec3b";\n  }\n  .icon-caret-square-down1:before {\n    content: "\\ec3c";\n  }\n  .icon-caret-square-left1:before {\n    content: "\\ec3d";\n  }\n  .icon-caret-square-right1:before {\n    content: "\\ec3e";\n  }\n  .icon-caret-square-up1:before {\n    content: "\\ec3f";\n  }\n  .icon-chart-bar1:before {\n    content: "\\ec40";\n  }\n  .icon-check-circle1:before {\n    content: "\\ec41";\n  }\n  .icon-check-square1:before {\n    content: "\\ec42";\n  }\n  .icon-circle1:before {\n    content: "\\ec43";\n  }\n  .icon-clipboard1:before {\n    content: "\\ec44";\n  }\n  .icon-clock1:before {\n    content: "\\ec45";\n  }\n  .icon-clone1:before {\n    content: "\\ec46";\n  }\n  .icon-closed-captioning1:before {\n    content: "\\ec47";\n  }\n  .icon-comment-alt1:before {\n    content: "\\ec48";\n  }\n  .icon-comment-dots1:before {\n    content: "\\ec49";\n  }\n  .icon-comment1:before {\n    content: "\\ec4a";\n  }\n  .icon-comments1:before {\n    content: "\\ec4b";\n  }\n  .icon-compass1:before {\n    content: "\\ec4c";\n  }\n  .icon-copy1:before {\n    content: "\\ec4d";\n  }\n  .icon-copyright1:before {\n    content: "\\ec4e";\n  }\n  .icon-credit-card1:before {\n    content: "\\ec4f";\n  }\n  .icon-dizzy1:before {\n    content: "\\ec50";\n  }\n  .icon-dot-circle1:before {\n    content: "\\ec51";\n  }\n  .icon-edit1:before {\n    content: "\\ec52";\n  }\n  .icon-envelope-open1:before {\n    content: "\\ec53";\n  }\n  .icon-envelope1:before {\n    content: "\\ec54";\n  }\n  .icon-eye-slash1:before {\n    content: "\\ec55";\n  }\n  .icon-eye1:before {\n    content: "\\ec56";\n  }\n  .icon-file-alt1:before {\n    content: "\\ec57";\n  }\n  .icon-file-archive1:before {\n    content: "\\ec58";\n  }\n  .icon-file-audio1:before {\n    content: "\\ec59";\n  }\n  .icon-file-code1:before {\n    content: "\\ec5a";\n  }\n  .icon-file-excel1:before {\n    content: "\\ec5b";\n  }\n  .icon-file-image1:before {\n    content: "\\ec5c";\n  }\n  .icon-file-pdf1:before {\n    content: "\\ec5d";\n  }\n  .icon-file-powerpoint1:before {\n    content: "\\ec5e";\n  }\n  .icon-file-video1:before {\n    content: "\\ec5f";\n  }\n  .icon-file-word1:before {\n    content: "\\ec60";\n  }\n  .icon-file1:before {\n    content: "\\ec61";\n  }\n  .icon-flag1:before {\n    content: "\\ec62";\n  }\n  .icon-flushed1:before {\n    content: "\\ec63";\n  }\n  .icon-folder-open1:before {\n    content: "\\ec64";\n  }\n  .icon-folder1:before {\n    content: "\\ec65";\n  }\n  .icon-font-awesome-logo-full1:before {\n    content: "\\ec66";\n  }\n  .icon-frown-open1:before {\n    content: "\\ec67";\n  }\n  .icon-frown1:before {\n    content: "\\ec68";\n  }\n  .icon-futbol1:before {\n    content: "\\ec69";\n  }\n  .icon-gem1:before {\n    content: "\\ec6a";\n  }\n  .icon-grimace1:before {\n    content: "\\ec6b";\n  }\n  .icon-grin-alt1:before {\n    content: "\\ec6c";\n  }\n  .icon-grin-beam-sweat1:before {\n    content: "\\ec6d";\n  }\n  .icon-grin-beam1:before {\n    content: "\\ec6e";\n  }\n  .icon-grin-hearts1:before {\n    content: "\\ec6f";\n  }\n  .icon-grin-squint-tears1:before {\n    content: "\\ec70";\n  }\n  .icon-grin-squint1:before {\n    content: "\\ec71";\n  }\n  .icon-grin-stars1:before {\n    content: "\\ec72";\n  }\n  .icon-grin-tears1:before {\n    content: "\\ec73";\n  }\n  .icon-grin-tongue-squint1:before {\n    content: "\\ec74";\n  }\n  .icon-grin-tongue-wink1:before {\n    content: "\\ec75";\n  }\n  .icon-grin-tongue1:before {\n    content: "\\ec76";\n  }\n  .icon-grin-wink1:before {\n    content: "\\ec77";\n  }\n  .icon-grin1:before {\n    content: "\\ec78";\n  }\n  .icon-hand-lizard1:before {\n    content: "\\ec79";\n  }\n  .icon-hand-paper1:before {\n    content: "\\ec7a";\n  }\n  .icon-hand-peace1:before {\n    content: "\\ec7b";\n  }\n  .icon-hand-point-down1:before {\n    content: "\\ec7c";\n  }\n  .icon-hand-point-left1:before {\n    content: "\\ec7d";\n  }\n  .icon-hand-point-right1:before {\n    content: "\\ec7e";\n  }\n  .icon-hand-point-up1:before {\n    content: "\\ec7f";\n  }\n  .icon-hand-pointer1:before {\n    content: "\\ec80";\n  }\n  .icon-hand-rock1:before {\n    content: "\\ec81";\n  }\n  .icon-hand-scissors1:before {\n    content: "\\ec82";\n  }\n  .icon-hand-spock1:before {\n    content: "\\ec83";\n  }\n  .icon-handshake1:before {\n    content: "\\ec84";\n  }\n  .icon-hdd1:before {\n    content: "\\ec85";\n  }\n  .icon-heart1:before {\n    content: "\\ec86";\n  }\n  .icon-hospital1:before {\n    content: "\\ec87";\n  }\n  .icon-hourglass1:before {\n    content: "\\ec88";\n  }\n  .icon-id-badge1:before {\n    content: "\\ec89";\n  }\n  .icon-id-card1:before {\n    content: "\\ec8a";\n  }\n  .icon-image1:before {\n    content: "\\ec8b";\n  }\n  .icon-images1:before {\n    content: "\\ec8c";\n  }\n  .icon-keyboard1:before {\n    content: "\\ec8d";\n  }\n  .icon-kiss-beam1:before {\n    content: "\\ec8e";\n  }\n  .icon-kiss-wink-heart1:before {\n    content: "\\ec8f";\n  }\n  .icon-kiss1:before {\n    content: "\\ec90";\n  }\n  .icon-laugh-beam1:before {\n    content: "\\ec91";\n  }\n  .icon-laugh-squint1:before {\n    content: "\\ec92";\n  }\n  .icon-laugh-wink1:before {\n    content: "\\ec93";\n  }\n  .icon-laugh1:before {\n    content: "\\ec94";\n  }\n  .icon-lemon1:before {\n    content: "\\ec95";\n  }\n  .icon-life-ring1:before {\n    content: "\\ec96";\n  }\n  .icon-lightbulb1:before {\n    content: "\\ec97";\n  }\n  .icon-list-alt1:before {\n    content: "\\ec98";\n  }\n  .icon-map1:before {\n    content: "\\ec99";\n  }\n  .icon-meh-blank1:before {\n    content: "\\ec9a";\n  }\n  .icon-meh-rolling-eyes1:before {\n    content: "\\ec9b";\n  }\n  .icon-meh1:before {\n    content: "\\ec9c";\n  }\n  .icon-minus-square1:before {\n    content: "\\ec9d";\n  }\n  .icon-money-bill-alt1:before {\n    content: "\\ec9e";\n  }\n  .icon-moon1:before {\n    content: "\\ec9f";\n  }\n  .icon-newspaper1:before {\n    content: "\\eca0";\n  }\n  .icon-object-group1:before {\n    content: "\\eca1";\n  }\n  .icon-object-ungroup1:before {\n    content: "\\eca2";\n  }\n  .icon-paper-plane1:before {\n    content: "\\eca3";\n  }\n  .icon-pause-circle1:before {\n    content: "\\eca4";\n  }\n  .icon-play-circle1:before {\n    content: "\\eca5";\n  }\n  .icon-plus-square1:before {\n    content: "\\eca6";\n  }\n  .icon-question-circle1:before {\n    content: "\\eca7";\n  }\n  .icon-registered1:before {\n    content: "\\eca8";\n  }\n  .icon-sad-cry1:before {\n    content: "\\eca9";\n  }\n  .icon-sad-tear1:before {\n    content: "\\ecaa";\n  }\n  .icon-save1:before {\n    content: "\\ecab";\n  }\n  .icon-share-square1:before {\n    content: "\\ecac";\n  }\n  .icon-smile-beam1:before {\n    content: "\\ecad";\n  }\n  .icon-smile-wink1:before {\n    content: "\\ecae";\n  }\n  .icon-smile1:before {\n    content: "\\ecaf";\n  }\n  .icon-snowflake1:before {\n    content: "\\ecb0";\n  }\n  .icon-square1:before {\n    content: "\\ecb1";\n  }\n  .icon-star-half1:before {\n    content: "\\ecb2";\n  }\n  .icon-star1:before {\n    content: "\\ecb3";\n  }\n  .icon-sticky-note1:before {\n    content: "\\ecb4";\n  }\n  .icon-stop-circle1:before {\n    content: "\\ecb5";\n  }\n  .icon-sun1:before {\n    content: "\\ecb6";\n  }\n  .icon-surprise1:before {\n    content: "\\ecb7";\n  }\n  .icon-thumbs-down1:before {\n    content: "\\ecb8";\n  }\n  .icon-thumbs-up1:before {\n    content: "\\ecb9";\n  }\n  .icon-times-circle1:before {\n    content: "\\ecba";\n  }\n  .icon-tired1:before {\n    content: "\\ecbb";\n  }\n  .icon-trash-alt1:before {\n    content: "\\ecbc";\n  }\n  .icon-user-circle1:before {\n    content: "\\ecbd";\n  }\n  .icon-user1:before {\n    content: "\\ecbe";\n  }\n  .icon-window-close1:before {\n    content: "\\ecbf";\n  }\n  .icon-window-maximize1:before {\n    content: "\\ecc0";\n  }\n  .icon-window-minimize1:before {\n    content: "\\ecc1";\n  }\n  .icon-window-restore1:before {\n    content: "\\ecc2";\n  }\n  .icon-px:before {\n    content: "\\ecc3";\n  }\n  .icon-accessible-icon:before {\n    content: "\\ecc4";\n  }\n  .icon-accusoft:before {\n    content: "\\ecc5";\n  }\n  .icon-adn:before {\n    content: "\\ecc6";\n  }\n  .icon-adversal:before {\n    content: "\\ecc7";\n  }\n  .icon-affiliatetheme:before {\n    content: "\\ecc8";\n  }\n  .icon-algolia:before {\n    content: "\\ecc9";\n  }\n  .icon-alipay:before {\n    content: "\\ecca";\n  }\n  .icon-amazon-pay:before {\n    content: "\\eccb";\n  }\n  .icon-amazon:before {\n    content: "\\eccc";\n  }\n  .icon-amilia:before {\n    content: "\\eccd";\n  }\n  .icon-android:before {\n    content: "\\ecce";\n  }\n  .icon-angellist:before {\n    content: "\\eccf";\n  }\n  .icon-angrycreative:before {\n    content: "\\ecd0";\n  }\n  .icon-angular:before {\n    content: "\\ecd1";\n  }\n  .icon-app-store-ios:before {\n    content: "\\ecd2";\n  }\n  .icon-app-store:before {\n    content: "\\ecd3";\n  }\n  .icon-apper:before {\n    content: "\\ecd4";\n  }\n  .icon-apple-pay:before {\n    content: "\\ecd5";\n  }\n  .icon-apple:before {\n    content: "\\ecd6";\n  }\n  .icon-asymmetrik:before {\n    content: "\\ecd7";\n  }\n  .icon-audible:before {\n    content: "\\ecd8";\n  }\n  .icon-autoprefixer:before {\n    content: "\\ecd9";\n  }\n  .icon-avianex:before {\n    content: "\\ecda";\n  }\n  .icon-aviato:before {\n    content: "\\ecdb";\n  }\n  .icon-aws:before {\n    content: "\\ecdc";\n  }\n  .icon-bandcamp:before {\n    content: "\\ecdd";\n  }\n  .icon-behance-square:before {\n    content: "\\ecde";\n  }\n  .icon-behance:before {\n    content: "\\ecdf";\n  }\n  .icon-bimobject:before {\n    content: "\\ece0";\n  }\n  .icon-bitbucket:before {\n    content: "\\ece1";\n  }\n  .icon-bitcoin:before {\n    content: "\\ece2";\n  }\n  .icon-bity:before {\n    content: "\\ece3";\n  }\n  .icon-black-tie:before {\n    content: "\\ece4";\n  }\n  .icon-blackberry:before {\n    content: "\\ece5";\n  }\n  .icon-blogger-b:before {\n    content: "\\ece6";\n  }\n  .icon-blogger:before {\n    content: "\\ece7";\n  }\n  .icon-bluetooth-b:before {\n    content: "\\ece8";\n  }\n  .icon-bluetooth:before {\n    content: "\\ece9";\n  }\n  .icon-btc:before {\n    content: "\\ecea";\n  }\n  .icon-buromobelexperte:before {\n    content: "\\eceb";\n  }\n  .icon-buysellads:before {\n    content: "\\ecec";\n  }\n  .icon-cc-amazon-pay:before {\n    content: "\\eced";\n  }\n  .icon-cc-amex:before {\n    content: "\\ecee";\n  }\n  .icon-cc-apple-pay:before {\n    content: "\\ecef";\n  }\n  .icon-cc-diners-club:before {\n    content: "\\ecf0";\n  }\n  .icon-cc-discover:before {\n    content: "\\ecf1";\n  }\n  .icon-cc-jcb:before {\n    content: "\\ecf2";\n  }\n  .icon-cc-mastercard:before {\n    content: "\\ecf3";\n  }\n  .icon-cc-paypal:before {\n    content: "\\ecf4";\n  }\n  .icon-cc-stripe:before {\n    content: "\\ecf5";\n  }\n  .icon-cc-visa:before {\n    content: "\\ecf6";\n  }\n  .icon-centercode:before {\n    content: "\\ecf7";\n  }\n  .icon-chrome:before {\n    content: "\\ecf8";\n  }\n  .icon-cloudscale:before {\n    content: "\\ecf9";\n  }\n  .icon-cloudsmith:before {\n    content: "\\ecfa";\n  }\n  .icon-cloudversify:before {\n    content: "\\ecfb";\n  }\n  .icon-codepen:before {\n    content: "\\ecfc";\n  }\n  .icon-codiepie:before {\n    content: "\\ecfd";\n  }\n  .icon-connectdevelop:before {\n    content: "\\ecfe";\n  }\n  .icon-contao:before {\n    content: "\\ecff";\n  }\n  .icon-cpanel:before {\n    content: "\\ed00";\n  }\n  .icon-creative-commons-by:before {\n    content: "\\ed01";\n  }\n  .icon-creative-commons-nc-eu:before {\n    content: "\\ed02";\n  }\n  .icon-creative-commons-nc-jp:before {\n    content: "\\ed03";\n  }\n  .icon-creative-commons-nc:before {\n    content: "\\ed04";\n  }\n  .icon-creative-commons-nd:before {\n    content: "\\ed05";\n  }\n  .icon-creative-commons-pd-alt:before {\n    content: "\\ed06";\n  }\n  .icon-creative-commons-pd:before {\n    content: "\\ed07";\n  }\n  .icon-creative-commons-remix:before {\n    content: "\\ed08";\n  }\n  .icon-creative-commons-sa:before {\n    content: "\\ed09";\n  }\n  .icon-creative-commons-sampling-plus:before {\n    content: "\\ed0a";\n  }\n  .icon-creative-commons-sampling:before {\n    content: "\\ed0b";\n  }\n  .icon-creative-commons-share:before {\n    content: "\\ed0c";\n  }\n  .icon-creative-commons:before {\n    content: "\\ed0d";\n  }\n  .icon-css3-alt:before {\n    content: "\\ed0e";\n  }\n  .icon-css3:before {\n    content: "\\ed0f";\n  }\n  .icon-cuttlefish:before {\n    content: "\\ed10";\n  }\n  .icon-d-and-d:before {\n    content: "\\ed11";\n  }\n  .icon-dashcube:before {\n    content: "\\ed12";\n  }\n  .icon-delicious:before {\n    content: "\\ed13";\n  }\n  .icon-deploydog:before {\n    content: "\\ed14";\n  }\n  .icon-deskpro:before {\n    content: "\\ed15";\n  }\n  .icon-deviantart:before {\n    content: "\\ed16";\n  }\n  .icon-digg:before {\n    content: "\\ed17";\n  }\n  .icon-digital-ocean:before {\n    content: "\\ed18";\n  }\n  .icon-discord:before {\n    content: "\\ed19";\n  }\n  .icon-discourse:before {\n    content: "\\ed1a";\n  }\n  .icon-dochub:before {\n    content: "\\ed1b";\n  }\n  .icon-docker:before {\n    content: "\\ed1c";\n  }\n  .icon-draft2digital:before {\n    content: "\\ed1d";\n  }\n  .icon-dribbble-square:before {\n    content: "\\ed1e";\n  }\n  .icon-dribbble:before {\n    content: "\\ed1f";\n  }\n  .icon-dropbox:before {\n    content: "\\ed20";\n  }\n  .icon-drupal:before {\n    content: "\\ed21";\n  }\n  .icon-dyalog:before {\n    content: "\\ed22";\n  }\n  .icon-earlybirds:before {\n    content: "\\ed23";\n  }\n  .icon-ebay:before {\n    content: "\\ed24";\n  }\n  .icon-edge:before {\n    content: "\\ed25";\n  }\n  .icon-elementor:before {\n    content: "\\ed26";\n  }\n  .icon-ello:before {\n    content: "\\ed27";\n  }\n  .icon-ember:before {\n    content: "\\ed28";\n  }\n  .icon-empire:before {\n    content: "\\ed29";\n  }\n  .icon-envira:before {\n    content: "\\ed2a";\n  }\n  .icon-erlang:before {\n    content: "\\ed2b";\n  }\n  .icon-ethereum:before {\n    content: "\\ed2c";\n  }\n  .icon-etsy:before {\n    content: "\\ed2d";\n  }\n  .icon-expeditedssl:before {\n    content: "\\ed2e";\n  }\n  .icon-facebook-f:before {\n    content: "\\ed2f";\n  }\n  .icon-facebook-messenger:before {\n    content: "\\ed30";\n  }\n  .icon-facebook-square:before {\n    content: "\\ed31";\n  }\n  .icon-facebook1:before {\n    content: "\\ed32";\n  }\n  .icon-firefox:before {\n    content: "\\ed33";\n  }\n  .icon-first-order-alt:before {\n    content: "\\ed34";\n  }\n  .icon-first-order:before {\n    content: "\\ed35";\n  }\n  .icon-firstdraft:before {\n    content: "\\ed36";\n  }\n  .icon-flickr:before {\n    content: "\\ed37";\n  }\n  .icon-flipboard:before {\n    content: "\\ed38";\n  }\n  .icon-fly:before {\n    content: "\\ed39";\n  }\n  .icon-font-awesome-alt:before {\n    content: "\\ed3a";\n  }\n  .icon-font-awesome-flag:before {\n    content: "\\ed3b";\n  }\n  .icon-font-awesome-logo-full2:before {\n    content: "\\ed3c";\n  }\n  .icon-font-awesome:before {\n    content: "\\ed3d";\n  }\n  .icon-fonticons-fi:before {\n    content: "\\ed3e";\n  }\n  .icon-fonticons:before {\n    content: "\\ed3f";\n  }\n  .icon-fort-awesome-alt:before {\n    content: "\\ed40";\n  }\n  .icon-fort-awesome:before {\n    content: "\\ed41";\n  }\n  .icon-forumbee:before {\n    content: "\\ed42";\n  }\n  .icon-foursquare:before {\n    content: "\\ed43";\n  }\n  .icon-free-code-camp:before {\n    content: "\\ed44";\n  }\n  .icon-freebsd:before {\n    content: "\\ed45";\n  }\n  .icon-fulcrum:before {\n    content: "\\ed46";\n  }\n  .icon-galactic-republic:before {\n    content: "\\ed47";\n  }\n  .icon-galactic-senate:before {\n    content: "\\ed48";\n  }\n  .icon-get-pocket:before {\n    content: "\\ed49";\n  }\n  .icon-gg-circle:before {\n    content: "\\ed4a";\n  }\n  .icon-gg:before {\n    content: "\\ed4b";\n  }\n  .icon-git-square:before {\n    content: "\\ed4c";\n  }\n  .icon-git:before {\n    content: "\\ed4d";\n  }\n  .icon-github-alt:before {\n    content: "\\ed4e";\n  }\n  .icon-github-square:before {\n    content: "\\ed4f";\n  }\n  .icon-github:before {\n    content: "\\ed50";\n  }\n  .icon-gitkraken:before {\n    content: "\\ed51";\n  }\n  .icon-gitlab:before {\n    content: "\\ed52";\n  }\n  .icon-gitter:before {\n    content: "\\ed53";\n  }\n  .icon-glide-g:before {\n    content: "\\ed54";\n  }\n  .icon-glide:before {\n    content: "\\ed55";\n  }\n  .icon-gofore:before {\n    content: "\\ed56";\n  }\n  .icon-goodreads-g:before {\n    content: "\\ed57";\n  }\n  .icon-goodreads:before {\n    content: "\\ed58";\n  }\n  .icon-google-drive:before {\n    content: "\\ed59";\n  }\n  .icon-google-play:before {\n    content: "\\ed5a";\n  }\n  .icon-google-plus-g:before {\n    content: "\\ed5b";\n  }\n  .icon-google-plus-square:before {\n    content: "\\ed5c";\n  }\n  .icon-google-plus:before {\n    content: "\\ed5d";\n  }\n  .icon-google-wallet:before {\n    content: "\\ed5e";\n  }\n  .icon-google:before {\n    content: "\\ed5f";\n  }\n  .icon-gratipay:before {\n    content: "\\ed60";\n  }\n  .icon-grav:before {\n    content: "\\ed61";\n  }\n  .icon-gripfire:before {\n    content: "\\ed62";\n  }\n  .icon-grunt:before {\n    content: "\\ed63";\n  }\n  .icon-gulp:before {\n    content: "\\ed64";\n  }\n  .icon-hacker-news-square:before {\n    content: "\\ed65";\n  }\n  .icon-hacker-news:before {\n    content: "\\ed66";\n  }\n  .icon-hackerrank:before {\n    content: "\\ed67";\n  }\n  .icon-hips:before {\n    content: "\\ed68";\n  }\n  .icon-hire-a-helper:before {\n    content: "\\ed69";\n  }\n  .icon-hooli:before {\n    content: "\\ed6a";\n  }\n  .icon-hornbill:before {\n    content: "\\ed6b";\n  }\n  .icon-hotjar:before {\n    content: "\\ed6c";\n  }\n  .icon-houzz:before {\n    content: "\\ed6d";\n  }\n  .icon-html5:before {\n    content: "\\ed6e";\n  }\n  .icon-hubspot:before {\n    content: "\\ed6f";\n  }\n  .icon-imdb:before {\n    content: "\\ed70";\n  }\n  .icon-instagram:before {\n    content: "\\ed71";\n  }\n  .icon-internet-explorer:before {\n    content: "\\ed72";\n  }\n  .icon-ioxhost:before {\n    content: "\\ed73";\n  }\n  .icon-itunes-note:before {\n    content: "\\ed74";\n  }\n  .icon-itunes:before {\n    content: "\\ed75";\n  }\n  .icon-java:before {\n    content: "\\ed76";\n  }\n  .icon-jedi-order:before {\n    content: "\\ed77";\n  }\n  .icon-jenkins:before {\n    content: "\\ed78";\n  }\n  .icon-joget:before {\n    content: "\\ed79";\n  }\n  .icon-joomla:before {\n    content: "\\ed7a";\n  }\n  .icon-js-square:before {\n    content: "\\ed7b";\n  }\n  .icon-js:before {\n    content: "\\ed7c";\n  }\n  .icon-jsfiddle:before {\n    content: "\\ed7d";\n  }\n  .icon-kaggle:before {\n    content: "\\ed7e";\n  }\n  .icon-keybase:before {\n    content: "\\ed7f";\n  }\n  .icon-keycdn:before {\n    content: "\\ed80";\n  }\n  .icon-kickstarter-k:before {\n    content: "\\ed81";\n  }\n  .icon-kickstarter:before {\n    content: "\\ed82";\n  }\n  .icon-korvue:before {\n    content: "\\ed83";\n  }\n  .icon-laravel:before {\n    content: "\\ed84";\n  }\n  .icon-lastfm-square:before {\n    content: "\\ed85";\n  }\n  .icon-lastfm:before {\n    content: "\\ed86";\n  }\n  .icon-leanpub:before {\n    content: "\\ed87";\n  }\n  .icon-less:before {\n    content: "\\ed88";\n  }\n  .icon-line:before {\n    content: "\\ed89";\n  }\n  .icon-linkedin-in:before {\n    content: "\\ed8a";\n  }\n  .icon-linkedin:before {\n    content: "\\ed8b";\n  }\n  .icon-linode:before {\n    content: "\\ed8c";\n  }\n  .icon-linux:before {\n    content: "\\ed8d";\n  }\n  .icon-lyft:before {\n    content: "\\ed8e";\n  }\n  .icon-magento:before {\n    content: "\\ed8f";\n  }\n  .icon-mailchimp:before {\n    content: "\\ed90";\n  }\n  .icon-mandalorian:before {\n    content: "\\ed91";\n  }\n  .icon-markdown:before {\n    content: "\\ed92";\n  }\n  .icon-mastodon:before {\n    content: "\\ed93";\n  }\n  .icon-maxcdn:before {\n    content: "\\ed94";\n  }\n  .icon-medapps:before {\n    content: "\\ed95";\n  }\n  .icon-medium-m:before {\n    content: "\\ed96";\n  }\n  .icon-medium:before {\n    content: "\\ed97";\n  }\n  .icon-medrt:before {\n    content: "\\ed98";\n  }\n  .icon-meetup:before {\n    content: "\\ed99";\n  }\n  .icon-megaport:before {\n    content: "\\ed9a";\n  }\n  .icon-microsoft:before {\n    content: "\\ed9b";\n  }\n  .icon-mix:before {\n    content: "\\ed9c";\n  }\n  .icon-mixcloud:before {\n    content: "\\ed9d";\n  }\n  .icon-mizuni:before {\n    content: "\\ed9e";\n  }\n  .icon-modx:before {\n    content: "\\ed9f";\n  }\n  .icon-monero:before {\n    content: "\\eda0";\n  }\n  .icon-napster:before {\n    content: "\\eda1";\n  }\n  .icon-neos:before {\n    content: "\\eda2";\n  }\n  .icon-nimblr:before {\n    content: "\\eda3";\n  }\n  .icon-nintendo-switch:before {\n    content: "\\eda4";\n  }\n  .icon-node-js:before {\n    content: "\\eda5";\n  }\n  .icon-node:before {\n    content: "\\eda6";\n  }\n  .icon-npm:before {\n    content: "\\eda7";\n  }\n  .icon-ns8:before {\n    content: "\\eda8";\n  }\n  .icon-nutritionix:before {\n    content: "\\eda9";\n  }\n  .icon-odnoklassniki-square:before {\n    content: "\\edaa";\n  }\n  .icon-odnoklassniki:before {\n    content: "\\edab";\n  }\n  .icon-old-republic:before {\n    content: "\\edac";\n  }\n  .icon-opencart:before {\n    content: "\\edad";\n  }\n  .icon-openid:before {\n    content: "\\edae";\n  }\n  .icon-opera:before {\n    content: "\\edaf";\n  }\n  .icon-optin-monster:before {\n    content: "\\edb0";\n  }\n  .icon-osi:before {\n    content: "\\edb1";\n  }\n  .icon-page4:before {\n    content: "\\edb2";\n  }\n  .icon-pagelines:before {\n    content: "\\edb3";\n  }\n  .icon-palfed:before {\n    content: "\\edb4";\n  }\n  .icon-patreon:before {\n    content: "\\edb5";\n  }\n  .icon-paypal:before {\n    content: "\\edb6";\n  }\n  .icon-periscope:before {\n    content: "\\edb7";\n  }\n  .icon-phabricator:before {\n    content: "\\edb8";\n  }\n  .icon-phoenix-framework:before {\n    content: "\\edb9";\n  }\n  .icon-phoenix-squadron:before {\n    content: "\\edba";\n  }\n  .icon-php:before {\n    content: "\\edbb";\n  }\n  .icon-pied-piper-alt:before {\n    content: "\\edbc";\n  }\n  .icon-pied-piper-hat:before {\n    content: "\\edbd";\n  }\n  .icon-pied-piper-pp:before {\n    content: "\\edbe";\n  }\n  .icon-pied-piper:before {\n    content: "\\edbf";\n  }\n  .icon-pinterest-p:before {\n    content: "\\edc0";\n  }\n  .icon-pinterest-square:before {\n    content: "\\edc1";\n  }\n  .icon-pinterest:before {\n    content: "\\edc2";\n  }\n  .icon-playstation:before {\n    content: "\\edc3";\n  }\n  .icon-product-hunt:before {\n    content: "\\edc4";\n  }\n  .icon-pushed:before {\n    content: "\\edc5";\n  }\n  .icon-python:before {\n    content: "\\edc6";\n  }\n  .icon-qq:before {\n    content: "\\edc7";\n  }\n  .icon-quinscape:before {\n    content: "\\edc8";\n  }\n  .icon-quora:before {\n    content: "\\edc9";\n  }\n  .icon-r-project:before {\n    content: "\\edca";\n  }\n  .icon-ravelry:before {\n    content: "\\edcb";\n  }\n  .icon-react:before {\n    content: "\\edcc";\n  }\n  .icon-readme:before {\n    content: "\\edcd";\n  }\n  .icon-rebel:before {\n    content: "\\edce";\n  }\n  .icon-red-river:before {\n    content: "\\edcf";\n  }\n  .icon-reddit-alien:before {\n    content: "\\edd0";\n  }\n  .icon-reddit-square:before {\n    content: "\\edd1";\n  }\n  .icon-reddit:before {\n    content: "\\edd2";\n  }\n  .icon-rendact:before {\n    content: "\\edd3";\n  }\n  .icon-renren:before {\n    content: "\\edd4";\n  }\n  .icon-replyd:before {\n    content: "\\edd5";\n  }\n  .icon-researchgate:before {\n    content: "\\edd6";\n  }\n  .icon-resolving:before {\n    content: "\\edd7";\n  }\n  .icon-rev:before {\n    content: "\\edd8";\n  }\n  .icon-rocketchat:before {\n    content: "\\edd9";\n  }\n  .icon-rockrms:before {\n    content: "\\edda";\n  }\n  .icon-safari:before {\n    content: "\\eddb";\n  }\n  .icon-sass:before {\n    content: "\\eddc";\n  }\n  .icon-schlix:before {\n    content: "\\eddd";\n  }\n  .icon-scribd:before {\n    content: "\\edde";\n  }\n  .icon-searchengin:before {\n    content: "\\eddf";\n  }\n  .icon-sellcast:before {\n    content: "\\ede0";\n  }\n  .icon-sellsy:before {\n    content: "\\ede1";\n  }\n  .icon-servicestack:before {\n    content: "\\ede2";\n  }\n  .icon-shirtsinbulk:before {\n    content: "\\ede3";\n  }\n  .icon-shopware:before {\n    content: "\\ede4";\n  }\n  .icon-simplybuilt:before {\n    content: "\\ede5";\n  }\n  .icon-sistrix:before {\n    content: "\\ede6";\n  }\n  .icon-sith:before {\n    content: "\\ede7";\n  }\n  .icon-skyatlas:before {\n    content: "\\ede8";\n  }\n  .icon-skype:before {\n    content: "\\ede9";\n  }\n  .icon-slack-hash:before {\n    content: "\\edea";\n  }\n  .icon-slack:before {\n    content: "\\edeb";\n  }\n  .icon-slideshare:before {\n    content: "\\edec";\n  }\n  .icon-snapchat-ghost:before {\n    content: "\\eded";\n  }\n  .icon-snapchat-square:before {\n    content: "\\edee";\n  }\n  .icon-snapchat:before {\n    content: "\\edef";\n  }\n  .icon-soundcloud:before {\n    content: "\\edf0";\n  }\n  .icon-speakap:before {\n    content: "\\edf1";\n  }\n  .icon-spotify:before {\n    content: "\\edf2";\n  }\n  .icon-squarespace:before {\n    content: "\\edf3";\n  }\n  .icon-stack-exchange:before {\n    content: "\\edf4";\n  }\n  .icon-stack-overflow:before {\n    content: "\\edf5";\n  }\n  .icon-staylinked:before {\n    content: "\\edf6";\n  }\n  .icon-steam-square:before {\n    content: "\\edf7";\n  }\n  .icon-steam-symbol:before {\n    content: "\\edf8";\n  }\n  .icon-steam:before {\n    content: "\\edf9";\n  }\n  .icon-sticker-mule:before {\n    content: "\\edfa";\n  }\n  .icon-strava:before {\n    content: "\\edfb";\n  }\n  .icon-stripe-s:before {\n    content: "\\edfc";\n  }\n  .icon-stripe:before {\n    content: "\\edfd";\n  }\n  .icon-studiovinari:before {\n    content: "\\edfe";\n  }\n  .icon-stumbleupon-circle:before {\n    content: "\\edff";\n  }\n  .icon-stumbleupon:before {\n    content: "\\ee00";\n  }\n  .icon-superpowers:before {\n    content: "\\ee01";\n  }\n  .icon-supple:before {\n    content: "\\ee02";\n  }\n  .icon-teamspeak:before {\n    content: "\\ee03";\n  }\n  .icon-telegram-plane:before {\n    content: "\\ee04";\n  }\n  .icon-telegram:before {\n    content: "\\ee05";\n  }\n  .icon-tencent-weibo:before {\n    content: "\\ee06";\n  }\n  .icon-the-red-yeti:before {\n    content: "\\ee07";\n  }\n  .icon-themeco:before {\n    content: "\\ee08";\n  }\n  .icon-themeisle:before {\n    content: "\\ee09";\n  }\n  .icon-trade-federation:before {\n    content: "\\ee0a";\n  }\n  .icon-trello:before {\n    content: "\\ee0b";\n  }\n  .icon-tripadvisor:before {\n    content: "\\ee0c";\n  }\n  .icon-tumblr-square:before {\n    content: "\\ee0d";\n  }\n  .icon-tumblr:before {\n    content: "\\ee0e";\n  }\n  .icon-twitch:before {\n    content: "\\ee0f";\n  }\n  .icon-twitter-square:before {\n    content: "\\ee10";\n  }\n  .icon-twitter:before {\n    content: "\\ee11";\n  }\n  .icon-typo3:before {\n    content: "\\ee12";\n  }\n  .icon-uber:before {\n    content: "\\ee13";\n  }\n  .icon-uikit:before {\n    content: "\\ee14";\n  }\n  .icon-uniregistry:before {\n    content: "\\ee15";\n  }\n  .icon-untappd:before {\n    content: "\\ee16";\n  }\n  .icon-usb:before {\n    content: "\\ee17";\n  }\n  .icon-ussunnah:before {\n    content: "\\ee18";\n  }\n  .icon-vaadin:before {\n    content: "\\ee19";\n  }\n  .icon-viacoin:before {\n    content: "\\ee1a";\n  }\n  .icon-viadeo-square:before {\n    content: "\\ee1b";\n  }\n  .icon-viadeo:before {\n    content: "\\ee1c";\n  }\n  .icon-viber:before {\n    content: "\\ee1d";\n  }\n  .icon-vimeo-square:before {\n    content: "\\ee1e";\n  }\n  .icon-vimeo-v:before {\n    content: "\\ee1f";\n  }\n  .icon-vimeo:before {\n    content: "\\ee20";\n  }\n  .icon-vine:before {\n    content: "\\ee21";\n  }\n  .icon-vk:before {\n    content: "\\ee22";\n  }\n  .icon-vnv:before {\n    content: "\\ee23";\n  }\n  .icon-vuejs:before {\n    content: "\\ee24";\n  }\n  .icon-weebly:before {\n    content: "\\ee25";\n  }\n  .icon-weibo:before {\n    content: "\\ee26";\n  }\n  .icon-weixin:before {\n    content: "\\ee27";\n  }\n  .icon-whatsapp-square:before {\n    content: "\\ee28";\n  }\n  .icon-whatsapp:before {\n    content: "\\ee29";\n  }\n  .icon-whmcs:before {\n    content: "\\ee2a";\n  }\n  .icon-wikipedia-w:before {\n    content: "\\ee2b";\n  }\n  .icon-windows:before {\n    content: "\\ee2c";\n  }\n  .icon-wix:before {\n    content: "\\ee2d";\n  }\n  .icon-wolf-pack-battalion:before {\n    content: "\\ee2e";\n  }\n  .icon-wordpress-simple:before {\n    content: "\\ee2f";\n  }\n  .icon-wordpress:before {\n    content: "\\ee30";\n  }\n  .icon-wpbeginner:before {\n    content: "\\ee31";\n  }\n  .icon-wpexplorer:before {\n    content: "\\ee32";\n  }\n  .icon-wpforms:before {\n    content: "\\ee33";\n  }\n  .icon-xbox:before {\n    content: "\\ee34";\n  }\n  .icon-xing-square:before {\n    content: "\\ee35";\n  }\n  .icon-xing:before {\n    content: "\\ee36";\n  }\n  .icon-y-combinator:before {\n    content: "\\ee37";\n  }\n  .icon-yahoo:before {\n    content: "\\ee38";\n  }\n  .icon-yandex-international:before {\n    content: "\\ee39";\n  }\n  .icon-yandex:before {\n    content: "\\ee3a";\n  }\n  .icon-yelp:before {\n    content: "\\ee3b";\n  }\n  .icon-yoast:before {\n    content: "\\ee3c";\n  }\n  .icon-youtube-square:before {\n    content: "\\ee3d";\n  }\n  .icon-youtube:before {\n    content: "\\ee3e";\n  }\n  .icon-zhihu:before {\n    content: "\\ee3f";\n  }\n\n  .icon-line-open:before {\n    content: "\\ea21";\n  }\n  .icon-line-bag:before {\n    content: "\\ea23";\n  }\n  .icon-line-grid-2:before {\n    content: "\\ea24";\n  }\n  .icon-line-content-left:before {\n    content: "\\ea25";\n  }\n  .icon-line-content-right:before {\n    content: "\\ea26";\n  }\n  .icon-line-esc:before {\n    content: "\\ea27";\n  }\n  .icon-line-alt:before {\n    content: "\\ea28";\n  }\n  .icon-line-marquee-plus:before {\n    content: "\\ea29";\n  }\n  .icon-line-marquee-minus:before {\n    content: "\\ea2a";\n  }\n  .icon-line-marquee:before {\n    content: "\\ea2b";\n  }\n  .icon-line-square-check:before {\n    content: "\\ea2d";\n  }\n  .icon-line-paragraph:before {\n    content: "\\ea2e";\n  }\n  .icon-line-ribbon:before {\n    content: "\\ea2f";\n  }\n  .icon-line-location-2:before {\n    content: "\\ea1c";\n  }\n  .icon-line-circle-check:before {\n    content: "\\ea1d";\n  }\n  .icon-line-circle-cross1:before {\n    content: "\\ea1e";\n  }\n  .icon-line-reply:before {\n    content: "\\ea1f";\n  }\n  .icon-line-paper-stack:before {\n    content: "\\ea20";\n  }\n  .icon-line-stack-2:before {\n    content: "\\ea1a";\n  }\n  .icon-line-stack:before {\n    content: "\\ea1b";\n  }\n  .icon-line-activity:before {\n    content: "\\e900";\n  }\n  .icon-line-air-play:before {\n    content: "\\e901";\n  }\n  .icon-line-alert-circle:before {\n    content: "\\e902";\n  }\n  .icon-line-alert-octagon:before {\n    content: "\\e903";\n  }\n  .icon-line-alert-triangle:before {\n    content: "\\e904";\n  }\n  .icon-line-align-center:before {\n    content: "\\e905";\n  }\n  .icon-line-align-justify:before {\n    content: "\\e906";\n  }\n  .icon-line-align-left:before {\n    content: "\\e907";\n  }\n  .icon-line-align-right:before {\n    content: "\\e908";\n  }\n  .icon-line-anchor:before {\n    content: "\\e909";\n  }\n  .icon-line-aperture:before {\n    content: "\\e90a";\n  }\n  .icon-line-archive:before {\n    content: "\\e90b";\n  }\n  .icon-line-arrow-down:before {\n    content: "\\e90c";\n  }\n  .icon-line-arrow-down-circle:before {\n    content: "\\e90d";\n  }\n  .icon-line-arrow-down-left:before {\n    content: "\\e90e";\n  }\n  .icon-line-arrow-down-right:before {\n    content: "\\e90f";\n  }\n  .icon-line-arrow-left:before {\n    content: "\\e910";\n  }\n  .icon-line-arrow-left-circle:before {\n    content: "\\e911";\n  }\n  .icon-line-arrow-right:before {\n    content: "\\e912";\n  }\n  .icon-line-arrow-right-circle:before {\n    content: "\\e913";\n  }\n  .icon-line-arrow-up:before {\n    content: "\\e914";\n  }\n  .icon-line-arrow-up-circle:before {\n    content: "\\e915";\n  }\n  .icon-line-arrow-up-left:before {\n    content: "\\e916";\n  }\n  .icon-line-arrow-up-right:before {\n    content: "\\e917";\n  }\n  .icon-line-at-sign:before {\n    content: "\\e918";\n  }\n  .icon-line-award:before {\n    content: "\\e919";\n  }\n  .icon-line-bar-graph:before {\n    content: "\\e91a";\n  }\n  .icon-line-bar-graph-2:before {\n    content: "\\e91b";\n  }\n  .icon-line-battery:before {\n    content: "\\e91c";\n  }\n  .icon-line-battery-charging:before {\n    content: "\\e91d";\n  }\n  .icon-line-bell:before {\n    content: "\\e91e";\n  }\n  .icon-line-bell-off:before {\n    content: "\\e91f";\n  }\n  .icon-line-bluetooth:before {\n    content: "\\e920";\n  }\n  .icon-line-bold:before {\n    content: "\\e921";\n  }\n  .icon-line-book:before {\n    content: "\\e922";\n  }\n  .icon-line-book-open:before {\n    content: "\\e923";\n  }\n  .icon-line-bookmark:before {\n    content: "\\e924";\n  }\n  .icon-line-box:before {\n    content: "\\e925";\n  }\n  .icon-line-briefcase:before {\n    content: "\\e926";\n  }\n  .icon-line-calendar:before {\n    content: "\\e927";\n  }\n  .icon-line-camera:before {\n    content: "\\e928";\n  }\n  .icon-line-camera-off:before {\n    content: "\\e929";\n  }\n  .icon-line-cast:before {\n    content: "\\e92a";\n  }\n  .icon-line-check:before {\n    content: "\\e92b";\n  }\n  .icon-line-check-circle:before {\n    content: "\\e92c";\n  }\n  .icon-line-check-square:before {\n    content: "\\e92d";\n  }\n  .icon-line-chevron-down:before {\n    content: "\\e92e";\n  }\n  .icon-line-chevron-left:before {\n    content: "\\e92f";\n  }\n  .icon-line-chevron-right:before {\n    content: "\\e930";\n  }\n  .icon-line-chevron-up:before {\n    content: "\\e931";\n  }\n  .icon-line-chevrons-down:before {\n    content: "\\e932";\n  }\n  .icon-line-chevrons-left:before {\n    content: "\\e933";\n  }\n  .icon-line-chevrons-right:before {\n    content: "\\e934";\n  }\n  .icon-line-chevrons-up:before {\n    content: "\\e935";\n  }\n  .icon-line-chrome:before {\n    content: "\\e936";\n  }\n  .icon-line-record:before,\n  .icon-line-stop:before {\n    content: "\\e937";\n  }\n  .icon-line-clipboard:before {\n    content: "\\e938";\n  }\n  .icon-line-clock:before {\n    content: "\\e939";\n  }\n  .icon-line-cloud:before {\n    content: "\\e93a";\n  }\n  .icon-line-cloud-drizzle:before {\n    content: "\\e93b";\n  }\n  .icon-line-cloud-lightning:before {\n    content: "\\e93c";\n  }\n  .icon-line-cloud-off:before {\n    content: "\\e93d";\n  }\n  .icon-line-cloud-rain:before {\n    content: "\\e93e";\n  }\n  .icon-line-cloud-snow:before {\n    content: "\\e93f";\n  }\n  .icon-line-code:before {\n    content: "\\e940";\n  }\n  .icon-line-codepen:before {\n    content: "\\e941";\n  }\n  .icon-line-codesandbox:before {\n    content: "\\e942";\n  }\n  .icon-line-coffee:before {\n    content: "\\e943";\n  }\n  .icon-line-columns:before {\n    content: "\\e944";\n  }\n  .icon-line-command:before {\n    content: "\\e945";\n  }\n  .icon-line-compass:before {\n    content: "\\e946";\n  }\n  .icon-line-copy:before {\n    content: "\\e947";\n  }\n  .icon-line-corner-down-left:before {\n    content: "\\e948";\n  }\n  .icon-line-corner-down-right:before {\n    content: "\\e949";\n  }\n  .icon-line-corner-left-down:before {\n    content: "\\e94a";\n  }\n  .icon-line-corner-left-up:before {\n    content: "\\e94b";\n  }\n  .icon-line-corner-right-down:before {\n    content: "\\e94c";\n  }\n  .icon-line-corner-right-up:before {\n    content: "\\e94d";\n  }\n  .icon-line-corner-up-left:before {\n    content: "\\e94e";\n  }\n  .icon-line-corner-up-right:before {\n    content: "\\e94f";\n  }\n  .icon-line-cpu:before {\n    content: "\\e950";\n  }\n  .icon-line-credit-card:before {\n    content: "\\e951";\n  }\n  .icon-line-crop:before {\n    content: "\\e952";\n  }\n  .icon-line-crosshair:before {\n    content: "\\e953";\n  }\n  .icon-line-database:before {\n    content: "\\e954";\n  }\n  .icon-line-delete:before {\n    content: "\\e955";\n  }\n  .icon-line-disc:before {\n    content: "\\e956";\n  }\n  .icon-line-dollar-sign:before {\n    content: "\\e957";\n  }\n  .icon-line-download:before {\n    content: "\\e958";\n  }\n  .icon-line-cloud-download:before {\n    content: "\\e959";\n  }\n  .icon-line-droplet:before {\n    content: "\\e95a";\n  }\n  .icon-line-edit:before {\n    content: "\\e95b";\n  }\n  .icon-line-edit-2:before {\n    content: "\\e95c";\n  }\n  .icon-line-edit-3:before {\n    content: "\\e95d";\n  }\n  .icon-line-external-link:before {\n    content: "\\e95e";\n  }\n  .icon-line-eye:before {\n    content: "\\e95f";\n  }\n  .icon-line-eye-off:before {\n    content: "\\e960";\n  }\n  .icon-line-facebook:before {\n    content: "\\e961";\n  }\n  .icon-line-fast-forward:before {\n    content: "\\e962";\n  }\n  .icon-line-feather:before {\n    content: "\\e963";\n  }\n  .icon-line-figma:before {\n    content: "\\e964";\n  }\n  .icon-line-file:before {\n    content: "\\e965";\n  }\n  .icon-line-file-subtract:before {\n    content: "\\e966";\n  }\n  .icon-line-file-add:before {\n    content: "\\e967";\n  }\n  .icon-line-paper:before {\n    content: "\\e968";\n  }\n  .icon-line-film:before {\n    content: "\\e969";\n  }\n  .icon-line-filter:before {\n    content: "\\e96a";\n  }\n  .icon-line-flag:before {\n    content: "\\e96b";\n  }\n  .icon-line-folder:before {\n    content: "\\e96c";\n  }\n  .icon-line-folder-minus:before {\n    content: "\\e96d";\n  }\n  .icon-line-folder-plus:before {\n    content: "\\e96e";\n  }\n  .icon-line-framer:before {\n    content: "\\e96f";\n  }\n  .icon-line-frown:before {\n    content: "\\e970";\n  }\n  .icon-line-gift:before {\n    content: "\\e971";\n  }\n  .icon-line-git-branch:before {\n    content: "\\e972";\n  }\n  .icon-line-git-commit:before {\n    content: "\\e973";\n  }\n  .icon-line-git-merge:before {\n    content: "\\e974";\n  }\n  .icon-line-git-pull-request:before {\n    content: "\\e975";\n  }\n  .icon-line-github:before {\n    content: "\\e976";\n  }\n  .icon-line-gitlab:before {\n    content: "\\e977";\n  }\n  .icon-line-globe:before {\n    content: "\\e978";\n  }\n  .icon-line-grid:before {\n    content: "\\e979";\n  }\n  .icon-line-hard-drive:before {\n    content: "\\e97a";\n  }\n  .icon-line-hash:before {\n    content: "\\e97b";\n  }\n  .icon-line-headphones:before {\n    content: "\\e97c";\n  }\n  .icon-line-heart:before {\n    content: "\\e97d";\n  }\n  .icon-line-help-circle:before {\n    content: "\\e97e";\n  }\n  .icon-line-hexagon:before {\n    content: "\\e97f";\n  }\n  .icon-line-home:before {\n    content: "\\e980";\n  }\n  .icon-line-image:before {\n    content: "\\e981";\n  }\n  .icon-line-inbox:before {\n    content: "\\e982";\n  }\n  .icon-line-info:before {\n    content: "\\e983";\n  }\n  .icon-line-instagram:before {\n    content: "\\e984";\n  }\n  .icon-line-italic:before {\n    content: "\\e985";\n  }\n  .icon-line-key:before {\n    content: "\\e986";\n  }\n  .icon-line-layers:before {\n    content: "\\e987";\n  }\n  .icon-line-layout:before {\n    content: "\\e988";\n  }\n  .icon-line-help:before {\n    content: "\\e989";\n  }\n  .icon-line-link:before {\n    content: "\\e98a";\n  }\n  .icon-line-link-2:before {\n    content: "\\e98b";\n  }\n  .icon-line-linkedin:before {\n    content: "\\e98c";\n  }\n  .icon-line-list:before {\n    content: "\\e98d";\n  }\n  .icon-line-loader:before {\n    content: "\\e98e";\n  }\n  .icon-line-lock:before {\n    content: "\\e98f";\n  }\n  .icon-line-log-in:before {\n    content: "\\e990";\n  }\n  .icon-line-log-out:before {\n    content: "\\e991";\n  }\n  .icon-line-mail:before {\n    content: "\\e992";\n  }\n  .icon-line-map:before {\n    content: "\\e993";\n  }\n  .icon-line-map-pin:before {\n    content: "\\e994";\n  }\n  .icon-line-expand:before {\n    content: "\\e995";\n  }\n  .icon-line-maximize:before {\n    content: "\\e996";\n  }\n  .icon-line-meh:before {\n    content: "\\e997";\n  }\n  .icon-line-menu:before {\n    content: "\\e998";\n  }\n  .icon-line-message-circle:before {\n    content: "\\e999";\n  }\n  .icon-line-speech-bubble:before {\n    content: "\\e99a";\n  }\n  .icon-line-microphone:before {\n    content: "\\e99b";\n  }\n  .icon-line-microphone-off:before {\n    content: "\\e99c";\n  }\n  .icon-line-contract:before {\n    content: "\\e99d";\n  }\n  .icon-line-minimize:before {\n    content: "\\e99e";\n  }\n  .icon-line-minus:before {\n    content: "\\e99f";\n  }\n  .icon-line-circle-minus:before {\n    content: "\\e9a0";\n  }\n  .icon-line-square-minus:before {\n    content: "\\e9a1";\n  }\n  .icon-line-monitor:before {\n    content: "\\e9a2";\n  }\n  .icon-line-moon:before {\n    content: "\\e9a3";\n  }\n  .icon-line-more-horizontal:before,\n  .icon-line-ellipsis:before {\n    content: "\\e9a4";\n  }\n  .icon-line-more-vertical:before {\n    content: "\\e9a5";\n  }\n  .icon-line-mouse-pointer:before {\n    content: "\\e9a6";\n  }\n  .icon-line-move:before {\n    content: "\\e9a7";\n  }\n  .icon-line-music:before {\n    content: "\\e9a8";\n  }\n  .icon-line-location:before {\n    content: "\\e9a9";\n  }\n  .icon-line-navigation:before {\n    content: "\\e9aa";\n  }\n  .icon-line-octagon:before {\n    content: "\\e9ab";\n  }\n  .icon-line-package:before {\n    content: "\\e9ac";\n  }\n  .icon-line-paper-clip:before {\n    content: "\\e9ad";\n  }\n  .icon-line-pause:before {\n    content: "\\e9ae";\n  }\n  .icon-line-pause-circle:before {\n    content: "\\e9af";\n  }\n  .icon-line-pen-tool:before {\n    content: "\\e9b0";\n  }\n  .icon-line-percent:before {\n    content: "\\e9b1";\n  }\n  .icon-line-phone:before {\n    content: "\\e9b2";\n  }\n  .icon-line-phone-call:before {\n    content: "\\e9b3";\n  }\n  .icon-line-phone-forwarded:before {\n    content: "\\e9b4";\n  }\n  .icon-line-phone-incoming:before {\n    content: "\\e9b5";\n  }\n  .icon-line-phone-missed:before {\n    content: "\\e9b6";\n  }\n  .icon-line-phone-off:before {\n    content: "\\e9b7";\n  }\n  .icon-line-phone-outgoing:before {\n    content: "\\e9b8";\n  }\n  .icon-line-pie-graph:before {\n    content: "\\e9b9";\n  }\n  .icon-line-play:before {\n    content: "\\e9ba";\n  }\n  .icon-line-play-circle:before {\n    content: "\\e9bb";\n  }\n  .icon-line-plus:before {\n    content: "\\e9bc";\n  }\n  .icon-line-circle-plus:before {\n    content: "\\e9bd";\n  }\n  .icon-line-square-plus:before {\n    content: "\\e9be";\n  }\n  .icon-line-pocket:before {\n    content: "\\e9bf";\n  }\n  .icon-line-power:before {\n    content: "\\e9c0";\n  }\n  .icon-line-printer:before {\n    content: "\\e9c1";\n  }\n  .icon-line-signal:before {\n    content: "\\e9c2";\n  }\n  .icon-line-refresh-ccw:before {\n    content: "\\e9c3";\n  }\n  .icon-line-refresh-cw:before {\n    content: "\\e9c4";\n  }\n  .icon-line-repeat:before {\n    content: "\\e9c5";\n  }\n  .icon-line-rewind:before {\n    content: "\\e9c6";\n  }\n  .icon-line-reload:before {\n    content: "\\e9c7";\n  }\n  .icon-line-rotate-cw:before {\n    content: "\\e9c8";\n  }\n  .icon-line-rss:before {\n    content: "\\e9c9";\n  }\n  .icon-line-save:before {\n    content: "\\e9ca";\n  }\n  .icon-line-scissors:before {\n    content: "\\e9cb";\n  }\n  .icon-line-search:before {\n    content: "\\e9cc";\n  }\n  .icon-line-send:before {\n    content: "\\e9cd";\n  }\n  .icon-line-server:before {\n    content: "\\e9ce";\n  }\n  .icon-line-cog:before {\n    content: "\\e9cf";\n  }\n  .icon-line-outbox:before {\n    content: "\\e9d0";\n  }\n  .icon-line-share:before {\n    content: "\\e9d1";\n  }\n  .icon-line-shield:before {\n    content: "\\e9d2";\n  }\n  .icon-line-shield-off:before {\n    content: "\\e9d3";\n  }\n  .icon-line-shopping-bag:before {\n    content: "\\e9d4";\n  }\n  .icon-line-shopping-cart:before {\n    content: "\\e9d5";\n  }\n  .icon-line-shuffle:before {\n    content: "\\e9d6";\n  }\n  .icon-line-sidebar:before {\n    content: "\\e9d7";\n  }\n  .icon-line-skip-back:before {\n    content: "\\e9d8";\n  }\n  .icon-line-skip-forward:before {\n    content: "\\e9d9";\n  }\n  .icon-line-slack:before {\n    content: "\\e9da";\n  }\n  .icon-line-ban:before {\n    content: "\\e9db";\n  }\n  .icon-line-sliders:before {\n    content: "\\e9dc";\n  }\n  .icon-line-smartphone:before {\n    content: "\\e9dd";\n  }\n  .icon-line-smile:before {\n    content: "\\e9de";\n  }\n  .icon-line-speaker:before {\n    content: "\\e9df";\n  }\n  .icon-line-square:before {\n    content: "\\e9e0";\n  }\n  .icon-line-star:before {\n    content: "\\e9e1";\n  }\n  .icon-line-stop-circle:before {\n    content: "\\e9e2";\n  }\n  .icon-line-sun:before {\n    content: "\\e9e3";\n  }\n  .icon-line-sunrise:before {\n    content: "\\e9e4";\n  }\n  .icon-line-sunset:before {\n    content: "\\e9e5";\n  }\n  .icon-line-tablet:before {\n    content: "\\e9e6";\n  }\n  .icon-line-tag:before {\n    content: "\\e9e7";\n  }\n  .icon-line-target:before {\n    content: "\\e9e8";\n  }\n  .icon-line-terminal:before {\n    content: "\\e9e9";\n  }\n  .icon-line-thermometer:before {\n    content: "\\e9ea";\n  }\n  .icon-line-thumbs-down:before {\n    content: "\\e9eb";\n  }\n  .icon-line-thumbs-up:before {\n    content: "\\e9ec";\n  }\n  .icon-line-toggle:before {\n    content: "\\e9ed";\n  }\n  .icon-line-toggle-right:before {\n    content: "\\e9ee";\n  }\n  .icon-line-tool:before {\n    content: "\\e9ef";\n  }\n  .icon-line-trash:before {\n    content: "\\e9f0";\n  }\n  .icon-line-trash-2:before {\n    content: "\\e9f1";\n  }\n  .icon-line-trello:before {\n    content: "\\e9f2";\n  }\n  .icon-line-trending-down:before {\n    content: "\\e9f3";\n  }\n  .icon-line-trending-up:before {\n    content: "\\e9f4";\n  }\n  .icon-line-triangle:before {\n    content: "\\e9f5";\n  }\n  .icon-line-truck:before {\n    content: "\\e9f6";\n  }\n  .icon-line-tv:before {\n    content: "\\e9f7";\n  }\n  .icon-line-twitch:before {\n    content: "\\e9f8";\n  }\n  .icon-line-twitter:before {\n    content: "\\e9f9";\n  }\n  .icon-line-type:before {\n    content: "\\e9fa";\n  }\n  .icon-line-umbrella:before {\n    content: "\\e9fb";\n  }\n  .icon-line-underline:before {\n    content: "\\e9fc";\n  }\n  .icon-line-unlock:before {\n    content: "\\e9fd";\n  }\n  .icon-line-upload:before {\n    content: "\\e9fe";\n  }\n  .icon-line-cloud-upload:before {\n    content: "\\e9ff";\n  }\n  .icon-line-head:before {\n    content: "\\ea00";\n  }\n  .icon-line-user-check:before {\n    content: "\\ea01";\n  }\n  .icon-line-user-minus:before {\n    content: "\\ea02";\n  }\n  .icon-line-user-plus:before {\n    content: "\\ea03";\n  }\n  .icon-line-user-cross:before {\n    content: "\\ea04";\n  }\n  .icon-line-users:before {\n    content: "\\ea05";\n  }\n  .icon-line-video:before {\n    content: "\\ea06";\n  }\n  .icon-line-video-off:before {\n    content: "\\ea07";\n  }\n  .icon-line-voicemail:before {\n    content: "\\ea08";\n  }\n  .icon-line-volume-off:before {\n    content: "\\ea09";\n  }\n  .icon-line-volume-1:before {\n    content: "\\ea0a";\n  }\n  .icon-line-volume:before {\n    content: "\\ea0b";\n  }\n  .icon-line-mute:before {\n    content: "\\ea0c";\n  }\n  .icon-line-watch:before {\n    content: "\\ea0d";\n  }\n  .icon-line-wifi:before {\n    content: "\\ea0e";\n  }\n  .icon-line-wifi-off:before {\n    content: "\\ea0f";\n  }\n  .icon-line-wind:before {\n    content: "\\ea10";\n  }\n  .icon-line-cross:before {\n    content: "\\ea11";\n  }\n  .icon-line-circle-cross:before {\n    content: "\\ea12";\n  }\n  .icon-line-cross-octagon:before {\n    content: "\\ea13";\n  }\n  .icon-line-square-cross:before {\n    content: "\\ea14";\n  }\n  .icon-line-youtube:before {\n    content: "\\ea15";\n  }\n  .icon-line-zap:before {\n    content: "\\ea16";\n  }\n  .icon-line-zap-off:before {\n    content: "\\ea17";\n  }\n  .icon-line-zoom-in:before {\n    content: "\\ea18";\n  }\n  .icon-line-zoom-out:before {\n    content: "\\ea19";\n  }\n\n  .icon-line2-user-female:before {\n    content: "\\e000";\n  }\n  .icon-line2-user-follow:before {\n    content: "\\e002";\n  }\n  .icon-line2-user-following:before {\n    content: "\\e003";\n  }\n  .icon-line2-user-unfollow:before {\n    content: "\\e004";\n  }\n  .icon-line2-trophy:before {\n    content: "\\e006";\n  }\n  .icon-line2-screen-smartphone:before {\n    content: "\\e010";\n  }\n  .icon-line2-screen-desktop:before {\n    content: "\\e011";\n  }\n  .icon-line2-plane:before {\n    content: "\\e012";\n  }\n  .icon-line2-notebook:before {\n    content: "\\e013";\n  }\n  .icon-line2-moustache:before {\n    content: "\\e014";\n  }\n  .icon-line2-mouse:before {\n    content: "\\e015";\n  }\n  .icon-line2-magnet:before {\n    content: "\\e016";\n  }\n  .icon-line2-energy:before {\n    content: "\\e020";\n  }\n  .icon-line2-emoticon-smile:before {\n    content: "\\e021";\n  }\n  .icon-line2-disc:before {\n    content: "\\e022";\n  }\n  .icon-line2-cursor-move:before {\n    content: "\\e023";\n  }\n  .icon-line2-crop:before {\n    content: "\\e024";\n  }\n  .icon-line2-credit-card:before {\n    content: "\\e025";\n  }\n  .icon-line2-chemistry:before {\n    content: "\\e026";\n  }\n  .icon-line2-user:before {\n    content: "\\e005";\n  }\n  .icon-line2-speedometer:before {\n    content: "\\e007";\n  }\n  .icon-line2-social-youtube:before {\n    content: "\\e008";\n  }\n  .icon-line2-social-twitter:before {\n    content: "\\e009";\n  }\n  .icon-line2-social-tumblr:before {\n    content: "\\e00a";\n  }\n  .icon-line2-social-facebook:before {\n    content: "\\e00b";\n  }\n  .icon-line2-social-dropbox:before {\n    content: "\\e00c";\n  }\n  .icon-line2-social-dribbble:before {\n    content: "\\e00d";\n  }\n  .icon-line2-shield:before {\n    content: "\\e00e";\n  }\n  .icon-line2-screen-tablet:before {\n    content: "\\e00f";\n  }\n  .icon-line2-magic-wand:before {\n    content: "\\e017";\n  }\n  .icon-line2-hourglass:before {\n    content: "\\e018";\n  }\n  .icon-line2-graduation:before {\n    content: "\\e019";\n  }\n  .icon-line2-ghost:before {\n    content: "\\e01a";\n  }\n  .icon-line2-game-controller:before {\n    content: "\\e01b";\n  }\n  .icon-line2-fire:before {\n    content: "\\e01c";\n  }\n  .icon-line2-eyeglasses:before {\n    content: "\\e01d";\n  }\n  .icon-line2-envelope-open:before {\n    content: "\\e01e";\n  }\n  .icon-line2-envelope-letter:before {\n    content: "\\e01f";\n  }\n  .icon-line2-bell:before {\n    content: "\\e027";\n  }\n  .icon-line2-badge:before {\n    content: "\\e028";\n  }\n  .icon-line2-anchor:before {\n    content: "\\e029";\n  }\n  .icon-line2-wallet:before {\n    content: "\\e02a";\n  }\n  .icon-line2-vector:before {\n    content: "\\e02b";\n  }\n  .icon-line2-speech:before {\n    content: "\\e02c";\n  }\n  .icon-line2-puzzle:before {\n    content: "\\e02d";\n  }\n  .icon-line2-printer:before {\n    content: "\\e02e";\n  }\n  .icon-line2-present:before {\n    content: "\\e02f";\n  }\n  .icon-line2-playlist:before {\n    content: "\\e030";\n  }\n  .icon-line2-pin:before {\n    content: "\\e031";\n  }\n  .icon-line2-picture:before {\n    content: "\\e032";\n  }\n  .icon-line2-map:before {\n    content: "\\e033";\n  }\n  .icon-line2-layers:before {\n    content: "\\e034";\n  }\n  .icon-line2-handbag:before {\n    content: "\\e035";\n  }\n  .icon-line2-globe-alt:before {\n    content: "\\e036";\n  }\n  .icon-line2-globe:before {\n    content: "\\e037";\n  }\n  .icon-line2-frame:before {\n    content: "\\e038";\n  }\n  .icon-line2-folder-alt:before {\n    content: "\\e039";\n  }\n  .icon-line2-film:before {\n    content: "\\e03a";\n  }\n  .icon-line2-feed:before {\n    content: "\\e03b";\n  }\n  .icon-line2-earphones-alt:before {\n    content: "\\e03c";\n  }\n  .icon-line2-earphones:before {\n    content: "\\e03d";\n  }\n  .icon-line2-drop:before {\n    content: "\\e03e";\n  }\n  .icon-line2-drawer:before {\n    content: "\\e03f";\n  }\n  .icon-line2-docs:before {\n    content: "\\e040";\n  }\n  .icon-line2-directions:before {\n    content: "\\e041";\n  }\n  .icon-line2-direction:before {\n    content: "\\e042";\n  }\n  .icon-line2-diamond:before {\n    content: "\\e043";\n  }\n  .icon-line2-cup:before {\n    content: "\\e044";\n  }\n  .icon-line2-compass:before {\n    content: "\\e045";\n  }\n  .icon-line2-call-out:before {\n    content: "\\e046";\n  }\n  .icon-line2-call-in:before {\n    content: "\\e047";\n  }\n  .icon-line2-call-end:before {\n    content: "\\e048";\n  }\n  .icon-line2-calculator:before {\n    content: "\\e049";\n  }\n  .icon-line2-bubbles:before {\n    content: "\\e04a";\n  }\n  .icon-line2-briefcase:before {\n    content: "\\e04b";\n  }\n  .icon-line2-book-open:before {\n    content: "\\e04c";\n  }\n  .icon-line2-basket-loaded:before {\n    content: "\\e04d";\n  }\n  .icon-line2-basket:before {\n    content: "\\e04e";\n  }\n  .icon-line2-bag:before {\n    content: "\\e04f";\n  }\n  .icon-line2-action-undo:before {\n    content: "\\e050";\n  }\n  .icon-line2-action-redo:before {\n    content: "\\e051";\n  }\n  .icon-line2-wrench:before {\n    content: "\\e052";\n  }\n  .icon-line2-umbrella:before {\n    content: "\\e053";\n  }\n  .icon-line2-trash:before {\n    content: "\\e054";\n  }\n  .icon-line2-tag:before {\n    content: "\\e055";\n  }\n  .icon-line2-support:before {\n    content: "\\e056";\n  }\n  .icon-line2-size-fullscreen:before {\n    content: "\\e057";\n  }\n  .icon-line2-size-actual:before {\n    content: "\\e058";\n  }\n  .icon-line2-shuffle:before {\n    content: "\\e059";\n  }\n  .icon-line2-share-alt:before {\n    content: "\\e05a";\n  }\n  .icon-line2-share:before {\n    content: "\\e05b";\n  }\n  .icon-line2-rocket:before {\n    content: "\\e05c";\n  }\n  .icon-line2-question:before {\n    content: "\\e05d";\n  }\n  .icon-line2-pie-chart:before {\n    content: "\\e05e";\n  }\n  .icon-line2-pencil:before {\n    content: "\\e05f";\n  }\n  .icon-line2-note:before {\n    content: "\\e060";\n  }\n  .icon-line2-music-tone-alt:before {\n    content: "\\e061";\n  }\n  .icon-line2-music-tone:before {\n    content: "\\e062";\n  }\n  .icon-line2-microphone:before {\n    content: "\\e063";\n  }\n  .icon-line2-loop:before {\n    content: "\\e064";\n  }\n  .icon-line2-logout:before {\n    content: "\\e065";\n  }\n  .icon-line2-login:before {\n    content: "\\e066";\n  }\n  .icon-line2-list:before {\n    content: "\\e067";\n  }\n  .icon-line2-like:before {\n    content: "\\e068";\n  }\n  .icon-line2-home:before {\n    content: "\\e069";\n  }\n  .icon-line2-grid:before {\n    content: "\\e06a";\n  }\n  .icon-line2-graph:before {\n    content: "\\e06b";\n  }\n  .icon-line2-equalizer:before {\n    content: "\\e06c";\n  }\n  .icon-line2-dislike:before {\n    content: "\\e06d";\n  }\n  .icon-line2-cursor:before {\n    content: "\\e06e";\n  }\n  .icon-line2-control-start:before {\n    content: "\\e06f";\n  }\n  .icon-line2-control-rewind:before {\n    content: "\\e070";\n  }\n  .icon-line2-control-play:before {\n    content: "\\e071";\n  }\n  .icon-line2-control-pause:before {\n    content: "\\e072";\n  }\n  .icon-line2-control-forward:before {\n    content: "\\e073";\n  }\n  .icon-line2-control-end:before {\n    content: "\\e074";\n  }\n  .icon-line2-calendar:before {\n    content: "\\e075";\n  }\n  .icon-line2-bulb:before {\n    content: "\\e076";\n  }\n  .icon-line2-bar-chart:before {\n    content: "\\e077";\n  }\n  .icon-line2-arrow-up:before {\n    content: "\\e078";\n  }\n  .icon-line2-arrow-right:before {\n    content: "\\e079";\n  }\n  .icon-line2-arrow-left:before {\n    content: "\\e07a";\n  }\n  .icon-line2-arrow-down:before {\n    content: "\\e07b";\n  }\n  .icon-line2-ban:before {\n    content: "\\e07c";\n  }\n  .icon-line2-bubble:before {\n    content: "\\e07d";\n  }\n  .icon-line2-camcorder:before {\n    content: "\\e07e";\n  }\n  .icon-line2-camera:before {\n    content: "\\e07f";\n  }\n  .icon-line2-check:before {\n    content: "\\e080";\n  }\n  .icon-line2-clock:before {\n    content: "\\e081";\n  }\n  .icon-line2-close:before {\n    content: "\\e082";\n  }\n  .icon-line2-cloud-download:before {\n    content: "\\e083";\n  }\n  .icon-line2-cloud-upload:before {\n    content: "\\e084";\n  }\n  .icon-line2-doc:before {\n    content: "\\e085";\n  }\n  .icon-line2-envelope:before {\n    content: "\\e086";\n  }\n  .icon-line2-eye:before {\n    content: "\\e087";\n  }\n  .icon-line2-flag:before {\n    content: "\\e088";\n  }\n  .icon-line2-folder:before {\n    content: "\\e089";\n  }\n  .icon-line2-heart:before {\n    content: "\\e08a";\n  }\n  .icon-line2-info:before {\n    content: "\\e08b";\n  }\n  .icon-line2-key:before {\n    content: "\\e08c";\n  }\n  .icon-line2-link:before {\n    content: "\\e08d";\n  }\n  .icon-line2-lock:before {\n    content: "\\e08e";\n  }\n  .icon-line2-lock-open:before {\n    content: "\\e08f";\n  }\n  .icon-line2-magnifier:before {\n    content: "\\e090";\n  }\n  .icon-line2-magnifier-add:before {\n    content: "\\e091";\n  }\n  .icon-line2-magnifier-remove:before {\n    content: "\\e092";\n  }\n  .icon-line2-paper-clip:before {\n    content: "\\e093";\n  }\n  .icon-line2-paper-plane:before {\n    content: "\\e094";\n  }\n  .icon-line2-plus:before {\n    content: "\\e095";\n  }\n  .icon-line2-pointer:before {\n    content: "\\e096";\n  }\n  .icon-line2-power:before {\n    content: "\\e097";\n  }\n  .icon-line2-refresh:before {\n    content: "\\e098";\n  }\n  .icon-line2-reload:before {\n    content: "\\e099";\n  }\n  .icon-line2-settings:before {\n    content: "\\e09a";\n  }\n  .icon-line2-star:before {\n    content: "\\e09b";\n  }\n  .icon-line2-symbol-female:before {\n    content: "\\e09c";\n  }\n  .icon-line2-symbol-male:before {\n    content: "\\e09d";\n  }\n  .icon-line2-target:before {\n    content: "\\e09e";\n  }\n  .icon-line2-volume-1:before {\n    content: "\\e09f";\n  }\n  .icon-line2-volume-2:before {\n    content: "\\e0a0";\n  }\n  .icon-line2-volume-off:before {\n    content: "\\e0a1";\n  }\n  .icon-line2-users:before {\n    content: "\\e001";\n  }\n  .icon-deezer:before {\n    content: "\\ee40";\n  }\n  .icon-edge-legacy:before {\n    content: "\\ee41";\n  }\n  .icon-google-pay:before {\n    content: "\\ee42";\n  }\n  .icon-google-plus:before {\n    content: "\\ee43";\n  }\n  .icon-rust:before {\n    content: "\\ee44";\n  }\n  .icon-tiktok:before {\n    content: "\\ee45";\n  }\n  .icon-tripadvisor:before {\n    content: "\\ee46";\n  }\n  .icon-unsplash:before {\n    content: "\\ee47";\n  }\n  .icon-yahoo:before {\n    content: "\\ee48";\n  }\n  .icon-box-tissue:before {\n    content: "\\ee49";\n  }\n  .icon-hand-holding-medical:before {\n    content: "\\ee4a";\n  }\n  .icon-hand-holding-water:before {\n    content: "\\ee4b";\n  }\n  .icon-hand-sparkles:before {\n    content: "\\ee4c";\n  }\n  .icon-hands-wash:before {\n    content: "\\ee4d";\n  }\n  .icon-handshake-alt-slash:before {\n    content: "\\ee4e";\n  }\n  .icon-handshake-slash:before {\n    content: "\\ee4f";\n  }\n  .icon-head-side-cough-slash:before {\n    content: "\\ee50";\n  }\n  .icon-head-side-cough:before {\n    content: "\\ee51";\n  }\n  .icon-head-side-mask:before {\n    content: "\\ee52";\n  }\n  .icon-head-side-virus:before {\n    content: "\\ee53";\n  }\n  .icon-house-user:before {\n    content: "\\ee54";\n  }\n  .icon-laptop-house:before {\n    content: "\\ee55";\n  }\n  .icon-lungs-virus:before {\n    content: "\\ee56";\n  }\n  .icon-people-arrows:before {\n    content: "\\ee57";\n  }\n  .icon-plane-slash:before {\n    content: "\\ee58";\n  }\n  .icon-pump-medical:before {\n    content: "\\ee59";\n  }\n  .icon-pump-soap:before {\n    content: "\\ee5a";\n  }\n  .icon-shield-virus:before {\n    content: "\\ee5b";\n  }\n  .icon-sink:before {\n    content: "\\ee5c";\n  }\n  .icon-socks:before {\n    content: "\\ee5d";\n  }\n  .icon-stopwatch-20:before {\n    content: "\\ee5e";\n  }\n  .icon-store-alt-slash:before {\n    content: "\\ee5f";\n  }\n  .icon-store-slash:before {\n    content: "\\ee60";\n  }\n  .icon-toilet-paper-slash:before {\n    content: "\\ee61";\n  }\n  .icon-users-slash:before {\n    content: "\\ee62";\n  }\n  .icon-virus-slash:before {\n    content: "\\ee63";\n  }\n  .icon-virus:before {\n    content: "\\ee64";\n  }\n  .icon-viruses:before {\n    content: "\\ee65";\n  }\n  .icon-bandcamp:before {\n    content: "\\ee66";\n  }\n  .icon-bacteria:before {\n    content: "\\ee67";\n  }\n  .icon-bacterium:before {\n    content: "\\ee68";\n  }\n', ""])
        },
        7: function(n, e) {},
        "74955b686065192ac90b": function(n, e, o) {
            var t = o("347764a13df7d492f3c9");
            "string" === typeof t && (t = [
                [n.i, t, ""]
            ]);
            var i = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            o("1e4534d1d62a11482e97")(t, i);
            t.locals && (n.exports = t.locals)
        },
        "7520c34c029d758440f4": function(n, e, o) {
            n.exports = o.p + "f19a7f6c7a0b54b748277c40d7cf8882.eot"
        },
        "7d52b6a04bdd48faa2b8": function(n, e, o) {
            n.exports = o.p + "4c5f55218f914deabc3f2c95ce3cac68.svg"
        },
        "7dd68a64079d1d4cd439": function(n) {
            n.exports = {
                "boilerplate.components.Footer.author.message": "Made with love by {author}.",
                "boilerplate.components.Footer.license.message": "This project is licensed under the MIT license.",
                "boilerplate.components.Header.features": "Features",
                "boilerplate.components.Header.home": "Home",
                "boilerplate.containers.FeaturePage.css.header": "Features",
                "boilerplate.containers.FeaturePage.css.message": "Next generation CSS",
                "boilerplate.containers.FeaturePage.feedback.header": "Instant feedback",
                "boilerplate.containers.FeaturePage.feedback.message": "Enjoy the best DX and code your app at the speed of thought! Your\n    saved changes to the CSS and JS are reflected instantaneously\n    without refreshing the page. Preserve application state even when\n    you update something in the underlying code!",
                "boilerplate.containers.FeaturePage.header": "Features",
                "boilerplate.containers.FeaturePage.internationalization.header": "Complete i18n Standard Internationalization & Pluralization",
                "boilerplate.containers.FeaturePage.internationalization.message": "Scalable apps need to support multiple languages, easily add and support multiple languages with `react-intl`.",
                "boilerplate.containers.FeaturePage.javascript.header": "Next generation JavaScript",
                "boilerplate.containers.FeaturePage.javascript.message": "Use template strings, object destructuring, arrow functions, JSX\n    syntax and more, today.",
                "boilerplate.containers.FeaturePage.network.header": "Offline-first",
                "boilerplate.containers.FeaturePage.network.message": "The next frontier in performant web apps: availability without a\n      network connection from the instant your users load the app.",
                "boilerplate.containers.FeaturePage.routing.header": "Industry-standard routing",
                "boilerplate.containers.FeaturePage.routing.message": "Write composable CSS that's co-located with your components for\n    complete modularity. Unique generated class names keep the\n    specificity low while eliminating style clashes. Ship only the\n    styles that are on the page for the best performance.",
                "boilerplate.containers.FeaturePage.scaffolding.header": "Quick scaffolding",
                "boilerplate.containers.FeaturePage.scaffolding.message": "Automate the creation of components, containers, routes, selectors\n  and sagas - and their tests - right from the CLI!",
                "boilerplate.containers.FeaturePage.state_management.header": "Predictable state management",
                "boilerplate.containers.FeaturePage.state_management.message": "Unidirectional data flow allows for change logging and time travel\n    debugging.",
                "boilerplate.containers.HomePage.start_project.header": "Start your next react project in seconds",
                "boilerplate.containers.HomePage.start_project.message": "A highly scalable, offline-first foundation with the best DX and a focus on performance and best practices",
                "boilerplate.containers.HomePage.tryme.atPrefix": "@",
                "boilerplate.containers.HomePage.tryme.header": "Try me!",
                "boilerplate.containers.HomePage.tryme.message": "Show Github repositories by",
                "boilerplate.containers.LocaleToggle.de": "de",
                "boilerplate.containers.LocaleToggle.en": "en",
                "boilerplate.containers.NotFoundPage.header": "Page not found."
            }
        },
        "7fc96438efa42ce51062": function(n, e) {
            n.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9ItCh0LvQvtC5XzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyODMuNSAyODMuNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjgzLjUgMjgzLjU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPGc+Cgk8Zz4KCQk8Y2lyY2xlIGN4PSI2OS40IiBjeT0iMTkxLjUiIHI9IjEuNCIvPgoJCTxjaXJjbGUgY3g9IjExNi4zIiBjeT0iMTkxLjUiIHI9IjEuNCIvPgoJCTxwYXRoIGQ9Ik0yMjMuOSwyNjAuMUg1OS42Yy0yMC40LDAtMzYuOS0xNi41LTM2LjktMzYuOXYtMTYzYzAtMjAuNCwxNi41LTM2LjksMzYuOS0zNi45aDE2NC4zYzIwLjQsMCwzNi45LDE2LjUsMzYuOSwzNi45djE2MwoJCQlDMjYwLjcsMjQzLjYsMjQ0LjIsMjYwLjEsMjIzLjksMjYwLjF6Ii8+CgkJPGNpcmNsZSBjeD0iMjE0LjQiIGN5PSIxOTEuNyIgcj0iMS4xIi8+CgkJPGNpcmNsZSBjeD0iMTkxLjMiIGN5PSIxOTEuNyIgcj0iMS4xIi8+Cgk8L2c+CjwvZz4KPGc+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTY2LjYsMTQyLjRjMC0wLjQtMC4xLTAuNy0wLjQtMUwxMTYsOTEuMmMtMC41LTAuNS0xLjQtMC41LTEuOSwwbC0xMS4zLDExLjNjLTAuMywwLjMtMC40LDAuNi0wLjQsMQoJCWMwLDAuNCwwLjEsMC43LDAuNCwxbDI1LjcsMjUuOGwtNjAuMSw2MGMtMC40LDAuNC0wLjUsMS0wLjMsMS41YzAuMiwwLjUsMC43LDAuOCwxLjMsMC44aDQ2LjljMC40LDAsMC43LTAuMSwxLTAuNGw0OS00OC44CgkJQzE2Ni40LDE0My4xLDE2Ni42LDE0Mi44LDE2Ni42LDE0Mi40eiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTE4OC40LDE2My44YzAsMCwyNi43LTI2LjYsMjYuNy0yNi42YzAuMi0wLjIsMC40LTAuNSwwLjQtMC44YzAtMC43LTAuNS0xLjItMS4yLTEuMmMwLDAtMjIuOSwwLTIyLjksMAoJCWMtMC40LDAtMC43LDAuMS0xLDAuNGMwLDAtMjcuNSwyNy41LTI3LjUsMjcuNWMtMC4yLDAuMi0wLjQsMC41LTAuNCwwLjhjMCwwLjMsMC4xLDAuNiwwLjQsMC44YzAsMCwwLDAsMCwwbDI3LjYsMjcuNQoJCWMwLjMsMC4zLDAuNiwwLjQsMSwwLjRoMjIuNmMwLjYsMCwxLjEtMC4yLDEuMy0wLjdjMC4yLTAuNSwwLjEtMS4xLTAuMy0xLjVMMTg4LjQsMTYzLjh6Ii8+CjwvZz4KPC9zdmc+Cg=="
        },
        "81e3ad52cb9e8875d348": function(n, e, o) {
            "use strict";
            o.d(e, "a", (function() {
                return t
            }));
            var t = "UPDATE_PROVIDER"
        },
        "8781482f9a475c60bffd": function(n, e, o) {
            n.exports = o.p + "ff94ad94c3a9d04bd2f80cb3c87dcccb.woff"
        },
        "8b703812aa8ae3c41814": function(n, e, o) {
            "use strict";
            o.r(e);
            o("8c8e4f08a118a28666b0");
            var t, i = o("8af190b70a6bc55c6f1b"),
                r = o.n(i),
                c = o("63f14ac74ce296f77f4d"),
                a = o.n(c),
                l = o("d7dd51e1bf6bfc2c9c3d"),
                s = o("accfe20dac886d57b695"),
                d = o("260f3680b921ede7f717"),
                b = o.n(d),
                f = o("12ba4fef039ee145f0aa"),
                p = Object(f.createBrowserHistory)(),
                u = (o("6735bdf1a3a541ab43fd"),
                    o("e95a63b25fb92ed15721")),
                g = (o("8a2d1b95e05b6a321e74"),
                    o("d1481ba7d88efe885afa")),
                m = o.n(g),
                h = o("87753da1c31caf0fbb22"),
                y = o("d2009d4b56312948e1c9"),
                x = o.n(y),
                v = o("f993ef5da7d81af534f1"),
                k = o("ab4cb61bcb2dc161defb"),
                w = o("6938d226fd372a75cbf9"),
                A = {
                    type: "TOGGLE_SIDEBAR"
                },
                C = function(n) {
                    return {
                        type: "OPEN_SUBMENU",
                        initialLocation: n
                    }
                },
                M = function(n) {
                    return {
                        type: "CHANGE_THEME",
                        theme: n
                    }
                },
                I = {
                    type: "CHANGE_RANDOM_THEME"
                },
                S = function(n) {
                    return {
                        type: "CHANGE_MODE",
                        mode: n
                    }
                },
                N = function(n) {
                    return {
                        type: "CHANGE_GRADIENT",
                        gradient: n
                    }
                },
                j = function(n) {
                    return {
                        type: "CHANGE_DECO",
                        deco: n
                    }
                },
                T = function(n) {
                    return {
                        type: "CHANGE_LAYOUT",
                        layout: n
                    }
                },
                L = function(n) {
                    return {
                        type: "CHANGE_BG_POSITION",
                        position: n
                    }
                },
                E = function(n) {
                    return {
                        type: "CHANGE_DIRECTION",
                        direction: n
                    }
                },
                D = function(n) {
                    return {
                        type: "LOAD_PAGE",
                        isLoaded: n
                    }
                },
                O = o("4dd2a92e69dcbe1bab10"),
                z = {
                    purpleRedTheme: {
                        palette: {
                            primary: {
                                light: "#EDE7F6",
                                main: "#673AB7",
                                dark: "#512DA8",
                                contrastText: "#fff"
                            },
                            secondary: {
                                light: "#FCE4EC",
                                main: "#EC407A",
                                dark: "#C2185B",
                                contrastText: "#fff"
                            }
                        }
                    },
                    greenOrangeTheme: {
                        palette: {
                            primary: {
                                light: "#F1F8E9",
                                main: "#689F38",
                                dark: "#33691E",
                                contrastText: "#fff"
                            },
                            secondary: {
                                light: "#FFF8E1",
                                main: "#FF8F00",
                                dark: "#E65100",
                                contrastText: "#fff"
                            }
                        }
                    },
                    magentaTheme: {
                        palette: {
                            primary: {
                                light: "#FCE4EC",
                                main: "#EC407A",
                                dark: "#D81B60",
                                contrastText: "#fff"
                            },
                            secondary: {
                                light: "#FFF8E1",
                                main: "#FFA000",
                                dark: "#FF6F00",
                                contrastText: "#fff"
                            }
                        }
                    },
                    purpleTheme: {
                        palette: {
                            primary: {
                                light: "#EDE7F6",
                                main: "#AB47BC",
                                dark: "#8E24AA",
                                contrastText: "#fff"
                            },
                            secondary: {
                                light: "#E0F7FA",
                                main: "#00BCD4",
                                dark: "#006064",
                                contrastText: "#fff"
                            }
                        }
                    },
                    blueTheme: {
                        palette: {
                            primary: {
                                light: "#213274",
                                main: "#3FA9FF",
                                dark: "#bc28e7",
                                contrastText: "#fff"
                            },
                            secondary: {
                                light: "#E1F5FE",
                                main: "#03A9F4",
                                dark: "#0277BD",
                                contrastText: "#fff"
                            }
                        }
                    },
                    orangeTheme: {
                        palette: {
                            primary: {
                                light: "#FFF3E0",
                                main: "#EF6C00",
                                dark: "#E65100",
                                contrastText: "#fff"
                            },
                            secondary: {
                                light: "#F3E5F5",
                                main: "#9C27B0",
                                dark: "#7B1FA2",
                                contrastText: "#fff"
                            }
                        }
                    },
                    cyanTheme: {
                        palette: {
                            primary: {
                                light: "#E0F7FA",
                                main: "#009688",
                                dark: "#00695C",
                                contrastText: "#fff"
                            },
                            secondary: {
                                light: "#F1F8E9",
                                main: "#689F38",
                                dark: "#33691E",
                                contrastText: "#fff"
                            }
                        }
                    },
                    redTheme: {
                        palette: {
                            primary: {
                                light: "#FFEBEE",
                                main: "#EF5350",
                                dark: "#E53935",
                                contrastText: "#fff"
                            },
                            secondary: {
                                light: "#ECEFF1",
                                main: "#607D8B",
                                dark: "#455A64",
                                contrastText: "#fff"
                            }
                        }
                    },
                    skyBlueTheme: {
                        palette: {
                            primary: {
                                light: "#E3F2FD",
                                main: "#2196F3",
                                dark: "#1565C0",
                                contrastText: "#fff"
                            },
                            secondary: {
                                light: "#E0F2F1",
                                main: "#00BFA5",
                                dark: "#00796B",
                                contrastText: "#fff"
                            }
                        }
                    },
                    greyTheme: {
                        palette: {
                            primary: {
                                light: "#ECEFF1",
                                main: "#607D8B",
                                dark: "#455A64",
                                contrastText: "#fff"
                            },
                            secondary: {
                                light: "#E0E0E0",
                                main: "#757575",
                                dark: "#424242",
                                contrastText: "#fff"
                            }
                        }
                    },
                    yellowBlueTheme: {
                        palette: {
                            primary: {
                                light: "#E1F5FE",
                                main: "#039BE5",
                                dark: "#01579B",
                                contrastText: "#fff"
                            },
                            secondary: {
                                light: "#FFF3E0",
                                main: "#FF9800",
                                dark: "#E65100",
                                contrastText: "#fff"
                            }
                        }
                    },
                    pinkBlueTheme: {
                        palette: {
                            primary: {
                                light: "#E0F7FA",
                                main: "#00BCD4",
                                dark: "#006064",
                                contrastText: "#fff"
                            },
                            secondary: {
                                light: "#FCE4EC",
                                main: "#F06292",
                                dark: "#AD1457",
                                contrastText: "#fff"
                            }
                        }
                    },
                    yellowCyanTheme: {
                        palette: {
                            primary: {
                                light: "#FFF3E0",
                                main: "#F9A825",
                                dark: "#F57F17",
                                contrastText: "#fff"
                            },
                            secondary: {
                                light: "#E0F7FA",
                                main: "#00BCD4",
                                dark: "#006064",
                                contrastText: "#fff"
                            }
                        }
                    },
                    blueCyanTheme: {
                        palette: {
                            primary: {
                                light: "#E1F5FE",
                                main: "#039BE5",
                                dark: "#01579B",
                                contrastText: "#fff"
                            },
                            secondary: {
                                light: "#E0F7FA",
                                main: "#00BCD4",
                                dark: "#00838F",
                                contrastText: "#fff"
                            }
                        }
                    },
                    greenPurpleTheme: {
                        palette: {
                            primary: {
                                light: "#EDE7F6",
                                main: "#7C4DFF",
                                dark: "#311B92",
                                contrastText: "#fff"
                            },
                            secondary: {
                                light: "#E8F5E9",
                                main: "#00C853",
                                dark: "#1B5E20",
                                contrastText: "#fff"
                            }
                        }
                    },
                    pinkGreenTheme: {
                        palette: {
                            primary: {
                                light: "#DCEDC8",
                                main: "#689F38",
                                dark: "#33691E",
                                contrastText: "#fff"
                            },
                            secondary: {
                                light: "#FCE4EC",
                                main: "#F06292",
                                dark: "#AD1457",
                                contrastText: "#fff"
                            }
                        }
                    },
                    goldTheme: {
                        palette: {
                            primary: {
                                light: "#FFF9C4",
                                main: "#FF9100",
                                dark: "#FF6D00",
                                contrastText: "#fff"
                            },
                            secondary: {
                                light: "#EFEBE9",
                                main: "#8D6E63",
                                dark: "#4E342E",
                                contrastText: "#fff"
                            }
                        }
                    }
                },
                P = {
                    purpleRedTheme: {
                        palette: {
                            primary: {
                                light: "#EDE7F6",
                                main: "#B388FF",
                                dark: "#512DA8",
                                contrastText: "#fff"
                            },
                            secondary: {
                                light: "#FCE4EC",
                                main: "#EC407A",
                                dark: "#C2185B",
                                contrastText: "#fff"
                            }
                        }
                    },
                    greenOrangeTheme: {
                        palette: {
                            primary: {
                                light: "#F1F8E9",
                                main: "#689F38",
                                dark: "#33691E",
                                contrastText: "#fff"
                            },
                            secondary: {
                                light: "#FFF8E1",
                                main: "#FF8F00",
                                dark: "#E65100",
                                contrastText: "#fff"
                            }
                        }
                    },
                    magentaTheme: {
                        palette: {
                            primary: {
                                light: "#FCE4EC",
                                main: "#F06292",
                                dark: "#D81B60",
                                contrastText: "#fff"
                            },
                            secondary: {
                                light: "#FFF8E1",
                                main: "#FFA000",
                                dark: "#FF6F00",
                                contrastText: "#fff"
                            }
                        }
                    },
                    purpleTheme: {
                        palette: {
                            primary: {
                                light: "#EDE7F6",
                                main: "#BA68C8",
                                dark: "#8E24AA",
                                contrastText: "#fff"
                            },
                            secondary: {
                                light: "#E0F7FA",
                                main: "#00BCD4",
                                dark: "#006064",
                                contrastText: "#fff"
                            }
                        }
                    },
                    blueTheme: {
                        palette: {
                            primary: {
                                light: "#E8EAF6",
                                main: "#448AFF",
                                dark: "#283593",
                                contrastText: "#fff"
                            },
                            secondary: {
                                light: "#E1F5FE",
                                main: "#03A9F4",
                                dark: "#0277BD",
                                contrastText: "#fff"
                            }
                        }
                    },
                    orangeTheme: {
                        palette: {
                            primary: {
                                light: "#FFF3E0",
                                main: "#EF6C00",
                                dark: "#E65100",
                                contrastText: "#fff"
                            },
                            secondary: {
                                light: "#F3E5F5",
                                main: "#BA68C8",
                                dark: "#7B1FA2",
                                contrastText: "#fff"
                            }
                        }
                    },
                    cyanTheme: {
                        palette: {
                            primary: {
                                light: "#E0F7FA",
                                main: "#26A69A",
                                dark: "#00695C",
                                contrastText: "#fff"
                            },
                            secondary: {
                                light: "#F1F8E9",
                                main: "#689F38",
                                dark: "#33691E",
                                contrastText: "#fff"
                            }
                        }
                    },
                    redTheme: {
                        palette: {
                            primary: {
                                light: "#FFEBEE",
                                main: "#EF5350",
                                dark: "#E53935",
                                contrastText: "#fff"
                            },
                            secondary: {
                                light: "#ECEFF1",
                                main: "#607D8B",
                                dark: "#455A64",
                                contrastText: "#fff"
                            }
                        }
                    },
                    skyBlueTheme: {
                        palette: {
                            primary: {
                                light: "#E3F2FD",
                                main: "#42A5F5",
                                dark: "#1565C0",
                                contrastText: "#fff"
                            },
                            secondary: {
                                light: "#E0F2F1",
                                main: "#00BFA5",
                                dark: "#00796B",
                                contrastText: "#fff"
                            }
                        }
                    },
                    greyTheme: {
                        palette: {
                            primary: {
                                light: "#ECEFF1",
                                main: "#90A4AE",
                                dark: "#455A64",
                                contrastText: "#fff"
                            },
                            secondary: {
                                light: "#E0E0E0",
                                main: "#757575",
                                dark: "#424242",
                                contrastText: "#fff"
                            }
                        }
                    },
                    yellowBlueTheme: {
                        palette: {
                            primary: {
                                light: "#E1F5FE",
                                main: "#039BE5",
                                dark: "#01579B",
                                contrastText: "#fff"
                            },
                            secondary: {
                                light: "#FFF3E0",
                                main: "#FF9800",
                                dark: "#E65100",
                                contrastText: "#fff"
                            }
                        }
                    },
                    pinkBlueTheme: {
                        palette: {
                            primary: {
                                light: "#E0F7FA",
                                main: "#00BCD4",
                                dark: "#006064",
                                contrastText: "#fff"
                            },
                            secondary: {
                                light: "#FCE4EC",
                                main: "#F06292",
                                dark: "#AD1457",
                                contrastText: "#fff"
                            }
                        }
                    },
                    yellowCyanTheme: {
                        palette: {
                            primary: {
                                light: "#FFF3E0",
                                main: "#F9A825",
                                dark: "#F57F17",
                                contrastText: "#fff"
                            },
                            secondary: {
                                light: "#E0F7FA",
                                main: "#00BCD4",
                                dark: "#006064",
                                contrastText: "#fff"
                            }
                        }
                    },
                    greenPurpleTheme: {
                        palette: {
                            primary: {
                                light: "#EDE7F6",
                                main: "#B388FF",
                                dark: "#311B92",
                                contrastText: "#fff"
                            },
                            secondary: {
                                light: "#E8F5E9",
                                main: "#00C853",
                                dark: "#1B5E20",
                                contrastText: "#fff"
                            }
                        }
                    },
                    blueCyanTheme: {
                        palette: {
                            primary: {
                                light: "#E0F7FA",
                                main: "#00BCD4",
                                dark: "#00838F",
                                contrastText: "#fff"
                            },
                            secondary: {
                                light: "#E1F5FE",
                                main: "#039BE5",
                                dark: "#01579B",
                                contrastText: "#fff"
                            }
                        }
                    },
                    pinkGreenTheme: {
                        palette: {
                            primary: {
                                light: "#DCEDC8",
                                main: "#689F38",
                                dark: "#33691E",
                                contrastText: "#fff"
                            },
                            secondary: {
                                light: "#FCE4EC",
                                main: "#F06292",
                                dark: "#AD1457",
                                contrastText: "#fff"
                            }
                        }
                    },
                    goldTheme: {
                        palette: {
                            primary: {
                                light: "#FFF9C4",
                                main: "#FF9100",
                                dark: "#FF6D00",
                                contrastText: "#fff"
                            },
                            secondary: {
                                light: "#EFEBE9",
                                main: "#A1887F",
                                dark: "#4E342E",
                                contrastText: "#fff"
                            }
                        }
                    }
                },
                B = function(n, e) {
                    return "dark" === e ? P[n] : z[n]
                },
                F = o("997281530ff2d95e3172"),
                R = function(n, e, o) {
                    return {
                        direction: o,
                        palette: {
                            type: e,
                            primary: B(n, e).palette.primary,
                            secondary: B(n, e).palette.secondary,
                            action: {
                                hover: "dark" === e ? "rgba(80,80,80, 0.9)" : "rgba(80,80,80, 0.05)",
                                hoverOpacity: .05
                            }
                        },
                        typography: {
                            useNextVariants: !0,
                            fontFamily: ["'Manrope', sans-serif !important"].join(","),
                            title: {
                                fontWeight: 800
                            },
                            body2: {
                                fontWeight: 500
                            },
                            fontWeightMedium: 700
                        },
                        shade: {
                            light: "0 10px 15px -5px rgba(62, 57, 107, .07)"
                        },
                        glow: {
                            light: "0 2px 20px -5px ".concat(B(n, e).palette.primary.main),
                            medium: "0 2px 40px -5px ".concat(B(n, e).palette.primary.main),
                            dark: "0 2px 40px 0px ".concat(B(n, e).palette.primary.main)
                        },
                        rounded: {
                            small: "8px",
                            medium: "12px",
                            big: "20px"
                        },
                        shadows: "dark" === e ? ["none", "0px 1px 3px 0px rgba(50,50,50, 0.2),0px 1px 1px 0px rgba(50,50,50, 0.14),0px 2px 1px -1px rgba(50,50,50, 0.12)", "0px 1px 5px 0px rgba(50,50,50, 0.2),0px 2px 2px 0px rgba(50,50,50, 0.14),0px 3px 1px -2px rgba(50,50,50, 0.12)", "0px 1px 8px 0px rgba(50,50,50, 0.2),0px 3px 4px 0px rgba(50,50,50, 0.14),0px 3px 3px -2px rgba(50,50,50, 0.12)", "0px 2px 4px -1px rgba(50,50,50, 0.2),0px 4px 5px 0px rgba(50,50,50, 0.14),0px 1px 10px 0px rgba(50,50,50, 0.12)", "0px 3px 5px -1px rgba(50,50,50, 0.2),0px 5px 8px 0px rgba(50,50,50, 0.14),0px 1px 14px 0px rgba(50,50,50, 0.12)", "0px 3px 5px -1px rgba(50,50,50, 0.2),0px 6px 10px 0px rgba(50,50,50, 0.14),0px 1px 18px 0px rgba(50,50,50, 0.12)", "0px 4px 5px -2px rgba(50,50,50, 0.2),0px 7px 10px 1px rgba(50,50,50, 0.14),0px 2px 16px 1px rgba(50,50,50, 0.12)", "0px 5px 5px -3px rgba(50,50,50, 0.2),0px 8px 10px 1px rgba(50,50,50, 0.14),0px 3px 14px 2px rgba(50,50,50, 0.12)", "0px 5px 6px -3px rgba(50,50,50, 0.2),0px 9px 12px 1px rgba(50,50,50, 0.14),0px 3px 16px 2px rgba(50,50,50, 0.12)", "0px 6px 6px -3px rgba(50,50,50, 0.2),0px 10px 14px 1px rgba(50,50,50, 0.14),0px 4px 18px 3px rgba(50,50,50, 0.12)", "0px 6px 7px -4px rgba(50,50,50, 0.2),0px 11px 15px 1px rgba(50,50,50, 0.14),0px 4px 20px 3px rgba(50,50,50, 0.12)", "0px 7px 8px -4px rgba(50,50,50, 0.2),0px 12px 17px 2px rgba(50,50,50, 0.14),0px 5px 22px 4px rgba(50,50,50, 0.12)", "0px 7px 8px -4px rgba(50,50,50, 0.2),0px 13px 19px 2px rgba(50,50,50, 0.14),0px 5px 24px 4px rgba(50,50,50, 0.12)", "0px 7px 9px -4px rgba(50,50,50, 0.2),0px 14px 21px 2px rgba(50,50,50, 0.14),0px 5px 26px 4px rgba(50,50,50, 0.12)", "0px 8px 9px -5px rgba(50,50,50, 0.2),0px 15px 22px 2px rgba(50,50,50, 0.14),0px 6px 28px 5px rgba(50,50,50, 0.12)", "0px 8px 10px -5px rgba(50,50,50, 0.2),0px 16px 24px 2px rgba(50,50,50, 0.14),0px 6px 30px 5px rgba(50,50,50, 0.12)", "0px 8px 11px -5px rgba(50,50,50, 0.2),0px 17px 26px 2px rgba(50,50,50, 0.14),0px 6px 32px 5px rgba(50,50,50, 0.12)", "0px 9px 11px -5px rgba(50,50,50, 0.2),0px 18px 28px 2px rgba(50,50,50, 0.14),0px 7px 34px 6px rgba(50,50,50, 0.12)", "0px 9px 12px -6px rgba(50,50,50, 0.2),0px 19px 29px 2px rgba(50,50,50, 0.14),0px 7px 36px 6px rgba(50,50,50, 0.12)", "0px 10px 13px -6px rgba(50,50,50, 0.2),0px 20px 31px 3px rgba(50,50,50, 0.14),0px 8px 38px 7px rgba(50,50,50, 0.12)", "0px 10px 13px -6px rgba(50,50,50, 0.2),0px 21px 33px 3px rgba(50,50,50, 0.14),0px 8px 40px 7px rgba(50,50,50, 0.12)", "0px 10px 14px -6px rgba(50,50,50, 0.2),0px 22px 35px 3px rgba(50,50,50, 0.14),0px 8px 42px 7px rgba(50,50,50, 0.12)", "0px 11px 14px -7px rgba(50,50,50, 0.2),0px 23px 36px 3px rgba(50,50,50, 0.14),0px 9px 44px 8px rgba(50,50,50, 0.12)", "0px 11px 15px -7px rgba(50,50,50, 0.2),0px 24px 38px 3px rgba(850,50,50 0.14),0px 9px 46px 8px rgba(50,50,50, 0.12)"] : ["none", "0px 1px 3px 0px rgba(80,80,80, 0.2),0px 1px 1px 0px rgba(80,80,80, 0.14),0px 2px 1px -1px rgba(80,80,80, 0.12)", "0px 1px 5px 0px rgba(80,80,80, 0.2),0px 2px 2px 0px rgba(80,80,80, 0.14),0px 3px 1px -2px rgba(80,80,80, 0.12)", "0px 1px 8px 0px rgba(80,80,80, 0.2),0px 3px 4px 0px rgba(80,80,80, 0.14),0px 3px 3px -2px rgba(80,80,80, 0.12)", "0px 2px 4px -1px rgba(80,80,80, 0.2),0px 4px 5px 0px rgba(80,80,80, 0.14),0px 1px 10px 0px rgba(80,80,80, 0.12)", "0px 3px 5px -1px rgba(80,80,80, 0.2),0px 5px 8px 0px rgba(80,80,80, 0.14),0px 1px 14px 0px rgba(80,80,80, 0.12)", "0px 3px 5px -1px rgba(80,80,80, 0.2),0px 6px 10px 0px rgba(80,80,80, 0.14),0px 1px 18px 0px rgba(80,80,80, 0.12)", "0px 4px 5px -2px rgba(80,80,80, 0.2),0px 7px 10px 1px rgba(80,80,80, 0.14),0px 2px 16px 1px rgba(80,80,80, 0.12)", "0px 5px 5px -3px rgba(80,80,80, 0.2),0px 8px 10px 1px rgba(80,80,80, 0.14),0px 3px 14px 2px rgba(80,80,80, 0.12)", "0px 5px 6px -3px rgba(80,80,80, 0.2),0px 9px 12px 1px rgba(80,80,80, 0.14),0px 3px 16px 2px rgba(80,80,80, 0.12)", "0px 6px 6px -3px rgba(80,80,80, 0.2),0px 10px 14px 1px rgba(80,80,80, 0.14),0px 4px 18px 3px rgba(80,80,80, 0.12)", "0px 6px 7px -4px rgba(80,80,80, 0.2),0px 11px 15px 1px rgba(80,80,80, 0.14),0px 4px 20px 3px rgba(80,80,80, 0.12)", "0px 7px 8px -4px rgba(80,80,80, 0.2),0px 12px 17px 2px rgba(80,80,80, 0.14),0px 5px 22px 4px rgba(80,80,80, 0.12)", "0px 7px 8px -4px rgba(80,80,80, 0.2),0px 13px 19px 2px rgba(80,80,80, 0.14),0px 5px 24px 4px rgba(80,80,80, 0.12)", "0px 7px 9px -4px rgba(80,80,80, 0.2),0px 14px 21px 2px rgba(80,80,80, 0.14),0px 5px 26px 4px rgba(80,80,80, 0.12)", "0px 8px 9px -5px rgba(80,80,80, 0.2),0px 15px 22px 2px rgba(80,80,80, 0.14),0px 6px 28px 5px rgba(80,80,80, 0.12)", "0px 8px 10px -5px rgba(80,80,80, 0.2),0px 16px 24px 2px rgba(80,80,80, 0.14),0px 6px 30px 5px rgba(80,80,80, 0.12)", "0px 8px 11px -5px rgba(80,80,80, 0.2),0px 17px 26px 2px rgba(80,80,80, 0.14),0px 6px 32px 5px rgba(80,80,80, 0.12)", "0px 9px 11px -5px rgba(80,80,80, 0.2),0px 18px 28px 2px rgba(80,80,80, 0.14),0px 7px 34px 6px rgba(80,80,80, 0.12)", "0px 9px 12px -6px rgba(80,80,80, 0.2),0px 19px 29px 2px rgba(80,80,80, 0.14),0px 7px 36px 6px rgba(80,80,80, 0.12)", "0px 10px 13px -6px rgba(80,80,80, 0.2),0px 20px 31px 3px rgba(80,80,80, 0.14),0px 8px 38px 7px rgba(80,80,80, 0.12)", "0px 10px 13px -6px rgba(80,80,80, 0.2),0px 21px 33px 3px rgba(80,80,80, 0.14),0px 8px 40px 7px rgba(80,80,80, 0.12)", "0px 10px 14px -6px rgba(80,80,80, 0.2),0px 22px 35px 3px rgba(80,80,80, 0.14),0px 8px 42px 7px rgba(80,80,80, 0.12)", "0px 11px 14px -7px rgba(80,80,80, 0.2),0px 23px 36px 3px rgba(80,80,80, 0.14),0px 9px 44px 8px rgba(80,80,80, 0.12)", "0px 11px 15px -7px rgba(80,80,80, 0.2),0px 24px 38px 3px rgba(80,80,80, 0.14),0px 9px 46px 8px rgba(80,80,80, 0.12)"],
                        overrides: {
                            MuiModal: {
                                root: {
                                    overflow: "scroll"
                                }
                            },
                            MuiPaper: {
                                root: {
                                    padding: "10px",
                                    borderColor: "dark" === Object(F.a)() ? "#313d50 !important" : "lightgrey !important",
                                    borderWidth: "dark" === Object(F.a)() ? "2px !important" : "1px !important",
                                    backgroundColor: "dark" === Object(F.a)() ? "#1e2735" : "#FFFFFF",
                                    margin: "auto"
                                },
                                rounded: {
                                    borderRadius: 8
                                },
                                elevation1: {
                                    boxShadow: "dark" === e ? "0px 1px 3px 0px rgba(64, 64, 64, 1), 0px 1px 1px 0px rgba(42, 42, 42, 1), 0px 2px 1px -1px rgba(20, 20, 20, 1)" : "0px 1px 3px 0px rgba(142, 142, 142, 0.2), 0px 1px 1px 0px rgba(243, 243, 243, 0.14), 0px 2px 1px -1px rgba(204, 204, 204, 0.12)"
                                },
                                elevation4: {
                                    boxShadow: "dark" === e ? "0px 2px 4px -1px rgba(64, 64, 64, 0.46), 0px 4px 5px 0px rgba(42, 42, 42, 0.32), 0px 1px 10px 0px rgba(20, 20, 20, 0.12)" : "0px 2px 4px -1px rgba(142, 142, 142, 0.2), 0px 4px 5px 0px rgba(243, 243, 243, 0.14), 0px 1px 10px 0px rgba(204, 204, 204, 0.12)"
                                }
                            },
                            MuiButton: {
                                contained: {
                                    boxShadow: "none"
                                },
                                root: {
                                    borderRadius: 20,
                                    fontWeight: 600
                                },
                                sizeSmall: {
                                    padding: "7px 12px"
                                }
                            },
                            MuiTypography: {
                                button: {
                                    fontWeight: 600
                                }
                            },
                            MuiInput: {
                                root: {
                                    overflow: "hidden",
                                    border: "dark" === e ? "1px solid rgba(255,255,255,0.32)" : "1px solid rgba(0,0,0,0.32)",
                                    borderRadius: 8,
                                    alignItems: "center",
                                    transition: "border 0.3s ease"
                                },
                                underline: {
                                    alignItems: "flex-end",
                                    '&[role="radiogroup"]': {
                                        alignItems: "flex-start"
                                    },
                                    "&:after": {
                                        height: "calc(100% + 1px)",
                                        borderRadius: 8,
                                        bottom: -1,
                                        boxShadow: "0 0 1px ".concat(B(n, e).palette.primary.main)
                                    },
                                    "&:before": {
                                        display: "none"
                                    }
                                },
                                input: {
                                    padding: 10,
                                    fontSize: 14
                                },
                                multiline: {
                                    paddingTop: 24
                                }
                            },
                            MuiInputLabel: {
                                formControl: {
                                    top: 12,
                                    left: 10,
                                    transform: "translate(0, 22px) scale(1)"
                                },
                                animated: {
                                    "& + div": {
                                        paddingBottom: 4,
                                        "& input, > div, > select": {
                                            padding: "24px 8px 0"
                                        }
                                    }
                                },
                                shrink: {
                                    transform: "translate(0, 13px) scale(0.7)",
                                    zIndex: 1
                                },
                                filled: {
                                    transform: "translate(2px, 6px) scale(1)",
                                    "&$shrink": {
                                        transform: "translate(0px, -6px) scale(0.75)"
                                    }
                                },
                                outlined: {
                                    transform: "translate(2px, 10px) scale(1)",
                                    "&$shrink": {
                                        transform: "translate(4px, -16px) scale(0.75)"
                                    }
                                }
                            },
                            MuiFormLabel: {
                                root: {
                                    fontSize: 14
                                }
                            },
                            MuiFormHelperText: {
                                contained: {
                                    marginLeft: 4
                                }
                            },
                            MuiSelect: {
                                root: {
                                    borderRadius: 8
                                },
                                icon: {
                                    top: "calc(50% - 10px)",
                                    right: 0
                                },
                                selectMenu: {
                                    paddingRight: "24px"
                                }
                            },
                            MuiInputAdornment: {
                                root: {
                                    alignItems: "flex-end",
                                    height: "auto",
                                    "& button": {
                                        width: 32,
                                        height: 32,
                                        padding: 0
                                    },
                                    "& p": {
                                        minWidth: 24,
                                        lineHeight: "16px"
                                    }
                                },
                                positionStart: {
                                    marginLeft: 0,
                                    marginRight: 0,
                                    "& + *": {
                                        paddingLeft: "0 !important"
                                    }
                                },
                                positionEnd: {
                                    marginRight: 0,
                                    marginLeft: 0
                                }
                            },
                            MuiToolbar: {
                                root: {
                                    borderRadius: 8
                                }
                            },
                            MuiTableCell: {
                                root: {
                                    borderBottom: "dark" === e ? "1px solid #636363" : "1px solid ".concat(B(n, e).palette.primary.light)
                                },
                                head: {
                                    fontWeight: 600
                                }
                            },
                            MuiListItemText: {
                                root: {
                                    whiteSpace: "nowrap"
                                }
                            },
                            MuiLinearProgress: {
                                root: {
                                    borderRadius: 16
                                },
                                bar: {
                                    borderRadius: 16
                                },
                                colorPrimary: {
                                    backgroundColor: "dark" === e ? "#616161" : "#ededed"
                                }
                            },
                            MuiTablePagination: {
                                input: {
                                    marginRight: 32,
                                    marginLeft: 8
                                },
                                selectRoot: {
                                    marginLeft: 0,
                                    marginRight: 0
                                },
                                select: {
                                    paddingRight: 24
                                },
                                selectIcon: {
                                    top: 4
                                }
                            },
                            MuiPickersToolbar: {
                                toolbar: {
                                    borderRadius: 0,
                                    boxShadow: "inset 0 -30px 120px -30px rgba(0, 0, 0, 0.3)"
                                }
                            },
                            MuiPickersClock: {
                                clock: {
                                    backgroundColor: "none",
                                    border: "1px solid ".concat(B(n, e).palette.primary.main)
                                }
                            },
                            MuiPickersClockPointer: {
                                thumb: {
                                    boxShadow: "0 1px 10px 0px ".concat(B(n, e).palette.primary.main)
                                }
                            },
                            MuiPickerDTTabs: {
                                tabs: {
                                    backgroundColor: "transparent",
                                    color: B(n, e).palette.primary.main
                                }
                            },
                            MuiExpansionPanel: {
                                root: {
                                    "&:first-child": {
                                        borderTopLeftRadius: 16,
                                        borderTopRightRadius: 16
                                    },
                                    "&:last-child": {
                                        borderBottomLeftRadius: 16,
                                        borderBottomRightRadius: 16
                                    },
                                    "&$expanded": {
                                        borderRadius: 16,
                                        boxShadow: "0px 0px 0px 1px ".concat(B(n, e).palette.primary.main),
                                        "& + div": {
                                            borderTopLeftRadius: 16,
                                            borderTopRightRadius: 16
                                        }
                                    }
                                }
                            },
                            MuiDialogTitle: {
                                root: {
                                    position: "relative",
                                    marginBottom: 32,
                                    "&:after": {
                                        content: '""',
                                        position: "absolute",
                                        width: 60,
                                        height: 4,
                                        background: B(n, e).palette.primary.main,
                                        bottom: 0,
                                        left: 26
                                    },
                                    "& h2": {
                                        color: "dark" === e ? B(n, e).palette.primary.light : B(n, e).palette.primary.dark
                                    }
                                }
                            },
                            MuiSnackbarContent: {
                                root: {
                                    "@media (min-width: 960px)": {
                                        borderRadius: 8
                                    }
                                }
                            },
                            MuiAppBar: {
                                root: {
                                    boxShadow: "none"
                                },
                                colorPrimary: {
                                    backgroundColor: "dark" === e ? B(n, e).palette.primary.dark : B(n, e).palette.primary.main
                                }
                            },
                            MuiTabs: {
                                root: {
                                    borderRadius: 10
                                },
                                indicator: {
                                    borderRadius: "10px 10px 0 0",
                                    height: 4
                                }
                            },
                            MuiToggleButtonGroup: {
                                root: {
                                    overflow: "hidden",
                                    borderRadius: 8,
                                    boxShadow: "none",
                                    border: "1px solid ".concat(B(n, e).palette.secondary.main)
                                }
                            },
                            MuiToggleButton: {
                                root: {
                                    height: 32,
                                    boxShadow: "none !important",
                                    "&$selected": {
                                        color: B(n, e).palette.secondary.main,
                                        backgroundColor: B(n, e).palette.secondary.light
                                    }
                                }
                            },
                            MUIDataTableToolbar: {
                                filterPaper: {
                                    maxWidth: "none"
                                }
                            },
                            MUIDataTableToolbarSelect: {
                                root: {
                                    boxShadow: "none",
                                    backgroundColor: "dark" === e ? B(n, e).palette.secondary.dark : B(n, e).palette.secondary.light
                                },
                                title: {
                                    padding: "rtl" === o ? "0 26px 0 0" : "0 0 0 26px"
                                },
                                deleteIcon: {
                                    color: "dark" === e ? "#FFF" : "#000"
                                }
                            },
                            MuiChip: {
                                deleteIcon: {
                                    margin: "rtl" === o ? "0 -8px 0 4px" : "0 4px 0 -8px"
                                }
                            },
                            MuiSwitch: {
                                root: {
                                    direction: "ltr"
                                }
                            },
                            MuiInputBase: {
                                input: {
                                    flex: 1
                                }
                            },
                            MUIDataTable: {
                                responsiveStacked: {
                                    overflow: "auto !important",
                                    overflowX: "auto !important"
                                },
                                tableRoot: {
                                    minWidth: 360
                                }
                            },
                            MUIDataTablePagination: {
                                toolbar: {
                                    padding: 0,
                                    "& > p:nth-child(2)": {
                                        "@media (max-width: 400px)": {
                                            display: "none"
                                        }
                                    }
                                },
                                root: {
                                    padding: 0
                                }
                            }
                        }
                    }
                },
                J = o("17efff332f6165736010");

            function Q(n, e, o, i) {
                t || (t = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var r = n && n.defaultProps,
                    c = arguments.length - 3;
                if (e || 0 === c || (e = {
                        children: void 0
                    }),
                    1 === c)
                    e.children = i;
                else if (c > 1) {
                    for (var a = new Array(c), l = 0; l < c; l++)
                        a[l] = arguments[l + 3];
                    e.children = a
                }
                if (e && r)
                    for (var s in r)
                        void 0 === e[s] && (e[s] = r[s]);
                else
                    e || (e = r || {});
                return {
                    $$typeof: t,
                    type: n,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: e,
                    _owner: null
                }
            }

            function Z(n, e) {
                return function(n) {
                    if (Array.isArray(n))
                        return n
                }(n) || function(n, e) {
                    var o = null == n ? null : "undefined" !== typeof Symbol && n[Symbol.iterator] || n["@@iterator"];
                    if (null == o)
                        return;
                    var t, i, r = [],
                        c = !0,
                        a = !1;
                    try {
                        for (o = o.call(n); !(c = (t = o.next()).done) && (r.push(t.value), !e || r.length !== e); c = !0)
                        ;
                    } catch (n) {
                        a = !0,
                            i = n
                    } finally {
                        try {
                            c || null == o.return || o.return()
                        } finally {
                            if (a)
                                throw i
                        }
                    }
                    return r
                }(n, e) || W(n, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function W(n, e) {
                if (n) {
                    if ("string" === typeof n)
                        return Y(n, e);
                    var o = Object.prototype.toString.call(n).slice(8, -1);
                    return "Object" === o && n.constructor && (o = n.constructor.name),
                        "Map" === o || "Set" === o ? Array.from(n) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? Y(n, e) : void 0
                }
            }

            function Y(n, e) {
                (null == e || e > n.length) && (e = n.length);
                for (var o = 0, t = new Array(e); o < e; o++)
                    t[o] = n[o];
                return t
            }
            var G, U = Object(w.makeStyles)((function(n) {
                    return {
                        root: function(n) {
                            return {
                                width: "100%",
                                minHeight: "100%",
                                marginTop: 0,
                                zIndex: 1,
                                background: "dark" === Object(F.a)() ? "linear-gradient(to right, #101722, #182333)" : "#fafafa"
                            }
                        },
                        loading: {
                            zIndex: 10,
                            position: "fixed",
                            top: 0,
                            left: 0,
                            width: "100%",
                            opacity: 1,
                            transition: "opacity .5s ease"
                        },
                        loadingWrap: {
                            background: "none"
                        },
                        bar: {
                            background: "#fff"
                        },
                        hide: {
                            opacity: 0
                        }
                    }
                })),
                V = Object(h.create)({
                    plugins: [].concat((G = Object(v.jssPreset)().plugins,
                        function(n) {
                            if (Array.isArray(n))
                                return Y(n)
                        }(G) || function(n) {
                            if ("undefined" !== typeof Symbol && null != n[Symbol.iterator] || null != n["@@iterator"])
                                return Array.from(n)
                        }(G) || W(G) || function() {
                            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()), [x()()])
                }),
                H = r.a.createContext(void 0),
                X = Q(J.ToastContainer, {
                    position: "bottom-right",
                    autoClose: 3e3,
                    hideProgressBar: !1,
                    newestOnTop: !1,
                    closeOnClick: !0,
                    rtl: !1,
                    pauseOnFocusLoss: !0,
                    draggable: !0,
                    pauseOnHover: !0,
                    limit: 2
                });
            var q, K = Object(l.connect)((function(n) {
                    return {
                        force: n,
                        color: n.getIn(["ui", "theme"]),
                        palette: n.getIn(["ui", "palette"]),
                        mode: n.getIn(["ui", "type"]),
                        gradient: n.getIn(["ui", "gradient"]),
                        decoration: n.getIn(["ui", "decoration"]),
                        bgPosition: n.getIn(["ui", "bgPosition"]),
                        layout: n.getIn(["ui", "layout"]),
                        direction: n.getIn(["ui", "direction"])
                    }
                }), (function(n) {
                    return {
                        changeTheme: Object(k.bindActionCreators)(M, n),
                        changeRandomTheme: function() {
                            return n(I)
                        },
                        changeMode: Object(k.bindActionCreators)(S, n),
                        changeGradient: Object(k.bindActionCreators)(N, n),
                        changeDecoration: Object(k.bindActionCreators)(j, n),
                        changeBgPosition: Object(k.bindActionCreators)(L, n),
                        changeLayout: Object(k.bindActionCreators)(T, n),
                        changeDirection: Object(k.bindActionCreators)(E, n)
                    }
                }))((function(n) {
                    var e = U(),
                        o = Z(Object(i.useState)(0), 2),
                        t = o[0],
                        r = o[1],
                        c = Z(Object(i.useState)(Object(w.createMuiTheme)(R(n.color, n.mode, n.direction))), 2),
                        a = c[0],
                        l = c[1],
                        s = Z(Object(i.useState)(void 0), 2),
                        d = (s[0],
                            s[1]);
                    Object(i.useEffect)((function() {
                        d(n.palette);
                        var e = setInterval((function() {
                            r((function(n) {
                                100 === n && clearInterval(e);
                                var o = 40 * Math.random();
                                return Math.min(n + o, 100)
                            }))
                        }), 500);
                        return function() {
                            clearInterval(e)
                        }
                    }), []);
                    var b = n.children;
                    return n.color,
                        n.mode,
                        n.gradient,
                        n.decoration,
                        n.bgPosition,
                        n.layout,
                        n.direction,
                        Q(v.StylesProvider, {
                            jss: V
                        }, void 0, Q(w.MuiThemeProvider, {
                            theme: a
                        }, void 0, Q("div", {
                            className: e.root
                        }, void 0, Q(m.a, {
                            variant: "determinate",
                            value: t,
                            className: t >= 100 ? e.hide : "",
                            classes: {
                                root: e.loading,
                                colorPrimary: e.loadingWrap,
                                barColorPrimary: e.bar
                            }
                        }), Q(H.Provider, {
                            value: function(e) {
                                var o = n.color,
                                    t = n.changeMode,
                                    i = n.direction;
                                l(Object(w.createMuiTheme)(R(o, e, i))),
                                    t(e)
                            }
                        }, void 0, X, b))))
                })),
                _ = o("b912ecc4473ae8a2ff0b"),
                $ = o.n(_),
                nn = o("fd799277b3a5065c8570"),
                en = o.n(nn),
                on = o("d547f4e73aa1d3df70c6"),
                tn = o.n(on),
                rn = o("e086672b5f66e226e94e"),
                cn = o.n(rn),
                an = o("27ee4cbfb80567b90d7f"),
                ln = o.n(an),
                sn = o("5df79c82a80d7ca8e003"),
                dn = o.n(sn),
                bn = o("539e6a99d006e79c3a40");

            function fn(n, e, o, t) {
                q || (q = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var i = n && n.defaultProps,
                    r = arguments.length - 3;
                if (e || 0 === r || (e = {
                        children: void 0
                    }),
                    1 === r)
                    e.children = t;
                else if (r > 1) {
                    for (var c = new Array(r), a = 0; a < r; a++)
                        c[a] = arguments[a + 3];
                    e.children = c
                }
                if (e && i)
                    for (var l in i)
                        void 0 === e[l] && (e[l] = i[l]);
                else
                    e || (e = i || {});
                return {
                    $$typeof: q,
                    type: n,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: e,
                    _owner: null
                }
            }
            var pn, un = Object(w.withStyles)(bn.a)((function(n) {
                var e, o = n.classes,
                    t = n.mode,
                    i = n.gradient,
                    r = n.decoration,
                    c = n.bgPosition,
                    a = n.horizontalMenu;
                return fn("div", {
                    className: o.bgWrap
                }, void 0, fn("div", {
                    className: $()(o.bgbar, a && o.highTop, i ? o.gradientBg : o.solidBg, (e = c,
                        "header" === e ? o.headerBg : "half" === e ? o.halfBg : o.fullBg))
                }, void 0, r && function(n, e) {
                    var t = n + "-" + e;
                    return "dark-half" === t ? fn("img", {
                        src: ln.a,
                        alt: "decoration",
                        className: o.decorationWave
                    }) : "dark-full" === t ? fn("img", {
                        src: dn.a,
                        alt: "decoration",
                        className: o.decorationPetal
                    }) : "light-half" === t ? fn("img", {
                        src: cn.a,
                        alt: "decoration",
                        className: o.decorationWave
                    }) : "light-full" === t && fn("img", {
                        src: dn.a,
                        alt: "decoration",
                        className: o.decorationPetal
                    })
                }(t, c)))
            }));

            function gn() {
                return (gn = Object.assign || function(n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var o = arguments[e];
                        for (var t in o)
                            Object.prototype.hasOwnProperty.call(o, t) && (n[t] = o[t])
                    }
                    return n
                }).apply(this, arguments)
            }

            function mn(n, e, o, t) {
                pn || (pn = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var i = n && n.defaultProps,
                    r = arguments.length - 3;
                if (e || 0 === r || (e = {
                        children: void 0
                    }),
                    1 === r)
                    e.children = t;
                else if (r > 1) {
                    for (var c = new Array(r), a = 0; a < r; a++)
                        c[a] = arguments[a + 3];
                    e.children = c
                }
                if (e && i)
                    for (var l in i)
                        void 0 === e[l] && (e[l] = i[l]);
                else
                    e || (e = i || {});
                return {
                    $$typeof: pn,
                    type: n,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: e,
                    _owner: null
                }
            }
            var hn, yn = Object(w.withStyles)(bn.a)((function(n) {
                    var e = n.classes,
                        o = n.children,
                        t = n.toggleDrawer,
                        c = n.sidebarOpen,
                        a = n.loadTransition,
                        l = n.pageLoaded,
                        s = n.mode,
                        d = n.gradient,
                        b = n.deco,
                        f = n.history,
                        p = n.bgPosition,
                        u = n.changeMode,
                        g = n.place,
                        m = (n.titleException,
                            n.handleOpenGuide);
                    return mn(i.Fragment, {}, void 0, mn(O.a, {
                        toggleDrawerOpen: t,
                        margin: c,
                        gradient: d,
                        position: "left-sidebar",
                        changeMode: u,
                        mode: s,
                        title: g,
                        history: f,
                        openGuide: m
                    }), mn(O.c, {
                        open: c,
                        toggleDrawerOpen: t,
                        loadTransition: a,
                        dataMenu: tn.a,
                        leftSidebar: !0
                    }), mn("main", {
                        className: $()(e.content, c ? "" : e.contentPaddingLeft),
                        id: "mainContent"
                    }, void 0, mn(un, {
                        mode: s,
                        gradient: d,
                        decoration: b,
                        bgPosition: p,
                        horizontalMenu: !1
                    }), mn("section", {
                        className: $()(e.mainWrap, e.sidebarLayout)
                    }, void 0, !l && mn("img", {
                        src: "/images/spinner.gif",
                        alt: "spinner",
                        className: e.circularProgress
                    }), r.a.createElement(en.a, gn({ in: l
                    }, l ? {
                        timeout: 700
                    } : {}), mn("div", {
                        className: l ? "" : e.hideApp
                    }, void 0, o)))))
                })),
                xn = o("921c0b8c557fe6ba5da8"),
                vn = o.n(xn);

            function kn() {
                return (kn = Object.assign || function(n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var o = arguments[e];
                        for (var t in o)
                            Object.prototype.hasOwnProperty.call(o, t) && (n[t] = o[t])
                    }
                    return n
                }).apply(this, arguments)
            }

            function wn(n, e, o, t) {
                hn || (hn = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var i = n && n.defaultProps,
                    r = arguments.length - 3;
                if (e || 0 === r || (e = {
                        children: void 0
                    }),
                    1 === r)
                    e.children = t;
                else if (r > 1) {
                    for (var c = new Array(r), a = 0; a < r; a++)
                        c[a] = arguments[a + 3];
                    e.children = c
                }
                if (e && i)
                    for (var l in i)
                        void 0 === e[l] && (e[l] = i[l]);
                else
                    e || (e = i || {});
                return {
                    $$typeof: hn,
                    type: n,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: e,
                    _owner: null
                }
            }
            var An, Cn = Object(w.withStyles)(bn.a)((function(n) {
                var e = n.classes,
                    o = n.children,
                    t = n.toggleDrawer,
                    c = n.sidebarOpen,
                    a = n.history,
                    l = n.loadTransition,
                    s = n.pageLoaded,
                    d = n.mode,
                    b = n.gradient,
                    f = n.deco,
                    p = n.bgPosition,
                    u = n.changeMode,
                    g = n.place,
                    m = n.titleException,
                    h = n.handleOpenGuide;
                return wn(i.Fragment, {}, void 0, wn(O.a, {
                    toggleDrawerOpen: t,
                    margin: c,
                    gradient: b,
                    position: "right-sidebar",
                    changeMode: u,
                    mode: d,
                    title: g,
                    history: a,
                    openGuide: h
                }), wn("main", {
                    className: $()(e.content, c ? "" : e.contentPaddingRight),
                    id: "mainContent"
                }, void 0, wn(un, {
                    mode: d,
                    gradient: b,
                    decoration: f,
                    bgPosition: p,
                    horizontalMenu: !1
                }), wn("section", {
                    className: $()(e.mainWrap, e.sidebarLayout)
                }, void 0, m.indexOf(a.location.pathname) < 0 && wn("div", {
                    className: e.pageTitle
                }, void 0, wn(vn.a, {
                    component: "h4",
                    className: "header" === p ? e.darkTitle : e.lightTitle,
                    variant: "h4"
                }, void 0, g)), !s && wn("img", {
                    src: "/images/spinner.gif",
                    alt: "spinner",
                    className: e.circularProgress
                }), r.a.createElement(en.a, kn({ in: s
                }, s ? {
                    timeout: 700
                } : {}), wn("div", {
                    className: s ? "" : e.hideApp
                }, void 0, o)))), wn(O.c, {
                    open: c,
                    toggleDrawerOpen: t,
                    loadTransition: l,
                    dataMenu: tn.a,
                    leftSidebar: !1
                }))
            }));

            function Mn() {
                return (Mn = Object.assign || function(n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var o = arguments[e];
                        for (var t in o)
                            Object.prototype.hasOwnProperty.call(o, t) && (n[t] = o[t])
                    }
                    return n
                }).apply(this, arguments)
            }

            function In(n, e, o, t) {
                An || (An = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var i = n && n.defaultProps,
                    r = arguments.length - 3;
                if (e || 0 === r || (e = {
                        children: void 0
                    }),
                    1 === r)
                    e.children = t;
                else if (r > 1) {
                    for (var c = new Array(r), a = 0; a < r; a++)
                        c[a] = arguments[a + 3];
                    e.children = c
                }
                if (e && i)
                    for (var l in i)
                        void 0 === e[l] && (e[l] = i[l]);
                else
                    e || (e = i || {});
                return {
                    $$typeof: An,
                    type: n,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: e,
                    _owner: null
                }
            }
            var Sn, Nn = Object(w.withStyles)(bn.a)((function(n) {
                    var e = n.classes,
                        o = n.children,
                        t = n.toggleDrawer,
                        c = n.sidebarOpen,
                        a = (n.loadTransition,
                            n.pageLoaded),
                        l = n.mode,
                        s = n.gradient,
                        d = n.deco,
                        b = n.history,
                        f = n.bgPosition,
                        p = n.changeMode,
                        u = n.place,
                        g = (n.titleException,
                            n.handleOpenGuide);
                    return In(i.Fragment, {}, void 0, In(O.a, {
                        toggleDrawerOpen: t,
                        margin: c,
                        gradient: s,
                        position: "left-sidebar-big",
                        changeMode: p,
                        mode: l,
                        title: u,
                        history: b,
                        openGuide: g
                    }), In("main", {
                        className: $()(e.content, c ? "" : e.contentPaddingLeftBig),
                        id: "mainContent"
                    }, void 0, In(un, {
                        mode: l,
                        gradient: s,
                        decoration: d,
                        bgPosition: f,
                        horizontalMenu: !1
                    }), In("section", {
                        className: $()(e.mainWrap, e.sidebarLayout)
                    }, void 0, !a && In("img", {
                        src: "/images/spinner.gif",
                        alt: "spinner",
                        className: e.circularProgress
                    }), r.a.createElement(en.a, Mn({ in: a
                    }, a ? {
                        timeout: 700
                    } : {}), In("div", {
                        className: a ? "" : e.hideApp
                    }, void 0, o)))))
                })),
                jn = o("b78ee477e6ac6a65dd83"),
                Tn = o.n(jn),
                Ln = o("282d5645b44ba868741e"),
                En = o.n(Ln),
                Dn = o("e799c547a20a503b338f"),
                On = o.n(Dn),
                zn = o("7fc96438efa42ce51062"),
                Pn = o.n(zn),
                Bn = o("1037a6e0d5914309f74c"),
                Fn = o.n(Bn),
                Rn = o("9b4cf02f7f3c4453e043"),
                Jn = o.n(Rn),
                Qn = o("dc266c052eac816608b1"),
                Zn = o.n(Qn),
                Wn = o("ea78a4d6077b4ce99010"),
                Yn = o.n(Wn),
                Gn = o("03b280d13c7955996505"),
                Un = o("e2af2251560851f21613"),
                Vn = (o("3f46a6218bc9ef19bec6"),
                    o("18240ffc6f17cbbfe91c")),
                Hn = o.n(Vn),
                Xn = o("9c34ccdbe0206ee16163");

            function qn(n, e, o, t) {
                Sn || (Sn = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var i = n && n.defaultProps,
                    r = arguments.length - 3;
                if (e || 0 === r || (e = {
                        children: void 0
                    }),
                    1 === r)
                    e.children = t;
                else if (r > 1) {
                    for (var c = new Array(r), a = 0; a < r; a++)
                        c[a] = arguments[a + 3];
                    e.children = c
                }
                if (e && i)
                    for (var l in i)
                        void 0 === e[l] && (e[l] = i[l]);
                else
                    e || (e = i || {});
                return {
                    $$typeof: Sn,
                    type: n,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: e,
                    _owner: null
                }
            }

            function Kn(n, e) {
                return function(n) {
                    if (Array.isArray(n))
                        return n
                }(n) || function(n, e) {
                    var o = null == n ? null : "undefined" !== typeof Symbol && n[Symbol.iterator] || n["@@iterator"];
                    if (null == o)
                        return;
                    var t, i, r = [],
                        c = !0,
                        a = !1;
                    try {
                        for (o = o.call(n); !(c = (t = o.next()).done) && (r.push(t.value), !e || r.length !== e); c = !0)
                        ;
                    } catch (n) {
                        a = !0,
                            i = n
                    } finally {
                        try {
                            c || null == o.return || o.return()
                        } finally {
                            if (a)
                                throw i
                        }
                    }
                    return r
                }(n, e) || function(n, e) {
                    if (!n)
                        return;
                    if ("string" === typeof n)
                        return _n(n, e);
                    var o = Object.prototype.toString.call(n).slice(8, -1);
                    "Object" === o && n.constructor && (o = n.constructor.name);
                    if ("Map" === o || "Set" === o)
                        return Array.from(n);
                    if ("Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
                        return _n(n, e)
                }(n, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function _n(n, e) {
                (null == e || e > n.length) && (e = n.length);
                for (var o = 0, t = new Array(e); o < e; o++)
                    t[o] = n[o];
                return t
            }
            var $n = function(n, e) {
                    Hn.a.event({
                        category: n,
                        action: e,
                        label: "labelName",
                        value: 10,
                        nonInteraction: !1
                    })
                },
                ne = (document.documentElement,
                    qn(Yn.a, {})),
                ee = qn("div", {}),
                oe = qn("div", {}),
                te = qn("span", {
                    className: "ts-icon"
                }, void 0, qn("i", {
                    className: "icon-twitter"
                })),
                ie = qn("span", {
                    className: "ts-text"
                }, void 0, "Twitter"),
                re = qn("span", {
                    className: "ts-icon"
                }, void 0, qn("i", {
                    className: "icon-telegram"
                })),
                ce = qn("span", {
                    className: "ts-text"
                }, void 0, "Telegram"),
                ae = qn("span", {
                    className: "ts-icon"
                }, void 0, qn("i", {
                    className: "icon-question-circle"
                })),
                le = qn("span", {
                    className: "ts-text"
                }, void 0, "Help"),
                se = qn("span", {
                    className: "ts-icon"
                }, void 0, qn("i", {
                    className: "icon-book"
                })),
                de = qn("span", {
                    className: "ts-text"
                }, void 0, "Documentation"),
                be = qn("span", {
                    className: "ts-icon"
                }, void 0, qn("i", {
                    className: "icon-youtube"
                })),
                fe = qn("span", {
                    className: "ts-text"
                }, void 0, "Youtube"),
                pe = qn("span", {
                    className: "ts-icon"
                }, void 0, qn("i", {
                    className: "icon-discord"
                })),
                ue = qn("span", {
                    className: "ts-text"
                }, void 0, "Discord");

            function ge(n) {
                var e = Kn(Object(i.useState)(!1), 2),
                    o = (e[0],
                        e[1],
                        Kn(Object(i.useState)(""), 2)),
                    t = (o[0],
                        o[1],
                        Kn(Object(i.useState)(null), 2)),
                    r = (t[0],
                        t[1],
                        Kn(Object(i.useState)(!1), 2)),
                    c = r[0],
                    a = r[1],
                    l = !1,
                    s = function() {
                        var n = document.documentElement,
                            e = (window.pageYOffset || n.scrollTop) - (n.clientTop || 0) > 64;
                        l !== e && (a(e),
                            l = e)
                    };
                Object(i.useEffect)((function() {
                    return window.addEventListener("scroll", s),
                        function() {
                            window.removeEventListener("scroll", s)
                        }
                }), []);
                var d = n.classes,
                    b = (n.type,
                        n.dataMenu),
                    f = n.toggleDrawerOpen,
                    p = n.openMobileNav,
                    g = n.loadTransition;
                n.isLogin,
                    n.logoLink;
                return qn(Tn.a, {
                    className: $()(d.appBar, d.attachedbar, c ? d.fixed : "")
                }, void 0, qn("div", {
                    className: d.appMenu
                }, void 0, qn(Jn.a, {
                    lgUp: !0
                }, void 0, qn(On.a, {
                    className: d.menuButton,
                    "aria-label": "Menu",
                    onClick: f
                }, void 0, ne)), qn(Jn.a, {
                    smDown: !0
                }, void 0, qn(u.NavLink, {
                    to: {
                        pathname: "https://dxsale.network"
                    },
                    target: "_blank",
                    className: d.brand,
                    style: {
                        fontFamily: "Bahnschrift",
                        fontSize: "0.9rem"
                    }
                }, void 0, qn("span", {
                    style: {
                        marginRight: "5px"
                    }
                }, void 0, " ", "Powered by", " "), qn("img", {
                    src: Pn.a,
                    alt: Fn.a.name
                })), ee), qn(En.a, {}, void 0, oe, qn("ul", {
                    id: "top-social",
                    style: {
                        fontSize: "0.9rem"
                    }
                }, void 0, qn("li", {}, void 0, qn("a", {
                    onClick: function() {
                        $n("Buttons", "HeaderMenu Twitter")
                    },
                    style: {
                        textDecoration: "none"
                    },
                    href: "https://twitter.com/dxsale",
                    className: "si-twitter"
                }, void 0, te, ie)), qn("li", {}, void 0, qn("a", {
                    onClick: function() {
                        $n("Buttons", "HeaderMenu Telegram")
                    },
                    style: {
                        textDecoration: "none"
                    },
                    href: "https://t.me/dxsale",
                    className: "si-facebook"
                }, void 0, re, ce)), qn("li", {}, void 0, qn("a", {
                    onClick: function() {
                        $n("Buttons", "HeaderMenu Help")
                    },
                    style: {
                        textDecoration: "none"
                    },
                    href: "httsp://t.me/dxdevs",
                    className: "si-github"
                }, void 0, ae, le)), qn("li", {}, void 0, qn("a", {
                    onClick: function() {
                        $n("Buttons", "HeaderMenu Docs")
                    },
                    style: {
                        textDecoration: "none"
                    },
                    href: "https://docs.dxsale.network",
                    className: "si-email3"
                }, void 0, se, de)), qn("li", {}, void 0, qn("a", {
                    onClick: function() {
                        $n("Buttons", "HeaderMenu Youtube")
                    },
                    style: {
                        textDecoration: "none"
                    },
                    href: "https://www.youtube.com/c/DxSALE",
                    className: "si-youtube"
                }, void 0, be, fe)), qn("li", {}, void 0, qn("a", {
                    onClick: function() {
                        $n("Buttons", "HeaderMenu Discord")
                    },
                    style: {
                        textDecoration: "none"
                    },
                    href: "https://discord.gg/j4PpMVQMMC",
                    className: "si-instagram"
                }, void 0, pe, ue))))), qn(Jn.a, {
                    lgUp: !0
                }, void 0, qn(Zn.a, {
                    onClose: f,
                    onOpen: f,
                    open: !p,
                    anchor: "left"
                }, void 0, qn("div", {
                    className: d.swipeDrawerPaper
                }, void 0, qn(Gn.a, {
                    drawerPaper: !0,
                    leftSidebar: !0,
                    toggleDrawerOpen: f,
                    loadTransition: g,
                    dataMenu: b
                })))))
            }
            ge.defaultProps = {
                isLogin: !0,
                logoLink: "/"
            };
            Object(w.withStyles)(Un.a)(ge);
            var me, he = o("0d939196e59ed73c94e6");
            o("988b7bbe4d0c07f69a17"),
                o("4450cc78ff21b2cfaf67"),
                o("18fd55adb10446515347");

            function ye(n, e, o, t) {
                me || (me = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var i = n && n.defaultProps,
                    r = arguments.length - 3;
                if (e || 0 === r || (e = {
                        children: void 0
                    }),
                    1 === r)
                    e.children = t;
                else if (r > 1) {
                    for (var c = new Array(r), a = 0; a < r; a++)
                        c[a] = arguments[a + 3];
                    e.children = c
                }
                if (e && i)
                    for (var l in i)
                        void 0 === e[l] && (e[l] = i[l]);
                else
                    e || (e = i || {});
                return {
                    $$typeof: me,
                    type: n,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: e,
                    _owner: null
                }
            }
            ye(Xn.Icon, {
                    icon: "bx:home"
                }),
                ye(Xn.Icon, {
                    icon: "clarity:launchpad-line"
                }),
                ye(Xn.Icon, {
                    icon: "ic:outline-generating-tokens"
                }),
                ye(Xn.Icon, {
                    icon: "bi:file-lock"
                }),
                ye(Xn.Icon, {
                    icon: "iconoir:leaderboard-star"
                }),
                Object(he.withStyles)((function(n) {
                    return {
                        root: (e = {
                                display: "none"
                            },
                            o = n.breakpoints.down("md"),
                            t = {
                                display: "block"
                            },
                            o in e ? Object.defineProperty(e, o, {
                                value: t,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[o] = t,
                            e)
                    };
                    var e, o, t
                }))(he.Box),
                ye("div", {
                    className: "corners"
                }),
                o("f6a2b284ef82ea89a51f");
            var xe, ve = function() {
                var n = Object(u.useHistory)();
                return {
                    navigateRefUrl: function(e) {
                        var o = new URL(document.location).searchParams,
                            t = o.get("chain"),
                            i = o.get("ref"),
                            r = "".concat(e, "?chain=").concat(t);
                        i && (r = "".concat(e, "?ref=").concat(i, "&chain=").concat(t)),
                            n.push(r)
                    }
                }
            };

            function ke(n, e, o, t, i, r, c) {
                try {
                    var a = n[r](c),
                        l = a.value
                } catch (n) {
                    return void o(n)
                }
                a.done ? e(l) : Promise.resolve(l).then(t, i)
            }

            function we(n, e, o, t) {
                xe || (xe = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var i = n && n.defaultProps,
                    r = arguments.length - 3;
                if (e || 0 === r || (e = {
                        children: void 0
                    }),
                    1 === r)
                    e.children = t;
                else if (r > 1) {
                    for (var c = new Array(r), a = 0; a < r; a++)
                        c[a] = arguments[a + 3];
                    e.children = c
                }
                if (e && i)
                    for (var l in i)
                        void 0 === e[l] && (e[l] = i[l]);
                else
                    e || (e = i || {});
                return {
                    $$typeof: xe,
                    type: n,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: e,
                    _owner: null
                }
            }
            var Ae, Ce = Object(he.makeStyles)((function(n) {
                    return {
                        modeswitch: (e = {
                                margin: "0 20px 0 0",
                                padding: "0",
                                "&:hover": {
                                    backgroundColor: "transparent"
                                }
                            },
                            o = n.breakpoints.down("xs"),
                            t = {
                                marginRight: "0"
                            },
                            o in e ? Object.defineProperty(e, o, {
                                value: t,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[o] = t,
                            e),
                        dxlogo: {
                            height: "20px",
                            cursor: "pointer",
                            "&:hover": {
                                backgroundColor: "transparent"
                            }
                        },
                        social: {
                            margin: "8px 0px 8px 0px !important",
                            display: "flex",
                            justifyContent: "flex-end !important",
                            textAlign: "center",
                            alignItems: "center",
                            fontSize: "0.9rem"
                        },
                        topheader: {
                            color: "white",
                            padding: "5px 15px 5px 20px",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center"
                        },
                        headerBg: {
                            backgroundColor: "dark" === Object(F.a)() ? "#061121" : "#2196F3",
                            position: "relative",
                            zIndex: "1"
                        },
                        lightmodeicon: {
                            color: "#51adf6"
                        },
                        darkmodeicon: {
                            color: "#303f56"
                        },
                        maxW: {
                            maxWidth: "2000px"
                        }
                    };
                    var e, o, t
                })),
                Me = function(n, e) {
                    Hn.a.event({
                        category: n,
                        action: e,
                        label: "labelName",
                        value: 10,
                        nonInteraction: !1
                    })
                },
                Ie = we("span", {
                    className: "ts-icon"
                }, void 0, we("i", {
                    className: "icon-twitter"
                })),
                Se = we("span", {
                    className: "ts-text"
                }, void 0, "Twitter"),
                Ne = we("span", {
                    className: "ts-icon"
                }, void 0, we("i", {
                    className: "icon-telegram"
                })),
                je = we("span", {
                    className: "ts-text"
                }, void 0, "Telegram"),
                Te = we("span", {
                    className: "ts-icon"
                }, void 0, we("i", {
                    className: "icon-question-circle"
                })),
                Le = we("span", {
                    className: "ts-text"
                }, void 0, "Help"),
                Ee = we("span", {
                    className: "ts-icon"
                }, void 0, we("i", {
                    className: "icon-book"
                })),
                De = we("span", {
                    className: "ts-text"
                }, void 0, "Documentation"),
                Oe = we("span", {
                    className: "ts-icon"
                }, void 0, we("i", {
                    className: "icon-youtube"
                })),
                ze = we("span", {
                    className: "ts-text"
                }, void 0, "Youtube"),
                Pe = we("span", {
                    className: "ts-icon"
                }, void 0, we("i", {
                    className: "icon-discord"
                })),
                Be = we("span", {
                    className: "ts-text"
                }, void 0, "Discord"),
                Fe = function() {
                    Object(u.useHistory)();
                    var n = Object(i.useContext)(H),
                        e = Ce(),
                        t = ve().navigateRefUrl,
                        r = "dark" === Object(F.a)() ? we(Xn.Icon, {
                            icon: "ic:baseline-light-mode",
                            className: e.lightmodeicon
                        }) : we(Xn.Icon, {
                            icon: "ic:baseline-mode-night",
                            className: e.darkmodeicon
                        }),
                        c = new URL(document.location).searchParams.get("chain");
                    null == c && (c = "BNB"),
                        Object(i.useEffect)((function() {
                            n(Object(F.a)())
                        }), []);
                    var a = function() {
                        var e, o = (e = regeneratorRuntime.mark((function e() {
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;)
                                        switch (e.prev = e.next) {
                                            case 0:
                                                "light" === Object(F.a)() ? (localStorage.setItem("mode", "dark"),
                                                    n("dark")) : (localStorage.setItem("mode", "light"),
                                                    n("light"));
                                            case 1:
                                            case "end":
                                                return e.stop()
                                        }
                                }), e)
                            })),
                            function() {
                                var n = this,
                                    o = arguments;
                                return new Promise((function(t, i) {
                                    var r = e.apply(n, o);

                                    function c(n) {
                                        ke(r, t, i, c, a, "next", n)
                                    }

                                    function a(n) {
                                        ke(r, t, i, c, a, "throw", n)
                                    }
                                    c(void 0)
                                }))
                            }
                        );
                        return function() {
                            return o.apply(this, arguments)
                        }
                    }();
                    return we("div", {
                        align: "center",
                        className: e.headerBg
                    }, void 0, we("div", {
                        className: e.topheader
                    }, void 0, we("div", {}, void 0, we("img", {
                        className: e.dxlogo,
                        onClick: t.bind(void 0, "/"),
                        src: o("9a0a7af05ba70da6456a")
                    })), we("div", {}, void 0, we("ul", {
                        className: e.social,
                        id: "top-social"
                    }, void 0, we(he.IconButton, {
                        className: e.modeswitch,
                        edge: "end",
                        color: "inherit",
                        "aria-label": "mode",
                        onClick: function() {
                            a(),
                                Me("Buttons", "Light/Dark Switch Made")
                        }
                    }, void 0, r), we(he.Hidden, {
                        xsDown: !0
                    }, void 0, we("li", {}, void 0, we("a", {
                        onClick: function() {
                            Me("Buttons", "HeaderMenu Twitter")
                        },
                        style: {
                            textDecoration: "none"
                        },
                        href: "https://twitter.com/dxsale",
                        target: "_blank",
                        className: "si-twitter"
                    }, void 0, Ie, Se)), we("li", {}, void 0, we("a", {
                        onClick: function() {
                            Me("Buttons", "HeaderMenu Telegram")
                        },
                        style: {
                            textDecoration: "none"
                        },
                        href: "https://t.me/dxsale",
                        target: "_blank",
                        className: "si-facebook"
                    }, void 0, Ne, je)), we("li", {}, void 0, we("a", {
                        onClick: function() {
                            Me("Buttons", "HeaderMenu Help")
                        },
                        style: {
                            textDecoration: "none"
                        },
                        href: "https://t.me/DxSale",
                        target: "_blank",
                        className: "si-github"
                    }, void 0, Te, Le)), we("li", {}, void 0, we("a", {
                        onClick: function() {
                            Me("Buttons", "HeaderMenu Docs")
                        },
                        style: {
                            textDecoration: "none"
                        },
                        href: "https://docs.dxsale.network",
                        target: "_blank",
                        className: "si-email3"
                    }, void 0, Ee, De)), we("li", {}, void 0, we("a", {
                        onClick: function() {
                            Me("Buttons", "HeaderMenu Youtube")
                        },
                        style: {
                            textDecoration: "none"
                        },
                        href: "https://www.youtube.com/c/DxSALE",
                        target: "_blank",
                        className: "si-youtube"
                    }, void 0, Oe, ze)), we("li", {}, void 0, we("a", {
                        onClick: function() {
                            Me("Buttons", "HeaderMenu Discord")
                        },
                        style: {
                            textDecoration: "none"
                        },
                        href: "https://discord.gg/j4PpMVQMMC",
                        target: "_blank",
                        className: "si-instagram"
                    }, void 0, Pe, Be)))))))
                },
                Re = o("435859b6b76fb67a754a"),
                Je = o.n(Re);
            o("fd7c212f24c9e76a185d");

            function Qe(n, e, o, t) {
                Ae || (Ae = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var i = n && n.defaultProps,
                    r = arguments.length - 3;
                if (e || 0 === r || (e = {
                        children: void 0
                    }),
                    1 === r)
                    e.children = t;
                else if (r > 1) {
                    for (var c = new Array(r), a = 0; a < r; a++)
                        c[a] = arguments[a + 3];
                    e.children = c
                }
                if (e && i)
                    for (var l in i)
                        void 0 === e[l] && (e[l] = i[l]);
                else
                    e || (e = i || {});
                return {
                    $$typeof: Ae,
                    type: n,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: e,
                    _owner: null
                }
            }

            function Ze(n, e) {
                return function(n) {
                    if (Array.isArray(n))
                        return n
                }(n) || function(n, e) {
                    var o = null == n ? null : "undefined" !== typeof Symbol && n[Symbol.iterator] || n["@@iterator"];
                    if (null == o)
                        return;
                    var t, i, r = [],
                        c = !0,
                        a = !1;
                    try {
                        for (o = o.call(n); !(c = (t = o.next()).done) && (r.push(t.value), !e || r.length !== e); c = !0)
                        ;
                    } catch (n) {
                        a = !0,
                            i = n
                    } finally {
                        try {
                            c || null == o.return || o.return()
                        } finally {
                            if (a)
                                throw i
                        }
                    }
                    return r
                }(n, e) || function(n, e) {
                    if (!n)
                        return;
                    if ("string" === typeof n)
                        return We(n, e);
                    var o = Object.prototype.toString.call(n).slice(8, -1);
                    "Object" === o && n.constructor && (o = n.constructor.name);
                    if ("Map" === o || "Set" === o)
                        return Array.from(n);
                    if ("Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
                        return We(n, e)
                }(n, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function We(n, e) {
                (null == e || e > n.length) && (e = n.length);
                for (var o = 0, t = new Array(e); o < e; o++)
                    t[o] = n[o];
                return t
            }
            var Ye = Object(he.makeStyles)((function(n) {
                    return {
                        titlestyle: {
                            fontWeight: "bold !important",
                            color: "dark" === Object(F.a)() ? "#9aa4b3" : "black",
                            opacity: "0.7 !important",
                            fontSize: "65% !important",
                            marginLeft: "10px !important"
                        },
                        subtitle: {
                            fontWeight: "bold !important",
                            color: "#9aa4b3",
                            opacity: "0.9",
                            fontSize: "60% !important",
                            marginTop: "-5px !important",
                            marginLeft: "10px !important"
                        },
                        boxstyle: {
                            marginLeft: "0px",
                            width: "38px",
                            height: "38px",
                            display: "flex",
                            borderRadius: "20%",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#2196F3"
                        },
                        iconstyle: {
                            color: "white",
                            width: "25px",
                            height: "25px"
                        },
                        menuitem: {
                            padding: "10px 0 10px 0",
                            color: "#9aa4b3",
                            fontWeight: "bold !important",
                            fontSize: "100%  ",
                            letterSpacing: "1px !important",
                            marginLeft: "35px !important",
                            "&:hover": {
                                color: "#2196F3"
                            }
                        },
                        popperstyle: {
                            marginLeft: "15px",
                            fontSize: "140%",
                            zIndex: "999",
                            padding: "0 30px 30px 0",
                            borderRadius: "15px",
                            boxShadow: "dark" === Object(F.a)() ? "none" : " 1px 1px 20px -6px #2196F3",
                            borderStyle: "dark" === Object(F.a)() ? "solid" : "0",
                            borderColor: "dark" === Object(F.a)() ? "#313d50" : " #2196F3",
                            borderWidth: "dark" === Object(F.a)() ? "2px" : "0",
                            backgroundColor: "dark" === Object(F.a)() ? "rgba(30,39,53,.7)" : "white",
                            backdropFilter: "dark" === Object(F.a)() ? "blur(7px)" : "blur(0)"
                        },
                        dxappsPopper: {
                            maxWidth: "450px"
                        },
                        subitems: {
                            padding: "30px 0 0 30px",
                            marginBottom: "0px",
                            cursor: "pointer",
                            "&:hover": {
                                "& $iconstyle": {
                                    width: "20px",
                                    height: "20px"
                                },
                                "& $titlestyle": {
                                    color: "#2196F3"
                                },
                                "& $subtitle": {
                                    color: "#2196F3"
                                }
                            }
                        },
                        cursorp: {
                            cursor: "pointer",
                            "&:hover": {
                                "& $iconstyle": {
                                    width: "20px",
                                    height: "20px"
                                },
                                "& $titlestyle": {
                                    color: "#2196F3"
                                },
                                "& $subtitle": {
                                    color: "#2196F3"
                                }
                            }
                        },
                        setdiv: {
                            position: "absolute",
                            marginTop: "60px",
                            zIndex: "1",
                            marginLeft: "15px !important"
                        },
                        subitemlink: {
                            cursor: "pointer",
                            color: "#2196F3",
                            fontSize: "60%"
                        },
                        menulinkpadding: {
                            paddingLeft: "30px"
                        },
                        menubutton: {
                            zIndex: "999"
                        },
                        swipeDrawerPaper: {
                            width: 240
                        }
                    }
                })),
                Ge = Qe(Yn.a, {});
            var Ue, Ve = function() {
                var n = new URL(document.location).searchParams,
                    e = Ye(),
                    o = Ze(Object(i.useState)(null), 2),
                    t = o[0],
                    c = o[1],
                    a = Ze(Object(i.useState)(-1), 2),
                    l = a[0],
                    s = a[1],
                    d = Ze(r.a.useState(!1), 2),
                    b = d[0],
                    f = d[1],
                    p = ve().navigateRefUrl,
                    u = function() {
                        f(!b)
                    },
                    g = n.get("chain");
                null == g && (g = "BNB");
                var m = function(n, e) {
                        c(n.currentTarget),
                            s(e)
                    },
                    h = function() {
                        c(null),
                            s(-1)
                    };
                return Qe("div", {
                    className: e.setdiv
                }, void 0, Qe(Je.a, {
                    container: !0,
                    direction: "row"
                }, void 0, Qe(he.Hidden, {
                    mdUp: !0
                }, void 0, Qe(he.IconButton, {
                    className: e.menuButton,
                    "aria-label": "Menu",
                    color: "inherit",
                    onClick: u
                }, void 0, Ge), Qe(he.Box, {
                    component: "nav"
                }, void 0, Qe(he.SwipeableDrawer, {
                    onClose: u,
                    onOpen: u,
                    open: b,
                    anchor: "left"
                }, void 0, Qe("div", {
                    className: e.swipeDrawerPaper
                }, void 0, Qe(Gn.a, {
                    drawerPaper: !0,
                    toggleDrawerOpen: u,
                    dataMenu: tn.a
                }))))), Qe(he.Hidden, {
                    smDown: !0
                }, void 0, Qe(he.Typography, {
                    onClick: p.bind(this, "/"),
                    className: "".concat(e.menuitem, " ").concat(e.cursorp)
                }, void 0, "Home"), Qe("div", {
                    onMouseEnter: function(n) {
                        return m(n, 0)
                    },
                    onMouseLeave: h
                }, void 0, Qe(he.Typography, {
                    className: e.menuitem
                }, void 0, "DxApps"), Qe(he.Popper, {
                    placement: "bottom-end",
                    className: e.popperstyle,
                    id: 0,
                    open: 0 === l,
                    anchorEl: t,
                    disablePortal: !0
                }, void 0, Qe(Je.a, {
                    onClick: h,
                    container: !0,
                    direction: "row",
                    alignItems: "center",
                    justify: "center",
                    className: e.dxappsPopper
                }, void 0, Qe(Je.a, {
                    onClick: p.bind(this, "/dxsale"),
                    className: e.subitems,
                    item: !0,
                    xs: 6,
                    container: !0,
                    direction: "row",
                    alignItems: "center"
                }, void 0, Qe(he.Box, {
                    className: e.boxstyle
                }, void 0, Qe(Xn.Icon, {
                    className: e.iconstyle,
                    icon: "ion:create-sharp"
                })), Qe(Je.a, {
                    direction: "column",
                    alignItems: "left"
                }, void 0, Qe(he.Typography, {
                    className: e.titlestyle
                }, void 0, "DxSale"), Qe(he.Typography, {
                    className: e.subtitle
                }, void 0, "View all sales"))), Qe(Je.a, {
                    onClick: p.bind(this, "/dxlock"),
                    className: e.subitems,
                    item: !0,
                    xs: 6,
                    container: !0,
                    direction: "row",
                    alignItems: "center"
                }, void 0, Qe(he.Box, {
                    className: e.boxstyle
                }, void 0, Qe(Xn.Icon, {
                    className: e.iconstyle,
                    icon: "bi:file-lock-fill"
                })), Qe(Je.a, {
                    direction: "column",
                    alignItems: "left"
                }, void 0, Qe(he.Typography, {
                    className: e.titlestyle
                }, void 0, "DxLock"), Qe(he.Typography, {
                    className: e.subtitle
                }, void 0, "View all lockers"))), Qe(Je.a, {
                    className: e.menulinkpadding,
                    item: !0,
                    xs: 6,
                    container: !0,
                    direction: "row",
                    alignItems: "center"
                }, void 0, Qe(Je.a, {
                    container: !0,
                    direction: "row",
                    alignItems: "baseline"
                }, void 0, Qe(he.Typography, {
                    variant: "subtitle",
                    className: "subitem-underline-animation submenu-text",
                    onClick: p.bind(this, "/dxsalecreate")
                }, void 0, "Create Sale"), "\xa0", Qe(he.Typography, {
                    variant: "subtitle",
                    className: "subitem-underline-animation submenu-text",
                    onClick: p.bind(this, "/presalemanage")
                }, void 0, "Manage Sale"))), Qe(Je.a, {
                    className: e.menulinkpadding,
                    item: !0,
                    xs: 6,
                    container: !0,
                    direction: "row",
                    alignItems: "center"
                }, void 0, Qe(Je.a, {
                    container: !0,
                    direction: "row",
                    alignItems: "baseline"
                }, void 0, Qe(he.Typography, {
                    variant: "subtitle",
                    className: "subitem-underline-animation submenu-text",
                    onClick: p.bind(this, "/dxlocktoken")
                }, void 0, "Lock Tokens"), "\xa0", Qe(he.Typography, {
                    variant: "subtitle",
                    className: "subitem-underline-animation submenu-text",
                    onClick: p.bind(this, "/dxlocklp")
                }, void 0, "Lock LP"))), Qe(Je.a, {
                    onClick: p.bind(this, "/dxdrop"),
                    className: e.subitems,
                    item: !0,
                    xs: 6,
                    container: !0,
                    direction: "row",
                    alignItems: "center"
                }, void 0, Qe(he.Box, {
                    className: e.boxstyle
                }, void 0, Qe(Xn.Icon, {
                    className: e.iconstyle,
                    icon: "icon-park-solid:parachute"
                })), Qe(Je.a, {
                    direction: "column",
                    alignItems: "left"
                }, void 0, Qe(he.Typography, {
                    className: e.titlestyle
                }, void 0, "DxDrop"), Qe(he.Typography, {
                    className: e.subtitle
                }, void 0, "Airdrop tokens"))), Qe(Je.a, {
                    onClick: p.bind(this, "/dxmint"),
                    className: e.subitems,
                    item: !0,
                    xs: 6,
                    container: !0,
                    direction: "row",
                    alignItems: "center"
                }, void 0, Qe(he.Box, {
                    className: e.boxstyle
                }, void 0, Qe(Xn.Icon, {
                    className: e.iconstyle,
                    icon: "fa:list-ul"
                })), Qe(Je.a, {
                    direction: "column",
                    alignItems: "left"
                }, void 0, Qe(he.Typography, {
                    className: e.titlestyle
                }, void 0, "DxMint"), Qe(he.Typography, {
                    className: e.subtitle
                }, void 0, "Mint a token"))), Qe(Je.a, {
                    onClick: function() {
                        J.toast.info("Coming Soon")
                    },
                    style: {
                        cursor: "not-allowed"
                    },
                    className: e.subitems,
                    item: !0,
                    xs: 6,
                    container: !0,
                    direction: "row",
                    alignItems: "center"
                }, void 0, Qe(he.Box, {
                    className: e.boxstyle
                }, void 0, Qe(Xn.Icon, {
                    className: e.iconstyle,
                    icon: "fa6-solid:ranking-star"
                })), Qe(Je.a, {
                    direction: "column",
                    alignItems: "left"
                }, void 0, Qe(he.Typography, {
                    className: e.titlestyle
                }, void 0, "Leaderboard"), Qe(he.Typography, {
                    className: e.subtitle
                }, void 0, "Most funds raised"))), Qe(Je.a, {
                    className: e.subitems,
                    onClick: function() {
                        var n, e;
                        window.location.href = "https://archives.dx.app",
                            n = "Buttons",
                            e = "HoverMenu Archives",
                            Hn.a.event({
                                category: n,
                                action: e,
                                label: "labelName",
                                value: 10,
                                nonInteraction: !1
                            })
                    },
                    item: !0,
                    xs: 6,
                    container: !0,
                    direction: "row",
                    alignItems: "center"
                }, void 0, Qe(he.Box, {
                    className: e.boxstyle
                }, void 0, Qe(Xn.Icon, {
                    className: e.iconstyle,
                    icon: "mingcute:history-fill"
                })), Qe(Je.a, {
                    direction: "column",
                    alignItems: "left"
                }, void 0, Qe(he.Typography, {
                    className: e.titlestyle
                }, void 0, "Archives"), Qe(he.Typography, {
                    className: e.subtitle
                }, void 0, "Old Dx Versions")))))), " ", Qe("div", {
                    onMouseEnter: function(n) {
                        return m(n, 1)
                    },
                    onMouseLeave: h
                }, void 0, Qe(he.Typography, {
                    className: e.menuitem
                }, void 0, "MyDx"), Qe(he.Popper, {
                    placement: "bottom-end",
                    className: e.popperstyle,
                    id: 1,
                    open: 1 === l,
                    anchorEl: t,
                    disablePortal: !0
                }, void 0, Qe(Je.a, {
                    onClick: h,
                    container: !0,
                    direction: "column",
                    alignItems: "center",
                    justify: "center"
                }, void 0, Qe(Je.a, {
                    onClick: p.bind(this, "/mydx"),
                    className: e.subitems,
                    item: !0,
                    xs: 12,
                    container: !0,
                    direction: "row",
                    alignItems: "center"
                }, void 0, Qe(he.Box, {
                    className: e.boxstyle
                }, void 0, Qe(Xn.Icon, {
                    className: e.iconstyle,
                    icon: "bxs:dashboard"
                })), Qe(Je.a, {
                    direction: "column",
                    alignItems: "left"
                }, void 0, Qe(he.Typography, {
                    className: e.titlestyle
                }, void 0, "Dashboard"), Qe(he.Typography, {
                    className: e.subtitle
                }, void 0, "Your DX activity")))))), Qe("div", {
                    onMouseEnter: function(n) {
                        return m(n, 3)
                    },
                    onMouseLeave: h
                }, void 0, Qe(he.Typography, {
                    className: e.menuitem
                }, void 0, "Security"), Qe(he.Popper, {
                    placement: "bottom-end",
                    className: e.popperstyle,
                    id: 3,
                    open: 3 === l,
                    anchorEl: t,
                    disablePortal: !0
                }, void 0, Qe(Je.a, {
                    onClick: h,
                    container: !0,
                    direction: "column",
                    alignItems: "center",
                    justify: "center"
                }, void 0, Qe(Je.a, {
                    onClick: p.bind(this, "/kyc"),
                    className: e.subitems,
                    item: !0,
                    xs: 12,
                    container: !0,
                    direction: "row",
                    alignItems: "center"
                }, void 0, Qe(he.Box, {
                    className: e.boxstyle
                }, void 0, Qe(Xn.Icon, {
                    className: e.iconstyle,
                    icon: "bi:person-check-fill"
                })), Qe(Je.a, {
                    direction: "column",
                    alignItems: "left"
                }, void 0, Qe(he.Typography, {
                    className: e.titlestyle
                }, void 0, "KYC"), Qe(he.Typography, {
                    className: e.subtitle
                }, void 0, "Get KYC verified"))), Qe(Je.a, {
                    onClick: p.bind(this, "/audit"),
                    className: e.subitems,
                    item: !0,
                    xs: 12,
                    container: !0,
                    direction: "row",
                    alignItems: "center"
                }, void 0, Qe(he.Box, {
                    className: e.boxstyle
                }, void 0, Qe(Xn.Icon, {
                    className: e.iconstyle,
                    icon: "bxs:check-shield"
                })), Qe(Je.a, {
                    direction: "column",
                    alignItems: "left"
                }, void 0, Qe(he.Typography, {
                    className: e.titlestyle
                }, void 0, "Audit"), Qe(he.Typography, {
                    className: e.subtitle
                }, void 0, "Audit for your project"))), Qe(Je.a, {
                    onClick: p.bind(this, "/dxcertificate"),
                    className: e.subitems,
                    item: !0,
                    xs: 12,
                    container: !0,
                    direction: "row",
                    alignItems: "center"
                }, void 0, Qe(he.Box, {
                    className: e.boxstyle
                }, void 0, Qe(Xn.Icon, {
                    className: e.iconstyle,
                    icon: "charm:certificate"
                })), Qe(Je.a, {
                    direction: "column",
                    alignItems: "left"
                }, void 0, Qe(he.Typography, {
                    className: e.titlestyle
                }, void 0, "Certificates"), Qe(he.Typography, {
                    className: e.subtitle
                }, void 0, "Look up DX certificates")))))), Qe("div", {
                    onMouseEnter: function(n) {
                        return m(n, 2)
                    },
                    onMouseLeave: h
                }, void 0, Qe(he.Typography, {
                    className: e.menuitem
                }, void 0, "Refer & Earn"), Qe(he.Popper, {
                    placement: "bottom-end",
                    className: e.popperstyle,
                    id: 2,
                    open: 2 === l,
                    anchorEl: t,
                    disablePortal: !0
                }, void 0, Qe(Je.a, {
                    onClick: h,
                    container: !0,
                    direction: "column",
                    alignItems: "center",
                    justify: "center"
                }, void 0, Qe(Je.a, {
                    onClick: p.bind(this, "/dxrefer"),
                    className: e.subitems,
                    item: !0,
                    xs: 12,
                    container: !0,
                    direction: "row",
                    alignItems: "center"
                }, void 0, Qe(he.Box, {
                    className: e.boxstyle
                }, void 0, Qe(Xn.Icon, {
                    className: e.iconstyle,
                    icon: "fa-solid:user-friends"
                })), Qe(Je.a, {
                    direction: "column",
                    alignItems: "left"
                }, void 0, Qe(he.Typography, {
                    className: e.titlestyle
                }, void 0, "Referral Dashboard"), Qe(he.Typography, {
                    className: e.subtitle
                }, void 0, "Your Earnigs")))))), Qe("div", {}, void 0, Qe(he.Typography, {
                    onClick: function() {
                        window.open("https://www.dxsale.network/token", "_blank")
                    },
                    className: "".concat(e.menuitem, " ").concat(e.cursorp)
                }, void 0, "Our Token")))))
            };

            function He() {
                return (He = Object.assign || function(n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var o = arguments[e];
                        for (var t in o)
                            Object.prototype.hasOwnProperty.call(o, t) && (n[t] = o[t])
                    }
                    return n
                }).apply(this, arguments)
            }

            function Xe(n, e, o, t) {
                Ue || (Ue = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var i = n && n.defaultProps,
                    r = arguments.length - 3;
                if (e || 0 === r || (e = {
                        children: void 0
                    }),
                    1 === r)
                    e.children = t;
                else if (r > 1) {
                    for (var c = new Array(r), a = 0; a < r; a++)
                        c[a] = arguments[a + 3];
                    e.children = c
                }
                if (e && i)
                    for (var l in i)
                        void 0 === e[l] && (e[l] = i[l]);
                else
                    e || (e = i || {});
                return {
                    $$typeof: Ue,
                    type: n,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: e,
                    _owner: null
                }
            }
            var qe = Xe(Fe, {}),
                Ke = Xe(Ve, {});
            var _e, $e = Object(w.withStyles)(bn.a)((function(n) {
                var e = n.classes,
                    o = n.children,
                    t = n.pageLoaded;
                return n.mode,
                    n.gradient,
                    n.deco,
                    n.bgPosition,
                    n.changeMode,
                    n.place,
                    n.history,
                    n.titleException,
                    n.handleOpenGuide,
                    n.toggleDrawer,
                    n.sidebarOpen,
                    n.loadTransition,
                    Xe(i.Fragment, {}, void 0, qe, Ke, Xe("main", {}, void 0, Xe("section", {
                        className: $()(e.mainWrap, e.topbarLayout)
                    }, void 0, !t && Xe("img", {
                        src: "/images/spinner.gif",
                        alt: "spinner",
                        className: e.circularProgress
                    }), r.a.createElement(en.a, He({ in: t
                    }, t ? {
                        timeout: 700
                    } : {}), Xe("div", {
                        className: t ? "" : e.hideApp
                    }, void 0, o)))))
            }));

            function no() {
                return (no = Object.assign || function(n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var o = arguments[e];
                        for (var t in o)
                            Object.prototype.hasOwnProperty.call(o, t) && (n[t] = o[t])
                    }
                    return n
                }).apply(this, arguments)
            }

            function eo(n, e, o, t) {
                _e || (_e = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var i = n && n.defaultProps,
                    r = arguments.length - 3;
                if (e || 0 === r || (e = {
                        children: void 0
                    }),
                    1 === r)
                    e.children = t;
                else if (r > 1) {
                    for (var c = new Array(r), a = 0; a < r; a++)
                        c[a] = arguments[a + 3];
                    e.children = c
                }
                if (e && i)
                    for (var l in i)
                        void 0 === e[l] && (e[l] = i[l]);
                else
                    e || (e = i || {});
                return {
                    $$typeof: _e,
                    type: n,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: e,
                    _owner: null
                }
            }
            var oo, to = Object(w.withStyles)(bn.a)((function(n) {
                    var e = n.classes,
                        o = n.children,
                        t = n.pageLoaded,
                        c = n.mode,
                        a = n.gradient,
                        l = n.deco,
                        s = n.history,
                        d = n.bgPosition,
                        b = (n.changeMode,
                            n.place),
                        f = n.titleException;
                    return n.handleOpenGuide,
                        n.toggleDrawer,
                        n.sidebarOpen,
                        n.loadTransition,
                        eo(i.Fragment, {}, void 0, eo("main", {
                            className: $()(e.content, e.highMargin),
                            id: "mainContent"
                        }, void 0, eo(un, {
                            mode: c,
                            gradient: a,
                            decoration: l,
                            bgPosition: d,
                            horizontalMenu: !0
                        }), eo("section", {
                            className: $()(e.mainWrap, e.topbarLayout)
                        }, void 0, f.indexOf(s.location.pathname) < 0 && eo("div", {
                            className: e.pageTitle
                        }, void 0, eo(vn.a, {
                            component: "h4",
                            className: "header" === d ? e.darkTitle : e.lightTitle,
                            variant: "h4"
                        }, void 0, b)), !t && eo("img", {
                            src: "/images/spinner.gif",
                            alt: "spinner",
                            className: e.circularProgress
                        }), r.a.createElement(en.a, no({ in: t
                        }, t ? {
                            timeout: 700
                        } : {}), eo("div", {
                            className: t ? "" : e.hideApp
                        }, void 0, o)))))
                })),
                io = o("ab7ebb4f5c369f043e8f"),
                ro = o.n(io);

            function co(n, e) {
                var o = Object.keys(n);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(n);
                    e && (t = t.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))),
                        o.push.apply(o, t)
                }
                return o
            }

            function ao(n, e, o) {
                return e in n ? Object.defineProperty(n, e, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : n[e] = o,
                    n
            }

            function lo(n, e, o, t) {
                oo || (oo = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var i = n && n.defaultProps,
                    r = arguments.length - 3;
                if (e || 0 === r || (e = {
                        children: void 0
                    }),
                    1 === r)
                    e.children = t;
                else if (r > 1) {
                    for (var c = new Array(r), a = 0; a < r; a++)
                        c[a] = arguments[a + 3];
                    e.children = c
                }
                if (e && i)
                    for (var l in i)
                        void 0 === e[l] && (e[l] = i[l]);
                else
                    e || (e = i || {});
                return {
                    $$typeof: oo,
                    type: n,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: e,
                    _owner: null
                }
            }

            function so(n, e) {
                return function(n) {
                    if (Array.isArray(n))
                        return n
                }(n) || function(n, e) {
                    var o = null == n ? null : "undefined" !== typeof Symbol && n[Symbol.iterator] || n["@@iterator"];
                    if (null == o)
                        return;
                    var t, i, r = [],
                        c = !0,
                        a = !1;
                    try {
                        for (o = o.call(n); !(c = (t = o.next()).done) && (r.push(t.value), !e || r.length !== e); c = !0)
                        ;
                    } catch (n) {
                        a = !0,
                            i = n
                    } finally {
                        try {
                            c || null == o.return || o.return()
                        } finally {
                            if (a)
                                throw i
                        }
                    }
                    return r
                }(n, e) || function(n, e) {
                    if (!n)
                        return;
                    if ("string" === typeof n)
                        return bo(n, e);
                    var o = Object.prototype.toString.call(n).slice(8, -1);
                    "Object" === o && n.constructor && (o = n.constructor.name);
                    if ("Map" === o || "Set" === o)
                        return Array.from(n);
                    if ("Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
                        return bo(n, e)
                }(n, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function bo(n, e) {
                (null == e || e > n.length) && (e = n.length);
                for (var o = 0, t = new Array(e); o < e; o++)
                    t[o] = n[o];
                return t
            }
            var fo = lo(Xn.Icon, {
                    width: "2rem",
                    icon: "ep:warn-triangle-filled"
                }),
                po = lo("strong", {}, void 0, "Phishing warning:");
            var uo, go = Object(l.connect)((function(n) {
                    return function(n) {
                        for (var e = 1; e < arguments.length; e++) {
                            var o = null != arguments[e] ? arguments[e] : {};
                            e % 2 ? co(Object(o), !0).forEach((function(e) {
                                ao(n, e, o[e])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : co(Object(o)).forEach((function(e) {
                                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e))
                            }))
                        }
                        return n
                    }({
                        sidebarOpen: n.getIn(["ui", "sidebarOpen"]),
                        pageLoaded: n.getIn(["ui", "pageLoaded"]),
                        mode: n.getIn(["ui", "type"]),
                        gradient: n.getIn(["ui", "gradient"]),
                        deco: n.getIn(["ui", "decoration"]),
                        layout: n.getIn(["ui", "layout"]),
                        bgPosition: n.getIn(["ui", "bgPosition"])
                    }, n)
                }), (function(n) {
                    return {
                        toggleDrawer: function() {
                            return n(A)
                        },
                        initialOpen: Object(k.bindActionCreators)(C, n),
                        loadTransition: Object(k.bindActionCreators)(D, n)
                    }
                }))((function(n) {
                    var e = so(Object(i.useState)(0), 2),
                        o = e[0],
                        t = e[1],
                        r = so(Object(i.useState)(!0), 2),
                        c = r[0],
                        a = r[1];
                    Object(i.useEffect)((function() {
                        var e = n.history,
                            o = n.loadTransition;
                        setTimeout((function() {
                                a(!1)
                            }), 12e3),
                            t(window.innerHeight + 112);
                        var i = e.location.pathname;
                        n.initialOpen(i),
                            o(!0);
                        var r = e.listen((function() {
                            window.scrollTo(0, 0),
                                setTimeout((function() {
                                    o(!0)
                                }), 500)
                        }));
                        return function() {
                            null != r && r()
                        }
                    }), []);
                    var l = n.classes,
                        s = n.children,
                        d = n.toggleDrawer,
                        b = n.sidebarOpen,
                        f = n.loadTransition,
                        p = n.pageLoaded,
                        u = n.mode,
                        g = n.history,
                        m = n.gradient,
                        h = n.deco,
                        y = n.bgPosition,
                        x = n.layout,
                        v = n.changeMode,
                        k = ["/app", "/app/launch-dashboard", "/app/crypto-dashboard"],
                        w = g.location.pathname.split("/"),
                        A = w[w.length - 1].replace("-", " ");
                    return lo("div", {}, void 0, lo(he.AppBar, {
                        style: {
                            display: c ? "block" : "none"
                        },
                        position: "static",
                        color: "default"
                    }, void 0, lo(he.Toolbar, {
                        variant: "dense",
                        style: {
                            background: "linear-gradient(75deg, #2E6B8B 50%, #3E6B8B 70%)",
                            color: "white",
                            justifyContent: "center"
                        }
                    }, void 0, fo, lo(he.Typography, {
                        style: {
                            margin: "0.5rem"
                        },
                        variant: "body2",
                        color: "initial"
                    }, void 0, po, " please make sure you're visiting https://dx.app or https://dxsale.app - check the URL carefully."), lo("div", {
                        style: {
                            position: "absolute",
                            right: "1%"
                        }
                    }, void 0, lo(ro.a, {
                        onClick: function() {
                            return a(!1)
                        }
                    })))), lo("div", {
                        style: {
                            minHeight: o
                        },
                        className: $()(l.appFrameInner, "top-navigation" === x || "mega-menu" === x ? l.topNav : l.sideNav, "dark" === u ? "dark-mode" : "light-mode")
                    }, void 0, "left-sidebar" === x && lo(yn, {
                        history: g,
                        toggleDrawer: d,
                        loadTransition: f,
                        changeMode: v,
                        sidebarOpen: b,
                        pageLoaded: p,
                        mode: u,
                        gradient: m,
                        deco: h,
                        bgPosition: y,
                        place: A,
                        titleException: k
                    }, void 0, s), "big-sidebar" === x && lo(Nn, {
                        history: g,
                        toggleDrawer: d,
                        loadTransition: f,
                        changeMode: v,
                        sidebarOpen: b,
                        pageLoaded: p,
                        gradient: m,
                        deco: h,
                        bgPosition: y,
                        mode: u,
                        place: A,
                        titleException: k
                    }, void 0, s), "right-sidebar" === x && lo(Cn, {
                        history: g,
                        toggleDrawer: d,
                        loadTransition: f,
                        changeMode: v,
                        sidebarOpen: b,
                        pageLoaded: p,
                        mode: u,
                        gradient: m,
                        deco: h,
                        bgPosition: y,
                        place: A,
                        titleException: k
                    }, void 0, s), "top-navigation" === x && lo($e, {
                        history: g,
                        toggleDrawer: d,
                        loadTransition: f,
                        changeMode: v,
                        sidebarOpen: b,
                        pageLoaded: p,
                        mode: u,
                        gradient: m,
                        deco: h,
                        bgPosition: y,
                        place: A,
                        titleException: k
                    }, void 0, s), "mega-menu" === x && lo(to, {
                        history: g,
                        toggleDrawer: d,
                        loadTransition: f,
                        changeMode: v,
                        sidebarOpen: b,
                        pageLoaded: p,
                        mode: u,
                        gradient: m,
                        deco: h,
                        bgPosition: y,
                        place: A,
                        titleException: k
                    }, void 0, s)))
                })),
                mo = Object(w.withStyles)(bn.a)(go);

            function ho(n, e, o, t) {
                uo || (uo = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var i = n && n.defaultProps,
                    r = arguments.length - 3;
                if (e || 0 === r || (e = {
                        children: void 0
                    }),
                    1 === r)
                    e.children = t;
                else if (r > 1) {
                    for (var c = new Array(r), a = 0; a < r; a++)
                        c[a] = arguments[a + 3];
                    e.children = c
                }
                if (e && i)
                    for (var l in i)
                        void 0 === e[l] && (e[l] = i[l]);
                else
                    e || (e = i || {});
                return {
                    $$typeof: uo,
                    type: n,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: e,
                    _owner: null
                }
            }
            var yo, xo = function(n) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                            fallback: null
                        },
                        o = e.fallback,
                        t = void 0 === o ? null : o,
                        c = Object(i.lazy)(n);
                    return function(n) {
                        return ho(i.Suspense, {
                            fallback: t
                        }, void 0, r.a.createElement(c, n))
                    }
                },
                vo = o("c82f135c42c3c148fae5"),
                ko = o.n(vo);
            var wo, Ao = Object(w.withStyles)({
                circularProgress: {
                    position: "fixed",
                    top: "calc(50% - 45px)",
                    left: "calc(50% - 45px)"
                }
            })((function(n) {
                var e = n.classes;
                return function(n, e, o, t) {
                    yo || (yo = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                    var i = n && n.defaultProps,
                        r = arguments.length - 3;
                    if (e || 0 === r || (e = {
                            children: void 0
                        }),
                        1 === r)
                        e.children = t;
                    else if (r > 1) {
                        for (var c = new Array(r), a = 0; a < r; a++)
                            c[a] = arguments[a + 3];
                        e.children = c
                    }
                    if (e && i)
                        for (var l in i)
                            void 0 === e[l] && (e[l] = i[l]);
                    else
                        e || (e = i || {});
                    return {
                        $$typeof: yo,
                        type: n,
                        key: void 0 === o ? null : "" + o,
                        ref: null,
                        props: e,
                        _owner: null
                    }
                }(ko.a, {
                    className: e.circularProgress,
                    size: 90,
                    thickness: 1,
                    color: "secondary"
                })
            }));

            function Co(n, e, o, t) {
                wo || (wo = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var i = n && n.defaultProps,
                    r = arguments.length - 3;
                if (e || 0 === r || (e = {
                        children: void 0
                    }),
                    1 === r)
                    e.children = t;
                else if (r > 1) {
                    for (var c = new Array(r), a = 0; a < r; a++)
                        c[a] = arguments[a + 3];
                    e.children = c
                }
                if (e && i)
                    for (var l in i)
                        void 0 === e[l] && (e[l] = i[l]);
                else
                    e || (e = i || {});
                return {
                    $$typeof: wo,
                    type: n,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: e,
                    _owner: null
                }
            }
            xo((function() {
                    return Promise.all([o.e(0), o.e(35)]).then(o.bind(null, "50b2b11ca44fa27cd2d4"))
                }), {
                    fallback: Co(Ao, {})
                }),
                xo((function() {
                    return Promise.all([o.e(0), o.e(6), o.e(27)]).then(o.bind(null, "a2daac2b0336fe41ee91"))
                }), {
                    fallback: Co(Ao, {})
                }),
                xo((function() {
                    return Promise.all([o.e(0), o.e(5), o.e(6), o.e(36)]).then(o.bind(null, "94f19f8c6c23ee6d5ea5"))
                }), {
                    fallback: Co(Ao, {})
                });
            var Mo, Io = xo((function() {
                    return Promise.all([o.e(0), o.e(1), o.e(32)]).then(o.bind(null, "104b02b041707f95dd82"))
                }), {
                    fallback: Co(Ao, {})
                }),
                So = xo((function() {
                    return Promise.all([o.e(0), o.e(1), o.e(33)]).then(o.bind(null, "5f6388fc3250c3cd6461"))
                }), {
                    fallback: Co(Ao, {})
                }),
                No = (xo((function() {
                        return Promise.all([o.e(0), o.e(5), o.e(25)]).then(o.bind(null, "d5ac57a690eb2c8ff30d"))
                    }), {
                        fallback: Co(Ao, {})
                    }),
                    xo((function() {
                        return Promise.all([o.e(0), o.e(1), o.e(2), o.e(3), o.e(11)]).then(o.bind(null, "248e367e65992c1ecb7c"))
                    }), {
                        fallback: Co(Ao, {})
                    })),
                jo = xo((function() {
                    return Promise.all([o.e(0), o.e(1), o.e(2), o.e(3), o.e(18)]).then(o.bind(null, "f67929bc8932da43c64a"))
                }), {
                    fallback: Co(Ao, {})
                }),
                To = xo((function() {
                    return Promise.all([o.e(0), o.e(1), o.e(2), o.e(30)]).then(o.bind(null, "50a2e933d478cf0381fc"))
                }), {
                    fallback: Co(Ao, {})
                }),
                Lo = xo((function() {
                    return Promise.all([o.e(0), o.e(1), o.e(2), o.e(3), o.e(21)]).then(o.bind(null, "df5a25e6b75f7a678258"))
                }), {
                    fallback: Co(Ao, {})
                }),
                Eo = xo((function() {
                    return Promise.all([o.e(0), o.e(1), o.e(2), o.e(3), o.e(19)]).then(o.bind(null, "55c209f22607ae50c105"))
                }), {
                    fallback: Co(Ao, {})
                }),
                Do = xo((function() {
                    return Promise.all([o.e(0), o.e(1), o.e(2), o.e(3), o.e(20)]).then(o.bind(null, "c02b6b3ef6c08e223a50"))
                }), {
                    fallback: Co(Ao, {})
                }),
                Oo = xo((function() {
                    return Promise.all([o.e(0), o.e(1), o.e(2), o.e(4), o.e(16)]).then(o.bind(null, "4439c8d8b6c2bf7eef12"))
                }), {
                    fallback: Co(Ao, {})
                }),
                zo = xo((function() {
                    return Promise.all([o.e(0), o.e(1), o.e(2), o.e(3), o.e(13)]).then(o.bind(null, "4f2d4f6be685a4bae415"))
                }), {
                    fallback: Co(Ao, {})
                }),
                Po = xo((function() {
                    return Promise.all([o.e(0), o.e(1), o.e(2), o.e(3), o.e(26)]).then(o.bind(null, "d141a115da7289ecdaef"))
                }), {
                    fallback: Co(Ao, {})
                }),
                Bo = xo((function() {
                    return Promise.all([o.e(0), o.e(1), o.e(2), o.e(23)]).then(o.bind(null, "f82d7e1f242d40a9ea83"))
                }), {
                    fallback: Co(Ao, {})
                }),
                Fo = xo((function() {
                    return Promise.all([o.e(0), o.e(1), o.e(2), o.e(3), o.e(28)]).then(o.bind(null, "77923727852510e0d8b7"))
                }), {
                    fallback: Co(Ao, {})
                }),
                Ro = xo((function() {
                    return Promise.all([o.e(0), o.e(1), o.e(2), o.e(3), o.e(9)]).then(o.bind(null, "dcb495681b93d9df846a"))
                }), {
                    fallback: Co(Ao, {})
                }),
                Jo = xo((function() {
                    return Promise.all([o.e(0), o.e(1), o.e(2), o.e(3), o.e(12)]).then(o.bind(null, "c8092bc5c5339d65b07d"))
                }), {
                    fallback: Co(Ao, {})
                }),
                Qo = xo((function() {
                    return Promise.all([o.e(0), o.e(1), o.e(2), o.e(3), o.e(29)]).then(o.bind(null, "e1aebc032f72a43ac359"))
                }), {
                    fallback: Co(Ao, {})
                }),
                Zo = xo((function() {
                    return Promise.all([o.e(0), o.e(1), o.e(2), o.e(3), o.e(10)]).then(o.bind(null, "776f0dc593dcf84e4ea6"))
                }), {
                    fallback: Co(Ao, {})
                }),
                Wo = xo((function() {
                    return Promise.all([o.e(0), o.e(1), o.e(2), o.e(4), o.e(31)]).then(o.bind(null, "c4d9e8bca98f569a23bf"))
                }), {
                    fallback: Co(Ao, {})
                }),
                Yo = xo((function() {
                    return Promise.all([o.e(0), o.e(1), o.e(2), o.e(4), o.e(34)]).then(o.bind(null, "fe5ec5884f51409a77f5"))
                }), {
                    fallback: Co(Ao, {})
                }),
                Go = xo((function() {
                    return Promise.all([o.e(0), o.e(1), o.e(2), o.e(3), o.e(22)]).then(o.bind(null, "db03789a68bf47e29b36"))
                }), {
                    fallback: Co(Ao, {})
                }),
                Uo = xo((function() {
                    return Promise.all([o.e(0), o.e(1), o.e(2), o.e(3), o.e(15)]).then(o.bind(null, "8676c85b172b61add886"))
                }), {
                    fallback: Co(Ao, {})
                }),
                Vo = xo((function() {
                    return Promise.all([o.e(0), o.e(1), o.e(2), o.e(3), o.e(14)]).then(o.bind(null, "74d63fd32366e0ee24bf"))
                }), {
                    fallback: Co(Ao, {})
                }),
                Ho = xo((function() {
                    return Promise.all([o.e(0), o.e(1), o.e(2), o.e(3), o.e(24)]).then(o.bind(null, "a667974d0245a5ab81bf"))
                }), {
                    fallback: Co(Ao, {})
                }),
                Xo = xo((function() {
                    return Promise.all([o.e(0), o.e(1), o.e(2), o.e(3), o.e(17)]).then(o.bind(null, "778ff69c5e4417c1faf8"))
                }), {
                    fallback: Co(Ao, {})
                }),
                qo = o("ac4def00d4adc62eb8aa");

            function Ko(n, e, o, t) {
                Mo || (Mo = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var i = n && n.defaultProps,
                    r = arguments.length - 3;
                if (e || 0 === r || (e = {
                        children: void 0
                    }),
                    1 === r)
                    e.children = t;
                else if (r > 1) {
                    for (var c = new Array(r), a = 0; a < r; a++)
                        c[a] = arguments[a + 3];
                    e.children = c
                }
                if (e && i)
                    for (var l in i)
                        void 0 === e[l] && (e[l] = i[l]);
                else
                    e || (e = i || {});
                return {
                    $$typeof: Mo,
                    type: n,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: e,
                    _owner: null
                }
            }
            var _o = Ko(u.Route, {
                    path: "/app/privacypolicy",
                    component: Io
                }),
                $o = Ko(u.Route, {
                    path: "/app/termsandconditions",
                    component: So
                }),
                nt = Ko(qo.b, {}, void 0, Ko(u.Route, {
                    exact: !0,
                    path: "/",
                    component: No
                }), Ko(u.Route, {
                    exact: !0,
                    path: "/app",
                    component: No
                }), Ko(u.Route, {
                    path: "/dxsale",
                    component: jo
                }), Ko(u.Route, {
                    path: "/dxsalecreate",
                    component: To
                }), Ko(u.Route, {
                    path: "/presalecreate",
                    component: Lo
                }), Ko(u.Route, {
                    path: "/faircreate",
                    component: Eo
                }), Ko(u.Route, {
                    path: "/overflowcreate",
                    component: Do
                }), Ko(u.Route, {
                    path: "/presalemanage",
                    component: Oo
                }), Ko(u.Route, {
                    path: "/dxsaleview",
                    component: zo
                }), Ko(u.Route, {
                    path: "/dxlock",
                    component: Po
                }), Ko(u.Route, {
                    path: "/dxlocklp",
                    component: Bo
                }), Ko(u.Route, {
                    path: "/dxlocktoken",
                    component: Fo
                }), Ko(u.Route, {
                    path: "/dxlockview",
                    component: Ro
                }), Ko(u.Route, {
                    path: "/dxmint",
                    component: Jo
                }), Ko(u.Route, {
                    path: "/userdash",
                    component: Qo
                }), Ko(u.Route, {
                    path: "/leaderboard",
                    component: Go
                }), Ko(u.Route, {
                    path: "/dxdrop",
                    component: Zo
                }), Ko(u.Route, {
                    path: "/audit",
                    component: Wo
                }), Ko(u.Route, {
                    path: "/kyc",
                    component: Yo
                }), Ko(u.Route, {
                    path: "/mydx",
                    component: Uo
                }), Ko(u.Route, {
                    path: "/dxrefer",
                    component: Vo
                }), Ko(u.Route, {
                    path: "/dxcreateref",
                    component: Ho
                }), Ko(u.Route, {
                    path: "/dxcertificate",
                    component: Xo
                }));
            var et, ot = Object(u.withRouter)((function(n) {
                var e = n.history,
                    o = Object(i.useContext)(H);
                return Ko(mo, {
                    history: e,
                    changeMode: o
                }, void 0, Ko(u.Switch, {}, void 0, _o, $o, nt))
            }));

            function tt(n, e, o, t) {
                et || (et = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var i = n && n.defaultProps,
                    r = arguments.length - 3;
                if (e || 0 === r || (e = {
                        children: void 0
                    }),
                    1 === r)
                    e.children = t;
                else if (r > 1) {
                    for (var c = new Array(r), a = 0; a < r; a++)
                        c[a] = arguments[a + 3];
                    e.children = c
                }
                if (e && i)
                    for (var l in i)
                        void 0 === e[l] && (e[l] = i[l]);
                else
                    e || (e = i || {});
                return {
                    $$typeof: et,
                    type: n,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: e,
                    _owner: null
                }
            }
            window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = !0;
            var it = tt(u.Redirect, {
                from: "*",
                to: "/"
            });
            var rt, ct = Object(u.withRouter)((function(n) {
                    return n.history,
                        tt(K, {}, void 0, tt(u.Switch, {}, void 0, tt(u.Route, {
                            path: "/",
                            exact: !0,
                            render: function() {
                                return r.a.createElement(ot, n)
                            }
                        }), tt(u.Route, {
                            path: "/",
                            render: function() {
                                return r.a.createElement(ot, n)
                            }
                        }), it))
                })),
                at = (o("94b0fb984ebfa24563a2"),
                    o("a28fc3c963a1d4d1a2e5")),
                lt = o("ab039aecd4a1d4fedc0e"),
                st = o("01e2cd22dd17a35e4094"),
                dt = o("0785de3f40b134973d35"),
                bt = {
                    locale: dt.DEFAULT_LOCALE
                },
                ft = function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bt,
                        e = arguments.length > 1 ? arguments[1] : void 0;
                    return Object(st.a)(n, (function(n) {
                        switch (e.type) {
                            case "app/LanguageToggle/CHANGE_LOCALE":
                                n.locale = e.locale
                        }
                    }))
                },
                pt = function(n) {
                    return n.language || bt
                };
            var ut = Object(at.a)(Object(at.a)(pt, (function(n) {
                    return n.locale
                })), (function(n) {
                    return {
                        locale: n
                    }
                })),
                gt = Object(l.connect)(ut)((function(n) {
                    return function(n, e, o, t) {
                        rt || (rt = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                        var i = n && n.defaultProps,
                            r = arguments.length - 3;
                        if (e || 0 === r || (e = {
                                children: void 0
                            }),
                            1 === r)
                            e.children = t;
                        else if (r > 1) {
                            for (var c = new Array(r), a = 0; a < r; a++)
                                c[a] = arguments[a + 3];
                            e.children = c
                        }
                        if (e && i)
                            for (var l in i)
                                void 0 === e[l] && (e[l] = i[l]);
                        else
                            e || (e = i || {});
                        return {
                            $$typeof: rt,
                            type: n,
                            key: void 0 === o ? null : "" + o,
                            ref: null,
                            props: e,
                            _owner: null
                        }
                    }(lt.IntlProvider, {
                        locale: n.locale,
                        messages: n.messages[n.locale]
                    }, n.locale, n.children)
                })),
                mt = (o("1d8e0bfdbaced0d12266"),
                    o("0cbc23df16a5c6ceec4d"),
                    o("3aced5b508e7389026da")),
                ht = o("3562001638983595ee40"),
                yt = o.n(ht),
                xt = o("edc5ec6b13db97ea0a32"),
                vt = o("4e2e9348dad8fe460c1d"),
                kt = o("54f683fcda7806277002"),
                wt = {
                    theme: "skyBlueTheme",
                    direction: "ltl",
                    type: "light",
                    gradient: !1,
                    decoration: !0,
                    bgPosition: "header",
                    layout: "top-navigation",
                    palette: Object(kt.List)([{
                        name: "Ocean Sky",
                        value: "skyBlueTheme"
                    }, {
                        name: "Purple",
                        value: "purpleRedTheme"
                    }, {
                        name: "Rose Gold",
                        value: "magentaTheme"
                    }, {
                        name: "Leaf",
                        value: "cyanTheme"
                    }, {
                        name: "Mint",
                        value: "blueCyanTheme"
                    }, {
                        name: "Ubuntu",
                        value: "orangeTheme"
                    }, {
                        name: "Ultra Violet",
                        value: "purpleTheme"
                    }, {
                        name: "Vintage",
                        value: "yellowCyanTheme"
                    }, {
                        name: "Fruit",
                        value: "greenOrangeTheme"
                    }, {
                        name: "Botani",
                        value: "pinkGreenTheme"
                    }, {
                        name: "Deep Ocean",
                        value: "blueTheme"
                    }, {
                        name: "School",
                        value: "yellowBlueTheme"
                    }, {
                        name: "Queen",
                        value: "pinkBlueTheme"
                    }, {
                        name: "Joker",
                        value: "greenPurpleTheme"
                    }, {
                        name: "Ruby",
                        value: "redTheme"
                    }, {
                        name: "Sultan",
                        value: "goldTheme"
                    }, {
                        name: "Monochrome",
                        value: "greyTheme"
                    }]),
                    sidebarOpen: !0,
                    pageLoaded: !1,
                    subMenuOpen: []
                },
                At = function(n) {
                    return n.map((function(n) {
                        return !!n.child && n.child
                    }))
                },
                Ct = function(n, e) {
                    for (var o = "not found", t = 0; t < n.length; t += 1)
                        for (var i = 0; i < n[t].length; i += 1)
                            n[t][i].link === e && (o = tn.a[t].key);
                    return o
                },
                Mt = Object(kt.fromJS)(wt);

            function It() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Mt,
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                switch (e.type) {
                    case "TOGGLE_SIDEBAR":
                        return n.withMutations((function(e) {
                            e.set("sidebarOpen", !n.get("sidebarOpen"))
                        }));
                    case "OPEN_MENU":
                        return n.withMutations((function(n) {
                            n.set("sidebarOpen", !0)
                        }));
                    case "CLOSE_MENU":
                        return n.withMutations((function(n) {
                            n.set("sidebarOpen", !1)
                        }));
                    case "OPEN_SUBMENU":
                        return n.withMutations((function(o) {
                            var t = Ct(At(tn.a), e.initialLocation);
                            e.initialLocation ? o.set("subMenuOpen", Object(kt.List)([t])) : n.get("subMenuOpen").indexOf(e.key) > -1 ? o.set("subMenuOpen", Object(kt.List)([])) : o.set("subMenuOpen", Object(kt.List)([e.key, e.keyParent]))
                        }));
                    case "CHANGE_RANDOM_THEME":
                        return n.withMutations((function(e) {
                            var o = n.get("palette").toJS(),
                                t = o[Math.floor(Math.random() * o.length)];
                            e.set("theme", t.value)
                        }));
                    case "CHANGE_THEME":
                        return n.withMutations((function(n) {
                            n.set("theme", e.theme)
                        }));
                    case "CHANGE_MODE":
                        return n.withMutations((function(n) {
                            n.set("type", e.mode)
                        }));
                    case "CHANGE_GRADIENT":
                        return n.withMutations((function(n) {
                            n.set("gradient", e.gradient)
                        }));
                    case "CHANGE_DECO":
                        return n.withMutations((function(n) {
                            n.set("decoration", e.deco)
                        }));
                    case "CHANGE_BG_POSITION":
                        return n.withMutations((function(n) {
                            n.set("bgPosition", e.position)
                        }));
                    case "CHANGE_LAYOUT":
                        return n.withMutations((function(n) {
                            n.set("layout", e.layout)
                        }));
                    case "CHANGE_DIRECTION":
                        return n.withMutations((function(n) {
                            n.set("direction", e.direction)
                        }));
                    case "LOAD_PAGE":
                        return n.withMutations((function(n) {
                            n.set("pageLoaded", e.isLoaded)
                        }));
                    default:
                        return n
                }
            }
            var St = {
                    formValues: Object(kt.Map)()
                },
                Nt = Object(kt.fromJS)(St);

            function jt() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Nt,
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                switch (e.type) {
                    case "INIT":
                        return n.withMutations((function(n) {
                            n.set("formValues", e.data)
                        }));
                    case "CLEAR":
                        return n.withMutations((function(n) {
                            n.set("formValues", Object(kt.Map)())
                        }));
                    default:
                        return n
                }
            }
            var Tt = o("81e3ad52cb9e8875d348");

            function Lt(n, e) {
                var o = Object.keys(n);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(n);
                    e && (t = t.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))),
                        o.push.apply(o, t)
                }
                return o
            }

            function Et(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var o = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Lt(Object(o), !0).forEach((function(e) {
                        Dt(n, e, o[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : Lt(Object(o)).forEach((function(e) {
                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e))
                    }))
                }
                return n
            }

            function Dt(n, e, o) {
                return e in n ? Object.defineProperty(n, e, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : n[e] = o,
                    n
            }
            var Ot = {
                    connectedProvider: null,
                    balance: null,
                    urlChainInfoLoaded: !1,
                    activeChainInWalletInfoLoaded: !1,
                    activeChainInWallet: null,
                    chainSelectedInURL: null,
                    isWalletConnected: !1,
                    walletAddress: null
                },
                zt = function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ot,
                        e = arguments.length > 1 ? arguments[1] : void 0;
                    switch (e.type) {
                        case Tt.a:
                            return Et(Et({}, n), e.payload);
                        default:
                            return n
                    }
                };

            function Pt(n, e) {
                var o = Object.keys(n);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(n);
                    e && (t = t.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))),
                        o.push.apply(o, t)
                }
                return o
            }

            function Bt(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var o = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Pt(Object(o), !0).forEach((function(e) {
                        Ft(n, e, o[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : Pt(Object(o)).forEach((function(e) {
                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e))
                    }))
                }
                return n
            }

            function Ft(n, e, o) {
                return e in n ? Object.defineProperty(n, e, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : n[e] = o,
                    n
            }
            var Rt;
            o("63628b73fa4a4bdc3d26");

            function Jt(n, e, o, t) {
                Rt || (Rt = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var i = n && n.defaultProps,
                    r = arguments.length - 3;
                if (e || 0 === r || (e = {
                        children: void 0
                    }),
                    1 === r)
                    e.children = t;
                else if (r > 1) {
                    for (var c = new Array(r), a = 0; a < r; a++)
                        c[a] = arguments[a + 3];
                    e.children = c
                }
                if (e && i)
                    for (var l in i)
                        void 0 === e[l] && (e[l] = i[l]);
                else
                    e || (e = i || {});
                return {
                    $$typeof: Rt,
                    type: n,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: e,
                    _owner: null
                }
            }
            new b.a("Open Sans", {}).load().then((function() {
                document.body.classList.add("fontLoaded")
            }));
            var Qt, Zt, Wt, Yt, Gt, Ut = (Qt = p,
                    Zt = k.compose,
                    Wt = yt()({}),
                    Yt = [Wt, Object(mt.routerMiddleware)(Qt)],
                    k.applyMiddleware.apply(void 0, Yt),
                    (Gt = Object(k.createStore)(function() {
                        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            e = Object(vt.combineReducers)(Bt({
                                auth: xt.reducer,
                                ui: It,
                                initval: jt,
                                language: ft,
                                wallet: zt,
                                router: Object(s.connectRouter)(p)
                            }, n));
                        return e
                    }(), Zt(Object(k.applyMiddleware)(Wt)))).runSaga = Wt.run,
                    Gt.injectedReducers = {},
                    Gt.injectedSagas = {},
                    Gt),
                Vt = document.getElementById("app"),
                Ht = navigator.language,
                Xt = Jt(s.ConnectedRouter, {
                    history: p
                }, void 0, Jt(ct, {})),
                qt = function(n) {
                    a.a.render(Jt(l.Provider, {
                        store: Ut
                    }, void 0, Jt(gt, {
                        locale: Ht,
                        messages: n
                    }, void 0, Xt)), Vt)
                };
            window.Intl ? qt(dt.translationMessages) : new Promise((function(n) {
                n(Promise.all([o.e(0), o.e(37)]).then(o.t.bind(null, "97694e21b72f8e9351c4", 7)))
            })).then((function() {
                return Promise.all([o.e(0).then(o.t.bind(null, "f030ad8f70186ef5cb63", 7)), o.e(0).then(o.t.bind(null, "14584c41c196d3540f41", 7))])
            })).then((function() {
                return qt(dt.translationMessages)
            })).catch((function(n) {
                throw n
            }))
        },
        "94b0fb984ebfa24563a2": function(n, e, o) {
            var t = o("6ae4ab08c7313c975417");
            "string" === typeof t && (t = [
                [n.i, t, ""]
            ]);
            var i = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            o("1e4534d1d62a11482e97")(t, i);
            t.locals && (n.exports = t.locals)
        },
        "9731344539086d7b0d1d": function(n, e, o) {
            "use strict";
            var t = o("b0c37be7de20d933b466"),
                i = o("1f6626b7f0d6a759a3dd"),
                r = o.n(i),
                c = o("03027ef652f840147476"),
                a = o.n(c),
                l = o("326ca9b764bcf922997d"),
                s = o.n(l),
                d = o("a3af7774b3efc3be1523"),
                b = o.n(d),
                f = o("997281530ff2d95e3172");

            function p(n, e) {
                var o = Object.keys(n);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(n);
                    e && (t = t.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))),
                        o.push.apply(o, t)
                }
                return o
            }

            function u(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var o = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? p(Object(o), !0).forEach((function(e) {
                        g(n, e, o[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : p(Object(o)).forEach((function(e) {
                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e))
                    }))
                }
                return n
            }

            function g(n, e, o) {
                return e in n ? Object.defineProperty(n, e, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : n[e] = o,
                    n
            }
            e.a = function(n) {
                var e, o;
                return {
                    user: {
                        justifyContent: "center"
                    },
                    drawer: {
                        width: 240
                    },
                    drawerPaper: {
                        position: "relative",
                        height: "100%",
                        overflow: "hidden",
                        border: "none",
                        background: "none",
                        color: n.palette.text.primary,
                        transition: n.transitions.create("width", {
                            easing: n.transitions.easing.sharp,
                            duration: n.transitions.duration.enteringScreen
                        })
                    },
                    swipeDrawerPaper: {
                        width: 240
                    },
                    opened: {
                        "& $primary, & $icon": {
                            color: n.palette.primary.main
                        },
                        "&:before": {
                            content: '""',
                            position: "absolute",
                            width: 5,
                            height: n.spacing(6),
                            top: 0,
                            left: 0,
                            background: Object(t.fade)(n.palette.primary.main, .5)
                        }
                    },
                    drawerPaperClose: {
                        width: n.spacing(8),
                        position: "absolute",
                        overflowX: "hidden",
                        background: n.palette.background.paper,
                        transition: n.transitions.create("width", {
                            easing: n.transitions.easing.sharp,
                            duration: n.transitions.duration.leavingScreen
                        }),
                        "& $user": {
                            justifyContent: "flex-start"
                        },
                        "& $bigAvatar": {
                            width: 40,
                            height: 40
                        },
                        "& nav": {
                            display: "none"
                        },
                        "&:hover": {
                            width: 240,
                            boxShadow: n.shadows[6],
                            "& nav": {
                                display: "block"
                            }
                        },
                        "& $brand": {
                            display: "none"
                        },
                        "& $profile": {
                            flexDirection: "row",
                            top: n.spacing(6),
                            padding: n.spacing(.5),
                            textAlign: "left",
                            "& button": {
                                width: "auto"
                            }
                        },
                        "& $avatar": {
                            marginRight: n.spacing(3)
                        },
                        "& $menuContainer": {
                            "&$menuContainer": {
                                paddingTop: n.spacing(10),
                                paddingBottom: 0
                            }
                        }
                    },
                    drawerInner: {
                        height: "100%",
                        position: "fixed",
                        backgroundColor: "dark" === Object(f.a)() && "#1e2735",
                        boxShadow: n.shade.light,
                        backdropFilter: "saturate(180%) blur(20px)"
                    },
                    drawerInnerMobile: {
                        height: "100%",
                        backgroundColor: "dark" === n.palette.type ? Object(t.fade)(n.palette.background.paper, .75) : Object(t.fade)(n.palette.background.paper, .95)
                    },
                    drawerHeader: u({
                        padding: "0",
                        zIndex: 1,
                        position: "relative"
                    }, n.mixins.toolbar),
                    avatar: {
                        margin: 10
                    },
                    bigAvatar: {
                        width: 80,
                        height: 80,
                        boxShadow: n.glow.light
                    },
                    brandBar: {
                        transition: n.transitions.create(["width", "margin", "background"], {
                            easing: n.transitions.easing.sharp,
                            duration: n.transitions.duration.enteringScreen
                        }),
                        "&:after": {
                            transition: n.transitions.create(["box-shadow"], {
                                easing: n.transitions.easing.sharp,
                                duration: n.transitions.duration.enteringScreen
                            })
                        }
                    },
                    darker: {
                        background: "none"
                    },
                    nested: g({
                        paddingTop: n.spacing(.5),
                        paddingBottom: n.spacing(.5),
                        margin: "".concat(n.spacing(.5), "px 0")
                    }, n.breakpoints.down("lg"), {
                        paddingLeft: n.spacing(3)
                    }),
                    child: {
                        "& a": {
                            paddingLeft: n.spacing(6)
                        }
                    },
                    title: {
                        fontSize: 10,
                        textTransform: "uppercase",
                        paddingLeft: n.spacing(10),
                        marginTop: n.spacing(3),
                        display: "block",
                        color: n.palette.secondary.main,
                        lineHeight: "28px",
                        fontWeight: "bold"
                    },
                    dense: {
                        marginLeft: -15,
                        "& > $title:first-child": {
                            margin: "0"
                        },
                        "& $head": {
                            paddingLeft: n.spacing(10)
                        }
                    },
                    active: {
                        backgroundColor: "dark" === n.palette.type ? Object(t.fade)(n.palette.primary.main, .24) : n.palette.primary.light,
                        "& $primary": {
                            color: "dark" === n.palette.type ? n.palette.common.white : n.palette.primary.dark
                        },
                        "& $icon": {
                            color: n.palette.primary.dark
                        },
                        "&:hover, &:focus": {
                            backgroundColor: "dark" === n.palette.type ? Object(t.fade)(n.palette.primary.main, .24) : n.palette.primary.light
                        }
                    },
                    nolist: {
                        listStyle: "none"
                    },
                    primary: {
                        whiteSpace: "nowrap"
                    },
                    icon: {
                        minWidth: n.spacing(5),
                        fontSize: 24
                    },
                    iconed: {},
                    head: {
                        padding: "".concat(n.spacing(1), "px 0"),
                        margin: "".concat(n.spacing(1), "px 0"),
                        borderRadius: "0 ".concat(n.spacing(3), "px ").concat(n.spacing(3), "px 0"),
                        paddingLeft: n.spacing(3),
                        "&$iconed": {
                            paddingLeft: n.spacing(3)
                        },
                        '& svg[class^="MuiSvgIcon"]': {
                            left: -10,
                            position: "relative"
                        }
                    },
                    headCapital: {
                        padding: "".concat(n.spacing(1), "px 0 ").concat(n.spacing(1), "px ").concat(n.spacing(9), "px"),
                        left: -2 * n.spacing(1),
                        position: "relative",
                        textTransform: "uppercase",
                        borderRadius: "0 ".concat(n.spacing(3), "px ").concat(n.spacing(3), "px 0"),
                        margin: "".concat(n.spacing(1), "px"),
                        "& span": {
                            fontSize: 14
                        }
                    },
                    copyright: (e = {
                            color: n.palette.text.secondary,
                            background: n.palette.background.paper,
                            padding: n.spacing(2),
                            position: "fixed"
                        },
                        g(e, n.breakpoints.up("lg"), {
                            background: "none",
                            position: "absolute"
                        }),
                        g(e, "left", n.spacing(3)),
                        g(e, "lineHeight", "24px"),
                        e),
                    brand: {
                        display: "flex",
                        alignItems: "baseline",
                        justifyContent: "center",
                        padding: "20px 10px 5px",
                        height: 64,
                        position: "relative",
                        textDecoration: "none",
                        fontSize: 16,
                        margin: 0,
                        fontWeight: 500,
                        color: n.palette.text.primary,
                        "& img": {
                            filter: "dark" === Object(f.a)() ? "invert(0%)" : "invert(80%)",
                            width: 30,
                            marginRight: 10
                        }
                    },
                    brandBig: {
                        paddingTop: n.spacing(4),
                        position: "relative",
                        textAlign: "center",
                        "& img": {
                            width: 68
                        },
                        "& h3": {
                            fontSize: 18,
                            marginTop: n.spacing(2),
                            fontWeight: 500,
                            color: n.palette.text.primary
                        }
                    },
                    profile: {
                        height: 120,
                        width: "100%",
                        display: "flex",
                        fontSize: 14,
                        padding: 10,
                        flexDirection: "column",
                        textAlign: "center",
                        alignItems: "center",
                        position: "absolute",
                        margin: "".concat(n.spacing(2), "px 0"),
                        zIndex: 0,
                        "& h4": {
                            fontSize: 18,
                            marginBottom: 0,
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                            width: 110
                        },
                        "& button": {
                            fontSize: 12,
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            width: 110,
                            display: "block",
                            overflow: "hidden",
                            textTransform: "capitalize",
                            padding: 0,
                            minHeight: 20,
                            marginTop: 4
                        }
                    },
                    statusMenu: {
                        "& li": {
                            width: 100
                        }
                    },
                    dotStatus: {
                        width: n.spacing(1),
                        height: n.spacing(1),
                        display: "inline-block",
                        borderRadius: "50%",
                        marginRight: n.spacing(.5)
                    },
                    online: {
                        backgroundColor: r.a[500]
                    },
                    bussy: {
                        backgroundColor: a.a[500]
                    },
                    idle: {
                        backgroundColor: s.a[500]
                    },
                    offline: {
                        backgroundColor: b.a[500]
                    },
                    rounded: {},
                    landingNav: {},
                    withProfile: {},
                    menuContainer: {
                        overflow: "auto",
                        height: "calc(100% - 64px)",
                        width: 240,
                        position: "relative",
                        display: "block",
                        padding: "".concat(n.spacing(5), "px 0"),
                        "&$withProfile": {
                            paddingTop: n.spacing(2)
                        },
                        "&$landingNav": (o = {},
                            g(o, n.breakpoints.up("lg"), {
                                paddingTop: n.spacing(5)
                            }),
                            g(o, n.breakpoints.down("lg"), {
                                height: "calc(100% - 164px)",
                                paddingTop: n.spacing(5)
                            }),
                            o),
                        "&$rounded": {
                            paddingRight: n.spacing(1.5),
                            "& a": {
                                borderRadius: "0 ".concat(n.spacing(3), "px ").concat(n.spacing(3), "px 0")
                            },
                            "& $opened": {
                                "&:before": {
                                    background: n.palette.primary.main
                                }
                            }
                        },
                        "&::-webkit-scrollbar": {
                            width: 8
                        },
                        "&::-webkit-scrollbar-thumb": {
                            borderRadius: 12,
                            backgroundColor: "rgba(0,0,0,0)"
                        },
                        "&:hover": {
                            "&::-webkit-scrollbar-thumb": {
                                backgroundColor: "rgba(0,0,0,0.3)",
                                border: "1px solid rgba(255,255,255,0.4)"
                            }
                        }
                    },
                    divider: {
                        marginTop: n.spacing(1)
                    },
                    badge: {
                        height: "auto"
                    }
                }
            }
        },
        "997281530ff2d95e3172": function(n, e, o) {
            "use strict";
            o.d(e, "a", (function() {
                return t
            }));
            var t = function() {
                return localStorage.getItem("mode") ? localStorage.getItem("mode") : "dark"
            }
        },
        "9a0a7af05ba70da6456a": function(n, e) {
            n.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAApQAAAHHCAQAAACrNABzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfmCQwXBS+EwPMfAAAAAW9yTlQBz6J3mgAAE0dJREFUeNrt3btxZFeyhtEsWAAaQqknaAEDbQO1oQnjxFVpAqHRhu6gCWyJhrA9qCuwH3hUoV7nnNw7cy1ltIlNRNYXf7+ACAa2v9//vv9rv9/v97/vH7JfAzCc/cP+ub/299lvAhjIq0xKJcBTBzMplQBfHc2kVAJEnMikVAKczKRUAr2dlUmpBPo6O5NSCfR0USalEujn4kxKJdDLVZmUSqCPqzMplUAPN2VSKoH6bs6kVAK1LZJJqQTqWiyTUgnUtGgmpRKoZ/FMSiVQyyqZlEqgjtUyKZVADatmUiqB+a2eSakE5rZJJqUSmNdmmZRKYE6bZlIqgflsnkmpBOaSkkmpBOaRlkmpBOaQmkmpBMaXnkmpBMY2RCalEm6yy35AbfuH+JD9hm8+xc+7z9mPgBkJ5YqGymSEVMKVhHI1w2UyQirhKkK5kiEzGSGVcAWhXMWwmYyQSriYUK5g6ExGSCVcSCgXN3wmI6QSLiKUC5sikxFSCRcQykVNk8kIqYSzCeWCpspkhFTCmYRyMdNlMkIq4SxCuZApMxkhlXAGoVzEtJmMkEo4SSgXMHUmI6QSThDKm02fyQiphDcJ5Y1KZDJCKuENQnmTMpmMkEo4SihvUCqTEVIJRwjl1cplMkIq4SChvFLJTEZIJRwglFcpm8kIqYRXhPIKpTMZIZXwwl32A6b0S/YDVvYu/vTDbeE7i/IK+332CzZgVcI3FiWHWZXwjVByjFTCF0LJcVIJESGU13nMfsBmpBLCH+ZcZX8f/2S/YUP+WIf2LMor7D7H++w3bMiqpD2L8kpWJfRhUV7JqoQ+LMobWJXQg0V5A6sSerAob2RVQn0W5Y2sSqjPolyAVQm1WZQLsCqhNotyIVYl1GVRLsSqhLosygVZlVCTRbkgqxJqsigXZlVCPRblwqxKqMeiXIFVCbVYlCuwKqEWi3IlViXUYVGuxKqEOizKFVmVUINFuSKrEmqwKFdmVcL8LMqVWZUwP4tyA1YlzM2i3IBVCXOzKDdiVcK8LMqNWJUwL4tyQ1YlzMmi3JBVCXOyKDdmVcJ8LMqNWZUwH4sygVUJc7EoE1iVMBeLMolVCfOwKJNYlTAPizKRVQlzsCgTWZUwB4symVUJ47Mok1mVMD6LcgBWJYzNohyAVQljsygHYVXCuCzKQViVMC6LciBWJYzJohyIVQljsigHY1XCeCzKwViVMB6LckBWJYzFohyQVQljsSgHZVXCOCzKQVmVMA6LcmBWJYzBohyYVQljsCgHZ1VCPotycFYl5LMoJ2BVQi6LcgJWJeSyKCdhVUIei3ISViXksSgnYlVCDotyIlYl5LAoJ2NVwvYsyslYlbA9i3JCViVsy6KckFUJ27IoJ2VVwnYsyklZlbAdi3JiViVsw6KcmFUJ27AoJ2dVwvosyslZlbA+i7IAqxLWZVEWYFXCuizKIqxKWI9FWYRVCeuxKAuxKmEdFmUhViWsw6IsxqqE5VmUxViVsDyLsiCrEpZlURZkVcKyLMqirEpYjkVZlFUJy7EoC7MqYRkWZWFWJSzDoizOqoTbWZTFWZVwO4uyAasSbmNRNmBVwm0syiasSrieRdmEVQnXsygbsSrhOhZlI1YlXMeibMaqhMtZlM1YlXA5i7IhqxIuY1E2ZFXCZSzKpqxKOJ9F2ZRVCeezKBuzKuE8FmVjViWcx6JszqqE0yzK5qxKOM2ixKqEEyxKrEo4waIkIqxKeItFSURYlfAWi5JvrEo4zKLkG6sSDrMoecaqhNcsSp6xKuE1i5JXrEp4zqLkFasSnrMoOciqhO8sSg6yKuE7oeSI3cd4zH7DhqSSN/ilN0fsf4//Zr9hY34BzhFCyUENMxkhlRwhlBzQNJMRUslBQskrjTMZIZUcIJS80DyTEVLJK0LJMzIZEVLJC0LJEzL5jVTyhFDyjUw+I5V8I5R8IZOvSCVfCCURIZNHSCURIZREhEy+QSoJoSRk8gSpRCiRyZOksj2hbE4mzyKVzQllazJ5NqlsTSgbk8mLSGVjQtmWTF5MKtsSyqZk8ipS2ZRQtiSTV5PKloSyIZm8iVQ2JJTtyOTNpLIdoWxGJhchlS/s7+O3+DHeZb9jcY/xx+6jUDYjk4uRyif2D/Eh+w0rer/7KJSNyOSipPKL4pmMiPhBKNuQycVJZbTIZMTjXfYL2IZMruBd/Lm/z35ErhaZjPhRKFuQyZU0T2WTTEaEUDYgkytqnMo+mYy//R5leTK5upa/V9kokxHvhbI4mdxEu1S2yuSn3X/80rs0mdxIs1+A98pk/OwvnJcmk5tqsyq7ZXL3WSgLk8nNtUhlx0wKZVkymaJ8KntmUiiLksk0pVPZNZNCWZJMpiqbyr6ZFMqCZDJdyVR2zqRQliOTQyiXyt6ZFMpiZHIYpVLZPZNCWYpMDqVMKmVSKAuRyeGUSKVMRghlGTI5pOlTKZP/EsoSZHJYU6dSJr8SygJkcmjTplImvxPK6cnk8KZMpUw+JZSTk8kpTJdKmXxOKKcmk9OYKpUy+ZJQTkwmpzJNKmXyNaGclkxOZ4pUyuQhQjkpmZzS8KmUycP8zJwpyeSk3sVv2U94i0weY1FOSCan9sOom1Imj7MopyOTk/sp+wGHyeRbhHIyMskaZPJtQjkVmWQNMnmK36OciEyWMNzvUcrkaRblNGSyhE8ymejqv55lUU5CJosYbE/K5HmEcgoyWYRM5rnpL/v7pfcEZLKI9zKZ5sZ/E2VRDk8mi7Am89z8T0ctysHJZBHWZJ4F/oW9RTk0mSzCmsyzyDcisSgHJpNFWJN5Fvp+TRblsGSyCGsyz2Lf1s6iHJRMFmFN5lnwu39alAPa38ef8S77FSzAmsyz6DdJtiiHI5NlWJN5Fv5e8hblYGSyDGsyz+I/csOiHIpMlmFN5lnhJxNZlAORyTKsyTyr/AA3i3IYMlmGNZlnpZ9zaVEOQibLsCbzrPbjgC3KIchkGdZknhV/arpFOQCZLMOazLNiJi3KAchkGdZknlUzaVGmk8kyrMk8K2fSokwmk2VYk3lWz6RFmUomy7Am82yQSYsykUyWYU3m2SSTFmUamSzDmsyzUSYtyiQyWYY1mWezTFqUKWSyDGsyz4aZtCgTyGQZ1mSeTTNpUW5OJsuwJvNsnEmLcmMyWYY1mWfzTFqUm5LJMqzJPAmZtCg3JJNlWJN5UjJpUW5GJsuwJvMkZdKi3IhMlmFN5knLpEW5CZksY7Q1eR//ZL9hM4mZtCg3IJNljLYm7+PP7DdsJjWTFuXqZLKM8dZkn8tKzqRFubJWx1zbiGuyy2WlZ9KiXFWrY67NmswzQCYtyhW1OubarMk8Q2TSolxNq2OuzZrMM0gmLcqVtDrm2qzJPMNk0qJcRatjrs2azDNQJi3KFbQ65tqsyTxDZdKiXFyrY67NmswzWCYtyoW1OubarMk8w2XSolxUq2OuzZrMM2AmLcoFtTrmyj7JZKIhM2lRLqbVMVc23Ae11WUN99X/SigX0eqYKxvug9rqsob76n8nlAtodcyVDfdBbXVZw331nxLKm7U65sqG+6C2uqzhvvrPCeWNWh1zZcN9UFtd1nBf/ZeE8iatjrmy4T6orS5ruK/+a0J5g1bHXNlwH9RWlzXcV/8Qobxaq2OubLgPaqvLGu6rf5hQXqnVMVc23Ae11WUN99U/Riiv0uqYKxvug9rqsob76h8nlFdodcyVDfdBbXVZw3313yKUF2t1zJUN90FtdVnDffXfJpQXanXMlQ33QW11WcN99U/x3YMu0uqYKxvug9rqsh53/xnrq3+aRXmBVsdcmUxmetz9mv2Eywnl2Vodc2UymWnKTArl2Vodc2UymWnSTArlmVodc2UymWnaTArlWVodc2UymWniTArlGVodc2UymWnqTArlSa2OuTKZzDR5JoXyhFbHXJlMZpo+k0L5plbHXJlMZiqQSaF8Q6tjrkwmM5XIpFAe1eqYK5PJTEUyKZRHtDrmymQyU5lMCuVBrY65MpnMVCiTQnlAq2OuTCYzlcqkUL7S6pgrk8lMxTIplC+0OubKZDJTuUwK5TOtjrkymcxUMJNC+USrY65MJjOVzKRQftPqmCuTyUxFMymUX7Q65spkMlPZTAplRDQ75spkMlPhTAplNDvmymQyU+lMCmWvY65MJjMVz2T7ULY65spkMlP5TDYPZatjrkwmMzXIZOtQtjrmymQyU4tMNg5lq2OuTCYzNclk21C2OubKZDJTm0w2DWWrY65suExG7P9qc1mNMhlxl/2A7clkESNm8qHNZbXKZMNQymQRA2YyIn7JfsBGmmWyXShlsogxM9nHH9kP2FqrUMpkEeNmsktAPuwfsp+wrUZ/mCOTRYybydjfxz/Zb9jM+93H7Cdsp82ilMkiBs5kxO5zPGa/YTOtVmWTRSmTRQydyYh2l9ZmVbYIZbPjrWv4TEa0u7YmqWwQymaHW9cUmYxod3EtUlk+lM2Otq5pMhnR7uoapLJ4KJsdbF1TZTKi3eWVT2XpUDY71rqmy2REu+srnsrCoWx2qHVNmcmIdhdYOpVlQ9nsSOuaNpMR7a6wcCqLhrLZgdY1dSYj2l1i2VSWDGWz46xr+kxGtLvGoqksGMpmh1lXiUxGtLvIkqksF8pmR1lXmUxGtLvKgqksFspmB1lXqUxGtLvMcqksFcpmx1hXuUxGtLvOYqksFMpmh1hXyUxGtLvQUqksE8pmR1hX2UxGtLvSQqksEspmB1hX6UxGtLvUMqksEcpmx1dX+UxGtLvWIqksEMpmh1dXi0xGtLvYEqmcPpTNjq6uNpmMaHe1BVI5eSibHVxdrTIZ0e5yp0/l1KFsdmx1tctkRLvrnTyVE4ey2aHV1TKTEe0ueOpUThvKZkdWV9tMRrS74olTOWkomx1YXa0zGdHukqdN5V32A67R7LjqeuyeyYjd5/g5PmW/YjMf9g/ZT7jOhItSJot43P2a/YQxNLvoKVfldKFsdlR1yeQTza56wlROFspmB1WXTL7Q7LKnS+VUoWx2THXJ5AHNrnuyVE4UymaHVJdMHtHswqdK5TShbHZEdcnkG5pd+USpnCSUzQ6oLpk8odmlT5PKKULZ7HjqkskzNLv2SVI5QSibHU5dMnmmZhc/RSqHD2Wzo6lLJi/Q7OonSOXgoWx2MHXJ5IWaXf7wqRw6lM2OpS6ZvEKz6x88lQN/U4xmh1KXTF5l9zl+jsfsV2xm8G+XMeyilMkiZPIm+9/jv9lv2MzAq3LQUMpkETJ5M6kcwZChlMkiZHIRUplvwFDKZBEyuRipzDZcKGWyCJlclFTmGiyUMlmETC5OKjMNFUqZLEImVyGVeQYKpUwWIZOrkcosw4RSJouQyVVJZY5BQimTRcjk6qQywxChlMkiZHITUrm9AUIpk0XI5GakcmvpoZTJImRyU1K5reRQymQRMrk5qdxSaihlsgiZTCGV20kMpUwWIZNppHIraaGUySJkMpVUbiMplDJZhEymk8otpIRSJouQySFI5foSQimTRcjkMKRybZuHUiaLkMmhSOW6Ng6lTBYhk8ORyjVtGkqZLEImhySV69kwlDJZhEwOSyrXslkoZbIImRyaVK5jo1DKZBEyOTypXMMmoZTJImRyClK5vA1CKZNFyOQ0pHJpq4dSJouQyalI5bJWDqVMFiGT05HKJa0aSpksQianJJXLWTGUMlmETE5LKpeyWihlsgiZnJpULmOlUMpkETI5PalcwiqhlMkiZLIEqbzdCqGUySJksgypvNXioZTJImSyFKm8zcKhlMkiZLIcqbzFoqGUySJksiSpvN6CoZTJImSyLKm81mKhlMkiZLI0qbzOQqGUySJksjypvMYioZTJImSyBam83AKhlMkiZLINqbzUzaGUySJkshWpvMyNoZTJImSyHam8xE2hlMkiZLIlqTzfDaGUySJksi2pPNfVoZTJImSyNak8z5WhlMkiZLI9qTzHVaGUySJkkpDKc1wRSpksQib5QipPuTiUMlmETPKEVL7twlDKZBEyyQtS+ZaLQimTRcgkB0jlcReEUiaLkEmOkMpjzg6lTBYhk7xBKg87M5QyWYRMcoJUHnJWKGWyCJnkDFL52hmhlMkiZJIzSeVLJ0Mpk0XIJBeQyudOhFImi5BJLiSVT70ZSpksYvEfB08HUvndG6GUySJkkitJ5VdHQymTRcgkN5DKfx0JpUwWIZPcSCojjoRSJouQSRYglQdDKZNFyCQLkcpXoZTJImSSBXVP5YtQymQRMsnCeqfyWShlsgiZZAWdU/kklDJZhEyykr6pvPv2JXiIf2SyAJlkNbtf4zH7DZv5sH948l/+7//sH+JD9rtYgEyysp6rchchk2XIJBvomMqd35ssQybZSL9U3kXEbzJZgEyymX6/V7nb38c/2S/hZjLJxnqtyrv4KfsN3Ewm2VyrVfnLXfyS/QZuJJOkaJTKH+/ij+w3cBOZJE2bVL67u/3/g0QySaomqfx0t/sYn7JfwZVkknQtUvn3v3+P0p97z0gmGUT5PwH/4S5i9zneZ7+Di8kkwyi+Kt/vPn/9t9738VP8X/Z7ONPf8b/d5+xHwFP7h/il3K789PWz9v8YYo3bodVkAAAAATJlWElmTU0AKgAAAAgABwESAAMAAAABAAEAAAEaAAUAAAABAAAAYgEbAAUAAAABAAAAagEoAAMAAAABAAIAAAExAAIAAAAfAAAAcgEyAAIAAAAUAAAAkYdpAAQAAAABAAAAqAAAANQAAABIAAAAAQAAAEgAAAABQWRvYmUgUGhvdG9zaG9wIDIzLjIgKFdpbmRvd3MpADIwMjI6MDk6MTIgMTc6NTk6NDIAAAAAAAOgAQADAAAAAf//AACgAgAEAAAAAQAAApSgAwAEAAAAAQAAAccAAAAAAAAABgEDAAMAAAABAAYAAAEaAAUAAAABAAABIgEbAAUAAAABAAABKgEoAAMAAAABAAIAAAIBAAQAAAABAAABMgICAAQAAAABAAAAAAAAAAAAAABIAAAAAQAAAEgAAAABHci5VAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMi0wOS0xMlQyMzowNTo0NyswMDowMAfpj9wAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjItMDktMTJUMjM6MDU6NDcrMDA6MDB2tDdgAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDIyLTA5LTEyVDIzOjA1OjQ3KzAwOjAwIaEWvwAAABV0RVh0ZXhpZjpDb2xvclNwYWNlADY1NTM1M3sAbgAAACF0RVh0ZXhpZjpEYXRlVGltZQAyMDIyOjA5OjEyIDE3OjU5OjQybsLYrAAAABN0RVh0ZXhpZjpFeGlmT2Zmc2V0ADE2OMXNZz8AAAAYdEVYdGV4aWY6UGl4ZWxYRGltZW5zaW9uADY2MBUn8W4AAAAYdEVYdGV4aWY6UGl4ZWxZRGltZW5zaW9uADQ1NdDrYzoAAAAsdEVYdGV4aWY6U29mdHdhcmUAQWRvYmUgUGhvdG9zaG9wIDIzLjIgKFdpbmRvd3MpydcaUwAAABx0RVh0ZXhpZjp0aHVtYm5haWw6Q29tcHJlc3Npb24ANvllcFcAAAAodEVYdGV4aWY6dGh1bWJuYWlsOkpQRUdJbnRlcmNoYW5nZUZvcm1hdAAzMDZCSa5EAAAALHRFWHRleGlmOnRodW1ibmFpbDpKUEVHSW50ZXJjaGFuZ2VGb3JtYXRMZW5ndGgAMNY9rcAAAAAfdEVYdGV4aWY6dGh1bWJuYWlsOlJlc29sdXRpb25Vbml0ADIlQF7TAAAAH3RFWHRleGlmOnRodW1ibmFpbDpYUmVzb2x1dGlvbgA3Mi8x2ocYLAAAAB90RVh0ZXhpZjp0aHVtYm5haWw6WVJlc29sdXRpb24ANzIvMXTvib0AAAAASUVORK5CYII="
        },
        "9ac6f79a66b6a73a8ffa": function(n, e, o) {
            n.exports = o.p + "c4d1eabb98386bfd9859798f628543fc.png"
        },
        "9b37dd762206c53cc88c": function(n, e, o) {
            n.exports = o.p + "f5c2ff6b5d5cf8eb3132ec6f91dfdae6.png"
        },
        a81dcbc0abe3f1d189ea: function(n, e, o) {
            "use strict";

            function t(n, e, o, t, i, r, c) {
                try {
                    var a = n[r](c),
                        l = a.value
                } catch (n) {
                    return void o(n)
                }
                a.done ? e(l) : Promise.resolve(l).then(t, i)
            }

            function i(n) {
                return function() {
                    var e = this,
                        o = arguments;
                    return new Promise((function(i, r) {
                        var c = n.apply(e, o);

                        function a(n) {
                            t(c, i, r, a, l, "next", n)
                        }

                        function l(n) {
                            t(c, i, r, a, l, "throw", n)
                        }
                        a(void 0)
                    }))
                }
            }
            o.d(e, "f", (function() {
                    return c
                })),
                o.d(e, "c", (function() {
                    return l
                })),
                o.d(e, "b", (function() {
                    return d
                })),
                o.d(e, "n", (function() {
                    return f
                })),
                o.d(e, "e", (function() {
                    return u
                })),
                o.d(e, "d", (function() {
                    return m
                })),
                o.d(e, "j", (function() {
                    return y
                })),
                o.d(e, "i", (function() {
                    return v
                })),
                o.d(e, "l", (function() {
                    return w
                })),
                o.d(e, "o", (function() {
                    return C
                })),
                o.d(e, "k", (function() {
                    return I
                })),
                o.d(e, "h", (function() {
                    return N
                })),
                o.d(e, "m", (function() {
                    return T
                })),
                o.d(e, "g", (function() {
                    return E
                })),
                o.d(e, "a", (function() {
                    return O
                }));
            var r = new(o("b3a6dd5cfc9221d0ce1b"));

            function c() {
                return a.apply(this, arguments)
            }

            function a() {
                return (a = i(regeneratorRuntime.mark((function n() {
                    var e;
                    return regeneratorRuntime.wrap((function(n) {
                        for (;;)
                            switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2,
                                        r.simple.price({
                                            ids: "dxsale-network",
                                            vs_currencies: "usd",
                                            include_market_cap: "true"
                                        });
                                case 2:
                                    return e = n.sent,
                                        n.abrupt("return", e.data["dxsale-network"].usd);
                                case 4:
                                case "end":
                                    return n.stop()
                            }
                    }), n)
                })))).apply(this, arguments)
            }

            function l() {
                return s.apply(this, arguments)
            }

            function s() {
                return (s = i(regeneratorRuntime.mark((function n() {
                    var e;
                    return regeneratorRuntime.wrap((function(n) {
                        for (;;)
                            switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2,
                                        r.simple.price({
                                            ids: "binancecoin",
                                            vs_currencies: "usd",
                                            include_market_cap: "true"
                                        });
                                case 2:
                                    return e = n.sent,
                                        n.abrupt("return", e.data.binancecoin.usd);
                                case 4:
                                case "end":
                                    return n.stop()
                            }
                    }), n)
                })))).apply(this, arguments)
            }

            function d() {
                return b.apply(this, arguments)
            }

            function b() {
                return (b = i(regeneratorRuntime.mark((function n() {
                    var e;
                    return regeneratorRuntime.wrap((function(n) {
                        for (;;)
                            switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2,
                                        r.simple.price({
                                            ids: "bitcoin-cash",
                                            vs_currencies: "usd",
                                            include_market_cap: "true"
                                        });
                                case 2:
                                    return e = n.sent,
                                        n.abrupt("return", e.data["bitcoin-cash"].usd);
                                case 4:
                                case "end":
                                    return n.stop()
                            }
                    }), n)
                })))).apply(this, arguments)
            }

            function f() {
                return p.apply(this, arguments)
            }

            function p() {
                return (p = i(regeneratorRuntime.mark((function n() {
                    var e;
                    return regeneratorRuntime.wrap((function(n) {
                        for (;;)
                            switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2,
                                        r.simple.price({
                                            ids: "moonriver",
                                            vs_currencies: "usd",
                                            include_market_cap: "true"
                                        });
                                case 2:
                                    return e = n.sent,
                                        n.abrupt("return", e.data.moonriver.usd);
                                case 4:
                                case "end":
                                    return n.stop()
                            }
                    }), n)
                })))).apply(this, arguments)
            }

            function u() {
                return g.apply(this, arguments)
            }

            function g() {
                return (g = i(regeneratorRuntime.mark((function n() {
                    var e;
                    return regeneratorRuntime.wrap((function(n) {
                        for (;;)
                            switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2,
                                        r.simple.price({
                                            ids: "crypto-com-chain",
                                            vs_currencies: "usd",
                                            include_market_cap: "true"
                                        });
                                case 2:
                                    return e = n.sent,
                                        n.abrupt("return", e.data["crypto-com-chain"].usd);
                                case 4:
                                case "end":
                                    return n.stop()
                            }
                    }), n)
                })))).apply(this, arguments)
            }

            function m() {
                return h.apply(this, arguments)
            }

            function h() {
                return (h = i(regeneratorRuntime.mark((function n() {
                    var e;
                    return regeneratorRuntime.wrap((function(n) {
                        for (;;)
                            switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2,
                                        r.simple.price({
                                            ids: "celo",
                                            vs_currencies: "usd",
                                            include_market_cap: "true"
                                        });
                                case 2:
                                    return e = n.sent,
                                        n.abrupt("return", e.data.celo.usd);
                                case 4:
                                case "end":
                                    return n.stop()
                            }
                    }), n)
                })))).apply(this, arguments)
            }

            function y() {
                return x.apply(this, arguments)
            }

            function x() {
                return (x = i(regeneratorRuntime.mark((function n() {
                    var e;
                    return regeneratorRuntime.wrap((function(n) {
                        for (;;)
                            switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2,
                                        r.simple.price({
                                            ids: "harmony",
                                            vs_currencies: "usd",
                                            include_market_cap: "true"
                                        });
                                case 2:
                                    return e = n.sent,
                                        n.abrupt("return", e.data.harmony.usd);
                                case 4:
                                case "end":
                                    return n.stop()
                            }
                    }), n)
                })))).apply(this, arguments)
            }

            function v() {
                return k.apply(this, arguments)
            }

            function k() {
                return (k = i(regeneratorRuntime.mark((function n() {
                    var e;
                    return regeneratorRuntime.wrap((function(n) {
                        for (;;)
                            switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2,
                                        r.simple.price({
                                            ids: "gnosis",
                                            vs_currencies: "usd",
                                            include_market_cap: "true"
                                        });
                                case 2:
                                    return e = n.sent,
                                        n.abrupt("return", e.data.gnosis.usd);
                                case 4:
                                case "end":
                                    return n.stop()
                            }
                    }), n)
                })))).apply(this, arguments)
            }

            function w() {
                return A.apply(this, arguments)
            }

            function A() {
                return (A = i(regeneratorRuntime.mark((function n() {
                    var e;
                    return regeneratorRuntime.wrap((function(n) {
                        for (;;)
                            switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2,
                                        r.simple.price({
                                            ids: "kucoin-shares",
                                            vs_currencies: "usd",
                                            include_market_cap: "true"
                                        });
                                case 2:
                                    return e = n.sent,
                                        n.abrupt("return", e.data["kucoin-shares"].usd);
                                case 4:
                                case "end":
                                    return n.stop()
                            }
                    }), n)
                })))).apply(this, arguments)
            }

            function C() {
                return M.apply(this, arguments)
            }

            function M() {
                return (M = i(regeneratorRuntime.mark((function n() {
                    var e;
                    return regeneratorRuntime.wrap((function(n) {
                        for (;;)
                            switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2,
                                        r.simple.price({
                                            ids: "okb",
                                            vs_currencies: "usd",
                                            include_market_cap: "true"
                                        });
                                case 2:
                                    return e = n.sent,
                                        n.abrupt("return", e.data.okb.usd);
                                case 4:
                                case "end":
                                    return n.stop()
                            }
                    }), n)
                })))).apply(this, arguments)
            }

            function I() {
                return S.apply(this, arguments)
            }

            function S() {
                return (S = i(regeneratorRuntime.mark((function n() {
                    var e;
                    return regeneratorRuntime.wrap((function(n) {
                        for (;;)
                            switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2,
                                        r.simple.price({
                                            ids: "huobi-token",
                                            vs_currencies: "usd",
                                            include_market_cap: "true"
                                        });
                                case 2:
                                    return e = n.sent,
                                        n.abrupt("return", e.data["huobi-token"].usd);
                                case 4:
                                case "end":
                                    return n.stop()
                            }
                    }), n)
                })))).apply(this, arguments)
            }

            function N() {
                return j.apply(this, arguments)
            }

            function j() {
                return (j = i(regeneratorRuntime.mark((function n() {
                    var e;
                    return regeneratorRuntime.wrap((function(n) {
                        for (;;)
                            switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2,
                                        r.simple.price({
                                            ids: "fantom",
                                            vs_currencies: "usd",
                                            include_market_cap: "true"
                                        });
                                case 2:
                                    return e = n.sent,
                                        n.abrupt("return", e.data.fantom.usd);
                                case 4:
                                case "end":
                                    return n.stop()
                            }
                    }), n)
                })))).apply(this, arguments)
            }

            function T() {
                return L.apply(this, arguments)
            }

            function L() {
                return (L = i(regeneratorRuntime.mark((function n() {
                    var e;
                    return regeneratorRuntime.wrap((function(n) {
                        for (;;)
                            switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2,
                                        r.simple.price({
                                            ids: "matic-network",
                                            vs_currencies: "usd",
                                            include_market_cap: "true"
                                        });
                                case 2:
                                    return e = n.sent,
                                        n.abrupt("return", e.data["matic-network"].usd);
                                case 4:
                                case "end":
                                    return n.stop()
                            }
                    }), n)
                })))).apply(this, arguments)
            }

            function E() {
                return D.apply(this, arguments)
            }

            function D() {
                return (D = i(regeneratorRuntime.mark((function n() {
                    var e;
                    return regeneratorRuntime.wrap((function(n) {
                        for (;;)
                            switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2,
                                        r.simple.price({
                                            ids: "ethereum",
                                            vs_currencies: "usd",
                                            include_market_cap: "true"
                                        });
                                case 2:
                                    return e = n.sent,
                                        n.abrupt("return", e.data.ethereum.usd);
                                case 4:
                                case "end":
                                    return n.stop()
                            }
                    }), n)
                })))).apply(this, arguments)
            }

            function O() {
                return z.apply(this, arguments)
            }

            function z() {
                return (z = i(regeneratorRuntime.mark((function n() {
                    var e;
                    return regeneratorRuntime.wrap((function(n) {
                        for (;;)
                            switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2,
                                        r.simple.price({
                                            ids: "avalanche-2",
                                            vs_currencies: "usd",
                                            include_market_cap: "true"
                                        });
                                case 2:
                                    return e = n.sent,
                                        n.abrupt("return", e.data["avalanche-2"].usd);
                                case 4:
                                case "end":
                                    return n.stop()
                            }
                    }), n)
                })))).apply(this, arguments)
            }
        },
        ac4def00d4adc62eb8aa: function(n, e, o) {
            "use strict";
            o.d(e, "a", (function() {
                    return f
                })),
                o.d(e, "b", (function() {
                    return p
                })),
                o.d(e, "c", (function() {
                    return u
                }));
            var t, i = o("8af190b70a6bc55c6f1b");

            function r(n, e) {
                return function(n) {
                    if (Array.isArray(n))
                        return n
                }(n) || function(n, e) {
                    var o = null == n ? null : "undefined" !== typeof Symbol && n[Symbol.iterator] || n["@@iterator"];
                    if (null == o)
                        return;
                    var t, i, r = [],
                        c = !0,
                        a = !1;
                    try {
                        for (o = o.call(n); !(c = (t = o.next()).done) && (r.push(t.value), !e || r.length !== e); c = !0)
                        ;
                    } catch (n) {
                        a = !0,
                            i = n
                    } finally {
                        try {
                            c || null == o.return || o.return()
                        } finally {
                            if (a)
                                throw i
                        }
                    }
                    return r
                }(n, e) || function(n, e) {
                    if (!n)
                        return;
                    if ("string" === typeof n)
                        return c(n, e);
                    var o = Object.prototype.toString.call(n).slice(8, -1);
                    "Object" === o && n.constructor && (o = n.constructor.name);
                    if ("Map" === o || "Set" === o)
                        return Array.from(n);
                    if ("Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
                        return c(n, e)
                }(n, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function c(n, e) {
                (null == e || e > n.length) && (e = n.length);
                for (var o = 0, t = new Array(e); o < e; o++)
                    t[o] = n[o];
                return t
            }

            function a(n, e) {
                var o = Object.keys(n);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(n);
                    e && (t = t.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))),
                        o.push.apply(o, t)
                }
                return o
            }

            function l(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var o = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? a(Object(o), !0).forEach((function(e) {
                        s(n, e, o[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : a(Object(o)).forEach((function(e) {
                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e))
                    }))
                }
                return n
            }

            function s(n, e, o) {
                return e in n ? Object.defineProperty(n, e, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : n[e] = o,
                    n
            }
            var d = {
                    provider: null,
                    web3: null,
                    isProviderLoaded: !1,
                    initializeComponent: !1
                },
                b = function(n, e) {
                    switch (e.type) {
                        case "UPDATE_PROVIDER":
                            return l(l({}, n), e.payload);
                        case "RECEIVE_ACCOUNT":
                        case "CHANGE_ACCOUNT":
                            return l(l({}, n), {}, {
                                ethAddress: e.address
                            });
                        case "LOGOUT":
                            return l(l({}, n), {}, {
                                ethAddress: null
                            });
                        default:
                            return n
                    }
                },
                f = Object(i.createContext)({}),
                p = function(n) {
                    var e = n.children,
                        o = r(Object(i.useReducer)(b, d), 2),
                        c = o[0],
                        a = o[1];
                    return function(n, e, o, i) {
                        t || (t = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                        var r = n && n.defaultProps,
                            c = arguments.length - 3;
                        if (e || 0 === c || (e = {
                                children: void 0
                            }),
                            1 === c)
                            e.children = i;
                        else if (c > 1) {
                            for (var a = new Array(c), l = 0; l < c; l++)
                                a[l] = arguments[l + 3];
                            e.children = a
                        }
                        if (e && r)
                            for (var s in r)
                                void 0 === e[s] && (e[s] = r[s]);
                        else
                            e || (e = r || {});
                        return {
                            $$typeof: t,
                            type: n,
                            key: void 0 === o ? null : "" + o,
                            ref: null,
                            props: e,
                            _owner: null
                        }
                    }(f.Provider, {
                        value: l(l({}, c), {}, {
                            updateContextStore: function(n) {
                                a({
                                    type: "UPDATE_PROVIDER",
                                    payload: n
                                })
                            }
                        })
                    }, void 0, e)
                },
                u = function() {
                    return Object(i.useContext)(f)
                }
        },
        b2b4587baaf3d367ed36: function(n, e, o) {
            n.exports = o.p + "03e91ecd66510e6aca07c14cd192c7f9.eot"
        },
        d0e31aab2824a48e8a68: function(n, e, o) {
            var t = o("55aba059d8fc764a7c65");
            "string" === typeof t && (t = [
                [n.i, t, ""]
            ]);
            var i = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            o("1e4534d1d62a11482e97")(t, i);
            t.locals && (n.exports = t.locals)
        },
        d547f4e73aa1d3df70c6: function(n, e) {
            n.exports = [{
                key: "home",
                name: "Home",
                icon: "bx:home",
                linkParent: "/app",
                isNavLink: !0
            }, {
                key: "dxsale",
                name: "DxSale",
                icon: "clarity:launchpad-line",
                child: [{
                    key: "launchpad",
                    name: "Launchpad",
                    title: !0
                }, {
                    key: "saledash",
                    name: "Dashboard",
                    link: "/dxsale",
                    icon: "ios-jet-outline"
                }, {
                    key: "salecreate",
                    name: "Start or Manage",
                    link: "/dxsalecreate",
                    icon: "ios-jet-outline"
                }],
                isNavLink: !1
            }, {
                key: "dxlock",
                name: "DxLock",
                icon: "bi:file-lock",
                child: [{
                    key: "liquidity",
                    name: "View Lockers",
                    link: "/dxlock",
                    icon: "ios-archive-outline"
                }, {
                    key: "createlockers",
                    name: "Lock or Manage Assets",
                    title: !0
                }, {
                    key: "liquiditylocker",
                    name: "Lock LP Tokens",
                    link: "/dxlocklp",
                    icon: "ios-jet-outline"
                }, {
                    key: "tokenlocker",
                    name: "Lock Tokens",
                    link: "/dxlocktoken",
                    icon: "ios-jet-outline"
                }],
                isNavLink: !1
            }, {
                key: "dxMint",
                name: "DxMint",
                icon: "ic:outline-generating-tokens",
                linkParent: "/dxmint",
                isNavLink: !0
            }, {
                key: "dxDrop",
                name: "DxDrop",
                icon: "la:parachute-box",
                linkParent: "/dxdrop",
                isNavLink: !0
            }, {
                key: "myDx",
                name: "MyDx",
                icon: "bi:person-workspace",
                linkParent: "/mydx",
                isNavLink: !0
            }, {
                key: "dxRefer",
                name: "DxRefer",
                icon: "clarity:talk-bubbles-line",
                linkParent: "/dxrefer",
                isNavLink: !0
            }, {
                key: "security",
                name: "Security",
                icon: "iconoir:fingerprint-circled-lock",
                child: [{
                    key: "portals",
                    name: "Partner Portals",
                    title: !0
                }, {
                    key: "audit",
                    name: "Audit",
                    link: "/audit",
                    icon: "ios-jet-outline"
                }, {
                    key: "kyc",
                    name: "KYC",
                    link: "/kyc",
                    icon: "ios-jet-outline"
                }, {
                    key: "certificates",
                    name: "Certificates",
                    link: "/dxcertificate",
                    icon: "ios-jet-outline"
                }],
                isNavLink: !1
            }]
        },
        e086672b5f66e226e94e: function(n, e) {
            n.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzMDAgNDcuMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzAwIDQ3LjE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkFGQUZBO30KPC9zdHlsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTMwMCw0Ni45TDAsNDcuMVY4LjljMCwwLDIxLjEsMTQuMyw2NS4yLDE0LjFjNDAuNi0wLjIsNzYuNC0yMywxMjgtMjNDMjQzLjMsMCwzMDAsMTYuNCwzMDAsMTYuNFY0Ni45eiIvPgo8L3N2Zz4K"
        },
        e2af2251560851f21613: function(n, e, o) {
            "use strict";
            var t = o("b0c37be7de20d933b466"),
                i = o("539e6a99d006e79c3a40");

            function r(n, e, o) {
                return e in n ? Object.defineProperty(n, e, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : n[e] = o,
                    n
            }
            e.a = function(n) {
                var e;
                return {
                    appBar: {
                        backgroundColor: "white",
                        background: "rgba(0,0,0,0)",
                        zIndex: n.zIndex.drawer + 1,
                        transition: n.transitions.create(["width", "margin", "background"], {
                            easing: n.transitions.easing.sharp,
                            duration: n.transitions.duration.leavingScreen
                        }),
                        "& $menuButton": {
                            color: "dark" === n.palette.type ? n.palette.primary.light : n.palette.primary.main,
                            backgroundColor: "transparent",
                            boxShadow: "none",
                            zIndex: 10
                        },
                        "&$left": {
                            "& $menuButton": {
                                marginLeft: 13
                            },
                            "& $headerTitle": {
                                left: n.spacing(2)
                            }
                        },
                        "&$leftBig": {
                            "& $menuButton": r({
                                marginLeft: 30,
                                marginRight: n.spacing(2)
                            }, n.breakpoints.down("md"), {
                                marginLeft: 13
                            }),
                            "& $headerTitle": {
                                left: 0
                            }
                        },
                        "&$right": {
                            "& $menuButton": {
                                marginRight: 13
                            },
                            "& $headerTitle": {
                                right: n.spacing(2)
                            },
                            "& > div": {
                                flexDirection: "row-reverse"
                            },
                            "& $flex": {
                                textAlign: "left"
                            }
                        }
                    },
                    attachedbar: {
                        position: "relative",
                        "& $menuButton": {
                            margin: "0 ".concat(n.spacing(2), "px")
                        },
                        "& $wrapper": r({}, n.breakpoints.down("lg"), {
                            border: "1px solid ".concat(n.palette.divider)
                        })
                    },
                    floatingBar: {
                        position: "fixed"
                    },
                    appMenu: (e = {
                            justifyContent: "space-between",
                            display: "flex",
                            flexDirection: "row",
                            background: n.palette.background.paper,
                            boxShadow: n.shadows[3]
                        },
                        r(e, n.breakpoints.down("md"), {
                            padding: "".concat(n.spacing(.5), "px 0")
                        }),
                        r(e, n.breakpoints.up("lg"), {
                            background: Object(t.fade)(n.palette.background.paper, .8)
                        }),
                        r(e, "color", n.palette.text.primary),
                        e),
                    flex: {
                        flex: 1,
                        textAlign: "right"
                    },
                    flexDefault: {
                        flex: 1,
                        textAlign: "right"
                    },
                    left: {},
                    leftBig: {},
                    right: {},
                    appBarShift: {
                        transition: n.transitions.create(["width", "margin", "background"], {
                            easing: n.transitions.easing.sharp,
                            duration: n.transitions.duration.enteringScreen
                        }),
                        "&$left": r({
                            "& $menuButton": r({}, n.breakpoints.up("lg"), {
                                marginLeft: -20
                            })
                        }, n.breakpoints.up("lg"), {
                            marginLeft: 240,
                            width: "calc(100% - ".concat(240, "px)")
                        }),
                        "&$leftBig": r({
                            "& $menuButton": r({}, n.breakpoints.up("lg"), {
                                marginLeft: -20
                            })
                        }, n.breakpoints.up("lg"), {
                            marginLeft: 280,
                            width: "calc(100% - ".concat(280, "px)")
                        }),
                        "&$right": r({
                            "& $menuButton": r({}, n.breakpoints.up("lg"), {
                                marginRight: -20
                            })
                        }, n.breakpoints.up("lg"), {
                            marginRight: 240,
                            width: "calc(100% - ".concat(240, "px)")
                        }),
                        "& $menuButton": {
                            backgroundColor: "dark" === n.palette.type ? n.palette.primary.main : n.palette.primary.light,
                            boxShadow: n.glow.medium
                        },
                        "& $headerAction": {
                            marginLeft: n.spacing(1)
                        },
                        "&$darker": {
                            "& $menuButton": {
                                color: "dark" === n.palette.type ? n.palette.primary.light : n.palette.primary.main
                            }
                        }
                    },
                    menuButton: {},
                    hide: {
                        display: "none"
                    },
                    textField: {
                        marginLeft: n.spacing(1),
                        marginRight: n.spacing(1),
                        width: 200
                    },
                    container: {
                        display: "flex",
                        flexWrap: "wrap"
                    },
                    dark: {},
                    light: {},
                    wrapper: {
                        fontFamily: n.typography.fontFamily,
                        position: "relative",
                        marginRight: n.spacing(2),
                        marginLeft: n.spacing(1),
                        borderRadius: 22,
                        display: "inline-block",
                        "&:hover": {
                            background: Object(t.fade)(n.palette.common.white, .25)
                        },
                        "&$light": {
                            background: Object(t.fade)(n.palette.common.white, .2)
                        },
                        "&$dark": {
                            background: "dark" === n.palette.type ? n.palette.grey[700] : Object(t.fade)(n.palette.common.white, .8),
                            boxShadow: n.shade.light,
                            "& input": {
                                color: n.palette.grey[700]
                            },
                            "& input::placeholder": {
                                color: n.palette.grey[400],
                                opacity: 1
                            },
                            "& input:-ms-input-placeholder": {
                                color: n.palette.grey[400]
                            },
                            "& input::-ms-input-placeholder": {
                                color: n.palette.grey[400]
                            }
                        },
                        "& $miniInput": {
                            width: 70
                        }
                    },
                    searchWrapper: r({}, n.breakpoints.down("md"), {
                        flex: 1,
                        textAlign: "right"
                    }),
                    search: r({
                        width: n.spacing(9),
                        height: "100%",
                        position: "absolute",
                        pointerEvents: "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }, n.breakpoints.down("xs"), {
                        display: "none"
                    }),
                    miniInput: {
                        paddingLeft: 0,
                        textIndent: "999999px"
                    },
                    gradientBg: {},
                    solidBg: {},
                    darker: {
                        backgroundAttachment: "fixed",
                        boxShadow: n.shadows[3],
                        "&$gradientBg": {
                            backgroundImage: "dark" === n.palette.type ? Object(i.b)(n) : Object(i.c)(n)
                        },
                        "&$solidBg": {
                            backgroundColor: "dark" === n.palette.type ? Object(t.darken)(n.palette.primary.main, .4) : n.palette.primary.main
                        },
                        "& $menuButton": {
                            color: n.palette.common.white
                        }
                    },
                    fixed: r({
                        position: "fixed",
                        left: 0,
                        top: 0
                    }, n.breakpoints.up("lg"), {
                        top: -8 * n.spacing(1)
                    }),
                    separatorV: {
                        borderLeft: "1px solid ".concat(n.palette.grey[300]),
                        height: 20,
                        margin: "0 10px",
                        opacity: .4
                    },
                    notifMenu: {
                        "& li": {
                            height: "auto",
                            "& h3": {
                                overflow: "hidden",
                                whiteSpace: "nowrap",
                                textOverflow: "ellipsis"
                            }
                        }
                    },
                    badgeMenu: {
                        "& span": {
                            top: 0,
                            right: -30
                        }
                    },
                    textNotif: {
                        "& span": {
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            display: "block"
                        }
                    },
                    notifIcon: {
                        "& i": {
                            width: 28,
                            height: 28,
                            fontSize: 28
                        },
                        "&$dark": {
                            "& i": {
                                color: n.palette.text.primary
                            }
                        },
                        "&$light": {
                            "& i": {
                                color: n.palette.common.white
                            }
                        }
                    },
                    brand: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "10px 20px 5px",
                        height: 64,
                        position: "absolute",
                        width: "100%",
                        fontSize: 16,
                        margin: 0,
                        fontWeight: 500,
                        textDecoration: "none",
                        color: n.palette.text.primary,
                        "& img": {
                            marginRight: 10,
                            width: 40
                        }
                    },
                    mainMenu: {
                        backgroundColor: "#0f0f0f",
                        color: "white",
                        padding: n.spacing(2, 0),
                        boxShadow: n.shadows[3],
                        position: "relative",
                        transition: "padding 0.3s ease",
                        "& > div": {
                            display: "flex",
                            justifyContent: "center"
                        }
                    },
                    headMenu: {
                        color: "white",
                        textTransform: "none",
                        fontFamily: "Bahnschrift",
                        fontSize: "0.8rem",
                        letterSpacing: "0.5px",
                        padding: "".concat(n.spacing(.5), "px ").concat(n.spacing(1), "px ").concat(n.spacing(.5), "px ").concat(n.spacing(2), "px"),
                        minHeight: "auto",
                        margin: "0 ".concat(n.spacing(.5), "px"),
                        lineHeight: "2em"
                    },
                    opened: {
                        color: n.palette.primary.main,
                        boxShadow: "inset 0 0 0 1px ".concat(n.palette.primary.main),
                        "& svg": {
                            fill: n.palette.primary.main
                        }
                    },
                    rightIcon: {
                        marginLeft: n.spacing(.5),
                        opacity: .3
                    },
                    selected: {
                        background: n.palette.primary.main,
                        color: n.palette.primary.light,
                        "&:hover": {
                            background: n.palette.primary.main
                        },
                        "& svg": {
                            fill: n.palette.primary.light
                        },
                        "& $rightIcon": {
                            opacity: .7
                        }
                    },
                    paperMenu: {
                        overflow: "auto",
                        maxHeight: 500
                    },
                    popperClose: {
                        pointerEvents: "none",
                        zIndex: 2
                    },
                    title: {
                        fontSize: 10,
                        textTransform: "uppercase",
                        display: "block",
                        color: n.palette.primary.main,
                        lineHeight: "28px",
                        fontWeight: "bold",
                        borderRadius: n.rounded.medium
                    },
                    dropDownMenu: {
                        marginTop: n.spacing(1.5),
                        position: "relative",
                        backgroundColor: "black",
                        color: "white",
                        fontFamily: "Bahnschrift",
                        fontSize: "0.8rem"
                    },
                    active: {},
                    menuItem: {
                        "& span": {
                            fontSize: 14
                        },
                        "&$active": {
                            borderLeft: "5px solid ".concat(n.palette.primary.main),
                            backgroundColor: "dark" === n.palette.type ? Object(t.fade)(n.palette.secondary.main, .24) : n.palette.secondary.light,
                            "& span": {
                                color: n.palette.primary.main
                            },
                            "&:hover": {
                                backgroundColor: "dark" === n.palette.type ? Object(t.fade)(n.palette.secondary.main, .24) : n.palette.secondary.light
                            }
                        }
                    },
                    megaMenu: {
                        "& $title": {
                            padding: 0
                        }
                    },
                    megaItem: {
                        display: "inline-block",
                        fontFamily: "Bahnschrift",
                        fontSize: "0.8rem",
                        textAlign: "center",
                        width: "80%",
                        borderRadius: n.rounded.medium,
                        margin: n.spacing(1),
                        marginInline: "10px",
                        padding: "".concat(n.spacing(.25), "px ").concat(n.spacing(1), "px"),
                        backgroundColor: "black",
                        "&:hover": {
                            color: "white",
                            width: "80%",
                            borderRadius: n.rounded.medium,
                            backgroundColor: n.palette.primary.main
                        },
                        "& span": {
                            fontSize: 14
                        },
                        "& div": {
                            padding: 0
                        },
                        "&$active": {
                            border: "1px solid ".concat(n.palette.primary.main),
                            borderRadius: n.rounded.medium,
                            backgroundColor: "black",
                            "& span": {
                                color: "white"
                            }
                        }
                    },
                    bigIcon: {
                        display: "none",
                        color: n.palette.secondary.main,
                        marginTop: 10,
                        "& i": {
                            fontSize: 100,
                            margin: "0 auto",
                            display: "inherit"
                        }
                    },
                    button: {},
                    headerProperties: {
                        overflow: "hidden",
                        position: "relative",
                        display: "flex",
                        flex: 1,
                        alignItems: "center",
                        zIndex: 1
                    },
                    fadeOut: {},
                    invert: {},
                    headerAction: {
                        margin: "0 ".concat(n.spacing(3), "px"),
                        transition: "opacity 0.5s ease",
                        "& $button": {
                            margin: "0 ".concat(n.spacing(1), "px / 2"),
                            "& i": {
                                width: 28,
                                height: 28,
                                fontSize: 28,
                                color: "red"
                            }
                        },
                        "&$fadeOut": {
                            opacity: 0
                        },
                        "&$invert": {
                            "& $button": {
                                "& i": {
                                    color: "#blue"
                                }
                            }
                        }
                    },
                    show: {},
                    headerTitle: {
                        transition: "all 0.3s ease",
                        fontSize: n.spacing(3),
                        position: "absolute",
                        textTransform: "capitalize",
                        fontWeight: 700,
                        top: 60,
                        color: n.palette.common.white,
                        opacity: 0,
                        "&$show": {
                            top: n.spacing(1),
                            opacity: .87
                        }
                    },
                    swipeDrawerPaper: {
                        width: 240
                    },
                    searchHeaderMenu: {
                        flex: 1,
                        flexDirection: "row-reverse",
                        display: "flex",
                        alignItems: "center"
                    },
                    center: {
                        textAlign: "center"
                    }
                }
            }
        },
        e4dc84676b0c76afa45a: function(n, e, o) {
            n.exports = o.p + "4f328b27d7c42ce6a85b093c67d123f4.png"
        },
        e533ed0964dd14ced5e7: function(n, e, o) {
            (n.exports = o("0e326f80368fd0b1333e")(!1)).push([n.i, ".subitem-underline-animation {\n  display: inline-block;\n  position: relative;\n  color: #2196f3;\n}\n\n.subitem-underline-animation:after {\n  content: '';\n  position: absolute;\n  width: 100%;\n  transform: scaleX(0);\n  height: 2px;\n  bottom: 0;\n  left: 5%;\n  background-color: #2196f3;\n  transform-origin: bottom right;\n  transition: transform 0.4s ease-out;\n}\n\n.subitem-underline-animation:hover:after {\n  transform: scaleX(1);\n  transform-origin: bottom left;\n}\n\n.submenu-text {\n  padding-left: 7px;\n  cursor: pointer;\n  color: #2196f3;\n  font-size: 60%;\n}\n", ""])
        },
        f2c6a753886bdb90da54: function(n, e, o) {
            n.exports = o.p + "9be290fc405250c06d85e233de2078da.png"
        },
        f64730a1de7df64ef19b: function(n, e, o) {
            n.exports = o.p + "dc91a2ae5218064bb02d972dc8623cdd.ttf"
        },
        f6a2b284ef82ea89a51f: function(n, e, o) {
            var t = o("3567f8229efe691bb9de");
            "string" === typeof t && (t = [
                [n.i, t, ""]
            ]);
            var i = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            o("1e4534d1d62a11482e97")(t, i);
            t.locals && (n.exports = t.locals)
        },
        fb8f8ae888ce6315f040: function(n, e, o) {
            n.exports = o.p + "065e2dd1b00efb3a7cd3b68dca41ecad.woff"
        },
        fd7c212f24c9e76a185d: function(n, e, o) {
            var t = o("e533ed0964dd14ced5e7");
            "string" === typeof t && (t = [
                [n.i, t, ""]
            ]);
            var i = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            o("1e4534d1d62a11482e97")(t, i);
            t.locals && (n.exports = t.locals)
        },
        ff6e9e4426c40f54986b: function(n, e, o) {
            var t = o("48c47d39618c1de84788");
            "string" === typeof t && (t = [
                [n.i, t, ""]
            ]);
            var i = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            o("1e4534d1d62a11482e97")(t, i);
            t.locals && (n.exports = t.locals)
        }
    },
    [
        [2, 8, 0]
    ]
]);
bigAvatar: {
        width: 80,
        height: 80,
        boxShadow: n.glow.light
    },
    brandBar: {
        transition: n.transitions.create(["width", "margin", "background"], {
            easing: n.transitions.easing.sharp,
            duration: n.transitions.duration.enteringScreen
        }),
        "&:after": {
            transition: n.transitions.create(["box-shadow"], {
                easing: n.transitions.easing.sharp,
                duration: n.transitions.duration.enteringScreen
            })
        }
    },
    darker: {
        background: "none"
    },
    nested: g({
        paddingTop: n.spacing(.5),
        paddingBottom: n.spacing(.5),
        margin: "".concat(n.spacing(.5), "px 0")
    }, n.breakpoints.down("lg"), {
        paddingLeft: n.spacing(3)
    }),
    child: {
        "& a": {
            paddingLeft: n.spacing(6)
        }
    },
    title: {
        fontSize: 10,
        textTransform: "uppercase",
        paddingLeft: n.spacing(10),
        marginTop: n.spacing(3),
        display: "block",
        color: n.palette.secondary.main,
        lineHeight: "28px",
        fontWeight: "bold"
    },
    dense: {
        marginLeft: -15,
        "& > $title:first-child": {
            margin: "0"
        },
        "& $head": {
            paddingLeft: n.spacing(10)
        }
    },
    active: {
        backgroundColor: "dark" === n.palette.type ? Object(t.fade)(n.palette.primary.main, .24) : n.palette.primary.light,
        "& $primary": {
            color: "dark" === n.palette.type ? n.palette.common.white : n.palette.primary.dark
        },
        "& $icon": {
            color: n.palette.primary.dark
        },
        "&:hover, &:focus": {
            backgroundColor: "dark" === n.palette.type ? Object(t.fade)(n.palette.primary.main, .24) : n.palette.primary.light
        }
    },
    nolist: {
        listStyle: "none"
    },
    primary: {
        whiteSpace: "nowrap"
    },
    icon: {
        minWidth: n.spacing(5),
        fontSize: 24
    },
    iconed: {},
    head: {
        padding: "".concat(n.spacing(1), "px 0"),
        margin: "".concat(n.spacing(1), "px 0"),
        borderRadius: "0 ".concat(n.spacing(3), "px ").concat(n.spacing(3), "px 0"),
        paddingLeft: n.spacing(3),
        "&$iconed": {
            paddingLeft: n.spacing(3)
        },
        '& svg[class^="MuiSvgIcon"]': {
            left: -10,
            position: "relative"
        }
    },
    headCapital: {
        padding: "".concat(n.spacing(1), "px 0 ").concat(n.spacing(1), "px ").concat(n.spacing(9), "px"),
        left: -2 * n.spacing(1),
        position: "relative",
        textTransform: "uppercase",
        borderRadius: "0 ".concat(n.spacing(3), "px ").concat(n.spacing(3), "px 0"),
        margin: "".concat(n.spacing(1), "px"),
        "& span": {
            fontSize: 14
        }
    },
    copyright: (e = {
            color: n.palette.text.secondary,
            background: n.palette.background.paper,
            padding: n.spacing(2),
            position: "fixed"
        },
        g(e, n.breakpoints.up("lg"), {
            background: "none",
            position: "absolute"
        }),
        g(e, "left", n.spacing(3)),
        g(e, "lineHeight", "24px"),
        e),
    brand: {
        display: "flex",
        alignItems: "baseline",
        justifyContent: "center",
        padding: "20px 10px 5px",
        height: 64,
        position: "relative",
        textDecoration: "none",
        fontSize: 16,
        margin: 0,
        fontWeight: 500,
        color: n.palette.text.primary,
        "& img": {
            filter: "dark" === Object(f.a)() ? "invert(0%)" : "invert(80%)",
            width: 30,
            marginRight: 10
        }
    },
    brandBig: {
        paddingTop: n.spacing(4),
        position: "relative",
        textAlign: "center",
        "& img": {
            width: 68
        },
        "& h3": {
            fontSize: 18,
            marginTop: n.spacing(2),
            fontWeight: 500,
            color: n.palette.text.primary
        }
    },
    profile: {
        height: 120,
        width: "100%",
        display: "flex",
        fontSize: 14,
        padding: 10,
        flexDirection: "column",
        textAlign: "center",
        alignItems: "center",
        position: "absolute",
        margin: "".concat(n.spacing(2), "px 0"),
        zIndex: 0,
        "& h4": {
            fontSize: 18,
            marginBottom: 0,
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
            width: 110
        },
        "& button": {
            fontSize: 12,
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            width: 110,
            display: "block",
            overflow: "hidden",
            textTransform: "capitalize",
            padding: 0,
            minHeight: 20,
            marginTop: 4
        }
    },
    statusMenu: {
        "& li": {
            width: 100
        }
    },
    dotStatus: {
        width: n.spacing(1),
        height: n.spacing(1),
        display: "inline-block",
        borderRadius: "50%",
        marginRight: n.spacing(.5)
    },
    online: {
        backgroundColor: r.a[500]
    },
    bussy: {
        backgroundColor: a.a[500]
    },
    idle: {
        backgroundColor: s.a[500]
    },
    offline: {
        backgroundColor: b.a[500]
    },
    rounded: {},
    landingNav: {},
    withProfile: {},
    menuContainer: {
        overflow: "auto",
        height: "calc(100% - 64px)",
        width: 240,
        position: "relative",
        display: "block",
        padding: "".concat(n.spacing(5), "px 0"),
        "&$withProfile": {
            paddingTop: n.spacing(2)
        },
        "&$landingNav": (o = {},
            g(o, n.breakpoints.up("lg"), {
                paddingTop: n.spacing(5)
            }),
            g(o, n.breakpoints.down("lg"), {
                height: "calc(100% - 164px)",
                paddingTop: n.spacing(5)
            }),
            o),
        "&$rounded": {
            paddingRight: n.spacing(1.5),
            "& a": {
                borderRadius: "0 ".concat(n.spacing(3), "px ").concat(n.spacing(3), "px 0")
            },
            "& $opened": {
                "&:before": {
                    background: n.palette.primary.main
                }
            }
        },
        "&::-webkit-scrollbar": {
            width: 8
        },
        "&::-webkit-scrollbar-thumb": {
            borderRadius: 12,
            backgroundColor: "rgba(0,0,0,0)"
        },
        "&:hover": {
            "&::-webkit-scrollbar-thumb": {
                backgroundColor: "rgba(0,0,0,0.3)",
                border: "1px solid rgba(255,255,255,0.4)"
            }
        }
    },
    divider: {
        marginTop: n.spacing(1)
    },
    badge: {
        height: "auto"
    }
}
}
},
"997281530ff2d95e3172": function(n, e, o) {
    "use strict";
    o.d(e, "a", (function() {
        return t
    }));
    var t = function() {
        return localStorage.getItem("mode") ? localStorage.getItem("mode") : "dark"
    }
},
"9a0a7af05ba70da6456a": function(n, e) {
    n.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAApQAAAHHCAQAAACrNABzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfmCQwXBS+EwPMfAAAAAW9yTlQBz6J3mgAAE0dJREFUeNrt3btxZFeyhtEsWAAaQqknaAEDbQO1oQnjxFVpAqHRhu6gCWyJhrA9qCuwH3hUoV7nnNw7cy1ltIlNRNYXf7+ACAa2v9//vv9rv9/v97/vH7JfAzCc/cP+ub/299lvAhjIq0xKJcBTBzMplQBfHc2kVAJEnMikVAKczKRUAr2dlUmpBPo6O5NSCfR0USalEujn4kxKJdDLVZmUSqCPqzMplUAPN2VSKoH6bs6kVAK1LZJJqQTqWiyTUgnUtGgmpRKoZ/FMSiVQyyqZlEqgjtUyKZVADatmUiqB+a2eSakE5rZJJqUSmNdmmZRKYE6bZlIqgflsnkmpBOaSkkmpBOaRlkmpBOaQmkmpBMaXnkmpBMY2RCalEm6yy35AbfuH+JD9hm8+xc+7z9mPgBkJ5YqGymSEVMKVhHI1w2UyQirhKkK5kiEzGSGVcAWhXMWwmYyQSriYUK5g6ExGSCVcSCgXN3wmI6QSLiKUC5sikxFSCRcQykVNk8kIqYSzCeWCpspkhFTCmYRyMdNlMkIq4SxCuZApMxkhlXAGoVzEtJmMkEo4SSgXMHUmI6QSThDKm02fyQiphDcJ5Y1KZDJCKuENQnmTMpmMkEo4SihvUCqTEVIJRwjl1cplMkIq4SChvFLJTEZIJRwglFcpm8kIqYRXhPIKpTMZIZXwwl32A6b0S/YDVvYu/vTDbeE7i/IK+332CzZgVcI3FiWHWZXwjVByjFTCF0LJcVIJESGU13nMfsBmpBLCH+ZcZX8f/2S/YUP+WIf2LMor7D7H++w3bMiqpD2L8kpWJfRhUV7JqoQ+LMobWJXQg0V5A6sSerAob2RVQn0W5Y2sSqjPolyAVQm1WZQLsCqhNotyIVYl1GVRLsSqhLosygVZlVCTRbkgqxJqsigXZlVCPRblwqxKqMeiXIFVCbVYlCuwKqEWi3IlViXUYVGuxKqEOizKFVmVUINFuSKrEmqwKFdmVcL8LMqVWZUwP4tyA1YlzM2i3IBVCXOzKDdiVcK8LMqNWJUwL4tyQ1YlzMmi3JBVCXOyKDdmVcJ8LMqNWZUwH4sygVUJc7EoE1iVMBeLMolVCfOwKJNYlTAPizKRVQlzsCgTWZUwB4symVUJ47Mok1mVMD6LcgBWJYzNohyAVQljsygHYVXCuCzKQViVMC6LciBWJYzJohyIVQljsigHY1XCeCzKwViVMB6LckBWJYzFohyQVQljsSgHZVXCOCzKQVmVMA6LcmBWJYzBohyYVQljsCgHZ1VCPotycFYl5LMoJ2BVQi6LcgJWJeSyKCdhVUIei3ISViXksSgnYlVCDotyIlYl5LAoJ2NVwvYsyslYlbA9i3JCViVsy6KckFUJ27IoJ2VVwnYsyklZlbAdi3JiViVsw6KcmFUJ27AoJ2dVwvosyslZlbA+i7IAqxLWZVEWYFXCuizKIqxKWI9FWYRVCeuxKAuxKmEdFmUhViWsw6IsxqqE5VmUxViVsDyLsiCrEpZlURZkVcKyLMqirEpYjkVZlFUJy7EoC7MqYRkWZWFWJSzDoizOqoTbWZTFWZVwO4uyAasSbmNRNmBVwm0syiasSrieRdmEVQnXsygbsSrhOhZlI1YlXMeibMaqhMtZlM1YlXA5i7IhqxIuY1E2ZFXCZSzKpqxKOJ9F2ZRVCeezKBuzKuE8FmVjViWcx6JszqqE0yzK5qxKOM2ixKqEEyxKrEo4waIkIqxKeItFSURYlfAWi5JvrEo4zKLkG6sSDrMoecaqhNcsSp6xKuE1i5JXrEp4zqLkFasSnrMoOciqhO8sSg6yKuE7oeSI3cd4zH7DhqSSN/ilN0fsf4//Zr9hY34BzhFCyUENMxkhlRwhlBzQNJMRUslBQskrjTMZIZUcIJS80DyTEVLJK0LJMzIZEVLJC0LJEzL5jVTyhFDyjUw+I5V8I5R8IZOvSCVfCCURIZNHSCURIZREhEy+QSoJoSRk8gSpRCiRyZOksj2hbE4mzyKVzQllazJ5NqlsTSgbk8mLSGVjQtmWTF5MKtsSyqZk8ipS2ZRQtiSTV5PKloSyIZm8iVQ2JJTtyOTNpLIdoWxGJhchlS/s7+O3+DHeZb9jcY/xx+6jUDYjk4uRyif2D/Eh+w0rer/7KJSNyOSipPKL4pmMiPhBKNuQycVJZbTIZMTjXfYL2IZMruBd/Lm/z35ErhaZjPhRKFuQyZU0T2WTTEaEUDYgkytqnMo+mYy//R5leTK5upa/V9kokxHvhbI4mdxEu1S2yuSn3X/80rs0mdxIs1+A98pk/OwvnJcmk5tqsyq7ZXL3WSgLk8nNtUhlx0wKZVkymaJ8KntmUiiLksk0pVPZNZNCWZJMpiqbyr6ZFMqCZDJdyVR2zqRQliOTQyiXyt6ZFMpiZHIYpVLZPZNCWYpMDqVMKmVSKAuRyeGUSKVMRghlGTI5pOlTKZP/EsoSZHJYU6dSJr8SygJkcmjTplImvxPK6cnk8KZMpUw+JZSTk8kpTJdKmXxOKKcmk9OYKpUy+ZJQTkwmpzJNKmXyNaGclkxOZ4pUyuQhQjkpmZzS8KmUycP8zJwpyeSk3sVv2U94i0weY1FOSCan9sOom1Imj7MopyOTk/sp+wGHyeRbhHIyMskaZPJtQjkVmWQNMnmK36OciEyWMNzvUcrkaRblNGSyhE8ymejqv55lUU5CJosYbE/K5HmEcgoyWYRM5rnpL/v7pfcEZLKI9zKZ5sZ/E2VRDk8mi7Am89z8T0ctysHJZBHWZJ4F/oW9RTk0mSzCmsyzyDcisSgHJpNFWJN5Fvp+TRblsGSyCGsyz2Lf1s6iHJRMFmFN5lnwu39alAPa38ef8S77FSzAmsyz6DdJtiiHI5NlWJN5Fv5e8hblYGSyDGsyz+I/csOiHIpMlmFN5lnhJxNZlAORyTKsyTyr/AA3i3IYMlmGNZlnpZ9zaVEOQibLsCbzrPbjgC3KIchkGdZknhV/arpFOQCZLMOazLNiJi3KAchkGdZknlUzaVGmk8kyrMk8K2fSokwmk2VYk3lWz6RFmUomy7Am82yQSYsykUyWYU3m2SSTFmUamSzDmsyzUSYtyiQyWYY1mWezTFqUKWSyDGsyz4aZtCgTyGQZ1mSeTTNpUW5OJsuwJvNsnEmLcmMyWYY1mWfzTFqUm5LJMqzJPAmZtCg3JJNlWJN5UjJpUW5GJsuwJvMkZdKi3IhMlmFN5knLpEW5CZksY7Q1eR//ZL9hM4mZtCg3IJNljLYm7+PP7DdsJjWTFuXqZLKM8dZkn8tKzqRFubJWx1zbiGuyy2WlZ9KiXFWrY67NmswzQCYtyhW1OubarMk8Q2TSolxNq2OuzZrMM0gmLcqVtDrm2qzJPMNk0qJcRatjrs2azDNQJi3KFbQ65tqsyTxDZdKiXFyrY67NmswzWCYtyoW1OubarMk8w2XSolxUq2OuzZrMM2AmLcoFtTrmyj7JZKIhM2lRLqbVMVc23Ae11WUN99X/SigX0eqYKxvug9rqsob76n8nlAtodcyVDfdBbXVZw331nxLKm7U65sqG+6C2uqzhvvrPCeWNWh1zZcN9UFtd1nBf/ZeE8iatjrmy4T6orS5ruK/+a0J5g1bHXNlwH9RWlzXcV/8Qobxaq2OubLgPaqvLGu6rf5hQXqnVMVc23Ae11WUN99U/Riiv0uqYKxvug9rqsob76h8nlFdodcyVDfdBbXVZw3313yKUF2t1zJUN90FtdVnDffXfJpQXanXMlQ33QW11WcN99U/x3YMu0uqYKxvug9rqsh53/xnrq3+aRXmBVsdcmUxmetz9mv2Eywnl2Vodc2UymWnKTArl2Vodc2UymWnSTArlmVodc2UymWnaTArlWVodc2UymWniTArlGVodc2UymWnqTArlSa2OuTKZzDR5JoXyhFbHXJlMZpo+k0L5plbHXJlMZiqQSaF8Q6tjrkwmM5XIpFAe1eqYK5PJTEUyKZRHtDrmymQyU5lMCuVBrY65MpnMVCiTQnlAq2OuTCYzlcqkUL7S6pgrk8lMxTIplC+0OubKZDJTuUwK5TOtjrkymcxUMJNC+USrY65MJjOVzKRQftPqmCuTyUxFMymUX7Q65spkMlPZTAplRDQ75spkMlPhTAplNDvmymQyU+lMCmWvY65MJjMVz2T7ULY65spkMlP5TDYPZatjrkwmMzXIZOtQtjrmymQyU4tMNg5lq2OuTCYzNclk21C2OubKZDJTm0w2DWWrY65suExG7P9qc1mNMhlxl/2A7clkESNm8qHNZbXKZMNQymQRA2YyIn7JfsBGmmWyXShlsogxM9nHH9kP2FqrUMpkEeNmsktAPuwfsp+wrUZ/mCOTRYybydjfxz/Zb9jM+93H7Cdsp82ilMkiBs5kxO5zPGa/YTOtVmWTRSmTRQydyYh2l9ZmVbYIZbPjrWv4TEa0u7YmqWwQymaHW9cUmYxod3EtUlk+lM2Otq5pMhnR7uoapLJ4KJsdbF1TZTKi3eWVT2XpUDY71rqmy2REu+srnsrCoWx2qHVNmcmIdhdYOpVlQ9nsSOuaNpMR7a6wcCqLhrLZgdY1dSYj2l1i2VSWDGWz46xr+kxGtLvGoqksGMpmh1lXiUxGtLvIkqksF8pmR1lXmUxGtLvKgqksFspmB1lXqUxGtLvMcqksFcpmx1hXuUxGtLvOYqksFMpmh1hXyUxGtLvQUqksE8pmR1hX2UxGtLvSQqksEspmB1hX6UxGtLvUMqksEcpmx1dX+UxGtLvWIqksEMpmh1dXi0xGtLvYEqmcPpTNjq6uNpmMaHe1BVI5eSibHVxdrTIZ0e5yp0/l1KFsdmx1tctkRLvrnTyVE4ey2aHV1TKTEe0ueOpUThvKZkdWV9tMRrS74olTOWkomx1YXa0zGdHukqdN5V32A67R7LjqeuyeyYjd5/g5PmW/YjMf9g/ZT7jOhItSJot43P2a/YQxNLvoKVfldKFsdlR1yeQTza56wlROFspmB1WXTL7Q7LKnS+VUoWx2THXJ5AHNrnuyVE4UymaHVJdMHtHswqdK5TShbHZEdcnkG5pd+USpnCSUzQ6oLpk8odmlT5PKKULZ7HjqkskzNLv2SVI5QSibHU5dMnmmZhc/RSqHD2Wzo6lLJi/Q7OonSOXgoWx2MHXJ5IWaXf7wqRw6lM2OpS6ZvEKz6x88lQN/U4xmh1KXTF5l9zl+jsfsV2xm8G+XMeyilMkiZPIm+9/jv9lv2MzAq3LQUMpkETJ5M6kcwZChlMkiZHIRUplvwFDKZBEyuRipzDZcKGWyCJlclFTmGiyUMlmETC5OKjMNFUqZLEImVyGVeQYKpUwWIZOrkcosw4RSJouQyVVJZY5BQimTRcjk6qQywxChlMkiZHITUrm9AUIpk0XI5GakcmvpoZTJImRyU1K5reRQymQRMrk5qdxSaihlsgiZTCGV20kMpUwWIZNppHIraaGUySJkMpVUbiMplDJZhEymk8otpIRSJouQySFI5foSQimTRcjkMKRybZuHUiaLkMmhSOW6Ng6lTBYhk8ORyjVtGkqZLEImhySV69kwlDJZhEwOSyrXslkoZbIImRyaVK5jo1DKZBEyOTypXMMmoZTJImRyClK5vA1CKZNFyOQ0pHJpq4dSJouQyalI5bJWDqVMFiGT05HKJa0aSpksQianJJXLWTGUMlmETE5LKpeyWihlsgiZnJpULmOlUMpkETI5PalcwiqhlMkiZLIEqbzdCqGUySJksgypvNXioZTJImSyFKm8zcKhlMkiZLIcqbzFoqGUySJksiSpvN6CoZTJImSyLKm81mKhlMkiZLI0qbzOQqGUySJksjypvMYioZTJImSyBam83AKhlMkiZLINqbzUzaGUySJkshWpvMyNoZTJImSyHam8xE2hlMkiZLIlqTzfDaGUySJksi2pPNfVoZTJImSyNak8z5WhlMkiZLI9qTzHVaGUySJkkpDKc1wRSpksQib5QipPuTiUMlmETPKEVL7twlDKZBEyyQtS+ZaLQimTRcgkB0jlcReEUiaLkEmOkMpjzg6lTBYhk7xBKg87M5QyWYRMcoJUHnJWKGWyCJnkDFL52hmhlMkiZJIzSeVLJ0Mpk0XIJBeQyudOhFImi5BJLiSVT70ZSpksYvEfB08HUvndG6GUySJkkitJ5VdHQymTRcgkN5DKfx0JpUwWIZPcSCojjoRSJouQSRYglQdDKZNFyCQLkcpXoZTJImSSBXVP5YtQymQRMsnCeqfyWShlsgiZZAWdU/kklDJZhEyykr6pvPv2JXiIf2SyAJlkNbtf4zH7DZv5sH948l/+7//sH+JD9rtYgEyysp6rchchk2XIJBvomMqd35ssQybZSL9U3kXEbzJZgEyymX6/V7nb38c/2S/hZjLJxnqtyrv4KfsN3Ewm2VyrVfnLXfyS/QZuJJOkaJTKH+/ij+w3cBOZJE2bVL67u/3/g0QySaomqfx0t/sYn7JfwZVkknQtUvn3v3+P0p97z0gmGUT5PwH/4S5i9zneZ7+Di8kkwyi+Kt/vPn/9t9738VP8X/Z7ONPf8b/d5+xHwFP7h/il3K789PWz9v8YYo3bodVkAAAAATJlWElmTU0AKgAAAAgABwESAAMAAAABAAEAAAEaAAUAAAABAAAAYgEbAAUAAAABAAAAagEoAAMAAAABAAIAAAExAAIAAAAfAAAAcgEyAAIAAAAUAAAAkYdpAAQAAAABAAAAqAAAANQAAABIAAAAAQAAAEgAAAABQWRvYmUgUGhvdG9zaG9wIDIzLjIgKFdpbmRvd3MpADIwMjI6MDk6MTIgMTc6NTk6NDIAAAAAAAOgAQADAAAAAf//AACgAgAEAAAAAQAAApSgAwAEAAAAAQAAAccAAAAAAAAABgEDAAMAAAABAAYAAAEaAAUAAAABAAABIgEbAAUAAAABAAABKgEoAAMAAAABAAIAAAIBAAQAAAABAAABMgICAAQAAAABAAAAAAAAAAAAAABIAAAAAQAAAEgAAAABHci5VAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMi0wOS0xMlQyMzowNTo0NyswMDowMAfpj9wAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjItMDktMTJUMjM6MDU6NDcrMDA6MDB2tDdgAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDIyLTA5LTEyVDIzOjA1OjQ3KzAwOjAwIaEWvwAAABV0RVh0ZXhpZjpDb2xvclNwYWNlADY1NTM1M3sAbgAAACF0RVh0ZXhpZjpEYXRlVGltZQAyMDIyOjA5OjEyIDE3OjU5OjQybsLYrAAAABN0RVh0ZXhpZjpFeGlmT2Zmc2V0ADE2OMXNZz8AAAAYdEVYdGV4aWY6UGl4ZWxYRGltZW5zaW9uADY2MBUn8W4AAAAYdEVYdGV4aWY6UGl4ZWxZRGltZW5zaW9uADQ1NdDrYzoAAAAsdEVYdGV4aWY6U29mdHdhcmUAQWRvYmUgUGhvdG9zaG9wIDIzLjIgKFdpbmRvd3MpydcaUwAAABx0RVh0ZXhpZjp0aHVtYm5haWw6Q29tcHJlc3Npb24ANvllcFcAAAAodEVYdGV4aWY6dGh1bWJuYWlsOkpQRUdJbnRlcmNoYW5nZUZvcm1hdAAzMDZCSa5EAAAALHRFWHRleGlmOnRodW1ibmFpbDpKUEVHSW50ZXJjaGFuZ2VGb3JtYXRMZW5ndGgAMNY9rcAAAAAfdEVYdGV4aWY6dGh1bWJuYWlsOlJlc29sdXRpb25Vbml0ADIlQF7TAAAAH3RFWHRleGlmOnRodW1ibmFpbDpYUmVzb2x1dGlvbgA3Mi8x2ocYLAAAAB90RVh0ZXhpZjp0aHVtYm5haWw6WVJlc29sdXRpb24ANzIvMXTvib0AAAAASUVORK5CYII="
},
"9ac6f79a66b6a73a8ffa": function(n, e, o) {
    n.exports = o.p + "c4d1eabb98386bfd9859798f628543fc.png"
},
"9b37dd762206c53cc88c": function(n, e, o) {
    n.exports = o.p + "f5c2ff6b5d5cf8eb3132ec6f91dfdae6.png"
},
a81dcbc0abe3f1d189ea: function(n, e, o) {
        "use strict";

        function t(n, e, o, t, i, r, c) {
            try {
                var a = n[r](c),
                    l = a.value
            } catch (n) {
                return void o(n)
            }
            a.done ? e(l) : Promise.resolve(l).then(t, i)
        }

        function i(n) {
            return function() {
                var e = this,
                    o = arguments;
                return new Promise((function(i, r) {
                    var c = n.apply(e, o);

                    function a(n) {
                        t(c, i, r, a, l, "next", n)
                    }

                    function l(n) {
                        t(c, i, r, a, l, "throw", n)
                    }
                    a(void 0)
                }))
            }
        }
        o.d(e, "f", (function() {
                return c
            })),
            o.d(e, "c", (function() {
                return l
            })),
            o.d(e, "b", (function() {
                return d
            })),
            o.d(e, "n", (function() {
                return f
            })),
            o.d(e, "e", (function() {
                return u
            })),
            o.d(e, "d", (function() {
                return m
            })),
            o.d(e, "j", (function() {
                return y
            })),
            o.d(e, "i", (function() {
                return v
            })),
            o.d(e, "l", (function() {
                return w
            })),
            o.d(e, "o", (function() {
                return C
            })),
            o.d(e, "k", (function() {
                return I
            })),
            o.d(e, "h", (function() {
                return N
            })),
            o.d(e, "m", (function() {
                return T
            })),
            o.d(e, "g", (function() {
                return E
            })),
            o.d(e, "a", (function() {
                return O
            }));
        var r = new(o("b3a6dd5cfc9221d0ce1b"));

        function c() {
            return a.apply(this, arguments)
        }

        function a() {
            return (a = i(regeneratorRuntime.mark((function n() {
                var e;
                return regeneratorRuntime.wrap((function(n) {
                    for (;;)
                        switch (n.prev = n.next) {
                            case 0:
                                return n.next = 2,
                                    r.simple.price({
                                        ids: "dxsale-network",
                                        vs_currencies: "usd",
                                        include_market_cap: "true"
                                    });
                            case 2:
                                return e = n.sent,
                                    n.abrupt("return", e.data["dxsale-network"].usd);
                            case 4:
                            case "end":
                                return n.stop()
                        }
                }), n)
            })))).apply(this, arguments)
        }

        function l() {
            return s.apply(this, arguments)
        }

        function s() {
            return (s = i(regeneratorRuntime.mark((function n() {
                var e;
                return regeneratorRuntime.wrap((function(n) {
                    for (;;)
                        switch (n.prev = n.next) {
                            case 0:
                                return n.next = 2,
                                    r.simple.price({
                                        ids: "binancecoin",
                                        vs_currencies: "usd",
                                        include_market_cap: "true"
                                    });
                            case 2:
                                return e = n.sent,
                                    n.abrupt("return", e.data.binancecoin.usd);
                            case 4:
                            case "end":
                                return n.stop()
                        }
                }), n)
            })))).apply(this, arguments)
        }

        function d() {
            return b.apply(this, arguments)
        }

        function b() {
            return (b = i(regeneratorRuntime.mark((function n() {
                var e;
                return regeneratorRuntime.wrap((function(n) {
                    for (;;)
                        switch (n.prev = n.next) {
                            case 0:
                                return n.next = 2,
                                    r.simple.price({
                                        ids: "bitcoin-cash",
                                        vs_currencies: "usd",
                                        include_market_cap: "true"
                                    });
                            case 2:
                                return e = n.sent,
                                    n.abrupt("return", e.data["bitcoin-cash"].usd);
                            case 4:
                            case "end":
                                return n.stop()
                        }
                }), n)
            })))).apply(this, arguments)
        }

        function f() {
            return p.apply(this, arguments)
        }

        function p() {
            return (p = i(regeneratorRuntime.mark((function n() {
                var e;
                return regeneratorRuntime.wrap((function(n) {
                    for (;;)
                        switch (n.prev = n.next) {
                            case 0:
                                return n.next = 2,
                                    r.simple.price({
                                        ids: "moonriver",
                                        vs_currencies: "usd",
                                        include_market_cap: "true"
                                    });
                            case 2:
                                return e = n.sent,
                                    n.abrupt("return", e.data.moonriver.usd);
                            case 4:
                            case "end":
                                return n.stop()
                        }
                }), n)
            })))).apply(this, arguments)
        }

        function u() {
            return g.apply(this, arguments)
        }

        function g() {
            return (g = i(regeneratorRuntime.mark((function n() {
                var e;
                return regeneratorRuntime.wrap((function(n) {
                    for (;;)
                        switch (n.prev = n.next) {
                            case 0:
                                return n.next = 2,
                                    r.simple.price({
                                        ids: "crypto-com-chain",
                                        vs_currencies: "usd",
                                        include_market_cap: "true"
                                    });
                            case 2:
                                return e = n.sent,
                                    n.abrupt("return", e.data["crypto-com-chain"].usd);
                            case 4:
                            case "end":
                                return n.stop()
                        }
                }), n)
            })))).apply(this, arguments)
        }

        function m() {
            return h.apply(this, arguments)
        }

        function h() {
            return (h = i(regeneratorRuntime.mark((function n() {
                var e;
                return regeneratorRuntime.wrap((function(n) {
                    for (;;)
                        switch (n.prev = n.next) {
                            case 0:
                                return n.next = 2,
                                    r.simple.price({
                                        ids: "celo",
                                        vs_currencies: "usd",
                                        include_market_cap: "true"
                                    });
                            case 2:
                                return e = n.sent,
                                    n.abrupt("return", e.data.celo.usd);
                            case 4:
                            case "end":
                                return n.stop()
                        }
                }), n)
            })))).apply(this, arguments)
        }

        function y() {
            return x.apply(this, arguments)
        }

        function x() {
            return (x = i(regeneratorRuntime.mark((function n() {
                var e;
                return regeneratorRuntime.wrap((function(n) {
                    for (;;)
                        switch (n.prev = n.next) {
                            case 0:
                                return n.next = 2,
                                    r.simple.price({
                                        ids: "harmony",
                                        vs_currencies: "usd",
                                        include_market_cap: "true"
                                    });
                            case 2:
                                return e = n.sent,
                                    n.abrupt("return", e.data.harmony.usd);
                            case 4:
                            case "end":
                                return n.stop()
                        }
                }), n)
            })))).apply(this, arguments)
        }

        function v() {
            return k.apply(this, arguments)
        }

        function k() {
            return (k = i(regeneratorRuntime.mark((function n() {
                var e;
                return regeneratorRuntime.wrap((function(n) {
                    for (;;)
                        switch (n.prev = n.next) {
                            case 0:
                                return n.next = 2,
                                    r.simple.price({
                                        ids: "gnosis",
                                        vs_currencies: "usd",
                                        include_market_cap: "true"
                                    });
                            case 2:
                                return e = n.sent,
                                    n.abrupt("return", e.data.gnosis.usd);
                            case 4:
                            case "end":
                                return n.stop()
                        }
                }), n)
            })))).apply(this, arguments)
        }

        function w() {
            return A.apply(this, arguments)
        }

        function A() {
            return (A = i(regeneratorRuntime.mark((function n() {
                var e;
                return regeneratorRuntime.wrap((function(n) {
                    for (;;)
                        switch (n.prev = n.next) {
                            case 0:
                                return n.next = 2,
                                    r.simple.price({
                                        ids: "kucoin-shares",
                                        vs_currencies: "usd",
                                        include_market_cap: "true"
                                    });
                            case 2:
                                return e = n.sent,
                                    n.abrupt("return", e.data["kucoin-shares"].usd);
                            case 4:
                            case "end":
                                return n.stop()
                        }
                }), n)
            })))).apply(this, arguments)
        }

        function C() {
            return M.apply(this, arguments)
        }

        function M() {
            return (M = i(regeneratorRuntime.mark((function n() {
                var e;
                return regeneratorRuntime.wrap((function(n) {
                    for (;;)
                        switch (n.prev = n.next) {
                            case 0:
                                return n.next = 2,
                                    r.simple.price({
                                        ids: "okb",
                                        vs_currencies: "usd",
                                        include_market_cap: "true"
                                    });
                            case 2:
                                return e = n.sent,
                                    n.abrupt("return", e.data.okb.usd);
                            case 4:
                            case "end":
                                return n.stop()
                        }
                }), n)
            })))).apply(this, arguments)
        }

        function I() {
            return S.apply(this, arguments)
        }

        function S() {
            return (S = i(regeneratorRuntime.mark((function n() {
                var e;
                return regeneratorRuntime.wrap((function(n) {
                    for (;;)
                        switch (n.prev = n.next) {
                            case 0:
                                return n.next = 2,
                                    r.simple.price({
                                        ids: "huobi-token",
                                        vs_currencies: "usd",
                                        include_market_cap: "true"
                                    });
                            case 2:
                                return e = n.sent,
                                    n.abrupt("return", e.data["huobi-token"].usd);
                            case 4:
                            case "end":
                                return n.stop()
                        }
                }), n)
            })))).apply(this, arguments)
        }

        function N() {
            return j.apply(this, arguments)
        }

        function j() {
            return (j = i(regeneratorRuntime.mark((function n() {
                var e;
                return regeneratorRuntime.wrap((function(n) {
                    for (;;)
                        switch (n.prev = n.next) {
                            case 0:
                                return n.next = 2,
                                    r.simple.price({
                                        ids: "fantom",
                                        vs_currencies: "usd",
                                        include_market_cap: "true"
                                    });
                            case 2:
                                return e = n.sent,
                                    n.abrupt("return", e.data.fantom.usd);
                            case 4:
                            case "end":
                                return n.stop()
                        }
                }), n)
            })))).apply(this, arguments)
        }

        function T() {
            return L.apply(this, arguments)
        }

        function L() {
            return (L = i(regeneratorRuntime.mark((function n() {
                var e;
                return regeneratorRuntime.wrap((function(n) {
                    for (;;)
                        switch (n.prev = n.next) {
                            case 0:
                                return n.next = 2,
                                    r.simple.price({
                                        ids: "matic-network",
                                        vs_currencies: "usd",
                                        include_market_cap: "true"
                                    });
                            case 2:
                                return e = n.sent,
                                    n.abrupt("return", e.data["matic-network"].usd);
                            case 4:
                            case "end":
                                return n.stop()
                        }
                }), n)
            })))).apply(this, arguments)
        }

        function E() {
            return D.apply(this, arguments)
        }

        function D() {
            return (D = i(regeneratorRuntime.mark((function n() {
                var e;
                return regeneratorRuntime.wrap((function(n) {
                    for (;;)
                        switch (n.prev = n.next) {
                            case 0:
                                return n.next = 2,
                                    r.simple.price({
                                        ids: "ethereum",
                                        vs_currencies: "usd",
                                        include_market_cap: "true"
                                    });
                            case 2:
                                return e = n.sent,
                                    n.abrupt("return", e.data.ethereum.usd);
                            case 4:
                            case "end":
                                return n.stop()
                        }
                }), n)
            })))).apply(this, arguments)
        }

        function O() {
            return z.apply(this, arguments)
        }

        function z() {
            return (z = i(regeneratorRuntime.mark((function n() {
                var e;
                return regeneratorRuntime.wrap((function(n) {
                    for (;;)
                        switch (n.prev = n.next) {
                            case 0:
                                return n.next = 2,
                                    r.simple.price({
                                        ids: "avalanche-2",
                                        vs_currencies: "usd",
                                        include_market_cap: "true"
                                    });
                            case 2:
                                return e = n.sent,
                                    n.abrupt("return", e.data["avalanche-2"].usd);
                            case 4:
                            case "end":
                                return n.stop()
                        }
                }), n)
            })))).apply(this, arguments)
        }
    },
    ac4def00d4adc62eb8aa: function(n, e, o) {
        "use strict";
        o.d(e, "a", (function() {
                return f
            })),
            o.d(e, "b", (function() {
                return p
            })),
            o.d(e, "c", (function() {
                return u
            }));
        var t, i = o("8af190b70a6bc55c6f1b");

        function r(n, e) {
            return function(n) {
                if (Array.isArray(n))
                    return n
            }(n) || function(n, e) {
                var o = null == n ? null : "undefined" !== typeof Symbol && n[Symbol.iterator] || n["@@iterator"];
                if (null == o)
                    return;
                var t, i, r = [],
                    c = !0,
                    a = !1;
                try {
                    for (o = o.call(n); !(c = (t = o.next()).done) && (r.push(t.value), !e || r.length !== e); c = !0)
                    ;
                } catch (n) {
                    a = !0,
                        i = n
                } finally {
                    try {
                        c || null == o.return || o.return()
                    } finally {
                        if (a)
                            throw i
                    }
                }
                return r
            }(n, e) || function(n, e) {
                if (!n)
                    return;
                if ("string" === typeof n)
                    return c(n, e);
                var o = Object.prototype.toString.call(n).slice(8, -1);
                "Object" === o && n.constructor && (o = n.constructor.name);
                if ("Map" === o || "Set" === o)
                    return Array.from(n);
                if ("Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
                    return c(n, e)
            }(n, e) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function c(n, e) {
            (null == e || e > n.length) && (e = n.length);
            for (var o = 0, t = new Array(e); o < e; o++)
                t[o] = n[o];
            return t
        }

        function a(n, e) {
            var o = Object.keys(n);
            if (Object.getOwnPropertySymbols) {
                var t = Object.getOwnPropertySymbols(n);
                e && (t = t.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))),
                    o.push.apply(o, t)
            }
            return o
        }

        function l(n) {
            for (var e = 1; e < arguments.length; e++) {
                var o = null != arguments[e] ? arguments[e] : {};
                e % 2 ? a(Object(o), !0).forEach((function(e) {
                    s(n, e, o[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : a(Object(o)).forEach((function(e) {
                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e))
                }))
            }
            return n
        }

        function s(n, e, o) {
            return e in n ? Object.defineProperty(n, e, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[e] = o,
                n
        }
        var d = {
                provider: null,
                web3: null,
                isProviderLoaded: !1,
                initializeComponent: !1
            },
            b = function(n, e) {
                switch (e.type) {
                    case "UPDATE_PROVIDER":
                        return l(l({}, n), e.payload);
                    case "RECEIVE_ACCOUNT":
                    case "CHANGE_ACCOUNT":
                        return l(l({}, n), {}, {
                            ethAddress: e.address
                        });
                    case "LOGOUT":
                        return l(l({}, n), {}, {
                            ethAddress: null
                        });
                    default:
                        return n
                }
            },
            f = Object(i.createContext)({}),
            p = function(n) {
                var e = n.children,
                    o = r(Object(i.useReducer)(b, d), 2),
                    c = o[0],
                    a = o[1];
                return function(n, e, o, i) {
                    t || (t = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                    var r = n && n.defaultProps,
                        c = arguments.length - 3;
                    if (e || 0 === c || (e = {
                            children: void 0
                        }),
                        1 === c)
                        e.children = i;
                    else if (c > 1) {
                        for (var a = new Array(c), l = 0; l < c; l++)
                            a[l] = arguments[l + 3];
                        e.children = a
                    }
                    if (e && r)
                        for (var s in r)
                            void 0 === e[s] && (e[s] = r[s]);
                    else
                        e || (e = r || {});
                    return {
                        $$typeof: t,
                        type: n,
                        key: void 0 === o ? null : "" + o,
                        ref: null,
                        props: e,
                        _owner: null
                    }
                }(f.Provider, {
                    value: l(l({}, c), {}, {
                        updateContextStore: function(n) {
                            a({
                                type: "UPDATE_PROVIDER",
                                payload: n
                            })
                        }
                    })
                }, void 0, e)
            },
            u = function() {
                return Object(i.useContext)(f)
            }
    },
    b2b4587baaf3d367ed36: function(n, e, o) {
        n.exports = o.p + "03e91ecd66510e6aca07c14cd192c7f9.eot"
    },
    d0e31aab2824a48e8a68: function(n, e, o) {
        var t = o("55aba059d8fc764a7c65");
        "string" === typeof t && (t = [
            [n.i, t, ""]
        ]);
        var i = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        o("1e4534d1d62a11482e97")(t, i);
        t.locals && (n.exports = t.locals)
    },
    d547f4e73aa1d3df70c6: function(n, e) {
        n.exports = [{
            key: "home",
            name: "Home",
            icon: "bx:home",
            linkParent: "/app",
            isNavLink: !0
        }, {
            key: "dxsale",
            name: "DxSale",
            icon: "clarity:launchpad-line",
            child: [{
                key: "launchpad",
                name: "Launchpad",
                title: !0
            }, {
                key: "saledash",
                name: "Dashboard",
                link: "/dxsale",
                icon: "ios-jet-outline"
            }, {
                key: "salecreate",
                name: "Start or Manage",
                link: "/dxsalecreate",
                icon: "ios-jet-outline"
            }],
            isNavLink: !1
        }, {
            key: "dxlock",
            name: "DxLock",
            icon: "bi:file-lock",
            child: [{
                key: "liquidity",
                name: "View Lockers",
                link: "/dxlock",
                icon: "ios-archive-outline"
            }, {
                key: "createlockers",
                name: "Lock or Manage Assets",
                title: !0
            }, {
                key: "liquiditylocker",
                name: "Lock LP Tokens",
                link: "/dxlocklp",
                icon: "ios-jet-outline"
            }, {
                key: "tokenlocker",
                name: "Lock Tokens",
                link: "/dxlocktoken",
                icon: "ios-jet-outline"
            }],
            isNavLink: !1
        }, {
            key: "dxMint",
            name: "DxMint",
            icon: "ic:outline-generating-tokens",
            linkParent: "/dxmint",
            isNavLink: !0
        }, {
            key: "dxDrop",
            name: "DxDrop",
            icon: "la:parachute-box",
            linkParent: "/dxdrop",
            isNavLink: !0
        }, {
            key: "myDx",
            name: "MyDx",
            icon: "bi:person-workspace",
            linkParent: "/mydx",
            isNavLink: !0
        }, {
            key: "dxRefer",
            name: "DxRefer",
            icon: "clarity:talk-bubbles-line",
            linkParent: "/dxrefer",
            isNavLink: !0
        }, {
            key: "security",
            name: "Security",
            icon: "iconoir:fingerprint-circled-lock",
            child: [{
                key: "portals",
                name: "Partner Portals",
                title: !0
            }, {
                key: "audit",
                name: "Audit",
                link: "/audit",
                icon: "ios-jet-outline"
            }, {
                key: "kyc",
                name: "KYC",
                link: "/kyc",
                icon: "ios-jet-outline"
            }, {
                key: "certificates",
                name: "Certificates",
                link: "/dxcertificate",
                icon: "ios-jet-outline"
            }],
            isNavLink: !1
        }]
    },
    e086672b5f66e226e94e: function(n, e) {
        n.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzMDAgNDcuMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzAwIDQ3LjE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkFGQUZBO30KPC9zdHlsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTMwMCw0Ni45TDAsNDcuMVY4LjljMCwwLDIxLjEsMTQuMyw2NS4yLDE0LjFjNDAuNi0wLjIsNzYuNC0yMywxMjgtMjNDMjQzLjMsMCwzMDAsMTYuNCwzMDAsMTYuNFY0Ni45eiIvPgo8L3N2Zz4K"
    },
    e2af2251560851f21613: function(n, e, o) {
        "use strict";
        var t = o("b0c37be7de20d933b466"),
            i = o("539e6a99d006e79c3a40");

        function r(n, e, o) {
            return e in n ? Object.defineProperty(n, e, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[e] = o,
                n
        }
        e.a = function(n) {
            var e;
            return {
                appBar: {
                    backgroundColor: "white",
                    background: "rgba(0,0,0,0)",
                    zIndex: n.zIndex.drawer + 1,
                    transition: n.transitions.create(["width", "margin", "background"], {
                        easing: n.transitions.easing.sharp,
                        duration: n.transitions.duration.leavingScreen
                    }),
                    "& $menuButton": {
                        color: "dark" === n.palette.type ? n.palette.primary.light : n.palette.primary.main,
                        backgroundColor: "transparent",
                        boxShadow: "none",
                        zIndex: 10
                    },
                    "&$left": {
                        "& $menuButton": {
                            marginLeft: 13
                        },
                        "& $headerTitle": {
                            left: n.spacing(2)
                        }
                    },
                    "&$leftBig": {
                        "& $menuButton": r({
                            marginLeft: 30,
                            marginRight: n.spacing(2)
                        }, n.breakpoints.down("md"), {
                            marginLeft: 13
                        }),
                        "& $headerTitle": {
                            left: 0
                        }
                    },
                    "&$right": {
                        "& $menuButton": {
                            marginRight: 13
                        },
                        "& $headerTitle": {
                            right: n.spacing(2)
                        },
                        "& > div": {
                            flexDirection: "row-reverse"
                        },
                        "& $flex": {
                            textAlign: "left"
                        }
                    }
                },
                attachedbar: {
                    position: "relative",
                    "& $menuButton": {
                        margin: "0 ".concat(n.spacing(2), "px")
                    },
                    "& $wrapper": r({}, n.breakpoints.down("lg"), {
                        border: "1px solid ".concat(n.palette.divider)
                    })
                },
                floatingBar: {
                    position: "fixed"
                },
                appMenu: (e = {
                        justifyContent: "space-between",
                        display: "flex",
                        flexDirection: "row",
                        background: n.palette.background.paper,
                        boxShadow: n.shadows[3]
                    },
                    r(e, n.breakpoints.down("md"), {
                        padding: "".concat(n.spacing(.5), "px 0")
                    }),
                    r(e, n.breakpoints.up("lg"), {
                        background: Object(t.fade)(n.palette.background.paper, .8)
                    }),
                    r(e, "color", n.palette.text.primary),
                    e),
                flex: {
                    flex: 1,
                    textAlign: "right"
                },
                flexDefault: {
                    flex: 1,
                    textAlign: "right"
                },
                left: {},
                leftBig: {},
                right: {},
                appBarShift: {
                    transition: n.transitions.create(["width", "margin", "background"], {
                        easing: n.transitions.easing.sharp,
                        duration: n.transitions.duration.enteringScreen
                    }),
                    "&$left": r({
                        "& $menuButton": r({}, n.breakpoints.up("lg"), {
                            marginLeft: -20
                        })
                    }, n.breakpoints.up("lg"), {
                        marginLeft: 240,
                        width: "calc(100% - ".concat(240, "px)")
                    }),
                    "&$leftBig": r({
                        "& $menuButton": r({}, n.breakpoints.up("lg"), {
                            marginLeft: -20
                        })
                    }, n.breakpoints.up("lg"), {
                        marginLeft: 280,
                        width: "calc(100% - ".concat(280, "px)")
                    }),
                    "&$right": r({
                        "& $menuButton": r({}, n.breakpoints.up("lg"), {
                            marginRight: -20
                        })
                    }, n.breakpoints.up("lg"), {
                        marginRight: 240,
                        width: "calc(100% - ".concat(240, "px)")
                    }),
                    "& $menuButton": {
                        backgroundColor: "dark" === n.palette.type ? n.palette.primary.main : n.palette.primary.light,
                        boxShadow: n.glow.medium
                    },
                    "& $headerAction": {
                        marginLeft: n.spacing(1)
                    },
                    "&$darker": {
                        "& $menuButton": {
                            color: "dark" === n.palette.type ? n.palette.primary.light : n.palette.primary.main
                        }
                    }
                },
                menuButton: {},
                hide: {
                    display: "none"
                },
                textField: {
                    marginLeft: n.spacing(1),
                    marginRight: n.spacing(1),
                    width: 200
                },
                container: {
                    display: "flex",
                    flexWrap: "wrap"
                },
                dark: {},
                light: {},
                wrapper: {
                    fontFamily: n.typography.fontFamily,
                    position: "relative",
                    marginRight: n.spacing(2),
                    marginLeft: n.spacing(1),
                    borderRadius: 22,
                    display: "inline-block",
                    "&:hover": {
                        background: Object(t.fade)(n.palette.common.white, .25)
                    },
                    "&$light": {
                        background: Object(t.fade)(n.palette.common.white, .2)
                    },
                    "&$dark": {
                        background: "dark" === n.palette.type ? n.palette.grey[700] : Object(t.fade)(n.palette.common.white, .8),
                        boxShadow: n.shade.light,
                        "& input": {
                            color: n.palette.grey[700]
                        },
                        "& input::placeholder": {
                            color: n.palette.grey[400],
                            opacity: 1
                        },
                        "& input:-ms-input-placeholder": {
                            color: n.palette.grey[400]
                        },
                        "& input::-ms-input-placeholder": {
                            color: n.palette.grey[400]
                        }
                    },
                    "& $miniInput": {
                        width: 70
                    }
                },
                searchWrapper: r({}, n.breakpoints.down("md"), {
                    flex: 1,
                    textAlign: "right"
                }),
                search: r({
                    width: n.spacing(9),
                    height: "100%",
                    position: "absolute",
                    pointerEvents: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }, n.breakpoints.down("xs"), {
                    display: "none"
                }),
                miniInput: {
                    paddingLeft: 0,
                    textIndent: "999999px"
                },
                gradientBg: {},
                solidBg: {},
                darker: {
                    backgroundAttachment: "fixed",
                    boxShadow: n.shadows[3],
                    "&$gradientBg": {
                        backgroundImage: "dark" === n.palette.type ? Object(i.b)(n) : Object(i.c)(n)
                    },
                    "&$solidBg": {
                        backgroundColor: "dark" === n.palette.type ? Object(t.darken)(n.palette.primary.main, .4) : n.palette.primary.main
                    },
                    "& $menuButton": {
                        color: n.palette.common.white
                    }
                },
                fixed: r({
                    position: "fixed",
                    left: 0,
                    top: 0
                }, n.breakpoints.up("lg"), {
                    top: -8 * n.spacing(1)
                }),
                separatorV: {
                    borderLeft: "1px solid ".concat(n.palette.grey[300]),
                    height: 20,
                    margin: "0 10px",
                    opacity: .4
                },
                notifMenu: {
                    "& li": {
                        height: "auto",
                        "& h3": {
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis"
                        }
                    }
                },
                badgeMenu: {
                    "& span": {
                        top: 0,
                        right: -30
                    }
                },
                textNotif: {
                    "& span": {
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        display: "block"
                    }
                },
                notifIcon: {
                    "& i": {
                        width: 28,
                        height: 28,
                        fontSize: 28
                    },
                    "&$dark": {
                        "& i": {
                            color: n.palette.text.primary
                        }
                    },
                    "&$light": {
                        "& i": {
                            color: n.palette.common.white
                        }
                    }
                },
                brand: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px 20px 5px",
                    height: 64,
                    position: "absolute",
                    width: "100%",
                    fontSize: 16,
                    margin: 0,
                    fontWeight: 500,
                    textDecoration: "none",
                    color: n.palette.text.primary,
                    "& img": {
                        marginRight: 10,
                        width: 40
                    }
                },
                mainMenu: {
                    backgroundColor: "#0f0f0f",
                    color: "white",
                    padding: n.spacing(2, 0),
                    boxShadow: n.shadows[3],
                    position: "relative",
                    transition: "padding 0.3s ease",
                    "& > div": {
                        display: "flex",
                        justifyContent: "center"
                    }
                },
                headMenu: {
                    color: "white",
                    textTransform: "none",
                    fontFamily: "Bahnschrift",
                    fontSize: "0.8rem",
                    letterSpacing: "0.5px",
                    padding: "".concat(n.spacing(.5), "px ").concat(n.spacing(1), "px ").concat(n.spacing(.5), "px ").concat(n.spacing(2), "px"),
                    minHeight: "auto",
                    margin: "0 ".concat(n.spacing(.5), "px"),
                    lineHeight: "2em"
                },
                opened: {
                    color: n.palette.primary.main,
                    boxShadow: "inset 0 0 0 1px ".concat(n.palette.primary.main),
                    "& svg": {
                        fill: n.palette.primary.main
                    }
                },
                rightIcon: {
                    marginLeft: n.spacing(.5),
                    opacity: .3
                },
                selected: {
                    background: n.palette.primary.main,
                    color: n.palette.primary.light,
                    "&:hover": {
                        background: n.palette.primary.main
                    },
                    "& svg": {
                        fill: n.palette.primary.light
                    },
                    "& $rightIcon": {
                        opacity: .7
                    }
                },
                paperMenu: {
                    overflow: "auto",
                    maxHeight: 500
                },
                popperClose: {
                    pointerEvents: "none",
                    zIndex: 2
                },
                title: {
                    fontSize: 10,
                    textTransform: "uppercase",
                    display: "block",
                    color: n.palette.primary.main,
                    lineHeight: "28px",
                    fontWeight: "bold",
                    borderRadius: n.rounded.medium
                },
                dropDownMenu: {
                    marginTop: n.spacing(1.5),
                    position: "relative",
                    backgroundColor: "black",
                    color: "white",
                    fontFamily: "Bahnschrift",
                    fontSize: "0.8rem"
                },
                active: {},
                menuItem: {
                    "& span": {
                        fontSize: 14
                    },
                    "&$active": {
                        borderLeft: "5px solid ".concat(n.palette.primary.main),
                        backgroundColor: "dark" === n.palette.type ? Object(t.fade)(n.palette.secondary.main, .24) : n.palette.secondary.light,
                        "& span": {
                            color: n.palette.primary.main
                        },
                        "&:hover": {
                            backgroundColor: "dark" === n.palette.type ? Object(t.fade)(n.palette.secondary.main, .24) : n.palette.secondary.light
                        }
                    }
                },
                megaMenu: {
                    "& $title": {
                        padding: 0
                    }
                },
                megaItem: {
                    display: "inline-block",
                    fontFamily: "Bahnschrift",
                    fontSize: "0.8rem",
                    textAlign: "center",
                    width: "80%",
                    borderRadius: n.rounded.medium,
                    margin: n.spacing(1),
                    marginInline: "10px",
                    padding: "".concat(n.spacing(.25), "px ").concat(n.spacing(1), "px"),
                    backgroundColor: "black",
                    "&:hover": {
                        color: "white",
                        width: "80%",
                        borderRadius: n.rounded.medium,
                        backgroundColor: n.palette.primary.main
                    },
                    "& span": {
                        fontSize: 14
                    },
                    "& div": {
                        padding: 0
                    },
                    "&$active": {
                        border: "1px solid ".concat(n.palette.primary.main),
                        borderRadius: n.rounded.medium,
                        backgroundColor: "black",
                        "& span": {
                            color: "white"
                        }
                    }
                },
                bigIcon: {
                    display: "none",
                    color: n.palette.secondary.main,
                    marginTop: 10,
                    "& i": {
                        fontSize: 100,
                        margin: "0 auto",
                        display: "inherit"
                    }
                },
                button: {},
                headerProperties: {
                    overflow: "hidden",
                    position: "relative",
                    display: "flex",
                    flex: 1,
                    alignItems: "center",
                    zIndex: 1
                },
                fadeOut: {},
                invert: {},
                headerAction: {
                    margin: "0 ".concat(n.spacing(3), "px"),
                    transition: "opacity 0.5s ease",
                    "& $button": {
                        margin: "0 ".concat(n.spacing(1), "px / 2"),
                        "& i": {
                            width: 28,
                            height: 28,
                            fontSize: 28,
                            color: "red"
                        }
                    },
                    "&$fadeOut": {
                        opacity: 0
                    },
                    "&$invert": {
                        "& $button": {
                            "& i": {
                                color: "#blue"
                            }
                        }
                    }
                },
                show: {},
                headerTitle: {
                    transition: "all 0.3s ease",
                    fontSize: n.spacing(3),
                    position: "absolute",
                    textTransform: "capitalize",
                    fontWeight: 700,
                    top: 60,
                    color: n.palette.common.white,
                    opacity: 0,
                    "&$show": {
                        top: n.spacing(1),
                        opacity: .87
                    }
                },
                swipeDrawerPaper: {
                    width: 240
                },
                searchHeaderMenu: {
                    flex: 1,
                    flexDirection: "row-reverse",
                    display: "flex",
                    alignItems: "center"
                },
                center: {
                    textAlign: "center"
                }
            }
        }
    },
    e4dc84676b0c76afa45a: function(n, e, o) {
        n.exports = o.p + "4f328b27d7c42ce6a85b093c67d123f4.png"
    },
    e533ed0964dd14ced5e7: function(n, e, o) {
        (n.exports = o("0e326f80368fd0b1333e")(!1)).push([n.i, ".subitem-underline-animation {\n  display: inline-block;\n  position: relative;\n  color: #2196f3;\n}\n\n.subitem-underline-animation:after {\n  content: '';\n  position: absolute;\n  width: 100%;\n  transform: scaleX(0);\n  height: 2px;\n  bottom: 0;\n  left: 5%;\n  background-color: #2196f3;\n  transform-origin: bottom right;\n  transition: transform 0.4s ease-out;\n}\n\n.subitem-underline-animation:hover:after {\n  transform: scaleX(1);\n  transform-origin: bottom left;\n}\n\n.submenu-text {\n  padding-left: 7px;\n  cursor: pointer;\n  color: #2196f3;\n  font-size: 60%;\n}\n", ""])
    },
    f2c6a753886bdb90da54: function(n, e, o) {
        n.exports = o.p + "9be290fc405250c06d85e233de2078da.png"
    },
    f64730a1de7df64ef19b: function(n, e, o) {
        n.exports = o.p + "dc91a2ae5218064bb02d972dc8623cdd.ttf"
    },
    f6a2b284ef82ea89a51f: function(n, e, o) {
        var t = o("3567f8229efe691bb9de");
        "string" === typeof t && (t = [
            [n.i, t, ""]
        ]);
        var i = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        o("1e4534d1d62a11482e97")(t, i);
        t.locals && (n.exports = t.locals)
    },
    fb8f8ae888ce6315f040: function(n, e, o) {
        n.exports = o.p + "065e2dd1b00efb3a7cd3b68dca41ecad.woff"
    },
    fd7c212f24c9e76a185d: function(n, e, o) {
        var t = o("e533ed0964dd14ced5e7");
        "string" === typeof t && (t = [
            [n.i, t, ""]
        ]);
        var i = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        o("1e4534d1d62a11482e97")(t, i);
        t.locals && (n.exports = t.locals)
    },
    ff6e9e4426c40f54986b: function(n, e, o) {
        var t = o("48c47d39618c1de84788");
        "string" === typeof t && (t = [
            [n.i, t, ""]
        ]);
        var i = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        o("1e4534d1d62a11482e97")(t, i);
        t.locals && (n.exports = t.locals)
    }
}, [
    [2, 8, 0]
]]);