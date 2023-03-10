var extendStatics = function(e2, t2) {
  return extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e3, t3) {
    e3.__proto__ = t3;
  } || function(e3, t3) {
    for (var n2 in t3)
      Object.prototype.hasOwnProperty.call(t3, n2) && (e3[n2] = t3[n2]);
  }, extendStatics(e2, t2);
};
function __extends(e2, t2) {
  if ("function" != typeof t2 && null !== t2)
    throw new TypeError("Class extends value " + String(t2) + " is not a constructor or null");
  function __() {
    this.constructor = e2;
  }
  extendStatics(e2, t2), e2.prototype = null === t2 ? Object.create(t2) : (__.prototype = t2.prototype, new __());
}
var __assign = function() {
  return __assign = Object.assign || function __assign2(e2) {
    for (var t2, n2 = 1, i2 = arguments.length; n2 < i2; n2++)
      for (var o2 in t2 = arguments[n2])
        Object.prototype.hasOwnProperty.call(t2, o2) && (e2[o2] = t2[o2]);
    return e2;
  }, __assign.apply(this, arguments);
};
function __awaiter(e2, t2, n2, i2) {
  return new (n2 || (n2 = Promise))(function(o2, r2) {
    function fulfilled(e3) {
      try {
        step(i2.next(e3));
      } catch (e4) {
        r2(e4);
      }
    }
    function rejected(e3) {
      try {
        step(i2.throw(e3));
      } catch (e4) {
        r2(e4);
      }
    }
    function step(e3) {
      e3.done ? o2(e3.value) : function adopt(e4) {
        return e4 instanceof n2 ? e4 : new n2(function(t3) {
          t3(e4);
        });
      }(e3.value).then(fulfilled, rejected);
    }
    step((i2 = i2.apply(e2, t2 || [])).next());
  });
}
function __generator(e2, t2) {
  var n2, i2, o2, r2, s2 = { label: 0, sent: function() {
    if (1 & o2[0])
      throw o2[1];
    return o2[1];
  }, trys: [], ops: [] };
  return r2 = { next: verb(0), throw: verb(1), return: verb(2) }, "function" == typeof Symbol && (r2[Symbol.iterator] = function() {
    return this;
  }), r2;
  function verb(r3) {
    return function(a2) {
      return function step(r4) {
        if (n2)
          throw new TypeError("Generator is already executing.");
        for (; s2; )
          try {
            if (n2 = 1, i2 && (o2 = 2 & r4[0] ? i2.return : r4[0] ? i2.throw || ((o2 = i2.return) && o2.call(i2), 0) : i2.next) && !(o2 = o2.call(i2, r4[1])).done)
              return o2;
            switch (i2 = 0, o2 && (r4 = [2 & r4[0], o2.value]), r4[0]) {
              case 0:
              case 1:
                o2 = r4;
                break;
              case 4:
                return s2.label++, { value: r4[1], done: false };
              case 5:
                s2.label++, i2 = r4[1], r4 = [0];
                continue;
              case 7:
                r4 = s2.ops.pop(), s2.trys.pop();
                continue;
              default:
                if (!(o2 = s2.trys, (o2 = o2.length > 0 && o2[o2.length - 1]) || 6 !== r4[0] && 2 !== r4[0])) {
                  s2 = 0;
                  continue;
                }
                if (3 === r4[0] && (!o2 || r4[1] > o2[0] && r4[1] < o2[3])) {
                  s2.label = r4[1];
                  break;
                }
                if (6 === r4[0] && s2.label < o2[1]) {
                  s2.label = o2[1], o2 = r4;
                  break;
                }
                if (o2 && s2.label < o2[2]) {
                  s2.label = o2[2], s2.ops.push(r4);
                  break;
                }
                o2[2] && s2.ops.pop(), s2.trys.pop();
                continue;
            }
            r4 = t2.call(e2, s2);
          } catch (e3) {
            r4 = [6, e3], i2 = 0;
          } finally {
            n2 = o2 = 0;
          }
        if (5 & r4[0])
          throw r4[1];
        return { value: r4[0] ? r4[1] : void 0, done: true };
      }([r3, a2]);
    };
  }
}
var e, t = function(e2) {
  function ClientResponseError(t2) {
    var n2, i2, o2, r2, s2 = this;
    return (s2 = e2.call(this, "ClientResponseError") || this).url = "", s2.status = 0, s2.data = {}, s2.isAbort = false, s2.originalError = null, Object.setPrototypeOf(s2, ClientResponseError.prototype), t2 instanceof ClientResponseError || (s2.originalError = t2), null !== t2 && "object" == typeof t2 && (s2.url = "string" == typeof t2.url ? t2.url : "", s2.status = "number" == typeof t2.status ? t2.status : 0, s2.data = null !== t2.data && "object" == typeof t2.data ? t2.data : {}), "undefined" != typeof DOMException && t2 instanceof DOMException && (s2.isAbort = true), s2.name = "ClientResponseError " + s2.status, s2.message = null === (n2 = s2.data) || void 0 === n2 ? void 0 : n2.message, s2.message || (s2.isAbort ? s2.message = "The request was autocancelled. More info you could find in https://github.com/pocketbase/js-sdk#auto-cancellation." : (null === (r2 = null === (o2 = null === (i2 = s2.originalError) || void 0 === i2 ? void 0 : i2.cause) || void 0 === o2 ? void 0 : o2.message) || void 0 === r2 ? void 0 : r2.includes("ECONNREFUSED ::1")) ? s2.message = "Failed to connect to the PocketBase server. Try replacing the SDK url from localhost to 127.0.0.1 (https://github.com/pocketbase/js-sdk/issues/21)." : s2.message = "Something went wrong while processing your request."), s2;
  }
  return __extends(ClientResponseError, e2), ClientResponseError.prototype.toJSON = function() {
    return __assign({}, this);
  }, ClientResponseError;
}(Error), n = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
function cookieSerialize(e2, t2, i2) {
  var o2 = Object.assign({}, i2 || {}), r2 = o2.encode || defaultEncode;
  if (!n.test(e2))
    throw new TypeError("argument name is invalid");
  var s2 = r2(t2);
  if (s2 && !n.test(s2))
    throw new TypeError("argument val is invalid");
  var a2 = e2 + "=" + s2;
  if (null != o2.maxAge) {
    var c3 = o2.maxAge - 0;
    if (isNaN(c3) || !isFinite(c3))
      throw new TypeError("option maxAge is invalid");
    a2 += "; Max-Age=" + Math.floor(c3);
  }
  if (o2.domain) {
    if (!n.test(o2.domain))
      throw new TypeError("option domain is invalid");
    a2 += "; Domain=" + o2.domain;
  }
  if (o2.path) {
    if (!n.test(o2.path))
      throw new TypeError("option path is invalid");
    a2 += "; Path=" + o2.path;
  }
  if (o2.expires) {
    if (!function isDate(e3) {
      return "[object Date]" === Object.prototype.toString.call(e3) || e3 instanceof Date;
    }(o2.expires) || isNaN(o2.expires.valueOf()))
      throw new TypeError("option expires is invalid");
    a2 += "; Expires=" + o2.expires.toUTCString();
  }
  if (o2.httpOnly && (a2 += "; HttpOnly"), o2.secure && (a2 += "; Secure"), o2.priority)
    switch ("string" == typeof o2.priority ? o2.priority.toLowerCase() : o2.priority) {
      case "low":
        a2 += "; Priority=Low";
        break;
      case "medium":
        a2 += "; Priority=Medium";
        break;
      case "high":
        a2 += "; Priority=High";
        break;
      default:
        throw new TypeError("option priority is invalid");
    }
  if (o2.sameSite)
    switch ("string" == typeof o2.sameSite ? o2.sameSite.toLowerCase() : o2.sameSite) {
      case true:
        a2 += "; SameSite=Strict";
        break;
      case "lax":
        a2 += "; SameSite=Lax";
        break;
      case "strict":
        a2 += "; SameSite=Strict";
        break;
      case "none":
        a2 += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  return a2;
}
function defaultDecode(e2) {
  return -1 !== e2.indexOf("%") ? decodeURIComponent(e2) : e2;
}
function defaultEncode(e2) {
  return encodeURIComponent(e2);
}
function getTokenPayload(t2) {
  if (t2)
    try {
      var n2 = decodeURIComponent(e(t2.split(".")[1]).split("").map(function(e2) {
        return "%" + ("00" + e2.charCodeAt(0).toString(16)).slice(-2);
      }).join(""));
      return JSON.parse(n2) || {};
    } catch (e2) {
    }
  return {};
}
e = "function" == typeof atob ? atob : function(e2) {
  var t2 = String(e2).replace(/=+$/, "");
  if (t2.length % 4 == 1)
    throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");
  for (var n2, i2, o2 = 0, r2 = 0, s2 = ""; i2 = t2.charAt(r2++); ~i2 && (n2 = o2 % 4 ? 64 * n2 + i2 : i2, o2++ % 4) ? s2 += String.fromCharCode(255 & n2 >> (-2 * o2 & 6)) : 0)
    i2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(i2);
  return s2;
};
var i = function() {
  function BaseModel(e2) {
    void 0 === e2 && (e2 = {}), this.load(e2 || {});
  }
  return BaseModel.prototype.load = function(e2) {
    for (var t2 = 0, n2 = Object.entries(e2); t2 < n2.length; t2++) {
      var i2 = n2[t2], o2 = i2[0], r2 = i2[1];
      this[o2] = r2;
    }
    this.id = void 0 !== e2.id ? e2.id : "", this.created = void 0 !== e2.created ? e2.created : "", this.updated = void 0 !== e2.updated ? e2.updated : "";
  }, Object.defineProperty(BaseModel.prototype, "isNew", { get: function() {
    return !this.id;
  }, enumerable: false, configurable: true }), BaseModel.prototype.clone = function() {
    var e2 = "function" == typeof structuredClone ? structuredClone(this) : JSON.parse(JSON.stringify(this));
    return new this.constructor(e2);
  }, BaseModel.prototype.export = function() {
    return Object.assign({}, this);
  }, BaseModel;
}(), o = function(e2) {
  function Record() {
    return null !== e2 && e2.apply(this, arguments) || this;
  }
  return __extends(Record, e2), Record.prototype.load = function(t2) {
    e2.prototype.load.call(this, t2), this.collectionId = "string" == typeof t2.collectionId ? t2.collectionId : "", this.collectionName = "string" == typeof t2.collectionName ? t2.collectionName : "", this.loadExpand(t2.expand);
  }, Record.prototype.loadExpand = function(e3) {
    for (var t2 in e3 = e3 || {}, this.expand = {}, e3)
      Array.isArray(e3[t2]) ? this.expand[t2] = e3[t2].map(function(e4) {
        return new Record(e4 || {});
      }) : this.expand[t2] = new Record(e3[t2] || {});
  }, Record;
}(i), r = function(e2) {
  function Admin() {
    return null !== e2 && e2.apply(this, arguments) || this;
  }
  return __extends(Admin, e2), Admin.prototype.load = function(t2) {
    e2.prototype.load.call(this, t2), this.avatar = "number" == typeof t2.avatar ? t2.avatar : 0, this.email = "string" == typeof t2.email ? t2.email : "";
  }, Admin;
}(i), s = function() {
  function BaseAuthStore() {
    this.baseToken = "", this.baseModel = null, this._onChangeCallbacks = [];
  }
  return Object.defineProperty(BaseAuthStore.prototype, "token", { get: function() {
    return this.baseToken;
  }, enumerable: false, configurable: true }), Object.defineProperty(BaseAuthStore.prototype, "model", { get: function() {
    return this.baseModel;
  }, enumerable: false, configurable: true }), Object.defineProperty(BaseAuthStore.prototype, "isValid", { get: function() {
    return !function isTokenExpired(e2, t2) {
      void 0 === t2 && (t2 = 0);
      var n2 = getTokenPayload(e2);
      return !(Object.keys(n2).length > 0 && (!n2.exp || n2.exp - t2 > Date.now() / 1e3));
    }(this.token);
  }, enumerable: false, configurable: true }), BaseAuthStore.prototype.save = function(e2, t2) {
    this.baseToken = e2 || "", this.baseModel = null !== t2 && "object" == typeof t2 ? void 0 !== t2.collectionId ? new o(t2) : new r(t2) : null, this.triggerChange();
  }, BaseAuthStore.prototype.clear = function() {
    this.baseToken = "", this.baseModel = null, this.triggerChange();
  }, BaseAuthStore.prototype.loadFromCookie = function(e2, t2) {
    void 0 === t2 && (t2 = "pb_auth");
    var n2 = function cookieParse(e3, t3) {
      var n3 = {};
      if ("string" != typeof e3)
        return n3;
      for (var i3 = Object.assign({}, t3 || {}).decode || defaultDecode, o2 = 0; o2 < e3.length; ) {
        var r2 = e3.indexOf("=", o2);
        if (-1 === r2)
          break;
        var s2 = e3.indexOf(";", o2);
        if (-1 === s2)
          s2 = e3.length;
        else if (s2 < r2) {
          o2 = e3.lastIndexOf(";", r2 - 1) + 1;
          continue;
        }
        var a2 = e3.slice(o2, r2).trim();
        if (void 0 === n3[a2]) {
          var c3 = e3.slice(r2 + 1, s2).trim();
          34 === c3.charCodeAt(0) && (c3 = c3.slice(1, -1));
          try {
            n3[a2] = i3(c3);
          } catch (e4) {
            n3[a2] = c3;
          }
        }
        o2 = s2 + 1;
      }
      return n3;
    }(e2 || "")[t2] || "", i2 = {};
    try {
      (null === typeof (i2 = JSON.parse(n2)) || "object" != typeof i2 || Array.isArray(i2)) && (i2 = {});
    } catch (e3) {
    }
    this.save(i2.token || "", i2.model || null);
  }, BaseAuthStore.prototype.exportToCookie = function(e2, t2) {
    var n2, i2, r2;
    void 0 === t2 && (t2 = "pb_auth");
    var s2 = { secure: true, sameSite: true, httpOnly: true, path: "/" }, a2 = getTokenPayload(this.token);
    (null == a2 ? void 0 : a2.exp) ? s2.expires = new Date(1e3 * a2.exp) : s2.expires = new Date("1970-01-01"), e2 = Object.assign({}, s2, e2);
    var c3 = { token: this.token, model: (null === (n2 = this.model) || void 0 === n2 ? void 0 : n2.export()) || null }, u2 = cookieSerialize(t2, JSON.stringify(c3), e2), l3 = "undefined" != typeof Blob ? new Blob([u2]).size : u2.length;
    return c3.model && l3 > 4096 && (c3.model = { id: null === (i2 = null == c3 ? void 0 : c3.model) || void 0 === i2 ? void 0 : i2.id, email: null === (r2 = null == c3 ? void 0 : c3.model) || void 0 === r2 ? void 0 : r2.email }, this.model instanceof o && (c3.model.username = this.model.username, c3.model.verified = this.model.verified, c3.model.collectionId = this.model.collectionId), u2 = cookieSerialize(t2, JSON.stringify(c3), e2)), u2;
  }, BaseAuthStore.prototype.onChange = function(e2, t2) {
    var n2 = this;
    return void 0 === t2 && (t2 = false), this._onChangeCallbacks.push(e2), t2 && e2(this.token, this.model), function() {
      for (var t3 = n2._onChangeCallbacks.length - 1; t3 >= 0; t3--)
        if (n2._onChangeCallbacks[t3] == e2)
          return delete n2._onChangeCallbacks[t3], void n2._onChangeCallbacks.splice(t3, 1);
    };
  }, BaseAuthStore.prototype.triggerChange = function() {
    for (var e2 = 0, t2 = this._onChangeCallbacks; e2 < t2.length; e2++) {
      var n2 = t2[e2];
      n2 && n2(this.token, this.model);
    }
  }, BaseAuthStore;
}(), a = function(e2) {
  function LocalAuthStore(t2) {
    void 0 === t2 && (t2 = "pocketbase_auth");
    var n2 = e2.call(this) || this;
    return n2.storageFallback = {}, n2.storageKey = t2, n2;
  }
  return __extends(LocalAuthStore, e2), Object.defineProperty(LocalAuthStore.prototype, "token", { get: function() {
    return (this._storageGet(this.storageKey) || {}).token || "";
  }, enumerable: false, configurable: true }), Object.defineProperty(LocalAuthStore.prototype, "model", { get: function() {
    var e3, t2 = this._storageGet(this.storageKey) || {};
    return null === t2 || "object" != typeof t2 || null === t2.model || "object" != typeof t2.model ? null : void 0 === (null === (e3 = t2.model) || void 0 === e3 ? void 0 : e3.collectionId) ? new r(t2.model) : new o(t2.model);
  }, enumerable: false, configurable: true }), LocalAuthStore.prototype.save = function(t2, n2) {
    this._storageSet(this.storageKey, { token: t2, model: n2 }), e2.prototype.save.call(this, t2, n2);
  }, LocalAuthStore.prototype.clear = function() {
    this._storageRemove(this.storageKey), e2.prototype.clear.call(this);
  }, LocalAuthStore.prototype._storageGet = function(e3) {
    if ("undefined" != typeof window && (null === window || void 0 === window ? void 0 : window.localStorage)) {
      var t2 = window.localStorage.getItem(e3) || "";
      try {
        return JSON.parse(t2);
      } catch (e4) {
        return t2;
      }
    }
    return this.storageFallback[e3];
  }, LocalAuthStore.prototype._storageSet = function(e3, t2) {
    if ("undefined" != typeof window && (null === window || void 0 === window ? void 0 : window.localStorage)) {
      var n2 = t2;
      "string" != typeof t2 && (n2 = JSON.stringify(t2)), window.localStorage.setItem(e3, n2);
    } else
      this.storageFallback[e3] = t2;
  }, LocalAuthStore.prototype._storageRemove = function(e3) {
    var t2;
    "undefined" != typeof window && (null === window || void 0 === window ? void 0 : window.localStorage) && (null === (t2 = window.localStorage) || void 0 === t2 || t2.removeItem(e3)), delete this.storageFallback[e3];
  }, LocalAuthStore;
}(s), c = function c2(e2) {
  this.client = e2;
}, u = function(e2) {
  function SettingsService() {
    return null !== e2 && e2.apply(this, arguments) || this;
  }
  return __extends(SettingsService, e2), SettingsService.prototype.getAll = function(e3) {
    return void 0 === e3 && (e3 = {}), this.client.send("/api/settings", { method: "GET", params: e3 }).then(function(e4) {
      return e4 || {};
    });
  }, SettingsService.prototype.update = function(e3, t2) {
    return void 0 === e3 && (e3 = {}), void 0 === t2 && (t2 = {}), this.client.send("/api/settings", { method: "PATCH", params: t2, body: e3 }).then(function(e4) {
      return e4 || {};
    });
  }, SettingsService.prototype.testS3 = function(e3) {
    return void 0 === e3 && (e3 = {}), this.client.send("/api/settings/test/s3", { method: "POST", params: e3 }).then(function() {
      return true;
    });
  }, SettingsService.prototype.testEmail = function(e3, t2, n2) {
    void 0 === n2 && (n2 = {});
    var i2 = { email: e3, template: t2 };
    return this.client.send("/api/settings/test/email", { method: "POST", params: n2, body: i2 }).then(function() {
      return true;
    });
  }, SettingsService;
}(c), l = function l2(e2, t2, n2, i2, o2) {
  this.page = e2 > 0 ? e2 : 1, this.perPage = t2 >= 0 ? t2 : 0, this.totalItems = n2 >= 0 ? n2 : 0, this.totalPages = i2 >= 0 ? i2 : 0, this.items = o2 || [];
}, d = function(e2) {
  function CrudService() {
    return null !== e2 && e2.apply(this, arguments) || this;
  }
  return __extends(CrudService, e2), CrudService.prototype.getFullList = function(e3, t2) {
    return void 0 === e3 && (e3 = 200), void 0 === t2 && (t2 = {}), this._getFullList(this.baseCrudPath, e3, t2);
  }, CrudService.prototype.getList = function(e3, t2, n2) {
    return void 0 === e3 && (e3 = 1), void 0 === t2 && (t2 = 30), void 0 === n2 && (n2 = {}), this._getList(this.baseCrudPath, e3, t2, n2);
  }, CrudService.prototype.getFirstListItem = function(e3, t2) {
    return void 0 === t2 && (t2 = {}), this._getFirstListItem(this.baseCrudPath, e3, t2);
  }, CrudService.prototype.getOne = function(e3, t2) {
    return void 0 === t2 && (t2 = {}), this._getOne(this.baseCrudPath, e3, t2);
  }, CrudService.prototype.create = function(e3, t2) {
    return void 0 === e3 && (e3 = {}), void 0 === t2 && (t2 = {}), this._create(this.baseCrudPath, e3, t2);
  }, CrudService.prototype.update = function(e3, t2, n2) {
    return void 0 === t2 && (t2 = {}), void 0 === n2 && (n2 = {}), this._update(this.baseCrudPath, e3, t2, n2);
  }, CrudService.prototype.delete = function(e3, t2) {
    return void 0 === t2 && (t2 = {}), this._delete(this.baseCrudPath, e3, t2);
  }, CrudService;
}(function(e2) {
  function BaseCrudService() {
    return null !== e2 && e2.apply(this, arguments) || this;
  }
  return __extends(BaseCrudService, e2), BaseCrudService.prototype._getFullList = function(e3, t2, n2) {
    var i2 = this;
    void 0 === t2 && (t2 = 100), void 0 === n2 && (n2 = {});
    var o2 = [], request = function(r2) {
      return __awaiter(i2, void 0, void 0, function() {
        return __generator(this, function(i3) {
          return [2, this._getList(e3, r2, t2, n2).then(function(e4) {
            var t3 = e4, n3 = t3.items, i4 = t3.totalItems;
            return o2 = o2.concat(n3), n3.length && i4 > o2.length ? request(r2 + 1) : o2;
          })];
        });
      });
    };
    return request(1);
  }, BaseCrudService.prototype._getList = function(e3, t2, n2, i2) {
    var o2 = this;
    return void 0 === t2 && (t2 = 1), void 0 === n2 && (n2 = 30), void 0 === i2 && (i2 = {}), i2 = Object.assign({ page: t2, perPage: n2 }, i2), this.client.send(e3, { method: "GET", params: i2 }).then(function(e4) {
      var t3 = [];
      if (null == e4 ? void 0 : e4.items) {
        e4.items = e4.items || [];
        for (var n3 = 0, i3 = e4.items; n3 < i3.length; n3++) {
          var r2 = i3[n3];
          t3.push(o2.decode(r2));
        }
      }
      return new l((null == e4 ? void 0 : e4.page) || 1, (null == e4 ? void 0 : e4.perPage) || 0, (null == e4 ? void 0 : e4.totalItems) || 0, (null == e4 ? void 0 : e4.totalPages) || 0, t3);
    });
  }, BaseCrudService.prototype._getOne = function(e3, t2, n2) {
    var i2 = this;
    return void 0 === n2 && (n2 = {}), this.client.send(e3 + "/" + encodeURIComponent(t2), { method: "GET", params: n2 }).then(function(e4) {
      return i2.decode(e4);
    });
  }, BaseCrudService.prototype._getFirstListItem = function(e3, n2, i2) {
    return void 0 === i2 && (i2 = {}), i2 = Object.assign({ filter: n2, $cancelKey: "one_by_filter_" + e3 + "_" + n2 }, i2), this._getList(e3, 1, 1, i2).then(function(e4) {
      var n3;
      if (!(null === (n3 = null == e4 ? void 0 : e4.items) || void 0 === n3 ? void 0 : n3.length))
        throw new t({ status: 404, data: { code: 404, message: "The requested resource wasn't found.", data: {} } });
      return e4.items[0];
    });
  }, BaseCrudService.prototype._create = function(e3, t2, n2) {
    var i2 = this;
    return void 0 === t2 && (t2 = {}), void 0 === n2 && (n2 = {}), this.client.send(e3, { method: "POST", params: n2, body: t2 }).then(function(e4) {
      return i2.decode(e4);
    });
  }, BaseCrudService.prototype._update = function(e3, t2, n2, i2) {
    var o2 = this;
    return void 0 === n2 && (n2 = {}), void 0 === i2 && (i2 = {}), this.client.send(e3 + "/" + encodeURIComponent(t2), { method: "PATCH", params: i2, body: n2 }).then(function(e4) {
      return o2.decode(e4);
    });
  }, BaseCrudService.prototype._delete = function(e3, t2, n2) {
    return void 0 === n2 && (n2 = {}), this.client.send(e3 + "/" + encodeURIComponent(t2), { method: "DELETE", params: n2 }).then(function() {
      return true;
    });
  }, BaseCrudService;
}(c)), h = function(e2) {
  function AdminService() {
    return null !== e2 && e2.apply(this, arguments) || this;
  }
  return __extends(AdminService, e2), AdminService.prototype.decode = function(e3) {
    return new r(e3);
  }, Object.defineProperty(AdminService.prototype, "baseCrudPath", { get: function() {
    return "/api/admins";
  }, enumerable: false, configurable: true }), AdminService.prototype.update = function(t2, n2, i2) {
    var o2 = this;
    return void 0 === n2 && (n2 = {}), void 0 === i2 && (i2 = {}), e2.prototype.update.call(this, t2, n2, i2).then(function(e3) {
      var t3, n3;
      return o2.client.authStore.model && void 0 === (null === (t3 = o2.client.authStore.model) || void 0 === t3 ? void 0 : t3.collectionId) && (null === (n3 = o2.client.authStore.model) || void 0 === n3 ? void 0 : n3.id) === (null == e3 ? void 0 : e3.id) && o2.client.authStore.save(o2.client.authStore.token, e3), e3;
    });
  }, AdminService.prototype.delete = function(t2, n2) {
    var i2 = this;
    return void 0 === n2 && (n2 = {}), e2.prototype.delete.call(this, t2, n2).then(function(e3) {
      var n3, o2;
      return e3 && i2.client.authStore.model && void 0 === (null === (n3 = i2.client.authStore.model) || void 0 === n3 ? void 0 : n3.collectionId) && (null === (o2 = i2.client.authStore.model) || void 0 === o2 ? void 0 : o2.id) === t2 && i2.client.authStore.clear(), e3;
    });
  }, AdminService.prototype.authResponse = function(e3) {
    var t2 = this.decode((null == e3 ? void 0 : e3.admin) || {});
    return (null == e3 ? void 0 : e3.token) && (null == e3 ? void 0 : e3.admin) && this.client.authStore.save(e3.token, t2), Object.assign({}, e3, { token: (null == e3 ? void 0 : e3.token) || "", admin: t2 });
  }, AdminService.prototype.authWithPassword = function(e3, t2, n2, i2) {
    return void 0 === n2 && (n2 = {}), void 0 === i2 && (i2 = {}), n2 = Object.assign({ identity: e3, password: t2 }, n2), this.client.send(this.baseCrudPath + "/auth-with-password", { method: "POST", params: i2, body: n2 }).then(this.authResponse.bind(this));
  }, AdminService.prototype.authRefresh = function(e3, t2) {
    return void 0 === e3 && (e3 = {}), void 0 === t2 && (t2 = {}), this.client.send(this.baseCrudPath + "/auth-refresh", { method: "POST", params: t2, body: e3 }).then(this.authResponse.bind(this));
  }, AdminService.prototype.requestPasswordReset = function(e3, t2, n2) {
    return void 0 === t2 && (t2 = {}), void 0 === n2 && (n2 = {}), t2 = Object.assign({ email: e3 }, t2), this.client.send(this.baseCrudPath + "/request-password-reset", { method: "POST", params: n2, body: t2 }).then(function() {
      return true;
    });
  }, AdminService.prototype.confirmPasswordReset = function(e3, t2, n2, i2, o2) {
    return void 0 === i2 && (i2 = {}), void 0 === o2 && (o2 = {}), i2 = Object.assign({ token: e3, password: t2, passwordConfirm: n2 }, i2), this.client.send(this.baseCrudPath + "/confirm-password-reset", { method: "POST", params: o2, body: i2 }).then(function() {
      return true;
    });
  }, AdminService;
}(d), p = function(e2) {
  function ExternalAuth() {
    return null !== e2 && e2.apply(this, arguments) || this;
  }
  return __extends(ExternalAuth, e2), ExternalAuth.prototype.load = function(t2) {
    e2.prototype.load.call(this, t2), this.recordId = "string" == typeof t2.recordId ? t2.recordId : "", this.collectionId = "string" == typeof t2.collectionId ? t2.collectionId : "", this.provider = "string" == typeof t2.provider ? t2.provider : "", this.providerId = "string" == typeof t2.providerId ? t2.providerId : "";
  }, ExternalAuth;
}(i), v = function(e2) {
  function RecordService(t2, n2) {
    var i2 = e2.call(this, t2) || this;
    return i2.collectionIdOrName = n2, i2;
  }
  return __extends(RecordService, e2), RecordService.prototype.decode = function(e3) {
    return new o(e3);
  }, Object.defineProperty(RecordService.prototype, "baseCrudPath", { get: function() {
    return this.baseCollectionPath + "/records";
  }, enumerable: false, configurable: true }), Object.defineProperty(RecordService.prototype, "baseCollectionPath", { get: function() {
    return "/api/collections/" + encodeURIComponent(this.collectionIdOrName);
  }, enumerable: false, configurable: true }), RecordService.prototype.subscribeOne = function(e3, t2) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(n2) {
        return console.warn("PocketBase: subscribeOne(recordId, callback) is deprecated. Please replace it with subscribe(recordId, callback)."), [2, this.client.realtime.subscribe(this.collectionIdOrName + "/" + e3, t2)];
      });
    });
  }, RecordService.prototype.subscribe = function(e3, t2) {
    return __awaiter(this, void 0, void 0, function() {
      var n2;
      return __generator(this, function(i2) {
        if ("function" == typeof e3)
          return console.warn("PocketBase: subscribe(callback) is deprecated. Please replace it with subscribe('*', callback)."), [2, this.client.realtime.subscribe(this.collectionIdOrName, e3)];
        if (!t2)
          throw new Error("Missing subscription callback.");
        if ("" === e3)
          throw new Error("Missing topic.");
        return n2 = this.collectionIdOrName, "*" !== e3 && (n2 += "/" + e3), [2, this.client.realtime.subscribe(n2, t2)];
      });
    });
  }, RecordService.prototype.unsubscribe = function(e3) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(t2) {
        return "*" === e3 ? [2, this.client.realtime.unsubscribe(this.collectionIdOrName)] : e3 ? [2, this.client.realtime.unsubscribe(this.collectionIdOrName + "/" + e3)] : [2, this.client.realtime.unsubscribeByPrefix(this.collectionIdOrName)];
      });
    });
  }, RecordService.prototype.getFullList = function(t2, n2) {
    return void 0 === t2 && (t2 = 200), void 0 === n2 && (n2 = {}), e2.prototype.getFullList.call(this, t2, n2);
  }, RecordService.prototype.getList = function(t2, n2, i2) {
    return void 0 === t2 && (t2 = 1), void 0 === n2 && (n2 = 30), void 0 === i2 && (i2 = {}), e2.prototype.getList.call(this, t2, n2, i2);
  }, RecordService.prototype.getFirstListItem = function(t2, n2) {
    return void 0 === n2 && (n2 = {}), e2.prototype.getFirstListItem.call(this, t2, n2);
  }, RecordService.prototype.getOne = function(t2, n2) {
    return void 0 === n2 && (n2 = {}), e2.prototype.getOne.call(this, t2, n2);
  }, RecordService.prototype.create = function(t2, n2) {
    return void 0 === t2 && (t2 = {}), void 0 === n2 && (n2 = {}), e2.prototype.create.call(this, t2, n2);
  }, RecordService.prototype.update = function(t2, n2, i2) {
    var o2 = this;
    return void 0 === n2 && (n2 = {}), void 0 === i2 && (i2 = {}), e2.prototype.update.call(this, t2, n2, i2).then(function(e3) {
      var t3, n3, i3;
      return (null === (t3 = o2.client.authStore.model) || void 0 === t3 ? void 0 : t3.id) !== (null == e3 ? void 0 : e3.id) || (null === (n3 = o2.client.authStore.model) || void 0 === n3 ? void 0 : n3.collectionId) !== o2.collectionIdOrName && (null === (i3 = o2.client.authStore.model) || void 0 === i3 ? void 0 : i3.collectionName) !== o2.collectionIdOrName || o2.client.authStore.save(o2.client.authStore.token, e3), e3;
    });
  }, RecordService.prototype.delete = function(t2, n2) {
    var i2 = this;
    return void 0 === n2 && (n2 = {}), e2.prototype.delete.call(this, t2, n2).then(function(e3) {
      var n3, o2, r2;
      return !e3 || (null === (n3 = i2.client.authStore.model) || void 0 === n3 ? void 0 : n3.id) !== t2 || (null === (o2 = i2.client.authStore.model) || void 0 === o2 ? void 0 : o2.collectionId) !== i2.collectionIdOrName && (null === (r2 = i2.client.authStore.model) || void 0 === r2 ? void 0 : r2.collectionName) !== i2.collectionIdOrName || i2.client.authStore.clear(), e3;
    });
  }, RecordService.prototype.authResponse = function(e3) {
    var t2 = this.decode((null == e3 ? void 0 : e3.record) || {});
    return this.client.authStore.save(null == e3 ? void 0 : e3.token, t2), Object.assign({}, e3, { token: (null == e3 ? void 0 : e3.token) || "", record: t2 });
  }, RecordService.prototype.listAuthMethods = function(e3) {
    return void 0 === e3 && (e3 = {}), this.client.send(this.baseCollectionPath + "/auth-methods", { method: "GET", params: e3 }).then(function(e4) {
      return Object.assign({}, e4, { usernamePassword: !!(null == e4 ? void 0 : e4.usernamePassword), emailPassword: !!(null == e4 ? void 0 : e4.emailPassword), authProviders: Array.isArray(null == e4 ? void 0 : e4.authProviders) ? null == e4 ? void 0 : e4.authProviders : [] });
    });
  }, RecordService.prototype.authWithPassword = function(e3, t2, n2, i2) {
    var o2 = this;
    return void 0 === n2 && (n2 = {}), void 0 === i2 && (i2 = {}), n2 = Object.assign({ identity: e3, password: t2 }, n2), this.client.send(this.baseCollectionPath + "/auth-with-password", { method: "POST", params: i2, body: n2 }).then(function(e4) {
      return o2.authResponse(e4);
    });
  }, RecordService.prototype.authWithOAuth2 = function(e3, t2, n2, i2, o2, r2, s2) {
    var a2 = this;
    return void 0 === o2 && (o2 = {}), void 0 === r2 && (r2 = {}), void 0 === s2 && (s2 = {}), r2 = Object.assign({ provider: e3, code: t2, codeVerifier: n2, redirectUrl: i2, createData: o2 }, r2), this.client.send(this.baseCollectionPath + "/auth-with-oauth2", { method: "POST", params: s2, body: r2 }).then(function(e4) {
      return a2.authResponse(e4);
    });
  }, RecordService.prototype.authRefresh = function(e3, t2) {
    var n2 = this;
    return void 0 === e3 && (e3 = {}), void 0 === t2 && (t2 = {}), this.client.send(this.baseCollectionPath + "/auth-refresh", { method: "POST", params: t2, body: e3 }).then(function(e4) {
      return n2.authResponse(e4);
    });
  }, RecordService.prototype.requestPasswordReset = function(e3, t2, n2) {
    return void 0 === t2 && (t2 = {}), void 0 === n2 && (n2 = {}), t2 = Object.assign({ email: e3 }, t2), this.client.send(this.baseCollectionPath + "/request-password-reset", { method: "POST", params: n2, body: t2 }).then(function() {
      return true;
    });
  }, RecordService.prototype.confirmPasswordReset = function(e3, t2, n2, i2, o2) {
    return void 0 === i2 && (i2 = {}), void 0 === o2 && (o2 = {}), i2 = Object.assign({ token: e3, password: t2, passwordConfirm: n2 }, i2), this.client.send(this.baseCollectionPath + "/confirm-password-reset", { method: "POST", params: o2, body: i2 }).then(function() {
      return true;
    });
  }, RecordService.prototype.requestVerification = function(e3, t2, n2) {
    return void 0 === t2 && (t2 = {}), void 0 === n2 && (n2 = {}), t2 = Object.assign({ email: e3 }, t2), this.client.send(this.baseCollectionPath + "/request-verification", { method: "POST", params: n2, body: t2 }).then(function() {
      return true;
    });
  }, RecordService.prototype.confirmVerification = function(e3, t2, n2) {
    return void 0 === t2 && (t2 = {}), void 0 === n2 && (n2 = {}), t2 = Object.assign({ token: e3 }, t2), this.client.send(this.baseCollectionPath + "/confirm-verification", { method: "POST", params: n2, body: t2 }).then(function() {
      return true;
    });
  }, RecordService.prototype.requestEmailChange = function(e3, t2, n2) {
    return void 0 === t2 && (t2 = {}), void 0 === n2 && (n2 = {}), t2 = Object.assign({ newEmail: e3 }, t2), this.client.send(this.baseCollectionPath + "/request-email-change", { method: "POST", params: n2, body: t2 }).then(function() {
      return true;
    });
  }, RecordService.prototype.confirmEmailChange = function(e3, t2, n2, i2) {
    return void 0 === n2 && (n2 = {}), void 0 === i2 && (i2 = {}), n2 = Object.assign({ token: e3, password: t2 }, n2), this.client.send(this.baseCollectionPath + "/confirm-email-change", { method: "POST", params: i2, body: n2 }).then(function() {
      return true;
    });
  }, RecordService.prototype.listExternalAuths = function(e3, t2) {
    return void 0 === t2 && (t2 = {}), this.client.send(this.baseCrudPath + "/" + encodeURIComponent(e3) + "/external-auths", { method: "GET", params: t2 }).then(function(e4) {
      var t3 = [];
      if (Array.isArray(e4))
        for (var n2 = 0, i2 = e4; n2 < i2.length; n2++) {
          var o2 = i2[n2];
          t3.push(new p(o2));
        }
      return t3;
    });
  }, RecordService.prototype.unlinkExternalAuth = function(e3, t2, n2) {
    return void 0 === n2 && (n2 = {}), this.client.send(this.baseCrudPath + "/" + encodeURIComponent(e3) + "/external-auths/" + encodeURIComponent(t2), { method: "DELETE", params: n2 }).then(function() {
      return true;
    });
  }, RecordService;
}(d), f = function() {
  function SchemaField(e2) {
    void 0 === e2 && (e2 = {}), this.load(e2 || {});
  }
  return SchemaField.prototype.load = function(e2) {
    this.id = void 0 !== e2.id ? e2.id : "", this.name = void 0 !== e2.name ? e2.name : "", this.type = void 0 !== e2.type ? e2.type : "text", this.system = !!e2.system, this.required = !!e2.required, this.unique = !!e2.unique, this.options = "object" == typeof e2.options && null !== e2.options ? e2.options : {};
  }, SchemaField;
}(), m = function(e2) {
  function Collection() {
    return null !== e2 && e2.apply(this, arguments) || this;
  }
  return __extends(Collection, e2), Collection.prototype.load = function(t2) {
    e2.prototype.load.call(this, t2), this.system = !!t2.system, this.name = "string" == typeof t2.name ? t2.name : "", this.type = "string" == typeof t2.type ? t2.type : "base", this.options = void 0 !== t2.options ? t2.options : {}, this.listRule = "string" == typeof t2.listRule ? t2.listRule : null, this.viewRule = "string" == typeof t2.viewRule ? t2.viewRule : null, this.createRule = "string" == typeof t2.createRule ? t2.createRule : null, this.updateRule = "string" == typeof t2.updateRule ? t2.updateRule : null, this.deleteRule = "string" == typeof t2.deleteRule ? t2.deleteRule : null, t2.schema = Array.isArray(t2.schema) ? t2.schema : [], this.schema = [];
    for (var n2 = 0, i2 = t2.schema; n2 < i2.length; n2++) {
      var o2 = i2[n2];
      this.schema.push(new f(o2));
    }
  }, Object.defineProperty(Collection.prototype, "isBase", { get: function() {
    return "base" === this.type;
  }, enumerable: false, configurable: true }), Object.defineProperty(Collection.prototype, "isAuth", { get: function() {
    return "auth" === this.type;
  }, enumerable: false, configurable: true }), Object.defineProperty(Collection.prototype, "isSingle", { get: function() {
    return "single" === this.type;
  }, enumerable: false, configurable: true }), Collection;
}(i), y = function(e2) {
  function CollectionService() {
    return null !== e2 && e2.apply(this, arguments) || this;
  }
  return __extends(CollectionService, e2), CollectionService.prototype.decode = function(e3) {
    return new m(e3);
  }, Object.defineProperty(CollectionService.prototype, "baseCrudPath", { get: function() {
    return "/api/collections";
  }, enumerable: false, configurable: true }), CollectionService.prototype.import = function(e3, t2, n2) {
    return void 0 === t2 && (t2 = false), void 0 === n2 && (n2 = {}), __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(i2) {
        return [2, this.client.send(this.baseCrudPath + "/import", { method: "PUT", params: n2, body: { collections: e3, deleteMissing: t2 } }).then(function() {
          return true;
        })];
      });
    });
  }, CollectionService;
}(d), b = function(e2) {
  function LogRequest() {
    return null !== e2 && e2.apply(this, arguments) || this;
  }
  return __extends(LogRequest, e2), LogRequest.prototype.load = function(t2) {
    e2.prototype.load.call(this, t2), t2.remoteIp = t2.remoteIp || t2.ip, this.url = "string" == typeof t2.url ? t2.url : "", this.method = "string" == typeof t2.method ? t2.method : "GET", this.status = "number" == typeof t2.status ? t2.status : 200, this.auth = "string" == typeof t2.auth ? t2.auth : "guest", this.remoteIp = "string" == typeof t2.remoteIp ? t2.remoteIp : "", this.userIp = "string" == typeof t2.userIp ? t2.userIp : "", this.referer = "string" == typeof t2.referer ? t2.referer : "", this.userAgent = "string" == typeof t2.userAgent ? t2.userAgent : "", this.meta = "object" == typeof t2.meta && null !== t2.meta ? t2.meta : {};
  }, LogRequest;
}(i), g = function(e2) {
  function LogService() {
    return null !== e2 && e2.apply(this, arguments) || this;
  }
  return __extends(LogService, e2), LogService.prototype.getRequestsList = function(e3, t2, n2) {
    return void 0 === e3 && (e3 = 1), void 0 === t2 && (t2 = 30), void 0 === n2 && (n2 = {}), n2 = Object.assign({ page: e3, perPage: t2 }, n2), this.client.send("/api/logs/requests", { method: "GET", params: n2 }).then(function(e4) {
      var t3 = [];
      if (null == e4 ? void 0 : e4.items) {
        e4.items = (null == e4 ? void 0 : e4.items) || [];
        for (var n3 = 0, i2 = e4.items; n3 < i2.length; n3++) {
          var o2 = i2[n3];
          t3.push(new b(o2));
        }
      }
      return new l((null == e4 ? void 0 : e4.page) || 1, (null == e4 ? void 0 : e4.perPage) || 0, (null == e4 ? void 0 : e4.totalItems) || 0, (null == e4 ? void 0 : e4.totalPages) || 0, t3);
    });
  }, LogService.prototype.getRequest = function(e3, t2) {
    return void 0 === t2 && (t2 = {}), this.client.send("/api/logs/requests/" + encodeURIComponent(e3), { method: "GET", params: t2 }).then(function(e4) {
      return new b(e4);
    });
  }, LogService.prototype.getRequestsStats = function(e3) {
    return void 0 === e3 && (e3 = {}), this.client.send("/api/logs/requests/stats", { method: "GET", params: e3 }).then(function(e4) {
      return e4;
    });
  }, LogService;
}(c), S = function(e2) {
  function RealtimeService() {
    var t2 = null !== e2 && e2.apply(this, arguments) || this;
    return t2.clientId = "", t2.eventSource = null, t2.subscriptions = {}, t2.lastSentTopics = [], t2.maxConnectTimeout = 15e3, t2.reconnectAttempts = 0, t2.maxReconnectAttempts = 1 / 0, t2.predefinedReconnectIntervals = [200, 300, 500, 1e3, 1200, 1500, 2e3], t2.pendingConnects = [], t2;
  }
  return __extends(RealtimeService, e2), Object.defineProperty(RealtimeService.prototype, "isConnected", { get: function() {
    return !!this.eventSource && !!this.clientId && !this.pendingConnects.length;
  }, enumerable: false, configurable: true }), RealtimeService.prototype.subscribe = function(e3, t2) {
    var n2;
    return __awaiter(this, void 0, void 0, function() {
      var i2, o2 = this;
      return __generator(this, function(r2) {
        switch (r2.label) {
          case 0:
            if (!e3)
              throw new Error("topic must be set.");
            return i2 = function(e4) {
              var n3, i3 = e4;
              try {
                n3 = JSON.parse(null == i3 ? void 0 : i3.data);
              } catch (e5) {
              }
              t2(n3 || {});
            }, this.subscriptions[e3] || (this.subscriptions[e3] = []), this.subscriptions[e3].push(i2), this.isConnected ? [3, 2] : [4, this.connect()];
          case 1:
            return r2.sent(), [3, 5];
          case 2:
            return 1 !== this.subscriptions[e3].length ? [3, 4] : [4, this.submitSubscriptions()];
          case 3:
            return r2.sent(), [3, 5];
          case 4:
            null === (n2 = this.eventSource) || void 0 === n2 || n2.addEventListener(e3, i2), r2.label = 5;
          case 5:
            return [2, function() {
              return __awaiter(o2, void 0, void 0, function() {
                return __generator(this, function(t3) {
                  return [2, this.unsubscribeByTopicAndListener(e3, i2)];
                });
              });
            }];
        }
      });
    });
  }, RealtimeService.prototype.unsubscribe = function(e3) {
    var t2;
    return __awaiter(this, void 0, void 0, function() {
      var n2, i2, o2;
      return __generator(this, function(r2) {
        switch (r2.label) {
          case 0:
            if (!this.hasSubscriptionListeners(e3))
              return [2];
            if (e3) {
              for (n2 = 0, i2 = this.subscriptions[e3]; n2 < i2.length; n2++)
                o2 = i2[n2], null === (t2 = this.eventSource) || void 0 === t2 || t2.removeEventListener(e3, o2);
              delete this.subscriptions[e3];
            } else
              this.subscriptions = {};
            return this.hasSubscriptionListeners() ? [3, 1] : (this.disconnect(), [3, 3]);
          case 1:
            return this.hasSubscriptionListeners(e3) ? [3, 3] : [4, this.submitSubscriptions()];
          case 2:
            r2.sent(), r2.label = 3;
          case 3:
            return [2];
        }
      });
    });
  }, RealtimeService.prototype.unsubscribeByPrefix = function(e3) {
    var t2;
    return __awaiter(this, void 0, void 0, function() {
      var n2, i2, o2, r2, s2;
      return __generator(this, function(a2) {
        switch (a2.label) {
          case 0:
            for (i2 in n2 = false, this.subscriptions)
              if (i2.startsWith(e3)) {
                for (n2 = true, o2 = 0, r2 = this.subscriptions[i2]; o2 < r2.length; o2++)
                  s2 = r2[o2], null === (t2 = this.eventSource) || void 0 === t2 || t2.removeEventListener(i2, s2);
                delete this.subscriptions[i2];
              }
            return n2 ? this.hasSubscriptionListeners() ? [4, this.submitSubscriptions()] : [3, 2] : [2];
          case 1:
            return a2.sent(), [3, 3];
          case 2:
            this.disconnect(), a2.label = 3;
          case 3:
            return [2];
        }
      });
    });
  }, RealtimeService.prototype.unsubscribeByTopicAndListener = function(e3, t2) {
    var n2;
    return __awaiter(this, void 0, void 0, function() {
      var i2, o2;
      return __generator(this, function(r2) {
        switch (r2.label) {
          case 0:
            if (!Array.isArray(this.subscriptions[e3]) || !this.subscriptions[e3].length)
              return [2];
            for (i2 = false, o2 = this.subscriptions[e3].length - 1; o2 >= 0; o2--)
              this.subscriptions[e3][o2] === t2 && (i2 = true, delete this.subscriptions[e3][o2], this.subscriptions[e3].splice(o2, 1), null === (n2 = this.eventSource) || void 0 === n2 || n2.removeEventListener(e3, t2));
            return i2 ? (this.subscriptions[e3].length || delete this.subscriptions[e3], this.hasSubscriptionListeners() ? [3, 1] : (this.disconnect(), [3, 3])) : [2];
          case 1:
            return this.hasSubscriptionListeners(e3) ? [3, 3] : [4, this.submitSubscriptions()];
          case 2:
            r2.sent(), r2.label = 3;
          case 3:
            return [2];
        }
      });
    });
  }, RealtimeService.prototype.hasSubscriptionListeners = function(e3) {
    var t2, n2;
    if (this.subscriptions = this.subscriptions || {}, e3)
      return !!(null === (t2 = this.subscriptions[e3]) || void 0 === t2 ? void 0 : t2.length);
    for (var i2 in this.subscriptions)
      if (null === (n2 = this.subscriptions[i2]) || void 0 === n2 ? void 0 : n2.length)
        return true;
    return false;
  }, RealtimeService.prototype.submitSubscriptions = function() {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(e3) {
        return this.clientId ? (this.addAllSubscriptionListeners(), this.lastSentTopics = this.getNonEmptySubscriptionTopics(), [2, this.client.send("/api/realtime", { method: "POST", body: { clientId: this.clientId, subscriptions: this.lastSentTopics }, params: { $cancelKey: "realtime_" + this.clientId } }).catch(function(e4) {
          if (!(null == e4 ? void 0 : e4.isAbort))
            throw e4;
        })]) : [2];
      });
    });
  }, RealtimeService.prototype.getNonEmptySubscriptionTopics = function() {
    var e3 = [];
    for (var t2 in this.subscriptions)
      this.subscriptions[t2].length && e3.push(t2);
    return e3;
  }, RealtimeService.prototype.addAllSubscriptionListeners = function() {
    if (this.eventSource)
      for (var e3 in this.removeAllSubscriptionListeners(), this.subscriptions)
        for (var t2 = 0, n2 = this.subscriptions[e3]; t2 < n2.length; t2++) {
          var i2 = n2[t2];
          this.eventSource.addEventListener(e3, i2);
        }
  }, RealtimeService.prototype.removeAllSubscriptionListeners = function() {
    if (this.eventSource)
      for (var e3 in this.subscriptions)
        for (var t2 = 0, n2 = this.subscriptions[e3]; t2 < n2.length; t2++) {
          var i2 = n2[t2];
          this.eventSource.removeEventListener(e3, i2);
        }
  }, RealtimeService.prototype.connect = function() {
    return __awaiter(this, void 0, void 0, function() {
      var e3 = this;
      return __generator(this, function(t2) {
        return this.reconnectAttempts > 0 ? [2] : [2, new Promise(function(t3, n2) {
          e3.pendingConnects.push({ resolve: t3, reject: n2 }), e3.pendingConnects.length > 1 || e3.initConnect();
        })];
      });
    });
  }, RealtimeService.prototype.initConnect = function() {
    var e3 = this;
    this.disconnect(true), clearTimeout(this.connectTimeoutId), this.connectTimeoutId = setTimeout(function() {
      e3.connectErrorHandler(new Error("EventSource connect took too long."));
    }, this.maxConnectTimeout), this.eventSource = new EventSource(this.client.buildUrl("/api/realtime")), this.eventSource.onerror = function(t2) {
      e3.connectErrorHandler(new Error("Failed to establish realtime connection."));
    }, this.eventSource.addEventListener("PB_CONNECT", function(t2) {
      var n2 = t2;
      e3.clientId = null == n2 ? void 0 : n2.lastEventId, e3.submitSubscriptions().then(function() {
        return __awaiter(e3, void 0, void 0, function() {
          var e4;
          return __generator(this, function(t3) {
            switch (t3.label) {
              case 0:
                e4 = 3, t3.label = 1;
              case 1:
                return this.hasUnsentSubscriptions() && e4 > 0 ? (e4--, [4, this.submitSubscriptions()]) : [3, 3];
              case 2:
                return t3.sent(), [3, 1];
              case 3:
                return [2];
            }
          });
        });
      }).then(function() {
        for (var t3 = 0, n3 = e3.pendingConnects; t3 < n3.length; t3++) {
          n3[t3].resolve();
        }
        e3.pendingConnects = [], e3.reconnectAttempts = 0, clearTimeout(e3.reconnectTimeoutId), clearTimeout(e3.connectTimeoutId);
      }).catch(function(t3) {
        e3.clientId = "", e3.connectErrorHandler(t3);
      });
    });
  }, RealtimeService.prototype.hasUnsentSubscriptions = function() {
    var e3 = this.getNonEmptySubscriptionTopics();
    if (e3.length != this.lastSentTopics.length)
      return true;
    for (var t2 = 0, n2 = e3; t2 < n2.length; t2++) {
      var i2 = n2[t2];
      if (!this.lastSentTopics.includes(i2))
        return true;
    }
    return false;
  }, RealtimeService.prototype.connectErrorHandler = function(e3) {
    var n2 = this;
    if (clearTimeout(this.connectTimeoutId), clearTimeout(this.reconnectTimeoutId), !this.clientId && !this.reconnectAttempts || this.reconnectAttempts > this.maxReconnectAttempts) {
      for (var i2 = 0, o2 = this.pendingConnects; i2 < o2.length; i2++) {
        o2[i2].reject(new t(e3));
      }
      this.disconnect();
    } else {
      this.disconnect(true);
      var r2 = this.predefinedReconnectIntervals[this.reconnectAttempts] || this.predefinedReconnectIntervals[this.predefinedReconnectIntervals.length - 1];
      this.reconnectAttempts++, this.reconnectTimeoutId = setTimeout(function() {
        n2.initConnect();
      }, r2);
    }
  }, RealtimeService.prototype.disconnect = function(e3) {
    var n2;
    if (void 0 === e3 && (e3 = false), clearTimeout(this.connectTimeoutId), clearTimeout(this.reconnectTimeoutId), this.removeAllSubscriptionListeners(), null === (n2 = this.eventSource) || void 0 === n2 || n2.close(), this.eventSource = null, this.clientId = "", !e3) {
      this.reconnectAttempts = 0;
      for (var i2 = new t(new Error("Realtime disconnected.")), o2 = 0, r2 = this.pendingConnects; o2 < r2.length; o2++) {
        r2[o2].reject(i2);
      }
      this.pendingConnects = [];
    }
  }, RealtimeService;
}(c), w = function(e2) {
  function HealthService() {
    return null !== e2 && e2.apply(this, arguments) || this;
  }
  return __extends(HealthService, e2), HealthService.prototype.check = function(e3) {
    return void 0 === e3 && (e3 = {}), this.client.send("/api/health", { method: "GET", params: e3 });
  }, HealthService;
}(c), C = function() {
  function Client(e2, t2, n2) {
    void 0 === e2 && (e2 = "/"), void 0 === n2 && (n2 = "en-US"), this.cancelControllers = {}, this.recordServices = {}, this.enableAutoCancellation = true, this.baseUrl = e2, this.lang = n2, this.authStore = t2 || new a(), this.admins = new h(this), this.collections = new y(this), this.logs = new g(this), this.settings = new u(this), this.realtime = new S(this), this.health = new w(this);
  }
  return Client.prototype.collection = function(e2) {
    return this.recordServices[e2] || (this.recordServices[e2] = new v(this, e2)), this.recordServices[e2];
  }, Client.prototype.autoCancellation = function(e2) {
    return this.enableAutoCancellation = !!e2, this;
  }, Client.prototype.cancelRequest = function(e2) {
    return this.cancelControllers[e2] && (this.cancelControllers[e2].abort(), delete this.cancelControllers[e2]), this;
  }, Client.prototype.cancelAllRequests = function() {
    for (var e2 in this.cancelControllers)
      this.cancelControllers[e2].abort();
    return this.cancelControllers = {}, this;
  }, Client.prototype.send = function(e2, n2) {
    var i2, o2, r2, s2, a2, c3, u2, l3;
    return __awaiter(this, void 0, void 0, function() {
      var d2, h2, p2, v2, f2, m2 = this;
      return __generator(this, function(y2) {
        return (d2 = Object.assign({ method: "GET" }, n2)).body && "FormData" !== d2.body.constructor.name && ("string" != typeof d2.body && (d2.body = JSON.stringify(d2.body)), void 0 === (null === (i2 = null == d2 ? void 0 : d2.headers) || void 0 === i2 ? void 0 : i2["Content-Type"]) && (d2.headers = Object.assign({}, d2.headers, { "Content-Type": "application/json" }))), void 0 === (null === (o2 = null == d2 ? void 0 : d2.headers) || void 0 === o2 ? void 0 : o2["Accept-Language"]) && (d2.headers = Object.assign({}, d2.headers, { "Accept-Language": this.lang })), (null === (r2 = this.authStore) || void 0 === r2 ? void 0 : r2.token) && void 0 === (null === (s2 = null == d2 ? void 0 : d2.headers) || void 0 === s2 ? void 0 : s2.Authorization) && (d2.headers = Object.assign({}, d2.headers, { Authorization: this.authStore.token })), this.enableAutoCancellation && false !== (null === (a2 = d2.params) || void 0 === a2 ? void 0 : a2.$autoCancel) && (h2 = (null === (c3 = d2.params) || void 0 === c3 ? void 0 : c3.$cancelKey) || (d2.method || "GET") + e2, this.cancelRequest(h2), p2 = new AbortController(), this.cancelControllers[h2] = p2, d2.signal = p2.signal), null === (u2 = d2.params) || void 0 === u2 || delete u2.$autoCancel, null === (l3 = d2.params) || void 0 === l3 || delete l3.$cancelKey, v2 = this.buildUrl(e2), void 0 !== d2.params && ((f2 = this.serializeQueryParams(d2.params)) && (v2 += (v2.includes("?") ? "&" : "?") + f2), delete d2.params), this.beforeSend && (d2 = Object.assign({}, this.beforeSend(v2, d2))), [2, fetch(v2, d2).then(function(e3) {
          return __awaiter(m2, void 0, void 0, function() {
            var n3;
            return __generator(this, function(i3) {
              switch (i3.label) {
                case 0:
                  n3 = {}, i3.label = 1;
                case 1:
                  return i3.trys.push([1, 3, , 4]), [4, e3.json()];
                case 2:
                  return n3 = i3.sent(), [3, 4];
                case 3:
                  return i3.sent(), [3, 4];
                case 4:
                  if (this.afterSend && (n3 = this.afterSend(e3, n3)), e3.status >= 400)
                    throw new t({ url: e3.url, status: e3.status, data: n3 });
                  return [2, n3];
              }
            });
          });
        }).catch(function(e3) {
          throw new t(e3);
        })];
      });
    });
  }, Client.prototype.getFileUrl = function(e2, t2, n2) {
    void 0 === n2 && (n2 = {});
    var i2 = [];
    i2.push("api"), i2.push("files"), i2.push(encodeURIComponent(e2.collectionId || e2.collectionName)), i2.push(encodeURIComponent(e2.id)), i2.push(encodeURIComponent(t2));
    var o2 = this.buildUrl(i2.join("/"));
    if (Object.keys(n2).length) {
      var r2 = new URLSearchParams(n2);
      o2 += (o2.includes("?") ? "&" : "?") + r2;
    }
    return o2;
  }, Client.prototype.buildUrl = function(e2) {
    var t2 = this.baseUrl + (this.baseUrl.endsWith("/") ? "" : "/");
    return e2 && (t2 += e2.startsWith("/") ? e2.substring(1) : e2), t2;
  }, Client.prototype.serializeQueryParams = function(e2) {
    var t2 = [];
    for (var n2 in e2)
      if (null !== e2[n2]) {
        var i2 = e2[n2], o2 = encodeURIComponent(n2);
        if (Array.isArray(i2))
          for (var r2 = 0, s2 = i2; r2 < s2.length; r2++) {
            var a2 = s2[r2];
            t2.push(o2 + "=" + encodeURIComponent(a2));
          }
        else
          i2 instanceof Date ? t2.push(o2 + "=" + encodeURIComponent(i2.toISOString())) : null !== typeof i2 && "object" == typeof i2 ? t2.push(o2 + "=" + encodeURIComponent(JSON.stringify(i2))) : t2.push(o2 + "=" + encodeURIComponent(i2));
      }
    return t2.join("&");
  }, Client;
}();

export { C };
//# sourceMappingURL=pocketbase.es-350cfbff.js.map
