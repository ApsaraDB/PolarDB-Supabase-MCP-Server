"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/tools/polardb-tools.ts
var polardb_tools_exports = {};
__export(polardb_tools_exports, {
  getPolarDBTools: () => getPolarDBTools
});
module.exports = __toCommonJS(polardb_tools_exports);

// ../mcp-utils/dist/index.js
var ol = Object.create;
var pa = Object.defineProperty;
var il = Object.getOwnPropertyDescriptor;
var ll = Object.getOwnPropertyNames;
var ul = Object.getPrototypeOf;
var cl = Object.prototype.hasOwnProperty;
var Q = (a16, e) => () => (e || a16((e = { exports: {} }).exports, e), e.exports);
var dl = (a16, e) => {
  for (var t in e) pa(a16, t, { get: e[t], enumerable: true });
};
var fl = (a16, e, t, s) => {
  if (e && typeof e == "object" || typeof e == "function") for (let r of ll(e)) !cl.call(a16, r) && r !== t && pa(a16, r, { get: () => e[r], enumerable: !(s = il(e, r)) || s.enumerable });
  return a16;
};
var hl = (a16, e, t) => (t = a16 != null ? ol(ul(a16)) : {}, fl(e || !a16 || !a16.__esModule ? pa(t, "default", { value: a16, enumerable: true }) : t, a16));
var en = Q((Ut, Xs) => {
  "use strict";
  (function(a16, e) {
    typeof Ut == "object" && typeof Xs < "u" ? e(Ut) : typeof define == "function" && define.amd ? define(["exports"], e) : e(a16.URI = a16.URI || {});
  })(Ut, (function(a16) {
    "use strict";
    function e() {
      for (var p = arguments.length, d = Array(p), v = 0; v < p; v++) d[v] = arguments[v];
      if (d.length > 1) {
        d[0] = d[0].slice(0, -1);
        for (var b = d.length - 1, E = 1; E < b; ++E) d[E] = d[E].slice(1, -1);
        return d[b] = d[b].slice(1), d.join("");
      } else return d[0];
    }
    function t(p) {
      return "(?:" + p + ")";
    }
    function s(p) {
      return p === void 0 ? "undefined" : p === null ? "null" : Object.prototype.toString.call(p).split(" ").pop().split("]").shift().toLowerCase();
    }
    function r(p) {
      return p.toUpperCase();
    }
    function n(p) {
      return p != null ? p instanceof Array ? p : typeof p.length != "number" || p.split || p.setInterval || p.call ? [p] : Array.prototype.slice.call(p) : [];
    }
    function i(p, d) {
      var v = p;
      if (d) for (var b in d) v[b] = d[b];
      return v;
    }
    function o(p) {
      var d = "[A-Za-z]", v = "[\\x0D]", b = "[0-9]", E = "[\\x22]", N = e(b, "[A-Fa-f]"), K = "[\\x0A]", ae = "[\\x20]", ie = t(t("%[EFef]" + N + "%" + N + N + "%" + N + N) + "|" + t("%[89A-Fa-f]" + N + "%" + N + N) + "|" + t("%" + N + N)), xe = "[\\:\\/\\?\\#\\[\\]\\@]", te = "[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]", he = e(xe, te), Pe = p ? "[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]" : "[]", de = p ? "[\\uE000-\\uF8FF]" : "[]", ne = e(d, b, "[\\-\\.\\_\\~]", Pe), pe = t(d + e(d, b, "[\\+\\-\\.]") + "*"), ue = t(t(ie + "|" + e(ne, te, "[\\:]")) + "*"), Tr = t(t("25[0-5]") + "|" + t("2[0-4]" + b) + "|" + t("1" + b + b) + "|" + t("[1-9]" + b) + "|" + b), Fe = t(t("25[0-5]") + "|" + t("2[0-4]" + b) + "|" + t("1" + b + b) + "|" + t("0?[1-9]" + b) + "|0?0?" + b), Me = t(Fe + "\\." + Fe + "\\." + Fe + "\\." + Fe), ce = t(N + "{1,4}"), Le = t(t(ce + "\\:" + ce) + "|" + Me), Ue = t(t(ce + "\\:") + "{6}" + Le), rr = t("\\:\\:" + t(ce + "\\:") + "{5}" + Le), Or = t(t(ce) + "?\\:\\:" + t(ce + "\\:") + "{4}" + Le), lr = t(t(t(ce + "\\:") + "{0,1}" + ce) + "?\\:\\:" + t(ce + "\\:") + "{3}" + Le), dt = t(t(t(ce + "\\:") + "{0,2}" + ce) + "?\\:\\:" + t(ce + "\\:") + "{2}" + Le), St = t(t(t(ce + "\\:") + "{0,3}" + ce) + "?\\:\\:" + ce + "\\:" + Le), Rt = t(t(t(ce + "\\:") + "{0,4}" + ce) + "?\\:\\:" + Le), Kr = t(t(t(ce + "\\:") + "{0,5}" + ce) + "?\\:\\:" + ce), Wr = t(t(t(ce + "\\:") + "{0,6}" + ce) + "?\\:\\:"), ur = t([Ue, rr, Or, lr, dt, St, Rt, Kr, Wr].join("|")), Gr = t(t(ne + "|" + ie) + "+"), fa = t(ur + "\\%25" + Gr), $r = t(ur + t("\\%25|\\%(?!" + N + "{2})") + Gr), Xi = t("[vV]" + N + "+\\." + e(ne, te, "[\\:]") + "+"), el = t("\\[" + t($r + "|" + ur + "|" + Xi) + "\\]"), _s = t(t(ie + "|" + e(ne, te)) + "*"), ft = t(el + "|" + Me + "(?!" + _s + ")|" + _s), ht = t(b + "*"), xs = t(t(ue + "@") + "?" + ft + t("\\:" + ht) + "?"), pt = t(ie + "|" + e(ne, te, "[\\:\\@]")), rl = t(pt + "*"), Ps = t(pt + "+"), tl = t(t(ie + "|" + e(ne, te, "[\\@]")) + "+"), cr = t(t("\\/" + rl) + "*"), Yr = t("\\/" + t(Ps + cr) + "?"), ha = t(tl + cr), wt = t(Ps + cr), Xr = "(?!" + pt + ")", rf = t(cr + "|" + Yr + "|" + ha + "|" + wt + "|" + Xr), et = t(t(pt + "|" + e("[\\/\\?]", de)) + "*"), mt = t(t(pt + "|[\\/\\?]") + "*"), bs = t(t("\\/\\/" + xs + cr) + "|" + Yr + "|" + wt + "|" + Xr), al = t(pe + "\\:" + bs + t("\\?" + et) + "?" + t("\\#" + mt) + "?"), sl = t(t("\\/\\/" + xs + cr) + "|" + Yr + "|" + ha + "|" + Xr), nl = t(sl + t("\\?" + et) + "?" + t("\\#" + mt) + "?"), tf = t(al + "|" + nl), af = t(pe + "\\:" + bs + t("\\?" + et) + "?"), sf = "^(" + pe + ")\\:" + t(t("\\/\\/(" + t("(" + ue + ")@") + "?(" + ft + ")" + t("\\:(" + ht + ")") + "?)") + "?(" + cr + "|" + Yr + "|" + wt + "|" + Xr + ")") + t("\\?(" + et + ")") + "?" + t("\\#(" + mt + ")") + "?$", nf = "^(){0}" + t(t("\\/\\/(" + t("(" + ue + ")@") + "?(" + ft + ")" + t("\\:(" + ht + ")") + "?)") + "?(" + cr + "|" + Yr + "|" + ha + "|" + Xr + ")") + t("\\?(" + et + ")") + "?" + t("\\#(" + mt + ")") + "?$", of = "^(" + pe + ")\\:" + t(t("\\/\\/(" + t("(" + ue + ")@") + "?(" + ft + ")" + t("\\:(" + ht + ")") + "?)") + "?(" + cr + "|" + Yr + "|" + wt + "|" + Xr + ")") + t("\\?(" + et + ")") + "?$", lf = "^" + t("\\#(" + mt + ")") + "?$", uf = "^" + t("(" + ue + ")@") + "?(" + ft + ")" + t("\\:(" + ht + ")") + "?$";
      return { NOT_SCHEME: new RegExp(e("[^]", d, b, "[\\+\\-\\.]"), "g"), NOT_USERINFO: new RegExp(e("[^\\%\\:]", ne, te), "g"), NOT_HOST: new RegExp(e("[^\\%\\[\\]\\:]", ne, te), "g"), NOT_PATH: new RegExp(e("[^\\%\\/\\:\\@]", ne, te), "g"), NOT_PATH_NOSCHEME: new RegExp(e("[^\\%\\/\\@]", ne, te), "g"), NOT_QUERY: new RegExp(e("[^\\%]", ne, te, "[\\:\\@\\/\\?]", de), "g"), NOT_FRAGMENT: new RegExp(e("[^\\%]", ne, te, "[\\:\\@\\/\\?]"), "g"), ESCAPE: new RegExp(e("[^]", ne, te), "g"), UNRESERVED: new RegExp(ne, "g"), OTHER_CHARS: new RegExp(e("[^\\%]", ne, he), "g"), PCT_ENCODED: new RegExp(ie, "g"), IPV4ADDRESS: new RegExp("^(" + Me + ")$"), IPV6ADDRESS: new RegExp("^\\[?(" + ur + ")" + t(t("\\%25|\\%(?!" + N + "{2})") + "(" + Gr + ")") + "?\\]?$") };
    }
    var u = o(false), f = o(true), h = /* @__PURE__ */ (function() {
      function p(d, v) {
        var b = [], E = true, N = false, K = void 0;
        try {
          for (var ae = d[Symbol.iterator](), ie; !(E = (ie = ae.next()).done) && (b.push(ie.value), !(v && b.length === v)); E = true) ;
        } catch (xe) {
          N = true, K = xe;
        } finally {
          try {
            !E && ae.return && ae.return();
          } finally {
            if (N) throw K;
          }
        }
        return b;
      }
      return function(d, v) {
        if (Array.isArray(d)) return d;
        if (Symbol.iterator in Object(d)) return p(d, v);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    })(), m = function(p) {
      if (Array.isArray(p)) {
        for (var d = 0, v = Array(p.length); d < p.length; d++) v[d] = p[d];
        return v;
      } else return Array.from(p);
    }, x = 2147483647, c = 36, y = 1, _ = 26, g = 38, P = 700, O = 72, S = 128, w = "-", A = /^xn--/, D = /[^\0-\x7E]/, V = /[\x2E\u3002\uFF0E\uFF61]/g, M = { overflow: "Overflow: input needs wider integers to process", "not-basic": "Illegal input >= 0x80 (not a basic code point)", "invalid-input": "Invalid input" }, k = c - y, U = Math.floor, q = String.fromCharCode;
    function F(p) {
      throw new RangeError(M[p]);
    }
    function $(p, d) {
      for (var v = [], b = p.length; b--; ) v[b] = d(p[b]);
      return v;
    }
    function I(p, d) {
      var v = p.split("@"), b = "";
      v.length > 1 && (b = v[0] + "@", p = v[1]), p = p.replace(V, ".");
      var E = p.split("."), N = $(E, d).join(".");
      return b + N;
    }
    function L(p) {
      for (var d = [], v = 0, b = p.length; v < b; ) {
        var E = p.charCodeAt(v++);
        if (E >= 55296 && E <= 56319 && v < b) {
          var N = p.charCodeAt(v++);
          (N & 64512) == 56320 ? d.push(((E & 1023) << 10) + (N & 1023) + 65536) : (d.push(E), v--);
        } else d.push(E);
      }
      return d;
    }
    var le = function(d) {
      return String.fromCodePoint.apply(String, m(d));
    }, Y = function(d) {
      return d - 48 < 10 ? d - 22 : d - 65 < 26 ? d - 65 : d - 97 < 26 ? d - 97 : c;
    }, re = function(d, v) {
      return d + 22 + 75 * (d < 26) - ((v != 0) << 5);
    }, G = function(d, v, b) {
      var E = 0;
      for (d = b ? U(d / P) : d >> 1, d += U(d / v); d > k * _ >> 1; E += c) d = U(d / k);
      return U(E + (k + 1) * d / (d + g));
    }, Z = function(d) {
      var v = [], b = d.length, E = 0, N = S, K = O, ae = d.lastIndexOf(w);
      ae < 0 && (ae = 0);
      for (var ie = 0; ie < ae; ++ie) d.charCodeAt(ie) >= 128 && F("not-basic"), v.push(d.charCodeAt(ie));
      for (var xe = ae > 0 ? ae + 1 : 0; xe < b; ) {
        for (var te = E, he = 1, Pe = c; ; Pe += c) {
          xe >= b && F("invalid-input");
          var de = Y(d.charCodeAt(xe++));
          (de >= c || de > U((x - E) / he)) && F("overflow"), E += de * he;
          var ne = Pe <= K ? y : Pe >= K + _ ? _ : Pe - K;
          if (de < ne) break;
          var pe = c - ne;
          he > U(x / pe) && F("overflow"), he *= pe;
        }
        var ue = v.length + 1;
        K = G(E - te, ue, te == 0), U(E / ue) > x - N && F("overflow"), N += U(E / ue), E %= ue, v.splice(E++, 0, N);
      }
      return String.fromCodePoint.apply(String, v);
    }, me = function(d) {
      var v = [];
      d = L(d);
      var b = d.length, E = S, N = 0, K = O, ae = true, ie = false, xe = void 0;
      try {
        for (var te = d[Symbol.iterator](), he; !(ae = (he = te.next()).done); ae = true) {
          var Pe = he.value;
          Pe < 128 && v.push(q(Pe));
        }
      } catch ($r) {
        ie = true, xe = $r;
      } finally {
        try {
          !ae && te.return && te.return();
        } finally {
          if (ie) throw xe;
        }
      }
      var de = v.length, ne = de;
      for (de && v.push(w); ne < b; ) {
        var pe = x, ue = true, Tr = false, Fe = void 0;
        try {
          for (var Me = d[Symbol.iterator](), ce; !(ue = (ce = Me.next()).done); ue = true) {
            var Le = ce.value;
            Le >= E && Le < pe && (pe = Le);
          }
        } catch ($r) {
          Tr = true, Fe = $r;
        } finally {
          try {
            !ue && Me.return && Me.return();
          } finally {
            if (Tr) throw Fe;
          }
        }
        var Ue = ne + 1;
        pe - E > U((x - N) / Ue) && F("overflow"), N += (pe - E) * Ue, E = pe;
        var rr = true, Or = false, lr = void 0;
        try {
          for (var dt = d[Symbol.iterator](), St; !(rr = (St = dt.next()).done); rr = true) {
            var Rt = St.value;
            if (Rt < E && ++N > x && F("overflow"), Rt == E) {
              for (var Kr = N, Wr = c; ; Wr += c) {
                var ur = Wr <= K ? y : Wr >= K + _ ? _ : Wr - K;
                if (Kr < ur) break;
                var Gr = Kr - ur, fa = c - ur;
                v.push(q(re(ur + Gr % fa, 0))), Kr = U(Gr / fa);
              }
              v.push(q(re(Kr, 0))), K = G(N, Ue, ne == de), N = 0, ++ne;
            }
          }
        } catch ($r) {
          Or = true, lr = $r;
        } finally {
          try {
            !rr && dt.return && dt.return();
          } finally {
            if (Or) throw lr;
          }
        }
        ++N, ++E;
      }
      return v.join("");
    }, Re = function(d) {
      return I(d, function(v) {
        return A.test(v) ? Z(v.slice(4).toLowerCase()) : v;
      });
    }, Oe = function(d) {
      return I(d, function(v) {
        return D.test(v) ? "xn--" + me(v) : v;
      });
    }, se = { version: "2.1.0", ucs2: { decode: L, encode: le }, decode: Z, encode: me, toASCII: Oe, toUnicode: Re }, ye = {};
    function be(p) {
      var d = p.charCodeAt(0), v = void 0;
      return d < 16 ? v = "%0" + d.toString(16).toUpperCase() : d < 128 ? v = "%" + d.toString(16).toUpperCase() : d < 2048 ? v = "%" + (d >> 6 | 192).toString(16).toUpperCase() + "%" + (d & 63 | 128).toString(16).toUpperCase() : v = "%" + (d >> 12 | 224).toString(16).toUpperCase() + "%" + (d >> 6 & 63 | 128).toString(16).toUpperCase() + "%" + (d & 63 | 128).toString(16).toUpperCase(), v;
    }
    function $e(p) {
      for (var d = "", v = 0, b = p.length; v < b; ) {
        var E = parseInt(p.substr(v + 1, 2), 16);
        if (E < 128) d += String.fromCharCode(E), v += 3;
        else if (E >= 194 && E < 224) {
          if (b - v >= 6) {
            var N = parseInt(p.substr(v + 4, 2), 16);
            d += String.fromCharCode((E & 31) << 6 | N & 63);
          } else d += p.substr(v, 6);
          v += 6;
        } else if (E >= 224) {
          if (b - v >= 9) {
            var K = parseInt(p.substr(v + 4, 2), 16), ae = parseInt(p.substr(v + 7, 2), 16);
            d += String.fromCharCode((E & 15) << 12 | (K & 63) << 6 | ae & 63);
          } else d += p.substr(v, 9);
          v += 9;
        } else d += p.substr(v, 3), v += 3;
      }
      return d;
    }
    function mr(p, d) {
      function v(b) {
        var E = $e(b);
        return E.match(d.UNRESERVED) ? E : b;
      }
      return p.scheme && (p.scheme = String(p.scheme).replace(d.PCT_ENCODED, v).toLowerCase().replace(d.NOT_SCHEME, "")), p.userinfo !== void 0 && (p.userinfo = String(p.userinfo).replace(d.PCT_ENCODED, v).replace(d.NOT_USERINFO, be).replace(d.PCT_ENCODED, r)), p.host !== void 0 && (p.host = String(p.host).replace(d.PCT_ENCODED, v).toLowerCase().replace(d.NOT_HOST, be).replace(d.PCT_ENCODED, r)), p.path !== void 0 && (p.path = String(p.path).replace(d.PCT_ENCODED, v).replace(p.scheme ? d.NOT_PATH : d.NOT_PATH_NOSCHEME, be).replace(d.PCT_ENCODED, r)), p.query !== void 0 && (p.query = String(p.query).replace(d.PCT_ENCODED, v).replace(d.NOT_QUERY, be).replace(d.PCT_ENCODED, r)), p.fragment !== void 0 && (p.fragment = String(p.fragment).replace(d.PCT_ENCODED, v).replace(d.NOT_FRAGMENT, be).replace(d.PCT_ENCODED, r)), p;
    }
    function or(p) {
      return p.replace(/^0*(.*)/, "$1") || "0";
    }
    function _e(p, d) {
      var v = p.match(d.IPV4ADDRESS) || [], b = h(v, 2), E = b[1];
      return E ? E.split(".").map(or).join(".") : p;
    }
    function ve(p, d) {
      var v = p.match(d.IPV6ADDRESS) || [], b = h(v, 3), E = b[1], N = b[2];
      if (E) {
        for (var K = E.toLowerCase().split("::").reverse(), ae = h(K, 2), ie = ae[0], xe = ae[1], te = xe ? xe.split(":").map(or) : [], he = ie.split(":").map(or), Pe = d.IPV4ADDRESS.test(he[he.length - 1]), de = Pe ? 7 : 8, ne = he.length - de, pe = Array(de), ue = 0; ue < de; ++ue) pe[ue] = te[ue] || he[ne + ue] || "";
        Pe && (pe[de - 1] = _e(pe[de - 1], d));
        var Tr = pe.reduce(function(Ue, rr, Or) {
          if (!rr || rr === "0") {
            var lr = Ue[Ue.length - 1];
            lr && lr.index + lr.length === Or ? lr.length++ : Ue.push({ index: Or, length: 1 });
          }
          return Ue;
        }, []), Fe = Tr.sort(function(Ue, rr) {
          return rr.length - Ue.length;
        })[0], Me = void 0;
        if (Fe && Fe.length > 1) {
          var ce = pe.slice(0, Fe.index), Le = pe.slice(Fe.index + Fe.length);
          Me = ce.join(":") + "::" + Le.join(":");
        } else Me = pe.join(":");
        return N && (Me += "%" + N), Me;
      } else return p;
    }
    var Sr = /^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i, we = "".match(/(){0}/)[1] === void 0;
    function oe(p) {
      var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, v = {}, b = d.iri !== false ? f : u;
      d.reference === "suffix" && (p = (d.scheme ? d.scheme + ":" : "") + "//" + p);
      var E = p.match(Sr);
      if (E) {
        we ? (v.scheme = E[1], v.userinfo = E[3], v.host = E[4], v.port = parseInt(E[5], 10), v.path = E[6] || "", v.query = E[7], v.fragment = E[8], isNaN(v.port) && (v.port = E[5])) : (v.scheme = E[1] || void 0, v.userinfo = p.indexOf("@") !== -1 ? E[3] : void 0, v.host = p.indexOf("//") !== -1 ? E[4] : void 0, v.port = parseInt(E[5], 10), v.path = E[6] || "", v.query = p.indexOf("?") !== -1 ? E[7] : void 0, v.fragment = p.indexOf("#") !== -1 ? E[8] : void 0, isNaN(v.port) && (v.port = p.match(/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/) ? E[4] : void 0)), v.host && (v.host = ve(_e(v.host, b), b)), v.scheme === void 0 && v.userinfo === void 0 && v.host === void 0 && v.port === void 0 && !v.path && v.query === void 0 ? v.reference = "same-document" : v.scheme === void 0 ? v.reference = "relative" : v.fragment === void 0 ? v.reference = "absolute" : v.reference = "uri", d.reference && d.reference !== "suffix" && d.reference !== v.reference && (v.error = v.error || "URI is not a " + d.reference + " reference.");
        var N = ye[(d.scheme || v.scheme || "").toLowerCase()];
        if (!d.unicodeSupport && (!N || !N.unicodeSupport)) {
          if (v.host && (d.domainHost || N && N.domainHost)) try {
            v.host = se.toASCII(v.host.replace(b.PCT_ENCODED, $e).toLowerCase());
          } catch (K) {
            v.error = v.error || "Host's domain name can not be converted to ASCII via punycode: " + K;
          }
          mr(v, u);
        } else mr(v, b);
        N && N.parse && N.parse(v, d);
      } else v.error = v.error || "URI can not be parsed.";
      return v;
    }
    function vr(p, d) {
      var v = d.iri !== false ? f : u, b = [];
      return p.userinfo !== void 0 && (b.push(p.userinfo), b.push("@")), p.host !== void 0 && b.push(ve(_e(String(p.host), v), v).replace(v.IPV6ADDRESS, function(E, N, K) {
        return "[" + N + (K ? "%25" + K : "") + "]";
      })), (typeof p.port == "number" || typeof p.port == "string") && (b.push(":"), b.push(String(p.port))), b.length ? b.join("") : void 0;
    }
    var ir = /^\.\.?\//, Rr = /^\/\.(\/|$)/, wr = /^\/\.\.(\/|$)/, Ee = /^\/?(?:.|\n)*?(?=\/|$)/;
    function qe(p) {
      for (var d = []; p.length; ) if (p.match(ir)) p = p.replace(ir, "");
      else if (p.match(Rr)) p = p.replace(Rr, "/");
      else if (p.match(wr)) p = p.replace(wr, "/"), d.pop();
      else if (p === "." || p === "..") p = "";
      else {
        var v = p.match(Ee);
        if (v) {
          var b = v[0];
          p = p.slice(b.length), d.push(b);
        } else throw new Error("Unexpected dot segment condition");
      }
      return d.join("");
    }
    function ke(p) {
      var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, v = d.iri ? f : u, b = [], E = ye[(d.scheme || p.scheme || "").toLowerCase()];
      if (E && E.serialize && E.serialize(p, d), p.host && !v.IPV6ADDRESS.test(p.host)) {
        if (d.domainHost || E && E.domainHost) try {
          p.host = d.iri ? se.toUnicode(p.host) : se.toASCII(p.host.replace(v.PCT_ENCODED, $e).toLowerCase());
        } catch (ae) {
          p.error = p.error || "Host's domain name can not be converted to " + (d.iri ? "Unicode" : "ASCII") + " via punycode: " + ae;
        }
      }
      mr(p, v), d.reference !== "suffix" && p.scheme && (b.push(p.scheme), b.push(":"));
      var N = vr(p, d);
      if (N !== void 0 && (d.reference !== "suffix" && b.push("//"), b.push(N), p.path && p.path.charAt(0) !== "/" && b.push("/")), p.path !== void 0) {
        var K = p.path;
        !d.absolutePath && (!E || !E.absolutePath) && (K = qe(K)), N === void 0 && (K = K.replace(/^\/\//, "/%2F")), b.push(K);
      }
      return p.query !== void 0 && (b.push("?"), b.push(p.query)), p.fragment !== void 0 && (b.push("#"), b.push(p.fragment)), b.join("");
    }
    function Ae(p, d) {
      var v = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, b = arguments[3], E = {};
      return b || (p = oe(ke(p, v), v), d = oe(ke(d, v), v)), v = v || {}, !v.tolerant && d.scheme ? (E.scheme = d.scheme, E.userinfo = d.userinfo, E.host = d.host, E.port = d.port, E.path = qe(d.path || ""), E.query = d.query) : (d.userinfo !== void 0 || d.host !== void 0 || d.port !== void 0 ? (E.userinfo = d.userinfo, E.host = d.host, E.port = d.port, E.path = qe(d.path || ""), E.query = d.query) : (d.path ? (d.path.charAt(0) === "/" ? E.path = qe(d.path) : ((p.userinfo !== void 0 || p.host !== void 0 || p.port !== void 0) && !p.path ? E.path = "/" + d.path : p.path ? E.path = p.path.slice(0, p.path.lastIndexOf("/") + 1) + d.path : E.path = d.path, E.path = qe(E.path)), E.query = d.query) : (E.path = p.path, d.query !== void 0 ? E.query = d.query : E.query = p.query), E.userinfo = p.userinfo, E.host = p.host, E.port = p.port), E.scheme = p.scheme), E.fragment = d.fragment, E;
    }
    function Xe(p, d, v) {
      var b = i({ scheme: "null" }, v);
      return ke(Ae(oe(p, b), oe(d, b), b, true), b);
    }
    function Ne(p, d) {
      return typeof p == "string" ? p = ke(oe(p, d), d) : s(p) === "object" && (p = oe(ke(p, d), d)), p;
    }
    function Et(p, d, v) {
      return typeof p == "string" ? p = ke(oe(p, v), v) : s(p) === "object" && (p = ke(p, v)), typeof d == "string" ? d = ke(oe(d, v), v) : s(d) === "object" && (d = ke(d, v)), p === d;
    }
    function ca(p, d) {
      return p && p.toString().replace(!d || !d.iri ? u.ESCAPE : f.ESCAPE, be);
    }
    function Qe(p, d) {
      return p && p.toString().replace(!d || !d.iri ? u.PCT_ENCODED : f.PCT_ENCODED, $e);
    }
    var ut = { scheme: "http", domainHost: true, parse: function(d, v) {
      return d.host || (d.error = d.error || "HTTP URIs must have a host."), d;
    }, serialize: function(d, v) {
      var b = String(d.scheme).toLowerCase() === "https";
      return (d.port === (b ? 443 : 80) || d.port === "") && (d.port = void 0), d.path || (d.path = "/"), d;
    } }, ds = { scheme: "https", domainHost: ut.domainHost, parse: ut.parse, serialize: ut.serialize };
    function fs(p) {
      return typeof p.secure == "boolean" ? p.secure : String(p.scheme).toLowerCase() === "wss";
    }
    var ct = { scheme: "ws", domainHost: true, parse: function(d, v) {
      var b = d;
      return b.secure = fs(b), b.resourceName = (b.path || "/") + (b.query ? "?" + b.query : ""), b.path = void 0, b.query = void 0, b;
    }, serialize: function(d, v) {
      if ((d.port === (fs(d) ? 443 : 80) || d.port === "") && (d.port = void 0), typeof d.secure == "boolean" && (d.scheme = d.secure ? "wss" : "ws", d.secure = void 0), d.resourceName) {
        var b = d.resourceName.split("?"), E = h(b, 2), N = E[0], K = E[1];
        d.path = N && N !== "/" ? N : void 0, d.query = K, d.resourceName = void 0;
      }
      return d.fragment = void 0, d;
    } }, hs = { scheme: "wss", domainHost: ct.domainHost, parse: ct.parse, serialize: ct.serialize }, Ui = {}, zi = true, ps = "[A-Za-z0-9\\-\\.\\_\\~" + (zi ? "\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF" : "") + "]", er = "[0-9A-Fa-f]", Vi = t(t("%[EFef]" + er + "%" + er + er + "%" + er + er) + "|" + t("%[89A-Fa-f]" + er + "%" + er + er) + "|" + t("%" + er + er)), Zi = "[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]", Hi = "[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]", Bi = e(Hi, '[\\"\\\\]'), Qi = "[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]", Ji = new RegExp(ps, "g"), Jr = new RegExp(Vi, "g"), Ki = new RegExp(e("[^]", Zi, "[\\.]", '[\\"]', Bi), "g"), ms = new RegExp(e("[^]", ps, Qi), "g"), Wi = ms;
    function da(p) {
      var d = $e(p);
      return d.match(Ji) ? d : p;
    }
    var vs = { scheme: "mailto", parse: function(d, v) {
      var b = d, E = b.to = b.path ? b.path.split(",") : [];
      if (b.path = void 0, b.query) {
        for (var N = false, K = {}, ae = b.query.split("&"), ie = 0, xe = ae.length; ie < xe; ++ie) {
          var te = ae[ie].split("=");
          switch (te[0]) {
            case "to":
              for (var he = te[1].split(","), Pe = 0, de = he.length; Pe < de; ++Pe) E.push(he[Pe]);
              break;
            case "subject":
              b.subject = Qe(te[1], v);
              break;
            case "body":
              b.body = Qe(te[1], v);
              break;
            default:
              N = true, K[Qe(te[0], v)] = Qe(te[1], v);
              break;
          }
        }
        N && (b.headers = K);
      }
      b.query = void 0;
      for (var ne = 0, pe = E.length; ne < pe; ++ne) {
        var ue = E[ne].split("@");
        if (ue[0] = Qe(ue[0]), v.unicodeSupport) ue[1] = Qe(ue[1], v).toLowerCase();
        else try {
          ue[1] = se.toASCII(Qe(ue[1], v).toLowerCase());
        } catch (Tr) {
          b.error = b.error || "Email address's domain name can not be converted to ASCII via punycode: " + Tr;
        }
        E[ne] = ue.join("@");
      }
      return b;
    }, serialize: function(d, v) {
      var b = d, E = n(d.to);
      if (E) {
        for (var N = 0, K = E.length; N < K; ++N) {
          var ae = String(E[N]), ie = ae.lastIndexOf("@"), xe = ae.slice(0, ie).replace(Jr, da).replace(Jr, r).replace(Ki, be), te = ae.slice(ie + 1);
          try {
            te = v.iri ? se.toUnicode(te) : se.toASCII(Qe(te, v).toLowerCase());
          } catch (ne) {
            b.error = b.error || "Email address's domain name can not be converted to " + (v.iri ? "Unicode" : "ASCII") + " via punycode: " + ne;
          }
          E[N] = xe + "@" + te;
        }
        b.path = E.join(",");
      }
      var he = d.headers = d.headers || {};
      d.subject && (he.subject = d.subject), d.body && (he.body = d.body);
      var Pe = [];
      for (var de in he) he[de] !== Ui[de] && Pe.push(de.replace(Jr, da).replace(Jr, r).replace(ms, be) + "=" + he[de].replace(Jr, da).replace(Jr, r).replace(Wi, be));
      return Pe.length && (b.query = Pe.join("&")), b;
    } }, Gi = /^([^\:]+)\:(.*)/, gs = { scheme: "urn", parse: function(d, v) {
      var b = d.path && d.path.match(Gi), E = d;
      if (b) {
        var N = v.scheme || E.scheme || "urn", K = b[1].toLowerCase(), ae = b[2], ie = N + ":" + (v.nid || K), xe = ye[ie];
        E.nid = K, E.nss = ae, E.path = void 0, xe && (E = xe.parse(E, v));
      } else E.error = E.error || "URN can not be parsed.";
      return E;
    }, serialize: function(d, v) {
      var b = v.scheme || d.scheme || "urn", E = d.nid, N = b + ":" + (v.nid || E), K = ye[N];
      K && (d = K.serialize(d, v));
      var ae = d, ie = d.nss;
      return ae.path = (E || v.nid) + ":" + ie, ae;
    } }, Yi = /^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/, ys = { scheme: "urn:uuid", parse: function(d, v) {
      var b = d;
      return b.uuid = b.nss, b.nss = void 0, !v.tolerant && (!b.uuid || !b.uuid.match(Yi)) && (b.error = b.error || "UUID is not valid."), b;
    }, serialize: function(d, v) {
      var b = d;
      return b.nss = (d.uuid || "").toLowerCase(), b;
    } };
    ye[ut.scheme] = ut, ye[ds.scheme] = ds, ye[ct.scheme] = ct, ye[hs.scheme] = hs, ye[vs.scheme] = vs, ye[gs.scheme] = gs, ye[ys.scheme] = ys, a16.SCHEMES = ye, a16.pctEncChar = be, a16.pctDecChars = $e, a16.parse = oe, a16.removeDotSegments = qe, a16.serialize = ke, a16.resolveComponents = Ae, a16.resolve = Xe, a16.normalize = Ne, a16.equal = Et, a16.escapeComponent = ca, a16.unescapeComponent = Qe, Object.defineProperty(a16, "__esModule", { value: true });
  }));
});
var zt = Q((Kf, rn) => {
  "use strict";
  rn.exports = function a16(e, t) {
    if (e === t) return true;
    if (e && t && typeof e == "object" && typeof t == "object") {
      if (e.constructor !== t.constructor) return false;
      var s, r, n;
      if (Array.isArray(e)) {
        if (s = e.length, s != t.length) return false;
        for (r = s; r-- !== 0; ) if (!a16(e[r], t[r])) return false;
        return true;
      }
      if (e.constructor === RegExp) return e.source === t.source && e.flags === t.flags;
      if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === t.valueOf();
      if (e.toString !== Object.prototype.toString) return e.toString() === t.toString();
      if (n = Object.keys(e), s = n.length, s !== Object.keys(t).length) return false;
      for (r = s; r-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(t, n[r])) return false;
      for (r = s; r-- !== 0; ) {
        var i = n[r];
        if (!a16(e[i], t[i])) return false;
      }
      return true;
    }
    return e !== e && t !== t;
  };
});
var an = Q((Wf, tn) => {
  "use strict";
  tn.exports = function(e) {
    for (var t = 0, s = e.length, r = 0, n; r < s; ) t++, n = e.charCodeAt(r++), n >= 55296 && n <= 56319 && r < s && (n = e.charCodeAt(r), (n & 64512) == 56320 && r++);
    return t;
  };
});
var Br = Q((Gf, on) => {
  "use strict";
  on.exports = { copy: mc, checkDataType: Na, checkDataTypes: vc, coerceToTypes: gc, toHash: La, getProperty: qa, escapeQuotes: Ma, equal: zt(), ucs2length: an(), varOccurences: xc, varReplace: Pc, schemaHasRules: bc, schemaHasRulesExcept: Ec, schemaUnknownRules: Sc, toQuotedString: Fa, getPathExpr: Rc, getPath: wc, getData: $c, unescapeFragment: Ac, unescapeJsonPointer: za, escapeFragment: Dc, escapeJsonPointer: Ua };
  function mc(a16, e) {
    e = e || {};
    for (var t in a16) e[t] = a16[t];
    return e;
  }
  function Na(a16, e, t, s) {
    var r = s ? " !== " : " === ", n = s ? " || " : " && ", i = s ? "!" : "", o = s ? "" : "!";
    switch (a16) {
      case "null":
        return e + r + "null";
      case "array":
        return i + "Array.isArray(" + e + ")";
      case "object":
        return "(" + i + e + n + "typeof " + e + r + '"object"' + n + o + "Array.isArray(" + e + "))";
      case "integer":
        return "(typeof " + e + r + '"number"' + n + o + "(" + e + " % 1)" + n + e + r + e + (t ? n + i + "isFinite(" + e + ")" : "") + ")";
      case "number":
        return "(typeof " + e + r + '"' + a16 + '"' + (t ? n + i + "isFinite(" + e + ")" : "") + ")";
      default:
        return "typeof " + e + r + '"' + a16 + '"';
    }
  }
  function vc(a16, e, t) {
    switch (a16.length) {
      case 1:
        return Na(a16[0], e, t, true);
      default:
        var s = "", r = La(a16);
        r.array && r.object && (s = r.null ? "(" : "(!" + e + " || ", s += "typeof " + e + ' !== "object")', delete r.null, delete r.array, delete r.object), r.number && delete r.integer;
        for (var n in r) s += (s ? " && " : "") + Na(n, e, t, true);
        return s;
    }
  }
  var sn = La(["string", "number", "integer", "boolean", "null"]);
  function gc(a16, e) {
    if (Array.isArray(e)) {
      for (var t = [], s = 0; s < e.length; s++) {
        var r = e[s];
        (sn[r] || a16 === "array" && r === "array") && (t[t.length] = r);
      }
      if (t.length) return t;
    } else {
      if (sn[e]) return [e];
      if (a16 === "array" && e === "array") return ["array"];
    }
  }
  function La(a16) {
    for (var e = {}, t = 0; t < a16.length; t++) e[a16[t]] = true;
    return e;
  }
  var yc = /^[a-z$_][a-z$_0-9]*$/i, _c = /'|\\/g;
  function qa(a16) {
    return typeof a16 == "number" ? "[" + a16 + "]" : yc.test(a16) ? "." + a16 : "['" + Ma(a16) + "']";
  }
  function Ma(a16) {
    return a16.replace(_c, "\\$&").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\f/g, "\\f").replace(/\t/g, "\\t");
  }
  function xc(a16, e) {
    e += "[^0-9]";
    var t = a16.match(new RegExp(e, "g"));
    return t ? t.length : 0;
  }
  function Pc(a16, e, t) {
    return e += "([^0-9])", t = t.replace(/\$/g, "$$$$"), a16.replace(new RegExp(e, "g"), t + "$1");
  }
  function bc(a16, e) {
    if (typeof a16 == "boolean") return !a16;
    for (var t in a16) if (e[t]) return true;
  }
  function Ec(a16, e, t) {
    if (typeof a16 == "boolean") return !a16 && t != "not";
    for (var s in a16) if (s != t && e[s]) return true;
  }
  function Sc(a16, e) {
    if (typeof a16 != "boolean") {
      for (var t in a16) if (!e[t]) return t;
    }
  }
  function Fa(a16) {
    return "'" + Ma(a16) + "'";
  }
  function Rc(a16, e, t, s) {
    var r = t ? "'/' + " + e + (s ? "" : ".replace(/~/g, '~0').replace(/\\//g, '~1')") : s ? "'[' + " + e + " + ']'" : "'[\\'' + " + e + " + '\\']'";
    return nn(a16, r);
  }
  function wc(a16, e, t) {
    var s = Fa(t ? "/" + Ua(e) : qa(e));
    return nn(a16, s);
  }
  var Tc = /^\/(?:[^~]|~0|~1)*$/, Oc = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function $c(a16, e, t) {
    var s, r, n, i;
    if (a16 === "") return "rootData";
    if (a16[0] == "/") {
      if (!Tc.test(a16)) throw new Error("Invalid JSON-pointer: " + a16);
      r = a16, n = "rootData";
    } else {
      if (i = a16.match(Oc), !i) throw new Error("Invalid JSON-pointer: " + a16);
      if (s = +i[1], r = i[2], r == "#") {
        if (s >= e) throw new Error("Cannot access property/index " + s + " levels up, current level is " + e);
        return t[e - s];
      }
      if (s > e) throw new Error("Cannot access data " + s + " levels up, current level is " + e);
      if (n = "data" + (e - s || ""), !r) return n;
    }
    for (var o = n, u = r.split("/"), f = 0; f < u.length; f++) {
      var h = u[f];
      h && (n += qa(za(h)), o += " && " + n);
    }
    return o;
  }
  function nn(a16, e) {
    return a16 == '""' ? e : (a16 + " + " + e).replace(/([^\\])' \+ '/g, "$1");
  }
  function Ac(a16) {
    return za(decodeURIComponent(a16));
  }
  function Dc(a16) {
    return encodeURIComponent(Ua(a16));
  }
  function Ua(a16) {
    return a16.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  function za(a16) {
    return a16.replace(/~1/g, "/").replace(/~0/g, "~");
  }
});
var Va = Q((Yf, ln) => {
  "use strict";
  var kc = Br();
  ln.exports = Ic;
  function Ic(a16) {
    kc.copy(a16, this);
  }
});
var cn = Q((Xf, un) => {
  "use strict";
  var Pr = un.exports = function(a16, e, t) {
    typeof e == "function" && (t = e, e = {}), t = e.cb || t;
    var s = typeof t == "function" ? t : t.pre || function() {
    }, r = t.post || function() {
    };
    Vt(e, s, r, a16, "", a16);
  };
  Pr.keywords = { additionalItems: true, items: true, contains: true, additionalProperties: true, propertyNames: true, not: true };
  Pr.arrayKeywords = { items: true, allOf: true, anyOf: true, oneOf: true };
  Pr.propsKeywords = { definitions: true, properties: true, patternProperties: true, dependencies: true };
  Pr.skipKeywords = { default: true, enum: true, const: true, required: true, maximum: true, minimum: true, exclusiveMaximum: true, exclusiveMinimum: true, multipleOf: true, maxLength: true, minLength: true, pattern: true, format: true, maxItems: true, minItems: true, uniqueItems: true, maxProperties: true, minProperties: true };
  function Vt(a16, e, t, s, r, n, i, o, u, f) {
    if (s && typeof s == "object" && !Array.isArray(s)) {
      e(s, r, n, i, o, u, f);
      for (var h in s) {
        var m = s[h];
        if (Array.isArray(m)) {
          if (h in Pr.arrayKeywords) for (var x = 0; x < m.length; x++) Vt(a16, e, t, m[x], r + "/" + h + "/" + x, n, r, h, s, x);
        } else if (h in Pr.propsKeywords) {
          if (m && typeof m == "object") for (var c in m) Vt(a16, e, t, m[c], r + "/" + h + "/" + Cc(c), n, r, h, s, c);
        } else (h in Pr.keywords || a16.allKeys && !(h in Pr.skipKeywords)) && Vt(a16, e, t, m, r + "/" + h, n, r, h, s);
      }
      t(s, r, n, i, o, u, f);
    }
  }
  function Cc(a16) {
    return a16.replace(/~/g, "~0").replace(/\//g, "~1");
  }
});
var Kt = Q((eh, pn) => {
  "use strict";
  var Pt = en(), dn = zt(), Qt = Br(), Zt = Va(), jc = cn();
  pn.exports = Er;
  Er.normalizeId = br;
  Er.fullPath = Ht;
  Er.url = Bt;
  Er.ids = Mc;
  Er.inlineRef = Za;
  Er.schema = Jt;
  function Er(a16, e, t) {
    var s = this._refs[t];
    if (typeof s == "string") if (this._refs[s]) s = this._refs[s];
    else return Er.call(this, a16, e, s);
    if (s = s || this._schemas[t], s instanceof Zt) return Za(s.schema, this._opts.inlineRefs) ? s.schema : s.validate || this._compile(s);
    var r = Jt.call(this, e, t), n, i, o;
    return r && (n = r.schema, e = r.root, o = r.baseId), n instanceof Zt ? i = n.validate || a16.call(this, n.schema, e, void 0, o) : n !== void 0 && (i = Za(n, this._opts.inlineRefs) ? n : a16.call(this, n, e, void 0, o)), i;
  }
  function Jt(a16, e) {
    var t = Pt.parse(e), s = hn(t), r = Ht(this._getId(a16.schema));
    if (Object.keys(a16.schema).length === 0 || s !== r) {
      var n = br(s), i = this._refs[n];
      if (typeof i == "string") return Nc.call(this, a16, i, t);
      if (i instanceof Zt) i.validate || this._compile(i), a16 = i;
      else if (i = this._schemas[n], i instanceof Zt) {
        if (i.validate || this._compile(i), n == br(e)) return { schema: i, root: a16, baseId: r };
        a16 = i;
      } else return;
      if (!a16.schema) return;
      r = Ht(this._getId(a16.schema));
    }
    return fn.call(this, t, r, a16.schema, a16);
  }
  function Nc(a16, e, t) {
    var s = Jt.call(this, a16, e);
    if (s) {
      var r = s.schema, n = s.baseId;
      a16 = s.root;
      var i = this._getId(r);
      return i && (n = Bt(n, i)), fn.call(this, t, n, r, a16);
    }
  }
  var Fc = Qt.toHash(["properties", "patternProperties", "enum", "dependencies", "definitions"]);
  function fn(a16, e, t, s) {
    if (a16.fragment = a16.fragment || "", a16.fragment.slice(0, 1) == "/") {
      for (var r = a16.fragment.split("/"), n = 1; n < r.length; n++) {
        var i = r[n];
        if (i) {
          if (i = Qt.unescapeFragment(i), t = t[i], t === void 0) break;
          var o;
          if (!Fc[i] && (o = this._getId(t), o && (e = Bt(e, o)), t.$ref)) {
            var u = Bt(e, t.$ref), f = Jt.call(this, s, u);
            f && (t = f.schema, s = f.root, e = f.baseId);
          }
        }
      }
      if (t !== void 0 && t !== s.schema) return { schema: t, root: s, baseId: e };
    }
  }
  var Lc = Qt.toHash(["type", "format", "pattern", "maxLength", "minLength", "maxProperties", "minProperties", "maxItems", "minItems", "maximum", "minimum", "uniqueItems", "multipleOf", "required", "enum"]);
  function Za(a16, e) {
    if (e === false) return false;
    if (e === void 0 || e === true) return Ha(a16);
    if (e) return Ba(a16) <= e;
  }
  function Ha(a16) {
    var e;
    if (Array.isArray(a16)) {
      for (var t = 0; t < a16.length; t++) if (e = a16[t], typeof e == "object" && !Ha(e)) return false;
    } else for (var s in a16) if (s == "$ref" || (e = a16[s], typeof e == "object" && !Ha(e))) return false;
    return true;
  }
  function Ba(a16) {
    var e = 0, t;
    if (Array.isArray(a16)) {
      for (var s = 0; s < a16.length; s++) if (t = a16[s], typeof t == "object" && (e += Ba(t)), e == 1 / 0) return 1 / 0;
    } else for (var r in a16) {
      if (r == "$ref") return 1 / 0;
      if (Lc[r]) e++;
      else if (t = a16[r], typeof t == "object" && (e += Ba(t) + 1), e == 1 / 0) return 1 / 0;
    }
    return e;
  }
  function Ht(a16, e) {
    e !== false && (a16 = br(a16));
    var t = Pt.parse(a16);
    return hn(t);
  }
  function hn(a16) {
    return Pt.serialize(a16).split("#")[0] + "#";
  }
  var qc = /#\/?$/;
  function br(a16) {
    return a16 ? a16.replace(qc, "") : "";
  }
  function Bt(a16, e) {
    return e = br(e), Pt.resolve(a16, e);
  }
  function Mc(a16) {
    var e = br(this._getId(a16)), t = { "": e }, s = { "": Ht(e, false) }, r = {}, n = this;
    return jc(a16, { allKeys: true }, function(i, o, u, f, h, m, x) {
      if (o !== "") {
        var c = n._getId(i), y = t[f], _ = s[f] + "/" + h;
        if (x !== void 0 && (_ += "/" + (typeof x == "number" ? x : Qt.escapeFragment(x))), typeof c == "string") {
          c = y = br(y ? Pt.resolve(y, c) : c);
          var g = n._refs[c];
          if (typeof g == "string" && (g = n._refs[g]), g && g.schema) {
            if (!dn(i, g.schema)) throw new Error('id "' + c + '" resolves to more than one schema');
          } else if (c != br(_)) if (c[0] == "#") {
            if (r[c] && !dn(i, r[c])) throw new Error('id "' + c + '" resolves to more than one schema');
            r[c] = i;
          } else n._refs[c] = _;
        }
        t[o] = y, s[o] = _;
      }
    }), r;
  }
});
var Wt = Q((rh, vn) => {
  "use strict";
  var Qa = Kt();
  vn.exports = { Validation: mn(Uc), MissingRef: mn(Ja) };
  function Uc(a16) {
    this.message = "validation failed", this.errors = a16, this.ajv = this.validation = true;
  }
  Ja.message = function(a16, e) {
    return "can't resolve reference " + e + " from id " + a16;
  };
  function Ja(a16, e, t) {
    this.message = t || Ja.message(a16, e), this.missingRef = Qa.url(a16, e), this.missingSchema = Qa.normalizeId(Qa.fullPath(this.missingRef));
  }
  function mn(a16) {
    return a16.prototype = Object.create(Error.prototype), a16.prototype.constructor = a16, a16;
  }
});
var Ka = Q((th, gn) => {
  "use strict";
  gn.exports = function(a16, e) {
    e || (e = {}), typeof e == "function" && (e = { cmp: e });
    var t = typeof e.cycles == "boolean" ? e.cycles : false, s = e.cmp && /* @__PURE__ */ (function(n) {
      return function(i) {
        return function(o, u) {
          var f = { key: o, value: i[o] }, h = { key: u, value: i[u] };
          return n(f, h);
        };
      };
    })(e.cmp), r = [];
    return (function n(i) {
      if (i && i.toJSON && typeof i.toJSON == "function" && (i = i.toJSON()), i !== void 0) {
        if (typeof i == "number") return isFinite(i) ? "" + i : "null";
        if (typeof i != "object") return JSON.stringify(i);
        var o, u;
        if (Array.isArray(i)) {
          for (u = "[", o = 0; o < i.length; o++) o && (u += ","), u += n(i[o]) || "null";
          return u + "]";
        }
        if (i === null) return "null";
        if (r.indexOf(i) !== -1) {
          if (t) return JSON.stringify("__cycle__");
          throw new TypeError("Converting circular structure to JSON");
        }
        var f = r.push(i) - 1, h = Object.keys(i).sort(s && s(i));
        for (u = "", o = 0; o < h.length; o++) {
          var m = h[o], x = n(i[m]);
          x && (u && (u += ","), u += JSON.stringify(m) + ":" + x);
        }
        return r.splice(f, 1), "{" + u + "}";
      }
    })(a16);
  };
});
var Wa = Q((ah, yn) => {
  "use strict";
  yn.exports = function(e, t, s) {
    var r = "", n = e.schema.$async === true, i = e.util.schemaHasRulesExcept(e.schema, e.RULES.all, "$ref"), o = e.self._getId(e.schema);
    if (e.opts.strictKeywords) {
      var u = e.util.schemaUnknownRules(e.schema, e.RULES.keywords);
      if (u) {
        var f = "unknown keyword: " + u;
        if (e.opts.strictKeywords === "log") e.logger.warn(f);
        else throw new Error(f);
      }
    }
    if (e.isTop && (r += " var validate = ", n && (e.async = true, r += "async "), r += "function(data, dataPath, parentData, parentDataProperty, rootData) { 'use strict'; ", o && (e.opts.sourceCode || e.opts.processCode) && (r += " " + ("/*# sourceURL=" + o + " */") + " ")), typeof e.schema == "boolean" || !(i || e.schema.$ref)) {
      var t = "false schema", h = e.level, m = e.dataLevel, x = e.schema[t], c = e.schemaPath + e.util.getProperty(t), y = e.errSchemaPath + "/" + t, A = !e.opts.allErrors, M, _ = "data" + (m || ""), w = "valid" + h;
      if (e.schema === false) {
        e.isTop ? A = true : r += " var " + w + " = false; ";
        var g = g || [];
        g.push(r), r = "", e.createErrors !== false ? (r += " { keyword: '" + (M || "false schema") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(y) + " , params: {} ", e.opts.messages !== false && (r += " , message: 'boolean schema is false' "), e.opts.verbose && (r += " , schema: false , parentSchema: validate.schema" + e.schemaPath + " , data: " + _ + " "), r += " } ") : r += " {} ";
        var P = r;
        r = g.pop(), !e.compositeRule && A ? e.async ? r += " throw new ValidationError([" + P + "]); " : r += " validate.errors = [" + P + "]; return false; " : r += " var err = " + P + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
      } else e.isTop ? n ? r += " return data; " : r += " validate.errors = null; return true; " : r += " var " + w + " = true; ";
      return e.isTop && (r += " }; return validate; "), r;
    }
    if (e.isTop) {
      var O = e.isTop, h = e.level = 0, m = e.dataLevel = 0, _ = "data";
      if (e.rootId = e.resolve.fullPath(e.self._getId(e.root.schema)), e.baseId = e.baseId || e.rootId, delete e.isTop, e.dataPathArr = [""], e.schema.default !== void 0 && e.opts.useDefaults && e.opts.strictDefaults) {
        var S = "default is ignored in the schema root";
        if (e.opts.strictDefaults === "log") e.logger.warn(S);
        else throw new Error(S);
      }
      r += " var vErrors = null; ", r += " var errors = 0;     ", r += " if (rootData === undefined) rootData = data; ";
    } else {
      var h = e.level, m = e.dataLevel, _ = "data" + (m || "");
      if (o && (e.baseId = e.resolve.url(e.baseId, o)), n && !e.async) throw new Error("async schema in sync schema");
      r += " var errs_" + h + " = errors;";
    }
    var w = "valid" + h, A = !e.opts.allErrors, D = "", V = "", M, k = e.schema.type, U = Array.isArray(k);
    if (k && e.opts.nullable && e.schema.nullable === true && (U ? k.indexOf("null") == -1 && (k = k.concat("null")) : k != "null" && (k = [k, "null"], U = true)), U && k.length == 1 && (k = k[0], U = false), e.schema.$ref && i) {
      if (e.opts.extendRefs == "fail") throw new Error('$ref: validation keywords used in schema at path "' + e.errSchemaPath + '" (see option extendRefs)');
      e.opts.extendRefs !== true && (i = false, e.logger.warn('$ref: keywords ignored in schema at path "' + e.errSchemaPath + '"'));
    }
    if (e.schema.$comment && e.opts.$comment && (r += " " + e.RULES.all.$comment.code(e, "$comment")), k) {
      if (e.opts.coerceTypes) var q = e.util.coerceToTypes(e.opts.coerceTypes, k);
      var F = e.RULES.types[k];
      if (q || U || F === true || F && !Ee(F)) {
        var c = e.schemaPath + ".type", y = e.errSchemaPath + "/type", c = e.schemaPath + ".type", y = e.errSchemaPath + "/type", $ = U ? "checkDataTypes" : "checkDataType";
        if (r += " if (" + e.util[$](k, _, e.opts.strictNumbers, true) + ") { ", q) {
          var I = "dataType" + h, L = "coerced" + h;
          r += " var " + I + " = typeof " + _ + "; var " + L + " = undefined; ", e.opts.coerceTypes == "array" && (r += " if (" + I + " == 'object' && Array.isArray(" + _ + ") && " + _ + ".length == 1) { " + _ + " = " + _ + "[0]; " + I + " = typeof " + _ + "; if (" + e.util.checkDataType(e.schema.type, _, e.opts.strictNumbers) + ") " + L + " = " + _ + "; } "), r += " if (" + L + " !== undefined) ; ";
          var le = q;
          if (le) for (var Y, re = -1, G = le.length - 1; re < G; ) Y = le[re += 1], Y == "string" ? r += " else if (" + I + " == 'number' || " + I + " == 'boolean') " + L + " = '' + " + _ + "; else if (" + _ + " === null) " + L + " = ''; " : Y == "number" || Y == "integer" ? (r += " else if (" + I + " == 'boolean' || " + _ + " === null || (" + I + " == 'string' && " + _ + " && " + _ + " == +" + _ + " ", Y == "integer" && (r += " && !(" + _ + " % 1)"), r += ")) " + L + " = +" + _ + "; ") : Y == "boolean" ? r += " else if (" + _ + " === 'false' || " + _ + " === 0 || " + _ + " === null) " + L + " = false; else if (" + _ + " === 'true' || " + _ + " === 1) " + L + " = true; " : Y == "null" ? r += " else if (" + _ + " === '' || " + _ + " === 0 || " + _ + " === false) " + L + " = null; " : e.opts.coerceTypes == "array" && Y == "array" && (r += " else if (" + I + " == 'string' || " + I + " == 'number' || " + I + " == 'boolean' || " + _ + " == null) " + L + " = [" + _ + "]; ");
          r += " else {   ";
          var g = g || [];
          g.push(r), r = "", e.createErrors !== false ? (r += " { keyword: '" + (M || "type") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(y) + " , params: { type: '", U ? r += "" + k.join(",") : r += "" + k, r += "' } ", e.opts.messages !== false && (r += " , message: 'should be ", U ? r += "" + k.join(",") : r += "" + k, r += "' "), e.opts.verbose && (r += " , schema: validate.schema" + c + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + _ + " "), r += " } ") : r += " {} ";
          var P = r;
          r = g.pop(), !e.compositeRule && A ? e.async ? r += " throw new ValidationError([" + P + "]); " : r += " validate.errors = [" + P + "]; return false; " : r += " var err = " + P + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += " } if (" + L + " !== undefined) {  ";
          var Z = m ? "data" + (m - 1 || "") : "parentData", me = m ? e.dataPathArr[m] : "parentDataProperty";
          r += " " + _ + " = " + L + "; ", m || (r += "if (" + Z + " !== undefined)"), r += " " + Z + "[" + me + "] = " + L + "; } ";
        } else {
          var g = g || [];
          g.push(r), r = "", e.createErrors !== false ? (r += " { keyword: '" + (M || "type") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(y) + " , params: { type: '", U ? r += "" + k.join(",") : r += "" + k, r += "' } ", e.opts.messages !== false && (r += " , message: 'should be ", U ? r += "" + k.join(",") : r += "" + k, r += "' "), e.opts.verbose && (r += " , schema: validate.schema" + c + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + _ + " "), r += " } ") : r += " {} ";
          var P = r;
          r = g.pop(), !e.compositeRule && A ? e.async ? r += " throw new ValidationError([" + P + "]); " : r += " validate.errors = [" + P + "]; return false; " : r += " var err = " + P + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
        }
        r += " } ";
      }
    }
    if (e.schema.$ref && !i) r += " " + e.RULES.all.$ref.code(e, "$ref") + " ", A && (r += " } if (errors === ", O ? r += "0" : r += "errs_" + h, r += ") { ", V += "}");
    else {
      var Re = e.RULES;
      if (Re) {
        for (var F, Oe = -1, se = Re.length - 1; Oe < se; ) if (F = Re[Oe += 1], Ee(F)) {
          if (F.type && (r += " if (" + e.util.checkDataType(F.type, _, e.opts.strictNumbers) + ") { "), e.opts.useDefaults) {
            if (F.type == "object" && e.schema.properties) {
              var x = e.schema.properties, ye = Object.keys(x), be = ye;
              if (be) for (var $e, mr = -1, or = be.length - 1; mr < or; ) {
                $e = be[mr += 1];
                var _e = x[$e];
                if (_e.default !== void 0) {
                  var ve = _ + e.util.getProperty($e);
                  if (e.compositeRule) {
                    if (e.opts.strictDefaults) {
                      var S = "default is ignored for: " + ve;
                      if (e.opts.strictDefaults === "log") e.logger.warn(S);
                      else throw new Error(S);
                    }
                  } else r += " if (" + ve + " === undefined ", e.opts.useDefaults == "empty" && (r += " || " + ve + " === null || " + ve + " === '' "), r += " ) " + ve + " = ", e.opts.useDefaults == "shared" ? r += " " + e.useDefault(_e.default) + " " : r += " " + JSON.stringify(_e.default) + " ", r += "; ";
                }
              }
            } else if (F.type == "array" && Array.isArray(e.schema.items)) {
              var Sr = e.schema.items;
              if (Sr) {
                for (var _e, re = -1, we = Sr.length - 1; re < we; ) if (_e = Sr[re += 1], _e.default !== void 0) {
                  var ve = _ + "[" + re + "]";
                  if (e.compositeRule) {
                    if (e.opts.strictDefaults) {
                      var S = "default is ignored for: " + ve;
                      if (e.opts.strictDefaults === "log") e.logger.warn(S);
                      else throw new Error(S);
                    }
                  } else r += " if (" + ve + " === undefined ", e.opts.useDefaults == "empty" && (r += " || " + ve + " === null || " + ve + " === '' "), r += " ) " + ve + " = ", e.opts.useDefaults == "shared" ? r += " " + e.useDefault(_e.default) + " " : r += " " + JSON.stringify(_e.default) + " ", r += "; ";
                }
              }
            }
          }
          var oe = F.rules;
          if (oe) {
            for (var vr, ir = -1, Rr = oe.length - 1; ir < Rr; ) if (vr = oe[ir += 1], qe(vr)) {
              var wr = vr.code(e, vr.keyword, F.type);
              wr && (r += " " + wr + " ", A && (D += "}"));
            }
          }
          if (A && (r += " " + D + " ", D = ""), F.type && (r += " } ", k && k === F.type && !q)) {
            r += " else { ";
            var c = e.schemaPath + ".type", y = e.errSchemaPath + "/type", g = g || [];
            g.push(r), r = "", e.createErrors !== false ? (r += " { keyword: '" + (M || "type") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(y) + " , params: { type: '", U ? r += "" + k.join(",") : r += "" + k, r += "' } ", e.opts.messages !== false && (r += " , message: 'should be ", U ? r += "" + k.join(",") : r += "" + k, r += "' "), e.opts.verbose && (r += " , schema: validate.schema" + c + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + _ + " "), r += " } ") : r += " {} ";
            var P = r;
            r = g.pop(), !e.compositeRule && A ? e.async ? r += " throw new ValidationError([" + P + "]); " : r += " validate.errors = [" + P + "]; return false; " : r += " var err = " + P + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += " } ";
          }
          A && (r += " if (errors === ", O ? r += "0" : r += "errs_" + h, r += ") { ", V += "}");
        }
      }
    }
    A && (r += " " + V + " "), O ? (n ? (r += " if (errors === 0) return data;           ", r += " else throw new ValidationError(vErrors); ") : (r += " validate.errors = vErrors; ", r += " return errors === 0;       "), r += " }; return validate;") : r += " var " + w + " = errors === errs_" + h + ";";
    function Ee(Ae) {
      for (var Xe = Ae.rules, Ne = 0; Ne < Xe.length; Ne++) if (qe(Xe[Ne])) return true;
    }
    function qe(Ae) {
      return e.schema[Ae.keyword] !== void 0 || Ae.implements && ke(Ae);
    }
    function ke(Ae) {
      for (var Xe = Ae.implements, Ne = 0; Ne < Xe.length; Ne++) if (e.schema[Xe[Ne]] !== void 0) return true;
    }
    return r;
  };
});
var En = Q((sh, bn) => {
  "use strict";
  var Gt = Kt(), Xt = Br(), xn = Wt(), zc = Ka(), _n = Wa(), Vc = Xt.ucs2length, Zc = zt(), Hc = xn.Validation;
  bn.exports = Ga;
  function Ga(a16, e, t, s) {
    var r = this, n = this._opts, i = [void 0], o = {}, u = [], f = {}, h = [], m = {}, x = [];
    e = e || { schema: a16, refVal: i, refs: o };
    var c = Bc.call(this, a16, e, s), y = this._compilations[c.index];
    if (c.compiling) return y.callValidate = S;
    var _ = this._formats, g = this.RULES;
    try {
      var P = w(a16, e, t, s);
      y.validate = P;
      var O = y.callValidate;
      return O && (O.schema = P.schema, O.errors = null, O.refs = P.refs, O.refVal = P.refVal, O.root = P.root, O.$async = P.$async, n.sourceCode && (O.source = P.source)), P;
    } finally {
      Qc.call(this, a16, e, s);
    }
    function S() {
      var $ = y.validate, I = $.apply(this, arguments);
      return S.errors = $.errors, I;
    }
    function w($, I, L, le) {
      var Y = !I || I && I.schema == $;
      if (I.schema != e.schema) return Ga.call(r, $, I, L, le);
      var re = $.$async === true, G = _n({ isTop: true, schema: $, isRoot: Y, baseId: le, root: I, schemaPath: "", errSchemaPath: "#", errorPath: '""', MissingRefError: xn.MissingRef, RULES: g, validate: _n, util: Xt, resolve: Gt, resolveRef: A, usePattern: U, useDefault: q, useCustomRule: F, opts: n, formats: _, logger: r.logger, self: r });
      G = Yt(i, Wc) + Yt(u, Jc) + Yt(h, Kc) + Yt(x, Gc) + G, n.processCode && (G = n.processCode(G, $));
      var Z;
      try {
        var me = new Function("self", "RULES", "formats", "root", "refVal", "defaults", "customRules", "equal", "ucs2length", "ValidationError", G);
        Z = me(r, g, _, e, i, h, x, Zc, Vc, Hc), i[0] = Z;
      } catch (Re) {
        throw r.logger.error("Error compiling schema, function code:", G), Re;
      }
      return Z.schema = $, Z.errors = null, Z.refs = o, Z.refVal = i, Z.root = Y ? Z : I, re && (Z.$async = true), n.sourceCode === true && (Z.source = { code: G, patterns: u, defaults: h }), Z;
    }
    function A($, I, L) {
      I = Gt.url($, I);
      var le = o[I], Y, re;
      if (le !== void 0) return Y = i[le], re = "refVal[" + le + "]", k(Y, re);
      if (!L && e.refs) {
        var G = e.refs[I];
        if (G !== void 0) return Y = e.refVal[G], re = D(I, Y), k(Y, re);
      }
      re = D(I);
      var Z = Gt.call(r, w, e, I);
      if (Z === void 0) {
        var me = t && t[I];
        me && (Z = Gt.inlineRef(me, n.inlineRefs) ? me : Ga.call(r, me, e, t, $));
      }
      if (Z === void 0) V(I);
      else return M(I, Z), k(Z, re);
    }
    function D($, I) {
      var L = i.length;
      return i[L] = I, o[$] = L, "refVal" + L;
    }
    function V($) {
      delete o[$];
    }
    function M($, I) {
      var L = o[$];
      i[L] = I;
    }
    function k($, I) {
      return typeof $ == "object" || typeof $ == "boolean" ? { code: I, schema: $, inline: true } : { code: I, $async: $ && !!$.$async };
    }
    function U($) {
      var I = f[$];
      return I === void 0 && (I = f[$] = u.length, u[I] = $), "pattern" + I;
    }
    function q($) {
      switch (typeof $) {
        case "boolean":
        case "number":
          return "" + $;
        case "string":
          return Xt.toQuotedString($);
        case "object":
          if ($ === null) return "null";
          var I = zc($), L = m[I];
          return L === void 0 && (L = m[I] = h.length, h[L] = $), "default" + L;
      }
    }
    function F($, I, L, le) {
      if (r._opts.validateSchema !== false) {
        var Y = $.definition.dependencies;
        if (Y && !Y.every(function(be) {
          return Object.prototype.hasOwnProperty.call(L, be);
        })) throw new Error("parent schema must have all required keywords: " + Y.join(","));
        var re = $.definition.validateSchema;
        if (re) {
          var G = re(I);
          if (!G) {
            var Z = "keyword schema is invalid: " + r.errorsText(re.errors);
            if (r._opts.validateSchema == "log") r.logger.error(Z);
            else throw new Error(Z);
          }
        }
      }
      var me = $.definition.compile, Re = $.definition.inline, Oe = $.definition.macro, se;
      if (me) se = me.call(r, I, L, le);
      else if (Oe) se = Oe.call(r, I, L, le), n.validateSchema !== false && r.validateSchema(se, true);
      else if (Re) se = Re.call(r, le, $.keyword, I, L);
      else if (se = $.definition.validate, !se) return;
      if (se === void 0) throw new Error('custom keyword "' + $.keyword + '"failed to compile');
      var ye = x.length;
      return x[ye] = se, { code: "customRule" + ye, validate: se };
    }
  }
  function Bc(a16, e, t) {
    var s = Pn.call(this, a16, e, t);
    return s >= 0 ? { index: s, compiling: true } : (s = this._compilations.length, this._compilations[s] = { schema: a16, root: e, baseId: t }, { index: s, compiling: false });
  }
  function Qc(a16, e, t) {
    var s = Pn.call(this, a16, e, t);
    s >= 0 && this._compilations.splice(s, 1);
  }
  function Pn(a16, e, t) {
    for (var s = 0; s < this._compilations.length; s++) {
      var r = this._compilations[s];
      if (r.schema == a16 && r.root == e && r.baseId == t) return s;
    }
    return -1;
  }
  function Jc(a16, e) {
    return "var pattern" + a16 + " = new RegExp(" + Xt.toQuotedString(e[a16]) + ");";
  }
  function Kc(a16) {
    return "var default" + a16 + " = defaults[" + a16 + "];";
  }
  function Wc(a16, e) {
    return e[a16] === void 0 ? "" : "var refVal" + a16 + " = refVal[" + a16 + "];";
  }
  function Gc(a16) {
    return "var customRule" + a16 + " = customRules[" + a16 + "];";
  }
  function Yt(a16, e) {
    if (!a16.length) return "";
    for (var t = "", s = 0; s < a16.length; s++) t += e(s, a16);
    return t;
  }
});
var Rn = Q((nh, Sn) => {
  "use strict";
  var ea = Sn.exports = function() {
    this._cache = {};
  };
  ea.prototype.put = function(e, t) {
    this._cache[e] = t;
  };
  ea.prototype.get = function(e) {
    return this._cache[e];
  };
  ea.prototype.del = function(e) {
    delete this._cache[e];
  };
  ea.prototype.clear = function() {
    this._cache = {};
  };
});
var Fn = Q((oh, Nn) => {
  "use strict";
  var Yc = Br(), Xc = /^(\d\d\d\d)-(\d\d)-(\d\d)$/, ed = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], rd = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d(?::?\d\d)?)?$/i, wn = /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i, td = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i, ad = /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i, Tn = /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i, On = /^(?:(?:http[s\u017F]?|ftp):\/\/)(?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+(?::(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?@)?(?:(?!10(?:\.[0-9]{1,3}){3})(?!127(?:\.[0-9]{1,3}){3})(?!169\.254(?:\.[0-9]{1,3}){2})(?!192\.168(?:\.[0-9]{1,3}){2})(?!172\.(?:1[6-9]|2[0-9]|3[01])(?:\.[0-9]{1,3}){2})(?:[1-9][0-9]?|1[0-9][0-9]|2[01][0-9]|22[0-3])(?:\.(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])){2}(?:\.(?:[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-4]))|(?:(?:(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-)*(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)(?:\.(?:(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-)*(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)*(?:\.(?:(?:[a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){2,})))(?::[0-9]{2,5})?(?:\/(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?$/i, $n = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i, An = /^(?:\/(?:[^~/]|~0|~1)*)*$/, Dn = /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i, kn = /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/;
  Nn.exports = ra;
  function ra(a16) {
    return a16 = a16 == "full" ? "full" : "fast", Yc.copy(ra[a16]);
  }
  ra.fast = { date: /^\d\d\d\d-[0-1]\d-[0-3]\d$/, time: /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, "date-time": /^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i, "uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i, "uri-template": Tn, url: On, email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i, hostname: wn, ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/, ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i, regex: jn, uuid: $n, "json-pointer": An, "json-pointer-uri-fragment": Dn, "relative-json-pointer": kn };
  ra.full = { date: In, time: Cn, "date-time": od, uri: ld, "uri-reference": ad, "uri-template": Tn, url: On, email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i, hostname: wn, ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/, ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i, regex: jn, uuid: $n, "json-pointer": An, "json-pointer-uri-fragment": Dn, "relative-json-pointer": kn };
  function sd(a16) {
    return a16 % 4 === 0 && (a16 % 100 !== 0 || a16 % 400 === 0);
  }
  function In(a16) {
    var e = a16.match(Xc);
    if (!e) return false;
    var t = +e[1], s = +e[2], r = +e[3];
    return s >= 1 && s <= 12 && r >= 1 && r <= (s == 2 && sd(t) ? 29 : ed[s]);
  }
  function Cn(a16, e) {
    var t = a16.match(rd);
    if (!t) return false;
    var s = t[1], r = t[2], n = t[3], i = t[5];
    return (s <= 23 && r <= 59 && n <= 59 || s == 23 && r == 59 && n == 60) && (!e || i);
  }
  var nd = /t|\s/i;
  function od(a16) {
    var e = a16.split(nd);
    return e.length == 2 && In(e[0]) && Cn(e[1], true);
  }
  var id = /\/|:/;
  function ld(a16) {
    return id.test(a16) && td.test(a16);
  }
  var ud = /[^\\]\\Z/;
  function jn(a16) {
    if (ud.test(a16)) return false;
    try {
      return new RegExp(a16), true;
    } catch {
      return false;
    }
  }
});
var qn = Q((ih, Ln) => {
  "use strict";
  Ln.exports = function(e, t, s) {
    var r = " ", n = e.level, i = e.dataLevel, o = e.schema[t], u = e.errSchemaPath + "/" + t, f = !e.opts.allErrors, h = "data" + (i || ""), m = "valid" + n, x, c;
    if (o == "#" || o == "#/") e.isRoot ? (x = e.async, c = "validate") : (x = e.root.schema.$async === true, c = "root.refVal[0]");
    else {
      var y = e.resolveRef(e.baseId, o, e.isRoot);
      if (y === void 0) {
        var _ = e.MissingRefError.message(e.baseId, o);
        if (e.opts.missingRefs == "fail") {
          e.logger.error(_);
          var g = g || [];
          g.push(r), r = "", e.createErrors !== false ? (r += " { keyword: '$ref' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(u) + " , params: { ref: '" + e.util.escapeQuotes(o) + "' } ", e.opts.messages !== false && (r += " , message: 'can\\'t resolve reference " + e.util.escapeQuotes(o) + "' "), e.opts.verbose && (r += " , schema: " + e.util.toQuotedString(o) + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " "), r += " } ") : r += " {} ";
          var P = r;
          r = g.pop(), !e.compositeRule && f ? e.async ? r += " throw new ValidationError([" + P + "]); " : r += " validate.errors = [" + P + "]; return false; " : r += " var err = " + P + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", f && (r += " if (false) { ");
        } else if (e.opts.missingRefs == "ignore") e.logger.warn(_), f && (r += " if (true) { ");
        else throw new e.MissingRefError(e.baseId, o, _);
      } else if (y.inline) {
        var O = e.util.copy(e);
        O.level++;
        var S = "valid" + O.level;
        O.schema = y.schema, O.schemaPath = "", O.errSchemaPath = o;
        var w = e.validate(O).replace(/validate\.schema/g, y.code);
        r += " " + w + " ", f && (r += " if (" + S + ") { ");
      } else x = y.$async === true || e.async && y.$async !== false, c = y.code;
    }
    if (c) {
      var g = g || [];
      g.push(r), r = "", e.opts.passContext ? r += " " + c + ".call(this, " : r += " " + c + "( ", r += " " + h + ", (dataPath || '')", e.errorPath != '""' && (r += " + " + e.errorPath);
      var A = i ? "data" + (i - 1 || "") : "parentData", D = i ? e.dataPathArr[i] : "parentDataProperty";
      r += " , " + A + " , " + D + ", rootData)  ";
      var V = r;
      if (r = g.pop(), x) {
        if (!e.async) throw new Error("async schema referenced by sync schema");
        f && (r += " var " + m + "; "), r += " try { await " + V + "; ", f && (r += " " + m + " = true; "), r += " } catch (e) { if (!(e instanceof ValidationError)) throw e; if (vErrors === null) vErrors = e.errors; else vErrors = vErrors.concat(e.errors); errors = vErrors.length; ", f && (r += " " + m + " = false; "), r += " } ", f && (r += " if (" + m + ") { ");
      } else r += " if (!" + V + ") { if (vErrors === null) vErrors = " + c + ".errors; else vErrors = vErrors.concat(" + c + ".errors); errors = vErrors.length; } ", f && (r += " else { ");
    }
    return r;
  };
});
var Un = Q((lh, Mn) => {
  "use strict";
  Mn.exports = function(e, t, s) {
    var r = " ", n = e.schema[t], i = e.schemaPath + e.util.getProperty(t), o = e.errSchemaPath + "/" + t, u = !e.opts.allErrors, f = e.util.copy(e), h = "";
    f.level++;
    var m = "valid" + f.level, x = f.baseId, c = true, y = n;
    if (y) for (var _, g = -1, P = y.length - 1; g < P; ) _ = y[g += 1], (e.opts.strictKeywords ? typeof _ == "object" && Object.keys(_).length > 0 || _ === false : e.util.schemaHasRules(_, e.RULES.all)) && (c = false, f.schema = _, f.schemaPath = i + "[" + g + "]", f.errSchemaPath = o + "/" + g, r += "  " + e.validate(f) + " ", f.baseId = x, u && (r += " if (" + m + ") { ", h += "}"));
    return u && (c ? r += " if (true) { " : r += " " + h.slice(0, -1) + " "), r;
  };
});
var Vn = Q((uh, zn) => {
  "use strict";
  zn.exports = function(e, t, s) {
    var r = " ", n = e.level, i = e.dataLevel, o = e.schema[t], u = e.schemaPath + e.util.getProperty(t), f = e.errSchemaPath + "/" + t, h = !e.opts.allErrors, m = "data" + (i || ""), x = "valid" + n, c = "errs__" + n, y = e.util.copy(e), _ = "";
    y.level++;
    var g = "valid" + y.level, P = o.every(function(M) {
      return e.opts.strictKeywords ? typeof M == "object" && Object.keys(M).length > 0 || M === false : e.util.schemaHasRules(M, e.RULES.all);
    });
    if (P) {
      var O = y.baseId;
      r += " var " + c + " = errors; var " + x + " = false;  ";
      var S = e.compositeRule;
      e.compositeRule = y.compositeRule = true;
      var w = o;
      if (w) for (var A, D = -1, V = w.length - 1; D < V; ) A = w[D += 1], y.schema = A, y.schemaPath = u + "[" + D + "]", y.errSchemaPath = f + "/" + D, r += "  " + e.validate(y) + " ", y.baseId = O, r += " " + x + " = " + x + " || " + g + "; if (!" + x + ") { ", _ += "}";
      e.compositeRule = y.compositeRule = S, r += " " + _ + " if (!" + x + ") {   var err =   ", e.createErrors !== false ? (r += " { keyword: 'anyOf' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(f) + " , params: {} ", e.opts.messages !== false && (r += " , message: 'should match some schema in anyOf' "), e.opts.verbose && (r += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), r += " } ") : r += " {} ", r += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !e.compositeRule && h && (e.async ? r += " throw new ValidationError(vErrors); " : r += " validate.errors = vErrors; return false; "), r += " } else {  errors = " + c + "; if (vErrors !== null) { if (" + c + ") vErrors.length = " + c + "; else vErrors = null; } ", e.opts.allErrors && (r += " } ");
    } else h && (r += " if (true) { ");
    return r;
  };
});
var Hn = Q((ch, Zn) => {
  "use strict";
  Zn.exports = function(e, t, s) {
    var r = " ", n = e.schema[t], i = e.errSchemaPath + "/" + t, o = !e.opts.allErrors, u = e.util.toQuotedString(n);
    return e.opts.$comment === true ? r += " console.log(" + u + ");" : typeof e.opts.$comment == "function" && (r += " self._opts.$comment(" + u + ", " + e.util.toQuotedString(i) + ", validate.root.schema);"), r;
  };
});
var Qn = Q((dh, Bn) => {
  "use strict";
  Bn.exports = function(e, t, s) {
    var r = " ", n = e.level, i = e.dataLevel, o = e.schema[t], u = e.schemaPath + e.util.getProperty(t), f = e.errSchemaPath + "/" + t, h = !e.opts.allErrors, m = "data" + (i || ""), x = "valid" + n, c = e.opts.$data && o && o.$data, y;
    c ? (r += " var schema" + n + " = " + e.util.getData(o.$data, i, e.dataPathArr) + "; ", y = "schema" + n) : y = o, c || (r += " var schema" + n + " = validate.schema" + u + ";"), r += "var " + x + " = equal(" + m + ", schema" + n + "); if (!" + x + ") {   ";
    var _ = _ || [];
    _.push(r), r = "", e.createErrors !== false ? (r += " { keyword: 'const' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(f) + " , params: { allowedValue: schema" + n + " } ", e.opts.messages !== false && (r += " , message: 'should be equal to constant' "), e.opts.verbose && (r += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), r += " } ") : r += " {} ";
    var g = r;
    return r = _.pop(), !e.compositeRule && h ? e.async ? r += " throw new ValidationError([" + g + "]); " : r += " validate.errors = [" + g + "]; return false; " : r += " var err = " + g + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += " }", h && (r += " else { "), r;
  };
});
var Kn = Q((fh, Jn) => {
  "use strict";
  Jn.exports = function(e, t, s) {
    var r = " ", n = e.level, i = e.dataLevel, o = e.schema[t], u = e.schemaPath + e.util.getProperty(t), f = e.errSchemaPath + "/" + t, h = !e.opts.allErrors, m = "data" + (i || ""), x = "valid" + n, c = "errs__" + n, y = e.util.copy(e), _ = "";
    y.level++;
    var g = "valid" + y.level, P = "i" + n, O = y.dataLevel = e.dataLevel + 1, S = "data" + O, w = e.baseId, A = e.opts.strictKeywords ? typeof o == "object" && Object.keys(o).length > 0 || o === false : e.util.schemaHasRules(o, e.RULES.all);
    if (r += "var " + c + " = errors;var " + x + ";", A) {
      var D = e.compositeRule;
      e.compositeRule = y.compositeRule = true, y.schema = o, y.schemaPath = u, y.errSchemaPath = f, r += " var " + g + " = false; for (var " + P + " = 0; " + P + " < " + m + ".length; " + P + "++) { ", y.errorPath = e.util.getPathExpr(e.errorPath, P, e.opts.jsonPointers, true);
      var V = m + "[" + P + "]";
      y.dataPathArr[O] = P;
      var M = e.validate(y);
      y.baseId = w, e.util.varOccurences(M, S) < 2 ? r += " " + e.util.varReplace(M, S, V) + " " : r += " var " + S + " = " + V + "; " + M + " ", r += " if (" + g + ") break; }  ", e.compositeRule = y.compositeRule = D, r += " " + _ + " if (!" + g + ") {";
    } else r += " if (" + m + ".length == 0) {";
    var k = k || [];
    k.push(r), r = "", e.createErrors !== false ? (r += " { keyword: 'contains' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(f) + " , params: {} ", e.opts.messages !== false && (r += " , message: 'should contain a valid item' "), e.opts.verbose && (r += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), r += " } ") : r += " {} ";
    var U = r;
    return r = k.pop(), !e.compositeRule && h ? e.async ? r += " throw new ValidationError([" + U + "]); " : r += " validate.errors = [" + U + "]; return false; " : r += " var err = " + U + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += " } else { ", A && (r += "  errors = " + c + "; if (vErrors !== null) { if (" + c + ") vErrors.length = " + c + "; else vErrors = null; } "), e.opts.allErrors && (r += " } "), r;
  };
});
var Gn = Q((hh, Wn) => {
  "use strict";
  Wn.exports = function(e, t, s) {
    var r = " ", n = e.level, i = e.dataLevel, o = e.schema[t], u = e.schemaPath + e.util.getProperty(t), f = e.errSchemaPath + "/" + t, h = !e.opts.allErrors, m = "data" + (i || ""), x = "errs__" + n, c = e.util.copy(e), y = "";
    c.level++;
    var _ = "valid" + c.level, g = {}, P = {}, O = e.opts.ownProperties;
    for (D in o) if (D != "__proto__") {
      var S = o[D], w = Array.isArray(S) ? P : g;
      w[D] = S;
    }
    r += "var " + x + " = errors;";
    var A = e.errorPath;
    r += "var missing" + n + ";";
    for (var D in P) if (w = P[D], w.length) {
      if (r += " if ( " + m + e.util.getProperty(D) + " !== undefined ", O && (r += " && Object.prototype.hasOwnProperty.call(" + m + ", '" + e.util.escapeQuotes(D) + "') "), h) {
        r += " && ( ";
        var V = w;
        if (V) for (var M, k = -1, U = V.length - 1; k < U; ) {
          M = V[k += 1], k && (r += " || ");
          var q = e.util.getProperty(M), F = m + q;
          r += " ( ( " + F + " === undefined ", O && (r += " || ! Object.prototype.hasOwnProperty.call(" + m + ", '" + e.util.escapeQuotes(M) + "') "), r += ") && (missing" + n + " = " + e.util.toQuotedString(e.opts.jsonPointers ? M : q) + ") ) ";
        }
        r += ")) {  ";
        var $ = "missing" + n, I = "' + " + $ + " + '";
        e.opts._errorDataPathProperty && (e.errorPath = e.opts.jsonPointers ? e.util.getPathExpr(A, $, true) : A + " + " + $);
        var L = L || [];
        L.push(r), r = "", e.createErrors !== false ? (r += " { keyword: 'dependencies' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(f) + " , params: { property: '" + e.util.escapeQuotes(D) + "', missingProperty: '" + I + "', depsCount: " + w.length + ", deps: '" + e.util.escapeQuotes(w.length == 1 ? w[0] : w.join(", ")) + "' } ", e.opts.messages !== false && (r += " , message: 'should have ", w.length == 1 ? r += "property " + e.util.escapeQuotes(w[0]) : r += "properties " + e.util.escapeQuotes(w.join(", ")), r += " when property " + e.util.escapeQuotes(D) + " is present' "), e.opts.verbose && (r += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), r += " } ") : r += " {} ";
        var le = r;
        r = L.pop(), !e.compositeRule && h ? e.async ? r += " throw new ValidationError([" + le + "]); " : r += " validate.errors = [" + le + "]; return false; " : r += " var err = " + le + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
      } else {
        r += " ) { ";
        var Y = w;
        if (Y) for (var M, re = -1, G = Y.length - 1; re < G; ) {
          M = Y[re += 1];
          var q = e.util.getProperty(M), I = e.util.escapeQuotes(M), F = m + q;
          e.opts._errorDataPathProperty && (e.errorPath = e.util.getPath(A, M, e.opts.jsonPointers)), r += " if ( " + F + " === undefined ", O && (r += " || ! Object.prototype.hasOwnProperty.call(" + m + ", '" + e.util.escapeQuotes(M) + "') "), r += ") {  var err =   ", e.createErrors !== false ? (r += " { keyword: 'dependencies' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(f) + " , params: { property: '" + e.util.escapeQuotes(D) + "', missingProperty: '" + I + "', depsCount: " + w.length + ", deps: '" + e.util.escapeQuotes(w.length == 1 ? w[0] : w.join(", ")) + "' } ", e.opts.messages !== false && (r += " , message: 'should have ", w.length == 1 ? r += "property " + e.util.escapeQuotes(w[0]) : r += "properties " + e.util.escapeQuotes(w.join(", ")), r += " when property " + e.util.escapeQuotes(D) + " is present' "), e.opts.verbose && (r += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), r += " } ") : r += " {} ", r += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ";
        }
      }
      r += " }   ", h && (y += "}", r += " else { ");
    }
    e.errorPath = A;
    var Z = c.baseId;
    for (var D in g) {
      var S = g[D];
      (e.opts.strictKeywords ? typeof S == "object" && Object.keys(S).length > 0 || S === false : e.util.schemaHasRules(S, e.RULES.all)) && (r += " " + _ + " = true; if ( " + m + e.util.getProperty(D) + " !== undefined ", O && (r += " && Object.prototype.hasOwnProperty.call(" + m + ", '" + e.util.escapeQuotes(D) + "') "), r += ") { ", c.schema = S, c.schemaPath = u + e.util.getProperty(D), c.errSchemaPath = f + "/" + e.util.escapeFragment(D), r += "  " + e.validate(c) + " ", c.baseId = Z, r += " }  ", h && (r += " if (" + _ + ") { ", y += "}"));
    }
    return h && (r += "   " + y + " if (" + x + " == errors) {"), r;
  };
});
var Xn = Q((ph, Yn) => {
  "use strict";
  Yn.exports = function(e, t, s) {
    var r = " ", n = e.level, i = e.dataLevel, o = e.schema[t], u = e.schemaPath + e.util.getProperty(t), f = e.errSchemaPath + "/" + t, h = !e.opts.allErrors, m = "data" + (i || ""), x = "valid" + n, c = e.opts.$data && o && o.$data, y;
    c ? (r += " var schema" + n + " = " + e.util.getData(o.$data, i, e.dataPathArr) + "; ", y = "schema" + n) : y = o;
    var _ = "i" + n, g = "schema" + n;
    c || (r += " var " + g + " = validate.schema" + u + ";"), r += "var " + x + ";", c && (r += " if (schema" + n + " === undefined) " + x + " = true; else if (!Array.isArray(schema" + n + ")) " + x + " = false; else {"), r += "" + x + " = false;for (var " + _ + "=0; " + _ + "<" + g + ".length; " + _ + "++) if (equal(" + m + ", " + g + "[" + _ + "])) { " + x + " = true; break; }", c && (r += "  }  "), r += " if (!" + x + ") {   ";
    var P = P || [];
    P.push(r), r = "", e.createErrors !== false ? (r += " { keyword: 'enum' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(f) + " , params: { allowedValues: schema" + n + " } ", e.opts.messages !== false && (r += " , message: 'should be equal to one of the allowed values' "), e.opts.verbose && (r += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), r += " } ") : r += " {} ";
    var O = r;
    return r = P.pop(), !e.compositeRule && h ? e.async ? r += " throw new ValidationError([" + O + "]); " : r += " validate.errors = [" + O + "]; return false; " : r += " var err = " + O + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += " }", h && (r += " else { "), r;
  };
});
var ro = Q((mh, eo) => {
  "use strict";
  eo.exports = function(e, t, s) {
    var r = " ", n = e.level, i = e.dataLevel, o = e.schema[t], u = e.schemaPath + e.util.getProperty(t), f = e.errSchemaPath + "/" + t, h = !e.opts.allErrors, m = "data" + (i || "");
    if (e.opts.format === false) return h && (r += " if (true) { "), r;
    var x = e.opts.$data && o && o.$data, c;
    x ? (r += " var schema" + n + " = " + e.util.getData(o.$data, i, e.dataPathArr) + "; ", c = "schema" + n) : c = o;
    var y = e.opts.unknownFormats, _ = Array.isArray(y);
    if (x) {
      var g = "format" + n, P = "isObject" + n, O = "formatType" + n;
      r += " var " + g + " = formats[" + c + "]; var " + P + " = typeof " + g + " == 'object' && !(" + g + " instanceof RegExp) && " + g + ".validate; var " + O + " = " + P + " && " + g + ".type || 'string'; if (" + P + ") { ", e.async && (r += " var async" + n + " = " + g + ".async; "), r += " " + g + " = " + g + ".validate; } if (  ", x && (r += " (" + c + " !== undefined && typeof " + c + " != 'string') || "), r += " (", y != "ignore" && (r += " (" + c + " && !" + g + " ", _ && (r += " && self._opts.unknownFormats.indexOf(" + c + ") == -1 "), r += ") || "), r += " (" + g + " && " + O + " == '" + s + "' && !(typeof " + g + " == 'function' ? ", e.async ? r += " (async" + n + " ? await " + g + "(" + m + ") : " + g + "(" + m + ")) " : r += " " + g + "(" + m + ") ", r += " : " + g + ".test(" + m + "))))) {";
    } else {
      var g = e.formats[o];
      if (!g) {
        if (y == "ignore") return e.logger.warn('unknown format "' + o + '" ignored in schema at path "' + e.errSchemaPath + '"'), h && (r += " if (true) { "), r;
        if (_ && y.indexOf(o) >= 0) return h && (r += " if (true) { "), r;
        throw new Error('unknown format "' + o + '" is used in schema at path "' + e.errSchemaPath + '"');
      }
      var P = typeof g == "object" && !(g instanceof RegExp) && g.validate, O = P && g.type || "string";
      if (P) {
        var S = g.async === true;
        g = g.validate;
      }
      if (O != s) return h && (r += " if (true) { "), r;
      if (S) {
        if (!e.async) throw new Error("async format in sync schema");
        var w = "formats" + e.util.getProperty(o) + ".validate";
        r += " if (!(await " + w + "(" + m + "))) { ";
      } else {
        r += " if (! ";
        var w = "formats" + e.util.getProperty(o);
        P && (w += ".validate"), typeof g == "function" ? r += " " + w + "(" + m + ") " : r += " " + w + ".test(" + m + ") ", r += ") { ";
      }
    }
    var A = A || [];
    A.push(r), r = "", e.createErrors !== false ? (r += " { keyword: 'format' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(f) + " , params: { format:  ", x ? r += "" + c : r += "" + e.util.toQuotedString(o), r += "  } ", e.opts.messages !== false && (r += ` , message: 'should match format "`, x ? r += "' + " + c + " + '" : r += "" + e.util.escapeQuotes(o), r += `"' `), e.opts.verbose && (r += " , schema:  ", x ? r += "validate.schema" + u : r += "" + e.util.toQuotedString(o), r += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), r += " } ") : r += " {} ";
    var D = r;
    return r = A.pop(), !e.compositeRule && h ? e.async ? r += " throw new ValidationError([" + D + "]); " : r += " validate.errors = [" + D + "]; return false; " : r += " var err = " + D + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += " } ", h && (r += " else { "), r;
  };
});
var ao = Q((vh, to) => {
  "use strict";
  to.exports = function(e, t, s) {
    var r = " ", n = e.level, i = e.dataLevel, o = e.schema[t], u = e.schemaPath + e.util.getProperty(t), f = e.errSchemaPath + "/" + t, h = !e.opts.allErrors, m = "data" + (i || ""), x = "valid" + n, c = "errs__" + n, y = e.util.copy(e);
    y.level++;
    var _ = "valid" + y.level, g = e.schema.then, P = e.schema.else, O = g !== void 0 && (e.opts.strictKeywords ? typeof g == "object" && Object.keys(g).length > 0 || g === false : e.util.schemaHasRules(g, e.RULES.all)), S = P !== void 0 && (e.opts.strictKeywords ? typeof P == "object" && Object.keys(P).length > 0 || P === false : e.util.schemaHasRules(P, e.RULES.all)), w = y.baseId;
    if (O || S) {
      var A;
      y.createErrors = false, y.schema = o, y.schemaPath = u, y.errSchemaPath = f, r += " var " + c + " = errors; var " + x + " = true;  ";
      var D = e.compositeRule;
      e.compositeRule = y.compositeRule = true, r += "  " + e.validate(y) + " ", y.baseId = w, y.createErrors = true, r += "  errors = " + c + "; if (vErrors !== null) { if (" + c + ") vErrors.length = " + c + "; else vErrors = null; }  ", e.compositeRule = y.compositeRule = D, O ? (r += " if (" + _ + ") {  ", y.schema = e.schema.then, y.schemaPath = e.schemaPath + ".then", y.errSchemaPath = e.errSchemaPath + "/then", r += "  " + e.validate(y) + " ", y.baseId = w, r += " " + x + " = " + _ + "; ", O && S ? (A = "ifClause" + n, r += " var " + A + " = 'then'; ") : A = "'then'", r += " } ", S && (r += " else { ")) : r += " if (!" + _ + ") { ", S && (y.schema = e.schema.else, y.schemaPath = e.schemaPath + ".else", y.errSchemaPath = e.errSchemaPath + "/else", r += "  " + e.validate(y) + " ", y.baseId = w, r += " " + x + " = " + _ + "; ", O && S ? (A = "ifClause" + n, r += " var " + A + " = 'else'; ") : A = "'else'", r += " } "), r += " if (!" + x + ") {   var err =   ", e.createErrors !== false ? (r += " { keyword: 'if' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(f) + " , params: { failingKeyword: " + A + " } ", e.opts.messages !== false && (r += ` , message: 'should match "' + ` + A + ` + '" schema' `), e.opts.verbose && (r += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), r += " } ") : r += " {} ", r += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !e.compositeRule && h && (e.async ? r += " throw new ValidationError(vErrors); " : r += " validate.errors = vErrors; return false; "), r += " }   ", h && (r += " else { ");
    } else h && (r += " if (true) { ");
    return r;
  };
});
var no = Q((gh, so) => {
  "use strict";
  so.exports = function(e, t, s) {
    var r = " ", n = e.level, i = e.dataLevel, o = e.schema[t], u = e.schemaPath + e.util.getProperty(t), f = e.errSchemaPath + "/" + t, h = !e.opts.allErrors, m = "data" + (i || ""), x = "valid" + n, c = "errs__" + n, y = e.util.copy(e), _ = "";
    y.level++;
    var g = "valid" + y.level, P = "i" + n, O = y.dataLevel = e.dataLevel + 1, S = "data" + O, w = e.baseId;
    if (r += "var " + c + " = errors;var " + x + ";", Array.isArray(o)) {
      var A = e.schema.additionalItems;
      if (A === false) {
        r += " " + x + " = " + m + ".length <= " + o.length + "; ";
        var D = f;
        f = e.errSchemaPath + "/additionalItems", r += "  if (!" + x + ") {   ";
        var V = V || [];
        V.push(r), r = "", e.createErrors !== false ? (r += " { keyword: 'additionalItems' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(f) + " , params: { limit: " + o.length + " } ", e.opts.messages !== false && (r += " , message: 'should NOT have more than " + o.length + " items' "), e.opts.verbose && (r += " , schema: false , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), r += " } ") : r += " {} ";
        var M = r;
        r = V.pop(), !e.compositeRule && h ? e.async ? r += " throw new ValidationError([" + M + "]); " : r += " validate.errors = [" + M + "]; return false; " : r += " var err = " + M + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += " } ", f = D, h && (_ += "}", r += " else { ");
      }
      var k = o;
      if (k) {
        for (var U, q = -1, F = k.length - 1; q < F; ) if (U = k[q += 1], e.opts.strictKeywords ? typeof U == "object" && Object.keys(U).length > 0 || U === false : e.util.schemaHasRules(U, e.RULES.all)) {
          r += " " + g + " = true; if (" + m + ".length > " + q + ") { ";
          var $ = m + "[" + q + "]";
          y.schema = U, y.schemaPath = u + "[" + q + "]", y.errSchemaPath = f + "/" + q, y.errorPath = e.util.getPathExpr(e.errorPath, q, e.opts.jsonPointers, true), y.dataPathArr[O] = q;
          var I = e.validate(y);
          y.baseId = w, e.util.varOccurences(I, S) < 2 ? r += " " + e.util.varReplace(I, S, $) + " " : r += " var " + S + " = " + $ + "; " + I + " ", r += " }  ", h && (r += " if (" + g + ") { ", _ += "}");
        }
      }
      if (typeof A == "object" && (e.opts.strictKeywords ? typeof A == "object" && Object.keys(A).length > 0 || A === false : e.util.schemaHasRules(A, e.RULES.all))) {
        y.schema = A, y.schemaPath = e.schemaPath + ".additionalItems", y.errSchemaPath = e.errSchemaPath + "/additionalItems", r += " " + g + " = true; if (" + m + ".length > " + o.length + ") {  for (var " + P + " = " + o.length + "; " + P + " < " + m + ".length; " + P + "++) { ", y.errorPath = e.util.getPathExpr(e.errorPath, P, e.opts.jsonPointers, true);
        var $ = m + "[" + P + "]";
        y.dataPathArr[O] = P;
        var I = e.validate(y);
        y.baseId = w, e.util.varOccurences(I, S) < 2 ? r += " " + e.util.varReplace(I, S, $) + " " : r += " var " + S + " = " + $ + "; " + I + " ", h && (r += " if (!" + g + ") break; "), r += " } }  ", h && (r += " if (" + g + ") { ", _ += "}");
      }
    } else if (e.opts.strictKeywords ? typeof o == "object" && Object.keys(o).length > 0 || o === false : e.util.schemaHasRules(o, e.RULES.all)) {
      y.schema = o, y.schemaPath = u, y.errSchemaPath = f, r += "  for (var " + P + " = 0; " + P + " < " + m + ".length; " + P + "++) { ", y.errorPath = e.util.getPathExpr(e.errorPath, P, e.opts.jsonPointers, true);
      var $ = m + "[" + P + "]";
      y.dataPathArr[O] = P;
      var I = e.validate(y);
      y.baseId = w, e.util.varOccurences(I, S) < 2 ? r += " " + e.util.varReplace(I, S, $) + " " : r += " var " + S + " = " + $ + "; " + I + " ", h && (r += " if (!" + g + ") break; "), r += " }";
    }
    return h && (r += " " + _ + " if (" + c + " == errors) {"), r;
  };
});
var Ya = Q((yh, oo) => {
  "use strict";
  oo.exports = function(e, t, s) {
    var r = " ", n = e.level, i = e.dataLevel, o = e.schema[t], u = e.schemaPath + e.util.getProperty(t), f = e.errSchemaPath + "/" + t, h = !e.opts.allErrors, w, m = "data" + (i || ""), x = e.opts.$data && o && o.$data, c;
    x ? (r += " var schema" + n + " = " + e.util.getData(o.$data, i, e.dataPathArr) + "; ", c = "schema" + n) : c = o;
    var y = t == "maximum", _ = y ? "exclusiveMaximum" : "exclusiveMinimum", g = e.schema[_], P = e.opts.$data && g && g.$data, O = y ? "<" : ">", S = y ? ">" : "<", w = void 0;
    if (!(x || typeof o == "number" || o === void 0)) throw new Error(t + " must be number");
    if (!(P || g === void 0 || typeof g == "number" || typeof g == "boolean")) throw new Error(_ + " must be number or boolean");
    if (P) {
      var A = e.util.getData(g.$data, i, e.dataPathArr), D = "exclusive" + n, V = "exclType" + n, M = "exclIsNumber" + n, k = "op" + n, U = "' + " + k + " + '";
      r += " var schemaExcl" + n + " = " + A + "; ", A = "schemaExcl" + n, r += " var " + D + "; var " + V + " = typeof " + A + "; if (" + V + " != 'boolean' && " + V + " != 'undefined' && " + V + " != 'number') { ";
      var w = _, q = q || [];
      q.push(r), r = "", e.createErrors !== false ? (r += " { keyword: '" + (w || "_exclusiveLimit") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(f) + " , params: {} ", e.opts.messages !== false && (r += " , message: '" + _ + " should be boolean' "), e.opts.verbose && (r += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), r += " } ") : r += " {} ";
      var F = r;
      r = q.pop(), !e.compositeRule && h ? e.async ? r += " throw new ValidationError([" + F + "]); " : r += " validate.errors = [" + F + "]; return false; " : r += " var err = " + F + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += " } else if ( ", x && (r += " (" + c + " !== undefined && typeof " + c + " != 'number') || "), r += " " + V + " == 'number' ? ( (" + D + " = " + c + " === undefined || " + A + " " + O + "= " + c + ") ? " + m + " " + S + "= " + A + " : " + m + " " + S + " " + c + " ) : ( (" + D + " = " + A + " === true) ? " + m + " " + S + "= " + c + " : " + m + " " + S + " " + c + " ) || " + m + " !== " + m + ") { var op" + n + " = " + D + " ? '" + O + "' : '" + O + "='; ", o === void 0 && (w = _, f = e.errSchemaPath + "/" + _, c = A, x = P);
    } else {
      var M = typeof g == "number", U = O;
      if (M && x) {
        var k = "'" + U + "'";
        r += " if ( ", x && (r += " (" + c + " !== undefined && typeof " + c + " != 'number') || "), r += " ( " + c + " === undefined || " + g + " " + O + "= " + c + " ? " + m + " " + S + "= " + g + " : " + m + " " + S + " " + c + " ) || " + m + " !== " + m + ") { ";
      } else {
        M && o === void 0 ? (D = true, w = _, f = e.errSchemaPath + "/" + _, c = g, S += "=") : (M && (c = Math[y ? "min" : "max"](g, o)), g === (M ? c : true) ? (D = true, w = _, f = e.errSchemaPath + "/" + _, S += "=") : (D = false, U += "="));
        var k = "'" + U + "'";
        r += " if ( ", x && (r += " (" + c + " !== undefined && typeof " + c + " != 'number') || "), r += " " + m + " " + S + " " + c + " || " + m + " !== " + m + ") { ";
      }
    }
    w = w || t;
    var q = q || [];
    q.push(r), r = "", e.createErrors !== false ? (r += " { keyword: '" + (w || "_limit") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(f) + " , params: { comparison: " + k + ", limit: " + c + ", exclusive: " + D + " } ", e.opts.messages !== false && (r += " , message: 'should be " + U + " ", x ? r += "' + " + c : r += "" + c + "'"), e.opts.verbose && (r += " , schema:  ", x ? r += "validate.schema" + u : r += "" + o, r += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), r += " } ") : r += " {} ";
    var F = r;
    return r = q.pop(), !e.compositeRule && h ? e.async ? r += " throw new ValidationError([" + F + "]); " : r += " validate.errors = [" + F + "]; return false; " : r += " var err = " + F + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += " } ", h && (r += " else { "), r;
  };
});
var Xa = Q((_h, io) => {
  "use strict";
  io.exports = function(e, t, s) {
    var r = " ", n = e.level, i = e.dataLevel, o = e.schema[t], u = e.schemaPath + e.util.getProperty(t), f = e.errSchemaPath + "/" + t, h = !e.opts.allErrors, _, m = "data" + (i || ""), x = e.opts.$data && o && o.$data, c;
    if (x ? (r += " var schema" + n + " = " + e.util.getData(o.$data, i, e.dataPathArr) + "; ", c = "schema" + n) : c = o, !(x || typeof o == "number")) throw new Error(t + " must be number");
    var y = t == "maxItems" ? ">" : "<";
    r += "if ( ", x && (r += " (" + c + " !== undefined && typeof " + c + " != 'number') || "), r += " " + m + ".length " + y + " " + c + ") { ";
    var _ = t, g = g || [];
    g.push(r), r = "", e.createErrors !== false ? (r += " { keyword: '" + (_ || "_limitItems") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(f) + " , params: { limit: " + c + " } ", e.opts.messages !== false && (r += " , message: 'should NOT have ", t == "maxItems" ? r += "more" : r += "fewer", r += " than ", x ? r += "' + " + c + " + '" : r += "" + o, r += " items' "), e.opts.verbose && (r += " , schema:  ", x ? r += "validate.schema" + u : r += "" + o, r += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), r += " } ") : r += " {} ";
    var P = r;
    return r = g.pop(), !e.compositeRule && h ? e.async ? r += " throw new ValidationError([" + P + "]); " : r += " validate.errors = [" + P + "]; return false; " : r += " var err = " + P + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += "} ", h && (r += " else { "), r;
  };
});
var es = Q((xh, lo) => {
  "use strict";
  lo.exports = function(e, t, s) {
    var r = " ", n = e.level, i = e.dataLevel, o = e.schema[t], u = e.schemaPath + e.util.getProperty(t), f = e.errSchemaPath + "/" + t, h = !e.opts.allErrors, _, m = "data" + (i || ""), x = e.opts.$data && o && o.$data, c;
    if (x ? (r += " var schema" + n + " = " + e.util.getData(o.$data, i, e.dataPathArr) + "; ", c = "schema" + n) : c = o, !(x || typeof o == "number")) throw new Error(t + " must be number");
    var y = t == "maxLength" ? ">" : "<";
    r += "if ( ", x && (r += " (" + c + " !== undefined && typeof " + c + " != 'number') || "), e.opts.unicode === false ? r += " " + m + ".length " : r += " ucs2length(" + m + ") ", r += " " + y + " " + c + ") { ";
    var _ = t, g = g || [];
    g.push(r), r = "", e.createErrors !== false ? (r += " { keyword: '" + (_ || "_limitLength") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(f) + " , params: { limit: " + c + " } ", e.opts.messages !== false && (r += " , message: 'should NOT be ", t == "maxLength" ? r += "longer" : r += "shorter", r += " than ", x ? r += "' + " + c + " + '" : r += "" + o, r += " characters' "), e.opts.verbose && (r += " , schema:  ", x ? r += "validate.schema" + u : r += "" + o, r += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), r += " } ") : r += " {} ";
    var P = r;
    return r = g.pop(), !e.compositeRule && h ? e.async ? r += " throw new ValidationError([" + P + "]); " : r += " validate.errors = [" + P + "]; return false; " : r += " var err = " + P + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += "} ", h && (r += " else { "), r;
  };
});
var rs = Q((Ph, uo) => {
  "use strict";
  uo.exports = function(e, t, s) {
    var r = " ", n = e.level, i = e.dataLevel, o = e.schema[t], u = e.schemaPath + e.util.getProperty(t), f = e.errSchemaPath + "/" + t, h = !e.opts.allErrors, _, m = "data" + (i || ""), x = e.opts.$data && o && o.$data, c;
    if (x ? (r += " var schema" + n + " = " + e.util.getData(o.$data, i, e.dataPathArr) + "; ", c = "schema" + n) : c = o, !(x || typeof o == "number")) throw new Error(t + " must be number");
    var y = t == "maxProperties" ? ">" : "<";
    r += "if ( ", x && (r += " (" + c + " !== undefined && typeof " + c + " != 'number') || "), r += " Object.keys(" + m + ").length " + y + " " + c + ") { ";
    var _ = t, g = g || [];
    g.push(r), r = "", e.createErrors !== false ? (r += " { keyword: '" + (_ || "_limitProperties") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(f) + " , params: { limit: " + c + " } ", e.opts.messages !== false && (r += " , message: 'should NOT have ", t == "maxProperties" ? r += "more" : r += "fewer", r += " than ", x ? r += "' + " + c + " + '" : r += "" + o, r += " properties' "), e.opts.verbose && (r += " , schema:  ", x ? r += "validate.schema" + u : r += "" + o, r += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), r += " } ") : r += " {} ";
    var P = r;
    return r = g.pop(), !e.compositeRule && h ? e.async ? r += " throw new ValidationError([" + P + "]); " : r += " validate.errors = [" + P + "]; return false; " : r += " var err = " + P + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += "} ", h && (r += " else { "), r;
  };
});
var fo = Q((bh, co) => {
  "use strict";
  co.exports = function(e, t, s) {
    var r = " ", n = e.level, i = e.dataLevel, o = e.schema[t], u = e.schemaPath + e.util.getProperty(t), f = e.errSchemaPath + "/" + t, h = !e.opts.allErrors, m = "data" + (i || ""), x = e.opts.$data && o && o.$data, c;
    if (x ? (r += " var schema" + n + " = " + e.util.getData(o.$data, i, e.dataPathArr) + "; ", c = "schema" + n) : c = o, !(x || typeof o == "number")) throw new Error(t + " must be number");
    r += "var division" + n + ";if (", x && (r += " " + c + " !== undefined && ( typeof " + c + " != 'number' || "), r += " (division" + n + " = " + m + " / " + c + ", ", e.opts.multipleOfPrecision ? r += " Math.abs(Math.round(division" + n + ") - division" + n + ") > 1e-" + e.opts.multipleOfPrecision + " " : r += " division" + n + " !== parseInt(division" + n + ") ", r += " ) ", x && (r += "  )  "), r += " ) {   ";
    var y = y || [];
    y.push(r), r = "", e.createErrors !== false ? (r += " { keyword: 'multipleOf' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(f) + " , params: { multipleOf: " + c + " } ", e.opts.messages !== false && (r += " , message: 'should be multiple of ", x ? r += "' + " + c : r += "" + c + "'"), e.opts.verbose && (r += " , schema:  ", x ? r += "validate.schema" + u : r += "" + o, r += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), r += " } ") : r += " {} ";
    var _ = r;
    return r = y.pop(), !e.compositeRule && h ? e.async ? r += " throw new ValidationError([" + _ + "]); " : r += " validate.errors = [" + _ + "]; return false; " : r += " var err = " + _ + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += "} ", h && (r += " else { "), r;
  };
});
var po = Q((Eh, ho) => {
  "use strict";
  ho.exports = function(e, t, s) {
    var r = " ", n = e.level, i = e.dataLevel, o = e.schema[t], u = e.schemaPath + e.util.getProperty(t), f = e.errSchemaPath + "/" + t, h = !e.opts.allErrors, m = "data" + (i || ""), x = "errs__" + n, c = e.util.copy(e);
    c.level++;
    var y = "valid" + c.level;
    if (e.opts.strictKeywords ? typeof o == "object" && Object.keys(o).length > 0 || o === false : e.util.schemaHasRules(o, e.RULES.all)) {
      c.schema = o, c.schemaPath = u, c.errSchemaPath = f, r += " var " + x + " = errors;  ";
      var _ = e.compositeRule;
      e.compositeRule = c.compositeRule = true, c.createErrors = false;
      var g;
      c.opts.allErrors && (g = c.opts.allErrors, c.opts.allErrors = false), r += " " + e.validate(c) + " ", c.createErrors = true, g && (c.opts.allErrors = g), e.compositeRule = c.compositeRule = _, r += " if (" + y + ") {   ";
      var P = P || [];
      P.push(r), r = "", e.createErrors !== false ? (r += " { keyword: 'not' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(f) + " , params: {} ", e.opts.messages !== false && (r += " , message: 'should NOT be valid' "), e.opts.verbose && (r += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), r += " } ") : r += " {} ";
      var O = r;
      r = P.pop(), !e.compositeRule && h ? e.async ? r += " throw new ValidationError([" + O + "]); " : r += " validate.errors = [" + O + "]; return false; " : r += " var err = " + O + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += " } else {  errors = " + x + "; if (vErrors !== null) { if (" + x + ") vErrors.length = " + x + "; else vErrors = null; } ", e.opts.allErrors && (r += " } ");
    } else r += "  var err =   ", e.createErrors !== false ? (r += " { keyword: 'not' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(f) + " , params: {} ", e.opts.messages !== false && (r += " , message: 'should NOT be valid' "), e.opts.verbose && (r += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), r += " } ") : r += " {} ", r += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", h && (r += " if (false) { ");
    return r;
  };
});
var vo = Q((Sh, mo) => {
  "use strict";
  mo.exports = function(e, t, s) {
    var r = " ", n = e.level, i = e.dataLevel, o = e.schema[t], u = e.schemaPath + e.util.getProperty(t), f = e.errSchemaPath + "/" + t, h = !e.opts.allErrors, m = "data" + (i || ""), x = "valid" + n, c = "errs__" + n, y = e.util.copy(e), _ = "";
    y.level++;
    var g = "valid" + y.level, P = y.baseId, O = "prevValid" + n, S = "passingSchemas" + n;
    r += "var " + c + " = errors , " + O + " = false , " + x + " = false , " + S + " = null; ";
    var w = e.compositeRule;
    e.compositeRule = y.compositeRule = true;
    var A = o;
    if (A) for (var D, V = -1, M = A.length - 1; V < M; ) D = A[V += 1], (e.opts.strictKeywords ? typeof D == "object" && Object.keys(D).length > 0 || D === false : e.util.schemaHasRules(D, e.RULES.all)) ? (y.schema = D, y.schemaPath = u + "[" + V + "]", y.errSchemaPath = f + "/" + V, r += "  " + e.validate(y) + " ", y.baseId = P) : r += " var " + g + " = true; ", V && (r += " if (" + g + " && " + O + ") { " + x + " = false; " + S + " = [" + S + ", " + V + "]; } else { ", _ += "}"), r += " if (" + g + ") { " + x + " = " + O + " = true; " + S + " = " + V + "; }";
    return e.compositeRule = y.compositeRule = w, r += "" + _ + "if (!" + x + ") {   var err =   ", e.createErrors !== false ? (r += " { keyword: 'oneOf' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(f) + " , params: { passingSchemas: " + S + " } ", e.opts.messages !== false && (r += " , message: 'should match exactly one schema in oneOf' "), e.opts.verbose && (r += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), r += " } ") : r += " {} ", r += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !e.compositeRule && h && (e.async ? r += " throw new ValidationError(vErrors); " : r += " validate.errors = vErrors; return false; "), r += "} else {  errors = " + c + "; if (vErrors !== null) { if (" + c + ") vErrors.length = " + c + "; else vErrors = null; }", e.opts.allErrors && (r += " } "), r;
  };
});
var yo = Q((Rh, go) => {
  "use strict";
  go.exports = function(e, t, s) {
    var r = " ", n = e.level, i = e.dataLevel, o = e.schema[t], u = e.schemaPath + e.util.getProperty(t), f = e.errSchemaPath + "/" + t, h = !e.opts.allErrors, m = "data" + (i || ""), x = e.opts.$data && o && o.$data, c;
    x ? (r += " var schema" + n + " = " + e.util.getData(o.$data, i, e.dataPathArr) + "; ", c = "schema" + n) : c = o;
    var y = x ? "(new RegExp(" + c + "))" : e.usePattern(o);
    r += "if ( ", x && (r += " (" + c + " !== undefined && typeof " + c + " != 'string') || "), r += " !" + y + ".test(" + m + ") ) {   ";
    var _ = _ || [];
    _.push(r), r = "", e.createErrors !== false ? (r += " { keyword: 'pattern' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(f) + " , params: { pattern:  ", x ? r += "" + c : r += "" + e.util.toQuotedString(o), r += "  } ", e.opts.messages !== false && (r += ` , message: 'should match pattern "`, x ? r += "' + " + c + " + '" : r += "" + e.util.escapeQuotes(o), r += `"' `), e.opts.verbose && (r += " , schema:  ", x ? r += "validate.schema" + u : r += "" + e.util.toQuotedString(o), r += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), r += " } ") : r += " {} ";
    var g = r;
    return r = _.pop(), !e.compositeRule && h ? e.async ? r += " throw new ValidationError([" + g + "]); " : r += " validate.errors = [" + g + "]; return false; " : r += " var err = " + g + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += "} ", h && (r += " else { "), r;
  };
});
var xo = Q((wh, _o) => {
  "use strict";
  _o.exports = function(e, t, s) {
    var r = " ", n = e.level, i = e.dataLevel, o = e.schema[t], u = e.schemaPath + e.util.getProperty(t), f = e.errSchemaPath + "/" + t, h = !e.opts.allErrors, m = "data" + (i || ""), x = "errs__" + n, c = e.util.copy(e), y = "";
    c.level++;
    var _ = "valid" + c.level, g = "key" + n, P = "idx" + n, O = c.dataLevel = e.dataLevel + 1, S = "data" + O, w = "dataProperties" + n, A = Object.keys(o || {}).filter(re), D = e.schema.patternProperties || {}, V = Object.keys(D).filter(re), M = e.schema.additionalProperties, k = A.length || V.length, U = M === false, q = typeof M == "object" && Object.keys(M).length, F = e.opts.removeAdditional, $ = U || q || F, I = e.opts.ownProperties, L = e.baseId, le = e.schema.required;
    if (le && !(e.opts.$data && le.$data) && le.length < e.opts.loopRequired) var Y = e.util.toHash(le);
    function re(Qe) {
      return Qe !== "__proto__";
    }
    if (r += "var " + x + " = errors;var " + _ + " = true;", I && (r += " var " + w + " = undefined;"), $) {
      if (I ? r += " " + w + " = " + w + " || Object.keys(" + m + "); for (var " + P + "=0; " + P + "<" + w + ".length; " + P + "++) { var " + g + " = " + w + "[" + P + "]; " : r += " for (var " + g + " in " + m + ") { ", k) {
        if (r += " var isAdditional" + n + " = !(false ", A.length) if (A.length > 8) r += " || validate.schema" + u + ".hasOwnProperty(" + g + ") ";
        else {
          var G = A;
          if (G) for (var Z, me = -1, Re = G.length - 1; me < Re; ) Z = G[me += 1], r += " || " + g + " == " + e.util.toQuotedString(Z) + " ";
        }
        if (V.length) {
          var Oe = V;
          if (Oe) for (var se, ye = -1, be = Oe.length - 1; ye < be; ) se = Oe[ye += 1], r += " || " + e.usePattern(se) + ".test(" + g + ") ";
        }
        r += " ); if (isAdditional" + n + ") { ";
      }
      if (F == "all") r += " delete " + m + "[" + g + "]; ";
      else {
        var $e = e.errorPath, mr = "' + " + g + " + '";
        if (e.opts._errorDataPathProperty && (e.errorPath = e.util.getPathExpr(e.errorPath, g, e.opts.jsonPointers)), U) if (F) r += " delete " + m + "[" + g + "]; ";
        else {
          r += " " + _ + " = false; ";
          var or = f;
          f = e.errSchemaPath + "/additionalProperties";
          var _e = _e || [];
          _e.push(r), r = "", e.createErrors !== false ? (r += " { keyword: 'additionalProperties' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(f) + " , params: { additionalProperty: '" + mr + "' } ", e.opts.messages !== false && (r += " , message: '", e.opts._errorDataPathProperty ? r += "is an invalid additional property" : r += "should NOT have additional properties", r += "' "), e.opts.verbose && (r += " , schema: false , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), r += " } ") : r += " {} ";
          var ve = r;
          r = _e.pop(), !e.compositeRule && h ? e.async ? r += " throw new ValidationError([" + ve + "]); " : r += " validate.errors = [" + ve + "]; return false; " : r += " var err = " + ve + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", f = or, h && (r += " break; ");
        }
        else if (q) if (F == "failing") {
          r += " var " + x + " = errors;  ";
          var Sr = e.compositeRule;
          e.compositeRule = c.compositeRule = true, c.schema = M, c.schemaPath = e.schemaPath + ".additionalProperties", c.errSchemaPath = e.errSchemaPath + "/additionalProperties", c.errorPath = e.opts._errorDataPathProperty ? e.errorPath : e.util.getPathExpr(e.errorPath, g, e.opts.jsonPointers);
          var we = m + "[" + g + "]";
          c.dataPathArr[O] = g;
          var oe = e.validate(c);
          c.baseId = L, e.util.varOccurences(oe, S) < 2 ? r += " " + e.util.varReplace(oe, S, we) + " " : r += " var " + S + " = " + we + "; " + oe + " ", r += " if (!" + _ + ") { errors = " + x + "; if (validate.errors !== null) { if (errors) validate.errors.length = errors; else validate.errors = null; } delete " + m + "[" + g + "]; }  ", e.compositeRule = c.compositeRule = Sr;
        } else {
          c.schema = M, c.schemaPath = e.schemaPath + ".additionalProperties", c.errSchemaPath = e.errSchemaPath + "/additionalProperties", c.errorPath = e.opts._errorDataPathProperty ? e.errorPath : e.util.getPathExpr(e.errorPath, g, e.opts.jsonPointers);
          var we = m + "[" + g + "]";
          c.dataPathArr[O] = g;
          var oe = e.validate(c);
          c.baseId = L, e.util.varOccurences(oe, S) < 2 ? r += " " + e.util.varReplace(oe, S, we) + " " : r += " var " + S + " = " + we + "; " + oe + " ", h && (r += " if (!" + _ + ") break; ");
        }
        e.errorPath = $e;
      }
      k && (r += " } "), r += " }  ", h && (r += " if (" + _ + ") { ", y += "}");
    }
    var vr = e.opts.useDefaults && !e.compositeRule;
    if (A.length) {
      var ir = A;
      if (ir) for (var Z, Rr = -1, wr = ir.length - 1; Rr < wr; ) {
        Z = ir[Rr += 1];
        var Ee = o[Z];
        if (e.opts.strictKeywords ? typeof Ee == "object" && Object.keys(Ee).length > 0 || Ee === false : e.util.schemaHasRules(Ee, e.RULES.all)) {
          var qe = e.util.getProperty(Z), we = m + qe, ke = vr && Ee.default !== void 0;
          c.schema = Ee, c.schemaPath = u + qe, c.errSchemaPath = f + "/" + e.util.escapeFragment(Z), c.errorPath = e.util.getPath(e.errorPath, Z, e.opts.jsonPointers), c.dataPathArr[O] = e.util.toQuotedString(Z);
          var oe = e.validate(c);
          if (c.baseId = L, e.util.varOccurences(oe, S) < 2) {
            oe = e.util.varReplace(oe, S, we);
            var Ae = we;
          } else {
            var Ae = S;
            r += " var " + S + " = " + we + "; ";
          }
          if (ke) r += " " + oe + " ";
          else {
            if (Y && Y[Z]) {
              r += " if ( " + Ae + " === undefined ", I && (r += " || ! Object.prototype.hasOwnProperty.call(" + m + ", '" + e.util.escapeQuotes(Z) + "') "), r += ") { " + _ + " = false; ";
              var $e = e.errorPath, or = f, Xe = e.util.escapeQuotes(Z);
              e.opts._errorDataPathProperty && (e.errorPath = e.util.getPath($e, Z, e.opts.jsonPointers)), f = e.errSchemaPath + "/required";
              var _e = _e || [];
              _e.push(r), r = "", e.createErrors !== false ? (r += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(f) + " , params: { missingProperty: '" + Xe + "' } ", e.opts.messages !== false && (r += " , message: '", e.opts._errorDataPathProperty ? r += "is a required property" : r += "should have required property \\'" + Xe + "\\'", r += "' "), e.opts.verbose && (r += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), r += " } ") : r += " {} ";
              var ve = r;
              r = _e.pop(), !e.compositeRule && h ? e.async ? r += " throw new ValidationError([" + ve + "]); " : r += " validate.errors = [" + ve + "]; return false; " : r += " var err = " + ve + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", f = or, e.errorPath = $e, r += " } else { ";
            } else h ? (r += " if ( " + Ae + " === undefined ", I && (r += " || ! Object.prototype.hasOwnProperty.call(" + m + ", '" + e.util.escapeQuotes(Z) + "') "), r += ") { " + _ + " = true; } else { ") : (r += " if (" + Ae + " !== undefined ", I && (r += " &&   Object.prototype.hasOwnProperty.call(" + m + ", '" + e.util.escapeQuotes(Z) + "') "), r += " ) { ");
            r += " " + oe + " } ";
          }
        }
        h && (r += " if (" + _ + ") { ", y += "}");
      }
    }
    if (V.length) {
      var Ne = V;
      if (Ne) for (var se, Et = -1, ca = Ne.length - 1; Et < ca; ) {
        se = Ne[Et += 1];
        var Ee = D[se];
        if (e.opts.strictKeywords ? typeof Ee == "object" && Object.keys(Ee).length > 0 || Ee === false : e.util.schemaHasRules(Ee, e.RULES.all)) {
          c.schema = Ee, c.schemaPath = e.schemaPath + ".patternProperties" + e.util.getProperty(se), c.errSchemaPath = e.errSchemaPath + "/patternProperties/" + e.util.escapeFragment(se), I ? r += " " + w + " = " + w + " || Object.keys(" + m + "); for (var " + P + "=0; " + P + "<" + w + ".length; " + P + "++) { var " + g + " = " + w + "[" + P + "]; " : r += " for (var " + g + " in " + m + ") { ", r += " if (" + e.usePattern(se) + ".test(" + g + ")) { ", c.errorPath = e.util.getPathExpr(e.errorPath, g, e.opts.jsonPointers);
          var we = m + "[" + g + "]";
          c.dataPathArr[O] = g;
          var oe = e.validate(c);
          c.baseId = L, e.util.varOccurences(oe, S) < 2 ? r += " " + e.util.varReplace(oe, S, we) + " " : r += " var " + S + " = " + we + "; " + oe + " ", h && (r += " if (!" + _ + ") break; "), r += " } ", h && (r += " else " + _ + " = true; "), r += " }  ", h && (r += " if (" + _ + ") { ", y += "}");
        }
      }
    }
    return h && (r += " " + y + " if (" + x + " == errors) {"), r;
  };
});
var bo = Q((Th, Po) => {
  "use strict";
  Po.exports = function(e, t, s) {
    var r = " ", n = e.level, i = e.dataLevel, o = e.schema[t], u = e.schemaPath + e.util.getProperty(t), f = e.errSchemaPath + "/" + t, h = !e.opts.allErrors, m = "data" + (i || ""), x = "errs__" + n, c = e.util.copy(e), y = "";
    c.level++;
    var _ = "valid" + c.level;
    if (r += "var " + x + " = errors;", e.opts.strictKeywords ? typeof o == "object" && Object.keys(o).length > 0 || o === false : e.util.schemaHasRules(o, e.RULES.all)) {
      c.schema = o, c.schemaPath = u, c.errSchemaPath = f;
      var g = "key" + n, P = "idx" + n, O = "i" + n, S = "' + " + g + " + '", w = c.dataLevel = e.dataLevel + 1, A = "data" + w, D = "dataProperties" + n, V = e.opts.ownProperties, M = e.baseId;
      V && (r += " var " + D + " = undefined; "), V ? r += " " + D + " = " + D + " || Object.keys(" + m + "); for (var " + P + "=0; " + P + "<" + D + ".length; " + P + "++) { var " + g + " = " + D + "[" + P + "]; " : r += " for (var " + g + " in " + m + ") { ", r += " var startErrs" + n + " = errors; ";
      var k = g, U = e.compositeRule;
      e.compositeRule = c.compositeRule = true;
      var q = e.validate(c);
      c.baseId = M, e.util.varOccurences(q, A) < 2 ? r += " " + e.util.varReplace(q, A, k) + " " : r += " var " + A + " = " + k + "; " + q + " ", e.compositeRule = c.compositeRule = U, r += " if (!" + _ + ") { for (var " + O + "=startErrs" + n + "; " + O + "<errors; " + O + "++) { vErrors[" + O + "].propertyName = " + g + "; }   var err =   ", e.createErrors !== false ? (r += " { keyword: 'propertyNames' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(f) + " , params: { propertyName: '" + S + "' } ", e.opts.messages !== false && (r += " , message: 'property name \\'" + S + "\\' is invalid' "), e.opts.verbose && (r += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), r += " } ") : r += " {} ", r += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !e.compositeRule && h && (e.async ? r += " throw new ValidationError(vErrors); " : r += " validate.errors = vErrors; return false; "), h && (r += " break; "), r += " } }";
    }
    return h && (r += " " + y + " if (" + x + " == errors) {"), r;
  };
});
var So = Q((Oh, Eo) => {
  "use strict";
  Eo.exports = function(e, t, s) {
    var r = " ", n = e.level, i = e.dataLevel, o = e.schema[t], u = e.schemaPath + e.util.getProperty(t), f = e.errSchemaPath + "/" + t, h = !e.opts.allErrors, m = "data" + (i || ""), x = "valid" + n, c = e.opts.$data && o && o.$data, y;
    c ? (r += " var schema" + n + " = " + e.util.getData(o.$data, i, e.dataPathArr) + "; ", y = "schema" + n) : y = o;
    var _ = "schema" + n;
    if (!c) if (o.length < e.opts.loopRequired && e.schema.properties && Object.keys(e.schema.properties).length) {
      var g = [], P = o;
      if (P) for (var O, S = -1, w = P.length - 1; S < w; ) {
        O = P[S += 1];
        var A = e.schema.properties[O];
        A && (e.opts.strictKeywords ? typeof A == "object" && Object.keys(A).length > 0 || A === false : e.util.schemaHasRules(A, e.RULES.all)) || (g[g.length] = O);
      }
    } else var g = o;
    if (c || g.length) {
      var D = e.errorPath, V = c || g.length >= e.opts.loopRequired, M = e.opts.ownProperties;
      if (h) if (r += " var missing" + n + "; ", V) {
        c || (r += " var " + _ + " = validate.schema" + u + "; ");
        var k = "i" + n, U = "schema" + n + "[" + k + "]", q = "' + " + U + " + '";
        e.opts._errorDataPathProperty && (e.errorPath = e.util.getPathExpr(D, U, e.opts.jsonPointers)), r += " var " + x + " = true; ", c && (r += " if (schema" + n + " === undefined) " + x + " = true; else if (!Array.isArray(schema" + n + ")) " + x + " = false; else {"), r += " for (var " + k + " = 0; " + k + " < " + _ + ".length; " + k + "++) { " + x + " = " + m + "[" + _ + "[" + k + "]] !== undefined ", M && (r += " &&   Object.prototype.hasOwnProperty.call(" + m + ", " + _ + "[" + k + "]) "), r += "; if (!" + x + ") break; } ", c && (r += "  }  "), r += "  if (!" + x + ") {   ";
        var F = F || [];
        F.push(r), r = "", e.createErrors !== false ? (r += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(f) + " , params: { missingProperty: '" + q + "' } ", e.opts.messages !== false && (r += " , message: '", e.opts._errorDataPathProperty ? r += "is a required property" : r += "should have required property \\'" + q + "\\'", r += "' "), e.opts.verbose && (r += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), r += " } ") : r += " {} ";
        var $ = r;
        r = F.pop(), !e.compositeRule && h ? e.async ? r += " throw new ValidationError([" + $ + "]); " : r += " validate.errors = [" + $ + "]; return false; " : r += " var err = " + $ + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += " } else { ";
      } else {
        r += " if ( ";
        var I = g;
        if (I) for (var L, k = -1, le = I.length - 1; k < le; ) {
          L = I[k += 1], k && (r += " || ");
          var Y = e.util.getProperty(L), re = m + Y;
          r += " ( ( " + re + " === undefined ", M && (r += " || ! Object.prototype.hasOwnProperty.call(" + m + ", '" + e.util.escapeQuotes(L) + "') "), r += ") && (missing" + n + " = " + e.util.toQuotedString(e.opts.jsonPointers ? L : Y) + ") ) ";
        }
        r += ") {  ";
        var U = "missing" + n, q = "' + " + U + " + '";
        e.opts._errorDataPathProperty && (e.errorPath = e.opts.jsonPointers ? e.util.getPathExpr(D, U, true) : D + " + " + U);
        var F = F || [];
        F.push(r), r = "", e.createErrors !== false ? (r += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(f) + " , params: { missingProperty: '" + q + "' } ", e.opts.messages !== false && (r += " , message: '", e.opts._errorDataPathProperty ? r += "is a required property" : r += "should have required property \\'" + q + "\\'", r += "' "), e.opts.verbose && (r += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), r += " } ") : r += " {} ";
        var $ = r;
        r = F.pop(), !e.compositeRule && h ? e.async ? r += " throw new ValidationError([" + $ + "]); " : r += " validate.errors = [" + $ + "]; return false; " : r += " var err = " + $ + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += " } else { ";
      }
      else if (V) {
        c || (r += " var " + _ + " = validate.schema" + u + "; ");
        var k = "i" + n, U = "schema" + n + "[" + k + "]", q = "' + " + U + " + '";
        e.opts._errorDataPathProperty && (e.errorPath = e.util.getPathExpr(D, U, e.opts.jsonPointers)), c && (r += " if (" + _ + " && !Array.isArray(" + _ + ")) {  var err =   ", e.createErrors !== false ? (r += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(f) + " , params: { missingProperty: '" + q + "' } ", e.opts.messages !== false && (r += " , message: '", e.opts._errorDataPathProperty ? r += "is a required property" : r += "should have required property \\'" + q + "\\'", r += "' "), e.opts.verbose && (r += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), r += " } ") : r += " {} ", r += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } else if (" + _ + " !== undefined) { "), r += " for (var " + k + " = 0; " + k + " < " + _ + ".length; " + k + "++) { if (" + m + "[" + _ + "[" + k + "]] === undefined ", M && (r += " || ! Object.prototype.hasOwnProperty.call(" + m + ", " + _ + "[" + k + "]) "), r += ") {  var err =   ", e.createErrors !== false ? (r += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(f) + " , params: { missingProperty: '" + q + "' } ", e.opts.messages !== false && (r += " , message: '", e.opts._errorDataPathProperty ? r += "is a required property" : r += "should have required property \\'" + q + "\\'", r += "' "), e.opts.verbose && (r += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), r += " } ") : r += " {} ", r += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } } ", c && (r += "  }  ");
      } else {
        var G = g;
        if (G) for (var L, Z = -1, me = G.length - 1; Z < me; ) {
          L = G[Z += 1];
          var Y = e.util.getProperty(L), q = e.util.escapeQuotes(L), re = m + Y;
          e.opts._errorDataPathProperty && (e.errorPath = e.util.getPath(D, L, e.opts.jsonPointers)), r += " if ( " + re + " === undefined ", M && (r += " || ! Object.prototype.hasOwnProperty.call(" + m + ", '" + e.util.escapeQuotes(L) + "') "), r += ") {  var err =   ", e.createErrors !== false ? (r += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(f) + " , params: { missingProperty: '" + q + "' } ", e.opts.messages !== false && (r += " , message: '", e.opts._errorDataPathProperty ? r += "is a required property" : r += "should have required property \\'" + q + "\\'", r += "' "), e.opts.verbose && (r += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), r += " } ") : r += " {} ", r += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ";
        }
      }
      e.errorPath = D;
    } else h && (r += " if (true) {");
    return r;
  };
});
var wo = Q(($h, Ro) => {
  "use strict";
  Ro.exports = function(e, t, s) {
    var r = " ", n = e.level, i = e.dataLevel, o = e.schema[t], u = e.schemaPath + e.util.getProperty(t), f = e.errSchemaPath + "/" + t, h = !e.opts.allErrors, m = "data" + (i || ""), x = "valid" + n, c = e.opts.$data && o && o.$data, y;
    if (c ? (r += " var schema" + n + " = " + e.util.getData(o.$data, i, e.dataPathArr) + "; ", y = "schema" + n) : y = o, (o || c) && e.opts.uniqueItems !== false) {
      c && (r += " var " + x + "; if (" + y + " === false || " + y + " === undefined) " + x + " = true; else if (typeof " + y + " != 'boolean') " + x + " = false; else { "), r += " var i = " + m + ".length , " + x + " = true , j; if (i > 1) { ";
      var _ = e.schema.items && e.schema.items.type, g = Array.isArray(_);
      if (!_ || _ == "object" || _ == "array" || g && (_.indexOf("object") >= 0 || _.indexOf("array") >= 0)) r += " outer: for (;i--;) { for (j = i; j--;) { if (equal(" + m + "[i], " + m + "[j])) { " + x + " = false; break outer; } } } ";
      else {
        r += " var itemIndices = {}, item; for (;i--;) { var item = " + m + "[i]; ";
        var P = "checkDataType" + (g ? "s" : "");
        r += " if (" + e.util[P](_, "item", e.opts.strictNumbers, true) + ") continue; ", g && (r += ` if (typeof item == 'string') item = '"' + item; `), r += " if (typeof itemIndices[item] == 'number') { " + x + " = false; j = itemIndices[item]; break; } itemIndices[item] = i; } ";
      }
      r += " } ", c && (r += "  }  "), r += " if (!" + x + ") {   ";
      var O = O || [];
      O.push(r), r = "", e.createErrors !== false ? (r += " { keyword: 'uniqueItems' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(f) + " , params: { i: i, j: j } ", e.opts.messages !== false && (r += " , message: 'should NOT have duplicate items (items ## ' + j + ' and ' + i + ' are identical)' "), e.opts.verbose && (r += " , schema:  ", c ? r += "validate.schema" + u : r += "" + o, r += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), r += " } ") : r += " {} ";
      var S = r;
      r = O.pop(), !e.compositeRule && h ? e.async ? r += " throw new ValidationError([" + S + "]); " : r += " validate.errors = [" + S + "]; return false; " : r += " var err = " + S + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += " } ", h && (r += " else { ");
    } else h && (r += " if (true) { ");
    return r;
  };
});
var Oo = Q((Ah, To) => {
  "use strict";
  To.exports = { $ref: qn(), allOf: Un(), anyOf: Vn(), $comment: Hn(), const: Qn(), contains: Kn(), dependencies: Gn(), enum: Xn(), format: ro(), if: ao(), items: no(), maximum: Ya(), minimum: Ya(), maxItems: Xa(), minItems: Xa(), maxLength: es(), minLength: es(), maxProperties: rs(), minProperties: rs(), multipleOf: fo(), not: po(), oneOf: vo(), pattern: yo(), properties: xo(), propertyNames: bo(), required: So(), uniqueItems: wo(), validate: Wa() };
});
var Do = Q((Dh, Ao) => {
  "use strict";
  var $o = Oo(), ts = Br().toHash;
  Ao.exports = function() {
    var e = [{ type: "number", rules: [{ maximum: ["exclusiveMaximum"] }, { minimum: ["exclusiveMinimum"] }, "multipleOf", "format"] }, { type: "string", rules: ["maxLength", "minLength", "pattern", "format"] }, { type: "array", rules: ["maxItems", "minItems", "items", "contains", "uniqueItems"] }, { type: "object", rules: ["maxProperties", "minProperties", "required", "dependencies", "propertyNames", { properties: ["additionalProperties", "patternProperties"] }] }, { rules: ["$ref", "const", "enum", "not", "anyOf", "oneOf", "allOf", "if"] }], t = ["type", "$comment"], s = ["$schema", "$id", "id", "$data", "$async", "title", "description", "default", "definitions", "examples", "readOnly", "writeOnly", "contentMediaType", "contentEncoding", "additionalItems", "then", "else"], r = ["number", "integer", "string", "array", "object", "boolean", "null"];
    return e.all = ts(t), e.types = ts(r), e.forEach(function(n) {
      n.rules = n.rules.map(function(i) {
        var o;
        if (typeof i == "object") {
          var u = Object.keys(i)[0];
          o = i[u], i = u, o.forEach(function(h) {
            t.push(h), e.all[h] = true;
          });
        }
        t.push(i);
        var f = e.all[i] = { keyword: i, code: $o[i], implements: o };
        return f;
      }), e.all.$comment = { keyword: "$comment", code: $o.$comment }, n.type && (e.types[n.type] = n);
    }), e.keywords = ts(t.concat(s)), e.custom = {}, e;
  };
});
var Co = Q((kh, Io) => {
  "use strict";
  var ko = ["multipleOf", "maximum", "exclusiveMaximum", "minimum", "exclusiveMinimum", "maxLength", "minLength", "pattern", "additionalItems", "maxItems", "minItems", "uniqueItems", "maxProperties", "minProperties", "required", "additionalProperties", "enum", "format", "const"];
  Io.exports = function(a16, e) {
    for (var t = 0; t < e.length; t++) {
      a16 = JSON.parse(JSON.stringify(a16));
      var s = e[t].split("/"), r = a16, n;
      for (n = 1; n < s.length; n++) r = r[s[n]];
      for (n = 0; n < ko.length; n++) {
        var i = ko[n], o = r[i];
        o && (r[i] = { anyOf: [o, { $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#" }] });
      }
    }
    return a16;
  };
});
var Fo = Q((Ih, No) => {
  "use strict";
  var cd = Wt().MissingRef;
  No.exports = jo;
  function jo(a16, e, t) {
    var s = this;
    if (typeof this._opts.loadSchema != "function") throw new Error("options.loadSchema should be a function");
    typeof e == "function" && (t = e, e = void 0);
    var r = n(a16).then(function() {
      var o = s._addSchema(a16, void 0, e);
      return o.validate || i(o);
    });
    return t && r.then(function(o) {
      t(null, o);
    }, t), r;
    function n(o) {
      var u = o.$schema;
      return u && !s.getSchema(u) ? jo.call(s, { $ref: u }, true) : Promise.resolve();
    }
    function i(o) {
      try {
        return s._compile(o);
      } catch (f) {
        if (f instanceof cd) return u(f);
        throw f;
      }
      function u(f) {
        var h = f.missingSchema;
        if (c(h)) throw new Error("Schema " + h + " is loaded but " + f.missingRef + " cannot be resolved");
        var m = s._loadingSchemas[h];
        return m || (m = s._loadingSchemas[h] = s._opts.loadSchema(h), m.then(x, x)), m.then(function(y) {
          if (!c(h)) return n(y).then(function() {
            c(h) || s.addSchema(y, h, void 0, e);
          });
        }).then(function() {
          return i(o);
        });
        function x() {
          delete s._loadingSchemas[h];
        }
        function c(y) {
          return s._refs[y] || s._schemas[y];
        }
      }
    }
  }
});
var qo = Q((Ch, Lo) => {
  "use strict";
  Lo.exports = function(e, t, s) {
    var r = " ", n = e.level, i = e.dataLevel, o = e.schema[t], u = e.schemaPath + e.util.getProperty(t), f = e.errSchemaPath + "/" + t, h = !e.opts.allErrors, m, x = "data" + (i || ""), c = "valid" + n, y = "errs__" + n, _ = e.opts.$data && o && o.$data, g;
    _ ? (r += " var schema" + n + " = " + e.util.getData(o.$data, i, e.dataPathArr) + "; ", g = "schema" + n) : g = o;
    var P = this, O = "definition" + n, S = P.definition, w = "", A, D, V, M, k;
    if (_ && S.$data) {
      k = "keywordValidate" + n;
      var U = S.validateSchema;
      r += " var " + O + " = RULES.custom['" + t + "'].definition; var " + k + " = " + O + ".validate;";
    } else {
      if (M = e.useCustomRule(P, o, e.schema, e), !M) return;
      g = "validate.schema" + u, k = M.code, A = S.compile, D = S.inline, V = S.macro;
    }
    var q = k + ".errors", F = "i" + n, $ = "ruleErr" + n, I = S.async;
    if (I && !e.async) throw new Error("async keyword in sync schema");
    if (D || V || (r += "" + q + " = null;"), r += "var " + y + " = errors;var " + c + ";", _ && S.$data && (w += "}", r += " if (" + g + " === undefined) { " + c + " = true; } else { ", U && (w += "}", r += " " + c + " = " + O + ".validateSchema(" + g + "); if (" + c + ") { ")), D) S.statements ? r += " " + M.validate + " " : r += " " + c + " = " + M.validate + "; ";
    else if (V) {
      var L = e.util.copy(e), w = "";
      L.level++;
      var le = "valid" + L.level;
      L.schema = M.validate, L.schemaPath = "";
      var Y = e.compositeRule;
      e.compositeRule = L.compositeRule = true;
      var re = e.validate(L).replace(/validate\.schema/g, k);
      e.compositeRule = L.compositeRule = Y, r += " " + re;
    } else {
      var G = G || [];
      G.push(r), r = "", r += "  " + k + ".call( ", e.opts.passContext ? r += "this" : r += "self", A || S.schema === false ? r += " , " + x + " " : r += " , " + g + " , " + x + " , validate.schema" + e.schemaPath + " ", r += " , (dataPath || '')", e.errorPath != '""' && (r += " + " + e.errorPath);
      var Z = i ? "data" + (i - 1 || "") : "parentData", me = i ? e.dataPathArr[i] : "parentDataProperty";
      r += " , " + Z + " , " + me + " , rootData )  ";
      var Re = r;
      r = G.pop(), S.errors === false ? (r += " " + c + " = ", I && (r += "await "), r += "" + Re + "; ") : I ? (q = "customErrors" + n, r += " var " + q + " = null; try { " + c + " = await " + Re + "; } catch (e) { " + c + " = false; if (e instanceof ValidationError) " + q + " = e.errors; else throw e; } ") : r += " " + q + " = null; " + c + " = " + Re + "; ";
    }
    if (S.modifying && (r += " if (" + Z + ") " + x + " = " + Z + "[" + me + "];"), r += "" + w, S.valid) h && (r += " if (true) { ");
    else {
      r += " if ( ", S.valid === void 0 ? (r += " !", V ? r += "" + le : r += "" + c) : r += " " + !S.valid + " ", r += ") { ", m = P.keyword;
      var G = G || [];
      G.push(r), r = "";
      var G = G || [];
      G.push(r), r = "", e.createErrors !== false ? (r += " { keyword: '" + (m || "custom") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(f) + " , params: { keyword: '" + P.keyword + "' } ", e.opts.messages !== false && (r += ` , message: 'should pass "` + P.keyword + `" keyword validation' `), e.opts.verbose && (r += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + x + " "), r += " } ") : r += " {} ";
      var Oe = r;
      r = G.pop(), !e.compositeRule && h ? e.async ? r += " throw new ValidationError([" + Oe + "]); " : r += " validate.errors = [" + Oe + "]; return false; " : r += " var err = " + Oe + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
      var se = r;
      r = G.pop(), D ? S.errors ? S.errors != "full" && (r += "  for (var " + F + "=" + y + "; " + F + "<errors; " + F + "++) { var " + $ + " = vErrors[" + F + "]; if (" + $ + ".dataPath === undefined) " + $ + ".dataPath = (dataPath || '') + " + e.errorPath + "; if (" + $ + ".schemaPath === undefined) { " + $ + '.schemaPath = "' + f + '"; } ', e.opts.verbose && (r += " " + $ + ".schema = " + g + "; " + $ + ".data = " + x + "; "), r += " } ") : S.errors === false ? r += " " + se + " " : (r += " if (" + y + " == errors) { " + se + " } else {  for (var " + F + "=" + y + "; " + F + "<errors; " + F + "++) { var " + $ + " = vErrors[" + F + "]; if (" + $ + ".dataPath === undefined) " + $ + ".dataPath = (dataPath || '') + " + e.errorPath + "; if (" + $ + ".schemaPath === undefined) { " + $ + '.schemaPath = "' + f + '"; } ', e.opts.verbose && (r += " " + $ + ".schema = " + g + "; " + $ + ".data = " + x + "; "), r += " } } ") : V ? (r += "   var err =   ", e.createErrors !== false ? (r += " { keyword: '" + (m || "custom") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(f) + " , params: { keyword: '" + P.keyword + "' } ", e.opts.messages !== false && (r += ` , message: 'should pass "` + P.keyword + `" keyword validation' `), e.opts.verbose && (r += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + x + " "), r += " } ") : r += " {} ", r += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !e.compositeRule && h && (e.async ? r += " throw new ValidationError(vErrors); " : r += " validate.errors = vErrors; return false; ")) : S.errors === false ? r += " " + se + " " : (r += " if (Array.isArray(" + q + ")) { if (vErrors === null) vErrors = " + q + "; else vErrors = vErrors.concat(" + q + "); errors = vErrors.length;  for (var " + F + "=" + y + "; " + F + "<errors; " + F + "++) { var " + $ + " = vErrors[" + F + "]; if (" + $ + ".dataPath === undefined) " + $ + ".dataPath = (dataPath || '') + " + e.errorPath + ";  " + $ + '.schemaPath = "' + f + '";  ', e.opts.verbose && (r += " " + $ + ".schema = " + g + "; " + $ + ".data = " + x + "; "), r += " } } else { " + se + " } "), r += " } ", h && (r += " else { ");
    }
    return r;
  };
});
var as = Q((jh, dd) => {
  dd.exports = { $schema: "http://json-schema.org/draft-07/schema#", $id: "http://json-schema.org/draft-07/schema#", title: "Core schema meta-schema", definitions: { schemaArray: { type: "array", minItems: 1, items: { $ref: "#" } }, nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { allOf: [{ $ref: "#/definitions/nonNegativeInteger" }, { default: 0 }] }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: true, default: [] } }, type: ["object", "boolean"], properties: { $id: { type: "string", format: "uri-reference" }, $schema: { type: "string", format: "uri" }, $ref: { type: "string", format: "uri-reference" }, $comment: { type: "string" }, title: { type: "string" }, description: { type: "string" }, default: true, readOnly: { type: "boolean", default: false }, examples: { type: "array", items: true }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/definitions/nonNegativeInteger" }, minLength: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, additionalItems: { $ref: "#" }, items: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/schemaArray" }], default: true }, maxItems: { $ref: "#/definitions/nonNegativeInteger" }, minItems: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: false }, contains: { $ref: "#" }, maxProperties: { $ref: "#/definitions/nonNegativeInteger" }, minProperties: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, required: { $ref: "#/definitions/stringArray" }, additionalProperties: { $ref: "#" }, definitions: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, properties: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $ref: "#" }, propertyNames: { format: "regex" }, default: {} }, dependencies: { type: "object", additionalProperties: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/stringArray" }] } }, propertyNames: { $ref: "#" }, const: true, enum: { type: "array", items: true, minItems: 1, uniqueItems: true }, type: { anyOf: [{ $ref: "#/definitions/simpleTypes" }, { type: "array", items: { $ref: "#/definitions/simpleTypes" }, minItems: 1, uniqueItems: true }] }, format: { type: "string" }, contentMediaType: { type: "string" }, contentEncoding: { type: "string" }, if: { $ref: "#" }, then: { $ref: "#" }, else: { $ref: "#" }, allOf: { $ref: "#/definitions/schemaArray" }, anyOf: { $ref: "#/definitions/schemaArray" }, oneOf: { $ref: "#/definitions/schemaArray" }, not: { $ref: "#" } }, default: true };
});
var zo = Q((Nh, Uo) => {
  "use strict";
  var Mo = as();
  Uo.exports = { $id: "https://github.com/ajv-validator/ajv/blob/master/lib/definition_schema.js", definitions: { simpleTypes: Mo.definitions.simpleTypes }, type: "object", dependencies: { schema: ["validate"], $data: ["validate"], statements: ["inline"], valid: { not: { required: ["macro"] } } }, properties: { type: Mo.properties.type, schema: { type: "boolean" }, statements: { type: "boolean" }, dependencies: { type: "array", items: { type: "string" } }, metaSchema: { type: "object" }, modifying: { type: "boolean" }, valid: { type: "boolean" }, $data: { type: "boolean" }, async: { type: "boolean" }, errors: { anyOf: [{ type: "boolean" }, { const: "full" }] } } };
});
var Zo = Q((Fh, Vo) => {
  "use strict";
  var fd = /^[a-z_$][a-z0-9_$-]*$/i, hd = qo(), pd = zo();
  Vo.exports = { add: md, get: vd, remove: gd, validate: ss };
  function md(a16, e) {
    var t = this.RULES;
    if (t.keywords[a16]) throw new Error("Keyword " + a16 + " is already defined");
    if (!fd.test(a16)) throw new Error("Keyword " + a16 + " is not a valid identifier");
    if (e) {
      this.validateKeyword(e, true);
      var s = e.type;
      if (Array.isArray(s)) for (var r = 0; r < s.length; r++) i(a16, s[r], e);
      else i(a16, s, e);
      var n = e.metaSchema;
      n && (e.$data && this._opts.$data && (n = { anyOf: [n, { $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#" }] }), e.validateSchema = this.compile(n, true));
    }
    t.keywords[a16] = t.all[a16] = true;
    function i(o, u, f) {
      for (var h, m = 0; m < t.length; m++) {
        var x = t[m];
        if (x.type == u) {
          h = x;
          break;
        }
      }
      h || (h = { type: u, rules: [] }, t.push(h));
      var c = { keyword: o, definition: f, custom: true, code: hd, implements: f.implements };
      h.rules.push(c), t.custom[o] = c;
    }
    return this;
  }
  function vd(a16) {
    var e = this.RULES.custom[a16];
    return e ? e.definition : this.RULES.keywords[a16] || false;
  }
  function gd(a16) {
    var e = this.RULES;
    delete e.keywords[a16], delete e.all[a16], delete e.custom[a16];
    for (var t = 0; t < e.length; t++) for (var s = e[t].rules, r = 0; r < s.length; r++) if (s[r].keyword == a16) {
      s.splice(r, 1);
      break;
    }
    return this;
  }
  function ss(a16, e) {
    ss.errors = null;
    var t = this._validateKeyword = this._validateKeyword || this.compile(pd, true);
    if (t(a16)) return true;
    if (ss.errors = t.errors, e) throw new Error("custom keyword definition is invalid: " + this.errorsText(t.errors));
    return false;
  }
});
var Ho = Q((Lh, yd) => {
  yd.exports = { $schema: "http://json-schema.org/draft-07/schema#", $id: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", description: "Meta-schema for $data reference (JSON Schema extension proposal)", type: "object", required: ["$data"], properties: { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, additionalProperties: false };
});
var ri = Q((qh, ei) => {
  "use strict";
  var Qo = En(), Qr = Kt(), _d = Rn(), Jo = Va(), xd = Ka(), Pd = Fn(), bd = Do(), Ko = Co(), Wo = Br();
  ei.exports = ge;
  ge.prototype.validate = Sd;
  ge.prototype.compile = Rd;
  ge.prototype.addSchema = wd;
  ge.prototype.addMetaSchema = Td;
  ge.prototype.validateSchema = Od;
  ge.prototype.getSchema = Ad;
  ge.prototype.removeSchema = kd;
  ge.prototype.addFormat = Md;
  ge.prototype.errorsText = qd;
  ge.prototype._addSchema = Id;
  ge.prototype._compile = Cd;
  ge.prototype.compileAsync = Fo();
  var sa = Zo();
  ge.prototype.addKeyword = sa.add;
  ge.prototype.getKeyword = sa.get;
  ge.prototype.removeKeyword = sa.remove;
  ge.prototype.validateKeyword = sa.validate;
  var Go = Wt();
  ge.ValidationError = Go.Validation;
  ge.MissingRefError = Go.MissingRef;
  ge.$dataMetaSchema = Ko;
  var aa = "http://json-schema.org/draft-07/schema", Bo = ["removeAdditional", "useDefaults", "coerceTypes", "strictDefaults"], Ed = ["/properties"];
  function ge(a16) {
    if (!(this instanceof ge)) return new ge(a16);
    a16 = this._opts = Wo.copy(a16) || {}, Bd(this), this._schemas = {}, this._refs = {}, this._fragments = {}, this._formats = Pd(a16.format), this._cache = a16.cache || new _d(), this._loadingSchemas = {}, this._compilations = [], this.RULES = bd(), this._getId = jd(a16), a16.loopRequired = a16.loopRequired || 1 / 0, a16.errorDataPath == "property" && (a16._errorDataPathProperty = true), a16.serialize === void 0 && (a16.serialize = xd), this._metaOpts = Hd(this), a16.formats && Vd(this), a16.keywords && Zd(this), Ud(this), typeof a16.meta == "object" && this.addMetaSchema(a16.meta), a16.nullable && this.addKeyword("nullable", { metaSchema: { type: "boolean" } }), zd(this);
  }
  function Sd(a16, e) {
    var t;
    if (typeof a16 == "string") {
      if (t = this.getSchema(a16), !t) throw new Error('no schema with key or ref "' + a16 + '"');
    } else {
      var s = this._addSchema(a16);
      t = s.validate || this._compile(s);
    }
    var r = t(e);
    return t.$async !== true && (this.errors = t.errors), r;
  }
  function Rd(a16, e) {
    var t = this._addSchema(a16, void 0, e);
    return t.validate || this._compile(t);
  }
  function wd(a16, e, t, s) {
    if (Array.isArray(a16)) {
      for (var r = 0; r < a16.length; r++) this.addSchema(a16[r], void 0, t, s);
      return this;
    }
    var n = this._getId(a16);
    if (n !== void 0 && typeof n != "string") throw new Error("schema id must be string");
    return e = Qr.normalizeId(e || n), Xo(this, e), this._schemas[e] = this._addSchema(a16, t, s, true), this;
  }
  function Td(a16, e, t) {
    return this.addSchema(a16, e, t, true), this;
  }
  function Od(a16, e) {
    var t = a16.$schema;
    if (t !== void 0 && typeof t != "string") throw new Error("$schema must be a string");
    if (t = t || this._opts.defaultMeta || $d(this), !t) return this.logger.warn("meta-schema not available"), this.errors = null, true;
    var s = this.validate(t, a16);
    if (!s && e) {
      var r = "schema is invalid: " + this.errorsText();
      if (this._opts.validateSchema == "log") this.logger.error(r);
      else throw new Error(r);
    }
    return s;
  }
  function $d(a16) {
    var e = a16._opts.meta;
    return a16._opts.defaultMeta = typeof e == "object" ? a16._getId(e) || e : a16.getSchema(aa) ? aa : void 0, a16._opts.defaultMeta;
  }
  function Ad(a16) {
    var e = Yo(this, a16);
    switch (typeof e) {
      case "object":
        return e.validate || this._compile(e);
      case "string":
        return this.getSchema(e);
      case "undefined":
        return Dd(this, a16);
    }
  }
  function Dd(a16, e) {
    var t = Qr.schema.call(a16, { schema: {} }, e);
    if (t) {
      var s = t.schema, r = t.root, n = t.baseId, i = Qo.call(a16, s, r, void 0, n);
      return a16._fragments[e] = new Jo({ ref: e, fragment: true, schema: s, root: r, baseId: n, validate: i }), i;
    }
  }
  function Yo(a16, e) {
    return e = Qr.normalizeId(e), a16._schemas[e] || a16._refs[e] || a16._fragments[e];
  }
  function kd(a16) {
    if (a16 instanceof RegExp) return ta(this, this._schemas, a16), ta(this, this._refs, a16), this;
    switch (typeof a16) {
      case "undefined":
        return ta(this, this._schemas), ta(this, this._refs), this._cache.clear(), this;
      case "string":
        var e = Yo(this, a16);
        return e && this._cache.del(e.cacheKey), delete this._schemas[a16], delete this._refs[a16], this;
      case "object":
        var t = this._opts.serialize, s = t ? t(a16) : a16;
        this._cache.del(s);
        var r = this._getId(a16);
        r && (r = Qr.normalizeId(r), delete this._schemas[r], delete this._refs[r]);
    }
    return this;
  }
  function ta(a16, e, t) {
    for (var s in e) {
      var r = e[s];
      !r.meta && (!t || t.test(s)) && (a16._cache.del(r.cacheKey), delete e[s]);
    }
  }
  function Id(a16, e, t, s) {
    if (typeof a16 != "object" && typeof a16 != "boolean") throw new Error("schema should be object or boolean");
    var r = this._opts.serialize, n = r ? r(a16) : a16, i = this._cache.get(n);
    if (i) return i;
    s = s || this._opts.addUsedSchema !== false;
    var o = Qr.normalizeId(this._getId(a16));
    o && s && Xo(this, o);
    var u = this._opts.validateSchema !== false && !e, f;
    u && !(f = o && o == Qr.normalizeId(a16.$schema)) && this.validateSchema(a16, true);
    var h = Qr.ids.call(this, a16), m = new Jo({ id: o, schema: a16, localRefs: h, cacheKey: n, meta: t });
    return o[0] != "#" && s && (this._refs[o] = m), this._cache.put(n, m), u && f && this.validateSchema(a16, true), m;
  }
  function Cd(a16, e) {
    if (a16.compiling) return a16.validate = r, r.schema = a16.schema, r.errors = null, r.root = e || r, a16.schema.$async === true && (r.$async = true), r;
    a16.compiling = true;
    var t;
    a16.meta && (t = this._opts, this._opts = this._metaOpts);
    var s;
    try {
      s = Qo.call(this, a16.schema, e, a16.localRefs);
    } catch (n) {
      throw delete a16.validate, n;
    } finally {
      a16.compiling = false, a16.meta && (this._opts = t);
    }
    return a16.validate = s, a16.refs = s.refs, a16.refVal = s.refVal, a16.root = s.root, s;
    function r() {
      var n = a16.validate, i = n.apply(this, arguments);
      return r.errors = n.errors, i;
    }
  }
  function jd(a16) {
    switch (a16.schemaId) {
      case "auto":
        return Ld;
      case "id":
        return Nd;
      default:
        return Fd;
    }
  }
  function Nd(a16) {
    return a16.$id && this.logger.warn("schema $id ignored", a16.$id), a16.id;
  }
  function Fd(a16) {
    return a16.id && this.logger.warn("schema id ignored", a16.id), a16.$id;
  }
  function Ld(a16) {
    if (a16.$id && a16.id && a16.$id != a16.id) throw new Error("schema $id is different from id");
    return a16.$id || a16.id;
  }
  function qd(a16, e) {
    if (a16 = a16 || this.errors, !a16) return "No errors";
    e = e || {};
    for (var t = e.separator === void 0 ? ", " : e.separator, s = e.dataVar === void 0 ? "data" : e.dataVar, r = "", n = 0; n < a16.length; n++) {
      var i = a16[n];
      i && (r += s + i.dataPath + " " + i.message + t);
    }
    return r.slice(0, -t.length);
  }
  function Md(a16, e) {
    return typeof e == "string" && (e = new RegExp(e)), this._formats[a16] = e, this;
  }
  function Ud(a16) {
    var e;
    if (a16._opts.$data && (e = Ho(), a16.addMetaSchema(e, e.$id, true)), a16._opts.meta !== false) {
      var t = as();
      a16._opts.$data && (t = Ko(t, Ed)), a16.addMetaSchema(t, aa, true), a16._refs["http://json-schema.org/schema"] = aa;
    }
  }
  function zd(a16) {
    var e = a16._opts.schemas;
    if (e) if (Array.isArray(e)) a16.addSchema(e);
    else for (var t in e) a16.addSchema(e[t], t);
  }
  function Vd(a16) {
    for (var e in a16._opts.formats) {
      var t = a16._opts.formats[e];
      a16.addFormat(e, t);
    }
  }
  function Zd(a16) {
    for (var e in a16._opts.keywords) {
      var t = a16._opts.keywords[e];
      a16.addKeyword(e, t);
    }
  }
  function Xo(a16, e) {
    if (a16._schemas[e] || a16._refs[e]) throw new Error('schema with key or id "' + e + '" already exists');
  }
  function Hd(a16) {
    for (var e = Wo.copy(a16._opts), t = 0; t < Bo.length; t++) delete e[Bo[t]];
    return e;
  }
  function Bd(a16) {
    var e = a16._opts.logger;
    if (e === false) a16.logger = { log: ns, warn: ns, error: ns };
    else {
      if (e === void 0 && (e = console), !(typeof e == "object" && e.log && e.warn && e.error)) throw new Error("logger must implement log, warn and error methods");
      a16.logger = e;
    }
  }
  function ns() {
  }
});
var l = {};
dl(l, { BRAND: () => ql, DIRTY: () => Ar, EMPTY_PATH: () => gl, INVALID: () => H, NEVER: () => Eu, OK: () => Te, ParseStatus: () => Se, Schema: () => W, ZodAny: () => _r, ZodArray: () => pr, ZodBigInt: () => kr, ZodBoolean: () => Ir, ZodBranded: () => gt, ZodCatch: () => Zr, ZodDate: () => Cr, ZodDefault: () => Vr, ZodDiscriminatedUnion: () => $t, ZodEffects: () => Ze, ZodEnum: () => Ur, ZodError: () => Ie, ZodFirstPartyTypeKind: () => T, ZodFunction: () => Dt, ZodIntersection: () => Lr, ZodIssueCode: () => R, ZodLazy: () => qr, ZodLiteral: () => Mr, ZodMap: () => ot, ZodNaN: () => lt, ZodNativeEnum: () => zr, ZodNever: () => Je, ZodNull: () => Nr, ZodNullable: () => sr, ZodNumber: () => Dr, ZodObject: () => Ce, ZodOptional: () => ze, ZodParsedType: () => j, ZodPipeline: () => yt, ZodPromise: () => xr, ZodReadonly: () => Hr, ZodRecord: () => At, ZodSchema: () => W, ZodSet: () => it, ZodString: () => yr, ZodSymbol: () => st, ZodTransformer: () => Ze, ZodTuple: () => ar, ZodType: () => W, ZodUndefined: () => jr, ZodUnion: () => Fr, ZodUnknown: () => hr, ZodVoid: () => nt, addIssueToContext: () => C, any: () => Jl, array: () => Yl, bigint: () => Vl, boolean: () => Is, coerce: () => bu, custom: () => As, date: () => Zl, datetimeRegex: () => Os, defaultErrorMap: () => dr, discriminatedUnion: () => tu, effect: () => pu, enum: () => du, function: () => lu, getErrorMap: () => rt, getParsedType: () => tr, instanceof: () => Ul, intersection: () => au, isAborted: () => Tt, isAsync: () => tt, isDirty: () => Ot, isValid: () => gr, late: () => Ml, lazy: () => uu, literal: () => cu, makeIssue: () => vt, map: () => ou, nan: () => zl, nativeEnum: () => fu, never: () => Wl, null: () => Ql, nullable: () => vu, number: () => ks, object: () => Xl, objectUtil: () => ma, oboolean: () => Pu, onumber: () => xu, optional: () => mu, ostring: () => _u, pipeline: () => yu, preprocess: () => gu, promise: () => hu, quotelessJson: () => pl, record: () => nu, set: () => iu, setErrorMap: () => vl, strictObject: () => eu, string: () => Ds, symbol: () => Hl, transformer: () => pu, tuple: () => su, undefined: () => Bl, union: () => ru, unknown: () => Kl, util: () => X, void: () => Gl });
var X;
(function(a16) {
  a16.assertEqual = (r) => {
  };
  function e(r) {
  }
  a16.assertIs = e;
  function t(r) {
    throw new Error();
  }
  a16.assertNever = t, a16.arrayToEnum = (r) => {
    let n = {};
    for (let i of r) n[i] = i;
    return n;
  }, a16.getValidEnumValues = (r) => {
    let n = a16.objectKeys(r).filter((o) => typeof r[r[o]] != "number"), i = {};
    for (let o of n) i[o] = r[o];
    return a16.objectValues(i);
  }, a16.objectValues = (r) => a16.objectKeys(r).map(function(n) {
    return r[n];
  }), a16.objectKeys = typeof Object.keys == "function" ? (r) => Object.keys(r) : (r) => {
    let n = [];
    for (let i in r) Object.prototype.hasOwnProperty.call(r, i) && n.push(i);
    return n;
  }, a16.find = (r, n) => {
    for (let i of r) if (n(i)) return i;
  }, a16.isInteger = typeof Number.isInteger == "function" ? (r) => Number.isInteger(r) : (r) => typeof r == "number" && Number.isFinite(r) && Math.floor(r) === r;
  function s(r, n = " | ") {
    return r.map((i) => typeof i == "string" ? `'${i}'` : i).join(n);
  }
  a16.joinValues = s, a16.jsonStringifyReplacer = (r, n) => typeof n == "bigint" ? n.toString() : n;
})(X || (X = {}));
var ma;
(function(a16) {
  a16.mergeShapes = (e, t) => ({ ...e, ...t });
})(ma || (ma = {}));
var j = X.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]);
var tr = (a16) => {
  switch (typeof a16) {
    case "undefined":
      return j.undefined;
    case "string":
      return j.string;
    case "number":
      return Number.isNaN(a16) ? j.nan : j.number;
    case "boolean":
      return j.boolean;
    case "function":
      return j.function;
    case "bigint":
      return j.bigint;
    case "symbol":
      return j.symbol;
    case "object":
      return Array.isArray(a16) ? j.array : a16 === null ? j.null : a16.then && typeof a16.then == "function" && a16.catch && typeof a16.catch == "function" ? j.promise : typeof Map < "u" && a16 instanceof Map ? j.map : typeof Set < "u" && a16 instanceof Set ? j.set : typeof Date < "u" && a16 instanceof Date ? j.date : j.object;
    default:
      return j.unknown;
  }
};
var R = X.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
var pl = (a16) => JSON.stringify(a16, null, 2).replace(/"([^"]+)":/g, "$1:");
var Ie = class a extends Error {
  get errors() {
    return this.issues;
  }
  constructor(e) {
    super(), this.issues = [], this.addIssue = (s) => {
      this.issues = [...this.issues, s];
    }, this.addIssues = (s = []) => {
      this.issues = [...this.issues, ...s];
    };
    let t = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, t) : this.__proto__ = t, this.name = "ZodError", this.issues = e;
  }
  format(e) {
    let t = e || function(n) {
      return n.message;
    }, s = { _errors: [] }, r = (n) => {
      for (let i of n.issues) if (i.code === "invalid_union") i.unionErrors.map(r);
      else if (i.code === "invalid_return_type") r(i.returnTypeError);
      else if (i.code === "invalid_arguments") r(i.argumentsError);
      else if (i.path.length === 0) s._errors.push(t(i));
      else {
        let o = s, u = 0;
        for (; u < i.path.length; ) {
          let f = i.path[u];
          u === i.path.length - 1 ? (o[f] = o[f] || { _errors: [] }, o[f]._errors.push(t(i))) : o[f] = o[f] || { _errors: [] }, o = o[f], u++;
        }
      }
    };
    return r(this), s;
  }
  static assert(e) {
    if (!(e instanceof a)) throw new Error(`Not a ZodError: ${e}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, X.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(e = (t) => t.message) {
    let t = {}, s = [];
    for (let r of this.issues) if (r.path.length > 0) {
      let n = r.path[0];
      t[n] = t[n] || [], t[n].push(e(r));
    } else s.push(e(r));
    return { formErrors: s, fieldErrors: t };
  }
  get formErrors() {
    return this.flatten();
  }
};
Ie.create = (a16) => new Ie(a16);
var ml = (a16, e) => {
  let t;
  switch (a16.code) {
    case R.invalid_type:
      a16.received === j.undefined ? t = "Required" : t = `Expected ${a16.expected}, received ${a16.received}`;
      break;
    case R.invalid_literal:
      t = `Invalid literal value, expected ${JSON.stringify(a16.expected, X.jsonStringifyReplacer)}`;
      break;
    case R.unrecognized_keys:
      t = `Unrecognized key(s) in object: ${X.joinValues(a16.keys, ", ")}`;
      break;
    case R.invalid_union:
      t = "Invalid input";
      break;
    case R.invalid_union_discriminator:
      t = `Invalid discriminator value. Expected ${X.joinValues(a16.options)}`;
      break;
    case R.invalid_enum_value:
      t = `Invalid enum value. Expected ${X.joinValues(a16.options)}, received '${a16.received}'`;
      break;
    case R.invalid_arguments:
      t = "Invalid function arguments";
      break;
    case R.invalid_return_type:
      t = "Invalid function return type";
      break;
    case R.invalid_date:
      t = "Invalid date";
      break;
    case R.invalid_string:
      typeof a16.validation == "object" ? "includes" in a16.validation ? (t = `Invalid input: must include "${a16.validation.includes}"`, typeof a16.validation.position == "number" && (t = `${t} at one or more positions greater than or equal to ${a16.validation.position}`)) : "startsWith" in a16.validation ? t = `Invalid input: must start with "${a16.validation.startsWith}"` : "endsWith" in a16.validation ? t = `Invalid input: must end with "${a16.validation.endsWith}"` : X.assertNever(a16.validation) : a16.validation !== "regex" ? t = `Invalid ${a16.validation}` : t = "Invalid";
      break;
    case R.too_small:
      a16.type === "array" ? t = `Array must contain ${a16.exact ? "exactly" : a16.inclusive ? "at least" : "more than"} ${a16.minimum} element(s)` : a16.type === "string" ? t = `String must contain ${a16.exact ? "exactly" : a16.inclusive ? "at least" : "over"} ${a16.minimum} character(s)` : a16.type === "number" ? t = `Number must be ${a16.exact ? "exactly equal to " : a16.inclusive ? "greater than or equal to " : "greater than "}${a16.minimum}` : a16.type === "bigint" ? t = `Number must be ${a16.exact ? "exactly equal to " : a16.inclusive ? "greater than or equal to " : "greater than "}${a16.minimum}` : a16.type === "date" ? t = `Date must be ${a16.exact ? "exactly equal to " : a16.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(a16.minimum))}` : t = "Invalid input";
      break;
    case R.too_big:
      a16.type === "array" ? t = `Array must contain ${a16.exact ? "exactly" : a16.inclusive ? "at most" : "less than"} ${a16.maximum} element(s)` : a16.type === "string" ? t = `String must contain ${a16.exact ? "exactly" : a16.inclusive ? "at most" : "under"} ${a16.maximum} character(s)` : a16.type === "number" ? t = `Number must be ${a16.exact ? "exactly" : a16.inclusive ? "less than or equal to" : "less than"} ${a16.maximum}` : a16.type === "bigint" ? t = `BigInt must be ${a16.exact ? "exactly" : a16.inclusive ? "less than or equal to" : "less than"} ${a16.maximum}` : a16.type === "date" ? t = `Date must be ${a16.exact ? "exactly" : a16.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(a16.maximum))}` : t = "Invalid input";
      break;
    case R.custom:
      t = "Invalid input";
      break;
    case R.invalid_intersection_types:
      t = "Intersection results could not be merged";
      break;
    case R.not_multiple_of:
      t = `Number must be a multiple of ${a16.multipleOf}`;
      break;
    case R.not_finite:
      t = "Number must be finite";
      break;
    default:
      t = e.defaultError, X.assertNever(a16);
  }
  return { message: t };
};
var dr = ml;
var Es = dr;
function vl(a16) {
  Es = a16;
}
function rt() {
  return Es;
}
var vt = (a16) => {
  let { data: e, path: t, errorMaps: s, issueData: r } = a16, n = [...t, ...r.path || []], i = { ...r, path: n };
  if (r.message !== void 0) return { ...r, path: n, message: r.message };
  let o = "", u = s.filter((f) => !!f).slice().reverse();
  for (let f of u) o = f(i, { data: e, defaultError: o }).message;
  return { ...r, path: n, message: o };
};
var gl = [];
function C(a16, e) {
  let t = rt(), s = vt({ issueData: e, data: a16.data, path: a16.path, errorMaps: [a16.common.contextualErrorMap, a16.schemaErrorMap, t, t === dr ? void 0 : dr].filter((r) => !!r) });
  a16.common.issues.push(s);
}
var Se = class a2 {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(e, t) {
    let s = [];
    for (let r of t) {
      if (r.status === "aborted") return H;
      r.status === "dirty" && e.dirty(), s.push(r.value);
    }
    return { status: e.value, value: s };
  }
  static async mergeObjectAsync(e, t) {
    let s = [];
    for (let r of t) {
      let n = await r.key, i = await r.value;
      s.push({ key: n, value: i });
    }
    return a2.mergeObjectSync(e, s);
  }
  static mergeObjectSync(e, t) {
    let s = {};
    for (let r of t) {
      let { key: n, value: i } = r;
      if (n.status === "aborted" || i.status === "aborted") return H;
      n.status === "dirty" && e.dirty(), i.status === "dirty" && e.dirty(), n.value !== "__proto__" && (typeof i.value < "u" || r.alwaysSet) && (s[n.value] = i.value);
    }
    return { status: e.value, value: s };
  }
};
var H = Object.freeze({ status: "aborted" });
var Ar = (a16) => ({ status: "dirty", value: a16 });
var Te = (a16) => ({ status: "valid", value: a16 });
var Tt = (a16) => a16.status === "aborted";
var Ot = (a16) => a16.status === "dirty";
var gr = (a16) => a16.status === "valid";
var tt = (a16) => typeof Promise < "u" && a16 instanceof Promise;
var z;
(function(a16) {
  a16.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, a16.toString = (e) => typeof e == "string" ? e : e?.message;
})(z || (z = {}));
var Ve = class {
  constructor(e, t, s, r) {
    this._cachedPath = [], this.parent = e, this.data = t, this._path = s, this._key = r;
  }
  get path() {
    return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
};
var Ss = (a16, e) => {
  if (gr(e)) return { success: true, data: e.value };
  if (!a16.common.issues.length) throw new Error("Validation failed but no issues detected.");
  return { success: false, get error() {
    if (this._error) return this._error;
    let t = new Ie(a16.common.issues);
    return this._error = t, this._error;
  } };
};
function J(a16) {
  if (!a16) return {};
  let { errorMap: e, invalid_type_error: t, required_error: s, description: r } = a16;
  if (e && (t || s)) throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return e ? { errorMap: e, description: r } : { errorMap: (i, o) => {
    let { message: u } = a16;
    return i.code === "invalid_enum_value" ? { message: u ?? o.defaultError } : typeof o.data > "u" ? { message: u ?? s ?? o.defaultError } : i.code !== "invalid_type" ? { message: o.defaultError } : { message: u ?? t ?? o.defaultError };
  }, description: r };
}
var W = class {
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return tr(e.data);
  }
  _getOrReturnCtx(e, t) {
    return t || { common: e.parent.common, data: e.data, parsedType: tr(e.data), schemaErrorMap: this._def.errorMap, path: e.path, parent: e.parent };
  }
  _processInputParams(e) {
    return { status: new Se(), ctx: { common: e.parent.common, data: e.data, parsedType: tr(e.data), schemaErrorMap: this._def.errorMap, path: e.path, parent: e.parent } };
  }
  _parseSync(e) {
    let t = this._parse(e);
    if (tt(t)) throw new Error("Synchronous parse encountered promise.");
    return t;
  }
  _parseAsync(e) {
    let t = this._parse(e);
    return Promise.resolve(t);
  }
  parse(e, t) {
    let s = this.safeParse(e, t);
    if (s.success) return s.data;
    throw s.error;
  }
  safeParse(e, t) {
    let s = { common: { issues: [], async: t?.async ?? false, contextualErrorMap: t?.errorMap }, path: t?.path || [], schemaErrorMap: this._def.errorMap, parent: null, data: e, parsedType: tr(e) }, r = this._parseSync({ data: e, path: s.path, parent: s });
    return Ss(s, r);
  }
  "~validate"(e) {
    let t = { common: { issues: [], async: !!this["~standard"].async }, path: [], schemaErrorMap: this._def.errorMap, parent: null, data: e, parsedType: tr(e) };
    if (!this["~standard"].async) try {
      let s = this._parseSync({ data: e, path: [], parent: t });
      return gr(s) ? { value: s.value } : { issues: t.common.issues };
    } catch (s) {
      s?.message?.toLowerCase()?.includes("encountered") && (this["~standard"].async = true), t.common = { issues: [], async: true };
    }
    return this._parseAsync({ data: e, path: [], parent: t }).then((s) => gr(s) ? { value: s.value } : { issues: t.common.issues });
  }
  async parseAsync(e, t) {
    let s = await this.safeParseAsync(e, t);
    if (s.success) return s.data;
    throw s.error;
  }
  async safeParseAsync(e, t) {
    let s = { common: { issues: [], contextualErrorMap: t?.errorMap, async: true }, path: t?.path || [], schemaErrorMap: this._def.errorMap, parent: null, data: e, parsedType: tr(e) }, r = this._parse({ data: e, path: s.path, parent: s }), n = await (tt(r) ? r : Promise.resolve(r));
    return Ss(s, n);
  }
  refine(e, t) {
    let s = (r) => typeof t == "string" || typeof t > "u" ? { message: t } : typeof t == "function" ? t(r) : t;
    return this._refinement((r, n) => {
      let i = e(r), o = () => n.addIssue({ code: R.custom, ...s(r) });
      return typeof Promise < "u" && i instanceof Promise ? i.then((u) => u ? true : (o(), false)) : i ? true : (o(), false);
    });
  }
  refinement(e, t) {
    return this._refinement((s, r) => e(s) ? true : (r.addIssue(typeof t == "function" ? t(s, r) : t), false));
  }
  _refinement(e) {
    return new Ze({ schema: this, typeName: T.ZodEffects, effect: { type: "refinement", refinement: e } });
  }
  superRefine(e) {
    return this._refinement(e);
  }
  constructor(e) {
    this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this), this["~standard"] = { version: 1, vendor: "zod", validate: (t) => this["~validate"](t) };
  }
  optional() {
    return ze.create(this, this._def);
  }
  nullable() {
    return sr.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return pr.create(this);
  }
  promise() {
    return xr.create(this, this._def);
  }
  or(e) {
    return Fr.create([this, e], this._def);
  }
  and(e) {
    return Lr.create(this, e, this._def);
  }
  transform(e) {
    return new Ze({ ...J(this._def), schema: this, typeName: T.ZodEffects, effect: { type: "transform", transform: e } });
  }
  default(e) {
    let t = typeof e == "function" ? e : () => e;
    return new Vr({ ...J(this._def), innerType: this, defaultValue: t, typeName: T.ZodDefault });
  }
  brand() {
    return new gt({ typeName: T.ZodBranded, type: this, ...J(this._def) });
  }
  catch(e) {
    let t = typeof e == "function" ? e : () => e;
    return new Zr({ ...J(this._def), innerType: this, catchValue: t, typeName: T.ZodCatch });
  }
  describe(e) {
    let t = this.constructor;
    return new t({ ...this._def, description: e });
  }
  pipe(e) {
    return yt.create(this, e);
  }
  readonly() {
    return Hr.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
};
var yl = /^c[^\s-]{8,}$/i;
var _l = /^[0-9a-z]+$/;
var xl = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
var Pl = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
var bl = /^[a-z0-9_-]{21}$/i;
var El = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
var Sl = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
var Rl = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
var wl = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
var va;
var Tl = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var Ol = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
var $l = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
var Al = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var Dl = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
var kl = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
var ws = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))";
var Il = new RegExp(`^${ws}$`);
function Ts(a16) {
  let e = "[0-5]\\d";
  a16.precision ? e = `${e}\\.\\d{${a16.precision}}` : a16.precision == null && (e = `${e}(\\.\\d+)?`);
  let t = a16.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${e})${t}`;
}
function Cl(a16) {
  return new RegExp(`^${Ts(a16)}$`);
}
function Os(a16) {
  let e = `${ws}T${Ts(a16)}`, t = [];
  return t.push(a16.local ? "Z?" : "Z"), a16.offset && t.push("([+-]\\d{2}:?\\d{2})"), e = `${e}(${t.join("|")})`, new RegExp(`^${e}$`);
}
function jl(a16, e) {
  return !!((e === "v4" || !e) && Tl.test(a16) || (e === "v6" || !e) && $l.test(a16));
}
function Nl(a16, e) {
  if (!El.test(a16)) return false;
  try {
    let [t] = a16.split(".");
    if (!t) return false;
    let s = t.replace(/-/g, "+").replace(/_/g, "/").padEnd(t.length + (4 - t.length % 4) % 4, "="), r = JSON.parse(atob(s));
    return !(typeof r != "object" || r === null || "typ" in r && r?.typ !== "JWT" || !r.alg || e && r.alg !== e);
  } catch {
    return false;
  }
}
function Fl(a16, e) {
  return !!((e === "v4" || !e) && Ol.test(a16) || (e === "v6" || !e) && Al.test(a16));
}
var yr = class a3 extends W {
  _parse(e) {
    if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== j.string) {
      let n = this._getOrReturnCtx(e);
      return C(n, { code: R.invalid_type, expected: j.string, received: n.parsedType }), H;
    }
    let s = new Se(), r;
    for (let n of this._def.checks) if (n.kind === "min") e.data.length < n.value && (r = this._getOrReturnCtx(e, r), C(r, { code: R.too_small, minimum: n.value, type: "string", inclusive: true, exact: false, message: n.message }), s.dirty());
    else if (n.kind === "max") e.data.length > n.value && (r = this._getOrReturnCtx(e, r), C(r, { code: R.too_big, maximum: n.value, type: "string", inclusive: true, exact: false, message: n.message }), s.dirty());
    else if (n.kind === "length") {
      let i = e.data.length > n.value, o = e.data.length < n.value;
      (i || o) && (r = this._getOrReturnCtx(e, r), i ? C(r, { code: R.too_big, maximum: n.value, type: "string", inclusive: true, exact: true, message: n.message }) : o && C(r, { code: R.too_small, minimum: n.value, type: "string", inclusive: true, exact: true, message: n.message }), s.dirty());
    } else if (n.kind === "email") Rl.test(e.data) || (r = this._getOrReturnCtx(e, r), C(r, { validation: "email", code: R.invalid_string, message: n.message }), s.dirty());
    else if (n.kind === "emoji") va || (va = new RegExp(wl, "u")), va.test(e.data) || (r = this._getOrReturnCtx(e, r), C(r, { validation: "emoji", code: R.invalid_string, message: n.message }), s.dirty());
    else if (n.kind === "uuid") Pl.test(e.data) || (r = this._getOrReturnCtx(e, r), C(r, { validation: "uuid", code: R.invalid_string, message: n.message }), s.dirty());
    else if (n.kind === "nanoid") bl.test(e.data) || (r = this._getOrReturnCtx(e, r), C(r, { validation: "nanoid", code: R.invalid_string, message: n.message }), s.dirty());
    else if (n.kind === "cuid") yl.test(e.data) || (r = this._getOrReturnCtx(e, r), C(r, { validation: "cuid", code: R.invalid_string, message: n.message }), s.dirty());
    else if (n.kind === "cuid2") _l.test(e.data) || (r = this._getOrReturnCtx(e, r), C(r, { validation: "cuid2", code: R.invalid_string, message: n.message }), s.dirty());
    else if (n.kind === "ulid") xl.test(e.data) || (r = this._getOrReturnCtx(e, r), C(r, { validation: "ulid", code: R.invalid_string, message: n.message }), s.dirty());
    else if (n.kind === "url") try {
      new URL(e.data);
    } catch {
      r = this._getOrReturnCtx(e, r), C(r, { validation: "url", code: R.invalid_string, message: n.message }), s.dirty();
    }
    else n.kind === "regex" ? (n.regex.lastIndex = 0, n.regex.test(e.data) || (r = this._getOrReturnCtx(e, r), C(r, { validation: "regex", code: R.invalid_string, message: n.message }), s.dirty())) : n.kind === "trim" ? e.data = e.data.trim() : n.kind === "includes" ? e.data.includes(n.value, n.position) || (r = this._getOrReturnCtx(e, r), C(r, { code: R.invalid_string, validation: { includes: n.value, position: n.position }, message: n.message }), s.dirty()) : n.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : n.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : n.kind === "startsWith" ? e.data.startsWith(n.value) || (r = this._getOrReturnCtx(e, r), C(r, { code: R.invalid_string, validation: { startsWith: n.value }, message: n.message }), s.dirty()) : n.kind === "endsWith" ? e.data.endsWith(n.value) || (r = this._getOrReturnCtx(e, r), C(r, { code: R.invalid_string, validation: { endsWith: n.value }, message: n.message }), s.dirty()) : n.kind === "datetime" ? Os(n).test(e.data) || (r = this._getOrReturnCtx(e, r), C(r, { code: R.invalid_string, validation: "datetime", message: n.message }), s.dirty()) : n.kind === "date" ? Il.test(e.data) || (r = this._getOrReturnCtx(e, r), C(r, { code: R.invalid_string, validation: "date", message: n.message }), s.dirty()) : n.kind === "time" ? Cl(n).test(e.data) || (r = this._getOrReturnCtx(e, r), C(r, { code: R.invalid_string, validation: "time", message: n.message }), s.dirty()) : n.kind === "duration" ? Sl.test(e.data) || (r = this._getOrReturnCtx(e, r), C(r, { validation: "duration", code: R.invalid_string, message: n.message }), s.dirty()) : n.kind === "ip" ? jl(e.data, n.version) || (r = this._getOrReturnCtx(e, r), C(r, { validation: "ip", code: R.invalid_string, message: n.message }), s.dirty()) : n.kind === "jwt" ? Nl(e.data, n.alg) || (r = this._getOrReturnCtx(e, r), C(r, { validation: "jwt", code: R.invalid_string, message: n.message }), s.dirty()) : n.kind === "cidr" ? Fl(e.data, n.version) || (r = this._getOrReturnCtx(e, r), C(r, { validation: "cidr", code: R.invalid_string, message: n.message }), s.dirty()) : n.kind === "base64" ? Dl.test(e.data) || (r = this._getOrReturnCtx(e, r), C(r, { validation: "base64", code: R.invalid_string, message: n.message }), s.dirty()) : n.kind === "base64url" ? kl.test(e.data) || (r = this._getOrReturnCtx(e, r), C(r, { validation: "base64url", code: R.invalid_string, message: n.message }), s.dirty()) : X.assertNever(n);
    return { status: s.value, value: e.data };
  }
  _regex(e, t, s) {
    return this.refinement((r) => e.test(r), { validation: t, code: R.invalid_string, ...z.errToObj(s) });
  }
  _addCheck(e) {
    return new a3({ ...this._def, checks: [...this._def.checks, e] });
  }
  email(e) {
    return this._addCheck({ kind: "email", ...z.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: "url", ...z.errToObj(e) });
  }
  emoji(e) {
    return this._addCheck({ kind: "emoji", ...z.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: "uuid", ...z.errToObj(e) });
  }
  nanoid(e) {
    return this._addCheck({ kind: "nanoid", ...z.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: "cuid", ...z.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: "cuid2", ...z.errToObj(e) });
  }
  ulid(e) {
    return this._addCheck({ kind: "ulid", ...z.errToObj(e) });
  }
  base64(e) {
    return this._addCheck({ kind: "base64", ...z.errToObj(e) });
  }
  base64url(e) {
    return this._addCheck({ kind: "base64url", ...z.errToObj(e) });
  }
  jwt(e) {
    return this._addCheck({ kind: "jwt", ...z.errToObj(e) });
  }
  ip(e) {
    return this._addCheck({ kind: "ip", ...z.errToObj(e) });
  }
  cidr(e) {
    return this._addCheck({ kind: "cidr", ...z.errToObj(e) });
  }
  datetime(e) {
    return typeof e == "string" ? this._addCheck({ kind: "datetime", precision: null, offset: false, local: false, message: e }) : this._addCheck({ kind: "datetime", precision: typeof e?.precision > "u" ? null : e?.precision, offset: e?.offset ?? false, local: e?.local ?? false, ...z.errToObj(e?.message) });
  }
  date(e) {
    return this._addCheck({ kind: "date", message: e });
  }
  time(e) {
    return typeof e == "string" ? this._addCheck({ kind: "time", precision: null, message: e }) : this._addCheck({ kind: "time", precision: typeof e?.precision > "u" ? null : e?.precision, ...z.errToObj(e?.message) });
  }
  duration(e) {
    return this._addCheck({ kind: "duration", ...z.errToObj(e) });
  }
  regex(e, t) {
    return this._addCheck({ kind: "regex", regex: e, ...z.errToObj(t) });
  }
  includes(e, t) {
    return this._addCheck({ kind: "includes", value: e, position: t?.position, ...z.errToObj(t?.message) });
  }
  startsWith(e, t) {
    return this._addCheck({ kind: "startsWith", value: e, ...z.errToObj(t) });
  }
  endsWith(e, t) {
    return this._addCheck({ kind: "endsWith", value: e, ...z.errToObj(t) });
  }
  min(e, t) {
    return this._addCheck({ kind: "min", value: e, ...z.errToObj(t) });
  }
  max(e, t) {
    return this._addCheck({ kind: "max", value: e, ...z.errToObj(t) });
  }
  length(e, t) {
    return this._addCheck({ kind: "length", value: e, ...z.errToObj(t) });
  }
  nonempty(e) {
    return this.min(1, z.errToObj(e));
  }
  trim() {
    return new a3({ ...this._def, checks: [...this._def.checks, { kind: "trim" }] });
  }
  toLowerCase() {
    return new a3({ ...this._def, checks: [...this._def.checks, { kind: "toLowerCase" }] });
  }
  toUpperCase() {
    return new a3({ ...this._def, checks: [...this._def.checks, { kind: "toUpperCase" }] });
  }
  get isDatetime() {
    return !!this._def.checks.find((e) => e.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((e) => e.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((e) => e.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((e) => e.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((e) => e.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((e) => e.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((e) => e.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((e) => e.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((e) => e.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((e) => e.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((e) => e.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((e) => e.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((e) => e.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((e) => e.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((e) => e.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((e) => e.kind === "base64url");
  }
  get minLength() {
    let e = null;
    for (let t of this._def.checks) t.kind === "min" && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxLength() {
    let e = null;
    for (let t of this._def.checks) t.kind === "max" && (e === null || t.value < e) && (e = t.value);
    return e;
  }
};
yr.create = (a16) => new yr({ checks: [], typeName: T.ZodString, coerce: a16?.coerce ?? false, ...J(a16) });
function Ll(a16, e) {
  let t = (a16.toString().split(".")[1] || "").length, s = (e.toString().split(".")[1] || "").length, r = t > s ? t : s, n = Number.parseInt(a16.toFixed(r).replace(".", "")), i = Number.parseInt(e.toFixed(r).replace(".", ""));
  return n % i / 10 ** r;
}
var Dr = class a4 extends W {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== j.number) {
      let n = this._getOrReturnCtx(e);
      return C(n, { code: R.invalid_type, expected: j.number, received: n.parsedType }), H;
    }
    let s, r = new Se();
    for (let n of this._def.checks) n.kind === "int" ? X.isInteger(e.data) || (s = this._getOrReturnCtx(e, s), C(s, { code: R.invalid_type, expected: "integer", received: "float", message: n.message }), r.dirty()) : n.kind === "min" ? (n.inclusive ? e.data < n.value : e.data <= n.value) && (s = this._getOrReturnCtx(e, s), C(s, { code: R.too_small, minimum: n.value, type: "number", inclusive: n.inclusive, exact: false, message: n.message }), r.dirty()) : n.kind === "max" ? (n.inclusive ? e.data > n.value : e.data >= n.value) && (s = this._getOrReturnCtx(e, s), C(s, { code: R.too_big, maximum: n.value, type: "number", inclusive: n.inclusive, exact: false, message: n.message }), r.dirty()) : n.kind === "multipleOf" ? Ll(e.data, n.value) !== 0 && (s = this._getOrReturnCtx(e, s), C(s, { code: R.not_multiple_of, multipleOf: n.value, message: n.message }), r.dirty()) : n.kind === "finite" ? Number.isFinite(e.data) || (s = this._getOrReturnCtx(e, s), C(s, { code: R.not_finite, message: n.message }), r.dirty()) : X.assertNever(n);
    return { status: r.value, value: e.data };
  }
  gte(e, t) {
    return this.setLimit("min", e, true, z.toString(t));
  }
  gt(e, t) {
    return this.setLimit("min", e, false, z.toString(t));
  }
  lte(e, t) {
    return this.setLimit("max", e, true, z.toString(t));
  }
  lt(e, t) {
    return this.setLimit("max", e, false, z.toString(t));
  }
  setLimit(e, t, s, r) {
    return new a4({ ...this._def, checks: [...this._def.checks, { kind: e, value: t, inclusive: s, message: z.toString(r) }] });
  }
  _addCheck(e) {
    return new a4({ ...this._def, checks: [...this._def.checks, e] });
  }
  int(e) {
    return this._addCheck({ kind: "int", message: z.toString(e) });
  }
  positive(e) {
    return this._addCheck({ kind: "min", value: 0, inclusive: false, message: z.toString(e) });
  }
  negative(e) {
    return this._addCheck({ kind: "max", value: 0, inclusive: false, message: z.toString(e) });
  }
  nonpositive(e) {
    return this._addCheck({ kind: "max", value: 0, inclusive: true, message: z.toString(e) });
  }
  nonnegative(e) {
    return this._addCheck({ kind: "min", value: 0, inclusive: true, message: z.toString(e) });
  }
  multipleOf(e, t) {
    return this._addCheck({ kind: "multipleOf", value: e, message: z.toString(t) });
  }
  finite(e) {
    return this._addCheck({ kind: "finite", message: z.toString(e) });
  }
  safe(e) {
    return this._addCheck({ kind: "min", inclusive: true, value: Number.MIN_SAFE_INTEGER, message: z.toString(e) })._addCheck({ kind: "max", inclusive: true, value: Number.MAX_SAFE_INTEGER, message: z.toString(e) });
  }
  get minValue() {
    let e = null;
    for (let t of this._def.checks) t.kind === "min" && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (let t of this._def.checks) t.kind === "max" && (e === null || t.value < e) && (e = t.value);
    return e;
  }
  get isInt() {
    return !!this._def.checks.find((e) => e.kind === "int" || e.kind === "multipleOf" && X.isInteger(e.value));
  }
  get isFinite() {
    let e = null, t = null;
    for (let s of this._def.checks) {
      if (s.kind === "finite" || s.kind === "int" || s.kind === "multipleOf") return true;
      s.kind === "min" ? (t === null || s.value > t) && (t = s.value) : s.kind === "max" && (e === null || s.value < e) && (e = s.value);
    }
    return Number.isFinite(t) && Number.isFinite(e);
  }
};
Dr.create = (a16) => new Dr({ checks: [], typeName: T.ZodNumber, coerce: a16?.coerce || false, ...J(a16) });
var kr = class a5 extends W {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(e) {
    if (this._def.coerce) try {
      e.data = BigInt(e.data);
    } catch {
      return this._getInvalidInput(e);
    }
    if (this._getType(e) !== j.bigint) return this._getInvalidInput(e);
    let s, r = new Se();
    for (let n of this._def.checks) n.kind === "min" ? (n.inclusive ? e.data < n.value : e.data <= n.value) && (s = this._getOrReturnCtx(e, s), C(s, { code: R.too_small, type: "bigint", minimum: n.value, inclusive: n.inclusive, message: n.message }), r.dirty()) : n.kind === "max" ? (n.inclusive ? e.data > n.value : e.data >= n.value) && (s = this._getOrReturnCtx(e, s), C(s, { code: R.too_big, type: "bigint", maximum: n.value, inclusive: n.inclusive, message: n.message }), r.dirty()) : n.kind === "multipleOf" ? e.data % n.value !== BigInt(0) && (s = this._getOrReturnCtx(e, s), C(s, { code: R.not_multiple_of, multipleOf: n.value, message: n.message }), r.dirty()) : X.assertNever(n);
    return { status: r.value, value: e.data };
  }
  _getInvalidInput(e) {
    let t = this._getOrReturnCtx(e);
    return C(t, { code: R.invalid_type, expected: j.bigint, received: t.parsedType }), H;
  }
  gte(e, t) {
    return this.setLimit("min", e, true, z.toString(t));
  }
  gt(e, t) {
    return this.setLimit("min", e, false, z.toString(t));
  }
  lte(e, t) {
    return this.setLimit("max", e, true, z.toString(t));
  }
  lt(e, t) {
    return this.setLimit("max", e, false, z.toString(t));
  }
  setLimit(e, t, s, r) {
    return new a5({ ...this._def, checks: [...this._def.checks, { kind: e, value: t, inclusive: s, message: z.toString(r) }] });
  }
  _addCheck(e) {
    return new a5({ ...this._def, checks: [...this._def.checks, e] });
  }
  positive(e) {
    return this._addCheck({ kind: "min", value: BigInt(0), inclusive: false, message: z.toString(e) });
  }
  negative(e) {
    return this._addCheck({ kind: "max", value: BigInt(0), inclusive: false, message: z.toString(e) });
  }
  nonpositive(e) {
    return this._addCheck({ kind: "max", value: BigInt(0), inclusive: true, message: z.toString(e) });
  }
  nonnegative(e) {
    return this._addCheck({ kind: "min", value: BigInt(0), inclusive: true, message: z.toString(e) });
  }
  multipleOf(e, t) {
    return this._addCheck({ kind: "multipleOf", value: e, message: z.toString(t) });
  }
  get minValue() {
    let e = null;
    for (let t of this._def.checks) t.kind === "min" && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (let t of this._def.checks) t.kind === "max" && (e === null || t.value < e) && (e = t.value);
    return e;
  }
};
kr.create = (a16) => new kr({ checks: [], typeName: T.ZodBigInt, coerce: a16?.coerce ?? false, ...J(a16) });
var Ir = class extends W {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== j.boolean) {
      let s = this._getOrReturnCtx(e);
      return C(s, { code: R.invalid_type, expected: j.boolean, received: s.parsedType }), H;
    }
    return Te(e.data);
  }
};
Ir.create = (a16) => new Ir({ typeName: T.ZodBoolean, coerce: a16?.coerce || false, ...J(a16) });
var Cr = class a6 extends W {
  _parse(e) {
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== j.date) {
      let n = this._getOrReturnCtx(e);
      return C(n, { code: R.invalid_type, expected: j.date, received: n.parsedType }), H;
    }
    if (Number.isNaN(e.data.getTime())) {
      let n = this._getOrReturnCtx(e);
      return C(n, { code: R.invalid_date }), H;
    }
    let s = new Se(), r;
    for (let n of this._def.checks) n.kind === "min" ? e.data.getTime() < n.value && (r = this._getOrReturnCtx(e, r), C(r, { code: R.too_small, message: n.message, inclusive: true, exact: false, minimum: n.value, type: "date" }), s.dirty()) : n.kind === "max" ? e.data.getTime() > n.value && (r = this._getOrReturnCtx(e, r), C(r, { code: R.too_big, message: n.message, inclusive: true, exact: false, maximum: n.value, type: "date" }), s.dirty()) : X.assertNever(n);
    return { status: s.value, value: new Date(e.data.getTime()) };
  }
  _addCheck(e) {
    return new a6({ ...this._def, checks: [...this._def.checks, e] });
  }
  min(e, t) {
    return this._addCheck({ kind: "min", value: e.getTime(), message: z.toString(t) });
  }
  max(e, t) {
    return this._addCheck({ kind: "max", value: e.getTime(), message: z.toString(t) });
  }
  get minDate() {
    let e = null;
    for (let t of this._def.checks) t.kind === "min" && (e === null || t.value > e) && (e = t.value);
    return e != null ? new Date(e) : null;
  }
  get maxDate() {
    let e = null;
    for (let t of this._def.checks) t.kind === "max" && (e === null || t.value < e) && (e = t.value);
    return e != null ? new Date(e) : null;
  }
};
Cr.create = (a16) => new Cr({ checks: [], coerce: a16?.coerce || false, typeName: T.ZodDate, ...J(a16) });
var st = class extends W {
  _parse(e) {
    if (this._getType(e) !== j.symbol) {
      let s = this._getOrReturnCtx(e);
      return C(s, { code: R.invalid_type, expected: j.symbol, received: s.parsedType }), H;
    }
    return Te(e.data);
  }
};
st.create = (a16) => new st({ typeName: T.ZodSymbol, ...J(a16) });
var jr = class extends W {
  _parse(e) {
    if (this._getType(e) !== j.undefined) {
      let s = this._getOrReturnCtx(e);
      return C(s, { code: R.invalid_type, expected: j.undefined, received: s.parsedType }), H;
    }
    return Te(e.data);
  }
};
jr.create = (a16) => new jr({ typeName: T.ZodUndefined, ...J(a16) });
var Nr = class extends W {
  _parse(e) {
    if (this._getType(e) !== j.null) {
      let s = this._getOrReturnCtx(e);
      return C(s, { code: R.invalid_type, expected: j.null, received: s.parsedType }), H;
    }
    return Te(e.data);
  }
};
Nr.create = (a16) => new Nr({ typeName: T.ZodNull, ...J(a16) });
var _r = class extends W {
  constructor() {
    super(...arguments), this._any = true;
  }
  _parse(e) {
    return Te(e.data);
  }
};
_r.create = (a16) => new _r({ typeName: T.ZodAny, ...J(a16) });
var hr = class extends W {
  constructor() {
    super(...arguments), this._unknown = true;
  }
  _parse(e) {
    return Te(e.data);
  }
};
hr.create = (a16) => new hr({ typeName: T.ZodUnknown, ...J(a16) });
var Je = class extends W {
  _parse(e) {
    let t = this._getOrReturnCtx(e);
    return C(t, { code: R.invalid_type, expected: j.never, received: t.parsedType }), H;
  }
};
Je.create = (a16) => new Je({ typeName: T.ZodNever, ...J(a16) });
var nt = class extends W {
  _parse(e) {
    if (this._getType(e) !== j.undefined) {
      let s = this._getOrReturnCtx(e);
      return C(s, { code: R.invalid_type, expected: j.void, received: s.parsedType }), H;
    }
    return Te(e.data);
  }
};
nt.create = (a16) => new nt({ typeName: T.ZodVoid, ...J(a16) });
var pr = class a7 extends W {
  _parse(e) {
    let { ctx: t, status: s } = this._processInputParams(e), r = this._def;
    if (t.parsedType !== j.array) return C(t, { code: R.invalid_type, expected: j.array, received: t.parsedType }), H;
    if (r.exactLength !== null) {
      let i = t.data.length > r.exactLength.value, o = t.data.length < r.exactLength.value;
      (i || o) && (C(t, { code: i ? R.too_big : R.too_small, minimum: o ? r.exactLength.value : void 0, maximum: i ? r.exactLength.value : void 0, type: "array", inclusive: true, exact: true, message: r.exactLength.message }), s.dirty());
    }
    if (r.minLength !== null && t.data.length < r.minLength.value && (C(t, { code: R.too_small, minimum: r.minLength.value, type: "array", inclusive: true, exact: false, message: r.minLength.message }), s.dirty()), r.maxLength !== null && t.data.length > r.maxLength.value && (C(t, { code: R.too_big, maximum: r.maxLength.value, type: "array", inclusive: true, exact: false, message: r.maxLength.message }), s.dirty()), t.common.async) return Promise.all([...t.data].map((i, o) => r.type._parseAsync(new Ve(t, i, t.path, o)))).then((i) => Se.mergeArray(s, i));
    let n = [...t.data].map((i, o) => r.type._parseSync(new Ve(t, i, t.path, o)));
    return Se.mergeArray(s, n);
  }
  get element() {
    return this._def.type;
  }
  min(e, t) {
    return new a7({ ...this._def, minLength: { value: e, message: z.toString(t) } });
  }
  max(e, t) {
    return new a7({ ...this._def, maxLength: { value: e, message: z.toString(t) } });
  }
  length(e, t) {
    return new a7({ ...this._def, exactLength: { value: e, message: z.toString(t) } });
  }
  nonempty(e) {
    return this.min(1, e);
  }
};
pr.create = (a16, e) => new pr({ type: a16, minLength: null, maxLength: null, exactLength: null, typeName: T.ZodArray, ...J(e) });
function at(a16) {
  if (a16 instanceof Ce) {
    let e = {};
    for (let t in a16.shape) {
      let s = a16.shape[t];
      e[t] = ze.create(at(s));
    }
    return new Ce({ ...a16._def, shape: () => e });
  } else return a16 instanceof pr ? new pr({ ...a16._def, type: at(a16.element) }) : a16 instanceof ze ? ze.create(at(a16.unwrap())) : a16 instanceof sr ? sr.create(at(a16.unwrap())) : a16 instanceof ar ? ar.create(a16.items.map((e) => at(e))) : a16;
}
var Ce = class a8 extends W {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null) return this._cached;
    let e = this._def.shape(), t = X.objectKeys(e);
    return this._cached = { shape: e, keys: t }, this._cached;
  }
  _parse(e) {
    if (this._getType(e) !== j.object) {
      let f = this._getOrReturnCtx(e);
      return C(f, { code: R.invalid_type, expected: j.object, received: f.parsedType }), H;
    }
    let { status: s, ctx: r } = this._processInputParams(e), { shape: n, keys: i } = this._getCached(), o = [];
    if (!(this._def.catchall instanceof Je && this._def.unknownKeys === "strip")) for (let f in r.data) i.includes(f) || o.push(f);
    let u = [];
    for (let f of i) {
      let h = n[f], m = r.data[f];
      u.push({ key: { status: "valid", value: f }, value: h._parse(new Ve(r, m, r.path, f)), alwaysSet: f in r.data });
    }
    if (this._def.catchall instanceof Je) {
      let f = this._def.unknownKeys;
      if (f === "passthrough") for (let h of o) u.push({ key: { status: "valid", value: h }, value: { status: "valid", value: r.data[h] } });
      else if (f === "strict") o.length > 0 && (C(r, { code: R.unrecognized_keys, keys: o }), s.dirty());
      else if (f !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      let f = this._def.catchall;
      for (let h of o) {
        let m = r.data[h];
        u.push({ key: { status: "valid", value: h }, value: f._parse(new Ve(r, m, r.path, h)), alwaysSet: h in r.data });
      }
    }
    return r.common.async ? Promise.resolve().then(async () => {
      let f = [];
      for (let h of u) {
        let m = await h.key, x = await h.value;
        f.push({ key: m, value: x, alwaysSet: h.alwaysSet });
      }
      return f;
    }).then((f) => Se.mergeObjectSync(s, f)) : Se.mergeObjectSync(s, u);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return z.errToObj, new a8({ ...this._def, unknownKeys: "strict", ...e !== void 0 ? { errorMap: (t, s) => {
      let r = this._def.errorMap?.(t, s).message ?? s.defaultError;
      return t.code === "unrecognized_keys" ? { message: z.errToObj(e).message ?? r } : { message: r };
    } } : {} });
  }
  strip() {
    return new a8({ ...this._def, unknownKeys: "strip" });
  }
  passthrough() {
    return new a8({ ...this._def, unknownKeys: "passthrough" });
  }
  extend(e) {
    return new a8({ ...this._def, shape: () => ({ ...this._def.shape(), ...e }) });
  }
  merge(e) {
    return new a8({ unknownKeys: e._def.unknownKeys, catchall: e._def.catchall, shape: () => ({ ...this._def.shape(), ...e._def.shape() }), typeName: T.ZodObject });
  }
  setKey(e, t) {
    return this.augment({ [e]: t });
  }
  catchall(e) {
    return new a8({ ...this._def, catchall: e });
  }
  pick(e) {
    let t = {};
    for (let s of X.objectKeys(e)) e[s] && this.shape[s] && (t[s] = this.shape[s]);
    return new a8({ ...this._def, shape: () => t });
  }
  omit(e) {
    let t = {};
    for (let s of X.objectKeys(this.shape)) e[s] || (t[s] = this.shape[s]);
    return new a8({ ...this._def, shape: () => t });
  }
  deepPartial() {
    return at(this);
  }
  partial(e) {
    let t = {};
    for (let s of X.objectKeys(this.shape)) {
      let r = this.shape[s];
      e && !e[s] ? t[s] = r : t[s] = r.optional();
    }
    return new a8({ ...this._def, shape: () => t });
  }
  required(e) {
    let t = {};
    for (let s of X.objectKeys(this.shape)) if (e && !e[s]) t[s] = this.shape[s];
    else {
      let n = this.shape[s];
      for (; n instanceof ze; ) n = n._def.innerType;
      t[s] = n;
    }
    return new a8({ ...this._def, shape: () => t });
  }
  keyof() {
    return $s(X.objectKeys(this.shape));
  }
};
Ce.create = (a16, e) => new Ce({ shape: () => a16, unknownKeys: "strip", catchall: Je.create(), typeName: T.ZodObject, ...J(e) });
Ce.strictCreate = (a16, e) => new Ce({ shape: () => a16, unknownKeys: "strict", catchall: Je.create(), typeName: T.ZodObject, ...J(e) });
Ce.lazycreate = (a16, e) => new Ce({ shape: a16, unknownKeys: "strip", catchall: Je.create(), typeName: T.ZodObject, ...J(e) });
var Fr = class extends W {
  _parse(e) {
    let { ctx: t } = this._processInputParams(e), s = this._def.options;
    function r(n) {
      for (let o of n) if (o.result.status === "valid") return o.result;
      for (let o of n) if (o.result.status === "dirty") return t.common.issues.push(...o.ctx.common.issues), o.result;
      let i = n.map((o) => new Ie(o.ctx.common.issues));
      return C(t, { code: R.invalid_union, unionErrors: i }), H;
    }
    if (t.common.async) return Promise.all(s.map(async (n) => {
      let i = { ...t, common: { ...t.common, issues: [] }, parent: null };
      return { result: await n._parseAsync({ data: t.data, path: t.path, parent: i }), ctx: i };
    })).then(r);
    {
      let n, i = [];
      for (let u of s) {
        let f = { ...t, common: { ...t.common, issues: [] }, parent: null }, h = u._parseSync({ data: t.data, path: t.path, parent: f });
        if (h.status === "valid") return h;
        h.status === "dirty" && !n && (n = { result: h, ctx: f }), f.common.issues.length && i.push(f.common.issues);
      }
      if (n) return t.common.issues.push(...n.ctx.common.issues), n.result;
      let o = i.map((u) => new Ie(u));
      return C(t, { code: R.invalid_union, unionErrors: o }), H;
    }
  }
  get options() {
    return this._def.options;
  }
};
Fr.create = (a16, e) => new Fr({ options: a16, typeName: T.ZodUnion, ...J(e) });
var fr = (a16) => a16 instanceof qr ? fr(a16.schema) : a16 instanceof Ze ? fr(a16.innerType()) : a16 instanceof Mr ? [a16.value] : a16 instanceof Ur ? a16.options : a16 instanceof zr ? X.objectValues(a16.enum) : a16 instanceof Vr ? fr(a16._def.innerType) : a16 instanceof jr ? [void 0] : a16 instanceof Nr ? [null] : a16 instanceof ze ? [void 0, ...fr(a16.unwrap())] : a16 instanceof sr ? [null, ...fr(a16.unwrap())] : a16 instanceof gt || a16 instanceof Hr ? fr(a16.unwrap()) : a16 instanceof Zr ? fr(a16._def.innerType) : [];
var $t = class a9 extends W {
  _parse(e) {
    let { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== j.object) return C(t, { code: R.invalid_type, expected: j.object, received: t.parsedType }), H;
    let s = this.discriminator, r = t.data[s], n = this.optionsMap.get(r);
    return n ? t.common.async ? n._parseAsync({ data: t.data, path: t.path, parent: t }) : n._parseSync({ data: t.data, path: t.path, parent: t }) : (C(t, { code: R.invalid_union_discriminator, options: Array.from(this.optionsMap.keys()), path: [s] }), H);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  static create(e, t, s) {
    let r = /* @__PURE__ */ new Map();
    for (let n of t) {
      let i = fr(n.shape[e]);
      if (!i.length) throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
      for (let o of i) {
        if (r.has(o)) throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(o)}`);
        r.set(o, n);
      }
    }
    return new a9({ typeName: T.ZodDiscriminatedUnion, discriminator: e, options: t, optionsMap: r, ...J(s) });
  }
};
function ga(a16, e) {
  let t = tr(a16), s = tr(e);
  if (a16 === e) return { valid: true, data: a16 };
  if (t === j.object && s === j.object) {
    let r = X.objectKeys(e), n = X.objectKeys(a16).filter((o) => r.indexOf(o) !== -1), i = { ...a16, ...e };
    for (let o of n) {
      let u = ga(a16[o], e[o]);
      if (!u.valid) return { valid: false };
      i[o] = u.data;
    }
    return { valid: true, data: i };
  } else if (t === j.array && s === j.array) {
    if (a16.length !== e.length) return { valid: false };
    let r = [];
    for (let n = 0; n < a16.length; n++) {
      let i = a16[n], o = e[n], u = ga(i, o);
      if (!u.valid) return { valid: false };
      r.push(u.data);
    }
    return { valid: true, data: r };
  } else return t === j.date && s === j.date && +a16 == +e ? { valid: true, data: a16 } : { valid: false };
}
var Lr = class extends W {
  _parse(e) {
    let { status: t, ctx: s } = this._processInputParams(e), r = (n, i) => {
      if (Tt(n) || Tt(i)) return H;
      let o = ga(n.value, i.value);
      return o.valid ? ((Ot(n) || Ot(i)) && t.dirty(), { status: t.value, value: o.data }) : (C(s, { code: R.invalid_intersection_types }), H);
    };
    return s.common.async ? Promise.all([this._def.left._parseAsync({ data: s.data, path: s.path, parent: s }), this._def.right._parseAsync({ data: s.data, path: s.path, parent: s })]).then(([n, i]) => r(n, i)) : r(this._def.left._parseSync({ data: s.data, path: s.path, parent: s }), this._def.right._parseSync({ data: s.data, path: s.path, parent: s }));
  }
};
Lr.create = (a16, e, t) => new Lr({ left: a16, right: e, typeName: T.ZodIntersection, ...J(t) });
var ar = class a10 extends W {
  _parse(e) {
    let { status: t, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== j.array) return C(s, { code: R.invalid_type, expected: j.array, received: s.parsedType }), H;
    if (s.data.length < this._def.items.length) return C(s, { code: R.too_small, minimum: this._def.items.length, inclusive: true, exact: false, type: "array" }), H;
    !this._def.rest && s.data.length > this._def.items.length && (C(s, { code: R.too_big, maximum: this._def.items.length, inclusive: true, exact: false, type: "array" }), t.dirty());
    let n = [...s.data].map((i, o) => {
      let u = this._def.items[o] || this._def.rest;
      return u ? u._parse(new Ve(s, i, s.path, o)) : null;
    }).filter((i) => !!i);
    return s.common.async ? Promise.all(n).then((i) => Se.mergeArray(t, i)) : Se.mergeArray(t, n);
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new a10({ ...this._def, rest: e });
  }
};
ar.create = (a16, e) => {
  if (!Array.isArray(a16)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new ar({ items: a16, typeName: T.ZodTuple, rest: null, ...J(e) });
};
var At = class a11 extends W {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    let { status: t, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== j.object) return C(s, { code: R.invalid_type, expected: j.object, received: s.parsedType }), H;
    let r = [], n = this._def.keyType, i = this._def.valueType;
    for (let o in s.data) r.push({ key: n._parse(new Ve(s, o, s.path, o)), value: i._parse(new Ve(s, s.data[o], s.path, o)), alwaysSet: o in s.data });
    return s.common.async ? Se.mergeObjectAsync(t, r) : Se.mergeObjectSync(t, r);
  }
  get element() {
    return this._def.valueType;
  }
  static create(e, t, s) {
    return t instanceof W ? new a11({ keyType: e, valueType: t, typeName: T.ZodRecord, ...J(s) }) : new a11({ keyType: yr.create(), valueType: e, typeName: T.ZodRecord, ...J(t) });
  }
};
var ot = class extends W {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    let { status: t, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== j.map) return C(s, { code: R.invalid_type, expected: j.map, received: s.parsedType }), H;
    let r = this._def.keyType, n = this._def.valueType, i = [...s.data.entries()].map(([o, u], f) => ({ key: r._parse(new Ve(s, o, s.path, [f, "key"])), value: n._parse(new Ve(s, u, s.path, [f, "value"])) }));
    if (s.common.async) {
      let o = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (let u of i) {
          let f = await u.key, h = await u.value;
          if (f.status === "aborted" || h.status === "aborted") return H;
          (f.status === "dirty" || h.status === "dirty") && t.dirty(), o.set(f.value, h.value);
        }
        return { status: t.value, value: o };
      });
    } else {
      let o = /* @__PURE__ */ new Map();
      for (let u of i) {
        let f = u.key, h = u.value;
        if (f.status === "aborted" || h.status === "aborted") return H;
        (f.status === "dirty" || h.status === "dirty") && t.dirty(), o.set(f.value, h.value);
      }
      return { status: t.value, value: o };
    }
  }
};
ot.create = (a16, e, t) => new ot({ valueType: e, keyType: a16, typeName: T.ZodMap, ...J(t) });
var it = class a12 extends W {
  _parse(e) {
    let { status: t, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== j.set) return C(s, { code: R.invalid_type, expected: j.set, received: s.parsedType }), H;
    let r = this._def;
    r.minSize !== null && s.data.size < r.minSize.value && (C(s, { code: R.too_small, minimum: r.minSize.value, type: "set", inclusive: true, exact: false, message: r.minSize.message }), t.dirty()), r.maxSize !== null && s.data.size > r.maxSize.value && (C(s, { code: R.too_big, maximum: r.maxSize.value, type: "set", inclusive: true, exact: false, message: r.maxSize.message }), t.dirty());
    let n = this._def.valueType;
    function i(u) {
      let f = /* @__PURE__ */ new Set();
      for (let h of u) {
        if (h.status === "aborted") return H;
        h.status === "dirty" && t.dirty(), f.add(h.value);
      }
      return { status: t.value, value: f };
    }
    let o = [...s.data.values()].map((u, f) => n._parse(new Ve(s, u, s.path, f)));
    return s.common.async ? Promise.all(o).then((u) => i(u)) : i(o);
  }
  min(e, t) {
    return new a12({ ...this._def, minSize: { value: e, message: z.toString(t) } });
  }
  max(e, t) {
    return new a12({ ...this._def, maxSize: { value: e, message: z.toString(t) } });
  }
  size(e, t) {
    return this.min(e, t).max(e, t);
  }
  nonempty(e) {
    return this.min(1, e);
  }
};
it.create = (a16, e) => new it({ valueType: a16, minSize: null, maxSize: null, typeName: T.ZodSet, ...J(e) });
var Dt = class a13 extends W {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(e) {
    let { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== j.function) return C(t, { code: R.invalid_type, expected: j.function, received: t.parsedType }), H;
    function s(o, u) {
      return vt({ data: o, path: t.path, errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, rt(), dr].filter((f) => !!f), issueData: { code: R.invalid_arguments, argumentsError: u } });
    }
    function r(o, u) {
      return vt({ data: o, path: t.path, errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, rt(), dr].filter((f) => !!f), issueData: { code: R.invalid_return_type, returnTypeError: u } });
    }
    let n = { errorMap: t.common.contextualErrorMap }, i = t.data;
    if (this._def.returns instanceof xr) {
      let o = this;
      return Te(async function(...u) {
        let f = new Ie([]), h = await o._def.args.parseAsync(u, n).catch((c) => {
          throw f.addIssue(s(u, c)), f;
        }), m = await Reflect.apply(i, this, h);
        return await o._def.returns._def.type.parseAsync(m, n).catch((c) => {
          throw f.addIssue(r(m, c)), f;
        });
      });
    } else {
      let o = this;
      return Te(function(...u) {
        let f = o._def.args.safeParse(u, n);
        if (!f.success) throw new Ie([s(u, f.error)]);
        let h = Reflect.apply(i, this, f.data), m = o._def.returns.safeParse(h, n);
        if (!m.success) throw new Ie([r(h, m.error)]);
        return m.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...e) {
    return new a13({ ...this._def, args: ar.create(e).rest(hr.create()) });
  }
  returns(e) {
    return new a13({ ...this._def, returns: e });
  }
  implement(e) {
    return this.parse(e);
  }
  strictImplement(e) {
    return this.parse(e);
  }
  static create(e, t, s) {
    return new a13({ args: e || ar.create([]).rest(hr.create()), returns: t || hr.create(), typeName: T.ZodFunction, ...J(s) });
  }
};
var qr = class extends W {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    let { ctx: t } = this._processInputParams(e);
    return this._def.getter()._parse({ data: t.data, path: t.path, parent: t });
  }
};
qr.create = (a16, e) => new qr({ getter: a16, typeName: T.ZodLazy, ...J(e) });
var Mr = class extends W {
  _parse(e) {
    if (e.data !== this._def.value) {
      let t = this._getOrReturnCtx(e);
      return C(t, { received: t.data, code: R.invalid_literal, expected: this._def.value }), H;
    }
    return { status: "valid", value: e.data };
  }
  get value() {
    return this._def.value;
  }
};
Mr.create = (a16, e) => new Mr({ value: a16, typeName: T.ZodLiteral, ...J(e) });
function $s(a16, e) {
  return new Ur({ values: a16, typeName: T.ZodEnum, ...J(e) });
}
var Ur = class a14 extends W {
  _parse(e) {
    if (typeof e.data != "string") {
      let t = this._getOrReturnCtx(e), s = this._def.values;
      return C(t, { expected: X.joinValues(s), received: t.parsedType, code: R.invalid_type }), H;
    }
    if (this._cache || (this._cache = new Set(this._def.values)), !this._cache.has(e.data)) {
      let t = this._getOrReturnCtx(e), s = this._def.values;
      return C(t, { received: t.data, code: R.invalid_enum_value, options: s }), H;
    }
    return Te(e.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    let e = {};
    for (let t of this._def.values) e[t] = t;
    return e;
  }
  get Values() {
    let e = {};
    for (let t of this._def.values) e[t] = t;
    return e;
  }
  get Enum() {
    let e = {};
    for (let t of this._def.values) e[t] = t;
    return e;
  }
  extract(e, t = this._def) {
    return a14.create(e, { ...this._def, ...t });
  }
  exclude(e, t = this._def) {
    return a14.create(this.options.filter((s) => !e.includes(s)), { ...this._def, ...t });
  }
};
Ur.create = $s;
var zr = class extends W {
  _parse(e) {
    let t = X.getValidEnumValues(this._def.values), s = this._getOrReturnCtx(e);
    if (s.parsedType !== j.string && s.parsedType !== j.number) {
      let r = X.objectValues(t);
      return C(s, { expected: X.joinValues(r), received: s.parsedType, code: R.invalid_type }), H;
    }
    if (this._cache || (this._cache = new Set(X.getValidEnumValues(this._def.values))), !this._cache.has(e.data)) {
      let r = X.objectValues(t);
      return C(s, { received: s.data, code: R.invalid_enum_value, options: r }), H;
    }
    return Te(e.data);
  }
  get enum() {
    return this._def.values;
  }
};
zr.create = (a16, e) => new zr({ values: a16, typeName: T.ZodNativeEnum, ...J(e) });
var xr = class extends W {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    let { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== j.promise && t.common.async === false) return C(t, { code: R.invalid_type, expected: j.promise, received: t.parsedType }), H;
    let s = t.parsedType === j.promise ? t.data : Promise.resolve(t.data);
    return Te(s.then((r) => this._def.type.parseAsync(r, { path: t.path, errorMap: t.common.contextualErrorMap })));
  }
};
xr.create = (a16, e) => new xr({ type: a16, typeName: T.ZodPromise, ...J(e) });
var Ze = class extends W {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === T.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(e) {
    let { status: t, ctx: s } = this._processInputParams(e), r = this._def.effect || null, n = { addIssue: (i) => {
      C(s, i), i.fatal ? t.abort() : t.dirty();
    }, get path() {
      return s.path;
    } };
    if (n.addIssue = n.addIssue.bind(n), r.type === "preprocess") {
      let i = r.transform(s.data, n);
      if (s.common.async) return Promise.resolve(i).then(async (o) => {
        if (t.value === "aborted") return H;
        let u = await this._def.schema._parseAsync({ data: o, path: s.path, parent: s });
        return u.status === "aborted" ? H : u.status === "dirty" ? Ar(u.value) : t.value === "dirty" ? Ar(u.value) : u;
      });
      {
        if (t.value === "aborted") return H;
        let o = this._def.schema._parseSync({ data: i, path: s.path, parent: s });
        return o.status === "aborted" ? H : o.status === "dirty" ? Ar(o.value) : t.value === "dirty" ? Ar(o.value) : o;
      }
    }
    if (r.type === "refinement") {
      let i = (o) => {
        let u = r.refinement(o, n);
        if (s.common.async) return Promise.resolve(u);
        if (u instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return o;
      };
      if (s.common.async === false) {
        let o = this._def.schema._parseSync({ data: s.data, path: s.path, parent: s });
        return o.status === "aborted" ? H : (o.status === "dirty" && t.dirty(), i(o.value), { status: t.value, value: o.value });
      } else return this._def.schema._parseAsync({ data: s.data, path: s.path, parent: s }).then((o) => o.status === "aborted" ? H : (o.status === "dirty" && t.dirty(), i(o.value).then(() => ({ status: t.value, value: o.value }))));
    }
    if (r.type === "transform") if (s.common.async === false) {
      let i = this._def.schema._parseSync({ data: s.data, path: s.path, parent: s });
      if (!gr(i)) return H;
      let o = r.transform(i.value, n);
      if (o instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
      return { status: t.value, value: o };
    } else return this._def.schema._parseAsync({ data: s.data, path: s.path, parent: s }).then((i) => gr(i) ? Promise.resolve(r.transform(i.value, n)).then((o) => ({ status: t.value, value: o })) : H);
    X.assertNever(r);
  }
};
Ze.create = (a16, e, t) => new Ze({ schema: a16, typeName: T.ZodEffects, effect: e, ...J(t) });
Ze.createWithPreprocess = (a16, e, t) => new Ze({ schema: e, effect: { type: "preprocess", transform: a16 }, typeName: T.ZodEffects, ...J(t) });
var ze = class extends W {
  _parse(e) {
    return this._getType(e) === j.undefined ? Te(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ze.create = (a16, e) => new ze({ innerType: a16, typeName: T.ZodOptional, ...J(e) });
var sr = class extends W {
  _parse(e) {
    return this._getType(e) === j.null ? Te(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
};
sr.create = (a16, e) => new sr({ innerType: a16, typeName: T.ZodNullable, ...J(e) });
var Vr = class extends W {
  _parse(e) {
    let { ctx: t } = this._processInputParams(e), s = t.data;
    return t.parsedType === j.undefined && (s = this._def.defaultValue()), this._def.innerType._parse({ data: s, path: t.path, parent: t });
  }
  removeDefault() {
    return this._def.innerType;
  }
};
Vr.create = (a16, e) => new Vr({ innerType: a16, typeName: T.ZodDefault, defaultValue: typeof e.default == "function" ? e.default : () => e.default, ...J(e) });
var Zr = class extends W {
  _parse(e) {
    let { ctx: t } = this._processInputParams(e), s = { ...t, common: { ...t.common, issues: [] } }, r = this._def.innerType._parse({ data: s.data, path: s.path, parent: { ...s } });
    return tt(r) ? r.then((n) => ({ status: "valid", value: n.status === "valid" ? n.value : this._def.catchValue({ get error() {
      return new Ie(s.common.issues);
    }, input: s.data }) })) : { status: "valid", value: r.status === "valid" ? r.value : this._def.catchValue({ get error() {
      return new Ie(s.common.issues);
    }, input: s.data }) };
  }
  removeCatch() {
    return this._def.innerType;
  }
};
Zr.create = (a16, e) => new Zr({ innerType: a16, typeName: T.ZodCatch, catchValue: typeof e.catch == "function" ? e.catch : () => e.catch, ...J(e) });
var lt = class extends W {
  _parse(e) {
    if (this._getType(e) !== j.nan) {
      let s = this._getOrReturnCtx(e);
      return C(s, { code: R.invalid_type, expected: j.nan, received: s.parsedType }), H;
    }
    return { status: "valid", value: e.data };
  }
};
lt.create = (a16) => new lt({ typeName: T.ZodNaN, ...J(a16) });
var ql = Symbol("zod_brand");
var gt = class extends W {
  _parse(e) {
    let { ctx: t } = this._processInputParams(e), s = t.data;
    return this._def.type._parse({ data: s, path: t.path, parent: t });
  }
  unwrap() {
    return this._def.type;
  }
};
var yt = class a15 extends W {
  _parse(e) {
    let { status: t, ctx: s } = this._processInputParams(e);
    if (s.common.async) return (async () => {
      let n = await this._def.in._parseAsync({ data: s.data, path: s.path, parent: s });
      return n.status === "aborted" ? H : n.status === "dirty" ? (t.dirty(), Ar(n.value)) : this._def.out._parseAsync({ data: n.value, path: s.path, parent: s });
    })();
    {
      let r = this._def.in._parseSync({ data: s.data, path: s.path, parent: s });
      return r.status === "aborted" ? H : r.status === "dirty" ? (t.dirty(), { status: "dirty", value: r.value }) : this._def.out._parseSync({ data: r.value, path: s.path, parent: s });
    }
  }
  static create(e, t) {
    return new a15({ in: e, out: t, typeName: T.ZodPipeline });
  }
};
var Hr = class extends W {
  _parse(e) {
    let t = this._def.innerType._parse(e), s = (r) => (gr(r) && (r.value = Object.freeze(r.value)), r);
    return tt(t) ? t.then((r) => s(r)) : s(t);
  }
  unwrap() {
    return this._def.innerType;
  }
};
Hr.create = (a16, e) => new Hr({ innerType: a16, typeName: T.ZodReadonly, ...J(e) });
function Rs(a16, e) {
  let t = typeof a16 == "function" ? a16(e) : typeof a16 == "string" ? { message: a16 } : a16;
  return typeof t == "string" ? { message: t } : t;
}
function As(a16, e = {}, t) {
  return a16 ? _r.create().superRefine((s, r) => {
    let n = a16(s);
    if (n instanceof Promise) return n.then((i) => {
      if (!i) {
        let o = Rs(e, s), u = o.fatal ?? t ?? true;
        r.addIssue({ code: "custom", ...o, fatal: u });
      }
    });
    if (!n) {
      let i = Rs(e, s), o = i.fatal ?? t ?? true;
      r.addIssue({ code: "custom", ...i, fatal: o });
    }
  }) : _r.create();
}
var Ml = { object: Ce.lazycreate };
var T;
(function(a16) {
  a16.ZodString = "ZodString", a16.ZodNumber = "ZodNumber", a16.ZodNaN = "ZodNaN", a16.ZodBigInt = "ZodBigInt", a16.ZodBoolean = "ZodBoolean", a16.ZodDate = "ZodDate", a16.ZodSymbol = "ZodSymbol", a16.ZodUndefined = "ZodUndefined", a16.ZodNull = "ZodNull", a16.ZodAny = "ZodAny", a16.ZodUnknown = "ZodUnknown", a16.ZodNever = "ZodNever", a16.ZodVoid = "ZodVoid", a16.ZodArray = "ZodArray", a16.ZodObject = "ZodObject", a16.ZodUnion = "ZodUnion", a16.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", a16.ZodIntersection = "ZodIntersection", a16.ZodTuple = "ZodTuple", a16.ZodRecord = "ZodRecord", a16.ZodMap = "ZodMap", a16.ZodSet = "ZodSet", a16.ZodFunction = "ZodFunction", a16.ZodLazy = "ZodLazy", a16.ZodLiteral = "ZodLiteral", a16.ZodEnum = "ZodEnum", a16.ZodEffects = "ZodEffects", a16.ZodNativeEnum = "ZodNativeEnum", a16.ZodOptional = "ZodOptional", a16.ZodNullable = "ZodNullable", a16.ZodDefault = "ZodDefault", a16.ZodCatch = "ZodCatch", a16.ZodPromise = "ZodPromise", a16.ZodBranded = "ZodBranded", a16.ZodPipeline = "ZodPipeline", a16.ZodReadonly = "ZodReadonly";
})(T || (T = {}));
var Ul = (a16, e = { message: `Input not instance of ${a16.name}` }) => As((t) => t instanceof a16, e);
var Ds = yr.create;
var ks = Dr.create;
var zl = lt.create;
var Vl = kr.create;
var Is = Ir.create;
var Zl = Cr.create;
var Hl = st.create;
var Bl = jr.create;
var Ql = Nr.create;
var Jl = _r.create;
var Kl = hr.create;
var Wl = Je.create;
var Gl = nt.create;
var Yl = pr.create;
var Xl = Ce.create;
var eu = Ce.strictCreate;
var ru = Fr.create;
var tu = $t.create;
var au = Lr.create;
var su = ar.create;
var nu = At.create;
var ou = ot.create;
var iu = it.create;
var lu = Dt.create;
var uu = qr.create;
var cu = Mr.create;
var du = Ur.create;
var fu = zr.create;
var hu = xr.create;
var pu = Ze.create;
var mu = ze.create;
var vu = sr.create;
var gu = Ze.createWithPreprocess;
var yu = yt.create;
var _u = () => Ds().optional();
var xu = () => ks().optional();
var Pu = () => Is().optional();
var bu = { string: ((a16) => yr.create({ ...a16, coerce: true })), number: ((a16) => Dr.create({ ...a16, coerce: true })), boolean: ((a16) => Ir.create({ ...a16, coerce: true })), bigint: ((a16) => kr.create({ ...a16, coerce: true })), date: ((a16) => Cr.create({ ...a16, coerce: true })) };
var Eu = H;
var kt = "2.0";
var js = l.union([l.string(), l.number().int()]);
var Ns = l.string();
var Su = l.object({ progressToken: l.optional(js) }).passthrough();
var He = l.object({ _meta: l.optional(Su) }).passthrough();
var je = l.object({ method: l.string(), params: l.optional(He) });
var _t = l.object({ _meta: l.optional(l.object({}).passthrough()) }).passthrough();
var nr = l.object({ method: l.string(), params: l.optional(_t) });
var Be = l.object({ _meta: l.optional(l.object({}).passthrough()) }).passthrough();
var It = l.union([l.string(), l.number().int()]);
var Fs = l.object({ jsonrpc: l.literal(kt), id: It }).merge(je).strict();
var qs = l.object({ jsonrpc: l.literal(kt) }).merge(nr).strict();
var Us = l.object({ jsonrpc: l.literal(kt), id: It, result: Be }).strict();
var Ke;
(function(a16) {
  a16[a16.ConnectionClosed = -32e3] = "ConnectionClosed", a16[a16.RequestTimeout = -32001] = "RequestTimeout", a16[a16.ParseError = -32700] = "ParseError", a16[a16.InvalidRequest = -32600] = "InvalidRequest", a16[a16.MethodNotFound = -32601] = "MethodNotFound", a16[a16.InvalidParams = -32602] = "InvalidParams", a16[a16.InternalError = -32603] = "InternalError";
})(Ke || (Ke = {}));
var zs = l.object({ jsonrpc: l.literal(kt), id: It, error: l.object({ code: l.number().int(), message: l.string(), data: l.optional(l.unknown()) }) }).strict();
var Lf = l.union([Fs, qs, Us, zs]);
var Ct = Be.strict();
var jt = nr.extend({ method: l.literal("notifications/cancelled"), params: _t.extend({ requestId: It, reason: l.string().optional() }) });
var xt = l.object({ name: l.string(), title: l.optional(l.string()) }).passthrough();
var Zs = xt.extend({ version: l.string() });
var Ru = l.object({ experimental: l.optional(l.object({}).passthrough()), sampling: l.optional(l.object({}).passthrough()), elicitation: l.optional(l.object({}).passthrough()), roots: l.optional(l.object({ listChanged: l.optional(l.boolean()) }).passthrough()) }).passthrough();
var xa = je.extend({ method: l.literal("initialize"), params: He.extend({ protocolVersion: l.string(), capabilities: Ru, clientInfo: Zs }) });
var wu = l.object({ experimental: l.optional(l.object({}).passthrough()), logging: l.optional(l.object({}).passthrough()), completions: l.optional(l.object({}).passthrough()), prompts: l.optional(l.object({ listChanged: l.optional(l.boolean()) }).passthrough()), resources: l.optional(l.object({ subscribe: l.optional(l.boolean()), listChanged: l.optional(l.boolean()) }).passthrough()), tools: l.optional(l.object({ listChanged: l.optional(l.boolean()) }).passthrough()) }).passthrough();
var Tu = Be.extend({ protocolVersion: l.string(), capabilities: wu, serverInfo: Zs, instructions: l.optional(l.string()) });
var Pa = nr.extend({ method: l.literal("notifications/initialized") });
var Nt = je.extend({ method: l.literal("ping") });
var Ou = l.object({ progress: l.number(), total: l.optional(l.number()), message: l.optional(l.string()) }).passthrough();
var Ft = nr.extend({ method: l.literal("notifications/progress"), params: _t.merge(Ou).extend({ progressToken: js }) });
var Lt = je.extend({ params: He.extend({ cursor: l.optional(Ns) }).optional() });
var qt = Be.extend({ nextCursor: l.optional(Ns) });
var Hs = l.object({ uri: l.string(), mimeType: l.optional(l.string()), _meta: l.optional(l.object({}).passthrough()) }).passthrough();
var Bs = Hs.extend({ text: l.string() });
var ba = l.string().refine((a16) => {
  try {
    return atob(a16), true;
  } catch {
    return false;
  }
}, { message: "Invalid Base64 string" });
var Qs = Hs.extend({ blob: ba });
var Js = xt.extend({ uri: l.string(), description: l.optional(l.string()), mimeType: l.optional(l.string()), _meta: l.optional(l.object({}).passthrough()) });
var $u = xt.extend({ uriTemplate: l.string(), description: l.optional(l.string()), mimeType: l.optional(l.string()), _meta: l.optional(l.object({}).passthrough()) });
var Ea = Lt.extend({ method: l.literal("resources/list") });
var Au = qt.extend({ resources: l.array(Js) });
var Sa = Lt.extend({ method: l.literal("resources/templates/list") });
var Du = qt.extend({ resourceTemplates: l.array($u) });
var Ra = je.extend({ method: l.literal("resources/read"), params: He.extend({ uri: l.string() }) });
var ku = Be.extend({ contents: l.array(l.union([Bs, Qs])) });
var Iu = nr.extend({ method: l.literal("notifications/resources/list_changed") });
var Cu = je.extend({ method: l.literal("resources/subscribe"), params: He.extend({ uri: l.string() }) });
var ju = je.extend({ method: l.literal("resources/unsubscribe"), params: He.extend({ uri: l.string() }) });
var Nu = nr.extend({ method: l.literal("notifications/resources/updated"), params: _t.extend({ uri: l.string() }) });
var Fu = l.object({ name: l.string(), description: l.optional(l.string()), required: l.optional(l.boolean()) }).passthrough();
var Lu = xt.extend({ description: l.optional(l.string()), arguments: l.optional(l.array(Fu)), _meta: l.optional(l.object({}).passthrough()) });
var wa = Lt.extend({ method: l.literal("prompts/list") });
var qu = qt.extend({ prompts: l.array(Lu) });
var Ta = je.extend({ method: l.literal("prompts/get"), params: He.extend({ name: l.string(), arguments: l.optional(l.record(l.string())) }) });
var Oa = l.object({ type: l.literal("text"), text: l.string(), _meta: l.optional(l.object({}).passthrough()) }).passthrough();
var $a = l.object({ type: l.literal("image"), data: ba, mimeType: l.string(), _meta: l.optional(l.object({}).passthrough()) }).passthrough();
var Aa = l.object({ type: l.literal("audio"), data: ba, mimeType: l.string(), _meta: l.optional(l.object({}).passthrough()) }).passthrough();
var Mu = l.object({ type: l.literal("resource"), resource: l.union([Bs, Qs]), _meta: l.optional(l.object({}).passthrough()) }).passthrough();
var Uu = Js.extend({ type: l.literal("resource_link") });
var Ks = l.union([Oa, $a, Aa, Uu, Mu]);
var zu = l.object({ role: l.enum(["user", "assistant"]), content: Ks }).passthrough();
var Vu = Be.extend({ description: l.optional(l.string()), messages: l.array(zu) });
var Zu = nr.extend({ method: l.literal("notifications/prompts/list_changed") });
var Hu = l.object({ title: l.optional(l.string()), readOnlyHint: l.optional(l.boolean()), destructiveHint: l.optional(l.boolean()), idempotentHint: l.optional(l.boolean()), openWorldHint: l.optional(l.boolean()) }).passthrough();
var Bu = xt.extend({ description: l.optional(l.string()), inputSchema: l.object({ type: l.literal("object"), properties: l.optional(l.object({}).passthrough()), required: l.optional(l.array(l.string())) }).passthrough(), outputSchema: l.optional(l.object({ type: l.literal("object"), properties: l.optional(l.object({}).passthrough()), required: l.optional(l.array(l.string())) }).passthrough()), annotations: l.optional(Hu), _meta: l.optional(l.object({}).passthrough()) });
var Da = Lt.extend({ method: l.literal("tools/list") });
var Qu = qt.extend({ tools: l.array(Bu) });
var Ws = Be.extend({ content: l.array(Ks).default([]), structuredContent: l.object({}).passthrough().optional(), isError: l.optional(l.boolean()) });
var qf = Ws.or(Be.extend({ toolResult: l.unknown() }));
var ka = je.extend({ method: l.literal("tools/call"), params: He.extend({ name: l.string(), arguments: l.optional(l.record(l.unknown())) }) });
var Ju = nr.extend({ method: l.literal("notifications/tools/list_changed") });
var Gs = l.enum(["debug", "info", "notice", "warning", "error", "critical", "alert", "emergency"]);
var Ku = je.extend({ method: l.literal("logging/setLevel"), params: He.extend({ level: Gs }) });
var Wu = nr.extend({ method: l.literal("notifications/message"), params: _t.extend({ level: Gs, logger: l.optional(l.string()), data: l.unknown() }) });
var Gu = l.object({ name: l.string().optional() }).passthrough();
var Yu = l.object({ hints: l.optional(l.array(Gu)), costPriority: l.optional(l.number().min(0).max(1)), speedPriority: l.optional(l.number().min(0).max(1)), intelligencePriority: l.optional(l.number().min(0).max(1)) }).passthrough();
var Xu = l.object({ role: l.enum(["user", "assistant"]), content: l.union([Oa, $a, Aa]) }).passthrough();
var ec = je.extend({ method: l.literal("sampling/createMessage"), params: He.extend({ messages: l.array(Xu), systemPrompt: l.optional(l.string()), includeContext: l.optional(l.enum(["none", "thisServer", "allServers"])), temperature: l.optional(l.number()), maxTokens: l.number().int(), stopSequences: l.optional(l.array(l.string())), metadata: l.optional(l.object({}).passthrough()), modelPreferences: l.optional(Yu) }) });
var Ia = Be.extend({ model: l.string(), stopReason: l.optional(l.enum(["endTurn", "stopSequence", "maxTokens"]).or(l.string())), role: l.enum(["user", "assistant"]), content: l.discriminatedUnion("type", [Oa, $a, Aa]) });
var rc = l.object({ type: l.literal("boolean"), title: l.optional(l.string()), description: l.optional(l.string()), default: l.optional(l.boolean()) }).passthrough();
var tc = l.object({ type: l.literal("string"), title: l.optional(l.string()), description: l.optional(l.string()), minLength: l.optional(l.number()), maxLength: l.optional(l.number()), format: l.optional(l.enum(["email", "uri", "date", "date-time"])) }).passthrough();
var ac = l.object({ type: l.enum(["number", "integer"]), title: l.optional(l.string()), description: l.optional(l.string()), minimum: l.optional(l.number()), maximum: l.optional(l.number()) }).passthrough();
var sc = l.object({ type: l.literal("string"), title: l.optional(l.string()), description: l.optional(l.string()), enum: l.array(l.string()), enumNames: l.optional(l.array(l.string())) }).passthrough();
var nc = l.union([rc, tc, ac, sc]);
var oc = je.extend({ method: l.literal("elicitation/create"), params: He.extend({ message: l.string(), requestedSchema: l.object({ type: l.literal("object"), properties: l.record(l.string(), nc), required: l.optional(l.array(l.string())) }).passthrough() }) });
var Ca = Be.extend({ action: l.enum(["accept", "decline", "cancel"]), content: l.optional(l.record(l.string(), l.unknown())) });
var ic = l.object({ type: l.literal("ref/resource"), uri: l.string() }).passthrough();
var lc = l.object({ type: l.literal("ref/prompt"), name: l.string() }).passthrough();
var uc = je.extend({ method: l.literal("completion/complete"), params: He.extend({ ref: l.union([lc, ic]), argument: l.object({ name: l.string(), value: l.string() }).passthrough(), context: l.optional(l.object({ arguments: l.optional(l.record(l.string(), l.string())) })) }) });
var cc = Be.extend({ completion: l.object({ values: l.array(l.string()).max(100), total: l.optional(l.number().int()), hasMore: l.optional(l.boolean()) }).passthrough() });
var dc = l.object({ uri: l.string().startsWith("file://"), name: l.optional(l.string()), _meta: l.optional(l.object({}).passthrough()) }).passthrough();
var fc = je.extend({ method: l.literal("roots/list") });
var ja = Be.extend({ roots: l.array(dc) });
var hc = nr.extend({ method: l.literal("notifications/roots/list_changed") });
var Mf = l.union([Nt, xa, uc, Ku, Ta, wa, Ea, Sa, Ra, Cu, ju, ka, Da]);
var Uf = l.union([jt, Ft, Pa, hc]);
var zf = l.union([Ct, Ia, Ca, ja]);
var Vf = l.union([Nt, ec, oc, fc]);
var Zf = l.union([jt, Ft, Wu, Nu, Iu, Ju, Zu]);
var Hf = l.union([Ct, Tu, cc, Vu, qu, Au, Du, ku, Ws, Qu]);
var ti = hl(ri(), 1);
var si = Symbol("Let zodToJsonSchema decide on which parser to use");
var Kd = new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");
function Hv(a16) {
  return a16;
}

// ../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/external.js
var external_exports = {};
__export(external_exports, {
  BRAND: () => BRAND,
  DIRTY: () => DIRTY,
  EMPTY_PATH: () => EMPTY_PATH,
  INVALID: () => INVALID,
  NEVER: () => NEVER,
  OK: () => OK,
  ParseStatus: () => ParseStatus,
  Schema: () => ZodType,
  ZodAny: () => ZodAny,
  ZodArray: () => ZodArray,
  ZodBigInt: () => ZodBigInt,
  ZodBoolean: () => ZodBoolean,
  ZodBranded: () => ZodBranded,
  ZodCatch: () => ZodCatch,
  ZodDate: () => ZodDate,
  ZodDefault: () => ZodDefault,
  ZodDiscriminatedUnion: () => ZodDiscriminatedUnion,
  ZodEffects: () => ZodEffects,
  ZodEnum: () => ZodEnum,
  ZodError: () => ZodError,
  ZodFirstPartyTypeKind: () => ZodFirstPartyTypeKind,
  ZodFunction: () => ZodFunction,
  ZodIntersection: () => ZodIntersection,
  ZodIssueCode: () => ZodIssueCode,
  ZodLazy: () => ZodLazy,
  ZodLiteral: () => ZodLiteral,
  ZodMap: () => ZodMap,
  ZodNaN: () => ZodNaN,
  ZodNativeEnum: () => ZodNativeEnum,
  ZodNever: () => ZodNever,
  ZodNull: () => ZodNull,
  ZodNullable: () => ZodNullable,
  ZodNumber: () => ZodNumber,
  ZodObject: () => ZodObject,
  ZodOptional: () => ZodOptional,
  ZodParsedType: () => ZodParsedType,
  ZodPipeline: () => ZodPipeline,
  ZodPromise: () => ZodPromise,
  ZodReadonly: () => ZodReadonly,
  ZodRecord: () => ZodRecord,
  ZodSchema: () => ZodType,
  ZodSet: () => ZodSet,
  ZodString: () => ZodString,
  ZodSymbol: () => ZodSymbol,
  ZodTransformer: () => ZodEffects,
  ZodTuple: () => ZodTuple,
  ZodType: () => ZodType,
  ZodUndefined: () => ZodUndefined,
  ZodUnion: () => ZodUnion,
  ZodUnknown: () => ZodUnknown,
  ZodVoid: () => ZodVoid,
  addIssueToContext: () => addIssueToContext,
  any: () => anyType,
  array: () => arrayType,
  bigint: () => bigIntType,
  boolean: () => booleanType,
  coerce: () => coerce,
  custom: () => custom,
  date: () => dateType,
  datetimeRegex: () => datetimeRegex,
  defaultErrorMap: () => en_default,
  discriminatedUnion: () => discriminatedUnionType,
  effect: () => effectsType,
  enum: () => enumType,
  function: () => functionType,
  getErrorMap: () => getErrorMap,
  getParsedType: () => getParsedType,
  instanceof: () => instanceOfType,
  intersection: () => intersectionType,
  isAborted: () => isAborted,
  isAsync: () => isAsync,
  isDirty: () => isDirty,
  isValid: () => isValid,
  late: () => late,
  lazy: () => lazyType,
  literal: () => literalType,
  makeIssue: () => makeIssue,
  map: () => mapType,
  nan: () => nanType,
  nativeEnum: () => nativeEnumType,
  never: () => neverType,
  null: () => nullType,
  nullable: () => nullableType,
  number: () => numberType,
  object: () => objectType,
  objectUtil: () => objectUtil,
  oboolean: () => oboolean,
  onumber: () => onumber,
  optional: () => optionalType,
  ostring: () => ostring,
  pipeline: () => pipelineType,
  preprocess: () => preprocessType,
  promise: () => promiseType,
  quotelessJson: () => quotelessJson,
  record: () => recordType,
  set: () => setType,
  setErrorMap: () => setErrorMap,
  strictObject: () => strictObjectType,
  string: () => stringType,
  symbol: () => symbolType,
  transformer: () => effectsType,
  tuple: () => tupleType,
  undefined: () => undefinedType,
  union: () => unionType,
  unknown: () => unknownType,
  util: () => util,
  void: () => voidType
});

// ../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/helpers/util.js
var util;
(function(util2) {
  util2.assertEqual = (_) => {
  };
  function assertIs(_arg) {
  }
  util2.assertIs = assertIs;
  function assertNever(_x) {
    throw new Error();
  }
  util2.assertNever = assertNever;
  util2.arrayToEnum = (items) => {
    const obj = {};
    for (const item of items) {
      obj[item] = item;
    }
    return obj;
  };
  util2.getValidEnumValues = (obj) => {
    const validKeys = util2.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
    const filtered = {};
    for (const k of validKeys) {
      filtered[k] = obj[k];
    }
    return util2.objectValues(filtered);
  };
  util2.objectValues = (obj) => {
    return util2.objectKeys(obj).map(function(e) {
      return obj[e];
    });
  };
  util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
    const keys = [];
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        keys.push(key);
      }
    }
    return keys;
  };
  util2.find = (arr, checker) => {
    for (const item of arr) {
      if (checker(item))
        return item;
    }
    return void 0;
  };
  util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && Number.isFinite(val) && Math.floor(val) === val;
  function joinValues(array, separator = " | ") {
    return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
  }
  util2.joinValues = joinValues;
  util2.jsonStringifyReplacer = (_, value) => {
    if (typeof value === "bigint") {
      return value.toString();
    }
    return value;
  };
})(util || (util = {}));
var objectUtil;
(function(objectUtil2) {
  objectUtil2.mergeShapes = (first, second) => {
    return {
      ...first,
      ...second
      // second overwrites first
    };
  };
})(objectUtil || (objectUtil = {}));
var ZodParsedType = util.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]);
var getParsedType = (data) => {
  const t = typeof data;
  switch (t) {
    case "undefined":
      return ZodParsedType.undefined;
    case "string":
      return ZodParsedType.string;
    case "number":
      return Number.isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
    case "boolean":
      return ZodParsedType.boolean;
    case "function":
      return ZodParsedType.function;
    case "bigint":
      return ZodParsedType.bigint;
    case "symbol":
      return ZodParsedType.symbol;
    case "object":
      if (Array.isArray(data)) {
        return ZodParsedType.array;
      }
      if (data === null) {
        return ZodParsedType.null;
      }
      if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
        return ZodParsedType.promise;
      }
      if (typeof Map !== "undefined" && data instanceof Map) {
        return ZodParsedType.map;
      }
      if (typeof Set !== "undefined" && data instanceof Set) {
        return ZodParsedType.set;
      }
      if (typeof Date !== "undefined" && data instanceof Date) {
        return ZodParsedType.date;
      }
      return ZodParsedType.object;
    default:
      return ZodParsedType.unknown;
  }
};

// ../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/ZodError.js
var ZodIssueCode = util.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
var quotelessJson = (obj) => {
  const json = JSON.stringify(obj, null, 2);
  return json.replace(/"([^"]+)":/g, "$1:");
};
var ZodError = class _ZodError extends Error {
  get errors() {
    return this.issues;
  }
  constructor(issues) {
    super();
    this.issues = [];
    this.addIssue = (sub) => {
      this.issues = [...this.issues, sub];
    };
    this.addIssues = (subs = []) => {
      this.issues = [...this.issues, ...subs];
    };
    const actualProto = new.target.prototype;
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(this, actualProto);
    } else {
      this.__proto__ = actualProto;
    }
    this.name = "ZodError";
    this.issues = issues;
  }
  format(_mapper) {
    const mapper = _mapper || function(issue) {
      return issue.message;
    };
    const fieldErrors = { _errors: [] };
    const processError = (error) => {
      for (const issue of error.issues) {
        if (issue.code === "invalid_union") {
          issue.unionErrors.map(processError);
        } else if (issue.code === "invalid_return_type") {
          processError(issue.returnTypeError);
        } else if (issue.code === "invalid_arguments") {
          processError(issue.argumentsError);
        } else if (issue.path.length === 0) {
          fieldErrors._errors.push(mapper(issue));
        } else {
          let curr = fieldErrors;
          let i = 0;
          while (i < issue.path.length) {
            const el = issue.path[i];
            const terminal = i === issue.path.length - 1;
            if (!terminal) {
              curr[el] = curr[el] || { _errors: [] };
            } else {
              curr[el] = curr[el] || { _errors: [] };
              curr[el]._errors.push(mapper(issue));
            }
            curr = curr[el];
            i++;
          }
        }
      }
    };
    processError(this);
    return fieldErrors;
  }
  static assert(value) {
    if (!(value instanceof _ZodError)) {
      throw new Error(`Not a ZodError: ${value}`);
    }
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(mapper = (issue) => issue.message) {
    const fieldErrors = {};
    const formErrors = [];
    for (const sub of this.issues) {
      if (sub.path.length > 0) {
        const firstEl = sub.path[0];
        fieldErrors[firstEl] = fieldErrors[firstEl] || [];
        fieldErrors[firstEl].push(mapper(sub));
      } else {
        formErrors.push(mapper(sub));
      }
    }
    return { formErrors, fieldErrors };
  }
  get formErrors() {
    return this.flatten();
  }
};
ZodError.create = (issues) => {
  const error = new ZodError(issues);
  return error;
};

// ../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/locales/en.js
var errorMap = (issue, _ctx) => {
  let message;
  switch (issue.code) {
    case ZodIssueCode.invalid_type:
      if (issue.received === ZodParsedType.undefined) {
        message = "Required";
      } else {
        message = `Expected ${issue.expected}, received ${issue.received}`;
      }
      break;
    case ZodIssueCode.invalid_literal:
      message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
      break;
    case ZodIssueCode.unrecognized_keys:
      message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
      break;
    case ZodIssueCode.invalid_union:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_union_discriminator:
      message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
      break;
    case ZodIssueCode.invalid_enum_value:
      message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
      break;
    case ZodIssueCode.invalid_arguments:
      message = `Invalid function arguments`;
      break;
    case ZodIssueCode.invalid_return_type:
      message = `Invalid function return type`;
      break;
    case ZodIssueCode.invalid_date:
      message = `Invalid date`;
      break;
    case ZodIssueCode.invalid_string:
      if (typeof issue.validation === "object") {
        if ("includes" in issue.validation) {
          message = `Invalid input: must include "${issue.validation.includes}"`;
          if (typeof issue.validation.position === "number") {
            message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
          }
        } else if ("startsWith" in issue.validation) {
          message = `Invalid input: must start with "${issue.validation.startsWith}"`;
        } else if ("endsWith" in issue.validation) {
          message = `Invalid input: must end with "${issue.validation.endsWith}"`;
        } else {
          util.assertNever(issue.validation);
        }
      } else if (issue.validation !== "regex") {
        message = `Invalid ${issue.validation}`;
      } else {
        message = "Invalid";
      }
      break;
    case ZodIssueCode.too_small:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "bigint")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.too_big:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "bigint")
        message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.custom:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_intersection_types:
      message = `Intersection results could not be merged`;
      break;
    case ZodIssueCode.not_multiple_of:
      message = `Number must be a multiple of ${issue.multipleOf}`;
      break;
    case ZodIssueCode.not_finite:
      message = "Number must be finite";
      break;
    default:
      message = _ctx.defaultError;
      util.assertNever(issue);
  }
  return { message };
};
var en_default = errorMap;

// ../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/errors.js
var overrideErrorMap = en_default;
function setErrorMap(map) {
  overrideErrorMap = map;
}
function getErrorMap() {
  return overrideErrorMap;
}

// ../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/helpers/parseUtil.js
var makeIssue = (params) => {
  const { data, path, errorMaps, issueData } = params;
  const fullPath = [...path, ...issueData.path || []];
  const fullIssue = {
    ...issueData,
    path: fullPath
  };
  if (issueData.message !== void 0) {
    return {
      ...issueData,
      path: fullPath,
      message: issueData.message
    };
  }
  let errorMessage = "";
  const maps = errorMaps.filter((m) => !!m).slice().reverse();
  for (const map of maps) {
    errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
  }
  return {
    ...issueData,
    path: fullPath,
    message: errorMessage
  };
};
var EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
  const overrideMap = getErrorMap();
  const issue = makeIssue({
    issueData,
    data: ctx.data,
    path: ctx.path,
    errorMaps: [
      ctx.common.contextualErrorMap,
      // contextual error map is first priority
      ctx.schemaErrorMap,
      // then schema-bound map if available
      overrideMap,
      // then global override map
      overrideMap === en_default ? void 0 : en_default
      // then global default map
    ].filter((x) => !!x)
  });
  ctx.common.issues.push(issue);
}
var ParseStatus = class _ParseStatus {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    if (this.value === "valid")
      this.value = "dirty";
  }
  abort() {
    if (this.value !== "aborted")
      this.value = "aborted";
  }
  static mergeArray(status, results) {
    const arrayValue = [];
    for (const s of results) {
      if (s.status === "aborted")
        return INVALID;
      if (s.status === "dirty")
        status.dirty();
      arrayValue.push(s.value);
    }
    return { status: status.value, value: arrayValue };
  }
  static async mergeObjectAsync(status, pairs) {
    const syncPairs = [];
    for (const pair of pairs) {
      const key = await pair.key;
      const value = await pair.value;
      syncPairs.push({
        key,
        value
      });
    }
    return _ParseStatus.mergeObjectSync(status, syncPairs);
  }
  static mergeObjectSync(status, pairs) {
    const finalObject = {};
    for (const pair of pairs) {
      const { key, value } = pair;
      if (key.status === "aborted")
        return INVALID;
      if (value.status === "aborted")
        return INVALID;
      if (key.status === "dirty")
        status.dirty();
      if (value.status === "dirty")
        status.dirty();
      if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
        finalObject[key.value] = value.value;
      }
    }
    return { status: status.value, value: finalObject };
  }
};
var INVALID = Object.freeze({
  status: "aborted"
});
var DIRTY = (value) => ({ status: "dirty", value });
var OK = (value) => ({ status: "valid", value });
var isAborted = (x) => x.status === "aborted";
var isDirty = (x) => x.status === "dirty";
var isValid = (x) => x.status === "valid";
var isAsync = (x) => typeof Promise !== "undefined" && x instanceof Promise;

// ../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/helpers/errorUtil.js
var errorUtil;
(function(errorUtil2) {
  errorUtil2.errToObj = (message) => typeof message === "string" ? { message } : message || {};
  errorUtil2.toString = (message) => typeof message === "string" ? message : message?.message;
})(errorUtil || (errorUtil = {}));

// ../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/types.js
var ParseInputLazyPath = class {
  constructor(parent, value, path, key) {
    this._cachedPath = [];
    this.parent = parent;
    this.data = value;
    this._path = path;
    this._key = key;
  }
  get path() {
    if (!this._cachedPath.length) {
      if (Array.isArray(this._key)) {
        this._cachedPath.push(...this._path, ...this._key);
      } else {
        this._cachedPath.push(...this._path, this._key);
      }
    }
    return this._cachedPath;
  }
};
var handleResult = (ctx, result) => {
  if (isValid(result)) {
    return { success: true, data: result.value };
  } else {
    if (!ctx.common.issues.length) {
      throw new Error("Validation failed but no issues detected.");
    }
    return {
      success: false,
      get error() {
        if (this._error)
          return this._error;
        const error = new ZodError(ctx.common.issues);
        this._error = error;
        return this._error;
      }
    };
  }
};
function processCreateParams(params) {
  if (!params)
    return {};
  const { errorMap: errorMap2, invalid_type_error, required_error, description } = params;
  if (errorMap2 && (invalid_type_error || required_error)) {
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  }
  if (errorMap2)
    return { errorMap: errorMap2, description };
  const customMap = (iss, ctx) => {
    const { message } = params;
    if (iss.code === "invalid_enum_value") {
      return { message: message ?? ctx.defaultError };
    }
    if (typeof ctx.data === "undefined") {
      return { message: message ?? required_error ?? ctx.defaultError };
    }
    if (iss.code !== "invalid_type")
      return { message: ctx.defaultError };
    return { message: message ?? invalid_type_error ?? ctx.defaultError };
  };
  return { errorMap: customMap, description };
}
var ZodType = class {
  get description() {
    return this._def.description;
  }
  _getType(input) {
    return getParsedType(input.data);
  }
  _getOrReturnCtx(input, ctx) {
    return ctx || {
      common: input.parent.common,
      data: input.data,
      parsedType: getParsedType(input.data),
      schemaErrorMap: this._def.errorMap,
      path: input.path,
      parent: input.parent
    };
  }
  _processInputParams(input) {
    return {
      status: new ParseStatus(),
      ctx: {
        common: input.parent.common,
        data: input.data,
        parsedType: getParsedType(input.data),
        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent
      }
    };
  }
  _parseSync(input) {
    const result = this._parse(input);
    if (isAsync(result)) {
      throw new Error("Synchronous parse encountered promise.");
    }
    return result;
  }
  _parseAsync(input) {
    const result = this._parse(input);
    return Promise.resolve(result);
  }
  parse(data, params) {
    const result = this.safeParse(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  safeParse(data, params) {
    const ctx = {
      common: {
        issues: [],
        async: params?.async ?? false,
        contextualErrorMap: params?.errorMap
      },
      path: params?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const result = this._parseSync({ data, path: ctx.path, parent: ctx });
    return handleResult(ctx, result);
  }
  "~validate"(data) {
    const ctx = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    if (!this["~standard"].async) {
      try {
        const result = this._parseSync({ data, path: [], parent: ctx });
        return isValid(result) ? {
          value: result.value
        } : {
          issues: ctx.common.issues
        };
      } catch (err) {
        if (err?.message?.toLowerCase()?.includes("encountered")) {
          this["~standard"].async = true;
        }
        ctx.common = {
          issues: [],
          async: true
        };
      }
    }
    return this._parseAsync({ data, path: [], parent: ctx }).then((result) => isValid(result) ? {
      value: result.value
    } : {
      issues: ctx.common.issues
    });
  }
  async parseAsync(data, params) {
    const result = await this.safeParseAsync(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  async safeParseAsync(data, params) {
    const ctx = {
      common: {
        issues: [],
        contextualErrorMap: params?.errorMap,
        async: true
      },
      path: params?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
    const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
    return handleResult(ctx, result);
  }
  refine(check, message) {
    const getIssueProperties = (val) => {
      if (typeof message === "string" || typeof message === "undefined") {
        return { message };
      } else if (typeof message === "function") {
        return message(val);
      } else {
        return message;
      }
    };
    return this._refinement((val, ctx) => {
      const result = check(val);
      const setError = () => ctx.addIssue({
        code: ZodIssueCode.custom,
        ...getIssueProperties(val)
      });
      if (typeof Promise !== "undefined" && result instanceof Promise) {
        return result.then((data) => {
          if (!data) {
            setError();
            return false;
          } else {
            return true;
          }
        });
      }
      if (!result) {
        setError();
        return false;
      } else {
        return true;
      }
    });
  }
  refinement(check, refinementData) {
    return this._refinement((val, ctx) => {
      if (!check(val)) {
        ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
        return false;
      } else {
        return true;
      }
    });
  }
  _refinement(refinement) {
    return new ZodEffects({
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "refinement", refinement }
    });
  }
  superRefine(refinement) {
    return this._refinement(refinement);
  }
  constructor(def) {
    this.spa = this.safeParseAsync;
    this._def = def;
    this.parse = this.parse.bind(this);
    this.safeParse = this.safeParse.bind(this);
    this.parseAsync = this.parseAsync.bind(this);
    this.safeParseAsync = this.safeParseAsync.bind(this);
    this.spa = this.spa.bind(this);
    this.refine = this.refine.bind(this);
    this.refinement = this.refinement.bind(this);
    this.superRefine = this.superRefine.bind(this);
    this.optional = this.optional.bind(this);
    this.nullable = this.nullable.bind(this);
    this.nullish = this.nullish.bind(this);
    this.array = this.array.bind(this);
    this.promise = this.promise.bind(this);
    this.or = this.or.bind(this);
    this.and = this.and.bind(this);
    this.transform = this.transform.bind(this);
    this.brand = this.brand.bind(this);
    this.default = this.default.bind(this);
    this.catch = this.catch.bind(this);
    this.describe = this.describe.bind(this);
    this.pipe = this.pipe.bind(this);
    this.readonly = this.readonly.bind(this);
    this.isNullable = this.isNullable.bind(this);
    this.isOptional = this.isOptional.bind(this);
    this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: (data) => this["~validate"](data)
    };
  }
  optional() {
    return ZodOptional.create(this, this._def);
  }
  nullable() {
    return ZodNullable.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ZodArray.create(this);
  }
  promise() {
    return ZodPromise.create(this, this._def);
  }
  or(option) {
    return ZodUnion.create([this, option], this._def);
  }
  and(incoming) {
    return ZodIntersection.create(this, incoming, this._def);
  }
  transform(transform) {
    return new ZodEffects({
      ...processCreateParams(this._def),
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "transform", transform }
    });
  }
  default(def) {
    const defaultValueFunc = typeof def === "function" ? def : () => def;
    return new ZodDefault({
      ...processCreateParams(this._def),
      innerType: this,
      defaultValue: defaultValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodDefault
    });
  }
  brand() {
    return new ZodBranded({
      typeName: ZodFirstPartyTypeKind.ZodBranded,
      type: this,
      ...processCreateParams(this._def)
    });
  }
  catch(def) {
    const catchValueFunc = typeof def === "function" ? def : () => def;
    return new ZodCatch({
      ...processCreateParams(this._def),
      innerType: this,
      catchValue: catchValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodCatch
    });
  }
  describe(description) {
    const This = this.constructor;
    return new This({
      ...this._def,
      description
    });
  }
  pipe(target) {
    return ZodPipeline.create(this, target);
  }
  readonly() {
    return ZodReadonly.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
};
var cuidRegex = /^c[^\s-]{8,}$/i;
var cuid2Regex = /^[0-9a-z]+$/;
var ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
var uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
var nanoidRegex = /^[a-z0-9_-]{21}$/i;
var jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
var durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
var emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
var _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
var emojiRegex;
var ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
var ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
var ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
var base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
var dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
var dateRegex = new RegExp(`^${dateRegexSource}$`);
function timeRegexSource(args) {
  let secondsRegexSource = `[0-5]\\d`;
  if (args.precision) {
    secondsRegexSource = `${secondsRegexSource}\\.\\d{${args.precision}}`;
  } else if (args.precision == null) {
    secondsRegexSource = `${secondsRegexSource}(\\.\\d+)?`;
  }
  const secondsQuantifier = args.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${secondsRegexSource})${secondsQuantifier}`;
}
function timeRegex(args) {
  return new RegExp(`^${timeRegexSource(args)}$`);
}
function datetimeRegex(args) {
  let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
  const opts = [];
  opts.push(args.local ? `Z?` : `Z`);
  if (args.offset)
    opts.push(`([+-]\\d{2}:?\\d{2})`);
  regex = `${regex}(${opts.join("|")})`;
  return new RegExp(`^${regex}$`);
}
function isValidIP(ip, version) {
  if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
    return true;
  }
  return false;
}
function isValidJWT(jwt, alg) {
  if (!jwtRegex.test(jwt))
    return false;
  try {
    const [header] = jwt.split(".");
    if (!header)
      return false;
    const base64 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "=");
    const decoded = JSON.parse(atob(base64));
    if (typeof decoded !== "object" || decoded === null)
      return false;
    if ("typ" in decoded && decoded?.typ !== "JWT")
      return false;
    if (!decoded.alg)
      return false;
    if (alg && decoded.alg !== alg)
      return false;
    return true;
  } catch {
    return false;
  }
}
function isValidCidr(ip, version) {
  if ((version === "v4" || !version) && ipv4CidrRegex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6CidrRegex.test(ip)) {
    return true;
  }
  return false;
}
var ZodString = class _ZodString extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = String(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.string) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.string,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.length < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.length > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "length") {
        const tooBig = input.data.length > check.value;
        const tooSmall = input.data.length < check.value;
        if (tooBig || tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          if (tooBig) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          } else if (tooSmall) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          }
          status.dirty();
        }
      } else if (check.kind === "email") {
        if (!emailRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "email",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "emoji") {
        if (!emojiRegex) {
          emojiRegex = new RegExp(_emojiRegex, "u");
        }
        if (!emojiRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "emoji",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "uuid") {
        if (!uuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "uuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "nanoid") {
        if (!nanoidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "nanoid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid") {
        if (!cuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid2") {
        if (!cuid2Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid2",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ulid") {
        if (!ulidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ulid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "url") {
        try {
          new URL(input.data);
        } catch {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "regex") {
        check.regex.lastIndex = 0;
        const testResult = check.regex.test(input.data);
        if (!testResult) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "regex",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "trim") {
        input.data = input.data.trim();
      } else if (check.kind === "includes") {
        if (!input.data.includes(check.value, check.position)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { includes: check.value, position: check.position },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "toLowerCase") {
        input.data = input.data.toLowerCase();
      } else if (check.kind === "toUpperCase") {
        input.data = input.data.toUpperCase();
      } else if (check.kind === "startsWith") {
        if (!input.data.startsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { startsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "endsWith") {
        if (!input.data.endsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { endsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "datetime") {
        const regex = datetimeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "datetime",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "date") {
        const regex = dateRegex;
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "date",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "time") {
        const regex = timeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "time",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "duration") {
        if (!durationRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "duration",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ip") {
        if (!isValidIP(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ip",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "jwt") {
        if (!isValidJWT(input.data, check.alg)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "jwt",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cidr") {
        if (!isValidCidr(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cidr",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64") {
        if (!base64Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64url") {
        if (!base64urlRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _regex(regex, validation, message) {
    return this.refinement((data) => regex.test(data), {
      validation,
      code: ZodIssueCode.invalid_string,
      ...errorUtil.errToObj(message)
    });
  }
  _addCheck(check) {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  email(message) {
    return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
  }
  url(message) {
    return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
  }
  emoji(message) {
    return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
  }
  uuid(message) {
    return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
  }
  nanoid(message) {
    return this._addCheck({ kind: "nanoid", ...errorUtil.errToObj(message) });
  }
  cuid(message) {
    return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
  }
  cuid2(message) {
    return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
  }
  ulid(message) {
    return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
  }
  base64(message) {
    return this._addCheck({ kind: "base64", ...errorUtil.errToObj(message) });
  }
  base64url(message) {
    return this._addCheck({
      kind: "base64url",
      ...errorUtil.errToObj(message)
    });
  }
  jwt(options) {
    return this._addCheck({ kind: "jwt", ...errorUtil.errToObj(options) });
  }
  ip(options) {
    return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
  }
  cidr(options) {
    return this._addCheck({ kind: "cidr", ...errorUtil.errToObj(options) });
  }
  datetime(options) {
    if (typeof options === "string") {
      return this._addCheck({
        kind: "datetime",
        precision: null,
        offset: false,
        local: false,
        message: options
      });
    }
    return this._addCheck({
      kind: "datetime",
      precision: typeof options?.precision === "undefined" ? null : options?.precision,
      offset: options?.offset ?? false,
      local: options?.local ?? false,
      ...errorUtil.errToObj(options?.message)
    });
  }
  date(message) {
    return this._addCheck({ kind: "date", message });
  }
  time(options) {
    if (typeof options === "string") {
      return this._addCheck({
        kind: "time",
        precision: null,
        message: options
      });
    }
    return this._addCheck({
      kind: "time",
      precision: typeof options?.precision === "undefined" ? null : options?.precision,
      ...errorUtil.errToObj(options?.message)
    });
  }
  duration(message) {
    return this._addCheck({ kind: "duration", ...errorUtil.errToObj(message) });
  }
  regex(regex, message) {
    return this._addCheck({
      kind: "regex",
      regex,
      ...errorUtil.errToObj(message)
    });
  }
  includes(value, options) {
    return this._addCheck({
      kind: "includes",
      value,
      position: options?.position,
      ...errorUtil.errToObj(options?.message)
    });
  }
  startsWith(value, message) {
    return this._addCheck({
      kind: "startsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  endsWith(value, message) {
    return this._addCheck({
      kind: "endsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  min(minLength, message) {
    return this._addCheck({
      kind: "min",
      value: minLength,
      ...errorUtil.errToObj(message)
    });
  }
  max(maxLength, message) {
    return this._addCheck({
      kind: "max",
      value: maxLength,
      ...errorUtil.errToObj(message)
    });
  }
  length(len, message) {
    return this._addCheck({
      kind: "length",
      value: len,
      ...errorUtil.errToObj(message)
    });
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(message) {
    return this.min(1, errorUtil.errToObj(message));
  }
  trim() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((ch) => ch.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((ch) => ch.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((ch) => ch.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((ch) => ch.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((ch) => ch.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((ch) => ch.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((ch) => ch.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((ch) => ch.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((ch) => ch.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((ch) => ch.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((ch) => ch.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((ch) => ch.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((ch) => ch.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((ch) => ch.kind === "base64url");
  }
  get minLength() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxLength() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodString.create = (params) => {
  return new ZodString({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodString,
    coerce: params?.coerce ?? false,
    ...processCreateParams(params)
  });
};
function floatSafeRemainder(val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepDecCount = (step.toString().split(".")[1] || "").length;
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / 10 ** decCount;
}
var ZodNumber = class _ZodNumber extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
    this.step = this.multipleOf;
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = Number(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.number) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.number,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "int") {
        if (!util.isInteger(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: "integer",
            received: "float",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (floatSafeRemainder(input.data, check.value) !== 0) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "finite") {
        if (!Number.isFinite(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_finite,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new _ZodNumber({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new _ZodNumber({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  int(message) {
    return this._addCheck({
      kind: "int",
      message: errorUtil.toString(message)
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  finite(message) {
    return this._addCheck({
      kind: "finite",
      message: errorUtil.toString(message)
    });
  }
  safe(message) {
    return this._addCheck({
      kind: "min",
      inclusive: true,
      value: Number.MIN_SAFE_INTEGER,
      message: errorUtil.toString(message)
    })._addCheck({
      kind: "max",
      inclusive: true,
      value: Number.MAX_SAFE_INTEGER,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
  get isInt() {
    return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
  }
  get isFinite() {
    let max = null;
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
        return true;
      } else if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      } else if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return Number.isFinite(min) && Number.isFinite(max);
  }
};
ZodNumber.create = (params) => {
  return new ZodNumber({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodNumber,
    coerce: params?.coerce || false,
    ...processCreateParams(params)
  });
};
var ZodBigInt = class _ZodBigInt extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
  }
  _parse(input) {
    if (this._def.coerce) {
      try {
        input.data = BigInt(input.data);
      } catch {
        return this._getInvalidInput(input);
      }
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.bigint) {
      return this._getInvalidInput(input);
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            type: "bigint",
            minimum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            type: "bigint",
            maximum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (input.data % check.value !== BigInt(0)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _getInvalidInput(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.bigint,
      received: ctx.parsedType
    });
    return INVALID;
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new _ZodBigInt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new _ZodBigInt({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodBigInt.create = (params) => {
  return new ZodBigInt({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodBigInt,
    coerce: params?.coerce ?? false,
    ...processCreateParams(params)
  });
};
var ZodBoolean = class extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = Boolean(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.boolean) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.boolean,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodBoolean.create = (params) => {
  return new ZodBoolean({
    typeName: ZodFirstPartyTypeKind.ZodBoolean,
    coerce: params?.coerce || false,
    ...processCreateParams(params)
  });
};
var ZodDate = class _ZodDate extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = new Date(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.date) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.date,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    if (Number.isNaN(input.data.getTime())) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_date
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.getTime() < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            message: check.message,
            inclusive: true,
            exact: false,
            minimum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.getTime() > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            message: check.message,
            inclusive: true,
            exact: false,
            maximum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return {
      status: status.value,
      value: new Date(input.data.getTime())
    };
  }
  _addCheck(check) {
    return new _ZodDate({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  min(minDate, message) {
    return this._addCheck({
      kind: "min",
      value: minDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  max(maxDate, message) {
    return this._addCheck({
      kind: "max",
      value: maxDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  get minDate() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min != null ? new Date(min) : null;
  }
  get maxDate() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max != null ? new Date(max) : null;
  }
};
ZodDate.create = (params) => {
  return new ZodDate({
    checks: [],
    coerce: params?.coerce || false,
    typeName: ZodFirstPartyTypeKind.ZodDate,
    ...processCreateParams(params)
  });
};
var ZodSymbol = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.symbol) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.symbol,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodSymbol.create = (params) => {
  return new ZodSymbol({
    typeName: ZodFirstPartyTypeKind.ZodSymbol,
    ...processCreateParams(params)
  });
};
var ZodUndefined = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.undefined,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodUndefined.create = (params) => {
  return new ZodUndefined({
    typeName: ZodFirstPartyTypeKind.ZodUndefined,
    ...processCreateParams(params)
  });
};
var ZodNull = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.null) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.null,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodNull.create = (params) => {
  return new ZodNull({
    typeName: ZodFirstPartyTypeKind.ZodNull,
    ...processCreateParams(params)
  });
};
var ZodAny = class extends ZodType {
  constructor() {
    super(...arguments);
    this._any = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodAny.create = (params) => {
  return new ZodAny({
    typeName: ZodFirstPartyTypeKind.ZodAny,
    ...processCreateParams(params)
  });
};
var ZodUnknown = class extends ZodType {
  constructor() {
    super(...arguments);
    this._unknown = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodUnknown.create = (params) => {
  return new ZodUnknown({
    typeName: ZodFirstPartyTypeKind.ZodUnknown,
    ...processCreateParams(params)
  });
};
var ZodNever = class extends ZodType {
  _parse(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.never,
      received: ctx.parsedType
    });
    return INVALID;
  }
};
ZodNever.create = (params) => {
  return new ZodNever({
    typeName: ZodFirstPartyTypeKind.ZodNever,
    ...processCreateParams(params)
  });
};
var ZodVoid = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.void,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodVoid.create = (params) => {
  return new ZodVoid({
    typeName: ZodFirstPartyTypeKind.ZodVoid,
    ...processCreateParams(params)
  });
};
var ZodArray = class _ZodArray extends ZodType {
  _parse(input) {
    const { ctx, status } = this._processInputParams(input);
    const def = this._def;
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (def.exactLength !== null) {
      const tooBig = ctx.data.length > def.exactLength.value;
      const tooSmall = ctx.data.length < def.exactLength.value;
      if (tooBig || tooSmall) {
        addIssueToContext(ctx, {
          code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
          minimum: tooSmall ? def.exactLength.value : void 0,
          maximum: tooBig ? def.exactLength.value : void 0,
          type: "array",
          inclusive: true,
          exact: true,
          message: def.exactLength.message
        });
        status.dirty();
      }
    }
    if (def.minLength !== null) {
      if (ctx.data.length < def.minLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.minLength.message
        });
        status.dirty();
      }
    }
    if (def.maxLength !== null) {
      if (ctx.data.length > def.maxLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.maxLength.message
        });
        status.dirty();
      }
    }
    if (ctx.common.async) {
      return Promise.all([...ctx.data].map((item, i) => {
        return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
      })).then((result2) => {
        return ParseStatus.mergeArray(status, result2);
      });
    }
    const result = [...ctx.data].map((item, i) => {
      return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
    });
    return ParseStatus.mergeArray(status, result);
  }
  get element() {
    return this._def.type;
  }
  min(minLength, message) {
    return new _ZodArray({
      ...this._def,
      minLength: { value: minLength, message: errorUtil.toString(message) }
    });
  }
  max(maxLength, message) {
    return new _ZodArray({
      ...this._def,
      maxLength: { value: maxLength, message: errorUtil.toString(message) }
    });
  }
  length(len, message) {
    return new _ZodArray({
      ...this._def,
      exactLength: { value: len, message: errorUtil.toString(message) }
    });
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodArray.create = (schema, params) => {
  return new ZodArray({
    type: schema,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: ZodFirstPartyTypeKind.ZodArray,
    ...processCreateParams(params)
  });
};
function deepPartialify(schema) {
  if (schema instanceof ZodObject) {
    const newShape = {};
    for (const key in schema.shape) {
      const fieldSchema = schema.shape[key];
      newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
    }
    return new ZodObject({
      ...schema._def,
      shape: () => newShape
    });
  } else if (schema instanceof ZodArray) {
    return new ZodArray({
      ...schema._def,
      type: deepPartialify(schema.element)
    });
  } else if (schema instanceof ZodOptional) {
    return ZodOptional.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodNullable) {
    return ZodNullable.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodTuple) {
    return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
  } else {
    return schema;
  }
}
var ZodObject = class _ZodObject extends ZodType {
  constructor() {
    super(...arguments);
    this._cached = null;
    this.nonstrict = this.passthrough;
    this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const shape = this._def.shape();
    const keys = util.objectKeys(shape);
    this._cached = { shape, keys };
    return this._cached;
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.object) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const { status, ctx } = this._processInputParams(input);
    const { shape, keys: shapeKeys } = this._getCached();
    const extraKeys = [];
    if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
      for (const key in ctx.data) {
        if (!shapeKeys.includes(key)) {
          extraKeys.push(key);
        }
      }
    }
    const pairs = [];
    for (const key of shapeKeys) {
      const keyValidator = shape[key];
      const value = ctx.data[key];
      pairs.push({
        key: { status: "valid", value: key },
        value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (this._def.catchall instanceof ZodNever) {
      const unknownKeys = this._def.unknownKeys;
      if (unknownKeys === "passthrough") {
        for (const key of extraKeys) {
          pairs.push({
            key: { status: "valid", value: key },
            value: { status: "valid", value: ctx.data[key] }
          });
        }
      } else if (unknownKeys === "strict") {
        if (extraKeys.length > 0) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.unrecognized_keys,
            keys: extraKeys
          });
          status.dirty();
        }
      } else if (unknownKeys === "strip") {
      } else {
        throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
      }
    } else {
      const catchall = this._def.catchall;
      for (const key of extraKeys) {
        const value = ctx.data[key];
        pairs.push({
          key: { status: "valid", value: key },
          value: catchall._parse(
            new ParseInputLazyPath(ctx, value, ctx.path, key)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: key in ctx.data
        });
      }
    }
    if (ctx.common.async) {
      return Promise.resolve().then(async () => {
        const syncPairs = [];
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          syncPairs.push({
            key,
            value,
            alwaysSet: pair.alwaysSet
          });
        }
        return syncPairs;
      }).then((syncPairs) => {
        return ParseStatus.mergeObjectSync(status, syncPairs);
      });
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get shape() {
    return this._def.shape();
  }
  strict(message) {
    errorUtil.errToObj;
    return new _ZodObject({
      ...this._def,
      unknownKeys: "strict",
      ...message !== void 0 ? {
        errorMap: (issue, ctx) => {
          const defaultError = this._def.errorMap?.(issue, ctx).message ?? ctx.defaultError;
          if (issue.code === "unrecognized_keys")
            return {
              message: errorUtil.errToObj(message).message ?? defaultError
            };
          return {
            message: defaultError
          };
        }
      } : {}
    });
  }
  strip() {
    return new _ZodObject({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new _ZodObject({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(augmentation) {
    return new _ZodObject({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...augmentation
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(merging) {
    const merged = new _ZodObject({
      unknownKeys: merging._def.unknownKeys,
      catchall: merging._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...merging._def.shape()
      }),
      typeName: ZodFirstPartyTypeKind.ZodObject
    });
    return merged;
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(key, schema) {
    return this.augment({ [key]: schema });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(index) {
    return new _ZodObject({
      ...this._def,
      catchall: index
    });
  }
  pick(mask) {
    const shape = {};
    for (const key of util.objectKeys(mask)) {
      if (mask[key] && this.shape[key]) {
        shape[key] = this.shape[key];
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  omit(mask) {
    const shape = {};
    for (const key of util.objectKeys(this.shape)) {
      if (!mask[key]) {
        shape[key] = this.shape[key];
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return deepPartialify(this);
  }
  partial(mask) {
    const newShape = {};
    for (const key of util.objectKeys(this.shape)) {
      const fieldSchema = this.shape[key];
      if (mask && !mask[key]) {
        newShape[key] = fieldSchema;
      } else {
        newShape[key] = fieldSchema.optional();
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  required(mask) {
    const newShape = {};
    for (const key of util.objectKeys(this.shape)) {
      if (mask && !mask[key]) {
        newShape[key] = this.shape[key];
      } else {
        const fieldSchema = this.shape[key];
        let newField = fieldSchema;
        while (newField instanceof ZodOptional) {
          newField = newField._def.innerType;
        }
        newShape[key] = newField;
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  keyof() {
    return createZodEnum(util.objectKeys(this.shape));
  }
};
ZodObject.create = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.strictCreate = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strict",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.lazycreate = (shape, params) => {
  return new ZodObject({
    shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
var ZodUnion = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const options = this._def.options;
    function handleResults(results) {
      for (const result of results) {
        if (result.result.status === "valid") {
          return result.result;
        }
      }
      for (const result of results) {
        if (result.result.status === "dirty") {
          ctx.common.issues.push(...result.ctx.common.issues);
          return result.result;
        }
      }
      const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return Promise.all(options.map(async (option) => {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          }),
          ctx: childCtx
        };
      })).then(handleResults);
    } else {
      let dirty = void 0;
      const issues = [];
      for (const option of options) {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        const result = option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: childCtx
        });
        if (result.status === "valid") {
          return result;
        } else if (result.status === "dirty" && !dirty) {
          dirty = { result, ctx: childCtx };
        }
        if (childCtx.common.issues.length) {
          issues.push(childCtx.common.issues);
        }
      }
      if (dirty) {
        ctx.common.issues.push(...dirty.ctx.common.issues);
        return dirty.result;
      }
      const unionErrors = issues.map((issues2) => new ZodError(issues2));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
  }
  get options() {
    return this._def.options;
  }
};
ZodUnion.create = (types, params) => {
  return new ZodUnion({
    options: types,
    typeName: ZodFirstPartyTypeKind.ZodUnion,
    ...processCreateParams(params)
  });
};
var getDiscriminator = (type) => {
  if (type instanceof ZodLazy) {
    return getDiscriminator(type.schema);
  } else if (type instanceof ZodEffects) {
    return getDiscriminator(type.innerType());
  } else if (type instanceof ZodLiteral) {
    return [type.value];
  } else if (type instanceof ZodEnum) {
    return type.options;
  } else if (type instanceof ZodNativeEnum) {
    return util.objectValues(type.enum);
  } else if (type instanceof ZodDefault) {
    return getDiscriminator(type._def.innerType);
  } else if (type instanceof ZodUndefined) {
    return [void 0];
  } else if (type instanceof ZodNull) {
    return [null];
  } else if (type instanceof ZodOptional) {
    return [void 0, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodNullable) {
    return [null, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodBranded) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodReadonly) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodCatch) {
    return getDiscriminator(type._def.innerType);
  } else {
    return [];
  }
};
var ZodDiscriminatedUnion = class _ZodDiscriminatedUnion extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const discriminator = this.discriminator;
    const discriminatorValue = ctx.data[discriminator];
    const option = this.optionsMap.get(discriminatorValue);
    if (!option) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union_discriminator,
        options: Array.from(this.optionsMap.keys()),
        path: [discriminator]
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return option._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    } else {
      return option._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    }
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(discriminator, options, params) {
    const optionsMap = /* @__PURE__ */ new Map();
    for (const type of options) {
      const discriminatorValues = getDiscriminator(type.shape[discriminator]);
      if (!discriminatorValues.length) {
        throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
      }
      for (const value of discriminatorValues) {
        if (optionsMap.has(value)) {
          throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
        }
        optionsMap.set(value, type);
      }
    }
    return new _ZodDiscriminatedUnion({
      typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
      discriminator,
      options,
      optionsMap,
      ...processCreateParams(params)
    });
  }
};
function mergeValues(a16, b) {
  const aType = getParsedType(a16);
  const bType = getParsedType(b);
  if (a16 === b) {
    return { valid: true, data: a16 };
  } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
    const bKeys = util.objectKeys(b);
    const sharedKeys = util.objectKeys(a16).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a16, ...b };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a16[key], b[key]);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
    if (a16.length !== b.length) {
      return { valid: false };
    }
    const newArray = [];
    for (let index = 0; index < a16.length; index++) {
      const itemA = a16[index];
      const itemB = b[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a16 === +b) {
    return { valid: true, data: a16 };
  } else {
    return { valid: false };
  }
}
var ZodIntersection = class extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const handleParsed = (parsedLeft, parsedRight) => {
      if (isAborted(parsedLeft) || isAborted(parsedRight)) {
        return INVALID;
      }
      const merged = mergeValues(parsedLeft.value, parsedRight.value);
      if (!merged.valid) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_intersection_types
        });
        return INVALID;
      }
      if (isDirty(parsedLeft) || isDirty(parsedRight)) {
        status.dirty();
      }
      return { status: status.value, value: merged.data };
    };
    if (ctx.common.async) {
      return Promise.all([
        this._def.left._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }),
        this._def.right._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        })
      ]).then(([left, right]) => handleParsed(left, right));
    } else {
      return handleParsed(this._def.left._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }), this._def.right._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }));
    }
  }
};
ZodIntersection.create = (left, right, params) => {
  return new ZodIntersection({
    left,
    right,
    typeName: ZodFirstPartyTypeKind.ZodIntersection,
    ...processCreateParams(params)
  });
};
var ZodTuple = class _ZodTuple extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (ctx.data.length < this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      return INVALID;
    }
    const rest = this._def.rest;
    if (!rest && ctx.data.length > this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        maximum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      status.dirty();
    }
    const items = [...ctx.data].map((item, itemIndex) => {
      const schema = this._def.items[itemIndex] || this._def.rest;
      if (!schema)
        return null;
      return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
    }).filter((x) => !!x);
    if (ctx.common.async) {
      return Promise.all(items).then((results) => {
        return ParseStatus.mergeArray(status, results);
      });
    } else {
      return ParseStatus.mergeArray(status, items);
    }
  }
  get items() {
    return this._def.items;
  }
  rest(rest) {
    return new _ZodTuple({
      ...this._def,
      rest
    });
  }
};
ZodTuple.create = (schemas, params) => {
  if (!Array.isArray(schemas)) {
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  }
  return new ZodTuple({
    items: schemas,
    typeName: ZodFirstPartyTypeKind.ZodTuple,
    rest: null,
    ...processCreateParams(params)
  });
};
var ZodRecord = class _ZodRecord extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const pairs = [];
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    for (const key in ctx.data) {
      pairs.push({
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
        value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (ctx.common.async) {
      return ParseStatus.mergeObjectAsync(status, pairs);
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get element() {
    return this._def.valueType;
  }
  static create(first, second, third) {
    if (second instanceof ZodType) {
      return new _ZodRecord({
        keyType: first,
        valueType: second,
        typeName: ZodFirstPartyTypeKind.ZodRecord,
        ...processCreateParams(third)
      });
    }
    return new _ZodRecord({
      keyType: ZodString.create(),
      valueType: first,
      typeName: ZodFirstPartyTypeKind.ZodRecord,
      ...processCreateParams(second)
    });
  }
};
var ZodMap = class extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.map) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.map,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    const pairs = [...ctx.data.entries()].map(([key, value], index) => {
      return {
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
        value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
      };
    });
    if (ctx.common.async) {
      const finalMap = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          if (key.status === "aborted" || value.status === "aborted") {
            return INVALID;
          }
          if (key.status === "dirty" || value.status === "dirty") {
            status.dirty();
          }
          finalMap.set(key.value, value.value);
        }
        return { status: status.value, value: finalMap };
      });
    } else {
      const finalMap = /* @__PURE__ */ new Map();
      for (const pair of pairs) {
        const key = pair.key;
        const value = pair.value;
        if (key.status === "aborted" || value.status === "aborted") {
          return INVALID;
        }
        if (key.status === "dirty" || value.status === "dirty") {
          status.dirty();
        }
        finalMap.set(key.value, value.value);
      }
      return { status: status.value, value: finalMap };
    }
  }
};
ZodMap.create = (keyType, valueType, params) => {
  return new ZodMap({
    valueType,
    keyType,
    typeName: ZodFirstPartyTypeKind.ZodMap,
    ...processCreateParams(params)
  });
};
var ZodSet = class _ZodSet extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.set) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.set,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const def = this._def;
    if (def.minSize !== null) {
      if (ctx.data.size < def.minSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.minSize.message
        });
        status.dirty();
      }
    }
    if (def.maxSize !== null) {
      if (ctx.data.size > def.maxSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.maxSize.message
        });
        status.dirty();
      }
    }
    const valueType = this._def.valueType;
    function finalizeSet(elements2) {
      const parsedSet = /* @__PURE__ */ new Set();
      for (const element of elements2) {
        if (element.status === "aborted")
          return INVALID;
        if (element.status === "dirty")
          status.dirty();
        parsedSet.add(element.value);
      }
      return { status: status.value, value: parsedSet };
    }
    const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
    if (ctx.common.async) {
      return Promise.all(elements).then((elements2) => finalizeSet(elements2));
    } else {
      return finalizeSet(elements);
    }
  }
  min(minSize, message) {
    return new _ZodSet({
      ...this._def,
      minSize: { value: minSize, message: errorUtil.toString(message) }
    });
  }
  max(maxSize, message) {
    return new _ZodSet({
      ...this._def,
      maxSize: { value: maxSize, message: errorUtil.toString(message) }
    });
  }
  size(size, message) {
    return this.min(size, message).max(size, message);
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodSet.create = (valueType, params) => {
  return new ZodSet({
    valueType,
    minSize: null,
    maxSize: null,
    typeName: ZodFirstPartyTypeKind.ZodSet,
    ...processCreateParams(params)
  });
};
var ZodFunction = class _ZodFunction extends ZodType {
  constructor() {
    super(...arguments);
    this.validate = this.implement;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.function) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.function,
        received: ctx.parsedType
      });
      return INVALID;
    }
    function makeArgsIssue(args, error) {
      return makeIssue({
        data: args,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_arguments,
          argumentsError: error
        }
      });
    }
    function makeReturnsIssue(returns, error) {
      return makeIssue({
        data: returns,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_return_type,
          returnTypeError: error
        }
      });
    }
    const params = { errorMap: ctx.common.contextualErrorMap };
    const fn = ctx.data;
    if (this._def.returns instanceof ZodPromise) {
      const me = this;
      return OK(async function(...args) {
        const error = new ZodError([]);
        const parsedArgs = await me._def.args.parseAsync(args, params).catch((e) => {
          error.addIssue(makeArgsIssue(args, e));
          throw error;
        });
        const result = await Reflect.apply(fn, this, parsedArgs);
        const parsedReturns = await me._def.returns._def.type.parseAsync(result, params).catch((e) => {
          error.addIssue(makeReturnsIssue(result, e));
          throw error;
        });
        return parsedReturns;
      });
    } else {
      const me = this;
      return OK(function(...args) {
        const parsedArgs = me._def.args.safeParse(args, params);
        if (!parsedArgs.success) {
          throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
        }
        const result = Reflect.apply(fn, this, parsedArgs.data);
        const parsedReturns = me._def.returns.safeParse(result, params);
        if (!parsedReturns.success) {
          throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
        }
        return parsedReturns.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...items) {
    return new _ZodFunction({
      ...this._def,
      args: ZodTuple.create(items).rest(ZodUnknown.create())
    });
  }
  returns(returnType) {
    return new _ZodFunction({
      ...this._def,
      returns: returnType
    });
  }
  implement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  strictImplement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  static create(args, returns, params) {
    return new _ZodFunction({
      args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
      returns: returns || ZodUnknown.create(),
      typeName: ZodFirstPartyTypeKind.ZodFunction,
      ...processCreateParams(params)
    });
  }
};
var ZodLazy = class extends ZodType {
  get schema() {
    return this._def.getter();
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const lazySchema = this._def.getter();
    return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
  }
};
ZodLazy.create = (getter, params) => {
  return new ZodLazy({
    getter,
    typeName: ZodFirstPartyTypeKind.ZodLazy,
    ...processCreateParams(params)
  });
};
var ZodLiteral = class extends ZodType {
  _parse(input) {
    if (input.data !== this._def.value) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_literal,
        expected: this._def.value
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
  get value() {
    return this._def.value;
  }
};
ZodLiteral.create = (value, params) => {
  return new ZodLiteral({
    value,
    typeName: ZodFirstPartyTypeKind.ZodLiteral,
    ...processCreateParams(params)
  });
};
function createZodEnum(values, params) {
  return new ZodEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodEnum,
    ...processCreateParams(params)
  });
}
var ZodEnum = class _ZodEnum extends ZodType {
  _parse(input) {
    if (typeof input.data !== "string") {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!this._cache) {
      this._cache = new Set(this._def.values);
    }
    if (!this._cache.has(input.data)) {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Values() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  extract(values, newDef = this._def) {
    return _ZodEnum.create(values, {
      ...this._def,
      ...newDef
    });
  }
  exclude(values, newDef = this._def) {
    return _ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), {
      ...this._def,
      ...newDef
    });
  }
};
ZodEnum.create = createZodEnum;
var ZodNativeEnum = class extends ZodType {
  _parse(input) {
    const nativeEnumValues = util.getValidEnumValues(this._def.values);
    const ctx = this._getOrReturnCtx(input);
    if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!this._cache) {
      this._cache = new Set(util.getValidEnumValues(this._def.values));
    }
    if (!this._cache.has(input.data)) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get enum() {
    return this._def.values;
  }
};
ZodNativeEnum.create = (values, params) => {
  return new ZodNativeEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
    ...processCreateParams(params)
  });
};
var ZodPromise = class extends ZodType {
  unwrap() {
    return this._def.type;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.promise,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
    return OK(promisified.then((data) => {
      return this._def.type.parseAsync(data, {
        path: ctx.path,
        errorMap: ctx.common.contextualErrorMap
      });
    }));
  }
};
ZodPromise.create = (schema, params) => {
  return new ZodPromise({
    type: schema,
    typeName: ZodFirstPartyTypeKind.ZodPromise,
    ...processCreateParams(params)
  });
};
var ZodEffects = class extends ZodType {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const effect = this._def.effect || null;
    const checkCtx = {
      addIssue: (arg) => {
        addIssueToContext(ctx, arg);
        if (arg.fatal) {
          status.abort();
        } else {
          status.dirty();
        }
      },
      get path() {
        return ctx.path;
      }
    };
    checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
    if (effect.type === "preprocess") {
      const processed = effect.transform(ctx.data, checkCtx);
      if (ctx.common.async) {
        return Promise.resolve(processed).then(async (processed2) => {
          if (status.value === "aborted")
            return INVALID;
          const result = await this._def.schema._parseAsync({
            data: processed2,
            path: ctx.path,
            parent: ctx
          });
          if (result.status === "aborted")
            return INVALID;
          if (result.status === "dirty")
            return DIRTY(result.value);
          if (status.value === "dirty")
            return DIRTY(result.value);
          return result;
        });
      } else {
        if (status.value === "aborted")
          return INVALID;
        const result = this._def.schema._parseSync({
          data: processed,
          path: ctx.path,
          parent: ctx
        });
        if (result.status === "aborted")
          return INVALID;
        if (result.status === "dirty")
          return DIRTY(result.value);
        if (status.value === "dirty")
          return DIRTY(result.value);
        return result;
      }
    }
    if (effect.type === "refinement") {
      const executeRefinement = (acc) => {
        const result = effect.refinement(acc, checkCtx);
        if (ctx.common.async) {
          return Promise.resolve(result);
        }
        if (result instanceof Promise) {
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        }
        return acc;
      };
      if (ctx.common.async === false) {
        const inner = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inner.status === "aborted")
          return INVALID;
        if (inner.status === "dirty")
          status.dirty();
        executeRefinement(inner.value);
        return { status: status.value, value: inner.value };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
          if (inner.status === "aborted")
            return INVALID;
          if (inner.status === "dirty")
            status.dirty();
          return executeRefinement(inner.value).then(() => {
            return { status: status.value, value: inner.value };
          });
        });
      }
    }
    if (effect.type === "transform") {
      if (ctx.common.async === false) {
        const base = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (!isValid(base))
          return INVALID;
        const result = effect.transform(base.value, checkCtx);
        if (result instanceof Promise) {
          throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
        }
        return { status: status.value, value: result };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
          if (!isValid(base))
            return INVALID;
          return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({
            status: status.value,
            value: result
          }));
        });
      }
    }
    util.assertNever(effect);
  }
};
ZodEffects.create = (schema, effect, params) => {
  return new ZodEffects({
    schema,
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    effect,
    ...processCreateParams(params)
  });
};
ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
  return new ZodEffects({
    schema,
    effect: { type: "preprocess", transform: preprocess },
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    ...processCreateParams(params)
  });
};
var ZodOptional = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.undefined) {
      return OK(void 0);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodOptional.create = (type, params) => {
  return new ZodOptional({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodOptional,
    ...processCreateParams(params)
  });
};
var ZodNullable = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.null) {
      return OK(null);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodNullable.create = (type, params) => {
  return new ZodNullable({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodNullable,
    ...processCreateParams(params)
  });
};
var ZodDefault = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    let data = ctx.data;
    if (ctx.parsedType === ZodParsedType.undefined) {
      data = this._def.defaultValue();
    }
    return this._def.innerType._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
};
ZodDefault.create = (type, params) => {
  return new ZodDefault({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodDefault,
    defaultValue: typeof params.default === "function" ? params.default : () => params.default,
    ...processCreateParams(params)
  });
};
var ZodCatch = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const newCtx = {
      ...ctx,
      common: {
        ...ctx.common,
        issues: []
      }
    };
    const result = this._def.innerType._parse({
      data: newCtx.data,
      path: newCtx.path,
      parent: {
        ...newCtx
      }
    });
    if (isAsync(result)) {
      return result.then((result2) => {
        return {
          status: "valid",
          value: result2.status === "valid" ? result2.value : this._def.catchValue({
            get error() {
              return new ZodError(newCtx.common.issues);
            },
            input: newCtx.data
          })
        };
      });
    } else {
      return {
        status: "valid",
        value: result.status === "valid" ? result.value : this._def.catchValue({
          get error() {
            return new ZodError(newCtx.common.issues);
          },
          input: newCtx.data
        })
      };
    }
  }
  removeCatch() {
    return this._def.innerType;
  }
};
ZodCatch.create = (type, params) => {
  return new ZodCatch({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodCatch,
    catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
    ...processCreateParams(params)
  });
};
var ZodNaN = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.nan) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.nan,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
};
ZodNaN.create = (params) => {
  return new ZodNaN({
    typeName: ZodFirstPartyTypeKind.ZodNaN,
    ...processCreateParams(params)
  });
};
var BRAND = Symbol("zod_brand");
var ZodBranded = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const data = ctx.data;
    return this._def.type._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  unwrap() {
    return this._def.type;
  }
};
var ZodPipeline = class _ZodPipeline extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.common.async) {
      const handleAsync = async () => {
        const inResult = await this._def.in._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inResult.status === "aborted")
          return INVALID;
        if (inResult.status === "dirty") {
          status.dirty();
          return DIRTY(inResult.value);
        } else {
          return this._def.out._parseAsync({
            data: inResult.value,
            path: ctx.path,
            parent: ctx
          });
        }
      };
      return handleAsync();
    } else {
      const inResult = this._def.in._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
      if (inResult.status === "aborted")
        return INVALID;
      if (inResult.status === "dirty") {
        status.dirty();
        return {
          status: "dirty",
          value: inResult.value
        };
      } else {
        return this._def.out._parseSync({
          data: inResult.value,
          path: ctx.path,
          parent: ctx
        });
      }
    }
  }
  static create(a16, b) {
    return new _ZodPipeline({
      in: a16,
      out: b,
      typeName: ZodFirstPartyTypeKind.ZodPipeline
    });
  }
};
var ZodReadonly = class extends ZodType {
  _parse(input) {
    const result = this._def.innerType._parse(input);
    const freeze = (data) => {
      if (isValid(data)) {
        data.value = Object.freeze(data.value);
      }
      return data;
    };
    return isAsync(result) ? result.then((data) => freeze(data)) : freeze(result);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodReadonly.create = (type, params) => {
  return new ZodReadonly({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodReadonly,
    ...processCreateParams(params)
  });
};
function cleanParams(params, data) {
  const p = typeof params === "function" ? params(data) : typeof params === "string" ? { message: params } : params;
  const p2 = typeof p === "string" ? { message: p } : p;
  return p2;
}
function custom(check, _params = {}, fatal) {
  if (check)
    return ZodAny.create().superRefine((data, ctx) => {
      const r = check(data);
      if (r instanceof Promise) {
        return r.then((r2) => {
          if (!r2) {
            const params = cleanParams(_params, data);
            const _fatal = params.fatal ?? fatal ?? true;
            ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
          }
        });
      }
      if (!r) {
        const params = cleanParams(_params, data);
        const _fatal = params.fatal ?? fatal ?? true;
        ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
      }
      return;
    });
  return ZodAny.create();
}
var late = {
  object: ZodObject.lazycreate
};
var ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind2) {
  ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
  ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
  ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
  ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
  ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
  ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
  ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
  ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
  ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
  ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
  ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
  ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
  ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
  ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
  ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
  ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
  ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
  ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
  ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
  ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
  ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
  ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
  ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
  ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
  ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
  ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
  ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
  ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
  ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
  ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
  ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
  ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
  ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
  ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
  ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
  ZodFirstPartyTypeKind2["ZodReadonly"] = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
var instanceOfType = (cls, params = {
  message: `Input not instance of ${cls.name}`
}) => custom((data) => data instanceof cls, params);
var stringType = ZodString.create;
var numberType = ZodNumber.create;
var nanType = ZodNaN.create;
var bigIntType = ZodBigInt.create;
var booleanType = ZodBoolean.create;
var dateType = ZodDate.create;
var symbolType = ZodSymbol.create;
var undefinedType = ZodUndefined.create;
var nullType = ZodNull.create;
var anyType = ZodAny.create;
var unknownType = ZodUnknown.create;
var neverType = ZodNever.create;
var voidType = ZodVoid.create;
var arrayType = ZodArray.create;
var objectType = ZodObject.create;
var strictObjectType = ZodObject.strictCreate;
var unionType = ZodUnion.create;
var discriminatedUnionType = ZodDiscriminatedUnion.create;
var intersectionType = ZodIntersection.create;
var tupleType = ZodTuple.create;
var recordType = ZodRecord.create;
var mapType = ZodMap.create;
var setType = ZodSet.create;
var functionType = ZodFunction.create;
var lazyType = ZodLazy.create;
var literalType = ZodLiteral.create;
var enumType = ZodEnum.create;
var nativeEnumType = ZodNativeEnum.create;
var promiseType = ZodPromise.create;
var effectsType = ZodEffects.create;
var optionalType = ZodOptional.create;
var nullableType = ZodNullable.create;
var preprocessType = ZodEffects.createWithPreprocess;
var pipelineType = ZodPipeline.create;
var ostring = () => stringType().optional();
var onumber = () => numberType().optional();
var oboolean = () => booleanType().optional();
var coerce = {
  string: ((arg) => ZodString.create({ ...arg, coerce: true })),
  number: ((arg) => ZodNumber.create({ ...arg, coerce: true })),
  boolean: ((arg) => ZodBoolean.create({
    ...arg,
    coerce: true
  })),
  bigint: ((arg) => ZodBigInt.create({ ...arg, coerce: true })),
  date: ((arg) => ZodDate.create({ ...arg, coerce: true }))
};
var NEVER = INVALID;

// src/prompts/auth-nextjs.md
var auth_nextjs_default = "# Bootstrap Next.js app with Supabase Auth\n\n## \u{1F3AF} \u76EE\u6807\n\u5728 Next.js \u5E94\u7528\u4E2D\u5FEB\u901F\u8BBE\u7F6E Supabase \u8BA4\u8BC1\u7CFB\u7EDF\u3002\n\n## \u{1F6E0}\uFE0F \u6240\u9700\u5DE5\u5177\n- Next.js \u9879\u76EE\n- Supabase \u9879\u76EE\n- Supabase JavaScript \u5BA2\u6237\u7AEF\n\n## \u{1F680} \u5B9E\u73B0\u6B65\u9AA4\n\n### 1. \u5B89\u88C5\u4F9D\u8D56\n```bash\nnpm install @supabase/supabase-js @supabase/auth-helpers-nextjs\n```\n\n### 2. \u73AF\u5883\u53D8\u91CF\u914D\u7F6E\n```env\nNEXT_PUBLIC_SUPABASE_URL=your_supabase_url\nNEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key\n```\n\n### 3. \u521B\u5EFA Supabase \u5BA2\u6237\u7AEF\n```typescript\n// lib/supabase.ts\nimport { createClient } from '@supabase/supabase-js'\n\nexport const supabase = createClient(\n  process.env.NEXT_PUBLIC_SUPABASE_URL!,\n  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!\n)\n```\n\n### 4. \u8BA4\u8BC1\u7EC4\u4EF6\u793A\u4F8B\n```typescript\n// components/Auth.tsx\nimport { useState } from 'react'\nimport { supabase } from '../lib/supabase'\n\nexport default function Auth() {\n  const [loading, setLoading] = useState(false)\n  const [email, setEmail] = useState('')\n  const [password, setPassword] = useState('')\n\n  const handleSignUp = async (e: React.FormEvent) => {\n    e.preventDefault()\n    setLoading(true)\n    \n    const { error } = await supabase.auth.signUp({\n      email,\n      password,\n    })\n    \n    if (error) console.log('Error:', error.message)\n    else alert('Check your email for the confirmation link!')\n    setLoading(false)\n  }\n\n  const handleSignIn = async (e: React.FormEvent) => {\n    e.preventDefault()\n    setLoading(true)\n    \n    const { error } = await supabase.auth.signInWithPassword({\n      email,\n      password,\n    })\n    \n    if (error) console.log('Error:', error.message)\n    setLoading(false)\n  }\n\n  return (\n    <div className=\"auth-container\">\n      <form onSubmit={handleSignUp}>\n        <input\n          type=\"email\"\n          placeholder=\"Your email\"\n          value={email}\n          onChange={(e) => setEmail(e.target.value)}\n        />\n        <input\n          type=\"password\"\n          placeholder=\"Your password\"\n          value={password}\n          onChange={(e) => setPassword(e.target.value)}\n        />\n        <button type=\"submit\" disabled={loading}>\n          {loading ? 'Loading...' : 'Sign Up'}\n        </button>\n      </form>\n      \n      <form onSubmit={handleSignIn}>\n        <button type=\"submit\" disabled={loading}>\n          {loading ? 'Loading...' : 'Sign In'}\n        </button>\n      </form>\n    </div>\n  )\n}\n```\n\n## \u{1F512} \u5B89\u5168\u6700\u4F73\u5B9E\u8DF5\n- \u4F7F\u7528\u73AF\u5883\u53D8\u91CF\u5B58\u50A8\u654F\u611F\u4FE1\u606F\n- \u5B9E\u73B0\u9002\u5F53\u7684\u9519\u8BEF\u5904\u7406\n- \u6DFB\u52A0\u52A0\u8F7D\u72B6\u6001\u548C\u7528\u6237\u53CD\u9988\n- \u8003\u8651\u5B9E\u73B0\u5BC6\u7801\u5F3A\u5EA6\u9A8C\u8BC1\n\n## \u{1F4DA} \u76F8\u5173\u8D44\u6E90\n- [Supabase Auth Documentation](https://supabase.com/docs/guides/auth)\n- [Next.js Documentation](https://nextjs.org/docs)\n\n\n";

// src/prompts/database-functions.md
var database_functions_default = "# Database: Create functions\n\n## \u{1F3AF} \u76EE\u6807\n\u521B\u5EFA\u9AD8\u6548\u3001\u53EF\u7EF4\u62A4\u7684\u6570\u636E\u5E93\u51FD\u6570\uFF0C\u63D0\u5347\u5E94\u7528\u6027\u80FD\u548C\u6570\u636E\u4E00\u81F4\u6027\u3002\n\n## \u{1F3D7}\uFE0F \u51FD\u6570\u7C7B\u578B\n\n### 1. \u6807\u91CF\u51FD\u6570\n```sql\n-- \u8BA1\u7B97\u7528\u6237\u5E74\u9F84\nCREATE OR REPLACE FUNCTION calculate_age(birth_date DATE)\nRETURNS INTEGER AS $$\nBEGIN\n  RETURN EXTRACT(YEAR FROM AGE(birth_date));\nEND;\n$$ LANGUAGE plpgsql IMMUTABLE;\n\n-- \u683C\u5F0F\u5316\u91D1\u989D\nCREATE OR REPLACE FUNCTION format_currency(amount DECIMAL, currency_code VARCHAR(3))\nRETURNS VARCHAR AS $$\nBEGIN\n  RETURN currency_code || ' ' || TO_CHAR(amount, 'FM999,999,999.00');\nEND;\n$$ LANGUAGE plpgsql IMMUTABLE;\n```\n\n### 2. \u8868\u51FD\u6570\n```sql\n-- \u83B7\u53D6\u7528\u6237\u8BA2\u5355\u7EDF\u8BA1\nCREATE OR REPLACE FUNCTION get_user_order_stats(user_uuid UUID)\nRETURNS TABLE (\n  total_orders BIGINT,\n  total_spent DECIMAL(10,2),\n  avg_order_value DECIMAL(10,2),\n  last_order_date TIMESTAMP WITH TIME ZONE\n) AS $$\nBEGIN\n  RETURN QUERY\n  SELECT \n    COUNT(o.id)::BIGINT,\n    COALESCE(SUM(o.total_amount), 0),\n    COALESCE(AVG(o.total_amount), 0),\n    MAX(o.created_at)\n  FROM orders o\n  WHERE o.user_id = user_uuid;\nEND;\n$$ LANGUAGE plpgsql STABLE;\n```\n\n### 3. \u89E6\u53D1\u5668\u51FD\u6570\n```sql\n-- \u81EA\u52A8\u66F4\u65B0\u65F6\u95F4\u6233\nCREATE OR REPLACE FUNCTION update_updated_at_column()\nRETURNS TRIGGER AS $$\nBEGIN\n  NEW.updated_at = NOW();\n  RETURN NEW;\nEND;\n$$ LANGUAGE plpgsql;\n\n-- \u521B\u5EFA\u89E6\u53D1\u5668\nCREATE TRIGGER update_users_updated_at\n  BEFORE UPDATE ON users\n  FOR EACH ROW\n  EXECUTE FUNCTION update_updated_at_column();\n```\n\n## \u{1F512} \u5B89\u5168\u51FD\u6570\n\n### 1. \u6570\u636E\u9A8C\u8BC1\u51FD\u6570\n```sql\n-- \u9A8C\u8BC1\u90AE\u7BB1\u683C\u5F0F\nCREATE OR REPLACE FUNCTION is_valid_email(email TEXT)\nRETURNS BOOLEAN AS $$\nBEGIN\n  RETURN email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$';\nEND;\n$$ LANGUAGE plpgsql IMMUTABLE;\n\n-- \u9A8C\u8BC1\u5BC6\u7801\u5F3A\u5EA6\nCREATE OR REPLACE FUNCTION is_strong_password(password TEXT)\nRETURNS BOOLEAN AS $$\nBEGIN\n  RETURN \n    LENGTH(password) >= 8 AND\n    password ~ '[A-Z]' AND\n    password ~ '[a-z]' AND\n    password ~ '[0-9]' AND\n    password ~ '[^A-Za-z0-9]';\nEND;\n$$ LANGUAGE plpgsql IMMUTABLE;\n```\n\n### 2. \u6743\u9650\u68C0\u67E5\u51FD\u6570\n```sql\n-- \u68C0\u67E5\u7528\u6237\u6743\u9650\nCREATE OR REPLACE FUNCTION check_user_permission(\n  user_uuid UUID,\n  required_permission TEXT\n)\nRETURNS BOOLEAN AS $$\nDECLARE\n  has_permission BOOLEAN;\nBEGIN\n  SELECT EXISTS(\n    SELECT 1 FROM user_permissions up\n    JOIN permissions p ON up.permission_id = p.id\n    WHERE up.user_id = user_uuid\n    AND p.name = required_permission\n    AND up.is_active = true\n  ) INTO has_permission;\n  \n  RETURN has_permission;\nEND;\n$$ LANGUAGE plpgsql STABLE;\n```\n\n## \u{1F504} \u4E8B\u52A1\u51FD\u6570\n\n### 1. \u590D\u6742\u4E1A\u52A1\u903B\u8F91\n```sql\n-- \u5904\u7406\u8BA2\u5355\u652F\u4ED8\nCREATE OR REPLACE FUNCTION process_order_payment(\n  order_uuid UUID,\n  payment_amount DECIMAL(10,2),\n  payment_method TEXT\n)\nRETURNS BOOLEAN AS $$\nDECLARE\n  order_record RECORD;\n  user_record RECORD;\nBEGIN\n  -- \u5F00\u59CB\u4E8B\u52A1\n  BEGIN\n    -- \u83B7\u53D6\u8BA2\u5355\u4FE1\u606F\n    SELECT * INTO order_record FROM orders WHERE id = order_uuid;\n    IF NOT FOUND THEN\n      RAISE EXCEPTION 'Order not found';\n    END IF;\n    \n    -- \u83B7\u53D6\u7528\u6237\u4FE1\u606F\n    SELECT * INTO user_record FROM users WHERE id = order_record.user_id;\n    \n    -- \u9A8C\u8BC1\u652F\u4ED8\u91D1\u989D\n    IF payment_amount != order_record.total_amount THEN\n      RAISE EXCEPTION 'Payment amount mismatch';\n    END IF;\n    \n    -- \u66F4\u65B0\u8BA2\u5355\u72B6\u6001\n    UPDATE orders \n    SET \n      status = 'paid',\n      payment_method = payment_method,\n      paid_at = NOW(),\n      updated_at = NOW()\n    WHERE id = order_uuid;\n    \n    -- \u8BB0\u5F55\u652F\u4ED8\u5386\u53F2\n    INSERT INTO payment_history (\n      order_id, amount, method, processed_at\n    ) VALUES (\n      order_uuid, payment_amount, payment_method, NOW()\n    );\n    \n    -- \u63D0\u4EA4\u4E8B\u52A1\n    RETURN true;\n    \n  EXCEPTION\n    WHEN OTHERS THEN\n      -- \u56DE\u6EDA\u4E8B\u52A1\n      RAISE;\n  END;\nEND;\n$$ LANGUAGE plpgsql;\n```\n\n## \u26A1 \u6027\u80FD\u4F18\u5316\n\n### 1. \u51FD\u6570\u5C5E\u6027\n```sql\n-- \u4E0D\u53EF\u53D8\u51FD\u6570\uFF08\u76F8\u540C\u8F93\u5165\u603B\u662F\u8FD4\u56DE\u76F8\u540C\u8F93\u51FA\uFF09\nCREATE OR REPLACE FUNCTION get_user_by_id(user_id UUID)\nRETURNS users AS $$\n  SELECT * FROM users WHERE id = user_id;\n$$ LANGUAGE sql IMMUTABLE;\n\n-- \u7A33\u5B9A\u51FD\u6570\uFF08\u76F8\u540C\u8F93\u5165\u5728\u4E8B\u52A1\u5185\u8FD4\u56DE\u76F8\u540C\u8F93\u51FA\uFF09\nCREATE OR REPLACE FUNCTION get_user_profile(user_id UUID)\nRETURNS user_profiles AS $$\n  SELECT * FROM user_profiles WHERE user_id = $1;\n$$ LANGUAGE sql STABLE;\n\n-- \u6613\u53D8\u51FD\u6570\uFF08\u53EF\u80FD\u8FD4\u56DE\u4E0D\u540C\u7ED3\u679C\uFF09\nCREATE OR REPLACE FUNCTION get_current_timestamp()\nRETURNS TIMESTAMP WITH TIME ZONE AS $$\n  SELECT NOW();\n$$ LANGUAGE sql VOLATILE;\n```\n\n### 2. \u5E76\u884C\u6267\u884C\n```sql\n-- \u652F\u6301\u5E76\u884C\u6267\u884C\u7684\u51FD\u6570\nCREATE OR REPLACE FUNCTION parallel_process_data(data_array INTEGER[])\nRETURNS INTEGER AS $$\nBEGIN\n  RETURN array_length(data_array, 1);\nEND;\n$$ LANGUAGE plpgsql PARALLEL SAFE;\n```\n\n## \u{1F9EA} \u6D4B\u8BD5\u51FD\u6570\n\n### 1. \u5355\u5143\u6D4B\u8BD5\n```sql\n-- \u6D4B\u8BD5\u51FD\u6570\nCREATE OR REPLACE FUNCTION test_calculate_age()\nRETURNS BOOLEAN AS $$\nDECLARE\n  test_result INTEGER;\nBEGIN\n  -- \u6D4B\u8BD5\u7528\u4F8B 1\n  test_result := calculate_age('1990-01-01'::DATE);\n  IF test_result != 34 THEN\n    RAISE EXCEPTION 'Test failed: expected 34, got %', test_result;\n  END IF;\n  \n  -- \u6D4B\u8BD5\u7528\u4F8B 2\n  test_result := calculate_age('2000-01-01'::DATE);\n  IF test_result != 24 THEN\n    RAISE EXCEPTION 'Test failed: expected 24, got %', test_result;\n  END IF;\n  \n  RETURN true;\nEND;\n$$ LANGUAGE plpgsql;\n```\n\n## \u{1F4DA} \u76F8\u5173\u8D44\u6E90\n- [PostgreSQL Functions Documentation](https://www.postgresql.org/docs/current/xfunc.html)\n- [Supabase Database Functions](https://supabase.com/docs/guides/database/functions)\n\n\n";

// src/prompts/database-schema.md
var database_schema_default = "# Database: Declarative Database Schema\n\n## \u{1F3AF} \u76EE\u6807\n\u4F7F\u7528\u58F0\u660E\u5F0F\u65B9\u6CD5\u8BBE\u8BA1\u6E05\u6670\u3001\u53EF\u7EF4\u62A4\u7684\u6570\u636E\u5E93\u6A21\u5F0F\u3002\n\n## \u{1F3D7}\uFE0F \u6A21\u5F0F\u8BBE\u8BA1\u539F\u5219\n\n### 1. \u547D\u540D\u7EA6\u5B9A\n- \u8868\u540D\u4F7F\u7528\u590D\u6570\u5F62\u5F0F\uFF1A`users`, `orders`, `products`\n- \u5B57\u6BB5\u540D\u4F7F\u7528\u5C0F\u5199\u548C\u4E0B\u5212\u7EBF\uFF1A`user_id`, `created_at`, `is_active`\n- \u7EA6\u675F\u540D\u4F7F\u7528\u63CF\u8FF0\u6027\u540D\u79F0\uFF1A`fk_user_orders`, `idx_users_email`\n\n### 2. \u6570\u636E\u7C7B\u578B\u9009\u62E9\n```sql\n-- \u7528\u6237\u8868\u793A\u4F8B\nCREATE TABLE users (\n  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),\n  email VARCHAR(255) UNIQUE NOT NULL,\n  username VARCHAR(50) UNIQUE NOT NULL,\n  full_name VARCHAR(100),\n  avatar_url TEXT,\n  is_active BOOLEAN DEFAULT true,\n  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),\n  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()\n);\n\n-- \u8BA2\u5355\u8868\u793A\u4F8B\nCREATE TABLE orders (\n  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),\n  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,\n  order_number VARCHAR(20) UNIQUE NOT NULL,\n  total_amount DECIMAL(10,2) NOT NULL CHECK (total_amount > 0),\n  status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'shipped', 'delivered', 'cancelled')),\n  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),\n  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()\n);\n```\n\n### 3. \u7D22\u5F15\u7B56\u7565\n```sql\n-- \u4E3A\u5E38\u7528\u67E5\u8BE2\u5B57\u6BB5\u521B\u5EFA\u7D22\u5F15\nCREATE INDEX idx_users_email ON users(email);\nCREATE INDEX idx_users_username ON users(username);\nCREATE INDEX idx_orders_user_id ON orders(user_id);\nCREATE INDEX idx_orders_status ON orders(status);\nCREATE INDEX idx_orders_created_at ON orders(created_at);\n\n-- \u590D\u5408\u7D22\u5F15\nCREATE INDEX idx_orders_user_status ON orders(user_id, status);\n```\n\n### 4. \u7EA6\u675F\u548C\u9A8C\u8BC1\n```sql\n-- \u68C0\u67E5\u7EA6\u675F\nALTER TABLE users ADD CONSTRAINT chk_email_format \n  CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$');\n\n-- \u5916\u952E\u7EA6\u675F\nALTER TABLE orders ADD CONSTRAINT fk_orders_user \n  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;\n\n-- \u552F\u4E00\u7EA6\u675F\nALTER TABLE users ADD CONSTRAINT uk_users_email UNIQUE (email);\n```\n\n## \u{1F504} \u6A21\u5F0F\u6F14\u8FDB\n\n### 1. \u4F7F\u7528\u8FC1\u79FB\u6587\u4EF6\n```sql\n-- migrations/001_create_users_table.sql\nCREATE TABLE users (\n  -- \u8868\u7ED3\u6784\n);\n\n-- migrations/002_add_user_profile.sql\nALTER TABLE users ADD COLUMN profile_data JSONB;\n```\n\n### 2. \u5411\u540E\u517C\u5BB9\u6027\n```sql\n-- \u6DFB\u52A0\u65B0\u5B57\u6BB5\u65F6\u63D0\u4F9B\u9ED8\u8BA4\u503C\nALTER TABLE users ADD COLUMN phone VARCHAR(20) DEFAULT NULL;\n\n-- \u5220\u9664\u5B57\u6BB5\u524D\u5148\u6807\u8BB0\u4E3A\u5E9F\u5F03\nALTER TABLE users ADD COLUMN is_deprecated BOOLEAN DEFAULT false;\n```\n\n## \u26A1 \u6027\u80FD\u4F18\u5316\n\n### 1. \u5206\u533A\u7B56\u7565\n```sql\n-- \u6309\u65F6\u95F4\u5206\u533A\nCREATE TABLE orders (\n  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),\n  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),\n  -- \u5176\u4ED6\u5B57\u6BB5\n) PARTITION BY RANGE (created_at);\n\n-- \u521B\u5EFA\u5206\u533A\nCREATE TABLE orders_2024 PARTITION OF orders\n  FOR VALUES FROM ('2024-01-01') TO ('2025-01-01');\n```\n\n### 2. \u7269\u5316\u89C6\u56FE\n```sql\n-- \u521B\u5EFA\u7269\u5316\u89C6\u56FE\nCREATE MATERIALIZED VIEW user_order_summary AS\nSELECT \n  u.id,\n  u.email,\n  COUNT(o.id) as order_count,\n  SUM(o.total_amount) as total_spent\nFROM users u\nLEFT JOIN orders o ON u.id = o.user_id\nGROUP BY u.id, u.email;\n\n-- \u5B9A\u671F\u5237\u65B0\nREFRESH MATERIALIZED VIEW user_order_summary;\n```\n\n## \u{1F512} \u5B89\u5168\u8003\u8651\n- \u4F7F\u7528 RLS (Row Level Security) \u63A7\u5236\u6570\u636E\u8BBF\u95EE\n- \u5B9E\u73B0\u9002\u5F53\u7684\u6743\u9650\u7BA1\u7406\n- \u5B9A\u671F\u5BA1\u8BA1\u6570\u636E\u5E93\u8BBF\u95EE\n- \u52A0\u5BC6\u654F\u611F\u6570\u636E\n\n## \u{1F4DA} \u76F8\u5173\u8D44\u6E90\n- [PostgreSQL Documentation](https://www.postgresql.org/docs/)\n- [Supabase Database Guide](https://supabase.com/docs/guides/database)\n\n\n";

// src/prompts/edge-functions.md
var edge_functions_default = '# Writing Supabase Edge Functions\n\n## \u{1F3AF} \u76EE\u6807\n\u5F00\u53D1\u9AD8\u6548\u3001\u5B89\u5168\u7684 Supabase Edge Functions\u3002\n\n## \u{1F4DD} \u51FD\u6570\u6A21\u677F\n\n### \u57FA\u7840\u51FD\u6570\u7ED3\u6784\n```typescript\n// supabase/functions/my-function/index.ts\nimport { serve } from "https://deno.land/std@0.168.0/http/server.ts"\n\nserve(async (req) => {\n  try {\n    // \u83B7\u53D6\u8BF7\u6C42\u6570\u636E\n    const { name } = await req.json()\n    \n    // \u4E1A\u52A1\u903B\u8F91\n    const message = `Hello ${name}!`\n    \n    // \u8FD4\u56DE\u54CD\u5E94\n    return new Response(\n      JSON.stringify({ message }),\n      { \n        headers: { "Content-Type": "application/json" },\n        status: 200 \n      }\n    )\n  } catch (error) {\n    return new Response(\n      JSON.stringify({ error: error.message }),\n      { \n        headers: { "Content-Type": "application/json" },\n        status: 400 \n      }\n    )\n  }\n})\n```\n\n### \u6570\u636E\u5E93\u64CD\u4F5C\u51FD\u6570\n```typescript\nimport { serve } from "https://deno.land/std@0.168.0/http/server.ts"\nimport { createClient } from \'https://esm.sh/@supabase/supabase-js@2\'\n\nserve(async (req) => {\n  // \u521B\u5EFA Supabase \u5BA2\u6237\u7AEF\n  const supabaseClient = createClient(\n    Deno.env.get(\'SUPABASE_URL\') ?? \'\',\n    Deno.env.get(\'SUPABASE_ANON_KEY\') ?? \'\'\n  )\n  \n  try {\n    const { data, error } = await supabaseClient\n      .from(\'users\')\n      .select(\'*\')\n      .limit(10)\n    \n    if (error) throw error\n    \n    return new Response(\n      JSON.stringify({ data }),\n      { headers: { "Content-Type": "application/json" } }\n    )\n  } catch (error) {\n    return new Response(\n      JSON.stringify({ error: error.message }),\n      { \n        headers: { "Content-Type": "application/json" },\n        status: 400 \n      }\n    )\n  }\n})\n```\n\n## \u{1F512} \u5B89\u5168\u6700\u4F73\u5B9E\u8DF5\n- \u9A8C\u8BC1 JWT \u4EE4\u724C\n- \u5B9E\u73B0\u9002\u5F53\u7684\u9519\u8BEF\u5904\u7406\n- \u76EE\u524D\u4E0D\u652F\u6301\u4F7F\u7528\u73AF\u5883\u53D8\u91CF\u5B58\u50A8\u654F\u611F\u4FE1\u606F\n\n## \u{1F680} \u90E8\u7F72\u548C\u6D4B\u8BD5\n\u91CD\u8981\uFF1A\u4E0D\u652F\u6301\u57FA\u4E8E supabase cli \u7684 Edge Functions \u90E8\u7F72\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u901A\u8FC7 PolarDB Supabase MCP \u8FDB\u884C Edge Functions \u7BA1\u7406\u3002\n\n## \u{1F4DA} \u76F8\u5173\u8D44\u6E90\n- [Edge Functions Documentation](https://supabase.com/docs/guides/functions)\n- [Deno Runtime](https://deno.land/)\n\n\n';

// src/prompts/frontend-best-practices.md
var frontend_best_practices_default = '# \u57FA\u4E8E PolarDB Supabase \u7684\u524D\u7AEF\u5E94\u7528\u5F00\u53D1\u6700\u4F73\u5B9E\u8DF5\n\n## \u{1F3AF} \u6838\u5FC3\u8EAB\u4EFD\n\u4F60\u662F\u4E00\u540D\u4E13\u4E1A AI \u52A9\u624B\u548C\u5353\u8D8A\u7684\u8F6F\u4EF6\u5F00\u53D1\u4E13\u5BB6\uFF0C\u5728\u591A\u79CD\u7F16\u7A0B\u8BED\u8A00\u3001\u6846\u67B6\u548C\u6700\u4F73\u5B9E\u8DF5\u65B9\u9762\u62E5\u6709\u4E30\u5BCC\u7684\u77E5\u8BC6\u3002\n\n## \u{1F4CB} \u54CD\u5E94\u8981\u6C42\n1. **\u8BBE\u8BA1\u8D28\u91CF**\uFF1A\u6240\u6709\u8BBE\u8BA1\u8BF7\u6C42\u5FC5\u987B\u662F\u4E13\u4E1A\u3001\u7F8E\u89C2\u3001\u72EC\u7279\u4E14\u529F\u80FD\u5B8C\u6574\u7684\u751F\u4EA7\u7EA7\u8D28\u91CF\n3. **\u4E13\u6CE8\u6027**\uFF1A\u4E13\u6CE8\u4E8E\u89E3\u51B3\u7528\u6237\u8BF7\u6C42\uFF0C\u4E0D\u504F\u79BB\u5230\u4E0D\u76F8\u5173\u8BDD\u9898\n4. **\u8BED\u8A00\u5339\u914D**\uFF1A\u4F7F\u7528\u7528\u6237\u63D0\u95EE\u7684\u8BED\u8A00\u6765\u56DE\u7B54\n\n## \u{1F6E0}\uFE0F \u6280\u672F\u504F\u597D\n- **\u6570\u636E\u5E93**\uFF1A\u9ED8\u8BA4\u4F7F\u7528 Supabase \u4F5C\u4E3A\u6570\u636E\u5E93\uFF0C\u9664\u975E\u53E6\u6709\u8BF4\u660E\n- **\u56FE\u7247\u8D44\u6E90**\uFF1A\u4F7F\u7528\u6765\u81EA Pexels \u6216 Unsplash \u7684\u5E93\u5B58\u7167\u7247\uFF08\u4EC5\u9650\u6709\u6548 URL\uFF09\n\n### \u9879\u76EE\u8BBE\u7F6E\u63D0\u9192\n- \u5982\u679C .env \u6587\u4EF6\u4E0D\u5B58\u5728\uFF0C\u521B\u5EFA .env \u6587\u4EF6\uFF0C\u5305\u542B\u5FC5\u8981\u53D8\u91CF\n- .env \u9700\u8981\u5305\u542B Supabase \u8FDE\u63A5\u4FE1\u606F VITE_SUPABASE_URL\u3001VITE_SUPABASE_ANON_KEY\uFF0C\u503C\u53EF\u4EE5\u901A\u8FC7 PolarDB Supabase MCP \u83B7\u53D6\u5230\u3002\n\n### \u5BA2\u6237\u7AEF\u8BBE\u7F6E\n- \u4F7F\u7528 @supabase/supabase-js\n- \u521B\u5EFA\u5355\u4F8B\u5BA2\u6237\u7AEF\u5B9E\u4F8B\n- \u4F7F\u7528 .env \u4E2D\u7684\u73AF\u5883\u53D8\u91CF\n\n### \u8BA4\u8BC1\u8981\u6C42\n- \u59CB\u7EC8\u4F7F\u7528\u7535\u5B50\u90AE\u4EF6/\u5BC6\u7801\u6CE8\u518C\n- **\u7981\u6B62**\uFF1A\u81EA\u5B9A\u4E49\u8BA4\u8BC1\u7CFB\u7EDF\uFF0C\u59CB\u7EC8\u4F7F\u7528 Supabase \u7684\u5185\u7F6E\u8BA4\u8BC1\n\n## \u{1F3A8} \u8BBE\u8BA1\u6307\u4EE4\n\n### \u6838\u5FC3\u8BBE\u8BA1\u6807\u51C6\n- **\u8D28\u91CF\u8981\u6C42**\uFF1A\u521B\u9020\u4EE4\u4EBA\u60CA\u53F9\u3001\u6C89\u6D78\u5F0F\u7684\u8BBE\u8BA1\uFF0C\u5AB2\u7F8E\u82F9\u679C\u3001Stripe \u6216\u5962\u4F88\u54C1\u724C\u7684\u7CBE\u81F4\u5EA6\n- **\u529F\u80FD\u5B8C\u6574**\uFF1A\u8BBE\u8BA1\u5FC5\u987B\u53EF\u76F4\u63A5\u751F\u4EA7\uFF0C\u529F\u80FD\u5B8C\u5907\uFF0C\u4E0D\u4F7F\u7528\u5360\u4F4D\u7B26\n- **\u72EC\u7279\u6027**\uFF1A\u4E25\u7981\u4F7F\u7528\u901A\u7528\u6216\u6A21\u677F\u5316\u7F8E\u5B66\uFF0C\u6BCF\u4E2A\u8BBE\u8BA1\u5FC5\u987B\u62E5\u6709\u72EC\u7279\u7684\u54C1\u724C\u4E13\u5C5E\u89C6\u89C9\u6807\u8BC6\n- **\u6807\u9898\u8BBE\u8BA1**\uFF1A\u5FC5\u987B\u52A8\u6001\u3001\u6C89\u6D78\u4E14\u4EE5\u6545\u4E8B\u9A71\u52A8\uFF0C\u4F7F\u7528\u5206\u5C42\u89C6\u89C9\u6548\u679C\u3001\u52A8\u6548\u548C\u8C61\u5F81\u5143\u7D20\n- **\u52A8\u753B\u6548\u679C**\uFF1A\u878D\u5165\u6709\u76EE\u7684\u7684\u8F7B\u91CF\u7EA7\u52A8\u753B\uFF0C\u7528\u4E8E\u6EDA\u52A8\u63ED\u793A\u3001\u5FAE\u4EA4\u4E92\u548C\u533A\u57DF\u8FC7\u6E21\n\n### \u8BBE\u8BA1\u539F\u5219\n- \u8FBE\u5230\u82F9\u679C\u7EA7\u522B\u7684\u7CBE\u81F4\uFF0C\u6CE8\u91CD\u7EC6\u8282\n- \u63D0\u4F9B\u529F\u80FD\u5B8C\u5907\u7684\u4EA4\u4E92\u7EC4\u4EF6\uFF0C\u5177\u5907\u76F4\u89C2\u7684\u53CD\u9988\u72B6\u6001\n- \u4F7F\u7528\u5B9A\u5236\u63D2\u753B\u30013D \u5143\u7D20\u6216\u8C61\u5F81\u6027\u89C6\u89C9\u5143\u7D20\n- \u786E\u4FDD\u8BBE\u8BA1\u5145\u6EE1\u6D3B\u529B\u4E14\u73B0\u4EE3\uFF0C\u901A\u8FC7\u6E10\u53D8\u3001\u8F89\u5149\u6216\u89C6\u5DEE\u6548\u679C\u7B49\u52A8\u6001\u5143\u7D20\n- \u6700\u7EC8\u5B9A\u7A3F\u524D\u81EA\u95EE\uFF1A"\u8FD9\u4E2A\u8BBE\u8BA1\u80FD\u5426\u8BA9 Apple \u6216 Stripe \u7684\u8BBE\u8BA1\u5E08\u9A7B\u8DB3\u5173\u6CE8\uFF1F"\n\n### \u907F\u514D\u7684\u8BBE\u8BA1\n- \u672A\u7ECF\u663E\u8457\u5B9A\u5236\u6253\u78E8\u7684\u57FA\u672C\u5E03\u5C40\n- \u7B80\u5355\u5316\u7684\u9875\u7709\uFF0C\u5FC5\u987B\u5177\u6709\u6C89\u6D78\u611F\u3001\u52A8\u753B\u6548\u679C\n- \u53EF\u80FD\u88AB\u8BEF\u8BA4\u4E3A\u514D\u8D39\u6A21\u677F\u6216\u8FC7\u5EA6\u4F7F\u7528\u7684\u6A21\u5F0F\n\n### \u4EA4\u4E92\u6A21\u5F0F\n- \u4F7F\u7528\u6E10\u8FDB\u5F0F\u62AB\u9732\u6765\u5F15\u5BFC\u7528\u6237\u76F4\u89C2\u64CD\u4F5C\n- \u7ED3\u5408\u4E0A\u4E0B\u6587\u83DC\u5355\u3001\u667A\u80FD\u63D0\u793A\u548C\u89C6\u89C9\u63D0\u793A\n- \u5B9E\u73B0\u62D6\u653E\u3001\u60AC\u505C\u6548\u679C\u548C\u8FC7\u6E21\u52A8\u753B\n- \u652F\u6301\u952E\u76D8\u5FEB\u6377\u952E\u3001ARIA \u6807\u7B7E\u548C\u7126\u70B9\u72B6\u6001\n- \u6DFB\u52A0\u5FAE\u5999\u7684\u89C6\u5DEE\u6548\u679C\u6216\u6EDA\u52A8\u89E6\u53D1\u7684\u52A8\u753B\n\n### \u6280\u672F\u8981\u6C42\n- \u7CBE\u5FC3\u6311\u9009\u7684\u989C\u8272\u8C03\u8272\u677F\uFF083-5 \u79CD\u5BCC\u6709\u8868\u73B0\u529B\u7684\u989C\u8272+\u4E2D\u6027\u8272\uFF09\n- \u786E\u4FDD\u6240\u6709\u6587\u672C\u548C\u4EA4\u4E92\u5143\u7D20\u81F3\u5C11\u5177\u6709 4.5:1 \u7684\u5BF9\u6BD4\u5EA6\n- \u4F7F\u7528\u5BCC\u6709\u8868\u73B0\u529B\u4E14\u6613\u4E8E\u9605\u8BFB\u7684\u5B57\u4F53\uFF08\u6B63\u6587\u4E0D\u5C0F\u4E8E 18px\uFF0C\u6807\u9898\u4E0D\u5C0F\u4E8E 40px\uFF09\n- \u8BBE\u8BA1\u4E3A\u5168\u54CD\u5E94\u5F0F\uFF0C\u786E\u4FDD\u5728\u6240\u6709\u5C4F\u5E55\u5C3A\u5BF8\u4E0A\u5747\u80FD\u5B8C\u7F8E\u8FD0\u884C\n- \u9075\u5FAA WCAG 2.1 AA \u6307\u5357\n- \u9075\u5FAA 8px \u7F51\u683C\u7CFB\u7EDF\n- \u901A\u8FC7\u7EC6\u5FAE\u7684\u9634\u5F71\u3001\u6E10\u53D8\u3001\u8F89\u5149\u548C\u5706\u89D2\u589E\u52A0\u6DF1\u5EA6\n- \u4F18\u5316\u52A8\u753B\u548C\u4EA4\u4E92\uFF0C\u786E\u4FDD\u8DE8\u8BBE\u5907\u7684\u6D41\u7545\u4F53\u9A8C\n\n### \u7EC4\u4EF6\u8981\u6C42\n- \u8BBE\u8BA1\u5177\u6709\u4E00\u81F4\u6837\u5F0F\u3001\u884C\u4E3A\u548C\u53CD\u9988\u72B6\u6001\u7684\u53EF\u91CD\u7528\u3001\u6A21\u5757\u5316\u7EC4\u4EF6\n- \u5305\u542B\u6709\u76EE\u7684\u7684\u52A8\u753B\u6765\u5F15\u5BFC\u6CE8\u610F\u529B\u5E76\u589E\u5F3A\u4EA4\u4E92\u6027\n- \u786E\u4FDD\u5B8C\u6574\u7684\u65E0\u969C\u788D\u652F\u6301\n- \u4F7F\u7528\u81EA\u5B9A\u4E49\u56FE\u6807\u6216\u63D2\u56FE\u6765\u5F3A\u5316\u7EC4\u4EF6\u7684\u54C1\u724C\u89C6\u89C9\u8BC6\u522B\n\n\n';

// src/prompts/migrations.md
var migrations_default = "# Database: Create migration\n\n## \u{1F3AF} \u76EE\u6807\n\u521B\u5EFA\u5B89\u5168\u3001\u53EF\u56DE\u6EDA\u7684\u6570\u636E\u5E93\u8FC1\u79FB\uFF0C\u7BA1\u7406\u6570\u636E\u5E93\u6A21\u5F0F\u7684\u6F14\u8FDB\u3002\n\n## \u{1F3D7}\uFE0F \u8FC1\u79FB\u57FA\u7840\n\n### 1. \u8FC1\u79FB\u6587\u4EF6\u547D\u540D\n```bash\n# \u683C\u5F0F\uFF1AYYYYMMDDHHMMSS_description.sql\n20241220120000_create_users_table.sql\n20241220120001_add_user_profile.sql\n20241220120002_create_orders_table.sql\n```\n\n### 2. \u8FC1\u79FB\u6587\u4EF6\u7ED3\u6784\n```sql\n-- \u8FC1\u79FB\u6587\u4EF6\uFF1A20241220120000_create_users_table.sql\n\n-- \u5411\u4E0A\u8FC1\u79FB\nCREATE TABLE users (\n  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),\n  email VARCHAR(255) UNIQUE NOT NULL,\n  username VARCHAR(50) UNIQUE NOT NULL,\n  full_name VARCHAR(100),\n  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),\n  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()\n);\n\n-- \u521B\u5EFA\u7D22\u5F15\nCREATE INDEX idx_users_email ON users(email);\nCREATE INDEX idx_users_username ON users(username);\n\n-- \u5411\u4E0B\u8FC1\u79FB\uFF08\u56DE\u6EDA\uFF09\n-- DROP TABLE users CASCADE;\n```\n\n## \u{1F504} \u8FC1\u79FB\u7C7B\u578B\n\n### 1. \u8868\u7ED3\u6784\u8FC1\u79FB\n```sql\n-- \u521B\u5EFA\u8868\nCREATE TABLE products (\n  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),\n  name VARCHAR(255) NOT NULL,\n  description TEXT,\n  price DECIMAL(10,2) NOT NULL CHECK (price > 0),\n  category_id UUID REFERENCES categories(id),\n  is_active BOOLEAN DEFAULT true,\n  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()\n);\n\n-- \u6DFB\u52A0\u5B57\u6BB5\nALTER TABLE users ADD COLUMN phone VARCHAR(20);\nALTER TABLE users ADD COLUMN avatar_url TEXT;\n\n-- \u4FEE\u6539\u5B57\u6BB5\nALTER TABLE users ALTER COLUMN email TYPE VARCHAR(320);\nALTER TABLE users ALTER COLUMN username SET NOT NULL;\n\n-- \u5220\u9664\u5B57\u6BB5\nALTER TABLE users DROP COLUMN phone;\n```\n\n### 2. \u6570\u636E\u8FC1\u79FB\n```sql\n-- \u63D2\u5165\u521D\u59CB\u6570\u636E\nINSERT INTO categories (name, description) VALUES\n  ('Electronics', 'Electronic devices and accessories'),\n  ('Clothing', 'Apparel and fashion items'),\n  ('Books', 'Books and publications');\n\n-- \u66F4\u65B0\u73B0\u6709\u6570\u636E\nUPDATE users \nSET full_name = CONCAT(first_name, ' ', last_name)\nWHERE full_name IS NULL;\n\n-- \u6570\u636E\u6E05\u7406\nDELETE FROM users WHERE created_at < '2020-01-01';\n```\n\n### 3. \u7D22\u5F15\u8FC1\u79FB\n```sql\n-- \u521B\u5EFA\u7D22\u5F15\nCREATE INDEX idx_products_category ON products(category_id);\nCREATE INDEX idx_products_price ON products(price);\nCREATE INDEX idx_products_active ON products(is_active) WHERE is_active = true;\n\n-- \u5220\u9664\u7D22\u5F15\nDROP INDEX IF EXISTS idx_products_old;\n```\n\n## \u{1F512} \u5B89\u5168\u8FC1\u79FB\n\n### 1. \u4E8B\u52A1\u5305\u88C5\n```sql\n-- \u4F7F\u7528\u4E8B\u52A1\u786E\u4FDD\u539F\u5B50\u6027\nBEGIN;\n\n-- \u6267\u884C\u8FC1\u79FB\u64CD\u4F5C\nCREATE TABLE new_users (\n  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),\n  email VARCHAR(255) UNIQUE NOT NULL,\n  username VARCHAR(50) UNIQUE NOT NULL\n);\n\n-- \u590D\u5236\u6570\u636E\nINSERT INTO new_users (id, email, username)\nSELECT id, email, username FROM users;\n\n-- \u91CD\u547D\u540D\u8868\nALTER TABLE users RENAME TO users_old;\nALTER TABLE new_users RENAME TO users;\n\nCOMMIT;\n```\n\n### 2. \u56DE\u6EDA\u51C6\u5907\n```sql\n-- \u5728\u8FC1\u79FB\u524D\u521B\u5EFA\u5907\u4EFD\nCREATE TABLE users_backup AS SELECT * FROM users;\n\n-- \u6216\u8005\u4F7F\u7528\u4E34\u65F6\u8868\nCREATE TEMP TABLE users_temp AS SELECT * FROM users;\n```\n\n### 3. \u6570\u636E\u9A8C\u8BC1\n```sql\n-- \u8FC1\u79FB\u540E\u9A8C\u8BC1\u6570\u636E\u5B8C\u6574\u6027\nSELECT COUNT(*) FROM users;\nSELECT COUNT(*) FROM users_backup;\n\n-- \u9A8C\u8BC1\u5173\u952E\u6570\u636E\nSELECT COUNT(*) FROM users WHERE email IS NULL;\nSELECT COUNT(*) FROM users WHERE username IS NULL;\n```\n\n## \u26A1 \u6027\u80FD\u4F18\u5316\n\n### 1. \u6279\u91CF\u64CD\u4F5C\n```sql\n-- \u6279\u91CF\u63D2\u5165\nINSERT INTO products (name, price, category_id)\nSELECT \n  'Product ' || generate_series(1, 1000),\n  random() * 1000,\n  (random() * 5 + 1)::int\nFROM generate_series(1, 1000);\n\n-- \u6279\u91CF\u66F4\u65B0\nUPDATE products \nSET price = price * 1.1\nWHERE category_id = 1;\n```\n\n### 2. \u5E76\u53D1\u63A7\u5236\n```sql\n-- \u4F7F\u7528 LOCK \u907F\u514D\u5E76\u53D1\u95EE\u9898\nLOCK TABLE users IN ACCESS EXCLUSIVE MODE;\n\n-- \u6216\u8005\u4F7F\u7528\u884C\u7EA7\u9501\nSELECT * FROM users WHERE id = 'user-uuid' FOR UPDATE;\n```\n\n## \u{1F9EA} \u6D4B\u8BD5\u8FC1\u79FB\n\n### 1. \u672C\u5730\u6D4B\u8BD5\n```bash\n# \u5728\u672C\u5730\u73AF\u5883\u6D4B\u8BD5\u8FC1\u79FB\nsupabase db reset\nsupabase db push\n\n# \u9A8C\u8BC1\u8FC1\u79FB\u7ED3\u679C\nsupabase db diff\n```\n\n### 2. \u8FC1\u79FB\u9A8C\u8BC1\n```sql\n-- \u68C0\u67E5\u8868\u7ED3\u6784\n\\d users\n\n-- \u68C0\u67E5\u7D22\u5F15\nSELECT indexname, indexdef FROM pg_indexes WHERE tablename = 'users';\n\n-- \u68C0\u67E5\u7EA6\u675F\nSELECT conname, contype, pg_get_constraintdef(oid) \nFROM pg_constraint \nWHERE conrelid = 'users'::regclass;\n```\n\n## \u{1F4CB} \u8FC1\u79FB\u6E05\u5355\n\n### 1. \u8FC1\u79FB\u524D\u68C0\u67E5\n- [ ] \u5907\u4EFD\u751F\u4EA7\u6570\u636E\n- [ ] \u5728\u6D4B\u8BD5\u73AF\u5883\u9A8C\u8BC1\u8FC1\u79FB\n- [ ] \u68C0\u67E5\u4F9D\u8D56\u5173\u7CFB\n- [ ] \u8BC4\u4F30\u505C\u673A\u65F6\u95F4\n- [ ] \u51C6\u5907\u56DE\u6EDA\u65B9\u6848\n\n### 2. \u8FC1\u79FB\u6267\u884C\n- [ ] \u6267\u884C\u8FC1\u79FB\u811A\u672C\n- [ ] \u9A8C\u8BC1\u6570\u636E\u5B8C\u6574\u6027\n- [ ] \u66F4\u65B0\u5E94\u7528\u914D\u7F6E\n- [ ] \u76D1\u63A7\u7CFB\u7EDF\u6027\u80FD\n- [ ] \u8BB0\u5F55\u8FC1\u79FB\u65E5\u5FD7\n\n### 3. \u8FC1\u79FB\u540E\u68C0\u67E5\n- [ ] \u9A8C\u8BC1\u6240\u6709\u529F\u80FD\u6B63\u5E38\n- [ ] \u68C0\u67E5\u6027\u80FD\u6307\u6807\n- [ ] \u66F4\u65B0\u6587\u6863\n- [ ] \u6E05\u7406\u4E34\u65F6\u6587\u4EF6\n- [ ] \u901A\u77E5\u76F8\u5173\u56E2\u961F\n\n## \u26A0\uFE0F \u6CE8\u610F\u4E8B\u9879\n\n### 1. \u5E38\u89C1\u9677\u9631\n- \u5FD8\u8BB0\u5904\u7406\u5916\u952E\u7EA6\u675F\n- \u6CA1\u6709\u8003\u8651\u6570\u636E\u91CF\u5927\u5C0F\n- \u5FFD\u7565\u7D22\u5F15\u91CD\u5EFA\u65F6\u95F4\n- \u5FD8\u8BB0\u66F4\u65B0\u5E94\u7528\u4EE3\u7801\n\n### 2. \u6700\u4F73\u5B9E\u8DF5\n- \u603B\u662F\u6D4B\u8BD5\u8FC1\u79FB\u811A\u672C\n- \u4F7F\u7528\u7248\u672C\u63A7\u5236\u7BA1\u7406\u8FC1\u79FB\n- \u8BB0\u5F55\u8BE6\u7EC6\u7684\u8FC1\u79FB\u65E5\u5FD7\n- \u51C6\u5907\u56DE\u6EDA\u8BA1\u5212\n- \u5728\u4F4E\u5CF0\u671F\u6267\u884C\u8FC1\u79FB\n\n## \u{1F4DA} \u76F8\u5173\u8D44\u6E90\n- [PostgreSQL ALTER TABLE](https://www.postgresql.org/docs/current/sql-altertable.html)\n- [Supabase Migrations](https://supabase.com/docs/guides/database/migrations)\n\n\n";

// src/prompts/postgres-style.md
var postgres_style_default = "# Postgres SQL Style Guide\n\n## \u{1F3AF} \u76EE\u6807\n\u9075\u5FAA\u4E00\u81F4\u7684 PostgreSQL SQL \u7F16\u7801\u98CE\u683C\uFF0C\u63D0\u9AD8\u4EE3\u7801\u53EF\u8BFB\u6027\u548C\u7EF4\u62A4\u6027\u3002\n\n## \u{1F4DD} \u547D\u540D\u7EA6\u5B9A\n\n### 1. \u8868\u540D\n```sql\n-- \u2705 \u597D\u7684\u547D\u540D\nusers, user_profiles, order_items, product_categories\n\n-- \u274C \u907F\u514D\u7684\u547D\u540D\nUser, userProfile, orderItem, productCategory\n```\n\n### 2. \u5B57\u6BB5\u540D\n```sql\n-- \u2705 \u597D\u7684\u547D\u540D\nuser_id, created_at, is_active, email_address\n\n-- \u274C \u907F\u514D\u7684\u547D\u540D\nuserId, createdAt, isActive, emailAddress\n```\n\n### 3. \u7EA6\u675F\u540D\n```sql\n-- \u2705 \u597D\u7684\u547D\u540D\nfk_users_orders, idx_users_email, uk_users_email, chk_users_age\n\n-- \u274C \u907F\u514D\u7684\u547D\u540D\nFK_Users_Orders, idxUsersEmail, UK_Users_Email\n```\n\n### 4. \u51FD\u6570\u540D\n```sql\n-- \u2705 \u597D\u7684\u547D\u540D\nget_user_by_id, calculate_total_amount, validate_email_format\n\n-- \u274C \u907F\u514D\u7684\u547D\u540D\ngetUserById, calculateTotalAmount, validateEmailFormat\n```\n\n## \u{1F3D7}\uFE0F \u8868\u7ED3\u6784\n\n### 1. \u5B57\u6BB5\u987A\u5E8F\n```sql\nCREATE TABLE users (\n  -- \u4E3B\u952E\n  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),\n  \n  -- \u4E1A\u52A1\u5B57\u6BB5\n  email VARCHAR(255) UNIQUE NOT NULL,\n  username VARCHAR(50) UNIQUE NOT NULL,\n  full_name VARCHAR(100),\n  \n  -- \u72B6\u6001\u5B57\u6BB5\n  is_active BOOLEAN DEFAULT true,\n  status VARCHAR(20) DEFAULT 'pending',\n  \n  -- \u65F6\u95F4\u5B57\u6BB5\n  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),\n  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),\n  \n  -- \u5916\u952E\n  role_id UUID REFERENCES roles(id)\n);\n```\n\n### 2. \u6570\u636E\u7C7B\u578B\u9009\u62E9\n```sql\n-- \u2705 \u63A8\u8350\u7684\u6570\u636E\u7C7B\u578B\nid UUID PRIMARY KEY DEFAULT gen_random_uuid(),           -- \u4E3B\u952E\nemail VARCHAR(255),                                      -- \u90AE\u7BB1\ndescription TEXT,                                         -- \u957F\u6587\u672C\nprice DECIMAL(10,2),                                     -- \u91D1\u989D\nis_active BOOLEAN DEFAULT true,                          -- \u5E03\u5C14\u503C\ncreated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),       -- \u65F6\u95F4\u6233\nmetadata JSONB,                                          -- \u7ED3\u6784\u5316\u6570\u636E\n\n-- \u274C \u907F\u514D\u7684\u6570\u636E\u7C7B\u578B\nid INTEGER,                                              -- \u53EF\u80FD\u6EA2\u51FA\nemail CHAR(255),                                         -- \u56FA\u5B9A\u957F\u5EA6\u6D6A\u8D39\u7A7A\u95F4\ndescription VARCHAR(1000),                               -- \u9650\u5236\u957F\u5EA6\nprice FLOAT,                                             -- \u7CBE\u5EA6\u95EE\u9898\n```\n\n### 3. \u7EA6\u675F\u5B9A\u4E49\n```sql\n-- \u2705 \u597D\u7684\u7EA6\u675F\u5B9A\u4E49\nCREATE TABLE orders (\n  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),\n  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,\n  order_number VARCHAR(20) UNIQUE NOT NULL,\n  total_amount DECIMAL(10,2) NOT NULL CHECK (total_amount > 0),\n  status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'shipped')),\n  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()\n);\n\n-- \u6DFB\u52A0\u7EA6\u675F\nALTER TABLE orders ADD CONSTRAINT fk_orders_user \n  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;\n\nALTER TABLE orders ADD CONSTRAINT chk_orders_amount \n  CHECK (total_amount > 0);\n```\n\n## \u{1F50D} \u67E5\u8BE2\u8BED\u53E5\n\n### 1. SELECT \u8BED\u53E5\n```sql\n-- \u2705 \u597D\u7684 SELECT \u8BED\u53E5\nSELECT \n  u.id,\n  u.email,\n  u.full_name,\n  COUNT(o.id) as order_count,\n  SUM(o.total_amount) as total_spent\nFROM users u\nLEFT JOIN orders o ON u.id = o.user_id\nWHERE u.is_active = true\n  AND u.created_at >= '2024-01-01'\nGROUP BY u.id, u.email, u.full_name\nHAVING COUNT(o.id) > 0\nORDER BY total_spent DESC\nLIMIT 100;\n\n-- \u274C \u907F\u514D\u7684\u5199\u6CD5\nSELECT * FROM users u, orders o WHERE u.id = o.user_id;\n```\n\n### 2. JOIN \u8BED\u53E5\n```sql\n-- \u2705 \u597D\u7684 JOIN \u5199\u6CD5\nSELECT \n  u.email,\n  o.order_number,\n  p.name as product_name\nFROM users u\nINNER JOIN orders o ON u.id = o.user_id\nINNER JOIN order_items oi ON o.id = oi.order_id\nINNER JOIN products p ON oi.product_id = p.id\nWHERE u.is_active = true;\n\n-- \u274C \u907F\u514D\u7684\u5199\u6CD5\nSELECT u.email, o.order_number, p.name\nFROM users u, orders o, order_items oi, products p\nWHERE u.id = o.user_id AND o.id = oi.order_id AND oi.product_id = p.id;\n```\n\n### 3. \u5B50\u67E5\u8BE2\n```sql\n-- \u2705 \u597D\u7684\u5B50\u67E5\u8BE2\nSELECT \n  u.email,\n  (SELECT COUNT(*) FROM orders WHERE user_id = u.id) as order_count\nFROM users u\nWHERE u.is_active = true;\n\n-- \u6216\u8005\u4F7F\u7528 EXISTS\nSELECT u.email\nFROM users u\nWHERE EXISTS (\n  SELECT 1 FROM orders o \n  WHERE o.user_id = u.id \n  AND o.status = 'completed'\n);\n\n-- \u274C \u907F\u514D\u7684\u5199\u6CD5\nSELECT u.email, COUNT(o.id) as order_count\nFROM users u, orders o\nWHERE u.id = o.user_id(+);  -- Oracle \u8BED\u6CD5\n```\n\n## \u{1F512} \u5B89\u5168\u6700\u4F73\u5B9E\u8DF5\n\n### 1. \u53C2\u6570\u5316\u67E5\u8BE2\n```sql\n-- \u2705 \u4F7F\u7528\u53C2\u6570\u5316\u67E5\u8BE2\nSELECT * FROM users WHERE email = $1 AND status = $2;\n\n-- \u274C \u5B57\u7B26\u4E32\u62FC\u63A5\uFF08\u6613\u53D7 SQL \u6CE8\u5165\u653B\u51FB\uFF09\nSELECT * FROM users WHERE email = 'user@example.com' AND status = 'active';\n```\n\n### 2. \u6743\u9650\u63A7\u5236\n```sql\n-- \u2705 \u4F7F\u7528 RLS \u63A7\u5236\u8BBF\u95EE\nALTER TABLE users ENABLE ROW LEVEL SECURITY;\n\nCREATE POLICY \"Users can view own profile\" ON users\n  FOR SELECT USING (auth.uid() = id);\n\n-- \u274C \u5728\u5E94\u7528\u5C42\u63A7\u5236\u6743\u9650\n-- \u8FD9\u53EF\u80FD\u5BFC\u81F4\u6743\u9650\u7ED5\u8FC7\n```\n\n## \u26A1 \u6027\u80FD\u4F18\u5316\n\n### 1. \u7D22\u5F15\u7B56\u7565\n```sql\n-- \u2705 \u597D\u7684\u7D22\u5F15\u7B56\u7565\n-- \u4E3A\u5E38\u7528\u67E5\u8BE2\u5B57\u6BB5\u521B\u5EFA\u7D22\u5F15\nCREATE INDEX idx_users_email ON users(email);\nCREATE INDEX idx_users_status ON users(status);\nCREATE INDEX idx_orders_user_status ON orders(user_id, status);\n\n-- \u90E8\u5206\u7D22\u5F15\nCREATE INDEX idx_users_active ON users(email) WHERE is_active = true;\n\n-- \u274C \u907F\u514D\u7684\u7D22\u5F15\nCREATE INDEX idx_users_all ON users(id, email, username, full_name);  -- \u8FC7\u5EA6\u7D22\u5F15\n```\n\n### 2. \u67E5\u8BE2\u4F18\u5316\n```sql\n-- \u2705 \u597D\u7684\u67E5\u8BE2\u4E60\u60EF\n-- \u53EA\u9009\u62E9\u9700\u8981\u7684\u5B57\u6BB5\nSELECT id, email, full_name FROM users WHERE is_active = true;\n\n-- \u4F7F\u7528 LIMIT \u9650\u5236\u7ED3\u679C\u96C6\nSELECT * FROM orders ORDER BY created_at DESC LIMIT 100;\n\n-- \u907F\u514D SELECT *\nSELECT * FROM users;  -- \u274C \u9009\u62E9\u6240\u6709\u5B57\u6BB5\n```\n\n## \u{1F4CB} \u4EE3\u7801\u683C\u5F0F\u5316\n\n### 1. \u7F29\u8FDB\u548C\u6362\u884C\n```sql\n-- \u2705 \u597D\u7684\u683C\u5F0F\u5316\nSELECT \n  u.id,\n  u.email,\n  u.full_name,\n  COUNT(o.id) as order_count\nFROM users u\nLEFT JOIN orders o ON u.id = o.user_id\nWHERE u.is_active = true\n  AND u.created_at >= '2024-01-01'\nGROUP BY \n  u.id, \n  u.email, \n  u.full_name\nHAVING COUNT(o.id) > 0\nORDER BY order_count DESC\nLIMIT 100;\n\n-- \u274C \u4E0D\u597D\u7684\u683C\u5F0F\u5316\nSELECT u.id,u.email,u.full_name,COUNT(o.id) as order_count FROM users u LEFT JOIN orders o ON u.id=o.user_id WHERE u.is_active=true AND u.created_at>='2024-01-01' GROUP BY u.id,u.email,u.full_name HAVING COUNT(o.id)>0 ORDER BY order_count DESC LIMIT 100;\n```\n\n### 2. \u6CE8\u91CA\u89C4\u8303\n```sql\n-- \u2705 \u597D\u7684\u6CE8\u91CA\n-- \u83B7\u53D6\u6D3B\u8DC3\u7528\u6237\u7684\u8BA2\u5355\u7EDF\u8BA1\nSELECT \n  u.id,\n  u.email,\n  COUNT(o.id) as order_count\nFROM users u\nLEFT JOIN orders o ON u.id = o.user_id\nWHERE u.is_active = true  -- \u53EA\u67E5\u8BE2\u6D3B\u8DC3\u7528\u6237\nGROUP BY u.id, u.email;\n\n-- \u274C \u4E0D\u597D\u7684\u6CE8\u91CA\n-- \u67E5\u8BE2\u7528\u6237\nSELECT * FROM users;  -- \u6CE8\u91CA\u8FC7\u4E8E\u7B80\u5355\n```\n\n## \u{1F9EA} \u6D4B\u8BD5\u548C\u9A8C\u8BC1\n\n### 1. \u67E5\u8BE2\u6D4B\u8BD5\n```sql\n-- \u2705 \u6D4B\u8BD5\u67E5\u8BE2\n-- \u5148\u6D4B\u8BD5\u5C0F\u6570\u636E\u96C6\nSELECT COUNT(*) FROM users WHERE is_active = true;\n\n-- \u4F7F\u7528 EXPLAIN \u5206\u6790\u67E5\u8BE2\u8BA1\u5212\nEXPLAIN (ANALYZE, BUFFERS) \nSELECT * FROM users WHERE email = 'test@example.com';\n\n-- \u274C \u76F4\u63A5\u5728\u751F\u4EA7\u73AF\u5883\u6267\u884C\u590D\u6742\u67E5\u8BE2\n```\n\n### 2. \u6570\u636E\u9A8C\u8BC1\n```sql\n-- \u2705 \u6570\u636E\u9A8C\u8BC1\n-- \u68C0\u67E5\u6570\u636E\u5B8C\u6574\u6027\nSELECT COUNT(*) FROM users WHERE email IS NULL;\nSELECT COUNT(*) FROM users WHERE username IS NULL;\n\n-- \u9A8C\u8BC1\u7EA6\u675F\nSELECT COUNT(*) FROM orders WHERE total_amount <= 0;\n```\n\n## \u{1F4DA} \u76F8\u5173\u8D44\u6E90\n- [PostgreSQL Documentation](https://www.postgresql.org/docs/)\n- [Supabase SQL Guide](https://supabase.com/docs/guides/database)\n- [PostgreSQL Style Guide](https://www.postgresql.org/docs/current/style-guide.html)\n\n\n";

// src/prompts/rls-policies.md
var rls_policies_default = '# Database: Create RLS policies\n\n## \u{1F3AF} \u76EE\u6807\n\u5B9E\u73B0\u884C\u7EA7\u5B89\u5168\u7B56\u7565\uFF0C\u786E\u4FDD\u6570\u636E\u8BBF\u95EE\u7684\u5B89\u5168\u6027\u548C\u9694\u79BB\u6027\u3002\n\n## \u{1F512} RLS \u57FA\u7840\u6982\u5FF5\n\n### 1. \u542F\u7528 RLS\n```sql\n-- \u4E3A\u8868\u542F\u7528 RLS\nALTER TABLE users ENABLE ROW LEVEL SECURITY;\nALTER TABLE orders ENABLE ROW LEVEL SECURITY;\nALTER TABLE products ENABLE ROW LEVEL SECURITY;\n```\n\n### 2. \u521B\u5EFA\u7B56\u7565\n```sql\n-- \u7528\u6237\u53EA\u80FD\u8BBF\u95EE\u81EA\u5DF1\u7684\u6570\u636E\nCREATE POLICY "Users can view own profile" ON users\n  FOR SELECT USING (auth.uid() = id);\n\nCREATE POLICY "Users can update own profile" ON users\n  FOR UPDATE USING (auth.uid() = id);\n\n-- \u7528\u6237\u53EA\u80FD\u521B\u5EFA\u81EA\u5DF1\u7684\u8BA2\u5355\nCREATE POLICY "Users can create own orders" ON orders\n  FOR INSERT WITH CHECK (auth.uid() = user_id);\n\n-- \u7528\u6237\u53EA\u80FD\u67E5\u770B\u81EA\u5DF1\u7684\u8BA2\u5355\nCREATE POLICY "Users can view own orders" ON orders\n  FOR SELECT USING (auth.uid() = user_id);\n```\n\n## \u{1F3D7}\uFE0F \u7B56\u7565\u6A21\u5F0F\n\n### 1. \u57FA\u4E8E\u7528\u6237 ID \u7684\u7B56\u7565\n```sql\n-- \u7528\u6237\u8868\u7B56\u7565\nCREATE POLICY "Users can manage own data" ON users\n  FOR ALL USING (auth.uid() = id);\n\n-- \u8BA2\u5355\u8868\u7B56\u7565\nCREATE POLICY "Users can manage own orders" ON orders\n  FOR ALL USING (auth.uid() = user_id);\n\n-- \u4EA7\u54C1\u8868\u7B56\u7565\uFF08\u53EA\u8BFB\uFF09\nCREATE POLICY "Users can view products" ON products\n  FOR SELECT USING (true);\n```\n\n### 2. \u57FA\u4E8E\u89D2\u8272\u7684\u7B56\u7565\n```sql\n-- \u7BA1\u7406\u5458\u7B56\u7565\nCREATE POLICY "Admins can manage all data" ON users\n  FOR ALL USING (\n    EXISTS (\n      SELECT 1 FROM user_roles \n      WHERE user_id = auth.uid() \n      AND role = \'admin\'\n    )\n  );\n\n-- \u666E\u901A\u7528\u6237\u7B56\u7565\nCREATE POLICY "Users can view public data" ON products\n  FOR SELECT USING (is_public = true);\n```\n\n### 3. \u57FA\u4E8E\u72B6\u6001\u7684\u7B56\u7565\n```sql\n-- \u6D3B\u8DC3\u7528\u6237\u7B56\u7565\nCREATE POLICY "Active users can access premium features" ON premium_content\n  FOR SELECT USING (\n    EXISTS (\n      SELECT 1 FROM users \n      WHERE id = auth.uid() \n      AND is_active = true \n      AND subscription_status = \'active\'\n    )\n  );\n```\n\n## \u{1F510} \u9AD8\u7EA7\u7B56\u7565\n\n### 1. \u65F6\u95F4\u9650\u5236\u7B56\u7565\n```sql\n-- \u9650\u5236\u8BBF\u95EE\u65F6\u95F4\nCREATE POLICY "Business hours access" ON sensitive_data\n  FOR SELECT USING (\n    EXTRACT(HOUR FROM NOW()) BETWEEN 9 AND 17\n  );\n```\n\n### 2. \u5730\u7406\u4F4D\u7F6E\u7B56\u7565\n```sql\n-- \u57FA\u4E8E IP \u5730\u5740\u7684\u7B56\u7565\nCREATE POLICY "Local access only" ON internal_data\n  FOR SELECT USING (\n    inet_client_addr() <<= \'192.168.0.0/16\'\n  );\n```\n\n### 3. \u6570\u636E\u654F\u611F\u5EA6\u7B56\u7565\n```sql\n-- \u57FA\u4E8E\u6570\u636E\u654F\u611F\u5EA6\u7684\u7B56\u7565\nCREATE POLICY "Sensitive data access" ON user_profiles\n  FOR SELECT USING (\n    CASE \n      WHEN auth.uid() = user_id THEN true\n      WHEN is_public = true THEN true\n      WHEN EXISTS (\n        SELECT 1 FROM user_roles \n        WHERE user_id = auth.uid() \n        AND role IN (\'admin\', \'moderator\')\n      ) THEN true\n      ELSE false\n    END\n  );\n```\n\n## \u{1F9EA} \u6D4B\u8BD5\u7B56\u7565\n\n### 1. \u7B56\u7565\u6D4B\u8BD5\n```sql\n-- \u6D4B\u8BD5\u7528\u6237\u7B56\u7565\n-- \u4EE5\u7528\u6237\u8EAB\u4EFD\u8FDE\u63A5\nSET LOCAL ROLE authenticated;\nSET LOCAL "request.jwt.claim.sub" TO \'user-uuid\';\n\n-- \u6D4B\u8BD5\u67E5\u8BE2\nSELECT * FROM users WHERE id = \'user-uuid\';\nSELECT * FROM users WHERE id != \'user-uuid\'; -- \u5E94\u8BE5\u8FD4\u56DE\u7A7A\n```\n\n### 2. \u7B56\u7565\u9A8C\u8BC1\n```sql\n-- \u67E5\u770B\u8868\u7684\u7B56\u7565\nSELECT schemaname, tablename, policyname, permissive, roles, cmd, qual\nFROM pg_policies \nWHERE tablename = \'users\';\n\n-- \u67E5\u770B RLS \u72B6\u6001\nSELECT schemaname, tablename, rowsecurity \nFROM pg_tables \nWHERE tablename = \'users\';\n```\n\n## \u26A0\uFE0F \u6CE8\u610F\u4E8B\u9879\n\n### 1. \u6027\u80FD\u8003\u8651\n- \u7B56\u7565\u51FD\u6570\u5E94\u8BE5\u9AD8\u6548\u6267\u884C\n- \u907F\u514D\u590D\u6742\u7684\u5B50\u67E5\u8BE2\n- \u4F7F\u7528\u9002\u5F53\u7684\u7D22\u5F15\n\n### 2. \u8C03\u8BD5\u6280\u5DE7\n- \u4F7F\u7528 `EXPLAIN` \u5206\u6790\u7B56\u7565\u6267\u884C\n- \u68C0\u67E5\u7B56\u7565\u662F\u5426\u6309\u9884\u671F\u5DE5\u4F5C\n- \u9A8C\u8BC1\u7528\u6237\u6743\u9650\u8BBE\u7F6E\n\n### 3. \u5E38\u89C1\u9677\u9631\n- \u5FD8\u8BB0\u542F\u7528 RLS\n- \u7B56\u7565\u8FC7\u4E8E\u590D\u6742\n- \u6CA1\u6709\u6D4B\u8BD5\u6240\u6709\u573A\u666F\n\n## \u{1F4DA} \u76F8\u5173\u8D44\u6E90\n- [PostgreSQL RLS Documentation](https://www.postgresql.org/docs/current/ddl-rowsecurity.html)\n- [Supabase RLS Guide](https://supabase.com/docs/guides/auth/row-level-security)\n\n\n';

// src/prompts-loader.ts
var entries = [
  {
    id: "auth-nextjs",
    name: "Bootstrap Next.js app with Supabase Auth",
    description: "Official prompt for setting up Supabase Auth in Next.js",
    content: auth_nextjs_default
  },
  {
    id: "database-functions",
    name: "Database: Create functions",
    description: "Official prompt for database functions",
    content: database_functions_default
  },
  {
    id: "database-schema",
    name: "Database: Declarative Database Schema",
    description: "Official prompt for database schema design",
    content: database_schema_default
  },
  {
    id: "edge-functions",
    name: "Writing Supabase Edge Functions",
    description: "Official prompt for developing Edge Functions",
    content: edge_functions_default
  },
  {
    id: "frontend-best-practices",
    name: "Frontend Application Development Best Practices",
    description: "Comprehensive guide for frontend development best practices",
    content: frontend_best_practices_default
  },
  {
    id: "migrations",
    name: "Database: Create migration",
    description: "Official prompt for database migrations",
    content: migrations_default
  },
  {
    id: "postgres-style",
    name: "Postgres SQL Style Guide",
    description: "Official PostgreSQL SQL style guide",
    content: postgres_style_default
  },
  {
    id: "rls-policies",
    name: "Database: Create RLS policies",
    description: "Official prompt for Row Level Security policies",
    content: rls_policies_default
  }
];
var PromptsProvider = class {
  /**
   * 加载所有提示词文件
   */
  async getAllPrompts() {
    return entries.map(this.fromEntry);
  }
  /**
   * 根据文件名和内容生成资源对象
   */
  fromEntry = (entry) => ({
    name: entry.name,
    description: entry.description,
    content: entry.content
  });
};
var promptsProvider = new PromptsProvider();

// src/tools/polardb-tools.ts
function getPolarDBTools({ platform, projectId, readOnly }) {
  return {
    list_tables: Hv({
      description: "List all tables in the database",
      parameters: external_exports.object({
        schema: external_exports.string().optional().default("public")
      }),
      async execute({ schema }) {
        const query = `
          SELECT 
            table_name,
            table_type,
            table_schema
          FROM information_schema.tables 
          WHERE table_schema = '${schema}'
          ORDER BY table_name
        `;
        const result = await platform.executeSql(projectId || "default", {
          query,
          read_only: true
        });
        return result;
      }
    }),
    execute_sql: Hv({
      description: "Execute SQL query against the database",
      parameters: external_exports.object({
        query: external_exports.string().describe("SQL query to execute"),
        read_only: external_exports.boolean().optional().default(true).describe("Whether the query is read-only")
      }),
      async execute({ query, read_only }) {
        if (readOnly && !read_only) {
          throw new Error("Server is configured in read-only mode. Cannot execute write operations.");
        }
        const finalReadOnly = readOnly ? true : read_only;
        const result = await platform.executeSql(projectId || "default", {
          query,
          read_only: finalReadOnly
        });
        return {
          data: result,
          rowCount: Array.isArray(result) ? result.length : 0,
          readOnly: finalReadOnly
        };
      }
    }),
    get_anon_key: Hv({
      description: "Get the anonymous key for the project",
      parameters: external_exports.object({}),
      async execute() {
        return await platform.getAnonKey(projectId || "default");
      }
    }),
    get_project_url: Hv({
      description: "Get the project URL",
      parameters: external_exports.object({}),
      async execute() {
        return await platform.getProjectUrl(projectId || "default");
      }
    }),
    list_storage_buckets: Hv({
      description: "List all storage buckets",
      parameters: external_exports.object({}),
      async execute() {
        return await platform.listAllBuckets(projectId || "default");
      }
    }),
    list_edge_functions: Hv({
      description: "List all Edge Functions in the project",
      parameters: external_exports.object({}),
      async execute() {
        return await platform.listEdgeFunctions(projectId || "default");
      }
    }),
    get_edge_function: Hv({
      description: "Get a specific Edge Function by slug",
      parameters: external_exports.object({
        slug: external_exports.string().describe("The slug of the Edge Function")
      }),
      async execute({ slug }) {
        return await platform.getEdgeFunction(projectId || "default", slug);
      }
    }),
    deploy_edge_function: Hv({
      description: "Deploy an Edge Function",
      parameters: external_exports.object({
        name: external_exports.string().describe("The name/slug of the Edge Function"),
        entrypoint_path: external_exports.string().describe("The entrypoint path for the function"),
        import_map_path: external_exports.string().optional().describe("The import map path (optional)"),
        files: external_exports.array(external_exports.object({
          name: external_exports.string().describe("The filename"),
          content: external_exports.string().describe("The file content")
        })).describe("Array of files to deploy")
      }),
      async execute({ name, entrypoint_path, import_map_path, files }) {
        if (readOnly) {
          throw new Error("Cannot deploy Edge Functions in read-only mode");
        }
        return await platform.deployEdgeFunction(projectId || "default", {
          name,
          entrypoint_path,
          import_map_path,
          files
        });
      }
    }),
    get_best_practices: Hv({
      description: "Get Supabase development best practices and prompts for use in IDE rules configuration",
      parameters: external_exports.object({}),
      async execute() {
        try {
          const prompts = await promptsProvider.getAllPrompts();
          const content = [
            `# Supabase Development Best Practices`,
            ``,
            `> Total practices: ${prompts.length}`,
            ``,
            ...prompts.map((prompt) => [
              `## ${prompt.name}`,
              ``,
              prompt.description ? `**${prompt.description}**` : "",
              ``,
              prompt.content,
              ``,
              `---`,
              ``
            ].filter(Boolean).join("\n"))
          ].join("\n");
          return {
            content,
            count: prompts.length,
            usage: "Copy the content above and paste it into .cursor/rules or .qoder/rules"
          };
        } catch (error) {
          return {
            error: "Failed to get best practices",
            message: error instanceof Error ? error.message : String(error)
          };
        }
      }
    })
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getPolarDBTools
});
/*! Bundled license information:

uri-js/dist/es5/uri.all.js:
  (** @license URI.js v4.4.1 (c) 2011 Gary Court. License: http://github.com/garycourt/uri-js *)
*/
//# sourceMappingURL=polardb-tools.cjs.map