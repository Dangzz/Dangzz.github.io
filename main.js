(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Daniel Gzz\Desktop\DEV\dangzz\src\main.ts */"zUnb");


/***/ }),

/***/ 1:
/*!****************************!*\
  !*** node-fetch (ignored) ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "259h":
/*!****************************************************!*\
  !*** ./src/app/cryptodata/cryptodata.component.ts ***!
  \****************************************************/
/*! exports provided: CryptodataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CryptodataComponent", function() { return CryptodataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_crypto_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data-crypto.service */ "KVi4");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/header.component */ "fECr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loading/loading.component */ "f/hT");





function CryptodataComponent_app_loading_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-loading");
} }
function CryptodataComponent_div_6_tr_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const crypto_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](crypto_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("$ ", ctx_r3.cryptos[crypto_r4].USD, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("\u20AC ", ctx_r3.cryptos[crypto_r4].EUR, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("$ ", ctx_r3.cryptos[crypto_r4].MXN, "");
} }
function CryptodataComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "COIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "USD");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "EUR");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "MXN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](24, CryptodataComponent_div_6_tr_24_Template, 14, 4, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r1.objectKeys(ctx_r1.cryptos));
} }
function CryptodataComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "See more");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const article_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("href", article_r5.guid, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", article_r5.imageurl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("alt", article_r5.tags);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](article_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("href", article_r5.guid, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
} }
class CryptodataComponent {
    // tslint:disable-next-line: variable-name
    constructor(_data) {
        this._data = _data;
        this.objectKeys = Object.keys;
    }
    ngOnInit() {
        this.loading = true;
        this._data.getPrices()
            .subscribe(res => {
            this.cryptos = res;
            console.log(res);
        });
        this._data.getArticles()
            .subscribe((res) => {
            this.articles = res.Data;
            console.log(this.articles);
            this.loading = false;
        });
    }
}
CryptodataComponent.??fac = function CryptodataComponent_Factory(t) { return new (t || CryptodataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_data_crypto_service__WEBPACK_IMPORTED_MODULE_1__["DataCryptoService"])); };
CryptodataComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: CryptodataComponent, selectors: [["app-cryptodata"]], decls: 13, vars: 3, consts: [[4, "ngIf"], [1, "crt"], ["class", "nes-table-responsive cdata", 4, "ngIf"], [1, "text-center"], ["class", "card text-white bg-dark mb-3", "style", "max-width: 25rem; padding: 20px;", 4, "ngFor", "ngForOf"], [1, "nes-table-responsive", "cdata"], [1, "nes-table", "table", "table-dark", "table-striped", "mt-4", 2, "width", "100%"], [2, "color", "#75ef73"], [4, "ngFor", "ngForOf"], [1, "card", "text-white", "bg-dark", "mb-3", 2, "max-width", "25rem", "padding", "20px"], [1, "card-header"], ["target", "_blank", 3, "href"], [2, "width", "100%", 3, "src", "alt"], [1, "card-body"], [1, "card-text", 2, "min-height", "200px"], ["target", "_blank", 1, "nes-badge", 2, "width", "100%", 3, "href"], [1, "is-success"]], template: function CryptodataComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, CryptodataComponent_app_loading_2_Template, 1, 0, "app-loading", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, CryptodataComponent_div_6_Template, 28, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, CryptodataComponent_div_10_Template, 23, 5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.cryptos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.articles);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _loading_loading_component__WEBPACK_IMPORTED_MODULE_4__["LoadingComponent"]], styles: [".card[_ngcontent-%COMP%] {\n  display: inline-block;\n  border: 0px solid rgba(0, 0, 0, 0.125) !important;\n  border-radius: 0rem;\n}\n\n.centered[_ngcontent-%COMP%] {\n  margin: auto !important;\n}\n\n.nes-badge[_ngcontent-%COMP%]   span.is-success[_ngcontent-%COMP%]:first-child {\n  left: 0;\n  width: 100%;\n}\n\n.cdata[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNyeXB0b2RhdGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLGlEQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxPQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSiIsImZpbGUiOiJjcnlwdG9kYXRhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyOiAwcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMTI1KSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHJlbTtcclxufVxyXG5cclxuLmNlbnRlcmVkIHtcclxuICAgIG1hcmdpbjogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmVzLWJhZGdlIHNwYW4uaXMtc3VjY2VzczpmaXJzdC1jaGlsZCB7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jZGF0YSB7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn0iXX0= */"] });


/***/ }),

/***/ 3:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!********************************!*\
  !*** string_decoder (ignored) ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 6:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "84zG":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ "fECr");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngneat/transloco */ "QPBi");



function AboutComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "\n\n\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "\n                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "\n                                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "\n                                            Kwik Dollar LLC - Dinex\n                                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "\n                                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "\n                                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "ul", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "\n                                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "\n                                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "\n                                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "\n                                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "\n                                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "\n                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "\n                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "\n                                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "izzi Telecom");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "\n                                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "ul", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "\n                                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "\n                                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "\n                                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "\n                                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "\n                                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "\n                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "\n                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, "\n                                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "Multimedios Redes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, "\n                                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "ul", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "\n                                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, "\n\n                                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "\n\n                                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, "\n\n                                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "\n                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, "\n                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, "\n                                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](119, "ilinium S.A de C.V.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, "\n                                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "ul", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](122, "\n                                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, "\n                                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128, "\n                                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](131, "\n                                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](134, "\n                                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](136, "\n                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](137, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](138, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](139, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](140, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](142, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](144, "<");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](147, "<");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](148, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](149, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](151, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](153, ">");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](154, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](156, ">");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](157, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](158, "\n\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](159, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](160, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](161, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const t_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](t_r1("title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](t_r1("about1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](t_r1("about2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](t_r1("title2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("\n                                                    ", t_r1("experience1"), "\n                                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("\n                                                    ", t_r1("experience2"), "\n                                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("\n                                                    ", t_r1("experience3"), "\n                                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](t_r1("experience4"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](t_r1("experience5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](t_r1("experience6"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](t_r1("experience7"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("\n                                                ", t_r1("experience8"), "\n                                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("\n                                                ", t_r1("experience9"), "\n                                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("\n                                                ", t_r1("experience10"), "\n                                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](t_r1("experience11"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](t_r1("experience12"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](t_r1("experience13"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](t_r1("experience14"));
} }
class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.??fac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 6, vars: 1, consts: [[1, "crt"], [4, "transloco", "translocoRead"], [1, "animate__animated", "animate__fadeIn"], [1, "nes-container", "with-title", "is-centered", "is-dark", "mt-5"], [1, "title", "title-color"], [1, "animate__animated", "animate__fadeIn", "animate__delay-1s"], [1, "nes-container", "with-title", "is-dark", "mt-5"], ["id", "carouselExampleIndicators", "data-bs-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide-to", "0", "aria-current", "true", "aria-label", "Slide 1", 1, "active"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide-to", "1", "aria-label", "Slide 2"], [1, "carousel-inner"], [1, "carousel-item", "active"], [1, "row"], [1, "col"], [1, "nes-container", "is-dark", "with-title", 2, "min-height", "360px"], [1, "title", "nes-text", "title-blue"], [1, "lists", "is-dark"], [1, "nes-list", "is-circle"], [1, "title", "title-blue"], [1, "carousel-item"], [1, "row", "animate__animated", "animate__fadeIn"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide", "prev", 1, "carousel-control-prev", "nes-btn", "is-error", "scroll-btn", 2, "left", "-32px"], ["aria-hidden", "true", 1, ""], [1, "visually-hidden"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide", "next", 1, "carousel-control-next", "nes-btn", "is-error", "scroll-btn", 2, "right", "-32px"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, AboutComponent_ng_container_4_Template, 162, 18, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("translocoRead", "aboutme");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _ngneat_transloco__WEBPACK_IMPORTED_MODULE_2__["TranslocoDirective"]], styles: [".carousel-indicators[_ngcontent-%COMP%] {\n  bottom: -10% !important;\n}\n\n.carousel-control-next[_ngcontent-%COMP%], .carousel-control-prev[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 30%;\n  bottom: 0;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 150px;\n  padding: 0;\n  color: #fff !important;\n  text-align: center;\n  background: 0 0;\n  border: 0;\n  opacity: 0.75;\n  transition: opacity 0.15s ease;\n  background-color: #ff0707;\n}\n\n.carousel-inner[_ngcontent-%COMP%]    > .item[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 100%;\n  \n}\n\n@media (max-width: 768px) {\n  li[_ngcontent-%COMP%] {\n    font-size: 11px !important;\n  }\n\n  p[_ngcontent-%COMP%] {\n    font-size: 13px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFDO0VBQ0ksdUJBQUE7QUFDTDs7QUFFQzs7RUFFSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7QUFDTDs7QUFFQztFQUNJLFdBQUE7RUFDQSxxQ0FBQTtBQUNMOztBQUVDO0VBQ0k7SUFDSSwwQkFBQTtFQUNQOztFQUNHO0lBQ0ksMEJBQUE7RUFFUDtBQUNGIiwiZmlsZSI6ImFib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIC5jYXJvdXNlbC1pbmRpY2F0b3JzIHtcclxuICAgICBib3R0b206IC0xMCUgIWltcG9ydGFudDtcclxuIH1cclxuIFxyXG4gLmNhcm91c2VsLWNvbnRyb2wtbmV4dCxcclxuIC5jYXJvdXNlbC1jb250cm9sLXByZXYge1xyXG4gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICB0b3A6IDMwJTtcclxuICAgICBib3R0b206IDA7XHJcbiAgICAgei1pbmRleDogMTtcclxuICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgd2lkdGg6IDI4cHg7XHJcbiAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICBwYWRkaW5nOiAwO1xyXG4gICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgIGJhY2tncm91bmQ6IDAgMDtcclxuICAgICBib3JkZXI6IDA7XHJcbiAgICAgb3BhY2l0eTogLjc1O1xyXG4gICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjE1cyBlYXNlO1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjA3MDc7XHJcbiB9XHJcbiBcclxuIC5jYXJvdXNlbC1pbm5lcj4uaXRlbT5pbWcge1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgIC8qIHRvIG1ha2Ugc21hbGxlciBpbWFnZXMgbG9vayBmdWxsICovXHJcbiB9XHJcbiBcclxuIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgIGxpIHtcclxuICAgICAgICAgZm9udC1zaXplOiAxMXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgfVxyXG4gICAgIHAge1xyXG4gICAgICAgICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcclxuICAgICB9XHJcbiB9Il19 */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "KVi4":
/*!****************************************!*\
  !*** ./src/app/data-crypto.service.ts ***!
  \****************************************/
/*! exports provided: DataCryptoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataCryptoService", function() { return DataCryptoService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class DataCryptoService {
    // tslint:disable-next-line: variable-name
    constructor(_http) {
        this._http = _http;
    }
    // tslint:disable-next-line: typedef
    getPrices() {
        return this._http.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,DOGE,LTC,XLM,EOS,SHIB&tsyms=USD,EUR,MXN')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(result => this.result = result));
    }
    // tslint:disable-next-line: typedef
    getArticles() {
        return this._http.get('https://min-api.cryptocompare.com/data/v2/news/?lang=ES')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(result => this.resultArticles = result));
    }
}
DataCryptoService.??fac = function DataCryptoService_Factory(t) { return new (t || DataCryptoService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
DataCryptoService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: DataCryptoService, factory: DataCryptoService.??fac, providedIn: 'root' });


/***/ }),

/***/ "LgBW":
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ "fECr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return ["/blog/device-detector"]; };
class BlogComponent {
    constructor() { }
    ngOnInit() {
    }
}
BlogComponent.??fac = function BlogComponent_Factory(t) { return new (t || BlogComponent)(); };
BlogComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: BlogComponent, selectors: [["app-blog"]], decls: 36, vars: 2, consts: [[1, "crt"], [1, "container", "animate__animated", "animate__fadeIn"], [1, "row"], [1, "nes-container", "is-dark", "mt-3"], [1, "message-right", "text-center"], [2, "text-align", "left"], [1, "nes-balloon", "from-right", "is-dark"], ["type", "button", 1, "btn", "btn-secondary", 3, "routerLink"], [2, "display", "contents"], ["src", "/assets/images/dan-2.png", "alt", "Daniel Gonzalez", 2, "height", "110px"]], template: function BlogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Angular 6+ Device Detector");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "\n                            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Simple User Agent using Angular Ngx Device Detector");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "\n                            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "See more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "\n\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](1, _c0));
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9nLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");



class AppComponent {
    constructor() {
        this.title = 'dangzz';
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "app-footer");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "TGkX":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngneat/transloco */ "QPBi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return ["/about"]; };
const _c1 = function () { return ["/skills"]; };
const _c2 = function () { return ["/labs"]; };
const _c3 = function () { return ["/blog"]; };
const _c4 = function () { return ["/contact"]; };
function MenuComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\n\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "\n\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "\n\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "\n\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "\n\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const t_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](10, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("01. ", t_r1("about"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](11, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("02. ", t_r1("skills"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](12, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("03. ", t_r1("labs"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](13, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("04. ", t_r1("blog"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](14, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("05. ", t_r1("contact"), "");
} }
class MenuComponent {
    constructor() { }
    ngOnInit() {
    }
}
MenuComponent.??fac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(); };
MenuComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], decls: 4, vars: 1, consts: [[1, "center-object", "mt-3", "animate__animated", "animate__fadeIn", "animate__delay-2s"], [4, "transloco", "translocoRead"], [1, "main-menu", 3, "routerLink"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, MenuComponent_ng_container_2_Template, 17, 15, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("translocoRead", "header");
    } }, directives: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_1__["TranslocoDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["a[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQUNKIiwiZmlsZSI6Im1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "UBb+":
/*!****************************************!*\
  !*** ./src/app/labs/labs.component.ts ***!
  \****************************************/
/*! exports provided: LabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabsComponent", function() { return LabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ "fECr");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngneat/transloco */ "QPBi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




const _c0 = function () { return ["/labs/crypto-data"]; };
const _c1 = function () { return ["/labs/image-classifier"]; };
function LabsComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const t_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](t_r1("title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](t_r1("labs1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](6, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](t_r1("labs2"));
} }
class LabsComponent {
    constructor() { }
    ngOnInit() {
    }
}
LabsComponent.??fac = function LabsComponent_Factory(t) { return new (t || LabsComponent)(); };
LabsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: LabsComponent, selectors: [["app-labs"]], decls: 6, vars: 1, consts: [[1, "crt"], [4, "transloco", "translocoRead"], [1, "animate__animated", "animate__fadeIn", "container", "mt-5"], [1, "nes-container", "with-title", "is-dark", "mt-5"], [1, "title", "title-color"], [1, "d-grid", "gap-2"], [1, "nes-badge", 2, "width", "100%", 3, "routerLink"], [1, "is-success", "text-uppercase"]], template: function LabsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, LabsComponent_ng_container_4_Template, 26, 7, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("translocoRead", "labs");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _ngneat_transloco__WEBPACK_IMPORTED_MODULE_2__["TranslocoDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".nes-badge[_ngcontent-%COMP%] {\n  white-space: normal !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxhYnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtBQUNKIiwiZmlsZSI6ImxhYnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmVzLWJhZGdlIHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./intro/intro.component */ "drGS");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu/menu.component */ "TGkX");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./skills/skills.component */ "fGbd");
/* harmony import */ var _data_crypto_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./data-crypto.service */ "KVi4");
/* harmony import */ var _cryptodata_cryptodata_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./cryptodata/cryptodata.component */ "259h");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./loading/loading.component */ "f/hT");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./blog/blog.component */ "LgBW");
/* harmony import */ var _labs_labs_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./labs/labs.component */ "UBb+");
/* harmony import */ var _transloco_transloco_root_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./transloco/transloco-root.module */ "b3Gb");
/* harmony import */ var _blog_ngx_device_detector_ngx_device_detector_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./blog/ngx-device-detector/ngx-device-detector.component */ "t70Q");
/* harmony import */ var _image_classifier_image_classifier_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./image-classifier/image-classifier.component */ "gdL9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ "fXoL");






















class AppModule {
}
AppModule.??fac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_21__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_21__["????defineInjector"]({ providers: [_data_crypto_service__WEBPACK_IMPORTED_MODULE_13__["DataCryptoService"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_2__["HashLocationStrategy"] }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _transloco_transloco_root_module__WEBPACK_IMPORTED_MODULE_18__["TranslocoRootModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_21__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _intro_intro_component__WEBPACK_IMPORTED_MODULE_5__["IntroComponent"],
        _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"],
        _skills_skills_component__WEBPACK_IMPORTED_MODULE_12__["SkillsComponent"],
        _cryptodata_cryptodata_component__WEBPACK_IMPORTED_MODULE_14__["CryptodataComponent"],
        _loading_loading_component__WEBPACK_IMPORTED_MODULE_15__["LoadingComponent"],
        _blog_blog_component__WEBPACK_IMPORTED_MODULE_16__["BlogComponent"],
        _labs_labs_component__WEBPACK_IMPORTED_MODULE_17__["LabsComponent"],
        _blog_ngx_device_detector_ngx_device_detector_component__WEBPACK_IMPORTED_MODULE_19__["NgxDeviceDetectorComponent"],
        _image_classifier_image_classifier_component__WEBPACK_IMPORTED_MODULE_20__["ImageClassifierComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _transloco_transloco_root_module__WEBPACK_IMPORTED_MODULE_18__["TranslocoRootModule"]] }); })();


/***/ }),

/***/ "b3Gb":
/*!****************************************************!*\
  !*** ./src/app/transloco/transloco-root.module.ts ***!
  \****************************************************/
/*! exports provided: TranslocoHttpLoader, TranslocoRootModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslocoHttpLoader", function() { return TranslocoHttpLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslocoRootModule", function() { return TranslocoRootModule; });
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco */ "QPBi");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class TranslocoHttpLoader {
    constructor(http) {
        this.http = http;
    }
    getTranslation(lang) {
        return this.http.get(`/assets/i18n/${lang}.json`);
    }
}
TranslocoHttpLoader.??fac = function TranslocoHttpLoader_Factory(t) { return new (t || TranslocoHttpLoader)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
TranslocoHttpLoader.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjectable"]({ token: TranslocoHttpLoader, factory: TranslocoHttpLoader.??fac, providedIn: 'root' });
class TranslocoRootModule {
}
TranslocoRootModule.??fac = function TranslocoRootModule_Factory(t) { return new (t || TranslocoRootModule)(); };
TranslocoRootModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineNgModule"]({ type: TranslocoRootModule });
TranslocoRootModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjector"]({ providers: [
        {
            provide: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_0__["TRANSLOCO_CONFIG"],
            useValue: Object(_ngneat_transloco__WEBPACK_IMPORTED_MODULE_0__["translocoConfig"])({
                availableLangs: ['en', 'es'],
                defaultLang: 'en',
                // Remove this option if your application doesn't support changing language in runtime.
                reRenderOnLangChange: true,
                prodMode: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production,
            })
        },
        { provide: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_0__["TRANSLOCO_LOADER"], useClass: TranslocoHttpLoader }
    ], imports: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_0__["TranslocoModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["????setNgModuleScope"](TranslocoRootModule, { exports: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_0__["TranslocoModule"]] }); })();


/***/ }),

/***/ "bzTf":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/header.component */ "fECr");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngneat/transloco */ "QPBi");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






function ContactComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](5, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "form", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngSubmit", function ContactComponent_ng_container_4_Template_form_ngSubmit_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r7); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](10); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r6.onSubmit(_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](12, "input", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](15, "input", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](18, "textarea", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](20, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](21, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](22, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](23, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](24, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](25, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
} if (rf & 2) {
    const t_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](t_r1("title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("placeholder", t_r1("contact1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("placeholder", t_r1("contact2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("placeholder", t_r1("contact3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("value", t_r1("contact4"));
} }
class ContactComponent {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
    }
    onSubmit(contactForm) {
        if (contactForm.valid) {
            const email = contactForm.value;
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' });
            this.http.post('https://formspree.io/f/xdoyekza', { name: email.name, replyto: email.email, message: email.messages }, { 'headers': headers }).subscribe(response => {
                console.log(response);
            });
        }
    }
}
ContactComponent.??fac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
ContactComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 6, vars: 1, consts: [[1, "crt"], [4, "transloco", "translocoRead"], [1, "animate__animated", "animate__fadeIn"], [1, "nes-container", "with-title", "is-centered", "is-dark", "mt-5"], [1, "title", "title-color"], [3, "ngSubmit"], ["contactForm", "ngForm"], ["type", "text", "name", "name", "ngModel", "", "required", "", 3, "placeholder"], ["name", "ngModel"], ["type", "text", "email", "", "name", "email", "ngModel", "", "required", "", 3, "placeholder"], ["email", "ngModel"], ["name", "messages", "ngModel", "", "required", "", 3, "placeholder"], ["messages", "ngModel"], ["type", "submit", 1, "btn", "btn-secondary", 3, "value"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](4, ContactComponent_ng_container_4_Template, 26, 5, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](5, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("translocoRead", "contact");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__["TranslocoDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["EmailValidator"]], styles: ["form[_ngcontent-%COMP%] {\n  display: grid;\n  text-align: center;\n}\n\ninput[_ngcontent-%COMP%] {\n  height: 53px;\n  margin-top: 10px;\n  text-align: center;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  height: 53px;\n  margin-top: 10px;\n  text-align: center;\n}\n\n@media (max-width: 768px) {\n  input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n    width: 230px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0k7O0lBRUksWUFBQTtFQUNOO0FBQ0YiLCJmaWxlIjoiY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gICAgaGVpZ2h0OiA1M3B4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxudGV4dGFyZWEge1xyXG4gICAgaGVpZ2h0OiA1M3B4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBpbnB1dCxcclxuICAgIHRleHRhcmVhIHtcclxuICAgICAgICB3aWR0aDogMjMwcHg7XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "drGS":
/*!******************************************!*\
  !*** ./src/app/intro/intro.component.ts ***!
  \******************************************/
/*! exports provided: IntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroComponent", function() { return IntroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../menu/menu.component */ "TGkX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



class IntroComponent {
    constructor() {
        // tslint:disable-next-line: deprecation
        this.perfData = window.performance.timing;
        this.platform = navigator.platform;
        this.cores = navigator.hardwareConcurrency;
        this.cookiee = navigator.cookieEnabled.toString();
        this.ua = navigator.userAgent;
        this.connectTime = this.perfData.responseEnd - this.perfData.requestStart;
    }
    ngOnInit() {
        console.log(`%c ________________________________________
 ----------------------------------------
         ???              ???
        ?????????           ????????????
        ????????????        ??????????????????
       ?????????????????????????????????????????????????????????
     ???????????????????????????????????????????????????????????????
   ?????????????????????????????????????????????????????????????????????
  ???????????????????????????????????????????????????????????????????????????
  ???????????????????????????????????????????????????????????????????????????
 ?????????????????????????????????????????????????????????????????????????????????
 ?????????????????????????????????????????????????????????????????????????????????
????????????????????????????????????????????????????????????????????????????????????
???????????????????????????????????????????????????????????????????????????????????????
????????????????????????????????????????????????????????????????????????????????????
 ?????????????????????????????????????????????????????????????????????????????????
 ??????????????????????????????????????????????????????????????????????????????
  ???????????????????????????????????????????????????????????????????????????
      ??????????????????????????????????????????????????????
         ???????????????????????????????????? `, 'font-family:monospace');
        console.log('Load Time: ' + this.connectTime + 'ms');
        console.log('User Agent: ' + navigator.userAgent);
        console.log('CookieEnable: ' + navigator.cookieEnabled);
        console.log('Platform: ' + navigator.platform);
        console.log('CPU cores:' + navigator.hardwareConcurrency);
    }
}
IntroComponent.??fac = function IntroComponent_Factory(t) { return new (t || IntroComponent)(); };
IntroComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: IntroComponent, selectors: [["app-intro"]], decls: 39, vars: 11, consts: [["id", "hideMe", 1, "overlay", "text-center"], [1, "mt-5"], [1, "sysfont"], [1, "text-center", "crt"], [1, "animate__animated", "animate__zoomIn", "animate__slow", "animate__delay-3s"], ["src", "/assets/images/logo.png", "alt", "Daniel Gonzalez UI DEV", 1, "img-fluid", "parpadea"], [1, "hero-run"], ["src", "/assets/images/walker.gif"]], template: function IntroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "CHECK SYSTEM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](9, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](16, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](23, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("PLATFORM...........", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](9, 5, ctx.platform), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("CPU CORES..........", ctx.cores, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("COOKIE ENABLED.....", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](16, 7, ctx.cookiee), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("LOAD TIME..........", ctx.connectTime, "ms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](23, 9, ctx.ua));
    } }, directives: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["UpperCasePipe"]], styles: [".hero-run[_ngcontent-%COMP%] {\n  position: absolute;\n  animation: myfirst 8s 2;\n  animation-direction: normal;\n  margin-left: -180px;\n  animation-iteration-count: infinite;\n  animation-delay: 5s;\n}\n\n.sysfont[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n\n@keyframes myfirst {\n  0% {\n    left: 0%;\n  }\n  100% {\n    left: 120%;\n  }\n}\n\n.overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n  background-color: black;\n}\n\n#hideMe[_ngcontent-%COMP%] {\n  \n  \n  \n  animation: cssAnimation 0s ease-in 3s forwards;\n  animation-fill-mode: forwards;\n}\n\n@keyframes cssAnimation {\n  to {\n    width: 0;\n    height: 0;\n    overflow: hidden;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGludHJvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQ0FBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSTtJQUNJLFFBQUE7RUFDTjtFQUNFO0lBQ0ksVUFBQTtFQUNOO0FBQ0Y7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFBSjs7QUFHQTtFQUVJLFlBQUE7RUFFQSxzQkFBQTtFQUVBLFVBQUE7RUFDQSw4Q0FBQTtFQUVBLDZCQUFBO0FBQUo7O0FBR0E7RUFDSTtJQUNJLFFBQUE7SUFDQSxTQUFBO0lBQ0EsZ0JBQUE7RUFBTjtBQUNGIiwiZmlsZSI6ImludHJvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlcm8tcnVuIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGFuaW1hdGlvbjogbXlmaXJzdCA4cyAyO1xyXG4gICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xODBweDtcclxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiA1cztcclxufVxyXG5cclxuLnN5c2ZvbnQge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIG15Zmlyc3Qge1xyXG4gICAgMCUge1xyXG4gICAgICAgIGxlZnQ6IDAlO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgbGVmdDogMTIwJTtcclxuICAgIH1cclxufVxyXG5cclxuLm92ZXJsYXkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4jaGlkZU1lIHtcclxuICAgIC1tb3otYW5pbWF0aW9uOiBjc3NBbmltYXRpb24gMHMgZWFzZS1pbiAzcyBmb3J3YXJkcztcclxuICAgIC8qIEZpcmVmb3ggKi9cclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBjc3NBbmltYXRpb24gMHMgZWFzZS1pbiAzcyBmb3J3YXJkcztcclxuICAgIC8qIFNhZmFyaSBhbmQgQ2hyb21lICovXHJcbiAgICAtby1hbmltYXRpb246IGNzc0FuaW1hdGlvbiAwcyBlYXNlLWluIDNzIGZvcndhcmRzO1xyXG4gICAgLyogT3BlcmEgKi9cclxuICAgIGFuaW1hdGlvbjogY3NzQW5pbWF0aW9uIDBzIGVhc2UtaW4gM3MgZm9yd2FyZHM7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgY3NzQW5pbWF0aW9uIHtcclxuICAgIHRvIHtcclxuICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGNzc0FuaW1hdGlvbiB7XHJcbiAgICB0byB7XHJcbiAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ "f/hT":
/*!**********************************************!*\
  !*** ./src/app/loading/loading.component.ts ***!
  \**********************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LoadingComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoadingComponent.??fac = function LoadingComponent_Factory(t) { return new (t || LoadingComponent)(); };
LoadingComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: LoadingComponent, selectors: [["app-loading"]], decls: 8, vars: 0, consts: [[1, "text-center"], ["role", "status", 1, "text-light", "m-5"], [1, "sr-only"]], template: function LoadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Getting Data...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2FkaW5nLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngneat/transloco */ "QPBi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function HeaderComponent_ng_container_2_ng_container_90_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "\n                     ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function HeaderComponent_ng_container_2_ng_container_90_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2); return ctx_r4.changeSiteLanguage("es"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "Espa\u00F1ol");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "\n                       \n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
} }
function HeaderComponent_ng_container_2_ng_container_92_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function HeaderComponent_ng_container_2_ng_container_92_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2); return ctx_r6.changeSiteLanguage("en"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "English");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
} }
const _c0 = function () { return [""]; };
const _c1 = function () { return ["active"]; };
const _c2 = function () { return ["/about"]; };
const _c3 = function () { return ["/skills"]; };
const _c4 = function () { return ["/labs"]; };
const _c5 = function () { return ["/blog"]; };
const _c6 = function () { return ["/contact"]; };
function HeaderComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](5, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](9, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "ul", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](20, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](21, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](23, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](26, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](27, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](29, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](32, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](33, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](35, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](38, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](39, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](41, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](42, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](44, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](45, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](46, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](47, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](48, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](49, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](50, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](51, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](52, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](53, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](55, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](56, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](58, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](59, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](61, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](62, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](63, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](64, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](65, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](67, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](68, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](70, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](71, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](72, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](73, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](74, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](75, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](76, "section", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](77, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](78, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](79, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](80, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](81, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](82, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](83, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](84, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](85, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](86, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](87, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](88, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](89, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](90, HeaderComponent_ng_container_2_ng_container_90_Template, 5, 0, "ng-container", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](91, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](92, HeaderComponent_ng_container_2_ng_container_92_Template, 5, 0, "ng-container", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](93, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](94, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](95, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](96, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](97, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
} if (rf & 2) {
    const t_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](26, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](27, _c1))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](28, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](t_r1("about"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](29, _c1))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](30, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](t_r1("skills"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](31, _c1))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](32, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](t_r1("labs"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](33, _c1))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](34, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](t_r1("blog"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](35, _c1))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](36, _c6));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](t_r1("contact"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("\n                                ", ctx_r0.WeatherData.temp_celcius, "\u00B0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate2"]("", ctx_r0.WeatherData.temp_min, "\u00B0 / ", ctx_r0.WeatherData.temp_max, "\u00B0\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate2"]("", t_r1("temp1"), ": ", ctx_r0.WeatherData.temp_feels_like, "\u00B0\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("", ctx_r0.WeatherData.name, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate2"]("", t_r1("temp2"), ": ", ctx_r0.WeatherData.main.humidity, "%\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r0.siteLanguage === "English");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r0.siteLanguage === "Espa\u00F1ol");
} }
class HeaderComponent {
    constructor(service) {
        this.service = service;
        this.siteLanguage = 'English';
        this.languageList = [
            { code: 'en', label: 'English' },
            { code: 'es', label: 'Espa??ol' }
        ];
    }
    changeSiteLanguage(language) {
        this.service.setActiveLang(language);
        this.siteLanguage = this.languageList.find(f => f.code === language).label;
    }
    // tslint:disable-next-line: typedef
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.WeatherData = {
                main: {},
                isDay: true
            };
            const datosDeUbicacion = yield this.getGeoIp();
            // console.log(datosDeUbicacion);
            this.getWeatherData(datosDeUbicacion.longitude, datosDeUbicacion.latitude);
        });
    }
    getGeoIp() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const response = fetch('https://freegeoip.app/json/');
            return (yield response).json();
        });
    }
    getWeatherData(longitude, latitude) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=6c512ec67b08af16eadf4aef5082ea73`)
            .then(response => response.json())
            .then(data => {
            this.setWeatherData(data);
            console.log(data);
        });
    }
    setWeatherData(data) {
        this.WeatherData = data;
        const sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
        this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
        const currentDate = new Date();
        this.WeatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
        this.WeatherData.temp_celcius = (this.WeatherData.main.temp - 273.15).toFixed(0);
        this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
        this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
        this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(0);
    }
}
HeaderComponent.??fac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_ngneat_transloco__WEBPACK_IMPORTED_MODULE_2__["TranslocoService"])); };
HeaderComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 4, vars: 1, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light", "nes-container", "is-rounded", 2, "border-image-repeat", "unset"], [4, "transloco", "translocoRead"], [1, "container-fluid"], [1, "navbar-brand", 3, "routerLink"], ["src", "/assets/images/dan.png", "alt", "Daniel Gonzalez", 1, "logo-icon"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarText", "aria-controls", "navbarText", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarText", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto", "mb-2", "mb-lg-0", 2, "font-size", "18px"], [1, "nav-item"], [1, "nav-link", 3, "routerLinkActive", "routerLink"], ["id", "divWeatherMain", 1, "animate__animated", "animate__fadeInDown", "animate__delay-1s"], [1, "row", 2, "width", "100%", "background", "#a3a3a3"], [1, "col-5"], [1, "weatherWidgetRow", 2, "font-size", "20px", "margin-top", "5px"], [1, "weatherWidgetRow", 2, "font-size", "10px"], [1, "col-7"], [1, "weatherWidgetRow", "city"], [1, "weatherWidgetRow", 2, "font-size", "12px"], [1, "navbar-text"], [1, "icon-list"], ["href", "https://www.linkedin.com/in/mdgs/", "target", "_blank", 1, "d-inline"], [1, "nes-icon", "linkedin"], ["href", "https://www.instagram.com/dany.ui/", "target", "_blank", 1, "d-inline"], [1, "nes-icon", "instagram"], ["href", "https://github.com/Dangzz", "target", "_blank", 1, "d-inline"], [1, "nes-icon", "github"], [4, "ngIf"], ["type", "button", 1, "nes-btn", "btn-sm", "btn-lang", "mt-2", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, HeaderComponent_ng_container_2_Template, 98, 37, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("translocoRead", "header");
    } }, directives: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_2__["TranslocoDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".btn-lang[_ngcontent-%COMP%] {\n  display: block !important;\n  font-weight: bolder !important;\n  width: 100% !important;\n  color: currentColor !important;\n  font-size: 11px;\n}\n\n.city[_ngcontent-%COMP%] {\n  font-size: 15px;\n  margin-top: 10px;\n}\n\n@media (max-width: 768px) {\n  .city[_ngcontent-%COMP%] {\n    font-size: 11px;\n    margin-top: 10px;\n  }\n\n  .icon-list[_ngcontent-%COMP%] {\n    margin-top: 15px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQztFQUNJLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQUNMOztBQUVDO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBQ0w7O0FBRUM7RUFDSTtJQUNJLGVBQUE7SUFDQSxnQkFBQTtFQUNQOztFQUNHO0lBQ0ksMkJBQUE7RUFFUDtBQUNGIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAuYnRuLWxhbmcge1xyXG4gICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICAgZm9udC13ZWlnaHQ6IGJvbGRlciAhaW1wb3J0YW50O1xyXG4gICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgY29sb3I6IGN1cnJlbnRDb2xvciAhaW1wb3J0YW50O1xyXG4gICAgIGZvbnQtc2l6ZTogMTFweDtcclxuIH1cclxuIFxyXG4gLmNpdHkge1xyXG4gICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gfVxyXG4gXHJcbiBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAuY2l0eSB7XHJcbiAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICB9XHJcbiAgICAgLmljb24tbGlzdCB7XHJcbiAgICAgICAgIG1hcmdpbi10b3A6IDE1cHggIWltcG9ydGFudDtcclxuICAgICB9XHJcbiB9Il19 */"] });


/***/ }),

/***/ "fGbd":
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ "fECr");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngneat/transloco */ "QPBi");



function SkillsComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const t_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](t_r1("title"));
} }
class SkillsComponent {
    constructor() { }
    ngOnInit() {
    }
}
SkillsComponent.??fac = function SkillsComponent_Factory(t) { return new (t || SkillsComponent)(); };
SkillsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: SkillsComponent, selectors: [["app-skills"]], decls: 6, vars: 1, consts: [[1, "crt"], [4, "transloco", "translocoRead"], [1, "animate__animated", "animate__fadeIn"], [1, "nes-container", "with-title", "is-dark", "mt-5"], [1, "title", "title-color"], ["data-skill", "PHP", 1, "bar", "back", "basic", "nes-progress"], ["data-skill", "API integration", 1, "bar", "back", "intermediate", "nes-progress"], ["data-skill", "ANGULAR 6+", 1, "bar", "back", "intermediate", "nes-progress"], ["data-skill", "TYPESCRIPT", 1, "bar", "back", "intermediate", "nes-progress"], ["data-skill", "UI / UX DESIGN", 1, "bar", "front", "advanced", "nes-progress"], ["data-skill", "JAVASCRIPT", 1, "bar", "front", "advanced", "nes-progress"], ["data-skill", "BOOTSTRAP 4.X+", 1, "bar", "front", "expert", "nes-progress"], ["data-skill", "SEO", 1, "bar", "front", "expert", "nes-progress"], ["data-skill", "HTML5 & CSS3", 1, "bar", "front", "expert", "nes-progress"]], template: function SkillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, SkillsComponent_ng_container_4_Template, 29, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("translocoRead", "skills");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _ngneat_transloco__WEBPACK_IMPORTED_MODULE_2__["TranslocoDirective"]], styles: ["@keyframes load {\n  from {\n    width: 0%;\n  }\n}\n.bar[_ngcontent-%COMP%] {\n  padding: 2px;\n  margin-bottom: 5px;\n  font-size: 16px;\n  color: #FFF;\n  font-weight: bold;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);\n}\n.bar[_ngcontent-%COMP%]::before {\n  content: attr(data-skill);\n  background-color: #bc1313;\n  display: inline-block;\n  padding: 5px 0 5px 10px;\n  animation: load 2s 0s;\n  -webkit-animation: load 2s 0s;\n  -moz-animation: load 2s 0s;\n  -o-animation: load 2s 0s;\n}\n.bar.front[_ngcontent-%COMP%]::before {\n  background-color: #00c821;\n}\n.bar.back[_ngcontent-%COMP%]::before {\n  background-color: #ebb000;\n}\n.bar.learning[_ngcontent-%COMP%]::before {\n  width: calc(20% - 10px);\n}\n.bar.basic[_ngcontent-%COMP%]::before {\n  width: calc(40% - 10px);\n}\n.bar.intermediate[_ngcontent-%COMP%]::before {\n  width: calc(60% - 10px);\n}\n.bar.advanced[_ngcontent-%COMP%]::before {\n  width: calc(80% - 10px);\n}\n.bar.expert[_ngcontent-%COMP%]::before {\n  width: calc(100% - 10px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNraWxscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0lBQ0ksU0FBQTtFQUNOO0FBQ0Y7QUFvQkE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsMkNBQUE7QUFISjtBQU1BO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtBQUhKO0FBTUE7RUFDSSx5QkFBQTtBQUhKO0FBTUE7RUFDSSx5QkFBQTtBQUhKO0FBTUE7RUFDSSx1QkFBQTtBQUhKO0FBTUE7RUFDSSx1QkFBQTtBQUhKO0FBTUE7RUFDSSx1QkFBQTtBQUhKO0FBTUE7RUFDSSx1QkFBQTtBQUhKO0FBTUE7RUFDSSx3QkFBQTtBQUhKIiwiZmlsZSI6InNraWxscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBrZXlmcmFtZXMgbG9hZCB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICB3aWR0aDogMCVcclxuICAgIH1cclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGxvYWQge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgd2lkdGg6IDAlXHJcbiAgICB9XHJcbn1cclxuXHJcbkAtbW96LWtleWZyYW1lcyBsb2FkIHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIHdpZHRoOiAwJVxyXG4gICAgfVxyXG59XHJcblxyXG5ALW8ta2V5ZnJhbWVzIGxvYWQge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgd2lkdGg6IDAlXHJcbiAgICB9XHJcbn1cclxuXHJcbi5iYXIge1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuXHJcbi5iYXI6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBhdHRyKGRhdGEtc2tpbGwpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JjMTMxMztcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDVweCAwIDVweCAxMHB4O1xyXG4gICAgYW5pbWF0aW9uOiBsb2FkIDJzIDBzO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGxvYWQgMnMgMHM7XHJcbiAgICAtbW96LWFuaW1hdGlvbjogbG9hZCAycyAwcztcclxuICAgIC1vLWFuaW1hdGlvbjogbG9hZCAycyAwcztcclxufVxyXG5cclxuLmJhci5mcm9udDo6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGM4MjE7XHJcbn1cclxuXHJcbi5iYXIuYmFjazo6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYmIwMDA7XHJcbn1cclxuXHJcbi5iYXIubGVhcm5pbmc6OmJlZm9yZSB7XHJcbiAgICB3aWR0aDogY2FsYygyMCUgLSAxMHB4KTtcclxufVxyXG5cclxuLmJhci5iYXNpYzo6YmVmb3JlIHtcclxuICAgIHdpZHRoOiBjYWxjKDQwJSAtIDEwcHgpO1xyXG59XHJcblxyXG4uYmFyLmludGVybWVkaWF0ZTo6YmVmb3JlIHtcclxuICAgIHdpZHRoOiBjYWxjKDYwJSAtIDEwcHgpO1xyXG59XHJcblxyXG4uYmFyLmFkdmFuY2VkOjpiZWZvcmUge1xyXG4gICAgd2lkdGg6IGNhbGMoODAlIC0gMTBweCk7XHJcbn1cclxuXHJcbi5iYXIuZXhwZXJ0OjpiZWZvcmUge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpO1xyXG59Il19 */"] });


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngneat/transloco */ "QPBi");


function FooterComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " | NES.css");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "b", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "NGULAR");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const t_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" \u00A9 ", ctx_r0.currentYear, " Daniel Gonzalez");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", t_r1("footer1"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("  ", t_r1("footer2"), " ");
} }
class FooterComponent {
    constructor() {
        this.currentYear = new Date().getFullYear();
    }
    ngOnInit() {
    }
}
FooterComponent.??fac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 11, vars: 1, consts: [[1, "bg-dark", "text-center", "text-white", "animate__animated", "animate__fadeIn", "animate__delay-2s"], [1, "mt-4", "crt"], [4, "transloco", "translocoRead"], [1, "text-center", "p-3", 2, "background-color", "rgba(0, 0, 0, 0.2)"], [1, "fot2"], [1, "nes-icon", "heart", 2, "margin-bottom", "8px"], [1, "nes-logo"], ["src", "/assets/images/angular-icon.png", "alt", "Angular", 1, "angular-logo"], [2, "padding-left", "3px"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, FooterComponent_ng_container_5_Template, 19, 3, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("translocoRead", "footer");
    } }, directives: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_1__["TranslocoDirective"]], styles: ["@media (max-width: 768px) {\n  .fot2[_ngcontent-%COMP%] {\n    font-size: 11px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQztFQUNJO0lBQ0ksMEJBQUE7RUFDUDtBQUNGIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAuZm90MiB7XHJcbiAgICAgICAgIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xyXG4gICAgIH1cclxuIH0iXX0= */"] });


/***/ }),

/***/ "gdL9":
/*!****************************************************************!*\
  !*** ./src/app/image-classifier/image-classifier.component.ts ***!
  \****************************************************************/
/*! exports provided: ImageClassifierComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageClassifierComponent", function() { return ImageClassifierComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _tensorflow_models_mobilenet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tensorflow-models/mobilenet */ "g3tL");
/* harmony import */ var _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tensorflow/tfjs */ "zhpf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../header/header.component */ "fECr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






const _c0 = ["video"];
function ImageClassifierComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](3, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](5, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](6, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function ImageClassifierComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const prediction_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate2"]("\n                ", prediction_r3.className, " - ", prediction_r3.probability, "\n            ");
} }
class ImageClassifierComponent {
    constructor() {
        this.loading = true;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('loading mobilenet model...');
            this.model = yield _tensorflow_models_mobilenet__WEBPACK_IMPORTED_MODULE_1__["load"]();
            console.log('Sucessfully loaded model');
            this.loading = false;
            setInterval(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.predictions = yield this.model.classify(this.video.nativeElement);
                console.log(this.predictions);
                yield _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_2__["nextFrame"]();
            }), 3000);
        });
    }
    ngAfterViewInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const vid = this.video.nativeElement;
            if (navigator.mediaDevices.getUserMedia) {
                navigator.mediaDevices.getUserMedia({ video: true })
                    .then((stream) => {
                    vid.srcObject = stream;
                })
                    .catch((err0r) => {
                    console.log('Something went wrong!');
                });
            }
        });
    }
}
ImageClassifierComponent.??fac = function ImageClassifierComponent_Factory(t) { return new (t || ImageClassifierComponent)(); };
ImageClassifierComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({ type: ImageClassifierComponent, selectors: [["app-image-classifier"]], viewQuery: function ImageClassifierComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????viewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????loadQuery"]()) && (ctx.video = _t.first);
    } }, decls: 17, vars: 2, consts: [[1, "crt"], [1, "d-flex", "justify-content-center", "align-items-center", "flex-column"], ["autoplay", "", "playsinline", "", "muted", "", "id", "webcam", "width", "400", "height", "400"], ["video", ""], [4, "ngIf"], [1, "list-group"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], ["src", ""], [1, "list-group-item"]], template: function ImageClassifierComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](5, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](6, "video", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](8, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](9, ImageClassifierComponent_div_9_Template, 7, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](10, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](12, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](13, ImageClassifierComponent_div_13_Template, 2, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](14, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](15, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](16, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngForOf", ctx.predictions);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbWFnZS1jbGFzc2lmaWVyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "t70Q":
/*!***************************************************************************!*\
  !*** ./src/app/blog/ngx-device-detector/ngx-device-detector.component.ts ***!
  \***************************************************************************/
/*! exports provided: NgxDeviceDetectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxDeviceDetectorComponent", function() { return NgxDeviceDetectorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../header/header.component */ "fECr");


class NgxDeviceDetectorComponent {
    constructor() { }
    ngOnInit() {
    }
}
NgxDeviceDetectorComponent.??fac = function NgxDeviceDetectorComponent_Factory(t) { return new (t || NgxDeviceDetectorComponent)(); };
NgxDeviceDetectorComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: NgxDeviceDetectorComponent, selectors: [["app-ngx-device-detector"]], decls: 68, vars: 0, consts: [[1, "crt"], [1, "container"], [1, "row", "mt-4"], [1, "mt-4"], [1, "text-center"], ["id", "carouselExampleControls", "data-bs-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "/assets/images/01.jpg", "alt", "Device Detector", 1, "d-block", "w-100"], [1, "carousel-item"], ["src", "/assets/images/02.jpg", "alt", "Device Detector", 1, "d-block", "w-100"], ["src", "/assets/images/03.jpg", "alt", "Device Detector", 1, "d-block", "w-100"], ["src", "/assets/images/04.jpg", "alt", "Device Detector", 1, "d-block", "w-100"], ["type", "button", "data-bs-target", "#carouselExampleControls", "data-bs-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "visually-hidden"], ["type", "button", "data-bs-target", "#carouselExampleControls", "data-bs-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"]], template: function NgxDeviceDetectorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "ngx-device-detector");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "An Angular 5+ powered AOT compatible device detector that helps to identify browser, os and other useful information regarding the device using the app. The processing is based on user-agent.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Use CLI install this library");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "\n                $ npm install ngx-device-detector --save\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "\n\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "\n                            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "\n                            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "\n                            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "\n                            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](44, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](50, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](58, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "\n\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"]], styles: ["code[_ngcontent-%COMP%] {\n  font-family: \"Courier New\", Courier, monospace;\n  background: black;\n  color: chartreuse;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxuZ3gtZGV2aWNlLWRldGVjdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOENBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBQ0oiLCJmaWxlIjoibmd4LWRldmljZS1kZXRlY3Rvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImNvZGUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgY29sb3I6IGNoYXJ0cmV1c2U7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blog/blog.component */ "LgBW");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");
/* harmony import */ var _cryptodata_cryptodata_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cryptodata/cryptodata.component */ "259h");
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./intro/intro.component */ "drGS");
/* harmony import */ var _labs_labs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./labs/labs.component */ "UBb+");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./skills/skills.component */ "fGbd");
/* harmony import */ var _blog_ngx_device_detector_ngx_device_detector_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blog/ngx-device-detector/ngx-device-detector.component */ "t70Q");
/* harmony import */ var _image_classifier_image_classifier_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./image-classifier/image-classifier.component */ "gdL9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");












const routes = [
    { path: '', component: _intro_intro_component__WEBPACK_IMPORTED_MODULE_5__["IntroComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_1__["AboutComponent"], pathMatch: 'full' },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"], pathMatch: 'full' },
    { path: 'skills', component: _skills_skills_component__WEBPACK_IMPORTED_MODULE_7__["SkillsComponent"], pathMatch: 'full' },
    { path: 'labs', component: _labs_labs_component__WEBPACK_IMPORTED_MODULE_6__["LabsComponent"], pathMatch: 'full' },
    { path: 'blog', component: _blog_blog_component__WEBPACK_IMPORTED_MODULE_2__["BlogComponent"], pathMatch: 'full' },
    { path: 'blog/device-detector', component: _blog_ngx_device_detector_ngx_device_detector_component__WEBPACK_IMPORTED_MODULE_8__["NgxDeviceDetectorComponent"], pathMatch: 'full' },
    { path: 'labs/crypto-data', component: _cryptodata_cryptodata_component__WEBPACK_IMPORTED_MODULE_4__["CryptodataComponent"], pathMatch: 'full' },
    { path: 'labs/image-classifier', component: _image_classifier_image_classifier_component__WEBPACK_IMPORTED_MODULE_9__["ImageClassifierComponent"], pathMatch: 'full' },
];
class AppRoutingModule {
}
AppRoutingModule.??fac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map