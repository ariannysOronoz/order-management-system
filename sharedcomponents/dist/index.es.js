import Ce from "react";
var Q = { exports: {} }, N = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Te;
function fr() {
  if (Te) return N;
  Te = 1;
  var y = Ce, p = Symbol.for("react.element"), R = Symbol.for("react.fragment"), E = Object.prototype.hasOwnProperty, C = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, $ = { key: !0, ref: !0, __self: !0, __source: !0 };
  function D(j, d, S) {
    var m, _ = {}, x = null, Y = null;
    S !== void 0 && (x = "" + S), d.key !== void 0 && (x = "" + d.key), d.ref !== void 0 && (Y = d.ref);
    for (m in d) E.call(d, m) && !$.hasOwnProperty(m) && (_[m] = d[m]);
    if (j && j.defaultProps) for (m in d = j.defaultProps, d) _[m] === void 0 && (_[m] = d[m]);
    return { $$typeof: p, type: j, key: x, ref: Y, props: _, _owner: C.current };
  }
  return N.Fragment = R, N.jsx = D, N.jsxs = D, N;
}
var W = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function dr() {
  return Oe || (Oe = 1, process.env.NODE_ENV !== "production" && function() {
    var y = Ce, p = Symbol.for("react.element"), R = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), $ = Symbol.for("react.profiler"), D = Symbol.for("react.provider"), j = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), Y = Symbol.for("react.offscreen"), ee = Symbol.iterator, Se = "@@iterator";
    function Pe(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = ee && e[ee] || e[Se];
      return typeof r == "function" ? r : null;
    }
    var P = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function f(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        we("error", e, t);
      }
    }
    function we(e, r, t) {
      {
        var n = P.ReactDebugCurrentFrame, o = n.getStackAddendum();
        o !== "" && (r += "%s", t = t.concat([o]));
        var s = t.map(function(i) {
          return String(i);
        });
        s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var ke = !1, De = !1, Fe = !1, Ae = !1, Ie = !1, re;
    re = Symbol.for("react.module.reference");
    function Ne(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === E || e === $ || Ie || e === C || e === S || e === m || Ae || e === Y || ke || De || Fe || typeof e == "object" && e !== null && (e.$$typeof === x || e.$$typeof === _ || e.$$typeof === D || e.$$typeof === j || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === re || e.getModuleId !== void 0));
    }
    function We(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var o = r.displayName || r.name || "";
      return o !== "" ? t + "(" + o + ")" : t;
    }
    function te(e) {
      return e.displayName || "Context";
    }
    function b(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && f("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case E:
          return "Fragment";
        case R:
          return "Portal";
        case $:
          return "Profiler";
        case C:
          return "StrictMode";
        case S:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case j:
            var r = e;
            return te(r) + ".Consumer";
          case D:
            var t = e;
            return te(t._context) + ".Provider";
          case d:
            return We(e, e.render, "ForwardRef");
          case _:
            var n = e.displayName || null;
            return n !== null ? n : b(e.type) || "Memo";
          case x: {
            var o = e, s = o._payload, i = o._init;
            try {
              return b(i(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var T = Object.assign, F = 0, ne, ae, ie, oe, se, ue, le;
    function ce() {
    }
    ce.__reactDisabledLog = !0;
    function $e() {
      {
        if (F === 0) {
          ne = console.log, ae = console.info, ie = console.warn, oe = console.error, se = console.group, ue = console.groupCollapsed, le = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ce,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        F++;
      }
    }
    function Ye() {
      {
        if (F--, F === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: T({}, e, {
              value: ne
            }),
            info: T({}, e, {
              value: ae
            }),
            warn: T({}, e, {
              value: ie
            }),
            error: T({}, e, {
              value: oe
            }),
            group: T({}, e, {
              value: se
            }),
            groupCollapsed: T({}, e, {
              value: ue
            }),
            groupEnd: T({}, e, {
              value: le
            })
          });
        }
        F < 0 && f("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var q = P.ReactCurrentDispatcher, B;
    function V(e, r, t) {
      {
        if (B === void 0)
          try {
            throw Error();
          } catch (o) {
            var n = o.stack.trim().match(/\n( *(at )?)/);
            B = n && n[1] || "";
          }
        return `
` + B + e;
      }
    }
    var J = !1, L;
    {
      var Ve = typeof WeakMap == "function" ? WeakMap : Map;
      L = new Ve();
    }
    function fe(e, r) {
      if (!e || J)
        return "";
      {
        var t = L.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      J = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = q.current, q.current = null, $e();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (h) {
              n = h;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (h) {
              n = h;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (h) {
            n = h;
          }
          e();
        }
      } catch (h) {
        if (h && n && typeof h.stack == "string") {
          for (var a = h.stack.split(`
`), v = n.stack.split(`
`), u = a.length - 1, l = v.length - 1; u >= 1 && l >= 0 && a[u] !== v[l]; )
            l--;
          for (; u >= 1 && l >= 0; u--, l--)
            if (a[u] !== v[l]) {
              if (u !== 1 || l !== 1)
                do
                  if (u--, l--, l < 0 || a[u] !== v[l]) {
                    var g = `
` + a[u].replace(" at new ", " at ");
                    return e.displayName && g.includes("<anonymous>") && (g = g.replace("<anonymous>", e.displayName)), typeof e == "function" && L.set(e, g), g;
                  }
                while (u >= 1 && l >= 0);
              break;
            }
        }
      } finally {
        J = !1, q.current = s, Ye(), Error.prepareStackTrace = o;
      }
      var k = e ? e.displayName || e.name : "", O = k ? V(k) : "";
      return typeof e == "function" && L.set(e, O), O;
    }
    function Le(e, r, t) {
      return fe(e, !1);
    }
    function Me(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function M(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return fe(e, Me(e));
      if (typeof e == "string")
        return V(e);
      switch (e) {
        case S:
          return V("Suspense");
        case m:
          return V("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return Le(e.render);
          case _:
            return M(e.type, r, t);
          case x: {
            var n = e, o = n._payload, s = n._init;
            try {
              return M(s(o), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var A = Object.prototype.hasOwnProperty, de = {}, ve = P.ReactDebugCurrentFrame;
    function U(e) {
      if (e) {
        var r = e._owner, t = M(e.type, e._source, r ? r.type : null);
        ve.setExtraStackFrame(t);
      } else
        ve.setExtraStackFrame(null);
    }
    function Ue(e, r, t, n, o) {
      {
        var s = Function.call.bind(A);
        for (var i in e)
          if (s(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var v = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (u) {
              a = u;
            }
            a && !(a instanceof Error) && (U(o), f("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), U(null)), a instanceof Error && !(a.message in de) && (de[a.message] = !0, U(o), f("Failed %s type: %s", t, a.message), U(null));
          }
      }
    }
    var qe = Array.isArray;
    function K(e) {
      return qe(e);
    }
    function Be(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Je(e) {
      try {
        return pe(e), !1;
      } catch {
        return !0;
      }
    }
    function pe(e) {
      return "" + e;
    }
    function he(e) {
      if (Je(e))
        return f("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Be(e)), pe(e);
    }
    var I = P.ReactCurrentOwner, Ke = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, me, ge, G;
    G = {};
    function Ge(e) {
      if (A.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ze(e) {
      if (A.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Xe(e, r) {
      if (typeof e.ref == "string" && I.current && r && I.current.stateNode !== r) {
        var t = b(I.current.type);
        G[t] || (f('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', b(I.current.type), e.ref), G[t] = !0);
      }
    }
    function He(e, r) {
      {
        var t = function() {
          me || (me = !0, f("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Ze(e, r) {
      {
        var t = function() {
          ge || (ge = !0, f("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var Qe = function(e, r, t, n, o, s, i) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: p,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: s
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function er(e, r, t, n, o) {
      {
        var s, i = {}, a = null, v = null;
        t !== void 0 && (he(t), a = "" + t), ze(r) && (he(r.key), a = "" + r.key), Ge(r) && (v = r.ref, Xe(r, o));
        for (s in r)
          A.call(r, s) && !Ke.hasOwnProperty(s) && (i[s] = r[s]);
        if (e && e.defaultProps) {
          var u = e.defaultProps;
          for (s in u)
            i[s] === void 0 && (i[s] = u[s]);
        }
        if (a || v) {
          var l = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && He(i, l), v && Ze(i, l);
        }
        return Qe(e, a, v, o, n, I.current, i);
      }
    }
    var z = P.ReactCurrentOwner, ye = P.ReactDebugCurrentFrame;
    function w(e) {
      if (e) {
        var r = e._owner, t = M(e.type, e._source, r ? r.type : null);
        ye.setExtraStackFrame(t);
      } else
        ye.setExtraStackFrame(null);
    }
    var X;
    X = !1;
    function H(e) {
      return typeof e == "object" && e !== null && e.$$typeof === p;
    }
    function be() {
      {
        if (z.current) {
          var e = b(z.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function rr(e) {
      return "";
    }
    var _e = {};
    function tr(e) {
      {
        var r = be();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Ee(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = tr(r);
        if (_e[t])
          return;
        _e[t] = !0;
        var n = "";
        e && e._owner && e._owner !== z.current && (n = " It was passed a child from " + b(e._owner.type) + "."), w(e), f('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), w(null);
      }
    }
    function Re(e, r) {
      {
        if (typeof e != "object")
          return;
        if (K(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            H(n) && Ee(n, r);
          }
        else if (H(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var o = Pe(e);
          if (typeof o == "function" && o !== e.entries)
            for (var s = o.call(e), i; !(i = s.next()).done; )
              H(i.value) && Ee(i.value, r);
        }
      }
    }
    function nr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === _))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = b(r);
          Ue(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !X) {
          X = !0;
          var o = b(r);
          f("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", o || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && f("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ar(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            w(e), f("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), w(null);
            break;
          }
        }
        e.ref !== null && (w(e), f("Invalid attribute `ref` supplied to `React.Fragment`."), w(null));
      }
    }
    var je = {};
    function xe(e, r, t, n, o, s) {
      {
        var i = Ne(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var v = rr();
          v ? a += v : a += be();
          var u;
          e === null ? u = "null" : K(e) ? u = "array" : e !== void 0 && e.$$typeof === p ? (u = "<" + (b(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : u = typeof e, f("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", u, a);
        }
        var l = er(e, r, t, o, s);
        if (l == null)
          return l;
        if (i) {
          var g = r.children;
          if (g !== void 0)
            if (n)
              if (K(g)) {
                for (var k = 0; k < g.length; k++)
                  Re(g[k], e);
                Object.freeze && Object.freeze(g);
              } else
                f("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Re(g, e);
        }
        if (A.call(r, "key")) {
          var O = b(e), h = Object.keys(r).filter(function(cr) {
            return cr !== "key";
          }), Z = h.length > 0 ? "{key: someKey, " + h.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!je[O + Z]) {
            var lr = h.length > 0 ? "{" + h.join(": ..., ") + ": ...}" : "{}";
            f(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Z, O, lr, O), je[O + Z] = !0;
          }
        }
        return e === E ? ar(l) : nr(l), l;
      }
    }
    function ir(e, r, t) {
      return xe(e, r, t, !0);
    }
    function or(e, r, t) {
      return xe(e, r, t, !1);
    }
    var sr = or, ur = ir;
    W.Fragment = E, W.jsx = sr, W.jsxs = ur;
  }()), W;
}
process.env.NODE_ENV === "production" ? Q.exports = fr() : Q.exports = dr();
var c = Q.exports;
function pr({ name: y, value: p }) {
  return /* @__PURE__ */ c.jsxs("div", { className: "boxWithNameAndValue", children: [
    /* @__PURE__ */ c.jsx("div", { className: "itemlabel", children: y }),
    /* @__PURE__ */ c.jsx("div", { className: "itemValue", children: p })
  ] });
}
function hr({ title: y, quantity: p, description: R, status: E, price: C }) {
  return /* @__PURE__ */ c.jsxs("div", { className: "Detailed-Dish-Info", children: [
    /* @__PURE__ */ c.jsxs("div", { className: "dish-Item", children: [
      /* @__PURE__ */ c.jsx("div", { className: "DishTitle", children: y }),
      /* @__PURE__ */ c.jsx("div", { className: "Dish-quantity-Item", children: p }),
      /* @__PURE__ */ c.jsx("div", { className: "DishDescription", children: R })
    ] }),
    /* @__PURE__ */ c.jsx("div", { className: "status-Item", children: E }),
    /* @__PURE__ */ c.jsx("div", { className: "DishPrice", children: C })
  ] });
}
function mr({ imageSrc: y, title: p, description: R }) {
  return /* @__PURE__ */ c.jsxs("div", { className: "image-card", children: [
    /* @__PURE__ */ c.jsx("img", { src: y, alt: p, className: "image-card__img" }),
    /* @__PURE__ */ c.jsxs("div", { className: "image-card__content", children: [
      /* @__PURE__ */ c.jsx("h3", { className: "image-card__title", children: p }),
      /* @__PURE__ */ c.jsx("p", { className: "image-card__description", children: R })
    ] })
  ] });
}
function gr({ itemName: y, isChecked: p }) {
  return /* @__PURE__ */ c.jsxs("div", { className: "Food-Item-Card", children: [
    /* @__PURE__ */ c.jsx("div", { className: "Food-Item", children: y }),
    /* @__PURE__ */ c.jsx("div", { className: "Food-Checkbox-Item", children: /* @__PURE__ */ c.jsx("input", { type: "checkbox", checked: p }) })
  ] });
}
export {
  hr as DishDetails,
  mr as DisplayImageCard,
  gr as FoodItemCard,
  pr as boxWithNameAndValue
};
//# sourceMappingURL=index.es.js.map
