!(function(t) {
  function e(n) {
    if (r[n]) { return r[n].exports; }
    var i = (r[n] = {exports: {}, id: n, loaded: !1});
    return t[n].call(i.exports, i, i.exports, e), (i.loaded = !0), i.exports;
  }
  var r = {};
  return (e.m = t), (e.c = r), (e.p = ''), e(0);
})([
  function(t, e, r) {
    t.exports = r(1);
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      if (t && t.__esModule) { return t; }
      var e = {};
      if (t != null) {
        for (var r in t) { Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); }
      }
      return (e.default = t), e;
    }
    function i(t) {
      return t && t.__esModule ? t : {default: t};
    }
    var o = r(2),
      s = i(o),
      a = r(188),
      u = n(a),
      l = r(189),
      h = i(l),
      c = r(3),
      d = i(c),
      f = r(195),
      p = i(f),
      v = r(186),
      y = i(v),
      g = r(197),
      m = (i(g), r(198)),
      b = i(m);
    y.default.use('matter-collision-events'), (window.Pew = {
      Colliders: p.default,
      Gob: s.default,
      CONST: u,
      Pool: h.default,
      Scene: b.default,
      Vector2: d.default,
      V2: d.default,
    });
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      if (t && t.__esModule) { return t; }
      var e = {};
      if (t != null) {
        for (var r in t) { Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); }
      }
      return (e.default = t), e;
    }
    function i(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function o(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    Object.defineProperty(e, '__esModule', {value: !0});
    var s = (function() {
        function t(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1), (n.configurable = !0), 'value' in
            n && (n.writable = !0), Object.defineProperty(t, n.key, n);
          }
        }
        return function(e, r, n) {
          return r && t(e.prototype, r), n && t(e, n), e;
        };
      })(),
      a = r(3),
      u = i(a),
      l = r(4),
      h = n(l),
      c = r(185),
      d = r(186),
      f = i(d),
      p = r(187),
      v = (function() {
        function t() {
          o(this, t), (this.transform = {
            position: new u.default(0, 0),
            scale: new u.default(1, 1),
            angle: 0,
          }), (this.depth = 0);
        }
        return s(t, [
          {
            key: '__init',
            value(t, e) {
              if (
                ((this.__opts = e), (this._id = p.Utils.uuid()), e.transform ==
                  null || e.transform.position == null)
              ) {
                throw new Error(
                  'Invalid game object created. No position provided.',
                );
              }
              if (
                ((this.transform.position = new u.default(
                  e.transform.position.x,
                  e.transform.position.y,
                )), (this.transform.angle =
                  e.transform.angle || this.transform.angle), e.transform.scale !=
                  null &&
                  ((this.transform.scale.x =
                    e.transform.scale.x), (this.transform.scale.y =
                    e.transform.scale.y)), (this.rigidbody || e.rigidbody) &&
                  ((this.rigidbody = this
                    .rigidbody || {}), (this.rigidbody.mass =
                    e.rigidbody.mass ||
                    this.rigidbody.mass ||
                    1), (this.rigidbody.friction =
                    e.rigidbody.friction ||
                    this.rigidbody.friction ||
                    0), (this.rigidbody.frictionAir =
                    e.rigidbody.frictionAir ||
                    this.rigidbody.frictionAir ||
                    0), (this.rigidbody.frictionStatic =
                    e.rigidbody.frictionStatic ||
                    this.rigidbody.frictionStatic ||
                    0), (this.rigidbody.restitution =
                    e.rigidbody.restitution ||
                    this.rigidbody.restitution ||
                    0), (this.rigidbody.velocity = e.rigidbody.velocity
                    ? new u.default(
                        e.rigidbody.velocity.x,
                        e.rigidbody.velocity.y,
                      )
                    : this.rigidbody.velocity
                        ? new u.default(
                            this.rigidbody.velocity.x,
                            this.rigidbody.velocity.y,
                          )
                        : new u.default(
                            0,
                            0,
                          )), (this.rigidbody.angularVelocity =
                    e.rigidbody.angularVelocity ||
                    this.rigidbody.angularVelocity ||
                    0), (this.rigidbody.maxVelocity =
                    e.rigidbody.maxVelocity ||
                    this.rigidbody.maxVelocity ||
                    new u.default(
                      1 / 0,
                      1 / 0,
                    )), (this.rigidbody.maxAngularVelocity =
                    e.rigidbody.maxAngularVelocity ||
                    this.rigidbody.maxAngularVelocity ||
                    1 / 0)), (this.scene = t), this.scene == null)
              ) { throw new Error('Gob instantiated without a scene object.'); }
              (this.debug = e.debug || !1), this.collider != null &&
                (this.rigidbody
                  ? (f.default.Body.setPosition(
                      this.collider.body,
                      f.default.Vector.create(
                        this.transform.position.x,
                        this.transform.position.y,
                      ),
                    ), f.default.Body.setMass(
                      this.collider.body,
                      this.rigidbody.mass,
                    ), (this.collider.body.friction = this.rigidbody.friction), (this.collider.body.frictionAir = this.rigidbody.frictionAir), (this.collider.body.frictionStatic = this.rigidbody.frictionStatic), (this.collider.body.restitution = this.rigidbody.restitution), f.default.Body.setVelocity(
                      this.collider.body,
                      f.default.Vector.create(
                        this.rigidbody.velocity.x * c.Time.dts,
                        this.rigidbody.velocity.y * c.Time.dts,
                      ),
                    ), f.default.Body.setAngularVelocity(
                      this.collider.body,
                      this.rigidbody.angularVelocity *
                        c.Time.dts *
                        Math.PI /
                        180,
                    ))
                  : (this.collider.body.isSensor = !0), this.collider.body.onCollide(
                  this.onCollide.bind(this),
                ), this.collider.body.onCollideEnd(
                  this.onCollideEnd.bind(this),
                ), this.collider.body.onCollideActive(
                  this.onCollideActive.bind(this),
                ));
            },
          },
          {
            key: '__initSprite',
            value() {
              var t = this.__opts;
              if (this.sprite == null || this.constructor.spritePath == null) {
                throw new Error(
                  'Invalid game object created. No sprite path provided',
                );
              }
              if (this.scene.resources[this.constructor.name] == null) {
                throw new Error(
                  `No texture found for ${
                    this.constructor.name
                    }. Make sure it's being\n        preloaded by ${
                    this.scene.constructor.name}`,
                );
              }
              (this.sprite.pixi = new h.Sprite(
                this.scene.resources[this.constructor.name].texture,
              )), (this.sprite.width =
                this.sprite.width ||
                this.sprite.pixi.width), (this.sprite.height =
                this.sprite.height ||
                this.sprite.pixi.height), (this.sprite.anchor =
                this.sprite.anchor ||
                new u.default(0.5, 0.5)), (this.sprite.scale =
                this.sprite.scale || new u.default(1, 1)), t.sprite != null &&
                ((this.sprite.width =
                  t.sprite.width || this.sprite.width), (this.sprite.height =
                  t.sprite.height || this.sprite.height), t.sprite.anchor &&
                  ((this.sprite.anchor.x =
                    t.sprite.anchor.x), (this.sprite.anchor.y =
                    t.sprite.anchor.y))), this.__updateSprite();
            },
          },
          {
            key: '__onSceneLoad',
            value() {
              this.__initSprite(), this.debug &&
                (this._setupDebug(this.scene), this._debug());
            },
          },
          {
            key: '_setupDebug',
            value(t) {
              (this._debugData = {}), (this._debugData.colliderOutline = new h.Graphics()), (this._debugData.colliderOutline.zDepth =
                1 /
                0), (this._debugData.spriteOutline = new h.Graphics()), (this._debugData.spriteOutline.zDepth =
                1 / 0), this.scene.stage.addChild(
                this._debugData.colliderOutline,
              ), this.scene.stage.addChild(this._debugData.spriteOutline);
            },
          },
          {key: '__update', value() {}},
          {key: 'update', value() {}},
          {key: 'prePhysicsUpdate', value() {}},
          {key: '__prePhysicsUpdate', value() {}},
          {key: 'postPhysicsUpdate', value() {}},
          {
            key: '__postPhysicsUpdate',
            value() {
              this.__updatePostCollisionAttributes(), this.__updateSprite(), this
                .debug && this._debug();
            },
          },
          {
            key: '__updatePostCollisionAttributes',
            value() {
              (this.transform.position.x = this.collider.body.position.x), (this.transform.position.y = this.collider.body.position.y), (this.transform.angle =
                180 * this.collider.body.angle / Math.PI);
            },
          },
          {
            key: '__updateSprite',
            value() {
              if (this.sprite.pixi == null) {
                throw new Error(
                  `No texture found for ${
                    this.constructor.name
                    }. Are you sure you're\n        preloading it in ${
                    this.scene.constructor.name
                    }?`,
                );
              }
              (this.sprite.pixi.zDepth = typeof this.depth === 'function'
                ? this.depth()
                : (this.sprite.pixi.zDepth = this.depth)), this.sprite.pixi.position.set(
                this.transform.position.x,
                this.transform.position.y,
              ), this.sprite.pixi.anchor.set(
                this.sprite.anchor.x,
                this.sprite.anchor.y,
              ), (this.sprite.pixi.width = this.sprite.width), (this.sprite.pixi.height = this.sprite.height), (this.sprite.pixi.rotation =
                this.transform.angle * Math.PI / 180);
            },
          },
          {
            key: '_debug',
            value() {
              if (
                (this._debugData.spriteOutline.clear(), this._debugData.spriteOutline.lineStyle(
                  2,
                  4362228,
                  0.9,
                ), this._debugData.spriteOutline.drawRect(
                  0,
                  0,
                  this.sprite.width,
                  this.sprite.height,
                ), this._debugData.spriteOutline.setTransform(
                  this.transform.position.x,
                  this.transform.position.y,
                ), (this._debugData.spriteOutline.rotation =
                  this.transform.angle *
                  Math.PI /
                  180), (this._debugData.spriteOutline.pivot.x =
                  this.sprite.width /
                  2), (this._debugData.spriteOutline.pivot.y =
                  this.sprite.width / 2), this.collider)
              ) {
                this._debugData.colliderOutline.clear(), this._debugData.colliderOutline.lineStyle(
                  2,
                  16007781,
                  0.9,
                );
                var t = this.collider.body.vertices.reduce((
                  t,
                  e,
                  r,
                  n,
                ) => {
                  return t.push(e.x), t.push(e.y), r === n.length - 1 &&
                    (t.push(n[0].x), t.push(n[0].y)), t;
                }, []);
                this._debugData.colliderOutline.drawPolygon(t);
              }
            },
          },
          {key: 'onCollide', value(t) {}},
          {key: 'onCollideEnd', value(t) {}},
          {key: 'onCollideActive', value(t) {}},
          {
            key: 'destroy',
            value() {
              var t = this;
              this._destroyed ||
                (this.scene.removeGob(
                  this,
                ), window.requestAnimationFrame(() => {
                  delete t._id;
                }), (this._destroyed = !0));
            },
          },
          {
            key: 'playAudio',
            value(t, e) {
              this.constructor.__audio[t].play(e);
            },
          },
        ]), t;
      })();
    (v.__audio = {}), (e.default = v);
  },
  function(t, e) {
    'use strict';
    function r(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    Object.defineProperty(e, '__esModule', {value: !0});
    var n = (function() {
        function t(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1), (n.configurable = !0), 'value' in
            n && (n.writable = !0), Object.defineProperty(t, n.key, n);
          }
        }
        return function(e, r, n) {
          return r && t(e.prototype, r), n && t(e, n), e;
        };
      })(),
      i = (function() {
        function t(e, n) {
          r(this, t), (this.x = e), (this.y = n);
        }
        return n(t, [
          {
            key: 'add',
            value() {
              var t = arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 0,
                e = arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0;
              return (this.x += t), (this.y += e), this;
            },
          },
          {
            key: 'subtract',
            value() {
              var t = arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 0,
                e = arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0;
              return (this.x += t), (this.y += e), this;
            },
          },
          {
            key: 'multiply',
            value() {
              var t = arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 1,
                e = arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 1;
              return (this.x *= t), (this.y *= e), this;
            },
          },
          {
            key: 'divide',
            value() {
              var t = arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 1,
                e = arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 1;
              return (this.x /= t), (this.y /= e), this;
            },
          },
          {
            key: 'isZero',
            value() {
              return this.x === 0 && this.y === 0;
            },
          },
          {
            key: 'mag',
            value() {
              return Math.sqrt(this.x * this.x + this.y * this.y);
            },
          },
          {
            key: 'dot',
            value(t) {
              return this.x * t.x + this.y * t.y;
            },
          },
          {
            key: 'normalize',
            value() {
              var t = this.mag();
              return (this.x /= t), (this.y /= t), this;
            },
          },
          {
            key: 'toString',
            value() {
              return `(${this.x}, ${this.y})`;
            },
          },
          {
            key: 'print',
            value() {
              console.log(`(${this.x}, ${this.y})`);
            },
          },
          {
            key: 'orthor',
            value() {
              return new t(-this.y, this.x);
            },
          },
          {
            key: 'orthol',
            value() {
              return new t(this.y, -this.x);
            },
          },
          {
            key: 'clone',
            value() {
              return new t(this.x, this.y);
            },
          },
          {
            key: 'rotate',
            value(t, e) {
              if (t == null) { throw new Error('No angle was passed to Vector2.rotate().'); }
              var r = t * (Math.PI / 180), n = Math.cos(r), i = Math.sin(r);
              if (e) {
                var o = this.x - e.x, s = this.y - e.y;
                (this.x = e.x + (o * n - s * i)), (this.y =
                  e.y + (o * i + s * n));
              } else {
                var a = this.x, u = this.y;
                (this.x = a * n - u * i), (this.y = a * i + u * n);
              }
              return this;
            },
          },
        ]), t;
      })();
    (i.Rotate = function(t, e, r) {
      return this.clone().rotate(e, r);
    }), (i.Sum = function(t, e) {
      return new i(t.x + e.x, t.y + e.y);
    }), (i.Difference = function(t, e) {
      return new i(t.x - e.x, t.y - e.y);
    }), (i.ScalarProduct = function(t, e) {
      return new i(e * t.x, e * t.y);
    }), (i.Dot = function(t, e) {
      return t.x * e.x + t.y * e.y;
    }), (i.Normalized = function(t) {
      var e = t.mag();
      return new i(t.x / e, t.y / e);
    }), (i.ProjectScalar = function(t, e) {
      var r = e.mag();
      return t.x * e.x / r + t.y * e.y / r;
    }), (i.ProjectVector = function(t, e) {
      var r = i.ProjectScalar(t, e), n = i.Normalized(e);
      return n.multiply(r, r);
    }), (i.Negative = function(t) {
      return new i(-t.x, -t.y);
    }), (i.Right = new i(1, 0)), (i.Left = new i(-1, 0)), (i.Up = new i(
      0,
      1,
    )), (i.Down = new i(0, -1)), (i.One = new i(1, 1)), (i.Zero = new i(
      0,
      0,
    )), (e.default = i);
  },
  function(t, e, r) {
    (function(t) {
      'use strict';
      function n(t) {
        if (t && t.__esModule) { return t; }
        var e = {};
        if (t != null) {
          for (var r in t) { Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); }
        }
        return (e.default = t), e;
      }
      (e.__esModule = !0), (e.loader = e.prepare = e.particles = e.mesh = e.loaders = e.interaction = e.filters = e.extras = e.extract = e.accessibility = void 0);
      var i = r(5);
      Object.keys(i).forEach(t => {
        t !== 'default' &&
          t !== '__esModule' &&
          Object.defineProperty(e, t, {
            enumerable: !0,
            get() {
              return i[t];
            },
          });
      });
      var o = r(10);
      Object.keys(o).forEach(t => {
        t !== 'default' &&
          t !== '__esModule' &&
          Object.defineProperty(e, t, {
            enumerable: !0,
            get() {
              return o[t];
            },
          });
      });
      var s = r(11);
      Object.keys(s).forEach(t => {
        t !== 'default' &&
          t !== '__esModule' &&
          Object.defineProperty(e, t, {
            enumerable: !0,
            get() {
              return s[t];
            },
          });
      });
      var a = r(174),
        u = n(a),
        l = r(177),
        h = n(l),
        c = r(134),
        d = n(c),
        f = r(143),
        p = n(f),
        v = r(180),
        y = n(v),
        g = r(161),
        m = n(g),
        b = r(122),
        x = n(b),
        _ = r(129),
        w = n(_),
        T = r(155),
        E = n(T);
      (e.accessibility = u), (e.extract = h), (e.extras = d), (e.filters = p), (e.interaction = y), (e.loaders = m), (e.mesh = x), (e.particles = w), (e.prepare = E);
      var S = m && m.Loader ? new m.Loader() : null;
      (e.loader = S), (t.PIXI = e);
    }.call(
      e,
      (function() {
        return this;
      })(),
    ));
  },
  function(t, e, r) {
    'use strict';
    r(6), r(8), r(9), window.ArrayBuffer ||
      (window.ArrayBuffer = Array), window.Float32Array ||
      (window.Float32Array = Array), window.Uint32Array ||
      (window.Uint32Array = Array), window.Uint16Array ||
      (window.Uint16Array = Array);
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    var i = r(7), o = n(i);
    Object.assign || (Object.assign = o.default);
  },
  function(t, e) {
    /*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
    'use strict';
    function r(t) {
      if (t === null || void 0 === t) {
        throw new TypeError(
          'Object.assign cannot be called with null or undefined',
        );
      }
      return Object(t);
    }
    function n() {
      try {
        if (!Object.assign) { return !1; }
        var t = new String('abc');
        if (((t[5] = 'de'), Object.getOwnPropertyNames(t)[0] === '5')) { return !1; }
        for (var e = {}, r = 0; r < 10; r++) { e[`_${String.fromCharCode(r)}`] = r; }
        var n = Object.getOwnPropertyNames(e).map(t => {
          return e[t];
        });
        if (n.join('') !== '0123456789') { return !1; }
        var i = {};
        return 'abcdefghijklmnopqrst'.split('').forEach(t => {
          i[t] = t;
        }), Object.keys(Object.assign({}, i)).join('') ===
          'abcdefghijklmnopqrst';
      } catch (t) {
        return !1;
      }
    }
    var i = Object.getOwnPropertySymbols,
      o = Object.prototype.hasOwnProperty,
      s = Object.prototype.propertyIsEnumerable;
    t.exports = n()
      ? Object.assign
      : function(t, e) {
        for (var n, a, u = r(t), l = 1; l < arguments.length; l++) {
          n = Object(arguments[l]);
          for (var h in n) { o.call(n, h) && (u[h] = n[h]); }
          if (i) {
            a = i(n);
            for (var c = 0; c < a.length; c++) { s.call(n, a[c]) && (u[a[c]] = n[a[c]]); }
          }
        }
        return u;
      };
  },
  function(t, e) {
    (function(t) {
      'use strict';
      var e = 16;
      (Date.now && Date.prototype.getTime) ||
        (Date.now = function() {
          return new Date().getTime();
        }), (t.performance && t.performance.now) ||
        !(function() {
          var e = Date.now();
          t.performance ||
            (t.performance = {}), (t.performance.now = function() {
              return Date.now() - e;
            });
        })();
      for (
        var r = Date.now(), n = ['ms', 'moz', 'webkit', 'o'], i = 0;
        i < n.length && !t.requestAnimationFrame;
        ++i
      ) {
        var o = n[i];
        (t.requestAnimationFrame =
          t[`${o}RequestAnimationFrame`]), (t.cancelAnimationFrame =
          t[`${o}CancelAnimationFrame`] ||
          t[`${o}CancelRequestAnimationFrame`]);
      }
      t.requestAnimationFrame ||
        (t.requestAnimationFrame = function(t) {
          if (typeof t !== 'function') { throw new TypeError(`${t}is not a function`); }
          var n = Date.now(), i = e + r - n;
          return i < 0 && (i = 0), (r = n), setTimeout(() => {
            (r = Date.now()), t(performance.now());
          }, i);
        }), t.cancelAnimationFrame ||
        (t.cancelAnimationFrame = function(t) {
          return clearTimeout(t);
        });
    }.call(
      e,
      (function() {
        return this;
      })(),
    ));
  },
  function(t, e) {
    'use strict';
    Math.sign ||
      (Math.sign = function(t) {
        return (t = Number(t)), t === 0 || isNaN(t) ? t : t > 0 ? 1 : -1;
      });
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      if (t && t.__esModule) { return t; }
      var e = {};
      if (t != null) {
        for (var r in t) { Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); }
      }
      return (e.default = t), e;
    }
    function i(t) {
      var e = new Error().stack;
      typeof e === 'undefined'
        ? console.warn('Deprecation Warning: ', t)
        : ((e = e.split('\n').splice(3).join('\n')), console.groupCollapsed
            ? (console.groupCollapsed(
                '%cDeprecation Warning: %c%s',
                'color:#614108;background:#fffbe6',
                'font-weight:normal;color:#614108;background:#fffbe6',
                t,
              ), console.warn(e), console.groupEnd())
            : (console.warn('Deprecation Warning: ', t), console.warn(e)));
    }
    var o = r(11),
      s = n(o),
      a = r(122),
      u = n(a),
      l = r(129),
      h = n(l),
      c = r(134),
      d = n(c),
      f = r(143),
      p = n(f),
      v = r(155),
      y = n(v),
      g = r(161),
      m = n(g);
    (s.SpriteBatch = function() {
      throw new ReferenceError(
        'SpriteBatch does not exist any more, please use the new ParticleContainer instead.',
      );
    }), (s.AssetLoader = function() {
      throw new ReferenceError(
        'The loader system was overhauled in pixi v3, please see the new PIXI.loaders.Loader class.',
      );
    }), Object.defineProperties(s, {
      Stage: {
        enumerable: !0,
        get() {
          return i(
            'You do not need to use a PIXI Stage any more, you can simply render any container.',
          ), s.Container;
        },
      },
      DisplayObjectContainer: {
        enumerable: !0,
        get() {
          return i(
            'DisplayObjectContainer has been shortened to Container, please use Container from now on.',
          ), s.Container;
        },
      },
      Strip: {
        enumerable: !0,
        get() {
          return i(
            'The Strip class has been renamed to Mesh and moved to mesh.Mesh, please use mesh.Mesh from now on.',
          ), u.Mesh;
        },
      },
      Rope: {
        enumerable: !0,
        get() {
          return i(
            'The Rope class has been moved to mesh.Rope, please use mesh.Rope from now on.',
          ), u.Rope;
        },
      },
      ParticleContainer: {
        enumerable: !0,
        get() {
          return i(
            'The ParticleContainer class has been moved to particles.ParticleContainer, please use particles.ParticleContainer from now on.',
          ), h.ParticleContainer;
        },
      },
      MovieClip: {
        enumerable: !0,
        get() {
          return i(
            'The MovieClip class has been moved to extras.AnimatedSprite, please use extras.AnimatedSprite.',
          ), d.AnimatedSprite;
        },
      },
      TilingSprite: {
        enumerable: !0,
        get() {
          return i(
            'The TilingSprite class has been moved to extras.TilingSprite, please use extras.TilingSprite from now on.',
          ), d.TilingSprite;
        },
      },
      BitmapText: {
        enumerable: !0,
        get() {
          return i(
            'The BitmapText class has been moved to extras.BitmapText, please use extras.BitmapText from now on.',
          ), d.BitmapText;
        },
      },
      blendModes: {
        enumerable: !0,
        get() {
          return i(
            'The blendModes has been moved to BLEND_MODES, please use BLEND_MODES from now on.',
          ), s.BLEND_MODES;
        },
      },
      scaleModes: {
        enumerable: !0,
        get() {
          return i(
            'The scaleModes has been moved to SCALE_MODES, please use SCALE_MODES from now on.',
          ), s.SCALE_MODES;
        },
      },
      BaseTextureCache: {
        enumerable: !0,
        get() {
          return i(
            'The BaseTextureCache class has been moved to utils.BaseTextureCache, please use utils.BaseTextureCache from now on.',
          ), s.utils.BaseTextureCache;
        },
      },
      TextureCache: {
        enumerable: !0,
        get() {
          return i(
            'The TextureCache class has been moved to utils.TextureCache, please use utils.TextureCache from now on.',
          ), s.utils.TextureCache;
        },
      },
      math: {
        enumerable: !0,
        get() {
          return i(
            'The math namespace is deprecated, please access members already accessible on PIXI.',
          ), s;
        },
      },
      AbstractFilter: {
        enumerable: !0,
        get() {
          return i(
            'AstractFilter has been renamed to Filter, please use PIXI.Filter',
          ), s.Filter;
        },
      },
      TransformManual: {
        enumerable: !0,
        get() {
          return i(
            'TransformManual has been renamed to TransformBase, please update your pixi-spine',
          ), s.TransformBase;
        },
      },
      TARGET_FPMS: {
        enumerable: !0,
        get() {
          return i(
            'PIXI.TARGET_FPMS has been deprecated, please use PIXI.settings.TARGET_FPMS',
          ), s.settings.TARGET_FPMS;
        },
        set(t) {
          i(
            'PIXI.TARGET_FPMS has been deprecated, please use PIXI.settings.TARGET_FPMS',
          ), (s.settings.TARGET_FPMS = t);
        },
      },
      FILTER_RESOLUTION: {
        enumerable: !0,
        get() {
          return i(
            'PIXI.FILTER_RESOLUTION has been deprecated, please use PIXI.settings.FILTER_RESOLUTION',
          ), s.settings.FILTER_RESOLUTION;
        },
        set(t) {
          i(
            'PIXI.FILTER_RESOLUTION has been deprecated, please use PIXI.settings.FILTER_RESOLUTION',
          ), (s.settings.FILTER_RESOLUTION = t);
        },
      },
      RESOLUTION: {
        enumerable: !0,
        get() {
          return i(
            'PIXI.RESOLUTION has been deprecated, please use PIXI.settings.RESOLUTION',
          ), s.settings.RESOLUTION;
        },
        set(t) {
          i(
            'PIXI.RESOLUTION has been deprecated, please use PIXI.settings.RESOLUTION',
          ), (s.settings.RESOLUTION = t);
        },
      },
      MIPMAP_TEXTURES: {
        enumerable: !0,
        get() {
          return i(
            'PIXI.MIPMAP_TEXTURES has been deprecated, please use PIXI.settings.MIPMAP_TEXTURES',
          ), s.settings.MIPMAP_TEXTURES;
        },
        set(t) {
          i(
            'PIXI.MIPMAP_TEXTURES has been deprecated, please use PIXI.settings.MIPMAP_TEXTURES',
          ), (s.settings.MIPMAP_TEXTURES = t);
        },
      },
      SPRITE_BATCH_SIZE: {
        enumerable: !0,
        get() {
          return i(
            'PIXI.SPRITE_BATCH_SIZE has been deprecated, please use PIXI.settings.SPRITE_BATCH_SIZE',
          ), s.settings.SPRITE_BATCH_SIZE;
        },
        set(t) {
          i(
            'PIXI.SPRITE_BATCH_SIZE has been deprecated, please use PIXI.settings.SPRITE_BATCH_SIZE',
          ), (s.settings.SPRITE_BATCH_SIZE = t);
        },
      },
      SPRITE_MAX_TEXTURES: {
        enumerable: !0,
        get() {
          return i(
            'PIXI.SPRITE_MAX_TEXTURES has been deprecated, please use PIXI.settings.SPRITE_MAX_TEXTURES',
          ), s.settings.SPRITE_MAX_TEXTURES;
        },
        set(t) {
          i(
            'PIXI.SPRITE_MAX_TEXTURES has been deprecated, please use PIXI.settings.SPRITE_MAX_TEXTURES',
          ), (s.settings.SPRITE_MAX_TEXTURES = t);
        },
      },
      RETINA_PREFIX: {
        enumerable: !0,
        get() {
          return i(
            'PIXI.RETINA_PREFIX has been deprecated, please use PIXI.settings.RETINA_PREFIX',
          ), s.settings.RETINA_PREFIX;
        },
        set(t) {
          i(
            'PIXI.RETINA_PREFIX has been deprecated, please use PIXI.settings.RETINA_PREFIX',
          ), (s.settings.RETINA_PREFIX = t);
        },
      },
      DEFAULT_RENDER_OPTIONS: {
        enumerable: !0,
        get() {
          return i(
            'PIXI.DEFAULT_RENDER_OPTIONS has been deprecated, please use PIXI.settings.DEFAULT_RENDER_OPTIONS',
          ), s.settings.RENDER_OPTIONS;
        },
      },
    });
    for (
      var b = [
        {parent: 'TRANSFORM_MODE', target: 'TRANSFORM_MODE'},
        {parent: 'GC_MODES', target: 'GC_MODE'},
        {parent: 'WRAP_MODES', target: 'WRAP_MODE'},
        {parent: 'SCALE_MODES', target: 'SCALE_MODE'},
        {parent: 'PRECISION', target: 'PRECISION'},
        ],
        x = function(t) {
          var e = b[t];
          Object.defineProperty(s[e.parent], 'DEFAULT', {
            enumerable: !0,
            get() {
              return i(
                `PIXI.${
                  e.parent
                  }.DEFAULT has been deprecated, please use PIXI.settings.${
                  e.target}`,
              ), s.settings[e.target];
            },
            set(t) {
              i(
                `PIXI.${
                  e.parent
                  }.DEFAULT has been deprecated, please use PIXI.settings.${
                  e.target}`,
              ), (s.settings[e.target] = t);
            },
          });
        },
        _ = 0;
      _ < b.length;
      _++
    ) { x(_); }
    Object.defineProperties(d, {
      MovieClip: {
        enumerable: !0,
        get() {
          return i(
            'The MovieClip class has been renamed to AnimatedSprite, please use AnimatedSprite from now on.',
          ), d.AnimatedSprite;
        },
      },
    }), (s.DisplayObject.prototype.generateTexture = function(t, e, r) {
      return i(
        'generateTexture has moved to the renderer, please use renderer.generateTexture(displayObject)',
      ), t.generateTexture(this, e, r);
    }), (s.Graphics.prototype.generateTexture = function(t, e) {
      return i(
        'graphics generate texture has moved to the renderer. Or to render a graphics to a texture using canvas please use generateCanvasTexture',
      ), this.generateCanvasTexture(t, e);
    }), (s.RenderTexture.prototype.render = function(t, e, r, n) {
      this.legacyRenderer.render(t, this, r, e, !n), i(
        'RenderTexture.render is now deprecated, please use renderer.render(displayObject, renderTexture)',
      );
    }), (s.RenderTexture.prototype.getImage = function(t) {
      return i(
        'RenderTexture.getImage is now deprecated, please use renderer.extract.image(target)',
      ), this.legacyRenderer.extract.image(t);
    }), (s.RenderTexture.prototype.getBase64 = function(t) {
      return i(
        'RenderTexture.getBase64 is now deprecated, please use renderer.extract.base64(target)',
      ), this.legacyRenderer.extract.base64(t);
    }), (s.RenderTexture.prototype.getCanvas = function(t) {
      return i(
        'RenderTexture.getCanvas is now deprecated, please use renderer.extract.canvas(target)',
      ), this.legacyRenderer.extract.canvas(t);
    }), (s.RenderTexture.prototype.getPixels = function(t) {
      return i(
        'RenderTexture.getPixels is now deprecated, please use renderer.extract.pixels(target)',
      ), this.legacyRenderer.pixels(t);
    }), (s.Sprite.prototype.setTexture = function(t) {
      (this.texture = t), i(
        'setTexture is now deprecated, please use the texture property, e.g : sprite.texture = texture;',
      );
    }), (d.BitmapText.prototype.setText = function(t) {
      (this.text = t), i(
        "setText is now deprecated, please use the text property, e.g : myBitmapText.text = 'my text';",
      );
    }), (s.Text.prototype.setText = function(t) {
      (this.text = t), i(
        "setText is now deprecated, please use the text property, e.g : myText.text = 'my text';",
      );
    }), (s.Text.prototype.setStyle = function(t) {
      (this.style = t), i(
        'setStyle is now deprecated, please use the style property, e.g : myText.style = style;',
      );
    }), (s.Text.prototype.determineFontProperties = function(t) {
      return i(
        'determineFontProperties is now deprecated, please use the static calculateFontProperties method, e.g : Text.calculateFontProperties(fontStyle);',
      ), Text.calculateFontProperties(t);
    }), Object.defineProperties(s.TextStyle.prototype, {
      font: {
        get() {
          i(
            "text style property 'font' is now deprecated, please use the 'fontFamily', 'fontSize', 'fontStyle', 'fontVariant' and 'fontWeight' properties from now on",
          );
          var t = typeof this._fontSize === 'number'
            ? `${this._fontSize}px`
            : this._fontSize;
          return (
            `${this._fontStyle
            } ${
            this._fontVariant
            } ${
            this._fontWeight
            } ${
            t
            } ${
            this._fontFamily}`
          );
        },
        set(t) {
          i(
            "text style property 'font' is now deprecated, please use the 'fontFamily','fontSize',fontStyle','fontVariant' and 'fontWeight' properties from now on",
          ), t.indexOf('italic') > 1
            ? (this._fontStyle = 'italic')
            : t.indexOf('oblique') > -1
                ? (this._fontStyle = 'oblique')
                : (this._fontStyle = 'normal'), t.indexOf('small-caps') > -1
            ? (this._fontVariant = 'small-caps')
            : (this._fontVariant = 'normal');
          var e = t.split(' '), r = -1;
          this._fontSize = 26;
          for (var n = 0; n < e.length; ++n) {
            if (e[n].match(/(px|pt|em|%)/)) {
              (r = n), (this._fontSize = e[n]);
              break;
            }
          }
          this._fontWeight = 'normal';
          for (var o = 0; o < r; ++o) {
            if (
              e[o].match(
                /(bold|bolder|lighter|100|200|300|400|500|600|700|800|900)/,
              )
            ) {
              this._fontWeight = e[o];
              break;
            }
          }
          if (r > -1 && r < e.length - 1) {
            this._fontFamily = '';
            for (var s = r + 1; s < e.length; ++s) { this._fontFamily += `${e[s]} `; }
            this._fontFamily = this._fontFamily.slice(0, -1);
          } else { this._fontFamily = 'Arial'; }
          this.styleID++;
        },
      },
    }), (s.Texture.prototype.setFrame = function(t) {
      (this.frame = t), i(
        'setFrame is now deprecated, please use the frame property, e.g: myTexture.frame = frame;',
      );
    }), Object.defineProperties(p, {
      AbstractFilter: {
        get() {
          return i(
            'AstractFilter has been renamed to Filter, please use PIXI.Filter',
          ), s.AbstractFilter;
        },
      },
      SpriteMaskFilter: {
        get() {
          return i(
            'filters.SpriteMaskFilter is an undocumented alias, please use SpriteMaskFilter from now on.',
          ), s.SpriteMaskFilter;
        },
      },
    }), (s.utils.uuid = function() {
      return i(
        'utils.uuid() is deprecated, please use utils.uid() from now on.',
      ), s.utils.uid();
    }), (s.utils.canUseNewCanvasBlendModes = function() {
      return i(
        'utils.canUseNewCanvasBlendModes() is deprecated, please use CanvasTinter.canUseMultiply from now on',
      ), s.CanvasTinter.canUseMultiply;
    });
    var w = !0;
    Object.defineProperty(s.utils, '_saidHello', {
      set(t) {
        t &&
          (i(
            'PIXI.utils._saidHello is deprecated, please use PIXI.utils.skipHello()',
          ), this.skipHello()), (w = t);
      },
      get() {
        return w;
      },
    }), Object.defineProperty(y.canvas, 'UPLOADS_PER_FRAME', {
      set() {
        i(
          'PIXI.CanvasPrepare.UPLOADS_PER_FRAME has been removed. Please set renderer.plugins.prepare.limiter.maxItemsPerFrame on your renderer',
        );
      },
      get() {
        return i(
          'PIXI.CanvasPrepare.UPLOADS_PER_FRAME has been removed. Please use renderer.plugins.prepare.limiter',
        ), NaN;
      },
    }), Object.defineProperty(y.webgl, 'UPLOADS_PER_FRAME', {
      set() {
        i(
          'PIXI.WebGLPrepare.UPLOADS_PER_FRAME has been removed. Please set renderer.plugins.prepare.limiter.maxItemsPerFrame on your renderer',
        );
      },
      get() {
        return i(
          'PIXI.WebGLPrepare.UPLOADS_PER_FRAME has been removed. Please use renderer.plugins.prepare.limiter',
        ), NaN;
      },
    }), Object.defineProperties(m.Resource.prototype, {
      isJson: {
        get() {
          return i(
            'The isJson property is deprecated, please use `resource.type === Resource.TYPE.JSON`.',
          ), this.type === m.Loader.Resource.TYPE.JSON;
        },
      },
      isXml: {
        get() {
          return i(
            'The isXml property is deprecated, please use `resource.type === Resource.TYPE.XML`.',
          ), this.type === m.Loader.Resource.TYPE.XML;
        },
      },
      isImage: {
        get() {
          return i(
            'The isImage property is deprecated, please use `resource.type === Resource.TYPE.IMAGE`.',
          ), this.type === m.Loader.Resource.TYPE.IMAGE;
        },
      },
      isAudio: {
        get() {
          return i(
            'The isAudio property is deprecated, please use `resource.type === Resource.TYPE.AUDIO`.',
          ), this.type === m.Loader.Resource.TYPE.AUDIO;
        },
      },
      isVideo: {
        get() {
          return i(
            'The isVideo property is deprecated, please use `resource.type === Resource.TYPE.VIDEO`.',
          ), this.type === m.Loader.Resource.TYPE.VIDEO;
        },
      },
    }), Object.defineProperties(m.Loader.prototype, {
      before: {
        get() {
          return i('The before() method is deprecated, please use pre().'), this
            .pre;
        },
      },
      after: {
        get() {
          return i('The after() method is deprecated, please use use().'), this
            .use;
        },
      },
    });
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      if (t && t.__esModule) { return t; }
      var e = {};
      if (t != null) { for (var r in t) { Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); } }
      return (e.default = t), e;
    }
    function i(t) {
      return t && t.__esModule ? t : {default: t};
    }
    (e.__esModule = !0), (e.autoDetectRenderer = e.Application = e.Filter = e.SpriteMaskFilter = e.Quad = e.RenderTarget = e.ObjectRenderer = e.WebGLManager = e.Shader = e.CanvasRenderTarget = e.TextureUvs = e.VideoBaseTexture = e.BaseRenderTexture = e.RenderTexture = e.BaseTexture = e.Texture = e.CanvasGraphicsRenderer = e.GraphicsRenderer = e.GraphicsData = e.Graphics = e.TextStyle = e.Text = e.SpriteRenderer = e.CanvasTinter = e.CanvasSpriteRenderer = e.Sprite = e.TransformBase = e.TransformStatic = e.Transform = e.Container = e.DisplayObject = e.Bounds = e.glCore = e.WebGLRenderer = e.CanvasRenderer = e.ticker = e.utils = e.settings = void 0);
    var o = r(12);
    Object.keys(o).forEach(t => {
      t !== 'default' &&
        t !== '__esModule' &&
        Object.defineProperty(e, t, {
          enumerable: !0,
          get() {
            return o[t];
          },
        });
    });
    var s = r(13);
    Object.keys(s).forEach(t => {
      t !== 'default' &&
        t !== '__esModule' &&
        Object.defineProperty(e, t, {
          enumerable: !0,
          get() {
            return s[t];
          },
        });
    });
    var a = r(23);
    Object.defineProperty(e, 'glCore', {
      enumerable: !0,
      get() {
        return i(a).default;
      },
    });
    var u = r(40);
    Object.defineProperty(e, 'Bounds', {
      enumerable: !0,
      get() {
        return i(u).default;
      },
    });
    var l = r(41);
    Object.defineProperty(e, 'DisplayObject', {
      enumerable: !0,
      get() {
        return i(l).default;
      },
    });
    var h = r(50);
    Object.defineProperty(e, 'Container', {
      enumerable: !0,
      get() {
        return i(h).default;
      },
    });
    var c = r(49);
    Object.defineProperty(e, 'Transform', {
      enumerable: !0,
      get() {
        return i(c).default;
      },
    });
    var d = r(47);
    Object.defineProperty(e, 'TransformStatic', {
      enumerable: !0,
      get() {
        return i(d).default;
      },
    });
    var f = r(48);
    Object.defineProperty(e, 'TransformBase', {
      enumerable: !0,
      get() {
        return i(f).default;
      },
    });
    var p = r(53);
    Object.defineProperty(e, 'Sprite', {
      enumerable: !0,
      get() {
        return i(p).default;
      },
    });
    var v = r(69);
    Object.defineProperty(e, 'CanvasSpriteRenderer', {
      enumerable: !0,
      get() {
        return i(v).default;
      },
    });
    var y = r(78);
    Object.defineProperty(e, 'CanvasTinter', {
      enumerable: !0,
      get() {
        return i(y).default;
      },
    });
    var g = r(79);
    Object.defineProperty(e, 'SpriteRenderer', {
      enumerable: !0,
      get() {
        return i(g).default;
      },
    });
    var m = r(105);
    Object.defineProperty(e, 'Text', {
      enumerable: !0,
      get() {
        return i(m).default;
      },
    });
    var b = r(106);
    Object.defineProperty(e, 'TextStyle', {
      enumerable: !0,
      get() {
        return i(b).default;
      },
    });
    var x = r(107);
    Object.defineProperty(e, 'Graphics', {
      enumerable: !0,
      get() {
        return i(x).default;
      },
    });
    var _ = r(108);
    Object.defineProperty(e, 'GraphicsData', {
      enumerable: !0,
      get() {
        return i(_).default;
      },
    });
    var w = r(110);
    Object.defineProperty(e, 'GraphicsRenderer', {
      enumerable: !0,
      get() {
        return i(w).default;
      },
    });
    var T = r(119);
    Object.defineProperty(e, 'CanvasGraphicsRenderer', {
      enumerable: !0,
      get() {
        return i(T).default;
      },
    });
    var E = r(54);
    Object.defineProperty(e, 'Texture', {
      enumerable: !0,
      get() {
        return i(E).default;
      },
    });
    var S = r(55);
    Object.defineProperty(e, 'BaseTexture', {
      enumerable: !0,
      get() {
        return i(S).default;
      },
    });
    var P = r(72);
    Object.defineProperty(e, 'RenderTexture', {
      enumerable: !0,
      get() {
        return i(P).default;
      },
    });
    var O = r(73);
    Object.defineProperty(e, 'BaseRenderTexture', {
      enumerable: !0,
      get() {
        return i(O).default;
      },
    });
    var M = r(65);
    Object.defineProperty(e, 'VideoBaseTexture', {
      enumerable: !0,
      get() {
        return i(M).default;
      },
    });
    var C = r(68);
    Object.defineProperty(e, 'TextureUvs', {
      enumerable: !0,
      get() {
        return i(C).default;
      },
    });
    var A = r(75);
    Object.defineProperty(e, 'CanvasRenderTarget', {
      enumerable: !0,
      get() {
        return i(A).default;
      },
    });
    var R = r(94);
    Object.defineProperty(e, 'Shader', {
      enumerable: !0,
      get() {
        return i(R).default;
      },
    });
    var D = r(81);
    Object.defineProperty(e, 'WebGLManager', {
      enumerable: !0,
      get() {
        return i(D).default;
      },
    });
    var I = r(80);
    Object.defineProperty(e, 'ObjectRenderer', {
      enumerable: !0,
      get() {
        return i(I).default;
      },
    });
    var L = r(91);
    Object.defineProperty(e, 'RenderTarget', {
      enumerable: !0,
      get() {
        return i(L).default;
      },
    });
    var k = r(92);
    Object.defineProperty(e, 'Quad', {
      enumerable: !0,
      get() {
        return i(k).default;
      },
    });
    var B = r(84);
    Object.defineProperty(e, 'SpriteMaskFilter', {
      enumerable: !0,
      get() {
        return i(B).default;
      },
    });
    var N = r(85);
    Object.defineProperty(e, 'Filter', {
      enumerable: !0,
      get() {
        return i(N).default;
      },
    });
    var F = r(120);
    Object.defineProperty(e, 'Application', {
      enumerable: !0,
      get() {
        return i(F).default;
      },
    });
    var j = r(121);
    Object.defineProperty(e, 'autoDetectRenderer', {
      enumerable: !0,
      get() {
        return j.autoDetectRenderer;
      },
    });
    var U = r(51),
      X = n(U),
      W = r(66),
      V = n(W),
      G = r(43),
      H = i(G),
      Y = r(70),
      z = i(Y),
      q = r(82),
      K = i(q);
    (e.settings = H.default), (e.utils = X), (e.ticker = V), (e.CanvasRenderer =
      z.default), (e.WebGLRenderer = K.default);
  },
  function(t, e) {
    'use strict';
    e.__esModule = !0;
    (e.VERSION = '4.3.5'), (e.PI_2 = 2 * Math.PI), (e.RAD_TO_DEG =
      180 / Math.PI), (e.DEG_TO_RAD = Math.PI / 180), (e.RENDERER_TYPE = {
        UNKNOWN: 0,
        WEBGL: 1,
        CANVAS: 2,
      }), (e.BLEND_MODES = {
        NORMAL: 0,
        ADD: 1,
        MULTIPLY: 2,
        SCREEN: 3,
        OVERLAY: 4,
        DARKEN: 5,
        LIGHTEN: 6,
        COLOR_DODGE: 7,
        COLOR_BURN: 8,
        HARD_LIGHT: 9,
        SOFT_LIGHT: 10,
        DIFFERENCE: 11,
        EXCLUSION: 12,
        HUE: 13,
        SATURATION: 14,
        COLOR: 15,
        LUMINOSITY: 16,
      }), (e.DRAW_MODES = {
        POINTS: 0,
        LINES: 1,
        LINE_LOOP: 2,
        LINE_STRIP: 3,
        TRIANGLES: 4,
        TRIANGLE_STRIP: 5,
        TRIANGLE_FAN: 6,
      }), (e.SCALE_MODES = {LINEAR: 0, NEAREST: 1}), (e.WRAP_MODES = {
        CLAMP: 0,
        REPEAT: 1,
        MIRRORED_REPEAT: 2,
      }), (e.GC_MODES = {
        AUTO: 0,
        MANUAL: 1,
      }), (e.URL_FILE_EXTENSION = /\.(\w{3,4})(?:$|\?|#)/i), (e.DATA_URI = /^\s*data:(?:([\w-]+)\/([\w+.-]+))?(?:;(charset=[\w-]+|base64))?,(.*)/i), (e.SVG_SIZE = /<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i), (e.SHAPES = {
        POLY: 0,
        RECT: 1,
        CIRC: 2,
        ELIP: 3,
        RREC: 4,
      }), (e.PRECISION = {
        LOW: 'lowp',
        MEDIUM: 'mediump',
        HIGH: 'highp',
      }), (e.TRANSFORM_MODE = {STATIC: 0, DYNAMIC: 1}), (e.TEXT_GRADIENT = {
        LINEAR_VERTICAL: 0,
        LINEAR_HORIZONTAL: 1,
      });
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    e.__esModule = !0;
    var i = r(14);
    Object.defineProperty(e, 'Point', {
      enumerable: !0,
      get() {
        return n(i).default;
      },
    });
    var o = r(15);
    Object.defineProperty(e, 'ObservablePoint', {
      enumerable: !0,
      get() {
        return n(o).default;
      },
    });
    var s = r(16);
    Object.defineProperty(e, 'Matrix', {
      enumerable: !0,
      get() {
        return n(s).default;
      },
    });
    var a = r(17);
    Object.defineProperty(e, 'GroupD8', {
      enumerable: !0,
      get() {
        return n(a).default;
      },
    });
    var u = r(18);
    Object.defineProperty(e, 'Circle', {
      enumerable: !0,
      get() {
        return n(u).default;
      },
    });
    var l = r(20);
    Object.defineProperty(e, 'Ellipse', {
      enumerable: !0,
      get() {
        return n(l).default;
      },
    });
    var h = r(21);
    Object.defineProperty(e, 'Polygon', {
      enumerable: !0,
      get() {
        return n(h).default;
      },
    });
    var c = r(19);
    Object.defineProperty(e, 'Rectangle', {
      enumerable: !0,
      get() {
        return n(c).default;
      },
    });
    var d = r(22);
    Object.defineProperty(e, 'RoundedRectangle', {
      enumerable: !0,
      get() {
        return n(d).default;
      },
    });
  },
  function(t, e) {
    'use strict';
    function r(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    e.__esModule = !0;
    var n = (function() {
      function t() {
        var e = arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : 0,
          n = arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : 0;
        r(this, t), (this.x = e), (this.y = n);
      }
      return (t.prototype.clone = function() {
        return new t(this.x, this.y);
      }), (t.prototype.copy = function(t) {
        this.set(t.x, t.y);
      }), (t.prototype.equals = function(t) {
        return t.x === this.x && t.y === this.y;
      }), (t.prototype.set = function(t, e) {
        (this.x = t || 0), (this.y = e || (e !== 0 ? this.x : 0));
      }), t;
    })();
    e.default = n;
  },
  function(t, e) {
    'use strict';
    function r(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    e.__esModule = !0;
    var n = (function() {
        function t(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1), (n.configurable = !0), 'value' in
            n && (n.writable = !0), Object.defineProperty(t, n.key, n);
          }
        }
        return function(e, r, n) {
          return r && t(e.prototype, r), n && t(e, n), e;
        };
      })(),
      i = (function() {
        function t(e, n) {
          var i = arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : 0,
            o = arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : 0;
          r(
            this,
            t,
          ), (this._x = i), (this._y = o), (this.cb = e), (this.scope = n);
        }
        return (t.prototype.set = function(t, e) {
          var r = t || 0, n = e || (e !== 0 ? r : 0);
          (this._x === r && this._y === n) ||
            ((this._x = r), (this._y = n), this.cb.call(this.scope));
        }), (t.prototype.copy = function(t) {
          (this._x === t.x && this._y === t.y) ||
            ((this._x = t.x), (this._y = t.y), this.cb.call(this.scope));
        }), n(t, [
          {
            key: 'x',
            get() {
              return this._x;
            },
            set(t) {
              this._x !== t && ((this._x = t), this.cb.call(this.scope));
            },
          },
          {
            key: 'y',
            get() {
              return this._y;
            },
            set(t) {
              this._y !== t && ((this._y = t), this.cb.call(this.scope));
            },
          },
        ]), t;
      })();
    e.default = i;
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    e.__esModule = !0;
    var o = (function() {
        function t(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1), (n.configurable = !0), 'value' in
            n && (n.writable = !0), Object.defineProperty(t, n.key, n);
          }
        }
        return function(e, r, n) {
          return r && t(e.prototype, r), n && t(e, n), e;
        };
      })(),
      s = r(14),
      a = n(s),
      u = (function() {
        function t() {
          i(
            this,
            t,
          ), (this.a = 1), (this.b = 0), (this.c = 0), (this.d = 1), (this.tx = 0), (this.ty = 0), (this.array = null);
        }
        return (t.prototype.fromArray = function(t) {
          (this.a = t[0]), (this.b = t[1]), (this.c = t[3]), (this.d =
            t[4]), (this.tx = t[2]), (this.ty = t[5]);
        }), (t.prototype.set = function(t, e, r, n, i, o) {
          return (this.a = t), (this.b = e), (this.c = r), (this.d = n), (this.tx = i), (this.ty = o), this;
        }), (t.prototype.toArray = function(t, e) {
          this.array || (this.array = new Float32Array(9));
          var r = e || this.array;
          return t
            ? ((r[0] = this.a), (r[1] = this.b), (r[2] = 0), (r[3] = this.c), (r[4] = this.d), (r[5] = 0), (r[6] = this.tx), (r[7] = this.ty), (r[8] = 1))
            : ((r[0] = this.a), (r[1] = this.c), (r[2] = this.tx), (r[3] = this.b), (r[4] = this.d), (r[5] = this.ty), (r[6] = 0), (r[7] = 0), (r[8] = 1)), r;
        }), (t.prototype.apply = function(t, e) {
          e = e || new a.default();
          var r = t.x, n = t.y;
          return (e.x = this.a * r + this.c * n + this.tx), (e.y =
            this.b * r + this.d * n + this.ty), e;
        }), (t.prototype.applyInverse = function(t, e) {
          e = e || new a.default();
          var r = 1 / (this.a * this.d + this.c * -this.b), n = t.x, i = t.y;
          return (e.x =
            this.d * r * n +
            -this.c * r * i +
            (this.ty * this.c - this.tx * this.d) * r), (e.y =
            this.a * r * i +
            -this.b * r * n +
            (-this.ty * this.a + this.tx * this.b) * r), e;
        }), (t.prototype.translate = function(t, e) {
          return (this.tx += t), (this.ty += e), this;
        }), (t.prototype.scale = function(t, e) {
          return (this.a *= t), (this.d *= e), (this.c *= t), (this.b *= e), (this.tx *= t), (this.ty *= e), this;
        }), (t.prototype.rotate = function(t) {
          var e = Math.cos(t),
            r = Math.sin(t),
            n = this.a,
            i = this.c,
            o = this.tx;
          return (this.a = n * e - this.b * r), (this.b =
            n * r + this.b * e), (this.c = i * e - this.d * r), (this.d =
            i * r + this.d * e), (this.tx = o * e - this.ty * r), (this.ty =
            o * r + this.ty * e), this;
        }), (t.prototype.append = function(t) {
          var e = this.a, r = this.b, n = this.c, i = this.d;
          return (this.a = t.a * e + t.b * n), (this.b =
            t.a * r + t.b * i), (this.c = t.c * e + t.d * n), (this.d =
            t.c * r + t.d * i), (this.tx =
            t.tx * e + t.ty * n + this.tx), (this.ty =
            t.tx * r + t.ty * i + this.ty), this;
        }), (t.prototype.setTransform = function(t, e, r, n, i, o, s, a, u) {
          var l = Math.sin(s),
            h = Math.cos(s),
            c = Math.cos(u),
            d = Math.sin(u),
            f = -Math.sin(a),
            p = Math.cos(a),
            v = h * i,
            y = l * i,
            g = -l * o,
            m = h * o;
          return (this.a = c * v + d * g), (this.b = c * y + d * m), (this.c =
            f * v + p * g), (this.d = f * y + p * m), (this.tx =
            t + (r * v + n * g)), (this.ty = e + (r * y + n * m)), this;
        }), (t.prototype.prepend = function(t) {
          var e = this.tx;
          if (t.a !== 1 || t.b !== 0 || t.c !== 0 || t.d !== 1) {
            var r = this.a, n = this.c;
            (this.a = r * t.a + this.b * t.c), (this.b =
              r * t.b + this.b * t.d), (this.c =
              n * t.a + this.d * t.c), (this.d = n * t.b + this.d * t.d);
          }
          return (this.tx = e * t.a + this.ty * t.c + t.tx), (this.ty =
            e * t.b + this.ty * t.d + t.ty), this;
        }), (t.prototype.decompose = function(t) {
          var e = this.a,
            r = this.b,
            n = this.c,
            i = this.d,
            o = -Math.atan2(-n, i),
            s = Math.atan2(r, e),
            a = Math.abs(o + s);
          return a < 1e-5
            ? ((t.rotation = s), e < 0 &&
                i >= 0 &&
                (t.rotation += t.rotation <= 0
                  ? Math.PI
                  : -Math.PI), (t.skew.x = t.skew.y = 0))
            : ((t.skew.x = o), (t.skew.y = s)), (t.scale.x = Math.sqrt(
            e * e + r * r,
          )), (t.scale.y = Math.sqrt(
            n * n + i * i,
          )), (t.position.x = this.tx), (t.position.y = this.ty), t;
        }), (t.prototype.invert = function() {
          var t = this.a,
            e = this.b,
            r = this.c,
            n = this.d,
            i = this.tx,
            o = t * n - e * r;
          return (this.a = n / o), (this.b = -e / o), (this.c =
            -r / o), (this.d = t / o), (this.tx =
            (r * this.ty - n * i) / o), (this.ty =
            -(t * this.ty - e * i) / o), this;
        }), (t.prototype.identity = function() {
          return (this.a = 1), (this.b = 0), (this.c = 0), (this.d = 1), (this.tx = 0), (this.ty = 0), this;
        }), (t.prototype.clone = function() {
          var e = new t();
          return (e.a = this.a), (e.b = this.b), (e.c = this.c), (e.d = this.d), (e.tx = this.tx), (e.ty = this.ty), e;
        }), (t.prototype.copy = function(t) {
          return (t.a = this.a), (t.b = this.b), (t.c = this.c), (t.d = this.d), (t.tx = this.tx), (t.ty = this.ty), t;
        }), o(t, null, [
          {
            key: 'IDENTITY',
            get() {
              return new t();
            },
          },
          {
            key: 'TEMP_MATRIX',
            get() {
              return new t();
            },
          },
        ]), t;
      })();
    e.default = u;
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i(t) {
      return t < 0 ? -1 : t > 0 ? 1 : 0;
    }
    function o() {
      for (var t = 0; t < 16; t++) {
        var e = [];
        f.push(e);
        for (var r = 0; r < 16; r++) {
          for (
            var n = i(u[t] * u[r] + h[t] * l[r]),
              o = i(l[t] * u[r] + c[t] * l[r]),
              s = i(u[t] * h[r] + h[t] * c[r]),
              p = i(l[t] * h[r] + c[t] * c[r]),
              v = 0;
            v < 16;
            v++
          ) {
            if (u[v] === n && l[v] === o && h[v] === s && c[v] === p) {
              e.push(v);
              break;
            }
          }
        }
      }
      for (var y = 0; y < 16; y++) {
        var g = new a.default();
        g.set(u[y], l[y], h[y], c[y], 0, 0), d.push(g);
      }
    }
    e.__esModule = !0;
    var s = r(16),
      a = n(s),
      u = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1],
      l = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1],
      h = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1],
      c = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1],
      d = [],
      f = [];
    o();
    var p = {
      E: 0,
      SE: 1,
      S: 2,
      SW: 3,
      W: 4,
      NW: 5,
      N: 6,
      NE: 7,
      MIRROR_VERTICAL: 8,
      MIRROR_HORIZONTAL: 12,
      uX(t) {
        return u[t];
      },
      uY(t) {
        return l[t];
      },
      vX(t) {
        return h[t];
      },
      vY(t) {
        return c[t];
      },
      inv(t) {
        return 8 & t ? 15 & t : 7 & -t;
      },
      add(t, e) {
        return f[t][e];
      },
      sub(t, e) {
        return f[t][p.inv(e)];
      },
      rotate180(t) {
        return 4 ^ t;
      },
      isSwapWidthHeight(t) {
        return (3 & t) === 2;
      },
      byDirection(t, e) {
        return 2 * Math.abs(t) <= Math.abs(e)
          ? e >= 0 ? p.S : p.N
          : 2 * Math.abs(e) <= Math.abs(t)
              ? t > 0 ? p.E : p.W
              : e > 0 ? (t > 0 ? p.SE : p.SW) : t > 0 ? p.NE : p.NW;
      },
      matrixAppendRotationInv(t, e) {
        var r = arguments.length > 2 && void 0 !== arguments[2]
          ? arguments[2]
          : 0,
          n = arguments.length > 3 && void 0 !== arguments[3]
            ? arguments[3]
            : 0,
          i = d[p.inv(e)];
        (i.tx = r), (i.ty = n), t.append(i);
      },
    };
    e.default = p;
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    e.__esModule = !0;
    var o = r(19),
      s = n(o),
      a = r(12),
      u = (function() {
        function t() {
          var e = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : 0,
            r = arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 0,
            n = arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 0;
          i(
            this,
            t,
          ), (this.x = e), (this.y = r), (this.radius = n), (this.type =
            a.SHAPES.CIRC);
        }
        return (t.prototype.clone = function() {
          return new t(this.x, this.y, this.radius);
        }), (t.prototype.contains = function(t, e) {
          if (this.radius <= 0) { return !1; }
          var r = this.radius * this.radius, n = this.x - t, i = this.y - e;
          return (n *= n), (i *= i), n + i <= r;
        }), (t.prototype.getBounds = function() {
          return new s.default(
            this.x - this.radius,
            this.y - this.radius,
            2 * this.radius,
            2 * this.radius,
          );
        }), t;
      })();
    e.default = u;
  },
  function(t, e, r) {
    'use strict';
    function n(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    e.__esModule = !0;
    var i = (function() {
        function t(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1), (n.configurable = !0), 'value' in
            n && (n.writable = !0), Object.defineProperty(t, n.key, n);
          }
        }
        return function(e, r, n) {
          return r && t(e.prototype, r), n && t(e, n), e;
        };
      })(),
      o = r(12),
      s = (function() {
        function t() {
          var e = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : 0,
            r = arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 0,
            i = arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 0,
            s = arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : 0;
          n(
            this,
            t,
          ), (this.x = e), (this.y = r), (this.width = i), (this.height = s), (this.type =
            o.SHAPES.RECT);
        }
        return (t.prototype.clone = function() {
          return new t(this.x, this.y, this.width, this.height);
        }), (t.prototype.copy = function(t) {
          return (this.x = t.x), (this.y = t.y), (this.width =
            t.width), (this.height = t.height), this;
        }), (t.prototype.contains = function(t, e) {
          return (
            !(this.width <= 0 || this.height <= 0) &&
            (t >= this.x &&
              t < this.x + this.width &&
              e >= this.y &&
              e < this.y + this.height)
          );
        }), (t.prototype.pad = function(t, e) {
          (t = t || 0), (e =
            e ||
            (e !== 0 ? t : 0)), (this.x -= t), (this.y -= e), (this.width +=
            2 * t), (this.height += 2 * e);
        }), (t.prototype.fit = function(t) {
          this.x < t.x &&
            ((this.width += this.x), this.width < 0 &&
              (this.width = 0), (this.x = t.x)), this.y < t.y &&
            ((this.height += this.y), this.height < 0 &&
              (this.height = 0), (this.y = t.y)), this.x + this.width >
            t.x + t.width &&
            ((this.width = t.width - this.x), this.width < 0 &&
              (this.width = 0)), this.y + this.height > t.y + t.height &&
            ((this.height = t.height - this.y), this.height < 0 &&
              (this.height = 0));
        }), (t.prototype.enlarge = function(t) {
          var e = Math.min(this.x, t.x),
            r = Math.max(this.x + this.width, t.x + t.width),
            n = Math.min(this.y, t.y),
            i = Math.max(this.y + this.height, t.y + t.height);
          (this.x = e), (this.width = r - e), (this.y = n), (this.height =
            i - n);
        }), i(
          t,
          [
            {
              key: 'left',
              get() {
                return this.x;
              },
            },
            {
              key: 'right',
              get() {
                return this.x + this.width;
              },
            },
            {
              key: 'top',
              get() {
                return this.y;
              },
            },
            {
              key: 'bottom',
              get() {
                return this.y + this.height;
              },
            },
          ],
          [
            {
              key: 'EMPTY',
              get() {
                return new t(0, 0, 0, 0);
              },
            },
          ],
        ), t;
      })();
    e.default = s;
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    e.__esModule = !0;
    var o = r(19),
      s = n(o),
      a = r(12),
      u = (function() {
        function t() {
          var e = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : 0,
            r = arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 0,
            n = arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 0,
            o = arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : 0;
          i(
            this,
            t,
          ), (this.x = e), (this.y = r), (this.width = n), (this.height = o), (this.type =
            a.SHAPES.ELIP);
        }
        return (t.prototype.clone = function() {
          return new t(this.x, this.y, this.width, this.height);
        }), (t.prototype.contains = function(t, e) {
          if (this.width <= 0 || this.height <= 0) { return !1; }
          var r = (t - this.x) / this.width, n = (e - this.y) / this.height;
          return (r *= r), (n *= n), r + n <= 1;
        }), (t.prototype.getBounds = function() {
          return new s.default(
            this.x - this.width,
            this.y - this.height,
            this.width,
            this.height,
          );
        }), t;
      })();
    e.default = u;
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    e.__esModule = !0;
    var o = r(14),
      s = n(o),
      a = r(12),
      u = (function() {
        function t() {
          for (var e = arguments.length, r = Array(e), n = 0; n < e; n++) { r[n] = arguments[n]; }
          if (
            (i(this, t), Array.isArray(r[0]) && (r = r[0]), r[0] instanceof
              s.default)
          ) {
            for (var o = [], u = 0, l = r.length; u < l; u++) { o.push(r[u].x, r[u].y); }
            r = o;
          }
          (this.closed = !0), (this.points = r), (this.type = a.SHAPES.POLY);
        }
        return (t.prototype.clone = function() {
          return new t(this.points.slice());
        }), (t.prototype.close = function() {
          var t = this.points;
          (t[0] === t[t.length - 2] && t[1] === t[t.length - 1]) ||
            t.push(t[0], t[1]);
        }), (t.prototype.contains = function(t, e) {
          for (
            var r = !1, n = this.points.length / 2, i = 0, o = n - 1;
            i < n;
            o = i++
          ) {
            var s = this.points[2 * i],
              a = this.points[2 * i + 1],
              u = this.points[2 * o],
              l = this.points[2 * o + 1],
              h = a > e != l > e && t < (u - s) * ((e - a) / (l - a)) + s;
            h && (r = !r);
          }
          return r;
        }), t;
      })();
    e.default = u;
  },
  function(t, e, r) {
    'use strict';
    function n(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    e.__esModule = !0;
    var i = r(12),
      o = (function() {
        function t() {
          var e = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : 0,
            r = arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 0,
            o = arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 0,
            s = arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : 0,
            a = arguments.length > 4 && void 0 !== arguments[4]
              ? arguments[4]
              : 20;
          n(
            this,
            t,
          ), (this.x = e), (this.y = r), (this.width = o), (this.height = s), (this.radius = a), (this.type =
            i.SHAPES.RREC);
        }
        return (t.prototype.clone = function() {
          return new t(this.x, this.y, this.width, this.height, this.radius);
        }), (t.prototype.contains = function(t, e) {
          if (this.width <= 0 || this.height <= 0) { return !1; }
          if (
            t >= this.x &&
            t <= this.x + this.width &&
            e >= this.y &&
            e <= this.y + this.height
          ) {
            if (
              (e >= this.y + this.radius &&
                e <= this.y + this.height - this.radius) ||
              (t >= this.x + this.radius &&
                t <= this.x + this.width - this.radius)
            ) { return !0; }
            var r = t - (this.x + this.radius),
              n = e - (this.y + this.radius),
              i = this.radius * this.radius;
            if (r * r + n * n <= i) { return !0; }
            if (
              ((r = t - (this.x + this.width - this.radius)), r * r + n * n <=
                i)
            ) { return !0; }
            if (
              ((n = e - (this.y + this.height - this.radius)), r * r + n * n <=
                i)
            ) { return !0; }
            if (((r = t - (this.x + this.radius)), r * r + n * n <= i)) { return !0; }
          }
          return !1;
        }), t;
      })();
    e.default = o;
  },
  function(t, e, r) {
    var n = {
      createContext: r(24),
      setVertexAttribArrays: r(25),
      GLBuffer: r(26),
      GLFramebuffer: r(27),
      GLShader: r(29),
      GLTexture: r(28),
      VertexArrayObject: r(38),
      shader: r(39),
    };
    typeof t !== 'undefined' && t.exports && (t.exports = n), typeof window !==
      'undefined' &&
      ((window.PIXI = window.PIXI || {}), (window.PIXI.glCore = n));
  },
  function(t, e) {
    var r = function(t, e) {
      var r = t.getContext('webgl', e) || t.getContext('experimental-webgl', e);
      if (!r) {
        throw new Error(
          'This browser does not support webGL. Try using the canvas renderer',
        );
      }
      return r;
    };
    t.exports = r;
  },
  function(t, e) {
    var r = function(t, e, r) {
      var n;
      if (r) {
        var i = r.tempAttribState, o = r.attribState;
        for (n = 0; n < i.length; n++) { i[n] = !1; }
        for (n = 0; n < e.length; n++) { i[e[n].attribute.location] = !0; }
        for (n = 0; n < o.length; n++) {
          o[n] !== i[n] &&
            ((o[n] = i[n]), r.attribState[n]
              ? t.enableVertexAttribArray(n)
              : t.disableVertexAttribArray(n));
        }
      } else {
        for (n = 0; n < e.length; n++) {
          var s = e[n];
          t.enableVertexAttribArray(s.attribute.location);
        }
      }
    };
    t.exports = r;
  },
  function(t, e) {
    var r = new ArrayBuffer(0),
      n = function(t, e, n, i) {
        (this.gl = t), (this.buffer = t.createBuffer()), (this.type =
          e || t.ARRAY_BUFFER), (this.drawType =
          i || t.STATIC_DRAW), (this.data = r), n &&
          this.upload(n), (this._updateID = 0);
      };
    (n.prototype.upload = function(t, e, r) {
      r || this.bind();
      var n = this.gl;
      (t = t || this.data), (e = e || 0), this.data.byteLength >= t.byteLength
        ? n.bufferSubData(this.type, e, t)
        : n.bufferData(this.type, t, this.drawType), (this.data = t);
    }), (n.prototype.bind = function() {
      var t = this.gl;
      t.bindBuffer(this.type, this.buffer);
    }), (n.createVertexBuffer = function(t, e, r) {
      return new n(t, t.ARRAY_BUFFER, e, r);
    }), (n.createIndexBuffer = function(t, e, r) {
      return new n(t, t.ELEMENT_ARRAY_BUFFER, e, r);
    }), (n.create = function(t, e, r, i) {
      return new n(t, e, r, i);
    }), (n.prototype.destroy = function() {
      this.gl.deleteBuffer(this.buffer);
    }), (t.exports = n);
  },
  function(t, e, r) {
    var n = r(28),
      i = function(t, e, r) {
        (this.gl = t), (this.framebuffer = t.createFramebuffer()), (this.stencil = null), (this.texture = null), (this.width =
          e || 100), (this.height = r || 100);
      };
    (i.prototype.enableTexture = function(t) {
      var e = this.gl;
      (this.texture =
        t ||
        new n(e)), this.texture.bind(), this.bind(), e.framebufferTexture2D(
        e.FRAMEBUFFER,
        e.COLOR_ATTACHMENT0,
        e.TEXTURE_2D,
        this.texture.texture,
        0,
      );
    }), (i.prototype.enableStencil = function() {
      if (!this.stencil) {
        var t = this.gl;
        (this.stencil = t.createRenderbuffer()), t.bindRenderbuffer(
          t.RENDERBUFFER,
          this.stencil,
        ), t.framebufferRenderbuffer(
          t.FRAMEBUFFER,
          t.DEPTH_STENCIL_ATTACHMENT,
          t.RENDERBUFFER,
          this.stencil,
        ), t.renderbufferStorage(
          t.RENDERBUFFER,
          t.DEPTH_STENCIL,
          this.width,
          this.height,
        );
      }
    }), (i.prototype.clear = function(t, e, r, n) {
      this.bind();
      var i = this.gl;
      i.clearColor(t, e, r, n), i.clear(
        i.COLOR_BUFFER_BIT | i.DEPTH_BUFFER_BIT,
      );
    }), (i.prototype.bind = function() {
      var t = this.gl;
      t.bindFramebuffer(t.FRAMEBUFFER, this.framebuffer);
    }), (i.prototype.unbind = function() {
      var t = this.gl;
      t.bindFramebuffer(t.FRAMEBUFFER, null);
    }), (i.prototype.resize = function(t, e) {
      var r = this.gl;
      (this.width = t), (this.height = e), this.texture &&
        this.texture.uploadData(null, t, e), this.stencil &&
        (r.bindRenderbuffer(
          r.RENDERBUFFER,
          this.stencil,
        ), r.renderbufferStorage(r.RENDERBUFFER, r.DEPTH_STENCIL, t, e));
    }), (i.prototype.destroy = function() {
      var t = this.gl;
      this.texture && this.texture.destroy(), t.deleteFramebuffer(
        this.framebuffer,
      ), (this.gl = null), (this.stencil = null), (this.texture = null);
    }), (i.createRGBA = function(t, e, r, o) {
      var s = n.fromData(t, null, e, r);
      s.enableNearestScaling(), s.enableWrapClamp();
      var a = new i(t, e, r);
      return a.enableTexture(s), a.unbind(), a;
    }), (i.createFloat32 = function(t, e, r, o) {
      var s = new n.fromData(t, o, e, r);
      s.enableNearestScaling(), s.enableWrapClamp();
      var a = new i(t, e, r);
      return a.enableTexture(s), a.unbind(), a;
    }), (t.exports = i);
  },
  function(t, e) {
    var r = function(t, e, r, n, i) {
      (this.gl = t), (this.texture = t.createTexture()), (this.mipmap = !1), (this.premultiplyAlpha = !1), (this.width =
        e || -1), (this.height = r || -1), (this.format =
        n || t.RGBA), (this.type = i || t.UNSIGNED_BYTE);
    };
    r.prototype.upload = function(t) {
      this.bind();
      var e = this.gl;
      e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha);
      var r = t.videoWidth || t.width, n = t.videoHeight || t.height;
      n !== this.height || r !== this.width
        ? e.texImage2D(e.TEXTURE_2D, 0, this.format, this.format, this.type, t)
        : e.texSubImage2D(
            e.TEXTURE_2D,
            0,
            0,
            0,
            this.format,
            this.type,
            t,
          ), (this.width = r), (this.height = n);
    };
    var n = !1;
    (r.prototype.uploadData = function(t, e, r) {
      this.bind();
      var i = this.gl;
      if (t instanceof Float32Array) {
        if (!n) {
          var o = i.getExtension('OES_texture_float');
          if (!o) { throw new Error('floating point textures not available'); }
          n = !0;
        }
        this.type = i.FLOAT;
      } else { this.type = this.type || i.UNSIGNED_BYTE; }
      i.pixelStorei(
        i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
        this.premultiplyAlpha,
      ), e !== this.width || r !== this.height
        ? i.texImage2D(
            i.TEXTURE_2D,
            0,
            this.format,
            e,
            r,
            0,
            this.format,
            this.type,
            t || null,
          )
        : i.texSubImage2D(
            i.TEXTURE_2D,
            0,
            0,
            0,
            e,
            r,
            this.format,
            this.type,
            t || null,
          ), (this.width = e), (this.height = r);
    }), (r.prototype.bind = function(t) {
      var e = this.gl;
      void 0 !== t && e.activeTexture(e.TEXTURE0 + t), e.bindTexture(
        e.TEXTURE_2D,
        this.texture,
      );
    }), (r.prototype.unbind = function() {
      var t = this.gl;
      t.bindTexture(t.TEXTURE_2D, null);
    }), (r.prototype.minFilter = function(t) {
      var e = this.gl;
      this.bind(), this.mipmap
        ? e.texParameteri(
            e.TEXTURE_2D,
            e.TEXTURE_MIN_FILTER,
            t ? e.LINEAR_MIPMAP_LINEAR : e.NEAREST_MIPMAP_NEAREST,
          )
        : e.texParameteri(
            e.TEXTURE_2D,
            e.TEXTURE_MIN_FILTER,
            t ? e.LINEAR : e.NEAREST,
          );
    }), (r.prototype.magFilter = function(t) {
      var e = this.gl;
      this.bind(), e.texParameteri(
        e.TEXTURE_2D,
        e.TEXTURE_MAG_FILTER,
        t ? e.LINEAR : e.NEAREST,
      );
    }), (r.prototype.enableMipmap = function() {
      var t = this.gl;
      this.bind(), (this.mipmap = !0), t.generateMipmap(t.TEXTURE_2D);
    }), (r.prototype.enableLinearScaling = function() {
      this.minFilter(!0), this.magFilter(!0);
    }), (r.prototype.enableNearestScaling = function() {
      this.minFilter(!1), this.magFilter(!1);
    }), (r.prototype.enableWrapClamp = function() {
      var t = this.gl;
      this.bind(), t.texParameteri(
        t.TEXTURE_2D,
        t.TEXTURE_WRAP_S,
        t.CLAMP_TO_EDGE,
      ), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE);
    }), (r.prototype.enableWrapRepeat = function() {
      var t = this.gl;
      this.bind(), t.texParameteri(
        t.TEXTURE_2D,
        t.TEXTURE_WRAP_S,
        t.REPEAT,
      ), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.REPEAT);
    }), (r.prototype.enableWrapMirrorRepeat = function() {
      var t = this.gl;
      this.bind(), t.texParameteri(
        t.TEXTURE_2D,
        t.TEXTURE_WRAP_S,
        t.MIRRORED_REPEAT,
      ), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.MIRRORED_REPEAT);
    }), (r.prototype.destroy = function() {
      var t = this.gl;
      t.deleteTexture(this.texture);
    }), (r.fromSource = function(t, e, n) {
      var i = new r(t);
      return (i.premultiplyAlpha = n || !1), i.upload(e), i;
    }), (r.fromData = function(t, e, n, i) {
      var o = new r(t);
      return o.uploadData(e, n, i), o;
    }), (t.exports = r);
  },
  function(t, e, r) {
    var n = r(30),
      i = r(31),
      o = r(34),
      s = r(36),
      a = r(37),
      u = function(t, e, r, u, l) {
        (this.gl = t), u && ((e = s(e, u)), (r = s(r, u))), (this.program = n(
          t,
          e,
          r,
          l,
        )), (this.attributes = i(t, this.program)), (this.uniformData = o(
          t,
          this.program,
        )), (this.uniforms = a(t, this.uniformData));
      };
    (u.prototype.bind = function() {
      this.gl.useProgram(this.program);
    }), (u.prototype.destroy = function() {
      (this.attributes = null), (this.uniformData = null), (this.uniforms = null);
      var t = this.gl;
      t.deleteProgram(this.program);
    }), (t.exports = u);
  },
  function(t, e) {
    var r = function(t, e, r, i) {
        var o = n(t, t.VERTEX_SHADER, e),
          s = n(t, t.FRAGMENT_SHADER, r),
          a = t.createProgram();
        if ((t.attachShader(a, o), t.attachShader(a, s), i)) { for (var u in i) { t.bindAttribLocation(a, i[u], u); } }
        return t.linkProgram(a), t.getProgramParameter(a, t.LINK_STATUS) ||
        (console.error(
          'Pixi.js Error: Could not initialize shader.',
        ), console.error(
          'gl.VALIDATE_STATUS',
          t.getProgramParameter(a, t.VALIDATE_STATUS),
        ), console.error('gl.getError()', t.getError()), t.getProgramInfoLog(a) !==
          '' &&
          console.warn(
            'Pixi.js Warning: gl.getProgramInfoLog()',
            t.getProgramInfoLog(a),
          ), t.deleteProgram(a), (a = null)), t.deleteShader(o), t.deleteShader(
        s,
      ), a;
      },
      n = function(t, e, r) {
        var n = t.createShader(e);
        return t.shaderSource(n, r), t.compileShader(n), t.getShaderParameter(
          n,
          t.COMPILE_STATUS,
        )
          ? n
          : (console.log(t.getShaderInfoLog(n)), null);
      };
    t.exports = r;
  },
  function(t, e, r) {
    var n = r(32),
      i = r(33),
      o = function(t, e) {
        for (
          var r = {}, o = t.getProgramParameter(e, t.ACTIVE_ATTRIBUTES), a = 0;
          a < o;
          a++
        ) {
          var u = t.getActiveAttrib(e, a), l = n(t, u.type);
          r[u.name] = {
            type: l,
            size: i(l),
            location: t.getAttribLocation(e, u.name),
            pointer: s,
          };
        }
        return r;
      },
      s = function(t, e, r, n) {
        gl.vertexAttribPointer(
          this.location,
          this.size,
          t || gl.FLOAT,
          e || !1,
          r || 0,
          n || 0,
        );
      };
    t.exports = o;
  },
  function(t, e) {
    var r = function(t, e) {
        if (!n) {
          var r = Object.keys(i);
          n = {};
          for (var o = 0; o < r.length; ++o) {
            var s = r[o];
            n[t[s]] = i[s];
          }
        }
        return n[e];
      },
      n = null,
      i = {
        FLOAT: 'float',
        FLOAT_VEC2: 'vec2',
        FLOAT_VEC3: 'vec3',
        FLOAT_VEC4: 'vec4',
        INT: 'int',
        INT_VEC2: 'ivec2',
        INT_VEC3: 'ivec3',
        INT_VEC4: 'ivec4',
        BOOL: 'bool',
        BOOL_VEC2: 'bvec2',
        BOOL_VEC3: 'bvec3',
        BOOL_VEC4: 'bvec4',
        FLOAT_MAT2: 'mat2',
        FLOAT_MAT3: 'mat3',
        FLOAT_MAT4: 'mat4',
        SAMPLER_2D: 'sampler2D',
      };
    t.exports = r;
  },
  function(t, e) {
    var r = function(t) {
        return n[t];
      },
      n = {
        float: 1,
        vec2: 2,
        vec3: 3,
        vec4: 4,
        int: 1,
        ivec2: 2,
        ivec3: 3,
        ivec4: 4,
        bool: 1,
        bvec2: 2,
        bvec3: 3,
        bvec4: 4,
        mat2: 4,
        mat3: 9,
        mat4: 16,
        sampler2D: 1,
      };
    t.exports = r;
  },
  function(t, e, r) {
    var n = r(32),
      i = r(35),
      o = function(t, e) {
        for (
          var r = {}, o = t.getProgramParameter(e, t.ACTIVE_UNIFORMS), s = 0;
          s < o;
          s++
        ) {
          var a = t.getActiveUniform(e, s),
            u = a.name.replace(/\[.*?\]/, ''),
            l = n(t, a.type);
          r[u] = {
            type: l,
            size: a.size,
            location: t.getUniformLocation(e, u),
            value: i(l, a.size),
          };
        }
        return r;
      };
    t.exports = o;
  },
  function(t, e) {
    var r = function(t, e) {
        switch (t) {
          case 'float':
            return 0;
          case 'vec2':
            return new Float32Array(2 * e);
          case 'vec3':
            return new Float32Array(3 * e);
          case 'vec4':
            return new Float32Array(4 * e);
          case 'int':
          case 'sampler2D':
            return 0;
          case 'ivec2':
            return new Int32Array(2 * e);
          case 'ivec3':
            return new Int32Array(3 * e);
          case 'ivec4':
            return new Int32Array(4 * e);
          case 'bool':
            return !1;
          case 'bvec2':
            return n(2 * e);
          case 'bvec3':
            return n(3 * e);
          case 'bvec4':
            return n(4 * e);
          case 'mat2':
            return new Float32Array([1, 0, 0, 1]);
          case 'mat3':
            return new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
          case 'mat4':
            return new Float32Array([
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
            ]);
        }
      },
      n = function(t) {
        for (var e = new Array(t), r = 0; r < e.length; r++) { e[r] = !1; }
        return e;
      };
    t.exports = r;
  },
  function(t, e) {
    var r = function(t, e) {
      return t.substring(0, 9) !== 'precision'
        ? `precision ${e} float;\n${t}`
        : t;
    };
    t.exports = r;
  },
  function(t, e) {
    var r = function(t, e) {
        var r = {data: {}};
        r.gl = t;
        for (var s = Object.keys(e), a = 0; a < s.length; a++) {
          var u = s[a],
            l = u.split('.'),
            h = l[l.length - 1],
            c = o(l, r),
            d = e[u];
          (c.data[h] = d), (c.gl = t), Object.defineProperty(c, h, {
            get: n(h),
            set: i(h, d),
          });
        }
        return r;
      },
      n = function(t) {
        var e = s.replace('%%', t);
        return new Function(e);
      },
      i = function(t, e) {
        var r, n = a.replace(/%%/g, t);
        return (r = e.size === 1 ? u[e.type] : l[e.type]), r &&
          (n += `\nthis.gl.${r};`), new Function('value', n);
      },
      o = function(t, e) {
        for (var r = e, n = 0; n < t.length - 1; n++) {
          var i = r[t[n]] || {data: {}};
          (r[t[n]] = i), (r = i);
        }
        return r;
      },
      s = ['return this.data.%%.value;'].join('\n'),
      a = [
        'this.data.%%.value = value;',
        'var location = this.data.%%.location;',
      ].join('\n'),
      u = {
        float: 'uniform1f(location, value)',
        vec2: 'uniform2f(location, value[0], value[1])',
        vec3: 'uniform3f(location, value[0], value[1], value[2])',
        vec4: 'uniform4f(location, value[0], value[1], value[2], value[3])',
        int: 'uniform1i(location, value)',
        ivec2: 'uniform2i(location, value[0], value[1])',
        ivec3: 'uniform3i(location, value[0], value[1], value[2])',
        ivec4: 'uniform4i(location, value[0], value[1], value[2], value[3])',
        bool: 'uniform1i(location, value)',
        bvec2: 'uniform2i(location, value[0], value[1])',
        bvec3: 'uniform3i(location, value[0], value[1], value[2])',
        bvec4: 'uniform4i(location, value[0], value[1], value[2], value[3])',
        mat2: 'uniformMatrix2fv(location, false, value)',
        mat3: 'uniformMatrix3fv(location, false, value)',
        mat4: 'uniformMatrix4fv(location, false, value)',
        sampler2D: 'uniform1i(location, value)',
      },
      l = {
        float: 'uniform1fv(location, value)',
        vec2: 'uniform2fv(location, value)',
        vec3: 'uniform3fv(location, value)',
        vec4: 'uniform4fv(location, value)',
        int: 'uniform1iv(location, value)',
        ivec2: 'uniform2iv(location, value)',
        ivec3: 'uniform3iv(location, value)',
        ivec4: 'uniform4iv(location, value)',
        bool: 'uniform1iv(location, value)',
        bvec2: 'uniform2iv(location, value)',
        bvec3: 'uniform3iv(location, value)',
        bvec4: 'uniform4iv(location, value)',
        sampler2D: 'uniform1iv(location, value)',
      };
    t.exports = r;
  },
  function(t, e, r) {
    function n(t, e) {
      if (
        ((this.nativeVaoExtension = null), n.FORCE_NATIVE ||
          (this.nativeVaoExtension =
            t.getExtension('OES_vertex_array_object') ||
            t.getExtension('MOZ_OES_vertex_array_object') ||
            t.getExtension(
              'WEBKIT_OES_vertex_array_object',
            )), (this.nativeState = e), this.nativeVaoExtension)
      ) {
        this.nativeVao = this.nativeVaoExtension.createVertexArrayOES();
        var r = t.getParameter(t.MAX_VERTEX_ATTRIBS);
        this.nativeState = {
          tempAttribState: new Array(r),
          attribState: new Array(r),
        };
      }
      (this.gl = t), (this.attributes = []), (this.indexBuffer = null), (this.dirty = !1);
    }
    var i = r(25);
    (n.prototype.constructor = n), (t.exports = n), (n.FORCE_NATIVE = !1), (n.prototype.bind = function() {
      return this.nativeVao
        ? (this.nativeVaoExtension.bindVertexArrayOES(this.nativeVao), this
            .dirty && ((this.dirty = !1), this.activate()))
        : this.activate(), this;
    }), (n.prototype.unbind = function() {
      return this.nativeVao &&
        this.nativeVaoExtension.bindVertexArrayOES(null), this;
    }), (n.prototype.activate = function() {
      for (var t = this.gl, e = null, r = 0; r < this.attributes.length; r++) {
        var n = this.attributes[r];
        e !== n.buffer &&
          (n.buffer.bind(), (e = n.buffer)), t.vertexAttribPointer(
          n.attribute.location,
          n.attribute.size,
          n.type || t.FLOAT,
          n.normalized || !1,
          n.stride || 0,
          n.start || 0,
        );
      }
      return i(t, this.attributes, this.nativeState), this.indexBuffer &&
        this.indexBuffer.bind(), this;
    }), (n.prototype.addAttribute = function(t, e, r, n, i, o) {
      return this.attributes.push({
        buffer: t,
        attribute: e,
        location: e.location,
        type: r || this.gl.FLOAT,
        normalized: n || !1,
        stride: i || 0,
        start: o || 0,
      }), (this.dirty = !0), this;
    }), (n.prototype.addIndex = function(t) {
      return (this.indexBuffer = t), (this.dirty = !0), this;
    }), (n.prototype.clear = function() {
      return this.nativeVao &&
        this.nativeVaoExtension.bindVertexArrayOES(
          this.nativeVao,
        ), (this.attributes.length = 0), (this.indexBuffer = null), this;
    }), (n.prototype.draw = function(t, e, r) {
      var n = this.gl;
      return this.indexBuffer
        ? n.drawElements(
            t,
            e || this.indexBuffer.data.length,
            n.UNSIGNED_SHORT,
            2 * (r || 0),
          )
        : n.drawArrays(t, r, e || this.getSize()), this;
    }), (n.prototype.destroy = function() {
      (this.gl = null), (this.indexBuffer = null), (this.attributes = null), (this.nativeState = null), this
        .nativeVao &&
        this.nativeVaoExtension.deleteVertexArrayOES(
          this.nativeVao,
        ), (this.nativeVaoExtension = null), (this.nativeVao = null);
    }), (n.prototype.getSize = function() {
      var t = this.attributes[0];
      return t.buffer.data.length / (t.stride / 4 || t.attribute.size);
    });
  },
  function(t, e, r) {
    t.exports = {
      compileProgram: r(30),
      defaultValue: r(35),
      extractAttributes: r(31),
      extractUniforms: r(34),
      generateUniformAccessObject: r(37),
      setPrecision: r(36),
      mapSize: r(33),
      mapType: r(32),
    };
  },
  function(t, e, r) {
    'use strict';
    function n(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    e.__esModule = !0;
    var i = r(13),
      o = (function() {
        function t() {
          n(this, t), (this.minX = 1 / 0), (this.minY =
            1 / 0), (this.maxX = -(1 / 0)), (this.maxY = -(1 /
            0)), (this.rect = null);
        }
        return (t.prototype.isEmpty = function() {
          return this.minX > this.maxX || this.minY > this.maxY;
        }), (t.prototype.clear = function() {
          this.updateID++, (this.minX = 1 / 0), (this.minY =
            1 / 0), (this.maxX = -(1 / 0)), (this.maxY = -(1 / 0));
        }), (t.prototype.getRectangle = function(t) {
          return this.minX > this.maxX || this.minY > this.maxY
            ? i.Rectangle.EMPTY
            : ((t =
                t ||
                new i.Rectangle(
                  0,
                  0,
                  1,
                  1,
                )), (t.x = this.minX), (t.y = this.minY), (t.width =
                this.maxX - this.minX), (t.height = this.maxY - this.minY), t);
        }), (t.prototype.addPoint = function(t) {
          (this.minX = Math.min(this.minX, t.x)), (this.maxX = Math.max(
            this.maxX,
            t.x,
          )), (this.minY = Math.min(this.minY, t.y)), (this.maxY = Math.max(
            this.maxY,
            t.y,
          ));
        }), (t.prototype.addQuad = function(t) {
          var e = this.minX,
            r = this.minY,
            n = this.maxX,
            i = this.maxY,
            o = t[0],
            s = t[1];
          (e = o < e ? o : e), (r = s < r ? s : r), (n = o > n
            ? o
            : n), (i = s > i ? s : i), (o = t[2]), (s = t[3]), (e = o < e
            ? o
            : e), (r = s < r ? s : r), (n = o > n ? o : n), (i = s > i
            ? s
            : i), (o = t[4]), (s = t[5]), (e = o < e ? o : e), (r = s < r
            ? s
            : r), (n = o > n ? o : n), (i = s > i ? s : i), (o = t[6]), (s =
            t[7]), (e = o < e ? o : e), (r = s < r ? s : r), (n = o > n
            ? o
            : n), (i = s > i
            ? s
            : i), (this.minX = e), (this.minY = r), (this.maxX = n), (this.maxY = i);
        }), (t.prototype.addFrame = function(t, e, r, n, i) {
          var o = t.worldTransform,
            s = o.a,
            a = o.b,
            u = o.c,
            l = o.d,
            h = o.tx,
            c = o.ty,
            d = this.minX,
            f = this.minY,
            p = this.maxX,
            v = this.maxY,
            y = s * e + u * r + h,
            g = a * e + l * r + c;
          (d = y < d ? y : d), (f = g < f ? g : f), (p = y > p
            ? y
            : p), (v = g > v ? g : v), (y = s * n + u * r + h), (g =
            a * n + l * r + c), (d = y < d ? y : d), (f = g < f
            ? g
            : f), (p = y > p ? y : p), (v = g > v ? g : v), (y =
            s * e + u * i + h), (g = a * e + l * i + c), (d = y < d
            ? y
            : d), (f = g < f ? g : f), (p = y > p ? y : p), (v = g > v
            ? g
            : v), (y = s * n + u * i + h), (g = a * n + l * i + c), (d = y < d
            ? y
            : d), (f = g < f ? g : f), (p = y > p ? y : p), (v = g > v
            ? g
            : v), (this.minX = d), (this.minY = f), (this.maxX = p), (this.maxY = v);
        }), (t.prototype.addVertices = function(t, e, r, n) {
          for (
            var i = t.worldTransform,
              o = i.a,
              s = i.b,
              a = i.c,
              u = i.d,
              l = i.tx,
              h = i.ty,
              c = this.minX,
              d = this.minY,
              f = this.maxX,
              p = this.maxY,
              v = r;
            v < n;
            v += 2
          ) {
            var y = e[v],
              g = e[v + 1],
              m = o * y + a * g + l,
              b = u * g + s * y + h;
            (c = m < c ? m : c), (d = b < d ? b : d), (f = m > f
              ? m
              : f), (p = b > p ? b : p);
          }
          (this.minX = c), (this.minY = d), (this.maxX = f), (this.maxY = p);
        }), (t.prototype.addBounds = function(t) {
          var e = this.minX, r = this.minY, n = this.maxX, i = this.maxY;
          (this.minX = t.minX < e ? t.minX : e), (this.minY = t.minY < r
            ? t.minY
            : r), (this.maxX = t.maxX > n ? t.maxX : n), (this.maxY = t.maxY > i
            ? t.maxY
            : i);
        }), (t.prototype.addBoundsMask = function(t, e) {
          var r = t.minX > e.minX ? t.minX : e.minX,
            n = t.minY > e.minY ? t.minY : e.minY,
            i = t.maxX < e.maxX ? t.maxX : e.maxX,
            o = t.maxY < e.maxY ? t.maxY : e.maxY;
          if (r <= i && n <= o) {
            var s = this.minX, a = this.minY, u = this.maxX, l = this.maxY;
            (this.minX = r < s ? r : s), (this.minY = n < a
              ? n
              : a), (this.maxX = i > u ? i : u), (this.maxY = o > l ? o : l);
          }
        }), (t.prototype.addBoundsArea = function(t, e) {
          var r = t.minX > e.x ? t.minX : e.x,
            n = t.minY > e.y ? t.minY : e.y,
            i = t.maxX < e.x + e.width ? t.maxX : e.x + e.width,
            o = t.maxY < e.y + e.height ? t.maxY : e.y + e.height;
          if (r <= i && n <= o) {
            var s = this.minX, a = this.minY, u = this.maxX, l = this.maxY;
            (this.minX = r < s ? r : s), (this.minY = n < a
              ? n
              : a), (this.maxX = i > u ? i : u), (this.maxY = o > l ? o : l);
          }
        }), t;
      })();
    e.default = o;
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    function o(t, e) {
      if (!t) {
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      }
      return !e || (typeof e !== 'object' && typeof e !== 'function') ? t : e;
    }
    function s(t, e) {
      if (typeof e !== 'function' && e !== null) {
        throw new TypeError(
          `Super expression must either be null or a function, not ${typeof e}`,
        );
      }
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {value: t, enumerable: !1, writable: !0, configurable: !0},
      })), e &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(t, e)
          : (t.__proto__ = e));
    }
    e.__esModule = !0;
    var a = (function() {
        function t(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1), (n.configurable = !0), 'value' in
            n && (n.writable = !0), Object.defineProperty(t, n.key, n);
          }
        }
        return function(e, r, n) {
          return r && t(e.prototype, r), n && t(e, n), e;
        };
      })(),
      u = r(42),
      l = n(u),
      h = r(12),
      c = r(43),
      d = n(c),
      f = r(47),
      p = n(f),
      v = r(49),
      y = n(v),
      g = r(40),
      m = n(g),
      b = r(13),
      x = (function(t) {
        function e() {
          i(this, e);
          var r = o(this, t.call(this)),
            n = d.default.TRANSFORM_MODE === h.TRANSFORM_MODE.STATIC
              ? p.default
              : y.default;
          return (r.tempDisplayObjectParent = null), (r.transform = new n()), (r.alpha = 1), (r.visible = !0), (r.renderable = !0), (r.parent = null), (r.worldAlpha = 1), (r.filterArea = null), (r._filters = null), (r._enabledFilters = null), (r._bounds = new m.default()), (r._boundsID = 0), (r._lastBoundsID = -1), (r._boundsRect = null), (r._localBoundsRect = null), (r._mask = null), r;
        }
        return s(e, t), (e.prototype.updateTransform = function() {
          this.transform.updateTransform(
            this.parent.transform,
          ), (this.worldAlpha = this.alpha * this.parent.worldAlpha), this._bounds.updateID++;
        }), (e.prototype._recursivePostUpdateTransform = function() {
          this.parent
            ? (this.parent._recursivePostUpdateTransform(), this.transform.updateTransform(
                this.parent.transform,
              ))
            : this.transform.updateTransform(
                this._tempDisplayObjectParent.transform,
              );
        }), (e.prototype.getBounds = function(t, e) {
          return t ||
            (this.parent
              ? (this._recursivePostUpdateTransform(), this.updateTransform())
              : ((this.parent = this._tempDisplayObjectParent), this.updateTransform(), (this.parent = null))), this
            ._boundsID !== this._lastBoundsID && this.calculateBounds(), e ||
            (this._boundsRect ||
              (this._boundsRect = new b.Rectangle()), (e = this
              ._boundsRect)), this._bounds.getRectangle(e);
        }), (e.prototype.getLocalBounds = function(t) {
          var e = this.transform, r = this.parent;
          (this.parent = null), (this.transform = this._tempDisplayObjectParent.transform), t ||
            (this._localBoundsRect ||
              (this._localBoundsRect = new b.Rectangle()), (t = this
              ._localBoundsRect));
          var n = this.getBounds(!1, t);
          return (this.parent = r), (this.transform = e), n;
        }), (e.prototype.toGlobal = function(t, e) {
          var r =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          return r ||
            (this._recursivePostUpdateTransform(), this.parent
              ? this.displayObjectUpdateTransform()
              : ((this.parent = this._tempDisplayObjectParent), this.displayObjectUpdateTransform(), (this.parent = null))), this.worldTransform.apply(
            t,
            e,
          );
        }), (e.prototype.toLocal = function(t, e, r, n) {
          return e && (t = e.toGlobal(t, r, n)), n ||
            (this._recursivePostUpdateTransform(), this.parent
              ? this.displayObjectUpdateTransform()
              : ((this.parent = this._tempDisplayObjectParent), this.displayObjectUpdateTransform(), (this.parent = null))), this.worldTransform.applyInverse(
            t,
            r,
          );
        }), (e.prototype.renderWebGL = function(
          t,
        ) {}), (e.prototype.renderCanvas = function(
          t,
        ) {}), (e.prototype.setParent = function(t) {
          if (!t || !t.addChild) { throw new Error('setParent: Argument must be a Container'); }
          return t.addChild(this), t;
        }), (e.prototype.setTransform = function() {
          var t = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : 0,
            e = arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 0,
            r = arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 1,
            n = arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : 1,
            i = arguments.length > 4 && void 0 !== arguments[4]
              ? arguments[4]
              : 0,
            o = arguments.length > 5 && void 0 !== arguments[5]
              ? arguments[5]
              : 0,
            s = arguments.length > 6 && void 0 !== arguments[6]
              ? arguments[6]
              : 0,
            a = arguments.length > 7 && void 0 !== arguments[7]
              ? arguments[7]
              : 0,
            u = arguments.length > 8 && void 0 !== arguments[8]
              ? arguments[8]
              : 0;
          return (this.position.x = t), (this.position.y = e), (this.scale.x = r
            ? r
            : 1), (this.scale.y = n
            ? n
            : 1), (this.rotation = i), (this.skew.x = o), (this.skew.y = s), (this.pivot.x = a), (this.pivot.y = u), this;
        }), (e.prototype.destroy = function() {
          this.removeAllListeners(), this.parent &&
            this.parent.removeChild(
              this,
            ), (this.transform = null), (this.parent = null), (this._bounds = null), (this._currentBounds = null), (this._mask = null), (this.filterArea = null), (this.interactive = !1), (this.interactiveChildren = !1);
        }), a(e, [
          {
            key: '_tempDisplayObjectParent',
            get() {
              return this.tempDisplayObjectParent === null &&
                (this.tempDisplayObjectParent = new e()), this
                .tempDisplayObjectParent;
            },
          },
          {
            key: 'x',
            get() {
              return this.position.x;
            },
            set(t) {
              this.transform.position.x = t;
            },
          },
          {
            key: 'y',
            get() {
              return this.position.y;
            },
            set(t) {
              this.transform.position.y = t;
            },
          },
          {
            key: 'worldTransform',
            get() {
              return this.transform.worldTransform;
            },
          },
          {
            key: 'localTransform',
            get() {
              return this.transform.localTransform;
            },
          },
          {
            key: 'position',
            get() {
              return this.transform.position;
            },
            set(t) {
              this.transform.position.copy(t);
            },
          },
          {
            key: 'scale',
            get() {
              return this.transform.scale;
            },
            set(t) {
              this.transform.scale.copy(t);
            },
          },
          {
            key: 'pivot',
            get() {
              return this.transform.pivot;
            },
            set(t) {
              this.transform.pivot.copy(t);
            },
          },
          {
            key: 'skew',
            get() {
              return this.transform.skew;
            },
            set(t) {
              this.transform.skew.copy(t);
            },
          },
          {
            key: 'rotation',
            get() {
              return this.transform.rotation;
            },
            set(t) {
              this.transform.rotation = t;
            },
          },
          {
            key: 'worldVisible',
            get() {
              var t = this;
              do {
                if (!t.visible) { return !1; }
                t = t.parent;
              } while (t);
              return !0;
            },
          },
          {
            key: 'mask',
            get() {
              return this._mask;
            },
            set(t) {
              this._mask && (this._mask.renderable = !0), (this._mask = t), this
                ._mask && (this._mask.renderable = !1);
            },
          },
          {
            key: 'filters',
            get() {
              return this._filters && this._filters.slice();
            },
            set(t) {
              this._filters = t && t.slice();
            },
          },
        ]), e;
      })(l.default);
    (e.default = x), (x.prototype.displayObjectUpdateTransform =
      x.prototype.updateTransform);
  },
  function(t, e, r) {
    'use strict';
    function n() {}
    function i(t, e, r) {
      (this.fn = t), (this.context = e), (this.once = r || !1);
    }
    function o() {
      (this._events = new n()), (this._eventsCount = 0);
    }
    var s = Object.prototype.hasOwnProperty, a = '~';
    Object.create &&
      ((n.prototype = Object.create(null)), new n().__proto__ ||
        (a = !1)), (o.prototype.eventNames = function() {
          var t, e, r = [];
          if (this._eventsCount === 0) { return r; }
          for (e in (t = this._events)) { s.call(t, e) && r.push(a ? e.slice(1) : e); }
          return Object.getOwnPropertySymbols
        ? r.concat(Object.getOwnPropertySymbols(t))
        : r;
        }), (o.prototype.listeners = function(t, e) {
          var r = a ? a + t : t, n = this._events[r];
          if (e) { return Boolean(n); }
          if (!n) { return []; }
          if (n.fn) { return [n.fn]; }
          for (var i = 0, o = n.length, s = new Array(o); i < o; i++) { s[i] = n[i].fn; }
          return s;
        }), (o.prototype.emit = function(t, e, r, n, i, o) {
          var s = a ? a + t : t;
          if (!this._events[s]) { return !1; }
          var u, l, h = this._events[s], c = arguments.length;
          if (h.fn) {
            switch ((h.once && this.removeListener(t, h.fn, void 0, !0), c)) {
              case 1:
                return h.fn.call(h.context), !0;
              case 2:
                return h.fn.call(h.context, e), !0;
              case 3:
                return h.fn.call(h.context, e, r), !0;
              case 4:
                return h.fn.call(h.context, e, r, n), !0;
              case 5:
                return h.fn.call(h.context, e, r, n, i), !0;
              case 6:
                return h.fn.call(h.context, e, r, n, i, o), !0;
            }
            for ((l = 1), (u = new Array(c - 1)); l < c; l++) { u[l - 1] = arguments[l]; }
            h.fn.apply(h.context, u);
          } else {
            var d, f = h.length;
            for (l = 0; l < f; l++) {
              switch ((h[l].once &&
            this.removeListener(t, h[l].fn, void 0, !0), c)) {
                case 1:
                  h[l].fn.call(h[l].context);
                  break;
                case 2:
                  h[l].fn.call(h[l].context, e);
                  break;
                case 3:
                  h[l].fn.call(h[l].context, e, r);
                  break;
                case 4:
                  h[l].fn.call(h[l].context, e, r, n);
                  break;
                default:
                  if (!u) {
                    for ((d = 1), (u = new Array(c - 1)); d < c; d++) { u[d - 1] = arguments[d]; }
                  }
                  h[l].fn.apply(h[l].context, u);
              }
            }
          }
          return !0;
        }), (o.prototype.on = function(t, e, r) {
          var n = new i(e, r || this), o = a ? a + t : t;
          return this._events[o]
        ? this._events[o].fn
            ? (this._events[o] = [this._events[o], n])
            : this._events[o].push(n)
        : ((this._events[o] = n), this._eventsCount++), this;
        }), (o.prototype.once = function(t, e, r) {
          var n = new i(e, r || this, !0), o = a ? a + t : t;
          return this._events[o]
        ? this._events[o].fn
            ? (this._events[o] = [this._events[o], n])
            : this._events[o].push(n)
        : ((this._events[o] = n), this._eventsCount++), this;
        }), (o.prototype.removeListener = function(t, e, r, i) {
          var o = a ? a + t : t;
          if (!this._events[o]) { return this; }
          if (!e) {
            return --this._eventsCount === 0
          ? (this._events = new n())
          : delete this._events[o], this;
          }
          var s = this._events[o];
          if (s.fn) {
            s.fn !== e ||
          (i && !s.once) ||
          (r && s.context !== r) ||
          (--this._eventsCount === 0
            ? (this._events = new n())
            : delete this._events[o]);
          } else {
            for (var u = 0, l = [], h = s.length; u < h; u++) {
              (s[u].fn !== e || (i && !s[u].once) || (r && s[u].context !== r)) &&
            l.push(s[u]);
            }
            l.length
          ? (this._events[o] = l.length === 1 ? l[0] : l)
          : --this._eventsCount === 0
              ? (this._events = new n())
              : delete this._events[o];
          }
          return this;
        }), (o.prototype.removeAllListeners = function(t) {
          var e;
          return t
        ? ((e = a ? a + t : t), this._events[e] &&
            (--this._eventsCount === 0
              ? (this._events = new n())
              : delete this._events[e]))
        : ((this._events = new n()), (this._eventsCount = 0)), this;
        }), (o.prototype.off =
      o.prototype.removeListener), (o.prototype.addListener =
      o.prototype.on), (o.prototype.setMaxListeners = function() {
        return this;
      }), (o.prefixed = a), (o.EventEmitter = o), (t.exports = o);
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    e.__esModule = !0;
    var i = r(44), o = n(i), s = r(46), a = n(s);
    e.default = {
      TARGET_FPMS: 0.06,
      MIPMAP_TEXTURES: !0,
      RESOLUTION: 1,
      FILTER_RESOLUTION: 1,
      SPRITE_MAX_TEXTURES: (0, o.default)(32),
      SPRITE_BATCH_SIZE: 4096,
      RETINA_PREFIX: /@(.+)x/,
      RENDER_OPTIONS: {
        view: null,
        antialias: !1,
        forceFXAA: !1,
        autoResize: !1,
        transparent: !1,
        backgroundColor: 0,
        clearBeforeRender: !0,
        preserveDrawingBuffer: !1,
        roundPixels: !1,
      },
      TRANSFORM_MODE: 0,
      GC_MODE: 0,
      GC_MAX_IDLE: 3600,
      GC_MAX_CHECK_COUNT: 600,
      WRAP_MODE: 0,
      SCALE_MODE: 0,
      PRECISION: 'mediump',
      CAN_UPLOAD_SAME_BUFFER: (0, a.default)(),
    };
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i(t) {
      return s.default.tablet || s.default.phone ? 4 : t;
    }
    (e.__esModule = !0), (e.default = i);
    var o = r(45), s = n(o);
  },
  function(t, e, r) {
    var n,
      i,
      o; /**
	 * isMobile.js v0.4.0
	 *
	 * A simple library to detect Apple phones and tablets,
	 * Android phones and tablets, other mobile devices (like blackberry, mini-opera and windows phone),
	 * and any kind of seven inch device, via user agent sniffing.
	 *
	 * @author: Kai Mallea (kmallea@gmail.com)
	 *
	 * @license: http://creativecommons.org/publicdomain/zero/1.0/
	 */
    !(function(r) {
      var s = /iPhone/i,
        a = /iPod/i,
        u = /iPad/i,
        l = /(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,
        h = /Android/i,
        c = /(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,
        d = /(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,
        f = /IEMobile/i,
        p = /(?=.*\bWindows\b)(?=.*\bARM\b)/i,
        v = /BlackBerry/i,
        y = /BB10/i,
        g = /Opera Mini/i,
        m = /(CriOS|Chrome)(?=.*\bMobile\b)/i,
        b = /(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,
        x = new RegExp('(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)', 'i'),
        _ = function(t, e) {
          return t.test(e);
        },
        w = function(t) {
          var e = t || navigator.userAgent, r = e.split('[FBAN');
          if (
            (typeof r[1] !== 'undefined' && (e = r[0]), (r = e.split(
              'Twitter',
            )), typeof r[1] !== 'undefined' && (e = r[0]), (this.apple = {
              phone: _(s, e),
              ipod: _(a, e),
              tablet: !_(s, e) && _(u, e),
              device: _(s, e) || _(a, e) || _(u, e),
            }), (this.amazon = {
              phone: _(c, e),
              tablet: !_(c, e) && _(d, e),
              device: _(c, e) || _(d, e),
            }), (this.android = {
              phone: _(c, e) || _(l, e),
              tablet: !_(c, e) && !_(l, e) && (_(d, e) || _(h, e)),
              device: _(c, e) || _(d, e) || _(l, e) || _(h, e),
            }), (this.windows = {
              phone: _(f, e),
              tablet: _(p, e),
              device: _(f, e) || _(p, e),
            }), (this.other = {
              blackberry: _(v, e),
              blackberry10: _(y, e),
              opera: _(g, e),
              firefox: _(b, e),
              chrome: _(m, e),
              device: _(v, e) || _(y, e) || _(g, e) || _(b, e) || _(m, e),
            }), (this.seven_inch = _(x, e)), (this.any =
              this.apple.device ||
              this.android.device ||
              this.windows.device ||
              this.other.device ||
              this.seven_inch), (this.phone =
              this.apple.phone ||
              this.android.phone ||
              this.windows.phone), (this.tablet =
              this.apple.tablet ||
              this.android.tablet ||
              this.windows.tablet), typeof window === 'undefined')
          ) { return this; }
        },
        T = function() {
          var t = new w();
          return (t.Class = w), t;
        };
      typeof t !== 'undefined' && t.exports && typeof window === 'undefined'
        ? (t.exports = w)
        : typeof t !== 'undefined' && t.exports && typeof window !== 'undefined'
            ? (t.exports = T())
            : ((i = []), (n = r.isMobile = T()), (o = typeof n === 'function'
                ? n.apply(e, i)
                : n), !(void 0 !== o && (t.exports = o)));
    })(this);
  },
  function(t, e) {
    'use strict';
    function r() {
      var t =
        Boolean(navigator.platform) && /iPad|iPhone|iPod/.test(navigator.platform);
      return !t;
    }
    (e.__esModule = !0), (e.default = r);
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    function o(t, e) {
      if (!t) {
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      }
      return !e || (typeof e !== 'object' && typeof e !== 'function') ? t : e;
    }
    function s(t, e) {
      if (typeof e !== 'function' && e !== null) {
        throw new TypeError(
          `Super expression must either be null or a function, not ${typeof e}`,
        );
      }
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {value: t, enumerable: !1, writable: !0, configurable: !0},
      })), e &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(t, e)
          : (t.__proto__ = e));
    }
    e.__esModule = !0;
    var a = (function() {
        function t(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1), (n.configurable = !0), 'value' in
            n && (n.writable = !0), Object.defineProperty(t, n.key, n);
          }
        }
        return function(e, r, n) {
          return r && t(e.prototype, r), n && t(e, n), e;
        };
      })(),
      u = r(13),
      l = r(48),
      h = n(l),
      c = (function(t) {
        function e() {
          i(this, e);
          var r = o(this, t.call(this));
          return (r.position = new u.ObservablePoint(
            r.onChange,
            r,
            0,
            0,
          )), (r.scale = new u.ObservablePoint(
            r.onChange,
            r,
            1,
            1,
          )), (r.pivot = new u.ObservablePoint(
            r.onChange,
            r,
            0,
            0,
          )), (r.skew = new u.ObservablePoint(
            r.updateSkew,
            r,
            0,
            0,
          )), (r._rotation = 0), (r._cx = 1), (r._sx = 0), (r._cy = 0), (r._sy = 1), (r._localID = 0), (r._currentLocalID = 0), r;
        }
        return s(e, t), (e.prototype.onChange = function() {
          this._localID++;
        }), (e.prototype.updateSkew = function() {
          (this._cx = Math.cos(
            this._rotation + this.skew._y,
          )), (this._sx = Math.sin(
            this._rotation + this.skew._y,
          )), (this._cy = -Math.sin(
            this._rotation - this.skew._x,
          )), (this._sy = Math.cos(this._rotation - this.skew._x)), this._localID++;
        }), (e.prototype.updateLocalTransform = function() {
          var t = this.localTransform;
          this._localID !== this._currentLocalID &&
            ((t.a = this._cx * this.scale._x), (t.b =
              this._sx * this.scale._x), (t.c =
              this._cy * this.scale._y), (t.d =
              this._sy * this.scale._y), (t.tx =
              this.position._x -
              (this.pivot._x * t.a + this.pivot._y * t.c)), (t.ty =
              this.position._y -
              (this.pivot._x * t.b +
                this.pivot._y *
                  t.d)), (this._currentLocalID = this._localID), (this._parentID = -1));
        }), (e.prototype.updateTransform = function(t) {
          var e = this.localTransform;
          if (
            (this._localID !== this._currentLocalID &&
              ((e.a = this._cx * this.scale._x), (e.b =
                this._sx * this.scale._x), (e.c =
                this._cy * this.scale._y), (e.d =
                this._sy * this.scale._y), (e.tx =
                this.position._x -
                (this.pivot._x * e.a + this.pivot._y * e.c)), (e.ty =
                this.position._y -
                (this.pivot._x * e.b +
                  this.pivot._y *
                    e.d)), (this._currentLocalID = this._localID), (this._parentID = -1)), this
              ._parentID !== t._worldID)
          ) {
            var r = t.worldTransform, n = this.worldTransform;
            (n.a = e.a * r.a + e.b * r.c), (n.b = e.a * r.b + e.b * r.d), (n.c =
              e.c * r.a + e.d * r.c), (n.d = e.c * r.b + e.d * r.d), (n.tx =
              e.tx * r.a + e.ty * r.c + r.tx), (n.ty =
              e.tx * r.b + e.ty * r.d + r.ty), (this._parentID =
              t._worldID), this._worldID++;
          }
        }), (e.prototype.setFromMatrix = function(t) {
          t.decompose(this), this._localID++;
        }), a(e, [
          {
            key: 'rotation',
            get() {
              return this._rotation;
            },
            set(t) {
              (this._rotation = t), this.updateSkew();
            },
          },
        ]), e;
      })(h.default);
    e.default = c;
  },
  function(t, e, r) {
    'use strict';
    function n(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    e.__esModule = !0;
    var i = r(13),
      o = (function() {
        function t() {
          n(
            this,
            t,
          ), (this.worldTransform = new i.Matrix()), (this.localTransform = new i.Matrix()), (this._worldID = 0), (this._parentID = 0);
        }
        return (t.prototype.updateLocalTransform = function() {}), (t.prototype.updateTransform = function(
          t,
        ) {
          var e = t.worldTransform,
            r = this.worldTransform,
            n = this.localTransform;
          (r.a = n.a * e.a + n.b * e.c), (r.b = n.a * e.b + n.b * e.d), (r.c =
            n.c * e.a + n.d * e.c), (r.d = n.c * e.b + n.d * e.d), (r.tx =
            n.tx * e.a + n.ty * e.c + e.tx), (r.ty =
            n.tx * e.b + n.ty * e.d + e.ty), this._worldID++;
        }), t;
      })();
    (e.default = o), (o.prototype.updateWorldTransform =
      o.prototype.updateTransform), (o.IDENTITY = new o());
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    function o(t, e) {
      if (!t) {
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      }
      return !e || (typeof e !== 'object' && typeof e !== 'function') ? t : e;
    }
    function s(t, e) {
      if (typeof e !== 'function' && e !== null) {
        throw new TypeError(
          `Super expression must either be null or a function, not ${typeof e}`,
        );
      }
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {value: t, enumerable: !1, writable: !0, configurable: !0},
      })), e &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(t, e)
          : (t.__proto__ = e));
    }
    e.__esModule = !0;
    var a = (function() {
        function t(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1), (n.configurable = !0), 'value' in
            n && (n.writable = !0), Object.defineProperty(t, n.key, n);
          }
        }
        return function(e, r, n) {
          return r && t(e.prototype, r), n && t(e, n), e;
        };
      })(),
      u = r(13),
      l = r(48),
      h = n(l),
      c = (function(t) {
        function e() {
          i(this, e);
          var r = o(this, t.call(this));
          return (r.position = new u.Point(0, 0)), (r.scale = new u.Point(
            1,
            1,
          )), (r.skew = new u.ObservablePoint(
            r.updateSkew,
            r,
            0,
            0,
          )), (r.pivot = new u.Point(
            0,
            0,
          )), (r._rotation = 0), (r._cx = 1), (r._sx = 0), (r._cy = 0), (r._sy = 1), r;
        }
        return s(e, t), (e.prototype.updateSkew = function() {
          (this._cx = Math.cos(
            this._rotation + this.skew._y,
          )), (this._sx = Math.sin(
            this._rotation + this.skew._y,
          )), (this._cy = -Math.sin(
            this._rotation - this.skew._x,
          )), (this._sy = Math.cos(this._rotation - this.skew._x));
        }), (e.prototype.updateLocalTransform = function() {
          var t = this.localTransform;
          (t.a = this._cx * this.scale.x), (t.b =
            this._sx * this.scale.x), (t.c = this._cy * this.scale.y), (t.d =
            this._sy * this.scale.y), (t.tx =
            this.position.x -
            (this.pivot.x * t.a + this.pivot.y * t.c)), (t.ty =
            this.position.y - (this.pivot.x * t.b + this.pivot.y * t.d));
        }), (e.prototype.updateTransform = function(t) {
          var e = this.localTransform;
          (e.a = this._cx * this.scale.x), (e.b =
            this._sx * this.scale.x), (e.c = this._cy * this.scale.y), (e.d =
            this._sy * this.scale.y), (e.tx =
            this.position.x -
            (this.pivot.x * e.a + this.pivot.y * e.c)), (e.ty =
            this.position.y - (this.pivot.x * e.b + this.pivot.y * e.d));
          var r = t.worldTransform, n = this.worldTransform;
          (n.a = e.a * r.a + e.b * r.c), (n.b = e.a * r.b + e.b * r.d), (n.c =
            e.c * r.a + e.d * r.c), (n.d = e.c * r.b + e.d * r.d), (n.tx =
            e.tx * r.a + e.ty * r.c + r.tx), (n.ty =
            e.tx * r.b + e.ty * r.d + r.ty), this._worldID++;
        }), (e.prototype.setFromMatrix = function(t) {
          t.decompose(this);
        }), a(e, [
          {
            key: 'rotation',
            get() {
              return this._rotation;
            },
            set(t) {
              (this._rotation = t), this.updateSkew();
            },
          },
        ]), e;
      })(h.default);
    e.default = c;
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    function o(t, e) {
      if (!t) {
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      }
      return !e || (typeof e !== 'object' && typeof e !== 'function') ? t : e;
    }
    function s(t, e) {
      if (typeof e !== 'function' && e !== null) {
        throw new TypeError(
          `Super expression must either be null or a function, not ${typeof e}`,
        );
      }
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {value: t, enumerable: !1, writable: !0, configurable: !0},
      })), e &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(t, e)
          : (t.__proto__ = e));
    }
    e.__esModule = !0;
    var a = (function() {
        function t(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1), (n.configurable = !0), 'value' in
            n && (n.writable = !0), Object.defineProperty(t, n.key, n);
          }
        }
        return function(e, r, n) {
          return r && t(e.prototype, r), n && t(e, n), e;
        };
      })(),
      u = r(51),
      l = r(41),
      h = n(l),
      c = (function(t) {
        function e() {
          i(this, e);
          var r = o(this, t.call(this));
          return (r.children = []), r;
        }
        return s(
          e,
          t,
        ), (e.prototype.onChildrenChange = function() {}), (e.prototype.addChild = function(
          t,
        ) {
          var e = arguments.length;
          if (e > 1) { for (var r = 0; r < e; r++) { this.addChild(arguments[r]); } } else {
            t.parent &&
              t.parent.removeChild(
                t,
              ), (t.parent = this), (this.transform._parentID = -1), this._boundsID++, this.children.push(t), this.onChildrenChange(
              this.children.length - 1,
            ), t.emit('added', this);
          }
          return t;
        }), (e.prototype.addChildAt = function(t, e) {
          if (e < 0 || e > this.children.length) {
            throw new Error(
              `${t
                }addChildAt: The index ${
                e
                } supplied is out of bounds ${
                this.children.length}`,
            );
          }
          return t.parent &&
            t.parent.removeChild(t), (t.parent = this), this.children.splice(
            e,
            0,
            t,
          ), this.onChildrenChange(e), t.emit('added', this), t;
        }), (e.prototype.swapChildren = function(t, e) {
          if (t !== e) {
            var r = this.getChildIndex(t), n = this.getChildIndex(e);
            (this.children[r] = e), (this.children[
              n
            ] = t), this.onChildrenChange(r < n ? r : n);
          }
        }), (e.prototype.getChildIndex = function(t) {
          var e = this.children.indexOf(t);
          if (e === -1) {
            throw new Error(
              'The supplied DisplayObject must be a child of the caller',
            );
          }
          return e;
        }), (e.prototype.setChildIndex = function(t, e) {
          if (e < 0 || e >= this.children.length) { throw new Error('The supplied index is out of bounds'); }
          var r = this.getChildIndex(t);
          (0, u.removeItems)(this.children, r, 1), this.children.splice(
            e,
            0,
            t,
          ), this.onChildrenChange(e);
        }), (e.prototype.getChildAt = function(t) {
          if (t < 0 || t >= this.children.length) { throw new Error(`getChildAt: Index (${t}) does not exist.`); }
          return this.children[t];
        }), (e.prototype.removeChild = function(t) {
          var e = arguments.length;
          if (e > 1) { for (var r = 0; r < e; r++) { this.removeChild(arguments[r]); } } else {
            var n = this.children.indexOf(t);
            if (n === -1) { return null; }
            (t.parent = null), (0, u.removeItems)(
              this.children,
              n,
              1,
            ), (this.transform._parentID = -1), this._boundsID++, this.onChildrenChange(n), t.emit('removed', this);
          }
          return t;
        }), (e.prototype.removeChildAt = function(t) {
          var e = this.getChildAt(t);
          return (e.parent = null), (0, u.removeItems)(
            this.children,
            t,
            1,
          ), this.onChildrenChange(t), e.emit('removed', this), e;
        }), (e.prototype.removeChildren = function() {
          var t = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : 0,
            e = arguments[1],
            r = t,
            n = typeof e === 'number' ? e : this.children.length,
            i = n - r,
            o = void 0;
          if (i > 0 && i <= n) {
            o = this.children.splice(r, i);
            for (var s = 0; s < o.length; ++s) { o[s].parent = null; }
            this.onChildrenChange(t);
            for (var a = 0; a < o.length; ++a) { o[a].emit('removed', this); }
            return o;
          }
          if (i === 0 && this.children.length === 0) { return []; }
          throw new RangeError(
            'removeChildren: numeric values are outside the acceptable range.',
          );
        }), (e.prototype.updateTransform = function() {
          this._boundsID++, this.transform.updateTransform(
            this.parent.transform,
          ), (this.worldAlpha = this.alpha * this.parent.worldAlpha);
          for (var t = 0, e = this.children.length; t < e; ++t) {
            var r = this.children[t];
            r.visible && r.updateTransform();
          }
        }), (e.prototype.calculateBounds = function() {
          this._bounds.clear(), this._calculateBounds();
          for (var t = 0; t < this.children.length; t++) {
            var e = this.children[t];
            e.visible &&
              e.renderable &&
              (e.calculateBounds(), e._mask
                ? (e._mask.calculateBounds(), this._bounds.addBoundsMask(
                    e._bounds,
                    e._mask._bounds,
                  ))
                : e.filterArea
                    ? this._bounds.addBoundsArea(e._bounds, e.filterArea)
                    : this._bounds.addBounds(e._bounds));
          }
          this._lastBoundsID = this._boundsID;
        }), (e.prototype._calculateBounds = function() {}), (e.prototype.renderWebGL = function(
          t,
        ) {
          if (this.visible && !(this.worldAlpha <= 0) && this.renderable) {
            if (this._mask || this._filters) { this.renderAdvancedWebGL(t); } else {
              this._renderWebGL(t);
              for (var e = 0, r = this.children.length; e < r; ++e) { this.children[e].renderWebGL(t); }
            }
          }
        }), (e.prototype.renderAdvancedWebGL = function(t) {
          t.flush();
          var e = this._filters, r = this._mask;
          if (e) {
            this._enabledFilters ||
              (this._enabledFilters = []), (this._enabledFilters.length = 0);
            for (var n = 0; n < e.length; n++) { e[n].enabled && this._enabledFilters.push(e[n]); }
            this._enabledFilters.length &&
              t.filterManager.pushFilter(this, this._enabledFilters);
          }
          r && t.maskManager.pushMask(this, this._mask), this._renderWebGL(t);
          for (var i = 0, o = this.children.length; i < o; i++) { this.children[i].renderWebGL(t); }
          t.flush(), r && t.maskManager.popMask(this, this._mask), e &&
            this._enabledFilters &&
            this._enabledFilters.length &&
            t.filterManager.popFilter();
        }), (e.prototype._renderWebGL = function(
          t,
        ) {}), (e.prototype._renderCanvas = function(
          t,
        ) {}), (e.prototype.renderCanvas = function(t) {
          if (this.visible && !(this.worldAlpha <= 0) && this.renderable) {
            this._mask &&
              t.maskManager.pushMask(this._mask), this._renderCanvas(t);
            for (var e = 0, r = this.children.length; e < r; ++e) { this.children[e].renderCanvas(t); }
            this._mask && t.maskManager.popMask(t);
          }
        }), (e.prototype.destroy = function(e) {
          t.prototype.destroy.call(this);
          var r = typeof e === 'boolean' ? e : e && e.children,
            n = this.removeChildren(0, this.children.length);
          if (r) { for (var i = 0; i < n.length; ++i) { n[i].destroy(e); } }
        }), a(e, [
          {
            key: 'width',
            get() {
              return this.scale.x * this.getLocalBounds().width;
            },
            set(t) {
              var e = this.getLocalBounds().width;
              e !== 0
                ? (this.scale.x = t / e)
                : (this.scale.x = 1), (this._width = t);
            },
          },
          {
            key: 'height',
            get() {
              return this.scale.y * this.getLocalBounds().height;
            },
            set(t) {
              var e = this.getLocalBounds().height;
              e !== 0
                ? (this.scale.y = t / e)
                : (this.scale.y = 1), (this._height = t);
            },
          },
        ]), e;
      })(h.default);
    (e.default = c), (c.prototype.containerUpdateTransform =
      c.prototype.updateTransform);
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      if (t && t.__esModule) { return t; }
      var e = {};
      if (t != null) {
        for (var r in t) { Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); }
      }
      return (e.default = t), e;
    }
    function i(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function o() {
      return ++O;
    }
    function s(t, e) {
      return (e = e || []), (e[0] = ((t >> 16) & 255) / 255), (e[1] =
        ((t >> 8) & 255) / 255), (e[2] = (255 & t) / 255), e;
    }
    function a(t) {
      return (t = t.toString(16)), (t =
        '000000'.substr(0, 6 - t.length) + t), `#${t}`;
    }
    function u(t) {
      return ((255 * t[0]) << 16) + ((255 * t[1]) << 8) + 255 * t[2];
    }
    function l(t, e) {
      var r = x.default.RETINA_PREFIX.exec(t);
      return r ? parseFloat(r[1]) : void 0 !== e ? e : 1;
    }
    function h(t) {
      var e = m.DATA_URI.exec(t);
      if (e) {
        return {
          mediaType: e[1] ? e[1].toLowerCase() : void 0,
          subType: e[2] ? e[2].toLowerCase() : void 0,
          encoding: e[3] ? e[3].toLowerCase() : void 0,
          data: e[4],
        };
      }
    }
    function c(t) {
      var e = m.URL_FILE_EXTENSION.exec(t);
      if (e) { return e[1].toLowerCase(); }
    }
    function d(t) {
      var e = m.SVG_SIZE.exec(t), r = {};
      return e &&
        ((r[e[1]] = Math.round(parseFloat(e[3]))), (r[e[5]] = Math.round(
          parseFloat(e[7]),
        ))), r;
    }
    function f() {
      M = !0;
    }
    function p(t) {
      if (!M) {
        if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
          var e = [
            `\n %c %c %c Pixi.js ${
              m.VERSION
              } - ✰ ${
              t
              } ✰  %c  %c  http://www.pixijs.com/  %c %c ♥%c♥%c♥ \n\n`,
            'background: #ff66a5; padding:5px 0;',
            'background: #ff66a5; padding:5px 0;',
            'color: #ff66a5; background: #030307; padding:5px 0;',
            'background: #ff66a5; padding:5px 0;',
            'background: #ffc3dc; padding:5px 0;',
            'background: #ff66a5; padding:5px 0;',
            'color: #ff2424; background: #fff; padding:5px 0;',
            'color: #ff2424; background: #fff; padding:5px 0;',
            'color: #ff2424; background: #fff; padding:5px 0;',
          ];
          window.console.log.apply(console, e);
        } else {
          window.console &&
            window.console.log(
              `Pixi.js ${m.VERSION} - ${t} - http://www.pixijs.com/`,
            );
        }
        M = !0;
      }
    }
    function v() {
      var t = {stencil: !0, failIfMajorPerformanceCaveat: !0};
      try {
        if (!window.WebGLRenderingContext) { return !1; }
        var e = document.createElement('canvas'),
          r = e.getContext('webgl', t) || e.getContext('experimental-webgl', t),
          n = !(!r || !r.getContextAttributes().stencil);
        if (r) {
          var i = r.getExtension('WEBGL_lose_context');
          i && i.loseContext();
        }
        return (r = null), n;
      } catch (t) {
        return !1;
      }
    }
    function y(t) {
      return t === 0 ? 0 : t < 0 ? -1 : 1;
    }
    function g(t, e, r) {
      var n = t.length;
      if (!(e >= n || r === 0)) {
        r = e + r > n ? n - e : r;
        for (var i = n - r, o = e; o < i; ++o) { t[o] = t[o + r]; }
        t.length = i;
      }
    }
    (e.__esModule = !0), (e.BaseTextureCache = e.TextureCache = e.pluginTarget = e.EventEmitter = e.isMobile = void 0), (e.uid = o), (e.hex2rgb = s), (e.hex2string = a), (e.rgb2hex = u), (e.getResolutionOfUrl = l), (e.decomposeDataUri = h), (e.getUrlFileExtension = c), (e.getSvgSize = d), (e.skipHello = f), (e.sayHello = p), (e.isWebGLSupported = v), (e.sign = y), (e.removeItems = g);
    var m = r(12),
      b = r(43),
      x = i(b),
      _ = r(42),
      w = i(_),
      T = r(52),
      E = i(T),
      S = r(45),
      P = n(S),
      O = 0,
      M = !1;
    (e.isMobile = P), (e.EventEmitter = w.default), (e.pluginTarget =
      E.default);
    (e.TextureCache = {}), (e.BaseTextureCache = {});
  },
  function(t, e) {
    'use strict';
    function r(t) {
      (t.__plugins = {}), (t.registerPlugin = function(e, r) {
        t.__plugins[e] = r;
      }), (t.prototype.initPlugins = function() {
        this.plugins = this.plugins || {};
        for (var e in t.__plugins) { this.plugins[e] = new t.__plugins[e](this); }
      }), (t.prototype.destroyPlugins = function() {
        for (var t in this.plugins) { this.plugins[t].destroy(), (this.plugins[t] = null); }
        this.plugins = null;
      });
    }
    (e.__esModule = !0), (e.default = {
      mixin(t) {
        r(t);
      },
    });
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    function o(t, e) {
      if (!t) {
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      }
      return !e || (typeof e !== 'object' && typeof e !== 'function') ? t : e;
    }
    function s(t, e) {
      if (typeof e !== 'function' && e !== null) {
        throw new TypeError(
          `Super expression must either be null or a function, not ${typeof e}`,
        );
      }
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {value: t, enumerable: !1, writable: !0, configurable: !0},
      })), e &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(t, e)
          : (t.__proto__ = e));
    }
    e.__esModule = !0;
    var a = (function() {
        function t(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1), (n.configurable = !0), 'value' in
            n && (n.writable = !0), Object.defineProperty(t, n.key, n);
          }
        }
        return function(e, r, n) {
          return r && t(e.prototype, r), n && t(e, n), e;
        };
      })(),
      u = r(13),
      l = r(51),
      h = r(12),
      c = r(54),
      d = n(c),
      f = r(50),
      p = n(f),
      v = new u.Point(),
      y = (function(t) {
        function e(r) {
          i(this, e);
          var n = o(this, t.call(this));
          return (n._anchor = new u.ObservablePoint(
            n._onAnchorUpdate,
            n,
          )), (n._texture = null), (n._width = 0), (n._height = 0), (n._tint = null), (n._tintRGB = null), (n.tint = 16777215), (n.blendMode =
            h.BLEND_MODES.NORMAL), (n.shader = null), (n.cachedTint = 16777215), (n.texture =
            r || d.default.EMPTY), (n.vertexData = new Float32Array(
            8,
          )), (n.vertexTrimmedData = null), (n._transformID = -1), (n._textureID = -1), (n._transformTrimmedID = -1), (n._textureTrimmedID = -1), (n.pluginName =
            'sprite'), n;
        }
        return s(e, t), (e.prototype._onTextureUpdate = function() {
          (this._textureID = -1), (this._textureTrimmedID = -1), this._width &&
            (this.scale.x =
              (0, l.sign)(this.scale.x) *
              this._width /
              this.texture.orig.width), this._height &&
            (this.scale.y =
              (0, l.sign)(this.scale.y) *
              this._height /
              this.texture.orig.height);
        }), (e.prototype._onAnchorUpdate = function() {
          (this._transformID = -1), (this._transformTrimmedID = -1);
        }), (e.prototype.calculateVertices = function() {
          if (
            this._transformID !== this.transform._worldID ||
            this._textureID !== this._texture._updateID
          ) {
            (this._transformID = this.transform._worldID), (this._textureID = this._texture._updateID);
            var t = this._texture,
              e = this.transform.worldTransform,
              r = e.a,
              n = e.b,
              i = e.c,
              o = e.d,
              s = e.tx,
              a = e.ty,
              u = this.vertexData,
              l = t.trim,
              h = t.orig,
              c = this._anchor,
              d = 0,
              f = 0,
              p = 0,
              v = 0;
            l
              ? ((f = l.x - c._x * h.width), (d = f + l.width), (v =
                  l.y - c._y * h.height), (p = v + l.height))
              : ((d = h.width * (1 - c._x)), (f = h.width * -c._x), (p =
                  h.height * (1 - c._y)), (v = h.height * -c._y)), (u[0] =
              r * f + i * v + s), (u[1] = o * v + n * f + a), (u[2] =
              r * d + i * v + s), (u[3] = o * v + n * d + a), (u[4] =
              r * d + i * p + s), (u[5] = o * p + n * d + a), (u[6] =
              r * f + i * p + s), (u[7] = o * p + n * f + a);
          }
        }), (e.prototype.calculateTrimmedVertices = function() {
          if (this.vertexTrimmedData) {
            if (
              this._transformTrimmedID === this.transform._worldID &&
              this._textureTrimmedID === this._texture._updateID
            ) { return; }
          } else { this.vertexTrimmedData = new Float32Array(8); }
          (this._transformTrimmedID = this.transform._worldID), (this._textureTrimmedID = this._texture._updateID);
          var t = this._texture,
            e = this.vertexTrimmedData,
            r = t.orig,
            n = this._anchor,
            i = this.transform.worldTransform,
            o = i.a,
            s = i.b,
            a = i.c,
            u = i.d,
            l = i.tx,
            h = i.ty,
            c = r.width * (1 - n._x),
            d = r.width * -n._x,
            f = r.height * (1 - n._y),
            p = r.height * -n._y;
          (e[0] = o * d + a * p + l), (e[1] = u * p + s * d + h), (e[2] =
            o * c + a * p + l), (e[3] = u * p + s * c + h), (e[4] =
            o * c + a * f + l), (e[5] = u * f + s * c + h), (e[6] =
            o * d + a * f + l), (e[7] = u * f + s * d + h);
        }), (e.prototype._renderWebGL = function(t) {
          this.calculateVertices(), t.setObjectRenderer(
            t.plugins[this.pluginName],
          ), t.plugins[this.pluginName].render(this);
        }), (e.prototype._renderCanvas = function(t) {
          t.plugins[this.pluginName].render(this);
        }), (e.prototype._calculateBounds = function() {
          var t = this._texture.trim, e = this._texture.orig;
          !t || (t.width === e.width && t.height === e.height)
            ? (this.calculateVertices(), this._bounds.addQuad(this.vertexData))
            : (this.calculateTrimmedVertices(), this._bounds.addQuad(
                this.vertexTrimmedData,
              ));
        }), (e.prototype.getLocalBounds = function(e) {
          return this.children.length === 0
            ? ((this._bounds.minX =
                this._texture.orig.width *
                -this._anchor._x), (this._bounds.minY =
                this._texture.orig.height *
                -this._anchor._y), (this._bounds.maxX =
                this._texture.orig.width *
                (1 - this._anchor._x)), (this._bounds.maxY =
                this._texture.orig.height * (1 - this._anchor._x)), e ||
                (this._localBoundsRect ||
                  (this._localBoundsRect = new u.Rectangle()), (e = this
                  ._localBoundsRect)), this._bounds.getRectangle(e))
            : t.prototype.getLocalBounds.call(this, e);
        }), (e.prototype.containsPoint = function(t) {
          this.worldTransform.applyInverse(t, v);
          var e = this._texture.orig.width,
            r = this._texture.orig.height,
            n = -e * this.anchor.x,
            i = 0;
          return (
            v.x > n &&
            v.x < n + e &&
            ((i = -r * this.anchor.y), v.y > i && v.y < i + r)
          );
        }), (e.prototype.destroy = function(e) {
          t.prototype.destroy.call(this, e), (this._anchor = null);
          var r = typeof e === 'boolean' ? e : e && e.texture;
          if (r) {
            var n = typeof e === 'boolean' ? e : e && e.baseTexture;
            this._texture.destroy(Boolean(n));
          }
          (this._texture = null), (this.shader = null);
        }), (e.from = function(t) {
          return new e(d.default.from(t));
        }), (e.fromFrame = function(t) {
          var r = l.TextureCache[t];
          if (!r) {
            throw new Error(
              `The frameId "${t}" does not exist in the texture cache`,
            );
          }
          return new e(r);
        }), (e.fromImage = function(t, r, n) {
          return new e(d.default.fromImage(t, r, n));
        }), a(e, [
          {
            key: 'width',
            get() {
              return Math.abs(this.scale.x) * this._texture.orig.width;
            },
            set(t) {
              var e = (0, l.sign)(this.scale.x) || 1;
              (this.scale.x =
                e * t / this._texture.orig.width), (this._width = t);
            },
          },
          {
            key: 'height',
            get() {
              return Math.abs(this.scale.y) * this._texture.orig.height;
            },
            set(t) {
              var e = (0, l.sign)(this.scale.y) || 1;
              (this.scale.y =
                e * t / this._texture.orig.height), (this._height = t);
            },
          },
          {
            key: 'anchor',
            get() {
              return this._anchor;
            },
            set(t) {
              this._anchor.copy(t);
            },
          },
          {
            key: 'tint',
            get() {
              return this._tint;
            },
            set(t) {
              (this._tint = t), (this._tintRGB =
                (t >> 16) + (65280 & t) + ((255 & t) << 16));
            },
          },
          {
            key: 'texture',
            get() {
              return this._texture;
            },
            set(t) {
              this._texture !== t &&
                ((this._texture = t), (this.cachedTint = 16777215), (this._textureID = -1), (this._textureTrimmedID = -1), t &&
                  (t.baseTexture.hasLoaded
                    ? this._onTextureUpdate()
                    : t.once('update', this._onTextureUpdate, this)));
            },
          },
        ]), e;
      })(p.default);
    e.default = y;
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    function o(t, e) {
      if (!t) {
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      }
      return !e || (typeof e !== 'object' && typeof e !== 'function') ? t : e;
    }
    function s(t, e) {
      if (typeof e !== 'function' && e !== null) {
        throw new TypeError(
          `Super expression must either be null or a function, not ${typeof e}`,
        );
      }
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {value: t, enumerable: !1, writable: !0, configurable: !0},
      })), e &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(t, e)
          : (t.__proto__ = e));
    }
    e.__esModule = !0;
    var a = (function() {
        function t(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1), (n.configurable = !0), 'value' in
            n && (n.writable = !0), Object.defineProperty(t, n.key, n);
          }
        }
        return function(e, r, n) {
          return r && t(e.prototype, r), n && t(e, n), e;
        };
      })(),
      u = r(55),
      l = n(u),
      h = r(65),
      c = n(h),
      d = r(68),
      f = n(d),
      p = r(42),
      v = n(p),
      y = r(13),
      g = r(51),
      m = (function(t) {
        function e(r, n, s, a, u) {
          i(this, e);
          var l = o(this, t.call(this));
          if (
            ((l.noFrame = !1), n ||
              ((l.noFrame = !0), (n = new y.Rectangle(
                0,
                0,
                1,
                1,
              ))), r instanceof e &&
              (r =
                r.baseTexture), (l.baseTexture = r), (l._frame = n), (l.trim = a), (l.valid = !1), (l.requiresUpdate = !1), (l._uvs = null), (l.orig =
              s || n), (l._rotate = Number(u || 0)), u === !0)
          ) { l._rotate = 2; } else if (l._rotate % 2 !== 0) {
            throw new Error(
              'attempt to use diamond-shaped UVs. If you are sure, set rotation manually',
            );
          }
          return r.hasLoaded
            ? (l.noFrame &&
                ((n = new y.Rectangle(0, 0, r.width, r.height)), r.on(
                  'update',
                  l.onBaseTextureUpdated,
                  l,
                )), (l.frame = n))
            : r.once(
                'loaded',
                l.onBaseTextureLoaded,
                l,
              ), (l._updateID = 0), (l.transform = null), l;
        }
        return s(e, t), (e.prototype.update = function() {
          this.baseTexture.update();
        }), (e.prototype.onBaseTextureLoaded = function(t) {
          this._updateID++, this.noFrame
            ? (this.frame = new y.Rectangle(0, 0, t.width, t.height))
            : (this.frame = this._frame), this.baseTexture.on(
            'update',
            this.onBaseTextureUpdated,
            this,
          ), this.emit('update', this);
        }), (e.prototype.onBaseTextureUpdated = function(t) {
          this._updateID++, (this._frame.width = t.width), (this._frame.height =
            t.height), this.emit('update', this);
        }), (e.prototype.destroy = function(t) {
          this.baseTexture &&
            (t &&
              (g.TextureCache[this.baseTexture.imageUrl] &&
                delete g.TextureCache[
                  this.baseTexture.imageUrl
                ], this.baseTexture.destroy()), this.baseTexture.off(
              'update',
              this.onBaseTextureUpdated,
              this,
            ), this.baseTexture.off(
              'loaded',
              this.onBaseTextureLoaded,
              this,
            ), (this.baseTexture = null)), (this._frame = null), (this._uvs = null), (this.trim = null), (this.orig = null), (this.valid = !1), this.off(
            'dispose',
            this.dispose,
            this,
          ), this.off('update', this.update, this);
        }), (e.prototype.clone = function() {
          return new e(
            this.baseTexture,
            this.frame,
            this.orig,
            this.trim,
            this.rotate,
          );
        }), (e.prototype._updateUvs = function() {
          this._uvs || (this._uvs = new f.default()), this._uvs.set(
            this._frame,
            this.baseTexture,
            this.rotate,
          ), this._updateID++;
        }), (e.fromImage = function(t, r, n, i) {
          var o = g.TextureCache[t];
          return o ||
            ((o = new e(l.default.fromImage(t, r, n, i))), (g.TextureCache[
              t
            ] = o)), o;
        }), (e.fromFrame = function(t) {
          var e = g.TextureCache[t];
          if (!e) {
            throw new Error(
              `The frameId "${t}" does not exist in the texture cache`,
            );
          }
          return e;
        }), (e.fromCanvas = function(t, r) {
          return new e(l.default.fromCanvas(t, r));
        }), (e.fromVideo = function(t, r) {
          return typeof t === 'string'
            ? e.fromVideoUrl(t, r)
            : new e(c.default.fromVideo(t, r));
        }), (e.fromVideoUrl = function(t, r) {
          return new e(c.default.fromUrl(t, r));
        }), (e.from = function(t) {
          if (typeof t === 'string') {
            var r = g.TextureCache[t];
            if (!r) {
              var n = t.match(/\.(mp4|webm|ogg|h264|avi|mov)$/) !== null;
              return n ? e.fromVideoUrl(t) : e.fromImage(t);
            }
            return r;
          }
          return t instanceof HTMLImageElement
            ? new e(new l.default(t))
            : t instanceof HTMLCanvasElement
                ? e.fromCanvas(t)
                : t instanceof HTMLVideoElement
                    ? e.fromVideo(t)
                    : t instanceof l.default ? new e(t) : t;
        }), (e.addTextureToCache = function(t, e) {
          g.TextureCache[e] = t;
        }), (e.removeTextureFromCache = function(t) {
          var e = g.TextureCache[t];
          return delete g.TextureCache[t], delete g.BaseTextureCache[t], e;
        }), a(e, [
          {
            key: 'frame',
            get() {
              return this._frame;
            },
            set(t) {
              if (
                ((this._frame = t), (this.noFrame = !1), t.x + t.width >
                  this.baseTexture.width ||
                  t.y + t.height > this.baseTexture.height)
              ) {
                throw new Error(
                  `Texture Error: frame does not fit inside the base Texture dimensions ${
                    this}`,
                );
              }
              (this.valid =
                t && t.width && t.height && this.baseTexture.hasLoaded), this
                .trim ||
                this.rotate ||
                (this.orig = t), this.valid && this._updateUvs();
            },
          },
          {
            key: 'rotate',
            get() {
              return this._rotate;
            },
            set(t) {
              (this._rotate = t), this.valid && this._updateUvs();
            },
          },
          {
            key: 'width',
            get() {
              return this.orig.width;
            },
          },
          {
            key: 'height',
            get() {
              return this.orig.height;
            },
          },
        ]), e;
      })(v.default);
    (e.default = m), (m.EMPTY = new m(
      new l.default(),
    )), (m.EMPTY.destroy = function() {}), (m.EMPTY.on = function() {}), (m.EMPTY.once = function() {}), (m.EMPTY.emit = function() {});
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    function o(t, e) {
      if (!t) {
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      }
      return !e || (typeof e !== 'object' && typeof e !== 'function') ? t : e;
    }
    function s(t, e) {
      if (typeof e !== 'function' && e !== null) {
        throw new TypeError(
          `Super expression must either be null or a function, not ${typeof e}`,
        );
      }
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {value: t, enumerable: !1, writable: !0, configurable: !0},
      })), e &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(t, e)
          : (t.__proto__ = e));
    }
    e.__esModule = !0;
    var a = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
      ? function(t) {
        return typeof t;
      }
      : function(t) {
        return t &&
            typeof Symbol === 'function' &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? 'symbol'
            : typeof t;
      },
      u = r(51),
      l = r(43),
      h = n(l),
      c = r(42),
      d = n(c),
      f = r(56),
      p = n(f),
      v = r(64),
      y = n(v),
      g = (function(t) {
        function e(r, n, s) {
          i(this, e);
          var a = o(this, t.call(this));
          return (a.uid = (0, u.uid)()), (a.touched = 0), (a.resolution =
            s ||
            h.default
              .RESOLUTION), (a.width = 100), (a.height = 100), (a.realWidth = 100), (a.realHeight = 100), (a.scaleMode =
            n ||
            h.default
              .SCALE_MODE), (a.hasLoaded = !1), (a.isLoading = !1), (a.source = null), (a.origSource = null), (a.imageType = null), (a.sourceScale = 1), (a.premultipliedAlpha = !0), (a.imageUrl = null), (a.isPowerOfTwo = !1), (a.mipmap =
            h.default.MIPMAP_TEXTURES), (a.wrapMode =
            h.default.WRAP_MODE), (a._glTextures = {}), (a._enabled = 0), (a._virtalBoundId = -1), r &&
            a.loadSource(r), a;
        }
        return s(e, t), (e.prototype.update = function() {
          this.imageType !== 'svg' &&
            ((this.realWidth =
              this.source.naturalWidth ||
              this.source.videoWidth ||
              this.source.width), (this.realHeight =
              this.source.naturalHeight ||
              this.source.videoHeight ||
              this.source.height), (this.width =
              this.realWidth / this.resolution), (this.height =
              this.realHeight / this.resolution), (this.isPowerOfTwo =
              y.default.isPow2(this.realWidth) &&
              y.default.isPow2(this.realHeight))), this.emit('update', this);
        }), (e.prototype.loadSource = function(t) {
          var e = this, r = this.isLoading;
          (this.hasLoaded = !1), (this.isLoading = !1), r &&
            this.source &&
            ((this.source.onload = null), (this.source.onerror = null));
          var n = !this.source;
          if (
            ((this.source = t), ((t.src && t.complete) || t.getContext) &&
              t.width &&
              t.height)
          ) {
            this._updateImageType(), this.imageType === 'svg'
              ? this._loadSvgSource()
              : this._sourceLoaded(), n && this.emit('loaded', this);
          } else if (!t.getContext) {
            var i = (function() {
              e.isLoading = !0;
              var n = e;
              if (
                ((t.onload = function() {
                  if (
                    (n._updateImageType(), (t.onload = null), (t.onerror = null), n.isLoading)
                  ) {
                    return (n.isLoading = !1), n._sourceLoaded(), n.imageType ===
                      'svg'
                      ? void n._loadSvgSource()
                      : void n.emit('loaded', n);
                  }
                }), (t.onerror = function() {
                  (t.onload = null), (t.onerror = null), n.isLoading &&
                    ((n.isLoading = !1), n.emit('error', n));
                }), t.complete && t.src)
              ) {
                if (
                  ((t.onload = null), (t.onerror = null), n.imageType === 'svg')
                ) { return n._loadSvgSource(), {v: void 0}; }
                (e.isLoading = !1), t.width && t.height
                  ? (e._sourceLoaded(), r && e.emit('loaded', e))
                  : r && e.emit('error', e);
              }
            })();
            if ((typeof i === 'undefined' ? 'undefined' : a(i)) === 'object') { return i.v; }
          }
        }), (e.prototype._updateImageType = function() {
          if (this.imageUrl) {
            var t = (0, u.decomposeDataUri)(this.imageUrl), e = void 0;
            if (t && t.mediaType === 'image') {
              var r = t.subType.split('+')[0];
              if (((e = (0, u.getUrlFileExtension)(`.${r}`)), !e)) { throw new Error('Invalid image type in data URI.'); }
            } else { (e = (0, u.getUrlFileExtension)(this.imageUrl)), e || (e = 'png'); }
            this.imageType = e;
          }
        }), (e.prototype._loadSvgSource = function() {
          if (this.imageType === 'svg') {
            var t = (0, u.decomposeDataUri)(this.imageUrl);
            t
              ? this._loadSvgSourceUsingDataUri(t)
              : this._loadSvgSourceUsingXhr();
          }
        }), (e.prototype._loadSvgSourceUsingDataUri = function(t) {
          var e = void 0;
          if (t.encoding === 'base64') {
            if (!atob) {
              throw new Error(
                "Your browser doesn't support base64 conversions.",
              );
            }
            e = atob(t.data);
          } else { e = t.data; }
          this._loadSvgSourceUsingString(e);
        }), (e.prototype._loadSvgSourceUsingXhr = function() {
          var t = this, e = new XMLHttpRequest();
          (e.onload = function() {
            if (e.readyState !== e.DONE || e.status !== 200) { throw new Error('Failed to load SVG using XHR.'); }
            t._loadSvgSourceUsingString(e.response);
          }), (e.onerror = function() {
            return t.emit('error', t);
          }), e.open('GET', this.imageUrl, !0), e.send();
        }), (e.prototype._loadSvgSourceUsingString = function(t) {
          var e = (0, u.getSvgSize)(t), r = e.width, n = e.height;
          if (!r || !n) {
            throw new Error(
              'The SVG image must have width and height defined (in pixels), canvas API needs them.',
            );
          }
          (this.realWidth = Math.round(
            r * this.sourceScale,
          )), (this.realHeight = Math.round(
            n * this.sourceScale,
          )), (this.width = this.realWidth / this.resolution), (this.height =
            this.realHeight / this.resolution), (this.isPowerOfTwo =
            y.default.isPow2(this.realWidth) &&
            y.default.isPow2(this.realHeight));
          var i = document.createElement('canvas');
          (i.width = this.realWidth), (i.height = this.realHeight), (i._pixiId =
            `canvas_${(0, u.uid)()}`), i
            .getContext('2d')
            .drawImage(
              this.source,
              0,
              0,
              r,
              n,
              0,
              0,
              this.realWidth,
              this.realHeight,
            ), (this.origSource = this.source), (this.source = i), (u.BaseTextureCache[
            i._pixiId
          ] = this), (this.isLoading = !1), this._sourceLoaded(), this.emit(
            'loaded',
            this,
          );
        }), (e.prototype._sourceLoaded = function() {
          (this.hasLoaded = !0), this.update();
        }), (e.prototype.destroy = function() {
          this.imageUrl &&
            (delete u.BaseTextureCache[this.imageUrl], delete u.TextureCache[
              this.imageUrl
            ], (this.imageUrl = null), navigator.isCocoonJS ||
              (this.source.src = '')), this.source &&
            this.source._pixiId &&
            delete u.BaseTextureCache[
              this.source._pixiId
            ], (this.source = null), this.dispose();
        }), (e.prototype.dispose = function() {
          this.emit('dispose', this);
        }), (e.prototype.updateSourceImage = function(t) {
          (this.source.src = t), this.loadSource(this.source);
        }), (e.fromImage = function(t, r, n, i) {
          var o = u.BaseTextureCache[t];
          if (!o) {
            var s = new Image();
            void 0 === r &&
              t.indexOf('data:') !== 0 &&
              (s.crossOrigin = (0, p.default)(t)), (o = new e(
              s,
              n,
            )), (o.imageUrl = t), i &&
              (o.sourceScale = i), (o.resolution = (0, u.getResolutionOfUrl)(
              t,
            )), (s.src = t), (u.BaseTextureCache[t] = o);
          }
          return o;
        }), (e.fromCanvas = function(t, r) {
          t._pixiId || (t._pixiId = `canvas_${(0, u.uid)()}`);
          var n = u.BaseTextureCache[t._pixiId];
          return n ||
            ((n = new e(t, r)), (u.BaseTextureCache[t._pixiId] = n)), n;
        }), e;
      })(d.default);
    e.default = g;
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1]
        ? arguments[1]
        : window.location;
      if (t.indexOf('data:') === 0) { return ''; }
      (e = e || window.location), a ||
        (a = document.createElement('a')), (a.href = t), (t = s.default.parse(
        a.href,
      ));
      var r = (!t.port && e.port === '') || t.port === e.port;
      return t.hostname === e.hostname && r && t.protocol === e.protocol
        ? ''
        : 'anonymous';
    }
    (e.__esModule = !0), (e.default = i);
    var o = r(57), s = n(o), a = void 0;
  },
  function(t, e, r) {
    'use strict';
    function n() {
      (this.protocol = null), (this.slashes = null), (this.auth = null), (this.host = null), (this.port = null), (this.hostname = null), (this.hash = null), (this.search = null), (this.query = null), (this.pathname = null), (this.path = null), (this.href = null);
    }
    function i(t, e, r) {
      if (t && l.isObject(t) && t instanceof n) { return t; }
      var i = new n();
      return i.parse(t, e, r), i;
    }
    function o(t) {
      return l.isString(t) && (t = i(t)), t instanceof n
        ? t.format()
        : n.prototype.format.call(t);
    }
    function s(t, e) {
      return i(t, !1, !0).resolve(e);
    }
    function a(t, e) {
      return t ? i(t, !1, !0).resolveObject(e) : e;
    }
    var u = r(58), l = r(60);
    (e.parse = i), (e.resolve = s), (e.resolveObject = a), (e.format = o), (e.Url = n);
    var h = /^([a-z0-9.+-]+:)/i,
      c = /:[0-9]*$/,
      d = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
      f = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],
      p = ['{', '}', '|', '\\', '^', '`'].concat(f),
      v = ["'"].concat(p),
      y = ['%', '/', '?', ';', '#'].concat(v),
      g = ['/', '?', '#'],
      m = 255,
      b = /^[+a-z0-9A-Z_-]{0,63}$/,
      x = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
      _ = {'javascript': !0, 'javascript:': !0},
      w = {'javascript': !0, 'javascript:': !0},
      T = {
        'http': !0,
        'https': !0,
        'ftp': !0,
        'gopher': !0,
        'file': !0,
        'http:': !0,
        'https:': !0,
        'ftp:': !0,
        'gopher:': !0,
        'file:': !0,
      },
      E = r(61);
    (n.prototype.parse = function(t, e, r) {
      if (!l.isString(t)) {
        throw new TypeError(
          `Parameter 'url' must be a string, not ${typeof t}`,
        );
      }
      var n = t.indexOf('?'),
        i = n !== -1 && n < t.indexOf('#') ? '?' : '#',
        o = t.split(i),
        s = /\\/g;
      (o[0] = o[0].replace(s, '/')), (t = o.join(i));
      var a = t;
      if (((a = a.trim()), !r && t.split('#').length === 1)) {
        var c = d.exec(a);
        if (c) {
          return (this.path = a), (this.href = a), (this.pathname = c[1]), c[2]
            ? ((this.search = c[2]), e
                ? (this.query = E.parse(this.search.substr(1)))
                : (this.query = this.search.substr(1)))
            : e && ((this.search = ''), (this.query = {})), this;
        }
      }
      var f = h.exec(a);
      if (f) {
        f = f[0];
        var p = f.toLowerCase();
        (this.protocol = p), (a = a.substr(f.length));
      }
      if (r || f || a.match(/^\/\/[^@\/]+@[^@\/]+/)) {
        var S = a.substr(0, 2) === '//';
        !S || (f && w[f]) || ((a = a.substr(2)), (this.slashes = !0));
      }
      if (!w[f] && (S || (f && !T[f]))) {
        for (var P = -1, O = 0; O < g.length; O++) {
          var M = a.indexOf(g[O]);
          M !== -1 && (P === -1 || M < P) && (P = M);
        }
        var C, A;
        (A = P === -1 ? a.lastIndexOf('@') : a.lastIndexOf('@', P)), A !== -1 &&
          ((C = a.slice(0, A)), (a = a.slice(
            A + 1,
          )), (this.auth = decodeURIComponent(C))), (P = -1);
        for (var O = 0; O < y.length; O++) {
          var M = a.indexOf(y[O]);
          M !== -1 && (P === -1 || M < P) && (P = M);
        }
        P === -1 && (P = a.length), (this.host = a.slice(0, P)), (a = a.slice(
          P,
        )), this.parseHost(), (this.hostname = this.hostname || '');
        var R =
          this.hostname[0] === '[' &&
          this.hostname[this.hostname.length - 1] === ']';
        if (!R) {
          for (
            var D = this.hostname.split(/\./), O = 0, I = D.length;
            O < I;
            O++
          ) {
            var L = D[O];
            if (L && !L.match(b)) {
              for (var k = '', B = 0, N = L.length; B < N; B++) { k += L.charCodeAt(B) > 127 ? 'x' : L[B]; }
              if (!k.match(b)) {
                var F = D.slice(0, O), j = D.slice(O + 1), U = L.match(x);
                U && (F.push(U[1]), j.unshift(U[2])), j.length &&
                  (a = `/${j.join('.')}${a}`), (this.hostname = F.join('.'));
                break;
              }
            }
          }
        }
        this.hostname.length > m
          ? (this.hostname = '')
          : (this.hostname = this.hostname.toLowerCase()), R ||
          (this.hostname = u.toASCII(this.hostname));
        var X = this.port ? `:${this.port}` : '', W = this.hostname || '';
        (this.host = W + X), (this.href += this.host), R &&
          ((this.hostname = this.hostname.substr(
            1,
            this.hostname.length - 2,
          )), a[0] !== '/' && (a = `/${a}`));
      }
      if (!_[p]) {
        for (var O = 0, I = v.length; O < I; O++) {
          var V = v[O];
          if (a.indexOf(V) !== -1) {
            var G = encodeURIComponent(V);
            G === V && (G = escape(V)), (a = a.split(V).join(G));
          }
        }
      }
      var H = a.indexOf('#');
      H !== -1 && ((this.hash = a.substr(H)), (a = a.slice(0, H)));
      var Y = a.indexOf('?');
      if (
        (Y !== -1
          ? ((this.search = a.substr(Y)), (this.query = a.substr(Y + 1)), e &&
              (this.query = E.parse(this.query)), (a = a.slice(0, Y)))
          : e && ((this.search = ''), (this.query = {})), a &&
          (this.pathname = a), T[p] &&
          this.hostname &&
          !this.pathname &&
          (this.pathname = '/'), this.pathname || this.search)
      ) {
        var X = this.pathname || '', z = this.search || '';
        this.path = X + z;
      }
      return (this.href = this.format()), this;
    }), (n.prototype.format = function() {
      var t = this.auth || '';
      t &&
        ((t = encodeURIComponent(t)), (t = t.replace(/%3A/i, ':')), (t += '@'));
      var e = this.protocol || '',
        r = this.pathname || '',
        n = this.hash || '',
        i = !1,
        o = '';
      this.host
        ? (i = t + this.host)
        : this.hostname &&
            ((i =
              t +
              (this.hostname.indexOf(':') === -1
                ? this.hostname
                : `[${this.hostname}]`)), this.port &&
              (i += `:${this.port}`)), this.query &&
        l.isObject(this.query) &&
        Object.keys(this.query).length &&
        (o = E.stringify(this.query));
      var s = this.search || (o && `?${o}`) || '';
      return e && e.substr(-1) !== ':' && (e += ':'), this.slashes ||
        ((!e || T[e]) && i !== !1)
        ? ((i = `//${i || ''}`), r && r.charAt(0) !== '/' && (r = `/${r}`))
        : i || (i = ''), n && n.charAt(0) !== '#' && (n = `#${n}`), s &&
        s.charAt(0) !== '?' &&
        (s = `?${s}`), (r = r.replace(/[?#]/g, t => {
          return encodeURIComponent(t);
        })), (s = s.replace('#', '%23')), e + i + r + s + n;
    }), (n.prototype.resolve = function(t) {
      return this.resolveObject(i(t, !1, !0)).format();
    }), (n.prototype.resolveObject = function(t) {
      if (l.isString(t)) {
        var e = new n();
        e.parse(t, !1, !0), (t = e);
      }
      for (var r = new n(), i = Object.keys(this), o = 0; o < i.length; o++) {
        var s = i[o];
        r[s] = this[s];
      }
      if (((r.hash = t.hash), t.href === '')) { return (r.href = r.format()), r; }
      if (t.slashes && !t.protocol) {
        for (var a = Object.keys(t), u = 0; u < a.length; u++) {
          var h = a[u];
          h !== 'protocol' && (r[h] = t[h]);
        }
        return T[r.protocol] &&
          r.hostname &&
          !r.pathname &&
          (r.path = r.pathname = '/'), (r.href = r.format()), r;
      }
      if (t.protocol && t.protocol !== r.protocol) {
        if (!T[t.protocol]) {
          for (var c = Object.keys(t), d = 0; d < c.length; d++) {
            var f = c[d];
            r[f] = t[f];
          }
          return (r.href = r.format()), r;
        }
        if (((r.protocol = t.protocol), t.host || w[t.protocol])) { r.pathname = t.pathname; } else {
          for (
            var p = (t.pathname || '').split('/');
            p.length && !(t.host = p.shift());

          ) { }
          t.host || (t.host = ''), t.hostname || (t.hostname = ''), p[0] !==
            '' && p.unshift(''), p.length < 2 &&
            p.unshift(''), (r.pathname = p.join('/'));
        }
        if (
          ((r.search = t.search), (r.query = t.query), (r.host =
            t.host || ''), (r.auth = t.auth), (r.hostname =
            t.hostname || t.host), (r.port = t.port), r.pathname || r.search)
        ) {
          var v = r.pathname || '', y = r.search || '';
          r.path = v + y;
        }
        return (r.slashes = r.slashes || t.slashes), (r.href = r.format()), r;
      }
      var g = r.pathname && r.pathname.charAt(0) === '/',
        m = t.host || (t.pathname && t.pathname.charAt(0) === '/'),
        b = m || g || (r.host && t.pathname),
        x = b,
        _ = (r.pathname && r.pathname.split('/')) || [],
        p = (t.pathname && t.pathname.split('/')) || [],
        E = r.protocol && !T[r.protocol];
      if (
        (E &&
          ((r.hostname = ''), (r.port = null), r.host &&
            (_[0] === '' ? (_[0] = r.host) : _.unshift(r.host)), (r.host =
            ''), t.protocol &&
            ((t.hostname = null), (t.port = null), t.host &&
              (p[0] === ''
                ? (p[0] = t.host)
                : p.unshift(t.host)), (t.host = null)), (b =
            b && (p[0] === '' || _[0] === ''))), m)
      ) {
        (r.host = t.host || t.host === ''
          ? t.host
          : r.host), (r.hostname = t.hostname || t.hostname === ''
          ? t.hostname
          : r.hostname), (r.search = t.search), (r.query = t.query), (_ = p);
      } else if (p.length) {
        _ || (_ = []), _.pop(), (_ = _.concat(p)), (r.search =
          t.search), (r.query = t.query);
      } else if (!l.isNullOrUndefined(t.search)) {
        if (E) {
          r.hostname = r.host = _.shift();
          var S = Boolean(r.host && r.host.indexOf('@') > 0) && r.host.split('@');
          S && ((r.auth = S.shift()), (r.host = r.hostname = S.shift()));
        }
        return (r.search = t.search), (r.query = t.query), (l.isNull(
          r.pathname,
        ) &&
          l.isNull(r.search)) ||
          (r.path =
            (r.pathname ? r.pathname : '') +
            (r.search ? r.search : '')), (r.href = r.format()), r;
      }
      if (!_.length) {
        return (r.pathname = null), r.search
          ? (r.path = `/${r.search}`)
          : (r.path = null), (r.href = r.format()), r;
      }
      for (
        var P = _.slice(-1)[0],
          O =
            ((r.host || t.host || _.length > 1) && (P === '.' || P === '..')) ||
            P === '',
          M = 0,
          C = _.length;
        C >= 0;
        C--
      ) {
        (P = _[C]), P === '.'
          ? _.splice(C, 1)
          : P === '..' ? (_.splice(C, 1), M++) : M && (_.splice(C, 1), M--);
      }
      if (!b && !x) { for (; M--; M) { _.unshift('..'); } }
      !b ||
        _[0] === '' ||
        (_[0] && _[0].charAt(0) === '/') ||
        _.unshift(''), O && _.join('/').substr(-1) !== '/' && _.push('');
      var A = _[0] === '' || (_[0] && _[0].charAt(0) === '/');
      if (E) {
        r.hostname = r.host = A ? '' : _.length ? _.shift() : '';
        var S = Boolean(r.host && r.host.indexOf('@') > 0) && r.host.split('@');
        S && ((r.auth = S.shift()), (r.host = r.hostname = S.shift()));
      }
      return (b = b || (r.host && _.length)), b && !A && _.unshift(''), _.length
        ? (r.pathname = _.join('/'))
        : ((r.pathname = null), (r.path = null)), (l.isNull(r.pathname) &&
        l.isNull(r.search)) ||
        (r.path =
          (r.pathname ? r.pathname : '') +
          (r.search ? r.search : '')), (r.auth = t.auth || r.auth), (r.slashes =
        r.slashes || t.slashes), (r.href = r.format()), r;
    }), (n.prototype.parseHost = function() {
      var t = this.host, e = c.exec(t);
      e &&
        ((e = e[0]), e !== ':' && (this.port = e.substr(1)), (t = t.substr(
          0,
          t.length - e.length,
        ))), t && (this.hostname = t);
    });
  },
  function(t, e, r) {
    var n;
    (function(t, i) {
      !(function(o) {
        function s(t) {
          throw RangeError(D[t]);
        }
        function a(t, e) {
          for (var r = t.length, n = []; r--;) { n[r] = e(t[r]); }
          return n;
        }
        function u(t, e) {
          var r = t.split('@'), n = '';
          r.length > 1 && ((n = `${r[0]}@`), (t = r[1])), (t = t.replace(
            R,
            '.',
          ));
          var i = t.split('.'), o = a(i, e).join('.');
          return n + o;
        }
        function l(t) {
          for (var e, r, n = [], i = 0, o = t.length; i < o;) {
            (e = t.charCodeAt(i++)), e >= 55296 && e <= 56319 && i < o
              ? ((r = t.charCodeAt(i++)), (64512 & r) == 56320
                  ? n.push(((1023 & e) << 10) + (1023 & r) + 65536)
                  : (n.push(e), i--))
              : n.push(e);
          }
          return n;
        }
        function h(t) {
          return a(t, t => {
            var e = '';
            return t > 65535 &&
              ((t -= 65536), (e += k(((t >>> 10) & 1023) | 55296)), (t =
                56320 | (1023 & t))), (e += k(t));
          }).join('');
        }
        function c(t) {
          return t - 48 < 10
            ? t - 22
            : t - 65 < 26 ? t - 65 : t - 97 < 26 ? t - 97 : _;
        }
        function d(t, e) {
          return t + 22 + 75 * (t < 26) - ((e != 0) << 5);
        }
        function f(t, e, r) {
          var n = 0;
          for (
            (t = r ? L(t / S) : t >> 1), (t += L(t / e));
            t > (I * T) >> 1;
            n += _
          ) { t = L(t / I); }
          return L(n + (I + 1) * t / (t + E));
        }
        function p(t) {
          var e,
            r,
            n,
            i,
            o,
            a,
            u,
            l,
            d,
            p,
            v = [],
            y = t.length,
            g = 0,
            m = O,
            b = P;
          for ((r = t.lastIndexOf(M)), r < 0 && (r = 0), (n = 0); n < r; ++n) { t.charCodeAt(n) >= 128 && s('not-basic'), v.push(t.charCodeAt(n)); }
          for (i = r > 0 ? r + 1 : 0; i < y;) {
            for (
              (o = g), (a = 1), (u = _);
              i >= y && s('invalid-input'), (l = c(t.charCodeAt(i++))), (l >=
                _ ||
                l > L((x - g) / a)) &&
                s('overflow'), (g += l * a), (d = u <= b
                ? w
                : u >= b + T ? T : u - b), !(l < d);
              u += _
            ) { (p = _ - d), a > L(x / p) && s('overflow'), (a *= p); }
            (e = v.length + 1), (b = f(g - o, e, o == 0)), L(g / e) > x - m &&
              s('overflow'), (m += L(g / e)), (g %= e), v.splice(g++, 0, m);
          }
          return h(v);
        }
        function v(t) {
          var e, r, n, i, o, a, u, h, c, p, v, y, g, m, b, E = [];
          for (
            (t = l(t)), (y = t.length), (e = O), (r = 0), (o = P), (a = 0);
            a < y;
            ++a
          ) { (v = t[a]), v < 128 && E.push(k(v)); }
          for ((n = i = E.length), i && E.push(M); n < y;) {
            for ((u = x), (a = 0); a < y; ++a) { (v = t[a]), v >= e && v < u && (u = v); }
            for (
              (g = n + 1), u - e > L((x - r) / g) && s('overflow'), (r +=
                (u - e) * g), (e = u), (a = 0);
              a < y;
              ++a
            ) {
              if (((v = t[a]), v < e && ++r > x && s('overflow'), v == e)) {
                for (
                  (h = r), (c = _);
                  (p = c <= o ? w : c >= o + T ? T : c - o), !(h < p);
                  c += _
                ) {
                  (b = h - p), (m = _ - p), E.push(k(d(p + b % m, 0))), (h = L(
                    b / m,
                  ));
                }
                E.push(k(d(h, 0))), (o = f(r, g, n == i)), (r = 0), ++n;
              }
            }
            ++r, ++e;
          }
          return E.join('');
        }
        function y(t) {
          return u(t, t => {
            return C.test(t) ? p(t.slice(4).toLowerCase()) : t;
          });
        }
        function g(t) {
          return u(t, t => {
            return A.test(t) ? `xn--${v(t)}` : t;
          });
        }
        var m = (typeof e === 'object' && e && !e.nodeType && e, typeof t ===
          'object' &&
          t &&
          !t.nodeType &&
          t, typeof i === 'object' && i);
        (m.global !== m && m.window !== m && m.self !== m) || (o = m);
        var b,
          x = 2147483647,
          _ = 36,
          w = 1,
          T = 26,
          E = 38,
          S = 700,
          P = 72,
          O = 128,
          M = '-',
          C = /^xn--/,
          A = /[^\x20-\x7E]/,
          R = /[\x2E\u3002\uFF0E\uFF61]/g,
          D = {
            'overflow': 'Overflow: input needs wider integers to process',
            'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
            'invalid-input': 'Invalid input',
          },
          I = _ - w,
          L = Math.floor,
          k = String.fromCharCode;
        (b = {
          version: '1.3.2',
          ucs2: {decode: l, encode: h},
          decode: p,
          encode: v,
          toASCII: g,
          toUnicode: y,
        }), (n = function() {
          return b;
        }.call(e, r, e, t)), !(void 0 !== n && (t.exports = n));
      })(this);
    }.call(
      e,
      r(59)(t),
      (function() {
        return this;
      })(),
    ));
  },
  function(t, e) {
    t.exports = function(t) {
      return t.webpackPolyfill ||
        ((t.deprecate = function() {}), (t.paths = []), (t.children = []), (t.webpackPolyfill = 1)), t;
    };
  },
  function(t, e) {
    'use strict';
    t.exports = {
      isString(t) {
        return typeof t === 'string';
      },
      isObject(t) {
        return typeof t === 'object' && t !== null;
      },
      isNull(t) {
        return t === null;
      },
      isNullOrUndefined(t) {
        return t == null;
      },
    };
  },
  function(t, e, r) {
    'use strict';
    (e.decode = e.parse = r(62)), (e.encode = e.stringify = r(63));
  },
  function(t, e) {
    'use strict';
    function r(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }
    t.exports = function(t, e, n, i) {
      (e = e || '&'), (n = n || '=');
      var o = {};
      if (typeof t !== 'string' || t.length === 0) { return o; }
      var s = /\+/g;
      t = t.split(e);
      var a = 1e3;
      i && typeof i.maxKeys === 'number' && (a = i.maxKeys);
      var u = t.length;
      a > 0 && u > a && (u = a);
      for (var l = 0; l < u; ++l) {
        var h, c, d, f, p = t[l].replace(s, '%20'), v = p.indexOf(n);
        v >= 0
          ? ((h = p.substr(0, v)), (c = p.substr(v + 1)))
          : ((h = p), (c = '')), (d = decodeURIComponent(
          h,
        )), (f = decodeURIComponent(c)), r(o, d)
          ? Array.isArray(o[d]) ? o[d].push(f) : (o[d] = [o[d], f])
          : (o[d] = f);
      }
      return o;
    };
  },
  function(t, e) {
    'use strict';
    var r = function(t) {
      switch (typeof t) {
        case 'string':
          return t;
        case 'boolean':
          return t ? 'true' : 'false';
        case 'number':
          return isFinite(t) ? t : '';
        default:
          return '';
      }
    };
    t.exports = function(t, e, n, i) {
      return (e = e || '&'), (n = n || '='), t === null &&
        (t = void 0), typeof t === 'object'
        ? Object.keys(t)
            .map(i => {
              var o = encodeURIComponent(r(i)) + n;
              return Array.isArray(t[i])
                ? t[i]
                    .map(t => {
                      return o + encodeURIComponent(r(t));
                    })
                    .join(e)
                : o + encodeURIComponent(r(t[i]));
            })
            .join(e)
        : i ? encodeURIComponent(r(i)) + n + encodeURIComponent(r(t)) : '';
    };
  },
  function(t, e) {
    'use strict';
    'use restrict';
    function r(t) {
      var e = 32;
      return (t &= -t), t && e--, 65535 & t && (e -= 16), 16711935 & t &&
        (e -= 8), 252645135 & t && (e -= 4), 858993459 & t &&
        (e -= 2), 1431655765 & t && (e -= 1), e;
    }
    var n = 32;
    (e.INT_BITS = n), (e.INT_MAX = 2147483647), (e.INT_MIN =
      -1 << (n - 1)), (e.sign = function(t) {
        return (t > 0) - (t < 0);
      }), (e.abs = function(t) {
        var e = t >> (n - 1);
        return (t ^ e) - e;
      }), (e.min = function(t, e) {
        return e ^ ((t ^ e) & -(t < e));
      }), (e.max = function(t, e) {
        return t ^ ((t ^ e) & -(t < e));
      }), (e.isPow2 = function(t) {
        return !(t & (t - 1) || !t);
      }), (e.log2 = function(t) {
        var e, r;
        return (e = (t > 65535) << 4), (t >>>= e), (r =
        (t > 255) << 3), (t >>>= r), (e |= r), (r =
        (t > 15) << 2), (t >>>= r), (e |= r), (r =
        (t > 3) << 1), (t >>>= r), (e |= r), e | (t >> 1);
      }), (e.log10 = function(t) {
        return t >= 1e9
        ? 9
        : t >= 1e8
            ? 8
            : t >= 1e7
                ? 7
                : t >= 1e6
                    ? 6
                    : t >= 1e5
                        ? 5
                        : t >= 1e4
                            ? 4
                            : t >= 1e3 ? 3 : t >= 100 ? 2 : t >= 10 ? 1 : 0;
      }), (e.popCount = function(t) {
        return (t -= (t >>> 1) & 1431655765), (t =
        (858993459 & t) + ((t >>> 2) & 858993459)), (16843009 *
        ((t + (t >>> 4)) & 252645135)) >>>
        24;
      }), (e.countTrailingZeros = r), (e.nextPow2 = function(t) {
        return (t += t === 0), --t, (t |= t >>> 1), (t |= t >>> 2), (t |=
        t >>> 4), (t |= t >>> 8), (t |= t >>> 16), t + 1;
      }), (e.prevPow2 = function(t) {
        return (t |= t >>> 1), (t |= t >>> 2), (t |= t >>> 4), (t |=
        t >>> 8), (t |= t >>> 16), t - (t >>> 1);
      }), (e.parity = function(t) {
      return (t ^= t >>> 16), (t ^= t >>> 8), (t ^=
        t >>> 4), (t &= 15), (27030 >>> t) & 1;
    });
    var i = new Array(256);
    !(function(t) {
      for (var e = 0; e < 256; ++e) {
        var r = e, n = e, i = 7;
        for (r >>>= 1; r; r >>>= 1) { (n <<= 1), (n |= 1 & r), --i; }
        t[e] = (n << i) & 255;
      }
    })(i), (e.reverse = function(t) {
      return (
        (i[255 & t] << 24) |
        (i[(t >>> 8) & 255] << 16) |
        (i[(t >>> 16) & 255] << 8) |
        i[(t >>> 24) & 255]
      );
    }), (e.interleave2 = function(t, e) {
      return (t &= 65535), (t = 16711935 & (t | (t << 8))), (t =
        252645135 & (t | (t << 4))), (t = 858993459 & (t | (t << 2))), (t =
        1431655765 & (t | (t << 1))), (e &= 65535), (e =
        16711935 & (e | (e << 8))), (e = 252645135 & (e | (e << 4))), (e =
        858993459 & (e | (e << 2))), (e = 1431655765 & (e | (e << 1))), t |
        (e << 1);
    }), (e.deinterleave2 = function(t, e) {
      return (t = (t >>> e) & 1431655765), (t =
        858993459 & (t | (t >>> 1))), (t = 252645135 & (t | (t >>> 2))), (t =
        16711935 & (t | (t >>> 4))), (t = 65535 & (t | (t >>> 16))), t <<
        16 >>
        16;
    }), (e.interleave3 = function(t, e, r) {
      return (t &= 1023), (t = 4278190335 & (t | (t << 16))), (t =
        251719695 & (t | (t << 8))), (t = 3272356035 & (t | (t << 4))), (t =
        1227133513 & (t | (t << 2))), (e &= 1023), (e =
        4278190335 & (e | (e << 16))), (e = 251719695 & (e | (e << 8))), (e =
        3272356035 & (e | (e << 4))), (e = 1227133513 & (e | (e << 2))), (t |=
        e << 1), (r &= 1023), (r = 4278190335 & (r | (r << 16))), (r =
        251719695 & (r | (r << 8))), (r = 3272356035 & (r | (r << 4))), (r =
        1227133513 & (r | (r << 2))), t | (r << 2);
    }), (e.deinterleave3 = function(t, e) {
      return (t = (t >>> e) & 1227133513), (t =
        3272356035 & (t | (t >>> 2))), (t = 251719695 & (t | (t >>> 4))), (t =
        4278190335 & (t | (t >>> 8))), (t = 1023 & (t | (t >>> 16))), t <<
        22 >>
        22;
    }), (e.nextCombination = function(t) {
      var e = t | (t - 1);
      return (e + 1) | (((~e & -~e) - 1) >>> (r(t) + 1));
    });
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      if (t && t.__esModule) { return t; }
      var e = {};
      if (t != null) {
        for (var r in t) { Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); }
      }
      return (e.default = t), e;
    }
    function i(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function o(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    function s(t, e) {
      if (!t) {
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      }
      return !e || (typeof e !== 'object' && typeof e !== 'function') ? t : e;
    }
    function a(t, e) {
      if (typeof e !== 'function' && e !== null) {
        throw new TypeError(
          `Super expression must either be null or a function, not ${typeof e}`,
        );
      }
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {value: t, enumerable: !1, writable: !0, configurable: !0},
      })), e &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(t, e)
          : (t.__proto__ = e));
    }
    function u(t, e) {
      e || (e = `video/${t.substr(t.lastIndexOf('.') + 1)}`);
      var r = document.createElement('source');
      return (r.src = t), (r.type = e), r;
    }
    e.__esModule = !0;
    var l = (function() {
        function t(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1), (n.configurable = !0), 'value' in
            n && (n.writable = !0), Object.defineProperty(t, n.key, n);
          }
        }
        return function(e, r, n) {
          return r && t(e.prototype, r), n && t(e, n), e;
        };
      })(),
      h = r(55),
      c = i(h),
      d = r(51),
      f = r(66),
      p = n(f),
      v = (function(t) {
        function e(r, n) {
          if ((o(this, e), !r)) { throw new Error('No video source element specified.'); }
          (r.readyState === r.HAVE_ENOUGH_DATA ||
            r.readyState === r.HAVE_FUTURE_DATA) &&
            r.width &&
            r.height &&
            (r.complete = !0);
          var i = s(this, t.call(this, r, n));
          return (i.width = r.videoWidth), (i.height =
            r.videoHeight), (i._autoUpdate = !0), (i._isAutoUpdating = !1), (i.autoPlay = !0), (i.update = i.update.bind(
            i,
          )), (i._onCanPlay = i._onCanPlay.bind(i)), r.addEventListener(
            'play',
            i._onPlayStart.bind(i),
          ), r.addEventListener(
            'pause',
            i._onPlayStop.bind(i),
          ), (i.hasLoaded = !1), (i.__loaded = !1), i._isSourceReady()
            ? i._onCanPlay()
            : (r.addEventListener('canplay', i._onCanPlay), r.addEventListener(
                'canplaythrough',
                i._onCanPlay,
              )), i;
        }
        return a(e, t), (e.prototype._isSourcePlaying = function() {
          var t = this.source;
          return (
            t.currentTime > 0 &&
            t.paused === !1 &&
            t.ended === !1 &&
            t.readyState > 2
          );
        }), (e.prototype._isSourceReady = function() {
          return this.source.readyState === 3 || this.source.readyState === 4;
        }), (e.prototype._onPlayStart = function() {
          this.hasLoaded || this._onCanPlay(), !this._isAutoUpdating &&
            this.autoUpdate &&
            (p.shared.add(this.update, this), (this._isAutoUpdating = !0));
        }), (e.prototype._onPlayStop = function() {
          this._isAutoUpdating &&
            (p.shared.remove(this.update, this), (this._isAutoUpdating = !1));
        }), (e.prototype._onCanPlay = function() {
          (this.hasLoaded = !0), this.source &&
            (this.source.removeEventListener(
              'canplay',
              this._onCanPlay,
            ), this.source.removeEventListener(
              'canplaythrough',
              this._onCanPlay,
            ), (this.width = this.source.videoWidth), (this.height = this.source.videoHeight), this
              .__loaded ||
              ((this.__loaded = !0), this.emit(
                'loaded',
                this,
              )), this._isSourcePlaying()
              ? this._onPlayStart()
              : this.autoPlay && this.source.play());
        }), (e.prototype.destroy = function() {
          this._isAutoUpdating && p.shared.remove(this.update, this), this
            .source &&
            this.source._pixiId &&
            (delete d.BaseTextureCache[this.source._pixiId], delete this.source
              ._pixiId), t.prototype.destroy.call(this);
        }), (e.fromVideo = function(t, r) {
          t._pixiId || (t._pixiId = `video_${(0, d.uid)()}`);
          var n = d.BaseTextureCache[t._pixiId];
          return n ||
            ((n = new e(t, r)), (d.BaseTextureCache[t._pixiId] = n)), n;
        }), (e.fromUrl = function(t, r) {
          var n = document.createElement('video');
          if (
            (n.setAttribute('webkit-playsinline', ''), n.setAttribute(
              'playsinline',
              '',
            ), Array.isArray(t))
          ) {
            for (var i = 0; i < t.length; ++i) { n.appendChild(u(t[i].src || t[i], t[i].mime)); }
          } else { n.appendChild(u(t.src || t, t.mime)); }
          return n.load(), e.fromVideo(n, r);
        }), l(e, [
          {
            key: 'autoUpdate',
            get() {
              return this._autoUpdate;
            },
            set(t) {
              t !== this._autoUpdate &&
                ((this._autoUpdate = t), !this._autoUpdate &&
                  this._isAutoUpdating
                  ? (p.shared.remove(
                      this.update,
                      this,
                    ), (this._isAutoUpdating = !1))
                  : this._autoUpdate &&
                      !this._isAutoUpdating &&
                      (p.shared.add(
                        this.update,
                        this,
                      ), (this._isAutoUpdating = !0)));
            },
          },
        ]), e;
      })(c.default);
    (e.default = v), (v.fromUrls = v.fromUrl);
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    (e.__esModule = !0), (e.Ticker = e.shared = void 0);
    var i = r(67), o = n(i), s = new o.default();
    (s.autoStart = !0), (e.shared = s), (e.Ticker = o.default);
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    e.__esModule = !0;
    var o = (function() {
        function t(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1), (n.configurable = !0), 'value' in
            n && (n.writable = !0), Object.defineProperty(t, n.key, n);
          }
        }
        return function(e, r, n) {
          return r && t(e.prototype, r), n && t(e, n), e;
        };
      })(),
      s = r(43),
      a = n(s),
      u = r(42),
      l = n(u),
      h = 'tick',
      c = (function() {
        function t() {
          var e = this;
          i(
            this,
            t,
          ), (this._emitter = new l.default()), (this._requestId = null), (this._maxElapsedMS = 100), (this.autoStart = !1), (this.deltaTime = 1), (this.elapsedMS =
            1 /
            a.default
              .TARGET_FPMS), (this.lastTime = 0), (this.speed = 1), (this.started = !1), (this._tick = function(
            t,
          ) {
                (e._requestId = null), e.started &&
              (e.update(t), e.started &&
                e._requestId === null &&
                e._emitter.listeners(h, !0) &&
                (e._requestId = requestAnimationFrame(e._tick)));
              });
        }
        return (t.prototype._requestIfNeeded = function() {
          this._requestId === null &&
            this._emitter.listeners(h, !0) &&
            ((this.lastTime = performance.now()), (this._requestId = requestAnimationFrame(
              this._tick,
            )));
        }), (t.prototype._cancelIfNeeded = function() {
          this._requestId !== null &&
            (cancelAnimationFrame(this._requestId), (this._requestId = null));
        }), (t.prototype._startIfPossible = function() {
          this.started
            ? this._requestIfNeeded()
            : this.autoStart && this.start();
        }), (t.prototype.add = function(t, e) {
          return this._emitter.on(h, t, e), this._startIfPossible(), this;
        }), (t.prototype.addOnce = function(t, e) {
          return this._emitter.once(h, t, e), this._startIfPossible(), this;
        }), (t.prototype.remove = function(t, e) {
          return this._emitter.off(h, t, e), this._emitter.listeners(h, !0) ||
            this._cancelIfNeeded(), this;
        }), (t.prototype.start = function() {
          this.started || ((this.started = !0), this._requestIfNeeded());
        }), (t.prototype.stop = function() {
          this.started && ((this.started = !1), this._cancelIfNeeded());
        }), (t.prototype.update = function() {
          var t = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : performance.now(),
            e = void 0;
          t > this.lastTime
            ? ((e = this.elapsedMS = t - this.lastTime), e >
                this._maxElapsedMS &&
                (e = this._maxElapsedMS), (this.deltaTime =
                e * a.default.TARGET_FPMS * this.speed), this._emitter.emit(
                h,
                this.deltaTime,
              ))
            : (this.deltaTime = this.elapsedMS = 0), (this.lastTime = t);
        }), o(t, [
          {
            key: 'FPS',
            get() {
              return 1e3 / this.elapsedMS;
            },
          },
          {
            key: 'minFPS',
            get() {
              return 1e3 / this._maxElapsedMS;
            },
            set(t) {
              var e = Math.min(Math.max(0, t) / 1e3, a.default.TARGET_FPMS);
              this._maxElapsedMS = 1 / e;
            },
          },
        ]), t;
      })();
    e.default = c;
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    e.__esModule = !0;
    var o = r(17),
      s = n(o),
      a = (function() {
        function t() {
          i(
            this,
            t,
          ), (this.x0 = 0), (this.y0 = 0), (this.x1 = 1), (this.y1 = 0), (this.x2 = 1), (this.y2 = 1), (this.x3 = 0), (this.y3 = 1), (this.uvsUint32 = new Uint32Array(
            4,
          ));
        }
        return (t.prototype.set = function(t, e, r) {
          var n = e.width, i = e.height;
          if (r) {
            var o = t.width / 2 / n,
              a = t.height / 2 / i,
              u = t.x / n + o,
              l = t.y / i + a;
            (r = s.default.add(r, s.default.NW)), (this.x0 =
              u + o * s.default.uX(r)), (this.y0 =
              l + a * s.default.uY(r)), (r = s.default.add(r, 2)), (this.x1 =
              u + o * s.default.uX(r)), (this.y1 =
              l + a * s.default.uY(r)), (r = s.default.add(r, 2)), (this.x2 =
              u + o * s.default.uX(r)), (this.y2 =
              l + a * s.default.uY(r)), (r = s.default.add(r, 2)), (this.x3 =
              u + o * s.default.uX(r)), (this.y3 = l + a * s.default.uY(r));
          } else {
            (this.x0 = t.x / n), (this.y0 = t.y / i), (this.x1 =
              (t.x + t.width) / n), (this.y1 = t.y / i), (this.x2 =
              (t.x + t.width) / n), (this.y2 = (t.y + t.height) / i), (this.x3 =
              t.x / n), (this.y3 = (t.y + t.height) / i);
          }
          (this.uvsUint32[0] =
            (((65535 * this.y0) & 65535) << 16) |
            ((65535 * this.x0) & 65535)), (this.uvsUint32[1] =
            (((65535 * this.y1) & 65535) << 16) |
            ((65535 * this.x1) & 65535)), (this.uvsUint32[2] =
            (((65535 * this.y2) & 65535) << 16) |
            ((65535 * this.x2) & 65535)), (this.uvsUint32[3] =
            (((65535 * this.y3) & 65535) << 16) | ((65535 * this.x3) & 65535));
        }), t;
      })();
    e.default = a;
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    e.__esModule = !0;
    var o = r(70),
      s = n(o),
      a = r(12),
      u = r(13),
      l = r(78),
      h = n(l),
      c = new u.Matrix(),
      d = (function() {
        function t(e) {
          i(this, t), (this.renderer = e);
        }
        return (t.prototype.render = function(t) {
          var e = t._texture,
            r = this.renderer,
            n = e._frame.width,
            i = e._frame.height,
            o = t.transform.worldTransform,
            s = 0,
            l = 0;
          if (
            !(e.orig.width <= 0 || e.orig.height <= 0) &&
            e.baseTexture.source &&
            (r.setBlendMode(t.blendMode), e.valid)
          ) {
            r.context.globalAlpha = t.worldAlpha;
            var d = e.baseTexture.scaleMode === a.SCALE_MODES.LINEAR;
            r.smoothProperty &&
              r.context[r.smoothProperty] !== d &&
              (r.context[r.smoothProperty] = d), e.trim
              ? ((s =
                  e.trim.width / 2 + e.trim.x - t.anchor.x * e.orig.width), (l =
                  e.trim.height / 2 + e.trim.y - t.anchor.y * e.orig.height))
              : ((s = (0.5 - t.anchor.x) * e.orig.width), (l =
                  (0.5 - t.anchor.y) * e.orig.height)), e.rotate &&
              (o.copy(c), (o = c), u.GroupD8.matrixAppendRotationInv(
                o,
                e.rotate,
                s,
                l,
              ), (s = 0), (l = 0)), (s -= n / 2), (l -= i / 2), r.roundPixels
              ? (r.context.setTransform(
                  o.a,
                  o.b,
                  o.c,
                  o.d,
                  (o.tx * r.resolution) | 0,
                  (o.ty * r.resolution) | 0,
                ), (s |= 0), (l |= 0))
              : r.context.setTransform(
                  o.a,
                  o.b,
                  o.c,
                  o.d,
                  o.tx * r.resolution,
                  o.ty * r.resolution,
                );
            var f = e.baseTexture.resolution;
            t.tint !== 16777215
              ? (t.cachedTint !== t.tint &&
                  ((t.cachedTint =
                    t.tint), (t.tintedTexture = h.default.getTintedTexture(
                    t,
                    t.tint,
                  ))), r.context.drawImage(
                  t.tintedTexture,
                  0,
                  0,
                  n * f,
                  i * f,
                  s * r.resolution,
                  l * r.resolution,
                  n * r.resolution,
                  i * r.resolution,
                ))
              : r.context.drawImage(
                  e.baseTexture.source,
                  e._frame.x * f,
                  e._frame.y * f,
                  n * f,
                  i * f,
                  s * r.resolution,
                  l * r.resolution,
                  n * r.resolution,
                  i * r.resolution,
                );
          }
        }), (t.prototype.destroy = function() {
          this.renderer = null;
        }), t;
      })();
    (e.default = d), s.default.registerPlugin('sprite', d);
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    function o(t, e) {
      if (!t) {
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      }
      return !e || (typeof e !== 'object' && typeof e !== 'function') ? t : e;
    }
    function s(t, e) {
      if (typeof e !== 'function' && e !== null) {
        throw new TypeError(
          `Super expression must either be null or a function, not ${typeof e}`,
        );
      }
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {value: t, enumerable: !1, writable: !0, configurable: !0},
      })), e &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(t, e)
          : (t.__proto__ = e));
    }
    e.__esModule = !0;
    var a = r(71),
      u = n(a),
      l = r(74),
      h = n(l),
      c = r(75),
      d = n(c),
      f = r(76),
      p = n(f),
      v = r(51),
      y = r(12),
      g = r(43),
      m = n(g),
      b = (function(t) {
        function e(r, n) {
          var s = arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : {};
          i(this, e);
          var a = o(this, t.call(this, 'Canvas', r, n, s));
          return (a.type =
            y.RENDERER_TYPE.CANVAS), (a.rootContext = a.view.getContext('2d', {
              alpha: a.transparent,
            })), (a.refresh = !0), (a.maskManager = new h.default(
            a,
          )), (a.smoothProperty = 'imageSmoothingEnabled'), a.rootContext
            .imageSmoothingEnabled ||
            (a.rootContext.webkitImageSmoothingEnabled
              ? (a.smoothProperty = 'webkitImageSmoothingEnabled')
              : a.rootContext.mozImageSmoothingEnabled
                  ? (a.smoothProperty = 'mozImageSmoothingEnabled')
                  : a.rootContext.oImageSmoothingEnabled
                      ? (a.smoothProperty = 'oImageSmoothingEnabled')
                      : a.rootContext.msImageSmoothingEnabled &&
                          (a.smoothProperty =
                            'msImageSmoothingEnabled')), a.initPlugins(), (a.blendModes = (0, p.default)()), (a._activeBlendMode = null), (a.context = null), (a.renderingToScreen = !1), a.resize(
            r,
            n,
          ), a;
        }
        return s(e, t), (e.prototype.render = function(t, e, r, n, i) {
          if (this.view) {
            (this.renderingToScreen = !e), this.emit('prerender');
            var o = this.resolution;
            e
              ? ((e = e.baseTexture || e), e._canvasRenderTarget ||
                  ((e._canvasRenderTarget = new d.default(
                    e.width,
                    e.height,
                    e.resolution,
                  )), (e.source =
                    e._canvasRenderTarget.canvas), (e.valid = !0)), (this.context =
                  e._canvasRenderTarget.context), (this.resolution =
                  e._canvasRenderTarget.resolution))
              : (this.context = this.rootContext);
            var s = this.context;
            if ((e || (this._lastObjectRendered = t), !i)) {
              var a = t.parent,
                u = this._tempDisplayObjectParent.transform.worldTransform;
              n
                ? n.copy(u)
                : u.identity(), (t.parent = this._tempDisplayObjectParent), t.updateTransform(), (t.parent = a);
            }
            s.setTransform(
              1,
              0,
              0,
              1,
              0,
              0,
            ), (s.globalAlpha = 1), (s.globalCompositeOperation = this.blendModes[
              y.BLEND_MODES.NORMAL
            ]), navigator.isCocoonJS &&
              this.view.screencanvas &&
              ((s.fillStyle = 'black'), s.clear()), (void 0 !== r
              ? r
              : this.clearBeforeRender) &&
              this.renderingToScreen &&
              (this.transparent
                ? s.clearRect(0, 0, this.width, this.height)
                : ((s.fillStyle = this._backgroundColorString), s.fillRect(
                    0,
                    0,
                    this.width,
                    this.height,
                  )));
            var l = this.context;
            (this.context = s), t.renderCanvas(
              this,
            ), (this.context = l), (this.resolution = o), this.emit(
              'postrender',
            );
          }
        }), (e.prototype.clear = function(t) {
          var e = this.context;
          (t = t || this._backgroundColorString), !this.transparent && t
            ? ((e.fillStyle = t), e.fillRect(0, 0, this.width, this.height))
            : e.clearRect(0, 0, this.width, this.height);
        }), (e.prototype.setBlendMode = function(t) {
          this._activeBlendMode !== t &&
            ((this._activeBlendMode = t), (this.context.globalCompositeOperation = this.blendModes[
              t
            ]));
        }), (e.prototype.destroy = function(e) {
          this.destroyPlugins(), t.prototype.destroy.call(
            this,
            e,
          ), (this.context = null), (this.refresh = !0), this.maskManager.destroy(), (this.maskManager = null), (this.smoothProperty = null);
        }), (e.prototype.resize = function(e, r) {
          t.prototype.resize.call(this, e, r), this.smoothProperty &&
            (this.rootContext[this.smoothProperty] =
              m.default.SCALE_MODE === y.SCALE_MODES.LINEAR);
        }), e;
      })(u.default);
    (e.default = b), v.pluginTarget.mixin(b);
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    function o(t, e) {
      if (!t) {
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      }
      return !e || (typeof e !== 'object' && typeof e !== 'function') ? t : e;
    }
    function s(t, e) {
      if (typeof e !== 'function' && e !== null) {
        throw new TypeError(
          `Super expression must either be null or a function, not ${typeof e}`,
        );
      }
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {value: t, enumerable: !1, writable: !0, configurable: !0},
      })), e &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(t, e)
          : (t.__proto__ = e));
    }
    e.__esModule = !0;
    var a = (function() {
        function t(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1), (n.configurable = !0), 'value' in
            n && (n.writable = !0), Object.defineProperty(t, n.key, n);
          }
        }
        return function(e, r, n) {
          return r && t(e.prototype, r), n && t(e, n), e;
        };
      })(),
      u = r(51),
      l = r(13),
      h = r(12),
      c = r(43),
      d = n(c),
      f = r(50),
      p = n(f),
      v = r(72),
      y = n(v),
      g = r(42),
      m = n(g),
      b = new l.Matrix(),
      x = (function(t) {
        function e(r, n, s, a) {
          i(this, e);
          var l = o(this, t.call(this));
          if (((0, u.sayHello)(r), a)) {
            for (var c in d.default.RENDER_OPTIONS) {
              typeof a[c] === 'undefined' &&
                (a[c] = d.default.RENDER_OPTIONS[c]);
            }
          } else { a = d.default.RENDER_OPTIONS; }
          return (l.type = h.RENDERER_TYPE.UNKNOWN), (l.width =
            n || 800), (l.height = s || 600), (l.view =
            a.view || document.createElement('canvas')), (l.resolution =
            a.resolution || d.default.RESOLUTION), (l.transparent =
            a.transparent), (l.autoResize =
            a.autoResize ||
            !1), (l.blendModes = null), (l.preserveDrawingBuffer =
            a.preserveDrawingBuffer), (l.clearBeforeRender =
            a.clearBeforeRender), (l.roundPixels =
            a.roundPixels), (l._backgroundColor = 0), (l._backgroundColorRgba = [
              0,
              0,
              0,
              0,
            ]), (l._backgroundColorString = '#000000'), (l.backgroundColor =
            a.backgroundColor ||
            l._backgroundColor), (l._tempDisplayObjectParent = new p.default()), (l._lastObjectRendered =
            l._tempDisplayObjectParent), l;
        }
        return s(e, t), (e.prototype.resize = function(t, e) {
          (this.width = t * this.resolution), (this.height =
            e *
            this
              .resolution), (this.view.width = this.width), (this.view.height = this.height), this
            .autoResize &&
            ((this.view.style.width =
              `${this.width / this.resolution}px`), (this.view.style.height =
              `${this.height / this.resolution}px`));
        }), (e.prototype.generateTexture = function(t, e, r) {
          var n = t.getLocalBounds(),
            i = y.default.create(0 | n.width, 0 | n.height, e, r);
          return (b.tx = -n.x), (b.ty = -n.y), this.render(t, i, !1, b, !0), i;
        }), (e.prototype.destroy = function(t) {
          t &&
            this.view.parentNode &&
            this.view.parentNode.removeChild(this.view), (this.type =
            h.RENDERER_TYPE.UNKNOWN), (this.width = 0), (this.height = 0), (this.view = null), (this.resolution = 0), (this.transparent = !1), (this.autoResize = !1), (this.blendModes = null), (this.preserveDrawingBuffer = !1), (this.clearBeforeRender = !1), (this.roundPixels = !1), (this._backgroundColor = 0), (this._backgroundColorRgba = null), (this._backgroundColorString = null), (this.backgroundColor = 0), (this._tempDisplayObjectParent = null), (this._lastObjectRendered = null);
        }), a(e, [
          {
            key: 'backgroundColor',
            get() {
              return this._backgroundColor;
            },
            set(t) {
              (this._backgroundColor = t), (this._backgroundColorString = (0, u.hex2string)(
                t,
              )), (0, u.hex2rgb)(t, this._backgroundColorRgba);
            },
          },
        ]), e;
      })(m.default);
    e.default = x;
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    function o(t, e) {
      if (!t) {
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      }
      return !e || (typeof e !== 'object' && typeof e !== 'function') ? t : e;
    }
    function s(t, e) {
      if (typeof e !== 'function' && e !== null) {
        throw new TypeError(
          `Super expression must either be null or a function, not ${typeof e}`,
        );
      }
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })), e &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(t, e)
          : (t.__proto__ = e));
    }
    e.__esModule = !0;
    var a = r(73),
      u = n(a),
      l = r(54),
      h = n(l),
      c = (function(t) {
        function e(r, n) {
          i(this, e);
          var s = null;
          if (!(r instanceof u.default)) {
            var a = arguments[1],
              l = arguments[2],
              h = arguments[3] || 0,
              c = arguments[4] || 1;
            console.warn(
              `Please use RenderTexture.create(${
                a
                }, ${
                l
                }) instead of the ctor directly.`,
            ), (s = arguments[0]), (n = null), (r = new u.default(a, l, h, c));
          }
          var d = o(this, t.call(this, r, n));
          return (d.legacyRenderer = s), (d.valid = !0), d._updateUvs(), d;
        }
        return s(e, t), (e.prototype.resize = function(t, e, r) {
          (this.valid =
            t > 0 &&
            e >
              0), (this._frame.width = this.orig.width = t), (this._frame.height = this.orig.height = e), r ||
            this.baseTexture.resize(t, e), this._updateUvs();
        }), (e.create = function(t, r, n, i) {
          return new e(new u.default(t, r, n, i));
        }), e;
      })(h.default);
    e.default = c;
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    function o(t, e) {
      if (!t) {
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      }
      return !e || (typeof e !== 'object' && typeof e !== 'function') ? t : e;
    }
    function s(t, e) {
      if (typeof e !== 'function' && e !== null) {
        throw new TypeError(
          `Super expression must either be null or a function, not ${typeof e}`,
        );
      }
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {value: t, enumerable: !1, writable: !0, configurable: !0},
      })), e &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(t, e)
          : (t.__proto__ = e));
    }
    e.__esModule = !0;
    var a = r(55),
      u = n(a),
      l = r(43),
      h = n(l),
      c = h.default.RESOLUTION,
      d = h.default.SCALE_MODE,
      f = (function(t) {
        function e() {
          var r = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : 100,
            n = arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 100,
            s = arguments[2],
            a = arguments[3];
          i(this, e);
          var u = o(this, t.call(this, null, s));
          return (u.resolution =
            a || c), (u.width = r), (u.height = n), (u.realWidth =
            u.width * u.resolution), (u.realHeight =
            u.height * u.resolution), (u.scaleMode =
            s ||
            d), (u.hasLoaded = !0), (u._glRenderTargets = {}), (u._canvasRenderTarget = null), (u.valid = !1), u;
        }
        return s(e, t), (e.prototype.resize = function(t, e) {
          (t === this.width && e === this.height) ||
            ((this.valid =
              t > 0 &&
              e > 0), (this.width = t), (this.height = e), (this.realWidth =
              this.width * this.resolution), (this.realHeight =
              this.height * this.resolution), this.valid &&
              this.emit('update', this));
        }), (e.prototype.destroy = function() {
          t.prototype.destroy.call(this, !0), (this.renderer = null);
        }), e;
      })(u.default);
    e.default = f;
  },
  function(t, e, r) {
    'use strict';
    function n(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    e.__esModule = !0;
    var i = r(12),
      o = (function() {
        function t(e) {
          n(this, t), (this.renderer = e);
        }
        return (t.prototype.pushMask = function(t) {
          var e = this.renderer;
          e.context.save();
          var r = t.alpha, n = t.transform.worldTransform, i = e.resolution;
          e.context.setTransform(
            n.a * i,
            n.b * i,
            n.c * i,
            n.d * i,
            n.tx * i,
            n.ty * i,
          ), t._texture ||
            (this.renderGraphicsShape(t), e.context.clip()), (t.worldAlpha = r);
        }), (t.prototype.renderGraphicsShape = function(t) {
          var e = this.renderer.context, r = t.graphicsData.length;
          if (r !== 0) {
            e.beginPath();
            for (var n = 0; n < r; n++) {
              var o = t.graphicsData[n], s = o.shape;
              if (o.type === i.SHAPES.POLY) {
                var a = s.points;
                e.moveTo(a[0], a[1]);
                for (var u = 1; u < a.length / 2; u++) { e.lineTo(a[2 * u], a[2 * u + 1]); }
                a[0] === a[a.length - 2] &&
                  a[1] === a[a.length - 1] &&
                  e.closePath();
              } else if (o.type === i.SHAPES.RECT) { e.rect(s.x, s.y, s.width, s.height), e.closePath(); } else if (o.type === i.SHAPES.CIRC) { e.arc(s.x, s.y, s.radius, 0, 2 * Math.PI), e.closePath(); } else if (o.type === i.SHAPES.ELIP) {
                var l = 2 * s.width,
                  h = 2 * s.height,
                  c = s.x - l / 2,
                  d = s.y - h / 2,
                  f = 0.5522848,
                  p = l / 2 * f,
                  v = h / 2 * f,
                  y = c + l,
                  g = d + h,
                  m = c + l / 2,
                  b = d + h / 2;
                e.moveTo(c, b), e.bezierCurveTo(
                  c,
                  b - v,
                  m - p,
                  d,
                  m,
                  d,
                ), e.bezierCurveTo(m + p, d, y, b - v, y, b), e.bezierCurveTo(
                  y,
                  b + v,
                  m + p,
                  g,
                  m,
                  g,
                ), e.bezierCurveTo(m - p, g, c, b + v, c, b), e.closePath();
              } else if (o.type === i.SHAPES.RREC) {
                var x = s.x,
                  _ = s.y,
                  w = s.width,
                  T = s.height,
                  E = s.radius,
                  S = (Math.min(w, T) / 2) | 0;
                (E = E > S ? S : E), e.moveTo(x, _ + E), e.lineTo(
                  x,
                  _ + T - E,
                ), e.quadraticCurveTo(x, _ + T, x + E, _ + T), e.lineTo(
                  x + w - E,
                  _ + T,
                ), e.quadraticCurveTo(x + w, _ + T, x + w, _ + T - E), e.lineTo(
                  x + w,
                  _ + E,
                ), e.quadraticCurveTo(x + w, _, x + w - E, _), e.lineTo(
                  x + E,
                  _,
                ), e.quadraticCurveTo(x, _, x, _ + E), e.closePath();
              }
            }
          }
        }), (t.prototype.popMask = function(t) {
          t.context.restore();
        }), (t.prototype.destroy = function() {}), t;
      })();
    e.default = o;
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    e.__esModule = !0;
    var o = (function() {
        function t(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1), (n.configurable = !0), 'value' in
            n && (n.writable = !0), Object.defineProperty(t, n.key, n);
          }
        }
        return function(e, r, n) {
          return r && t(e.prototype, r), n && t(e, n), e;
        };
      })(),
      s = r(43),
      a = n(s),
      u = a.default.RESOLUTION,
      l = (function() {
        function t(e, r, n) {
          i(this, t), (this.canvas = document.createElement(
            'canvas',
          )), (this.context = this.canvas.getContext('2d')), (this.resolution =
            n || u), this.resize(e, r);
        }
        return (t.prototype.clear = function() {
          this.context.setTransform(1, 0, 0, 1, 0, 0), this.context.clearRect(
            0,
            0,
            this.canvas.width,
            this.canvas.height,
          );
        }), (t.prototype.resize = function(t, e) {
          (this.canvas.width = t * this.resolution), (this.canvas.height =
            e * this.resolution);
        }), (t.prototype.destroy = function() {
          (this.context = null), (this.canvas = null);
        }), o(t, [
          {
            key: 'width',
            get() {
              return this.canvas.width;
            },
            set(t) {
              this.canvas.width = t;
            },
          },
          {
            key: 'height',
            get() {
              return this.canvas.height;
            },
            set(t) {
              this.canvas.height = t;
            },
          },
        ]), t;
      })();
    e.default = l;
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i() {
      var t = arguments.length > 0 && void 0 !== arguments[0]
        ? arguments[0]
        : [];
      return (0, a.default)()
        ? ((t[o.BLEND_MODES.NORMAL] = 'source-over'), (t[o.BLEND_MODES.ADD] =
            'lighter'), (t[o.BLEND_MODES.MULTIPLY] = 'multiply'), (t[
            o.BLEND_MODES.SCREEN
          ] =
            'screen'), (t[o.BLEND_MODES.OVERLAY] = 'overlay'), (t[
            o.BLEND_MODES.DARKEN
          ] =
            'darken'), (t[o.BLEND_MODES.LIGHTEN] = 'lighten'), (t[
            o.BLEND_MODES.COLOR_DODGE
          ] =
            'color-dodge'), (t[o.BLEND_MODES.COLOR_BURN] = 'color-burn'), (t[
            o.BLEND_MODES.HARD_LIGHT
          ] =
            'hard-light'), (t[o.BLEND_MODES.SOFT_LIGHT] = 'soft-light'), (t[
            o.BLEND_MODES.DIFFERENCE
          ] =
            'difference'), (t[o.BLEND_MODES.EXCLUSION] = 'exclusion'), (t[
            o.BLEND_MODES.HUE
          ] =
            'hue'), (t[o.BLEND_MODES.SATURATION] = 'saturate'), (t[
            o.BLEND_MODES.COLOR
          ] =
            'color'), (t[o.BLEND_MODES.LUMINOSITY] = 'luminosity'))
        : ((t[o.BLEND_MODES.NORMAL] = 'source-over'), (t[o.BLEND_MODES.ADD] =
            'lighter'), (t[o.BLEND_MODES.MULTIPLY] = 'source-over'), (t[
            o.BLEND_MODES.SCREEN
          ] =
            'source-over'), (t[o.BLEND_MODES.OVERLAY] = 'source-over'), (t[
            o.BLEND_MODES.DARKEN
          ] =
            'source-over'), (t[o.BLEND_MODES.LIGHTEN] = 'source-over'), (t[
            o.BLEND_MODES.COLOR_DODGE
          ] =
            'source-over'), (t[o.BLEND_MODES.COLOR_BURN] = 'source-over'), (t[
            o.BLEND_MODES.HARD_LIGHT
          ] =
            'source-over'), (t[o.BLEND_MODES.SOFT_LIGHT] = 'source-over'), (t[
            o.BLEND_MODES.DIFFERENCE
          ] =
            'source-over'), (t[o.BLEND_MODES.EXCLUSION] = 'source-over'), (t[
            o.BLEND_MODES.HUE
          ] =
            'source-over'), (t[o.BLEND_MODES.SATURATION] = 'source-over'), (t[
            o.BLEND_MODES.COLOR
          ] =
            'source-over'), (t[o.BLEND_MODES.LUMINOSITY] = 'source-over')), t;
    }
    (e.__esModule = !0), (e.default = i);
    var o = r(12), s = r(77), a = n(s);
  },
  function(t, e) {
    'use strict';
    function r(t) {
      var e = document.createElement('canvas');
      (e.width = 6), (e.height = 1);
      var r = e.getContext('2d');
      return (r.fillStyle = t), r.fillRect(0, 0, 6, 1), e;
    }
    function n() {
      if (typeof document === 'undefined') { return !1; }
      var t = r('#ff00ff'),
        e = r('#ffff00'),
        n = document.createElement('canvas');
      (n.width = 6), (n.height = 1);
      var i = n.getContext('2d');
      (i.globalCompositeOperation = 'multiply'), i.drawImage(
        t,
        0,
        0,
      ), i.drawImage(e, 2, 0);
      var o = i.getImageData(2, 0, 1, 1);
      if (!o) { return !1; }
      var s = o.data;
      return s[0] === 255 && s[1] === 0 && s[2] === 0;
    }
    (e.__esModule = !0), (e.default = n);
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    e.__esModule = !0;
    var i = r(51),
      o = r(77),
      s = n(o),
      a = {
        getTintedTexture(t, e) {
          var r = t.texture;
          e = a.roundColor(e);
          var n = `#${(`00000${(0 | e).toString(16)}`).substr(-6)}`;
          if (((r.tintCache = r.tintCache || {}), r.tintCache[n])) { return r.tintCache[n]; }
          var i = a.canvas || document.createElement('canvas');
          if ((a.tintMethod(r, e, i), a.convertTintToImage)) {
            var o = new Image();
            (o.src = i.toDataURL()), (r.tintCache[n] = o);
          } else { (r.tintCache[n] = i), (a.canvas = null); }
          return i;
        },
        tintWithMultiply(t, e, r) {
          var n = r.getContext('2d'),
            i = t._frame.clone(),
            o = t.baseTexture.resolution;
          (i.x *= o), (i.y *= o), (i.width *= o), (i.height *= o), (r.width =
            i.width), (r.height = i.height), (n.fillStyle =
            `#${(`00000${(0 | e).toString(16)}`).substr(-6)}`), n.fillRect(
            0,
            0,
            i.width,
            i.height,
          ), (n.globalCompositeOperation = 'multiply'), n.drawImage(
            t.baseTexture.source,
            i.x,
            i.y,
            i.width,
            i.height,
            0,
            0,
            i.width,
            i.height,
          ), (n.globalCompositeOperation = 'destination-atop'), n.drawImage(
            t.baseTexture.source,
            i.x,
            i.y,
            i.width,
            i.height,
            0,
            0,
            i.width,
            i.height,
          );
        },
        tintWithOverlay(t, e, r) {
          var n = r.getContext('2d'),
            i = t._frame.clone(),
            o = t.baseTexture.resolution;
          (i.x *= o), (i.y *= o), (i.width *= o), (i.height *= o), (r.width =
            i.width), (r.height = i.height), (n.globalCompositeOperation =
            'copy'), (n.fillStyle =
            `#${(`00000${(0 | e).toString(16)}`).substr(-6)}`), n.fillRect(
            0,
            0,
            i.width,
            i.height,
          ), (n.globalCompositeOperation = 'destination-atop'), n.drawImage(
            t.baseTexture.source,
            i.x,
            i.y,
            i.width,
            i.height,
            0,
            0,
            i.width,
            i.height,
          );
        },
        tintWithPerPixel(t, e, r) {
          var n = r.getContext('2d'),
            o = t._frame.clone(),
            s = t.baseTexture.resolution;
          (o.x *= s), (o.y *= s), (o.width *= s), (o.height *= s), (r.width =
            o.width), (r.height = o.height), (n.globalCompositeOperation =
            'copy'), n.drawImage(
            t.baseTexture.source,
            o.x,
            o.y,
            o.width,
            o.height,
            0,
            0,
            o.width,
            o.height,
          );
          for (
            var a = (0, i.hex2rgb)(e),
              u = a[0],
              l = a[1],
              h = a[2],
              c = n.getImageData(0, 0, o.width, o.height),
              d = c.data,
              f = 0;
            f < d.length;
            f += 4
          ) { (d[f + 0] *= u), (d[f + 1] *= l), (d[f + 2] *= h); }
          n.putImageData(c, 0, 0);
        },
        roundColor(t) {
          var e = a.cacheStepsPerColorChannel, r = (0, i.hex2rgb)(t);
          return (r[0] = Math.min(255, r[0] / e * e)), (r[1] = Math.min(
            255,
            r[1] / e * e,
          )), (r[2] = Math.min(255, r[2] / e * e)), (0, i.rgb2hex)(r);
        },
        cacheStepsPerColorChannel: 8,
        convertTintToImage: !1,
        canUseMultiply: (0, s.default)(),
        tintMethod: 0,
      };
    (a.tintMethod = a.canUseMultiply
      ? a.tintWithMultiply
      : a.tintWithPerPixel), (e.default = a);
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    function o(t, e) {
      if (!t) {
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      }
      return !e || (typeof e !== 'object' && typeof e !== 'function') ? t : e;
    }
    function s(t, e) {
      if (typeof e !== 'function' && e !== null) {
        throw new TypeError(
          `Super expression must either be null or a function, not ${typeof e}`,
        );
      }
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {value: t, enumerable: !1, writable: !0, configurable: !0},
      })), e &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(t, e)
          : (t.__proto__ = e));
    }
    e.__esModule = !0;
    var a = r(80),
      u = n(a),
      l = r(82),
      h = n(l),
      c = r(93),
      d = n(c),
      f = r(102),
      p = n(f),
      v = r(103),
      y = n(v),
      g = r(104),
      m = n(g),
      b = r(43),
      x = n(b),
      _ = r(23),
      w = n(_),
      T = r(64),
      E = n(T),
      S = 0,
      P = 0,
      O = (function(t) {
        function e(r) {
          i(this, e);
          var n = o(this, t.call(this, r));
          (n.vertSize = 5), (n.vertByteSize = 4 * n.vertSize), (n.size =
            x.default.SPRITE_BATCH_SIZE), (n.buffers = []);
          for (var s = 1; s <= E.default.nextPow2(n.size); s *= 2) { n.buffers.push(new m.default(4 * s * n.vertByteSize)); }
          (n.indices = (0, d.default)(
            n.size,
          )), (n.shader = null), (n.currentIndex = 0), (S = 0), (n.groups = []);
          for (var a = 0; a < n.size; a++) {
            n.groups[a] = {
              textures: [],
              textureCount: 0,
              ids: [],
              size: 0,
              start: 0,
              blend: 0,
            };
          }
          return (n.sprites = []), (n.vertexBuffers = []), (n.vaos = []), (n.vaoMax = 2), (n.vertexCount = 0), n.renderer.on(
            'prerender',
            n.onPrerender,
            n,
          ), n;
        }
        return s(e, t), (e.prototype.onContextChange = function() {
          var t = this.renderer.gl;
          (this.MAX_TEXTURES = Math.min(
            t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),
            x.default.SPRITE_MAX_TEXTURES,
          )), (this.MAX_TEXTURES = (0, y.default)(this.MAX_TEXTURES, t));
          var e = (this.shader = (0, p.default)(t, this.MAX_TEXTURES));
          (this.indexBuffer = w.default.GLBuffer.createIndexBuffer(
            t,
            this.indices,
            t.STATIC_DRAW,
          )), this.renderer.bindVao(null);
          for (var r = 0; r < this.vaoMax; r++) {
            (this.vertexBuffers[r] = w.default.GLBuffer.createVertexBuffer(
              t,
              null,
              t.STREAM_DRAW,
            )), (this.vaos[r] = this.renderer
              .createVao()
              .addIndex(this.indexBuffer)
              .addAttribute(
                this.vertexBuffers[r],
                e.attributes.aVertexPosition,
                t.FLOAT,
                !1,
                this.vertByteSize,
                0,
              )
              .addAttribute(
                this.vertexBuffers[r],
                e.attributes.aTextureCoord,
                t.UNSIGNED_SHORT,
                !0,
                this.vertByteSize,
                8,
              )
              .addAttribute(
                this.vertexBuffers[r],
                e.attributes.aColor,
                t.UNSIGNED_BYTE,
                !0,
                this.vertByteSize,
                12,
              )
              .addAttribute(
                this.vertexBuffers[r],
                e.attributes.aTextureId,
                t.FLOAT,
                !1,
                this.vertByteSize,
                16,
              ));
          }
          (this.vao = this.vaos[0]), (this.currentBlendMode = 99999), (this.boundTextures = new Array(
            this.MAX_TEXTURES,
          ));
        }), (e.prototype.onPrerender = function() {
          this.vertexCount = 0;
        }), (e.prototype.render = function(t) {
          this.currentIndex >= this.size && this.flush(), t._texture._uvs &&
            (this.sprites[this.currentIndex++] = t);
        }), (e.prototype.flush = function() {
          if (this.currentIndex !== 0) {
            var t = this.renderer.gl,
              e = this.MAX_TEXTURES,
              r = E.default.nextPow2(this.currentIndex),
              n = E.default.log2(r),
              i = this.buffers[n],
              o = this.sprites,
              s = this.groups,
              a = i.float32View,
              u = i.uint32View,
              l = this.boundTextures,
              h = this.renderer.boundTextures,
              c = this.renderer.textureGC.count,
              d = 0,
              f = void 0,
              p = void 0,
              v = 1,
              y = 0,
              g = s[0],
              m = void 0,
              b = void 0,
              _ = o[0].blendMode;
            (g.textureCount = 0), (g.start = 0), (g.blend = _), S++;
            var T = void 0;
            for (T = 0; T < e; ++T) { (l[T] = h[T]), (l[T]._virtalBoundId = T); }
            for (T = 0; T < this.currentIndex; ++T) {
              var O = o[T];
              if (
                ((f = O._texture.baseTexture), _ !== O.blendMode &&
                  ((_ = O.blendMode), (p = null), (y = e), S++), p !== f &&
                  ((p = f), f._enabled !== S))
              ) {
                if (
                  (y === e &&
                    (S++, (g.size = T - g.start), (y = 0), (g =
                      s[
                        v++
                      ]), (g.blend = _), (g.textureCount = 0), (g.start = T)), (f.touched = c), f._virtalBoundId ===
                    -1)
                ) {
                  for (var M = 0; M < e; ++M) {
                    var C = (M + P) % e, A = l[C];
                    if (A._enabled !== S) {
                      P++, (A._virtalBoundId = -1), (f._virtalBoundId = C), (l[
                        C
                      ] = f);
                      break;
                    }
                  }
                }
                (f._enabled = S), g.textureCount++, (g.ids[y] =
                  f._virtalBoundId), (g.textures[y++] = f);
              }
              if (
                ((m = O.vertexData), (b = O._texture._uvs.uvsUint32), this
                  .renderer.roundPixels)
              ) {
                var R = this.renderer.resolution;
                (a[d] = ((m[0] * R) | 0) / R), (a[d + 1] =
                  ((m[1] * R) | 0) / R), (a[d + 5] = ((m[2] * R) | 0) / R), (a[
                  d + 6
                ] =
                  ((m[3] * R) | 0) / R), (a[d + 10] = ((m[4] * R) | 0) / R), (a[
                  d + 11
                ] =
                  ((m[5] * R) | 0) / R), (a[d + 15] = ((m[6] * R) | 0) / R), (a[
                  d + 16
                ] =
                  ((m[7] * R) | 0) / R);
              } else {
                (a[d] = m[0]), (a[d + 1] = m[1]), (a[d + 5] = m[2]), (a[d + 6] =
                  m[3]), (a[d + 10] = m[4]), (a[d + 11] = m[5]), (a[d + 15] =
                  m[6]), (a[d + 16] = m[7]);
              }
              (u[d + 2] = b[0]), (u[d + 7] = b[1]), (u[d + 12] = b[2]), (u[
                d + 17
              ] =
                b[3]), (u[d + 3] = u[d + 8] = u[d + 13] = u[d + 18] =
                O._tintRGB + ((255 * Math.min(O.worldAlpha, 1)) << 24)), (a[
                d + 4
              ] = a[d + 9] = a[d + 14] = a[d + 19] =
                f._virtalBoundId), (d += 20);
            }
            for (
              (g.size = T - g.start), x.default.CAN_UPLOAD_SAME_BUFFER
                ? this.vertexBuffers[this.vertexCount].upload(i.vertices, 0, !0)
                : (this.vaoMax <= this.vertexCount &&
                    (this.vaoMax++, (this.vertexBuffers[
                      this.vertexCount
                    ] = w.default.GLBuffer.createVertexBuffer(
                      t,
                      null,
                      t.STREAM_DRAW,
                    )), (this.vaos[
                      this.vertexCount
                    ] = this.renderer
                      .createVao()
                      .addIndex(this.indexBuffer)
                      .addAttribute(
                        this.vertexBuffers[this.vertexCount],
                        this.shader.attributes.aVertexPosition,
                        t.FLOAT,
                        !1,
                        this.vertByteSize,
                        0,
                      )
                      .addAttribute(
                        this.vertexBuffers[this.vertexCount],
                        this.shader.attributes.aTextureCoord,
                        t.UNSIGNED_SHORT,
                        !0,
                        this.vertByteSize,
                        8,
                      )
                      .addAttribute(
                        this.vertexBuffers[this.vertexCount],
                        this.shader.attributes.aColor,
                        t.UNSIGNED_BYTE,
                        !0,
                        this.vertByteSize,
                        12,
                      )
                      .addAttribute(
                        this.vertexBuffers[this.vertexCount],
                        this.shader.attributes.aTextureId,
                        t.FLOAT,
                        !1,
                        this.vertByteSize,
                        16,
                      ))), this.renderer.bindVao(
                    this.vaos[this.vertexCount],
                  ), this.vertexBuffers[this.vertexCount].upload(
                    i.vertices,
                    0,
                    !1,
                  ), this.vertexCount++), (T = 0);
              T < e;
              ++T
            ) { h[T]._virtalBoundId = -1; }
            for (T = 0; T < v; ++T) {
              for (var D = s[T], I = D.textureCount, L = 0; L < I; L++) {
                (p = D.textures[L]), h[D.ids[L]] !== p &&
                  this.renderer.bindTexture(
                    p,
                    D.ids[L],
                    !0,
                  ), (p._virtalBoundId = -1);
              }
              this.renderer.state.setBlendMode(D.blend), t.drawElements(
                t.TRIANGLES,
                6 * D.size,
                t.UNSIGNED_SHORT,
                6 * D.start * 2,
              );
            }
            this.currentIndex = 0;
          }
        }), (e.prototype.start = function() {
          this.renderer.bindShader(this.shader), x.default
            .CAN_UPLOAD_SAME_BUFFER &&
            (this.renderer.bindVao(
              this.vaos[this.vertexCount],
            ), this.vertexBuffers[this.vertexCount].bind());
        }), (e.prototype.stop = function() {
          this.flush();
        }), (e.prototype.destroy = function() {
          for (var e = 0; e < this.vaoMax; e++) {
            this.vertexBuffers[e] && this.vertexBuffers[e].destroy(), this.vaos[
              e
            ] && this.vaos[e].destroy();
          }
          this.indexBuffer && this.indexBuffer.destroy(), this.renderer.off(
            'prerender',
            this.onPrerender,
            this,
          ), t.prototype.destroy.call(this), this.shader &&
            (this.shader.destroy(), (this.shader = null)), (this.vertexBuffers = null), (this.vaos = null), (this.indexBuffer = null), (this.indices = null), (this.sprites = null);
          for (var r = 0; r < this.buffers.length; ++r) { this.buffers[r].destroy(); }
        }), e;
      })(u.default);
    (e.default = O), h.default.registerPlugin('sprite', O);
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    function o(t, e) {
      if (!t) {
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      }
      return !e || (typeof e !== 'object' && typeof e !== 'function') ? t : e;
    }
    function s(t, e) {
      if (typeof e !== 'function' && e !== null) {
        throw new TypeError(
          `Super expression must either be null or a function, not ${typeof e}`,
        );
      }
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {value: t, enumerable: !1, writable: !0, configurable: !0},
      })), e &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(t, e)
          : (t.__proto__ = e));
    }
    e.__esModule = !0;
    var a = r(81),
      u = n(a),
      l = (function(t) {
        function e() {
          return i(this, e), o(this, t.apply(this, arguments));
        }
        return s(
          e,
          t,
        ), (e.prototype.start = function() {}), (e.prototype.stop = function() {
          this.flush();
        }), (e.prototype.flush = function() {}), (e.prototype.render = function(
          t,
        ) {}), e;
      })(u.default);
    e.default = l;
  },
  function(t, e) {
    'use strict';
    function r(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    e.__esModule = !0;
    var n = (function() {
      function t(e) {
        r(this, t), (this.renderer = e), this.renderer.on(
          'context',
          this.onContextChange,
          this,
        );
      }
      return (t.prototype.onContextChange = function() {}), (t.prototype.destroy = function() {
        this.renderer.off(
          'context',
          this.onContextChange,
          this,
        ), (this.renderer = null);
      }), t;
    })();
    e.default = n;
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    function o(t, e) {
      if (!t) {
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      }
      return !e || (typeof e !== 'object' && typeof e !== 'function') ? t : e;
    }
    function s(t, e) {
      if (typeof e !== 'function' && e !== null) {
        throw new TypeError(
          `Super expression must either be null or a function, not ${typeof e}`,
        );
      }
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {value: t, enumerable: !1, writable: !0, configurable: !0},
      })), e &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(t, e)
          : (t.__proto__ = e));
    }
    e.__esModule = !0;
    var a = r(71),
      u = n(a),
      l = r(83),
      h = n(l),
      c = r(89),
      d = n(c),
      f = r(90),
      p = n(f),
      v = r(91),
      y = n(v),
      g = r(80),
      m = n(g),
      b = r(96),
      x = n(b),
      _ = r(55),
      w = n(_),
      T = r(97),
      E = n(T),
      S = r(98),
      P = n(S),
      O = r(100),
      M = n(O),
      C = r(101),
      A = n(C),
      R = r(51),
      D = r(23),
      I = n(D),
      L = r(12),
      k = 0,
      B = (function(t) {
        function e(r, n) {
          var s = arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : {};
          i(this, e);
          var a = o(this, t.call(this, 'WebGL', r, n, s));
          return (a.type =
            L.RENDERER_TYPE.WEBGL), (a.handleContextLost = a.handleContextLost.bind(
            a,
          )), (a.handleContextRestored = a.handleContextRestored.bind(
            a,
          )), a.view.addEventListener(
            'webglcontextlost',
            a.handleContextLost,
            !1,
          ), a.view.addEventListener(
            'webglcontextrestored',
            a.handleContextRestored,
            !1,
          ), (a._contextOptions = {
            alpha: a.transparent,
            antialias: s.antialias,
            premultipliedAlpha: a.transparent &&
              a.transparent !== 'notMultiplied',
            stencil: !0,
            preserveDrawingBuffer: s.preserveDrawingBuffer,
          }), (a._backgroundColorRgba[3] = a.transparent
            ? 0
            : 1), (a.maskManager = new h.default(
            a,
          )), (a.stencilManager = new d.default(
            a,
          )), (a.emptyRenderer = new m.default(a)), (a.currentRenderer =
            a.emptyRenderer), a.initPlugins(), s.context &&
            (0, A.default)(s.context), (a.gl =
            s.context ||
            I.default.createContext(
              a.view,
              a._contextOptions,
            )), (a.CONTEXT_UID = k++), (a.state = new P.default(
            a.gl,
          )), (a.renderingToScreen = !0), (a.boundTextures = null), (a._activeShader = null), (a._activeVao = null), (a._activeRenderTarget = null), a._initContext(), (a.filterManager = new p.default(
            a,
          )), (a.drawModes = (0, M.default)(
            a.gl,
          )), (a._nextTextureLocation = 0), a.setBlendMode(0), a;
        }
        return s(e, t), (e.prototype._initContext = function() {
          var t = this.gl;
          t.isContextLost() &&
            t.getExtension('WEBGL_lose_context') &&
            t.getExtension('WEBGL_lose_context').restoreContext();
          var e = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS);
          (this.boundTextures = new Array(e)), (this.emptyTextures = new Array(
            e,
          )), (this.textureManager = new x.default(
            this,
          )), (this.textureGC = new E.default(
            this,
          )), this.state.resetToDefault(), (this.rootRenderTarget = new y.default(
            t,
            this.width,
            this.height,
            null,
            this.resolution,
            !0,
          )), (this.rootRenderTarget.clearColor = this._backgroundColorRgba), this.bindRenderTarget(
            this.rootRenderTarget,
          );
          var r = new I.default.GLTexture.fromData(t, null, 1, 1),
            n = {_glTextures: {}};
          n._glTextures[this.CONTEXT_UID] = {};
          for (var i = 0; i < e; i++) {
            var o = new w.default();
            (o._glTextures[this.CONTEXT_UID] = r), (this.boundTextures[
              i
            ] = n), (this.emptyTextures[i] = o), this.bindTexture(null, i);
          }
          this.emit('context', t), this.resize(this.width, this.height);
        }), (e.prototype.render = function(t, e, r, n, i) {
          if (
            ((this.renderingToScreen = !e), this.emit('prerender'), this.gl &&
              !this.gl.isContextLost())
          ) {
            if (
              ((this._nextTextureLocation = 0), e ||
                (this._lastObjectRendered = t), !i)
            ) {
              var o = t.parent;
              (t.parent = this._tempDisplayObjectParent), t.updateTransform(), (t.parent = o);
            }
            this.bindRenderTexture(
              e,
              n,
            ), this.currentRenderer.start(), (void 0 !== r
              ? r
              : this.clearBeforeRender) &&
              this._activeRenderTarget.clear(), t.renderWebGL(
              this,
            ), this.currentRenderer.flush(), this.textureGC.update(), this.emit(
              'postrender',
            );
          }
        }), (e.prototype.setObjectRenderer = function(t) {
          this.currentRenderer !== t &&
            (this.currentRenderer.stop(), (this.currentRenderer = t), this.currentRenderer.start());
        }), (e.prototype.flush = function() {
          this.setObjectRenderer(this.emptyRenderer);
        }), (e.prototype.resize = function(t, e) {
          u.default.prototype.resize.call(
            this,
            t,
            e,
          ), this.rootRenderTarget.resize(t, e), this._activeRenderTarget ===
            this.rootRenderTarget &&
            (this.rootRenderTarget.activate(), this._activeShader &&
              (this._activeShader.uniforms.projectionMatrix = this.rootRenderTarget.projectionMatrix.toArray(
                !0,
              )));
        }), (e.prototype.setBlendMode = function(t) {
          this.state.setBlendMode(t);
        }), (e.prototype.clear = function(t) {
          this._activeRenderTarget.clear(t);
        }), (e.prototype.setTransform = function(t) {
          this._activeRenderTarget.transform = t;
        }), (e.prototype.bindRenderTexture = function(t, e) {
          var r = void 0;
          if (t) {
            var n = t.baseTexture;
            n._glRenderTargets[this.CONTEXT_UID] ||
              this.textureManager.updateTexture(n, 0), this.unbindTexture(
              n,
            ), (r = n._glRenderTargets[this.CONTEXT_UID]), r.setFrame(t.frame);
          } else { r = this.rootRenderTarget; }
          return (r.transform = e), this.bindRenderTarget(r), this;
        }), (e.prototype.bindRenderTarget = function(t) {
          return t !== this._activeRenderTarget &&
            ((this._activeRenderTarget = t), t.activate(), this._activeShader &&
              (this._activeShader.uniforms.projectionMatrix = t.projectionMatrix.toArray(
                !0,
              )), this.stencilManager.setMaskStack(t.stencilMaskStack)), this;
        }), (e.prototype.bindShader = function(t) {
          return this._activeShader !== t &&
            ((this._activeShader = t), t.bind(), (t.uniforms.projectionMatrix = this._activeRenderTarget.projectionMatrix.toArray(
              !0,
            ))), this;
        }), (e.prototype.bindTexture = function(t, e, r) {
          if (
            ((t = t || this.emptyTextures[e]), (t =
              t.baseTexture || t), (t.touched = this.textureGC.count), r)
          ) { e = e || 0; } else {
            for (var n = 0; n < this.boundTextures.length; n++) { if (this.boundTextures[n] === t) { return n; } }
            void 0 === e &&
              (this._nextTextureLocation++, (this._nextTextureLocation %= this.boundTextures.length), (e =
                this.boundTextures.length - this._nextTextureLocation - 1));
          }
          var i = this.gl, o = t._glTextures[this.CONTEXT_UID];
          return o
            ? ((this.boundTextures[e] = t), i.activeTexture(
                i.TEXTURE0 + e,
              ), i.bindTexture(i.TEXTURE_2D, o.texture))
            : this.textureManager.updateTexture(t, e), e;
        }), (e.prototype.unbindTexture = function(t) {
          var e = this.gl;
          t = t.baseTexture || t;
          for (var r = 0; r < this.boundTextures.length; r++) {
            this.boundTextures[r] === t &&
              ((this.boundTextures[r] = this.emptyTextures[r]), e.activeTexture(
                e.TEXTURE0 + r,
              ), e.bindTexture(
                e.TEXTURE_2D,
                this.emptyTextures[r]._glTextures[this.CONTEXT_UID].texture,
              ));
          }
          return this;
        }), (e.prototype.createVao = function() {
          return new I.default.VertexArrayObject(
            this.gl,
            this.state.attribState,
          );
        }), (e.prototype.bindVao = function(t) {
          return this._activeVao === t
            ? this
            : (t
                ? t.bind()
                : this._activeVao &&
                    this._activeVao.unbind(), (this._activeVao = t), this);
        }), (e.prototype.reset = function() {
          return this.setObjectRenderer(
            this.emptyRenderer,
          ), (this._activeShader = null), (this._activeRenderTarget = this.rootRenderTarget), this.rootRenderTarget.activate(), this.state.resetToDefault(), this;
        }), (e.prototype.handleContextLost = function(t) {
          t.preventDefault();
        }), (e.prototype.handleContextRestored = function() {
          this._initContext(), this.textureManager.removeAll();
        }), (e.prototype.destroy = function(e) {
          this.destroyPlugins(), this.view.removeEventListener(
            'webglcontextlost',
            this.handleContextLost,
          ), this.view.removeEventListener(
            'webglcontextrestored',
            this.handleContextRestored,
          ), this.textureManager.destroy(), t.prototype.destroy.call(
            this,
            e,
          ), (this.uid = 0), this.maskManager.destroy(), this.stencilManager.destroy(), this.filterManager.destroy(), (this.maskManager = null), (this.filterManager = null), (this.textureManager = null), (this.currentRenderer = null), (this.handleContextLost = null), (this.handleContextRestored = null), (this._contextOptions = null), this.gl.useProgram(
            null,
          ), this.gl.getExtension('WEBGL_lose_context') &&
            this.gl
              .getExtension('WEBGL_lose_context')
              .loseContext(), (this.gl = null);
        }), e;
      })(u.default);
    (e.default = B), R.pluginTarget.mixin(B);
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    function o(t, e) {
      if (!t) {
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      }
      return !e || (typeof e !== 'object' && typeof e !== 'function') ? t : e;
    }
    function s(t, e) {
      if (typeof e !== 'function' && e !== null) {
        throw new TypeError(
          `Super expression must either be null or a function, not ${typeof e}`,
        );
      }
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {value: t, enumerable: !1, writable: !0, configurable: !0},
      })), e &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(t, e)
          : (t.__proto__ = e));
    }
    e.__esModule = !0;
    var a = r(81),
      u = n(a),
      l = r(84),
      h = n(l),
      c = (function(t) {
        function e(r) {
          i(this, e);
          var n = o(this, t.call(this, r));
          return (n.scissor = !1), (n.scissorData = null), (n.scissorRenderTarget = null), (n.enableScissor = !0), (n.alphaMaskPool = []), (n.alphaMaskIndex = 0), n;
        }
        return s(e, t), (e.prototype.pushMask = function(t, e) {
          if (e.texture) { this.pushSpriteMask(t, e); } else if (
            this.enableScissor &&
            !this.scissor &&
            this.renderer._activeRenderTarget.root &&
            !this.renderer.stencilManager.stencilMaskStack.length &&
            e.isFastRect()
          ) {
            var r = e.worldTransform, n = Math.atan2(r.b, r.a);
            (n = Math.round(n * (180 / Math.PI))), n % 90
              ? this.pushStencilMask(e)
              : this.pushScissorMask(t, e);
          } else { this.pushStencilMask(e); }
        }), (e.prototype.popMask = function(t, e) {
          e.texture
            ? this.popSpriteMask(t, e)
            : this.enableScissor &&
                !this.renderer.stencilManager.stencilMaskStack.length
                ? this.popScissorMask(t, e)
                : this.popStencilMask(t, e);
        }), (e.prototype.pushSpriteMask = function(t, e) {
          var r = this.alphaMaskPool[this.alphaMaskIndex];
          r ||
            (r = this.alphaMaskPool[this.alphaMaskIndex] = [
              new h.default(e),
            ]), (r[0].resolution = this.renderer.resolution), (r[0].maskSprite = e), (t.filterArea = e.getBounds(
            !0,
          )), this.renderer.filterManager.pushFilter(t, r), this.alphaMaskIndex++;
        }), (e.prototype.popSpriteMask = function() {
          this.renderer.filterManager.popFilter(), this.alphaMaskIndex--;
        }), (e.prototype.pushStencilMask = function(t) {
          this.renderer.currentRenderer.stop(), this.renderer.stencilManager.pushStencil(
            t,
          );
        }), (e.prototype.popStencilMask = function() {
          this.renderer.currentRenderer.stop(), this.renderer.stencilManager.popStencil();
        }), (e.prototype.pushScissorMask = function(t, e) {
          e.renderable = !0;
          var r = this.renderer._activeRenderTarget, n = e.getBounds();
          n.fit(r.size), (e.renderable = !1), this.renderer.gl.enable(
            this.renderer.gl.SCISSOR_TEST,
          );
          var i = this.renderer.resolution;
          this.renderer.gl.scissor(
            n.x * i,
            (r.root ? r.size.height - n.y - n.height : n.y) * i,
            n.width * i,
            n.height * i,
          ), (this.scissorRenderTarget = r), (this.scissorData = e), (this.scissor = !0);
        }), (e.prototype.popScissorMask = function() {
          (this.scissorRenderTarget = null), (this.scissorData = null), (this.scissor = !1);
          var t = this.renderer.gl;
          t.disable(t.SCISSOR_TEST);
        }), e;
      })(u.default);
    e.default = c;
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    function o(t, e) {
      if (!t) {
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      }
      return !e || (typeof e !== 'object' && typeof e !== 'function') ? t : e;
    }
    function s(t, e) {
      if (typeof e !== 'function' && e !== null) {
        throw new TypeError(
          `Super expression must either be null or a function, not ${typeof e}`,
        );
      }
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {value: t, enumerable: !1, writable: !0, configurable: !0},
      })), e &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(t, e)
          : (t.__proto__ = e));
    }
    e.__esModule = !0;
    var a = r(85),
      u = n(a),
      l = r(13),
      h = (r(87), (function(t) {
        function e(r) {
          i(this, e);
          var n = new l.Matrix(),
            s = o(
              this,
              t.call(
                this,
                'attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 otherMatrix;\n\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n}\n',
                'varying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float alpha;\nuniform sampler2D mask;\n\nvoid main(void)\n{\n    // check clip! this will stop the mask bleeding out from the edges\n    vec2 text = abs( vMaskCoord - 0.5 );\n    text = step(0.5, text);\n\n    float clip = 1.0 - max(text.y, text.x);\n    vec4 original = texture2D(uSampler, vTextureCoord);\n    vec4 masky = texture2D(mask, vMaskCoord);\n\n    original *= (masky.r * masky.a * alpha * clip);\n\n    gl_FragColor = original;\n}\n',
              ),
            );
          return (r.renderable = !1), (s.maskSprite = r), (s.maskMatrix = n), s;
        }
        return s(e, t), (e.prototype.apply = function(t, e, r) {
          var n = this.maskSprite;
          (this.uniforms.mask =
            n._texture), (this.uniforms.otherMatrix = t.calculateSpriteMatrix(
            this.maskMatrix,
            n,
          )), (this.uniforms.alpha = n.worldAlpha), t.applyFilter(this, e, r);
        }), e;
      })(u.default));
    e.default = h;
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    e.__esModule = !0;
    var o = (function() {
        function t(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1), (n.configurable = !0), 'value' in
            n && (n.writable = !0), Object.defineProperty(t, n.key, n);
          }
        }
        return function(e, r, n) {
          return r && t(e.prototype, r), n && t(e, n), e;
        };
      })(),
      s = r(86),
      a = n(s),
      u = r(51),
      l = r(12),
      h = {},
      c = (function() {
        function t(e, r, n) {
          i(this, t), (this.vertexSrc =
            e || t.defaultVertexSrc), (this.fragmentSrc =
            r || t.defaultFragmentSrc), (this.blendMode =
            l.BLEND_MODES.NORMAL), (this.uniformData =
            n ||
            (0, a.default)(
              this.vertexSrc,
              this.fragmentSrc,
              'projectionMatrix|uSampler',
            )), (this.uniforms = {});
          for (var o in this.uniformData) { this.uniforms[o] = this.uniformData[o].value; }
          (this.glShaders = {}), h[this.vertexSrc + this.fragmentSrc] ||
            (h[
              this.vertexSrc + this.fragmentSrc
            ] = (0, u.uid)()), (this.glShaderKey =
            h[
              this.vertexSrc + this.fragmentSrc
            ]), (this.padding = 4), (this.resolution = 1), (this.enabled = !0);
        }
        return (t.prototype.apply = function(t, e, r, n) {
          t.applyFilter(this, e, r, n);
        }), o(t, null, [
          {
            key: 'defaultVertexSrc',
            get() {
              return [
                'attribute vec2 aVertexPosition;',
                'attribute vec2 aTextureCoord;',
                'uniform mat3 projectionMatrix;',
                'uniform mat3 filterMatrix;',
                'varying vec2 vTextureCoord;',
                'varying vec2 vFilterCoord;',
                'void main(void){',
                '   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);',
                '   vFilterCoord = ( filterMatrix * vec3( aTextureCoord, 1.0)  ).xy;',
                '   vTextureCoord = aTextureCoord ;',
                '}',
              ].join('\n');
            },
          },
          {
            key: 'defaultFragmentSrc',
            get() {
              return [
                'varying vec2 vTextureCoord;',
                'varying vec2 vFilterCoord;',
                'uniform sampler2D uSampler;',
                'uniform sampler2D filterSampler;',
                'void main(void){',
                '   vec4 masky = texture2D(filterSampler, vFilterCoord);',
                '   vec4 sample = texture2D(uSampler, vTextureCoord);',
                '   vec4 color;',
                '   if(mod(vFilterCoord.x, 1.0) > 0.5)',
                '   {',
                '     color = vec4(1.0, 0.0, 0.0, 1.0);',
                '   }',
                '   else',
                '   {',
                '     color = vec4(0.0, 1.0, 0.0, 1.0);',
                '   }',
                '   gl_FragColor = mix(sample, masky, 0.5);',
                '   gl_FragColor *= sample.a;',
                '}',
              ].join('\n');
            },
          },
        ]), t;
      })();
    e.default = c;
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i(t, e, r) {
      var n = o(t, r), i = o(e, r);
      return Object.assign(n, i);
    }
    function o(t) {
      for (
        var e = new RegExp('^(projectionMatrix|uSampler|filterArea)$'),
          r = {},
          n = void 0,
          i = t.replace(/\s+/g, ' ').split(/\s*;\s*/),
          o = 0;
        o < i.length;
        o++
      ) {
        var s = i[o].trim();
        if (s.indexOf('uniform') > -1) {
          var a = s.split(' '), l = a[1], h = a[2], c = 1;
          h.indexOf('[') > -1 &&
            ((n = h.split(/\[|]/)), (h = n[0]), (c *= Number(n[1]))), h.match(
            e,
          ) || (r[h] = {value: u(l, c), name: h, type: l});
        }
      }
      return r;
    }
    (e.__esModule = !0), (e.default = i);
    var s = r(23), a = n(s), u = a.default.shader.defaultValue;
  },
  function(t, e, r) {
    (function(t) {
      function r(t, e) {
        for (var r = 0, n = t.length - 1; n >= 0; n--) {
          var i = t[n];
          i === '.'
            ? t.splice(n, 1)
            : i === '..' ? (t.splice(n, 1), r++) : r && (t.splice(n, 1), r--);
        }
        if (e) { for (; r--; r) { t.unshift('..'); } }
        return t;
      }
      function n(t, e) {
        if (t.filter) { return t.filter(e); }
        for (var r = [], n = 0; n < t.length; n++) { e(t[n], n, t) && r.push(t[n]); }
        return r;
      }
      var i = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,
        o = function(t) {
          return i.exec(t).slice(1);
        };
      (e.resolve = function() {
        for (var e = '', i = !1, o = arguments.length - 1; o >= -1 && !i; o--) {
          var s = o >= 0 ? arguments[o] : t.cwd();
          if (typeof s !== 'string') { throw new TypeError('Arguments to path.resolve must be strings'); }
          s && ((e = `${s}/${e}`), (i = s.charAt(0) === '/'));
        }
        return (e = r(
          n(e.split('/'), t => {
            return Boolean(t);
          }),
          !i,
        ).join('/')), (i ? '/' : '') + e || '.';
      }), (e.normalize = function(t) {
        var i = e.isAbsolute(t), o = s(t, -1) === '/';
        return (t = r(
          n(t.split('/'), t => {
            return Boolean(t);
          }),
          !i,
        ).join('/')), t || i || (t = '.'), t && o && (t += '/'), (i
          ? '/'
          : '') + t;
      }), (e.isAbsolute = function(t) {
        return t.charAt(0) === '/';
      }), (e.join = function() {
        var t = Array.prototype.slice.call(arguments, 0);
        return e.normalize(
          n(t, (t, e) => {
            if (typeof t !== 'string') { throw new TypeError('Arguments to path.join must be strings'); }
            return t;
          }).join('/'),
        );
      }), (e.relative = function(t, r) {
        function n(t) {
          for (var e = 0; e < t.length && t[e] === ''; e++) { }
          for (var r = t.length - 1; r >= 0 && t[r] === ''; r--) { }
          return e > r ? [] : t.slice(e, r - e + 1);
        }
        (t = e.resolve(t).substr(1)), (r = e.resolve(r).substr(1));
        for (
          var i = n(t.split('/')),
            o = n(r.split('/')),
            s = Math.min(i.length, o.length),
            a = s,
            u = 0;
          u < s;
          u++
        ) {
          if (i[u] !== o[u]) {
            a = u;
            break;
          }
        }
        for (var l = [], u = a; u < i.length; u++) { l.push('..'); }
        return (l = l.concat(o.slice(a))), l.join('/');
      }), (e.sep = '/'), (e.delimiter = ':'), (e.dirname = function(t) {
        var e = o(t), r = e[0], n = e[1];
        return r || n ? (n && (n = n.substr(0, n.length - 1)), r + n) : '.';
      }), (e.basename = function(t, e) {
        var r = o(t)[2];
        return e &&
          r.substr(-1 * e.length) === e &&
          (r = r.substr(0, r.length - e.length)), r;
      }), (e.extname = function(t) {
        return o(t)[3];
      });
      var s = 'ab'.substr(-1) === 'b'
        ? function(t, e, r) {
          return t.substr(e, r);
        }
        : function(t, e, r) {
          return e < 0 && (e = t.length + e), t.substr(e, r);
        };
    }.call(e, r(88)));
  },
  function(t, e) {
    function r() {
      throw new Error('setTimeout has not been defined');
    }
    function n() {
      throw new Error('clearTimeout has not been defined');
    }
    function i(t) {
      if (h === setTimeout) { return setTimeout(t, 0); }
      if ((h === r || !h) && setTimeout) { return (h = setTimeout), setTimeout(t, 0); }
      try {
        return h(t, 0);
      } catch (e) {
        try {
          return h.call(null, t, 0);
        } catch (e) {
          return h.call(this, t, 0);
        }
      }
    }
    function o(t) {
      if (c === clearTimeout) { return clearTimeout(t); }
      if ((c === n || !c) && clearTimeout) { return (c = clearTimeout), clearTimeout(t); }
      try {
        return c(t);
      } catch (e) {
        try {
          return c.call(null, t);
        } catch (e) {
          return c.call(this, t);
        }
      }
    }
    function s() {
      v &&
        f &&
        ((v = !1), f.length ? (p = f.concat(p)) : (y = -1), p.length && a());
    }
    function a() {
      if (!v) {
        var t = i(s);
        v = !0;
        for (var e = p.length; e;) {
          for ((f = p), (p = []); ++y < e;) { f && f[y].run(); }
          (y = -1), (e = p.length);
        }
        (f = null), (v = !1), o(t);
      }
    }
    function u(t, e) {
      (this.fun = t), (this.array = e);
    }
    function l() {}
    var h, c, d = (t.exports = {});
    !(function() {
      try {
        h = typeof setTimeout === 'function' ? setTimeout : r;
      } catch (t) {
        h = r;
      }
      try {
        c = typeof clearTimeout === 'function' ? clearTimeout : n;
      } catch (t) {
        c = n;
      }
    })();
    var f, p = [], v = !1, y = -1;
    (d.nextTick = function(t) {
      var e = new Array(arguments.length - 1);
      if (arguments.length > 1) {
        for (var r = 1; r < arguments.length; r++) { e[r - 1] = arguments[r]; }
      }
      p.push(new u(t, e)), p.length !== 1 || v || i(a);
    }), (u.prototype.run = function() {
      this.fun.apply(null, this.array);
    }), (d.title =
      'browser'), (d.browser = !0), (d.env = {}), (d.argv = []), (d.version =
      ''), (d.versions = {}), (d.on = l), (d.addListener = l), (d.once = l), (d.off = l), (d.removeListener = l), (d.removeAllListeners = l), (d.emit = l), (d.binding = function(
      t,
    ) {
        throw new Error('process.binding is not supported');
      }), (d.cwd = function() {
        return '/';
      }), (d.chdir = function(t) {
        throw new Error('process.chdir is not supported');
      }), (d.umask = function() {
        return 0;
      });
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    function o(t, e) {
      if (!t) {
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      }
      return !e || (typeof e !== 'object' && typeof e !== 'function') ? t : e;
    }
    function s(t, e) {
      if (typeof e !== 'function' && e !== null) {
        throw new TypeError(
          `Super expression must either be null or a function, not ${typeof e}`,
        );
      }
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {value: t, enumerable: !1, writable: !0, configurable: !0},
      })), e &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(t, e)
          : (t.__proto__ = e));
    }
    e.__esModule = !0;
    var a = r(81),
      u = n(a),
      l = (function(t) {
        function e(r) {
          i(this, e);
          var n = o(this, t.call(this, r));
          return (n.stencilMaskStack = null), n;
        }
        return s(e, t), (e.prototype.setMaskStack = function(t) {
          this.stencilMaskStack = t;
          var e = this.renderer.gl;
          t.length === 0 ? e.disable(e.STENCIL_TEST) : e.enable(e.STENCIL_TEST);
        }), (e.prototype.pushStencil = function(t) {
          this.renderer.setObjectRenderer(
            this.renderer.plugins.graphics,
          ), this.renderer._activeRenderTarget.attachStencilBuffer();
          var e = this.renderer.gl, r = this.stencilMaskStack;
          r.length === 0 &&
            (e.enable(e.STENCIL_TEST), e.clear(
              e.STENCIL_BUFFER_BIT,
            ), e.stencilFunc(e.ALWAYS, 1, 1)), r.push(t), e.colorMask(
            !1,
            !1,
            !1,
            !1,
          ), e.stencilOp(
            e.KEEP,
            e.KEEP,
            e.INCR,
          ), this.renderer.plugins.graphics.render(t), e.colorMask(
            !0,
            !0,
            !0,
            !0,
          ), e.stencilFunc(e.NOTEQUAL, 0, r.length), e.stencilOp(
            e.KEEP,
            e.KEEP,
            e.KEEP,
          );
        }), (e.prototype.popStencil = function() {
          this.renderer.setObjectRenderer(this.renderer.plugins.graphics);
          var t = this.renderer.gl, e = this.stencilMaskStack, r = e.pop();
          e.length === 0
            ? t.disable(t.STENCIL_TEST)
            : (t.colorMask(!1, !1, !1, !1), t.stencilOp(
                t.KEEP,
                t.KEEP,
                t.DECR,
              ), this.renderer.plugins.graphics.render(r), t.colorMask(
                !0,
                !0,
                !0,
                !0,
              ), t.stencilFunc(t.NOTEQUAL, 0, e.length), t.stencilOp(
                t.KEEP,
                t.KEEP,
                t.KEEP,
              ));
        }), (e.prototype.destroy = function() {
          u.default.prototype.destroy.call(
            this,
          ), (this.stencilMaskStack.stencilStack = null);
        }), e;
      })(u.default);
    e.default = l;
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      if (t && t.__esModule) { return t; }
      var e = {};
      if (t != null) {
        for (var r in t) { Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); }
      }
      return (e.default = t), e;
    }
    function i(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function o(t, e) {
      if (!t) {
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      }
      return !e || (typeof e !== 'object' && typeof e !== 'function') ? t : e;
    }
    function s(t, e) {
      if (typeof e !== 'function' && e !== null) {
        throw new TypeError(
          `Super expression must either be null or a function, not ${typeof e}`,
        );
      }
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {value: t, enumerable: !1, writable: !0, configurable: !0},
      })), e &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(t, e)
          : (t.__proto__ = e));
    }
    function a(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    e.__esModule = !0;
    var u = r(81),
      l = i(u),
      h = r(91),
      c = i(h),
      d = r(92),
      f = i(d),
      p = r(13),
      v = r(94),
      y = i(v),
      g = r(95),
      m = n(g),
      b = r(64),
      x = i(b),
      _ = function t() {
        a(
          this,
          t,
        ), (this.renderTarget = null), (this.sourceFrame = new p.Rectangle()), (this.destinationFrame = new p.Rectangle()), (this.filters = []), (this.target = null), (this.resolution = 1);
      },
      w = (function(t) {
        function e(r) {
          a(this, e);
          var n = o(this, t.call(this, r));
          return (n.gl = n.renderer.gl), (n.quad = new f.default(
            n.gl,
            r.state.attribState,
          )), (n.shaderCache = {}), (n.pool = {}), (n.filterData = null), n;
        }
        return s(e, t), (e.prototype.pushFilter = function(t, e) {
          var r = this.renderer, n = this.filterData;
          if (!n) {
            n = this.renderer._activeRenderTarget.filterStack;
            var i = new _();
            (i.sourceFrame = i.destinationFrame = this.renderer._activeRenderTarget.size), (i.renderTarget =
              r._activeRenderTarget), (this.renderer._activeRenderTarget.filterData = n = {
                index: 0,
                stack: [i],
              }), (this.filterData = n);
          }
          var o = n.stack[++n.index];
          o || (o = n.stack[n.index] = new _());
          var s = e[0].resolution,
            a = 0 | e[0].padding,
            u = t.filterArea || t.getBounds(!0),
            l = o.sourceFrame,
            h = o.destinationFrame;
          (l.x = ((u.x * s) | 0) / s), (l.y = ((u.y * s) | 0) / s), (l.width =
            ((u.width * s) | 0) / s), (l.height = ((u.height * s) | 0) / s), n
            .stack[0].renderTarget.transform ||
            l.fit(n.stack[0].destinationFrame), l.pad(a), (h.width =
            l.width), (h.height = l.height);
          var c = this.getPotRenderTarget(r.gl, l.width, l.height, s);
          (o.target = t), (o.filters = e), (o.resolution = s), (o.renderTarget = c), c.setFrame(
            h,
            l,
          ), r.bindRenderTarget(c), c.clear();
        }), (e.prototype.popFilter = function() {
          var t = this.filterData,
            e = t.stack[t.index - 1],
            r = t.stack[t.index];
          this.quad.map(r.renderTarget.size, r.sourceFrame).upload();
          var n = r.filters;
          if (n.length === 1) {
            n[0].apply(
              this,
              r.renderTarget,
              e.renderTarget,
              !1,
            ), this.freePotRenderTarget(r.renderTarget);
          } else {
            var i = r.renderTarget,
              o = this.getPotRenderTarget(
                this.renderer.gl,
                r.sourceFrame.width,
                r.sourceFrame.height,
                r.resolution,
              );
            o.setFrame(r.destinationFrame, r.sourceFrame), o.clear();
            var s = 0;
            for (s = 0; s < n.length - 1; ++s) {
              n[s].apply(this, i, o, !0);
              var a = i;
              (i = o), (o = a);
            }
            n[s].apply(this, i, e.renderTarget, !0), this.freePotRenderTarget(
              i,
            ), this.freePotRenderTarget(o);
          }
          t.index--, t.index === 0 && (this.filterData = null);
        }), (e.prototype.applyFilter = function(t, e, r, n) {
          var i = this.renderer, o = i.gl, s = t.glShaders[i.CONTEXT_UID];
          s ||
            (t.glShaderKey
              ? ((s = this.shaderCache[t.glShaderKey]), s ||
                  ((s = new y.default(
                    this.gl,
                    t.vertexSrc,
                    t.fragmentSrc,
                  )), (t.glShaders[i.CONTEXT_UID] = this.shaderCache[
                    t.glShaderKey
                  ] = s)))
              : (s = t.glShaders[i.CONTEXT_UID] = new y.default(
                  this.gl,
                  t.vertexSrc,
                  t.fragmentSrc,
                )), i.bindVao(null), this.quad.initVao(s)), i.bindVao(
            this.quad.vao,
          ), i.bindRenderTarget(r), n &&
            (o.disable(o.SCISSOR_TEST), i.clear(), o.enable(
              o.SCISSOR_TEST,
            )), r === i.maskManager.scissorRenderTarget &&
            i.maskManager.pushScissorMask(
              null,
              i.maskManager.scissorData,
            ), i.bindShader(s);
          var a = this.renderer.emptyTextures[0];
          (this.renderer.boundTextures[0] = a), this.syncUniforms(
            s,
            t,
          ), i.state.setBlendMode(t.blendMode), o.activeTexture(
            o.TEXTURE0,
          ), o.bindTexture(o.TEXTURE_2D, e.texture.texture), this.quad.vao.draw(
            this.renderer.gl.TRIANGLES,
            6,
            0,
          ), o.bindTexture(
            o.TEXTURE_2D,
            a._glTextures[this.renderer.CONTEXT_UID].texture,
          );
        }), (e.prototype.syncUniforms = function(t, e) {
          var r = e.uniformData, n = e.uniforms, i = 1, o = void 0;
          if (t.uniforms.data.filterArea) {
            o = this.filterData.stack[this.filterData.index];
            var s = t.uniforms.filterArea;
            (s[0] = o.renderTarget.size.width), (s[1] =
              o.renderTarget.size.height), (s[2] = o.sourceFrame.x), (s[3] =
              o.sourceFrame.y), (t.uniforms.filterArea = s);
          }
          if (t.uniforms.data.filterClamp) {
            o = this.filterData.stack[this.filterData.index];
            var a = t.uniforms.filterClamp;
            (a[0] = 0), (a[1] = 0), (a[2] =
              (o.sourceFrame.width - 1) / o.renderTarget.size.width), (a[3] =
              (o.sourceFrame.height - 1) /
              o.renderTarget.size.height), (t.uniforms.filterClamp = a);
          }
          for (var u in r) {
            if (r[u].type === 'sampler2D' && n[u] !== 0) {
              if (n[u].baseTexture) { t.uniforms[u] = this.renderer.bindTexture(n[u].baseTexture, i); } else {
                t.uniforms[u] = i;
                var l = this.renderer.gl;
                (this.renderer.boundTextures[i] = this.renderer.emptyTextures[
                  i
                ]), l.activeTexture(l.TEXTURE0 + i), n[u].texture.bind();
              }
              i++;
            } else if (r[u].type === 'mat3') {
              void 0 !== n[u].a
                ? (t.uniforms[u] = n[u].toArray(!0))
                : (t.uniforms[u] = n[u]);
            } else if (r[u].type === 'vec2') {
              if (void 0 !== n[u].x) {
                var h = t.uniforms[u] || new Float32Array(2);
                (h[0] = n[u].x), (h[1] = n[u].y), (t.uniforms[u] = h);
              } else { t.uniforms[u] = n[u]; }
            } else {
              r[u].type === 'float'
                ? t.uniforms.data[u].value !== r[u] && (t.uniforms[u] = n[u])
                : (t.uniforms[u] = n[u]);
            }
          }
        }), (e.prototype.getRenderTarget = function(t, e) {
          var r = this.filterData.stack[this.filterData.index],
            n = this.getPotRenderTarget(
              this.renderer.gl,
              r.sourceFrame.width,
              r.sourceFrame.height,
              e || r.resolution,
            );
          return n.setFrame(r.destinationFrame, r.sourceFrame), n;
        }), (e.prototype.returnRenderTarget = function(t) {
          this.freePotRenderTarget(t);
        }), (e.prototype.calculateScreenSpaceMatrix = function(t) {
          var e = this.filterData.stack[this.filterData.index];
          return m.calculateScreenSpaceMatrix(
            t,
            e.sourceFrame,
            e.renderTarget.size,
          );
        }), (e.prototype.calculateNormalizedScreenSpaceMatrix = function(t) {
          var e = this.filterData.stack[this.filterData.index];
          return m.calculateNormalizedScreenSpaceMatrix(
            t,
            e.sourceFrame,
            e.renderTarget.size,
            e.destinationFrame,
          );
        }), (e.prototype.calculateSpriteMatrix = function(t, e) {
          var r = this.filterData.stack[this.filterData.index];
          return m.calculateSpriteMatrix(
            t,
            r.sourceFrame,
            r.renderTarget.size,
            e,
          );
        }), (e.prototype.destroy = function() {
          (this.shaderCache = []), this.emptyPool();
        }), (e.prototype.getPotRenderTarget = function(t, e, r, n) {
          (e = x.default.nextPow2(e * n)), (r = x.default.nextPow2(r * n));
          var i = ((65535 & e) << 16) | (65535 & r);
          this.pool[i] || (this.pool[i] = []);
          var o = this.pool[i].pop();
          if (!o) {
            var s = this.renderer.boundTextures[0];
            t.activeTexture(t.TEXTURE0), (o = new c.default(
              t,
              e,
              r,
              null,
              1,
            )), t.bindTexture(
              t.TEXTURE_2D,
              s._glTextures[this.renderer.CONTEXT_UID].texture,
            );
          }
          return (o.resolution = n), (o.defaultFrame.width = o.size.width =
            e / n), (o.defaultFrame.height = o.size.height = r / n), o;
        }), (e.prototype.emptyPool = function() {
          for (var t in this.pool) {
            var e = this.pool[t];
            if (e) { for (var r = 0; r < e.length; r++) { e[r].destroy(!0); } }
          }
          this.pool = {};
        }), (e.prototype.freePotRenderTarget = function(t) {
          var e = t.size.width * t.resolution,
            r = t.size.height * t.resolution,
            n = ((65535 & e) << 16) | (65535 & r);
          this.pool[n].push(t);
        }), e;
      })(l.default);
    e.default = w;
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    e.__esModule = !0;
    var o = r(13),
      s = r(12),
      a = r(43),
      u = n(a),
      l = r(23),
      h = (function() {
        function t(e, r, n, a, h, c) {
          i(
            this,
            t,
          ), (this.gl = e), (this.frameBuffer = null), (this.texture = null), (this.clearColor = [
            0,
            0,
            0,
            0,
          ]), (this.size = new o.Rectangle(0, 0, 1, 1)), (this.resolution =
            h ||
            u.default
              .RESOLUTION), (this.projectionMatrix = new o.Matrix()), (this.transform = null), (this.frame = null), (this.defaultFrame = new o.Rectangle()), (this.destinationFrame = null), (this.sourceFrame = null), (this.stencilBuffer = null), (this.stencilMaskStack = []), (this.filterData = null), (this.scaleMode =
            a || u.default.SCALE_MODE), (this.root = c), this.root
            ? ((this.frameBuffer = new l.GLFramebuffer(
                e,
                100,
                100,
              )), (this.frameBuffer.framebuffer = null))
            : ((this.frameBuffer = l.GLFramebuffer.createRGBA(
                e,
                100,
                100,
              )), this.scaleMode === s.SCALE_MODES.NEAREST
                ? this.frameBuffer.texture.enableNearestScaling()
                : this.frameBuffer.texture.enableLinearScaling(), (this.texture = this.frameBuffer.texture)), this.setFrame(), this.resize(
            r,
            n,
          );
        }
        return (t.prototype.clear = function(t) {
          var e = t || this.clearColor;
          this.frameBuffer.clear(e[0], e[1], e[2], e[3]);
        }), (t.prototype.attachStencilBuffer = function() {
          this.root || this.frameBuffer.enableStencil();
        }), (t.prototype.setFrame = function(t, e) {
          (this.destinationFrame =
            t ||
            this.destinationFrame ||
            this.defaultFrame), (this.sourceFrame = e || this.sourceFrame || t);
        }), (t.prototype.activate = function() {
          var t = this.gl;
          this.frameBuffer.bind(), this.calculateProjection(
            this.destinationFrame,
            this.sourceFrame,
          ), this.transform &&
            this.projectionMatrix.append(this.transform), this
            .destinationFrame !== this.sourceFrame
            ? (t.enable(t.SCISSOR_TEST), t.scissor(
                0 | this.destinationFrame.x,
                0 | this.destinationFrame.y,
                (this.destinationFrame.width * this.resolution) | 0,
                (this.destinationFrame.height * this.resolution) | 0,
              ))
            : t.disable(t.SCISSOR_TEST), t.viewport(
            0 | this.destinationFrame.x,
            0 | this.destinationFrame.y,
            (this.destinationFrame.width * this.resolution) | 0,
            (this.destinationFrame.height * this.resolution) | 0,
          );
        }), (t.prototype.calculateProjection = function(t, e) {
          var r = this.projectionMatrix;
          (e = e || t), r.identity(), this.root
            ? ((r.a = 1 / t.width * 2), (r.d = -1 / t.height * 2), (r.tx =
                -1 - e.x * r.a), (r.ty = 1 - e.y * r.d))
            : ((r.a = 1 / t.width * 2), (r.d = 1 / t.height * 2), (r.tx =
                -1 - e.x * r.a), (r.ty = -1 - e.y * r.d));
        }), (t.prototype.resize = function(t, e) {
          if (
            ((t |= 0), (e |= 0), this.size.width !== t ||
              this.size.height !== e)
          ) {
            (this.size.width = t), (this.size.height = e), (this.defaultFrame.width = t), (this.defaultFrame.height = e), this.frameBuffer.resize(
              t * this.resolution,
              e * this.resolution,
            );
            var r = this.frame || this.size;
            this.calculateProjection(r);
          }
        }), (t.prototype.destroy = function() {
          this.frameBuffer.destroy(), (this.frameBuffer = null), (this.texture = null);
        }), t;
      })();
    e.default = h;
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    e.__esModule = !0;
    var o = r(23),
      s = n(o),
      a = r(93),
      u = n(a),
      l = (function() {
        function t(e, r) {
          i(this, t), (this.gl = e), (this.vertices = new Float32Array([
            -1,
            -1,
            1,
            -1,
            1,
            1,
            -1,
            1,
          ])), (this.uvs = new Float32Array([
            0,
            0,
            1,
            0,
            1,
            1,
            0,
            1,
          ])), (this.interleaved = new Float32Array(16));
          for (var n = 0; n < 4; n++) {
            (this.interleaved[4 * n] = this.vertices[2 * n]), (this.interleaved[
              4 * n + 1
            ] = this.vertices[2 * n + 1]), (this.interleaved[
              4 * n + 2
            ] = this.uvs[2 * n]), (this.interleaved[4 * n + 3] = this.uvs[
              2 * n + 1
            ]);
          }
          (this.indices = (0, u.default)(
            1,
          )), (this.vertexBuffer = s.default.GLBuffer.createVertexBuffer(
            e,
            this.interleaved,
            e.STATIC_DRAW,
          )), (this.indexBuffer = s.default.GLBuffer.createIndexBuffer(
            e,
            this.indices,
            e.STATIC_DRAW,
          )), (this.vao = new s.default.VertexArrayObject(e, r));
        }
        return (t.prototype.initVao = function(t) {
          this.vao
            .clear()
            .addIndex(this.indexBuffer)
            .addAttribute(
              this.vertexBuffer,
              t.attributes.aVertexPosition,
              this.gl.FLOAT,
              !1,
              16,
              0,
            )
            .addAttribute(
              this.vertexBuffer,
              t.attributes.aTextureCoord,
              this.gl.FLOAT,
              !1,
              16,
              8,
            );
        }), (t.prototype.map = function(t, e) {
          var r = 0, n = 0;
          return (this.uvs[0] = r), (this.uvs[1] = n), (this.uvs[2] =
            r + e.width / t.width), (this.uvs[3] = n), (this.uvs[4] =
            r + e.width / t.width), (this.uvs[5] =
            n + e.height / t.height), (this.uvs[6] = r), (this.uvs[7] =
            n + e.height / t.height), (r = e.x), (n =
            e.y), (this.vertices[0] = r), (this.vertices[1] = n), (this.vertices[2] =
            r + e.width), (this.vertices[3] = n), (this.vertices[4] =
            r + e.width), (this.vertices[5] =
            n + e.height), (this.vertices[6] = r), (this.vertices[7] =
            n + e.height), this;
        }), (t.prototype.upload = function() {
          for (var t = 0; t < 4; t++) {
            (this.interleaved[4 * t] = this.vertices[2 * t]), (this.interleaved[
              4 * t + 1
            ] = this.vertices[2 * t + 1]), (this.interleaved[
              4 * t + 2
            ] = this.uvs[2 * t]), (this.interleaved[4 * t + 3] = this.uvs[
              2 * t + 1
            ]);
          }
          return this.vertexBuffer.upload(this.interleaved), this;
        }), (t.prototype.destroy = function() {
          var t = this.gl;
          t.deleteBuffer(this.vertexBuffer), t.deleteBuffer(this.indexBuffer);
        }), t;
      })();
    e.default = l;
  },
  function(t, e) {
    'use strict';
    function r(t) {
      for (
        var e = 6 * t, r = new Uint16Array(e), n = 0, i = 0;
        n < e;
        (n += 6), (i += 4)
      ) {
        (r[n + 0] = i + 0), (r[n + 1] = i + 1), (r[n + 2] = i + 2), (r[n + 3] =
          i + 0), (r[n + 4] = i + 2), (r[n + 5] = i + 3);
      }
      return r;
    }
    (e.__esModule = !0), (e.default = r);
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    function o(t, e) {
      if (!t) {
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      }
      return !e || (typeof e !== 'object' && typeof e !== 'function') ? t : e;
    }
    function s(t, e) {
      if (typeof e !== 'function' && e !== null) {
        throw new TypeError(
          `Super expression must either be null or a function, not ${typeof e}`,
        );
      }
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {value: t, enumerable: !1, writable: !0, configurable: !0},
      })), e &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(t, e)
          : (t.__proto__ = e));
    }
    function a(t) {
      if (t instanceof Array) {
        if (t[0].substring(0, 9) !== 'precision') {
          var e = t.slice(0);
          return e.unshift(`precision ${c} float;`), e;
        }
      } else if (t.substring(0, 9) !== 'precision') { return `precision ${c} float;\n${t}`; }
      return t;
    }
    e.__esModule = !0;
    var u = r(23),
      l = r(43),
      h = n(l),
      c = h.default.PRECISION,
      d = (function(t) {
        function e(r, n, s) {
          return i(this, e), o(this, t.call(this, r, a(n), a(s)));
        }
        return s(e, t), e;
      })(u.GLShader);
    e.default = d;
  },
  function(t, e, r) {
    'use strict';
    function n(t, e, r) {
      var n = t.identity();
      return n.translate(e.x / r.width, e.y / r.height), n.scale(
        r.width,
        r.height,
      ), n;
    }
    function i(t, e, r) {
      var n = t.identity();
      n.translate(e.x / r.width, e.y / r.height);
      var i = r.width / e.width, o = r.height / e.height;
      return n.scale(i, o), n;
    }
    function o(t, e, r, n) {
      var i = n.worldTransform.copy(s.Matrix.TEMP_MATRIX),
        o = n._texture.baseTexture,
        a = t.identity(),
        u = r.height / r.width;
      a.translate(e.x / r.width, e.y / r.height), a.scale(1, u);
      var l = r.width / o.width, h = r.height / o.height;
      return (i.tx /= o.width * l), (i.ty /=
        o.width * l), i.invert(), a.prepend(i), a.scale(1, 1 / u), a.scale(
        l,
        h,
      ), a.translate(n.anchor.x, n.anchor.y), a;
    }
    (e.__esModule = !0), (e.calculateScreenSpaceMatrix = n), (e.calculateNormalizedScreenSpaceMatrix = i), (e.calculateSpriteMatrix = o);
    var s = r(13);
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    e.__esModule = !0;
    var o = r(23),
      s = r(12),
      a = r(91),
      u = n(a),
      l = r(51),
      h = (function() {
        function t(e) {
          i(this, t), (this.renderer = e), (this.gl =
            e.gl), (this._managedTextures = []);
        }
        return (t.prototype.bindTexture = function() {}), (t.prototype.getTexture = function() {}), (t.prototype.updateTexture = function(
          t,
          e,
        ) {
          var r = this.gl, n = Boolean(t._glRenderTargets);
          if (!t.hasLoaded) { return null; }
          var i = this.renderer.boundTextures;
          if (void 0 === e) {
            e = 0;
            for (var a = 0; a < i.length; ++a) {
              if (i[a] === t) {
                e = a;
                break;
              }
            }
          }
          (i[e] = t), r.activeTexture(r.TEXTURE0 + e);
          var l = t._glTextures[this.renderer.CONTEXT_UID];
          if (l) {
            n
              ? t._glRenderTargets[this.renderer.CONTEXT_UID].resize(
                  t.width,
                  t.height,
                )
              : l.upload(t.source);
          } else {
            if (n) {
              var h = new u.default(
                this.gl,
                t.width,
                t.height,
                t.scaleMode,
                t.resolution,
              );
              h.resize(t.width, t.height), (t._glRenderTargets[
                this.renderer.CONTEXT_UID
              ] = h), (l = h.texture);
            } else {
              (l = new o.GLTexture(this.gl, null, null, null, null)), l.bind(
                e,
              ), (l.premultiplyAlpha = !0), l.upload(t.source);
            }
            (t._glTextures[this.renderer.CONTEXT_UID] = l), t.on(
              'update',
              this.updateTexture,
              this,
            ), t.on(
              'dispose',
              this.destroyTexture,
              this,
            ), this._managedTextures.push(t), t.isPowerOfTwo
              ? (t.mipmap && l.enableMipmap(), t.wrapMode === s.WRAP_MODES.CLAMP
                  ? l.enableWrapClamp()
                  : t.wrapMode === s.WRAP_MODES.REPEAT
                      ? l.enableWrapRepeat()
                      : l.enableWrapMirrorRepeat())
              : l.enableWrapClamp(), t.scaleMode === s.SCALE_MODES.NEAREST
              ? l.enableNearestScaling()
              : l.enableLinearScaling();
          }
          return l;
        }), (t.prototype.destroyTexture = function(t, e) {
          if (
            ((t = t.baseTexture || t), t.hasLoaded &&
              t._glTextures[this.renderer.CONTEXT_UID] &&
              (this.renderer.unbindTexture(t), t._glTextures[
                this.renderer.CONTEXT_UID
              ].destroy(), t.off('update', this.updateTexture, this), t.off(
                'dispose',
                this.destroyTexture,
                this,
              ), delete t._glTextures[this.renderer.CONTEXT_UID], !e))
          ) {
            var r = this._managedTextures.indexOf(t);
            r !== -1 && (0, l.removeItems)(this._managedTextures, r, 1);
          }
        }), (t.prototype.removeAll = function() {
          for (var t = 0; t < this._managedTextures.length; ++t) {
            var e = this._managedTextures[t];
            e._glTextures[this.renderer.CONTEXT_UID] &&
              delete e._glTextures[this.renderer.CONTEXT_UID];
          }
        }), (t.prototype.destroy = function() {
          for (var t = 0; t < this._managedTextures.length; ++t) {
            var e = this._managedTextures[t];
            this.destroyTexture(e, !0), e.off(
              'update',
              this.updateTexture,
              this,
            ), e.off('dispose', this.destroyTexture, this);
          }
          this._managedTextures = null;
        }), t;
      })();
    e.default = h;
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    e.__esModule = !0;
    var o = r(12),
      s = r(43),
      a = n(s),
      u = (function() {
        function t(e) {
          i(
            this,
            t,
          ), (this.renderer = e), (this.count = 0), (this.checkCount = 0), (this.maxIdle =
            a.default.GC_MAX_IDLE), (this.checkCountMax =
            a.default.GC_MAX_CHECK_COUNT), (this.mode = a.default.GC_MODE);
        }
        return (t.prototype.update = function() {
          this.count++, this.mode !== o.GC_MODES.MANUAL &&
            (this.checkCount++, this.checkCount > this.checkCountMax &&
              ((this.checkCount = 0), this.run()));
        }), (t.prototype.run = function() {
          for (
            var t = this.renderer.textureManager,
              e = t._managedTextures,
              r = !1,
              n = 0;
            n < e.length;
            n++
          ) {
            var i = e[n];
            !i._glRenderTargets &&
              this.count - i.touched > this.maxIdle &&
              (t.destroyTexture(i, !0), (e[n] = null), (r = !0));
          }
          if (r) {
            for (var o = 0, s = 0; s < e.length; s++) { e[s] !== null && (e[o++] = e[s]); }
            e.length = o;
          }
        }), (t.prototype.unload = function(t) {
          var e = this.renderer.textureManager;
          t._texture &&
            t._texture._glRenderTargets &&
            e.destroyTexture(t._texture, !0);
          for (var r = t.children.length - 1; r >= 0; r--) { this.unload(t.children[r]); }
        }), t;
      })();
    e.default = u;
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    e.__esModule = !0;
    var o = r(99),
      s = n(o),
      a = 0,
      u = 1,
      l = 2,
      h = 3,
      c = 4,
      d = (function() {
        function t(e) {
          i(this, t), (this.activeState = new Uint8Array(
            16,
          )), (this.defaultState = new Uint8Array(
            16,
          )), (this.defaultState[0] = 1), (this.stackIndex = 0), (this.stack = []), (this.gl = e), (this.maxAttribs = e.getParameter(
            e.MAX_VERTEX_ATTRIBS,
          )), (this.attribState = {
            tempAttribState: new Array(this.maxAttribs),
            attribState: new Array(this.maxAttribs),
          }), (this.blendModes = (0, s.default)(e)), (this.nativeVaoExtension =
            e.getExtension('OES_vertex_array_object') ||
            e.getExtension('MOZ_OES_vertex_array_object') ||
            e.getExtension('WEBKIT_OES_vertex_array_object'));
        }
        return (t.prototype.push = function() {
          var t = this.stack[++this.stackIndex];
          t || (t = this.stack[this.stackIndex] = new Uint8Array(16));
          for (var e = 0; e < this.activeState.length; e++) { this.activeState[e] = t[e]; }
        }), (t.prototype.pop = function() {
          var t = this.stack[--this.stackIndex];
          this.setState(t);
        }), (t.prototype.setState = function(t) {
          this.setBlend(t[a]), this.setDepthTest(t[u]), this.setFrontFace(
            t[l],
          ), this.setCullFace(t[h]), this.setBlendMode(t[c]);
        }), (t.prototype.setBlend = function(t) {
          (t = t ? 1 : 0), this.activeState[a] !== t &&
            ((this.activeState[a] = t), this.gl[t ? 'enable' : 'disable'](
              this.gl.BLEND,
            ));
        }), (t.prototype.setBlendMode = function(t) {
          t !== this.activeState[c] &&
            ((this.activeState[c] = t), this.gl.blendFunc(
              this.blendModes[t][0],
              this.blendModes[t][1],
            ));
        }), (t.prototype.setDepthTest = function(t) {
          (t = t ? 1 : 0), this.activeState[u] !== t &&
            ((this.activeState[u] = t), this.gl[t ? 'enable' : 'disable'](
              this.gl.DEPTH_TEST,
            ));
        }), (t.prototype.setCullFace = function(t) {
          (t = t ? 1 : 0), this.activeState[h] !== t &&
            ((this.activeState[h] = t), this.gl[t ? 'enable' : 'disable'](
              this.gl.CULL_FACE,
            ));
        }), (t.prototype.setFrontFace = function(t) {
          (t = t ? 1 : 0), this.activeState[l] !== t &&
            ((this.activeState[l] = t), this.gl.frontFace(
              this.gl[t ? 'CW' : 'CCW'],
            ));
        }), (t.prototype.resetAttributes = function() {
          for (var t = 0; t < this.attribState.tempAttribState.length; t++) { this.attribState.tempAttribState[t] = 0; }
          for (var e = 0; e < this.attribState.attribState.length; e++) { this.attribState.attribState[e] = 0; }
          for (var r = 1; r < this.maxAttribs; r++) { this.gl.disableVertexAttribArray(r); }
        }), (t.prototype.resetToDefault = function() {
          this.nativeVaoExtension &&
            this.nativeVaoExtension.bindVertexArrayOES(
              null,
            ), this.resetAttributes();
          for (var t = 0; t < this.activeState.length; ++t) { this.activeState[t] = 32; }
          this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, !1), this.setState(
            this.defaultState,
          );
        }), t;
      })();
    e.default = d;
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1]
        ? arguments[1]
        : [];
      return (e[i.BLEND_MODES.NORMAL] = [t.ONE, t.ONE_MINUS_SRC_ALPHA]), (e[
        i.BLEND_MODES.ADD
      ] = [t.ONE, t.DST_ALPHA]), (e[i.BLEND_MODES.MULTIPLY] = [
        t.DST_COLOR,
        t.ONE_MINUS_SRC_ALPHA,
      ]), (e[i.BLEND_MODES.SCREEN] = [t.ONE, t.ONE_MINUS_SRC_COLOR]), (e[
        i.BLEND_MODES.OVERLAY
      ] = [t.ONE, t.ONE_MINUS_SRC_ALPHA]), (e[i.BLEND_MODES.DARKEN] = [
        t.ONE,
        t.ONE_MINUS_SRC_ALPHA,
      ]), (e[i.BLEND_MODES.LIGHTEN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA]), (e[
        i.BLEND_MODES.COLOR_DODGE
      ] = [t.ONE, t.ONE_MINUS_SRC_ALPHA]), (e[i.BLEND_MODES.COLOR_BURN] = [
        t.ONE,
        t.ONE_MINUS_SRC_ALPHA,
      ]), (e[i.BLEND_MODES.HARD_LIGHT] = [t.ONE, t.ONE_MINUS_SRC_ALPHA]), (e[
        i.BLEND_MODES.SOFT_LIGHT
      ] = [t.ONE, t.ONE_MINUS_SRC_ALPHA]), (e[i.BLEND_MODES.DIFFERENCE] = [
        t.ONE,
        t.ONE_MINUS_SRC_ALPHA,
      ]), (e[i.BLEND_MODES.EXCLUSION] = [t.ONE, t.ONE_MINUS_SRC_ALPHA]), (e[
        i.BLEND_MODES.HUE
      ] = [t.ONE, t.ONE_MINUS_SRC_ALPHA]), (e[i.BLEND_MODES.SATURATION] = [
        t.ONE,
        t.ONE_MINUS_SRC_ALPHA,
      ]), (e[i.BLEND_MODES.COLOR] = [t.ONE, t.ONE_MINUS_SRC_ALPHA]), (e[
        i.BLEND_MODES.LUMINOSITY
      ] = [t.ONE, t.ONE_MINUS_SRC_ALPHA]), e;
    }
    (e.__esModule = !0), (e.default = n);
    var i = r(12);
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1]
        ? arguments[1]
        : {};
      return (e[i.DRAW_MODES.POINTS] = t.POINTS), (e[i.DRAW_MODES.LINES] =
        t.LINES), (e[i.DRAW_MODES.LINE_LOOP] = t.LINE_LOOP), (e[
        i.DRAW_MODES.LINE_STRIP
      ] =
        t.LINE_STRIP), (e[i.DRAW_MODES.TRIANGLES] = t.TRIANGLES), (e[
        i.DRAW_MODES.TRIANGLE_STRIP
      ] =
        t.TRIANGLE_STRIP), (e[i.DRAW_MODES.TRIANGLE_FAN] = t.TRIANGLE_FAN), e;
    }
    (e.__esModule = !0), (e.default = n);
    var i = r(12);
  },
  function(t, e) {
    'use strict';
    function r(t) {
      var e = t.getContextAttributes();
      e.stencil ||
        console.warn(
          'Provided WebGL context does not have a stencil buffer, masks may not render correctly',
        );
    }
    (e.__esModule = !0), (e.default = r);
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i(t, e) {
      var r =
        'precision highp float;\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\nattribute float aTextureId;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\n\nvoid main(void){\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vTextureId = aTextureId;\n    vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n',
        n = u;
      (n = n.replace(/%count%/gi, e)), (n = n.replace(/%forloop%/gi, o(e)));
      for (var i = new a.default(t, r, n), s = [], l = 0; l < e; l++) { s[l] = l; }
      return i.bind(), (i.uniforms.uSamplers = s), i;
    }
    function o(t) {
      var e = '';
      (e += '\n'), (e += '\n');
      for (var r = 0; r < t; r++) {
        r > 0 && (e += '\nelse '), r < t - 1 &&
          (e += `if(textureId == ${r}.0)`), (e += '\n{'), (e +=
          `\n\tcolor = texture2D(uSamplers[${r}], vTextureCoord);`), (e +=
          '\n}');
      }
      return (e += '\n'), (e += '\n');
    }
    (e.__esModule = !0), (e.default = i);
    var s = r(94),
      a = n(s),
      u = (r(87), [
        'varying vec2 vTextureCoord;',
        'varying vec4 vColor;',
        'varying float vTextureId;',
        'uniform sampler2D uSamplers[%count%];',
        'void main(void){',
        'vec4 color;',
        'float textureId = floor(vTextureId+0.5);',
        '%forloop%',
        'gl_FragColor = color * vColor;',
        '}',
      ].join('\n'));
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i(t, e) {
      var r = !e;
      if (t === 0) {
        throw new Error(
          'Invalid value of `0` passed to `checkMaxIfStatementsInShader`',
        );
      }
      if (r) {
        var n = document.createElement('canvas');
        (n.width = 1), (n.height = 1), (e = a.default.createContext(n));
      }
      for (var i = e.createShader(e.FRAGMENT_SHADER); ;) {
        var s = u.replace(/%forloop%/gi, o(t));
        if (
          (e.shaderSource(i, s), e.compileShader(i), e.getShaderParameter(
            i,
            e.COMPILE_STATUS,
          ))
        ) { break; }
        t = (t / 2) | 0;
      }
      return r &&
        e.getExtension('WEBGL_lose_context') &&
        e.getExtension('WEBGL_lose_context').loseContext(), t;
    }
    function o(t) {
      for (var e = '', r = 0; r < t; ++r) {
        r > 0 && (e += '\nelse '), r < t - 1 &&
          (e += `if(test == ${r}.0){}`);
      }
      return e;
    }
    (e.__esModule = !0), (e.default = i);
    var s = r(23),
      a = n(s),
      u = [
        'precision mediump float;',
        'void main(void){',
        'float test = 0.1;',
        '%forloop%',
        'gl_FragColor = vec4(0.0);',
        '}',
      ].join('\n');
  },
  function(t, e) {
    'use strict';
    function r(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    e.__esModule = !0;
    var n = (function() {
      function t(e) {
        r(this, t), (this.vertices = new ArrayBuffer(
          e,
        )), (this.float32View = new Float32Array(
          this.vertices,
        )), (this.uint32View = new Uint32Array(this.vertices));
      }
      return (t.prototype.destroy = function() {
        (this.vertices = null), (this.positions = null), (this.uvs = null), (this.colors = null);
      }), t;
    })();
    e.default = n;
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    function o(t, e) {
      if (!t) {
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      }
      return !e || (typeof e !== 'object' && typeof e !== 'function') ? t : e;
    }
    function s(t, e) {
      if (typeof e !== 'function' && e !== null) {
        throw new TypeError(
          `Super expression must either be null or a function, not ${typeof e}`,
        );
      }
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {value: t, enumerable: !1, writable: !0, configurable: !0},
      })), e &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(t, e)
          : (t.__proto__ = e));
    }
    e.__esModule = !0;
    var a = (function() {
        function t(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1), (n.configurable = !0), 'value' in
            n && (n.writable = !0), Object.defineProperty(t, n.key, n);
          }
        }
        return function(e, r, n) {
          return r && t(e.prototype, r), n && t(e, n), e;
        };
      })(),
      u = r(53),
      l = n(u),
      h = r(54),
      c = n(h),
      d = r(13),
      f = r(51),
      p = r(12),
      v = r(43),
      y = n(v),
      g = r(106),
      m = n(g),
      b = {texture: !0, children: !1, baseTexture: !0},
      x = (function(t) {
        function e(r, n, s) {
          i(this, e), (s =
            s ||
            document.createElement('canvas')), (s.width = 3), (s.height = 3);
          var a = c.default.fromCanvas(s);
          (a.orig = new d.Rectangle()), (a.trim = new d.Rectangle());
          var u = o(this, t.call(this, a));
          return (u.canvas = s), (u.context = u.canvas.getContext(
            '2d',
          )), (u.resolution =
            y.default.RESOLUTION), (u._text = null), (u._style = null), (u._styleListener = null), (u._font =
            ''), (u.text = r), (u.style = n), (u.localStyleID = -1), u;
        }
        return s(e, t), (e.prototype.updateText = function(t) {
          var r = this._style;
          if (
            (this.localStyleID !== r.styleID &&
              ((this.dirty = !0), (this.localStyleID = r.styleID)), this
              .dirty || !t)
          ) {
            (this._font = e.getFontStyle(r)), (this.context.font = this._font);
            for (
              var n = r.wordWrap ? this.wordWrap(this._text) : this._text,
                i = n.split(/(?:\r\n|\r|\n)/),
                o = new Array(i.length),
                s = 0,
                a = e.calculateFontProperties(this._font),
                u = 0;
              u < i.length;
              u++
            ) {
              var l =
                this.context.measureText(i[u]).width +
                (i[u].length - 1) * r.letterSpacing;
              (o[u] = l), (s = Math.max(s, l));
            }
            var h = s + r.strokeThickness;
            r.dropShadow &&
              (h += r.dropShadowDistance), (this.canvas.width = Math.ceil(
              (h + 2 * r.padding) * this.resolution,
            ));
            var c = r.lineHeight || a.fontSize + r.strokeThickness,
              d =
                Math.max(c, a.fontSize + r.strokeThickness) +
                (i.length - 1) * c;
            r.dropShadow &&
              (d += r.dropShadowDistance), (this.canvas.height = Math.ceil(
              (d + 2 * r.padding) * this.resolution,
            )), this.context.scale(
              this.resolution,
              this.resolution,
            ), this.context.clearRect(
              0,
              0,
              this.canvas.width,
              this.canvas.height,
            ), (this.context.font = this._font), (this.context.strokeStyle =
              r.stroke), (this.context.lineWidth =
              r.strokeThickness), (this.context.textBaseline =
              r.textBaseline), (this.context.lineJoin =
              r.lineJoin), (this.context.miterLimit = r.miterLimit);
            var f = void 0, p = void 0;
            if (r.dropShadow) {
              r.dropShadowBlur > 0
                ? ((this.context.shadowColor =
                    r.dropShadowColor), (this.context.shadowBlur =
                    r.dropShadowBlur))
                : (this.context.fillStyle = r.dropShadowColor);
              for (
                var v = Math.cos(r.dropShadowAngle) * r.dropShadowDistance,
                  y = Math.sin(r.dropShadowAngle) * r.dropShadowDistance,
                  g = 0;
                g < i.length;
                g++
              ) {
                (f = r.strokeThickness / 2), (p =
                  r.strokeThickness / 2 + g * c + a.ascent), r.align === 'right'
                  ? (f += s - o[g])
                  : r.align === 'center' && (f += (s - o[g]) / 2), r.fill &&
                  (this.drawLetterSpacing(
                    i[g],
                    f + v + r.padding,
                    p + y + r.padding,
                  ), r.stroke &&
                    r.strokeThickness &&
                    ((this.context.strokeStyle =
                      r.dropShadowColor), this.drawLetterSpacing(
                      i[g],
                      f + v + r.padding,
                      p + y + r.padding,
                      !0,
                    ), (this.context.strokeStyle = r.stroke)));
              }
            }
            this.context.fillStyle = this._generateFillStyle(r, i);
            for (var m = 0; m < i.length; m++) {
              (f = r.strokeThickness / 2), (p =
                r.strokeThickness / 2 + m * c + a.ascent), r.align === 'right'
                ? (f += s - o[m])
                : r.align === 'center' && (f += (s - o[m]) / 2), r.stroke &&
                r.strokeThickness &&
                this.drawLetterSpacing(
                  i[m],
                  f + r.padding,
                  p + r.padding,
                  !0,
                ), r.fill &&
                this.drawLetterSpacing(i[m], f + r.padding, p + r.padding);
            }
            this.updateTexture();
          }
        }), (e.prototype.drawLetterSpacing = function(t, e, r) {
          var n =
            arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            i = this._style,
            o = i.letterSpacing;
          if (o === 0) {
            return void (n
              ? this.context.strokeText(t, e, r)
              : this.context.fillText(t, e, r));
          }
          for (
            var s = String.prototype.split.call(t, ''), a = e, u = 0, l = '';
            u < t.length;

          ) {
            (l = s[u++]), n
              ? this.context.strokeText(l, a, r)
              : this.context.fillText(l, a, r), (a +=
              this.context.measureText(l).width + o);
          }
        }), (e.prototype.updateTexture = function() {
          var t = this._texture, e = this._style;
          (t.baseTexture.hasLoaded = !0), (t.baseTexture.resolution = this.resolution), (t.baseTexture.realWidth = this.canvas.width), (t.baseTexture.realHeight = this.canvas.height), (t.baseTexture.width =
            this.canvas.width / this.resolution), (t.baseTexture.height =
            this.canvas.height /
            this.resolution), (t.trim.width = t._frame.width =
            this.canvas.width /
            this.resolution), (t.trim.height = t._frame.height =
            this.canvas.height /
            this
              .resolution), (t.trim.x = -e.padding), (t.trim.y = -e.padding), (t.orig.width =
            t._frame.width - 2 * e.padding), (t.orig.height =
            t._frame.height -
            2 * e.padding), this._onTextureUpdate(), t.baseTexture.emit(
            'update',
            t.baseTexture,
          ), (this.dirty = !1);
        }), (e.prototype.renderWebGL = function(e) {
          this.resolution !== e.resolution &&
            ((this.resolution =
              e.resolution), (this.dirty = !0)), this.updateText(
            !0,
          ), t.prototype.renderWebGL.call(this, e);
        }), (e.prototype._renderCanvas = function(e) {
          this.resolution !== e.resolution &&
            ((this.resolution =
              e.resolution), (this.dirty = !0)), this.updateText(
            !0,
          ), t.prototype._renderCanvas.call(this, e);
        }), (e.prototype.wordWrap = function(t) {
          for (
            var e = '',
              r = this._style,
              n = t.split('\n'),
              i = r.wordWrapWidth,
              o = 0;
            o < n.length;
            o++
          ) {
            for (var s = i, a = n[o].split(' '), u = 0; u < a.length; u++) {
              var l = this.context.measureText(a[u]).width;
              if (r.breakWords && l > i) {
                for (var h = a[u].split(''), c = 0; c < h.length; c++) {
                  var d = this.context.measureText(h[c]).width;
                  d > s
                    ? ((e += `\n${h[c]}`), (s = i - d))
                    : (c === 0 && (e += ' '), (e += h[c]), (s -= d));
                }
              } else {
                var f = l + this.context.measureText(' ').width;
                u === 0 || f > s
                  ? (u > 0 && (e += '\n'), (e += a[u]), (s = i - l))
                  : ((s -= f), (e += ` ${a[u]}`));
              }
            }
            o < n.length - 1 && (e += '\n');
          }
          return e;
        }), (e.prototype._calculateBounds = function() {
          this.updateText(!0), this.calculateVertices(), this._bounds.addQuad(
            this.vertexData,
          );
        }), (e.prototype._onStyleChange = function() {
          this.dirty = !0;
        }), (e.prototype._generateFillStyle = function(t, e) {
          if (!Array.isArray(t.fill)) { return t.fill; }
          if (navigator.isCocoonJS) { return t.fill[0]; }
          var r = void 0,
            n = void 0,
            i = void 0,
            o = void 0,
            s = this.canvas.width / this.resolution,
            a = this.canvas.height / this.resolution;
          if (t.fillGradientType === p.TEXT_GRADIENT.LINEAR_VERTICAL) {
            (r = this.context.createLinearGradient(s / 2, 0, s / 2, a)), (n =
              (t.fill.length + 1) * e.length), (i = 0);
            for (var u = 0; u < e.length; u++) {
              i += 1;
              for (var l = 0; l < t.fill.length; l++) { (o = i / n), r.addColorStop(o, t.fill[l]), i++; }
            }
          } else {
            (r = this.context.createLinearGradient(0, a / 2, s, a / 2)), (n =
              t.fill.length + 1), (i = 1);
            for (var h = 0; h < t.fill.length; h++) { (o = i / n), r.addColorStop(o, t.fill[h]), i++; }
          }
          return r;
        }), (e.prototype.destroy = function(e) {
          typeof e === 'boolean' && (e = {children: e}), (e = Object.assign(
            {},
            b,
            e,
          )), t.prototype.destroy.call(
            this,
            e,
          ), (this.context = null), (this.canvas = null), (this._style = null);
        }), (e.getFontStyle = function(t) {
          (t = t || {}), t instanceof m.default || (t = new m.default(t));
          var e = typeof t.fontSize === 'number'
            ? `${t.fontSize}px`
            : t.fontSize,
            r = t.fontFamily;
          Array.isArray(t.fontFamily) || (r = t.fontFamily.split(','));
          for (var n = r.length - 1; n >= 0; n--) {
            var i = r[n].trim();
            /([\"\'])[^\'\"]+\1/.test(i) || (i = `"${i}"`), (r[n] = i);
          }
          return (
            `${t.fontStyle
            } ${
            t.fontVariant
            } ${
            t.fontWeight
            } ${
            e
            } ${
            r.join(',')}`
          );
        }), (e.calculateFontProperties = function(t) {
          if (e.fontPropertiesCache[t]) { return e.fontPropertiesCache[t]; }
          var r = {}, n = e.fontPropertiesCanvas, i = e.fontPropertiesContext;
          i.font = t;
          var o = Math.ceil(i.measureText('|MÉq').width),
            s = Math.ceil(i.measureText('M').width),
            a = 2 * s;
          (s = (1.4 * s) | 0), (n.width = o), (n.height = a), (i.fillStyle =
            '#f00'), i.fillRect(0, 0, o, a), (i.font = t), (i.textBaseline =
            'alphabetic'), (i.fillStyle = '#000'), i.fillText('|MÉq', 0, s);
          var u = i.getImageData(0, 0, o, a).data,
            l = u.length,
            h = 4 * o,
            c = 0,
            d = 0,
            f = !1;
          for (c = 0; c < s; ++c) {
            for (var p = 0; p < h; p += 4) {
              if (u[d + p] !== 255) {
                f = !0;
                break;
              }
            }
            if (f) { break; }
            d += h;
          }
          for ((r.ascent = s - c), (d = l - h), (f = !1), (c = a); c > s; --c) {
            for (var v = 0; v < h; v += 4) {
              if (u[d + v] !== 255) {
                f = !0;
                break;
              }
            }
            if (f) { break; }
            d -= h;
          }
          return (r.descent = c - s), (r.fontSize =
            r.ascent + r.descent), (e.fontPropertiesCache[t] = r), r;
        }), a(e, [
          {
            key: 'width',
            get() {
              return this.updateText(!0), Math.abs(this.scale.x) *
                this._texture.orig.width;
            },
            set(t) {
              this.updateText(!0);
              var e = (0, f.sign)(this.scale.x) || 1;
              (this.scale.x =
                e * t / this._texture.orig.width), (this._width = t);
            },
          },
          {
            key: 'height',
            get() {
              return this.updateText(!0), Math.abs(this.scale.y) *
                this._texture.orig.height;
            },
            set(t) {
              this.updateText(!0);
              var e = (0, f.sign)(this.scale.y) || 1;
              (this.scale.y =
                e * t / this._texture.orig.height), (this._height = t);
            },
          },
          {
            key: 'style',
            get() {
              return this._style;
            },
            set(t) {
              (t = t || {}), t instanceof m.default
                ? (this._style = t)
                : (this._style = new m.default(
                    t,
                  )), (this.localStyleID = -1), (this.dirty = !0);
            },
          },
          {
            key: 'text',
            get() {
              return this._text;
            },
            set(t) {
              (t = String(t || ' ')), this._text !== t &&
                ((this._text = t), (this.dirty = !0));
            },
          },
        ]), e;
      })(l.default);
    (e.default = x), (x.fontPropertiesCache = {}), (x.fontPropertiesCanvas = document.createElement(
      'canvas',
    )), (x.fontPropertiesContext = x.fontPropertiesCanvas.getContext('2d'));
  },
  function(t, e, r) {
    'use strict';
    function n(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    function i(t) {
      return typeof t === 'number'
        ? (0, u.hex2string)(t)
        : (typeof t === 'string' &&
            t.indexOf('0x') === 0 &&
            (t = t.replace('0x', '#')), t);
    }
    function o(t) {
      if (Array.isArray(t)) {
        for (var e = 0; e < t.length; ++e) { t[e] = i(t[e]); }
        return t;
      }
      return i(t);
    }
    e.__esModule = !0;
    var s = (function() {
        function t(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1), (n.configurable = !0), 'value' in
            n && (n.writable = !0), Object.defineProperty(t, n.key, n);
          }
        }
        return function(e, r, n) {
          return r && t(e.prototype, r), n && t(e, n), e;
        };
      })(),
      a = r(12),
      u = r(51),
      l = {
        align: 'left',
        breakWords: !1,
        dropShadow: !1,
        dropShadowAngle: Math.PI / 6,
        dropShadowBlur: 0,
        dropShadowColor: '#000000',
        dropShadowDistance: 5,
        fill: 'black',
        fillGradientType: a.TEXT_GRADIENT.LINEAR_VERTICAL,
        fontFamily: 'Arial',
        fontSize: 26,
        fontStyle: 'normal',
        fontVariant: 'normal',
        fontWeight: 'normal',
        letterSpacing: 0,
        lineHeight: 0,
        lineJoin: 'miter',
        miterLimit: 10,
        padding: 0,
        stroke: 'black',
        strokeThickness: 0,
        textBaseline: 'alphabetic',
        wordWrap: !1,
        wordWrapWidth: 100,
      },
      h = (function() {
        function t(e) {
          n(this, t), (this.styleID = 0), Object.assign(this, l, e);
        }
        return (t.prototype.clone = function() {
          var e = {};
          for (var r in l) { e[r] = this[r]; }
          return new t(e);
        }), (t.prototype.reset = function() {
          Object.assign(this, l);
        }), s(t, [
          {
            key: 'align',
            get() {
              return this._align;
            },
            set(t) {
              this._align !== t && ((this._align = t), this.styleID++);
            },
          },
          {
            key: 'breakWords',
            get() {
              return this._breakWords;
            },
            set(t) {
              this._breakWords !== t &&
                ((this._breakWords = t), this.styleID++);
            },
          },
          {
            key: 'dropShadow',
            get() {
              return this._dropShadow;
            },
            set(t) {
              this._dropShadow !== t &&
                ((this._dropShadow = t), this.styleID++);
            },
          },
          {
            key: 'dropShadowAngle',
            get() {
              return this._dropShadowAngle;
            },
            set(t) {
              this._dropShadowAngle !== t &&
                ((this._dropShadowAngle = t), this.styleID++);
            },
          },
          {
            key: 'dropShadowBlur',
            get() {
              return this._dropShadowBlur;
            },
            set(t) {
              this._dropShadowBlur !== t &&
                ((this._dropShadowBlur = t), this.styleID++);
            },
          },
          {
            key: 'dropShadowColor',
            get() {
              return this._dropShadowColor;
            },
            set(t) {
              var e = o(t);
              this._dropShadowColor !== e &&
                ((this._dropShadowColor = e), this.styleID++);
            },
          },
          {
            key: 'dropShadowDistance',
            get() {
              return this._dropShadowDistance;
            },
            set(t) {
              this._dropShadowDistance !== t &&
                ((this._dropShadowDistance = t), this.styleID++);
            },
          },
          {
            key: 'fill',
            get() {
              return this._fill;
            },
            set(t) {
              var e = o(t);
              this._fill !== e && ((this._fill = e), this.styleID++);
            },
          },
          {
            key: 'fillGradientType',
            get() {
              return this._fillGradientType;
            },
            set(t) {
              this._fillGradientType !== t &&
                ((this._fillGradientType = t), this.styleID++);
            },
          },
          {
            key: 'fontFamily',
            get() {
              return this._fontFamily;
            },
            set(t) {
              this.fontFamily !== t && ((this._fontFamily = t), this.styleID++);
            },
          },
          {
            key: 'fontSize',
            get() {
              return this._fontSize;
            },
            set(t) {
              this._fontSize !== t && ((this._fontSize = t), this.styleID++);
            },
          },
          {
            key: 'fontStyle',
            get() {
              return this._fontStyle;
            },
            set(t) {
              this._fontStyle !== t && ((this._fontStyle = t), this.styleID++);
            },
          },
          {
            key: 'fontVariant',
            get() {
              return this._fontVariant;
            },
            set(t) {
              this._fontVariant !== t &&
                ((this._fontVariant = t), this.styleID++);
            },
          },
          {
            key: 'fontWeight',
            get() {
              return this._fontWeight;
            },
            set(t) {
              this._fontWeight !== t &&
                ((this._fontWeight = t), this.styleID++);
            },
          },
          {
            key: 'letterSpacing',
            get() {
              return this._letterSpacing;
            },
            set(t) {
              this._letterSpacing !== t &&
                ((this._letterSpacing = t), this.styleID++);
            },
          },
          {
            key: 'lineHeight',
            get() {
              return this._lineHeight;
            },
            set(t) {
              this._lineHeight !== t &&
                ((this._lineHeight = t), this.styleID++);
            },
          },
          {
            key: 'lineJoin',
            get() {
              return this._lineJoin;
            },
            set(t) {
              this._lineJoin !== t && ((this._lineJoin = t), this.styleID++);
            },
          },
          {
            key: 'miterLimit',
            get() {
              return this._miterLimit;
            },
            set(t) {
              this._miterLimit !== t &&
                ((this._miterLimit = t), this.styleID++);
            },
          },
          {
            key: 'padding',
            get() {
              return this._padding;
            },
            set(t) {
              this._padding !== t && ((this._padding = t), this.styleID++);
            },
          },
          {
            key: 'stroke',
            get() {
              return this._stroke;
            },
            set(t) {
              var e = o(t);
              this._stroke !== e && ((this._stroke = e), this.styleID++);
            },
          },
          {
            key: 'strokeThickness',
            get() {
              return this._strokeThickness;
            },
            set(t) {
              this._strokeThickness !== t &&
                ((this._strokeThickness = t), this.styleID++);
            },
          },
          {
            key: 'textBaseline',
            get() {
              return this._textBaseline;
            },
            set(t) {
              this._textBaseline !== t &&
                ((this._textBaseline = t), this.styleID++);
            },
          },
          {
            key: 'wordWrap',
            get() {
              return this._wordWrap;
            },
            set(t) {
              this._wordWrap !== t && ((this._wordWrap = t), this.styleID++);
            },
          },
          {
            key: 'wordWrapWidth',
            get() {
              return this._wordWrapWidth;
            },
            set(t) {
              this._wordWrapWidth !== t &&
                ((this._wordWrapWidth = t), this.styleID++);
            },
          },
        ]), t;
      })();
    e.default = h;
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    function o(t, e) {
      if (!t) {
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      }
      return !e || (typeof e !== 'object' && typeof e !== 'function') ? t : e;
    }
    function s(t, e) {
      if (typeof e !== 'function' && e !== null) {
        throw new TypeError(
          `Super expression must either be null or a function, not ${typeof e}`,
        );
      }
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {value: t, enumerable: !1, writable: !0, configurable: !0},
      })), e &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(t, e)
          : (t.__proto__ = e));
    }
    e.__esModule = !0;
    var a = r(50),
      u = n(a),
      l = r(72),
      h = n(l),
      c = r(54),
      d = n(c),
      f = r(108),
      p = n(f),
      v = r(53),
      y = n(v),
      g = r(13),
      m = r(51),
      b = r(12),
      x = r(40),
      _ = n(x),
      w = r(109),
      T = n(w),
      E = r(70),
      S = n(E),
      P = void 0,
      O = new g.Matrix(),
      M = new g.Point(),
      C = new Float32Array(4),
      A = new Float32Array(4),
      R = (function(t) {
        function e() {
          i(this, e);
          var r = o(this, t.call(this));
          return (r.fillAlpha = 1), (r.lineWidth = 0), (r.lineColor = 0), (r.graphicsData = []), (r.tint = 16777215), (r._prevTint = 16777215), (r.blendMode =
            b.BLEND_MODES.NORMAL), (r.currentPath = null), (r._webGL = {}), (r.isMask = !1), (r.boundsPadding = 0), (r._localBounds = new _.default()), (r.dirty = 0), (r.fastRectDirty = -1), (r.clearDirty = 0), (r.boundsDirty = -1), (r.cachedSpriteDirty = !1), (r._spriteRect = null), (r._fastRect = !1), r;
        }
        return s(e, t), (e.prototype.clone = function t() {
          var t = new e();
          (t.renderable = this.renderable), (t.fillAlpha = this.fillAlpha), (t.lineWidth = this.lineWidth), (t.lineColor = this.lineColor), (t.tint = this.tint), (t.blendMode = this.blendMode), (t.isMask = this.isMask), (t.boundsPadding = this.boundsPadding), (t.dirty = 0), (t.cachedSpriteDirty = this.cachedSpriteDirty);
          for (var r = 0; r < this.graphicsData.length; ++r) { t.graphicsData.push(this.graphicsData[r].clone()); }
          return (t.currentPath =
            t.graphicsData[
              t.graphicsData.length - 1
            ]), t.updateLocalBounds(), t;
        }), (e.prototype.lineStyle = function() {
          var t = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : 0,
            e = arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 0,
            r = arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 1;
          if (
            ((this.lineWidth = t), (this.lineColor = e), (this.lineAlpha = r), this
              .currentPath)
          ) {
            if (this.currentPath.shape.points.length) {
              var n = new g.Polygon(this.currentPath.shape.points.slice(-2));
              (n.closed = !1), this.drawShape(n);
            } else { (this.currentPath.lineWidth = this.lineWidth), (this.currentPath.lineColor = this.lineColor), (this.currentPath.lineAlpha = this.lineAlpha); }
          }
          return this;
        }), (e.prototype.moveTo = function(t, e) {
          var r = new g.Polygon([t, e]);
          return (r.closed = !1), this.drawShape(r), this;
        }), (e.prototype.lineTo = function(t, e) {
          return this.currentPath.shape.points.push(t, e), this.dirty++, this;
        }), (e.prototype.quadraticCurveTo = function(t, e, r, n) {
          this.currentPath
            ? this.currentPath.shape.points.length === 0 &&
                (this.currentPath.shape.points = [0, 0])
            : this.moveTo(0, 0);
          var i = 20, o = this.currentPath.shape.points, s = 0, a = 0;
          o.length === 0 && this.moveTo(0, 0);
          for (
            var u = o[o.length - 2], l = o[o.length - 1], h = 1;
            h <= i;
            ++h
          ) {
            var c = h / i;
            (s = u + (t - u) * c), (a = l + (e - l) * c), o.push(
              s + (t + (r - t) * c - s) * c,
              a + (e + (n - e) * c - a) * c,
            );
          }
          return this.dirty++, this;
        }), (e.prototype.bezierCurveTo = function(t, e, r, n, i, o) {
          this.currentPath
            ? this.currentPath.shape.points.length === 0 &&
                (this.currentPath.shape.points = [0, 0])
            : this.moveTo(0, 0);
          var s = this.currentPath.shape.points,
            a = s[s.length - 2],
            u = s[s.length - 1];
          return (s.length -= 2), (0, T.default)(
            a,
            u,
            t,
            e,
            r,
            n,
            i,
            o,
            s,
          ), this.dirty++, this;
        }), (e.prototype.arcTo = function(t, e, r, n, i) {
          this.currentPath
            ? this.currentPath.shape.points.length === 0 &&
                this.currentPath.shape.points.push(t, e)
            : this.moveTo(t, e);
          var o = this.currentPath.shape.points,
            s = o[o.length - 2],
            a = o[o.length - 1],
            u = a - e,
            l = s - t,
            h = n - e,
            c = r - t,
            d = Math.abs(u * c - l * h);
          if (d < 1e-8 || i === 0) { (o[o.length - 2] === t && o[o.length - 1] === e) || o.push(t, e); } else {
            var f = u * u + l * l,
              p = h * h + c * c,
              v = u * h + l * c,
              y = i * Math.sqrt(f) / d,
              g = i * Math.sqrt(p) / d,
              m = y * v / f,
              b = g * v / p,
              x = y * c + g * l,
              _ = y * h + g * u,
              w = l * (g + m),
              T = u * (g + m),
              E = c * (y + b),
              S = h * (y + b),
              P = Math.atan2(T - _, w - x),
              O = Math.atan2(S - _, E - x);
            this.arc(x + t, _ + e, i, P, O, l * h > c * u);
          }
          return this.dirty++, this;
        }), (e.prototype.arc = function(t, e, r, n, i) {
          var o =
            arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
          if (n === i) { return this; }
          !o && i <= n ? (i += 2 * Math.PI) : o && n <= i && (n += 2 * Math.PI);
          var s = i - n, a = 40 * Math.ceil(Math.abs(s) / (2 * Math.PI));
          if (s === 0) { return this; }
          var u = t + Math.cos(n) * r,
            l = e + Math.sin(n) * r,
            h = this.currentPath ? this.currentPath.shape.points : null;
          h
            ? (h[h.length - 2] === u && h[h.length - 1] === l) || h.push(u, l)
            : (this.moveTo(u, l), (h = this.currentPath.shape.points));
          for (
            var c = s / (2 * a),
              d = 2 * c,
              f = Math.cos(c),
              p = Math.sin(c),
              v = a - 1,
              y = v % 1 / v,
              g = 0;
            g <= v;
            ++g
          ) {
            var m = g + y * g,
              b = c + n + d * m,
              x = Math.cos(b),
              _ = -Math.sin(b);
            h.push((f * x + p * _) * r + t, (f * -_ + p * x) * r + e);
          }
          return this.dirty++, this;
        }), (e.prototype.beginFill = function() {
          var t = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : 0,
            e = arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 1;
          return (this.filling = !0), (this.fillColor = t), (this.fillAlpha = e), this
            .currentPath &&
            this.currentPath.shape.points.length <= 2 &&
            ((this.currentPath.fill = this.filling), (this.currentPath.fillColor = this.fillColor), (this.currentPath.fillAlpha = this.fillAlpha)), this;
        }), (e.prototype.endFill = function() {
          return (this.filling = !1), (this.fillColor = null), (this.fillAlpha = 1), this;
        }), (e.prototype.drawRect = function(t, e, r, n) {
          return this.drawShape(new g.Rectangle(t, e, r, n)), this;
        }), (e.prototype.drawRoundedRect = function(t, e, r, n, i) {
          return this.drawShape(new g.RoundedRectangle(t, e, r, n, i)), this;
        }), (e.prototype.drawCircle = function(t, e, r) {
          return this.drawShape(new g.Circle(t, e, r)), this;
        }), (e.prototype.drawEllipse = function(t, e, r, n) {
          return this.drawShape(new g.Ellipse(t, e, r, n)), this;
        }), (e.prototype.drawPolygon = function(t) {
          var e = t, r = !0;
          if (
            (e instanceof g.Polygon &&
              ((r = e.closed), (e = e.points)), !Array.isArray(e))
          ) {
            e = new Array(arguments.length);
            for (var n = 0; n < e.length; ++n) { e[n] = arguments[n]; }
          }
          var i = new g.Polygon(e);
          return (i.closed = r), this.drawShape(i), this;
        }), (e.prototype.clear = function() {
          return (this.lineWidth ||
            this.filling ||
            this.graphicsData.length > 0) &&
            ((this.lineWidth = 0), (this.filling = !1), (this.boundsDirty = -1), this.dirty++, this.clearDirty++, (this.graphicsData.length = 0)), (this.currentPath = null), (this._spriteRect = null), this;
        }), (e.prototype.isFastRect = function() {
          return (
            this.graphicsData.length === 1 &&
            this.graphicsData[0].shape.type === b.SHAPES.RECT &&
            !this.graphicsData[0].lineWidth
          );
        }), (e.prototype._renderWebGL = function(t) {
          this.dirty !== this.fastRectDirty &&
            ((this.fastRectDirty = this.dirty), (this._fastRect = this.isFastRect())), this
            ._fastRect
            ? this._renderSpriteRect(t)
            : (t.setObjectRenderer(
                t.plugins.graphics,
              ), t.plugins.graphics.render(this));
        }), (e.prototype._renderSpriteRect = function(t) {
          var r = this.graphicsData[0].shape;
          if (!this._spriteRect) {
            if (!e._SPRITE_TEXTURE) {
              e._SPRITE_TEXTURE = h.default.create(10, 10);
              var n = document.createElement('canvas');
              (n.width = 10), (n.height = 10);
              var i = n.getContext('2d');
              (i.fillStyle = 'white'), i.fillRect(
                0,
                0,
                10,
                10,
              ), (e._SPRITE_TEXTURE = d.default.fromCanvas(n));
            }
            this._spriteRect = new y.default(e._SPRITE_TEXTURE);
          }
          if (this.tint === 16777215) { this._spriteRect.tint = this.graphicsData[0].fillColor; } else {
            var o = C, s = A;
            (0, m.hex2rgb)(this.graphicsData[0].fillColor, o), (0, m.hex2rgb)(
              this.tint,
              s,
            ), (o[0] *= s[0]), (o[1] *= s[1]), (o[2] *=
              s[2]), (this._spriteRect.tint = (0, m.rgb2hex)(o));
          }
          (this._spriteRect.alpha = this.graphicsData[0].fillAlpha), (this._spriteRect.worldAlpha =
            this.worldAlpha *
            this._spriteRect.alpha), (e._SPRITE_TEXTURE._frame.width =
            r.width), (e._SPRITE_TEXTURE._frame.height =
            r.height), (this._spriteRect.transform.worldTransform = this.transform.worldTransform), this._spriteRect.anchor.set(
            -r.x / r.width,
            -r.y / r.height,
          ), this._spriteRect._onAnchorUpdate(), this._spriteRect._renderWebGL(
            t,
          );
        }), (e.prototype._renderCanvas = function(t) {
          this.isMask !== !0 && t.plugins.graphics.render(this);
        }), (e.prototype._calculateBounds = function() {
          this.boundsDirty !== this.dirty &&
            ((this.boundsDirty = this.dirty), this.updateLocalBounds(), (this.cachedSpriteDirty = !0));
          var t = this._localBounds;
          this._bounds.addFrame(this.transform, t.minX, t.minY, t.maxX, t.maxY);
        }), (e.prototype.containsPoint = function(t) {
          this.worldTransform.applyInverse(t, M);
          for (var e = this.graphicsData, r = 0; r < e.length; ++r) {
            var n = e[r];
            if (n.fill && n.shape && n.shape.contains(M.x, M.y)) { return !0; }
          }
          return !1;
        }), (e.prototype.updateLocalBounds = function() {
          var t = 1 / 0, e = -(1 / 0), r = 1 / 0, n = -(1 / 0);
          if (this.graphicsData.length) {
            for (
              var i = 0, o = 0, s = 0, a = 0, u = 0, l = 0;
              l < this.graphicsData.length;
              l++
            ) {
              var h = this.graphicsData[l], c = h.type, d = h.lineWidth;
              if (((i = h.shape), c === b.SHAPES.RECT || c === b.SHAPES.RREC)) {
                (o = i.x - d / 2), (s = i.y - d / 2), (a = i.width + d), (u =
                  i.height + d), (t = o < t ? o : t), (e = o + a > e
                  ? o + a
                  : e), (r = s < r ? s : r), (n = s + u > n ? s + u : n);
              } else if (c === b.SHAPES.CIRC) {
                (o = i.x), (s = i.y), (a = i.radius + d / 2), (u =
                  i.radius + d / 2), (t = o - a < t ? o - a : t), (e = o + a > e
                  ? o + a
                  : e), (r = s - u < r ? s - u : r), (n = s + u > n
                  ? s + u
                  : n);
              } else if (c === b.SHAPES.ELIP) {
                (o = i.x), (s = i.y), (a = i.width + d / 2), (u =
                  i.height + d / 2), (t = o - a < t ? o - a : t), (e = o + a > e
                  ? o + a
                  : e), (r = s - u < r ? s - u : r), (n = s + u > n
                  ? s + u
                  : n);
              } else {
                for (
                  var f = i.points,
                    p = 0,
                    v = 0,
                    y = 0,
                    g = 0,
                    m = 0,
                    x = 0,
                    _ = 0,
                    w = 0,
                    T = 0;
                  T + 2 < f.length;
                  T += 2
                ) {
                  (o = f[T]), (s = f[T + 1]), (p = f[T + 2]), (v =
                    f[T + 3]), (y = Math.abs(p - o)), (g = Math.abs(
                    v - s,
                  )), (u = d), (a = Math.sqrt(y * y + g * g)), a < 1e-9 ||
                    ((m = (u / a * g + y) / 2), (x = (u / a * y + g) / 2), (_ =
                      (p + o) / 2), (w = (v + s) / 2), (t = _ - m < t
                      ? _ - m
                      : t), (e = _ + m > e ? _ + m : e), (r = w - x < r
                      ? w - x
                      : r), (n = w + x > n ? w + x : n));
                }
              }
            }
          } else { (t = 0), (e = 0), (r = 0), (n = 0); }
          var E = this.boundsPadding;
          (this._localBounds.minX = t - E), (this._localBounds.maxX =
            e + 2 * E), (this._localBounds.minY =
            r - E), (this._localBounds.maxY = n + 2 * E);
        }), (e.prototype.drawShape = function(t) {
          this.currentPath &&
            this.currentPath.shape.points.length <= 2 &&
            this.graphicsData.pop(), (this.currentPath = null);
          var e = new p.default(
            this.lineWidth,
            this.lineColor,
            this.lineAlpha,
            this.fillColor,
            this.fillAlpha,
            this.filling,
            t,
          );
          return this.graphicsData.push(e), e.type === b.SHAPES.POLY &&
            ((e.shape.closed =
              e.shape.closed || this.filling), (this.currentPath = e)), this.dirty++, e;
        }), (e.prototype.generateCanvasTexture = function(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : 1,
            r = this.getLocalBounds(),
            n = h.default.create(r.width, r.height, t, e);
          P || (P = new S.default()), (O.tx = -r.x), (O.ty = -r.y), P.render(
            this,
            n,
            !1,
            O,
          );
          var i = d.default.fromCanvas(
            n.baseTexture._canvasRenderTarget.canvas,
            t,
          );
          return (i.baseTexture.resolution = e), i.baseTexture.update(), i;
        }), (e.prototype.closePath = function() {
          var t = this.currentPath;
          return t && t.shape && t.shape.close(), this;
        }), (e.prototype.addHole = function() {
          var t = this.graphicsData.pop();
          return (this.currentPath = this.graphicsData[
            this.graphicsData.length - 1
          ]), this.currentPath.addHole(
            t.shape,
          ), (this.currentPath = null), this;
        }), (e.prototype.destroy = function(e) {
          t.prototype.destroy.call(this, e);
          for (var r = 0; r < this.graphicsData.length; ++r) { this.graphicsData[r].destroy(); }
          for (var n in this._webgl) {
            for (var i = 0; i < this._webgl[n].data.length; ++i) { this._webgl[n].data[i].destroy(); }
          }
          this._spriteRect &&
            this._spriteRect.destroy(), (this.graphicsData = null), (this.currentPath = null), (this._webgl = null), (this._localBounds = null);
        }), e;
      })(u.default);
    (e.default = R), (R._SPRITE_TEXTURE = null);
  },
  function(t, e) {
    'use strict';
    function r(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    e.__esModule = !0;
    var n = (function() {
      function t(e, n, i, o, s, a, u) {
        r(
          this,
          t,
        ), (this.lineWidth = e), (this.lineColor = n), (this.lineAlpha = i), (this._lineTint = n), (this.fillColor = o), (this.fillAlpha = s), (this._fillTint = o), (this.fill = a), (this.holes = []), (this.shape = u), (this.type =
          u.type);
      }
      return (t.prototype.clone = function() {
        return new t(
          this.lineWidth,
          this.lineColor,
          this.lineAlpha,
          this.fillColor,
          this.fillAlpha,
          this.fill,
          this.shape,
        );
      }), (t.prototype.addHole = function(t) {
        this.holes.push(t);
      }), (t.prototype.destroy = function() {
        (this.shape = null), (this.holes = null);
      }), t;
    })();
    e.default = n;
  },
  function(t, e) {
    'use strict';
    function r(t, e, r, n, i, o, s, a) {
      var u = arguments.length > 8 && void 0 !== arguments[8]
        ? arguments[8]
        : [],
        l = 20,
        h = 0,
        c = 0,
        d = 0,
        f = 0,
        p = 0;
      u.push(t, e);
      for (var v = 1, y = 0; v <= l; ++v) {
        (y = v / l), (h = 1 - y), (c = h * h), (d = c * h), (f = y * y), (p =
          f * y), u.push(
          d * t + 3 * c * y * r + 3 * h * f * i + p * s,
          d * e + 3 * c * y * n + 3 * h * f * o + p * a,
        );
      }
      return u;
    }
    (e.__esModule = !0), (e.default = r);
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    function o(t, e) {
      if (!t) {
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      }
      return !e || (typeof e !== 'object' && typeof e !== 'function') ? t : e;
    }
    function s(t, e) {
      if (typeof e !== 'function' && e !== null) {
        throw new TypeError(
          `Super expression must either be null or a function, not ${typeof e}`,
        );
      }
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {value: t, enumerable: !1, writable: !0, configurable: !0},
      })), e &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(t, e)
          : (t.__proto__ = e));
    }
    e.__esModule = !0;
    var a = r(51),
      u = r(12),
      l = r(80),
      h = n(l),
      c = r(82),
      d = n(c),
      f = r(111),
      p = n(f),
      v = r(112),
      y = n(v),
      g = r(113),
      m = n(g),
      b = r(116),
      x = n(b),
      _ = r(117),
      w = n(_),
      T = r(118),
      E = n(T),
      S = (function(t) {
        function e(r) {
          i(this, e);
          var n = o(this, t.call(this, r));
          return (n.graphicsDataPool = []), (n.primitiveShader = null), (n.gl =
            r.gl), (n.CONTEXT_UID = 0), n;
        }
        return s(e, t), (e.prototype.onContextChange = function() {
          (this.gl = this.renderer.gl), (this.CONTEXT_UID = this.renderer.CONTEXT_UID), (this.primitiveShader = new y.default(
            this.gl,
          ));
        }), (e.prototype.destroy = function() {
          h.default.prototype.destroy.call(this);
          for (var t = 0; t < this.graphicsDataPool.length; ++t) { this.graphicsDataPool[t].destroy(); }
          this.graphicsDataPool = null;
        }), (e.prototype.render = function(t) {
          var e = this.renderer,
            r = e.gl,
            n = void 0,
            i = t._webGL[this.CONTEXT_UID];
          (i && t.dirty === i.dirty) ||
            (this.updateGraphics(t), (i = t._webGL[this.CONTEXT_UID]));
          var o = this.primitiveShader;
          e.bindShader(o), e.state.setBlendMode(t.blendMode);
          for (var s = 0, u = i.data.length; s < u; s++) {
            n = i.data[s];
            var l = n.shader;
            e.bindShader(
              l,
            ), (l.uniforms.translationMatrix = t.transform.worldTransform.toArray(
              !0,
            )), (l.uniforms.tint = (0, a.hex2rgb)(t.tint)), (l.uniforms.alpha =
              t.worldAlpha), e.bindVao(n.vao), n.vao.draw(
              r.TRIANGLE_STRIP,
              n.indices.length,
            );
          }
        }), (e.prototype.updateGraphics = function(t) {
          var e = this.renderer.gl, r = t._webGL[this.CONTEXT_UID];
          if (
            (r ||
              (r = t._webGL[this.CONTEXT_UID] = {
                lastIndex: 0,
                data: [],
                gl: e,
                clearDirty: -1,
                dirty: -1,
              }), (r.dirty = t.dirty), t.clearDirty !== r.clearDirty)
          ) {
            r.clearDirty = t.clearDirty;
            for (var n = 0; n < r.data.length; n++) { this.graphicsDataPool.push(r.data[n]); }
            (r.data.length = 0), (r.lastIndex = 0);
          }
          for (
            var i = void 0, o = r.lastIndex;
            o < t.graphicsData.length;
            o++
          ) {
            var s = t.graphicsData[o];
            (i = this.getWebGLData(r, 0)), s.type === u.SHAPES.POLY &&
              (0, m.default)(s, i), s.type === u.SHAPES.RECT
              ? (0, x.default)(s, i)
              : s.type === u.SHAPES.CIRC || s.type === u.SHAPES.ELIP
                  ? (0, E.default)(s, i)
                  : s.type === u.SHAPES.RREC &&
                      (0, w.default)(s, i), r.lastIndex++;
          }
          this.renderer.bindVao(null);
          for (var a = 0; a < r.data.length; a++) { (i = r.data[a]), i.dirty && i.upload(); }
        }), (e.prototype.getWebGLData = function(t, e) {
          var r = t.data[t.data.length - 1];
          return (!r || r.points.length > 32e4) &&
            ((r =
              this.graphicsDataPool.pop() ||
              new p.default(
                this.renderer.gl,
                this.primitiveShader,
                this.renderer.state.attribsState,
              )), r.reset(e), t.data.push(r)), (r.dirty = !0), r;
        }), e;
      })(h.default);
    (e.default = S), d.default.registerPlugin('graphics', S);
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    e.__esModule = !0;
    var o = r(23),
      s = n(o),
      a = (function() {
        function t(e, r, n) {
          i(this, t), (this.gl = e), (this.color = [
            0,
            0,
            0,
          ]), (this.points = []), (this.indices = []), (this.buffer = s.default.GLBuffer.createVertexBuffer(
            e,
          )), (this.indexBuffer = s.default.GLBuffer.createIndexBuffer(
            e,
          )), (this.dirty = !0), (this.glPoints = null), (this.glIndices = null), (this.shader = r), (this.vao = new s
            .default.VertexArrayObject(e, n)
            .addIndex(this.indexBuffer)
            .addAttribute(
              this.buffer,
              r.attributes.aVertexPosition,
              e.FLOAT,
              !1,
              24,
              0,
            )
            .addAttribute(
              this.buffer,
              r.attributes.aColor,
              e.FLOAT,
              !1,
              24,
              8,
            ));
        }
        return (t.prototype.reset = function() {
          (this.points.length = 0), (this.indices.length = 0);
        }), (t.prototype.upload = function() {
          (this.glPoints = new Float32Array(this.points)), this.buffer.upload(
            this.glPoints,
          ), (this.glIndices = new Uint16Array(
            this.indices,
          )), this.indexBuffer.upload(this.glIndices), (this.dirty = !1);
        }), (t.prototype.destroy = function() {
          (this.color = null), (this.points = null), (this.indices = null), this.vao.destroy(), this.buffer.destroy(), this.indexBuffer.destroy(), (this.gl = null), (this.buffer = null), (this.indexBuffer = null), (this.glPoints = null), (this.glIndices = null);
        }), t;
      })();
    e.default = a;
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    function o(t, e) {
      if (!t) {
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      }
      return !e || (typeof e !== 'object' && typeof e !== 'function') ? t : e;
    }
    function s(t, e) {
      if (typeof e !== 'function' && e !== null) {
        throw new TypeError(
          `Super expression must either be null or a function, not ${typeof e}`,
        );
      }
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {value: t, enumerable: !1, writable: !0, configurable: !0},
      })), e &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(t, e)
          : (t.__proto__ = e));
    }
    e.__esModule = !0;
    var a = r(94),
      u = n(a),
      l = (function(t) {
        function e(r) {
          return i(this, e), o(
            this,
            t.call(
              this,
              r,
              [
                'attribute vec2 aVertexPosition;',
                'attribute vec4 aColor;',
                'uniform mat3 translationMatrix;',
                'uniform mat3 projectionMatrix;',
                'uniform float alpha;',
                'uniform vec3 tint;',
                'varying vec4 vColor;',
                'void main(void){',
                '   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);',
                '   vColor = aColor * vec4(tint * alpha, alpha);',
                '}',
              ].join('\n'),
              [
                'varying vec4 vColor;',
                'void main(void){',
                '   gl_FragColor = vColor;',
                '}',
              ].join('\n'),
            ),
          );
        }
        return s(e, t), e;
      })(u.default);
    e.default = l;
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i(t, e) {
      t.points = t.shape.points.slice();
      var r = t.points;
      if (t.fill && r.length >= 6) {
        for (var n = [], i = t.holes, o = 0; o < i.length; o++) {
          var u = i[o];
          n.push(r.length / 2), (r = r.concat(u.points));
        }
        var h = e.points,
          c = e.indices,
          d = r.length / 2,
          f = (0, a.hex2rgb)(t.fillColor),
          p = t.fillAlpha,
          v = f[0] * p,
          y = f[1] * p,
          g = f[2] * p,
          m = (0, l.default)(r, n, 2);
        if (!m) { return; }
        for (var b = h.length / 6, x = 0; x < m.length; x += 3) {
          c.push(m[x] + b), c.push(m[x] + b), c.push(m[x + 1] + b), c.push(
            m[x + 2] + b,
          ), c.push(m[x + 2] + b);
        }
        for (var _ = 0; _ < d; _++) { h.push(r[2 * _], r[2 * _ + 1], v, y, g, p); }
      }
      t.lineWidth > 0 && (0, s.default)(t, e);
    }
    (e.__esModule = !0), (e.default = i);
    var o = r(114), s = n(o), a = r(51), u = r(115), l = n(u);
  },
  function(t, e, r) {
    'use strict';
    function n(t, e) {
      var r = t.points;
      if (r.length !== 0) {
        var n = new i.Point(r[0], r[1]),
          s = new i.Point(r[r.length - 2], r[r.length - 1]);
        if (n.x === s.x && n.y === s.y) {
          (r = r.slice()), r.pop(), r.pop(), (s = new i.Point(
            r[r.length - 2],
            r[r.length - 1],
          ));
          var a = s.x + 0.5 * (n.x - s.x), u = s.y + 0.5 * (n.y - s.y);
          r.unshift(a, u), r.push(a, u);
        }
        var l = e.points,
          h = e.indices,
          c = r.length / 2,
          d = r.length,
          f = l.length / 6,
          p = t.lineWidth / 2,
          v = (0, o.hex2rgb)(t.lineColor),
          y = t.lineAlpha,
          g = v[0] * y,
          m = v[1] * y,
          b = v[2] * y,
          x = r[0],
          _ = r[1],
          w = r[2],
          T = r[3],
          E = 0,
          S = 0,
          P = -(_ - T),
          O = x - w,
          M = 0,
          C = 0,
          A = 0,
          R = 0,
          D = Math.sqrt(P * P + O * O);
        (P /= D), (O /= D), (P *= p), (O *= p), l.push(
          x - P,
          _ - O,
          g,
          m,
          b,
          y,
        ), l.push(x + P, _ + O, g, m, b, y);
        for (var I = 1; I < c - 1; ++I) {
          (x = r[2 * (I - 1)]), (_ = r[2 * (I - 1) + 1]), (w = r[2 * I]), (T =
            r[2 * I + 1]), (E = r[2 * (I + 1)]), (S =
            r[2 * (I + 1) + 1]), (P = -(_ - T)), (O = x - w), (D = Math.sqrt(
            P * P + O * O,
          )), (P /= D), (O /= D), (P *= p), (O *= p), (M = -(T - S)), (C =
            w - E), (D = Math.sqrt(
            M * M + C * C,
          )), (M /= D), (C /= D), (M *= p), (C *= p);
          var L = -O + _ - (-O + T),
            k = -P + w - (-P + x),
            B = (-P + x) * (-O + T) - (-P + w) * (-O + _),
            N = -C + S - (-C + T),
            F = -M + w - (-M + E),
            j = (-M + E) * (-C + T) - (-M + w) * (-C + S),
            U = L * F - N * k;
          if (Math.abs(U) < 0.1) {
            (U += 10.1), l.push(w - P, T - O, g, m, b, y), l.push(
              w + P,
              T + O,
              g,
              m,
              b,
              y,
            );
          } else {
            var X = (k * j - F * B) / U,
              W = (N * B - L * j) / U,
              V = (X - w) * (X - w) + (W - T) * (W - T);
            V > 196 * p * p
              ? ((A = P - M), (R = O - C), (D = Math.sqrt(
                  A * A + R * R,
                )), (A /= D), (R /= D), (A *= p), (R *= p), l.push(
                  w - A,
                  T - R,
                ), l.push(g, m, b, y), l.push(w + A, T + R), l.push(
                  g,
                  m,
                  b,
                  y,
                ), l.push(w - A, T - R), l.push(g, m, b, y), d++)
              : (l.push(X, W), l.push(g, m, b, y), l.push(
                  w - (X - w),
                  T - (W - T),
                ), l.push(g, m, b, y));
          }
        }
        (x = r[2 * (c - 2)]), (_ = r[2 * (c - 2) + 1]), (w =
          r[2 * (c - 1)]), (T = r[2 * (c - 1) + 1]), (P = -(_ - T)), (O =
          x - w), (D = Math.sqrt(
          P * P + O * O,
        )), (P /= D), (O /= D), (P *= p), (O *= p), l.push(
          w - P,
          T - O,
        ), l.push(g, m, b, y), l.push(w + P, T + O), l.push(g, m, b, y), h.push(
          f,
        );
        for (var G = 0; G < d; ++G) { h.push(f++); }
        h.push(f - 1);
      }
    }
    (e.__esModule = !0), (e.default = n);
    var i = r(13), o = r(51);
  },
  function(t, e) {
    'use strict';
    function r(t, e, r) {
      r = r || 2;
      var i = e && e.length,
        s = i ? e[0] * r : t.length,
        a = n(t, 0, s, r, !0),
        u = [];
      if (!a) { return u; }
      var l, c, d, f, p, v, y;
      if ((i && (a = h(t, e, a, r)), t.length > 80 * r)) {
        (l = d = t[0]), (c = f = t[1]);
        for (var g = r; g < s; g += r) {
          (p = t[g]), (v = t[g + 1]), p < l && (l = p), v < c && (c = v), p >
            d && (d = p), v > f && (f = v);
        }
        y = Math.max(d - l, f - c);
      }
      return o(a, u, r, l, c, y), u;
    }
    function n(t, e, r, n, i) {
      var o, s;
      if (i === A(t, e, r, n) > 0) {
        for (o = e; o < r; o += n) { s = O(o, t[o], t[o + 1], s); }
      } else { for (o = r - n; o >= e; o -= n) { s = O(o, t[o], t[o + 1], s); } }
      return s && _(s, s.next) && (M(s), (s = s.next)), s;
    }
    function i(t, e) {
      if (!t) { return t; }
      e || (e = t);
      var r, n = t;
      do {
        if (
          ((r = !1), n.steiner || (!_(n, n.next) && x(n.prev, n, n.next) !== 0))
        ) { n = n.next; } else {
          if ((M(n), (n = e = n.prev), n === n.next)) { return null; }
          r = !0;
        }
      }
      while (r || n !== e);
      return e;
    }
    function o(t, e, r, n, h, c, d) {
      if (t) {
        !d && c && p(t, n, h, c);
        for (var f, v, y = t; t.prev !== t.next;) {
          if (((f = t.prev), (v = t.next), c ? a(t, n, h, c) : s(t))) {
            e.push(f.i / r), e.push(t.i / r), e.push(v.i / r), M(t), (t =
              v.next), (y = v.next);
          } else if (((t = v), t === y)) {
            d
              ? d === 1
                  ? ((t = u(t, e, r)), o(t, e, r, n, h, c, 2))
                  : d === 2 && l(t, e, r, n, h, c)
              : o(i(t), e, r, n, h, c, 1);
            break;
          }
        }
      }
    }
    function s(t) {
      var e = t.prev, r = t, n = t.next;
      if (x(e, r, n) >= 0) { return !1; }
      for (var i = t.next.next; i !== t.prev;) {
        if (
          m(e.x, e.y, r.x, r.y, n.x, n.y, i.x, i.y) &&
          x(i.prev, i, i.next) >= 0
        ) { return !1; }
        i = i.next;
      }
      return !0;
    }
    function a(t, e, r, n) {
      var i = t.prev, o = t, s = t.next;
      if (x(i, o, s) >= 0) { return !1; }
      for (
        var a = i.x < o.x ? (i.x < s.x ? i.x : s.x) : o.x < s.x ? o.x : s.x,
          u = i.y < o.y ? (i.y < s.y ? i.y : s.y) : o.y < s.y ? o.y : s.y,
          l = i.x > o.x ? (i.x > s.x ? i.x : s.x) : o.x > s.x ? o.x : s.x,
          h = i.y > o.y ? (i.y > s.y ? i.y : s.y) : o.y > s.y ? o.y : s.y,
          c = y(a, u, e, r, n),
          d = y(l, h, e, r, n),
          f = t.nextZ;
        f && f.z <= d;

      ) {
        if (
          f !== t.prev &&
          f !== t.next &&
          m(i.x, i.y, o.x, o.y, s.x, s.y, f.x, f.y) &&
          x(f.prev, f, f.next) >= 0
        ) { return !1; }
        f = f.nextZ;
      }
      for (f = t.prevZ; f && f.z >= c;) {
        if (
          f !== t.prev &&
          f !== t.next &&
          m(i.x, i.y, o.x, o.y, s.x, s.y, f.x, f.y) &&
          x(f.prev, f, f.next) >= 0
        ) { return !1; }
        f = f.prevZ;
      }
      return !0;
    }
    function u(t, e, r) {
      var n = t;
      do {
        var i = n.prev, o = n.next.next;
        !_(i, o) &&
          w(i, n, n.next, o) &&
          E(i, o) &&
          E(o, i) &&
          (e.push(i.i / r), e.push(n.i / r), e.push(o.i / r), M(n), M(
            n.next,
          ), (n = t = o)), (n = n.next);
      } while (n !== t);
      return n;
    }
    function l(t, e, r, n, s, a) {
      var u = t;
      do {
        for (var l = u.next.next; l !== u.prev;) {
          if (u.i !== l.i && b(u, l)) {
            var h = P(u, l);
            return (u = i(u, u.next)), (h = i(h, h.next)), o(
              u,
              e,
              r,
              n,
              s,
              a,
            ), void o(h, e, r, n, s, a);
          }
          l = l.next;
        }
        u = u.next;
      } while (u !== t);
    }
    function h(t, e, r, o) {
      var s, a, u, l, h, f = [];
      for ((s = 0), (a = e.length); s < a; s++) {
        (u = e[s] * o), (l = s < a - 1 ? e[s + 1] * o : t.length), (h = n(
          t,
          u,
          l,
          o,
          !1,
        )), h === h.next && (h.steiner = !0), f.push(g(h));
      }
      for (f.sort(c), (s = 0); s < f.length; s++) { d(f[s], r), (r = i(r, r.next)); }
      return r;
    }
    function c(t, e) {
      return t.x - e.x;
    }
    function d(t, e) {
      if ((e = f(t, e))) {
        var r = P(e, t);
        i(r, r.next);
      }
    }
    function f(t, e) {
      var r, n = e, i = t.x, o = t.y, s = -(1 / 0);
      do {
        if (o <= n.y && o >= n.next.y) {
          var a = n.x + (o - n.y) * (n.next.x - n.x) / (n.next.y - n.y);
          if (a <= i && a > s) {
            if (((s = a), a === i)) {
              if (o === n.y) { return n; }
              if (o === n.next.y) { return n.next; }
            }
            r = n.x < n.next.x ? n : n.next;
          }
        }
        n = n.next;
      } while (n !== e);
      if (!r) { return null; }
      if (i === s) { return r.prev; }
      var u, l = r, h = r.x, c = r.y, d = 1 / 0;
      for (n = r.next; n !== l;) {
        i >= n.x &&
          n.x >= h &&
          m(o < c ? i : s, o, h, c, o < c ? s : i, o, n.x, n.y) &&
          ((u = Math.abs(o - n.y) / (i - n.x)), (u < d ||
            (u === d && n.x > r.x)) &&
            E(n, t) &&
            ((r = n), (d = u))), (n = n.next);
      }
      return r;
    }
    function p(t, e, r, n) {
      var i = t;
      do {
        i.z === null && (i.z = y(i.x, i.y, e, r, n)), (i.prevZ =
          i.prev), (i.nextZ = i.next), (i = i.next);
      }
      while (i !== t);
      (i.prevZ.nextZ = null), (i.prevZ = null), v(i);
    }
    function v(t) {
      var e, r, n, i, o, s, a, u, l = 1;
      do {
        for ((r = t), (t = null), (o = null), (s = 0); r;) {
          for (
            s++, (n = r), (a = 0), (e = 0);
            e < l && (a++, (n = n.nextZ), n);
            e++
          ) { }
          for (u = l; a > 0 || (u > 0 && n);) {
            a === 0
              ? ((i = n), (n = n.nextZ), u--)
              : u !== 0 && n
                  ? r.z <= n.z
                      ? ((i = r), (r = r.nextZ), a--)
                      : ((i = n), (n = n.nextZ), u--)
                  : ((i = r), (r = r.nextZ), a--), o
              ? (o.nextZ = i)
              : (t = i), (i.prevZ = o), (o = i);
          }
          r = n;
        }
        (o.nextZ = null), (l *= 2);
      } while (s > 1);
      return t;
    }
    function y(t, e, r, n, i) {
      return (t = 32767 * (t - r) / i), (e = 32767 * (e - n) / i), (t =
        16711935 & (t | (t << 8))), (t = 252645135 & (t | (t << 4))), (t =
        858993459 & (t | (t << 2))), (t = 1431655765 & (t | (t << 1))), (e =
        16711935 & (e | (e << 8))), (e = 252645135 & (e | (e << 4))), (e =
        858993459 & (e | (e << 2))), (e = 1431655765 & (e | (e << 1))), t |
        (e << 1);
    }
    function g(t) {
      var e = t, r = t;
      do { e.x < r.x && (r = e), (e = e.next); }
      while (e !== t);
      return r;
    }
    function m(t, e, r, n, i, o, s, a) {
      return (
        (i - s) * (e - a) - (t - s) * (o - a) >= 0 &&
        (t - s) * (n - a) - (r - s) * (e - a) >= 0 &&
        (r - s) * (o - a) - (i - s) * (n - a) >= 0
      );
    }
    function b(t, e) {
      return (
        t.next.i !== e.i &&
        t.prev.i !== e.i &&
        !T(t, e) &&
        E(t, e) &&
        E(e, t) &&
        S(t, e)
      );
    }
    function x(t, e, r) {
      return (e.y - t.y) * (r.x - e.x) - (e.x - t.x) * (r.y - e.y);
    }
    function _(t, e) {
      return t.x === e.x && t.y === e.y;
    }
    function w(t, e, r, n) {
      return (
        Boolean((_(t, e) && _(r, n)) || (_(t, n) && _(r, e))) ||
        (x(t, e, r) > 0 != x(t, e, n) > 0 && x(r, n, t) > 0 != x(r, n, e) > 0)
      );
    }
    function T(t, e) {
      var r = t;
      do {
        if (
          r.i !== t.i &&
          r.next.i !== t.i &&
          r.i !== e.i &&
          r.next.i !== e.i &&
          w(r, r.next, t, e)
        ) { return !0; }
        r = r.next;
      } while (r !== t);
      return !1;
    }
    function E(t, e) {
      return x(t.prev, t, t.next) < 0
        ? x(t, e, t.next) >= 0 && x(t, t.prev, e) >= 0
        : x(t, e, t.prev) < 0 || x(t, t.next, e) < 0;
    }
    function S(t, e) {
      var r = t, n = !1, i = (t.x + e.x) / 2, o = (t.y + e.y) / 2;
      do {
        r.y > o != r.next.y > o &&
          i < (r.next.x - r.x) * (o - r.y) / (r.next.y - r.y) + r.x &&
          (n = !n), (r = r.next);
      }
      while (r !== t);
      return n;
    }
    function P(t, e) {
      var r = new C(t.i, t.x, t.y),
        n = new C(e.i, e.x, e.y),
        i = t.next,
        o = e.prev;
      return (t.next = e), (e.prev = t), (r.next = i), (i.prev = r), (n.next = r), (r.prev = n), (o.next = n), (n.prev = o), n;
    }
    function O(t, e, r, n) {
      var i = new C(t, e, r);
      return n
        ? ((i.next = n.next), (i.prev = n), (n.next.prev = i), (n.next = i))
        : ((i.prev = i), (i.next = i)), i;
    }
    function M(t) {
      (t.next.prev = t.prev), (t.prev.next = t.next), t.prevZ &&
        (t.prevZ.nextZ = t.nextZ), t.nextZ && (t.nextZ.prevZ = t.prevZ);
    }
    function C(t, e, r) {
      (this.i = t), (this.x = e), (this.y = r), (this.prev = null), (this.next = null), (this.z = null), (this.prevZ = null), (this.nextZ = null), (this.steiner = !1);
    }
    function A(t, e, r, n) {
      for (var i = 0, o = e, s = r - n; o < r; o += n) { (i += (t[s] - t[o]) * (t[o + 1] + t[s + 1])), (s = o); }
      return i;
    }
    (t.exports = r), (r.deviation = function(t, e, r, n) {
      var i = e && e.length,
        o = i ? e[0] * r : t.length,
        s = Math.abs(A(t, 0, o, r));
      if (i) {
        for (var a = 0, u = e.length; a < u; a++) {
          var l = e[a] * r, h = a < u - 1 ? e[a + 1] * r : t.length;
          s -= Math.abs(A(t, l, h, r));
        }
      }
      var c = 0;
      for (a = 0; a < n.length; a += 3) {
        var d = n[a] * r, f = n[a + 1] * r, p = n[a + 2] * r;
        c += Math.abs(
          (t[d] - t[p]) * (t[f + 1] - t[d + 1]) -
            (t[d] - t[f]) * (t[p + 1] - t[d + 1]),
        );
      }
      return s === 0 && c === 0 ? 0 : Math.abs((c - s) / s);
    }), (r.flatten = function(t) {
      for (
        var e = t[0][0].length,
          r = {vertices: [], holes: [], dimensions: e},
          n = 0,
          i = 0;
        i < t.length;
        i++
      ) {
        for (var o = 0; o < t[i].length; o++) {
          for (var s = 0; s < e; s++) { r.vertices.push(t[i][o][s]); }
        }
        i > 0 && ((n += t[i - 1].length), r.holes.push(n));
      }
      return r;
    });
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i(t, e) {
      var r = t.shape, n = r.x, i = r.y, o = r.width, u = r.height;
      if (t.fill) {
        var l = (0, a.hex2rgb)(t.fillColor),
          h = t.fillAlpha,
          c = l[0] * h,
          d = l[1] * h,
          f = l[2] * h,
          p = e.points,
          v = e.indices,
          y = p.length / 6;
        p.push(n, i), p.push(c, d, f, h), p.push(n + o, i), p.push(
          c,
          d,
          f,
          h,
        ), p.push(n, i + u), p.push(c, d, f, h), p.push(n + o, i + u), p.push(
          c,
          d,
          f,
          h,
        ), v.push(y, y, y + 1, y + 2, y + 3, y + 3);
      }
      if (t.lineWidth) {
        var g = t.points;
        (t.points = [
          n,
          i,
          n + o,
          i,
          n + o,
          i + u,
          n,
          i + u,
          n,
          i,
        ]), (0, s.default)(t, e), (t.points = g);
      }
    }
    (e.__esModule = !0), (e.default = i);
    var o = r(114), s = n(o), a = r(51);
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i(t, e) {
      var r = t.shape,
        n = r.x,
        i = r.y,
        s = r.width,
        u = r.height,
        c = r.radius,
        d = [];
      if (
        (d.push(n, i + c), o(n, i + u - c, n, i + u, n + c, i + u, d), o(
          n + s - c,
          i + u,
          n + s,
          i + u,
          n + s,
          i + u - c,
          d,
        ), o(n + s, i + c, n + s, i, n + s - c, i, d), o(
          n + c,
          i,
          n,
          i,
          n,
          i + c + 1e-10,
          d,
        ), t.fill)
      ) {
        for (
          var f = (0, h.hex2rgb)(t.fillColor),
            p = t.fillAlpha,
            v = f[0] * p,
            y = f[1] * p,
            g = f[2] * p,
            m = e.points,
            b = e.indices,
            x = m.length / 6,
            _ = (0, a.default)(d, null, 2),
            w = 0,
            T = _.length;
          w < T;
          w += 3
        ) {
          b.push(_[w] + x), b.push(_[w] + x), b.push(_[w + 1] + x), b.push(
            _[w + 2] + x,
          ), b.push(_[w + 2] + x);
        }
        for (var E = 0, S = d.length; E < S; E++) { m.push(d[E], d[++E], v, y, g, p); }
      }
      if (t.lineWidth) {
        var P = t.points;
        (t.points = d), (0, l.default)(t, e), (t.points = P);
      }
    }
    function o(t, e, r, n, i, o) {
      function s(t, e, r) {
        var n = e - t;
        return t + n * r;
      }
      for (
        var a = arguments.length > 6 && void 0 !== arguments[6]
          ? arguments[6]
          : [],
          u = 20,
          l = a,
          h = 0,
          c = 0,
          d = 0,
          f = 0,
          p = 0,
          v = 0,
          y = 0,
          g = 0;
        y <= u;
        ++y
      ) {
        (g = y / u), (h = s(t, r, g)), (c = s(e, n, g)), (d = s(
          r,
          i,
          g,
        )), (f = s(n, o, g)), (p = s(h, d, g)), (v = s(c, f, g)), l.push(p, v);
      }
      return l;
    }
    (e.__esModule = !0), (e.default = i);
    var s = r(115), a = n(s), u = r(114), l = n(u), h = r(51);
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i(t, e) {
      var r = t.shape, n = r.x, i = r.y, o = void 0, l = void 0;
      t.type === a.SHAPES.CIRC
        ? ((o = r.radius), (l = r.radius))
        : ((o = r.width), (l = r.height));
      var h =
        Math.floor(30 * Math.sqrt(r.radius)) ||
        Math.floor(15 * Math.sqrt(r.width + r.height)),
        c = 2 * Math.PI / h;
      if (t.fill) {
        var d = (0, u.hex2rgb)(t.fillColor),
          f = t.fillAlpha,
          p = d[0] * f,
          v = d[1] * f,
          y = d[2] * f,
          g = e.points,
          m = e.indices,
          b = g.length / 6;
        m.push(b);
        for (var x = 0; x < h + 1; x++) {
          g.push(n, i, p, v, y, f), g.push(
            n + Math.sin(c * x) * o,
            i + Math.cos(c * x) * l,
            p,
            v,
            y,
            f,
          ), m.push(b++, b++);
        }
        m.push(b - 1);
      }
      if (t.lineWidth) {
        var _ = t.points;
        t.points = [];
        for (var w = 0; w < h + 1; w++) { t.points.push(n + Math.sin(c * w) * o, i + Math.cos(c * w) * l); }
        (0, s.default)(t, e), (t.points = _);
      }
    }
    (e.__esModule = !0), (e.default = i);
    var o = r(114), s = n(o), a = r(12), u = r(51);
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    e.__esModule = !0;
    var o = r(70),
      s = n(o),
      a = r(12),
      u = (function() {
        function t(e) {
          i(this, t), (this.renderer = e);
        }
        return (t.prototype.render = function(t) {
          var e = this.renderer,
            r = e.context,
            n = t.worldAlpha,
            i = t.transform.worldTransform,
            o = e.resolution;
          this._prevTint !== this.tint && (this.dirty = !0), r.setTransform(
            i.a * o,
            i.b * o,
            i.c * o,
            i.d * o,
            i.tx * o,
            i.ty * o,
          ), t.dirty &&
            (this.updateGraphicsTint(t), (t.dirty = !1)), e.setBlendMode(
            t.blendMode,
          );
          for (var s = 0; s < t.graphicsData.length; s++) {
            var u = t.graphicsData[s],
              l = u.shape,
              h = u._fillTint,
              c = u._lineTint;
            if (((r.lineWidth = u.lineWidth), u.type === a.SHAPES.POLY)) {
              r.beginPath(), this.renderPolygon(l.points, l.closed, r);
              for (var d = 0; d < u.holes.length; d++) { this.renderPolygon(u.holes[d].points, !0, r); }
              u.fill &&
                ((r.globalAlpha = u.fillAlpha * n), (r.fillStyle =
                  `#${
                  (`00000${(0 | h).toString(16)}`).substr(
                    -6,
                  )}`), r.fill()), u.lineWidth &&
                ((r.globalAlpha = u.lineAlpha * n), (r.strokeStyle =
                  `#${
                  (`00000${(0 | c).toString(16)}`).substr(-6)}`), r.stroke());
            } else if (u.type === a.SHAPES.RECT) {
              (u.fillColor || u.fillColor === 0) &&
                ((r.globalAlpha = u.fillAlpha * n), (r.fillStyle =
                  `#${
                  (`00000${(0 | h).toString(16)}`).substr(-6)}`), r.fillRect(
                  l.x,
                  l.y,
                  l.width,
                  l.height,
                )), u.lineWidth &&
                ((r.globalAlpha = u.lineAlpha * n), (r.strokeStyle =
                  `#${
                  (`00000${(0 | c).toString(16)}`).substr(-6)}`), r.strokeRect(
                  l.x,
                  l.y,
                  l.width,
                  l.height,
                ));
            } else if (u.type === a.SHAPES.CIRC) {
              r.beginPath(), r.arc(
                l.x,
                l.y,
                l.radius,
                0,
                2 * Math.PI,
              ), r.closePath(), u.fill &&
                ((r.globalAlpha = u.fillAlpha * n), (r.fillStyle =
                  `#${
                  (`00000${(0 | h).toString(16)}`).substr(
                    -6,
                  )}`), r.fill()), u.lineWidth &&
                ((r.globalAlpha = u.lineAlpha * n), (r.strokeStyle =
                  `#${
                  (`00000${(0 | c).toString(16)}`).substr(-6)}`), r.stroke());
            } else if (u.type === a.SHAPES.ELIP) {
              var f = 2 * l.width,
                p = 2 * l.height,
                v = l.x - f / 2,
                y = l.y - p / 2;
              r.beginPath();
              var g = 0.5522848,
                m = f / 2 * g,
                b = p / 2 * g,
                x = v + f,
                _ = y + p,
                w = v + f / 2,
                T = y + p / 2;
              r.moveTo(v, T), r.bezierCurveTo(
                v,
                T - b,
                w - m,
                y,
                w,
                y,
              ), r.bezierCurveTo(w + m, y, x, T - b, x, T), r.bezierCurveTo(
                x,
                T + b,
                w + m,
                _,
                w,
                _,
              ), r.bezierCurveTo(
                w - m,
                _,
                v,
                T + b,
                v,
                T,
              ), r.closePath(), u.fill &&
                ((r.globalAlpha = u.fillAlpha * n), (r.fillStyle =
                  `#${
                  (`00000${(0 | h).toString(16)}`).substr(
                    -6,
                  )}`), r.fill()), u.lineWidth &&
                ((r.globalAlpha = u.lineAlpha * n), (r.strokeStyle =
                  `#${
                  (`00000${(0 | c).toString(16)}`).substr(-6)}`), r.stroke());
            } else if (u.type === a.SHAPES.RREC) {
              var E = l.x,
                S = l.y,
                P = l.width,
                O = l.height,
                M = l.radius,
                C = (Math.min(P, O) / 2) | 0;
              (M = M > C ? C : M), r.beginPath(), r.moveTo(E, S + M), r.lineTo(
                E,
                S + O - M,
              ), r.quadraticCurveTo(E, S + O, E + M, S + O), r.lineTo(
                E + P - M,
                S + O,
              ), r.quadraticCurveTo(E + P, S + O, E + P, S + O - M), r.lineTo(
                E + P,
                S + M,
              ), r.quadraticCurveTo(E + P, S, E + P - M, S), r.lineTo(
                E + M,
                S,
              ), r.quadraticCurveTo(
                E,
                S,
                E,
                S + M,
              ), r.closePath(), (u.fillColor || u.fillColor === 0) &&
                ((r.globalAlpha = u.fillAlpha * n), (r.fillStyle =
                  `#${
                  (`00000${(0 | h).toString(16)}`).substr(
                    -6,
                  )}`), r.fill()), u.lineWidth &&
                ((r.globalAlpha = u.lineAlpha * n), (r.strokeStyle =
                  `#${
                  (`00000${(0 | c).toString(16)}`).substr(-6)}`), r.stroke());
            }
          }
        }), (t.prototype.updateGraphicsTint = function(t) {
          t._prevTint = t.tint;
          for (
            var e = ((t.tint >> 16) & 255) / 255,
              r = ((t.tint >> 8) & 255) / 255,
              n = (255 & t.tint) / 255,
              i = 0;
            i < t.graphicsData.length;
            ++i
          ) {
            var o = t.graphicsData[i], s = 0 | o.fillColor, a = 0 | o.lineColor;
            (o._fillTint =
              ((((s >> 16) & 255) / 255 * e * 255) << 16) +
              ((((s >> 8) & 255) / 255 * r * 255) << 8) +
              (255 & s) / 255 * n * 255), (o._lineTint =
              ((((a >> 16) & 255) / 255 * e * 255) << 16) +
              ((((a >> 8) & 255) / 255 * r * 255) << 8) +
              (255 & a) / 255 * n * 255);
          }
        }), (t.prototype.renderPolygon = function(t, e, r) {
          r.moveTo(t[0], t[1]);
          for (var n = 1; n < t.length / 2; ++n) { r.lineTo(t[2 * n], t[2 * n + 1]); }
          e && r.closePath();
        }), (t.prototype.destroy = function() {
          this.renderer = null;
        }), t;
      })();
    (e.default = u), s.default.registerPlugin('graphics', u);
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    e.__esModule = !0;
    var o = (function() {
        function t(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1), (n.configurable = !0), 'value' in
            n && (n.writable = !0), Object.defineProperty(t, n.key, n);
          }
        }
        return function(e, r, n) {
          return r && t(e.prototype, r), n && t(e, n), e;
        };
      })(),
      s = r(121),
      a = r(50),
      u = n(a),
      l = r(67),
      h = n(l),
      c = (function() {
        function t(e, r, n, o) {
          i(this, t), (this.renderer = (0, s.autoDetectRenderer)(
            e,
            r,
            n,
            o,
          )), (this.stage = new u.default()), (this.ticker = new h.default()), this.ticker.add(
            this.render,
            this,
          ), this.start();
        }
        return (t.prototype.render = function() {
          this.renderer.render(this.stage);
        }), (t.prototype.stop = function() {
          this.ticker.stop();
        }), (t.prototype.start = function() {
          this.ticker.start();
        }), (t.prototype.destroy = function(t) {
          this.stop(), this.ticker.remove(
            this.render,
            this,
          ), (this.ticker = null), this.stage.destroy(), (this.stage = null), this.renderer.destroy(
            t,
          ), (this.renderer = null);
        }), o(t, [
          {
            key: 'view',
            get() {
              return this.renderer.view;
            },
          },
        ]), t;
      })();
    e.default = c;
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i(t) {
      if (t && t.__esModule) { return t; }
      var e = {};
      if (t != null) {
        for (var r in t) { Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); }
      }
      return (e.default = t), e;
    }
    function o() {
      var t = arguments.length > 0 && void 0 !== arguments[0]
        ? arguments[0]
        : 800,
        e = arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : 600,
        r = arguments[2],
        n = arguments[3];
      return !n && a.isWebGLSupported()
        ? new c.default(t, e, r)
        : new l.default(t, e, r);
    }
    (e.__esModule = !0), (e.autoDetectRenderer = o);
    var s = r(51), a = i(s), u = r(70), l = n(u), h = r(82), c = n(h);
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    e.__esModule = !0;
    var i = r(123);
    Object.defineProperty(e, 'Mesh', {
      enumerable: !0,
      get() {
        return n(i).default;
      },
    });
    var o = r(124);
    Object.defineProperty(e, 'MeshRenderer', {
      enumerable: !0,
      get() {
        return n(o).default;
      },
    });
    var s = r(125);
    Object.defineProperty(e, 'CanvasMeshRenderer', {
      enumerable: !0,
      get() {
        return n(s).default;
      },
    });
    var a = r(126);
    Object.defineProperty(e, 'Plane', {
      enumerable: !0,
      get() {
        return n(a).default;
      },
    });
    var u = r(127);
    Object.defineProperty(e, 'NineSlicePlane', {
      enumerable: !0,
      get() {
        return n(u).default;
      },
    });
    var l = r(128);
    Object.defineProperty(e, 'Rope', {
      enumerable: !0,
      get() {
        return n(l).default;
      },
    });
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      if (t && t.__esModule) { return t; }
      var e = {};
      if (t != null) {
        for (var r in t) { Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); }
      }
      return (e.default = t), e;
    }
    function i(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    function o(t, e) {
      if (!t) {
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      }
      return !e || (typeof e !== 'object' && typeof e !== 'function') ? t : e;
    }
    function s(t, e) {
      if (typeof e !== 'function' && e !== null) {
        throw new TypeError(
          `Super expression must either be null or a function, not ${typeof e}`,
        );
      }
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {value: t, enumerable: !1, writable: !0, configurable: !0},
      })), e &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(t, e)
          : (t.__proto__ = e));
    }
    e.__esModule = !0;
    var a = (function() {
        function t(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1), (n.configurable = !0), 'value' in
            n && (n.writable = !0), Object.defineProperty(t, n.key, n);
          }
        }
        return function(e, r, n) {
          return r && t(e.prototype, r), n && t(e, n), e;
        };
      })(),
      u = r(11),
      l = n(u),
      h = new l.Point(),
      c = new l.Polygon(),
      d = (function(t) {
        function e(r, n, s, a, u) {
          i(this, e);
          var h = o(this, t.call(this));
          return (h._texture = null), (h.uvs =
            s || new Float32Array([0, 0, 1, 0, 1, 1, 0, 1])), (h.vertices =
            n ||
            new Float32Array([0, 0, 100, 0, 100, 100, 0, 100])), (h.indices =
            a ||
            new Uint16Array([
              0,
              1,
              3,
              2,
            ])), (h.dirty = 0), (h.indexDirty = 0), (h.blendMode =
            l.BLEND_MODES.NORMAL), (h.canvasPadding = 0), (h.drawMode =
            u ||
            e.DRAW_MODES
              .TRIANGLE_MESH), (h.texture = r), (h.shader = null), (h.tintRgb = new Float32Array(
            [1, 1, 1],
          )), (h._glDatas = {}), (h.pluginName = 'mesh'), h;
        }
        return s(e, t), (e.prototype._renderWebGL = function(t) {
          t.setObjectRenderer(t.plugins[this.pluginName]), t.plugins[
            this.pluginName
          ].render(this);
        }), (e.prototype._renderCanvas = function(t) {
          t.plugins[this.pluginName].render(this);
        }), (e.prototype._onTextureUpdate = function() {}), (e.prototype._calculateBounds = function() {
          this._bounds.addVertices(
            this.transform,
            this.vertices,
            0,
            this.vertices.length,
          );
        }), (e.prototype.containsPoint = function(t) {
          if (!this.getBounds().contains(t.x, t.y)) { return !1; }
          this.worldTransform.applyInverse(t, h);
          for (
            var r = this.vertices,
              n = c.points,
              i = this.indices,
              o = this.indices.length,
              s = this.drawMode === e.DRAW_MODES.TRIANGLES ? 3 : 1,
              a = 0;
            a + 2 < o;
            a += s
          ) {
            var u = 2 * i[a], l = 2 * i[a + 1], d = 2 * i[a + 2];
            if (
              ((n[0] = r[u]), (n[1] = r[u + 1]), (n[2] = r[l]), (n[3] =
                r[l + 1]), (n[4] = r[d]), (n[5] = r[d + 1]), c.contains(
                h.x,
                h.y,
              ))
            ) { return !0; }
          }
          return !1;
        }), a(e, [
          {
            key: 'texture',
            get() {
              return this._texture;
            },
            set(t) {
              this._texture !== t &&
                ((this._texture = t), t &&
                  (t.baseTexture.hasLoaded
                    ? this._onTextureUpdate()
                    : t.once('update', this._onTextureUpdate, this)));
            },
          },
          {
            key: 'tint',
            get() {
              return l.utils.rgb2hex(this.tintRgb);
            },
            set(t) {
              this.tintRgb = l.utils.hex2rgb(t, this.tintRgb);
            },
          },
        ]), e;
      })(l.Container);
    (e.default = d), (d.DRAW_MODES = {TRIANGLE_MESH: 0, TRIANGLES: 1});
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i(t) {
      if (t && t.__esModule) { return t; }
      var e = {};
      if (t != null) {
        for (var r in t) { Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); }
      }
      return (e.default = t), e;
    }
    function o(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    function s(t, e) {
      if (!t) {
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      }
      return !e || (typeof e !== 'object' && typeof e !== 'function') ? t : e;
    }
    function a(t, e) {
      if (typeof e !== 'function' && e !== null) {
        throw new TypeError(
          `Super expression must either be null or a function, not ${typeof e}`,
        );
      }
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {value: t, enumerable: !1, writable: !0, configurable: !0},
      })), e &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(t, e)
          : (t.__proto__ = e));
    }
    e.__esModule = !0;
    var u = r(11),
      l = i(u),
      h = r(23),
      c = n(h),
      d = r(123),
      f = n(d),
      p = (r(87), (function(t) {
        function e(r) {
          o(this, e);
          var n = s(this, t.call(this, r));
          return (n.shader = null), n;
        }
        return a(e, t), (e.prototype.onContextChange = function() {
          var t = this.renderer.gl;
          this.shader = new l.Shader(
            t,
            'attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 translationMatrix;\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n}\n',
            'varying vec2 vTextureCoord;\nuniform float alpha;\nuniform vec3 tint;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord) * vec4(tint * alpha, alpha);\n}\n',
          );
        }), (e.prototype.render = function(t) {
          var e = this.renderer, r = e.gl, n = t._texture;
          if (n.valid) {
            var i = t._glDatas[e.CONTEXT_UID];
            i ||
              (e.bindVao(null), (i = {
                shader: this.shader,
                vertexBuffer: c.default.GLBuffer.createVertexBuffer(
                  r,
                  t.vertices,
                  r.STREAM_DRAW,
                ),
                uvBuffer: c.default.GLBuffer.createVertexBuffer(
                  r,
                  t.uvs,
                  r.STREAM_DRAW,
                ),
                indexBuffer: c.default.GLBuffer.createIndexBuffer(
                  r,
                  t.indices,
                  r.STATIC_DRAW,
                ),
                vao: null,
                dirty: t.dirty,
                indexDirty: t.indexDirty,
              }), (i.vao = new c.default.VertexArrayObject(r)
                .addIndex(i.indexBuffer)
                .addAttribute(
                  i.vertexBuffer,
                  i.shader.attributes.aVertexPosition,
                  r.FLOAT,
                  !1,
                  8,
                  0,
                )
                .addAttribute(
                  i.uvBuffer,
                  i.shader.attributes.aTextureCoord,
                  r.FLOAT,
                  !1,
                  8,
                  0,
                )), (t._glDatas[e.CONTEXT_UID] = i)), e.bindVao(
              i.vao,
            ), t.dirty !== i.dirty &&
              ((i.dirty = t.dirty), i.uvBuffer.upload(t.uvs)), t.indexDirty !==
              i.indexDirty &&
              ((i.indexDirty = t.indexDirty), i.indexBuffer.upload(
                t.indices,
              )), i.vertexBuffer.upload(t.vertices), e.bindShader(
              i.shader,
            ), (i.shader.uniforms.uSampler = e.bindTexture(
              n,
            )), e.state.setBlendMode(
              t.blendMode,
            ), (i.shader.uniforms.translationMatrix = t.worldTransform.toArray(
              !0,
            )), (i.shader.uniforms.alpha =
              t.worldAlpha), (i.shader.uniforms.tint = t.tintRgb);
            var o = t.drawMode === f.default.DRAW_MODES.TRIANGLE_MESH
              ? r.TRIANGLE_STRIP
              : r.TRIANGLES;
            i.vao.draw(o, t.indices.length, 0);
          }
        }), e;
      })(l.ObjectRenderer));
    (e.default = p), l.WebGLRenderer.registerPlugin('mesh', p);
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i(t) {
      if (t && t.__esModule) { return t; }
      var e = {};
      if (t != null) {
        for (var r in t) { Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); }
      }
      return (e.default = t), e;
    }
    function o(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    e.__esModule = !0;
    var s = r(11),
      a = i(s),
      u = r(123),
      l = n(u),
      h = (function() {
        function t(e) {
          o(this, t), (this.renderer = e);
        }
        return (t.prototype.render = function(t) {
          var e = this.renderer,
            r = e.context,
            n = t.worldTransform,
            i = e.resolution;
          e.roundPixels
            ? r.setTransform(
                n.a * i,
                n.b * i,
                n.c * i,
                n.d * i,
                (n.tx * i) | 0,
                (n.ty * i) | 0,
              )
            : r.setTransform(
                n.a * i,
                n.b * i,
                n.c * i,
                n.d * i,
                n.tx * i,
                n.ty * i,
              ), e.setBlendMode(t.blendMode), t.drawMode ===
            l.default.DRAW_MODES.TRIANGLE_MESH
            ? this._renderTriangleMesh(t)
            : this._renderTriangles(t);
        }), (t.prototype._renderTriangleMesh = function(t) {
          for (var e = t.vertices.length / 2, r = 0; r < e - 2; r++) {
            var n = 2 * r;
            this._renderDrawTriangle(t, n, n + 2, n + 4);
          }
        }), (t.prototype._renderTriangles = function(t) {
          for (var e = t.indices, r = e.length, n = 0; n < r; n += 3) {
            var i = 2 * e[n], o = 2 * e[n + 1], s = 2 * e[n + 2];
            this._renderDrawTriangle(t, i, o, s);
          }
        }), (t.prototype._renderDrawTriangle = function(t, e, r, n) {
          var i = this.renderer.context,
            o = t.uvs,
            s = t.vertices,
            a = t._texture;
          if (a.valid) {
            var u = a.baseTexture,
              l = u.source,
              h = u.width,
              c = u.height,
              d = o[e] * u.width,
              f = o[r] * u.width,
              p = o[n] * u.width,
              v = o[e + 1] * u.height,
              y = o[r + 1] * u.height,
              g = o[n + 1] * u.height,
              m = s[e],
              b = s[r],
              x = s[n],
              _ = s[e + 1],
              w = s[r + 1],
              T = s[n + 1];
            if (t.canvasPadding > 0) {
              var E = t.canvasPadding / t.worldTransform.a,
                S = t.canvasPadding / t.worldTransform.d,
                P = (m + b + x) / 3,
                O = (_ + w + T) / 3,
                M = m - P,
                C = _ - O,
                A = Math.sqrt(M * M + C * C);
              (m = P + M / A * (A + E)), (_ = O + C / A * (A + S)), (M =
                b - P), (C = w - O), (A = Math.sqrt(M * M + C * C)), (b =
                P + M / A * (A + E)), (w = O + C / A * (A + S)), (M =
                x - P), (C = T - O), (A = Math.sqrt(M * M + C * C)), (x =
                P + M / A * (A + E)), (T = O + C / A * (A + S));
            }
            i.save(), i.beginPath(), i.moveTo(m, _), i.lineTo(b, w), i.lineTo(
              x,
              T,
            ), i.closePath(), i.clip();
            var R = d * y + v * p + f * g - y * p - v * f - d * g,
              D = m * y + v * x + b * g - y * x - v * b - m * g,
              I = d * b + m * p + f * x - b * p - m * f - d * x,
              L =
                d * y * x +
                v * b * p +
                m * f * g -
                m * y * p -
                v * f * x -
                d * b * g,
              k = _ * y + v * T + w * g - y * T - v * w - _ * g,
              B = d * w + _ * p + f * T - w * p - _ * f - d * T,
              N =
                d * y * T +
                v * w * p +
                _ * f * g -
                _ * y * p -
                v * f * T -
                d * w * g;
            i.transform(D / R, k / R, I / R, B / R, L / R, N / R), i.drawImage(
              l,
              0,
              0,
              h * u.resolution,
              c * u.resolution,
              0,
              0,
              h,
              c,
            ), i.restore();
          }
        }), (t.prototype.renderMeshFlat = function(t) {
          var e = this.renderer.context, r = t.vertices, n = r.length / 2;
          e.beginPath();
          for (var i = 1; i < n - 2; ++i) {
            var o = 2 * i,
              s = r[o],
              a = r[o + 1],
              u = r[o + 2],
              l = r[o + 3],
              h = r[o + 4],
              c = r[o + 5];
            e.moveTo(s, a), e.lineTo(u, l), e.lineTo(h, c);
          }
          (e.fillStyle = '#FF0000'), e.fill(), e.closePath();
        }), (t.prototype.destroy = function() {
          this.renderer = null;
        }), t;
      })();
    (e.default = h), a.CanvasRenderer.registerPlugin('mesh', h);
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    function o(t, e) {
      if (!t) {
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      }
      return !e || (typeof e !== 'object' && typeof e !== 'function') ? t : e;
    }
    function s(t, e) {
      if (typeof e !== 'function' && e !== null) {
        throw new TypeError(
          `Super expression must either be null or a function, not ${typeof e}`,
        );
      }
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {value: t, enumerable: !1, writable: !0, configurable: !0},
      })), e &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(t, e)
          : (t.__proto__ = e));
    }
    e.__esModule = !0;
    var a = r(123),
      u = n(a),
      l = (function(t) {
        function e(r, n, s) {
          i(this, e);
          var a = o(this, t.call(this, r));
          return (a._ready = !0), (a.verticesX = n || 10), (a.verticesY =
            s || 10), (a.drawMode =
            u.default.DRAW_MODES.TRIANGLES), a.refresh(), a;
        }
        return s(e, t), (e.prototype.refresh = function() {
          for (
            var t = this.verticesX * this.verticesY,
              e = [],
              r = [],
              n = [],
              i = [],
              o = this.texture,
              s = this.verticesX - 1,
              a = this.verticesY - 1,
              u = o.width / s,
              l = o.height / a,
              h = 0;
            h < t;
            h++
          ) {
            if (o._uvs) {
              var c = h % this.verticesX, d = (h / this.verticesX) | 0;
              e.push(c * u, d * l), n.push(
                o._uvs.x0 +
                  (o._uvs.x1 - o._uvs.x0) * (c / (this.verticesX - 1)),
                o._uvs.y0 +
                  (o._uvs.y3 - o._uvs.y0) * (d / (this.verticesY - 1)),
              );
            } else { n.push(0); }
          }
          for (var f = s * a, p = 0; p < f; p++) {
            var v = p % s,
              y = (p / s) | 0,
              g = y * this.verticesX + v,
              m = y * this.verticesX + v + 1,
              b = (y + 1) * this.verticesX + v,
              x = (y + 1) * this.verticesX + v + 1;
            i.push(g, m, b), i.push(m, x, b);
          }
          (this.vertices = new Float32Array(e)), (this.uvs = new Float32Array(
            n,
          )), (this.colors = new Float32Array(
            r,
          )), (this.indices = new Uint16Array(i)), (this.indexDirty = !0);
        }), (e.prototype._onTextureUpdate = function() {
          u.default.prototype._onTextureUpdate.call(this), this._ready &&
            this.refresh();
        }), e;
      })(u.default);
    e.default = l;
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    function o(t, e) {
      if (!t) {
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      }
      return !e || (typeof e !== 'object' && typeof e !== 'function') ? t : e;
    }
    function s(t, e) {
      if (typeof e !== 'function' && e !== null) {
        throw new TypeError(
          `Super expression must either be null or a function, not ${typeof e}`,
        );
      }
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {value: t, enumerable: !1, writable: !0, configurable: !0},
      })), e &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(t, e)
          : (t.__proto__ = e));
    }
    e.__esModule = !0;
    var a = (function() {
        function t(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1), (n.configurable = !0), 'value' in
            n && (n.writable = !0), Object.defineProperty(t, n.key, n);
          }
        }
        return function(e, r, n) {
          return r && t(e.prototype, r), n && t(e, n), e;
        };
      })(),
      u = r(126),
      l = n(u),
      h = 10,
      c = (function(t) {
        function e(r, n, s, a, u) {
          i(this, e);
          var l = o(this, t.call(this, r, 4, 4)), c = l.uvs;
          return (c[6] = c[14] = c[22] = c[30] = 1), (c[25] = c[27] = c[29] = c[31] = 1), (l._origWidth =
            r.width), (l._origHeight = r.height), (l._uvw =
            1 / l._origWidth), (l._uvh = 1 / l._origHeight), (l.width =
            r.width), (l.height = r.height), (c[2] = c[10] = c[18] = c[26] =
            l._uvw * n), (c[4] = c[12] = c[20] = c[28] =
            1 - l._uvw * a), (c[9] = c[11] = c[13] = c[15] =
            l._uvh * s), (c[17] = c[19] = c[21] = c[23] =
            1 - l._uvh * u), (l.leftWidth = typeof n !== 'undefined'
            ? n
            : h), (l.rightWidth = typeof a !== 'undefined'
            ? a
            : h), (l.topHeight = typeof s !== 'undefined'
            ? s
            : h), (l.bottomHeight = typeof u !== 'undefined' ? u : h), l;
        }
        return s(e, t), (e.prototype.updateHorizontalVertices = function() {
          var t = this.vertices;
          (t[9] = t[11] = t[13] = t[15] = this._topHeight), (t[17] = t[19] = t[21] = t[23] =
            this._height -
            this._bottomHeight), (t[25] = t[27] = t[29] = t[31] = this._height);
        }), (e.prototype.updateVerticalVertices = function() {
          var t = this.vertices;
          (t[2] = t[10] = t[18] = t[26] = this._leftWidth), (t[4] = t[12] = t[20] = t[28] =
            this._width -
            this._rightWidth), (t[6] = t[14] = t[22] = t[30] = this._width);
        }), (e.prototype._renderCanvas = function(t) {
          var e = t.context;
          e.globalAlpha = this.worldAlpha;
          var r = this.worldTransform, n = t.resolution;
          t.roundPixels
            ? e.setTransform(
                r.a * n,
                r.b * n,
                r.c * n,
                r.d * n,
                (r.tx * n) | 0,
                (r.ty * n) | 0,
              )
            : e.setTransform(
                r.a * n,
                r.b * n,
                r.c * n,
                r.d * n,
                r.tx * n,
                r.ty * n,
              );
          var i = this._texture.baseTexture,
            o = i.source,
            s = i.width,
            a = i.height;
          this.drawSegment(e, o, s, a, 0, 1, 10, 11), this.drawSegment(
            e,
            o,
            s,
            a,
            2,
            3,
            12,
            13,
          ), this.drawSegment(e, o, s, a, 4, 5, 14, 15), this.drawSegment(
            e,
            o,
            s,
            a,
            8,
            9,
            18,
            19,
          ), this.drawSegment(e, o, s, a, 10, 11, 20, 21), this.drawSegment(
            e,
            o,
            s,
            a,
            12,
            13,
            22,
            23,
          ), this.drawSegment(e, o, s, a, 16, 17, 26, 27), this.drawSegment(
            e,
            o,
            s,
            a,
            18,
            19,
            28,
            29,
          ), this.drawSegment(e, o, s, a, 20, 21, 30, 31);
        }), (e.prototype.drawSegment = function(t, e, r, n, i, o, s, a) {
          var u = this.uvs,
            l = this.vertices,
            h = (u[s] - u[i]) * r,
            c = (u[a] - u[o]) * n,
            d = l[s] - l[i],
            f = l[a] - l[o];
          h < 1 && (h = 1), c < 1 && (c = 1), d < 1 && (d = 1), f < 1 &&
            (f = 1), t.drawImage(e, u[i] * r, u[o] * n, h, c, l[i], l[o], d, f);
        }), a(e, [
          {
            key: 'width',
            get() {
              return this._width;
            },
            set(t) {
              (this._width = t), this.updateVerticalVertices();
            },
          },
          {
            key: 'height',
            get() {
              return this._height;
            },
            set(t) {
              (this._height = t), this.updateHorizontalVertices();
            },
          },
          {
            key: 'leftWidth',
            get() {
              return this._leftWidth;
            },
            set(t) {
              this._leftWidth = t;
              var e = this.uvs, r = this.vertices;
              (e[2] = e[10] = e[18] = e[26] =
                this._uvw *
                t), (r[2] = r[10] = r[18] = r[26] = t), (this.dirty = !0);
            },
          },
          {
            key: 'rightWidth',
            get() {
              return this._rightWidth;
            },
            set(t) {
              this._rightWidth = t;
              var e = this.uvs, r = this.vertices;
              (e[4] = e[12] = e[20] = e[28] =
                1 - this._uvw * t), (r[4] = r[12] = r[20] = r[28] =
                this._width - t), (this.dirty = !0);
            },
          },
          {
            key: 'topHeight',
            get() {
              return this._topHeight;
            },
            set(t) {
              this._topHeight = t;
              var e = this.uvs, r = this.vertices;
              (e[9] = e[11] = e[13] = e[15] =
                this._uvh *
                t), (r[9] = r[11] = r[13] = r[15] = t), (this.dirty = !0);
            },
          },
          {
            key: 'bottomHeight',
            get() {
              return this._bottomHeight;
            },
            set(t) {
              this._bottomHeight = t;
              var e = this.uvs, r = this.vertices;
              (e[17] = e[19] = e[21] = e[23] =
                1 - this._uvh * t), (r[17] = r[19] = r[21] = r[23] =
                this._height - t), (this.dirty = !0);
            },
          },
        ]), e;
      })(l.default);
    e.default = c;
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      if (t && t.__esModule) { return t; }
      var e = {};
      if (t != null) {
        for (var r in t) { Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); }
      }
      return (e.default = t), e;
    }
    function i(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function o(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    function s(t, e) {
      if (!t) {
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      }
      return !e || (typeof e !== 'object' && typeof e !== 'function') ? t : e;
    }
    function a(t, e) {
      if (typeof e !== 'function' && e !== null) {
        throw new TypeError(
          `Super expression must either be null or a function, not ${typeof e}`,
        );
      }
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {value: t, enumerable: !1, writable: !0, configurable: !0},
      })), e &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(t, e)
          : (t.__proto__ = e));
    }
    e.__esModule = !0;
    var u = r(123),
      l = i(u),
      h = r(11),
      c = n(h),
      d = (function(t) {
        function e(r, n) {
          o(this, e);
          var i = s(this, t.call(this, r));
          return (i.points = n), (i.vertices = new Float32Array(
            4 * n.length,
          )), (i.uvs = new Float32Array(
            4 * n.length,
          )), (i.colors = new Float32Array(
            2 * n.length,
          )), (i.indices = new Uint16Array(
            2 * n.length,
          )), (i._ready = !0), i.refresh(), i;
        }
        return a(e, t), (e.prototype.refresh = function() {
          var t = this.points;
          if (!(t.length < 1) && this._texture._uvs) {
            this.vertices.length / 4 !== t.length &&
              ((this.vertices = new Float32Array(
                4 * t.length,
              )), (this.uvs = new Float32Array(
                4 * t.length,
              )), (this.colors = new Float32Array(
                2 * t.length,
              )), (this.indices = new Uint16Array(2 * t.length)));
            var e = this.uvs,
              r = this.indices,
              n = this.colors,
              i = this._texture._uvs,
              o = new c.Point(i.x0, i.y0),
              s = new c.Point(i.x2 - i.x0, Number(i.y2 - i.y0));
            (e[0] = 0 + o.x), (e[1] = 0 + o.y), (e[2] = 0 + o.x), (e[3] =
              s.y + o.y), (n[0] = 1), (n[1] = 1), (r[0] = 0), (r[1] = 1);
            for (var a = t.length, u = 1; u < a; u++) {
              var l = 4 * u, h = u / (a - 1);
              (e[l] = h * s.x + o.x), (e[l + 1] = 0 + o.y), (e[l + 2] =
                h * s.x + o.x), (e[l + 3] = s.y + o.y), (l = 2 * u), (n[
                l
              ] = 1), (n[l + 1] = 1), (l = 2 * u), (r[l] = l), (r[l + 1] =
                l + 1);
            }
            this.dirty++, this.indexDirty++;
          }
        }), (e.prototype._onTextureUpdate = function() {
          t.prototype._onTextureUpdate.call(this), this._ready &&
            this.refresh();
        }), (e.prototype.updateTransform = function() {
          var t = this.points;
          if (!(t.length < 1)) {
            for (
              var e = t[0],
                r = void 0,
                n = 0,
                i = 0,
                o = this.vertices,
                s = t.length,
                a = 0;
              a < s;
              a++
            ) {
              var u = t[a], l = 4 * a;
              (r = a < t.length - 1 ? t[a + 1] : u), (i = -(r.x - e.x)), (n =
                r.y - e.y);
              var h = 10 * (1 - a / (s - 1));
              h > 1 && (h = 1);
              var c = Math.sqrt(n * n + i * i), d = this._texture.height / 2;
              (n /= c), (i /= c), (n *= d), (i *= d), (o[l] = u.x + n), (o[
                l + 1
              ] =
                u.y + i), (o[l + 2] = u.x - n), (o[l + 3] = u.y - i), (e = u);
            }
            this.containerUpdateTransform();
          }
        }), e;
      })(l.default);
    e.default = d;
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    e.__esModule = !0;
    var i = r(130);
    Object.defineProperty(e, 'ParticleContainer', {
      enumerable: !0,
      get() {
        return n(i).default;
      },
    });
    var o = r(131);
    Object.defineProperty(e, 'ParticleRenderer', {
      enumerable: !0,
      get() {
        return n(o).default;
      },
    });
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      if (t && t.__esModule) { return t; }
      var e = {};
      if (t != null) {
        for (var r in t) { Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); }
      }
      return (e.default = t), e;
    }
    function i(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    function o(t, e) {
      if (!t) {
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      }
      return !e || (typeof e !== 'object' && typeof e !== 'function') ? t : e;
    }
    function s(t, e) {
      if (typeof e !== 'function' && e !== null) {
        throw new TypeError(
          `Super expression must either be null or a function, not ${typeof e}`,
        );
      }
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {value: t, enumerable: !1, writable: !0, configurable: !0},
      })), e &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(t, e)
          : (t.__proto__ = e));
    }
    e.__esModule = !0;
    var a = r(11),
      u = n(a),
      l = (function(t) {
        function e() {
          var r = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : 1500,
            n = arguments[1],
            s = arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 16384;
          i(this, e);
          var a = o(this, t.call(this)), l = 16384;
          return s > l && (s = l), s > r && (s = r), (a._properties = [
            !1,
            !0,
            !1,
            !1,
            !1,
          ]), (a._maxSize = r), (a._batchSize = s), (a._glBuffers = {}), (a._bufferToUpdate = 0), (a.interactiveChildren = !1), (a.blendMode =
            u.BLEND_MODES.NORMAL), (a.roundPixels = !0), (a.baseTexture = null), a.setProperties(
            n,
          ), a;
        }
        return s(e, t), (e.prototype.setProperties = function(t) {
          t &&
            ((this._properties[0] = 'scale' in t
              ? Boolean(t.scale)
              : this._properties[0]), (this._properties[1] = 'position' in t
              ? Boolean(t.position)
              : this._properties[1]), (this._properties[2] = 'rotation' in t
              ? Boolean(t.rotation)
              : this._properties[2]), (this._properties[3] = 'uvs' in t
              ? Boolean(t.uvs)
              : this._properties[3]), (this._properties[4] = 'alpha' in t
              ? Boolean(t.alpha)
              : this._properties[4]));
        }), (e.prototype.updateTransform = function() {
          this.displayObjectUpdateTransform();
        }), (e.prototype.renderWebGL = function(t) {
          var e = this;
          this.visible &&
            !(this.worldAlpha <= 0) &&
            this.children.length &&
            this.renderable &&
            (this.baseTexture ||
              ((this.baseTexture = this.children[0]._texture.baseTexture), this
                .baseTexture.hasLoaded ||
                this.baseTexture.once('update', () => {
                  return e.onChildrenChange(0);
                })), t.setObjectRenderer(
              t.plugins.particle,
            ), t.plugins.particle.render(this));
        }), (e.prototype.onChildrenChange = function(t) {
          var e = Math.floor(t / this._batchSize);
          e < this._bufferToUpdate && (this._bufferToUpdate = e);
        }), (e.prototype.renderCanvas = function(t) {
          if (
            this.visible &&
            !(this.worldAlpha <= 0) &&
            this.children.length &&
            this.renderable
          ) {
            var e = t.context,
              r = this.worldTransform,
              n = !0,
              i = 0,
              o = 0,
              s = 0,
              a = 0,
              u = t.blendModes[this.blendMode];
            u !== e.globalCompositeOperation &&
              (e.globalCompositeOperation = u), (e.globalAlpha = this.worldAlpha), this.displayObjectUpdateTransform();
            for (var l = 0; l < this.children.length; ++l) {
              var h = this.children[l];
              if (h.visible) {
                var c = h._texture.frame;
                if (
                  ((e.globalAlpha = this.worldAlpha * h.alpha), h.rotation %
                    (2 * Math.PI) ===
                    0)
                ) {
                  n &&
                    (e.setTransform(
                      r.a,
                      r.b,
                      r.c,
                      r.d,
                      r.tx * t.resolution,
                      r.ty * t.resolution,
                    ), (n = !1)), (i =
                    h.anchor.x * (-c.width * h.scale.x) +
                    h.position.x +
                    0.5), (o =
                    h.anchor.y * (-c.height * h.scale.y) +
                    h.position.y +
                    0.5), (s = c.width * h.scale.x), (a = c.height * h.scale.y);
                } else {
                  n || (n = !0), h.displayObjectUpdateTransform();
                  var d = h.worldTransform;
                  t.roundPixels
                    ? e.setTransform(
                        d.a,
                        d.b,
                        d.c,
                        d.d,
                        (d.tx * t.resolution) | 0,
                        (d.ty * t.resolution) | 0,
                      )
                    : e.setTransform(
                        d.a,
                        d.b,
                        d.c,
                        d.d,
                        d.tx * t.resolution,
                        d.ty * t.resolution,
                      ), (i = h.anchor.x * -c.width + 0.5), (o =
                    h.anchor.y * -c.height + 0.5), (s = c.width), (a =
                    c.height);
                }
                var f = h._texture.baseTexture.resolution;
                e.drawImage(
                  h._texture.baseTexture.source,
                  c.x * f,
                  c.y * f,
                  c.width * f,
                  c.height * f,
                  i * f,
                  o * f,
                  s * f,
                  a * f,
                );
              }
            }
          }
        }), (e.prototype.destroy = function(e) {
          if ((t.prototype.destroy.call(this, e), this._buffers)) {
            for (var r = 0; r < this._buffers.length; ++r) { this._buffers[r].destroy(); }
          }
          (this._properties = null), (this._buffers = null);
        }), e;
      })(u.Container);
    e.default = l;
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i(t) {
      if (t && t.__esModule) { return t; }
      var e = {};
      if (t != null) {
        for (var r in t) { Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); }
      }
      return (e.default = t), e;
    }
    function o(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    function s(t, e) {
      if (!t) {
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      }
      return !e || (typeof e !== 'object' && typeof e !== 'function') ? t : e;
    }
    function a(t, e) {
      if (typeof e !== 'function' && e !== null) {
        throw new TypeError(
          `Super expression must either be null or a function, not ${typeof e}`,
        );
      }
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {value: t, enumerable: !1, writable: !0, configurable: !0},
      })), e &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(t, e)
          : (t.__proto__ = e));
    }
    e.__esModule = !0;
    var u = r(11),
      l = i(u),
      h = r(132),
      c = n(h),
      d = r(133),
      f = n(d),
      p = (function(t) {
        function e(r) {
          o(this, e);
          var n = s(this, t.call(this, r));
          return (n.shader = null), (n.indexBuffer = null), (n.properties = null), (n.tempMatrix = new l.Matrix()), (n.CONTEXT_UID = 0), n;
        }
        return a(e, t), (e.prototype.onContextChange = function() {
          var t = this.renderer.gl;
          (this.CONTEXT_UID = this.renderer.CONTEXT_UID), (this.shader = new c.default(
            t,
          )), (this.properties = [
            {
              attribute: this.shader.attributes.aVertexPosition,
              size: 2,
              uploadFunction: this.uploadVertices,
              offset: 0,
            },
            {
              attribute: this.shader.attributes.aPositionCoord,
              size: 2,
              uploadFunction: this.uploadPosition,
              offset: 0,
            },
            {
              attribute: this.shader.attributes.aRotation,
              size: 1,
              uploadFunction: this.uploadRotation,
              offset: 0,
            },
            {
              attribute: this.shader.attributes.aTextureCoord,
              size: 2,
              uploadFunction: this.uploadUvs,
              offset: 0,
            },
            {
              attribute: this.shader.attributes.aColor,
              size: 1,
              uploadFunction: this.uploadAlpha,
              offset: 0,
            },
          ]);
        }), (e.prototype.start = function() {
          this.renderer.bindShader(this.shader);
        }), (e.prototype.render = function(t) {
          var e = t.children,
            r = t._maxSize,
            n = t._batchSize,
            i = this.renderer,
            o = e.length;
          if (o !== 0) {
            o > r && (o = r);
            var s = t._glBuffers[i.CONTEXT_UID];
            s ||
              (s = t._glBuffers[i.CONTEXT_UID] = this.generateBuffers(
                t,
              )), this.renderer.setBlendMode(t.blendMode);
            var a = i.gl, u = t.worldTransform.copy(this.tempMatrix);
            u.prepend(
              i._activeRenderTarget.projectionMatrix,
            ), (this.shader.uniforms.projectionMatrix = u.toArray(
              !0,
            )), (this.shader.uniforms.uAlpha = t.worldAlpha);
            var l = e[0]._texture.baseTexture;
            this.shader.uniforms.uSampler = i.bindTexture(l);
            for (var h = 0, c = 0; h < o; (h += n), (c += 1)) {
              var d = o - h;
              d > n && (d = n);
              var f = s[c];
              f.uploadDynamic(e, h, d), t._bufferToUpdate === c &&
                (f.uploadStatic(e, h, d), (t._bufferToUpdate =
                  c + 1)), i.bindVao(f.vao), f.vao.draw(a.TRIANGLES, 6 * d);
            }
          }
        }), (e.prototype.generateBuffers = function(t) {
          for (
            var e = this.renderer.gl,
              r = [],
              n = t._maxSize,
              i = t._batchSize,
              o = t._properties,
              s = 0;
            s < n;
            s += i
          ) { r.push(new f.default(e, this.properties, o, i)); }
          return r;
        }), (e.prototype.uploadVertices = function(t, e, r, n, i, o) {
          for (var s = 0, a = 0, u = 0, l = 0, h = 0; h < r; ++h) {
            var c = t[e + h],
              d = c._texture,
              f = c.scale.x,
              p = c.scale.y,
              v = d.trim,
              y = d.orig;
            v
              ? ((a = v.x - c.anchor.x * y.width), (s = a + v.width), (l =
                  v.y - c.anchor.y * y.height), (u = l + v.height))
              : ((s = y.width * (1 - c.anchor.x)), (a =
                  y.width * -c.anchor.x), (u =
                  y.height * (1 - c.anchor.y)), (l =
                  y.height * -c.anchor.y)), (n[o] = a * f), (n[o + 1] =
              l * p), (n[o + i] = s * f), (n[o + i + 1] = l * p), (n[
              o + 2 * i
            ] =
              s * f), (n[o + 2 * i + 1] = u * p), (n[o + 3 * i] = a * f), (n[
              o + 3 * i + 1
            ] =
              u * p), (o += 4 * i);
          }
        }), (e.prototype.uploadPosition = function(t, e, r, n, i, o) {
          for (var s = 0; s < r; s++) {
            var a = t[e + s].position;
            (n[o] = a.x), (n[o + 1] = a.y), (n[o + i] = a.x), (n[o + i + 1] =
              a.y), (n[o + 2 * i] = a.x), (n[o + 2 * i + 1] = a.y), (n[
              o + 3 * i
            ] =
              a.x), (n[o + 3 * i + 1] = a.y), (o += 4 * i);
          }
        }), (e.prototype.uploadRotation = function(t, e, r, n, i, o) {
          for (var s = 0; s < r; s++) {
            var a = t[e + s].rotation;
            (n[o] = a), (n[o + i] = a), (n[o + 2 * i] = a), (n[
              o + 3 * i
            ] = a), (o += 4 * i);
          }
        }), (e.prototype.uploadUvs = function(t, e, r, n, i, o) {
          for (var s = 0; s < r; ++s) {
            var a = t[e + s]._texture._uvs;
            a
              ? ((n[o] = a.x0), (n[o + 1] = a.y0), (n[o + i] = a.x1), (n[
                  o + i + 1
                ] =
                  a.y1), (n[o + 2 * i] = a.x2), (n[o + 2 * i + 1] = a.y2), (n[
                  o + 3 * i
                ] =
                  a.x3), (n[o + 3 * i + 1] = a.y3), (o += 4 * i))
              : ((n[o] = 0), (n[o + 1] = 0), (n[o + i] = 0), (n[
                  o + i + 1
                ] = 0), (n[o + 2 * i] = 0), (n[o + 2 * i + 1] = 0), (n[
                  o + 3 * i
                ] = 0), (n[o + 3 * i + 1] = 0), (o += 4 * i));
          }
        }), (e.prototype.uploadAlpha = function(t, e, r, n, i, o) {
          for (var s = 0; s < r; s++) {
            var a = t[e + s].alpha;
            (n[o] = a), (n[o + i] = a), (n[o + 2 * i] = a), (n[
              o + 3 * i
            ] = a), (o += 4 * i);
          }
        }), (e.prototype.destroy = function() {
          this.renderer.gl &&
            this.renderer.gl.deleteBuffer(
              this.indexBuffer,
            ), t.prototype.destroy.call(
            this,
          ), this.shader.destroy(), (this.indices = null), (this.tempMatrix = null);
        }), e;
      })(l.ObjectRenderer);
    (e.default = p), l.WebGLRenderer.registerPlugin('particle', p);
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    function o(t, e) {
      if (!t) {
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      }
      return !e || (typeof e !== 'object' && typeof e !== 'function') ? t : e;
    }
    function s(t, e) {
      if (typeof e !== 'function' && e !== null) {
        throw new TypeError(
          `Super expression must either be null or a function, not ${typeof e}`,
        );
      }
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {value: t, enumerable: !1, writable: !0, configurable: !0},
      })), e &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(t, e)
          : (t.__proto__ = e));
    }
    e.__esModule = !0;
    var a = r(94),
      u = n(a),
      l = (function(t) {
        function e(r) {
          return i(this, e), o(
            this,
            t.call(
              this,
              r,
              [
                'attribute vec2 aVertexPosition;',
                'attribute vec2 aTextureCoord;',
                'attribute float aColor;',
                'attribute vec2 aPositionCoord;',
                'attribute vec2 aScale;',
                'attribute float aRotation;',
                'uniform mat3 projectionMatrix;',
                'varying vec2 vTextureCoord;',
                'varying float vColor;',
                'void main(void){',
                '   vec2 v = aVertexPosition;',
                '   v.x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);',
                '   v.y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);',
                '   v = v + aPositionCoord;',
                '   gl_Position = vec4((projectionMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);',
                '   vTextureCoord = aTextureCoord;',
                '   vColor = aColor;',
                '}',
              ].join('\n'),
              [
                'varying vec2 vTextureCoord;',
                'varying float vColor;',
                'uniform sampler2D uSampler;',
                'uniform float uAlpha;',
                'void main(void){',
                '  vec4 color = texture2D(uSampler, vTextureCoord) * vColor * uAlpha;',
                '  if (color.a == 0.0) discard;',
                '  gl_FragColor = color;',
                '}',
              ].join('\n'),
            ),
          );
        }
        return s(e, t), e;
      })(u.default);
    e.default = l;
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    e.__esModule = !0;
    var o = r(23),
      s = n(o),
      a = r(93),
      u = n(a),
      l = (function() {
        function t(e, r, n, o) {
          i(this, t), (this.gl = e), (this.vertSize = 2), (this.vertByteSize =
            4 *
            this
              .vertSize), (this.size = o), (this.dynamicProperties = []), (this.staticProperties = []);
          for (var s = 0; s < r.length; ++s) {
            var a = r[s];
            (a = {
              attribute: a.attribute,
              size: a.size,
              uploadFunction: a.uploadFunction,
              offset: a.offset,
            }), n[s]
              ? this.dynamicProperties.push(a)
              : this.staticProperties.push(a);
          }
          (this.staticStride = 0), (this.staticBuffer = null), (this.staticData = null), (this.dynamicStride = 0), (this.dynamicBuffer = null), (this.dynamicData = null), this.initBuffers();
        }
        return (t.prototype.initBuffers = function() {
          var t = this.gl, e = 0;
          (this.indices = (0, u.default)(
            this.size,
          )), (this.indexBuffer = s.default.GLBuffer.createIndexBuffer(
            t,
            this.indices,
            t.STATIC_DRAW,
          )), (this.dynamicStride = 0);
          for (var r = 0; r < this.dynamicProperties.length; ++r) {
            var n = this.dynamicProperties[r];
            (n.offset = e), (e += n.size), (this.dynamicStride += n.size);
          }
          (this.dynamicData = new Float32Array(
            this.size * this.dynamicStride * 4,
          )), (this.dynamicBuffer = s.default.GLBuffer.createVertexBuffer(
            t,
            this.dynamicData,
            t.STREAM_DRAW,
          ));
          var i = 0;
          this.staticStride = 0;
          for (var o = 0; o < this.staticProperties.length; ++o) {
            var a = this.staticProperties[o];
            (a.offset = i), (i += a.size), (this.staticStride += a.size);
          }
          (this.staticData = new Float32Array(
            this.size * this.staticStride * 4,
          )), (this.staticBuffer = s.default.GLBuffer.createVertexBuffer(
            t,
            this.staticData,
            t.STATIC_DRAW,
          )), (this.vao = new s.default.VertexArrayObject(t).addIndex(
            this.indexBuffer,
          ));
          for (var l = 0; l < this.dynamicProperties.length; ++l) {
            var h = this.dynamicProperties[l];
            this.vao.addAttribute(
              this.dynamicBuffer,
              h.attribute,
              t.FLOAT,
              !1,
              4 * this.dynamicStride,
              4 * h.offset,
            );
          }
          for (var c = 0; c < this.staticProperties.length; ++c) {
            var d = this.staticProperties[c];
            this.vao.addAttribute(
              this.staticBuffer,
              d.attribute,
              t.FLOAT,
              !1,
              4 * this.staticStride,
              4 * d.offset,
            );
          }
        }), (t.prototype.uploadDynamic = function(t, e, r) {
          for (var n = 0; n < this.dynamicProperties.length; n++) {
            var i = this.dynamicProperties[n];
            i.uploadFunction(
              t,
              e,
              r,
              this.dynamicData,
              this.dynamicStride,
              i.offset,
            );
          }
          this.dynamicBuffer.upload();
        }), (t.prototype.uploadStatic = function(t, e, r) {
          for (var n = 0; n < this.staticProperties.length; n++) {
            var i = this.staticProperties[n];
            i.uploadFunction(
              t,
              e,
              r,
              this.staticData,
              this.staticStride,
              i.offset,
            );
          }
          this.staticBuffer.upload();
        }), (t.prototype.destroy = function() {
          (this.dynamicProperties = null), (this.dynamicData = null), this.dynamicBuffer.destroy(), (this.staticProperties = null), (this.staticData = null), this.staticBuffer.destroy();
        }), t;
      })();
    e.default = l;
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    (e.__esModule = !0), (e.BitmapText = e.TilingSpriteRenderer = e.TilingSprite = e.AnimatedSprite = e.TextureTransform = void 0);
    var i = r(135);
    Object.defineProperty(e, 'TextureTransform', {
      enumerable: !0,
      get() {
        return n(i).default;
      },
    });
    var o = r(136);
    Object.defineProperty(e, 'AnimatedSprite', {
      enumerable: !0,
      get() {
        return n(o).default;
      },
    });
    var s = r(137);
    Object.defineProperty(e, 'TilingSprite', {
      enumerable: !0,
      get() {
        return n(s).default;
      },
    });
    var a = r(138);
    Object.defineProperty(e, 'TilingSpriteRenderer', {
      enumerable: !0,
      get() {
        return n(a).default;
      },
    });
    var u = r(139);
    Object.defineProperty(e, 'BitmapText', {
      enumerable: !0,
      get() {
        return n(u).default;
      },
    }), r(140), r(141), r(142);
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    e.__esModule = !0;
    var o = (function() {
        function t(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1), (n.configurable = !0), 'value' in
            n && (n.writable = !0), Object.defineProperty(t, n.key, n);
          }
        }
        return function(e, r, n) {
          return r && t(e.prototype, r), n && t(e, n), e;
        };
      })(),
      s = r(16),
      a = n(s),
      u = new a.default(),
      l = (function() {
        function t(e, r) {
          i(
            this,
            t,
          ), (this._texture = e), (this.mapCoord = new a.default()), (this.uClampFrame = new Float32Array(
            4,
          )), (this.uClampOffset = new Float32Array(
            2,
          )), (this._lastTextureID = -1), (this.clampOffset = 0), (this.clampMargin = typeof r ===
            'undefined'
            ? 0.5
            : r);
        }
        return (t.prototype.update = function(t) {
          var e = this._texture;
          if (e && e.valid && (t || this._lastTextureID !== e._updateID)) {
            this._lastTextureID = e._updateID;
            var r = e._uvs;
            this.mapCoord.set(
              r.x1 - r.x0,
              r.y1 - r.y0,
              r.x3 - r.x0,
              r.y3 - r.y0,
              r.x0,
              r.y0,
            );
            var n = e.orig, i = e.trim;
            i &&
              (u.set(
                n.width / i.width,
                0,
                0,
                n.height / i.height,
                -i.x / i.width,
                -i.y / i.height,
              ), this.mapCoord.append(u));
            var o = e.baseTexture,
              s = this.uClampFrame,
              a = this.clampMargin / o.resolution,
              l = this.clampOffset;
            (s[0] = (e._frame.x + a + l) / o.width), (s[1] =
              (e._frame.y + a + l) / o.height), (s[2] =
              (e._frame.x + e._frame.width - a + l) / o.width), (s[3] =
              (e._frame.y + e._frame.height - a + l) /
              o.height), (this.uClampOffset[0] =
              l / o.realWidth), (this.uClampOffset[1] = l / o.realHeight);
          }
        }), o(t, [
          {
            key: 'texture',
            get() {
              return this._texture;
            },
            set(t) {
              (this._texture = t), (this._lastTextureID = -1);
            },
          },
        ]), t;
      })();
    e.default = l;
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      if (t && t.__esModule) { return t; }
      var e = {};
      if (t != null) { for (var r in t) { Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); } }
      return (e.default = t), e;
    }
    function i(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    function o(t, e) {
      if (!t) {
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      }
      return !e || (typeof e !== 'object' && typeof e !== 'function') ? t : e;
    }
    function s(t, e) {
      if (typeof e !== 'function' && e !== null) {
        throw new TypeError(
          `Super expression must either be null or a function, not ${typeof e}`,
        );
      }
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {value: t, enumerable: !1, writable: !0, configurable: !0},
      })), e &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(t, e)
          : (t.__proto__ = e));
    }
    e.__esModule = !0;
    var a = (function() {
        function t(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1), (n.configurable = !0), 'value' in
            n && (n.writable = !0), Object.defineProperty(t, n.key, n);
          }
        }
        return function(e, r, n) {
          return r && t(e.prototype, r), n && t(e, n), e;
        };
      })(),
      u = r(11),
      l = n(u),
      h = (function(t) {
        function e(r, n) {
          i(this, e);
          var s = o(
            this,
            t.call(this, r[0] instanceof l.Texture ? r[0] : r[0].texture),
          );
          return (s._textures = null), (s._durations = null), (s.textures = r), (s._autoUpdate =
            n !==
            !1), (s.animationSpeed = 1), (s.loop = !0), (s.onComplete = null), (s.onFrameChange = null), (s._currentTime = 0), (s.playing = !1), s;
        }
        return s(e, t), (e.prototype.stop = function() {
          this.playing &&
            ((this.playing = !1), this._autoUpdate &&
              l.ticker.shared.remove(this.update, this));
        }), (e.prototype.play = function() {
          this.playing ||
            ((this.playing = !0), this._autoUpdate &&
              l.ticker.shared.add(this.update, this));
        }), (e.prototype.gotoAndStop = function(t) {
          this.stop();
          var e = this.currentFrame;
          (this._currentTime = t), e !== this.currentFrame &&
            this.updateTexture();
        }), (e.prototype.gotoAndPlay = function(t) {
          var e = this.currentFrame;
          (this._currentTime = t), e !== this.currentFrame &&
            this.updateTexture(), this.play();
        }), (e.prototype.update = function(t) {
          var e = this.animationSpeed * t, r = this.currentFrame;
          if (this._durations !== null) {
            var n = this._currentTime % 1 * this._durations[this.currentFrame];
            for (n += e / 60 * 1e3; n < 0;) { this._currentTime--, (n += this._durations[this.currentFrame]); }
            var i = Math.sign(this.animationSpeed * t);
            for (
              this._currentTime = Math.floor(this._currentTime);
              n >= this._durations[this.currentFrame];

            ) {
              (n -=
                this._durations[this.currentFrame] *
                i), (this._currentTime += i);
            }
            this._currentTime += n / this._durations[this.currentFrame];
          } else { this._currentTime += e; }
          this._currentTime < 0 && !this.loop
            ? (this.gotoAndStop(0), this.onComplete && this.onComplete())
            : this._currentTime >= this._textures.length && !this.loop
                ? (this.gotoAndStop(this._textures.length - 1), this
                    .onComplete && this.onComplete())
                : r !== this.currentFrame && this.updateTexture();
        }), (e.prototype.updateTexture = function() {
          (this._texture = this._textures[
            this.currentFrame
          ]), (this._textureID = -1), this.onFrameChange &&
            this.onFrameChange(this.currentFrame);
        }), (e.prototype.destroy = function() {
          this.stop(), t.prototype.destroy.call(this);
        }), (e.fromFrames = function(t) {
          for (var r = [], n = 0; n < t.length; ++n) { r.push(l.Texture.fromFrame(t[n])); }
          return new e(r);
        }), (e.fromImages = function(t) {
          for (var r = [], n = 0; n < t.length; ++n) { r.push(l.Texture.fromImage(t[n])); }
          return new e(r);
        }), a(e, [
          {
            key: 'totalFrames',
            get() {
              return this._textures.length;
            },
          },
          {
            key: 'textures',
            get() {
              return this._textures;
            },
            set(t) {
              if (t[0] instanceof l.Texture) { (this._textures = t), (this._durations = null); } else {
                (this._textures = []), (this._durations = []);
                for (var e = 0; e < t.length; e++) {
                  this._textures.push(t[e].texture), this._durations.push(
                    t[e].time,
                  );
                }
              }
            },
          },
          {
            key: 'currentFrame',
            get() {
              var t = Math.floor(this._currentTime) % this._textures.length;
              return t < 0 && (t += this._textures.length), t;
            },
          },
        ]), e;
      })(l.Sprite);
    e.default = h;
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i(t) {
      if (t && t.__esModule) { return t; }
      var e = {};
      if (t != null) {
        for (var r in t) { Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); }
      }
      return (e.default = t), e;
    }
    function o(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    function s(t, e) {
      if (!t) {
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      }
      return !e || (typeof e !== 'object' && typeof e !== 'function') ? t : e;
    }
    function a(t, e) {
      if (typeof e !== 'function' && e !== null) {
        throw new TypeError(
          `Super expression must either be null or a function, not ${typeof e}`,
        );
      }
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {value: t, enumerable: !1, writable: !0, configurable: !0},
      })), e &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(t, e)
          : (t.__proto__ = e));
    }
    e.__esModule = !0;
    var u = (function() {
        function t(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1), (n.configurable = !0), 'value' in
            n && (n.writable = !0), Object.defineProperty(t, n.key, n);
          }
        }
        return function(e, r, n) {
          return r && t(e.prototype, r), n && t(e, n), e;
        };
      })(),
      l = r(11),
      h = i(l),
      c = r(78),
      d = n(c),
      f = r(135),
      p = n(f),
      v = new h.Point(),
      y = (function(t) {
        function e(r) {
          var n = arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : 100,
            i = arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 100;
          o(this, e);
          var a = s(this, t.call(this, r));
          return (a.tileTransform = new h.TransformStatic()), (a._width = n), (a._height = i), (a._canvasPattern = null), (a.uvTransform =
            r.transform || new p.default(r)), (a.pluginName =
            'tilingSprite'), (a.uvRespectAnchor = !1), a;
        }
        return a(e, t), (e.prototype._onTextureUpdate = function() {
          this.uvTransform && (this.uvTransform.texture = this._texture);
        }), (e.prototype._renderWebGL = function(t) {
          var e = this._texture;
          e &&
            e.valid &&
            (this.tileTransform.updateLocalTransform(), this.uvTransform.update(), t.setObjectRenderer(
              t.plugins[this.pluginName],
            ), t.plugins[this.pluginName].render(this));
        }), (e.prototype._renderCanvas = function(t) {
          var e = this._texture;
          if (e.baseTexture.hasLoaded) {
            var r = t.context,
              n = this.worldTransform,
              i = t.resolution,
              o = e.baseTexture,
              s = e.baseTexture.resolution,
              a = this.tilePosition.x / this.tileScale.x % e._frame.width,
              u = this.tilePosition.y / this.tileScale.y % e._frame.height;
            if (!this._canvasPattern) {
              var l = new h.CanvasRenderTarget(
                e._frame.width,
                e._frame.height,
                s,
              );
              this.tint !== 16777215
                ? (this.cachedTint !== this.tint &&
                    ((this.cachedTint = this.tint), (this.tintedTexture = d.default.getTintedTexture(
                      this,
                      this.tint,
                    ))), l.context.drawImage(this.tintedTexture, 0, 0))
                : l.context.drawImage(
                    o.source,
                    -e._frame.x,
                    -e._frame.y,
                  ), (this._canvasPattern = l.context.createPattern(
                l.canvas,
                'repeat',
              ));
            }
            (r.globalAlpha = this.worldAlpha), r.setTransform(
              n.a * i,
              n.b * i,
              n.c * i,
              n.d * i,
              n.tx * i,
              n.ty * i,
            ), r.scale(this.tileScale.x / s, this.tileScale.y / s), r.translate(
              a + this.anchor.x * -this._width,
              u + this.anchor.y * -this._height,
            ), t.setBlendMode(
              this.blendMode,
            ), (r.fillStyle = this._canvasPattern), r.fillRect(
              -a,
              -u,
              this._width / this.tileScale.x * s,
              this._height / this.tileScale.y * s,
            );
          }
        }), (e.prototype._calculateBounds = function() {
          var t = this._width * -this._anchor._x,
            e = this._height * -this._anchor._y,
            r = this._width * (1 - this._anchor._x),
            n = this._height * (1 - this._anchor._y);
          this._bounds.addFrame(this.transform, t, e, r, n);
        }), (e.prototype.getLocalBounds = function(e) {
          return this.children.length === 0
            ? ((this._bounds.minX =
                this._width * -this._anchor._x), (this._bounds.minY =
                this._height * -this._anchor._y), (this._bounds.maxX =
                this._width * (1 - this._anchor._x)), (this._bounds.maxY =
                this._height * (1 - this._anchor._x)), e ||
                (this._localBoundsRect ||
                  (this._localBoundsRect = new h.Rectangle()), (e = this
                  ._localBoundsRect)), this._bounds.getRectangle(e))
            : t.prototype.getLocalBounds.call(this, e);
        }), (e.prototype.containsPoint = function(t) {
          this.worldTransform.applyInverse(t, v);
          var e = this._width, r = this._height, n = -e * this.anchor._x;
          if (v.x > n && v.x < n + e) {
            var i = -r * this.anchor._y;
            if (v.y > i && v.y < i + r) { return !0; }
          }
          return !1;
        }), (e.prototype.destroy = function() {
          t.prototype.destroy.call(
            this,
          ), (this.tileTransform = null), (this.uvTransform = null);
        }), (e.from = function(t, r, n) {
          return new e(h.Texture.from(t), r, n);
        }), (e.fromFrame = function(t, r, n) {
          var i = h.utils.TextureCache[t];
          if (!i) {
            throw new Error(
              `The frameId "${
                t
                }" does not exist in the texture cache ${
                this}`,
            );
          }
          return new e(i, r, n);
        }), (e.fromImage = function(t, r, n, i, o) {
          return new e(h.Texture.fromImage(t, i, o), r, n);
        }), u(e, [
          {
            key: 'clampMargin',
            get() {
              return this.uvTransform.clampMargin;
            },
            set(t) {
              (this.uvTransform.clampMargin = t), this.uvTransform.update(!0);
            },
          },
          {
            key: 'tileScale',
            get() {
              return this.tileTransform.scale;
            },
            set(t) {
              this.tileTransform.scale.copy(t);
            },
          },
          {
            key: 'tilePosition',
            get() {
              return this.tileTransform.position;
            },
            set(t) {
              this.tileTransform.position.copy(t);
            },
          },
          {
            key: 'width',
            get() {
              return this._width;
            },
            set(t) {
              this._width = t;
            },
          },
          {
            key: 'height',
            get() {
              return this._height;
            },
            set(t) {
              this._height = t;
            },
          },
        ]), e;
      })(h.Sprite);
    e.default = y;
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      if (t && t.__esModule) { return t; }
      var e = {};
      if (t != null) {
        for (var r in t) { Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); }
      }
      return (e.default = t), e;
    }
    function i(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    function o(t, e) {
      if (!t) {
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      }
      return !e || (typeof e !== 'object' && typeof e !== 'function') ? t : e;
    }
    function s(t, e) {
      if (typeof e !== 'function' && e !== null) {
        throw new TypeError(
          `Super expression must either be null or a function, not ${typeof e}`,
        );
      }
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {value: t, enumerable: !1, writable: !0, configurable: !0},
      })), e &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(t, e)
          : (t.__proto__ = e));
    }
    e.__esModule = !0;
    var a = r(11),
      u = n(a),
      l = r(12),
      h = (r(87), new u.Matrix()),
      c = new Float32Array(4),
      d = (function(t) {
        function e(r) {
          i(this, e);
          var n = o(this, t.call(this, r));
          return (n.shader = null), (n.simpleShader = null), (n.quad = null), n;
        }
        return s(e, t), (e.prototype.onContextChange = function() {
          var t = this.renderer.gl;
          (this.shader = new u.Shader(
            t,
            'attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTransform;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;\n}\n',
            'varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\nuniform mat3 uMapCoord;\nuniform vec4 uClampFrame;\nuniform vec2 uClampOffset;\n\nvoid main(void)\n{\n    vec2 coord = mod(vTextureCoord - uClampOffset, vec2(1.0, 1.0)) + uClampOffset;\n    coord = (uMapCoord * vec3(coord, 1.0)).xy;\n    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);\n\n    vec4 sample = texture2D(uSampler, coord);\n    vec4 color = vec4(uColor.rgb * uColor.a, uColor.a);\n\n    gl_FragColor = sample * color ;\n}\n',
          )), (this.simpleShader = new u.Shader(
            t,
            'attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTransform;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;\n}\n',
            'varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\n\nvoid main(void)\n{\n    vec4 sample = texture2D(uSampler, vTextureCoord);\n    vec4 color = vec4(uColor.rgb * uColor.a, uColor.a);\n    gl_FragColor = sample * color;\n}\n',
          )), this.renderer.bindVao(null), (this.quad = new u.Quad(
            t,
            this.renderer.state.attribState,
          )), this.quad.initVao(this.shader);
        }), (e.prototype.render = function(t) {
          var e = this.renderer, r = this.quad;
          e.bindVao(r.vao);
          var n = r.vertices;
          (n[0] = n[6] = t._width * -t.anchor.x), (n[1] = n[3] =
            t._height * -t.anchor.y), (n[2] = n[4] =
            t._width * (1 - t.anchor.x)), (n[5] = n[7] =
            t._height * (1 - t.anchor.y)), t.uvRespectAnchor &&
            ((n = r.uvs), (n[0] = n[6] = -t.anchor.x), (n[1] = n[3] = -t.anchor
              .y), (n[2] = n[4] = 1 - t.anchor.x), (n[5] = n[7] =
              1 - t.anchor.y)), r.upload();
          var i = t._texture,
            o = i.baseTexture,
            s = t.tileTransform.localTransform,
            a = t.uvTransform,
            d =
              o.isPowerOfTwo &&
              i.frame.width === o.width &&
              i.frame.height === o.height;
          d &&
            (o._glTextures[e.CONTEXT_UID]
              ? (d = o.wrapMode !== l.WRAP_MODES.CLAMP)
              : o.wrapMode === l.WRAP_MODES.CLAMP &&
                  (o.wrapMode = l.WRAP_MODES.REPEAT));
          var f = d ? this.simpleShader : this.shader;
          e.bindShader(f);
          var p = i.width, v = i.height, y = t._width, g = t._height;
          h.set(
            s.a * p / y,
            s.b * p / g,
            s.c * v / y,
            s.d * v / g,
            s.tx / y,
            s.ty / g,
          ), h.invert(), d
            ? h.append(a.mapCoord)
            : ((f.uniforms.uMapCoord = a.mapCoord.toArray(
                !0,
              )), (f.uniforms.uClampFrame =
                a.uClampFrame), (f.uniforms.uClampOffset =
                a.uClampOffset)), (f.uniforms.uTransform = h.toArray(!0));
          var m = c;
          u.utils.hex2rgb(t.tint, m), (m[3] =
            t.worldAlpha), (f.uniforms.uColor = m), (f.uniforms.translationMatrix = t.transform.worldTransform.toArray(
            !0,
          )), (f.uniforms.uSampler = e.bindTexture(i)), e.setBlendMode(
            t.blendMode,
          ), r.vao.draw(this.renderer.gl.TRIANGLES, 6, 0);
        }), e;
      })(u.ObjectRenderer);
    (e.default = d), u.WebGLRenderer.registerPlugin('tilingSprite', d);
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i(t) {
      if (t && t.__esModule) { return t; }
      var e = {};
      if (t != null) {
        for (var r in t) { Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); }
      }
      return (e.default = t), e;
    }
    function o(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    function s(t, e) {
      if (!t) {
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      }
      return !e || (typeof e !== 'object' && typeof e !== 'function') ? t : e;
    }
    function a(t, e) {
      if (typeof e !== 'function' && e !== null) {
        throw new TypeError(
          `Super expression must either be null or a function, not ${typeof e}`,
        );
      }
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {value: t, enumerable: !1, writable: !0, configurable: !0},
      })), e &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(t, e)
          : (t.__proto__ = e));
    }
    e.__esModule = !0;
    var u = (function() {
        function t(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1), (n.configurable = !0), 'value' in
            n && (n.writable = !0), Object.defineProperty(t, n.key, n);
          }
        }
        return function(e, r, n) {
          return r && t(e.prototype, r), n && t(e, n), e;
        };
      })(),
      l = r(11),
      h = i(l),
      c = r(15),
      d = n(c),
      f = (function(t) {
        function e(r) {
          var n = arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : {};
          o(this, e);
          var i = s(this, t.call(this));
          return (i._textWidth = 0), (i._textHeight = 0), (i._glyphs = []), (i._font = {
            tint: void 0 !== n.tint ? n.tint : 16777215,
            align: n.align || 'left',
            name: null,
            size: 0,
          }), (i.font =
            n.font), (i._text = r), (i.maxWidth = 0), (i.maxLineHeight = 0), (i._anchor = new d.default(
            () => {
              i.dirty = !0;
            },
            i,
            0,
            0,
          )), (i.dirty = !1), i.updateText(), i;
        }
        return a(e, t), (e.prototype.updateText = function() {
          for (
            var t = e.fonts[this._font.name],
              r = this._font.size / t.size,
              n = new h.Point(),
              i = [],
              o = [],
              s = null,
              a = 0,
              u = 0,
              l = 0,
              c = -1,
              d = 0,
              f = 0,
              p = 0;
            p < this.text.length;
            p++
          ) {
            var v = this.text.charCodeAt(p);
            if (
              (/(\s)/.test(this.text.charAt(p)) &&
                ((c = p), (d = a)), /(?:\r\n|\r|\n)/.test(this.text.charAt(p)))
            ) {
              o.push(a), (u = Math.max(u, a)), l++, (n.x = 0), (n.y +=
                t.lineHeight), (s = null);
            } else if (c !== -1 && this.maxWidth > 0 && n.x * r > this.maxWidth) {
              h.utils.removeItems(i, c, p - c), (p = c), (c = -1), o.push(
                d,
              ), (u = Math.max(u, d)), l++, (n.x = 0), (n.y +=
                t.lineHeight), (s = null);
            } else {
              var y = t.chars[v];
              y &&
                (s && y.kerning[s] && (n.x += y.kerning[s]), i.push({
                  texture: y.texture,
                  line: l,
                  charCode: v,
                  position: new h.Point(n.x + y.xOffset, n.y + y.yOffset),
                }), (a = n.x + (y.texture.width + y.xOffset)), (n.x +=
                  y.xAdvance), (f = Math.max(
                  f,
                  y.yOffset + y.texture.height,
                )), (s = v));
            }
          }
          o.push(a), (u = Math.max(u, a));
          for (var g = [], m = 0; m <= l; m++) {
            var b = 0;
            this._font.align === 'right'
              ? (b = u - o[m])
              : this._font.align === 'center' && (b = (u - o[m]) / 2), g.push(
              b,
            );
          }
          for (var x = i.length, _ = this.tint, w = 0; w < x; w++) {
            var T = this._glyphs[w];
            T
              ? (T.texture = i[w].texture)
              : ((T = new h.Sprite(i[w].texture)), this._glyphs.push(
                  T,
                )), (T.position.x =
              (i[w].position.x + g[i[w].line]) * r), (T.position.y =
              i[w].position.y *
              r), (T.scale.x = T.scale.y = r), (T.tint = _), T.parent ||
              this.addChild(T);
          }
          for (var E = x; E < this._glyphs.length; ++E) { this.removeChild(this._glyphs[E]); }
          if (
            ((this._textWidth = u * r), (this._textHeight =
              (n.y + t.lineHeight) * r), this.anchor.x !== 0 ||
              this.anchor.y !== 0)
          ) {
            for (var S = 0; S < x; S++) {
              (this._glyphs[S].x -=
                this._textWidth * this.anchor.x), (this._glyphs[S].y -=
                this._textHeight * this.anchor.y);
            }
          }
          this.maxLineHeight = f * r;
        }), (e.prototype.updateTransform = function() {
          this.validate(), this.containerUpdateTransform();
        }), (e.prototype.getLocalBounds = function() {
          return this.validate(), t.prototype.getLocalBounds.call(this);
        }), (e.prototype.validate = function() {
          this.dirty && (this.updateText(), (this.dirty = !1));
        }), u(e, [
          {
            key: 'tint',
            get() {
              return this._font.tint;
            },
            set(t) {
              (this._font.tint = typeof t === 'number' && t >= 0
                ? t
                : 16777215), (this.dirty = !0);
            },
          },
          {
            key: 'align',
            get() {
              return this._font.align;
            },
            set(t) {
              (this._font.align = t || 'left'), (this.dirty = !0);
            },
          },
          {
            key: 'anchor',
            get() {
              return this._anchor;
            },
            set(t) {
              typeof t === 'number' ? this._anchor.set(t) : this._anchor.copy(t);
            },
          },
          {
            key: 'font',
            get() {
              return this._font;
            },
            set(t) {
              t &&
                (typeof t === 'string'
                  ? ((t = t.split(' ')), (this._font.name = t.length === 1
                      ? t[0]
                      : t.slice(1).join(' ')), (this._font.size = t.length >= 2
                      ? parseInt(t[0], 10)
                      : e.fonts[this._font.name].size))
                  : ((this._font.name = t.name), (this._font.size = typeof t.size ===
                      'number'
                      ? t.size
                      : parseInt(t.size, 10))), (this.dirty = !0));
            },
          },
          {
            key: 'text',
            get() {
              return this._text;
            },
            set(t) {
              (t = t.toString() || ' '), this._text !== t &&
                ((this._text = t), (this.dirty = !0));
            },
          },
          {
            key: 'textWidth',
            get() {
              return this.validate(), this._textWidth;
            },
          },
          {
            key: 'textHeight',
            get() {
              return this.validate(), this._textHeight;
            },
          },
        ]), e;
      })(h.Container);
    (e.default = f), (f.fonts = {});
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      if (t && t.__esModule) { return t; }
      var e = {};
      if (t != null) { for (var r in t) { Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); } }
      return (e.default = t), e;
    }
    function i(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    var o = r(11), s = n(o), a = s.DisplayObject, u = new s.Matrix();
    (a.prototype._cacheAsBitmap = !1), (a.prototype._cacheData = !1);
    var l = function t() {
      i(
        this,
        t,
      ), (this.originalRenderWebGL = null), (this.originalRenderCanvas = null), (this.originalCalculateBounds = null), (this.originalGetLocalBounds = null), (this.originalUpdateTransform = null), (this.originalHitTest = null), (this.originalDestroy = null), (this.originalMask = null), (this.originalFilterArea = null), (this.sprite = null);
    };
    Object.defineProperties(a.prototype, {
      cacheAsBitmap: {
        get() {
          return this._cacheAsBitmap;
        },
        set(t) {
          if (this._cacheAsBitmap !== t) {
            this._cacheAsBitmap = t;
            var e = void 0;
            t
              ? (this._cacheData || (this._cacheData = new l()), (e = this
                  ._cacheData), (e.originalRenderWebGL = this.renderWebGL), (e.originalRenderCanvas = this.renderCanvas), (e.originalUpdateTransform = this.updateTransform), (e.originalCalculateBounds = this._calculateBounds), (e.originalGetLocalBounds = this.getLocalBounds), (e.originalDestroy = this.destroy), (e.originalContainsPoint = this.containsPoint), (e.originalMask = this._mask), (e.originalFilterArea = this.filterArea), (this.renderWebGL = this._renderCachedWebGL), (this.renderCanvas = this._renderCachedCanvas), (this.destroy = this._cacheAsBitmapDestroy))
              : ((e = this._cacheData), e.sprite &&
                  this._destroyCachedDisplayObject(), (this.renderWebGL =
                  e.originalRenderWebGL), (this.renderCanvas =
                  e.originalRenderCanvas), (this._calculateBounds =
                  e.originalCalculateBounds), (this.getLocalBounds =
                  e.originalGetLocalBounds), (this.destroy =
                  e.originalDestroy), (this.updateTransform =
                  e.originalUpdateTransform), (this.containsPoint =
                  e.originalContainsPoint), (this._mask =
                  e.originalMask), (this.filterArea = e.originalFilterArea));
          }
        },
      },
    }), (a.prototype._renderCachedWebGL = function(t) {
      !this.visible ||
        this.worldAlpha <= 0 ||
        !this.renderable ||
        (this._initCachedDisplayObject(
          t,
        ), (this._cacheData.sprite._transformID = -1), (this._cacheData.sprite.worldAlpha = this.worldAlpha), this._cacheData.sprite._renderWebGL(
          t,
        ));
    }), (a.prototype._initCachedDisplayObject = function(t) {
      if (!this._cacheData || !this._cacheData.sprite) {
        var e = this.alpha;
        (this.alpha = 1), t.currentRenderer.flush();
        var r = this.getLocalBounds().clone();
        if (this._filters) {
          var n = this._filters[0].padding;
          r.pad(n);
        }
        var i = t._activeRenderTarget,
          o = t.filterManager.filterStack,
          a = s.RenderTexture.create(0 | r.width, 0 | r.height),
          l = u;
        (l.tx = -r.x), (l.ty = -r.y), this.transform.worldTransform.identity(), (this.renderWebGL = this._cacheData.originalRenderWebGL), t.render(
          this,
          a,
          !0,
          l,
          !0,
        ), t.bindRenderTarget(
          i,
        ), (t.filterManager.filterStack = o), (this.renderWebGL = this._renderCachedWebGL), (this.updateTransform = this.displayObjectUpdateTransform), (this._mask = null), (this.filterArea = null);
        var h = new s.Sprite(a);
        (h.transform.worldTransform = this.transform.worldTransform), (h.anchor.x = -(r.x /
          r.width)), (h.anchor.y = -(r.y /
          r.height)), (h.alpha = e), (h._bounds = this._bounds), (this._calculateBounds = this._calculateCachedBounds), (this.getLocalBounds = this._getCachedLocalBounds), (this._cacheData.sprite = h), (this.transform._parentID = -1), this.updateTransform(), (this.containsPoint = h.containsPoint.bind(
          h,
        ));
      }
    }), (a.prototype._renderCachedCanvas = function(t) {
      !this.visible ||
        this.worldAlpha <= 0 ||
        !this.renderable ||
        (this._initCachedDisplayObjectCanvas(
          t,
        ), (this._cacheData.sprite.worldAlpha = this.worldAlpha), this._cacheData.sprite.renderCanvas(
          t,
        ));
    }), (a.prototype._initCachedDisplayObjectCanvas = function(t) {
      if (!this._cacheData || !this._cacheData.sprite) {
        var e = this.getLocalBounds(), r = this.alpha;
        this.alpha = 1;
        var n = t.context,
          i = s.RenderTexture.create(0 | e.width, 0 | e.height),
          o = u;
        this.transform.localTransform.copy(o), o.invert(), (o.tx -=
          e.x), (o.ty -=
          e.y), (this.renderCanvas = this._cacheData.originalRenderCanvas), t.render(
          this,
          i,
          !0,
          o,
          !1,
        ), (t.context = n), (this.renderCanvas = this._renderCachedCanvas), (this._calculateBounds = this._calculateCachedBounds), (this._mask = null), (this.filterArea = null);
        var a = new s.Sprite(i);
        (a.transform.worldTransform = this.transform.worldTransform), (a.anchor.x = -(e.x /
          e.width)), (a.anchor.y = -(e.y /
          e.height)), (a._bounds = this._bounds), (a.alpha = r), this.updateTransform(), (this.updateTransform = this.displayObjectUpdateTransform), (this._cacheData.sprite = a), (this.containsPoint = a.containsPoint.bind(
          a,
        ));
      }
    }), (a.prototype._calculateCachedBounds = function() {
      this._cacheData.sprite._calculateBounds();
    }), (a.prototype._getCachedLocalBounds = function() {
      return this._cacheData.sprite.getLocalBounds();
    }), (a.prototype._destroyCachedDisplayObject = function() {
      this._cacheData.sprite._texture.destroy(
        !0,
      ), (this._cacheData.sprite = null);
    }), (a.prototype._cacheAsBitmapDestroy = function() {
      (this.cacheAsBitmap = !1), this.destroy();
    });
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      if (t && t.__esModule) { return t; }
      var e = {};
      if (t != null) {
        for (var r in t) { Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); }
      }
      return (e.default = t), e;
    }
    var i = r(11), o = n(i);
    (o.DisplayObject.prototype.name = null), (o.Container.prototype.getChildByName = function(
      t,
    ) {
      for (var e = 0; e < this.children.length; e++) { if (this.children[e].name === t) { return this.children[e]; } }
      return null;
    });
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      if (t && t.__esModule) { return t; }
      var e = {};
      if (t != null) {
        for (var r in t) { Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); }
      }
      return (e.default = t), e;
    }
    var i = r(11), o = n(i);
    o.DisplayObject.prototype.getGlobalPosition = function() {
      var t = arguments.length > 0 && void 0 !== arguments[0]
        ? arguments[0]
        : new o.Point(),
        e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      return this.parent
        ? this.parent.toGlobal(this.position, t, e)
        : ((t.x = this.position.x), (t.y = this.position.y)), t;
    };
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    e.__esModule = !0;
    var i = r(144);
    Object.defineProperty(e, 'FXAAFilter', {
      enumerable: !0,
      get() {
        return n(i).default;
      },
    });
    var o = r(145);
    Object.defineProperty(e, 'NoiseFilter', {
      enumerable: !0,
      get() {
        return n(o).default;
      },
    });
    var s = r(146);
    Object.defineProperty(e, 'DisplacementFilter', {
      enumerable: !0,
      get() {
        return n(s).default;
      },
    });
    var a = r(147);
    Object.defineProperty(e, 'BlurFilter', {
      enumerable: !0,
      get() {
        return n(a).default;
      },
    });
    var u = r(148);
    Object.defineProperty(e, 'BlurXFilter', {
      enumerable: !0,
      get() {
        return n(u).default;
      },
    });
    var l = r(152);
    Object.defineProperty(e, 'BlurYFilter', {
      enumerable: !0,
      get() {
        return n(l).default;
      },
    });
    var h = r(153);
    Object.defineProperty(e, 'ColorMatrixFilter', {
      enumerable: !0,
      get() {
        return n(h).default;
      },
    });
    var c = r(154);
    Object.defineProperty(e, 'VoidFilter', {
      enumerable: !0,
      get() {
        return n(c).default;
      },
    });
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      if (t && t.__esModule) { return t; }
      var e = {};
      if (t != null) {
        for (var r in t) { Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); }
      }
      return (e.default = t), e;
    }
    function i(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    function o(t, e) {
      if (!t) {
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      }
      return !e || (typeof e !== 'object' && typeof e !== 'function') ? t : e;
    }
    function s(t, e) {
      if (typeof e !== 'function' && e !== null) {
        throw new TypeError(
          `Super expression must either be null or a function, not ${typeof e}`,
        );
      }
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {value: t, enumerable: !1, writable: !0, configurable: !0},
      })), e &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(t, e)
          : (t.__proto__ = e));
    }
    e.__esModule = !0;
    var a = r(11),
      u = n(a),
      l = (r(87), (function(t) {
        function e() {
          return i(this, e), o(
            this,
            t.call(
              this,
              '\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nuniform vec4 filterArea;\n\nvarying vec2 vTextureCoord;\n\nvec2 mapCoord( vec2 coord )\n{\n    coord *= filterArea.xy;\n    coord += filterArea.zw;\n\n    return coord;\n}\n\nvec2 unmapCoord( vec2 coord )\n{\n    coord -= filterArea.zw;\n    coord /= filterArea.xy;\n\n    return coord;\n}\n\nvoid texcoords(vec2 fragCoord, vec2 resolution,\n               out vec2 v_rgbNW, out vec2 v_rgbNE,\n               out vec2 v_rgbSW, out vec2 v_rgbSE,\n               out vec2 v_rgbM) {\n    vec2 inverseVP = 1.0 / resolution.xy;\n    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;\n    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;\n    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;\n    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;\n    v_rgbM = vec2(fragCoord * inverseVP);\n}\n\nvoid main(void) {\n\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n   vTextureCoord = aTextureCoord;\n\n   vec2 fragCoord = vTextureCoord * filterArea.xy;\n\n   texcoords(fragCoord, filterArea.xy, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n}',
              'varying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\n/**\n Basic FXAA implementation based on the code on geeks3d.com with the\n modification that the texture2DLod stuff was removed since it\'s\n unsupported by WebGL.\n \n --\n \n From:\n https://github.com/mitsuhiko/webgl-meincraft\n \n Copyright (c) 2011 by Armin Ronacher.\n \n Some rights reserved.\n \n Redistribution and use in source and binary forms, with or without\n modification, are permitted provided that the following conditions are\n met:\n \n * Redistributions of source code must retain the above copyright\n notice, this list of conditions and the following disclaimer.\n \n * Redistributions in binary form must reproduce the above\n copyright notice, this list of conditions and the following\n disclaimer in the documentation and/or other materials provided\n with the distribution.\n \n * The names of the contributors may not be used to endorse or\n promote products derived from this software without specific\n prior written permission.\n \n THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\n LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\n A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\n OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\n SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\n LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\n DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\n THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\n OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n */\n\n#ifndef FXAA_REDUCE_MIN\n#define FXAA_REDUCE_MIN   (1.0/ 128.0)\n#endif\n#ifndef FXAA_REDUCE_MUL\n#define FXAA_REDUCE_MUL   (1.0 / 8.0)\n#endif\n#ifndef FXAA_SPAN_MAX\n#define FXAA_SPAN_MAX     8.0\n#endif\n\n//optimized version for mobile, where dependent\n//texture reads can be a bottleneck\nvec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 resolution,\n          vec2 v_rgbNW, vec2 v_rgbNE,\n          vec2 v_rgbSW, vec2 v_rgbSE,\n          vec2 v_rgbM) {\n    vec4 color;\n    mediump vec2 inverseVP = vec2(1.0 / resolution.x, 1.0 / resolution.y);\n    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;\n    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;\n    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;\n    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;\n    vec4 texColor = texture2D(tex, v_rgbM);\n    vec3 rgbM  = texColor.xyz;\n    vec3 luma = vec3(0.299, 0.587, 0.114);\n    float lumaNW = dot(rgbNW, luma);\n    float lumaNE = dot(rgbNE, luma);\n    float lumaSW = dot(rgbSW, luma);\n    float lumaSE = dot(rgbSE, luma);\n    float lumaM  = dot(rgbM,  luma);\n    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n    \n    mediump vec2 dir;\n    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n    \n    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *\n                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n    \n    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n                  dir * rcpDirMin)) * inverseVP;\n    \n    vec3 rgbA = 0.5 * (\n                       texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +\n                       texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);\n    vec3 rgbB = rgbA * 0.5 + 0.25 * (\n                                     texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +\n                                     texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);\n    \n    float lumaB = dot(rgbB, luma);\n    if ((lumaB < lumaMin) || (lumaB > lumaMax))\n        color = vec4(rgbA, texColor.a);\n    else\n        color = vec4(rgbB, texColor.a);\n    return color;\n}\n\nvoid main() {\n\n      vec2 fragCoord = vTextureCoord * filterArea.xy;\n\n      vec4 color;\n\n    color = fxaa(uSampler, fragCoord, filterArea.xy, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n\n      gl_FragColor = color;\n}\n',
            ),
          );
        }
        return s(e, t), e;
      })(u.Filter));
    e.default = l;
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      if (t && t.__esModule) { return t; }
      var e = {};
      if (t != null) {
        for (var r in t) { Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); }
      }
      return (e.default = t), e;
    }
    function i(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    function o(t, e) {
      if (!t) {
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      }
      return !e || (typeof e !== 'object' && typeof e !== 'function') ? t : e;
    }
    function s(t, e) {
      if (typeof e !== 'function' && e !== null) {
        throw new TypeError(
          `Super expression must either be null or a function, not ${typeof e}`,
        );
      }
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {value: t, enumerable: !1, writable: !0, configurable: !0},
      })), e &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(t, e)
          : (t.__proto__ = e));
    }
    e.__esModule = !0;
    var a = (function() {
        function t(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1), (n.configurable = !0), 'value' in
            n && (n.writable = !0), Object.defineProperty(t, n.key, n);
          }
        }
        return function(e, r, n) {
          return r && t(e.prototype, r), n && t(e, n), e;
        };
      })(),
      u = r(11),
      l = n(u),
      h = (r(87), (function(t) {
        function e() {
          i(this, e);
          var r = o(
            this,
            t.call(
              this,
              'attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}',
              'precision highp float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform float noise;\nuniform sampler2D uSampler;\n\nfloat rand(vec2 co)\n{\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main()\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    float diff = (rand(gl_FragCoord.xy) - 0.5) * noise;\n\n    color.r += diff;\n    color.g += diff;\n    color.b += diff;\n\n    gl_FragColor = color;\n}\n',
            ),
          );
          return (r.noise = 0.5), r;
        }
        return s(e, t), a(e, [
          {
            key: 'noise',
            get() {
              return this.uniforms.noise;
            },
            set(t) {
              this.uniforms.noise = t;
            },
          },
        ]), e;
      })(l.Filter));
    e.default = h;
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      if (t && t.__esModule) { return t; }
      var e = {};
      if (t != null) {
        for (var r in t) { Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); }
      }
      return (e.default = t), e;
    }
    function i(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    function o(t, e) {
      if (!t) {
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      }
      return !e || (typeof e !== 'object' && typeof e !== 'function') ? t : e;
    }
    function s(t, e) {
      if (typeof e !== 'function' && e !== null) {
        throw new TypeError(
          `Super expression must either be null or a function, not ${typeof e}`,
        );
      }
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {value: t, enumerable: !1, writable: !0, configurable: !0},
      })), e &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(t, e)
          : (t.__proto__ = e));
    }
    e.__esModule = !0;
    var a = (function() {
        function t(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1), (n.configurable = !0), 'value' in
            n && (n.writable = !0), Object.defineProperty(t, n.key, n);
          }
        }
        return function(e, r, n) {
          return r && t(e.prototype, r), n && t(e, n), e;
        };
      })(),
      u = r(11),
      l = n(u),
      h = (r(87), (function(t) {
        function e(r, n) {
          i(this, e);
          var s = new l.Matrix();
          r.renderable = !1;
          var a = o(
            this,
            t.call(
              this,
              'attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 filterMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vFilterCoord;\n\nvoid main(void)\n{\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vFilterCoord = ( filterMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n   vTextureCoord = aTextureCoord;\n}',
              'varying vec2 vFilterCoord;\nvarying vec2 vTextureCoord;\n\nuniform vec2 scale;\n\nuniform sampler2D uSampler;\nuniform sampler2D mapSampler;\n\nuniform vec4 filterClamp;\n\nvoid main(void)\n{\n   vec4 map =  texture2D(mapSampler, vFilterCoord);\n\n   map -= 0.5;\n   map.xy *= scale;\n\n   gl_FragColor = texture2D(uSampler, clamp(vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y), filterClamp.xy, filterClamp.zw));\n}\n',
            ),
          );
          return (a.maskSprite = r), (a.maskMatrix = s), (a.uniforms.mapSampler =
            r.texture), (a.uniforms.filterMatrix = s.toArray(
            !0,
          )), (a.uniforms.scale = {x: 1, y: 1}), (n !== null && void 0 !== n) ||
            (n = 20), (a.scale = new l.Point(n, n)), a;
        }
        return s(e, t), (e.prototype.apply = function(t, e, r) {
          var n = 1 / r.destinationFrame.width * (r.size.width / e.size.width);
          (this.uniforms.filterMatrix = t.calculateSpriteMatrix(
            this.maskMatrix,
            this.maskSprite,
          )), (this.uniforms.scale.x =
            this.scale.x * n), (this.uniforms.scale.y =
            this.scale.y * n), t.applyFilter(this, e, r);
        }), a(e, [
          {
            key: 'map',
            get() {
              return this.uniforms.mapSampler;
            },
            set(t) {
              this.uniforms.mapSampler = t;
            },
          },
        ]), e;
      })(l.Filter));
    e.default = h;
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i(t) {
      if (t && t.__esModule) { return t; }
      var e = {};
      if (t != null) { for (var r in t) { Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); } }
      return (e.default = t), e;
    }
    function o(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    function s(t, e) {
      if (!t) {
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      }
      return !e || (typeof e !== 'object' && typeof e !== 'function') ? t : e;
    }
    function a(t, e) {
      if (typeof e !== 'function' && e !== null) {
        throw new TypeError(
          `Super expression must either be null or a function, not ${typeof e}`,
        );
      }
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {value: t, enumerable: !1, writable: !0, configurable: !0},
      })), e &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(t, e)
          : (t.__proto__ = e));
    }
    e.__esModule = !0;
    var u = (function() {
        function t(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1), (n.configurable = !0), 'value' in
            n && (n.writable = !0), Object.defineProperty(t, n.key, n);
          }
        }
        return function(e, r, n) {
          return r && t(e.prototype, r), n && t(e, n), e;
        };
      })(),
      l = r(11),
      h = i(l),
      c = r(148),
      d = n(c),
      f = r(152),
      p = n(f),
      v = (function(t) {
        function e(r, n, i, a) {
          o(this, e);
          var u = s(this, t.call(this));
          return (u.blurXFilter = new d.default(
            r,
            n,
            i,
            a,
          )), (u.blurYFilter = new p.default(
            r,
            n,
            i,
            a,
          )), (u.resolution = 1), (u.padding = 0), (u.resolution =
            i || 1), (u.quality = n || 4), (u.blur = r || 8), u;
        }
        return a(e, t), (e.prototype.apply = function(t, e, r) {
          var n = t.getRenderTarget(!0);
          this.blurXFilter.apply(t, e, n, !0), this.blurYFilter.apply(
            t,
            n,
            r,
            !1,
          ), t.returnRenderTarget(n);
        }), u(e, [
          {
            key: 'blur',
            get() {
              return this.blurXFilter.blur;
            },
            set(t) {
              (this.blurXFilter.blur = this.blurYFilter.blur = t), (this.padding =
                2 *
                Math.max(
                  Math.abs(this.blurXFilter.strength),
                  Math.abs(this.blurYFilter.strength),
                ));
            },
          },
          {
            key: 'quality',
            get() {
              return this.blurXFilter.quality;
            },
            set(t) {
              this.blurXFilter.quality = this.blurYFilter.quality = t;
            },
          },
          {
            key: 'blurX',
            get() {
              return this.blurXFilter.blur;
            },
            set(t) {
              (this.blurXFilter.blur = t), (this.padding =
                2 *
                Math.max(
                  Math.abs(this.blurXFilter.strength),
                  Math.abs(this.blurYFilter.strength),
                ));
            },
          },
          {
            key: 'blurY',
            get() {
              return this.blurYFilter.blur;
            },
            set(t) {
              (this.blurYFilter.blur = t), (this.padding =
                2 *
                Math.max(
                  Math.abs(this.blurXFilter.strength),
                  Math.abs(this.blurYFilter.strength),
                ));
            },
          },
        ]), e;
      })(h.Filter);
    e.default = v;
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i(t) {
      if (t && t.__esModule) { return t; }
      var e = {};
      if (t != null) {
        for (var r in t) { Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); }
      }
      return (e.default = t), e;
    }
    function o(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    function s(t, e) {
      if (!t) {
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      }
      return !e || (typeof e !== 'object' && typeof e !== 'function') ? t : e;
    }
    function a(t, e) {
      if (typeof e !== 'function' && e !== null) {
        throw new TypeError(
          `Super expression must either be null or a function, not ${typeof e}`,
        );
      }
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {value: t, enumerable: !1, writable: !0, configurable: !0},
      })), e &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(t, e)
          : (t.__proto__ = e));
    }
    e.__esModule = !0;
    var u = (function() {
        function t(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1), (n.configurable = !0), 'value' in
            n && (n.writable = !0), Object.defineProperty(t, n.key, n);
          }
        }
        return function(e, r, n) {
          return r && t(e.prototype, r), n && t(e, n), e;
        };
      })(),
      l = r(11),
      h = i(l),
      c = r(149),
      d = n(c),
      f = r(150),
      p = n(f),
      v = r(151),
      y = n(v),
      g = (function(t) {
        function e(r, n, i, a) {
          o(this, e), (a = a || 5);
          var u = (0, d.default)(a, !0),
            l = (0, p.default)(a),
            h = s(this, t.call(this, u, l));
          return (h.resolution = i || 1), (h._quality = 0), (h.quality =
            n || 4), (h.strength = r || 8), (h.firstRun = !0), h;
        }
        return a(e, t), (e.prototype.apply = function(t, e, r, n) {
          if (this.firstRun) {
            var i = t.renderer.gl, o = (0, y.default)(i);
            (this.vertexSrc = (0, d.default)(
              o,
              !0,
            )), (this.fragmentSrc = (0, p.default)(o)), (this.firstRun = !1);
          }
          if (
            ((this.uniforms.strength =
              1 /
              r.size.width *
              (r.size.width /
                e.size
                  .width)), (this.uniforms.strength *= this.strength), (this.uniforms.strength /= this.passes), this.passes ===
              1)
          ) { t.applyFilter(this, e, r, n); } else {
            for (
              var s = t.getRenderTarget(!0), a = e, u = s, l = 0;
              l < this.passes - 1;
              l++
            ) {
              t.applyFilter(this, a, u, !0);
              var h = u;
              (u = a), (a = h);
            }
            t.applyFilter(this, a, r, n), t.returnRenderTarget(s);
          }
        }), u(e, [
          {
            key: 'blur',
            get() {
              return this.strength;
            },
            set(t) {
              (this.padding = 2 * Math.abs(t)), (this.strength = t);
            },
          },
          {
            key: 'quality',
            get() {
              return this._quality;
            },
            set(t) {
              (this._quality = t), (this.passes = t);
            },
          },
        ]), e;
      })(h.Filter);
    e.default = g;
  },
  function(t, e) {
    'use strict';
    function r(t, e) {
      var r = Math.ceil(t / 2), i = n, o = '', s = void 0;
      s = e
        ? 'vBlurTexCoords[%index%] = aTextureCoord + vec2(%sampleIndex% * strength, 0.0);'
        : 'vBlurTexCoords[%index%] = aTextureCoord + vec2(0.0, %sampleIndex% * strength);';
      for (var a = 0; a < t; a++) {
        var u = s.replace('%index%', a);
        (u = u.replace('%sampleIndex%', `${a - (r - 1)}.0`)), (o += u), (o +=
          '\n');
      }
      return (i = i.replace('%blur%', o)), (i = i.replace('%size%', t));
    }
    (e.__esModule = !0), (e.default = r);
    var n = [
      'attribute vec2 aVertexPosition;',
      'attribute vec2 aTextureCoord;',
      'uniform float strength;',
      'uniform mat3 projectionMatrix;',
      'varying vec2 vBlurTexCoords[%size%];',
      'void main(void)',
      '{',
      'gl_Position = vec4((projectionMatrix * vec3((aVertexPosition), 1.0)).xy, 0.0, 1.0);',
      '%blur%',
      '}',
    ].join('\n');
  },
  function(t, e) {
    'use strict';
    function r(t) {
      for (
        var e = n[t],
          r = e.length,
          o = i,
          s = '',
          a =
            'gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;',
          u = void 0,
          l = 0;
        l < t;
        l++
      ) {
        var h = a.replace('%index%', l);
        (u = l), l >= r && (u = t - l - 1), (h = h.replace(
          '%value%',
          e[u],
        )), (s += h), (s += '\n');
      }
      return (o = o.replace('%blur%', s)), (o = o.replace('%size%', t));
    }
    (e.__esModule = !0), (e.default = r);
    var n = {
        5: [0.153388, 0.221461, 0.250301],
        7: [0.071303, 0.131514, 0.189879, 0.214607],
        9: [0.028532, 0.067234, 0.124009, 0.179044, 0.20236],
        11: [0.0093, 0.028002, 0.065984, 0.121703, 0.175713, 0.198596],
        13: [
          0.002406,
          0.009255,
          0.027867,
          0.065666,
          0.121117,
          0.174868,
          0.197641,
        ],
        15: [
          489e-6,
          0.002403,
          0.009246,
          0.02784,
          0.065602,
          0.120999,
          0.174697,
          0.197448,
        ],
      },
      i = [
        'varying vec2 vBlurTexCoords[%size%];',
        'uniform sampler2D uSampler;',
        'void main(void)',
        '{',
        '    gl_FragColor = vec4(0.0);',
        '    %blur%',
        '}',
      ].join('\n');
  },
  function(t, e) {
    'use strict';
    function r(t) {
      for (var e = t.getParameter(t.MAX_VARYING_VECTORS), r = 15; r > e;) { r -= 2; }
      return r;
    }
    (e.__esModule = !0), (e.default = r);
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i(t) {
      if (t && t.__esModule) { return t; }
      var e = {};
      if (t != null) {
        for (var r in t) { Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); }
      }
      return (e.default = t), e;
    }
    function o(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    function s(t, e) {
      if (!t) {
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      }
      return !e || (typeof e !== 'object' && typeof e !== 'function') ? t : e;
    }
    function a(t, e) {
      if (typeof e !== 'function' && e !== null) {
        throw new TypeError(
          `Super expression must either be null or a function, not ${typeof e}`,
        );
      }
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {value: t, enumerable: !1, writable: !0, configurable: !0},
      })), e &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(t, e)
          : (t.__proto__ = e));
    }
    e.__esModule = !0;
    var u = (function() {
        function t(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1), (n.configurable = !0), 'value' in
            n && (n.writable = !0), Object.defineProperty(t, n.key, n);
          }
        }
        return function(e, r, n) {
          return r && t(e.prototype, r), n && t(e, n), e;
        };
      })(),
      l = r(11),
      h = i(l),
      c = r(149),
      d = n(c),
      f = r(150),
      p = n(f),
      v = r(151),
      y = n(v),
      g = (function(t) {
        function e(r, n, i, a) {
          o(this, e), (a = a || 5);
          var u = (0, d.default)(a, !1),
            l = (0, p.default)(a),
            h = s(this, t.call(this, u, l));
          return (h.resolution = i || 1), (h._quality = 0), (h.quality =
            n || 4), (h.strength = r || 8), (h.firstRun = !0), h;
        }
        return a(e, t), (e.prototype.apply = function(t, e, r, n) {
          if (this.firstRun) {
            var i = t.renderer.gl, o = (0, y.default)(i);
            (this.vertexSrc = (0, d.default)(
              o,
              !1,
            )), (this.fragmentSrc = (0, p.default)(o)), (this.firstRun = !1);
          }
          if (
            ((this.uniforms.strength =
              1 /
              r.size.height *
              (r.size.height /
                e.size
                  .height)), (this.uniforms.strength *= this.strength), (this.uniforms.strength /= this.passes), this.passes ===
              1)
          ) { t.applyFilter(this, e, r, n); } else {
            for (
              var s = t.getRenderTarget(!0), a = e, u = s, l = 0;
              l < this.passes - 1;
              l++
            ) {
              t.applyFilter(this, a, u, !0);
              var h = u;
              (u = a), (a = h);
            }
            t.applyFilter(this, a, r, n), t.returnRenderTarget(s);
          }
        }), u(e, [
          {
            key: 'blur',
            get() {
              return this.strength;
            },
            set(t) {
              (this.padding = 2 * Math.abs(t)), (this.strength = t);
            },
          },
          {
            key: 'quality',
            get() {
              return this._quality;
            },
            set(t) {
              (this._quality = t), (this.passes = t);
            },
          },
        ]), e;
      })(h.Filter);
    e.default = g;
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      if (t && t.__esModule) { return t; }
      var e = {};
      if (t != null) {
        for (var r in t) { Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); }
      }
      return (e.default = t), e;
    }
    function i(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    function o(t, e) {
      if (!t) {
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      }
      return !e || (typeof e !== 'object' && typeof e !== 'function') ? t : e;
    }
    function s(t, e) {
      if (typeof e !== 'function' && e !== null) {
        throw new TypeError(
          `Super expression must either be null or a function, not ${typeof e}`,
        );
      }
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {value: t, enumerable: !1, writable: !0, configurable: !0},
      })), e &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(t, e)
          : (t.__proto__ = e));
    }
    e.__esModule = !0;
    var a = (function() {
        function t(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1), (n.configurable = !0), 'value' in
            n && (n.writable = !0), Object.defineProperty(t, n.key, n);
          }
        }
        return function(e, r, n) {
          return r && t(e.prototype, r), n && t(e, n), e;
        };
      })(),
      u = r(11),
      l = n(u),
      h = (r(87), (function(t) {
        function e() {
          i(this, e);
          var r = o(
            this,
            t.call(
              this,
              'attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}',
              'varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float m[20];\n\nvoid main(void)\n{\n\n    vec4 c = texture2D(uSampler, vTextureCoord);\n\n    gl_FragColor.r = (m[0] * c.r);\n        gl_FragColor.r += (m[1] * c.g);\n        gl_FragColor.r += (m[2] * c.b);\n        gl_FragColor.r += (m[3] * c.a);\n        gl_FragColor.r += m[4] * c.a;\n\n    gl_FragColor.g = (m[5] * c.r);\n        gl_FragColor.g += (m[6] * c.g);\n        gl_FragColor.g += (m[7] * c.b);\n        gl_FragColor.g += (m[8] * c.a);\n        gl_FragColor.g += m[9] * c.a;\n\n     gl_FragColor.b = (m[10] * c.r);\n        gl_FragColor.b += (m[11] * c.g);\n        gl_FragColor.b += (m[12] * c.b);\n        gl_FragColor.b += (m[13] * c.a);\n        gl_FragColor.b += m[14] * c.a;\n\n     gl_FragColor.a = (m[15] * c.r);\n        gl_FragColor.a += (m[16] * c.g);\n        gl_FragColor.a += (m[17] * c.b);\n        gl_FragColor.a += (m[18] * c.a);\n        gl_FragColor.a += m[19] * c.a;\n\n//    gl_FragColor = vec4(m[0]);\n}\n',
            ),
          );
          return (r.uniforms.m = [
            1,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
          ]), r;
        }
        return s(e, t), (e.prototype._loadMatrix = function(t) {
          var e =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = t;
          e &&
            (this._multiply(r, this.uniforms.m, t), (r = this._colorMatrix(
              r,
            ))), (this.uniforms.m = r);
        }), (e.prototype._multiply = function(t, e, r) {
          return (t[0] =
            e[0] * r[0] + e[1] * r[5] + e[2] * r[10] + e[3] * r[15]), (t[1] =
            e[0] * r[1] + e[1] * r[6] + e[2] * r[11] + e[3] * r[16]), (t[2] =
            e[0] * r[2] + e[1] * r[7] + e[2] * r[12] + e[3] * r[17]), (t[3] =
            e[0] * r[3] + e[1] * r[8] + e[2] * r[13] + e[3] * r[18]), (t[4] =
            e[0] * r[4] + e[1] * r[9] + e[2] * r[14] + e[3] * r[19]), (t[5] =
            e[5] * r[0] + e[6] * r[5] + e[7] * r[10] + e[8] * r[15]), (t[6] =
            e[5] * r[1] + e[6] * r[6] + e[7] * r[11] + e[8] * r[16]), (t[7] =
            e[5] * r[2] + e[6] * r[7] + e[7] * r[12] + e[8] * r[17]), (t[8] =
            e[5] * r[3] + e[6] * r[8] + e[7] * r[13] + e[8] * r[18]), (t[9] =
            e[5] * r[4] + e[6] * r[9] + e[7] * r[14] + e[8] * r[19]), (t[10] =
            e[10] * r[0] +
            e[11] * r[5] +
            e[12] * r[10] +
            e[13] * r[15]), (t[11] =
            e[10] * r[1] +
            e[11] * r[6] +
            e[12] * r[11] +
            e[13] * r[16]), (t[12] =
            e[10] * r[2] +
            e[11] * r[7] +
            e[12] * r[12] +
            e[13] * r[17]), (t[13] =
            e[10] * r[3] +
            e[11] * r[8] +
            e[12] * r[13] +
            e[13] * r[18]), (t[14] =
            e[10] * r[4] +
            e[11] * r[9] +
            e[12] * r[14] +
            e[13] * r[19]), (t[15] =
            e[15] * r[0] +
            e[16] * r[5] +
            e[17] * r[10] +
            e[18] * r[15]), (t[16] =
            e[15] * r[1] +
            e[16] * r[6] +
            e[17] * r[11] +
            e[18] * r[16]), (t[17] =
            e[15] * r[2] +
            e[16] * r[7] +
            e[17] * r[12] +
            e[18] * r[17]), (t[18] =
            e[15] * r[3] +
            e[16] * r[8] +
            e[17] * r[13] +
            e[18] * r[18]), (t[19] =
            e[15] * r[4] + e[16] * r[9] + e[17] * r[14] + e[18] * r[19]), t;
        }), (e.prototype._colorMatrix = function(t) {
          var e = new Float32Array(t);
          return (e[4] /= 255), (e[9] /= 255), (e[14] /= 255), (e[19] /= 255), e;
        }), (e.prototype.brightness = function(t, e) {
          var r = [t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 1, 0];
          this._loadMatrix(r, e);
        }), (e.prototype.greyscale = function(t, e) {
          var r = [t, t, t, 0, 0, t, t, t, 0, 0, t, t, t, 0, 0, 0, 0, 0, 1, 0];
          this._loadMatrix(r, e);
        }), (e.prototype.blackAndWhite = function(t) {
          var e = [
            0.3,
            0.6,
            0.1,
            0,
            0,
            0.3,
            0.6,
            0.1,
            0,
            0,
            0.3,
            0.6,
            0.1,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
          ];
          this._loadMatrix(e, t);
        }), (e.prototype.hue = function(t, e) {
          t = (t || 0) / 180 * Math.PI;
          var r = Math.cos(t),
            n = Math.sin(t),
            i = Math.sqrt,
            o = 1 / 3,
            s = i(o),
            a = r + (1 - r) * o,
            u = o * (1 - r) - s * n,
            l = o * (1 - r) + s * n,
            h = o * (1 - r) + s * n,
            c = r + o * (1 - r),
            d = o * (1 - r) - s * n,
            f = o * (1 - r) - s * n,
            p = o * (1 - r) + s * n,
            v = r + o * (1 - r),
            y = [a, u, l, 0, 0, h, c, d, 0, 0, f, p, v, 0, 0, 0, 0, 0, 1, 0];
          this._loadMatrix(y, e);
        }), (e.prototype.contrast = function(t, e) {
          var r = (t || 0) + 1,
            n = -128 * (r - 1),
            i = [r, 0, 0, 0, n, 0, r, 0, 0, n, 0, 0, r, 0, n, 0, 0, 0, 1, 0];
          this._loadMatrix(i, e);
        }), (e.prototype.saturate = function() {
          var t = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : 0,
            e = arguments[1],
            r = 2 * t / 3 + 1,
            n = (r - 1) * -0.5,
            i = [r, n, n, 0, 0, n, r, n, 0, 0, n, n, r, 0, 0, 0, 0, 0, 1, 0];
          this._loadMatrix(i, e);
        }), (e.prototype.desaturate = function() {
          this.saturate(-1);
        }), (e.prototype.negative = function(t) {
          var e = [0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0];
          this._loadMatrix(e, t);
        }), (e.prototype.sepia = function(t) {
          var e = [
            0.393,
            0.7689999,
            0.18899999,
            0,
            0,
            0.349,
            0.6859999,
            0.16799999,
            0,
            0,
            0.272,
            0.5339999,
            0.13099999,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
          ];
          this._loadMatrix(e, t);
        }), (e.prototype.technicolor = function(t) {
          var e = [
            1.9125277891456083,
            -0.8545344976951645,
            -0.09155508482755585,
            0,
            11.793603434377337,
            -0.3087833385928097,
            1.7658908555458428,
            -0.10601743074722245,
            0,
            -70.35205161461398,
            -0.231103377548616,
            -0.7501899197440212,
            1.847597816108189,
            0,
            30.950940869491138,
            0,
            0,
            0,
            1,
            0,
          ];
          this._loadMatrix(e, t);
        }), (e.prototype.polaroid = function(t) {
          var e = [
            1.438,
            -0.062,
            -0.062,
            0,
            0,
            -0.122,
            1.378,
            -0.122,
            0,
            0,
            -0.016,
            -0.016,
            1.483,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
          ];
          this._loadMatrix(e, t);
        }), (e.prototype.toBGR = function(t) {
          var e = [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0];
          this._loadMatrix(e, t);
        }), (e.prototype.kodachrome = function(t) {
          var e = [
            1.1285582396593525,
            -0.3967382283601348,
            -0.03992559172921793,
            0,
            63.72958762196502,
            -0.16404339962244616,
            1.0835251566291304,
            -0.05498805115633132,
            0,
            24.732407896706203,
            -0.16786010706155763,
            -0.5603416277695248,
            1.6014850761964943,
            0,
            35.62982807460946,
            0,
            0,
            0,
            1,
            0,
          ];
          this._loadMatrix(e, t);
        }), (e.prototype.browni = function(t) {
          var e = [
            0.5997023498159715,
            0.34553243048391263,
            -0.2708298674538042,
            0,
            47.43192855600873,
            -0.037703249837783157,
            0.8609577587992641,
            0.15059552388459913,
            0,
            -36.96841498319127,
            0.24113635128153335,
            -0.07441037908422492,
            0.44972182064877153,
            0,
            -7.562075277591283,
            0,
            0,
            0,
            1,
            0,
          ];
          this._loadMatrix(e, t);
        }), (e.prototype.vintage = function(t) {
          var e = [
            0.6279345635605994,
            0.3202183420819367,
            -0.03965408211312453,
            0,
            9.651285835294123,
            0.02578397704808868,
            0.6441188644374771,
            0.03259127616149294,
            0,
            7.462829176470591,
            0.0466055556782719,
            -0.0851232987247891,
            0.5241648018700465,
            0,
            5.159190588235296,
            0,
            0,
            0,
            1,
            0,
          ];
          this._loadMatrix(e, t);
        }), (e.prototype.colorTone = function(t, e, r, n, i) {
          (t = t || 0.2), (e = e || 0.15), (r = r || 16770432), (n =
            n || 3375104);
          var o = ((r >> 16) & 255) / 255,
            s = ((r >> 8) & 255) / 255,
            a = (255 & r) / 255,
            u = ((n >> 16) & 255) / 255,
            l = ((n >> 8) & 255) / 255,
            h = (255 & n) / 255,
            c = [
              0.3,
              0.59,
              0.11,
              0,
              0,
              o,
              s,
              a,
              t,
              0,
              u,
              l,
              h,
              e,
              0,
              o - u,
              s - l,
              a - h,
              0,
              0,
            ];
          this._loadMatrix(c, i);
        }), (e.prototype.night = function(t, e) {
          t = t || 0.1;
          var r = [
            t * -2,
            -t,
            0,
            0,
            0,
            -t,
            0,
            t,
            0,
            0,
            0,
            t,
            2 * t,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
          ];
          this._loadMatrix(r, e);
        }), (e.prototype.predator = function(t, e) {
          var r = [
            11.224130630493164 * t,
            -4.794486999511719 * t,
            -2.8746118545532227 * t,
            0 * t,
            0.40342438220977783 * t,
            -3.6330697536468506 * t,
            9.193157196044922 * t,
            -2.951810836791992 * t,
            0 * t,
            -1.316135048866272 * t,
            -3.2184197902679443 * t,
            -4.2375030517578125 * t,
            7.476448059082031 * t,
            0 * t,
            0.8044459223747253 * t,
            0,
            0,
            0,
            1,
            0,
          ];
          this._loadMatrix(r, e);
        }), (e.prototype.lsd = function(t) {
          var e = [
            2,
            -0.4,
            0.5,
            0,
            0,
            -0.5,
            2,
            -0.4,
            0,
            0,
            -0.4,
            -0.5,
            3,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
          ];
          this._loadMatrix(e, t);
        }), (e.prototype.reset = function() {
          var t = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0];
          this._loadMatrix(t, !1);
        }), a(e, [
          {
            key: 'matrix',
            get() {
              return this.uniforms.m;
            },
            set(t) {
              this.uniforms.m = t;
            },
          },
        ]), e;
      })(l.Filter));
    (e.default = h), (h.prototype.grayscale = h.prototype.greyscale);
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      if (t && t.__esModule) { return t; }
      var e = {};
      if (t != null) { for (var r in t) { Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); } }
      return (e.default = t), e;
    }
    function i(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    function o(t, e) {
      if (!t) {
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      }
      return !e || (typeof e !== 'object' && typeof e !== 'function') ? t : e;
    }
    function s(t, e) {
      if (typeof e !== 'function' && e !== null) {
        throw new TypeError(
          `Super expression must either be null or a function, not ${typeof e}`,
        );
      }
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {value: t, enumerable: !1, writable: !0, configurable: !0},
      })), e &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(t, e)
          : (t.__proto__ = e));
    }
    e.__esModule = !0;
    var a = r(11),
      u = n(a),
      l = (r(87), (function(t) {
        function e() {
          i(this, e);
          var r = o(
            this,
            t.call(
              this,
              'attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}',
              'varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n   gl_FragColor = texture2D(uSampler, vTextureCoord);\n}\n',
            ),
          );
          return (r.glShaderKey = 'void'), r;
        }
        return s(e, t), e;
      })(u.Filter));
    e.default = l;
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    e.__esModule = !0;
    var i = r(156);
    Object.defineProperty(e, 'webgl', {
      enumerable: !0,
      get() {
        return n(i).default;
      },
    });
    var o = r(159);
    Object.defineProperty(e, 'canvas', {
      enumerable: !0,
      get() {
        return n(o).default;
      },
    });
    var s = r(157);
    Object.defineProperty(e, 'BasePrepare', {
      enumerable: !0,
      get() {
        return n(s).default;
      },
    });
    var a = r(158);
    Object.defineProperty(e, 'CountLimiter', {
      enumerable: !0,
      get() {
        return n(a).default;
      },
    });
    var u = r(160);
    Object.defineProperty(e, 'TimeLimiter', {
      enumerable: !0,
      get() {
        return n(u).default;
      },
    });
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i(t) {
      if (t && t.__esModule) { return t; }
      var e = {};
      if (t != null) {
        for (var r in t) { Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); }
      }
      return (e.default = t), e;
    }
    function o(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    function s(t, e) {
      if (!t) {
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      }
      return !e || (typeof e !== 'object' && typeof e !== 'function') ? t : e;
    }
    function a(t, e) {
      if (typeof e !== 'function' && e !== null) {
        throw new TypeError(
          `Super expression must either be null or a function, not ${typeof e}`,
        );
      }
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {value: t, enumerable: !1, writable: !0, configurable: !0},
      })), e &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(t, e)
          : (t.__proto__ = e));
    }
    function u(t, e) {
      return (
        e instanceof f.BaseTexture &&
        (e._glTextures[t.CONTEXT_UID] || t.textureManager.updateTexture(e), !0)
      );
    }
    function l(t, e) {
      return (
        e instanceof f.Graphics &&
        ((e.dirty ||
          e.clearDirty ||
          !e._webGL[t.plugins.graphics.CONTEXT_UID]) &&
          t.plugins.graphics.updateGraphics(e), !0)
      );
    }
    function h(t, e) {
      if (t instanceof f.BaseTexture) { return e.indexOf(t) === -1 && e.push(t), !0; }
      if (t._texture && t._texture instanceof f.Texture) {
        var r = t._texture.baseTexture;
        return e.indexOf(r) === -1 && e.push(r), !0;
      }
      return !1;
    }
    function c(t, e) {
      return t instanceof f.Graphics && (e.push(t), !0);
    }
    e.__esModule = !0;
    var d = r(11),
      f = i(d),
      p = r(157),
      v = n(p),
      y = (function(t) {
        function e(r) {
          o(this, e);
          var n = s(this, t.call(this, r));
          return (n.uploadHookHelper = n.renderer), n
            .register(h, u)
            .register(c, l), n;
        }
        return a(e, t), e;
      })(v.default);
    (e.default = y), f.WebGLRenderer.registerPlugin('prepare', y);
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i(t) {
      if (t && t.__esModule) { return t; }
      var e = {};
      if (t != null) {
        for (var r in t) { Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); }
      }
      return (e.default = t), e;
    }
    function o(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    function s(t, e) {
      return e instanceof c.Text && (e.updateText(!0), !0);
    }
    function a(t, e) {
      if (e instanceof c.TextStyle) {
        var r = c.Text.getFontStyle(e);
        return c.Text.fontPropertiesCache[r] ||
          c.Text.calculateFontProperties(r), !0;
      }
      return !1;
    }
    function u(t, e) {
      if (t instanceof c.Text) {
        e.indexOf(t.style) === -1 && e.push(t.style), e.indexOf(t) === -1 &&
          e.push(t);
        var r = t._texture.baseTexture;
        return e.indexOf(r) === -1 && e.push(r), !0;
      }
      return !1;
    }
    function l(t, e) {
      return t instanceof c.TextStyle && (e.indexOf(t) === -1 && e.push(t), !0);
    }
    e.__esModule = !0;
    var h = r(11), c = i(h), d = r(158), f = n(d), p = c.ticker.shared;
    c.settings.UPLOADS_PER_FRAME = 4;
    var v = (function() {
      function t(e) {
        var r = this;
        o(this, t), (this.limiter = new f.default(
          c.settings.UPLOADS_PER_FRAME,
        )), (this.renderer = e), (this.uploadHookHelper = null), (this.queue = []), (this.addHooks = []), (this.uploadHooks = []), (this.completes = []), (this.ticking = !1), (this.delayedTick = function() {
          r.queue && r.prepareItems();
        }), this.register(u, s), this.register(l, a);
      }
      return (t.prototype.upload = function(t, e) {
        typeof t === 'function' && ((e = t), (t = null)), t && this.add(t), this
          .queue.length
          ? (e && this.completes.push(e), this.ticking ||
              ((this.ticking = !0), p.addOnce(this.tick, this)))
          : e && e();
      }), (t.prototype.tick = function() {
        setTimeout(this.delayedTick, 0);
      }), (t.prototype.prepareItems = function() {
        for (
          this.limiter.beginFrame();
          this.queue.length && this.limiter.allowedToUpload();

        ) {
          for (
            var t = this.queue[0], e = !1, r = 0, n = this.uploadHooks.length;
            r < n;
            r++
          ) {
            if (this.uploadHooks[r](this.uploadHookHelper, t)) {
              this.queue.shift(), (e = !0);
              break;
            }
          }
          e || this.queue.shift();
        }
        if (this.queue.length) { p.addOnce(this.tick, this); } else {
          this.ticking = !1;
          var i = this.completes.slice(0);
          this.completes.length = 0;
          for (var o = 0, s = i.length; o < s; o++) { i[o](); }
        }
      }), (t.prototype.register = function(t, e) {
        return t && this.addHooks.push(t), e && this.uploadHooks.push(e), this;
      }), (t.prototype.add = function(t) {
        for (
          var e = 0, r = this.addHooks.length;
          e < r && !this.addHooks[e](t, this.queue);
          e++
        ) { }
        if (t instanceof c.Container) {
          for (var n = t.children.length - 1; n >= 0; n--) { this.add(t.children[n]); }
        }
        return this;
      }), (t.prototype.destroy = function() {
        this.ticking &&
          p.remove(
            this.tick,
            this,
          ), (this.ticking = !1), (this.addHooks = null), (this.uploadHooks = null), (this.renderer = null), (this.completes = null), (this.queue = null), (this.limiter = null), (this.uploadHookHelper = null);
      }), t;
    })();
    e.default = v;
  },
  function(t, e) {
    'use strict';
    function r(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    e.__esModule = !0;
    var n = (function() {
      function t(e) {
        r(this, t), (this.maxItemsPerFrame = e), (this.itemsLeft = 0);
      }
      return (t.prototype.beginFrame = function() {
        this.itemsLeft = this.maxItemsPerFrame;
      }), (t.prototype.allowedToUpload = function() {
        return this.itemsLeft-- > 0;
      }), t;
    })();
    e.default = n;
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i(t) {
      if (t && t.__esModule) { return t; }
      var e = {};
      if (t != null) {
        for (var r in t) { Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); }
      }
      return (e.default = t), e;
    }
    function o(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    function s(t, e) {
      if (!t) {
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      }
      return !e || (typeof e !== 'object' && typeof e !== 'function') ? t : e;
    }
    function a(t, e) {
      if (typeof e !== 'function' && e !== null) {
        throw new TypeError(
          `Super expression must either be null or a function, not ${typeof e}`,
        );
      }
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {value: t, enumerable: !1, writable: !0, configurable: !0},
      })), e &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(t, e)
          : (t.__proto__ = e));
    }
    function u(t, e) {
      if (e instanceof c.BaseTexture) {
        var r = e.source,
          n = r.width === 0
            ? t.canvas.width
            : Math.min(t.canvas.width, r.width),
          i = r.height === 0
            ? t.canvas.height
            : Math.min(t.canvas.height, r.height);
        return t.ctx.drawImage(
          r,
          0,
          0,
          n,
          i,
          0,
          0,
          t.canvas.width,
          t.canvas.height,
        ), !0;
      }
      return !1;
    }
    function l(t, e) {
      if (t instanceof c.BaseTexture) { return e.indexOf(t) === -1 && e.push(t), !0; }
      if (t._texture && t._texture instanceof c.Texture) {
        var r = t._texture.baseTexture;
        return e.indexOf(r) === -1 && e.push(r), !0;
      }
      return !1;
    }
    e.__esModule = !0;
    var h = r(11),
      c = i(h),
      d = r(157),
      f = n(d),
      p = 16,
      v = (function(t) {
        function e(r) {
          o(this, e);
          var n = s(this, t.call(this, r));
          return (n.uploadHookHelper = n), (n.canvas = document.createElement(
            'canvas',
          )), (n.canvas.width = p), (n.canvas.height = p), (n.ctx = n.canvas.getContext(
            '2d',
          )), n.register(l, u), n;
        }
        return a(e, t), (e.prototype.destroy = function() {
          t.prototype.destroy.call(
            this,
          ), (this.ctx = null), (this.canvas = null);
        }), e;
      })(f.default);
    (e.default = v), c.CanvasRenderer.registerPlugin('prepare', v);
  },
  function(t, e) {
    'use strict';
    function r(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    e.__esModule = !0;
    var n = (function() {
      function t(e) {
        r(this, t), (this.maxMilliseconds = e), (this.frameStart = 0);
      }
      return (t.prototype.beginFrame = function() {
        this.frameStart = Date.now();
      }), (t.prototype.allowedToUpload = function() {
        return Date.now() - this.frameStart < this.maxMilliseconds;
      }), t;
    })();
    e.default = n;
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    e.__esModule = !0;
    var i = r(162);
    Object.defineProperty(e, 'Loader', {
      enumerable: !0,
      get() {
        return n(i).default;
      },
    });
    var o = r(173);
    Object.defineProperty(e, 'bitmapFontParser', {
      enumerable: !0,
      get() {
        return n(o).default;
      },
    }), Object.defineProperty(e, 'parseBitmapFontData', {
      enumerable: !0,
      get() {
        return o.parse;
      },
    });
    var s = r(172);
    Object.defineProperty(e, 'spritesheetParser', {
      enumerable: !0,
      get() {
        return n(s).default;
      },
    });
    var a = r(171);
    Object.defineProperty(e, 'textureParser', {
      enumerable: !0,
      get() {
        return n(a).default;
      },
    });
    var u = r(163);
    Object.defineProperty(e, 'Resource', {
      enumerable: !0,
      get() {
        return u.Resource;
      },
    });
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    function o(t, e) {
      if (!t) {
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      }
      return !e || (typeof e !== 'object' && typeof e !== 'function') ? t : e;
    }
    function s(t, e) {
      if (typeof e !== 'function' && e !== null) {
        throw new TypeError(
          `Super expression must either be null or a function, not ${typeof e}`,
        );
      }
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {value: t, enumerable: !1, writable: !0, configurable: !0},
      })), e &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(t, e)
          : (t.__proto__ = e));
    }
    e.__esModule = !0;
    var a = r(163),
      u = n(a),
      l = r(170),
      h = r(42),
      c = n(h),
      d = r(171),
      f = n(d),
      p = r(172),
      v = n(p),
      y = r(173),
      g = n(y),
      m = (function(t) {
        function e(r, n) {
          i(this, e);
          var s = o(this, t.call(this, r, n));
          c.default.call(s);
          for (var a = 0; a < e._pixiMiddleware.length; ++a) { s.use(e._pixiMiddleware[a]()); }
          return s.onStart.add(t => {
            return s.emit('start', t);
          }), s.onProgress.add((t, e) => {
            return s.emit('progress', t, e);
          }), s.onError.add((t, e, r) => {
            return s.emit('error', t, e, r);
          }), s.onLoad.add((t, e) => {
            return s.emit('load', t, e);
          }), s.onComplete.add((t, e) => {
            return s.emit('complete', t, e);
          }), s;
        }
        return s(e, t), (e.addPixiMiddleware = function(t) {
          e._pixiMiddleware.push(t);
        }), e;
      })(u.default);
    e.default = m;
    for (var b in c.default.prototype) { m.prototype[b] = c.default.prototype[b]; }
    m._pixiMiddleware = [
      l.blobMiddlewareFactory,
      f.default,
      v.default,
      g.default,
    ];
    var x = u.default.Resource;
    x.setExtensionXhrType('fnt', x.XHR_RESPONSE_TYPE.DOCUMENT);
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      if (t && t.__esModule) { return t; }
      var e = {};
      if (t != null) {
        for (var r in t) { Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); }
      }
      return (e.default = t), e;
    }
    function i(t) {
      return t && t.__esModule ? t : {default: t};
    }
    e.__esModule = !0;
    var o = r(164),
      s = i(o),
      a = r(168),
      u = i(a),
      l = r(167),
      h = n(l),
      c = r(169),
      d = n(c);
    (s.default.Resource =
      u.default), (s.default.async = h), (s.default.base64 = d), (t.exports =
      s.default), (e.default = s.default);
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      if (t && t.__esModule) { return t; }
      var e = {};
      if (t != null) {
        for (var r in t) { Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); }
      }
      return (e.default = t), e;
    }
    function i(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function o(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    e.__esModule = !0;
    var s = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
      ? function(t) {
        return typeof t;
      }
      : function(t) {
        return t &&
            typeof Symbol === 'function' &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? 'symbol'
            : typeof t;
      },
      a = r(165),
      u = i(a),
      l = r(166),
      h = i(l),
      c = r(167),
      d = n(c),
      f = r(168),
      p = i(f),
      v = 100,
      y = /(#[\w-]+)?$/,
      g = (function() {
        function t() {
          var e = this,
            r = arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : '',
            n = arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 10;
          o(
            this,
            t,
          ), (this.baseUrl = r), (this.progress = 0), (this.loading = !1), (this.defaultQueryString =
            ''), (this._beforeMiddleware = []), (this._afterMiddleware = []), (this._resourcesParsing = []), (this._boundLoadResource = function(
            t,
            r,
          ) {
              return e._loadResource(t, r);
            }), (this._queue = d.queue(
            this._boundLoadResource,
            n,
          )), this._queue.pause(), (this.resources = {}), (this.onProgress = new u.default()), (this.onError = new u.default()), (this.onLoad = new u.default()), (this.onStart = new u.default()), (this.onComplete = new u.default());
        }
        return (t.prototype.add = function(t, e, r, n) {
          if (Array.isArray(t)) {
            for (var i = 0; i < t.length; ++i) { this.add(t[i]); }
            return this;
          }
          if (
            ((typeof t === 'undefined' ? 'undefined' : s(t)) === 'object' &&
              ((n = e || t.callback || t.onComplete), (r = t), (e = t.url), (t =
                t.name || t.key || t.url)), typeof e !== 'string' &&
              ((n = r), (r = e), (e = t)), typeof e !== 'string')
          ) { throw new Error('No url passed to add resource to loader.'); }
          if (
            (typeof r === 'function' && ((n = r), (r = null)), this.loading &&
              (!r || !r.parentResource))
          ) {
            throw new Error(
              'Cannot add resources while the loader is running.',
            );
          }
          if (this.resources[t]) { throw new Error(`Resource named "${t}" already exists.`); }
          if (
            ((e = this._prepareUrl(e)), (this.resources[t] = new p.default(
              t,
              e,
              r,
            )), typeof n === 'function' &&
              this.resources[t].onAfterMiddleware.once(n), this.loading)
          ) {
            for (
              var o = r.parentResource, a = [], u = 0;
              u < o.children.length;
              ++u
            ) { o.children[u].isComplete || a.push(o.children[u]); }
            var l = o.progressChunk * (a.length + 1), h = l / (a.length + 2);
            o.children.push(this.resources[t]), (o.progressChunk = h);
            for (var c = 0; c < a.length; ++c) { a[c].progressChunk = h; }
            this.resources[t].progressChunk = h;
          }
          return this._queue.push(this.resources[t]), this;
        }), (t.prototype.pre = function(t) {
          return this._beforeMiddleware.push(t), this;
        }), (t.prototype.use = function(t) {
          return this._afterMiddleware.push(t), this;
        }), (t.prototype.reset = function() {
          (this.progress = 0), (this.loading = !1), this._queue.kill(), this._queue.pause();
          for (var t in this.resources) {
            var e = this.resources[t];
            e._onLoadBinding && e._onLoadBinding.detach(), e.isLoading &&
              e.abort();
          }
          return (this.resources = {}), this;
        }), (t.prototype.load = function(t) {
          if ((typeof t === 'function' && this.onComplete.once(t), this.loading)) { return this; }
          for (
            var e = 100 / this._queue._tasks.length, r = 0;
            r < this._queue._tasks.length;
            ++r
          ) { this._queue._tasks[r].data.progressChunk = e; }
          return (this.loading = !0), this.onStart.dispatch(
            this,
          ), this._queue.resume(), this;
        }), (t.prototype._prepareUrl = function(t) {
          var e = (0, h.default)(t, {strictMode: !0}), r = void 0;
          if (
            ((r = e.protocol || !e.path || t.indexOf('//') === 0
              ? t
              : this.baseUrl.length &&
                  this.baseUrl.lastIndexOf('/') !== this.baseUrl.length - 1 &&
                  t.charAt(0) !== '/'
                  ? `${this.baseUrl}/${t}`
                  : this.baseUrl + t), this.defaultQueryString)
          ) {
            var n = y.exec(r)[0];
            (r = r.substr(0, r.length - n.length)), (r += r.indexOf('?') !== -1
              ? `&${this.defaultQueryString}`
              : `?${this.defaultQueryString}`), (r += n);
          }
          return r;
        }), (t.prototype._loadResource = function(t, e) {
          var r = this;
          (t._dequeue = e), d.eachSeries(
            this._beforeMiddleware,
            (e, n) => {
              e.call(r, t, () => {
                n(t.isComplete ? {} : null);
              });
            },
            () => {
              t.isComplete
                ? r._onLoad(t)
                : ((t._onLoadBinding = t.onComplete.once(
                    r._onLoad,
                    r,
                  )), t.load());
            },
          );
        }), (t.prototype._onComplete = function() {
          (this.loading = !1), this.onComplete.dispatch(this, this.resources);
        }), (t.prototype._onLoad = function(t) {
          var e = this;
          (t._onLoadBinding = null), t._dequeue(), this._resourcesParsing.push(
            t,
          ), d.eachSeries(
            this._afterMiddleware,
            (r, n) => {
              r.call(e, t, n);
            },
            () => {
              t.onAfterMiddleware.dispatch(t), (e.progress +=
                t.progressChunk), e.onProgress.dispatch(e, t), t.error
                ? e.onError.dispatch(t.error, e, t)
                : e.onLoad.dispatch(e, t), e._resourcesParsing.splice(
                e._resourcesParsing.indexOf(t),
                1,
              ), e._queue.idle() &&
                e._resourcesParsing.length === 0 &&
                ((e.progress = v), e._onComplete());
            },
          );
        }), t;
      })();
    e.default = g;
  },
  function(t, e) {
    'use strict';
    function r(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    function n(t, e) {
      return t._head
        ? ((t._tail._next = e), (e._prev = t._tail), (t._tail = e))
        : ((t._head = e), (t._tail = e)), (e._owner = t), e;
    }
    Object.defineProperty(e, '__esModule', {value: !0});
    var i = (function() {
        function t(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1), (n.configurable = !0), 'value' in
            n && (n.writable = !0), Object.defineProperty(t, n.key, n);
          }
        }
        return function(e, r, n) {
          return r && t(e.prototype, r), n && t(e, n), e;
        };
      })(),
      o = (function() {
        function t(e, n, i) {
          void 0 === n && (n = !1), r(
            this,
            t,
          ), (this._fn = e), (this._once = n), (this._thisArg = i), (this._next = this._prev = this._owner = null);
        }
        return i(t, [
          {
            key: 'detach',
            value() {
              return this._owner !== null && (this._owner.detach(this), !0);
            },
          },
        ]), t;
      })(),
      s = (function() {
        function t() {
          r(this, t), (this._head = this._tail = void 0);
        }
        return i(t, [
          {
            key: 'handlers',
            value() {
              var t =
                !(arguments.length <= 0 || void 0 === arguments[0]) &&
                arguments[0],
                e = this._head;
              if (t) { return Boolean(e); }
              for (var r = []; e;) { r.push(e), (e = e._next); }
              return r;
            },
          },
          {
            key: 'has',
            value(t) {
              if (!(t instanceof o)) {
                throw new Error(
                  'MiniSignal#has(): First arg must be a MiniSignalBinding object.',
                );
              }
              return t._owner === this;
            },
          },
          {
            key: 'dispatch',
            value() {
              var t = this._head;
              if (!t) { return !1; }
              for (; t;) {
                t._once && this.detach(t), t._fn.apply(
                  t._thisArg,
                  arguments,
                ), (t = t._next);
              }
              return !0;
            },
          },
          {
            key: 'add',
            value(t) {
              var e = arguments.length <= 1 || void 0 === arguments[1]
                ? null
                : arguments[1];
              if (typeof t !== 'function') {
                throw new Error(
                  'MiniSignal#add(): First arg must be a Function.',
                );
              }
              return n(this, new o(t, !1, e));
            },
          },
          {
            key: 'once',
            value(t) {
              var e = arguments.length <= 1 || void 0 === arguments[1]
                ? null
                : arguments[1];
              if (typeof t !== 'function') {
                throw new Error(
                  'MiniSignal#once(): First arg must be a Function.',
                );
              }
              return n(this, new o(t, !0, e));
            },
          },
          {
            key: 'detach',
            value(t) {
              if (!(t instanceof o)) {
                throw new Error(
                  'MiniSignal#detach(): First arg must be a MiniSignalBinding object.',
                );
              }
              return t._owner !== this
                ? this
                : (t._prev && (t._prev._next = t._next), t._next &&
                    (t._next._prev = t._prev), t === this._head
                    ? ((this._head = t._next), t._next === null &&
                        (this._tail = null))
                    : t === this._tail &&
                        ((this._tail =
                          t._prev), (this._tail._next = null)), (t._owner = null), this);
            },
          },
          {
            key: 'detachAll',
            value() {
              var t = this._head;
              if (!t) { return this; }
              for (this._head = this._tail = null; t;) { (t._owner = null), (t = t._next); }
              return this;
            },
          },
        ]), t;
      })();
    (s.MiniSignalBinding = o), (e.default = s), (t.exports = e.default);
  },
  function(t, e) {
    'use strict';
    t.exports = function(t, e) {
      e = e || {};
      for (
        var r = {
            key: [
              'source',
              'protocol',
              'authority',
              'userInfo',
              'user',
              'password',
              'host',
              'port',
              'relative',
              'path',
              'directory',
              'file',
              'query',
              'anchor',
            ],
            q: {name: 'queryKey', parser: /(?:^|&)([^&=]*)=?([^&]*)/g},
            parser: {
              strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
              loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
            },
          },
          n = r.parser[e.strictMode ? 'strict' : 'loose'].exec(t),
          i = {},
          o = 14;
        o--;

      ) { i[r.key[o]] = n[o] || ''; }
      return (i[r.q.name] = {}), i[r.key[12]].replace(r.q.parser, (
        t,
        e,
        n,
      ) => {
        e && (i[r.q.name][e] = n);
      }), i;
    };
  },
  function(t, e) {
    'use strict';
    function r() {}
    function n(t, e, r) {
      var n = 0, i = t.length;
      !(function o(s) {
        return s || n === i ? void (r && r(s)) : void e(t[n++], o);
      })();
    }
    function i(t) {
      return function() {
        if (t === null) { throw new Error('Callback was already called.'); }
        var e = t;
        (t = null), e.apply(this, arguments);
      };
    }
    function o(t, e) {
      function n(t, e, n) {
        if (n != null && typeof n !== 'function') { throw new Error('task callback must be a function'); }
        if (((a.started = !0), t == null && a.idle())) {
          return void setTimeout(() => {
            return a.drain();
          }, 1);
        }
        var i = {data: t, callback: typeof n === 'function' ? n : r};
        e ? a._tasks.unshift(i) : a._tasks.push(i), setTimeout(() => {
          return a.process();
        }, 1);
      }
      function o(t) {
        return function() {
          (s -= 1), t.callback(...arguments), arguments[0] != null &&
            a.error(arguments[0], t.data), s <= a.concurrency - a.buffer &&
            a.unsaturated(), a.idle() && a.drain(), a.process();
        };
      }
      if (e == null) { e = 1; } else if (e === 0) { throw new Error('Concurrency must not be zero'); }
      var s = 0,
        a = {
          _tasks: [],
          concurrency: e,
          saturated: r,
          unsaturated: r,
          buffer: e / 4,
          empty: r,
          drain: r,
          error: r,
          started: !1,
          paused: !1,
          push(t, e) {
            n(t, !1, e);
          },
          kill() {
            (s = 0), (a.drain = r), (a.started = !1), (a._tasks = []);
          },
          unshift(t, e) {
            n(t, !0, e);
          },
          process() {
            for (; !a.paused && s < a.concurrency && a._tasks.length;) {
              var e = a._tasks.shift();
              a._tasks.length === 0 && a.empty(), (s += 1), s ===
                a.concurrency && a.saturated(), t(e.data, i(o(e)));
            }
          },
          length() {
            return a._tasks.length;
          },
          running() {
            return s;
          },
          idle() {
            return a._tasks.length + s === 0;
          },
          pause() {
            a.paused !== !0 && (a.paused = !0);
          },
          resume() {
            if (a.paused !== !1) {
              a.paused = !1;
              for (var t = 1; t <= a.concurrency; t++) { a.process(); }
            }
          },
        };
      return a;
    }
    (e.__esModule = !0), (e.eachSeries = n), (e.queue = o);
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    function o() {}
    function s(t, e, r) {
      e && e.indexOf('.') === 0 && (e = e.substring(1)), e && (t[e] = r);
    }
    function a(t) {
      return t.toString().replace('object ', '');
    }
    e.__esModule = !0;
    var u = (function() {
        function t(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1), (n.configurable = !0), 'value' in
            n && (n.writable = !0), Object.defineProperty(t, n.key, n);
          }
        }
        return function(e, r, n) {
          return r && t(e.prototype, r), n && t(e, n), e;
        };
      })(),
      l = r(166),
      h = n(l),
      c = r(165),
      d = n(c),
      f = !(!window.XDomainRequest ||
        'withCredentials' in new XMLHttpRequest()),
      p = null,
      v = 0,
      y = 200,
      g = 204,
      m = (function() {
        function t(e, r, n) {
          if ((i(this, t), typeof e !== 'string' || typeof r !== 'string')) {
            throw new Error(
              'Both name and url are required for constructing a resource.',
            );
          }
          (n = n || {}), (this._flags = 0), this._setFlag(
            t.STATUS_FLAGS.DATA_URL,
            r.indexOf('data:') === 0,
          ), (this.name = e), (this.url = r), (this.extension = this._getExtension()), (this.data = null), (this.crossOrigin = n.crossOrigin ===
            !0
            ? 'anonymous'
            : n.crossOrigin), (this.loadType =
            n.loadType || this._determineLoadType()), (this.xhrType =
            n.xhrType), (this.metadata = n.metadata || {}), (this.error = null), (this.xhr = null), (this.children = []), (this.type =
            t.TYPE.UNKNOWN), (this.progressChunk = 0), (this._dequeue = o), (this._onLoadBinding = null), (this._boundComplete = this.complete.bind(
            this,
          )), (this._boundOnError = this._onError.bind(
            this,
          )), (this._boundOnProgress = this._onProgress.bind(
            this,
          )), (this._boundXhrOnError = this._xhrOnError.bind(
            this,
          )), (this._boundXhrOnAbort = this._xhrOnAbort.bind(
            this,
          )), (this._boundXhrOnLoad = this._xhrOnLoad.bind(
            this,
          )), (this._boundXdrOnTimeout = this._xdrOnTimeout.bind(
            this,
          )), (this.onStart = new d.default()), (this.onProgress = new d.default()), (this.onComplete = new d.default()), (this.onAfterMiddleware = new d.default());
        }
        return (t.setExtensionLoadType = function(e, r) {
          s(t._loadTypeMap, e, r);
        }), (t.setExtensionXhrType = function(e, r) {
          s(t._xhrTypeMap, e, r);
        }), (t.prototype.complete = function() {
          if (
            (this.data &&
              this.data.removeEventListener &&
              (this.data.removeEventListener(
                'error',
                this._boundOnError,
                !1,
              ), this.data.removeEventListener(
                'load',
                this._boundComplete,
                !1,
              ), this.data.removeEventListener(
                'progress',
                this._boundOnProgress,
                !1,
              ), this.data.removeEventListener(
                'canplaythrough',
                this._boundComplete,
                !1,
              )), this.xhr &&
              (this.xhr.removeEventListener
                ? (this.xhr.removeEventListener(
                    'error',
                    this._boundXhrOnError,
                    !1,
                  ), this.xhr.removeEventListener(
                    'abort',
                    this._boundXhrOnAbort,
                    !1,
                  ), this.xhr.removeEventListener(
                    'progress',
                    this._boundOnProgress,
                    !1,
                  ), this.xhr.removeEventListener(
                    'load',
                    this._boundXhrOnLoad,
                    !1,
                  ))
                : ((this.xhr.onerror = null), (this.xhr.ontimeout = null), (this.xhr.onprogress = null), (this.xhr.onload = null))), this
              .isComplete)
          ) {
            throw new Error(
              'Complete called again for an already completed resource.',
            );
          }
          this._setFlag(t.STATUS_FLAGS.COMPLETE, !0), this._setFlag(
            t.STATUS_FLAGS.LOADING,
            !1,
          ), this.onComplete.dispatch(this);
        }), (t.prototype.abort = function(e) {
          if (!this.error) {
            if (((this.error = new Error(e)), this.xhr)) { this.xhr.abort(); } else if (this.xdr) { this.xdr.abort(); } else if (this.data) {
              if (this.data.src) { this.data.src = t.EMPTY_GIF; } else { for (; this.data.firstChild;) { this.data.removeChild(this.data.firstChild); } }
            }
            this.complete();
          }
        }), (t.prototype.load = function(e) {
          var r = this;
          if (!this.isLoading) {
            if (this.isComplete) {
              return void (e &&
                setTimeout(() => {
                  return e(r);
                }, 1));
            }
            switch ((e && this.onComplete.once(e), this._setFlag(
              t.STATUS_FLAGS.LOADING,
              !0,
            ), this.onStart.dispatch(this), (this.crossOrigin !== !1 &&
              typeof this.crossOrigin === 'string') ||
              (this.crossOrigin = this._determineCrossOrigin(this.url)), this
              .loadType)) {
              case t.LOAD_TYPE.IMAGE:
                (this.type = t.TYPE.IMAGE), this._loadElement('image');
                break;
              case t.LOAD_TYPE.AUDIO:
                (this.type = t.TYPE.AUDIO), this._loadSourceElement('audio');
                break;
              case t.LOAD_TYPE.VIDEO:
                (this.type = t.TYPE.VIDEO), this._loadSourceElement('video');
                break;
              case t.LOAD_TYPE.XHR:
              default:
                f && this.crossOrigin ? this._loadXdr() : this._loadXhr();
            }
          }
        }), (t.prototype._hasFlag = function(t) {
          return Boolean(this._flags & t);
        }), (t.prototype._setFlag = function(t, e) {
          this._flags = e ? this._flags | t : this._flags & ~t;
        }), (t.prototype._loadElement = function(t) {
          this.metadata.loadElement
            ? (this.data = this.metadata.loadElement)
            : t === 'image' && typeof window.Image !== 'undefined'
                ? (this.data = new Image())
                : (this.data = document.createElement(t)), this.crossOrigin &&
            (this.data.crossOrigin = this.crossOrigin), this.metadata
            .skipSource ||
            (this.data.src = this.url), this.data.addEventListener(
            'error',
            this._boundOnError,
            !1,
          ), this.data.addEventListener(
            'load',
            this._boundComplete,
            !1,
          ), this.data.addEventListener('progress', this._boundOnProgress, !1);
        }), (t.prototype._loadSourceElement = function(t) {
          if (
            (this.metadata.loadElement
              ? (this.data = this.metadata.loadElement)
              : t === 'audio' && typeof window.Audio !== 'undefined'
                  ? (this.data = new Audio())
                  : (this.data = document.createElement(t)), this.data === null)
          ) { return void this.abort(`Unsupported element: ${t}`); }
          if (!this.metadata.skipSource) {
            if (navigator.isCocoonJS) { this.data.src = Array.isArray(this.url) ? this.url[0] : this.url; } else if (Array.isArray(this.url)) {
              for (var e = 0; e < this.url.length; ++e) { this.data.appendChild(this._createSource(t, this.url[e])); }
            } else { this.data.appendChild(this._createSource(t, this.url)); }
          }
          this.data.addEventListener(
            'error',
            this._boundOnError,
            !1,
          ), this.data.addEventListener(
            'load',
            this._boundComplete,
            !1,
          ), this.data.addEventListener(
            'progress',
            this._boundOnProgress,
            !1,
          ), this.data.addEventListener(
            'canplaythrough',
            this._boundComplete,
            !1,
          ), this.data.load();
        }), (t.prototype._loadXhr = function() {
          typeof this.xhrType !== 'string' &&
            (this.xhrType = this._determineXhrType());
          var e = (this.xhr = new XMLHttpRequest());
          e.open('GET', this.url, !0), this.xhrType ===
            t.XHR_RESPONSE_TYPE.JSON ||
            this.xhrType === t.XHR_RESPONSE_TYPE.DOCUMENT
            ? (e.responseType = t.XHR_RESPONSE_TYPE.TEXT)
            : (e.responseType = this.xhrType), e.addEventListener(
            'error',
            this._boundXhrOnError,
            !1,
          ), e.addEventListener(
            'abort',
            this._boundXhrOnAbort,
            !1,
          ), e.addEventListener(
            'progress',
            this._boundOnProgress,
            !1,
          ), e.addEventListener('load', this._boundXhrOnLoad, !1), e.send();
        }), (t.prototype._loadXdr = function() {
          typeof this.xhrType !== 'string' &&
            (this.xhrType = this._determineXhrType());
          var t = (this.xhr = new XDomainRequest());
          (t.timeout = 5e3), (t.onerror = this._boundXhrOnError), (t.ontimeout = this._boundXdrOnTimeout), (t.onprogress = this._boundOnProgress), (t.onload = this._boundXhrOnLoad), t.open(
            'GET',
            this.url,
            !0,
          ), setTimeout(() => {
            return t.send();
          }, 1);
        }), (t.prototype._createSource = function(t, e, r) {
          r || (r = `${t}/${e.substr(e.lastIndexOf('.') + 1)}`);
          var n = document.createElement('source');
          return (n.src = e), (n.type = r), n;
        }), (t.prototype._onError = function(t) {
          this.abort(`Failed to load element using: ${t.target.nodeName}`);
        }), (t.prototype._onProgress = function(t) {
          t &&
            t.lengthComputable &&
            this.onProgress.dispatch(this, t.loaded / t.total);
        }), (t.prototype._xhrOnError = function() {
          var t = this.xhr;
          this.abort(
            `${a(t)
              } Request failed. Status: ${
              t.status
              }, text: "${
              t.statusText
              }"`,
          );
        }), (t.prototype._xhrOnAbort = function() {
          this.abort(`${a(this.xhr)} Request was aborted by the user.`);
        }), (t.prototype._xdrOnTimeout = function() {
          this.abort(`${a(this.xhr)} Request timed out.`);
        }), (t.prototype._xhrOnLoad = function() {
          var e = this.xhr, r = typeof e.status === 'undefined' ? e.status : y;
          if (!(r === y || r === g || (r === v && e.responseText.length > 0))) {
            return void this.abort(
              `[${e.status}] ${e.statusText}: ${e.responseURL}`,
            );
          }
          if (this.xhrType === t.XHR_RESPONSE_TYPE.TEXT) { (this.data = e.responseText), (this.type = t.TYPE.TEXT); } else if (this.xhrType === t.XHR_RESPONSE_TYPE.JSON) {
            try {
              (this.data = JSON.parse(e.responseText)), (this.type =
                t.TYPE.JSON);
            } catch (t) {
              return void this.abort(`Error trying to parse loaded json: ${t}`);
            }
          } else if (this.xhrType === t.XHR_RESPONSE_TYPE.DOCUMENT) {
            try {
              if (window.DOMParser) {
                var n = new DOMParser();
                this.data = n.parseFromString(e.responseText, 'text/xml');
              } else {
                var i = document.createElement('div');
                (i.innerHTML = e.responseText), (this.data = i);
              }
              this.type = t.TYPE.XML;
            } catch (t) {
              return void this.abort(`Error trying to parse loaded xml: ${t}`);
            }
          } else { this.data = e.response || e.responseText; }
          this.complete();
        }), (t.prototype._determineCrossOrigin = function(t, e) {
          if (t.indexOf('data:') === 0) { return ''; }
          (e = e || window.location), p ||
            (p = document.createElement(
              'a',
            )), (p.href = t), (t = (0, h.default)(p.href, {strictMode: !0}));
          var r = (!t.port && e.port === '') || t.port === e.port,
            n = t.protocol ? `${t.protocol}:` : '';
          return t.host === e.hostname && r && n === e.protocol
            ? ''
            : 'anonymous';
        }), (t.prototype._determineXhrType = function() {
          return t._xhrTypeMap[this.extension] || t.XHR_RESPONSE_TYPE.TEXT;
        }), (t.prototype._determineLoadType = function() {
          return t._loadTypeMap[this.extension] || t.LOAD_TYPE.XHR;
        }), (t.prototype._getExtension = function() {
          var t = this.url, e = '';
          if (this.isDataUrl) {
            var r = t.indexOf('/');
            e = t.substring(r + 1, t.indexOf(';', r));
          } else {
            var n = t.indexOf('?');
            n !== -1 && (t = t.substring(0, n)), (e = t.substring(
              t.lastIndexOf('.') + 1,
            ));
          }
          return e.toLowerCase();
        }), (t.prototype._getMimeFromXhrType = function(e) {
          switch (e) {
            case t.XHR_RESPONSE_TYPE.BUFFER:
              return 'application/octet-binary';
            case t.XHR_RESPONSE_TYPE.BLOB:
              return 'application/blob';
            case t.XHR_RESPONSE_TYPE.DOCUMENT:
              return 'application/xml';
            case t.XHR_RESPONSE_TYPE.JSON:
              return 'application/json';
            case t.XHR_RESPONSE_TYPE.DEFAULT:
            case t.XHR_RESPONSE_TYPE.TEXT:
            default:
              return 'text/plain';
          }
        }), u(t, [
          {
            key: 'isDataUrl',
            get() {
              return this._hasFlag(t.STATUS_FLAGS.DATA_URL);
            },
          },
          {
            key: 'isComplete',
            get() {
              return this._hasFlag(t.STATUS_FLAGS.COMPLETE);
            },
          },
          {
            key: 'isLoading',
            get() {
              return this._hasFlag(t.STATUS_FLAGS.LOADING);
            },
          },
        ]), t;
      })();
    (e.default = m), (m.STATUS_FLAGS = {
      NONE: 0,
      DATA_URL: 1,
      COMPLETE: 2,
      LOADING: 4,
    }), (m.TYPE = {
      UNKNOWN: 0,
      JSON: 1,
      XML: 2,
      IMAGE: 3,
      AUDIO: 4,
      VIDEO: 5,
      TEXT: 6,
    }), (m.LOAD_TYPE = {
      XHR: 1,
      IMAGE: 2,
      AUDIO: 3,
      VIDEO: 4,
    }), (m.XHR_RESPONSE_TYPE = {
      DEFAULT: 'text',
      BUFFER: 'arraybuffer',
      BLOB: 'blob',
      DOCUMENT: 'document',
      JSON: 'json',
      TEXT: 'text',
    }), (m._loadTypeMap = {
      'gif': m.LOAD_TYPE.IMAGE,
      'png': m.LOAD_TYPE.IMAGE,
      'bmp': m.LOAD_TYPE.IMAGE,
      'jpg': m.LOAD_TYPE.IMAGE,
      'jpeg': m.LOAD_TYPE.IMAGE,
      'tif': m.LOAD_TYPE.IMAGE,
      'tiff': m.LOAD_TYPE.IMAGE,
      'webp': m.LOAD_TYPE.IMAGE,
      'tga': m.LOAD_TYPE.IMAGE,
      'svg': m.LOAD_TYPE.IMAGE,
      'svg+xml': m.LOAD_TYPE.IMAGE,
      'mp3': m.LOAD_TYPE.AUDIO,
      'ogg': m.LOAD_TYPE.AUDIO,
      'wav': m.LOAD_TYPE.AUDIO,
      'mp4': m.LOAD_TYPE.VIDEO,
      'webm': m.LOAD_TYPE.VIDEO,
    }), (m._xhrTypeMap = {
      xhtml: m.XHR_RESPONSE_TYPE.DOCUMENT,
      html: m.XHR_RESPONSE_TYPE.DOCUMENT,
      htm: m.XHR_RESPONSE_TYPE.DOCUMENT,
      xml: m.XHR_RESPONSE_TYPE.DOCUMENT,
      tmx: m.XHR_RESPONSE_TYPE.DOCUMENT,
      svg: m.XHR_RESPONSE_TYPE.DOCUMENT,
      tsx: m.XHR_RESPONSE_TYPE.DOCUMENT,
      gif: m.XHR_RESPONSE_TYPE.BLOB,
      png: m.XHR_RESPONSE_TYPE.BLOB,
      bmp: m.XHR_RESPONSE_TYPE.BLOB,
      jpg: m.XHR_RESPONSE_TYPE.BLOB,
      jpeg: m.XHR_RESPONSE_TYPE.BLOB,
      tif: m.XHR_RESPONSE_TYPE.BLOB,
      tiff: m.XHR_RESPONSE_TYPE.BLOB,
      webp: m.XHR_RESPONSE_TYPE.BLOB,
      tga: m.XHR_RESPONSE_TYPE.BLOB,
      json: m.XHR_RESPONSE_TYPE.JSON,
      text: m.XHR_RESPONSE_TYPE.TEXT,
      txt: m.XHR_RESPONSE_TYPE.TEXT,
      ttf: m.XHR_RESPONSE_TYPE.BUFFER,
      otf: m.XHR_RESPONSE_TYPE.BUFFER,
    }), (m.EMPTY_GIF =
      'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==');
  },
  function(t, e) {
    'use strict';
    function r(t) {
      for (var e = '', r = 0; r < t.length;) {
        for (var i = [0, 0, 0], o = [0, 0, 0, 0], s = 0; s < i.length; ++s) { r < t.length ? (i[s] = 255 & t.charCodeAt(r++)) : (i[s] = 0); }
        (o[0] = i[0] >> 2), (o[1] = ((3 & i[0]) << 4) | (i[1] >> 4)), (o[2] =
          ((15 & i[1]) << 2) | (i[2] >> 6)), (o[3] = 63 & i[2]);
        var a = r - (t.length - 1);
        switch (a) {
          case 2:
            (o[3] = 64), (o[2] = 64);
            break;
          case 1:
            o[3] = 64;
        }
        for (var u = 0; u < o.length; ++u) { e += n.charAt(o[u]); }
      }
      return e;
    }
    (e.__esModule = !0), (e.encodeBinary = r);
    var n = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i() {
      return function(t, e) {
        if (!t.data) { return void e(); }
        if (t.xhr && t.xhrType === a.default.XHR_RESPONSE_TYPE.BLOB) {
          if (window.Blob && typeof t.data !== 'string') {
            if (t.data.type.indexOf('image') === 0) {
              var r = (function() {
                var r = h.createObjectURL(t.data);
                return (t.blob =
                  t.data), (t.data = new Image()), (t.data.src = r), (t.type =
                  a.default.TYPE.IMAGE), (t.data.onload = function() {
                    h.revokeObjectURL(r), (t.data.onload = null), e();
                  }), {v: void 0};
              })();
              if ((typeof r === 'undefined' ? 'undefined' : o(r)) === 'object') { return r.v; }
            }
          } else {
            var n = t.xhr.getResponseHeader('content-type');
            if (n && n.indexOf('image') === 0) {
              return (t.data = new Image()), (t.data.src =
                `data:${
                n
                };base64,${
                l.default.encodeBinary(t.xhr.responseText)}`), (t.type =
                a.default.TYPE.IMAGE), void (t.data.onload = function() {
                  (t.data.onload = null), e();
                });
            }
          }
        }
        e();
      };
    }
    e.__esModule = !0;
    var o = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
      ? function(t) {
        return typeof t;
      }
      : function(t) {
        return t &&
            typeof Symbol === 'function' &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? 'symbol'
            : typeof t;
      };
    e.blobMiddlewareFactory = i;
    var s = r(168),
      a = n(s),
      u = r(169),
      l = n(u),
      h = window.URL || window.webkitURL;
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      if (t && t.__esModule) { return t; }
      var e = {};
      if (t != null) { for (var r in t) { Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); } }
      return (e.default = t), e;
    }
    (e.__esModule = !0), (e.default = function() {
      return function(t, e) {
        if (t.data && t.type === s.Resource.TYPE.IMAGE) {
          var r = new o.BaseTexture(
            t.data,
            null,
            o.utils.getResolutionOfUrl(t.url),
          );
          (r.imageUrl = t.url), (t.texture = new o.Texture(
            r,
          )), (o.utils.BaseTextureCache[t.name] = r), (o.utils.TextureCache[
            t.name
          ] =
            t.texture), t.name !== t.url &&
            ((o.utils.BaseTextureCache[t.url] = r), (o.utils.TextureCache[
              t.url
            ] =
              t.texture));
        }
        e();
      };
    });
    var i = r(11), o = n(i), s = r(163);
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      if (t && t.__esModule) { return t; }
      var e = {};
      if (t != null) {
        for (var r in t) { Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); }
      }
      return (e.default = t), e;
    }
    function i(t) {
      return t && t.__esModule ? t : {default: t};
    }
    (e.__esModule = !0), (e.default = function() {
      return function(t, e) {
        var r = void 0, n = `${t.name}_image`;
        if (
          !t.data ||
          t.type !== o.Resource.TYPE.JSON ||
          !t.data.frames ||
          this.resources[n]
        ) { return void e(); }
        var i = {
          crossOrigin: t.crossOrigin,
          loadType: o.Resource.LOAD_TYPE.IMAGE,
          metadata: t.metadata.imageMetadata,
          parentResource: t,
        };
        (r = t.isDataUrl
          ? t.data.meta.image
          : `${a.default.dirname(t.url.replace(this.baseUrl, ''))
              }/${
              t.data.meta.image}`), this.add(n, r, i, r => {
                function n(e, r) {
                  for (var n = e; n - e < r && n < u.length;) {
                    var i = u[n], o = a[i].frame;
                    if (o) {
                      var s = null,
                        h = null,
                        d = new l.Rectangle(
                    0,
                    0,
                    a[i].sourceSize.w / f,
                    a[i].sourceSize.h / f,
                  );
                      (s = a[i].rotated
                  ? new l.Rectangle(o.x / f, o.y / f, o.h / f, o.w / f)
                  : new l.Rectangle(o.x / f, o.y / f, o.w / f, o.h / f)), a[i]
                  .trimmed &&
                  (h = new l.Rectangle(
                    a[i].spriteSourceSize.x / f,
                    a[i].spriteSourceSize.y / f,
                    o.w / f,
                    o.h / f,
                  )), (t.textures[i] = new l.Texture(
                  c,
                  s,
                  d,
                  h,
                  a[i].rotated ? 2 : 0,
                )), (l.utils.TextureCache[i] = t.textures[i]);
                    }
                    n++;
                  }
                }
                function i() {
                  return p * h < u.length;
                }
                function o(t) {
                  n(p * h, h), p++, setTimeout(t, 0);
                }
                function s() {
                  o(() => {
                    i() ? s() : e();
                  });
                }
                t.textures = {};
                var a = t.data.frames,
                  u = Object.keys(a),
                  c = r.texture.baseTexture,
                  d = t.data.meta.scale,
                  f = l.utils.getResolutionOfUrl(t.url, null);
                f === null &&
            (f = void 0 !== d
              ? d
              : 1), f !== 1 && ((c.resolution = f), c.update());
                var p = 0;
                u.length <= h ? (n(0, h), e()) : s();
              });
      };
    });
    var o = r(163), s = r(87), a = i(s), u = r(11), l = n(u), h = 1e3;
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      if (t && t.__esModule) { return t; }
      var e = {};
      if (t != null) {
        for (var r in t) { Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); }
      }
      return (e.default = t), e;
    }
    function i(t, e) {
      var r = {},
        n = t.data.getElementsByTagName('info')[0],
        i = t.data.getElementsByTagName('common')[0];
      (r.font = n.getAttribute('face')), (r.size = parseInt(
        n.getAttribute('size'),
        10,
      )), (r.lineHeight = parseInt(
        i.getAttribute('lineHeight'),
        10,
      )), (r.chars = {});
      for (
        var o = t.data.getElementsByTagName('char'), s = 0;
        s < o.length;
        s++
      ) {
        var u = parseInt(o[s].getAttribute('id'), 10),
          h = new a.Rectangle(
            parseInt(o[s].getAttribute('x'), 10) + e.frame.x,
            parseInt(o[s].getAttribute('y'), 10) + e.frame.y,
            parseInt(o[s].getAttribute('width'), 10),
            parseInt(o[s].getAttribute('height'), 10),
          );
        r.chars[u] = {
          xOffset: parseInt(o[s].getAttribute('xoffset'), 10),
          yOffset: parseInt(o[s].getAttribute('yoffset'), 10),
          xAdvance: parseInt(o[s].getAttribute('xadvance'), 10),
          kerning: {},
          texture: new a.Texture(e.baseTexture, h),
        };
      }
      for (
        var c = t.data.getElementsByTagName('kerning'), d = 0;
        d < c.length;
        d++
      ) {
        var f = parseInt(c[d].getAttribute('first'), 10),
          p = parseInt(c[d].getAttribute('second'), 10),
          v = parseInt(c[d].getAttribute('amount'), 10);
        r.chars[p] && (r.chars[p].kerning[f] = v);
      }
      (t.bitmapFont = r), (l.BitmapText.fonts[r.font] = r);
    }
    (e.__esModule = !0), (e.parse = i), (e.default = function() {
      return function(t, e) {
        if (!t.data || t.type !== u.Resource.TYPE.XML) { return void e(); }
        if (
          t.data.getElementsByTagName('page').length === 0 ||
          t.data.getElementsByTagName('info').length === 0 ||
          t.data.getElementsByTagName('info')[0].getAttribute('face') === null
        ) { return void e(); }
        var r = t.isDataUrl ? '' : s.dirname(t.url);
        t.isDataUrl &&
          (r === '.' && (r = ''), this.baseUrl &&
            r &&
            (this.baseUrl.charAt(this.baseUrl.length - 1) === '/' &&
              (r += '/'), (r = r.replace(this.baseUrl, '')))), r &&
          r.charAt(r.length - 1) !== '/' &&
          (r += '/');
        var n = r + t.data.getElementsByTagName('page')[0].getAttribute('file');
        if (a.utils.TextureCache[n]) { i(t, a.utils.TextureCache[n]), e(); } else {
          var o = {
            crossOrigin: t.crossOrigin,
            loadType: u.Resource.LOAD_TYPE.IMAGE,
            metadata: t.metadata.imageMetadata,
            parentResource: t,
          };
          this.add(`${t.name}_image`, n, o, r => {
            i(t, r.texture), e();
          });
        }
      };
    });
    var o = r(87), s = n(o), a = r(11), u = r(163), l = r(134);
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    e.__esModule = !0;
    var i = r(175);
    Object.defineProperty(e, 'accessibleTarget', {
      enumerable: !0,
      get() {
        return n(i).default;
      },
    });
    var o = r(176);
    Object.defineProperty(e, 'AccessibilityManager', {
      enumerable: !0,
      get() {
        return n(o).default;
      },
    });
  },
  function(t, e) {
    'use strict';
    (e.__esModule = !0), (e.default = {
      accessible: !1,
      accessibleTitle: null,
      accessibleHint: null,
      tabIndex: 0,
      _accessibleActive: !1,
      _accessibleDiv: !1,
    });
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i(t) {
      if (t && t.__esModule) { return t; }
      var e = {};
      if (t != null) {
        for (var r in t) { Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); }
      }
      return (e.default = t), e;
    }
    function o(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    e.__esModule = !0;
    var s = r(11), a = i(s), u = r(45), l = n(u), h = r(175), c = n(h);
    Object.assign(a.DisplayObject.prototype, c.default);
    var d = 9,
      f = 100,
      p = 0,
      v = 0,
      y = 2,
      g = 1,
      m = -1e3,
      b = -1e3,
      x = 2,
      _ = (function() {
        function t(e) {
          o(this, t), (!l.default.tablet && !l.default.phone) ||
            navigator.isCocoonJS ||
            this.createTouchHook();
          var r = document.createElement('div');
          (r.style.width = `${f}px`), (r.style.height =
            `${f}px`), (r.style.position = 'absolute'), (r.style.top =
            `${p}px`), (r.style.left =
            `${v
            }px`), (r.style.zIndex = y), (this.div = r), (this.pool = []), (this.renderId = 0), (this.debug = !1), (this.renderer = e), (this.children = []), (this._onKeyDown = this._onKeyDown.bind(
            this,
          )), (this._onMouseMove = this._onMouseMove.bind(
            this,
          )), (this.isActive = !1), (this.isMobileAccessabillity = !1), window.addEventListener(
            'keydown',
            this._onKeyDown,
            !1,
          );
        }
        return (t.prototype.createTouchHook = function() {
          var t = this, e = document.createElement('button');
          (e.style.width = `${g}px`), (e.style.height =
            `${g}px`), (e.style.position = 'absolute'), (e.style.top =
            `${m}px`), (e.style.left =
            `${b}px`), (e.style.zIndex = x), (e.style.backgroundColor =
            '#FF0000'), (e.title =
            'HOOK DIV'), e.addEventListener('focus', () => {
              (t.isMobileAccessabillity = !0), t.activate(), document.body.removeChild(e);
            }), document.body.appendChild(e);
        }), (t.prototype.activate = function() {
          this.isActive ||
            ((this.isActive = !0), window.document.addEventListener(
              'mousemove',
              this._onMouseMove,
              !0,
            ), window.removeEventListener(
              'keydown',
              this._onKeyDown,
              !1,
            ), this.renderer.on('postrender', this.update, this), this.renderer
              .view.parentNode &&
              this.renderer.view.parentNode.appendChild(this.div));
        }), (t.prototype.deactivate = function() {
          this.isActive &&
            !this.isMobileAccessabillity &&
            ((this.isActive = !1), window.document.removeEventListener(
              'mousemove',
              this._onMouseMove,
            ), window.addEventListener(
              'keydown',
              this._onKeyDown,
              !1,
            ), this.renderer.off('postrender', this.update), this.div
              .parentNode && this.div.parentNode.removeChild(this.div));
        }), (t.prototype.updateAccessibleObjects = function(t) {
          if (t.visible) {
            t.accessible &&
              t.interactive &&
              (t._accessibleActive ||
                this.addChild(t), (t.renderId = this.renderId));
            for (var e = t.children, r = e.length - 1; r >= 0; r--) { this.updateAccessibleObjects(e[r]); }
          }
        }), (t.prototype.update = function() {
          if (this.renderer.renderingToScreen) {
            this.updateAccessibleObjects(this.renderer._lastObjectRendered);
            var t = this.renderer.view.getBoundingClientRect(),
              e = t.width / this.renderer.width,
              r = t.height / this.renderer.height,
              n = this.div;
            (n.style.left = `${t.left}px`), (n.style.top =
              `${t.top}px`), (n.style.width =
              `${this.renderer.width}px`), (n.style.height =
              `${this.renderer.height}px`);
            for (var i = 0; i < this.children.length; i++) {
              var o = this.children[i];
              if (o.renderId !== this.renderId) {
                (o._accessibleActive = !1), a.utils.removeItems(
                  this.children,
                  i,
                  1,
                ), this.div.removeChild(o._accessibleDiv), this.pool.push(
                  o._accessibleDiv,
                ), (o._accessibleDiv = null), i--, this.children.length === 0 &&
                  this.deactivate();
              } else {
                n = o._accessibleDiv;
                var s = o.hitArea, u = o.worldTransform;
                o.hitArea
                  ? ((n.style.left =
                      `${(u.tx + s.x * u.a) * e}px`), (n.style.top =
                      `${(u.ty + s.y * u.d) * r}px`), (n.style.width =
                      `${s.width * u.a * e}px`), (n.style.height =
                      `${s.height * u.d * r}px`))
                  : ((s = o.getBounds()), this.capHitArea(s), (n.style.left =
                      `${s.x * e}px`), (n.style.top =
                      `${s.y * r}px`), (n.style.width =
                      `${s.width * e}px`), (n.style.height =
                      `${s.height * r}px`));
              }
            }
            this.renderId++;
          }
        }), (t.prototype.capHitArea = function(t) {
          t.x < 0 && ((t.width += t.x), (t.x = 0)), t.y < 0 &&
            ((t.height += t.y), (t.y = 0)), t.x + t.width >
            this.renderer.width && (t.width = this.renderer.width - t.x), t.y +
            t.height >
            this.renderer.height && (t.height = this.renderer.height - t.y);
        }), (t.prototype.addChild = function(t) {
          var e = this.pool.pop();
          e ||
            ((e = document.createElement('button')), (e.style.width =
              `${f}px`), (e.style.height =
              `${f}px`), (e.style.backgroundColor = this.debug
              ? 'rgba(255,0,0,0.5)'
              : 'transparent'), (e.style.position =
              'absolute'), (e.style.zIndex = y), (e.style.borderStyle =
              'none'), e.addEventListener(
              'click',
              this._onClick.bind(this),
            ), e.addEventListener(
              'focus',
              this._onFocus.bind(this),
            ), e.addEventListener(
              'focusout',
              this._onFocusOut.bind(this),
            )), t.accessibleTitle
            ? (e.title = t.accessibleTitle)
            : t.accessibleTitle ||
                t.accessibleHint ||
                (e.title =
                  `displayObject ${this.tabIndex}`), t.accessibleHint &&
            e.setAttribute(
              'aria-label',
              t.accessibleHint,
            ), (t._accessibleActive = !0), (t._accessibleDiv = e), (e.displayObject = t), this.children.push(
            t,
          ), this.div.appendChild(
            t._accessibleDiv,
          ), (t._accessibleDiv.tabIndex = t.tabIndex);
        }), (t.prototype._onClick = function(t) {
          var e = this.renderer.plugins.interaction;
          e.dispatchEvent(t.target.displayObject, 'click', e.eventData);
        }), (t.prototype._onFocus = function(t) {
          var e = this.renderer.plugins.interaction;
          e.dispatchEvent(t.target.displayObject, 'mouseover', e.eventData);
        }), (t.prototype._onFocusOut = function(t) {
          var e = this.renderer.plugins.interaction;
          e.dispatchEvent(t.target.displayObject, 'mouseout', e.eventData);
        }), (t.prototype._onKeyDown = function(t) {
          t.keyCode === d && this.activate();
        }), (t.prototype._onMouseMove = function() {
          this.deactivate();
        }), (t.prototype.destroy = function() {
          this.div = null;
          for (var t = 0; t < this.children.length; t++) { this.children[t].div = null; }
          window.document.removeEventListener(
            'mousemove',
            this._onMouseMove,
          ), window.removeEventListener(
            'keydown',
            this._onKeyDown,
          ), (this.pool = null), (this.children = null), (this.renderer = null);
        }), t;
      })();
    (e.default = _), a.WebGLRenderer.registerPlugin(
      'accessibility',
      _,
    ), a.CanvasRenderer.registerPlugin('accessibility', _);
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    e.__esModule = !0;
    var i = r(178);
    Object.defineProperty(e, 'webgl', {
      enumerable: !0,
      get() {
        return n(i).default;
      },
    });
    var o = r(179);
    Object.defineProperty(e, 'canvas', {
      enumerable: !0,
      get() {
        return n(o).default;
      },
    });
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      if (t && t.__esModule) { return t; }
      var e = {};
      if (t != null) {
        for (var r in t) { Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); }
      }
      return (e.default = t), e;
    }
    function i(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    e.__esModule = !0;
    var o = r(11),
      s = n(o),
      a = new s.Rectangle(),
      u = 4,
      l = (function() {
        function t(e) {
          i(this, t), (this.renderer = e), (e.extract = this);
        }
        return (t.prototype.image = function t(e) {
          var t = new Image();
          return (t.src = this.base64(e)), t;
        }), (t.prototype.base64 = function(t) {
          return this.canvas(t).toDataURL();
        }), (t.prototype.canvas = function(t) {
          var e = this.renderer,
            r = void 0,
            n = void 0,
            i = void 0,
            o = !1,
            l = void 0;
          t &&
            (l = t instanceof s.RenderTexture
              ? t
              : this.renderer.generateTexture(t)), l
            ? ((r =
                l.baseTexture._glRenderTargets[this.renderer.CONTEXT_UID]), (n =
                r.resolution), (i = l.frame), (o = !1))
            : ((r = this.renderer.rootRenderTarget), (n =
                r.resolution), (o = !0), (i = a), (i.width =
                r.size.width), (i.height = r.size.height));
          var h = i.width * n,
            c = i.height * n,
            d = new s.CanvasRenderTarget(h, c);
          if (r) {
            e.bindRenderTarget(r);
            var f = new Uint8Array(u * h * c), p = e.gl;
            p.readPixels(i.x * n, i.y * n, h, c, p.RGBA, p.UNSIGNED_BYTE, f);
            var v = d.context.getImageData(0, 0, h, c);
            v.data.set(f), d.context.putImageData(v, 0, 0), o &&
              (d.context.scale(1, -1), d.context.drawImage(d.canvas, 0, -c));
          }
          return d.canvas;
        }), (t.prototype.pixels = function(t) {
          var e = this.renderer, r = void 0, n = void 0, i = void 0, o = void 0;
          t &&
            (o = t instanceof s.RenderTexture
              ? t
              : this.renderer.generateTexture(t)), o
            ? ((r =
                o.baseTexture._glRenderTargets[this.renderer.CONTEXT_UID]), (n =
                r.resolution), (i = o.frame))
            : ((r = this.renderer.rootRenderTarget), (n =
                r.resolution), (i = a), (i.width = r.size.width), (i.height =
                r.size.height));
          var l = i.width * n, h = i.height * n, c = new Uint8Array(u * l * h);
          if (r) {
            e.bindRenderTarget(r);
            var d = e.gl;
            d.readPixels(i.x * n, i.y * n, l, h, d.RGBA, d.UNSIGNED_BYTE, c);
          }
          return c;
        }), (t.prototype.destroy = function() {
          (this.renderer.extract = null), (this.renderer = null);
        }), t;
      })();
    (e.default = l), s.WebGLRenderer.registerPlugin('extract', l);
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      if (t && t.__esModule) { return t; }
      var e = {};
      if (t != null) {
        for (var r in t) { Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); }
      }
      return (e.default = t), e;
    }
    function i(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    e.__esModule = !0;
    var o = r(11),
      s = n(o),
      a = new s.Rectangle(),
      u = (function() {
        function t(e) {
          i(this, t), (this.renderer = e), (e.extract = this);
        }
        return (t.prototype.image = function t(e) {
          var t = new Image();
          return (t.src = this.base64(e)), t;
        }), (t.prototype.base64 = function(t) {
          return this.canvas(t).toDataURL();
        }), (t.prototype.canvas = function(t) {
          var e = this.renderer, r = void 0, n = void 0, i = void 0, o = void 0;
          t && (o = t instanceof s.RenderTexture ? t : e.generateTexture(t)), o
            ? ((r = o.baseTexture._canvasRenderTarget.context), (n =
                o.baseTexture._canvasRenderTarget.resolution), (i = o.frame))
            : ((r =
                e.rootContext), (i = a), (i.width = this.renderer.width), (i.height = this.renderer.height));
          var u = i.width * n,
            l = i.height * n,
            h = new s.CanvasRenderTarget(u, l),
            c = r.getImageData(i.x * n, i.y * n, u, l);
          return h.context.putImageData(c, 0, 0), h.canvas;
        }), (t.prototype.pixels = function(t) {
          var e = this.renderer, r = void 0, n = void 0, i = void 0, o = void 0;
          return t &&
            (o = t instanceof s.RenderTexture ? t : e.generateTexture(t)), o
            ? ((r = o.baseTexture._canvasRenderTarget.context), (n =
                o.baseTexture._canvasRenderTarget.resolution), (i = o.frame))
            : ((r = e.rootContext), (i = a), (i.width = e.width), (i.height =
                e.height)), r.getImageData(0, 0, i.width * n, i.height * n)
            .data;
        }), (t.prototype.destroy = function() {
          (this.renderer.extract = null), (this.renderer = null);
        }), t;
      })();
    (e.default = u), s.CanvasRenderer.registerPlugin('extract', u);
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    e.__esModule = !0;
    var i = r(181);
    Object.defineProperty(e, 'InteractionData', {
      enumerable: !0,
      get() {
        return n(i).default;
      },
    });
    var o = r(182);
    Object.defineProperty(e, 'InteractionManager', {
      enumerable: !0,
      get() {
        return n(o).default;
      },
    });
    var s = r(184);
    Object.defineProperty(e, 'interactiveTarget', {
      enumerable: !0,
      get() {
        return n(s).default;
      },
    });
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      if (t && t.__esModule) { return t; }
      var e = {};
      if (t != null) {
        for (var r in t) { Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); }
      }
      return (e.default = t), e;
    }
    function i(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    e.__esModule = !0;
    var o = r(11),
      s = n(o),
      a = (function() {
        function t() {
          i(
            this,
            t,
          ), (this.global = new s.Point()), (this.target = null), (this.originalEvent = null);
        }
        return (t.prototype.getLocalPosition = function(t, e, r) {
          return t.worldTransform.applyInverse(r || this.global, e);
        }), t;
      })();
    e.default = a;
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i(t) {
      if (t && t.__esModule) { return t; }
      var e = {};
      if (t != null) { for (var r in t) { Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); } }
      return (e.default = t), e;
    }
    function o(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    function s(t, e) {
      if (!t) {
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      }
      return !e || (typeof e !== 'object' && typeof e !== 'function') ? t : e;
    }
    function a(t, e) {
      if (typeof e !== 'function' && e !== null) {
        throw new TypeError(
          `Super expression must either be null or a function, not ${typeof e}`,
        );
      }
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {value: t, enumerable: !1, writable: !0, configurable: !0},
      })), e &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(t, e)
          : (t.__proto__ = e));
    }
    e.__esModule = !0;
    var u = r(11),
      l = i(u),
      h = r(181),
      c = n(h),
      d = r(183),
      f = n(d),
      p = r(42),
      v = n(p),
      y = r(184),
      g = n(y),
      m = r(45),
      b = n(m);
    Object.assign(l.DisplayObject.prototype, g.default);
    var x = (function(t) {
      function e(r, n) {
        o(this, e);
        var i = s(this, t.call(this));
        return (n = n || {}), (i.renderer = r), (i.autoPreventDefault =
          void 0 === n.autoPreventDefault ||
          n.autoPreventDefault), (i.interactionFrequency =
          n.interactionFrequency ||
          10), (i.mouse = new c.default()), i.mouse.global.set(
          -999999,
        ), (i.pointer = new c.default()), i.pointer.global.set(
          -999999,
        ), (i.eventData = new f.default()), (i.interactiveDataPool = []), (i.interactionDOMElement = null), (i.moveWhenInside = !1), (i.eventsAdded = !1), (i.mouseOverRenderer = !1), (i.supportsTouchEvents =
          'ontouchstart' in
          window), (i.supportsPointerEvents = Boolean(window.PointerEvent)), (i.normalizeTouchEvents =
          !i.supportsPointerEvents &&
          i.supportsTouchEvents), (i.normalizeMouseEvents =
          !i.supportsPointerEvents &&
          !b.default.any), (i.onMouseUp = i.onMouseUp.bind(
          i,
        )), (i.processMouseUp = i.processMouseUp.bind(
          i,
        )), (i.onMouseDown = i.onMouseDown.bind(
          i,
        )), (i.processMouseDown = i.processMouseDown.bind(
          i,
        )), (i.onMouseMove = i.onMouseMove.bind(
          i,
        )), (i.processMouseMove = i.processMouseMove.bind(
          i,
        )), (i.onMouseOut = i.onMouseOut.bind(
          i,
        )), (i.processMouseOverOut = i.processMouseOverOut.bind(
          i,
        )), (i.onMouseOver = i.onMouseOver.bind(
          i,
        )), (i.onPointerUp = i.onPointerUp.bind(
          i,
        )), (i.processPointerUp = i.processPointerUp.bind(
          i,
        )), (i.onPointerDown = i.onPointerDown.bind(
          i,
        )), (i.processPointerDown = i.processPointerDown.bind(
          i,
        )), (i.onPointerMove = i.onPointerMove.bind(
          i,
        )), (i.processPointerMove = i.processPointerMove.bind(
          i,
        )), (i.onPointerOut = i.onPointerOut.bind(
          i,
        )), (i.processPointerOverOut = i.processPointerOverOut.bind(
          i,
        )), (i.onPointerOver = i.onPointerOver.bind(
          i,
        )), (i.onTouchStart = i.onTouchStart.bind(
          i,
        )), (i.processTouchStart = i.processTouchStart.bind(
          i,
        )), (i.onTouchEnd = i.onTouchEnd.bind(
          i,
        )), (i.processTouchEnd = i.processTouchEnd.bind(
          i,
        )), (i.onTouchMove = i.onTouchMove.bind(
          i,
        )), (i.processTouchMove = i.processTouchMove.bind(
          i,
        )), (i.defaultCursorStyle = 'inherit'), (i.currentCursorStyle =
          'inherit'), (i._tempPoint = new l.Point()), (i.resolution = 1), i.setTargetElement(
          i.renderer.view,
          i.renderer.resolution,
        ), i;
      }
      return a(e, t), (e.prototype.setTargetElement = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : 1;
        this.removeEvents(), (this.interactionDOMElement = t), (this.resolution = e), this.addEvents();
      }), (e.prototype.addEvents = function() {
        this.interactionDOMElement &&
          (l.ticker.shared.add(this.update, this), window.navigator
            .msPointerEnabled
            ? ((this.interactionDOMElement.style['-ms-content-zooming'] =
                'none'), (this.interactionDOMElement.style['-ms-touch-action'] =
                'none'))
            : this.supportsPointerEvents &&
                (this.interactionDOMElement.style['touch-action'] =
                  'none'), this.supportsPointerEvents
            ? (window.document.addEventListener(
                'pointermove',
                this.onPointerMove,
                !0,
              ), this.interactionDOMElement.addEventListener(
                'pointerdown',
                this.onPointerDown,
                !0,
              ), this.interactionDOMElement.addEventListener(
                'pointerout',
                this.onPointerOut,
                !0,
              ), this.interactionDOMElement.addEventListener(
                'pointerover',
                this.onPointerOver,
                !0,
              ), window.addEventListener('pointerup', this.onPointerUp, !0))
            : (this.normalizeTouchEvents &&
                (this.interactionDOMElement.addEventListener(
                  'touchstart',
                  this.onPointerDown,
                  !0,
                ), this.interactionDOMElement.addEventListener(
                  'touchend',
                  this.onPointerUp,
                  !0,
                ), this.interactionDOMElement.addEventListener(
                  'touchmove',
                  this.onPointerMove,
                  !0,
                )), this.normalizeMouseEvents &&
                (window.document.addEventListener(
                  'mousemove',
                  this.onPointerMove,
                  !0,
                ), this.interactionDOMElement.addEventListener(
                  'mousedown',
                  this.onPointerDown,
                  !0,
                ), this.interactionDOMElement.addEventListener(
                  'mouseout',
                  this.onPointerOut,
                  !0,
                ), this.interactionDOMElement.addEventListener(
                  'mouseover',
                  this.onPointerOver,
                  !0,
                ), window.addEventListener(
                  'mouseup',
                  this.onPointerUp,
                  !0,
                ))), window.document.addEventListener(
            'mousemove',
            this.onMouseMove,
            !0,
          ), this.interactionDOMElement.addEventListener(
            'mousedown',
            this.onMouseDown,
            !0,
          ), this.interactionDOMElement.addEventListener(
            'mouseout',
            this.onMouseOut,
            !0,
          ), this.interactionDOMElement.addEventListener(
            'mouseover',
            this.onMouseOver,
            !0,
          ), window.addEventListener('mouseup', this.onMouseUp, !0), this
            .supportsTouchEvents &&
            (this.interactionDOMElement.addEventListener(
              'touchstart',
              this.onTouchStart,
              !0,
            ), this.interactionDOMElement.addEventListener(
              'touchend',
              this.onTouchEnd,
              !0,
            ), this.interactionDOMElement.addEventListener(
              'touchmove',
              this.onTouchMove,
              !0,
            )), (this.eventsAdded = !0));
      }), (e.prototype.removeEvents = function() {
        this.interactionDOMElement &&
          (l.ticker.shared.remove(this.update, this), window.navigator
            .msPointerEnabled
            ? ((this.interactionDOMElement.style['-ms-content-zooming'] =
                ''), (this.interactionDOMElement.style['-ms-touch-action'] =
                ''))
            : this.supportsPointerEvents &&
                (this.interactionDOMElement.style['touch-action'] = ''), this
            .supportsPointerEvents
            ? (window.document.removeEventListener(
                'pointermove',
                this.onPointerMove,
                !0,
              ), this.interactionDOMElement.removeEventListener(
                'pointerdown',
                this.onPointerDown,
                !0,
              ), this.interactionDOMElement.removeEventListener(
                'pointerout',
                this.onPointerOut,
                !0,
              ), this.interactionDOMElement.removeEventListener(
                'pointerover',
                this.onPointerOver,
                !0,
              ), window.removeEventListener('pointerup', this.onPointerUp, !0))
            : (this.normalizeTouchEvents &&
                (this.interactionDOMElement.removeEventListener(
                  'touchstart',
                  this.onPointerDown,
                  !0,
                ), this.interactionDOMElement.removeEventListener(
                  'touchend',
                  this.onPointerUp,
                  !0,
                ), this.interactionDOMElement.removeEventListener(
                  'touchmove',
                  this.onPointerMove,
                  !0,
                )), this.normalizeMouseEvents &&
                (window.document.removeEventListener(
                  'mousemove',
                  this.onPointerMove,
                  !0,
                ), this.interactionDOMElement.removeEventListener(
                  'mousedown',
                  this.onPointerDown,
                  !0,
                ), this.interactionDOMElement.removeEventListener(
                  'mouseout',
                  this.onPointerOut,
                  !0,
                ), this.interactionDOMElement.removeEventListener(
                  'mouseover',
                  this.onPointerOver,
                  !0,
                ), window.removeEventListener(
                  'mouseup',
                  this.onPointerUp,
                  !0,
                ))), window.document.removeEventListener(
            'mousemove',
            this.onMouseMove,
            !0,
          ), this.interactionDOMElement.removeEventListener(
            'mousedown',
            this.onMouseDown,
            !0,
          ), this.interactionDOMElement.removeEventListener(
            'mouseout',
            this.onMouseOut,
            !0,
          ), this.interactionDOMElement.removeEventListener(
            'mouseover',
            this.onMouseOver,
            !0,
          ), window.removeEventListener('mouseup', this.onMouseUp, !0), this
            .supportsTouchEvents &&
            (this.interactionDOMElement.removeEventListener(
              'touchstart',
              this.onTouchStart,
              !0,
            ), this.interactionDOMElement.removeEventListener(
              'touchend',
              this.onTouchEnd,
              !0,
            ), this.interactionDOMElement.removeEventListener(
              'touchmove',
              this.onTouchMove,
              !0,
            )), (this.interactionDOMElement = null), (this.eventsAdded = !1));
      }), (e.prototype.update = function(t) {
        if (
          ((this._deltaTime += t), !(this._deltaTime <
            this.interactionFrequency) &&
            ((this._deltaTime = 0), this.interactionDOMElement))
        ) {
          if (this.didMove) { return void (this.didMove = !1); }
          (this.cursor = this.defaultCursorStyle), this.eventData._reset(), this.processInteractive(
            this.mouse.global,
            this.renderer._lastObjectRendered,
            this.processMouseOverOut,
            !0,
          ), this.currentCursorStyle !== this.cursor &&
            ((this.currentCursorStyle = this.cursor), (this.interactionDOMElement.style.cursor = this.cursor));
        }
      }), (e.prototype.dispatchEvent = function(t, e, r) {
        r.stopped ||
          ((r.currentTarget = t), (r.type = e), t.emit(e, r), t[e] && t[e](r));
      }), (e.prototype.mapPositionToPoint = function(t, e, r) {
        var n = void 0;
        n = this.interactionDOMElement.parentElement
          ? this.interactionDOMElement.getBoundingClientRect()
          : {x: 0, y: 0, width: 0, height: 0};
        var i = navigator.isCocoonJS ? this.resolution : 1 / this.resolution;
        (t.x =
          (e - n.left) *
          (this.interactionDOMElement.width / n.width) *
          i), (t.y =
          (r - n.top) * (this.interactionDOMElement.height / n.height) * i);
      }), (e.prototype.processInteractive = function(t, e, r, n, i) {
        if (!e || !e.visible) { return !1; }
        i = e.interactive || i;
        var o = !1, s = i;
        if (
          (e.hitArea && (s = !1), n &&
            e._mask &&
            (e._mask.containsPoint(t) || (n = !1)), n &&
            e.filterArea &&
            (e.filterArea.contains(t.x, t.y) ||
              (n = !1)), e.interactiveChildren && e.children)
        ) {
          for (var a = e.children, u = a.length - 1; u >= 0; u--) {
            var l = a[u];
            if (this.processInteractive(t, l, r, n, s)) {
              if (!l.parent) { continue; }
              (o = !0), (s = !1), (n = !1);
            }
          }
        }
        return i &&
          (n &&
            !o &&
            (e.hitArea
              ? (e.worldTransform.applyInverse(
                  t,
                  this._tempPoint,
                ), (o = e.hitArea.contains(
                  this._tempPoint.x,
                  this._tempPoint.y,
                )))
              : e.containsPoint && (o = e.containsPoint(t))), e.interactive &&
            (o &&
              !this.eventData.target &&
              ((this.eventData.target = e), (this.mouse.target = e), (this.pointer.target = e)), r(
              e,
              o,
            ))), o;
      }), (e.prototype.onMouseDown = function(t) {
        (this.mouse.originalEvent = t), (this.eventData.data = this.mouse), this.eventData._reset(), this.mapPositionToPoint(
          this.mouse.global,
          t.clientX,
          t.clientY,
        ), this.autoPreventDefault &&
          this.mouse.originalEvent.preventDefault(), this.processInteractive(
          this.mouse.global,
          this.renderer._lastObjectRendered,
          this.processMouseDown,
          !0,
        );
        var e = t.button === 2 || t.which === 3;
        this.emit(e ? 'rightdown' : 'mousedown', this.eventData);
      }), (e.prototype.processMouseDown = function(t, e) {
        var r = this.mouse.originalEvent, n = r.button === 2 || r.which === 3;
        e &&
          ((t[n ? '_isRightDown' : '_isLeftDown'] = !0), this.dispatchEvent(
            t,
            n ? 'rightdown' : 'mousedown',
            this.eventData,
          ));
      }), (e.prototype.onMouseUp = function(t) {
        (this.mouse.originalEvent = t), (this.eventData.data = this.mouse), this.eventData._reset(), this.mapPositionToPoint(
          this.mouse.global,
          t.clientX,
          t.clientY,
        ), this.processInteractive(
          this.mouse.global,
          this.renderer._lastObjectRendered,
          this.processMouseUp,
          !0,
        );
        var e = t.button === 2 || t.which === 3;
        this.emit(e ? 'rightup' : 'mouseup', this.eventData);
      }), (e.prototype.processMouseUp = function(t, e) {
        var r = this.mouse.originalEvent,
          n = r.button === 2 || r.which === 3,
          i = n ? '_isRightDown' : '_isLeftDown';
        e
          ? (this.dispatchEvent(
              t,
              n ? 'rightup' : 'mouseup',
              this.eventData,
            ), t[i] &&
              ((t[i] = !1), this.dispatchEvent(
                t,
                n ? 'rightclick' : 'click',
                this.eventData,
              )))
          : t[i] &&
              ((t[i] = !1), this.dispatchEvent(
                t,
                n ? 'rightupoutside' : 'mouseupoutside',
                this.eventData,
              ));
      }), (e.prototype.onMouseMove = function(t) {
        (this.mouse.originalEvent = t), (this.eventData.data = this.mouse), this.eventData._reset(), this.mapPositionToPoint(
          this.mouse.global,
          t.clientX,
          t.clientY,
        ), (this.didMove = !0), (this.cursor = this.defaultCursorStyle), this.processInteractive(
          this.mouse.global,
          this.renderer._lastObjectRendered,
          this.processMouseMove,
          !0,
        ), this.emit('mousemove', this.eventData), this.currentCursorStyle !==
          this.cursor &&
          ((this.currentCursorStyle = this.cursor), (this.interactionDOMElement.style.cursor = this.cursor));
      }), (e.prototype.processMouseMove = function(t, e) {
        this.processMouseOverOut(t, e), (this.moveWhenInside && !e) ||
          this.dispatchEvent(t, 'mousemove', this.eventData);
      }), (e.prototype.onMouseOut = function(t) {
        (this.mouseOverRenderer = !1), (this.mouse.originalEvent = t), (this.eventData.data = this.mouse), this.eventData._reset(), this.mapPositionToPoint(
          this.mouse.global,
          t.clientX,
          t.clientY,
        ), (this.interactionDOMElement.style.cursor = this.defaultCursorStyle), this.mapPositionToPoint(
          this.mouse.global,
          t.clientX,
          t.clientY,
        ), this.processInteractive(
          this.mouse.global,
          this.renderer._lastObjectRendered,
          this.processMouseOverOut,
          !1,
        ), this.emit('mouseout', this.eventData);
      }), (e.prototype.processMouseOverOut = function(t, e) {
        e && this.mouseOverRenderer
          ? (t._mouseOver ||
              ((t._mouseOver = !0), this.dispatchEvent(
                t,
                'mouseover',
                this.eventData,
              )), t.buttonMode && (this.cursor = t.defaultCursor))
          : t._mouseOver &&
              ((t._mouseOver = !1), this.dispatchEvent(
                t,
                'mouseout',
                this.eventData,
              ));
      }), (e.prototype.onMouseOver = function(t) {
        (this.mouseOverRenderer = !0), (this.mouse.originalEvent = t), (this.eventData.data = this.mouse), this.eventData._reset(), this.emit(
          'mouseover',
          this.eventData,
        );
      }), (e.prototype.onPointerDown = function(t) {
        this.normalizeToPointerData(
          t,
        ), (this.pointer.originalEvent = t), (this.eventData.data = this.pointer), this.eventData._reset(), this.mapPositionToPoint(
          this.pointer.global,
          t.clientX,
          t.clientY,
        ), this.autoPreventDefault &&
          (this.normalizeMouseEvents || this.normalizeTouchEvents) &&
          this.pointer.originalEvent.preventDefault(), this.processInteractive(
          this.pointer.global,
          this.renderer._lastObjectRendered,
          this.processPointerDown,
          !0,
        ), this.emit('pointerdown', this.eventData);
      }), (e.prototype.processPointerDown = function(t, e) {
        e &&
          ((t._pointerDown = !0), this.dispatchEvent(
            t,
            'pointerdown',
            this.eventData,
          ));
      }), (e.prototype.onPointerUp = function(t) {
        this.normalizeToPointerData(
          t,
        ), (this.pointer.originalEvent = t), (this.eventData.data = this.pointer), this.eventData._reset(), this.mapPositionToPoint(
          this.pointer.global,
          t.clientX,
          t.clientY,
        ), this.processInteractive(
          this.pointer.global,
          this.renderer._lastObjectRendered,
          this.processPointerUp,
          !0,
        ), this.emit('pointerup', this.eventData);
      }), (e.prototype.processPointerUp = function(t, e) {
        e
          ? (this.dispatchEvent(
              t,
              'pointerup',
              this.eventData,
            ), t._pointerDown &&
              ((t._pointerDown = !1), this.dispatchEvent(
                t,
                'pointertap',
                this.eventData,
              )))
          : t._pointerDown &&
              ((t._pointerDown = !1), this.dispatchEvent(
                t,
                'pointerupoutside',
                this.eventData,
              ));
      }), (e.prototype.onPointerMove = function(t) {
        this.normalizeToPointerData(
          t,
        ), (this.pointer.originalEvent = t), (this.eventData.data = this.pointer), this.eventData._reset(), this.mapPositionToPoint(
          this.pointer.global,
          t.clientX,
          t.clientY,
        ), this.processInteractive(
          this.pointer.global,
          this.renderer._lastObjectRendered,
          this.processPointerMove,
          !0,
        ), this.emit('pointermove', this.eventData);
      }), (e.prototype.processPointerMove = function(t, e) {
        this.pointer.originalEvent.changedTouches ||
          this.processPointerOverOut(t, e), (this.moveWhenInside && !e) ||
          this.dispatchEvent(t, 'pointermove', this.eventData);
      }), (e.prototype.onPointerOut = function(t) {
        this.normalizeToPointerData(
          t,
        ), (this.pointer.originalEvent = t), (this.eventData.data = this.pointer), this.eventData._reset(), this.mapPositionToPoint(
          this.pointer.global,
          t.clientX,
          t.clientY,
        ), this.processInteractive(
          this.pointer.global,
          this.renderer._lastObjectRendered,
          this.processPointerOverOut,
          !1,
        ), this.emit('pointerout', this.eventData);
      }), (e.prototype.processPointerOverOut = function(t, e) {
        e && this.mouseOverRenderer
          ? t._pointerOver ||
              ((t._pointerOver = !0), this.dispatchEvent(
                t,
                'pointerover',
                this.eventData,
              ))
          : t._pointerOver &&
              ((t._pointerOver = !1), this.dispatchEvent(
                t,
                'pointerout',
                this.eventData,
              ));
      }), (e.prototype.onPointerOver = function(t) {
        (this.pointer.originalEvent = t), (this.eventData.data = this.pointer), this.eventData._reset(), this.emit(
          'pointerover',
          this.eventData,
        );
      }), (e.prototype.onTouchStart = function(t) {
        this.autoPreventDefault && t.preventDefault();
        for (var e = t.changedTouches, r = e.length, n = 0; n < r; n++) {
          var i = e[n], o = this.getTouchData(i);
          (o.originalEvent = t), (this.eventData.data = o), this.eventData._reset(), this.processInteractive(
            o.global,
            this.renderer._lastObjectRendered,
            this.processTouchStart,
            !0,
          ), this.emit('touchstart', this.eventData), this.returnTouchData(o);
        }
      }), (e.prototype.processTouchStart = function(t, e) {
        e &&
          ((t._touchDown = !0), this.dispatchEvent(
            t,
            'touchstart',
            this.eventData,
          ));
      }), (e.prototype.onTouchEnd = function(t) {
        this.autoPreventDefault && t.preventDefault();
        for (var e = t.changedTouches, r = e.length, n = 0; n < r; n++) {
          var i = e[n], o = this.getTouchData(i);
          (o.originalEvent = t), (this.eventData.data = o), this.eventData._reset(), this.processInteractive(
            o.global,
            this.renderer._lastObjectRendered,
            this.processTouchEnd,
            !0,
          ), this.emit('touchend', this.eventData), this.returnTouchData(o);
        }
      }), (e.prototype.processTouchEnd = function(t, e) {
        e
          ? (this.dispatchEvent(t, 'touchend', this.eventData), t._touchDown &&
              ((t._touchDown = !1), this.dispatchEvent(
                t,
                'tap',
                this.eventData,
              )))
          : t._touchDown &&
              ((t._touchDown = !1), this.dispatchEvent(
                t,
                'touchendoutside',
                this.eventData,
              ));
      }), (e.prototype.onTouchMove = function(t) {
        this.autoPreventDefault && t.preventDefault();
        for (var e = t.changedTouches, r = e.length, n = 0; n < r; n++) {
          var i = e[n], o = this.getTouchData(i);
          (o.originalEvent = t), (this.eventData.data = o), this.eventData._reset(), this.processInteractive(
            o.global,
            this.renderer._lastObjectRendered,
            this.processTouchMove,
            this.moveWhenInside,
          ), this.emit('touchmove', this.eventData), this.returnTouchData(o);
        }
      }), (e.prototype.processTouchMove = function(t, e) {
        (this.moveWhenInside && !e) ||
          this.dispatchEvent(t, 'touchmove', this.eventData);
      }), (e.prototype.getTouchData = function(t) {
        var e = this.interactiveDataPool.pop() || new c.default();
        return (e.identifier = t.identifier), this.mapPositionToPoint(
          e.global,
          t.clientX,
          t.clientY,
        ), navigator.isCocoonJS &&
          ((e.global.x = e.global.x / this.resolution), (e.global.y =
            e.global.y / this.resolution)), (t.globalX =
          e.global.x), (t.globalY = e.global.y), e;
      }), (e.prototype.returnTouchData = function(t) {
        this.interactiveDataPool.push(t);
      }), (e.prototype.normalizeToPointerData = function(t) {
        this.normalizeTouchEvents && t.changedTouches
          ? (typeof t.button === 'undefined' &&
              (t.button = t.touches.length ? 1 : 0), typeof t.buttons ===
              'undefined' &&
              (t.buttons = t.touches.length ? 1 : 0), typeof t.isPrimary ===
              'undefined' &&
              (t.isPrimary = t.touches.length === 1), typeof t.width ===
              'undefined' &&
              (t.width = t.changedTouches[0].radiusX || 1), typeof t.height ===
              'undefined' &&
              (t.height = t.changedTouches[0].radiusY || 1), typeof t.tiltX ===
              'undefined' && (t.tiltX = 0), typeof t.tiltY === 'undefined' &&
              (t.tiltY = 0), typeof t.pointerType === 'undefined' &&
              (t.pointerType = 'touch'), typeof t.pointerId === 'undefined' &&
              (t.pointerId =
                t.changedTouches[0].identifier || 0), typeof t.pressure ===
              'undefined' &&
              (t.pressure = t.changedTouches[0].force || 0.5), typeof t.rotation ===
              'undefined' &&
              (t.rotation =
                t.changedTouches[0].rotationAngle || 0), typeof t.clientX ===
              'undefined' &&
              (t.clientX = t.changedTouches[0].clientX), typeof t.clientY ===
              'undefined' &&
              (t.clientY = t.changedTouches[0].clientY), typeof t.pageX ===
              'undefined' &&
              (t.pageX = t.changedTouches[0].pageX), typeof t.pageY ===
              'undefined' &&
              (t.pageY = t.changedTouches[0].pageY), typeof t.screenX ===
              'undefined' &&
              (t.screenX = t.changedTouches[0].screenX), typeof t.screenY ===
              'undefined' &&
              (t.screenY = t.changedTouches[0].screenY), typeof t.layerX ===
              'undefined' &&
              (t.layerX = t.offsetX = t.clientX), typeof t.layerY ===
              'undefined' && (t.layerY = t.offsetY = t.clientY))
          : this.normalizeMouseEvents &&
              (typeof t.isPrimary === 'undefined' &&
                (t.isPrimary = !0), typeof t.width === 'undefined' &&
                (t.width = 1), typeof t.height === 'undefined' &&
                (t.height = 1), typeof t.tiltX === 'undefined' &&
                (t.tiltX = 0), typeof t.tiltY === 'undefined' &&
                (t.tiltY = 0), typeof t.pointerType === 'undefined' &&
                (t.pointerType = 'mouse'), typeof t.pointerId === 'undefined' &&
                (t.pointerId = 1), typeof t.pressure === 'undefined' &&
                (t.pressure = 0.5), typeof t.rotation === 'undefined' &&
                (t.rotation = 0));
      }), (e.prototype.destroy = function() {
        this.removeEvents(), this.removeAllListeners(), (this.renderer = null), (this.mouse = null), (this.eventData = null), (this.interactiveDataPool = null), (this.interactionDOMElement = null), (this.onMouseDown = null), (this.processMouseDown = null), (this.onMouseUp = null), (this.processMouseUp = null), (this.onMouseMove = null), (this.processMouseMove = null), (this.onMouseOut = null), (this.processMouseOverOut = null), (this.onMouseOver = null), (this.onPointerDown = null), (this.processPointerDown = null), (this.onPointerUp = null), (this.processPointerUp = null), (this.onPointerMove = null), (this.processPointerMove = null), (this.onPointerOut = null), (this.processPointerOverOut = null), (this.onPointerOver = null), (this.onTouchStart = null), (this.processTouchStart = null), (this.onTouchEnd = null), (this.processTouchEnd = null), (this.onTouchMove = null), (this.processTouchMove = null), (this._tempPoint = null);
      }), e;
    })(v.default);
    (e.default = x), l.WebGLRenderer.registerPlugin(
      'interaction',
      x,
    ), l.CanvasRenderer.registerPlugin('interaction', x);
  },
  function(t, e) {
    'use strict';
    function r(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    e.__esModule = !0;
    var n = (function() {
      function t() {
        r(
          this,
          t,
        ), (this.stopped = !1), (this.target = null), (this.currentTarget = null), (this.type = null), (this.data = null);
      }
      return (t.prototype.stopPropagation = function() {
        this.stopped = !0;
      }), (t.prototype._reset = function() {
        (this.stopped = !1), (this.currentTarget = null), (this.target = null);
      }), t;
    })();
    e.default = n;
  },
  function(t, e) {
    'use strict';
    (e.__esModule = !0), (e.default = {
      interactive: !1,
      interactiveChildren: !0,
      hitArea: null,
      buttonMode: !1,
      defaultCursor: 'pointer',
      _over: !1,
      _isLeftDown: !1,
      _isRightDown: !1,
      _pointerOver: !1,
      _pointerDown: !1,
      _touchDown: !1,
    });
  },
  function(t, e) {
    'use strict';
    Object.defineProperty(e, '__esModule', {value: !0});
    e.Time = {dts: 1 / 60, dtms: 1 / 60 * 1e3, desiredFps: 60};
  },
  function(t, e, r) {
    var n, n;
    (function(e) {
      !(function(e) {
        t.exports = e();
      })(() => {
        return (function t(e, r, i) {
          function o(a, u) {
            if (!r[a]) {
              if (!e[a]) {
                var l = typeof n === 'function' && n;
                if (!u && l) { return n(a, !0); }
                if (s) { return s(a, !0); }
                var h = new Error(`Cannot find module '${a}'`);
                throw ((h.code = 'MODULE_NOT_FOUND'), h);
              }
              var c = (r[a] = {exports: {}});
              e[a][0].call(
                c.exports,
                t => {
                  var r = e[a][1][t];
                  return o(r ? r : t);
                },
                c,
                c.exports,
                t,
                e,
                r,
                i,
              );
            }
            return r[a].exports;
          }
          for (
            var s = typeof n === 'function' && n, a = 0;
            a < i.length;
            a++
          ) { o(i[a]); }
          return o;
        })(
          {
            1: [
              function(t, e, r) {
                var n = {};
                e.exports = n;
                var i = t('../geometry/Vertices'),
                  o = t('../geometry/Vector'),
                  s = t('../core/Sleeping'),
                  a = (t('../render/Render'), t('../core/Common')),
                  u = t('../geometry/Bounds'),
                  l = t('../geometry/Axes');
                !(function() {
                  (n._inertiaScale = 4), (n._nextCollidingGroupId = 1), (n._nextNonCollidingGroupId = -1), (n._nextCategory = 1), (n.create = function(
                    e,
                  ) {
                    var r = {
                        id: a.nextId(),
                        type: 'body',
                        label: 'Body',
                        parts: [],
                        plugin: {},
                        angle: 0,
                        vertices: i.fromPath('L 0 0 L 40 0 L 40 40 L 0 40'),
                        position: {x: 0, y: 0},
                        force: {x: 0, y: 0},
                        torque: 0,
                        positionImpulse: {x: 0, y: 0},
                        constraintImpulse: {x: 0, y: 0, angle: 0},
                        totalContacts: 0,
                        speed: 0,
                        angularSpeed: 0,
                        velocity: {x: 0, y: 0},
                        angularVelocity: 0,
                        isSensor: !1,
                        isStatic: !1,
                        isSleeping: !1,
                        motion: 0,
                        sleepThreshold: 60,
                        density: 0.001,
                        restitution: 0,
                        friction: 0.1,
                        frictionStatic: 0.5,
                        frictionAir: 0.01,
                        collisionFilter: {
                          category: 1,
                          mask: 4294967295,
                          group: 0,
                        },
                        slop: 0.05,
                        timeScale: 1,
                        render: {
                          visible: !0,
                          opacity: 1,
                          sprite: {xScale: 1, yScale: 1, xOffset: 0, yOffset: 0},
                          lineWidth: 0,
                        },
                      },
                      n = a.extend(r, e);
                    return t(n, e), n;
                  }), (n.nextGroup = function(t) {
                    return t
                      ? n._nextNonCollidingGroupId--
                      : n._nextCollidingGroupId++;
                  }), (n.nextCategory = function() {
                    return (n._nextCategory <<= 1), n._nextCategory;
                  });
                  var t = function(t, e) {
                    (e = e || {}), n.set(t, {
                      bounds: t.bounds || u.create(t.vertices),
                      positionPrev: t.positionPrev || o.clone(t.position),
                      anglePrev: t.anglePrev || t.angle,
                      vertices: t.vertices,
                      parts: t.parts || [t],
                      isStatic: t.isStatic,
                      isSleeping: t.isSleeping,
                      parent: t.parent || t,
                    }), i.rotate(t.vertices, t.angle, t.position), l.rotate(
                      t.axes,
                      t.angle,
                    ), u.update(t.bounds, t.vertices, t.velocity), n.set(t, {
                      axes: e.axes || t.axes,
                      area: e.area || t.area,
                      mass: e.mass || t.mass,
                      inertia: e.inertia || t.inertia,
                    });
                    var r = t.isStatic
                      ? '#2e2b44'
                      : a.choose([
                        '#006BA6',
                        '#0496FF',
                        '#FFBC42',
                        '#D81159',
                        '#8F2D56',
                      ]),
                      s = a.shadeColor(r, -20);
                    (t.render.fillStyle =
                      t.render.fillStyle || r), (t.render.strokeStyle =
                      t.render.strokeStyle || s), (t.render.sprite.xOffset +=
                      -(t.bounds.min.x - t.position.x) /
                      (t.bounds.max.x -
                        t.bounds.min.x)), (t.render.sprite.yOffset +=
                      -(t.bounds.min.y - t.position.y) /
                      (t.bounds.max.y - t.bounds.min.y));
                  };
                  (n.set = function(t, e, r) {
                    var i;
                    typeof e === 'string' && ((i = e), (e = {}), (e[i] = r));
                    for (i in e) {
                      if (((r = e[i]), e.hasOwnProperty(i))) {
                        switch (i) {
                          case 'isStatic':
                            n.setStatic(t, r);
                            break;
                          case 'isSleeping':
                            s.set(t, r);
                            break;
                          case 'mass':
                            n.setMass(t, r);
                            break;
                          case 'density':
                            n.setDensity(t, r);
                            break;
                          case 'inertia':
                            n.setInertia(t, r);
                            break;
                          case 'vertices':
                            n.setVertices(t, r);
                            break;
                          case 'position':
                            n.setPosition(t, r);
                            break;
                          case 'angle':
                            n.setAngle(t, r);
                            break;
                          case 'velocity':
                            n.setVelocity(t, r);
                            break;
                          case 'angularVelocity':
                            n.setAngularVelocity(t, r);
                            break;
                          case 'parts':
                            n.setParts(t, r);
                            break;
                          default:
                            t[i] = r;
                        }
                      }
                    }
                  }), (n.setStatic = function(t, e) {
                    for (var r = 0; r < t.parts.length; r++) {
                      var n = t.parts[r];
                      (n.isStatic = e), e
                        ? ((n._original = {
                          restitution: n.restitution,
                          friction: n.friction,
                          mass: n.mass,
                          inertia: n.inertia,
                          density: n.density,
                          inverseMass: n.inverseMass,
                          inverseInertia: n.inverseInertia,
                        }), (n.restitution = 0), (n.friction = 1), (n.mass = n.inertia = n.density =
                            1 /
                            0), (n.inverseMass = n.inverseInertia = 0), (n.positionPrev.x =
                            n.position.x), (n.positionPrev.y =
                            n.position.y), (n.anglePrev =
                            n.angle), (n.angularVelocity = 0), (n.speed = 0), (n.angularSpeed = 0), (n.motion = 0))
                        : n._original &&
                            ((n.restitution =
                              n._original.restitution), (n.friction =
                              n._original.friction), (n.mass =
                              n._original.mass), (n.inertia =
                              n._original.inertia), (n.density =
                              n._original.density), (n.inverseMass =
                              n._original.inverseMass), (n.inverseInertia =
                              n._original.inverseInertia), delete n._original);
                    }
                  }), (n.setMass = function(t, e) {
                    (t.mass = e), (t.inverseMass = 1 / t.mass), (t.density =
                      t.mass / t.area);
                  }), (n.setDensity = function(t, e) {
                    n.setMass(t, e * t.area), (t.density = e);
                  }), (n.setInertia = function(t, e) {
                    (t.inertia = e), (t.inverseInertia = 1 / t.inertia);
                  }), (n.setVertices = function(t, e) {
                    e[0].body === t
                      ? (t.vertices = e)
                      : (t.vertices = i.create(e, t)), (t.axes = l.fromVertices(
                      t.vertices,
                    )), (t.area = i.area(t.vertices)), n.setMass(
                      t,
                      t.density * t.area,
                    );
                    var r = i.centre(t.vertices);
                    i.translate(t.vertices, r, -1), n.setInertia(
                      t,
                      n._inertiaScale * i.inertia(t.vertices, t.mass),
                    ), i.translate(t.vertices, t.position), u.update(
                      t.bounds,
                      t.vertices,
                      t.velocity,
                    );
                  }), (n.setParts = function(t, r, o) {
                    var s;
                    for (
                      (r = r.slice(0)), (t.parts.length = 0), t.parts.push(
                        t,
                      ), (t.parent = t), (s = 0);
                      s < r.length;
                      s++
                    ) {
                      var a = r[s];
                      a !== t && ((a.parent = t), t.parts.push(a));
                    }
                    if (t.parts.length !== 1) {
                      if ((o = typeof o === 'undefined' || o)) {
                        var u = [];
                        for (s = 0; s < r.length; s++) { u = u.concat(r[s].vertices); }
                        i.clockwiseSort(u);
                        var l = i.hull(u), h = i.centre(l);
                        n.setVertices(t, l), i.translate(t.vertices, h);
                      }
                      var c = e(t);
                      (t.area = c.area), (t.parent = t), (t.position.x =
                        c.centre.x), (t.position.y =
                        c.centre.y), (t.positionPrev.x =
                        c.centre.x), (t.positionPrev.y = c.centre.y), n.setMass(
                        t,
                        c.mass,
                      ), n.setInertia(t, c.inertia), n.setPosition(t, c.centre);
                    }
                  }), (n.setPosition = function(t, e) {
                    var r = o.sub(e, t.position);
                    (t.positionPrev.x += r.x), (t.positionPrev.y += r.y);
                    for (var n = 0; n < t.parts.length; n++) {
                      var s = t.parts[n];
                      (s.position.x += r.x), (s.position.y += r.y), i.translate(
                        s.vertices,
                        r,
                      ), u.update(s.bounds, s.vertices, t.velocity);
                    }
                  }), (n.setAngle = function(t, e) {
                    var r = e - t.angle;
                    t.anglePrev += r;
                    for (var n = 0; n < t.parts.length; n++) {
                      var s = t.parts[n];
                      (s.angle += r), i.rotate(
                        s.vertices,
                        r,
                        t.position,
                      ), l.rotate(s.axes, r), u.update(
                        s.bounds,
                        s.vertices,
                        t.velocity,
                      ), n > 0 &&
                        o.rotateAbout(s.position, r, t.position, s.position);
                    }
                  }), (n.setVelocity = function(t, e) {
                    (t.positionPrev.x = t.position.x - e.x), (t.positionPrev.y =
                      t.position.y - e.y), (t.velocity.x = e.x), (t.velocity.y =
                      e.y), (t.speed = o.magnitude(t.velocity));
                  }), (n.setAngularVelocity = function(t, e) {
                    (t.anglePrev =
                      t.angle -
                      e), (t.angularVelocity = e), (t.angularSpeed = Math.abs(
                      t.angularVelocity,
                    ));
                  }), (n.translate = function(t, e) {
                    n.setPosition(t, o.add(t.position, e));
                  }), (n.rotate = function(t, e) {
                    n.setAngle(t, t.angle + e);
                  }), (n.scale = function(t, r, o, s) {
                    for (var a = 0; a < t.parts.length; a++) {
                      var h = t.parts[a];
                      i.scale(
                        h.vertices,
                        r,
                        o,
                        t.position,
                      ), (h.axes = l.fromVertices(h.vertices)), t.isStatic ||
                        ((h.area = i.area(h.vertices)), n.setMass(
                          h,
                          t.density * h.area,
                        ), i.translate(h.vertices, {
                          x: -h.position.x,
                          y: -h.position.y,
                        }), n.setInertia(
                          h,
                          i.inertia(h.vertices, h.mass),
                        ), i.translate(h.vertices, {
                          x: h.position.x,
                          y: h.position.y,
                        })), u.update(h.bounds, h.vertices, t.velocity);
                    }
                    if (
                      (t.circleRadius &&
                        (r === o
                          ? (t.circleRadius *= r)
                          : (t.circleRadius = null)), !t.isStatic)
                    ) {
                      var c = e(t);
                      (t.area = c.area), n.setMass(t, c.mass), n.setInertia(
                        t,
                        c.inertia,
                      );
                    }
                  }), (n.update = function(t, e, r, n) {
                    var s = Math.pow(e * r * t.timeScale, 2),
                      a = 1 - t.frictionAir * r * t.timeScale,
                      h = t.position.x - t.positionPrev.x,
                      c = t.position.y - t.positionPrev.y;
                    (t.velocity.x =
                      h * a * n + t.force.x / t.mass * s), (t.velocity.y =
                      c * a * n + t.force.y / t.mass * s), (t.positionPrev.x =
                      t.position.x), (t.positionPrev.y =
                      t.position.y), (t.position.x +=
                      t.velocity.x), (t.position.y +=
                      t.velocity.y), (t.angularVelocity =
                      (t.angle - t.anglePrev) * a * n +
                      t.torque / t.inertia * s), (t.anglePrev =
                      t.angle), (t.angle +=
                      t.angularVelocity), (t.speed = o.magnitude(
                      t.velocity,
                    )), (t.angularSpeed = Math.abs(t.angularVelocity));
                    for (var d = 0; d < t.parts.length; d++) {
                      var f = t.parts[d];
                      i.translate(f.vertices, t.velocity), d > 0 &&
                        ((f.position.x += t.velocity.x), (f.position.y +=
                          t.velocity.y)), t.angularVelocity !== 0 &&
                        (i.rotate(
                          f.vertices,
                          t.angularVelocity,
                          t.position,
                        ), l.rotate(f.axes, t.angularVelocity), d > 0 &&
                          o.rotateAbout(
                            f.position,
                            t.angularVelocity,
                            t.position,
                            f.position,
                          )), u.update(f.bounds, f.vertices, t.velocity);
                    }
                  }), (n.applyForce = function(t, e, r) {
                    (t.force.x += r.x), (t.force.y += r.y);
                    var n = {x: e.x - t.position.x, y: e.y - t.position.y};
                    t.torque += n.x * r.y - n.y * r.x;
                  });
                  var e = function(t) {
                    for (
                      var e = {
                          mass: 0,
                          area: 0,
                          inertia: 0,
                          centre: {x: 0, y: 0},
                        },
                        r = t.parts.length === 1 ? 0 : 1;
                      r < t.parts.length;
                      r++
                    ) {
                      var n = t.parts[r];
                      (e.mass += n.mass), (e.area += n.area), (e.inertia +=
                        n.inertia), (e.centre = o.add(
                        e.centre,
                        o.mult(n.position, n.mass !== 1 / 0 ? n.mass : 1),
                      ));
                    }
                    return (e.centre = o.div(
                      e.centre,
                      e.mass !== 1 / 0 ? e.mass : t.parts.length,
                    )), e;
                  };
                })();
              },
              {
                '../core/Common': 14,
                '../core/Sleeping': 22,
                '../geometry/Axes': 25,
                '../geometry/Bounds': 26,
                '../geometry/Vector': 28,
                '../geometry/Vertices': 29,
                '../render/Render': 31,
              },
            ],
            2: [
              function(t, e, r) {
                var n = {};
                e.exports = n;
                var i = t('../core/Events'),
                  o = t('../core/Common'),
                  s = t('./Body');
                !(function() {
                  (n.create = function(t) {
                    return o.extend(
                      {
                        id: o.nextId(),
                        type: 'composite',
                        parent: null,
                        isModified: !1,
                        bodies: [],
                        constraints: [],
                        composites: [],
                        label: 'Composite',
                        plugin: {},
                      },
                      t,
                    );
                  }), (n.setModified = function(t, e, r, i) {
                    if (
                      ((t.isModified = e), r &&
                        t.parent &&
                        n.setModified(t.parent, e, r, i), i)
                    ) {
                      for (var o = 0; o < t.composites.length; o++) {
                        var s = t.composites[o];
                        n.setModified(s, e, r, i);
                      }
                    }
                  }), (n.add = function(t, e) {
                    var r = [].concat(e);
                    i.trigger(t, 'beforeAdd', {object: e});
                    for (var s = 0; s < r.length; s++) {
                      var a = r[s];
                      switch (a.type) {
                        case 'body':
                          if (a.parent !== a) {
                            o.warn(
                              'Composite.add: skipped adding a compound body part (you must add its parent instead)',
                            );
                            break;
                          }
                          n.addBody(t, a);
                          break;
                        case 'constraint':
                          n.addConstraint(t, a);
                          break;
                        case 'composite':
                          n.addComposite(t, a);
                          break;
                        case 'mouseConstraint':
                          n.addConstraint(t, a.constraint);
                      }
                    }
                    return i.trigger(t, 'afterAdd', {object: e}), t;
                  }), (n.remove = function(t, e, r) {
                    var o = [].concat(e);
                    i.trigger(t, 'beforeRemove', {object: e});
                    for (var s = 0; s < o.length; s++) {
                      var a = o[s];
                      switch (a.type) {
                        case 'body':
                          n.removeBody(t, a, r);
                          break;
                        case 'constraint':
                          n.removeConstraint(t, a, r);
                          break;
                        case 'composite':
                          n.removeComposite(t, a, r);
                          break;
                        case 'mouseConstraint':
                          n.removeConstraint(t, a.constraint);
                      }
                    }
                    return i.trigger(t, 'afterRemove', {object: e}), t;
                  }), (n.addComposite = function(t, e) {
                    return t.composites.push(e), (e.parent = t), n.setModified(
                      t,
                      !0,
                      !0,
                      !1,
                    ), t;
                  }), (n.removeComposite = function(t, e, r) {
                    var i = o.indexOf(t.composites, e);
                    if (
                      (i !== -1 &&
                        (n.removeCompositeAt(t, i), n.setModified(
                          t,
                          !0,
                          !0,
                          !1,
                        )), r)
                    ) {
                      for (var s = 0; s < t.composites.length; s++) { n.removeComposite(t.composites[s], e, !0); }
                    }
                    return t;
                  }), (n.removeCompositeAt = function(t, e) {
                    return t.composites.splice(e, 1), n.setModified(
                      t,
                      !0,
                      !0,
                      !1,
                    ), t;
                  }), (n.addBody = function(t, e) {
                    return t.bodies.push(e), n.setModified(t, !0, !0, !1), t;
                  }), (n.removeBody = function(t, e, r) {
                    var i = o.indexOf(t.bodies, e);
                    if (
                      (i !== -1 &&
                        (n.removeBodyAt(t, i), n.setModified(t, !0, !0, !1)), r)
                    ) {
                      for (var s = 0; s < t.composites.length; s++) { n.removeBody(t.composites[s], e, !0); }
                    }
                    return t;
                  }), (n.removeBodyAt = function(t, e) {
                    return t.bodies.splice(e, 1), n.setModified(
                      t,
                      !0,
                      !0,
                      !1,
                    ), t;
                  }), (n.addConstraint = function(t, e) {
                    return t.constraints.push(e), n.setModified(
                      t,
                      !0,
                      !0,
                      !1,
                    ), t;
                  }), (n.removeConstraint = function(t, e, r) {
                    var i = o.indexOf(t.constraints, e);
                    if ((i !== -1 && n.removeConstraintAt(t, i), r)) { for (var s = 0; s < t.composites.length; s++) { n.removeConstraint(t.composites[s], e, !0); } }
                    return t;
                  }), (n.removeConstraintAt = function(t, e) {
                    return t.constraints.splice(e, 1), n.setModified(
                      t,
                      !0,
                      !0,
                      !1,
                    ), t;
                  }), (n.clear = function(t, e, r) {
                    if (r) {
                      for (var i = 0; i < t.composites.length; i++) { n.clear(t.composites[i], e, !0); }
                    }
                    return e
                      ? (t.bodies = t.bodies.filter(t => {
                        return t.isStatic;
                      }))
                      : (t.bodies.length = 0), (t.constraints.length = 0), (t.composites.length = 0), n.setModified(
                      t,
                      !0,
                      !0,
                      !1,
                    ), t;
                  }), (n.allBodies = function(t) {
                    for (
                      var e = [].concat(t.bodies), r = 0;
                      r < t.composites.length;
                      r++
                    ) { e = e.concat(n.allBodies(t.composites[r])); }
                    return e;
                  }), (n.allConstraints = function(t) {
                    for (
                      var e = [].concat(t.constraints), r = 0;
                      r < t.composites.length;
                      r++
                    ) { e = e.concat(n.allConstraints(t.composites[r])); }
                    return e;
                  }), (n.allComposites = function(t) {
                    for (
                      var e = [].concat(t.composites), r = 0;
                      r < t.composites.length;
                      r++
                    ) { e = e.concat(n.allComposites(t.composites[r])); }
                    return e;
                  }), (n.get = function(t, e, r) {
                    var i, o;
                    switch (r) {
                      case 'body':
                        i = n.allBodies(t);
                        break;
                      case 'constraint':
                        i = n.allConstraints(t);
                        break;
                      case 'composite':
                        i = n.allComposites(t).concat(t);
                    }
                    return i
                      ? ((o = i.filter(t => {
                        return t.id.toString() === e.toString();
                      })), o.length === 0 ? null : o[0])
                      : null;
                  }), (n.move = function(t, e, r) {
                    return n.remove(t, e), n.add(r, e), t;
                  }), (n.rebase = function(t) {
                    for (
                      var e = n
                        .allBodies(t)
                        .concat(n.allConstraints(t))
                        .concat(n.allComposites(t)),
                        r = 0;
                      r < e.length;
                      r++
                    ) { e[r].id = o.nextId(); }
                    return n.setModified(t, !0, !0, !1), t;
                  }), (n.translate = function(t, e, r) {
                    for (
                      var i = r ? n.allBodies(t) : t.bodies, o = 0;
                      o < i.length;
                      o++
                    ) { s.translate(i[o], e); }
                    return n.setModified(t, !0, !0, !1), t;
                  }), (n.rotate = function(t, e, r, i) {
                    for (
                      var o = Math.cos(e),
                        a = Math.sin(e),
                        u = i ? n.allBodies(t) : t.bodies,
                        l = 0;
                      l < u.length;
                      l++
                    ) {
                      var h = u[l],
                        c = h.position.x - r.x,
                        d = h.position.y - r.y;
                      s.setPosition(h, {
                        x: r.x + (c * o - d * a),
                        y: r.y + (c * a + d * o),
                      }), s.rotate(h, e);
                    }
                    return n.setModified(t, !0, !0, !1), t;
                  }), (n.scale = function(t, e, r, i, o) {
                    for (
                      var a = o ? n.allBodies(t) : t.bodies, u = 0;
                      u < a.length;
                      u++
                    ) {
                      var l = a[u],
                        h = l.position.x - i.x,
                        c = l.position.y - i.y;
                      s.setPosition(l, {
                        x: i.x + h * e,
                        y: i.y + c * r,
                      }), s.scale(l, e, r);
                    }
                    return n.setModified(t, !0, !0, !1), t;
                  });
                })();
              },
              {'../core/Common': 14, '../core/Events': 16, './Body': 1},
            ],
            3: [
              function(t, e, r) {
                var n = {};
                e.exports = n;
                var i = t('./Composite'),
                  o = (t('../constraint/Constraint'), t('../core/Common'));
                !(function() {
                  n.create = function(t) {
                    var e = i.create(),
                      r = {
                        label: 'World',
                        gravity: {x: 0, y: 1, scale: 0.001},
                        bounds: {
                          min: {x: -(1 / 0), y: -(1 / 0)},
                          max: {x: 1 / 0, y: 1 / 0},
                        },
                      };
                    return o.extend(e, r, t);
                  };
                })();
              },
              {
                '../constraint/Constraint': 12,
                '../core/Common': 14,
                './Composite': 2,
              },
            ],
            4: [
              function(t, e, r) {
                var n = {};
                (e.exports = n), (function() {
                  (n.create = function(t) {
                    return {
                      id: n.id(t),
                      vertex: t,
                      normalImpulse: 0,
                      tangentImpulse: 0,
                    };
                  }), (n.id = function(t) {
                    return `${t.body.id}_${t.index}`;
                  });
                })();
              },
              {},
            ],
            5: [
              function(t, e, r) {
                var n = {};
                e.exports = n;
                var i = t('./SAT'),
                  o = t('./Pair'),
                  s = t('../geometry/Bounds');
                !(function() {
                  (n.collisions = function(t, e) {
                    for (
                      var r = [], a = e.pairs.table, u = 0;
                      u < t.length;
                      u++
                    ) {
                      var l = t[u][0], h = t[u][1];
                      if (
                        ((!l.isStatic && !l.isSleeping) ||
                          (!h.isStatic && !h.isSleeping)) &&
                        n.canCollide(l.collisionFilter, h.collisionFilter) &&
                        s.overlaps(l.bounds, h.bounds)
                      ) {
                        for (
                          var c = l.parts.length > 1 ? 1 : 0;
                          c < l.parts.length;
                          c++
                        ) {
                          for (
                            var d = l.parts[c], f = h.parts.length > 1 ? 1 : 0;
                            f < h.parts.length;
                            f++
                          ) {
                            var p = h.parts[f];
                            if (
                              (d === l && p === h) ||
                              s.overlaps(d.bounds, p.bounds)
                            ) {
                              var v, y = o.id(d, p), g = a[y];
                              v = g && g.isActive ? g.collision : null;
                              var m = i.collides(d, p, v);
                              m.collided && r.push(m);
                            }
                          }
                        }
                      }
                    }
                    return r;
                  }), (n.canCollide = function(t, e) {
                    return t.group === e.group && t.group !== 0
                      ? t.group > 0
                      : (t.mask & e.category) !== 0 &&
                          (e.mask & t.category) !== 0;
                  });
                })();
              },
              {'../geometry/Bounds': 26, './Pair': 7, './SAT': 11},
            ],
            6: [
              function(t, e, r) {
                var n = {};
                e.exports = n;
                var i = t('./Pair'),
                  o = t('./Detector'),
                  s = t('../core/Common');
                !(function() {
                  (n.create = function(t) {
                    var e = {
                      controller: n,
                      detector: o.collisions,
                      buckets: {},
                      pairs: {},
                      pairsList: [],
                      bucketWidth: 48,
                      bucketHeight: 48,
                    };
                    return s.extend(e, t);
                  }), (n.update = function(r, n, i, o) {
                    var s, d, f, p, v, y = i.world, g = r.buckets, m = !1;
                    for (s = 0; s < n.length; s++) {
                      var b = n[s];
                      if (
                        (!b.isSleeping || o) &&
                        !(b.bounds.max.x < y.bounds.min.x ||
                          b.bounds.min.x > y.bounds.max.x ||
                          b.bounds.max.y < y.bounds.min.y ||
                          b.bounds.min.y > y.bounds.max.y)
                      ) {
                        var x = e(r, b);
                        if (!b.region || x.id !== b.region.id || o) {
                          (b.region && !o) || (b.region = x);
                          var _ = t(x, b.region);
                          for (d = _.startCol; d <= _.endCol; d++) {
                            for (f = _.startRow; f <= _.endRow; f++) {
                              (v = a(d, f)), (p = g[v]);
                              var w =
                                d >= x.startCol &&
                                d <= x.endCol &&
                                f >= x.startRow &&
                                f <= x.endRow,
                                T =
                                  d >= b.region.startCol &&
                                  d <= b.region.endCol &&
                                  f >= b.region.startRow &&
                                  f <= b.region.endRow;
                              !w && T && T && p && h(r, p, b), (b.region ===
                                x ||
                                (w && !T) ||
                                o) &&
                                (p || (p = u(g, v)), l(r, p, b));
                            }
                          }
                          (b.region = x), (m = !0);
                        }
                      }
                    }
                    m && (r.pairsList = c(r));
                  }), (n.clear = function(t) {
                    (t.buckets = {}), (t.pairs = {}), (t.pairsList = []);
                  });
                  var t = function(t, e) {
                      var n = Math.min(t.startCol, e.startCol),
                        i = Math.max(t.endCol, e.endCol),
                        o = Math.min(t.startRow, e.startRow),
                        s = Math.max(t.endRow, e.endRow);
                      return r(n, i, o, s);
                    },
                    e = function(t, e) {
                      var n = e.bounds,
                        i = Math.floor(n.min.x / t.bucketWidth),
                        o = Math.floor(n.max.x / t.bucketWidth),
                        s = Math.floor(n.min.y / t.bucketHeight),
                        a = Math.floor(n.max.y / t.bucketHeight);
                      return r(i, o, s, a);
                    },
                    r = function(t, e, r, n) {
                      return {
                        id: `${t},${e},${r},${n}`,
                        startCol: t,
                        endCol: e,
                        startRow: r,
                        endRow: n,
                      };
                    },
                    a = function(t, e) {
                      return `C${t}R${e}`;
                    },
                    u = function(t, e) {
                      var r = (t[e] = []);
                      return r;
                    },
                    l = function(t, e, r) {
                      for (var n = 0; n < e.length; n++) {
                        var o = e[n];
                        if (!(r.id === o.id || (r.isStatic && o.isStatic))) {
                          var s = i.id(r, o), a = t.pairs[s];
                          a ? (a[2] += 1) : (t.pairs[s] = [r, o, 1]);
                        }
                      }
                      e.push(r);
                    },
                    h = function(t, e, r) {
                      e.splice(s.indexOf(e, r), 1);
                      for (var n = 0; n < e.length; n++) {
                        var o = e[n], a = i.id(r, o), u = t.pairs[a];
                        u && (u[2] -= 1);
                      }
                    },
                    c = function(t) {
                      var e, r, n = [];
                      e = s.keys(t.pairs);
                      for (var i = 0; i < e.length; i++) {
                        (r = t.pairs[e[i]]), r[2] > 0
                          ? n.push(r)
                          : delete t.pairs[e[i]];
                      }
                      return n;
                    };
                })();
              },
              {'../core/Common': 14, './Detector': 5, './Pair': 7},
            ],
            7: [
              function(t, e, r) {
                var n = {};
                e.exports = n;
                var i = t('./Contact');
                !(function() {
                  (n.create = function(t, e) {
                    var r = t.bodyA,
                      i = t.bodyB,
                      o = t.parentA,
                      s = t.parentB,
                      a = {
                        id: n.id(r, i),
                        bodyA: r,
                        bodyB: i,
                        contacts: {},
                        activeContacts: [],
                        separation: 0,
                        isActive: !0,
                        isSensor: r.isSensor || i.isSensor,
                        timeCreated: e,
                        timeUpdated: e,
                        inverseMass: o.inverseMass + s.inverseMass,
                        friction: Math.min(o.friction, s.friction),
                        frictionStatic: Math.max(
                          o.frictionStatic,
                          s.frictionStatic,
                        ),
                        restitution: Math.max(o.restitution, s.restitution),
                        slop: Math.max(o.slop, s.slop),
                      };
                    return n.update(a, t, e), a;
                  }), (n.update = function(t, e, r) {
                    var o = t.contacts,
                      s = e.supports,
                      a = t.activeContacts,
                      u = e.parentA,
                      l = e.parentB;
                    if (
                      ((t.collision = e), (t.inverseMass =
                        u.inverseMass + l.inverseMass), (t.friction = Math.min(
                        u.friction,
                        l.friction,
                      )), (t.frictionStatic = Math.max(
                        u.frictionStatic,
                        l.frictionStatic,
                      )), (t.restitution = Math.max(
                        u.restitution,
                        l.restitution,
                      )), (t.slop = Math.max(
                        u.slop,
                        l.slop,
                      )), (a.length = 0), e.collided)
                    ) {
                      for (var h = 0; h < s.length; h++) {
                        var c = s[h], d = i.id(c), f = o[d];
                        f ? a.push(f) : a.push((o[d] = i.create(c)));
                      }
                      (t.separation = e.depth), n.setActive(t, !0, r);
                    } else { t.isActive === !0 && n.setActive(t, !1, r); }
                  }), (n.setActive = function(t, e, r) {
                    e
                      ? ((t.isActive = !0), (t.timeUpdated = r))
                      : ((t.isActive = !1), (t.activeContacts.length = 0));
                  }), (n.id = function(t, e) {
                    return t.id < e.id
                      ? `A${t.id}B${e.id}`
                      : `A${e.id}B${t.id}`;
                  });
                })();
              },
              {'./Contact': 4},
            ],
            8: [
              function(t, e, r) {
                var n = {};
                e.exports = n;
                var i = t('./Pair'), o = t('../core/Common');
                !(function() {
                  var t = 1e3;
                  (n.create = function(t) {
                    return o.extend(
                      {
                        table: {},
                        list: [],
                        collisionStart: [],
                        collisionActive: [],
                        collisionEnd: [],
                      },
                      t,
                    );
                  }), (n.update = function(t, e, r) {
                    var n,
                      s,
                      a,
                      u,
                      l = t.list,
                      h = t.table,
                      c = t.collisionStart,
                      d = t.collisionEnd,
                      f = t.collisionActive,
                      p = [];
                    for (
                      (c.length = 0), (d.length = 0), (f.length = 0), (u = 0);
                      u < e.length;
                      u++
                    ) {
                      (n = e[u]), n.collided &&
                        ((s = i.id(n.bodyA, n.bodyB)), p.push(s), (a = h[s]), a
                          ? (a.isActive ? f.push(a) : c.push(a), i.update(
                              a,
                              n,
                              r,
                            ))
                          : ((a = i.create(n, r)), (h[s] = a), c.push(
                              a,
                            ), l.push(a)));
                    }
                    for (u = 0; u < l.length; u++) {
                      (a = l[u]), a.isActive &&
                        o.indexOf(p, a.id) === -1 &&
                        (i.setActive(a, !1, r), d.push(a));
                    }
                  }), (n.removeOld = function(e, r) {
                    var n, i, o, s, a = e.list, u = e.table, l = [];
                    for (s = 0; s < a.length; s++) {
                      (n = a[s]), (i = n.collision), i.bodyA.isSleeping ||
                        i.bodyB.isSleeping
                        ? (n.timeUpdated = r)
                        : r - n.timeUpdated > t && l.push(s);
                    }
                    for (s = 0; s < l.length; s++) {
                      (o = l[s] - s), (n = a[o]), delete u[n.id], a.splice(
                        o,
                        1,
                      );
                    }
                  }), (n.clear = function(t) {
                    return (t.table = {}), (t.list.length = 0), (t.collisionStart.length = 0), (t.collisionActive.length = 0), (t.collisionEnd.length = 0), t;
                  });
                })();
              },
              {'../core/Common': 14, './Pair': 7},
            ],
            9: [
              function(t, e, r) {
                var n = {};
                e.exports = n;
                var i = t('../geometry/Vector'),
                  o = t('./SAT'),
                  s = t('../geometry/Bounds'),
                  a = t('../factory/Bodies'),
                  u = t('../geometry/Vertices');
                !(function() {
                  (n.ray = function(t, e, r, n) {
                    n = n || 1e-100;
                    for (
                      var u = i.angle(e, r),
                        l = i.magnitude(i.sub(e, r)),
                        h = 0.5 * (r.x + e.x),
                        c = 0.5 * (r.y + e.y),
                        d = a.rectangle(h, c, l, n, {angle: u}),
                        f = [],
                        p = 0;
                      p < t.length;
                      p++
                    ) {
                      var v = t[p];
                      if (s.overlaps(v.bounds, d.bounds)) {
                        for (
                          var y = v.parts.length === 1 ? 0 : 1;
                          y < v.parts.length;
                          y++
                        ) {
                          var g = v.parts[y];
                          if (s.overlaps(g.bounds, d.bounds)) {
                            var m = o.collides(g, d);
                            if (m.collided) {
                              (m.body = m.bodyA = m.bodyB = v), f.push(m);
                              break;
                            }
                          }
                        }
                      }
                    }
                    return f;
                  }), (n.region = function(t, e, r) {
                    for (var n = [], i = 0; i < t.length; i++) {
                      var o = t[i], a = s.overlaps(o.bounds, e);
                      ((a && !r) || (!a && r)) && n.push(o);
                    }
                    return n;
                  }), (n.point = function(t, e) {
                    for (var r = [], n = 0; n < t.length; n++) {
                      var i = t[n];
                      if (s.contains(i.bounds, e)) {
                        for (
                          var o = i.parts.length === 1 ? 0 : 1;
                          o < i.parts.length;
                          o++
                        ) {
                          var a = i.parts[o];
                          if (
                            s.contains(a.bounds, e) &&
                            u.contains(a.vertices, e)
                          ) {
                            r.push(i);
                            break;
                          }
                        }
                      }
                    }
                    return r;
                  });
                })();
              },
              {
                '../factory/Bodies': 23,
                '../geometry/Bounds': 26,
                '../geometry/Vector': 28,
                '../geometry/Vertices': 29,
                './SAT': 11,
              },
            ],
            10: [
              function(t, e, r) {
                var n = {};
                e.exports = n;
                var i = t('../geometry/Vertices'),
                  o = t('../geometry/Vector'),
                  s = t('../core/Common'),
                  a = t('../geometry/Bounds');
                !(function() {
                  (n._restingThresh = 4), (n._restingThreshTangent = 6), (n._positionDampen = 0.9), (n._positionWarming = 0.8), (n._frictionNormalMultiplier = 5), (n.preSolvePosition = function(
                    t,
                  ) {
                    var e, r, n;
                    for (e = 0; e < t.length; e++) {
                      (r = t[e]), r.isActive &&
                        ((n =
                          r.activeContacts
                            .length), (r.collision.parentA.totalContacts += n), (r.collision.parentB.totalContacts += n));
                    }
                  }), (n.solvePosition = function(t, e) {
                    var r,
                      i,
                      s,
                      a,
                      u,
                      l,
                      h,
                      c,
                      d,
                      f = o._temp[0],
                      p = o._temp[1],
                      v = o._temp[2],
                      y = o._temp[3];
                    for (r = 0; r < t.length; r++) {
                      (i = t[r]), i.isActive &&
                        !i.isSensor &&
                        ((s = i.collision), (a = s.parentA), (u =
                          s.parentB), (l = s.normal), (h = o.sub(
                          o.add(u.positionImpulse, u.position, f),
                          o.add(
                            a.positionImpulse,
                            o.sub(u.position, s.penetration, p),
                            v,
                          ),
                          y,
                        )), (i.separation = o.dot(l, h)));
                    }
                    for (r = 0; r < t.length; r++) {
                      (i = t[r]), !i.isActive ||
                        i.isSensor ||
                        i.separation < 0 ||
                        ((s = i.collision), (a = s.parentA), (u =
                          s.parentB), (l = s.normal), (d =
                          (i.separation - i.slop) * e), (a.isStatic ||
                          u.isStatic) &&
                          (d *= 2), a.isStatic ||
                          a.isSleeping ||
                          ((c =
                            n._positionDampen /
                            a.totalContacts), (a.positionImpulse.x +=
                            l.x * d * c), (a.positionImpulse.y +=
                            l.y * d * c)), u.isStatic ||
                          u.isSleeping ||
                          ((c =
                            n._positionDampen /
                            u.totalContacts), (u.positionImpulse.x -=
                            l.x * d * c), (u.positionImpulse.y -=
                            l.y * d * c)));
                    }
                  }), (n.postSolvePosition = function(t) {
                    for (var e = 0; e < t.length; e++) {
                      var r = t[e];
                      if (
                        ((r.totalContacts = 0), r.positionImpulse.x !== 0 ||
                          r.positionImpulse.y !== 0)
                      ) {
                        for (var s = 0; s < r.parts.length; s++) {
                          var u = r.parts[s];
                          i.translate(u.vertices, r.positionImpulse), a.update(
                            u.bounds,
                            u.vertices,
                            r.velocity,
                          ), (u.position.x +=
                            r.positionImpulse.x), (u.position.y +=
                            r.positionImpulse.y);
                        }
                        (r.positionPrev.x +=
                          r.positionImpulse.x), (r.positionPrev.y +=
                          r.positionImpulse.y), o.dot(
                          r.positionImpulse,
                          r.velocity,
                        ) < 0
                          ? ((r.positionImpulse.x = 0), (r.positionImpulse.y = 0))
                          : ((r.positionImpulse.x *=
                              n._positionWarming), (r.positionImpulse.y *=
                              n._positionWarming));
                      }
                    }
                  }), (n.preSolveVelocity = function(t) {
                    var e,
                      r,
                      n,
                      i,
                      s,
                      a,
                      u,
                      l,
                      h,
                      c,
                      d,
                      f,
                      p,
                      v,
                      y = o._temp[0],
                      g = o._temp[1];
                    for (e = 0; e < t.length; e++) {
                      if (((n = t[e]), n.isActive && !n.isSensor)) {
                        for (
                          (i = n.activeContacts), (s = n.collision), (a =
                            s.parentA), (u = s.parentB), (l = s.normal), (h =
                            s.tangent), (r = 0);
                          r < i.length;
                          r++
                        ) {
                          (c = i[r]), (d = c.vertex), (f =
                            c.normalImpulse), (p = c.tangentImpulse), (f ===
                            0 &&
                            p === 0) ||
                            ((y.x = l.x * f + h.x * p), (y.y =
                              l.y * f + h.y * p), a.isStatic ||
                              a.isSleeping ||
                              ((v = o.sub(
                                d,
                                a.position,
                                g,
                              )), (a.positionPrev.x +=
                                y.x * a.inverseMass), (a.positionPrev.y +=
                                y.y * a.inverseMass), (a.anglePrev +=
                                o.cross(v, y) *
                                a.inverseInertia)), u.isStatic ||
                              u.isSleeping ||
                              ((v = o.sub(
                                d,
                                u.position,
                                g,
                              )), (u.positionPrev.x -=
                                y.x * u.inverseMass), (u.positionPrev.y -=
                                y.y * u.inverseMass), (u.anglePrev -=
                                o.cross(v, y) * u.inverseInertia)));
                        }
                      }
                    }
                  }), (n.solveVelocity = function(t, e) {
                    for (
                      var r = e * e,
                        i = o._temp[0],
                        a = o._temp[1],
                        u = o._temp[2],
                        l = o._temp[3],
                        h = o._temp[4],
                        c = o._temp[5],
                        d = 0;
                      d < t.length;
                      d++
                    ) {
                      var f = t[d];
                      if (f.isActive && !f.isSensor) {
                        var p = f.collision,
                          v = p.parentA,
                          y = p.parentB,
                          g = p.normal,
                          m = p.tangent,
                          b = f.activeContacts,
                          x = 1 / b.length;
                        (v.velocity.x =
                          v.position.x - v.positionPrev.x), (v.velocity.y =
                          v.position.y - v.positionPrev.y), (y.velocity.x =
                          y.position.x - y.positionPrev.x), (y.velocity.y =
                          y.position.y - y.positionPrev.y), (v.angularVelocity =
                          v.angle - v.anglePrev), (y.angularVelocity =
                          y.angle - y.anglePrev);
                        for (var _ = 0; _ < b.length; _++) {
                          var w = b[_],
                            T = w.vertex,
                            E = o.sub(T, v.position, a),
                            S = o.sub(T, y.position, u),
                            P = o.add(
                              v.velocity,
                              o.mult(o.perp(E), v.angularVelocity),
                              l,
                            ),
                            O = o.add(
                              y.velocity,
                              o.mult(o.perp(S), y.angularVelocity),
                              h,
                            ),
                            M = o.sub(P, O, c),
                            C = o.dot(g, M),
                            A = o.dot(m, M),
                            R = Math.abs(A),
                            D = s.sign(A),
                            I = (1 + f.restitution) * C,
                            L =
                              s.clamp(f.separation + C, 0, 1) *
                              n._frictionNormalMultiplier,
                            k = A,
                            B = 1 / 0;
                          R > f.friction * f.frictionStatic * L * r &&
                            ((B = R), (k = s.clamp(f.friction * D * r, -B, B)));
                          var N = o.cross(E, g),
                            F = o.cross(S, g),
                            j =
                              x /
                              (v.inverseMass +
                                y.inverseMass +
                                v.inverseInertia * N * N +
                                y.inverseInertia * F * F);
                          if (
                            ((I *= j), (k *= j), C < 0 &&
                              C * C > n._restingThresh * r)
                          ) { w.normalImpulse = 0; } else {
                            var U = w.normalImpulse;
                            (w.normalImpulse = Math.min(
                              w.normalImpulse + I,
                              0,
                            )), (I = w.normalImpulse - U);
                          }
                          if (A * A > n._restingThreshTangent * r) { w.tangentImpulse = 0; } else {
                            var X = w.tangentImpulse;
                            (w.tangentImpulse = s.clamp(
                              w.tangentImpulse + k,
                              -B,
                              B,
                            )), (k = w.tangentImpulse - X);
                          }
                          (i.x = g.x * I + m.x * k), (i.y =
                            g.y * I + m.y * k), v.isStatic ||
                            v.isSleeping ||
                            ((v.positionPrev.x +=
                              i.x * v.inverseMass), (v.positionPrev.y +=
                              i.y * v.inverseMass), (v.anglePrev +=
                              o.cross(E, i) * v.inverseInertia)), y.isStatic ||
                            y.isSleeping ||
                            ((y.positionPrev.x -=
                              i.x * y.inverseMass), (y.positionPrev.y -=
                              i.y * y.inverseMass), (y.anglePrev -=
                              o.cross(S, i) * y.inverseInertia));
                        }
                      }
                    }
                  });
                })();
              },
              {
                '../core/Common': 14,
                '../geometry/Bounds': 26,
                '../geometry/Vector': 28,
                '../geometry/Vertices': 29,
              },
            ],
            11: [
              function(t, e, r) {
                var n = {};
                e.exports = n;
                var i = t('../geometry/Vertices'), o = t('../geometry/Vector');
                !(function() {
                  n.collides = function(e, n, s) {
                    var a, u, l, h, c = !1;
                    if (s) {
                      var d = e.parent,
                        f = n.parent,
                        p =
                          d.speed * d.speed +
                          d.angularSpeed * d.angularSpeed +
                          f.speed * f.speed +
                          f.angularSpeed * f.angularSpeed;
                      (c = s && s.collided && p < 0.2), (h = s);
                    } else { h = {collided: !1, bodyA: e, bodyB: n}; }
                    if (s && c) {
                      var v = h.axisBody,
                        y = v === e ? n : e,
                        g = [v.axes[s.axisNumber]];
                      if (
                        ((l = t(
                          v.vertices,
                          y.vertices,
                          g,
                        )), (h.reused = !0), l.overlap <= 0)
                      ) { return (h.collided = !1), h; }
                    } else {
                      if (
                        ((a = t(e.vertices, n.vertices, e.axes)), a.overlap <=
                          0)
                      ) { return (h.collided = !1), h; }
                      if (
                        ((u = t(n.vertices, e.vertices, n.axes)), u.overlap <=
                          0)
                      ) { return (h.collided = !1), h; }
                      a.overlap < u.overlap
                        ? ((l = a), (h.axisBody = e))
                        : ((l = u), (h.axisBody = n)), (h.axisNumber =
                        l.axisNumber);
                    }
                    (h.bodyA = e.id < n.id ? e : n), (h.bodyB = e.id < n.id
                      ? n
                      : e), (h.collided = !0), (h.depth =
                      l.overlap), (h.parentA = h.bodyA.parent), (h.parentB =
                      h.bodyB.parent), (e = h.bodyA), (n = h.bodyB), o.dot(
                      l.axis,
                      o.sub(n.position, e.position),
                    ) < 0
                      ? (h.normal = {x: l.axis.x, y: l.axis.y})
                      : (h.normal = {
                        x: -l.axis.x,
                        y: -l.axis.y,
                      }), (h.tangent = o.perp(
                      h.normal,
                    )), (h.penetration = h.penetration || {}), (h.penetration.x =
                      h.normal.x * h.depth), (h.penetration.y =
                      h.normal.y * h.depth);
                    var m = r(e, n, h.normal), b = [];
                    if (
                      (i.contains(e.vertices, m[0]) && b.push(m[0]), i.contains(
                        e.vertices,
                        m[1],
                      ) && b.push(m[1]), b.length < 2)
                    ) {
                      var x = r(n, e, o.neg(h.normal));
                      i.contains(n.vertices, x[0]) && b.push(x[0]), b.length <
                        2 &&
                        i.contains(n.vertices, x[1]) &&
                        b.push(x[1]);
                    }
                    return b.length < 1 && (b = [m[0]]), (h.supports = b), h;
                  };
                  var t = function(t, r, n) {
                      for (
                      var i,
                        s,
                        a = o._temp[0],
                        u = o._temp[1],
                        l = {overlap: Number.MAX_VALUE},
                        h = 0;
                      h < n.length;
                      h++
                    ) {
                        if (
                        ((s = n[h]), e(a, t, s), e(u, r, s), (i = Math.min(
                          a.max - u.min,
                          u.max - a.min,
                        )), i <= 0)
                      ) { return (l.overlap = i), l; }
                        i < l.overlap &&
                        ((l.overlap = i), (l.axis = s), (l.axisNumber = h));
                      }
                      return l;
                    },
                    e = function(t, e, r) {
                      for (
                        var n = o.dot(e[0], r), i = n, s = 1;
                        s < e.length;
                        s += 1
                      ) {
                        var a = o.dot(e[s], r);
                        a > i ? (i = a) : a < n && (n = a);
                      }
                      (t.min = n), (t.max = i);
                    },
                    r = function(t, e, r) {
                      for (
                        var n,
                          i,
                          s,
                          a,
                          u = Number.MAX_VALUE,
                          l = o._temp[0],
                          h = e.vertices,
                          c = t.position,
                          d = 0;
                        d < h.length;
                        d++
                      ) {
                        (i = h[d]), (l.x = i.x - c.x), (l.y =
                          i.y - c.y), (n = -o.dot(r, l)), n < u &&
                          ((u = n), (s = i));
                      }
                      var f = s.index - 1 >= 0 ? s.index - 1 : h.length - 1;
                      (i = h[f]), (l.x = i.x - c.x), (l.y =
                        i.y - c.y), (u = -o.dot(r, l)), (a = i);
                      var p = (s.index + 1) % h.length;
                      return (i = h[p]), (l.x = i.x - c.x), (l.y =
                        i.y - c.y), (n = -o.dot(r, l)), n < u && (a = i), [
                          s,
                          a,
                        ];
                    };
                })();
              },
              {'../geometry/Vector': 28, '../geometry/Vertices': 29},
            ],
            12: [
              function(t, e, r) {
                var n = {};
                e.exports = n;
                var i = t('../geometry/Vertices'),
                  o = t('../geometry/Vector'),
                  s = t('../core/Sleeping'),
                  a = t('../geometry/Bounds'),
                  u = t('../geometry/Axes'),
                  l = t('../core/Common');
                !(function() {
                  var t = 1e-6, e = 0.001;
                  (n.create = function(e) {
                    var r = e;
                    r.bodyA &&
                      !r.pointA &&
                      (r.pointA = {x: 0, y: 0}), r.bodyB &&
                      !r.pointB &&
                      (r.pointB = {x: 0, y: 0});
                    var n = r.bodyA
                      ? o.add(r.bodyA.position, r.pointA)
                      : r.pointA,
                      i = r.bodyB
                        ? o.add(r.bodyB.position, r.pointB)
                        : r.pointB,
                      s = o.magnitude(o.sub(n, i));
                    r.length = r.length || s || t;
                    var a = {visible: !0, lineWidth: 2, strokeStyle: '#ffffff'};
                    return (r.render = l.extend(a, r.render)), (r.id =
                      r.id || l.nextId()), (r.label =
                      r.label || 'Constraint'), (r.type =
                      'constraint'), (r.stiffness =
                      r.stiffness || 1), (r.angularStiffness =
                      r.angularStiffness || 0), (r.angleA = r.bodyA
                      ? r.bodyA.angle
                      : r.angleA), (r.angleB = r.bodyB
                      ? r.bodyB.angle
                      : r.angleB), (r.plugin = {}), r;
                  }), (n.solveAll = function(t, e) {
                    for (var r = 0; r < t.length; r++) { n.solve(t[r], e); }
                  }), (n.solve = function(r, n) {
                    var i = r.bodyA, s = r.bodyB, a = r.pointA, u = r.pointB;
                    i &&
                      !i.isStatic &&
                      ((r.pointA = o.rotate(a, i.angle - r.angleA)), (r.angleA =
                        i.angle)), s &&
                      !s.isStatic &&
                      ((r.pointB = o.rotate(u, s.angle - r.angleB)), (r.angleB =
                        s.angle));
                    var l = a, h = u;
                    if (
                      (i && (l = o.add(i.position, a)), s &&
                        (h = o.add(s.position, u)), l && h)
                    ) {
                      var c = o.sub(l, h), d = o.magnitude(c);
                      d === 0 && (d = t);
                      var f = (d - r.length) / d,
                        p = o.div(c, d),
                        v = o.mult(c, 0.5 * f * r.stiffness * n * n);
                      if (!(Math.abs(1 - d / r.length) < e * n)) {
                        var y, g, m, b, x, _, w, T;
                        i && !i.isStatic
                          ? ((m = {
                            x: l.x - i.position.x + v.x,
                            y: l.y - i.position.y + v.y,
                          }), (i.velocity.x =
                              i.position.x - i.positionPrev.x), (i.velocity.y =
                              i.position.y -
                              i.positionPrev.y), (i.angularVelocity =
                              i.angle - i.anglePrev), (y = o.add(
                              i.velocity,
                              o.mult(o.perp(m), i.angularVelocity),
                            )), (x = o.dot(m, p)), (w =
                              i.inverseMass + i.inverseInertia * x * x))
                          : ((y = {x: 0, y: 0}), (w = i
                              ? i.inverseMass
                              : 0)), s && !s.isStatic
                          ? ((b = {
                            x: h.x - s.position.x - v.x,
                            y: h.y - s.position.y - v.y,
                          }), (s.velocity.x =
                              s.position.x - s.positionPrev.x), (s.velocity.y =
                              s.position.y -
                              s.positionPrev.y), (s.angularVelocity =
                              s.angle - s.anglePrev), (g = o.add(
                              s.velocity,
                              o.mult(o.perp(b), s.angularVelocity),
                            )), (_ = o.dot(b, p)), (T =
                              s.inverseMass + s.inverseInertia * _ * _))
                          : ((g = {x: 0, y: 0}), (T = s ? s.inverseMass : 0));
                        var E = o.sub(g, y), S = o.dot(p, E) / (w + T);
                        S > 0 && (S = 0);
                        var P, O = {x: p.x * S, y: p.y * S};
                        i &&
                          !i.isStatic &&
                          ((P =
                            o.cross(m, O) *
                            i.inverseInertia *
                            (1 - r.angularStiffness)), (i.constraintImpulse.x -=
                            v.x), (i.constraintImpulse.y -=
                            v.y), (i.constraintImpulse.angle += P), (i.position.x -=
                            v.x), (i.position.y -= v.y), (i.angle += P)), s &&
                          !s.isStatic &&
                          ((P =
                            o.cross(b, O) *
                            s.inverseInertia *
                            (1 - r.angularStiffness)), (s.constraintImpulse.x +=
                            v.x), (s.constraintImpulse.y +=
                            v.y), (s.constraintImpulse.angle -= P), (s.position.x +=
                            v.x), (s.position.y += v.y), (s.angle -= P));
                      }
                    }
                  }), (n.postSolveAll = function(t) {
                    for (var e = 0; e < t.length; e++) {
                      var r = t[e], n = r.constraintImpulse;
                      if (n.x !== 0 || n.y !== 0 || n.angle !== 0) {
                        s.set(r, !1);
                        for (var l = 0; l < r.parts.length; l++) {
                          var h = r.parts[l];
                          i.translate(h.vertices, n), l > 0 &&
                            ((h.position.x += n.x), (h.position.y +=
                              n.y)), n.angle !== 0 &&
                            (i.rotate(
                              h.vertices,
                              n.angle,
                              r.position,
                            ), u.rotate(h.axes, n.angle), l > 0 &&
                              o.rotateAbout(
                                h.position,
                                n.angle,
                                r.position,
                                h.position,
                              )), a.update(h.bounds, h.vertices, r.velocity);
                        }
                        (n.angle = 0), (n.x = 0), (n.y = 0);
                      }
                    }
                  });
                })();
              },
              {
                '../core/Common': 14,
                '../core/Sleeping': 22,
                '../geometry/Axes': 25,
                '../geometry/Bounds': 26,
                '../geometry/Vector': 28,
                '../geometry/Vertices': 29,
              },
            ],
            13: [
              function(t, e, r) {
                var n = {};
                e.exports = n;
                var i = t('../geometry/Vertices'),
                  o = t('../core/Sleeping'),
                  s = t('../core/Mouse'),
                  a = t('../core/Events'),
                  u = t('../collision/Detector'),
                  l = t('./Constraint'),
                  h = t('../body/Composite'),
                  c = t('../core/Common'),
                  d = t('../geometry/Bounds');
                !(function() {
                  (n.create = function(e, r) {
                    var i = (e ? e.mouse : null) || (r ? r.mouse : null);
                    i ||
                      (e && e.render && e.render.canvas
                        ? (i = s.create(e.render.canvas))
                        : r && r.element
                            ? (i = s.create(r.element))
                            : ((i = s.create()), c.warn(
                                'MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected',
                              )));
                    var o = l.create({
                        label: 'Mouse Constraint',
                        pointA: i.position,
                        pointB: {x: 0, y: 0},
                        length: 0.01,
                        stiffness: 0.1,
                        angularStiffness: 1,
                        render: {strokeStyle: '#90EE90', lineWidth: 3},
                      }),
                      u = {
                        type: 'mouseConstraint',
                        mouse: i,
                        element: null,
                        body: null,
                        constraint: o,
                        collisionFilter: {
                          category: 1,
                          mask: 4294967295,
                          group: 0,
                        },
                      },
                      d = c.extend(u, r);
                    return a.on(e, 'beforeUpdate', () => {
                      var r = h.allBodies(e.world);
                      n.update(d, r), t(d);
                    }), d;
                  }), (n.update = function(t, e) {
                    var r = t.mouse, n = t.constraint, s = t.body;
                    if (r.button === 0) {
                      if (n.bodyB) { o.set(n.bodyB, !1), (n.pointA = r.position); } else {
                        for (var l = 0; l < e.length; l++) {
                          if (
                            ((s = e[l]), d.contains(s.bounds, r.position) &&
                              u.canCollide(
                                s.collisionFilter,
                                t.collisionFilter,
                              ))
                          ) {
                            for (
                              var h = s.parts.length > 1 ? 1 : 0;
                              h < s.parts.length;
                              h++
                            ) {
                              var c = s.parts[h];
                              if (i.contains(c.vertices, r.position)) {
                                (n.pointA =
                                  r.position), (n.bodyB = t.body = s), (n.pointB = {
                                    x: r.position.x - s.position.x,
                                    y: r.position.y - s.position.y,
                                  }), (n.angleB = s.angle), o.set(
                                  s,
                                  !1,
                                ), a.trigger(t, 'startdrag', {
                                  mouse: r,
                                  body: s,
                                });
                                break;
                              }
                            }
                          }
                        }
                      }
                    } else {
                      (n.bodyB = t.body = null), (n.pointB = null), s &&
                        a.trigger(t, 'enddrag', {mouse: r, body: s});
                    }
                  });
                  var t = function(t) {
                    var e = t.mouse, r = e.sourceEvents;
                    r.mousemove &&
                      a.trigger(t, 'mousemove', {mouse: e}), r.mousedown &&
                      a.trigger(t, 'mousedown', {mouse: e}), r.mouseup &&
                      a.trigger(t, 'mouseup', {mouse: e}), s.clearSourceEvents(
                      e,
                    );
                  };
                })();
              },
              {
                '../body/Composite': 2,
                '../collision/Detector': 5,
                '../core/Common': 14,
                '../core/Events': 16,
                '../core/Mouse': 19,
                '../core/Sleeping': 22,
                '../geometry/Bounds': 26,
                '../geometry/Vertices': 29,
                './Constraint': 12,
              },
            ],
            14: [
              function(t, e, r) {
                var n = {};
                (e.exports = n), (function() {
                  (n._nextId = 0), (n._seed = 0), (n.extend = function(t, e) {
                    var r, i;
                    typeof e === 'boolean'
                      ? ((r = 2), (i = e))
                      : ((r = 1), (i = !0));
                    for (var o = r; o < arguments.length; o++) {
                      var s = arguments[o];
                      if (s) {
                        for (var a in s) {
                          i && s[a] && s[a].constructor === Object
                            ? t[a] && t[a].constructor !== Object
                                ? (t[a] = s[a])
                                : ((t[a] = t[a] || {}), n.extend(t[a], i, s[a]))
                            : (t[a] = s[a]);
                        }
                      }
                    }
                    return t;
                  }), (n.clone = function(t, e) {
                    return n.extend({}, e, t);
                  }), (n.keys = function(t) {
                    if (Object.keys) { return Object.keys(t); }
                    var e = [];
                    for (var r in t) { e.push(r); }
                    return e;
                  }), (n.values = function(t) {
                    var e = [];
                    if (Object.keys) {
                      for (var r = Object.keys(t), n = 0; n < r.length; n++) { e.push(t[r[n]]); }
                      return e;
                    }
                    for (var i in t) { e.push(t[i]); }
                    return e;
                  }), (n.get = function(t, e, r, n) {
                    e = e.split('.').slice(r, n);
                    for (var i = 0; i < e.length; i += 1) { t = t[e[i]]; }
                    return t;
                  }), (n.set = function(t, e, r, i, o) {
                    var s = e.split('.').slice(i, o);
                    return (n.get(t, e, 0, -1)[s[s.length - 1]] = r), r;
                  }), (n.shadeColor = function(t, e) {
                    var r = parseInt(t.slice(1), 16),
                      n = Math.round(2.55 * e),
                      i = (r >> 16) + n,
                      o = ((r >> 8) & 255) + n,
                      s = (255 & r) + n;
                    return (
                      `#${
                      (16777216 +
                        65536 * (i < 255 ? (i < 1 ? 0 : i) : 255) +
                        256 * (o < 255 ? (o < 1 ? 0 : o) : 255) +
                        (s < 255 ? (s < 1 ? 0 : s) : 255))
                        .toString(16)
                        .slice(1)}`
                    );
                  }), (n.shuffle = function(t) {
                    for (var e = t.length - 1; e > 0; e--) {
                      var r = Math.floor(n.random() * (e + 1)), i = t[e];
                      (t[e] = t[r]), (t[r] = i);
                    }
                    return t;
                  }), (n.choose = function(t) {
                    return t[Math.floor(n.random() * t.length)];
                  }), (n.isElement = function(t) {
                    try {
                      return t instanceof HTMLElement;
                    } catch (e) {
                      return (
                        typeof t === 'object' &&
                        t.nodeType === 1 &&
                        typeof t.style === 'object' &&
                        typeof t.ownerDocument === 'object'
                      );
                    }
                  }), (n.isArray = function(t) {
                    return (
                      Object.prototype.toString.call(t) === '[object Array]'
                    );
                  }), (n.isFunction = function(t) {
                    return typeof t === 'function';
                  }), (n.isPlainObject = function(t) {
                    return typeof t === 'object' && t.constructor === Object;
                  }), (n.isString = function(t) {
                    return toString.call(t) === '[object String]';
                  }), (n.clamp = function(t, e, r) {
                    return t < e ? e : t > r ? r : t;
                  }), (n.sign = function(t) {
                    return t < 0 ? -1 : 1;
                  }), (n.now = function() {
                    var t = window.performance || {};
                    return (t.now = (function() {
                      return (
                        t.now ||
                        t.webkitNow ||
                        t.msNow ||
                        t.oNow ||
                        t.mozNow ||
                        function() {
                          return Number(new Date());
                        }
                      );
                    })()), t.now();
                  }), (n.random = function(e, r) {
                    return (e = typeof e !== 'undefined'
                      ? e
                      : 0), (r = typeof r !== 'undefined' ? r : 1), e +
                      t() * (r - e);
                  });
                  var t = function() {
                    return (n._seed =
                      (9301 * n._seed + 49297) % 233280), n._seed / 233280;
                  };
                  (n.colorToNumber = function(t) {
                    return (t = t.replace('#', '')), t.length == 3 &&
                      (t =
                        t.charAt(0) +
                        t.charAt(0) +
                        t.charAt(1) +
                        t.charAt(1) +
                        t.charAt(2) +
                        t.charAt(2)), parseInt(t, 16);
                  }), (n.logLevel = 1), (n.log = function() {
                    console &&
                      n.logLevel > 0 &&
                      n.logLevel <= 3 &&
                      console.log(...['matter-js:'].concat(
                          Array.prototype.slice.call(arguments),
                        ));
                  }), (n.info = function() {
                    console &&
                      n.logLevel > 0 &&
                      n.logLevel <= 2 &&
                      console.info(...['matter-js:'].concat(
                          Array.prototype.slice.call(arguments),
                        ));
                  }), (n.warn = function() {
                    console &&
                      n.logLevel > 0 &&
                      n.logLevel <= 3 &&
                      console.warn(...['matter-js:'].concat(
                          Array.prototype.slice.call(arguments),
                        ));
                  }), (n.nextId = function() {
                    return n._nextId++;
                  }), (n.indexOf = function(t, e) {
                    if (t.indexOf) { return t.indexOf(e); }
                    for (var r = 0; r < t.length; r++) { if (t[r] === e) { return r; } }
                    return -1;
                  }), (n.map = function(t, e) {
                    if (t.map) { return t.map(e); }
                    for (var r = [], n = 0; n < t.length; n += 1) { r.push(e(t[n])); }
                    return r;
                  }), (n.topologicalSort = function(t) {
                    var r = [], n = [], i = [];
                    for (var o in t) { n[o] || i[o] || e(o, n, i, t, r); }
                    return r;
                  });
                  var e = function(t, r, n, i, o) {
                    var s = i[t] || [];
                    n[t] = !0;
                    for (var a = 0; a < s.length; a += 1) {
                      var u = s[a];
                      n[u] || r[u] || e(u, r, n, i, o);
                    }
                    (n[t] = !1), (r[t] = !0), o.push(t);
                  };
                  (n.chain = function() {
                    for (var t = [], e = 0; e < arguments.length; e += 1) {
                      var r = arguments[e];
                      r._chained ? t.push(...r._chained) : t.push(r);
                    }
                    var n = function() {
                      for (
                        var e,
                          r = new Array(arguments.length),
                          n = 0,
                          i = arguments.length;
                        n < i;
                        n++
                      ) { r[n] = arguments[n]; }
                      for (n = 0; n < t.length; n += 1) {
                        var o = t[n].apply(e, r);
                        typeof o !== 'undefined' && (e = o);
                      }
                      return e;
                    };
                    return (n._chained = t), n;
                  }), (n.chainPathBefore = function(t, e, r) {
                    return n.set(t, e, n.chain(r, n.get(t, e)));
                  }), (n.chainPathAfter = function(t, e, r) {
                    return n.set(t, e, n.chain(n.get(t, e), r));
                  });
                })();
              },
              {},
            ],
            15: [
              function(t, e, r) {
                var n = {};
                e.exports = n;
                var i = t('../body/World'),
                  o = t('./Sleeping'),
                  s = t('../collision/Resolver'),
                  a = t('../render/Render'),
                  u = t('../collision/Pairs'),
                  l = (t('./Metrics'), t('../collision/Grid')),
                  h = t('./Events'),
                  c = t('../body/Composite'),
                  d = t('../constraint/Constraint'),
                  f = t('./Common'),
                  p = t('../body/Body');
                !(function() {
                  (n.create = function(t, e) {
                    (e = f.isElement(t) ? e : t), (t = f.isElement(t)
                      ? t
                      : null), (e = e || {}), (t || e.render) &&
                      f.warn(
                        'Engine.create: engine.render is deprecated (see docs)',
                      );
                    var r = {
                        positionIterations: 6,
                        velocityIterations: 4,
                        constraintIterations: 2,
                        enableSleeping: !1,
                        events: [],
                        plugin: {},
                        timing: {timestamp: 0, timeScale: 1},
                        broadphase: {controller: l},
                      },
                      n = f.extend(r, e);
                    if (t || n.render) {
                      var o = {element: t, controller: a};
                      n.render = f.extend(o, n.render);
                    }
                    return n.render &&
                      n.render.controller &&
                      (n.render = n.render.controller.create(
                        n.render,
                      )), n.render && (n.render.engine = n), (n.world =
                      e.world ||
                      i.create(
                        n.world,
                      )), (n.pairs = u.create()), (n.broadphase = n.broadphase.controller.create(
                      n.broadphase,
                    )), (n.metrics = n.metrics || {extended: !1}), n;
                  }), (n.update = function(n, i, a) {
                    (i = i || 1e3 / 60), (a = a || 1);
                    var l, f = n.world, p = n.timing, v = n.broadphase, y = [];
                    p.timestamp += i * p.timeScale;
                    var g = {timestamp: p.timestamp};
                    h.trigger(n, 'beforeUpdate', g);
                    var m = c.allBodies(f), b = c.allConstraints(f);
                    for (
                      n.enableSleeping && o.update(m, p.timeScale), e(
                        m,
                        f.gravity,
                      ), r(m, i, p.timeScale, a, f.bounds), (l = 0);
                      l < n.constraintIterations;
                      l++
                    ) { d.solveAll(b, p.timeScale); }
                    d.postSolveAll(m), v.controller
                      ? (f.isModified &&
                          v.controller.clear(v), v.controller.update(
                          v,
                          m,
                          n,
                          f.isModified,
                        ), (y = v.pairsList))
                      : (y = m), f.isModified && c.setModified(f, !1, !1, !0);
                    var x = v.detector(y, n), _ = n.pairs, w = p.timestamp;
                    for (
                      u.update(_, x, w), u.removeOld(_, w), n.enableSleeping &&
                        o.afterCollisions(_.list, p.timeScale), _.collisionStart
                        .length > 0 &&
                        h.trigger(n, 'collisionStart', {
                          pairs: _.collisionStart,
                        }), s.preSolvePosition(_.list), (l = 0);
                      l < n.positionIterations;
                      l++
                    ) { s.solvePosition(_.list, p.timeScale); }
                    for (
                      s.postSolvePosition(m), s.preSolveVelocity(
                        _.list,
                      ), (l = 0);
                      l < n.velocityIterations;
                      l++
                    ) { s.solveVelocity(_.list, p.timeScale); }
                    return _.collisionActive.length > 0 &&
                      h.trigger(n, 'collisionActive', {
                        pairs: _.collisionActive,
                      }), _.collisionEnd.length > 0 &&
                      h.trigger(n, 'collisionEnd', {pairs: _.collisionEnd}), t(
                      m,
                    ), h.trigger(n, 'afterUpdate', g), n;
                  }), (n.merge = function(t, e) {
                    if ((f.extend(t, e), e.world)) {
                      (t.world = e.world), n.clear(t);
                      for (
                        var r = c.allBodies(t.world), i = 0;
                        i < r.length;
                        i++
                      ) {
                        var s = r[i];
                        o.set(s, !1), (s.id = f.nextId());
                      }
                    }
                  }), (n.clear = function(t) {
                    var e = t.world;
                    u.clear(t.pairs);
                    var r = t.broadphase;
                    if (r.controller) {
                      var n = c.allBodies(e);
                      r.controller.clear(r), r.controller.update(r, n, t, !0);
                    }
                  });
                  var t = function(t) {
                      for (var e = 0; e < t.length; e++) {
                        var r = t[e];
                        (r.force.x = 0), (r.force.y = 0), (r.torque = 0);
                      }
                    },
                    e = function(t, e) {
                      var r = typeof e.scale !== 'undefined' ? e.scale : 0.001;
                      if ((e.x !== 0 || e.y !== 0) && r !== 0) {
                        for (var n = 0; n < t.length; n++) {
                          var i = t[n];
                          i.isStatic ||
                            i.isSleeping ||
                            ((i.force.y += i.mass * e.y * r), (i.force.x +=
                              i.mass * e.x * r));
                        }
                      }
                    },
                    r = function(t, e, r, n, i) {
                      for (var o = 0; o < t.length; o++) {
                        var s = t[o];
                        s.isStatic || s.isSleeping || p.update(s, e, r, n);
                      }
                    };
                })();
              },
              {
                '../body/Body': 1,
                '../body/Composite': 2,
                '../body/World': 3,
                '../collision/Grid': 6,
                '../collision/Pairs': 8,
                '../collision/Resolver': 10,
                '../constraint/Constraint': 12,
                '../render/Render': 31,
                './Common': 14,
                './Events': 16,
                './Metrics': 18,
                './Sleeping': 22,
              },
            ],
            16: [
              function(t, e, r) {
                var n = {};
                e.exports = n;
                var i = t('./Common');
                !(function() {
                  (n.on = function(t, e, r) {
                    for (var n, i = e.split(' '), o = 0; o < i.length; o++) {
                      (n = i[o]), (t.events = t.events || {}), (t.events[n] = t
                        .events[n] || []), t.events[n].push(r);
                    }
                    return r;
                  }), (n.off = function(t, e, r) {
                    if (!e) { return void (t.events = {}); }
                    typeof e === 'function' &&
                      ((r = e), (e = i.keys(t.events).join(' ')));
                    for (var n = e.split(' '), o = 0; o < n.length; o++) {
                      var s = t.events[n[o]], a = [];
                      if (r && s) {
                        for (var u = 0; u < s.length; u++) { s[u] !== r && a.push(s[u]); }
                      }
                      t.events[n[o]] = a;
                    }
                  }), (n.trigger = function(t, e, r) {
                    var n, o, s, a;
                    if (t.events) {
                      r || (r = {}), (n = e.split(' '));
                      for (var u = 0; u < n.length; u++) {
                        if (((o = n[u]), (s = t.events[o]))) {
                          (a = i.clone(r, !1)), (a.name = o), (a.source = t);
                          for (var l = 0; l < s.length; l++) { s[l].apply(t, [a]); }
                        }
                      }
                    }
                  });
                })();
              },
              {'./Common': 14},
            ],
            17: [
              function(t, e, r) {
                var n = {};
                e.exports = n;
                var i = t('./Plugin'), o = t('./Common');
                !(function() {
                  (n.name = 'matter-js'), (n.version =
                    '0.12.0'), (n.uses = []), (n.used = []), (n.use = function() {
                      i.use(n, Array.prototype.slice.call(arguments));
                    }), (n.before = function(t, e) {
                      return (t = t.replace(/^Matter./, '')), o.chainPathBefore(
                      n,
                      t,
                      e,
                    );
                    }), (n.after = function(t, e) {
                      return (t = t.replace(/^Matter./, '')), o.chainPathAfter(
                      n,
                      t,
                      e,
                    );
                    });
                })();
              },
              {'./Common': 14, './Plugin': 20},
            ],
            18: [
              function(t, e, r) {},
              {'../body/Composite': 2, './Common': 14},
            ],
            19: [
              function(t, e, r) {
                var n = {};
                e.exports = n;
                var i = t('../core/Common');
                !(function() {
                  (n.create = function(e) {
                    var r = {};
                    return e ||
                      i.log(
                        'Mouse.create: element was undefined, defaulting to document.body',
                        'warn',
                      ), (r.element = e || document.body), (r.absolute = {
                        x: 0,
                        y: 0,
                      }), (r.position = {x: 0, y: 0}), (r.mousedownPosition = {
                        x: 0,
                        y: 0,
                      }), (r.mouseupPosition = {x: 0, y: 0}), (r.offset = {
                        x: 0,
                        y: 0,
                      }), (r.scale = {
                        x: 1,
                        y: 1,
                      }), (r.wheelDelta = 0), (r.button = -1), (r.pixelRatio =
                      r.element.getAttribute('data-pixel-ratio') ||
                      1), (r.sourceEvents = {
                        mousemove: null,
                        mousedown: null,
                        mouseup: null,
                        mousewheel: null,
                      }), (r.mousemove = function(e) {
                        var n = t(e, r.element, r.pixelRatio),
                          i = e.changedTouches;
                        i && ((r.button = 0), e.preventDefault()), (r.absolute.x =
                        n.x), (r.absolute.y = n.y), (r.position.x =
                        r.absolute.x * r.scale.x + r.offset.x), (r.position.y =
                        r.absolute.y * r.scale.y +
                        r.offset.y), (r.sourceEvents.mousemove = e);
                      }), (r.mousedown = function(e) {
                        var n = t(e, r.element, r.pixelRatio),
                          i = e.changedTouches;
                        i
                        ? ((r.button = 0), e.preventDefault())
                        : (r.button = e.button), (r.absolute.x =
                        n.x), (r.absolute.y = n.y), (r.position.x =
                        r.absolute.x * r.scale.x + r.offset.x), (r.position.y =
                        r.absolute.y * r.scale.y +
                        r.offset.y), (r.mousedownPosition.x =
                        r.position.x), (r.mousedownPosition.y =
                        r.position.y), (r.sourceEvents.mousedown = e);
                      }), (r.mouseup = function(e) {
                        var n = t(e, r.element, r.pixelRatio),
                          i = e.changedTouches;
                        i && e.preventDefault(), (r.button = -1), (r.absolute.x =
                        n.x), (r.absolute.y = n.y), (r.position.x =
                        r.absolute.x * r.scale.x + r.offset.x), (r.position.y =
                        r.absolute.y * r.scale.y +
                        r.offset.y), (r.mouseupPosition.x =
                        r.position.x), (r.mouseupPosition.y =
                        r.position.y), (r.sourceEvents.mouseup = e);
                      }), (r.mousewheel = function(t) {
                        (r.wheelDelta = Math.max(
                        -1,
                        Math.min(1, t.wheelDelta || -t.detail),
                      )), t.preventDefault();
                      }), n.setElement(r, r.element), r;
                  }), (n.setElement = function(t, e) {
                    (t.element = e), e.addEventListener(
                      'mousemove',
                      t.mousemove,
                    ), e.addEventListener(
                      'mousedown',
                      t.mousedown,
                    ), e.addEventListener(
                      'mouseup',
                      t.mouseup,
                    ), e.addEventListener(
                      'mousewheel',
                      t.mousewheel,
                    ), e.addEventListener(
                      'DOMMouseScroll',
                      t.mousewheel,
                    ), e.addEventListener(
                      'touchmove',
                      t.mousemove,
                    ), e.addEventListener(
                      'touchstart',
                      t.mousedown,
                    ), e.addEventListener('touchend', t.mouseup);
                  }), (n.clearSourceEvents = function(t) {
                    (t.sourceEvents.mousemove = null), (t.sourceEvents.mousedown = null), (t.sourceEvents.mouseup = null), (t.sourceEvents.mousewheel = null), (t.wheelDelta = 0);
                  }), (n.setOffset = function(t, e) {
                    (t.offset.x = e.x), (t.offset.y = e.y), (t.position.x =
                      t.absolute.x * t.scale.x + t.offset.x), (t.position.y =
                      t.absolute.y * t.scale.y + t.offset.y);
                  }), (n.setScale = function(t, e) {
                    (t.scale.x = e.x), (t.scale.y = e.y), (t.position.x =
                      t.absolute.x * t.scale.x + t.offset.x), (t.position.y =
                      t.absolute.y * t.scale.y + t.offset.y);
                  });
                  var t = function(t, e, r) {
                    var n,
                      i,
                      o = e.getBoundingClientRect(),
                      s =
                        document.documentElement ||
                        document.body.parentNode ||
                        document.body,
                      a = void 0 !== window.pageXOffset
                        ? window.pageXOffset
                        : s.scrollLeft,
                      u = void 0 !== window.pageYOffset
                        ? window.pageYOffset
                        : s.scrollTop,
                      l = t.changedTouches;
                    return l
                      ? ((n = l[0].pageX - o.left - a), (i =
                          l[0].pageY - o.top - u))
                      : ((n = t.pageX - o.left - a), (i =
                          t.pageY - o.top - u)), {
                            x: n / (e.clientWidth / (e.width || e.clientWidth) * r),
                            y: i /
                        (e.clientHeight / (e.height || e.clientHeight) * r),
                          };
                  };
                })();
              },
              {'../core/Common': 14},
            ],
            20: [
              function(t, e, r) {
                var n = {};
                e.exports = n;
                var i = t('./Common');
                !(function() {
                  (n._registry = {}), (n.register = function(t) {
                    if (
                      (n.isPlugin(t) ||
                        i.warn(
                          'Plugin.register:',
                          n.toString(t),
                          'does not implement all required fields.',
                        ), t.name in n._registry)
                    ) {
                      var e = n._registry[t.name],
                        r = n.versionParse(t.version).number,
                        o = n.versionParse(e.version).number;
                      r > o
                        ? (i.warn(
                            'Plugin.register:',
                            n.toString(e),
                            'was upgraded to',
                            n.toString(t),
                          ), (n._registry[t.name] = t))
                        : r < o
                            ? i.warn(
                                'Plugin.register:',
                                n.toString(e),
                                'can not be downgraded to',
                                n.toString(t),
                              )
                            : t !== e &&
                                i.warn(
                                  'Plugin.register:',
                                  n.toString(t),
                                  'is already registered to different plugin object',
                                );
                    } else { n._registry[t.name] = t; }
                    return t;
                  }), (n.resolve = function(t) {
                    return n._registry[n.dependencyParse(t).name];
                  }), (n.toString = function(t) {
                    return typeof t === 'string'
                      ? t
                      : `${t.name || 'anonymous'
                          }@${
                          t.version || t.range || '0.0.0'}`;
                  }), (n.isPlugin = function(t) {
                    return t && t.name && t.version && t.install;
                  }), (n.isUsed = function(t, e) {
                    return t.used.indexOf(e) > -1;
                  }), (n.isFor = function(t, e) {
                    var r = t.for && n.dependencyParse(t.for);
                    return (
                      !t.for ||
                      (e.name === r.name &&
                        n.versionSatisfies(e.version, r.range))
                    );
                  }), (n.use = function(t, e) {
                    if (
                      ((t.uses = (t.uses || []).concat(e || [])), t.uses.length ===
                        0)
                    ) {
                      return void i.warn(
                        'Plugin.use:',
                        n.toString(t),
                        'does not specify any dependencies to install.',
                      );
                    }
                    for (
                      var r = n.dependencies(t),
                        o = i.topologicalSort(r),
                        s = [],
                        a = 0;
                      a < o.length;
                      a += 1
                    ) {
                      if (o[a] !== t.name) {
                        var u = n.resolve(o[a]);
                        u
                          ? n.isUsed(t, u.name) ||
                              (n.isFor(u, t) ||
                                (i.warn(
                                  'Plugin.use:',
                                  n.toString(u),
                                  'is for',
                                  u.for,
                                  'but installed on',
                                  `${n.toString(t)}.`,
                                ), (u._warned = !0)), u.install
                                ? u.install(t)
                                : (i.warn(
                                    'Plugin.use:',
                                    n.toString(u),
                                    'does not specify an install function.',
                                  ), (u._warned = !0)), u._warned
                                ? (s.push(
                                    `🔶 ${n.toString(u)}`,
                                  ), delete u._warned)
                                : s.push(`✅ ${n.toString(u)}`), t.used.push(
                                u.name,
                              ))
                          : s.push(`❌ ${o[a]}`);
                      }
                    }
                    s.length > 0 && i.info(s.join('  '));
                  }), (n.dependencies = function(t, e) {
                    var r = n.dependencyParse(t), o = r.name;
                    if (((e = e || {}), !(o in e))) {
                      (t = n.resolve(t) || t), (e[
                        o
                      ] = i.map(t.uses || [], e => {
                        n.isPlugin(e) && n.register(e);
                        var o = n.dependencyParse(e), s = n.resolve(e);
                        return s && !n.versionSatisfies(s.version, o.range)
                          ? (i.warn(
                              'Plugin.dependencies:',
                              n.toString(s),
                              'does not satisfy',
                              n.toString(o),
                              'used by',
                              `${n.toString(r)}.`,
                            ), (s._warned = !0), (t._warned = !0))
                          : s ||
                              (i.warn(
                                'Plugin.dependencies:',
                                n.toString(e),
                                'used by',
                                n.toString(r),
                                'could not be resolved.',
                              ), (t._warned = !0)), o.name;
                      }));
                      for (var s = 0; s < e[o].length; s += 1) { n.dependencies(e[o][s], e); }
                      return e;
                    }
                  }), (n.dependencyParse = function(t) {
                    if (i.isString(t)) {
                      var e = /^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-]+)?))?$/;
                      return e.test(t) ||
                        i.warn(
                          'Plugin.dependencyParse:',
                          t,
                          'is not a valid dependency string.',
                        ), {
                          name: t.split('@')[0],
                          range: t.split('@')[1] || '*',
                        };
                    }
                    return {name: t.name, range: t.range || t.version};
                  }), (n.versionParse = function(t) {
                    var e = /^\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-]+)?$/;
                    e.test(t) ||
                      i.warn(
                        'Plugin.versionParse:',
                        t,
                        'is not a valid version or range.',
                      );
                    var r = t.split('-');
                    t = r[0];
                    var n = isNaN(Number(t[0])),
                      o = n ? t.substr(1) : t,
                      s = i.map(o.split('.'), t => {
                        return Number(t);
                      });
                    return {
                      isRange: n,
                      version: o,
                      range: t,
                      operator: n ? t[0] : '',
                      parts: s,
                      prerelease: r[1],
                      number: 1e8 * s[0] + 1e4 * s[1] + s[2],
                    };
                  }), (n.versionSatisfies = function(t, e) {
                    e = e || '*';
                    var r = n.versionParse(e),
                      i = r.parts,
                      o = n.versionParse(t),
                      s = o.parts;
                    if (r.isRange) {
                      if (r.operator === '*' || t === '*') { return !0; }
                      if (r.operator === '~') { return s[0] === i[0] && s[1] === i[1] && s[2] >= i[2]; }
                      if (r.operator === '^') {
                        return i[0] > 0
                          ? s[0] === i[0] && o.number >= r.number
                          : i[1] > 0
                              ? s[1] === i[1] && s[2] >= i[2]
                              : s[2] === i[2];
                      }
                    }
                    return t === e || t === '*';
                  });
                })();
              },
              {'./Common': 14},
            ],
            21: [
              function(t, e, r) {
                var n = {};
                e.exports = n;
                var i = t('./Events'), o = t('./Engine'), s = t('./Common');
                !(function() {
                  var t, e;
                  if (
                    (typeof window !== 'undefined' &&
                      ((t =
                        window.requestAnimationFrame ||
                        window.webkitRequestAnimationFrame ||
                        window.mozRequestAnimationFrame ||
                        window.msRequestAnimationFrame), (e =
                        window.cancelAnimationFrame ||
                        window.mozCancelAnimationFrame ||
                        window.webkitCancelAnimationFrame ||
                        window.msCancelAnimationFrame)), !t)
                  ) {
                    var r;
                    (t = function(t) {
                      r = setTimeout(() => {
                        t(s.now());
                      }, 1e3 / 60);
                    }), (e = function() {
                      clearTimeout(r);
                    });
                  }
                  (n.create = function(t) {
                    var e = {
                        fps: 60,
                        correction: 1,
                        deltaSampleSize: 60,
                        counterTimestamp: 0,
                        frameCounter: 0,
                        deltaHistory: [],
                        timePrev: null,
                        timeScalePrev: 1,
                        frameRequestId: null,
                        isFixed: !1,
                        enabled: !0,
                      },
                      r = s.extend(e, t);
                    return (r.delta = r.delta || 1e3 / r.fps), (r.deltaMin =
                      r.deltaMin || 1e3 / r.fps), (r.deltaMax =
                      r.deltaMax || 1e3 / (0.5 * r.fps)), (r.fps =
                      1e3 / r.delta), r;
                  }), (n.run = function(e, r) {
                    return typeof e.positionIterations !== 'undefined' &&
                      ((r = e), (e = n.create())), (function i(o) {
                        (e.frameRequestId = t(i)), o &&
                        e.enabled &&
                        n.tick(e, r, o);
                      })(), e;
                  }), (n.tick = function(t, e, r) {
                    var n, s = e.timing, a = 1, u = {timestamp: s.timestamp};
                    i.trigger(t, 'beforeTick', u), i.trigger(
                      e,
                      'beforeTick',
                      u,
                    ), t.isFixed
                      ? (n = t.delta)
                      : ((n =
                          r - t.timePrev ||
                          t.delta), (t.timePrev = r), t.deltaHistory.push(
                          n,
                        ), (t.deltaHistory = t.deltaHistory.slice(
                          -t.deltaSampleSize,
                        )), (n = Math.min.apply(null, t.deltaHistory)), (n = n <
                          t.deltaMin
                          ? t.deltaMin
                          : n), (n = n > t.deltaMax ? t.deltaMax : n), (a =
                          n / t.delta), (t.delta = n)), t.timeScalePrev !== 0 &&
                      (a *= s.timeScale / t.timeScalePrev), s.timeScale === 0 &&
                      (a = 0), (t.timeScalePrev =
                      s.timeScale), (t.correction = a), (t.frameCounter += 1), r -
                      t.counterTimestamp >=
                      1e3 &&
                      ((t.fps =
                        t.frameCounter *
                        ((r - t.counterTimestamp) /
                          1e3)), (t.counterTimestamp = r), (t.frameCounter = 0)), i.trigger(
                      t,
                      'tick',
                      u,
                    ), i.trigger(e, 'tick', u), e.world.isModified &&
                      e.render &&
                      e.render.controller &&
                      e.render.controller.clear &&
                      e.render.controller.clear(e.render), i.trigger(
                      t,
                      'beforeUpdate',
                      u,
                    ), o.update(e, n, a), i.trigger(
                      t,
                      'afterUpdate',
                      u,
                    ), e.render &&
                      e.render.controller &&
                      (i.trigger(t, 'beforeRender', u), i.trigger(
                        e,
                        'beforeRender',
                        u,
                      ), e.render.controller.world(e.render), i.trigger(
                        t,
                        'afterRender',
                        u,
                      ), i.trigger(e, 'afterRender', u)), i.trigger(
                      t,
                      'afterTick',
                      u,
                    ), i.trigger(e, 'afterTick', u);
                  }), (n.stop = function(t) {
                    e(t.frameRequestId);
                  }), (n.start = function(t, e) {
                    n.run(t, e);
                  });
                })();
              },
              {'./Common': 14, './Engine': 15, './Events': 16},
            ],
            22: [
              function(t, e, r) {
                var n = {};
                e.exports = n;
                var i = t('./Events');
                !(function() {
                  (n._motionWakeThreshold = 0.18), (n._motionSleepThreshold = 0.08), (n._minBias = 0.9), (n.update = function(
                    t,
                    e,
                  ) {
                    for (var r = e * e * e, i = 0; i < t.length; i++) {
                      var o = t[i],
                        s = o.speed * o.speed + o.angularSpeed * o.angularSpeed;
                      if (o.force.x === 0 && o.force.y === 0) {
                        var a = Math.min(o.motion, s),
                          u = Math.max(o.motion, s);
                        (o.motion =
                          n._minBias * a +
                          (1 - n._minBias) * u), o.sleepThreshold > 0 &&
                          o.motion < n._motionSleepThreshold * r
                          ? ((o.sleepCounter += 1), o.sleepCounter >=
                              o.sleepThreshold && n.set(o, !0))
                          : o.sleepCounter > 0 && (o.sleepCounter -= 1);
                      } else { n.set(o, !1); }
                    }
                  }), (n.afterCollisions = function(t, e) {
                    for (var r = e * e * e, i = 0; i < t.length; i++) {
                      var o = t[i];
                      if (o.isActive) {
                        var s = o.collision,
                          a = s.bodyA.parent,
                          u = s.bodyB.parent;
                        if (
                          !((a.isSleeping && u.isSleeping) ||
                            a.isStatic ||
                            u.isStatic) &&
                          (a.isSleeping || u.isSleeping)
                        ) {
                          var l = a.isSleeping && !a.isStatic ? a : u,
                            h = l === a ? u : a;
                          !l.isStatic &&
                            h.motion > n._motionWakeThreshold * r &&
                            n.set(l, !1);
                        }
                      }
                    }
                  }), (n.set = function(t, e) {
                    var r = t.isSleeping;
                    e
                      ? ((t.isSleeping = !0), (t.sleepCounter =
                          t.sleepThreshold), (t.positionImpulse.x = 0), (t.positionImpulse.y = 0), (t.positionPrev.x =
                          t.position.x), (t.positionPrev.y =
                          t.position.y), (t.anglePrev =
                          t.angle), (t.speed = 0), (t.angularSpeed = 0), (t.motion = 0), r ||
                          i.trigger(t, 'sleepStart'))
                      : ((t.isSleeping = !1), (t.sleepCounter = 0), r &&
                          i.trigger(t, 'sleepEnd'));
                  });
                })();
              },
              {'./Events': 16},
            ],
            23: [
              function(t, r, n) {
                (function(e) {
                  var n = {};
                  r.exports = n;
                  var i = t('../geometry/Vertices'),
                    o = t('../core/Common'),
                    s = t('../body/Body'),
                    a = t('../geometry/Bounds'),
                    u = t('../geometry/Vector'),
                    l = typeof window !== 'undefined'
                      ? window.decomp
                      : typeof e !== 'undefined' ? e.decomp : null;
                  !(function() {
                    (n.rectangle = function(t, e, r, n, a) {
                      a = a || {};
                      var u = {
                        label: 'Rectangle Body',
                        position: {x: t, y: e},
                        vertices: i.fromPath(
                          `L 0 0 L ${r} 0 L ${r} ${n} L 0 ${n}`,
                        ),
                      };
                      if (a.chamfer) {
                        var l = a.chamfer;
                        (u.vertices = i.chamfer(
                          u.vertices,
                          l.radius,
                          l.quality,
                          l.qualityMin,
                          l.qualityMax,
                        )), delete a.chamfer;
                      }
                      return s.create(o.extend({}, u, a));
                    }), (n.trapezoid = function(t, e, r, n, a, u) {
                      (u = u || {}), (a *= 0.5);
                      var l,
                        h = (1 - 2 * a) * r,
                        c = r * a,
                        d = c + h,
                        f = d + c;
                      l = a < 0.5
                        ? `L 0 0 L ${
                            c
                            } ${
                            -n
                            } L ${
                            d
                            } ${
                            -n
                            } L ${
                            f
                            } 0`
                        : `L 0 0 L ${d} ${-n} L ${f} 0`;
                      var p = {
                        label: 'Trapezoid Body',
                        position: {x: t, y: e},
                        vertices: i.fromPath(l),
                      };
                      if (u.chamfer) {
                        var v = u.chamfer;
                        (p.vertices = i.chamfer(
                          p.vertices,
                          v.radius,
                          v.quality,
                          v.qualityMin,
                          v.qualityMax,
                        )), delete u.chamfer;
                      }
                      return s.create(o.extend({}, p, u));
                    }), (n.circle = function(t, e, r, i, s) {
                      i = i || {};
                      var a = {label: 'Circle Body', circleRadius: r};
                      s = s || 25;
                      var u = Math.ceil(Math.max(10, Math.min(s, r)));
                      return u % 2 === 1 && (u += 1), n.polygon(
                        t,
                        e,
                        u,
                        r,
                        o.extend({}, a, i),
                      );
                    }), (n.polygon = function(t, e, r, a, u) {
                      if (((u = u || {}), r < 3)) { return n.circle(t, e, a, u); }
                      for (
                        var l = 2 * Math.PI / r, h = '', c = 0.5 * l, d = 0;
                        d < r;
                        d += 1
                      ) {
                        var f = c + d * l,
                          p = Math.cos(f) * a,
                          v = Math.sin(f) * a;
                        h += `L ${p.toFixed(3)} ${v.toFixed(3)} `;
                      }
                      var y = {
                        label: 'Polygon Body',
                        position: {x: t, y: e},
                        vertices: i.fromPath(h),
                      };
                      if (u.chamfer) {
                        var g = u.chamfer;
                        (y.vertices = i.chamfer(
                          y.vertices,
                          g.radius,
                          g.quality,
                          g.qualityMin,
                          g.qualityMax,
                        )), delete u.chamfer;
                      }
                      return s.create(o.extend({}, y, u));
                    }), (n.fromVertices = function(t, e, r, n, h, c, d) {
                      var f, p, v, y, g, m, b, x, _;
                      for (
                        (n = n || {}), (p = []), (h =
                          typeof h !== 'undefined' && h), (c = typeof c !==
                          'undefined'
                          ? c
                          : 0.01), (d = typeof d !== 'undefined' ? d : 10), l ||
                          o.warn(
                            'Bodies.fromVertices: poly-decomp.js required. Could not decompose vertices. Fallback to convex hull.',
                          ), o.isArray(r[0]) || (r = [r]), (x = 0);
                        x < r.length;
                        x += 1
                      ) {
                        if (((y = r[x]), (v = i.isConvex(y)), v || !l)) {
                          (y = v ? i.clockwiseSort(y) : i.hull(y)), p.push({
                            position: {x: t, y: e},
                            vertices: y,
                          });
                        } else {
                          var w = y.map(t => {
                            return [t.x, t.y];
                          });
                          l.makeCCW(w), c !== !1 &&
                            l.removeCollinearPoints(w, c);
                          var T = l.quickDecomp(w);
                          for (g = 0; g < T.length; g++) {
                            var E = T[g],
                              S = E.map(t => {
                                return {x: t[0], y: t[1]};
                              });
                            (d > 0 && i.area(S) < d) ||
                              p.push({position: i.centre(S), vertices: S});
                          }
                        }
                      }
                      for (g = 0; g < p.length; g++) { p[g] = s.create(o.extend(p[g], n)); }
                      if (h) {
                        var P = 5;
                        for (g = 0; g < p.length; g++) {
                          var O = p[g];
                          for (m = g + 1; m < p.length; m++) {
                            var M = p[m];
                            if (a.overlaps(O.bounds, M.bounds)) {
                              var C = O.vertices, A = M.vertices;
                              for (b = 0; b < O.vertices.length; b++) {
                                for (_ = 0; _ < M.vertices.length; _++) {
                                  var R = u.magnitudeSquared(
                                    u.sub(C[(b + 1) % C.length], A[_]),
                                  ),
                                    D = u.magnitudeSquared(
                                      u.sub(C[b], A[(_ + 1) % A.length]),
                                    );
                                  R < P &&
                                    D < P &&
                                    ((C[b].isInternal = !0), (A[
                                      _
                                    ].isInternal = !0));
                                }
                              }
                            }
                          }
                        }
                      }
                      return p.length > 1
                        ? ((f = s.create(
                            o.extend({parts: p.slice(0)}, n),
                          )), s.setPosition(f, {x: t, y: e}), f)
                        : p[0];
                    });
                  })();
                }.call(
                  this,
                  typeof e !== 'undefined'
                    ? e
                    : typeof self !== 'undefined'
                        ? self
                        : typeof window !== 'undefined' ? window : {},
                ));
              },
              {
                '../body/Body': 1,
                '../core/Common': 14,
                '../geometry/Bounds': 26,
                '../geometry/Vector': 28,
                '../geometry/Vertices': 29,
              },
            ],
            24: [
              function(t, e, r) {
                var n = {};
                e.exports = n;
                var i = t('../body/Composite'),
                  o = t('../constraint/Constraint'),
                  s = t('../core/Common'),
                  a = t('../body/Body'),
                  u = t('./Bodies');
                !(function() {
                  (n.stack = function(t, e, r, n, o, s, u) {
                    for (
                      var l,
                        h = i.create({label: 'Stack'}),
                        c = t,
                        d = e,
                        f = 0,
                        p = 0;
                      p < n;
                      p++
                    ) {
                      for (var v = 0, y = 0; y < r; y++) {
                        var g = u(c, d, y, p, l, f);
                        if (g) {
                          var m = g.bounds.max.y - g.bounds.min.y,
                            b = g.bounds.max.x - g.bounds.min.x;
                          m > v && (v = m), a.translate(g, {
                            x: 0.5 * b,
                            y: 0.5 * m,
                          }), (c = g.bounds.max.x + o), i.addBody(
                            h,
                            g,
                          ), (l = g), (f += 1);
                        } else { c += o; }
                      }
                      (d += v + s), (c = t);
                    }
                    return h;
                  }), (n.chain = function(t, e, r, n, a, u) {
                    for (var l = t.bodies, h = 1; h < l.length; h++) {
                      var c = l[h - 1],
                        d = l[h],
                        f = c.bounds.max.y - c.bounds.min.y,
                        p = c.bounds.max.x - c.bounds.min.x,
                        v = d.bounds.max.y - d.bounds.min.y,
                        y = d.bounds.max.x - d.bounds.min.x,
                        g = {
                          bodyA: c,
                          pointA: {x: p * e, y: f * r},
                          bodyB: d,
                          pointB: {x: y * n, y: v * a},
                        },
                        m = s.extend(g, u);
                      i.addConstraint(t, o.create(m));
                    }
                    return (t.label += ' Chain'), t;
                  }), (n.mesh = function(t, e, r, n, a) {
                    var u, l, h, c, d, f = t.bodies;
                    for (u = 0; u < r; u++) {
                      for (l = 1; l < e; l++) {
                        (h = f[l - 1 + u * e]), (c =
                          f[l + u * e]), i.addConstraint(
                          t,
                          o.create(s.extend({bodyA: h, bodyB: c}, a)),
                        );
                      }
                      if (u > 0) {
                        for (l = 0; l < e; l++) {
                          (h = f[l + (u - 1) * e]), (c =
                            f[l + u * e]), i.addConstraint(
                            t,
                            o.create(s.extend({bodyA: h, bodyB: c}, a)),
                          ), n &&
                            l > 0 &&
                            ((d = f[l - 1 + (u - 1) * e]), i.addConstraint(
                              t,
                              o.create(s.extend({bodyA: d, bodyB: c}, a)),
                            )), n &&
                            l < e - 1 &&
                            ((d = f[l + 1 + (u - 1) * e]), i.addConstraint(
                              t,
                              o.create(s.extend({bodyA: d, bodyB: c}, a)),
                            ));
                        }
                      }
                    }
                    return (t.label += ' Mesh'), t;
                  }), (n.pyramid = function(t, e, r, i, o, s, u) {
                    return n.stack(t, e, r, i, o, s, (
                      e,
                      n,
                      s,
                      l,
                      h,
                      c,
                    ) => {
                      var d = Math.min(i, Math.ceil(r / 2)),
                        f = h ? h.bounds.max.x - h.bounds.min.x : 0;
                      if (!(l > d)) {
                        l = d - l;
                        var p = l, v = r - 1 - l;
                        if (!(s < p || s > v)) {
                          c === 1 &&
                            a.translate(h, {
                              x: (s + (r % 2 === 1 ? 1 : -1)) * f,
                              y: 0,
                            });
                          var y = h ? s * f : 0;
                          return u(t + y + s * o, n, s, l, h, c);
                        }
                      }
                    });
                  }), (n.newtonsCradle = function(t, e, r, n, s) {
                    for (
                      var a = i.create({label: 'Newtons Cradle'}), l = 0;
                      l < r;
                      l++
                    ) {
                      var h = 1.9,
                        c = u.circle(t + l * (n * h), e + s, n, {
                          inertia: 1 / 0,
                          restitution: 1,
                          friction: 0,
                          frictionAir: 1e-4,
                          slop: 1,
                        }),
                        d = o.create({
                          pointA: {x: t + l * (n * h), y: e},
                          bodyB: c,
                        });
                      i.addBody(a, c), i.addConstraint(a, d);
                    }
                    return a;
                  }), (n.car = function(t, e, r, n, s) {
                    var l = a.nextGroup(!0),
                      h = -20,
                      c = 0.5 * -r + h,
                      d = 0.5 * r - h,
                      f = 0,
                      p = i.create({label: 'Car'}),
                      v = u.trapezoid(t, e, r, n, 0.3, {
                        collisionFilter: {group: l},
                        friction: 0.01,
                        chamfer: {radius: 10},
                      }),
                      y = u.circle(t + c, e + f, s, {
                        collisionFilter: {group: l},
                        friction: 0.8,
                        density: 0.01,
                      }),
                      g = u.circle(t + d, e + f, s, {
                        collisionFilter: {group: l},
                        friction: 0.8,
                        density: 0.01,
                      }),
                      m = o.create({
                        bodyA: v,
                        pointA: {x: c, y: f},
                        bodyB: y,
                        stiffness: 0.2,
                        render: {lineWidth: 0},
                      }),
                      b = o.create({
                        bodyA: v,
                        pointA: {x: d, y: f},
                        bodyB: g,
                        stiffness: 0.2,
                        render: {lineWidth: 0},
                      });
                    return i.addBody(p, v), i.addBody(p, y), i.addBody(
                      p,
                      g,
                    ), i.addConstraint(p, m), i.addConstraint(p, b), p;
                  }), (n.softBody = function(t, e, r, i, o, a, l, h, c, d) {
                    (c = s.extend({inertia: 1 / 0}, c)), (d = s.extend(
                      {stiffness: 0.4},
                      d,
                    ));
                    var f = n.stack(t, e, r, i, o, a, (t, e) => {
                      return u.circle(t, e, h, c);
                    });
                    return n.mesh(f, r, i, l, d), (f.label = 'Soft Body'), f;
                  });
                })();
              },
              {
                '../body/Body': 1,
                '../body/Composite': 2,
                '../constraint/Constraint': 12,
                '../core/Common': 14,
                './Bodies': 23,
              },
            ],
            25: [
              function(t, e, r) {
                var n = {};
                e.exports = n;
                var i = t('../geometry/Vector'), o = t('../core/Common');
                !(function() {
                  (n.fromVertices = function(t) {
                    for (var e = {}, r = 0; r < t.length; r++) {
                      var n = (r + 1) % t.length,
                        s = i.normalise({
                          x: t[n].y - t[r].y,
                          y: t[r].x - t[n].x,
                        }),
                        a = s.y === 0 ? 1 / 0 : s.x / s.y;
                      (a = a.toFixed(3).toString()), (e[a] = s);
                    }
                    return o.values(e);
                  }), (n.rotate = function(t, e) {
                    if (e !== 0) {
                      for (
                        var r = Math.cos(e), n = Math.sin(e), i = 0;
                        i < t.length;
                        i++
                      ) {
                        var o, s = t[i];
                        (o = s.x * r - s.y * n), (s.y =
                          s.x * n + s.y * r), (s.x = o);
                      }
                    }
                  });
                })();
              },
              {'../core/Common': 14, '../geometry/Vector': 28},
            ],
            26: [
              function(t, e, r) {
                var n = {};
                (e.exports = n), (function() {
                  (n.create = function(t) {
                    var e = {min: {x: 0, y: 0}, max: {x: 0, y: 0}};
                    return t && n.update(e, t), e;
                  }), (n.update = function(t, e, r) {
                    (t.min.x = 1 / 0), (t.max.x = -(1 / 0)), (t.min.y =
                      1 / 0), (t.max.y = -(1 / 0));
                    for (var n = 0; n < e.length; n++) {
                      var i = e[n];
                      i.x > t.max.x && (t.max.x = i.x), i.x < t.min.x &&
                        (t.min.x = i.x), i.y > t.max.y && (t.max.y = i.y), i.y <
                        t.min.y && (t.min.y = i.y);
                    }
                    r &&
                      (r.x > 0 ? (t.max.x += r.x) : (t.min.x += r.x), r.y > 0
                        ? (t.max.y += r.y)
                        : (t.min.y += r.y));
                  }), (n.contains = function(t, e) {
                    return (
                      e.x >= t.min.x &&
                      e.x <= t.max.x &&
                      e.y >= t.min.y &&
                      e.y <= t.max.y
                    );
                  }), (n.overlaps = function(t, e) {
                    return (
                      t.min.x <= e.max.x &&
                      t.max.x >= e.min.x &&
                      t.max.y >= e.min.y &&
                      t.min.y <= e.max.y
                    );
                  }), (n.translate = function(t, e) {
                    (t.min.x += e.x), (t.max.x += e.x), (t.min.y +=
                      e.y), (t.max.y += e.y);
                  }), (n.shift = function(t, e) {
                    var r = t.max.x - t.min.x, n = t.max.y - t.min.y;
                    (t.min.x = e.x), (t.max.x = e.x + r), (t.min.y =
                      e.y), (t.max.y = e.y + n);
                  });
                })();
              },
              {},
            ],
            27: [
              function(t, e, r) {
                var n = {};
                e.exports = n;
                t('../geometry/Bounds');
                !(function() {
                  n.pathToVertices = function(e, r) {
                    var n,
                      i,
                      o,
                      s,
                      a,
                      u,
                      l,
                      h,
                      c,
                      d,
                      f,
                      p,
                      v = [],
                      y = 0,
                      g = 0,
                      m = 0;
                    r = r || 15;
                    var b = function(t, e, r) {
                        var n = r % 2 === 1 && r > 1;
                        if (!c || t != c.x || e != c.y) {
                          c && n ? ((f = c.x), (p = c.y)) : ((f = 0), (p = 0));
                          var i = {x: f + t, y: p + e};
                          (!n && c) || (c = i), v.push(i), (g = f + t), (m =
                          p + e);
                        }
                      },
                      x = function(t) {
                        var e = t.pathSegTypeAsLetter.toUpperCase();
                        if (e !== 'Z') {
                          switch (e) {
                            case 'M':
                            case 'L':
                            case 'T':
                            case 'C':
                            case 'S':
                            case 'Q':
                              (g = t.x), (m = t.y);
                              break;
                            case 'H':
                              g = t.x;
                              break;
                            case 'V':
                              m = t.y;
                          }
                          b(g, m, t.pathSegType);
                        }
                      };
                    for (
                      t(e), (o = e.getTotalLength()), (u = []), (n = 0);
                      n < e.pathSegList.numberOfItems;
                      n += 1
                    ) { u.push(e.pathSegList.getItem(n)); }
                    for (l = u.concat(); y < o;) {
                      if (((d = e.getPathSegAtLength(y)), (a = u[d]), a != h)) {
                        for (; l.length && l[0] != a;) { x(l.shift()); }
                        h = a;
                      }
                      switch (a.pathSegTypeAsLetter.toUpperCase()) {
                        case 'C':
                        case 'T':
                        case 'S':
                        case 'Q':
                        case 'A':
                          (s = e.getPointAtLength(y)), b(s.x, s.y, 0);
                      }
                      y += r;
                    }
                    for ((n = 0), (i = l.length); n < i; ++n) { x(l[n]); }
                    return v;
                  };
                  var t = function(t) {
                    for (
                      var e,
                        r,
                        n,
                        i,
                        o,
                        s,
                        a = t.pathSegList,
                        u = 0,
                        l = 0,
                        h = a.numberOfItems,
                        c = 0;
                      c < h;
                      ++c
                    ) {
                      var d = a.getItem(c), f = d.pathSegTypeAsLetter;
                      if (/[MLHVCSQTA]/.test(f)) { 'x' in d && (u = d.x), 'y' in d && (l = d.y); } else {
                        switch (('x1' in d && (n = u + d.x1), 'x2' in d &&
                          (o = u + d.x2), 'y1' in d && (i = l + d.y1), 'y2' in
                          d && (s = l + d.y2), 'x' in d && (u += d.x), 'y' in
                          d && (l += d.y), f)) {
                          case 'm':
                            a.replaceItem(t.createSVGPathSegMovetoAbs(u, l), c);
                            break;
                          case 'l':
                            a.replaceItem(t.createSVGPathSegLinetoAbs(u, l), c);
                            break;
                          case 'h':
                            a.replaceItem(
                              t.createSVGPathSegLinetoHorizontalAbs(u),
                              c,
                            );
                            break;
                          case 'v':
                            a.replaceItem(
                              t.createSVGPathSegLinetoVerticalAbs(l),
                              c,
                            );
                            break;
                          case 'c':
                            a.replaceItem(
                              t.createSVGPathSegCurvetoCubicAbs(
                                u,
                                l,
                                n,
                                i,
                                o,
                                s,
                              ),
                              c,
                            );
                            break;
                          case 's':
                            a.replaceItem(
                              t.createSVGPathSegCurvetoCubicSmoothAbs(
                                u,
                                l,
                                o,
                                s,
                              ),
                              c,
                            );
                            break;
                          case 'q':
                            a.replaceItem(
                              t.createSVGPathSegCurvetoQuadraticAbs(u, l, n, i),
                              c,
                            );
                            break;
                          case 't':
                            a.replaceItem(
                              t.createSVGPathSegCurvetoQuadraticSmoothAbs(u, l),
                              c,
                            );
                            break;
                          case 'a':
                            a.replaceItem(
                              t.createSVGPathSegArcAbs(
                                u,
                                l,
                                d.r1,
                                d.r2,
                                d.angle,
                                d.largeArcFlag,
                                d.sweepFlag,
                              ),
                              c,
                            );
                            break;
                          case 'z':
                          case 'Z':
                            (u = e), (l = r);
                        }
                      }
                      (f != 'M' && f != 'm') || ((e = u), (r = l));
                    }
                  };
                })();
              },
              {'../geometry/Bounds': 26},
            ],
            28: [
              function(t, e, r) {
                var n = {};
                (e.exports = n), (function() {
                  (n.create = function(t, e) {
                    return {x: t || 0, y: e || 0};
                  }), (n.clone = function(t) {
                    return {x: t.x, y: t.y};
                  }), (n.magnitude = function(t) {
                    return Math.sqrt(t.x * t.x + t.y * t.y);
                  }), (n.magnitudeSquared = function(t) {
                    return t.x * t.x + t.y * t.y;
                  }), (n.rotate = function(t, e) {
                    var r = Math.cos(e), n = Math.sin(e);
                    return {x: t.x * r - t.y * n, y: t.x * n + t.y * r};
                  }), (n.rotateAbout = function(t, e, r, n) {
                    var i = Math.cos(e), o = Math.sin(e);
                    n || (n = {});
                    var s = r.x + ((t.x - r.x) * i - (t.y - r.y) * o);
                    return (n.y =
                      r.y + ((t.x - r.x) * o + (t.y - r.y) * i)), (n.x = s), n;
                  }), (n.normalise = function(t) {
                    var e = n.magnitude(t);
                    return e === 0 ? {x: 0, y: 0} : {x: t.x / e, y: t.y / e};
                  }), (n.dot = function(t, e) {
                    return t.x * e.x + t.y * e.y;
                  }), (n.cross = function(t, e) {
                    return t.x * e.y - t.y * e.x;
                  }), (n.cross3 = function(t, e, r) {
                    return (
                      (e.x - t.x) * (r.y - t.y) - (e.y - t.y) * (r.x - t.x)
                    );
                  }), (n.add = function(t, e, r) {
                    return r || (r = {}), (r.x = t.x + e.x), (r.y =
                      t.y + e.y), r;
                  }), (n.sub = function(t, e, r) {
                    return r || (r = {}), (r.x = t.x - e.x), (r.y =
                      t.y - e.y), r;
                  }), (n.mult = function(t, e) {
                    return {x: t.x * e, y: t.y * e};
                  }), (n.div = function(t, e) {
                    return {x: t.x / e, y: t.y / e};
                  }), (n.perp = function(t, e) {
                    return (e = e === !0 ? -1 : 1), {x: e * -t.y, y: e * t.x};
                  }), (n.neg = function(t) {
                    return {x: -t.x, y: -t.y};
                  }), (n.angle = function(t, e) {
                    return Math.atan2(e.y - t.y, e.x - t.x);
                  }), (n._temp = [
                    n.create(),
                    n.create(),
                    n.create(),
                    n.create(),
                    n.create(),
                    n.create(),
                  ]);
                })();
              },
              {},
            ],
            29: [
              function(t, e, r) {
                var n = {};
                e.exports = n;
                var i = t('../geometry/Vector'), o = t('../core/Common');
                !(function() {
                  (n.create = function(t, e) {
                    for (var r = [], n = 0; n < t.length; n++) {
                      var i = t[n],
                        o = {x: i.x, y: i.y, index: n, body: e, isInternal: !1};
                      r.push(o);
                    }
                    return r;
                  }), (n.fromPath = function(t, e) {
                    var r = /L?\s*([\-\d\.e]+)[\s,]*([\-\d\.e]+)*/gi, i = [];
                    return t.replace(r, (t, e, r) => {
                      i.push({x: parseFloat(e), y: parseFloat(r)});
                    }), n.create(i, e);
                  }), (n.centre = function(t) {
                    for (
                      var e, r, o, s = n.area(t, !0), a = {x: 0, y: 0}, u = 0;
                      u < t.length;
                      u++
                    ) {
                      (o = (u + 1) % t.length), (e = i.cross(
                        t[u],
                        t[o],
                      )), (r = i.mult(i.add(t[u], t[o]), e)), (a = i.add(a, r));
                    }
                    return i.div(a, 6 * s);
                  }), (n.mean = function(t) {
                    for (var e = {x: 0, y: 0}, r = 0; r < t.length; r++) { (e.x += t[r].x), (e.y += t[r].y); }
                    return i.div(e, t.length);
                  }), (n.area = function(t, e) {
                    for (var r = 0, n = t.length - 1, i = 0; i < t.length; i++) { (r += (t[n].x - t[i].x) * (t[n].y + t[i].y)), (n = i); }
                    return e ? r / 2 : Math.abs(r) / 2;
                  }), (n.inertia = function(t, e) {
                    for (
                      var r, n, o = 0, s = 0, a = t, u = 0;
                      u < a.length;
                      u++
                    ) {
                      (n = (u + 1) % a.length), (r = Math.abs(
                        i.cross(a[n], a[u]),
                      )), (o +=
                        r *
                        (i.dot(a[n], a[n]) +
                          i.dot(a[n], a[u]) +
                          i.dot(a[u], a[u]))), (s += r);
                    }
                    return e / 6 * (o / s);
                  }), (n.translate = function(t, e, r) {
                    var n;
                    if (r) {
                      for (n = 0; n < t.length; n++) { (t[n].x += e.x * r), (t[n].y += e.y * r); }
                    } else {
                      for (n = 0; n < t.length; n++) { (t[n].x += e.x), (t[n].y += e.y); }
                    }
                    return t;
                  }), (n.rotate = function(t, e, r) {
                    if (e !== 0) {
                      for (
                        var n = Math.cos(e), i = Math.sin(e), o = 0;
                        o < t.length;
                        o++
                      ) {
                        var s = t[o], a = s.x - r.x, u = s.y - r.y;
                        (s.x = r.x + (a * n - u * i)), (s.y =
                          r.y + (a * i + u * n));
                      }
                      return t;
                    }
                  }), (n.contains = function(t, e) {
                    for (var r = 0; r < t.length; r++) {
                      var n = t[r], i = t[(r + 1) % t.length];
                      if (
                        (e.x - n.x) * (i.y - n.y) + (e.y - n.y) * (n.x - i.x) >
                        0
                      ) { return !1; }
                    }
                    return !0;
                  }), (n.scale = function(t, e, r, o) {
                    if (e === 1 && r === 1) { return t; }
                    o = o || n.centre(t);
                    for (var s, a, u = 0; u < t.length; u++) {
                      (s = t[u]), (a = i.sub(s, o)), (t[u].x =
                        o.x + a.x * e), (t[u].y = o.y + a.y * r);
                    }
                    return t;
                  }), (n.chamfer = function(t, e, r, n, s) {
                    (e = e || [8]), e.length || (e = [e]), (r = typeof r !==
                      'undefined'
                      ? r
                      : -1), (n = n || 2), (s = s || 14);
                    for (var a = [], u = 0; u < t.length; u++) {
                      var l = t[u - 1 >= 0 ? u - 1 : t.length - 1],
                        h = t[u],
                        c = t[(u + 1) % t.length],
                        d = e[u < e.length ? u : e.length - 1];
                      if (d !== 0) {
                        var f = i.normalise({x: h.y - l.y, y: l.x - h.x}),
                          p = i.normalise({x: c.y - h.y, y: h.x - c.x}),
                          v = Math.sqrt(2 * Math.pow(d, 2)),
                          y = i.mult(o.clone(f), d),
                          g = i.normalise(i.mult(i.add(f, p), 0.5)),
                          m = i.sub(h, i.mult(g, v)),
                          b = r;
                        r === -1 &&
                          (b = 1.75 * Math.pow(d, 0.32)), (b = o.clamp(
                          b,
                          n,
                          s,
                        )), b % 2 === 1 && (b += 1);
                        for (
                          var x = Math.acos(i.dot(f, p)), _ = x / b, w = 0;
                          w < b;
                          w++
                        ) { a.push(i.add(i.rotate(y, _ * w), m)); }
                      } else { a.push(h); }
                    }
                    return a;
                  }), (n.clockwiseSort = function(t) {
                    var e = n.mean(t);
                    return t.sort((t, r) => {
                      return i.angle(e, t) - i.angle(e, r);
                    }), t;
                  }), (n.isConvex = function(t) {
                    var e, r, n, i, o = 0, s = t.length;
                    if (s < 3) { return null; }
                    for (e = 0; e < s; e++) {
                      if (
                        ((r = (e + 1) % s), (n = (e + 2) % s), (i =
                          (t[r].x - t[e].x) * (t[n].y - t[r].y)), (i -=
                          (t[r].y - t[e].y) * (t[n].x - t[r].x)), i < 0
                          ? (o |= 1)
                          : i > 0 && (o |= 2), o === 3)
                      ) { return !1; }
                    }
                    return o !== 0 || null;
                  }), (n.hull = function(t) {
                    var e, r, n = [], o = [];
                    for (
                      (t = t.slice(0)), t.sort((t, e) => {
                        var r = t.x - e.x;
                        return r !== 0 ? r : t.y - e.y;
                      }), (r = 0);
                      r < t.length;
                      r++
                    ) {
                      for (
                        e = t[r];
                        o.length >= 2 &&
                        i.cross3(o[o.length - 2], o[o.length - 1], e) <= 0;

                      ) { o.pop(); }
                      o.push(e);
                    }
                    for (r = t.length - 1; r >= 0; r--) {
                      for (
                        e = t[r];
                        n.length >= 2 &&
                        i.cross3(n[n.length - 2], n[n.length - 1], e) <= 0;

                      ) { n.pop(); }
                      n.push(e);
                    }
                    return n.pop(), o.pop(), n.concat(o);
                  });
                })();
              },
              {'../core/Common': 14, '../geometry/Vector': 28},
            ],
            30: [
              function(t, e, r) {
                var n = (e.exports = t('../core/Matter'));
                (n.Body = t('../body/Body')), (n.Composite = t(
                  '../body/Composite',
                )), (n.World = t('../body/World')), (n.Contact = t(
                  '../collision/Contact',
                )), (n.Detector = t('../collision/Detector')), (n.Grid = t(
                  '../collision/Grid',
                )), (n.Pairs = t('../collision/Pairs')), (n.Pair = t(
                  '../collision/Pair',
                )), (n.Query = t('../collision/Query')), (n.Resolver = t(
                  '../collision/Resolver',
                )), (n.SAT = t('../collision/SAT')), (n.Constraint = t(
                  '../constraint/Constraint',
                )), (n.MouseConstraint = t(
                  '../constraint/MouseConstraint',
                )), (n.Common = t('../core/Common')), (n.Engine = t(
                  '../core/Engine',
                )), (n.Events = t('../core/Events')), (n.Mouse = t(
                  '../core/Mouse',
                )), (n.Runner = t('../core/Runner')), (n.Sleeping = t(
                  '../core/Sleeping',
                )), (n.Plugin = t('../core/Plugin')), (n.Bodies = t(
                  '../factory/Bodies',
                )), (n.Composites = t('../factory/Composites')), (n.Axes = t(
                  '../geometry/Axes',
                )), (n.Bounds = t('../geometry/Bounds')), (n.Svg = t(
                  '../geometry/Svg',
                )), (n.Vector = t('../geometry/Vector')), (n.Vertices = t(
                  '../geometry/Vertices',
                )), (n.Render = t('../render/Render')), (n.RenderPixi = t(
                  '../render/RenderPixi',
                )), (n.World.add = n.Composite.add), (n.World.remove =
                  n.Composite.remove), (n.World.addComposite =
                  n.Composite.addComposite), (n.World.addBody =
                  n.Composite.addBody), (n.World.addConstraint =
                  n.Composite.addConstraint), (n.World.clear =
                  n.Composite.clear), (n.Engine.run = n.Runner.run);
              },
              {
                '../body/Body': 1,
                '../body/Composite': 2,
                '../body/World': 3,
                '../collision/Contact': 4,
                '../collision/Detector': 5,
                '../collision/Grid': 6,
                '../collision/Pair': 7,
                '../collision/Pairs': 8,
                '../collision/Query': 9,
                '../collision/Resolver': 10,
                '../collision/SAT': 11,
                '../constraint/Constraint': 12,
                '../constraint/MouseConstraint': 13,
                '../core/Common': 14,
                '../core/Engine': 15,
                '../core/Events': 16,
                '../core/Matter': 17,
                '../core/Metrics': 18,
                '../core/Mouse': 19,
                '../core/Plugin': 20,
                '../core/Runner': 21,
                '../core/Sleeping': 22,
                '../factory/Bodies': 23,
                '../factory/Composites': 24,
                '../geometry/Axes': 25,
                '../geometry/Bounds': 26,
                '../geometry/Svg': 27,
                '../geometry/Vector': 28,
                '../geometry/Vertices': 29,
                '../render/Render': 31,
                '../render/RenderPixi': 32,
              },
            ],
            31: [
              function(t, e, r) {
                var n = {};
                e.exports = n;
                var i = t('../core/Common'),
                  o = t('../body/Composite'),
                  s = t('../geometry/Bounds'),
                  a = t('../core/Events'),
                  u = t('../collision/Grid'),
                  l = t('../geometry/Vector'),
                  h = t('../core/Mouse');
                !(function() {
                  var t, e;
                  typeof window !== 'undefined' &&
                    ((t =
                      window.requestAnimationFrame ||
                      window.webkitRequestAnimationFrame ||
                      window.mozRequestAnimationFrame ||
                      window.msRequestAnimationFrame ||
                      function(t) {
                        window.setTimeout(() => {
                          t(i.now());
                        }, 1e3 / 60);
                      }), (e =
                      window.cancelAnimationFrame ||
                      window.mozCancelAnimationFrame ||
                      window.webkitCancelAnimationFrame ||
                      window.msCancelAnimationFrame)), (n.create = function(t) {
                        var e = {
                            controller: n,
                            engine: null,
                            element: null,
                            canvas: null,
                            mouse: null,
                            frameRequestId: null,
                            options: {
                              width: 800,
                              height: 600,
                              pixelRatio: 1,
                              background: '#18181d',
                              wireframeBackground: '#0f0f13',
                              hasBounds: Boolean(t.bounds),
                              enabled: !0,
                              wireframes: !0,
                              showSleeping: !0,
                              showDebug: !1,
                              showBroadphase: !1,
                              showBounds: !1,
                              showVelocity: !1,
                              showCollisions: !1,
                              showSeparations: !1,
                              showAxes: !1,
                              showPositions: !1,
                              showAngleIndicator: !1,
                              showIds: !1,
                              showShadows: !1,
                              showVertexNumbers: !1,
                              showConvexHulls: !1,
                              showInternalEdges: !1,
                              showMousePosition: !1,
                            },
                          },
                          o = i.extend(e, t);
                        return o.canvas &&
                      ((o.canvas.width =
                        o.options.width || o.canvas.width), (o.canvas.height =
                        o.options.height || o.canvas.height)), (o.mouse =
                      t.mouse), (o.engine = t.engine), (o.canvas =
                      o.canvas ||
                      r(
                        o.options.width,
                        o.options.height,
                      )), (o.context = o.canvas.getContext(
                      '2d',
                    )), (o.textures = {}), (o.bounds = o.bounds || {
                      min: {x: 0, y: 0},
                      max: {x: o.canvas.width, y: o.canvas.height},
                    }), o.options.pixelRatio !== 1 &&
                      n.setPixelRatio(o, o.options.pixelRatio), i.isElement(
                      o.element,
                    )
                      ? o.element.appendChild(o.canvas)
                      : i.log(
                          'Render.create: options.element was undefined, render.canvas was created but not appended',
                          'warn',
                        ), o;
                      }), (n.run = function(e) {
                        !(function r(i) {
                          (e.frameRequestId = t(r)), n.world(e);
                        })();
                      }), (n.stop = function(t) {
                        e(t.frameRequestId);
                      }), (n.setPixelRatio = function(t, e) {
                        var r = t.options, n = t.canvas;
                        e === 'auto' &&
                      (e = c(n)), (r.pixelRatio = e), n.setAttribute(
                      'data-pixel-ratio',
                      e,
                    ), (n.width = r.width * e), (n.height =
                      r.height * e), (n.style.width =
                      `${r.width}px`), (n.style.height =
                      `${r.height}px`), t.context.scale(e, e);
                      }), (n.lookAt = function(t, e, r, n) {
                        (n = typeof n === 'undefined' || n), (e = i.isArray(e)
                      ? e
                      : [e]), (r = r || {x: 0, y: 0});
                        for (
                      var o = {
                          min: {x: 1 / 0, y: 1 / 0},
                          max: {x: -(1 / 0), y: -(1 / 0)},
                        },
                        s = 0;
                      s < e.length;
                      s += 1
                    ) {
                          var a = e[s],
                            u = a.bounds ? a.bounds.min : a.min || a.position || a,
                            l = a.bounds ? a.bounds.max : a.max || a.position || a;
                          u &&
                        l &&
                        (u.x < o.min.x && (o.min.x = u.x), l.x > o.max.x &&
                          (o.max.x = l.x), u.y < o.min.y &&
                          (o.min.y = u.y), l.y > o.max.y && (o.max.y = l.y));
                        }
                        var c = o.max.x - o.min.x + 2 * r.x,
                          d = o.max.y - o.min.y + 2 * r.y,
                          f = t.canvas.height,
                          p = t.canvas.width,
                          v = p / f,
                          y = c / d,
                          g = 1,
                          m = 1;
                        y > v
                      ? (m = y / v)
                      : (g =
                          v / y), (t.options.hasBounds = !0), (t.bounds.min.x =
                      o.min.x), (t.bounds.max.x =
                      o.min.x + c * g), (t.bounds.min.y =
                      o.min.y), (t.bounds.max.y = o.min.y + d * m), n &&
                      ((t.bounds.min.x +=
                        0.5 * c - c * g * 0.5), (t.bounds.max.x +=
                        0.5 * c - c * g * 0.5), (t.bounds.min.y +=
                        0.5 * d - d * m * 0.5), (t.bounds.max.y +=
                        0.5 * d - d * m * 0.5)), (t.bounds.min.x -=
                      r.x), (t.bounds.max.x -= r.x), (t.bounds.min.y -=
                      r.y), (t.bounds.max.y -= r.y), t.mouse &&
                      (h.setScale(t.mouse, {
                        x: (t.bounds.max.x - t.bounds.min.x) / t.canvas.width,
                        y: (t.bounds.max.y - t.bounds.min.y) / t.canvas.height,
                      }), h.setOffset(t.mouse, t.bounds.min));
                      }), (n.startViewTransform = function(t) {
                        var e = t.bounds.max.x - t.bounds.min.x,
                          r = t.bounds.max.y - t.bounds.min.y,
                          n = e / t.options.width,
                          i = r / t.options.height;
                        t.context.scale(1 / n, 1 / i), t.context.translate(
                      -t.bounds.min.x,
                      -t.bounds.min.y,
                    );
                      }), (n.endViewTransform = function(t) {
                        t.context.setTransform(
                      t.options.pixelRatio,
                      0,
                      0,
                      t.options.pixelRatio,
                      0,
                      0,
                    );
                      }), (n.world = function(t) {
                        var e,
                          r = t.engine,
                          i = r.world,
                          c = t.canvas,
                          d = t.context,
                          p = t.options,
                          v = o.allBodies(i),
                          y = o.allConstraints(i),
                          g = p.wireframes ? p.wireframeBackground : p.background,
                          m = [],
                          b = [],
                          x = {timestamp: r.timing.timestamp};
                        if (
                      (a.trigger(t, 'beforeRender', x), t.currentBackground !==
                        g && f(t, g), (d.globalCompositeOperation =
                        'source-in'), (d.fillStyle = 'transparent'), d.fillRect(
                        0,
                        0,
                        c.width,
                        c.height,
                      ), (d.globalCompositeOperation =
                        'source-over'), p.hasBounds)
                    ) {
                          for (e = 0; e < v.length; e++) {
                            var _ = v[e];
                            s.overlaps(_.bounds, t.bounds) && m.push(_);
                          }
                          for (e = 0; e < y.length; e++) {
                            var w = y[e],
                          T = w.bodyA,
                          E = w.bodyB,
                          S = w.pointA,
                          P = w.pointB;
                            T && (S = l.add(T.position, w.pointA)), E &&
                          (P = l.add(E.position, w.pointB)), S &&
                          P &&
                          (s.contains(t.bounds, S) ||
                            s.contains(t.bounds, P)) &&
                          b.push(w);
                          }
                          n.startViewTransform(t), t.mouse &&
                        (h.setScale(t.mouse, {
                          x: (t.bounds.max.x - t.bounds.min.x) / t.canvas.width,
                          y: (t.bounds.max.y - t.bounds.min.y) /
                            t.canvas.height,
                        }), h.setOffset(t.mouse, t.bounds.min));
                        } else { (b = y), (m = v); }
                        !p.wireframes || (r.enableSleeping && p.showSleeping)
                      ? n.bodies(t, m, d)
                      : (p.showConvexHulls &&
                          n.bodyConvexHulls(t, m, d), n.bodyWireframes(
                          t,
                          m,
                          d,
                        )), p.showBounds &&
                      n.bodyBounds(t, m, d), (p.showAxes ||
                      p.showAngleIndicator) &&
                      n.bodyAxes(t, m, d), p.showPositions &&
                      n.bodyPositions(t, m, d), p.showVelocity &&
                      n.bodyVelocity(t, m, d), p.showIds &&
                      n.bodyIds(t, m, d), p.showSeparations &&
                      n.separations(t, r.pairs.list, d), p.showCollisions &&
                      n.collisions(t, r.pairs.list, d), p.showVertexNumbers &&
                      n.vertexNumbers(t, m, d), p.showMousePosition &&
                      n.mousePosition(t, t.mouse, d), n.constraints(
                      b,
                      d,
                    ), p.showBroadphase &&
                      r.broadphase.controller === u &&
                      n.grid(t, r.broadphase, d), p.showDebug &&
                      n.debug(t, d), p.hasBounds &&
                      n.endViewTransform(t), a.trigger(t, 'afterRender', x);
                      }), (n.debug = function(t, e) {
                        var r = e,
                          n = t.engine,
                          i = n.world,
                          s = n.metrics,
                          a = t.options,
                          u = (o.allBodies(i), '    ');
                        if (n.timing.timestamp - (t.debugTimestamp || 0) >= 500) {
                          var l = '';
                          s.timing &&
                        (l +=
                          `fps: ${
                          Math.round(s.timing.fps)
                          }${u}`), (t.debugString = l), (t.debugTimestamp =
                        n.timing.timestamp);
                        }
                        if (t.debugString) {
                          (r.font = '12px Arial'), a.wireframes
                        ? (r.fillStyle = 'rgba(255,255,255,0.5)')
                        : (r.fillStyle = 'rgba(0,0,0,0.5)');
                          for (
                        var h = t.debugString.split('\n'), c = 0;
                        c < h.length;
                        c++
                      ) { r.fillText(h[c], 50, 50 + 18 * c); }
                        }
                      }), (n.constraints = function(t, e) {
                        for (var r = e, n = 0; n < t.length; n++) {
                      var i = t[n];
                      if (i.render.visible && i.pointA && i.pointB) {
                        var o = i.bodyA, s = i.bodyB;
                        o
                          ? (r.beginPath(), r.moveTo(
                              o.position.x + i.pointA.x,
                              o.position.y + i.pointA.y,
                            ))
                          : (r.beginPath(), r.moveTo(i.pointA.x, i.pointA.y)), s
                          ? r.lineTo(
                              s.position.x + i.pointB.x,
                              s.position.y + i.pointB.y,
                            )
                          : r.lineTo(i.pointB.x, i.pointB.y), i.render
                          .lineWidth &&
                          ((r.lineWidth = i.render.lineWidth), (r.strokeStyle =
                            i.render.strokeStyle), r.stroke());
                      }
                    }
                      }), (n.bodyShadows = function(t, e, r) {
                    for (var n = r, i = (t.engine, 0); i < e.length; i++) {
                      var o = e[i];
                      if (o.render.visible) {
                        if (o.circleRadius) {
                          n.beginPath(), n.arc(
                            o.position.x,
                            o.position.y,
                            o.circleRadius,
                            0,
                            2 * Math.PI,
                          ), n.closePath();
                        } else {
                          n.beginPath(), n.moveTo(
                            o.vertices[0].x,
                            o.vertices[0].y,
                          );
                          for (var s = 1; s < o.vertices.length; s++) { n.lineTo(o.vertices[s].x, o.vertices[s].y); }
                          n.closePath();
                        }
                        var a = o.position.x - 0.5 * t.options.width,
                          u = o.position.y - 0.2 * t.options.height,
                          l = Math.abs(a) + Math.abs(u);
                        (n.shadowColor = 'rgba(0,0,0,0.15)'), (n.shadowOffsetX =
                          0.05 * a), (n.shadowOffsetY =
                          0.05 * u), (n.shadowBlur =
                          1 +
                          12 *
                            Math.min(
                              1,
                              l / 1e3,
                            )), n.fill(), (n.shadowColor = null), (n.shadowOffsetX = null), (n.shadowOffsetY = null), (n.shadowBlur = null);
                      }
                    }
                  }), (n.bodies = function(t, e, r) {
                    var n,
                      i,
                      o,
                      s,
                      a = r,
                      u = (t.engine, t.options),
                      l = u.showInternalEdges || !u.wireframes;
                    for (o = 0; o < e.length; o++) {
                      if (((n = e[o]), n.render.visible)) {
                        for (
                          s = n.parts.length > 1 ? 1 : 0;
                          s < n.parts.length;
                          s++
                        ) {
                          if (((i = n.parts[s]), i.render.visible)) {
                            if (
                              (u.showSleeping && n.isSleeping
                                ? (a.globalAlpha = 0.5 * i.render.opacity)
                                : i.render.opacity !== 1 &&
                                    (a.globalAlpha = i.render.opacity), i.render
                                .sprite &&
                                i.render.sprite.texture &&
                                !u.wireframes)
                            ) {
                              var h = i.render.sprite, c = d(t, h.texture);
                              a.translate(i.position.x, i.position.y), a.rotate(
                                i.angle,
                              ), a.drawImage(
                                c,
                                c.width * -h.xOffset * h.xScale,
                                c.height * -h.yOffset * h.yScale,
                                c.width * h.xScale,
                                c.height * h.yScale,
                              ), a.rotate(-i.angle), a.translate(
                                -i.position.x,
                                -i.position.y,
                              );
                            } else {
                              if (i.circleRadius) {
                                a.beginPath(), a.arc(
                                  i.position.x,
                                  i.position.y,
                                  i.circleRadius,
                                  0,
                                  2 * Math.PI,
                                );
                              } else {
                                a.beginPath(), a.moveTo(
                                  i.vertices[0].x,
                                  i.vertices[0].y,
                                );
                                for (var f = 1; f < i.vertices.length; f++) {
            !i.vertices[f - 1].isInternal || l
                                    ? a.lineTo(i.vertices[f].x, i.vertices[f].y)
                                    : a.moveTo(
                                        i.vertices[f].x,
                                        i.vertices[f].y,
                                      ), i.vertices[f].isInternal &&
                                    !l &&
                                    a.moveTo(
                                      i.vertices[(f + 1) % i.vertices.length].x,
                                      i.vertices[(f + 1) % i.vertices.length].y,
                                    );
          }
                                a.lineTo(
                                  i.vertices[0].x,
                                  i.vertices[0].y,
                                ), a.closePath();
                              }
                              u.wireframes
                                ? ((a.lineWidth = 1), (a.strokeStyle =
                                    '#bbb'), a.stroke())
                                : ((a.fillStyle = i.render.fillStyle), i.render
                                    .lineWidth &&
                                    ((a.lineWidth =
                                      i.render.lineWidth), (a.strokeStyle =
                                      i.render.strokeStyle), a.stroke()), a.fill());
                            }
                            a.globalAlpha = 1;
                          }
                        }
                      }
                    }
                  }), (n.bodyWireframes = function(t, e, r) {
                    var n, i, o, s, a, u = r, l = t.options.showInternalEdges;
                    for (u.beginPath(), (o = 0); o < e.length; o++) {
                      if (((n = e[o]), n.render.visible)) {
                        for (
                          a = n.parts.length > 1 ? 1 : 0;
                          a < n.parts.length;
                          a++
                        ) {
                          for (
                            (i = n.parts[a]), u.moveTo(
                              i.vertices[0].x,
                              i.vertices[0].y,
                            ), (s = 1);
                            s < i.vertices.length;
                            s++
                          ) {
                            !i.vertices[s - 1].isInternal || l
                              ? u.lineTo(i.vertices[s].x, i.vertices[s].y)
                              : u.moveTo(i.vertices[s].x, i.vertices[s].y), i
                              .vertices[s].isInternal &&
                              !l &&
                              u.moveTo(
                                i.vertices[(s + 1) % i.vertices.length].x,
                                i.vertices[(s + 1) % i.vertices.length].y,
                              );
                          }
                          u.lineTo(i.vertices[0].x, i.vertices[0].y);
                        }
                      }
                    }
                    (u.lineWidth = 1), (u.strokeStyle = '#bbb'), u.stroke();
                  }), (n.bodyConvexHulls = function(t, e, r) {
                    var n, i, o, s = r;
                    for (s.beginPath(), (i = 0); i < e.length; i++) {
                      if (
                        ((n = e[i]), n.render.visible && n.parts.length !== 1)
                      ) {
                        for (
                          s.moveTo(n.vertices[0].x, n.vertices[0].y), (o = 1);
                          o < n.vertices.length;
                          o++
                        ) { s.lineTo(n.vertices[o].x, n.vertices[o].y); }
                        s.lineTo(n.vertices[0].x, n.vertices[0].y);
                      }
                    }
                    (s.lineWidth = 1), (s.strokeStyle =
                      'rgba(255,255,255,0.2)'), s.stroke();
                  }), (n.vertexNumbers = function(t, e, r) {
                    var n, i, o, s = r;
                    for (n = 0; n < e.length; n++) {
                      var a = e[n].parts;
                      for (o = a.length > 1 ? 1 : 0; o < a.length; o++) {
                        var u = a[o];
                        for (i = 0; i < u.vertices.length; i++) {
                          (s.fillStyle = 'rgba(255,255,255,0.2)'), s.fillText(
                            `${n}_${i}`,
                            u.position.x +
                              0.8 * (u.vertices[i].x - u.position.x),
                            u.position.y +
                              0.8 * (u.vertices[i].y - u.position.y),
                          );
                        }
                      }
                    }
                  }), (n.mousePosition = function(t, e, r) {
                    var n = r;
                    (n.fillStyle = 'rgba(255,255,255,0.8)'), n.fillText(
                      `${e.position.x}  ${e.position.y}`,
                      e.position.x + 5,
                      e.position.y - 5,
                    );
                  }), (n.bodyBounds = function(t, e, r) {
                    var n = r, i = (t.engine, t.options);
                    n.beginPath();
                    for (var o = 0; o < e.length; o++) {
                      var s = e[o];
                      if (s.render.visible) {
                        for (
                          var a = e[o].parts, u = a.length > 1 ? 1 : 0;
                          u < a.length;
                          u++
                        ) {
                          var l = a[u];
                          n.rect(
                            l.bounds.min.x,
                            l.bounds.min.y,
                            l.bounds.max.x - l.bounds.min.x,
                            l.bounds.max.y - l.bounds.min.y,
                          );
                        }
                      }
                    }
                    i.wireframes
                      ? (n.strokeStyle = 'rgba(255,255,255,0.08)')
                      : (n.strokeStyle =
                          'rgba(0,0,0,0.1)'), (n.lineWidth = 1), n.stroke();
                  }), (n.bodyAxes = function(t, e, r) {
                    var n, i, o, s, a = r, u = (t.engine, t.options);
                    for (a.beginPath(), (i = 0); i < e.length; i++) {
                      var l = e[i], h = l.parts;
                      if (l.render.visible) {
                        if (u.showAxes) {
                          for (o = h.length > 1 ? 1 : 0; o < h.length; o++) {
                            for ((n = h[o]), (s = 0); s < n.axes.length; s++) {
                              var c = n.axes[s];
                              a.moveTo(n.position.x, n.position.y), a.lineTo(
                                n.position.x + 20 * c.x,
                                n.position.y + 20 * c.y,
                              );
                            }
                          }
                        } else {
                          for (o = h.length > 1 ? 1 : 0; o < h.length; o++) {
                            for ((n = h[o]), (s = 0); s < n.axes.length; s++) {
                              a.moveTo(n.position.x, n.position.y), a.lineTo(
                                (n.vertices[0].x +
                                  n.vertices[n.vertices.length - 1].x) /
                                  2,
                                (n.vertices[0].y +
                                  n.vertices[n.vertices.length - 1].y) /
                                  2,
                              );
                            }
                          }
                        }
                      }
                    }
                    u.wireframes
                      ? ((a.strokeStyle = 'indianred'), (a.lineWidth = 1))
                      : ((a.strokeStyle =
                          'rgba(255, 255, 255, 0.4)'), (a.globalCompositeOperation =
                          'overlay'), (a.lineWidth = 2)), a.stroke(), (a.globalCompositeOperation =
                      'source-over');
                  }), (n.bodyPositions = function(t, e, r) {
                    var n, i, o, s, a = r, u = (t.engine, t.options);
                    for (a.beginPath(), (o = 0); o < e.length; o++) {
                      if (((n = e[o]), n.render.visible)) {
                        for (s = 0; s < n.parts.length; s++) {
                          (i = n.parts[s]), a.arc(
                            i.position.x,
                            i.position.y,
                            3,
                            0,
                            2 * Math.PI,
                            !1,
                          ), a.closePath();
                        }
                      }
                    }
                    for (
                      u.wireframes
                        ? (a.fillStyle = 'indianred')
                        : (a.fillStyle =
                            'rgba(0,0,0,0.5)'), a.fill(), a.beginPath(), (o = 0);
                      o < e.length;
                      o++
                    ) {
                      (n = e[o]), n.render.visible &&
                        (a.arc(
                          n.positionPrev.x,
                          n.positionPrev.y,
                          2,
                          0,
                          2 * Math.PI,
                          !1,
                        ), a.closePath());
                    }
                    (a.fillStyle = 'rgba(255,165,0,0.8)'), a.fill();
                  }), (n.bodyVelocity = function(t, e, r) {
                    var n = r;
                    n.beginPath();
                    for (var i = 0; i < e.length; i++) {
                      var o = e[i];
                      o.render.visible &&
                        (n.moveTo(o.position.x, o.position.y), n.lineTo(
                          o.position.x + 2 * (o.position.x - o.positionPrev.x),
                          o.position.y + 2 * (o.position.y - o.positionPrev.y),
                        ));
                    }
                    (n.lineWidth = 3), (n.strokeStyle =
                      'cornflowerblue'), n.stroke();
                  }), (n.bodyIds = function(t, e, r) {
                    var n, i, o = r;
                    for (n = 0; n < e.length; n++) {
                      if (e[n].render.visible) {
                        var s = e[n].parts;
                        for (i = s.length > 1 ? 1 : 0; i < s.length; i++) {
                          var a = s[i];
                          (o.font = '12px Arial'), (o.fillStyle =
                            'rgba(255,255,255,0.5)'), o.fillText(
                            a.id,
                            a.position.x + 10,
                            a.position.y - 10,
                          );
                        }
                      }
                    }
                  }), (n.collisions = function(t, e, r) {
                    var n, i, o, s, a = r, u = t.options;
                    for (a.beginPath(), (o = 0); o < e.length; o++) {
                      if (((n = e[o]), n.isActive)) {
                        for (
                          (i = n.collision), (s = 0);
                          s < n.activeContacts.length;
                          s++
                        ) {
                          var l = n.activeContacts[s], h = l.vertex;
                          a.rect(h.x - 1.5, h.y - 1.5, 3.5, 3.5);
                        }
                      }
                    }
                    for (
                      u.wireframes
                        ? (a.fillStyle = 'rgba(255,255,255,0.7)')
                        : (a.fillStyle =
                            'orange'), a.fill(), a.beginPath(), (o = 0);
                      o < e.length;
                      o++
                    ) {
                      if (
                        ((n = e[o]), n.isActive &&
                          ((i = n.collision), n.activeContacts.length > 0))
                      ) {
                        var c = n.activeContacts[0].vertex.x,
                          d = n.activeContacts[0].vertex.y;
                        n.activeContacts.length === 2 &&
                          ((c =
                            (n.activeContacts[0].vertex.x +
                              n.activeContacts[1].vertex.x) /
                            2), (d =
                            (n.activeContacts[0].vertex.y +
                              n.activeContacts[1].vertex.y) /
                            2)), i.bodyB === i.supports[0].body ||
                          i.bodyA.isStatic === !0
                          ? a.moveTo(c - 8 * i.normal.x, d - 8 * i.normal.y)
                          : a.moveTo(
                              c + 8 * i.normal.x,
                              d + 8 * i.normal.y,
                            ), a.lineTo(c, d);
                      }
                    }
                    u.wireframes
                      ? (a.strokeStyle = 'rgba(255,165,0,0.7)')
                      : (a.strokeStyle =
                          'orange'), (a.lineWidth = 1), a.stroke();
                  }), (n.separations = function(t, e, r) {
                    var n, i, o, s, a, u = r, l = t.options;
                    for (u.beginPath(), (a = 0); a < e.length; a++) {
                      if (((n = e[a]), n.isActive)) {
                        (i = n.collision), (o = i.bodyA), (s = i.bodyB);
                        var h = 1;
                        s.isStatic || o.isStatic || (h = 0.5), s.isStatic &&
                          (h = 0), u.moveTo(
                          s.position.x,
                          s.position.y,
                        ), u.lineTo(
                          s.position.x - i.penetration.x * h,
                          s.position.y - i.penetration.y * h,
                        ), (h = 1), s.isStatic ||
                          o.isStatic ||
                          (h = 0.5), o.isStatic && (h = 0), u.moveTo(
                          o.position.x,
                          o.position.y,
                        ), u.lineTo(
                          o.position.x + i.penetration.x * h,
                          o.position.y + i.penetration.y * h,
                        );
                      }
                    }
                    l.wireframes
                      ? (u.strokeStyle = 'rgba(255,165,0,0.5)')
                      : (u.strokeStyle = 'orange'), u.stroke();
                  }), (n.grid = function(t, e, r) {
                    var n = r, o = t.options;
                    o.wireframes
                      ? (n.strokeStyle = 'rgba(255,180,0,0.1)')
                      : (n.strokeStyle = 'rgba(255,180,0,0.5)'), n.beginPath();
                    for (var s = i.keys(e.buckets), a = 0; a < s.length; a++) {
                      var u = s[a];
                      if (!(e.buckets[u].length < 2)) {
                        var l = u.split(/C|R/);
                        n.rect(
                          0.5 + parseInt(l[1], 10) * e.bucketWidth,
                          0.5 + parseInt(l[2], 10) * e.bucketHeight,
                          e.bucketWidth,
                          e.bucketHeight,
                        );
                      }
                    }
                    (n.lineWidth = 1), n.stroke();
                  }), (n.inspector = function(t, e) {
                    var r,
                      n = (t.engine, t.selected),
                      i = t.render,
                      o = i.options;
                    if (o.hasBounds) {
                      var s = i.bounds.max.x - i.bounds.min.x,
                        a = i.bounds.max.y - i.bounds.min.y,
                        u = s / i.options.width,
                        l = a / i.options.height;
                      e.scale(1 / u, 1 / l), e.translate(
                        -i.bounds.min.x,
                        -i.bounds.min.y,
                      );
                    }
                    for (var h = 0; h < n.length; h++) {
                      var c = n[h].data;
                      switch ((e.translate(
                        0.5,
                        0.5,
                      ), (e.lineWidth = 1), (e.strokeStyle =
                        'rgba(255,165,0,0.9)'), e.setLineDash([
                          1,
                          2,
                        ]), c.type)) {
                        case 'body':
                          (r = c.bounds), e.beginPath(), e.rect(
                            Math.floor(r.min.x - 3),
                            Math.floor(r.min.y - 3),
                            Math.floor(r.max.x - r.min.x + 6),
                            Math.floor(r.max.y - r.min.y + 6),
                          ), e.closePath(), e.stroke();
                          break;
                        case 'constraint':
                          var d = c.pointA;
                          c.bodyA && (d = c.pointB), e.beginPath(), e.arc(
                            d.x,
                            d.y,
                            10,
                            0,
                            2 * Math.PI,
                          ), e.closePath(), e.stroke();
                      }
                      e.setLineDash([]), e.translate(-0.5, -0.5);
                    }
                    t.selectStart !== null &&
                      (e.translate(
                        0.5,
                        0.5,
                      ), (e.lineWidth = 1), (e.strokeStyle =
                        'rgba(255,165,0,0.6)'), (e.fillStyle =
                        'rgba(255,165,0,0.1)'), (r =
                        t.selectBounds), e.beginPath(), e.rect(
                        Math.floor(r.min.x),
                        Math.floor(r.min.y),
                        Math.floor(r.max.x - r.min.x),
                        Math.floor(r.max.y - r.min.y),
                      ), e.closePath(), e.stroke(), e.fill(), e.translate(
                        -0.5,
                        -0.5,
                      )), o.hasBounds && e.setTransform(1, 0, 0, 1, 0, 0);
                  });
                  var r = function(t, e) {
                      var r = document.createElement('canvas');
                      return (r.width = t), (r.height = e), (r.oncontextmenu = function() {
                        return !1;
                      }), (r.onselectstart = function() {
                        return !1;
                      }), r;
                    },
                    c = function(t) {
                      var e = t.getContext('2d'),
                        r = window.devicePixelRatio || 1,
                        n =
                          e.webkitBackingStorePixelRatio ||
                          e.mozBackingStorePixelRatio ||
                          e.msBackingStorePixelRatio ||
                          e.oBackingStorePixelRatio ||
                          e.backingStorePixelRatio ||
                          1;
                      return r / n;
                    },
                    d = function(t, e) {
                      var r = t.textures[e];
                      return r
                        ? r
                        : ((r = t.textures[e] = new Image()), (r.src = e), r);
                    },
                    f = function(t, e) {
                      var r = e;
                      /(jpg|gif|png)$/.test(e) &&
                        (r =
                          `url(${
                          e
                          })`), (t.canvas.style.background = r), (t.canvas.style.backgroundSize =
                        'contain'), (t.currentBackground = e);
                    };
                })();
              },
              {
                '../body/Composite': 2,
                '../collision/Grid': 6,
                '../core/Common': 14,
                '../core/Events': 16,
                '../core/Mouse': 19,
                '../geometry/Bounds': 26,
                '../geometry/Vector': 28,
              },
            ],
            32: [
              function(t, e, r) {
                var n = {};
                e.exports = n;
                var i = t('../geometry/Bounds'),
                  o = t('../body/Composite'),
                  s = t('../core/Common'),
                  a = t('../core/Events'),
                  u = t('../geometry/Vector');
                !(function() {
                  var t, e;
                  typeof window !== 'undefined' &&
                    ((t =
                      window.requestAnimationFrame ||
                      window.webkitRequestAnimationFrame ||
                      window.mozRequestAnimationFrame ||
                      window.msRequestAnimationFrame ||
                      function(t) {
                        window.setTimeout(() => {
                          t(s.now());
                        }, 1e3 / 60);
                      }), (e =
                      window.cancelAnimationFrame ||
                      window.mozCancelAnimationFrame ||
                      window.webkitCancelAnimationFrame ||
                      window.msCancelAnimationFrame)), (n.create = function(t) {
                        s.warn(
                      'RenderPixi.create: Matter.RenderPixi is deprecated (see docs)',
                    );
                        var e = {
                            controller: n,
                            engine: null,
                            element: null,
                            frameRequestId: null,
                            canvas: null,
                            renderer: null,
                            container: null,
                            spriteContainer: null,
                            pixiOptions: null,
                            options: {
                              width: 800,
                              height: 600,
                              background: '#fafafa',
                              wireframeBackground: '#222',
                              hasBounds: !1,
                              enabled: !0,
                              wireframes: !0,
                              showSleeping: !0,
                              showDebug: !1,
                              showBroadphase: !1,
                              showBounds: !1,
                              showVelocity: !1,
                              showCollisions: !1,
                              showAxes: !1,
                              showPositions: !1,
                              showAngleIndicator: !1,
                              showIds: !1,
                              showShadows: !1,
                            },
                          },
                          r = s.extend(e, t),
                          i =
                        !r.options.wireframes &&
                        r.options.background === 'transparent';
                        return (r.pixiOptions = r.pixiOptions || {
                          view: r.canvas,
                          transparent: i,
                          antialias: !0,
                          backgroundColor: t.background,
                        }), (r.mouse = t.mouse), (r.engine =
                      t.engine), (r.renderer =
                      r.renderer ||
                      new PIXI.WebGLRenderer(
                        r.options.width,
                        r.options.height,
                        r.pixiOptions,
                      )), (r.container =
                      r.container || new PIXI.Container()), (r.spriteContainer =
                      r.spriteContainer || new PIXI.Container()), (r.canvas =
                      r.canvas || r.renderer.view), (r.bounds = r.bounds || {
                        min: {x: 0, y: 0},
                        max: {x: r.options.width, y: r.options.height},
                      }), a.on(r.engine, 'beforeUpdate', () => {
                        n.clear(r);
                      }), (r.textures = {}), (r.sprites = {}), (r.primitives = {}), r.container.addChild(
                      r.spriteContainer,
                    ), s.isElement(r.element)
                      ? r.element.appendChild(r.canvas)
                      : s.warn(
                          'No "render.element" passed, "render.canvas" was not inserted into document.',
                        ), (r.canvas.oncontextmenu = function() {
                          return !1;
                        }), (r.canvas.onselectstart = function() {
                          return !1;
                        }), r;
                      }), (n.run = function(e) {
                        !(function r(i) {
                          (e.frameRequestId = t(r)), n.world(e);
                        })();
                      }), (n.stop = function(t) {
                        e(t.frameRequestId);
                      }), (n.clear = function(t) {
                        for (
                      var e = t.container, r = t.spriteContainer;
                      e.children[0];

                    ) { e.removeChild(e.children[0]); }
                        for (; r.children[0];) { r.removeChild(r.children[0]); }
                        var n = t.sprites['bg-0'];
                        (t.textures = {}), (t.sprites = {}), (t.primitives = {}), (t.sprites[
                      'bg-0'
                    ] = n), n && e.addChildAt(n, 0), t.container.addChild(
                      t.spriteContainer,
                    ), (t.currentBackground = null), e.scale.set(
                      1,
                      1,
                    ), e.position.set(0, 0);
                      }), (n.setBackground = function(t, e) {
                        if (t.currentBackground !== e) {
                          var r = e.indexOf && e.indexOf('#') !== -1,
                            n = t.sprites['bg-0'];
                          if (r) {
                            var i = s.colorToNumber(e);
                            (t.renderer.backgroundColor = i), n &&
                          t.container.removeChild(n);
                          } else if (!n) {
                            var o = h(t, e);
                            (n = t.sprites['bg-0'] = new PIXI.Sprite(
                          o,
                        )), (n.position.x = 0), (n.position.y = 0), t.container.addChildAt(
                          n,
                          0,
                        );
                          }
                          t.currentBackground = e;
                        }
                      }), (n.world = function(t) {
                        var e,
                          r = t.engine,
                          s = r.world,
                          a = t.renderer,
                          l = t.container,
                          h = t.options,
                          c = o.allBodies(s),
                          d = o.allConstraints(s),
                          f = [];
                        h.wireframes
                      ? n.setBackground(t, h.wireframeBackground)
                      : n.setBackground(t, h.background);
                        var p = t.bounds.max.x - t.bounds.min.x,
                          v = t.bounds.max.y - t.bounds.min.y,
                          y = p / t.options.width,
                          g = v / t.options.height;
                        if (h.hasBounds) {
                          for (e = 0; e < c.length; e++) {
                            var m = c[e];
                            m.render.sprite.visible = i.overlaps(
                          m.bounds,
                          t.bounds,
                        );
                          }
                          for (e = 0; e < d.length; e++) {
                            var b = d[e],
                              x = b.bodyA,
                              _ = b.bodyB,
                              w = b.pointA,
                              T = b.pointB;
                            x && (w = u.add(x.position, b.pointA)), _ &&
                          (T = u.add(_.position, b.pointB)), w &&
                          T &&
                          (i.contains(t.bounds, w) ||
                            i.contains(t.bounds, T)) &&
                          f.push(b);
                          }
                          l.scale.set(1 / y, 1 / g), l.position.set(
                        -t.bounds.min.x * (1 / y),
                        -t.bounds.min.y * (1 / g),
                      );
                        } else { f = d; }
                        for (e = 0; e < c.length; e++) { n.body(t, c[e]); }
                        for (e = 0; e < f.length; e++) { n.constraint(t, f[e]); }
                        a.render(l);
                      }), (n.constraint = function(t, e) {
                        var r = (t.engine, e.bodyA),
                          n = e.bodyB,
                          i = e.pointA,
                          o = e.pointB,
                          a = t.container,
                          u = e.render,
                          l = `c-${e.id}`,
                          h = t.primitives[l];
                        return h ||
                      (h = t.primitives[l] = new PIXI.Graphics()), u.visible &&
                      e.pointA &&
                      e.pointB
                      ? (s.indexOf(a.children, h) === -1 &&
                          a.addChild(h), h.clear(), h.beginFill(
                          0,
                          0,
                        ), h.lineStyle(
                          u.lineWidth,
                          s.colorToNumber(u.strokeStyle),
                          1,
                        ), r
                          ? h.moveTo(r.position.x + i.x, r.position.y + i.y)
                          : h.moveTo(i.x, i.y), n
                          ? h.lineTo(n.position.x + o.x, n.position.y + o.y)
                          : h.lineTo(o.x, o.y), void h.endFill())
                      : void h.clear();
                      }), (n.body = function(t, e) {
                        var n = (t.engine, e.render);
                        if (n.visible) {
                          if (n.sprite && n.sprite.texture) {
                            var i = `b-${e.id}`,
                          o = t.sprites[i],
                          a = t.spriteContainer;
                            o || (o = t.sprites[i] = r(t, e)), s.indexOf(
                          a.children,
                          o,
                        ) === -1 && a.addChild(o), (o.position.x =
                          e.position.x), (o.position.y =
                          e.position.y), (o.rotation = e.angle), (o.scale.x =
                          n.sprite.xScale || 1), (o.scale.y =
                          n.sprite.yScale || 1);
                          } else {
                            var u = `b-${e.id}`,
                          h = t.primitives[u],
                          c = t.container;
                            h ||
                          ((h = t.primitives[u] = l(t, e)), (h.initialAngle =
                            e.angle)), s.indexOf(c.children, h) === -1 &&
                          c.addChild(h), (h.position.x =
                          e.position.x), (h.position.y =
                          e.position.y), (h.rotation =
                          e.angle - h.initialAngle);
                          }
                        }
                      });
                  var r = function(t, e) {
                      var r = e.render,
                        n = r.sprite.texture,
                        i = h(t, n),
                        o = new PIXI.Sprite(i);
                      return (o.anchor.x = e.render.sprite.xOffset), (o.anchor.y =
                      e.render.sprite.yOffset), o;
                    },
                    l = function(t, e) {
                      var r,
                        n = e.render,
                        i = t.options,
                        o = new PIXI.Graphics(),
                        a = s.colorToNumber(n.fillStyle),
                        u = s.colorToNumber(n.strokeStyle),
                        l = s.colorToNumber(n.strokeStyle),
                        h = s.colorToNumber('#bbb'),
                        c = s.colorToNumber('#CD5C5C');
                      o.clear();
                      for (
                        var d = e.parts.length > 1 ? 1 : 0;
                        d < e.parts.length;
                        d++
                      ) {
                        (r = e.parts[d]), i.wireframes
                          ? (o.beginFill(0, 0), o.lineStyle(1, h, 1))
                          : (o.beginFill(a, 1), o.lineStyle(
                              n.lineWidth,
                              u,
                              1,
                            )), o.moveTo(
                          r.vertices[0].x - e.position.x,
                          r.vertices[0].y - e.position.y,
                        );
                        for (var f = 1; f < r.vertices.length; f++) {
                          o.lineTo(
                            r.vertices[f].x - e.position.x,
                            r.vertices[f].y - e.position.y,
                          );
                        }
                        o.lineTo(
                          r.vertices[0].x - e.position.x,
                          r.vertices[0].y - e.position.y,
                        ), o.endFill(), (i.showAngleIndicator || i.showAxes) &&
                          (o.beginFill(0, 0), i.wireframes
                            ? o.lineStyle(1, c, 1)
                            : o.lineStyle(1, l), o.moveTo(
                            r.position.x - e.position.x,
                            r.position.y - e.position.y,
                          ), o.lineTo(
                            (r.vertices[0].x +
                              r.vertices[r.vertices.length - 1].x) /
                              2 -
                              e.position.x,
                            (r.vertices[0].y +
                              r.vertices[r.vertices.length - 1].y) /
                              2 -
                              e.position.y,
                          ), o.endFill());
                      }
                      return o;
                    },
                    h = function(t, e) {
                      var r = t.textures[e];
                      return r ||
                        (r = t.textures[e] = PIXI.Texture.fromImage(e)), r;
                    };
                })();
              },
              {
                '../body/Composite': 2,
                '../core/Common': 14,
                '../core/Events': 16,
                '../geometry/Bounds': 26,
                '../geometry/Vector': 28,
              },
            ],
          },
          {},
          [30],
        )(30);
      });
    }.call(
      e,
      (function() {
        return this;
      })(),
    ));
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    Object.defineProperty(e, '__esModule', {
      value: !0,
    }), (e.GobUtils = e.Utils = void 0);
    var i = r(3), o = (n(i), 0);
    (e.Utils = {
      uuid() {
        return o++;
      },
    }), (e.GobUtils = {});
  },
  function(t, e) {
    'use strict';
    Object.defineProperty(e, '__esModule', {value: !0});
    (e.KEYS = {
      BACKSPACE: 8,
      TAB: 9,
      ENTER: 13,
      SHIFT: 16,
      CTRL: 17,
      ALT: 18,
      PAUSE: 19,
      CAPS: 20,
      ESC: 27,
      SPACE: 32,
      PAGEUP: 33,
      PAGEDOWN: 34,
      END: 35,
      HOME: 36,
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      DOWN: 40,
      INSERT: 45,
      DELETE: 46,
      0: 48,
      1: 49,
      2: 50,
      3: 51,
      4: 52,
      5: 53,
      6: 54,
      7: 55,
      8: 56,
      9: 57,
      A: 65,
      B: 66,
      C: 67,
      D: 68,
      E: 69,
      F: 70,
      G: 71,
      H: 72,
      I: 73,
      J: 74,
      K: 75,
      L: 76,
      M: 77,
      N: 78,
      O: 79,
      P: 80,
      Q: 81,
      R: 82,
      S: 83,
      T: 84,
      U: 85,
      V: 86,
      W: 87,
      X: 88,
      Y: 89,
      Z: 90,
      LEFT_WINDOW: 91,
      RIGHT_WINDOW: 92,
      SELECT: 93,
      NUM0: 96,
      NUM1: 97,
      NUM2: 98,
      NUM3: 99,
      NUM4: 100,
      NUM5: 101,
      NUM6: 102,
      NUM7: 103,
      NUM8: 104,
      NUM9: 105,
      MULTIPLY: 106,
      ADD: 107,
      SUBTRACT: 109,
      DECIMAL: 110,
      DIVIDE: 111,
      F1: 112,
      F2: 113,
      F3: 114,
      F4: 115,
      F5: 116,
      F6: 117,
      F7: 118,
      F8: 119,
      F9: 120,
      F10: 121,
      F11: 122,
      F12: 123,
      NUM_LOCK: 144,
      SCROLL_LOCK: 145,
      SEMICOLON: 186,
      EQUAL: 187,
      COMMA: 188,
      DASH: 189,
      PERIOD: 190,
      FSLASH: 191,
      BACKTICK: 192,
      OPEN_BRACKET: 219,
      BSLASH: 220,
      CLOSE_BRACKET: 221,
      QUOTE: 222,
    }), (e.EVENTS = {
      ONKEYDOWN: 'onKeyDown',
      ONKEYUP: 'onKeyUp',
      ONKEYHOLD: 'onKeyHold',
    });
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i(t) {
      if (t && t.__esModule) { return t; }
      var e = {};
      if (t != null) {
        for (var r in t) { Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); }
      }
      return (e.default = t), e;
    }
    function o(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    Object.defineProperty(e, '__esModule', {value: !0});
    var s = (function() {
        function t(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1), (n.configurable = !0), 'value' in
            n && (n.writable = !0), Object.defineProperty(t, n.key, n);
          }
        }
        return function(e, r, n) {
          return r && t(e.prototype, r), n && t(e, n), e;
        };
      })(),
      a = r(4),
      u = i(a),
      l = r(2),
      h = (n(l), r(190)),
      c = (n(h), r(191)),
      d = (n(c), r(186)),
      f = n(d),
      p = r(185),
      v = r(187),
      y = r(192),
      g = (n(y), r(194)),
      m = n(g),
      b = (function() {
        function t(e) {
          o(
            this,
            t,
          ), (this._id = v.Utils.uuid()), (this.renderer = new u.WebGLRenderer(
            e.width,
            e.height,
            {view: e.canvas},
          )), (this.renderer.backgroundColor = 16777215), (this.tileSize = 30), (this.gobs = []), (this.engine = f.default.Engine.create()), (this.engine.world.gravity.x = 0), (this.engine.world.gravity.y = 0), (this.audioContext = new AudioContext()), (this.debug =
            e.debug), (this.stats = new m.default()), this.stats.showPanel(
            0,
          ), this.debug &&
            document.body &&
            document.body.appendChild(this.stats.dom);
        }
        return s(t, [
          {
            key: 'loadScene',
            value(t) {
              (this.currentScene = t), this.currentScene.load();
            },
          },
          {
            key: 'updateCanvas',
            value() {
              this.stats.begin(), this.currentScene.resources != null &&
                (this.currentScene.__prePhysicsUpdate(), this.currentScene.prePhysicsUpdate(), f.default.Engine.update(
                  this.engine,
                  p.Time.dtms,
                ), this.currentScene.__postPhysicsUpdate(), this.currentScene.postPhysicsUpdate(), this.currentScene.__update(), this.currentScene.update(), this.currentScene.__preRenderUpdate(), this.renderer.render(
                  this.currentScene.stage,
                ), this.stats.end());
            },
          },
          {key: 'update', value() {}},
        ]), t;
      })();
    e.default = b;
  },
  function(t, e) {
    'use strict';
    function r(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    Object.defineProperty(e, '__esModule', {value: !0});
    var n = (function() {
        function t(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1), (n.configurable = !0), 'value' in
            n && (n.writable = !0), Object.defineProperty(t, n.key, n);
          }
        }
        return function(e, r, n) {
          return r && t(e.prototype, r), n && t(e, n), e;
        };
      })(),
      i = (function() {
        function t(e) {
          r(this, t), (this.stage = e);
        }
        return n(t, [
          {
            key: 'moveTo',
            value(t, e) {
              this.stage.setTransform(t, e);
            },
          },
          {
            key: 'moveRelative',
            value(t, e) {
              this.stage.setTransform(
                this.stage.position.x + t,
                this.stage.position.y + e,
              );
            },
          },
        ]), t;
      })();
    e.default = i;
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i(t) {
      if (t && t.__esModule) { return t; }
      var e = {};
      if (t != null) {
        for (var r in t) { Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); }
      }
      return (e.default = t), e;
    }
    function o(t) {
      if (Array.isArray(t)) {
        for (var e = 0, r = Array(t.length); e < t.length; e++) { r[e] = t[e]; }
        return r;
      }
      return Array.from(t);
    }
    function s(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    Object.defineProperty(e, '__esModule', {value: !0});
    var a = (function() {
        function t(t, e) {
          var r = [], n = !0, i = !1, o = void 0;
          try {
            for (
            var s, a = t[Symbol.iterator]();
            !(n = (s = a.next()).done) &&
            (r.push(s.value), !e || r.length !== e);
            n = !0
          ) { }
          } catch (t) {
            (i = !0), (o = t);
          } finally {
            try {
              !n && a.return && a.return();
            } finally {
              if (i) { throw o; }
            }
          }
          return r;
        }
        return function(e, r) {
          if (Array.isArray(e)) { return e; }
          if (Symbol.iterator in Object(e)) { return t(e, r); }
          throw new TypeError(
          'Invalid attempt to destructure non-iterable instance',
        );
        };
      })(),
      u = (function() {
        function t(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable =
              n.enumerable || !1), (n.configurable = !0), 'value' in n &&
              (n.writable = !0), Object.defineProperty(t, n.key, n);
          }
        }
        return function(e, r, n) {
          return r && t(e.prototype, r), n && t(e, n), e;
        };
      })(),
      l = r(4),
      h = i(l),
      c = r(190),
      d = n(c),
      f = r(2),
      p = n(f),
      v = r(192),
      y = n(v),
      g = r(186),
      m = n(g),
      b = r(189),
      x = (n(b), (function() {
        function t(e) {
          var r = this;
          if (
            (s(this, t), (this.__preloaded = function(t) {
              var e = a(t, 2), n = e[0];
              e[1];
              (r.loaded = !0), console.log(
                n,
              ), (r.resources = n), r.onSceneLoad(), r.__postSceneLoad();
            }), (this.name = this.constructor.name), (this.stage = new h.Container()), e ==
              null)
          ) {
            throw new Error(
              `${this.constructor.name
                } needs to be passed a Game object on\n        construction.`,
            );
          }
          (this.pool = e), (this.camera = new d.default(
            this.stage,
          )), (this.loader = new y.default(
            this.__preloaded,
            this.pool.audioContext,
          )), (this.loaded = !1), (this.gobs = []), this._drawGrid(
            this.pool.debug,
          ), this.init();
        }
        return u(t, [
          {key: '__init', value() {}},
          {key: 'init', value() {}},
          {
            key: 'load',
            value() {
              this.__preload.apply(this, o(this.constructor.preload));
            },
          },
          {
            key: '__preload',
            value() {
              var t, e;
              if (this.loaded) { return void Promise.resolve([this.resources]); }
              var r = (t = this.loader).loadSprites.apply(t, arguments),
                n = (e = this.loader).loadAudio.apply(e, arguments);
              Promise.all([r, n]).then(this.__preloaded).catch(t => {
                return console.log('Error loading resources: ', t);
              });
            },
          },
          {key: 'onSceneLoad', value() {}},
          {
            key: '__postSceneLoad',
            value() {
              var t = this;
              this.gobs.map(e => {
                e.__onSceneLoad(), t.stage.addChild(e.sprite.pixi);
              });
            },
          },
          {
            key: '__prePhysicsUpdate',
            value() {
              for (var t = 0; t < this.gobs.length; t++) {
                this.gobs[t].collider &&
                  (this.gobs[t].prePhysicsUpdate(), this.gobs[
                    t
                  ].__prePhysicsUpdate());
              }
            },
          },
          {key: 'prePhysicsUpdate', value() {}},
          {
            key: '__update',
            value() {
              this.gobs.map(t => {
                t.__update(), t.update();
              });
            },
          },
          {key: 'update', value() {}},
          {
            key: '__postPhysicsUpdate',
            value() {
              for (var t = 0; t < this.gobs.length; t++) {
                this.gobs[t].collider &&
                  (this.gobs[t].__postPhysicsUpdate(), this.gobs[
                    t
                  ].postPhysicsUpdate());
              }
            },
          },
          {key: 'postPhysicsUpdate', value() {}},
          {
            key: '__preRenderUpdate',
            value() {
              this.stage.children.sort((t, e) => {
                return t.zDepth < e.zDepth ? -1 : t.zDepth >= e.zDepth ? 1 : 0;
              });
            },
          },
          {
            key: '_drawGrid',
            value(t) {
              (this.grid = new h.Graphics()), this.grid.moveTo(
                0,
                0,
              ), this.grid.lineStyle(1, 3368601, 0.3);
              for (
                var e = 0;
                e <= this.pool.renderer.view.width;
                e += this.pool.tileSize
              ) {
                this.grid.moveTo(e, 0), this.grid.lineTo(
                  e,
                  this.pool.renderer.view.height,
                );
              }
              for (
                var r = 0;
                r < this.pool.renderer.view.height;
                r += this.pool.tileSize
              ) {
                this.grid.moveTo(0, r), this.grid.lineTo(
                  this.pool.renderer.view.width,
                  r,
                );
              }
              t || (this.grid.visible = !1), this.stage.addChild(this.grid);
            },
          },
          {
            key: 'createGob',
            value(t) {
              var e = arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : p.default,
                r = new e();
              r.__init(this, t), r.collider != null &&
                m.default.World.add(
                  this.pool.engine.world,
                  r.collider.body,
                ), this.gobs.push(r);
            },
          },
          {
            key: 'removeGob',
            value(t) {
              t.collider != null &&
                m.default.World.remove(
                  this.pool.engine.world,
                  t.collider.body,
                ), (this.gobs = this.gobs.filter(e => {
                  return e._id !== t._id;
                })), this.stage.removeChild(t.sprite.pixi), t.debug &&
                (this.stage.removeChild(
                  t._debugData.colliderOutline,
                ), this.stage.removeChild(t._debugData.spriteOutline));
            },
          },
        ]), t;
      })());
    e.default = x;
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      if (t && t.__esModule) { return t; }
      var e = {};
      if (t != null) {
        for (var r in t) { Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); }
      }
      return (e.default = t), e;
    }
    function i(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function o(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    Object.defineProperty(e, '__esModule', {value: !0});
    var s = (function() {
        function t(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1), (n.configurable = !0), 'value' in
            n && (n.writable = !0), Object.defineProperty(t, n.key, n);
          }
        }
        return function(e, r, n) {
          return r && t(e.prototype, r), n && t(e, n), e;
        };
      })(),
      a = r(2),
      u = (i(a), r(4)),
      l = n(u),
      h = r(193),
      c = i(h),
      d = (function() {
        function t(e, r) {
          o(this, t), (this.loader = new l.loaders
            .Loader()), (this.onComplete = e), (this.audioContext = r);
        }
        return s(t, [
          {
            key: 'loadSprites',
            value() {
              for (
                var t = this, e = arguments.length, r = Array(e), n = 0;
                n < e;
                n++
              ) { r[n] = arguments[n]; }
              if (r.length === 0) {
                throw new Error(
                  'No resources were included in the load function.',
                );
              }
              return r.map(e => {
                t.loader.add(e.name, e.spritePath);
              }), new Promise((e, r) => {
                t.loader.load((t, n) => {
                  n.error != null ? r(n) : e(n);
                });
              });
            },
          },
          {
            key: 'loadAudio',
            value() {
              for (
                var t = this, e = [], r = arguments.length, n = Array(r), i = 0;
                i < r;
                i++
              ) { n[i] = arguments[i]; }
              return n.map(r => {
                for (var n in r.audioSources) { e.push(t.loadAudioClip(r, n, r.audioSources[n])); }
              }), Promise.all(e);
            },
          },
          {
            key: 'loadAudioClip',
            value(t, e, r) {
              var n = this,
                i = new Promise((i, o) => {
                  var s = new XMLHttpRequest();
                  s.open(
                    'GET',
                    r,
                    !0,
                  ), (s.responseType = 'arraybuffer'), (s.onload = function() {
                    n.audioContext.decodeAudioData(
                      s.response,
                      t => {
                        t == null
                          ? o(`Error decoding file data for ${r}`)
                          : i(t);
                      },
                      r => {
                        return o(
                          `Error decoding "${
                            e
                            }" audio for ${
                            t.name
                            }: ${
                            r}`,
                        );
                      },
                    );
                  }), (s.onerror = o), s.send();
                });
              return i.then(r => {
                t.__audio[e] = new c.default(n.audioContext, r);
              }), i;
            },
          },
        ]), t;
      })();
    e.default = d;
  },
  function(t, e) {
    'use strict';
    function r(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    Object.defineProperty(e, '__esModule', {value: !0});
    var n = (function() {
        function t(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1), (n.configurable = !0), 'value' in
            n && (n.writable = !0), Object.defineProperty(t, n.key, n);
          }
        }
        return function(e, r, n) {
          return r && t(e.prototype, r), n && t(e, n), e;
        };
      })(),
      i = (function() {
        function t(e, n) {
          r(this, t), (this.buffer = n), (this.context = e);
        }
        return n(t, [
          {
            key: 'play',
            value(t) {
              var e = this.context.createBufferSource();
              if (((e.buffer = this.buffer), t != null)) {
                if (!(t >= 0 && t <= 1)) {
                  return void console.error(
                    `Invalid volume of ${
                      t
                      } specified.\n           Only values from 0 to 1 are allowed!`,
                  );
                }
                var r = this.context.createGain();
                console.log(t), (r.gain.value = t), e.connect(r), r.connect(
                  this.context.destination,
                );
              } else { e.connect(this.context.destination); }
              e.start(0);
            },
          },
        ]), t;
      })();
    e.default = i;
  },
  function(t, e, r) {
    !(function(e, r) {
      t.exports = r();
    })(this, () => {
      var t = function() {
        function e(t) {
          return i.appendChild(t.dom), t;
        }
        function r(t) {
          for (var e = 0; e < i.children.length; e++) { i.children[e].style.display = e === t ? 'block' : 'none'; }
          n = t;
        }
        var n = 0, i = document.createElement('div');
        (i.style.cssText =
          'position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000'), i.addEventListener(
          'click',
          t => {
            t.preventDefault(), r(++n % i.children.length);
          },
          !1,
        );
        var o = (performance || Date).now(),
          s = o,
          a = 0,
          u = e(new t.Panel('FPS', '#0ff', '#002')),
          l = e(new t.Panel('MS', '#0f0', '#020'));
        if (self.performance && self.performance.memory) { var h = e(new t.Panel('MB', '#f08', '#201')); }
        return r(0), {
          REVISION: 16,
          dom: i,
          addPanel: e,
          showPanel: r,
          begin() {
            o = (performance || Date).now();
          },
          end() {
            a++;
            var t = (performance || Date).now();
            if (
              (l.update(t - o, 200), t > s + 1e3 &&
                (u.update(1e3 * a / (t - s), 100), (s = t), (a = 0), h))
            ) {
              var e = performance.memory;
              h.update(e.usedJSHeapSize / 1048576, e.jsHeapSizeLimit / 1048576);
            }
            return t;
          },
          update() {
            o = this.end();
          },
          domElement: i,
          setMode: r,
        };
      };
      return (t.Panel = function(t, e, r) {
        var n = 1 / 0,
          i = 0,
          o = Math.round,
          s = o(window.devicePixelRatio || 1),
          a = 80 * s,
          u = 48 * s,
          l = 3 * s,
          h = 2 * s,
          c = 3 * s,
          d = 15 * s,
          f = 74 * s,
          p = 30 * s,
          v = document.createElement('canvas');
        (v.width = a), (v.height = u), (v.style.cssText =
          'width:80px;height:48px');
        var y = v.getContext('2d');
        return (y.font =
          `bold ${9 * s}px Helvetica,Arial,sans-serif`), (y.textBaseline =
          'top'), (y.fillStyle = r), y.fillRect(
          0,
          0,
          a,
          u,
        ), (y.fillStyle = e), y.fillText(t, l, h), y.fillRect(
          c,
          d,
          f,
          p,
        ), (y.fillStyle = r), (y.globalAlpha = 0.9), y.fillRect(c, d, f, p), {
          dom: v,
          update(u, g) {
            (n = Math.min(n, u)), (i = Math.max(
              i,
              u,
            )), (y.fillStyle = r), (y.globalAlpha = 1), y.fillRect(
              0,
              0,
              a,
              d,
            ), (y.fillStyle = e), y.fillText(
              `${o(u)} ${t} (${o(n)}-${o(i)})`,
              l,
              h,
            ), y.drawImage(v, c + s, d, f - s, p, c, d, f - s, p), y.fillRect(
              c + f - s,
              d,
              s,
              p,
            ), (y.fillStyle = r), (y.globalAlpha = 0.9), y.fillRect(
              c + f - s,
              d,
              s,
              o((1 - u / g) * p),
            );
          },
        };
      }), t;
    });
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    Object.defineProperty(e, '__esModule', {value: !0});
    var i = r(196), o = n(i);
    e.default = {Box: o.default};
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    Object.defineProperty(e, '__esModule', {value: !0});
    var o = r(186),
      s = n(o),
      a = function t(e, r, n) {
        i(
          this,
          t,
        ), (this.width = r), (this.height = n), (this.body = s.default.Body.create(
          {
            angle: e.transform.angle,
            position: s.default.Vector.create(
              e.transform.position.x,
              e.transform.position.y,
            ),
            vertices: [
              s.default.Vector.create(
                e.transform.position.x - this.width / 2,
                e.transform.position.y - this.height / 2,
              ),
              s.default.Vector.create(
                e.transform.position.x + this.width / 2,
                e.transform.position.y - this.height / 2,
              ),
              s.default.Vector.create(
                e.transform.position.x + this.width / 2,
                e.transform.position.y + this.height / 2,
              ),
              s.default.Vector.create(
                e.transform.position.x - this.width / 2,
                e.transform.position.y + this.height / 2,
              ),
            ],
          },
        ));
      };
    e.default = a;
  },
  function(t, e, r) {
    !(function(e, n) {
      t.exports = n(r(186));
    })(this, t => {
      return (function(t) {
        function e(n) {
          if (r[n]) { return r[n].exports; }
          var i = (r[n] = {i: n, l: !1, exports: {}});
          return t[n].call(i.exports, i, i.exports, e), (i.l = !0), i.exports;
        }
        var r = {};
        return (e.m = t), (e.c = r), (e.i = function(t) {
          return t;
        }), (e.d = function(t, r, n) {
          e.o(t, r) ||
            Object.defineProperty(t, r, {
              configurable: !1,
              enumerable: !0,
              get: n,
            });
        }), (e.n = function(t) {
          var r = t && t.__esModule
            ? function() {
              return t.default;
            }
            : function() {
              return t;
            };
          return e.d(r, 'a', r), r;
        }), (e.o = function(t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        }), (e.p = ''), e((e.s = 1));
      })([
        function(e, r) {
          e.exports = t;
        },
        function(t, e, r) {
          var n = r(0),
            i = {
              name: 'matter-collision-events',
              version: '0.1.5',
              for: 'matter-js@^0.12.0',
              install(t) {
                var e = t.Body.create;
                (t.Body.create = function() {
                  var t = e(...arguments);
                  return (t.onCollide = function(e) {
                    t._mceOC = e;
                  }), (t.onCollideEnd = function(e) {
                    t._mceOCE = e;
                  }), (t.onCollideActive = function(e) {
                    t._mceOCA = e;
                  }), t;
                }), t.after('Engine.create', function() {
                  t.Events.on(this, 'collisionStart', e => {
                    e.pairs.map(e => {
                      t.Events.trigger(e.bodyA, 'onCollide', {
                        pair: e,
                      }), t.Events.trigger(e.bodyB, 'onCollide', {pair: e}), e.bodyA._mceOC && e.bodyA._mceOC(e), e.bodyB._mceOC && e.bodyB._mceOC(e);
                    });
                  }), t.Events.on(this, 'collisionActive', e => {
                    e.pairs.map(e => {
                      t.Events.trigger(e.bodyA, 'onCollideActive', {
                        pair: e,
                      }), t.Events.trigger(e.bodyB, 'onCollideActive', {pair: e}), e.bodyA._mceOCA && e.bodyA._mceOCA(e), e.bodyB._mceOCA && e.bodyB._mceOCA(e);
                    });
                  }), t.Events.on(this, 'collisionEnd', e => {
                    e.pairs.map(e => {
                      t.Events.trigger(e.bodyA, 'onCollideEnd', {
                        pair: e,
                      }), t.Events.trigger(e.bodyB, 'onCollideEnd', {pair: e}), e.bodyA._mceOCE && e.bodyA._mceOCE(e), e.bodyB._mceOCE && e.bodyB._mceOCE(e);
                    });
                  });
                });
              },
            };
          n.Plugin.register(i), (t.exports.MatterCollisionEvents = i);
        },
      ]);
    });
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : {default: t};
    }
    function i(t) {
      if (t && t.__esModule) { return t; }
      var e = {};
      if (t != null) {
        for (var r in t) { Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); }
      }
      return (e.default = t), e;
    }
    function o(t) {
      if (Array.isArray(t)) {
        for (var e = 0, r = Array(t.length); e < t.length; e++) { r[e] = t[e]; }
        return r;
      }
      return Array.from(t);
    }
    function s(t, e) {
      if (!(t instanceof e)) { throw new TypeError('Cannot call a class as a function'); }
    }
    Object.defineProperty(e, '__esModule', {value: !0});
    var a = (function() {
        function t(t, e) {
          var r = [], n = !0, i = !1, o = void 0;
          try {
            for (
            var s, a = t[Symbol.iterator]();
            !(n = (s = a.next()).done) &&
            (r.push(s.value), !e || r.length !== e);
            n = !0
          ) { }
          } catch (t) {
            (i = !0), (o = t);
          } finally {
            try {
              !n && a.return && a.return();
            } finally {
              if (i) { throw o; }
            }
          }
          return r;
        }
        return function(e, r) {
          if (Array.isArray(e)) { return e; }
          if (Symbol.iterator in Object(e)) { return t(e, r); }
          throw new TypeError(
          'Invalid attempt to destructure non-iterable instance',
        );
        };
      })(),
      u = (function() {
        function t(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable =
              n.enumerable || !1), (n.configurable = !0), 'value' in n &&
              (n.writable = !0), Object.defineProperty(t, n.key, n);
          }
        }
        return function(e, r, n) {
          return r && t(e.prototype, r), n && t(e, n), e;
        };
      })(),
      l = r(4),
      h = i(l),
      c = r(190),
      d = n(c),
      f = r(2),
      p = n(f),
      v = r(192),
      y = n(v),
      g = r(186),
      m = n(g),
      b = r(189),
      x = (n(b), (function() {
        function t(e) {
          var r = this;
          if (
            (s(this, t), (this.__preloaded = function(t) {
              var e = a(t, 2), n = e[0];
              e[1];
              (r.loaded = !0), console.log(
                n,
              ), (r.resources = n), r.onSceneLoad(), r.__postSceneLoad();
            }), (this.name = this.constructor.name), (this.stage = new h.Container()), e ==
              null)
          ) {
            throw new Error(
              `${this.constructor.name
                } needs to be passed a Game object on\n        construction.`,
            );
          }
          (this.pool = e), (this.camera = new d.default(
            this.stage,
          )), (this.loader = new y.default(
            this.__preloaded,
            this.pool.audioContext,
          )), (this.loaded = !1), (this.gobs = []), this._drawGrid(
            this.pool.debug,
          ), this.init();
        }
        return u(t, [
          {key: '__init', value() {}},
          {key: 'init', value() {}},
          {
            key: 'load',
            value() {
              this.__preload.apply(this, o(this.constructor.preload));
            },
          },
          {
            key: '__preload',
            value() {
              var t, e;
              if (this.loaded) { return void Promise.resolve([this.resources]); }
              var r = (t = this.loader).loadSprites.apply(t, arguments),
                n = (e = this.loader).loadAudio.apply(e, arguments);
              Promise.all([r, n]).then(this.__preloaded).catch(t => {
                return console.log('Error loading resources: ', t);
              });
            },
          },
          {key: 'onSceneLoad', value() {}},
          {
            key: '__postSceneLoad',
            value() {
              var t = this;
              this.gobs.map(e => {
                e.__onSceneLoad(), t.stage.addChild(e.sprite.pixi);
              });
            },
          },
          {
            key: '__prePhysicsUpdate',
            value() {
              for (var t = 0; t < this.gobs.length; t++) {
                this.gobs[t].collider &&
                  (this.gobs[t].prePhysicsUpdate(), this.gobs[
                    t
                  ].__prePhysicsUpdate());
              }
            },
          },
          {key: 'prePhysicsUpdate', value() {}},
          {
            key: '__update',
            value() {
              this.gobs.map(t => {
                t.__update(), t.update();
              });
            },
          },
          {key: 'update', value() {}},
          {
            key: '__postPhysicsUpdate',
            value() {
              for (var t = 0; t < this.gobs.length; t++) {
                this.gobs[t].collider &&
                  (this.gobs[t].__postPhysicsUpdate(), this.gobs[
                    t
                  ].postPhysicsUpdate());
              }
            },
          },
          {key: 'postPhysicsUpdate', value() {}},
          {
            key: '__preRenderUpdate',
            value() {
              this.stage.children.sort((t, e) => {
                return t.zDepth < e.zDepth ? -1 : t.zDepth >= e.zDepth ? 1 : 0;
              });
            },
          },
          {
            key: '_drawGrid',
            value(t) {
              (this.grid = new h.Graphics()), this.grid.moveTo(
                0,
                0,
              ), this.grid.lineStyle(1, 3368601, 0.3);
              for (
                var e = 0;
                e <= this.pool.renderer.view.width;
                e += this.pool.tileSize
              ) {
                this.grid.moveTo(e, 0), this.grid.lineTo(
                  e,
                  this.pool.renderer.view.height,
                );
              }
              for (
                var r = 0;
                r < this.pool.renderer.view.height;
                r += this.pool.tileSize
              ) {
                this.grid.moveTo(0, r), this.grid.lineTo(
                  this.pool.renderer.view.width,
                  r,
                );
              }
              t || (this.grid.visible = !1), this.stage.addChild(this.grid);
            },
          },
          {
            key: 'createGob',
            value(t) {
              var e = arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : p.default,
                r = new e();
              r.__init(this, t), r.collider != null &&
                m.default.World.add(
                  this.pool.engine.world,
                  r.collider.body,
                ), this.gobs.push(r);
            },
          },
          {
            key: 'removeGob',
            value(t) {
              t.collider != null &&
                m.default.World.remove(
                  this.pool.engine.world,
                  t.collider.body,
                ), (this.gobs = this.gobs.filter(e => {
                  return e._id !== t._id;
                })), this.stage.removeChild(t.sprite.pixi), t.debug &&
                (this.stage.removeChild(
                  t._debugData.colliderOutline,
                ), this.stage.removeChild(t._debugData.spriteOutline));
            },
          },
        ]), t;
      })());
    e.default = x;
  },
]); // # sourceMappingURL=pew.js.map
