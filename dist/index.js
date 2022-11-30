var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// ../../node_modules/recaptcha-v3/dist/ReCaptchaInstance.js
var require_ReCaptchaInstance = __commonJS({
  "../../node_modules/recaptcha-v3/dist/ReCaptchaInstance.js"(exports) {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _ = { label: 0, sent: function() {
        if (t[0] & 1)
          throw t[1];
        return t[1];
      }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f)
          throw new TypeError("Generator is already executing.");
        while (_)
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
              return t;
            if (y = 0, t)
              op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return { value: op[1], done: false };
              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2])
                  _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        if (op[0] & 5)
          throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
      }
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ReCaptchaInstance = void 0;
    var ReCaptchaInstance = function() {
      function ReCaptchaInstance2(siteKey, recaptchaID, recaptcha) {
        this.siteKey = siteKey;
        this.recaptchaID = recaptchaID;
        this.recaptcha = recaptcha;
        this.styleContainer = null;
      }
      ReCaptchaInstance2.prototype.execute = function(action) {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            return [2, this.recaptcha.enterprise ? this.recaptcha.enterprise.execute(this.recaptchaID, { action }) : this.recaptcha.execute(this.recaptchaID, { action })];
          });
        });
      };
      ReCaptchaInstance2.prototype.getSiteKey = function() {
        return this.siteKey;
      };
      ReCaptchaInstance2.prototype.hideBadge = function() {
        if (this.styleContainer !== null) {
          return;
        }
        this.styleContainer = document.createElement("style");
        this.styleContainer.innerHTML = ".grecaptcha-badge{visibility:hidden !important;}";
        document.head.appendChild(this.styleContainer);
      };
      ReCaptchaInstance2.prototype.showBadge = function() {
        if (this.styleContainer === null) {
          return;
        }
        document.head.removeChild(this.styleContainer);
        this.styleContainer = null;
      };
      return ReCaptchaInstance2;
    }();
    exports.ReCaptchaInstance = ReCaptchaInstance;
  }
});

// ../../node_modules/recaptcha-v3/dist/ReCaptchaLoader.js
var require_ReCaptchaLoader = __commonJS({
  "../../node_modules/recaptcha-v3/dist/ReCaptchaLoader.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getInstance = exports.load = void 0;
    var ReCaptchaInstance_1 = require_ReCaptchaInstance();
    var ELoadingState;
    (function(ELoadingState2) {
      ELoadingState2[ELoadingState2["NOT_LOADED"] = 0] = "NOT_LOADED";
      ELoadingState2[ELoadingState2["LOADING"] = 1] = "LOADING";
      ELoadingState2[ELoadingState2["LOADED"] = 2] = "LOADED";
    })(ELoadingState || (ELoadingState = {}));
    var ReCaptchaLoader = function() {
      function ReCaptchaLoader2() {
      }
      ReCaptchaLoader2.load = function(siteKey, options) {
        if (options === void 0) {
          options = {};
        }
        if (typeof document === "undefined") {
          return Promise.reject(new Error("This is a library for the browser!"));
        }
        if (ReCaptchaLoader2.getLoadingState() === ELoadingState.LOADED) {
          if (ReCaptchaLoader2.instance.getSiteKey() === siteKey) {
            return Promise.resolve(ReCaptchaLoader2.instance);
          } else {
            return Promise.reject(new Error("reCAPTCHA already loaded with different site key!"));
          }
        }
        if (ReCaptchaLoader2.getLoadingState() === ELoadingState.LOADING) {
          if (siteKey !== ReCaptchaLoader2.instanceSiteKey) {
            return Promise.reject(new Error("reCAPTCHA already loaded with different site key!"));
          }
          return new Promise(function(resolve, reject) {
            ReCaptchaLoader2.successfulLoadingConsumers.push(function(instance) {
              return resolve(instance);
            });
            ReCaptchaLoader2.errorLoadingRunnable.push(function(reason) {
              return reject(reason);
            });
          });
        }
        ReCaptchaLoader2.instanceSiteKey = siteKey;
        ReCaptchaLoader2.setLoadingState(ELoadingState.LOADING);
        var loader = new ReCaptchaLoader2();
        return new Promise(function(resolve, reject) {
          loader.loadScript(siteKey, options.useRecaptchaNet || false, options.useEnterprise || false, options.renderParameters ? options.renderParameters : {}, options.customUrl).then(function() {
            ReCaptchaLoader2.setLoadingState(ELoadingState.LOADED);
            var widgetID = loader.doExplicitRender(grecaptcha, siteKey, options.explicitRenderParameters ? options.explicitRenderParameters : {}, options.useEnterprise || false);
            var instance = new ReCaptchaInstance_1.ReCaptchaInstance(siteKey, widgetID, grecaptcha);
            ReCaptchaLoader2.successfulLoadingConsumers.forEach(function(v) {
              return v(instance);
            });
            ReCaptchaLoader2.successfulLoadingConsumers = [];
            if (options.autoHideBadge) {
              instance.hideBadge();
            }
            ReCaptchaLoader2.instance = instance;
            resolve(instance);
          }).catch(function(error) {
            ReCaptchaLoader2.errorLoadingRunnable.forEach(function(v) {
              return v(error);
            });
            ReCaptchaLoader2.errorLoadingRunnable = [];
            reject(error);
          });
        });
      };
      ReCaptchaLoader2.getInstance = function() {
        return ReCaptchaLoader2.instance;
      };
      ReCaptchaLoader2.setLoadingState = function(state) {
        ReCaptchaLoader2.loadingState = state;
      };
      ReCaptchaLoader2.getLoadingState = function() {
        if (ReCaptchaLoader2.loadingState === null) {
          return ELoadingState.NOT_LOADED;
        } else {
          return ReCaptchaLoader2.loadingState;
        }
      };
      ReCaptchaLoader2.prototype.loadScript = function(siteKey, useRecaptchaNet, useEnterprise, renderParameters, customUrl) {
        var _this = this;
        if (useRecaptchaNet === void 0) {
          useRecaptchaNet = false;
        }
        if (useEnterprise === void 0) {
          useEnterprise = false;
        }
        if (renderParameters === void 0) {
          renderParameters = {};
        }
        if (customUrl === void 0) {
          customUrl = "";
        }
        var scriptElement = document.createElement("script");
        scriptElement.setAttribute("recaptcha-v3-script", "");
        var scriptBase = "https://www.google.com/recaptcha/api.js";
        if (useRecaptchaNet) {
          if (useEnterprise) {
            scriptBase = "https://recaptcha.net/recaptcha/enterprise.js";
          } else {
            scriptBase = "https://recaptcha.net/recaptcha/api.js";
          }
        }
        if (useEnterprise) {
          scriptBase = "https://www.google.com/recaptcha/enterprise.js";
        }
        if (customUrl) {
          scriptBase = customUrl;
        }
        if (renderParameters.render) {
          renderParameters.render = void 0;
        }
        var parametersQuery = this.buildQueryString(renderParameters);
        scriptElement.src = scriptBase + "?render=explicit" + parametersQuery;
        return new Promise(function(resolve, reject) {
          scriptElement.addEventListener("load", _this.waitForScriptToLoad(function() {
            resolve(scriptElement);
          }, useEnterprise), false);
          scriptElement.onerror = function(error) {
            ReCaptchaLoader2.setLoadingState(ELoadingState.NOT_LOADED);
            reject(error);
          };
          document.head.appendChild(scriptElement);
        });
      };
      ReCaptchaLoader2.prototype.buildQueryString = function(parameters) {
        var parameterKeys = Object.keys(parameters);
        if (parameterKeys.length < 1) {
          return "";
        }
        return "&" + Object.keys(parameters).filter(function(parameterKey) {
          return !!parameters[parameterKey];
        }).map(function(parameterKey) {
          return parameterKey + "=" + parameters[parameterKey];
        }).join("&");
      };
      ReCaptchaLoader2.prototype.waitForScriptToLoad = function(callback, useEnterprise) {
        var _this = this;
        return function() {
          if (window.grecaptcha === void 0) {
            setTimeout(function() {
              _this.waitForScriptToLoad(callback, useEnterprise);
            }, ReCaptchaLoader2.SCRIPT_LOAD_DELAY);
          } else {
            if (useEnterprise) {
              window.grecaptcha.enterprise.ready(function() {
                callback();
              });
            } else {
              window.grecaptcha.ready(function() {
                callback();
              });
            }
          }
        };
      };
      ReCaptchaLoader2.prototype.doExplicitRender = function(grecaptcha2, siteKey, parameters, isEnterprise) {
        var augmentedParameters = {
          sitekey: siteKey,
          badge: parameters.badge,
          size: parameters.size,
          tabindex: parameters.tabindex
        };
        if (parameters.container) {
          if (isEnterprise) {
            return grecaptcha2.enterprise.render(parameters.container, augmentedParameters);
          } else {
            return grecaptcha2.render(parameters.container, augmentedParameters);
          }
        } else {
          if (isEnterprise) {
            return grecaptcha2.enterprise.render(augmentedParameters);
          } else {
            return grecaptcha2.render(augmentedParameters);
          }
        }
      };
      ReCaptchaLoader2.loadingState = null;
      ReCaptchaLoader2.instance = null;
      ReCaptchaLoader2.instanceSiteKey = null;
      ReCaptchaLoader2.successfulLoadingConsumers = [];
      ReCaptchaLoader2.errorLoadingRunnable = [];
      ReCaptchaLoader2.SCRIPT_LOAD_DELAY = 25;
      return ReCaptchaLoader2;
    }();
    exports.load = ReCaptchaLoader.load;
    exports.getInstance = ReCaptchaLoader.getInstance;
  }
});

// ../../node_modules/recaptcha-v3/dist/ReCaptcha.js
var require_ReCaptcha = __commonJS({
  "../../node_modules/recaptcha-v3/dist/ReCaptcha.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ReCaptchaInstance = exports.getInstance = exports.load = void 0;
    var ReCaptchaLoader_1 = require_ReCaptchaLoader();
    Object.defineProperty(exports, "load", { enumerable: true, get: function() {
      return ReCaptchaLoader_1.load;
    } });
    Object.defineProperty(exports, "getInstance", { enumerable: true, get: function() {
      return ReCaptchaLoader_1.getInstance;
    } });
    var ReCaptchaInstance_1 = require_ReCaptchaInstance();
    Object.defineProperty(exports, "ReCaptchaInstance", { enumerable: true, get: function() {
      return ReCaptchaInstance_1.ReCaptchaInstance;
    } });
  }
});

// src/index.ts
var src_exports = {};
__export(src_exports, {
  default: () => vldx,
  vldxForm: () => vldxForm
});
module.exports = __toCommonJS(src_exports);

// src/rules.ts
var baseRules = /* @__PURE__ */ new Map();
baseRules.set("required", {
  name: "required",
  validator: (validatorField) => {
    return validatorField.getHTMLField.value !== "";
  },
  error: {
    priority: 1,
    message: "$name is a required field."
  }
});
baseRules.set("email", {
  name: "email",
  validator: (validatorField) => {
    const email_regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return email_regex.test(validatorField.getHTMLField.value);
  },
  error: {
    priority: 0,
    message: "Enter a proper email address."
  }
});

// src/handlers/fieldValidation.ts
var field = class {
  form;
  htmlField;
  rules = /* @__PURE__ */ new Map();
  inputHandler;
  handleInput(e) {
  }
  constructor(htmlField, form, customRules = []) {
    this.inputHandler = this.handleInput.bind(this);
    this.htmlField = htmlField;
    this.form = form;
    this.htmlField.addEventListener("blur", this.inputHandler);
    if (this.htmlField.dataset.vldxRules) {
      let htmlRules = this.htmlField.dataset.vldxRules;
      htmlRules = htmlRules?.replace(/\s+/g, "");
      for (const ruleName of htmlRules?.split(`|`)) {
        if (baseRules.has(ruleName))
          this.rules.set(ruleName, baseRules.get(ruleName));
        else
          console.log("An invalid rule has been provided.");
      }
    }
    for (const customRule of customRules) {
      if (this.rules.has(customRule.name))
        throw new Error(`${customRule.name} already exists on this field- ${this.htmlField.id}!`);
      else
        this.rules.set(customRule.name, customRule);
    }
  }
  fieldValidation(htmlField) {
    let loggedError;
    this.rules.forEach((rule) => {
      let priority = loggedError?.priority ? loggedError?.priority : -1;
      if (!rule.validator.call(this, this) && rule.error.priority > priority) {
        loggedError = rule.error;
      }
    });
    loggedError = {
      priority: loggedError?.priority,
      message: loggedError?.message.replaceAll("$name", `'${htmlField.name[0].toUpperCase() + htmlField.name.substring(1)}'`)
    };
    this.htmlField.setCustomValidity(loggedError?.message ? loggedError.message : "");
    this.htmlField.reportValidity();
    this.form.updateErrors(this.htmlField.id, loggedError);
  }
  get getHTMLField() {
    return this.htmlField;
  }
};
field.prototype.handleInput = function(e) {
  switch (e.type) {
    case "blur":
      this.fieldValidation(e.target);
      break;
    default:
      break;
  }
};

// src/handlers/submitForm.ts
var import_recaptcha_v3 = __toESM(require_ReCaptcha());
async function submitForm(e, form) {
  e.preventDefault();
  e.stopPropagation();
  for (const field2 of form.getFields) {
    field2.fieldValidation(field2.getHTMLField);
  }
  if (form.getHoneyPot?.value !== "")
    form.updateErrors(form.getHoneyPot?.id, { priority: 2, message: "Are you a bot? A honey pot field has been filled!" });
  else
    form.updateErrors(form.getHoneyPot?.id);
  let loggedError;
  form.getErrors.forEach((error) => {
    let priority = loggedError?.priority ? loggedError?.priority : -1;
    if (error.priority > priority)
      loggedError = error;
  });
  loggedError ? updateResponse(form, false, loggedError.message) : await submissionFunction(form);
}
function updateResponse(form, passStatus, message) {
  let responseField = form.getResponseField;
  responseField.innerText = passStatus && form.getSuccessMessage ? form.getSuccessMessage : message;
  passStatus ? (() => {
    responseField.classList.remove("vldx-failure");
    responseField.classList.add("vldx-success");
  })() : (() => {
    responseField.classList.remove("vldx-success");
    responseField.classList.add("vldx-failure");
  })();
  responseField.classList.remove("hidden");
}
var submissionFunction = async (form) => {
  const formData = new FormData(form.getFormContainer);
  if (typeof form.getRecaptchaKey !== "undefined") {
    const recaptchaKey = form.getRecaptchaKey;
    const recaptcha = await (0, import_recaptcha_v3.load)(recaptchaKey, { autoHideBadge: true });
    const token = await recaptcha.execute("submit");
    formData.append("g-token", token);
  }
  const url = form.getFormContainer.getAttribute("action");
  const request = new XMLHttpRequest();
  request.responseType = "json";
  request.open("POST", url, true);
  let data = {};
  for (let [key, prop] of formData) {
    data[key] = prop;
  }
  request.onreadystatechange = () => {
    responseHandler(form, request);
  };
  request.setRequestHeader("Content-type", "application/json");
  request.send(JSON.stringify(data, null, 2));
};
function responseHandler(form, request) {
  if (request.readyState === 4) {
    updateResponse(form, request.status == 200, request.response.message);
  }
}

// src/index.ts
var vldx = class {
  forms = [];
  constructor(form) {
    if (typeof form == "undefined")
      this.vldxInitAll();
    else
      this.vldxInitForm(form);
  }
  vldxInitAll() {
    document.querySelectorAll(".vldx-form").forEach((form) => {
      this.vldxInitForm(form);
    });
  }
  vldxInitForm(form) {
    let vxf = new vldxForm(form);
    this.forms.push(vxf);
    return vxf;
  }
  get getForms() {
    return this.forms;
  }
};
var vldxForm = class {
  formContainer;
  submitButton;
  honeyPot;
  recaptchaKey;
  fields = new Array();
  responseField;
  successMessage = "The form has been submitted successfully!";
  errors = /* @__PURE__ */ new Map();
  buttonHandler;
  buttonInput(e) {
    submitForm(e, this);
  }
  constructor(formContainer) {
    this.buttonHandler = this.buttonInput.bind(this);
    this.formContainer = formContainer;
    this.formContainer.setAttribute("novalidate", "true");
    this.recaptchaKey = this.formContainer.dataset.vldxRecaptcha;
    this.honeyPot = this.formContainer.querySelector(".vldx-honeypot");
    this.responseField = this.formContainer.querySelector(".vldx-response");
    this.successMessage = this.formContainer.dataset.vldxSuccessMessage ? this.formContainer.dataset.vldxSuccessMessage : this.successMessage;
    for (const field2 of this.formContainer.querySelectorAll(".vldx-field")) {
      this.addField(field2);
    }
    this.addSubmissionButton(this.formContainer.querySelector(".vldx-submit"));
  }
  addSubmissionButton(submitButton, customSubmitListener) {
    this.submitButton = submitButton;
    if (typeof customSubmitListener == "undefined")
      this.submitButton.addEventListener("click", this.buttonHandler);
    else
      this.submitButton.addEventListener("click", customSubmitListener);
  }
  addField(inputField, customRules) {
    this.fields.push(new field(inputField, this, customRules));
  }
  set setHoneyPotField(honeyPotField) {
    this.honeyPot = honeyPotField;
  }
  updateErrors(source, error) {
    if (typeof error !== "undefined" && typeof source !== "undefined")
      this.errors.set(source, error);
    else if (this.errors.has(source))
      this.errors.delete(source);
  }
  get getErrors() {
    return this.errors;
  }
  get getFields() {
    return this.fields;
  }
  get getFormContainer() {
    return this.formContainer;
  }
  get getRecaptchaKey() {
    return this.recaptchaKey;
  }
  get getHoneyPot() {
    return this.honeyPot;
  }
  get getResponseField() {
    return this.responseField;
  }
  get getSuccessMessage() {
    return this.successMessage;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  vldxForm
});
