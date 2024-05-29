!(function () {
  var t = {
      816: function (t, e, n) {
        var r, i, a
        !(function (o, s) {
          'use strict'
          ;(i = [n(170)]),
            void 0 ===
              (a =
                'function' ==
                typeof (r = function (t) {
                  var e = /(^|@)\S+\:\d+/,
                    n = /^\s*at .*(\S+\:\d+|\(native\))/m,
                    r = /^(eval@)?(\[native code\])?$/
                  function i(t, e, n) {
                    if ('function' == typeof Array.prototype.map) return t.map(e, n)
                    for (var r = new Array(t.length), i = 0; i < t.length; i++) r[i] = e.call(n, t[i])
                    return r
                  }
                  function a(t, e, n) {
                    if ('function' == typeof Array.prototype.filter) return t.filter(e, n)
                    for (var r = [], i = 0; i < t.length; i++) e.call(n, t[i]) && r.push(t[i])
                    return r
                  }
                  return {
                    parse: function (t) {
                      if (void 0 !== t.stacktrace || void 0 !== t['opera#sourceloc']) return this.parseOpera(t)
                      if (t.stack && t.stack.match(n)) return this.parseV8OrIE(t)
                      if (t.stack) return this.parseFFOrSafari(t)
                      throw new Error('Cannot parse given Error object')
                    },
                    extractLocation: function (t) {
                      if (-1 === t.indexOf(':')) return [t]
                      var e = /(.+?)(?:\:(\d+))?(?:\:(\d+))?$/.exec(t.replace(/[\(\)]/g, ''))
                      return [e[1], e[2] || void 0, e[3] || void 0]
                    },
                    parseV8OrIE: function (e) {
                      return i(
                        a(
                          e.stack.split('\n'),
                          function (t) {
                            return !!t.match(n)
                          },
                          this,
                        ),
                        function (e) {
                          e.indexOf('(eval ') > -1 &&
                            (e = e.replace(/eval code/g, 'eval').replace(/(\(eval at [^\()]*)|(\)\,.*$)/g, ''))
                          var n = e
                              .replace(/^\s+/, '')
                              .replace(/\(eval code/g, '(')
                              .split(/\s+/)
                              .slice(1),
                            r = this.extractLocation(n.pop()),
                            i = n.join(' ') || void 0,
                            a =
                              (function (t, e) {
                                if ('function' == typeof Array.prototype.indexOf) return t.indexOf(e)
                                for (var n = 0; n < t.length; n++) if (t[n] === e) return n
                                return -1
                              })(['eval', '<anonymous>'], r[0]) > -1
                                ? void 0
                                : r[0]
                          return new t(i, void 0, a, r[1], r[2], e)
                        },
                        this,
                      )
                    },
                    parseFFOrSafari: function (e) {
                      return i(
                        a(
                          e.stack.split('\n'),
                          function (t) {
                            return !t.match(r)
                          },
                          this,
                        ),
                        function (e) {
                          if (
                            (e.indexOf(' > eval') > -1 &&
                              (e = e.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g, ':$1')),
                            -1 === e.indexOf('@') && -1 === e.indexOf(':'))
                          )
                            return new t(e)
                          var n = e.split('@'),
                            r = this.extractLocation(n.pop()),
                            i = n.join('@') || void 0
                          return new t(i, void 0, r[0], r[1], r[2], e)
                        },
                        this,
                      )
                    },
                    parseOpera: function (t) {
                      return !t.stacktrace ||
                        (t.message.indexOf('\n') > -1 && t.message.split('\n').length > t.stacktrace.split('\n').length)
                        ? this.parseOpera9(t)
                        : t.stack
                        ? this.parseOpera11(t)
                        : this.parseOpera10(t)
                    },
                    parseOpera9: function (e) {
                      for (
                        var n = /Line (\d+).*script (?:in )?(\S+)/i,
                          r = e.message.split('\n'),
                          i = [],
                          a = 2,
                          o = r.length;
                        a < o;
                        a += 2
                      ) {
                        var s = n.exec(r[a])
                        s && i.push(new t(void 0, void 0, s[2], s[1], void 0, r[a]))
                      }
                      return i
                    },
                    parseOpera10: function (e) {
                      for (
                        var n = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,
                          r = e.stacktrace.split('\n'),
                          i = [],
                          a = 0,
                          o = r.length;
                        a < o;
                        a += 2
                      ) {
                        var s = n.exec(r[a])
                        s && i.push(new t(s[3] || void 0, void 0, s[2], s[1], void 0, r[a]))
                      }
                      return i
                    },
                    parseOpera11: function (n) {
                      return i(
                        a(
                          n.stack.split('\n'),
                          function (t) {
                            return !!t.match(e) && !t.match(/^Error created at/)
                          },
                          this,
                        ),
                        function (e) {
                          var n,
                            r = e.split('@'),
                            i = this.extractLocation(r.pop()),
                            a = r.shift() || '',
                            o = a.replace(/<anonymous function(: (\w+))?>/, '$2').replace(/\([^\)]*\)/g, '') || void 0
                          a.match(/\(([^\)]*)\)/) && (n = a.replace(/^[^\(]+\(([^\)]*)\)$/, '$1'))
                          var s = void 0 === n || '[arguments not available]' === n ? void 0 : n.split(',')
                          return new t(o, s, i[0], i[1], i[2], e)
                        },
                        this,
                      )
                    },
                  }
                })
                  ? r.apply(e, i)
                  : r) || (t.exports = a)
        })()
      },
      170: function (t, e) {
        var n, r, i
        !(function (a, o) {
          'use strict'
          ;(r = []),
            void 0 ===
              (i =
                'function' ==
                typeof (n = function () {
                  function t(t) {
                    return !isNaN(parseFloat(t)) && isFinite(t)
                  }
                  function e(t, e, n, r, i, a) {
                    void 0 !== t && this.setFunctionName(t),
                      void 0 !== e && this.setArgs(e),
                      void 0 !== n && this.setFileName(n),
                      void 0 !== r && this.setLineNumber(r),
                      void 0 !== i && this.setColumnNumber(i),
                      void 0 !== a && this.setSource(a)
                  }
                  return (
                    (e.prototype = {
                      getFunctionName: function () {
                        return this.functionName
                      },
                      setFunctionName: function (t) {
                        this.functionName = String(t)
                      },
                      getArgs: function () {
                        return this.args
                      },
                      setArgs: function (t) {
                        if ('[object Array]' !== Object.prototype.toString.call(t))
                          throw new TypeError('Args must be an Array')
                        this.args = t
                      },
                      getFileName: function () {
                        return this.fileName
                      },
                      setFileName: function (t) {
                        this.fileName = String(t)
                      },
                      getLineNumber: function () {
                        return this.lineNumber
                      },
                      setLineNumber: function (e) {
                        if (!t(e)) throw new TypeError('Line Number must be a Number')
                        this.lineNumber = Number(e)
                      },
                      getColumnNumber: function () {
                        return this.columnNumber
                      },
                      setColumnNumber: function (e) {
                        if (!t(e)) throw new TypeError('Column Number must be a Number')
                        this.columnNumber = Number(e)
                      },
                      getSource: function () {
                        return this.source
                      },
                      setSource: function (t) {
                        this.source = String(t)
                      },
                      toString: function () {
                        return (
                          (this.getFunctionName() || '{anonymous}') +
                          ('(' + (this.getArgs() || []).join(',') + ')') +
                          (this.getFileName() ? '@' + this.getFileName() : '') +
                          (t(this.getLineNumber()) ? ':' + this.getLineNumber() : '') +
                          (t(this.getColumnNumber()) ? ':' + this.getColumnNumber() : '')
                        )
                      },
                    }),
                    e
                  )
                })
                  ? n.apply(e, r)
                  : n) || (t.exports = i)
        })()
      },
    },
    e = {}
  function n(r) {
    var i = e[r]
    if (void 0 !== i) return i.exports
    var a = (e[r] = { exports: {} })
    return t[r].call(a.exports, a, a.exports, n), a.exports
  }
  ;(n.n = function (t) {
    var e =
      t && t.__esModule
        ? function () {
            return t.default
          }
        : function () {
            return t
          }
    return n.d(e, { a: e }), e
  }),
    (n.d = function (t, e) {
      for (var r in e) n.o(e, r) && !n.o(t, r) && Object.defineProperty(t, r, { enumerable: !0, get: e[r] })
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }),
    (function () {
      'use strict'
      var t = function (t) {
          var e = this.constructor
          return this.then(
            function (n) {
              return e.resolve(t()).then(function () {
                return n
              })
            },
            function (n) {
              return e.resolve(t()).then(function () {
                return e.reject(n)
              })
            },
          )
        },
        e = setTimeout
      function r(t) {
        return Boolean(t && void 0 !== t.length)
      }
      function i() {}
      function a(t) {
        if (!(this instanceof a)) throw new TypeError('Promises must be constructed via new')
        if ('function' != typeof t) throw new TypeError('not a function')
        ;(this._state = 0), (this._handled = !1), (this._value = void 0), (this._deferreds = []), d(t, this)
      }
      function o(t, e) {
        for (; 3 === t._state; ) t = t._value
        0 !== t._state
          ? ((t._handled = !0),
            a._immediateFn(function () {
              var n = 1 === t._state ? e.onFulfilled : e.onRejected
              if (null !== n) {
                var r
                try {
                  r = n(t._value)
                } catch (t) {
                  return void c(e.promise, t)
                }
                s(e.promise, r)
              } else (1 === t._state ? s : c)(e.promise, t._value)
            }))
          : t._deferreds.push(e)
      }
      function s(t, e) {
        try {
          if (e === t) throw new TypeError('A promise cannot be resolved with itself.')
          if (e && ('object' == typeof e || 'function' == typeof e)) {
            var n = e.then
            if (e instanceof a) return (t._state = 3), (t._value = e), void u(t)
            if ('function' == typeof n)
              return void d(
                ((r = n),
                (i = e),
                function () {
                  r.apply(i, arguments)
                }),
                t,
              )
          }
          ;(t._state = 1), (t._value = e), u(t)
        } catch (e) {
          c(t, e)
        }
        var r, i
      }
      function c(t, e) {
        ;(t._state = 2), (t._value = e), u(t)
      }
      function u(t) {
        2 === t._state &&
          0 === t._deferreds.length &&
          a._immediateFn(function () {
            t._handled || a._unhandledRejectionFn(t._value)
          })
        for (var e = 0, n = t._deferreds.length; e < n; e++) o(t, t._deferreds[e])
        t._deferreds = null
      }
      function f(t, e, n) {
        ;(this.onFulfilled = 'function' == typeof t ? t : null),
          (this.onRejected = 'function' == typeof e ? e : null),
          (this.promise = n)
      }
      function d(t, e) {
        var n = !1
        try {
          t(
            function (t) {
              n || ((n = !0), s(e, t))
            },
            function (t) {
              n || ((n = !0), c(e, t))
            },
          )
        } catch (t) {
          if (n) return
          ;(n = !0), c(e, t)
        }
      }
      ;(a.prototype.catch = function (t) {
        return this.then(null, t)
      }),
        (a.prototype.then = function (t, e) {
          var n = new this.constructor(i)
          return o(this, new f(t, e, n)), n
        }),
        (a.prototype.finally = t),
        (a.all = function (t) {
          return new a(function (e, n) {
            if (!r(t)) return n(new TypeError('Promise.all accepts an array'))
            var i = Array.prototype.slice.call(t)
            if (0 === i.length) return e([])
            var a = i.length
            function o(t, r) {
              try {
                if (r && ('object' == typeof r || 'function' == typeof r)) {
                  var s = r.then
                  if ('function' == typeof s)
                    return void s.call(
                      r,
                      function (e) {
                        o(t, e)
                      },
                      n,
                    )
                }
                ;(i[t] = r), 0 == --a && e(i)
              } catch (t) {
                n(t)
              }
            }
            for (var s = 0; s < i.length; s++) o(s, i[s])
          })
        }),
        (a.resolve = function (t) {
          return t && 'object' == typeof t && t.constructor === a
            ? t
            : new a(function (e) {
                e(t)
              })
        }),
        (a.reject = function (t) {
          return new a(function (e, n) {
            n(t)
          })
        }),
        (a.race = function (t) {
          return new a(function (e, n) {
            if (!r(t)) return n(new TypeError('Promise.race accepts an array'))
            for (var i = 0, o = t.length; i < o; i++) a.resolve(t[i]).then(e, n)
          })
        }),
        (a._immediateFn =
          ('function' == typeof setImmediate &&
            function (t) {
              setImmediate(t)
            }) ||
          function (t) {
            e(t, 0)
          }),
        (a._unhandledRejectionFn = function (t) {
          'undefined' != typeof console && console && console.warn('Possible Unhandled Promise Rejection:', t)
        })
      var l = a,
        p = {}
      g ? (p = window) : 'undefined' != typeof self && (p = self)
      var v = 'Promise' in p ? p.Promise : l,
        h = [].slice,
        g = 'undefined' != typeof window,
        m = g && 'undefined' != typeof performance ? performance : {}
      for (var y = [], S = 0; S < 256; ++S) y[S] = (S + 256).toString(16).substr(1)
      var _ = new Uint8Array(16)
      function b(t) {
        return (function (t) {
          for (var e = [], n = 0; n < t.length; n++) e.push(y[t[n]])
          return e.join('')
        })(
          'undefined' != typeof crypto && 'function' == typeof crypto.getRandomValues
            ? crypto.getRandomValues(_)
            : 'undefined' != typeof msCrypto && 'function' == typeof msCrypto.getRandomValues
            ? msCrypto.getRandomValues(_)
            : _,
        ).substr(0, t)
      }
      function w(t, e, n) {
        'function' == typeof t.setRequestHeader
          ? t.setRequestHeader(e, n)
          : t.headers && 'function' == typeof t.headers.append
          ? t.headers.append(e, n)
          : (t[e] = n)
      }
      function T(t, e) {
        var n = !1
        return (
          'string' == typeof e
            ? (n = t === e)
            : e && 'function' == typeof e.test
            ? (n = e.test(t))
            : Array.isArray(e) &&
              e.forEach(function (e) {
                n || (n = T(t, e))
              }),
          n
        )
      }
      function E() {
        return (
          g &&
          'function' == typeof Set &&
          'function' == typeof JSON.stringify &&
          m &&
          'function' == typeof m.now &&
          'withCredentials' in new window.XMLHttpRequest()
        )
      }
      function x(t, e, n) {
        if (n && t) {
          var r = q(t),
            i = typeof e
          return null != e && 'boolean' !== i && 'number' !== i && (e = String(e)), (n[r] = e), n
        }
      }
      function k(t) {
        return t && t.split('?')[0]
      }
      function I(t) {
        return null !== t && 'object' == typeof t
      }
      function C(t, e, n) {
        for (var r = 0, i = e.length; r < i; ++r) {
          var a = e[r]
          if (I(a) || 'function' == typeof a)
            for (var o = Object.keys(a), s = 0, c = o.length; s < c; s++) {
              var u = o[s],
                f = a[u]
              n && I(f) ? (I(t[u]) || (t[u] = Array.isArray(f) ? [] : {}), C(t[u], [f], !1)) : (t[u] = f)
            }
        }
        return t
      }
      function L() {
        if ('undefined' != typeof document) {
          var t = document.currentScript
          return (
            t ||
            (function () {
              if ('undefined' != typeof document)
                for (var t = document.getElementsByTagName('script'), e = 0, n = t.length; e < n; e++) {
                  var r = t[e]
                  if (r.src.indexOf('elastic') > 0) return r
                }
            })()
          )
        }
      }
      function O(t) {
        return C(t, h.call(arguments, 1), !1)
      }
      function N(t) {
        return C(t, h.call(arguments, 1), !0)
      }
      function j(t) {
        return void 0 === t
      }
      function R() {}
      function q(t) {
        return t.replace(/[.*"]/g, '_')
      }
      function F(t, e) {
        for (var n = null, r = 0; r < t.length; r++) {
          var i = t[r]
          e && e(i.type) && (!n || n._end < i._end) && (n = i)
        }
        return n
      }
      function A() {
        return m.now()
      }
      function P(t) {
        return 'number' == typeof t && t >= 0 ? t : A()
      }
      function M(t, e) {
        return j(e) || j(t) ? null : parseInt(e - t)
      }
      function H(t) {
        v.resolve().then(t)
      }
      function U() {
        return 'function' == typeof m.getEntriesByType
      }
      function z(t) {
        return (
          'undefined' != typeof PerformanceObserver &&
          PerformanceObserver.supportedEntryTypes &&
          PerformanceObserver.supportedEntryTypes.indexOf(t) >= 0
        )
      }
      function D() {
        return 'interactionCount' in performance
      }
      function B(t) {
        return t.redirectStart > 0
      }
      var V = { fetchInProgress: !1 }
      function $(t) {
        return '__apm_symbol__' + t
      }
      function J(t, e, n) {
        for (var r = t; r && !r.hasOwnProperty(e); ) r = Object.getPrototypeOf(r)
        !r && t[e] && (r = t)
        var i,
          a,
          o,
          s,
          c = $(e)
        if (r && !(i = r[c])) {
          i = r[c] = r[e]
          var u = r && Object.getOwnPropertyDescriptor(r, e)
          if (!(s = u) || (!1 !== s.writable && ('function' != typeof s.get || void 0 !== s.set))) {
            var f = n(i, c, e)
            ;(r[e] = function () {
              return f(this, arguments)
            }),
              (a = r[e]),
              (o = i),
              (a[$('OriginalDelegate')] = o)
          }
        }
        return i
      }
      var X = $('xhrIgnore'),
        G = $('xhrSync'),
        Z = $('xhrURL'),
        Y = $('xhrMethod'),
        Q = 'invoke',
        W = ['link', 'css', 'script', 'img', 'xmlhttprequest', 'fetch', 'beacon', 'iframe'],
        K = 'page-load',
        tt = [K, 'route-change', 'user-interaction', 'http-request', 'custom', 'temporary']
      function et(t) {
        var e = XMLHttpRequest.prototype
        if (e && e.addEventListener)
          var n = J(e, 'open', function () {
              return function (t, e) {
                return t[X] || ((t[Y] = e[0]), (t[Z] = e[1]), (t[G] = !1 === e[2])), n.apply(t, e)
              }
            }),
            r = J(e, 'send', function () {
              return function (e, n) {
                if (e[X]) return r.apply(e, n)
                var a = {
                  source: 'xmlhttprequest',
                  state: '',
                  type: 'macroTask',
                  data: { target: e, method: e[Y], sync: e[G], url: e[Z], status: '' },
                }
                try {
                  return (
                    (function (e) {
                      if ('schedule' !== e.state) {
                        ;(e.state = 'schedule'), t('schedule', e)
                        var n = e.data.target
                        r('readystatechange'), r('load'), r('timeout'), r('error'), r('abort')
                      }
                      function r(t) {
                        n.addEventListener(t, function (t) {
                          var r = t.type
                          'readystatechange' === r
                            ? 4 === n.readyState && 0 !== n.status && i(e, 'success')
                            : i(e, 'load' === r ? 'success' : r)
                        })
                      }
                    })(a),
                    r.apply(e, n)
                  )
                } catch (t) {
                  throw (i(a, 'error'), t)
                }
              }
            })
        function i(e, n) {
          e.state !== Q && ((e.state = Q), (e.data.status = n), t(Q, e))
        }
      }
      function nt(t) {
        return !(0 === t || (t > 399 && t < 600))
      }
      function rt() {
        return (rt =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
          }).apply(this, arguments)
      }
      function it(t, e) {
        if (!at()) return !1
        if (!('keepalive' in new Request(''))) return !1
        var n = (function (t) {
          if (!t) return 0
          if (t instanceof Blob) return t.size
          return new Blob([t]).size
        })(e)
        return 'POST' === t && n < 6e4
      }
      function at() {
        return 'function' == typeof window.fetch && 'function' == typeof window.Request
      }
      var ot = (function () {
          function t() {
            this.observers = {}
          }
          var e = t.prototype
          return (
            (e.observe = function (t, e) {
              var n = this
              if ('function' == typeof e)
                return (
                  this.observers[t] || (this.observers[t] = []),
                  this.observers[t].push(e),
                  function () {
                    var r = n.observers[t].indexOf(e)
                    r > -1 && n.observers[t].splice(r, 1)
                  }
                )
            }),
            (e.sendOnly = function (t, e) {
              var n = this.observers[t]
              n &&
                n.forEach(function (t) {
                  try {
                    t.apply(void 0, e)
                  } catch (t) {
                    console.log(t, t.stack)
                  }
                })
            }),
            (e.send = function (t, e) {
              this.sendOnly(t + ':before', e), this.sendOnly(t, e), this.sendOnly(t + ':after', e)
            }),
            t
          )
        })(),
        st = new ot(),
        ct = !1
      function ut() {
        return (
          ct ||
            ((ct = !0),
            et(function (t, e) {
              st.send('xmlhttprequest', [t, e])
            }),
            (function (t) {
              if (at()) {
                var e = window.fetch
                window.fetch = function (t, o) {
                  var s,
                    c,
                    u = this,
                    f = arguments,
                    d = t instanceof URL
                  if ('string' == typeof t || d) (s = new Request(t, o)), (c = d ? s.url : t)
                  else {
                    if (!t) return e.apply(u, f)
                    c = (s = t).url
                  }
                  var l = {
                    source: 'fetch',
                    state: '',
                    type: 'macroTask',
                    data: { target: s, method: s.method, url: c, aborted: !1 },
                  }
                  return new v(function (t, o) {
                    var c
                    ;(V.fetchInProgress = !0), n(l)
                    try {
                      c = e.apply(u, [s])
                    } catch (t) {
                      return o(t), (l.data.error = t), r(l), void (V.fetchInProgress = !1)
                    }
                    c.then(
                      function (e) {
                        var n = e.clone ? e.clone() : {}
                        t(e),
                          H(function () {
                            l.data.response = e
                            var t = n.body
                            t ? a(t, l) : r(l)
                          })
                      },
                      function (t) {
                        o(t),
                          H(function () {
                            i(l, t)
                          })
                      },
                    ),
                      (V.fetchInProgress = !1)
                  })
                }
              }
              function n(e) {
                ;(e.state = 'schedule'), t('schedule', e)
              }
              function r(e) {
                ;(e.state = Q), t(Q, e)
              }
              function i(t, e) {
                ;(t.data.aborted = (function (t) {
                  return t && 'AbortError' === t.name
                })(e)),
                  (t.data.error = e),
                  r(t)
              }
              function a(t, e) {
                var n = t.getReader()
                !(function t() {
                  n.read().then(
                    function (n) {
                      n.done ? r(e) : t()
                    },
                    function (t) {
                      i(e, t)
                    },
                  )
                })()
              }
            })(function (t, e) {
              st.send('fetch', [t, e])
            }),
            (function (t) {
              if (window.history) {
                var e = history.pushState
                'function' == typeof e &&
                  (history.pushState = function (n, r, i) {
                    var a = { source: 'history', data: { state: n, title: r, url: i } }
                    t(Q, a), e.apply(this, arguments)
                  })
              }
            })(function (t, e) {
              st.send('history', [t, e])
            })),
          st
        )
      }
      var ft = { bootstrapTime: null, lastHiddenStart: Number.MIN_SAFE_INTEGER },
        dt = !1
      function lt() {
        return (
          E()
            ? (ut(), (ft.bootstrapTime = A()), (dt = !0))
            : g && console.log('[Elastic APM] platform is not supported!'),
          dt
        )
      }
      function pt(t, e) {
        var n = e.error,
          r = e.filename,
          i = e.lineno,
          a = e.colno,
          o = []
        if (n)
          try {
            o = t.parse(n)
          } catch (t) {}
        return (
          (function (t) {
            return 0 !== t.length && (1 !== t.length || 'lineNumber' in t[0])
          })(o) || (o = [{ fileName: r, lineNumber: i, columnNumber: a }]),
          o
            .map(function (t) {
              return (
                t.functionName &&
                  (t.functionName =
                    ((e = t.functionName),
                    (n = e.split('/')),
                    (e = (e = (e = n.length > 1 ? ['Object', n[n.length - 1]].join('.') : n[0]).replace(
                      /.<$/gi,
                      '.<anonymous>',
                    )).replace(/^Anonymous function$/, '<anonymous>')),
                    (e = (n = e.split('.')).length > 1 ? n[n.length - 1] : n[0]))),
                t
              )
              var e, n
            })
            .map(function (t) {
              var e = t.fileName,
                n = t.lineNumber,
                r = t.columnNumber,
                i = t.functionName,
                a = void 0 === i ? '<anonymous>' : i
              if (!e && !n) return {}
              if (!r && !n) return {}
              var o,
                s,
                c = (function (t) {
                  return void 0 === t && (t = ''), '<anonymous>' === t && (t = ''), t
                })(e),
                u =
                  ((o = c),
                  (s =
                    window.location.origin ||
                    window.location.protocol +
                      '//' +
                      window.location.hostname +
                      (window.location.port ? ':' + window.location.port : '')),
                  o.indexOf(s) > -1 && (o = o.replace(s + '/', '')),
                  o)
              return (
                (function (t) {
                  return !!t && 0 === window.location.href.indexOf(t)
                })(c) && (u = '(inline script)'),
                { abs_path: e, filename: u, function: a, lineno: n, colno: r }
              )
            })
        )
      }
      var vt = [
          ['#', 'hash'],
          ['?', 'query'],
          ['/', 'path'],
          ['@', 'auth', 1],
          [NaN, 'host', void 0, 1],
        ],
        ht = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,
        gt = (function () {
          function t(t) {
            var e,
              n = this.extractProtocol(t || ''),
              r = n.protocol,
              i = n.address,
              a = n.slashes,
              o = !r && !a,
              s = this.getLocation(),
              c = vt.slice()
            ;(i = i.replace('\\', '/')), a || (c[2] = [NaN, 'path'])
            for (var u = 0; u < c.length; u++) {
              var f = c[u],
                d = f[0],
                l = f[1]
              if ('string' == typeof d) {
                if (~(e = i.indexOf(d))) {
                  var p = f[2]
                  if (p) {
                    var v = i.lastIndexOf(d)
                    ;(e = Math.max(e, v)), (this[l] = i.slice(0, e)), (i = i.slice(e + p))
                  } else (this[l] = i.slice(e)), (i = i.slice(0, e))
                }
              } else (this[l] = i), (i = '')
              ;(this[l] = this[l] || (o && f[3] && s[l]) || ''), f[3] && (this[l] = this[l].toLowerCase())
            }
            if (
              (o && '/' !== this.path.charAt(0) && (this.path = '/' + this.path),
              (this.relative = o),
              (this.protocol = r || s.protocol),
              (this.hostname = this.host),
              (this.port = ''),
              /:\d+$/.test(this.host))
            ) {
              var h = this.host.split(':'),
                g = h.pop(),
                m = h.join(':')
              !(function (t, e) {
                switch (e) {
                  case 'http:':
                    return '80' === t
                  case 'https:':
                    return '443' === t
                }
                return !0
              })(g, this.protocol)
                ? (this.port = g)
                : (this.host = m),
                (this.hostname = m)
            }
            ;(this.origin =
              this.protocol && this.host && 'file:' !== this.protocol ? this.protocol + '//' + this.host : 'null'),
              (this.href = this.toString())
          }
          var e = t.prototype
          return (
            (e.toString = function () {
              var t = this.protocol
              if (((t += '//'), this.auth)) {
                var e = this.auth.split(':')
                t += (e[0] ? '[REDACTED]' : '') + (e[1] ? ':[REDACTED]' : '') + '@'
              }
              return (t += this.host), (t += this.path), (t += this.query), (t += this.hash)
            }),
            (e.getLocation = function () {
              var t = {}
              return g && (t = window), t.location
            }),
            (e.extractProtocol = function (t) {
              var e = ht.exec(t)
              return { protocol: e[1] ? e[1].toLowerCase() : '', slashes: !!e[2], address: e[3] }
            }),
            t
          )
        })()
      var mt = ['tags']
      function yt(t) {
        var e = {
            transfer_size: t.transferSize,
            encoded_body_size: t.encodedBodySize,
            decoded_body_size: t.decodedBodySize,
          },
          n = (function (t) {
            void 0 === t && (t = [])
            for (var e = [], n = 0; n < t.length; n++) {
              var r = t[n],
                i = r.name,
                a = r.duration,
                o = r.description,
                s = i
              o && (s += ';desc=' + o), a && (s += ';dur=' + a), e.push(s)
            }
            return e.join(', ')
          })(t.serverTiming)
        return n && (e.headers = { 'server-timing': n }), e
      }
      function St(t) {
        var e = t.port,
          n = t.protocol,
          r = t.hostname,
          i = (function (t, e) {
            return '' === t && (t = 'http:' === e ? '80' : 'https:' === e ? '443' : ''), t
          })(e, n),
          a = 91 === r.charCodeAt(0) && 93 === r.charCodeAt(r.length - 1),
          o = r
        return (
          a && (o = r.slice(1, -1)),
          { service: { resource: r + ':' + i, name: '', type: '' }, address: o, port: Number(i) }
        )
      }
      function _t() {
        return { page: { referer: document.referrer, url: location.href } }
      }
      function bt(t, e) {
        if (e) {
          var n
          switch (t.type) {
            case 'external':
              n = (function (t) {
                var e,
                  n = t.url,
                  r = t.method,
                  i = t.target,
                  a = t.response,
                  o = new gt(n),
                  s = St(o),
                  c = { http: { method: r, url: o.href }, destination: s }
                return i && void 0 !== i.status ? (e = i.status) : a && (e = a.status), (c.http.status_code = e), c
              })(e)
              break
            case 'resource':
              n = (function (t) {
                var e = t.entry,
                  n = t.url,
                  r = St(new gt(n))
                return { http: { url: n, response: yt(e) }, destination: r }
              })(e)
              break
            case 'hard-navigation':
              n = (function (t) {
                var e = t.url
                return { destination: St(new gt(e)) }
              })(e)
          }
          t.addContext(n)
        }
      }
      function wt(t, e) {
        var n = void 0 === e ? {} : e,
          r =
            (n.tags,
            (function (t, e) {
              if (null == t) return {}
              var n,
                r,
                i = {},
                a = Object.keys(t)
              for (r = 0; r < a.length; r++) (n = a[r]), e.indexOf(n) >= 0 || (i[n] = t[n])
              return i
            })(n, mt)),
          i = _t(),
          a = {}
        if ('page-exit' === t.type)
          t.ensureContext(), t.context.page && t.context.page.url && (i.page.url = t.context.page.url)
        else if (t.type === K && U()) {
          var o = m.getEntriesByType('navigation')
          o && o.length > 0 && (a = { response: yt(o[0]) })
        }
        t.addContext(i, a, r)
      }
      var Tt = {
          service: { name: [1024, !0], version: !0, agent: { version: [1024, !0] }, environment: !0 },
          labels: { '*': !0 },
        },
        Et = { '*': !0, headers: { '*': !0 } },
        xt = {
          user: { id: !0, email: !0, username: !0 },
          tags: { '*': !0 },
          http: { response: Et },
          destination: { address: [1024], service: { '*': [1024, !0] } },
          response: Et,
        },
        kt = {
          name: [1024, !0],
          type: [1024, !0],
          id: [1024, !0],
          trace_id: [1024, !0],
          parent_id: [1024, !0],
          transaction_id: [1024, !0],
          subtype: !0,
          action: !0,
          context: xt,
        },
        It = {
          name: !0,
          parent_id: !0,
          type: [1024, !0],
          id: [1024, !0],
          trace_id: [1024, !0],
          span_count: { started: [1024, !0] },
          context: xt,
        },
        Ct = {
          id: [1024, !0],
          trace_id: !0,
          transaction_id: !0,
          parent_id: !0,
          culprit: !0,
          exception: { type: !0 },
          transaction: { type: !0 },
          context: xt,
        }
      function Lt(t) {
        return null == t || '' === t || void 0 === t
      }
      function Ot(t, e, n) {
        var r = (function (t, e, n, r) {
          return (
            void 0 === e && (e = 1024),
            void 0 === n && (n = !1),
            void 0 === r && (r = 'N/A'),
            n && Lt(t) && (t = r),
            'string' == typeof t ? t.substring(0, e) : t
          )
        })(t[e], n[0], n[1])
        Lt(r) ? delete t[e] : (t[e] = r)
      }
      function Nt(t, e, n) {
        void 0 === t && (t = {}), void 0 === n && (n = e)
        for (
          var r = Object.keys(t),
            i = [],
            a = function (a) {
              var o = r[a],
                s = !0 === t[o] ? i : t[o]
              Array.isArray(s)
                ? '*' === o
                  ? Object.keys(n).forEach(function (t) {
                      return Ot(n, t, s)
                    })
                  : Ot(n, o, s)
                : Nt(s, e, n[o])
            },
            o = 0;
          o < r.length;
          o++
        )
          a(o)
        return e
      }
      var jt = n(816),
        Rt = n.n(jt),
        qt = ['tags']
      var Ft = ['stack', 'message']
      var At = (function () {
          function t(t, e, n) {
            ;(this._apmServer = t), (this._configService = e), (this._transactionService = n)
          }
          var e = t.prototype
          return (
            (e.createErrorDataModel = function (t) {
              var e = (function (t) {
                  return t.filter(function (t) {
                    var e = t.filename,
                      n = t.lineno
                    return void 0 !== e && void 0 !== n
                  })
                })(pt(Rt(), t)),
                n = '(inline script)',
                r = e[e.length - 1]
              r && r.filename && (n = r.filename)
              var i = t.message,
                a = t.error,
                o = i,
                s = '',
                c = {}
              if (a && 'object' == typeof a) {
                ;(o = o || a.message), (s = a.name)
                var u = (function (t) {
                  var e = !1,
                    n = {}
                  if (
                    (Object.keys(t).forEach(function (r) {
                      if (!(Ft.indexOf(r) >= 0)) {
                        var i = t[r]
                        if (null != i && 'function' != typeof i) {
                          if ('object' == typeof i) {
                            if ('function' != typeof i.toISOString) return
                            i = i.toISOString()
                          }
                          ;(n[r] = i), (e = !0)
                        }
                      }
                    }),
                    e)
                  )
                    return n
                })(a)
                u && (c.custom = u)
              }
              s || (o && o.indexOf(':') > -1 && (s = o.split(':')[0]))
              var f = this._transactionService.getCurrentTransaction(),
                d = f ? f.context : {},
                l = this._configService.get('context'),
                p =
                  (l.tags,
                  (function (t, e) {
                    if (null == t) return {}
                    var n,
                      r,
                      i = {},
                      a = Object.keys(t)
                    for (r = 0; r < a.length; r++) (n = a[r]), e.indexOf(n) >= 0 || (i[n] = t[n])
                    return i
                  })(l, qt)),
                v = N({}, _t(), d, p, c),
                h = { id: b(), culprit: n, exception: { message: o, stacktrace: e, type: s }, context: v }
              return (
                f &&
                  (h = O(h, {
                    trace_id: f.traceId,
                    parent_id: f.id,
                    transaction_id: f.id,
                    transaction: { type: f.type, sampled: f.sampled },
                  })),
                Nt(Ct, h)
              )
            }),
            (e.logErrorEvent = function (t) {
              if (void 0 !== t) {
                var e = this.createErrorDataModel(t)
                void 0 !== e.exception.message && this._apmServer.addError(e)
              }
            }),
            (e.registerListeners = function () {
              var t = this
              window.addEventListener('error', function (e) {
                return t.logErrorEvent(e)
              }),
                window.addEventListener('unhandledrejection', function (e) {
                  return t.logPromiseEvent(e)
                })
            }),
            (e.logPromiseEvent = function (t) {
              var e,
                n = t.reason
              ;(null == n && (n = '<no reason specified>'), 'string' == typeof n.message)
                ? (e = {
                    error: n,
                    message: 'Unhandled promise rejection: ' + (n.name ? n.name + ': ' : '') + n.message,
                  })
                : (e = this._parseRejectReason(n))
              this.logErrorEvent(e)
            }),
            (e.logError = function (t) {
              var e = {}
              return 'string' == typeof t ? (e.message = t) : (e.error = t), this.logErrorEvent(e)
            }),
            (e._parseRejectReason = function (t) {
              var e = { message: 'Unhandled promise rejection: ' }
              if (Array.isArray(t)) e.message += '<object>'
              else if ('object' == typeof t)
                try {
                  ;(e.message += JSON.stringify(t)), (e.error = t)
                } catch (t) {
                  e.message += '<object>'
                }
              else e.message += 'function' == typeof t ? '<function>' : t
              return e
            }),
            t
          )
        })(),
        Pt = (function () {
          function t(t, e) {
            void 0 === e && (e = {}),
              (this.onFlush = t),
              (this.items = []),
              (this.queueLimit = e.queueLimit || -1),
              (this.flushInterval = e.flushInterval || 0),
              (this.timeoutId = void 0)
          }
          var e = t.prototype
          return (
            (e._setTimer = function () {
              var t = this
              this.timeoutId = setTimeout(function () {
                return t.flush()
              }, this.flushInterval)
            }),
            (e._clear = function () {
              void 0 !== this.timeoutId && (clearTimeout(this.timeoutId), (this.timeoutId = void 0)), (this.items = [])
            }),
            (e.flush = function () {
              this.onFlush(this.items), this._clear()
            }),
            (e.add = function (t) {
              this.items.push(t),
                -1 !== this.queueLimit && this.items.length >= this.queueLimit
                  ? this.flush()
                  : void 0 === this.timeoutId && this._setTimer()
            }),
            t
          )
        })()
      var Mt = (function () {
          function t() {}
          return (
            (t.stringify = function (t) {
              return JSON.stringify(t) + '\n'
            }),
            t
          )
        })(),
        Ht = [
          'fetchStart',
          'domainLookupStart',
          'domainLookupEnd',
          'connectStart',
          'connectEnd',
          'requestStart',
          'responseStart',
          'responseEnd',
          'domLoading',
          'domInteractive',
          'domContentLoadedEventStart',
          'domContentLoadedEventEnd',
          'domComplete',
          'loadEventStart',
          'loadEventEnd',
        ],
        Ut = ['fs', 'ls', 'le', 'cs', 'ce', 'qs', 'rs', 're', 'dl', 'di', 'ds', 'de', 'dc', 'es', 'ee']
      function zt(t) {
        var e = (function (t) {
          var e = t.redirectStart,
            n = t.fetchStart,
            r = t.navigationStart,
            i = t.responseStart,
            a = t.responseEnd
          if (n >= r && i >= n && a >= i) {
            var o = {}
            return (
              Ht.forEach(function (r) {
                var i = t[r]
                i && i >= n && (B(t) ? (o[r] = parseInt(i - e)) : (o[r] = parseInt(i - n)))
              }),
              o
            )
          }
          return null
        })(t)
        return null == e
          ? null
          : {
              navigationTiming: e,
              agent: { timeToFirstByte: e.responseStart, domInteractive: e.domInteractive, domComplete: e.domComplete },
            }
      }
      function Dt(t) {
        return { ts: t.transfer_size, ebs: t.encoded_body_size, dbs: t.decoded_body_size }
      }
      function Bt(t) {
        if (!t) return null
        var e = {},
          n = t.page,
          r = t.http,
          i = t.response,
          a = t.destination,
          o = t.user,
          s = t.custom
        if (
          (n && (e.p = { rf: n.referer, url: n.url }),
          r &&
            (e.h = (function (t) {
              var e = {},
                n = t.method,
                r = t.status_code,
                i = t.url,
                a = t.response
              return (e.url = i), n && (e.mt = n), r && (e.sc = r), a && (e.r = Dt(a)), e
            })(r)),
          i && (e.r = Dt(i)),
          a)
        ) {
          var c = a.service
          e.dt = { se: { n: c.name, t: c.type, rc: c.resource }, ad: a.address, po: a.port }
        }
        return o && (e.u = { id: o.id, un: o.username, em: o.email }), s && (e.cu = s), e
      }
      function Vt(t) {
        if (!t) return null
        var e = (function (t) {
          if (!t) return null
          var e = {}
          return (
            Ut.forEach(function (n, r) {
              var i = Ht[r]
              e[n] = t[i]
            }),
            e
          )
        })(t.navigationTiming)
        return { nt: e, a: $t(e, t.agent) }
      }
      function $t(t, e) {
        var n = {}
        if ((t && (n = { fb: t.rs, di: t.di, dc: t.dc }), e)) {
          var r = e.firstContentfulPaint,
            i = e.largestContentfulPaint
          r && (n.fp = r), i && (n.lp = i)
        }
        return 0 === Object.keys(n).length ? null : n
      }
      function Jt(t, e) {
        void 0 === e && (e = 'gzip')
        var n = 'function' == typeof CompressionStream
        return new v(function (r) {
          if (!n) return r(t)
          if (
            (function () {
              var t = '_elastic_inspect_beacon_'
              if (null != sessionStorage.getItem(t)) return !0
              if (!window.URL || !window.URLSearchParams) return !1
              try {
                var e = new URL(window.location.href).searchParams.has(t)
                return e && sessionStorage.setItem(t, !0), e
              } catch (t) {}
              return !1
            })()
          )
            return r(t)
          var i = t.payload,
            a = t.headers,
            o = t.beforeSend,
            s = new Blob([i]).stream().pipeThrough(new CompressionStream(e))
          return new Response(s).blob().then(function (t) {
            return (a['Content-Encoding'] = e), r({ payload: t, headers: a, beforeSend: o })
          })
        })
      }
      function Xt(t, e, n) {
        var r = n.timeout,
          i = void 0 === r ? HTTP_REQUEST_TIMEOUT : r,
          a = n.payload,
          o = n.headers,
          s = n.beforeSend,
          c = n.sendCredentials
        return new v(function (n, r) {
          var u = new window.XMLHttpRequest()
          if (((u[X] = !0), u.open(t, e, !0), (u.timeout = i), (u.withCredentials = c), o))
            for (var f in o) o.hasOwnProperty(f) && u.setRequestHeader(f, o[f])
          ;(u.onreadystatechange = function () {
            if (4 === u.readyState) {
              var t = u.status,
                i = u.responseText
              nt(t) ? n(u) : r({ url: e, status: t, responseText: i })
            }
          }),
            (u.onerror = function () {
              var t = u.status,
                n = u.responseText
              r({ url: e, status: t, responseText: n })
            })
          var d = !0
          'function' == typeof s && (d = s({ url: e, method: t, headers: o, payload: a, xhr: u })),
            d ? u.send(a) : r({ url: e, status: 0, responseText: 'Request rejected by user configuration.' })
        })
      }
      var Gt = (function () {
        function t(t, e) {
          ;(this._configService = t), (this._loggingService = e), (this.queue = void 0), (this.throttleEvents = R)
        }
        var e = t.prototype
        return (
          (e.init = function () {
            var t = this,
              e = this._configService.get('queueLimit'),
              n = this._configService.get('flushInterval'),
              r = this._configService.get('eventsLimit')
            ;(this.queue = new Pt(
              function (e) {
                var n = t.sendEvents(e)
                n &&
                  n.catch(function (e) {
                    t._loggingService.warn('Failed sending events!', t._constructError(e))
                  })
              },
              { queueLimit: e, flushInterval: n },
            )),
              (this.throttleEvents = (function (t, e, n) {
                var r,
                  i = this,
                  a = n.limit,
                  o = n.interval,
                  s = 0
                return function () {
                  return (
                    s++,
                    void 0 === r &&
                      (r = setTimeout(function () {
                        ;(s = 0), (r = void 0)
                      }, o)),
                    s > a && 'function' == typeof e ? e.apply(i, arguments) : t.apply(i, arguments)
                  )
                }
              })(
                this.queue.add.bind(this.queue),
                function () {
                  return t._loggingService.warn('Dropped events due to throttling!')
                },
                { limit: r, interval: 6e4 },
              )),
              this._configService.observeEvent('queue:flush', function () {
                t.queue.flush()
              })
          }),
          (e._postJson = function (t, e) {
            var n = this,
              r = {
                payload: e,
                headers: { 'Content-Type': 'application/x-ndjson' },
                beforeSend: this._configService.get('apmRequest'),
              }
            return Jt(r)
              .catch(function (t) {
                return r
              })
              .then(function (e) {
                return n._makeHttpRequest('POST', t, e)
              })
              .then(function (t) {
                return t.responseText
              })
          }),
          (e._constructError = function (t) {
            var e = t.url,
              n = t.status
            t.responseText
            if (void 0 === n) return t
            var r = e + ' HTTP status: ' + n
            return new Error(r)
          }),
          (e._makeHttpRequest = function (t, e, n) {
            var r = void 0 === n ? {} : n,
              i = r.timeout,
              a = void 0 === i ? 1e4 : i,
              o = r.payload,
              s = r.headers,
              c = r.beforeSend,
              u = this._configService.get('sendCredentials')
            return !c && it(t, o)
              ? (function (t, e, n) {
                  var r,
                    i = n.keepalive,
                    a = void 0 !== i && i,
                    o = n.timeout,
                    s = void 0 === o ? 1e4 : o,
                    c = n.payload,
                    u = n.headers,
                    f = n.sendCredentials,
                    d = {}
                  if ('function' == typeof AbortController) {
                    var l = new AbortController()
                    ;(d.signal = l.signal),
                      setTimeout(function () {
                        return l.abort()
                      }, s)
                  }
                  return window
                    .fetch(
                      e,
                      rt({ body: c, headers: u, method: t, keepalive: a, credentials: f ? 'include' : 'omit' }, d),
                    )
                    .then(function (t) {
                      return (r = t).text()
                    })
                    .then(function (t) {
                      var n = { url: e, status: r.status, responseText: t }
                      if (!nt(r.status)) throw n
                      return n
                    })
                })(t, e, { keepalive: !0, timeout: a, payload: o, headers: s, sendCredentials: u }).catch(function (n) {
                  if (n instanceof TypeError)
                    return Xt(t, e, { timeout: a, payload: o, headers: s, beforeSend: c, sendCredentials: u })
                  throw n
                })
              : Xt(t, e, { timeout: a, payload: o, headers: s, beforeSend: c, sendCredentials: u })
          }),
          (e.fetchConfig = function (t, e) {
            var n = this,
              r = this.getEndpoints().configEndpoint
            if (!t) return v.reject('serviceName is required for fetching central config.')
            ;(r += '?service.name=' + t), e && (r += '&service.environment=' + e)
            var i = this._configService.getLocalConfig()
            i && (r += '&ifnonematch=' + i.etag)
            var a = this._configService.get('apmRequest')
            return this._makeHttpRequest('GET', r, { timeout: 5e3, beforeSend: a })
              .then(function (t) {
                var e = t.status,
                  r = t.responseText
                if (304 === e) return i
                var a = JSON.parse(r),
                  o = t.getResponseHeader('etag')
                return o && ((a.etag = o.replace(/["]/g, '')), n._configService.setLocalConfig(a, !0)), a
              })
              .catch(function (t) {
                var e = n._constructError(t)
                return v.reject(e)
              })
          }),
          (e.createMetaData = function () {
            var t = this._configService,
              e = {
                service: {
                  name: t.get('serviceName'),
                  version: t.get('serviceVersion'),
                  agent: { name: 'rum-js', version: t.version },
                  language: { name: 'javascript' },
                  environment: t.get('environment'),
                },
                labels: t.get('context.tags'),
              }
            return Nt(Tt, e)
          }),
          (e.addError = function (t) {
            var e
            this.throttleEvents((((e = {}).errors = t), e))
          }),
          (e.addTransaction = function (t) {
            var e
            this.throttleEvents((((e = {}).transactions = t), e))
          }),
          (e.ndjsonErrors = function (t, e) {
            var n = e ? 'e' : 'error'
            return t.map(function (t) {
              var r
              return Mt.stringify(
                (((r = {})[n] = e
                  ? (function (t) {
                      var e,
                        n = t.exception,
                        r = {
                          id: t.id,
                          cl: t.culprit,
                          ex: {
                            mg: n.message,
                            st:
                              ((e = n.stacktrace),
                              e.map(function (t) {
                                return { ap: t.abs_path, f: t.filename, fn: t.function, li: t.lineno, co: t.colno }
                              })),
                            t: t.type,
                          },
                          c: Bt(t.context),
                        },
                        i = t.transaction
                      return (
                        i &&
                          ((r.tid = t.trace_id),
                          (r.pid = t.parent_id),
                          (r.xid = t.transaction_id),
                          (r.x = { t: i.type, sm: i.sampled })),
                        r
                      )
                    })(t)
                  : t),
                r),
              )
            })
          }),
          (e.ndjsonMetricsets = function (t) {
            return t
              .map(function (t) {
                return Mt.stringify({ metricset: t })
              })
              .join('')
          }),
          (e.ndjsonTransactions = function (t, e) {
            var n = this,
              r = e ? 'x' : 'transaction'
            return t.map(function (t) {
              var i,
                a = '',
                o = ''
              return (
                e ||
                  (t.spans &&
                    ((a = t.spans
                      .map(function (t) {
                        return Mt.stringify({ span: t })
                      })
                      .join('')),
                    delete t.spans),
                  t.breakdown && ((o = n.ndjsonMetricsets(t.breakdown)), delete t.breakdown)),
                Mt.stringify(
                  (((i = {})[r] = e
                    ? (function (t) {
                        var e,
                          n = t.spans.map(function (e) {
                            var n = {
                              id: e.id,
                              n: e.name,
                              t: e.type,
                              s: e.start,
                              d: e.duration,
                              c: Bt(e.context),
                              o: e.outcome,
                              sr: e.sample_rate,
                            }
                            return (
                              e.parent_id !== t.id && (n.pid = e.parent_id),
                              !0 === e.sync && (n.sy = !0),
                              e.subtype && (n.su = e.subtype),
                              e.action && (n.ac = e.action),
                              n
                            )
                          }),
                          r = {
                            id: t.id,
                            tid: t.trace_id,
                            n: t.name,
                            t: t.type,
                            d: t.duration,
                            c: Bt(t.context),
                            k: Vt(t.marks),
                            me:
                              ((e = t.breakdown),
                              e.map(function (t) {
                                var e = t.span,
                                  n = t.samples
                                return {
                                  y: { t: e.type },
                                  sa: {
                                    ysc: { v: n['span.self_time.count'].value },
                                    yss: { v: n['span.self_time.sum.us'].value },
                                  },
                                }
                              })),
                            y: n,
                            yc: { sd: n.length },
                            sm: t.sampled,
                            sr: t.sample_rate,
                            o: t.outcome,
                          }
                        if (t.experience) {
                          var i = t.experience,
                            a = i.cls,
                            o = i.fid,
                            s = i.tbt,
                            c = i.longtask
                          r.exp = { cls: a, fid: o, tbt: s, lt: c }
                        }
                        if (t.session) {
                          var u = t.session,
                            f = u.id,
                            d = u.sequence
                          r.ses = { id: f, seq: d }
                        }
                        return r
                      })(t)
                    : t),
                  i),
                ) +
                  a +
                  o
              )
            })
          }),
          (e.sendEvents = function (t) {
            var e, n
            if (0 !== t.length) {
              for (var r = [], i = [], a = 0; a < t.length; a++) {
                var o = t[a]
                o.transactions && r.push(o.transactions), o.errors && i.push(o.errors)
              }
              if (0 !== r.length || 0 !== i.length) {
                var s = this._configService,
                  c = (((e = {}).transactions = r), (e.errors = i), e),
                  u = s.applyFilters(c)
                if (u) {
                  var f = s.get('apiVersion') > 2,
                    d = [],
                    l = this.createMetaData(),
                    p = f ? 'm' : 'metadata'
                  d.push(
                    Mt.stringify(
                      (((n = {})[p] = f
                        ? (function (t) {
                            var e = t.service,
                              n = t.labels,
                              r = e.agent,
                              i = e.language
                            return {
                              se: {
                                n: e.name,
                                ve: e.version,
                                a: { n: r.name, ve: r.version },
                                la: { n: i.name },
                                en: e.environment,
                              },
                              l: n,
                            }
                          })(l)
                        : l),
                      n),
                    ),
                  )
                  var v = (d = d.concat(
                      this.ndjsonErrors(u.errors, f),
                      this.ndjsonTransactions(u.transactions, f),
                    )).join(''),
                    h = this.getEndpoints().intakeEndpoint
                  return this._postJson(h, v)
                }
                this._loggingService.warn('Dropped payload due to filtering!')
              }
            }
          }),
          (e.getEndpoints = function () {
            var t = this._configService.get('serverUrl'),
              e = this._configService.get('apiVersion')
            return {
              intakeEndpoint: t + (this._configService.get('serverUrlPrefix') || '/intake/v' + e + '/rum/events'),
              configEndpoint: t + '/config/v1/rum/agents',
            }
          }),
          t
        )
      })()
      function Zt() {
        return (Zt =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
          }).apply(this, arguments)
      }
      var Yt,
        Qt = (function () {
          function t() {
            ;(this.config = {
              serviceName: '',
              serviceVersion: '',
              environment: '',
              serverUrl: 'http://localhost:8200',
              serverUrlPrefix: '',
              active: !0,
              instrument: !0,
              disableInstrumentations: [],
              logLevel: 'warn',
              breakdownMetrics: !1,
              ignoreTransactions: [],
              eventsLimit: 80,
              queueLimit: -1,
              flushInterval: 500,
              distributedTracing: !0,
              distributedTracingOrigins: [],
              distributedTracingHeaderName: 'traceparent',
              pageLoadTraceId: '',
              pageLoadSpanId: '',
              pageLoadSampled: !1,
              pageLoadTransactionName: '',
              propagateTracestate: !1,
              transactionSampleRate: 1,
              centralConfig: !1,
              monitorLongtasks: !0,
              apiVersion: 2,
              context: {},
              session: !1,
              apmRequest: null,
              sendCredentials: !1,
            }),
              (this.events = new ot()),
              (this.filters = []),
              (this.version = '')
          }
          var e = t.prototype
          return (
            (e.init = function () {
              var t = (function (t) {
                if (!t) return {}
                for (var e = {}, n = /^data-([\w-]+)$/, r = t.attributes, i = 0; i < r.length; i++) {
                  var a = r[i]
                  if (n.test(a.nodeName)) {
                    var o = a.nodeName
                      .match(n)[1]
                      .split('-')
                      .map(function (t, e) {
                        return e > 0 ? t.charAt(0).toUpperCase() + t.substring(1) : t
                      })
                      .join('')
                    e[o] = a.value || a.nodeValue
                  }
                }
                return e
              })(L())
              this.setConfig(t)
            }),
            (e.setVersion = function (t) {
              this.version = t
            }),
            (e.addFilter = function (t) {
              if ('function' != typeof t) throw new Error('Argument to must be function')
              this.filters.push(t)
            }),
            (e.applyFilters = function (t) {
              for (var e = 0; e < this.filters.length; e++) if (!(t = this.filters[e](t))) return
              return t
            }),
            (e.get = function (t) {
              return t.split('.').reduce(function (t, e) {
                return t && t[e]
              }, this.config)
            }),
            (e.setUserContext = function (t) {
              void 0 === t && (t = {})
              var e = {},
                n = t,
                r = n.id,
                i = n.username,
                a = n.email
              ;('number' != typeof r && 'string' != typeof r) || (e.id = r),
                'string' == typeof i && (e.username = i),
                'string' == typeof a && (e.email = a),
                (this.config.context.user = O(this.config.context.user || {}, e))
            }),
            (e.setCustomContext = function (t) {
              void 0 === t && (t = {}), (this.config.context.custom = O(this.config.context.custom || {}, t))
            }),
            (e.addLabels = function (t) {
              var e = this
              this.config.context.tags || (this.config.context.tags = {}),
                Object.keys(t).forEach(function (n) {
                  return x(n, t[n], e.config.context.tags)
                })
            }),
            (e.setConfig = function (t) {
              void 0 === t && (t = {})
              var e = t,
                n = e.transactionSampleRate,
                r = e.serverUrl
              r && (t.serverUrl = r.replace(/\/+$/, '')),
                j(n) || (n < 1e-4 && n > 0 && (n = 1e-4), (t.transactionSampleRate = Math.round(1e4 * n) / 1e4)),
                N(this.config, t),
                this.events.send('config:change', [this.config])
            }),
            (e.validate = function (t) {
              void 0 === t && (t = {})
              var e = ['serviceName', 'serverUrl'],
                n = Object.keys(this.config),
                r = { missing: [], invalid: [], unknown: [] }
              Object.keys(t).forEach(function (i) {
                ;-1 === e.indexOf(i) || t[i] || r.missing.push(i), -1 === n.indexOf(i) && r.unknown.push(i)
              }),
                t.serviceName &&
                  !/^[a-zA-Z0-9 _-]+$/.test(t.serviceName) &&
                  r.invalid.push({ key: 'serviceName', value: t.serviceName, allowed: 'a-z, A-Z, 0-9, _, -, <space>' })
              var i = t.transactionSampleRate
              return (
                void 0 !== i &&
                  ('number' != typeof i || isNaN(i) || i < 0 || i > 1) &&
                  r.invalid.push({ key: 'transactionSampleRate', value: i, allowed: 'Number between 0 and 1' }),
                r
              )
            }),
            (e.getLocalConfig = function () {
              var t = sessionStorage
              this.config.session && (t = localStorage)
              var e = t.getItem('elastic_apm_config')
              if (e) return JSON.parse(e)
            }),
            (e.setLocalConfig = function (t, e) {
              if (t) {
                if (e) t = Zt({}, this.getLocalConfig(), t)
                var n = sessionStorage
                this.config.session && (n = localStorage), n.setItem('elastic_apm_config', JSON.stringify(t))
              }
            }),
            (e.dispatchEvent = function (t, e) {
              this.events.send(t, e)
            }),
            (e.observeEvent = function (t, e) {
              return this.events.observe(t, e)
            }),
            t
          )
        })(),
        Wt = (function () {
          function t(t) {
            void 0 === t && (t = {}),
              (this.levels = ['trace', 'debug', 'info', 'warn', 'error']),
              (this.level = t.level || 'warn'),
              (this.prefix = t.prefix || ''),
              this.resetLogMethods()
          }
          var e = t.prototype
          return (
            (e.shouldLog = function (t) {
              return this.levels.indexOf(t) >= this.levels.indexOf(this.level)
            }),
            (e.setLevel = function (t) {
              t !== this.level && ((this.level = t), this.resetLogMethods())
            }),
            (e.resetLogMethods = function () {
              var t = this
              this.levels.forEach(function (e) {
                t[e] = t.shouldLog(e)
                  ? function () {
                      var t = e
                      ;('trace' !== e && 'debug' !== e) || (t = 'info')
                      var n = arguments
                      if (((n[0] = this.prefix + n[0]), console)) {
                        var r = console[t] || console.log
                        'function' == typeof r && r.apply(console, n)
                      }
                    }
                  : R
              })
            }),
            t
          )
        })(),
        Kt =
          (((Yt = {}).ConfigService = function () {
            return new Qt()
          }),
          (Yt.LoggingService = function () {
            return new Wt({ prefix: '[Elastic APM] ' })
          }),
          (Yt.ApmServer = function (t) {
            var e = t.getService(['ConfigService', 'LoggingService']),
              n = e[0],
              r = e[1]
            return new Gt(n, r)
          }),
          Yt),
        te = (function () {
          function t() {
            ;(this.instances = {}), (this.initialized = !1)
          }
          var e = t.prototype
          return (
            (e.init = function () {
              if (!this.initialized) {
                this.initialized = !0
                var t = this.getService('ConfigService')
                t.init()
                var e = this.getService(['LoggingService', 'ApmServer']),
                  n = e[0],
                  r = e[1]
                t.events.observe('config:change', function () {
                  var e = t.get('logLevel')
                  n.setLevel(e)
                }),
                  r.init()
              }
            }),
            (e.getService = function (t) {
              var e = this
              return 'string' == typeof t
                ? (this.instances[t] || ('function' == typeof Kt[t] && (this.instances[t] = Kt[t](this))),
                  this.instances[t])
                : Array.isArray(t)
                ? t.map(function (t) {
                    return e.getService(t)
                  })
                : void 0
            }),
            t
          )
        })()
      var ee = (function () {
          function t(t, e, n, r) {
            ;(this._apmServer = t), (this._configService = e), (this._logginService = n), (this._transactionService = r)
          }
          var e = t.prototype
          return (
            (e.init = function (t) {
              var e = this
              void 0 === t && (t = {}),
                this._configService.events.observe('transaction:end:after', function (t) {
                  var n = e.createTransactionPayload(t)
                  n && (e._apmServer.addTransaction(n), e._configService.dispatchEvent('queue:add_transaction'))
                }),
                t.history && st.observe('history', this.getHistorySub()),
                t.xmlhttprequest && st.observe('xmlhttprequest', this.getXHRSub()),
                t.fetch && st.observe('fetch', this.getFetchSub())
            }),
            (e.getHistorySub = function () {
              var t = this._transactionService
              return function (e, n) {
                'history' === n.source &&
                  e === Q &&
                  t.startTransaction(n.data.title, 'route-change', { managed: !0, canReuse: !0 })
              }
            }),
            (e.getXHRSub = function () {
              var t = this
              return function (e, n) {
                'xmlhttprequest' !== n.source || V.fetchInProgress || t.processAPICalls(e, n)
              }
            }),
            (e.getFetchSub = function () {
              var t = this
              return function (e, n) {
                'fetch' === n.source && t.processAPICalls(e, n)
              }
            }),
            (e.processAPICalls = function (t, e) {
              var n = this._configService,
                r = this._transactionService
              if (e.data && e.data.url) {
                var i = this._apmServer.getEndpoints()
                if (
                  Object.keys(i).some(function (t) {
                    return -1 !== e.data.url.indexOf(i[t])
                  })
                )
                  return
              }
              if ('schedule' === t && e.data) {
                var a = e.data,
                  o = new gt(a.url),
                  s = a.method + ' ' + (o.relative ? o.path : k(o.href))
                r.getCurrentTransaction() || r.startTransaction(s, 'http-request', { managed: !0 })
                var c = r.startSpan(s, 'external.http', { blocking: !0 })
                if (!c) return
                var u = n.get('distributedTracing'),
                  f = n.get('distributedTracingOrigins'),
                  d = new gt(window.location.href),
                  l = T(o.origin, d.origin) || T(o.origin, f),
                  p = a.target
                if (u && l && p) this.injectDtHeader(c, p), n.get('propagateTracestate') && this.injectTSHeader(c, p)
                else 0
                a.sync && (c.sync = a.sync), (a.span = c)
              } else if (t === Q) {
                var v = e.data
                if (v && v.span) {
                  var h,
                    g,
                    m = v.span,
                    y = v.response,
                    S = v.target
                  ;(h = y ? y.status : S.status),
                    (g = 'abort' == v.status || v.aborted ? 'unknown' : h >= 400 || 0 == h ? 'failure' : 'success'),
                    (m.outcome = g)
                  var _ = r.getCurrentTransaction()
                  _ && 'http-request' === _.type && (_.outcome = g), r.endSpan(m, v)
                }
              }
            }),
            (e.injectDtHeader = function (t, e) {
              var n,
                r = this._configService.get('distributedTracingHeaderName'),
                i = (function (t) {
                  if (t && t.traceId && t.id && t.parentId) {
                    var e = t.sampled ? '01' : '00',
                      n = t.sampled ? t.id : t.parentId
                    return '00-' + t.traceId + '-' + n + '-' + e
                  }
                })(t)
              ;/^[\da-f]{2}-[\da-f]{32}-[\da-f]{16}-[\da-f]{2}$/.test((n = i)) &&
                '00000000000000000000000000000000' !== n.slice(3, 35) &&
                '0000000000000000' !== n.slice(36, 52) &&
                i &&
                r &&
                w(e, r, i)
            }),
            (e.injectTSHeader = function (t, e) {
              var n = (function (t) {
                var e = t.sampleRate
                if (!('number' != typeof e || String(e).length > 256)) {
                  return 'es=s:' + e
                }
              })(t)
              n && w(e, 'tracestate', n)
            }),
            (e.extractDtHeader = function (t) {
              var e = this._configService.get('distributedTracingHeaderName')
              if (t)
                return (function (t) {
                  var e = /^([\da-f]{2})-([\da-f]{32})-([\da-f]{16})-([\da-f]{2})$/.exec(t)
                  if (e) {
                    var n = '00' !== e[4]
                    return { traceId: e[2], id: e[3], sampled: n }
                  }
                })(t[e])
            }),
            (e.filterTransaction = function (t) {
              var e = t.duration()
              if (!e) return !1
              if (t.isManaged()) {
                if (e > 6e4) return !1
                if (t.sampled && 0 === t.spans.length) return !1
              }
              return !0
            }),
            (e.createTransactionDataModel = function (t) {
              var e = t._start,
                n = t.spans.map(function (n) {
                  var r = {
                    id: n.id,
                    transaction_id: t.id,
                    parent_id: n.parentId || t.id,
                    trace_id: t.traceId,
                    name: n.name,
                    type: n.type,
                    subtype: n.subtype,
                    action: n.action,
                    sync: n.sync,
                    start: parseInt(n._start - e),
                    duration: n.duration(),
                    context: n.context,
                    outcome: n.outcome,
                    sample_rate: n.sampleRate,
                  }
                  return Nt(kt, r)
                }),
                r = {
                  id: t.id,
                  trace_id: t.traceId,
                  session: t.session,
                  name: t.name,
                  type: t.type,
                  duration: t.duration(),
                  spans: n,
                  context: t.context,
                  marks: t.marks,
                  breakdown: t.breakdownTimings,
                  span_count: { started: n.length },
                  sampled: t.sampled,
                  sample_rate: t.sampleRate,
                  experience: t.experience,
                  outcome: t.outcome,
                }
              return Nt(It, r)
            }),
            (e.createTransactionPayload = function (t) {
              var e = (function (t) {
                if (t.sampled) {
                  var e = t.spans.filter(function (e) {
                    return e.duration() > 0 && e._start >= t._start && e._end <= t._end
                  })
                  if (t.isManaged()) {
                    var n = (function (t, e, n) {
                      t.sort(function (t, e) {
                        return t._start - e._start
                      })
                      var r = [],
                        i = 1
                      return (
                        t.forEach(function (a, o) {
                          if (0 === r.length) r.push(a)
                          else {
                            var s = r[r.length - 1],
                              c =
                                s.type === a.type &&
                                s.subtype === a.subtype &&
                                s.action === a.action &&
                                s.name === a.name &&
                                a.duration() / e < n &&
                                (a._start - s._end) / e < n,
                              u = t.length === o + 1
                            c && (i++, (s._end = a._end)),
                              i > 1 && (!c || u) && ((s.name = i + 'x ' + s.name), (i = 1)),
                              c || r.push(a)
                          }
                        }),
                        r
                      )
                    })(e, t.duration(), 0.05)
                    t.spans = n
                  } else t.spans = e
                } else t.resetFields()
                return t
              })(t)
              if (this.filterTransaction(e)) return this.createTransactionDataModel(t)
              this._configService.dispatchEvent('transaction:ignore')
            }),
            t
          )
        })(),
        ne = (function () {
          function t(t, e, n) {
            void 0 === n && (n = {}),
              t || (t = 'Unknown'),
              e || (e = 'custom'),
              (this.name = t),
              (this.type = e),
              (this.options = n),
              (this.id = n.id || b(16)),
              (this.traceId = n.traceId),
              (this.sampled = n.sampled),
              (this.sampleRate = n.sampleRate),
              (this.timestamp = n.timestamp),
              (this._start = P(n.startTime)),
              (this._end = void 0),
              (this.ended = !1),
              (this.outcome = void 0),
              (this.onEnd = n.onEnd)
          }
          var e = t.prototype
          return (
            (e.ensureContext = function () {
              this.context || (this.context = {})
            }),
            (e.addLabels = function (t) {
              this.ensureContext()
              var e = this.context
              e.tags || (e.tags = {}),
                Object.keys(t).forEach(function (n) {
                  return x(n, t[n], e.tags)
                })
            }),
            (e.addContext = function () {
              for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n]
              0 !== e.length && (this.ensureContext(), N.apply(void 0, [this.context].concat(e)))
            }),
            (e.end = function (t) {
              this.ended || ((this.ended = !0), (this._end = P(t)), this.callOnEnd())
            }),
            (e.callOnEnd = function () {
              'function' == typeof this.onEnd && this.onEnd(this)
            }),
            (e.duration = function () {
              return M(this._start, this._end)
            }),
            t
          )
        })()
      function re(t, e) {
        return (re =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t
          })(t, e)
      }
      var ie = (function (t) {
          var e, n
          function r(e, n, r) {
            var i
            if (
              (((i = t.call(this, e, n, r) || this).parentId = i.options.parentId),
              (i.subtype = void 0),
              (i.action = void 0),
              -1 !== i.type.indexOf('.'))
            ) {
              var a = i.type.split('.', 3)
              ;(i.type = a[0]), (i.subtype = a[1]), (i.action = a[2])
            }
            return (i.sync = i.options.sync), i
          }
          return (
            (n = t),
            ((e = r).prototype = Object.create(n.prototype)),
            (e.prototype.constructor = e),
            re(e, n),
            (r.prototype.end = function (e, n) {
              t.prototype.end.call(this, e), bt(this, n)
            }),
            r
          )
        })(ne),
        ae = [
          ['domainLookupStart', 'domainLookupEnd', 'DNS'],
          ['connectStart', 'connectEnd', 'TCP'],
          ['requestStart', 'responseStart', 'Request'],
          ['responseStart', 'responseEnd', 'Response'],
          ['domLoading', 'domComplete', 'Processing'],
          ['loadEventStart', 'loadEventEnd', 'Load'],
        ]
      function oe(t) {
        return { value: t }
      }
      function se(t, e) {
        var n = e.details,
          r = e.count,
          i = void 0 === r ? 1 : r,
          a = e.duration
        return {
          transaction: t,
          span: n,
          samples: { 'span.self_time.count': oe(i), 'span.self_time.sum.us': oe(1e3 * a) },
        }
      }
      function ce(t, e) {
        return (ce =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t
          })(t, e)
      }
      var ue = (function (t) {
        var e, n
        function r(e, n, r) {
          var i
          return (
            ((i = t.call(this, e, n, r) || this).traceId = b()),
            (i.marks = void 0),
            (i.spans = []),
            (i._activeSpans = {}),
            (i._activeTasks = new Set()),
            (i.blocked = !1),
            (i.captureTimings = !1),
            (i.breakdownTimings = []),
            (i.sampleRate = i.options.transactionSampleRate),
            (i.sampled = Math.random() <= i.sampleRate),
            i
          )
        }
        ;(n = t), ((e = r).prototype = Object.create(n.prototype)), (e.prototype.constructor = e), ce(e, n)
        var i = r.prototype
        return (
          (i.addMarks = function (t) {
            this.marks = N(this.marks || {}, t)
          }),
          (i.mark = function (t) {
            var e = q(t),
              n = A() - this._start,
              r = {}
            ;(r[e] = n), this.addMarks({ custom: r })
          }),
          (i.canReuse = function () {
            var t = this.options.reuseThreshold || 5e3
            return !!this.options.canReuse && !this.ended && A() - this._start < t
          }),
          (i.redefine = function (t, e, n) {
            t && (this.name = t),
              e && (this.type = e),
              n && ((this.options.reuseThreshold = n.reuseThreshold), O(this.options, n))
          }),
          (i.startSpan = function (t, e, n) {
            var r = this
            if (!this.ended) {
              var i = O({}, n)
              ;(i.onEnd = function (t) {
                r._onSpanEnd(t)
              }),
                (i.traceId = this.traceId),
                (i.sampled = this.sampled),
                (i.sampleRate = this.sampleRate),
                i.parentId || (i.parentId = this.id)
              var a = new ie(t, e, i)
              return (this._activeSpans[a.id] = a), i.blocking && this.addTask(a.id), a
            }
          }),
          (i.isFinished = function () {
            return !this.blocked && 0 === this._activeTasks.size
          }),
          (i.detectFinish = function () {
            this.isFinished() && this.end()
          }),
          (i.end = function (t) {
            if (!this.ended) {
              for (var e in ((this.ended = !0), (this._end = P(t)), this._activeSpans)) {
                var n = this._activeSpans[e]
                ;(n.type = n.type + '.truncated'), n.end(t)
              }
              this.callOnEnd()
            }
          }),
          (i.captureBreakdown = function () {
            this.breakdownTimings = (function (t, e) {
              void 0 === e && (e = m.timing)
              var n = [],
                r = t.name,
                i = t.type,
                a = t.sampled,
                o = { name: r, type: i }
              if (!a) return n
              if (i === K && e)
                for (var s = 0; s < ae.length; s++) {
                  var c = ae[s],
                    u = M(e[c[0]], e[c[1]])
                  0 !== u && null != u && n.push(se(o, { details: { type: c[2] }, duration: u }))
                }
              else {
                var f = (function (t) {
                  var e = {},
                    n = (function (t) {
                      var e = t.spans,
                        n = t._start,
                        r = t._end
                      if (0 === e.length) return t.duration()
                      e.sort(function (t, e) {
                        return t._start - e._start
                      })
                      for (var i = e[0], a = i._end, o = i._start, s = a, c = o - n, u = 1; u < e.length; u++)
                        (o = (i = e[u])._start), (a = i._end), o > s ? ((c += o - s), (s = a)) : a > s && (s = a)
                      return s < r && (c += r - s), c
                    })(t)
                  e.app = { count: 1, duration: n }
                  for (var r = t.spans, i = 0; i < r.length; i++) {
                    var a = r[i],
                      o = a.duration()
                    if (0 !== o && null != o) {
                      var s = a.type,
                        c = a.subtype,
                        u = s.replace('.truncated', '')
                      c && (u += '.' + c),
                        e[u] || (e[u] = { duration: 0, count: 0 }),
                        e[u].count++,
                        (e[u].duration += o)
                    }
                  }
                  return e
                })(t)
                Object.keys(f).forEach(function (t) {
                  var e = t.split('.'),
                    r = e[0],
                    i = e[1],
                    a = f[t],
                    s = a.duration,
                    c = a.count
                  n.push(se(o, { details: { type: r, subtype: i }, duration: s, count: c }))
                })
              }
              return n
            })(this)
          }),
          (i.block = function (t) {
            ;(this.blocked = t), this.blocked || this.detectFinish()
          }),
          (i.addTask = function (t) {
            return t || (t = 'task-' + b(16)), this._activeTasks.add(t), t
          }),
          (i.removeTask = function (t) {
            this._activeTasks.delete(t) && this.detectFinish()
          }),
          (i.resetFields = function () {
            ;(this.spans = []), (this.sampleRate = 0)
          }),
          (i._onSpanEnd = function (t) {
            this.spans.push(t), delete this._activeSpans[t.id], this.removeTask(t.id)
          }),
          (i.isManaged = function () {
            return !!this.options.managed
          }),
          r
        )
      })(ne)
      function fe() {
        return (fe =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
          }).apply(this, arguments)
      }
      var de = {
        fid: 0,
        fcp: 0,
        tbt: { start: 1 / 0, duration: 0 },
        cls: {
          score: 0,
          firstEntryTime: Number.NEGATIVE_INFINITY,
          prevEntryTime: Number.NEGATIVE_INFINITY,
          currentSessionScore: 0,
        },
        longtask: { count: 0, duration: 0, max: 0 },
      }
      function le(t, e) {
        var n = e.isHardNavigation,
          r = e.trStart,
          i = t.getEntriesByType('longtask').filter(function (t) {
            return t.startTime >= r
          }),
          a = {
            spans: (function (t, e) {
              for (var n = [], r = 0; r < t.length; r++) {
                var i = t[r],
                  a = i.name,
                  o = i.startTime,
                  s = i.duration,
                  c = i.attribution,
                  u = o + s,
                  f = new ie('Longtask(' + a + ')', 'longtask', { startTime: o })
                if ((e.count++, (e.duration += s), (e.max = Math.max(s, e.max)), c.length > 0)) {
                  var d = c[0],
                    l = d.name,
                    p = d.containerType,
                    v = d.containerName,
                    h = d.containerId,
                    g = { attribution: l, type: p }
                  v && (g.name = v), h && (g.id = h), f.addContext({ custom: g })
                }
                f.end(u), n.push(f)
              }
              return n
            })(i, de.longtask),
            marks: {},
          }
        if (!n) return a
        var o = t.getEntriesByType('largest-contentful-paint'),
          s = o[o.length - 1]
        if (s) {
          var c = parseInt(s.startTime)
          ;(de.lcp = c), (a.marks.largestContentfulPaint = c)
        }
        var u = m.timing,
          f = u.fetchStart - u.navigationStart
        B(u) && (f = 0)
        var d = t.getEntriesByName('first-contentful-paint')[0]
        if (d) {
          var l = parseInt(f >= 0 ? d.startTime - f : d.startTime)
          ;(de.fcp = l), (a.marks.firstContentfulPaint = l)
        }
        var p = (function (t) {
          var e = t[0]
          if (e) {
            var n = e.startTime,
              r = e.processingStart,
              i = new ie('First Input Delay', 'first-input', { startTime: n })
            return i.end(r), i
          }
        })(t.getEntriesByType('first-input'))
        return (
          p && ((de.fid = p.duration()), a.spans.push(p)),
          (function (t) {
            t.forEach(function (t) {
              var e = t.name,
                n = t.startTime,
                r = t.duration
              if (!(n < de.fcp || ('self' !== e && -1 === e.indexOf('same-origin')))) {
                de.tbt.start = Math.min(de.tbt.start, n)
                var i = r - 50
                i > 0 && (de.tbt.duration += i)
              }
            })
          })(i),
          (function (t) {
            t.forEach(function (t) {
              !t.hadRecentInput &&
                t.value &&
                ((t.startTime - de.cls.firstEntryTime > 5e3 || t.startTime - de.cls.prevEntryTime > 1e3) &&
                  ((de.cls.firstEntryTime = t.startTime), (de.cls.currentSessionScore = 0)),
                (de.cls.prevEntryTime = t.startTime),
                (de.cls.currentSessionScore += t.value),
                (de.cls.score = Math.max(de.cls.score, de.cls.currentSessionScore)))
            })
          })(t.getEntriesByType('layout-shift')),
          a
        )
      }
      var pe = (function () {
        function t(t) {
          ;(this.po = { observe: R, disconnect: R }),
            window.PerformanceObserver && (this.po = new PerformanceObserver(t))
        }
        var e = t.prototype
        return (
          (e.start = function (t, e) {
            void 0 === e && (e = { buffered: !0 })
            try {
              if (!z(t)) return
              this.po.observe(fe({ type: t }, e))
            } catch (t) {}
          }),
          (e.stop = function () {
            this.po.disconnect()
          }),
          t
        )
      })()
      function ve(t, e, n, r, i) {
        return (
          void 0 === i && (i = 0),
          'number' == typeof t &&
            'number' == typeof e &&
            t >= i &&
            e > t &&
            t - i >= n &&
            e - i <= r &&
            e - t < 3e5 &&
            t - i < 3e5 &&
            e - i < 3e5
        )
      }
      var he = [
        ['redirectStart', 'redirectEnd', 'Redirect'],
        ['domainLookupStart', 'domainLookupEnd', 'Domain lookup'],
        ['connectStart', 'connectEnd', 'Making a connection to the server'],
        ['requestStart', 'responseEnd', 'Requesting and receiving the document'],
        ['domLoading', 'domInteractive', 'Parsing the document, executing sync. scripts'],
        ['domContentLoadedEventStart', 'domContentLoadedEventEnd', 'Fire "DOMContentLoaded" event'],
        ['loadEventStart', 'loadEventEnd', 'Fire "load" event'],
      ]
      function ge(t) {
        var e = t.name,
          n = t.initiatorType,
          r = t.startTime,
          i = t.responseEnd,
          a = 'resource'
        n && (a += '.' + n)
        var o = k(e),
          s = new ie(o, a)
        return (s._start = r), s.end(i, { url: e, entry: t }), s
      }
      function me(t, e) {
        return null != e && t > e
      }
      function ye(t) {
        if (t.captureTimings) {
          var e = t._end
          if (t.type === K) {
            if (t.marks && t.marks.custom) {
              var n = t.marks.custom
              Object.keys(n).forEach(function (e) {
                n[e] += t._start
              })
            }
            t._start = 0
            var r = m.timing
            ;(function (t, e, n, r) {
              for (var i = [], a = 0; a < he.length; a++) {
                var o = t[he[a][0]],
                  s = t[he[a][1]]
                if (ve(o, s, n, r, e)) {
                  var c = new ie(he[a][2], 'hard-navigation.browser-timing'),
                    u = null
                  'requestStart' === he[a][0] && ((c.pageResponse = !0), (u = { url: location.origin })),
                    (c._start = o - e),
                    c.end(s - e, u),
                    i.push(c)
                }
              }
              return i
            })(r, B(r) ? r.redirectStart : r.fetchStart, 0, e).forEach(function (e) {
              ;(e.traceId = t.traceId),
                (e.sampled = t.sampled),
                e.pageResponse && t.options.pageLoadSpanId && (e.id = t.options.pageLoadSpanId),
                t.spans.push(e)
            }),
              t.addMarks(zt(r))
          }
          if (U()) {
            var i = t._start
            ;(function (t, e, n, r) {
              for (var i = [], a = 0; a < t.length; a++) {
                var o = t[a],
                  s = o.initiatorType,
                  c = o.name,
                  u = o.startTime,
                  f = o.responseEnd
                ;-1 !== W.indexOf(s) &&
                  null != c &&
                  ((('xmlhttprequest' === s || 'fetch' === s) && (/intake\/v\d+\/rum\/events/.test(c) || me(u, e))) ||
                    (ve(u, f, n, r) && i.push(ge(t[a]))))
              }
              return i
            })(m.getEntriesByType('resource'), ft.bootstrapTime, i, e).forEach(function (e) {
              return t.spans.push(e)
            }),
              (function (t, e, n) {
                for (var r = [], i = 0; i < t.length; i++) {
                  var a = t[i],
                    o = a.name,
                    s = a.startTime,
                    c = a.duration,
                    u = s + c
                  if (!(c <= 60) && ve(s, u, e, n)) {
                    var f = new ie(o, 'app')
                    ;(f._start = s), f.end(u), r.push(f)
                  }
                }
                return r
              })(m.getEntriesByType('measure'), i, e).forEach(function (e) {
                return t.spans.push(e)
              })
          }
        } else t.type === K && (t._start = 0)
      }
      var Se = (function () {
        function t(t, e) {
          var n = this
          ;(this._config = e),
            (this._logger = t),
            (this.currentTransaction = void 0),
            (this.respIntervalId = void 0),
            (this.recorder = new pe(function (t) {
              var e = n.getCurrentTransaction()
              if (e && e.captureTimings) {
                var r,
                  i = e.type === K,
                  a = le(t, { isHardNavigation: i, trStart: i ? 0 : e._start }),
                  o = a.spans,
                  s = a.marks
                ;(r = e.spans).push.apply(r, o), e.addMarks({ agent: s })
              }
            }))
        }
        var e = t.prototype
        return (
          (e.createCurrentTransaction = function (t, e, n) {
            var r = new ue(t, e, n)
            return (this.currentTransaction = r), r
          }),
          (e.getCurrentTransaction = function () {
            if (this.currentTransaction && !this.currentTransaction.ended) return this.currentTransaction
          }),
          (e.createOptions = function (t) {
            var e = this._config.config,
              n = O({ transactionSampleRate: e.transactionSampleRate }, t)
            return (
              n.managed &&
                (n = O(
                  {
                    pageLoadTraceId: e.pageLoadTraceId,
                    pageLoadSampled: e.pageLoadSampled,
                    pageLoadSpanId: e.pageLoadSpanId,
                    pageLoadTransactionName: e.pageLoadTransactionName,
                  },
                  n,
                )),
              n
            )
          }),
          (e.startManagedTransaction = function (t, e, n) {
            var r = this.getCurrentTransaction(),
              i = !1
            if (r)
              if (r.canReuse() && n.canReuse) {
                var a = r.type,
                  o = tt.indexOf(r.type),
                  s = tt.indexOf(e)
                o >= 0 && s < o && (a = e), r.redefine(t, a, n), (i = !0)
              } else r.end(), (r = this.createCurrentTransaction(t, e, n))
            else r = this.createCurrentTransaction(t, e, n)
            return (
              r.type === K &&
                (i ||
                  (this.recorder.start('largest-contentful-paint'),
                  this.recorder.start('paint'),
                  this.recorder.start('first-input'),
                  this.recorder.start('layout-shift')),
                n.pageLoadTraceId && (r.traceId = n.pageLoadTraceId),
                n.pageLoadSampled && (r.sampled = n.pageLoadSampled),
                'Unknown' === r.name && n.pageLoadTransactionName && (r.name = n.pageLoadTransactionName)),
              !i && this._config.get('monitorLongtasks') && this.recorder.start('longtask'),
              r.sampled && (r.captureTimings = !0),
              r
            )
          }),
          (e.startTransaction = function (t, e, n) {
            var r,
              i = this,
              a = this.createOptions(n),
              o = !0
            a.managed
              ? this.currentTransaction === (r = this.startManagedTransaction(t, e, a)) && (o = !1)
              : (r = new ue(t, e, a))
            return (
              (r.onEnd = function () {
                return i.handleTransactionEnd(r)
              }),
              o && this._config.events.send('transaction:start', [r]),
              r
            )
          }),
          (e.handleTransactionEnd = function (t) {
            var e = this
            this.recorder.stop()
            var n = window.location.href
            return v.resolve().then(
              function () {
                var r = t.name,
                  i = t.type
                if (ft.lastHiddenStart >= t._start) e._config.dispatchEvent('transaction:ignore')
                else if (e.shouldIgnoreTransaction(r) || 'temporary' === i)
                  e._config.dispatchEvent('transaction:ignore')
                else {
                  if (i === K) {
                    var a = e._config.get('pageLoadTransactionName')
                    if (('Unknown' === r && a && (t.name = a), t.captureTimings)) {
                      var o = de.cls,
                        s = de.fid,
                        c = de.tbt,
                        u = de.longtask
                      c.duration > 0 &&
                        t.spans.push(
                          ((d = (f = c).start),
                          (l = f.duration),
                          (p = new ie('Total Blocking Time', 'longtask', { startTime: d })).end(d + l),
                          p),
                        ),
                        (t.experience = {}),
                        z('longtask') && (t.experience.tbt = c.duration),
                        z('layout-shift') && (t.experience.cls = o.score),
                        s > 0 && (t.experience.fid = s),
                        u.count > 0 && (t.experience.longtask = { count: u.count, sum: u.duration, max: u.max })
                    }
                    e.setSession(t)
                  }
                  var f, d, l, p
                  'Unknown' === t.name &&
                    (t.name = (function (t, e) {
                      void 0 === e && (e = 2)
                      for (
                        var n = new gt(t),
                          r = n.query,
                          i = n.path.substring(1).split('/'),
                          a = /\W|_/g,
                          o = /[0-9]/g,
                          s = /[a-z]/g,
                          c = /[A-Z]/g,
                          u = [],
                          f = !1,
                          d = 0;
                        d < i.length;
                        d++
                      ) {
                        var l = i[d]
                        if (f || d > e - 1) {
                          l && u.push('*')
                          break
                        }
                        if ((l.match(a) || []).length >= 2) u.push(':id'), (f = !0)
                        else {
                          var p = (l.match(o) || []).length
                          if (p > 3 || (l.length > 3 && p / l.length >= 0.3)) u.push(':id'), (f = !0)
                          else {
                            var v = (l.match(c) || []).length,
                              h = (l.match(s) || []).length / l.length,
                              g = v / l.length
                            l.length > 5 && ((g > 0.3 && g < 0.6) || (h > 0.3 && h < 0.6))
                              ? (u.push(':id'), (f = !0))
                              : l && u.push(l)
                          }
                        }
                      }
                      return '/' + (u.length >= 2 ? u.join('/') : u.join('')) + (r ? '?{query}' : '')
                    })(n)),
                    ye(t),
                    e.adjustTransactionTime(t),
                    e._config.get('breakdownMetrics') && t.captureBreakdown()
                  var v = e._config.get('context')
                  wt(t, v), e._config.events.send('transaction:end', [t])
                }
              },
              function (t) {
                0
              },
            )
          }),
          (e.setSession = function (t) {
            var e = this._config.get('session')
            if (e) {
              'boolean' == typeof e || (e.timestamp && Date.now() - e.timestamp > 18e5)
                ? (t.session = { id: b(16), sequence: 1 })
                : (t.session = { id: e.id, sequence: e.sequence ? e.sequence + 1 : 1 })
              var n = { session: { id: t.session.id, sequence: t.session.sequence, timestamp: Date.now() } }
              this._config.setConfig(n), this._config.setLocalConfig(n, !0)
            }
          }),
          (e.adjustTransactionTime = function (t) {
            var e = t.spans,
              n = (function (t) {
                for (var e = t[0], n = 1; n < t.length; n++) {
                  var r = t[n]
                  e._start > r._start && (e = r)
                }
                return e
              })(e)
            n && n._start < t._start && (t._start = n._start)
            var r =
              (
                (function (t) {
                  return F(t, function (t) {
                    return -1 === String(t).indexOf('external')
                  })
                })(e) || {}
              )._end || 0
            if (t.type === K) {
              var i = t._end - 1e3,
                a = de.lcp || 0,
                o =
                  (
                    (function (t) {
                      return F(t, function (t) {
                        return -1 !== String(t).indexOf('external')
                      })
                    })(e) || {}
                  )._end || 0
              t._end = Math.max(r, o, a, i)
            } else r > t._end && (t._end = r)
            this.truncateSpans(e, t._end)
          }),
          (e.truncateSpans = function (t, e) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              r._end > e && ((r._end = e), (r.type += '.truncated')), r._start > e && (r._start = e)
            }
          }),
          (e.shouldIgnoreTransaction = function (t) {
            var e = this._config.get('ignoreTransactions')
            if (e && e.length)
              for (var n = 0; n < e.length; n++) {
                var r = e[n]
                if ('function' == typeof r.test) {
                  if (r.test(t)) return !0
                } else if (r === t) return !0
              }
            return !1
          }),
          (e.startSpan = function (t, e, n) {
            var r = this.getCurrentTransaction()
            r ||
              (r = this.createCurrentTransaction(
                void 0,
                'temporary',
                this.createOptions({ canReuse: !0, managed: !0 }),
              ))
            var i = r.startSpan(t, e, n)
            return i
          }),
          (e.endSpan = function (t, e) {
            t && t.end(null, e)
          }),
          t
        )
      })()
      function _e() {
        return (
          (Kt.TransactionService = function (t) {
            var e = t.getService(['LoggingService', 'ConfigService']),
              n = e[0],
              r = e[1]
            return new Se(n, r)
          }),
          (Kt.PerformanceMonitoring = function (t) {
            var e = t.getService(['ApmServer', 'ConfigService', 'LoggingService', 'TransactionService']),
              n = e[0],
              r = e[1],
              i = e[2],
              a = e[3]
            return new ee(n, r, i, a)
          }),
          (Kt.ErrorLogging = function (t) {
            var e = t.getService(['ApmServer', 'ConfigService', 'TransactionService']),
              n = e[0],
              r = e[1],
              i = e[2]
            return new At(n, r, i)
          }),
          new te()
        )
      }
      var be = { minInteractionId: 1 / 0, maxInteractionId: 0, interactionCount: 0, longestInteractions: [] }
      function we(t) {
        t.getEntries().forEach(function (t) {
          t.interactionId &&
            ((function (t) {
              if (D()) return
              ;(be.minInteractionId = Math.min(be.minInteractionId, t.interactionId)),
                (be.maxInteractionId = Math.max(be.maxInteractionId, t.interactionId)),
                (be.interactionCount = (be.maxInteractionId - be.minInteractionId) / 7 + 1)
            })(t),
            t.duration < 40 ||
              (function (t) {
                var e = be.longestInteractions[be.longestInteractions.length - 1]
                if (void 0 !== e && t.duration <= e.duration && t.interactionId != e.id) return
                var n = be.longestInteractions.filter(function (e) {
                  return e.id === t.interactionId
                })
                if (n.length > 0) {
                  var r = n[0]
                  r.duration = Math.max(r.duration, t.duration)
                } else be.longestInteractions.push({ id: t.interactionId, duration: t.duration })
                be.longestInteractions.sort(function (t, e) {
                  return e.duration - t.duration
                }),
                  be.longestInteractions.splice(10)
              })(t))
        })
      }
      function Te() {
        return performance.interactionCount || be.interactionCount
      }
      function Ee(t) {
        var e = (function () {
          if (0 === be.longestInteractions.length) return Te() > 0 ? 0 : void 0
          var t = Math.min(be.longestInteractions.length - 1, Math.floor(Te() / 50))
          return be.longestInteractions[t].duration
        })()
        if (e >= 0) {
          var n = A(),
            r = t.startTransaction('page-exit', 'page-exit', { startTime: n }),
            i = performance.getEntriesByType('navigation')
          if (i.length > 0) {
            var a = i[0].name
            r.addContext({ page: { url: a } })
          }
          r.addLabels({ inp_value: e })
          var o = n + e + 1
          return (
            r.end(o),
            (be.minInteractionId = 1 / 0),
            (be.maxInteractionId = 0),
            (be.interactionCount = 0),
            (be.longestInteractions = []),
            r
          )
        }
      }
      function xe(t, e) {
        if (Ee(e))
          var n = t.observeEvent('queue:add_transaction', function () {
            ke(t, e), n()
          })
        else ke(t, e)
      }
      function ke(t, e) {
        var n = e.getCurrentTransaction()
        if (n) {
          var r = t.observeEvent('transaction:ignore', function () {
              ;(ft.lastHiddenStart = A()), r(), i()
            }),
            i = t.observeEvent('queue:add_transaction', function () {
              t.dispatchEvent('queue:flush'), (ft.lastHiddenStart = A()), i(), r()
            })
          n.end()
        } else t.dispatchEvent('queue:flush'), (ft.lastHiddenStart = A())
      }
      function Ie(t) {
        var e = function (e) {
          e.target instanceof Element &&
            (function (t, e) {
              var n = (function (t) {
                  var e = { transactionName: null, context: null }
                  e.transactionName = (function (t) {
                    var e = (function (t) {
                      if (t.closest) {
                        var e = t.closest('a[data-transaction-name], button[data-transaction-name]')
                        return e ? e.dataset.transactionName : null
                      }
                      return t.dataset.transactionName
                    })(t)
                    if (e) return e
                    var n = t.tagName.toLowerCase(),
                      r = t.getAttribute('name')
                    if (r) return n + '["' + r + '"]'
                    return n
                  })(t)
                  var n = t.getAttribute('class')
                  n && (e.context = { custom: { classes: n } })
                  return e
                })(e),
                r = n.transactionName,
                i = n.context,
                a = t.startTransaction('Click - ' + r, 'user-interaction', {
                  managed: !0,
                  canReuse: !0,
                  reuseThreshold: 300,
                })
              a && i && a.addContext(i)
            })(t, e.target)
        }
        return (
          window.addEventListener('click', e, !0),
          function () {
            window.removeEventListener('click', e, !0)
          }
        )
      }
      var Ce = (function () {
        function t(t, e) {
          ;(this._disable = e), (this.serviceFactory = t), (this._initialized = !1)
        }
        var e = t.prototype
        return (
          (e.isEnabled = function () {
            return !this._disable
          }),
          (e.isActive = function () {
            var t = this.serviceFactory.getService('ConfigService')
            return this.isEnabled() && this._initialized && t.get('active')
          }),
          (e.init = function (t) {
            var e = this
            if (this.isEnabled() && !this._initialized) {
              this._initialized = !0
              var n = this.serviceFactory.getService(['ConfigService', 'LoggingService', 'TransactionService']),
                r = n[0],
                i = n[1],
                a = n[2]
              r.setVersion('5.16.0'), this.config(t)
              var o = r.get('logLevel')
              if ((i.setLevel(o), r.get('active'))) {
                this.serviceFactory.init()
                var s = (function (t, e) {
                  var n,
                    r =
                      (((n = {}).xmlhttprequest = !1),
                      (n.fetch = !1),
                      (n.history = !1),
                      (n[K] = !1),
                      (n.error = !1),
                      (n.eventtarget = !1),
                      (n.click = !1),
                      n)
                  return t
                    ? (Object.keys(r).forEach(function (t) {
                        ;-1 === e.indexOf(t) && (r[t] = !0)
                      }),
                      r)
                    : r
                })(r.get('instrument'), r.get('disableInstrumentations'))
                if ((this.serviceFactory.getService('PerformanceMonitoring').init(s), s.error))
                  this.serviceFactory.getService('ErrorLogging').registerListeners()
                if (r.get('session')) {
                  var c = r.getLocalConfig()
                  c && c.session && r.setConfig({ session: c.session })
                }
                var u = function () {
                  return s[K] && e._sendPageLoadMetrics()
                }
                r.get('centralConfig') ? this.fetchCentralConfig().then(u) : u(),
                  (function (t, e) {
                    'hidden' === document.visibilityState && (ft.lastHiddenStart = 0)
                    var n = function () {
                        'hidden' === document.visibilityState && xe(t, e)
                      },
                      r = function () {
                        return xe(t, e)
                      }
                    window.addEventListener('visibilitychange', n, !0), window.addEventListener('pagehide', r, !0)
                  })(r, a),
                  s.eventtarget && s.click && Ie(a),
                  (function (t) {
                    void 0 === t && (t = new pe(we))
                    var e = D(),
                      n = e ? 40 : 16
                    t.start('event', { buffered: !0, durationThreshold: n }), e || t.start('first-input')
                  })()
              } else (this._disable = !0), i.warn('RUM agent is inactive')
            }
            return this
          }),
          (e.fetchCentralConfig = function () {
            var t = this.serviceFactory.getService(['ApmServer', 'LoggingService', 'ConfigService']),
              e = t[0],
              n = t[1],
              r = t[2]
            return e
              .fetchConfig(r.get('serviceName'), r.get('environment'))
              .then(function (t) {
                var e = t.transaction_sample_rate
                if (e) {
                  var i = { transactionSampleRate: (e = Number(e)) },
                    a = r.validate(i).invalid
                  if (0 === a.length) r.setConfig(i)
                  else {
                    var o = a[0],
                      s = o.key,
                      c = o.value,
                      u = o.allowed
                    n.warn('invalid value "' + c + '" for ' + s + '. Allowed: ' + u + '.')
                  }
                }
                return t
              })
              .catch(function (t) {
                n.warn('failed fetching config:', t)
              })
          }),
          (e._sendPageLoadMetrics = function () {
            var t = this.startTransaction(void 0, K, { managed: !0, canReuse: !0 })
            if (t) {
              t.addTask(K)
              var e = function () {
                setTimeout(function () {
                  return t.removeTask(K)
                }, 1e3)
              }
              'complete' === document.readyState ? e() : window.addEventListener('load', e)
            }
          }),
          (e.observe = function (t, e) {
            this.serviceFactory.getService('ConfigService').events.observe(t, e)
          }),
          (e.config = function (t) {
            var e = this.serviceFactory.getService(['ConfigService', 'LoggingService']),
              n = e[0],
              r = e[1],
              i = n.validate(t),
              a = i.missing,
              o = i.invalid,
              s = i.unknown
            if (s.length > 0) {
              var c = 'Unknown config options are specified for RUM agent: ' + s.join(', ')
              r.warn(c)
            }
            if (0 === a.length && 0 === o.length) n.setConfig(t)
            else {
              var u = "RUM agent isn't correctly configured. "
              a.length > 0 && ((u += a.join(', ') + ' is missing'), o.length > 0 && (u += ', ')),
                o.forEach(function (t, e) {
                  var n = t.key,
                    r = t.value,
                    i = t.allowed
                  u +=
                    n +
                    ' "' +
                    r +
                    '" contains invalid characters! (allowed: ' +
                    i +
                    ')' +
                    (e !== o.length - 1 ? ', ' : '')
                }),
                r.error(u),
                n.setConfig({ active: !1 })
            }
          }),
          (e.setUserContext = function (t) {
            this.serviceFactory.getService('ConfigService').setUserContext(t)
          }),
          (e.setCustomContext = function (t) {
            this.serviceFactory.getService('ConfigService').setCustomContext(t)
          }),
          (e.addLabels = function (t) {
            this.serviceFactory.getService('ConfigService').addLabels(t)
          }),
          (e.setInitialPageLoadName = function (t) {
            this.serviceFactory.getService('ConfigService').setConfig({ pageLoadTransactionName: t })
          }),
          (e.startTransaction = function (t, e, n) {
            if (this.isEnabled()) return this.serviceFactory.getService('TransactionService').startTransaction(t, e, n)
          }),
          (e.startSpan = function (t, e, n) {
            if (this.isEnabled()) return this.serviceFactory.getService('TransactionService').startSpan(t, e, n)
          }),
          (e.getCurrentTransaction = function () {
            if (this.isEnabled()) return this.serviceFactory.getService('TransactionService').getCurrentTransaction()
          }),
          (e.captureError = function (t) {
            if (this.isEnabled()) return this.serviceFactory.getService('ErrorLogging').logError(t)
          }),
          (e.addFilter = function (t) {
            this.serviceFactory.getService('ConfigService').addFilter(t)
          }),
          t
        )
      })()
      var Le = (function () {
        if (g && window.elasticApm) return window.elasticApm
        var t = lt(),
          e = _e(),
          n = new Ce(e, !t)
        return g && (window.elasticApm = n), n
      })()
      Le.init.bind(Le)
    })()
})()
//# sourceMappingURL=elastic-apm-rum.umd.min.js.map
