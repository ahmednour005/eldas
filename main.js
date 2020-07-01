(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _cms_cms_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cms/cms.component */ "./src/app/cms/cms.component.ts");
/* harmony import */ var _feature_feature_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./feature/feature.component */ "./src/app/feature/feature.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _feature_video_feature_video_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./feature-video/feature-video.component */ "./src/app/feature-video/feature-video.component.ts");
/* harmony import */ var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pricing/pricing.component */ "./src/app/pricing/pricing.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");











class AppComponent {
    constructor() {
        this.title = 'rabt';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 9, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-gallery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-cms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-feature");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-feature-video");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-footer");
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_3__["GalleryComponent"], _cms_cms_component__WEBPACK_IMPORTED_MODULE_4__["CmsComponent"], _feature_feature_component__WEBPACK_IMPORTED_MODULE_5__["FeatureComponent"], _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_6__["PortfolioComponent"], _feature_video_feature_video_component__WEBPACK_IMPORTED_MODULE_7__["FeatureVideoComponent"], _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_8__["PricingComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _cms_cms_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cms/cms.component */ "./src/app/cms/cms.component.ts");
/* harmony import */ var _feature_feature_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./feature/feature.component */ "./src/app/feature/feature.component.ts");
/* harmony import */ var _feature_video_feature_video_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./feature-video/feature-video.component */ "./src/app/feature-video/feature-video.component.ts");
/* harmony import */ var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pricing/pricing.component */ "./src/app/pricing/pricing.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
        _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_6__["GalleryComponent"],
        _cms_cms_component__WEBPACK_IMPORTED_MODULE_7__["CmsComponent"],
        _feature_feature_component__WEBPACK_IMPORTED_MODULE_8__["FeatureComponent"],
        _feature_video_feature_video_component__WEBPACK_IMPORTED_MODULE_9__["FeatureVideoComponent"],
        _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_10__["PricingComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
        _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_12__["PortfolioComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                    _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_6__["GalleryComponent"],
                    _cms_cms_component__WEBPACK_IMPORTED_MODULE_7__["CmsComponent"],
                    _feature_feature_component__WEBPACK_IMPORTED_MODULE_8__["FeatureComponent"],
                    _feature_video_feature_video_component__WEBPACK_IMPORTED_MODULE_9__["FeatureVideoComponent"],
                    _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_10__["PricingComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                    _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_12__["PortfolioComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/cms/cms.component.ts":
/*!**************************************!*\
  !*** ./src/app/cms/cms.component.ts ***!
  \**************************************/
/*! exports provided: CmsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CmsComponent", function() { return CmsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CmsComponent {
    constructor() { }
    ngOnInit() {
    }
}
CmsComponent.ɵfac = function CmsComponent_Factory(t) { return new (t || CmsComponent)(); };
CmsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CmsComponent, selectors: [["app-cms"]], decls: 33, vars: 0, consts: [[1, "cms", "text-center"], [1, "cms-header"], ["src", "../../assets/img/Ellipse11Kopie2.png", "alt", "", 1, "img1"], ["src", "../../assets/img/Ellipse11Kopi2.png", "alt", "", 1, "img2"], ["src", "../../assets/img/stars.png", "alt", "", 1, "img3"], ["src", "../../assets/img/stars.png", "alt", "", 1, "img31"], [1, "cms-title"], [1, "cms-body"], [1, "container"], [1, "row"], [1, "col-lg-6", "col-md-6"], [1, "item"], [1, "icon"], ["src", "../../assets/img/Form 22.png", "alt", ""], [1, "icon", "icon2"], ["src", "../../assets/img/Form 23.png", "alt", ""], ["src", "../../assets/img/022.png", "alt", "", 1, "number"]], template: function CmsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "call to action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Start building your website with a modern CMS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Userfriendly Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero erol delenit augue duis dolore te feugait nulla facilisi.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Customer Live Statistics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero erol delenit augue duis dolore te feugait nulla facilisi.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".cms[_ngcontent-%COMP%]{\r\n    margin-top: 80px;\r\n}\r\n.cms[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{\r\n    padding: 0 95px;\r\n}\r\n.cms[_ngcontent-%COMP%]   .cms-header[_ngcontent-%COMP%] {\r\n    background: linear-gradient(100deg, rgba(41,117,243,1) 0%, rgba(46,242,212,1) 100%);\r\n    height: 380px;\r\n    width: 100%;\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n.cms[_ngcontent-%COMP%]   .cms-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n}\r\n.cms[_ngcontent-%COMP%]   .cms-header[_ngcontent-%COMP%]   .img2[_ngcontent-%COMP%]{\r\n    width: 80%;\r\n    top: -80px;\r\n    right: -130px;\r\n}\r\n.cms[_ngcontent-%COMP%]   .cms-header[_ngcontent-%COMP%]   .img1[_ngcontent-%COMP%]{\r\n    width: 80%;\r\n    top: -230px;\r\n    left: -435px;\r\n}\r\n.cms[_ngcontent-%COMP%]   .cms-header[_ngcontent-%COMP%]   .img3[_ngcontent-%COMP%]{\r\n    width: 40%;\r\n    left: 0;\r\n    transform: scale(3);\r\n}\r\n.cms[_ngcontent-%COMP%]   .cms-header[_ngcontent-%COMP%]   .img31[_ngcontent-%COMP%]{\r\n    width: 40%;\r\n    right: -110px;\r\n    transform: scale(3);\r\n}\r\n.cms[_ngcontent-%COMP%]   .cms-header[_ngcontent-%COMP%]   .cms-title[_ngcontent-%COMP%]{\r\n    z-index: 10;\r\n    position: absolute;\r\n    width: 100%;\r\n    margin-left: -15px;\r\n    padding: 5px;\r\n}\r\n.cms[_ngcontent-%COMP%]   .cms-header[_ngcontent-%COMP%]   .cms-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    color: #d5e9f6;\r\n    text-transform: uppercase;\r\n    font-size: 14px;\r\n    display: block;\r\n    margin: 60px 0 0;\r\n    letter-spacing: 2px;\r\n}\r\n.cms[_ngcontent-%COMP%]   .cms-header[_ngcontent-%COMP%]   .cms-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    color: #d5e9f6;\r\n    width: 74%;\r\n    margin: 15px auto;\r\n}\r\n.cms[_ngcontent-%COMP%]   .cms-header[_ngcontent-%COMP%]   .cms-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-size: 47px;\r\n    font-weight: 700;\r\n    color: #FFF;\r\n}\r\n.cms[_ngcontent-%COMP%]   .cms-body[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{\r\nmargin: 0;\r\n    background: #FFF;\r\n    padding: 25px;\r\n    box-shadow: 0 0 20px rgba(0,0,0,0.3);\r\n    margin-top: -135px;\r\n    text-align: left;\r\n    position: relative;\r\n}\r\n.cms[_ngcontent-%COMP%]   .cms-body[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{\r\n    background: linear-gradient(100deg, rgba(254,55,71,1) 0%, rgba(255,79,36,1) 100%);\r\n    width: 90px;\r\n    height: 90px;\r\n    border-radius: 50%;\r\n    line-height: 81px;\r\n    text-align: center;\r\n    position: relative;\r\n    z-index: 99;\r\n }\r\n.cms[_ngcontent-%COMP%]   .cms-body[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    color:#646464;\r\n    font-size: 14px;\r\n    margin-top: 10px;\r\n    position: relative;\r\n    z-index: 99;\r\n }\r\n.cms[_ngcontent-%COMP%]   .cms-body[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\r\n font-size: 22px;\r\n    margin-top: 12px;\r\n    position: relative;\r\n    z-index: 99;\r\n }\r\n.cms[_ngcontent-%COMP%]   .cms-body[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{\r\n    top: 0;\r\n    z-index: 0;\r\n    position: absolute;\r\n }\r\n@media (max-width:1200px){\r\n    .cms[_ngcontent-%COMP%]   .cms-header[_ngcontent-%COMP%]   .cms-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n        font-size: 40px;\r\n    }\r\n }\r\n@media (max-width:992px){\r\n     .cms[_ngcontent-%COMP%]   .cms-header[_ngcontent-%COMP%]{\r\n        height: 425px;\r\n        padding: 15px;\r\n     }\r\n    .cms[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{\r\n        padding: 0;\r\n    }\r\n }\r\n@media (max-width:768px){\r\n    .cms[_ngcontent-%COMP%]   .cms-header[_ngcontent-%COMP%]{\r\n       height: 425px;\r\n       padding: 15px;\r\n    }\r\n   .cms[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{\r\n       padding: 0 15px ;\r\n   }\r\n   .cms[_ngcontent-%COMP%]   .cms-header[_ngcontent-%COMP%]   .cms-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-size: 35px;\r\n}\r\n.cms[_ngcontent-%COMP%]   .cms-header[_ngcontent-%COMP%]   .cms-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    font-size: 12px;\r\n    display: block;\r\n    margin: 10px 0 0;\r\n    letter-spacing: 2px;\r\n}\r\n.cms[_ngcontent-%COMP%]   .cms-body[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{\r\n    width: 70px;\r\n    height: 70px;\r\n    line-height: 68px;\r\n\r\n}\r\n.cms[_ngcontent-%COMP%]   .cms-body[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 40px;\r\n}\r\n.cms[_ngcontent-%COMP%]   .cms-body[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .icon2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\nwidth: 30px;\r\n }\r\n  \r\n}\r\n@media (max-width:460px){\r\n    .cms[_ngcontent-%COMP%]   .cms-header[_ngcontent-%COMP%]{\r\n        height: 500px;\r\n     }\r\n}\r\n@media (max-width:340px){\r\n    .cms[_ngcontent-%COMP%]   .cms-header[_ngcontent-%COMP%]{\r\n        height: 520px;\r\n     }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY21zL2Ntcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFHSSxtRkFBbUY7SUFDbkYsYUFBYTtJQUNiLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFVBQVU7SUFDVixVQUFVO0lBQ1YsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsT0FBTztJQUNQLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksY0FBYztJQUNkLFVBQVU7SUFDVixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmO0FBRUE7QUFDQSxTQUFTO0lBQ0wsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFDQztJQUdHLGlGQUFpRjtJQUNqRixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixXQUFXO0NBQ2Q7QUFDQTtJQUNHLGFBQWE7SUFDYixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixXQUFXO0NBQ2Q7QUFDQTtDQUNBLGVBQWU7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFdBQVc7Q0FDZDtBQUNBO0lBQ0csTUFBTTtJQUNOLFVBQVU7SUFDVixrQkFBa0I7Q0FDckI7QUFFQTtJQUNHO1FBQ0ksZUFBZTtJQUNuQjtDQUNIO0FBRUE7S0FDSTtRQUNHLGFBQWE7UUFDYixhQUFhO0tBQ2hCO0lBQ0Q7UUFDSSxVQUFVO0lBQ2Q7Q0FDSDtBQUVBO0lBQ0c7T0FDRyxhQUFhO09BQ2IsYUFBYTtJQUNoQjtHQUNEO09BQ0ksZ0JBQWdCO0dBQ3BCO0dBQ0E7SUFDQyxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCOztBQUVyQjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7QUFDQSxXQUFXO0NBQ1Y7O0FBRUQ7QUFDQTtJQUNJO1FBQ0ksYUFBYTtLQUNoQjtBQUNMO0FBQ0E7SUFDSTtRQUNJLGFBQWE7S0FDaEI7QUFDTCIsImZpbGUiOiJzcmMvYXBwL2Ntcy9jbXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbXN7XHJcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xyXG59XHJcbi5jbXMgLmNvbnRhaW5lcntcclxuICAgIHBhZGRpbmc6IDAgOTVweDtcclxufVxyXG4uY21zIC5jbXMtaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDEwMGRlZywgcmdiYSg0MSwxMTcsMjQzLDEpIDAlLCByZ2JhKDQ2LDI0MiwyMTIsMSkgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgxMDBkZWcsIHJnYmEoNDEsMTE3LDI0MywxKSAwJSwgcmdiYSg0NiwyNDIsMjEyLDEpIDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEwMGRlZywgcmdiYSg0MSwxMTcsMjQzLDEpIDAlLCByZ2JhKDQ2LDI0MiwyMTIsMSkgMTAwJSk7XHJcbiAgICBoZWlnaHQ6IDM4MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5jbXMgLmNtcy1oZWFkZXIgaW1ne1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5jbXMgLmNtcy1oZWFkZXIgLmltZzJ7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgdG9wOiAtODBweDtcclxuICAgIHJpZ2h0OiAtMTMwcHg7XHJcbn1cclxuLmNtcyAuY21zLWhlYWRlciAuaW1nMXtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICB0b3A6IC0yMzBweDtcclxuICAgIGxlZnQ6IC00MzVweDtcclxufVxyXG4uY21zIC5jbXMtaGVhZGVyIC5pbWcze1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDMpO1xyXG59XHJcbi5jbXMgLmNtcy1oZWFkZXIgLmltZzMxe1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIHJpZ2h0OiAtMTEwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDMpO1xyXG59XHJcblxyXG4uY21zIC5jbXMtaGVhZGVyIC5jbXMtdGl0bGV7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcbi5jbXMgLmNtcy1oZWFkZXIgLmNtcy10aXRsZSBzcGFue1xyXG4gICAgY29sb3I6ICNkNWU5ZjY7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDYwcHggMCAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxufVxyXG4uY21zIC5jbXMtaGVhZGVyIC5jbXMtdGl0bGUgcHtcclxuICAgIGNvbG9yOiAjZDVlOWY2O1xyXG4gICAgd2lkdGg6IDc0JTtcclxuICAgIG1hcmdpbjogMTVweCBhdXRvO1xyXG59XHJcbi5jbXMgLmNtcy1oZWFkZXIgLmNtcy10aXRsZSBoMXtcclxuICAgIGZvbnQtc2l6ZTogNDdweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxufVxyXG5cclxuLmNtcyAuY21zLWJvZHkgLnJvd3tcclxubWFyZ2luOiAwO1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRjtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTM1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbiAuY21zIC5jbXMtYm9keSAuaXRlbSAuaWNvbntcclxuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDEwMGRlZywgcmdiYSgyNTQsNTUsNzEsMSkgMCUsIHJnYmEoMjU1LDc5LDM2LDEpIDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMTAwZGVnLCByZ2JhKDI1NCw1NSw3MSwxKSAwJSwgcmdiYSgyNTUsNzksMzYsMSkgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTAwZGVnLCByZ2JhKDI1NCw1NSw3MSwxKSAwJSwgcmdiYSgyNTUsNzksMzYsMSkgMTAwJSk7XHJcbiAgICB3aWR0aDogOTBweDtcclxuICAgIGhlaWdodDogOTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGxpbmUtaGVpZ2h0OiA4MXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogOTk7XHJcbiB9XHJcbiAuY21zIC5jbXMtYm9keSAuaXRlbSBwe1xyXG4gICAgY29sb3I6IzY0NjQ2NDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiA5OTtcclxuIH1cclxuIC5jbXMgLmNtcy1ib2R5IC5pdGVtIGg0e1xyXG4gZm9udC1zaXplOiAyMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDk5O1xyXG4gfVxyXG4gLmNtcyAuY21zLWJvZHkgLml0ZW0gLm51bWJlcntcclxuICAgIHRvcDogMDtcclxuICAgIHotaW5kZXg6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiB9XHJcblxyXG4gQG1lZGlhIChtYXgtd2lkdGg6MTIwMHB4KXtcclxuICAgIC5jbXMgLmNtcy1oZWFkZXIgLmNtcy10aXRsZSBoMXtcclxuICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICB9XHJcbiB9XHJcbiBcclxuIEBtZWRpYSAobWF4LXdpZHRoOjk5MnB4KXtcclxuICAgICAuY21zIC5jbXMtaGVhZGVye1xyXG4gICAgICAgIGhlaWdodDogNDI1cHg7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICB9XHJcbiAgICAuY21zIC5jb250YWluZXJ7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuIH1cclxuICBcclxuIEBtZWRpYSAobWF4LXdpZHRoOjc2OHB4KXtcclxuICAgIC5jbXMgLmNtcy1oZWFkZXJ7XHJcbiAgICAgICBoZWlnaHQ6IDQyNXB4O1xyXG4gICAgICAgcGFkZGluZzogMTVweDtcclxuICAgIH1cclxuICAgLmNtcyAuY29udGFpbmVye1xyXG4gICAgICAgcGFkZGluZzogMCAxNXB4IDtcclxuICAgfVxyXG4gICAuY21zIC5jbXMtaGVhZGVyIC5jbXMtdGl0bGUgaDF7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbn1cclxuLmNtcyAuY21zLWhlYWRlciAuY21zLXRpdGxlIHNwYW57XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMTBweCAwIDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG59XHJcbi5jbXMgLmNtcy1ib2R5IC5pdGVtIC5pY29ue1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNjhweDtcclxuXHJcbn1cclxuLmNtcyAuY21zLWJvZHkgLml0ZW0gLmljb24gaW1ne1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbn1cclxuLmNtcyAuY21zLWJvZHkgLml0ZW0gLmljb24yIGltZ3tcclxud2lkdGg6IDMwcHg7XHJcbiB9XHJcbiAgXHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6NDYwcHgpe1xyXG4gICAgLmNtcyAuY21zLWhlYWRlcntcclxuICAgICAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDozNDBweCl7XHJcbiAgICAuY21zIC5jbXMtaGVhZGVye1xyXG4gICAgICAgIGhlaWdodDogNTIwcHg7XHJcbiAgICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CmsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cms',
                templateUrl: './cms.component.html',
                styleUrls: ['./cms.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/feature-video/feature-video.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/feature-video/feature-video.component.ts ***!
  \**********************************************************/
/*! exports provided: FeatureVideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureVideoComponent", function() { return FeatureVideoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);



class FeatureVideoComponent {
    constructor() { }
    ngOnInit() {
        aos__WEBPACK_IMPORTED_MODULE_1___default.a.init();
        $('#modal1').on('hidden.bs.modal', function (e) {
            $('#modal1 iframe').attr("src", $("#modal1 iframe").attr("src"));
        });
    }
}
FeatureVideoComponent.ɵfac = function FeatureVideoComponent_Factory(t) { return new (t || FeatureVideoComponent)(); };
FeatureVideoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FeatureVideoComponent, selectors: [["app-feature-video"]], decls: 40, vars: 0, consts: [[1, "feature-video"], [1, "container"], [1, "row"], [1, "col-lg-6", "col-md-6"], [1, "left-side"], ["data-toggle", "modal", "data-target", "#modal1", 1, "btn"], [1, "video"], ["src", "../../assets/img/pattern(1).png", "alt", "", 1, "img1"], ["src", "../../assets/img/PATTERN Kopie.png", "alt", "", 1, "img2"], ["data-aos", "flip-right", "data-aos-duration", "1500"], [1, "overlay"], ["src", "https://mdbootstrap.com/img/screens/yt/screen-video-1.jpg", "alt", "video", 1, "main-img"], ["data-toggle", "modal", "data-target", "#modal1", 1, "icon"], [1, "fa", "fa-play"], ["id", "modal1", "tabindex", "-1", "role", "dialog", "aria-labelledby", "myModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-body", "mb-0", "p-0"], [1, "embed-responsive", "embed-responsive-16by9", "z-depth-1-half"], ["src", "https://www.youtube.com/embed/A3PDXmYoF5U", "allowfullscreen", "", 1, "embed-responsive-item"], [1, "modal-footer", "justify-content-center"], [1, "mr-4"], ["type", "button", 1, "btn-floating", "btn-sm", "btn-ins"], [1, "fab", "fa-linkedin-in"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-outline-primary", "btn-rounded", "btn-md", "ml-4"]], template: function FeatureVideoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "WHAT WE DO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "We help clients ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " to get more out of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " business");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "WATCH VIDEO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "iframe", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Spread the word!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".feature-video[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{\r\n    padding: 0 95px;\r\n}\r\n.feature-video[_ngcontent-%COMP%] {\r\n    overflow: hidden;\r\n}\r\n.feature-video[_ngcontent-%COMP%] {\r\n    padding: 50px 0;\r\n}\r\n.video[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n.video[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    top: 47%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    color: #FFF;\r\n    width: 80px;\r\n    height: 80px;\r\n    font-size: 24px;\r\n    background: #fe531d;\r\n    text-align: center;\r\n    line-height: 79px;\r\n    border-radius: 50%;\r\n    padding-left: 5px;\r\n    cursor: pointer;\r\n}\r\n.video[_ngcontent-%COMP%]   .img1[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    bottom: -71px;\r\n    z-index: -1;\r\n    width: 220px;\r\n    left: 340px;\r\n}\r\n.video[_ngcontent-%COMP%]   .img2[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    width: 130px;\r\n    top: -35px;\r\n    left: -43px;\r\n}\r\n.video[_ngcontent-%COMP%]   .main-img[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 300px;\r\n}\r\n.video[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]{\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(254, 83, 29, 0.37);\r\n}\r\n.video[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    background-color: #fe531d;\r\n    color:#FFF;\r\n    border-color: #fe531d;\r\n    transition: 0.4s;\r\n}\r\n.video[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{\r\n    color:#fe531d;\r\n    background: transparent;\r\n}\r\n.video[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus{\r\n    box-shadow: none;\r\n    outline: 0;\r\n}\r\n.btn-outline-primary[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-outline-primary[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-outline-primary.dropdown-toggle[_ngcontent-%COMP%]{\r\n    background-color: #fe531d;\r\n    border-color: #fe531d;\r\n    outline: 0;\r\n    box-shadow: none;\r\n}\r\n.feature-video[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    display: block;\r\n    color: #a2adb4;\r\n    font-size: 14px;\r\n    letter-spacing: 2px;\r\n    text-transform: uppercase;\r\n}\r\n.feature-video[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\nfont-size: 45px;\r\nfont-weight: 800;\r\nline-height: 45px;\r\n}\r\n.feature-video[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    color:#646464;\r\n    font-size: 14px;\r\n    margin-top: 10px;\r\n}\r\n.feature-video[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    background: #1f7ee8;\r\n    border: 1px solid #1f7ee8;\r\n    padding: 10px 29px;\r\n    color: #FFF;\r\n    font-weight: 600;\r\n    font-size: 13px;\r\n    border-radius: 30px;\r\n    transition: 0.4s;\r\n    margin-bottom: 7px;\r\n}\r\n.feature-video[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{\r\n    background:transparent;\r\n    color:#1f7ee8\r\n}\r\n.feature-video[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus{\r\n    outline: 0;\r\n    box-shadow: none;\r\n}\r\n@media (max-width:1200px){\r\n    .video[_ngcontent-%COMP%]   .img1[_ngcontent-%COMP%]{\r\n        left: 230px;\r\n    }\r\n}\r\n@media (max-width:992px){\r\n    .feature-video[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{\r\n        padding: 0 15px;\r\n    }\r\n    .video[_ngcontent-%COMP%]   .img1[_ngcontent-%COMP%]{\r\n        left: 130px;\r\n    }\r\n    .feature-video[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]{\r\n        margin-bottom: 60px;\r\n    }\r\n    .feature-video[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n        font-size: 35px;\r\n        line-height: 40px;\r\n    }\r\n    .video[_ngcontent-%COMP%]   .img2[_ngcontent-%COMP%]{\r\n        left:-25px;\r\n        z-index: -1;\r\n    }\r\n}\r\n@media (max-width:576px){\r\n    .feature-video[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n        font-size: 28px;\r\n        line-height: 36px;\r\n    }\r\n        .video[_ngcontent-%COMP%]   .img1[_ngcontent-%COMP%]{\r\n            left:auto;\r\n            right: 0;\r\n        }\r\n        .video[_ngcontent-%COMP%]   .img2[_ngcontent-%COMP%]{\r\n            left:0;\r\n            z-index: -1;\r\n        }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZS12aWRlby9mZWF0dXJlLXZpZGVvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0lBQ2hDLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osVUFBVTtJQUNWLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztJQUNYLGFBQWE7QUFDakI7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLHlDQUF5QztBQUM3QztBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFVBQVU7SUFDVixxQkFBcUI7SUFDckIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtBQUNkO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0lBQ2QsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQix5QkFBeUI7QUFDN0I7QUFFQTtBQUNBLGVBQWU7QUFDZixnQkFBZ0I7QUFDaEIsaUJBQWlCO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QjtBQUNKO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSTtRQUNJLFdBQVc7SUFDZjtBQUNKO0FBQ0E7SUFDSTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsV0FBVztJQUNmO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksZUFBZTtRQUNmLGlCQUFpQjtJQUNyQjtRQUNJO1lBQ0ksU0FBUztZQUNULFFBQVE7UUFDWjtRQUNBO1lBQ0ksTUFBTTtZQUNOLFdBQVc7UUFDZjtBQUNSIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZS12aWRlby9mZWF0dXJlLXZpZGVvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmVhdHVyZS12aWRlbyAuY29udGFpbmVye1xyXG4gICAgcGFkZGluZzogMCA5NXB4O1xyXG59XHJcbi5mZWF0dXJlLXZpZGVvIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLmZlYXR1cmUtdmlkZW8ge1xyXG4gICAgcGFkZGluZzogNTBweCAwO1xyXG59XHJcbi52aWRlbyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnZpZGVvIC5pY29ue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0NyU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmU1MzFkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDc5cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4udmlkZW8gLmltZzF7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IC03MXB4O1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICB3aWR0aDogMjIwcHg7XHJcbiAgICBsZWZ0OiAzNDBweDtcclxufVxyXG4udmlkZW8gLmltZzJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTMwcHg7XHJcbiAgICB0b3A6IC0zNXB4O1xyXG4gICAgbGVmdDogLTQzcHg7XHJcbn1cclxuLnZpZGVvIC5tYWluLWltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxufVxyXG4udmlkZW8gYSAub3ZlcmxheXtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTQsIDgzLCAyOSwgMC4zNyk7XHJcbn1cclxuLnZpZGVvIGJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZTUzMWQ7XHJcbiAgICBjb2xvcjojRkZGO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmU1MzFkO1xyXG4gICAgdHJhbnNpdGlvbjogMC40cztcclxufVxyXG4udmlkZW8gYnV0dG9uOmhvdmVye1xyXG4gICAgY29sb3I6I2ZlNTMxZDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcbi52aWRlbyBidXR0b246Zm9jdXN7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgb3V0bGluZTogMDtcclxufVxyXG4uYnRuLW91dGxpbmUtcHJpbWFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUsIC5idG4tb3V0bGluZS1wcmltYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZSwgLnNob3cgPiAuYnRuLW91dGxpbmUtcHJpbWFyeS5kcm9wZG93bi10b2dnbGV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmU1MzFkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmU1MzFkO1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5mZWF0dXJlLXZpZGVvIC5sZWZ0LXNpZGUgc3BhbntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6ICNhMmFkYjQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLmZlYXR1cmUtdmlkZW8gLmxlZnQtc2lkZSBoMXtcclxuZm9udC1zaXplOiA0NXB4O1xyXG5mb250LXdlaWdodDogODAwO1xyXG5saW5lLWhlaWdodDogNDVweDtcclxufVxyXG4uZmVhdHVyZS12aWRlbyAubGVmdC1zaWRlIHB7XHJcbiAgICBjb2xvcjojNjQ2NDY0O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmZlYXR1cmUtdmlkZW8gLmxlZnQtc2lkZSBidXR0b257XHJcbiAgICBiYWNrZ3JvdW5kOiAjMWY3ZWU4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzFmN2VlODtcclxuICAgIHBhZGRpbmc6IDEwcHggMjlweDtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xyXG59XHJcbi5mZWF0dXJlLXZpZGVvIC5sZWZ0LXNpZGUgYnV0dG9uOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiMxZjdlZThcclxufVxyXG4uZmVhdHVyZS12aWRlbyAubGVmdC1zaWRlIGJ1dHRvbjpmb2N1c3tcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOjEyMDBweCl7XHJcbiAgICAudmlkZW8gLmltZzF7XHJcbiAgICAgICAgbGVmdDogMjMwcHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6OTkycHgpe1xyXG4gICAgLmZlYXR1cmUtdmlkZW8gLmNvbnRhaW5lcntcclxuICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICB9XHJcbiAgICAudmlkZW8gLmltZzF7XHJcbiAgICAgICAgbGVmdDogMTMwcHg7XHJcbiAgICB9XHJcbiAgICAuZmVhdHVyZS12aWRlbyAubGVmdC1zaWRle1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XHJcbiAgICB9XHJcbiAgICAuZmVhdHVyZS12aWRlbyAubGVmdC1zaWRlIGgxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgIH1cclxuICAgIC52aWRlbyAuaW1nMntcclxuICAgICAgICBsZWZ0Oi0yNXB4O1xyXG4gICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOjU3NnB4KXtcclxuICAgIC5mZWF0dXJlLXZpZGVvIC5sZWZ0LXNpZGUgaDF7XHJcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xyXG4gICAgfVxyXG4gICAgICAgIC52aWRlbyAuaW1nMXtcclxuICAgICAgICAgICAgbGVmdDphdXRvO1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnZpZGVvIC5pbWcye1xyXG4gICAgICAgICAgICBsZWZ0OjA7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeatureVideoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-feature-video',
                templateUrl: './feature-video.component.html',
                styleUrls: ['./feature-video.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/feature/feature.component.ts":
/*!**********************************************!*\
  !*** ./src/app/feature/feature.component.ts ***!
  \**********************************************/
/*! exports provided: FeatureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureComponent", function() { return FeatureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);



class FeatureComponent {
    constructor() { }
    ngOnInit() {
        aos__WEBPACK_IMPORTED_MODULE_1___default.a.init();
    }
}
FeatureComponent.ɵfac = function FeatureComponent_Factory(t) { return new (t || FeatureComponent)(); };
FeatureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FeatureComponent, selectors: [["app-feature"]], decls: 55, vars: 0, consts: [[1, "feature"], [1, "container"], [1, "row", "feature-item"], [1, "col-lg-4", "col-md-4", "col-sm-6"], ["data-aos", "zoom-in", "data-aos-duration", "800", 1, "item", "item1"], [1, "icon"], ["src", "../../assets/img/Form 15.png", "alt", ""], ["data-aos", "zoom-in", "data-aos-duration", "800", "data-aos-delay", "300", 1, "item", "item2"], ["src", "../../assets/img/Form 5.png", "alt", ""], ["data-aos", "zoom-in", "data-aos-duration", "800", "data-aos-delay", "600", 1, "item", "item3"], ["src", "../../assets/img/Form 7.png", "alt", ""], ["data-aos", "zoom-in", "data-aos-duration", "800", "data-aos-delay", "900", 1, "item", "item4"], ["src", "../../assets/img/Form 8.png", "alt", ""], ["data-aos", "zoom-in", "data-aos-duration", "800", "data-aos-delay", "1200", 1, "col-lg-4", "col-md-4", "col-sm-6"], [1, "item", "item5"], ["src", "../../assets/img/Form 9.png", "alt", ""], ["data-aos", "zoom-in", "data-aos-duration", "800", "data-aos-delay", "1500", 1, "col-lg-4", "col-md-4", "col-sm-6"], [1, "item", "item6"], ["src", "../../assets/img/Form 10.png", "alt", ""]], template: function FeatureComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "features and services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "How we satisfy our clients");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Dashboard Features");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolor erat.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Userfriendly Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolor erat.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Colour Shemes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolor erat.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Different Layouts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolor erat.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Vector Based Graphics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolor erat.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Pixel Perfect Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolor erat.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".feature[_ngcontent-%COMP%] {\r\n    padding: 50px 0 50px 0;\r\n    overflow: hidden;\r\n}\r\n.feature[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{\r\n    padding: 0 95px;\r\n}\r\n.feature[_ngcontent-%COMP%]   .item1[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{\r\n    background: #d2f2fd;\r\n}\r\n.feature[_ngcontent-%COMP%]   .item2[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{\r\n    background: #c7f8fc;\r\n}\r\n.feature[_ngcontent-%COMP%]   .item3[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{\r\n    background: #f9d1c5;\r\n    line-height: 58px;\r\n    padding-left: 5px;\r\n}\r\n.feature[_ngcontent-%COMP%]   .item4[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{\r\n    background: #e4ccfe;\r\n}\r\n.feature[_ngcontent-%COMP%]   .item5[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{\r\n    background: #a6f3c7;\r\n}\r\n.feature[_ngcontent-%COMP%]   .item6[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{\r\n    background: #ffc0d3;\r\n}\r\n.feature[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{\r\n    width: 65px;\r\n    height: 65px;\r\n    border-radius: 50%;\r\n    line-height: 61px;\r\n    text-align: center;\r\n    position: relative;\r\n}\r\n.feature[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 29px;\r\n}\r\n.feature[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\r\n    font-size: 19px;\r\n    font-weight: 700;\r\n    margin-top: 15px;\r\n}\r\n.feature[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    color:#646464;\r\n    font-size: 14px;\r\n    margin-top: 10px;\r\n}\r\n.feature[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    display: block;\r\n    margin-top: 75px;\r\n    color: #a2adb4;\r\n    font-size: 14px;\r\n    letter-spacing: 2px;\r\n    text-transform: uppercase;\r\n    text-align: center;\r\n}\r\n.feature[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    font-size: 48px;\r\n    font-weight: 800;\r\n    margin-bottom: 55px;\r\n}\r\n@media (max-width:992px){\r\n    .feature[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{\r\n        padding:0 15px;\r\n    }\r\n}\r\n@media (max-width:768px){\r\n    .feature[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-size: 35px;\r\n    }\r\n    .feature[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n        font-size: 12px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZS9mZWF0dXJlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJO1FBQ0ksY0FBYztJQUNsQjtBQUNKO0FBQ0E7SUFDSTtJQUNBLGVBQWU7SUFDZjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZS9mZWF0dXJlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmVhdHVyZSB7XHJcbiAgICBwYWRkaW5nOiA1MHB4IDAgNTBweCAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uZmVhdHVyZSAuY29udGFpbmVye1xyXG4gICAgcGFkZGluZzogMCA5NXB4O1xyXG59XHJcblxyXG4uZmVhdHVyZSAgLml0ZW0xIC5pY29ue1xyXG4gICAgYmFja2dyb3VuZDogI2QyZjJmZDtcclxufVxyXG4uZmVhdHVyZSAgLml0ZW0yIC5pY29ue1xyXG4gICAgYmFja2dyb3VuZDogI2M3ZjhmYztcclxufVxyXG4uZmVhdHVyZSAgLml0ZW0zIC5pY29ue1xyXG4gICAgYmFja2dyb3VuZDogI2Y5ZDFjNTtcclxuICAgIGxpbmUtaGVpZ2h0OiA1OHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5mZWF0dXJlICAuaXRlbTQgLmljb257XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTRjY2ZlO1xyXG59XHJcbi5mZWF0dXJlICAuaXRlbTUgLmljb257XHJcbiAgICBiYWNrZ3JvdW5kOiAjYTZmM2M3O1xyXG59XHJcbi5mZWF0dXJlICAuaXRlbTYgLmljb257XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZjMGQzO1xyXG59XHJcbi5mZWF0dXJlICAuaXRlbSAuaWNvbntcclxuICAgIHdpZHRoOiA2NXB4O1xyXG4gICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDYxcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmZlYXR1cmUgIC5pdGVtIC5pY29uIGltZ3tcclxuICAgIHdpZHRoOiAyOXB4O1xyXG59XHJcbi5mZWF0dXJlICAuaXRlbSBoNHtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcbi5mZWF0dXJlICAuaXRlbSBwe1xyXG4gICAgY29sb3I6IzY0NjQ2NDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuLmZlYXR1cmUgc3BhbntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogNzVweDtcclxuICAgIGNvbG9yOiAjYTJhZGI0O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmZlYXR1cmUgaDF7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDQ4cHg7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTVweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6OTkycHgpe1xyXG4gICAgLmZlYXR1cmUgLmNvbnRhaW5lcntcclxuICAgICAgICBwYWRkaW5nOjAgMTVweDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDo3NjhweCl7XHJcbiAgICAuZmVhdHVyZSBoMXtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIH1cclxuICAgIC5mZWF0dXJlIHNwYW57XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeatureComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-feature',
                templateUrl: './feature.component.html',
                styleUrls: ['./feature.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 77, vars: 0, consts: [[1, "container"], [1, "barnds"], [1, "item"], ["src", "../../assets/img/01.png", "alt", ""], ["src", "../../assets/img/02.png", "alt", "", 1, "img-b"], ["src", "../../assets/img/03 (1).png", "alt", ""], ["src", "../../assets/img/04.png", "alt", ""], ["src", "../../assets/img/05.png", "alt", ""], [1, "row"], [1, "col-lg-2", "col-md-2", "col-sm-4", "col-6"], [1, "logo"], ["src", "../../assets/img/logo.png", "alt", ""], [1, "category"], [1, "col-lg-4", "col-md-4", "col-sm-8", "col-12"], [1, "fa", "fa-map-marker"], [1, "fa", "fa-phone"], [1, "fa", "fa-at"], [1, "copyright"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Our Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Careers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "RESOURCES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Press Kit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Live Chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "ABOUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Features");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " How It Works");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Plans & Pricings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " get in touch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " 157 5th Avenue, 5471 NYC ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " (805) 123 456 789 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "(805) 223 456 978 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " live-support@email.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Copyright 2018 \u00A9 KL-Webmedia | All Rights Reserved");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{\r\n    padding: 0 95px;\r\n}\r\nfooter[_ngcontent-%COMP%]   .barnds[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    padding: 40px 0;\r\n    position: relative;\r\n}\r\nfooter[_ngcontent-%COMP%]   .barnds[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{\r\n    width: 20%;\r\n    float: left;\r\n    line-height: 150px;\r\n    height: 150px;\r\n    text-align: center;\r\n    transition: 0.3s;\r\n}\r\nfooter[_ngcontent-%COMP%]   .barnds[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 65%;\r\n}\r\nfooter[_ngcontent-%COMP%]   .barnds[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   img.img-b[_ngcontent-%COMP%]{\r\n    width: 50%;\r\n}\r\nfooter[_ngcontent-%COMP%]   .barnds[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover{\r\n    opacity: 0.5;\r\n}\r\nfooter[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{\r\n    margin-top: 140px;\r\n    height: 2px;\r\n    width: 100%;\r\n    background: #f3fbfd;\r\n}\r\nfooter[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{\r\nmargin-top: 20px;\r\n}\r\nfooter[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 85%;\r\n}\r\nfooter[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]{\r\n    margin-top: 25px;\r\n}\r\nfooter[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\r\n    font-size: 16px;\r\n    text-transform: uppercase;\r\n    font-weight: 800;\r\n}\r\nfooter[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n    list-style: none;\r\n    padding: 0;\r\n    margin-top: 20px;\r\n}\r\nfooter[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    color: #646464;\r\n    font-size: 14px;\r\n    font-weight: 600;\r\n    margin-top: 10px;\r\n}\r\nfooter[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n    color: #1f7ee8;\r\n    box-shadow: 0 0 6px rgba(0,0,0,0.3);\r\n    padding: 2px 4px;\r\n    border-radius: 50%;\r\n    margin-right: 6px;\r\n}\r\nfooter[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%]{\r\n    padding: 5px 0;\r\n    margin-top: 20px;\r\n}\r\nfooter[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    color: #646464;\r\n    font-size: 14px;\r\n    font-weight: 600;\r\n}\r\n@media (max-width:992px){\r\n    footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{\r\n        padding: 0 15px;\r\n    }\r\n   \r\n}\r\n@media (max-width:768px){\r\n    footer[_ngcontent-%COMP%]   .barnds[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{\r\n        width: 33%;\r\n    float: left;\r\n    line-height: 68px;\r\n    height: 90px;\r\n    text-align: center;\r\n    transition: 0.3s;\r\n    }\r\n    footer[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{\r\n        margin-top: 150px;\r\n    }\r\n}\r\n@media (max-width:576px){\r\n    footer[_ngcontent-%COMP%]   .barnds[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{\r\n        width: 33%;\r\n    float: left;\r\n    line-height: 68px;\r\n    height: 90px;\r\n    text-align: center;\r\n    transition: 0.3s;\r\n    }\r\n  \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksY0FBYztJQUNkLG1DQUFtQztJQUNuQyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjs7QUFFSjtBQUNBO0lBQ0k7UUFDSSxVQUFVO0lBQ2QsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksVUFBVTtJQUNkLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEI7O0FBRUoiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXIgLmNvbnRhaW5lcntcclxuICAgIHBhZGRpbmc6IDAgOTVweDtcclxufVxyXG5mb290ZXIgLmJhcm5kc3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogNDBweCAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbmZvb3RlciAuYmFybmRzIC5pdGVte1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuZm9vdGVyIC5iYXJuZHMgLml0ZW0gaW1ne1xyXG4gICAgd2lkdGg6IDY1JTtcclxufVxyXG5mb290ZXIgLmJhcm5kcyAuaXRlbSBpbWcuaW1nLWJ7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcbmZvb3RlciAuYmFybmRzIC5pdGVtOmhvdmVye1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG59XHJcbmZvb3RlciBocntcclxuICAgIG1hcmdpbi10b3A6IDE0MHB4O1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICNmM2ZiZmQ7XHJcbn1cclxuZm9vdGVyIC5sb2dve1xyXG5tYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbmZvb3RlciAubG9nbyBpbWd7XHJcbiAgICB3aWR0aDogODUlO1xyXG59XHJcbmZvb3RlciAuY2F0ZWdvcnl7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcbmZvb3RlciAuY2F0ZWdvcnkgaDR7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG5mb290ZXIgLmNhdGVnb3J5IHVse1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbmZvb3RlciAuY2F0ZWdvcnkgdWwgbGl7XHJcbiAgICBjb2xvcjogIzY0NjQ2NDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbmZvb3RlciAuY2F0ZWdvcnkgdWwgbGkgaXtcclxuICAgIGNvbG9yOiAjMWY3ZWU4O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDZweCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgICBwYWRkaW5nOiAycHggNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbn1cclxuZm9vdGVyIC5jb3B5cmlnaHR7XHJcbiAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuZm9vdGVyIC5jb3B5cmlnaHQgcHtcclxuICAgIGNvbG9yOiAjNjQ2NDY0O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6OTkycHgpe1xyXG4gICAgZm9vdGVyIC5jb250YWluZXJ7XHJcbiAgICAgICAgcGFkZGluZzogMCAxNXB4O1xyXG4gICAgfVxyXG4gICBcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDo3NjhweCl7XHJcbiAgICBmb290ZXIgLmJhcm5kcyAuaXRlbXtcclxuICAgICAgICB3aWR0aDogMzMlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBsaW5lLWhlaWdodDogNjhweDtcclxuICAgIGhlaWdodDogOTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICB9XHJcbiAgICBmb290ZXIgaHJ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTUwcHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6NTc2cHgpe1xyXG4gICAgZm9vdGVyIC5iYXJuZHMgLml0ZW17XHJcbiAgICAgICAgd2lkdGg6IDMzJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbGluZS1oZWlnaHQ6IDY4cHg7XHJcbiAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgfVxyXG4gIFxyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/gallery/gallery.component.ts":
/*!**********************************************!*\
  !*** ./src/app/gallery/gallery.component.ts ***!
  \**********************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);



class GalleryComponent {
    constructor() { }
    ngOnInit() {
        aos__WEBPACK_IMPORTED_MODULE_1___default.a.init();
    }
}
GalleryComponent.ɵfac = function GalleryComponent_Factory(t) { return new (t || GalleryComponent)(); };
GalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GalleryComponent, selectors: [["app-gallery"]], decls: 25, vars: 0, consts: [[1, "gallery"], [1, "container"], [1, "row"], [1, "col-lg-7", "col-md-7", "gal"], [1, "left-side"], ["src", "../../assets/img/pattern(1).png", "alt", "", 1, "img1"], ["data-aos", "fade-up", "data-aos-duration", "800", "src", "../../assets/img/illustration.png", "alt", "", 1, "img2"], ["data-aos", "fade-right", "data-aos-duration", "800", "src", "../../assets/img/day7.png", "alt", "", 1, "img3"], ["data-aos", "fade-left", "data-aos-duration", "800", "src", "../../assets/img/day9_4x.png", "alt", "", 1, "img4"], ["src", "../../assets/img/PATTERN.png", "alt", "", 1, "img5"], ["src", "../../assets/img/pattern5.png", "alt", "", 1, "img6"], ["data-aos", "zoom-in", "data-aos-duration", "800", "data-aos-delay", "500", 1, "img-title"], [1, "col-lg-5", "col-md-5"], [1, "right-side"], [1, "btn", "btn-warning"]], template: function GalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Best Illustration Designs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "WHAT WE DO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Create a beautiful portfolio gallery ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "LEARN MORE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".gallery[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]{\r\n    text-align: right;\r\n}\r\n.gallery[_ngcontent-%COMP%]{\r\n    overflow: hidden;\r\n}\r\n.gallery[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-size: 45px;\r\n    font-weight: 800;\r\n    line-height: 45px;\r\n}\r\n.gallery[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{\r\n    padding: 0 95px;\r\n}\r\n.gallery[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]{\r\nposition: relative;\r\n}\r\n.gallery[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n}\r\n.gallery[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .img4[_ngcontent-%COMP%]{\r\n    width: 249px;\r\n    height: 217px;\r\n    object-fit: cover;\r\n    right: 10px;\r\n}\r\n.gallery[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .img3[_ngcontent-%COMP%]{\r\n    z-index: -1;\r\n    top: 87px;\r\n    width: 285px;\r\n    height: 290px;\r\n    left: -70px;\r\n}\r\n.gallery[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .img2[_ngcontent-%COMP%]{\r\n    width: 388px;\r\n    top: 176px;\r\n    z-index: 3;\r\n    height: 200px;\r\n    object-fit: cover;\r\n    left: 68px;\r\n}\r\n.gallery[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .img1[_ngcontent-%COMP%]{\r\n    z-index: -5;\r\n    left: -90px;\r\n    top: 425px;\r\n    width: 240px;\r\n}\r\n.gallery[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .img6[_ngcontent-%COMP%]{\r\n    z-index: -4;\r\n    left: 75px;\r\n    top: 14px;\r\n    opacity: 0.5;\r\n}\r\n.gallery[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .img5[_ngcontent-%COMP%]{\r\nright: 21px;\r\ntop: 170px;\r\nwidth: 150px;\r\nz-index: -4;\r\n}\r\n.gallery[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .img-title[_ngcontent-%COMP%]{\r\n    background: linear-gradient(100deg, rgba(41,117,243,1) 0%, rgba(46,242,212,1) 100%);\r\n    height: 170px;\r\n    width: 350px;\r\n    position: absolute;\r\n    top: 315px;\r\n    z-index: 10;\r\n    padding: 35px;\r\n}\r\n.gallery[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .img-title[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{\r\n    height: 2px;\r\n    background: #FFF;\r\n    width: 35%;\r\n    display: block;\r\n    float: left;\r\n    margin-top: 0;\r\n}\r\n.gallery[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .img-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    text-transform: uppercase;\r\n    color:#FFF;\r\n    font-weight: 600;\r\n    display: inline-block;\r\n}\r\n.gallery[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    background: #fe531d;\r\n    border: 1px solid #fe531d;\r\n    padding: 10px 29px;\r\n    color: #FFF;\r\n    font-weight: 600;\r\n    font-size: 13px;\r\n    border-radius: 30px;\r\n    transition: 0.4s;\r\n    margin-bottom: 7px;\r\n}\r\n.gallery[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{\r\n    background:transparent;\r\n    color:#fe531d\r\n}\r\n.gallery[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus{\r\n    outline: 0;\r\n    box-shadow: none;\r\n}\r\n.gallery[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    color:#646464;\r\n    font-size: 14px;\r\n    margin-top: 20px;\r\n}\r\n.gallery[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    display: block;\r\n    margin-top: 75px;\r\n    color: #a2adb4;\r\n    font-size: 14px;\r\n    letter-spacing: 2px;\r\n}\r\n.gal[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    height: 540px;\r\n}\r\n@media (max-width:1200px){\r\n    .gallery[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .img4[_ngcontent-%COMP%]{\r\n        width: 220px; \r\n    }\r\n    .gallery[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .img3[_ngcontent-%COMP%]{\r\n        z-index: -1;\r\n        top: 87px;\r\n        width: 236px;\r\n        height: 255px;\r\n        left: -96px;\r\n    }\r\n    .gallery[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .img2[_ngcontent-%COMP%]{\r\n        width: 340px;\r\n        top: 176px;\r\n        z-index: 3;\r\n        height: 196px;\r\n        object-fit: cover;\r\n        left: 1px;\r\n    }\r\n    .gallery[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .img-title[_ngcontent-%COMP%]{\r\n    width: 336px;\r\n    top: 309px;\r\n    left: -29px;\r\n    }\r\n  \r\n    .gallery[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n        font-size: 35px;\r\n    }\r\n    \r\n}\r\n@media (max-width:992px){\r\n    .gallery[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{\r\n        padding: 15px;\r\n    }\r\n    .gallery[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .img4[_ngcontent-%COMP%]{\r\n       \r\n    width: 200px ;\r\n    height: 208px;\r\n    object-fit: cover;\r\n    right: -22px;\r\n\r\n    }\r\n    .gallery[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .img3[_ngcontent-%COMP%]{\r\n        z-index: -1;\r\n        top: 87px;\r\n        width: 195px;\r\n        height: 228px;\r\n        left: -37px ;\r\n    }\r\n    .gallery[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .img2[_ngcontent-%COMP%]{\r\n        width: 295px;\r\n        top: 176px;\r\n        z-index: 3;\r\n        height: 167px;\r\n        object-fit: cover;\r\n        left: 45px;\r\n    }\r\n    .gallery[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .img-title[_ngcontent-%COMP%]{\r\n        width: 290px;\r\n        top: 280px;\r\n        left: 0px;\r\n    }\r\n    .gallery[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n        font-size: 35px;\r\n    }\r\n \r\n}\r\n@media (max-width:768px){\r\n.gallery[_ngcontent-%COMP%]{\r\n margin-top: 50px;   \r\n}\r\n.gallery[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .img4[_ngcontent-%COMP%]{\r\n    width: 160px;\r\n    height: 160px;\r\n    object-fit: cover;\r\n    left: 315px;\r\n    right: auto;\r\n    }\r\n    .gallery[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .img3[_ngcontent-%COMP%]{\r\n        z-index: -1;\r\n        top: 75px;\r\n        width: 173px;\r\n        height: 182px;\r\n        left: 72px;\r\n    }\r\n    .gallery[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .img2[_ngcontent-%COMP%]{\r\n        width: 270px;\r\n        top: 137px;\r\n        z-index: 3;\r\n        height: 145px;\r\n        object-fit: cover;\r\n        left: 159px;\r\n    }\r\n    .gallery[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .img-title[_ngcontent-%COMP%]{\r\n        width: 260px;\r\n        top: 226px;\r\n        left: 113px;\r\n        height: 132px;\r\n    }\r\n    .gallery[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .img1[_ngcontent-%COMP%]{\r\n        z-index: -5;\r\n        left: 33px;\r\n        top: 314px;\r\n        width: 205px;\r\n    }\r\n    .gallery[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .img6[_ngcontent-%COMP%]{\r\n        z-index: -4;\r\n        left: 175px;\r\n        top: 14px;\r\n        opacity: 0.5;\r\n        width: 230px;\r\n    }\r\n    .gallery[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .img5[_ngcontent-%COMP%]{\r\n        right: auto;\r\n        top: 170px;\r\n        width: 80px;\r\n        z-index: -4;\r\n        left: 385px;\r\n}\r\n.gallery[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .img-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    font-size: 19px;\r\n}\r\n    .gallery[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n        font-size: 28px;\r\n    }\r\n    .gallery[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n      margin-top: 0;\r\n    }\r\n    .gal[_ngcontent-%COMP%]{\r\n        height: 420px;\r\n    }\r\n}\r\n@media (max-width:500px){\r\n    .gallery[_ngcontent-%COMP%]{\r\n     margin-top: 50px;   \r\n    }\r\n    .gallery[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .img4[_ngcontent-%COMP%]{\r\n        width: 111px;\r\n        height: 116px;\r\n        left: 175px;\r\n        right: auto;\r\n        }\r\n        .gallery[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .img3[_ngcontent-%COMP%]{\r\n            z-index: -1;\r\n            top: 50px;\r\n            width: 123px;\r\n            height: 136px;\r\n            left: 25px;\r\n        }\r\n        .gallery[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .img2[_ngcontent-%COMP%]{\r\n            width: 168px;\r\n            top: 95px;\r\n            z-index: 2;\r\n            height: 89px;\r\n            object-fit: cover;\r\n            left: 86px;\r\n        }\r\n        .gallery[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .img-title[_ngcontent-%COMP%]{\r\n            width: 156px;\r\n            top: 158px;\r\n            left: 66px;\r\n            height: 87px;\r\n            padding: 10px;\r\n        }\r\n        .gallery[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .img1[_ngcontent-%COMP%]{\r\n            z-index: -5;\r\n            left: 13px;\r\n            top: 210px;\r\n            width: 159px;\r\n        }\r\n        .gallery[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .img6[_ngcontent-%COMP%]{\r\n            z-index: -4;\r\n            left: 96px;\r\n            top: 14px;\r\n            opacity: 0.5;\r\n            width: 107px;\r\n        }\r\n        .gallery[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .img5[_ngcontent-%COMP%]{\r\n            left: 195px;\r\n            right: auto;\r\n            top: 77px;\r\n            width: 84px;\r\n            z-index: -4;\r\n            padding: 10px;\r\n    }\r\n    .gallery[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .img-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n        font-size: 14px;\r\n    }\r\n     \r\n    \r\n        .gal[_ngcontent-%COMP%]{\r\n            height: 300px;\r\n            padding: 0 0 0 100px;\r\n        }\r\n        .gallery[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n            margin-top: 0;\r\n            font-size: 12px;\r\n          }\r\n        .gallery[_ngcontent-%COMP%]{\r\n            margin-top: -60px;\r\n        }\r\n        \r\n    }\r\n@media (max-width:450px){\r\n        .gal[_ngcontent-%COMP%]{\r\n            padding: 0 0 0 50px;\r\n        }\r\n    }\r\n@media (max-width:370px){\r\n        .gal[_ngcontent-%COMP%]{\r\n            padding: 0 0 0 20px;\r\n        }\r\n    }\r\n@media (max-width:330px){\r\n        .gal[_ngcontent-%COMP%]{\r\n            padding: 0;\r\n        }\r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsU0FBUztJQUNULFlBQVk7SUFDWixhQUFhO0lBQ2IsV0FBVztBQUNmO0FBQ0E7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLFVBQVU7SUFDVixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLFVBQVU7QUFDZDtBQUNBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixTQUFTO0lBQ1QsWUFBWTtBQUNoQjtBQUNBO0FBQ0EsV0FBVztBQUNYLFVBQVU7QUFDVixZQUFZO0FBQ1osV0FBVztBQUNYO0FBQ0E7SUFHSSxtRkFBbUY7SUFDbkYsYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixjQUFjO0lBQ2QsV0FBVztJQUNYLGFBQWE7QUFDakI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QjtBQUNKO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZUFBZTtJQUNmLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7QUFFQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksV0FBVztRQUNYLFNBQVM7UUFDVCxZQUFZO1FBQ1osYUFBYTtRQUNiLFdBQVc7SUFDZjtJQUNBO1FBQ0ksWUFBWTtRQUNaLFVBQVU7UUFDVixVQUFVO1FBQ1YsYUFBYTtRQUNiLGlCQUFpQjtRQUNqQixTQUFTO0lBQ2I7SUFDQTtJQUNBLFlBQVk7SUFDWixVQUFVO0lBQ1YsV0FBVztJQUNYOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7QUFFSjtBQUNBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7O0lBRUEsYUFBYTtJQUNiLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsWUFBWTs7SUFFWjtJQUNBO1FBQ0ksV0FBVztRQUNYLFNBQVM7UUFDVCxZQUFZO1FBQ1osYUFBYTtRQUNiLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFlBQVk7UUFDWixVQUFVO1FBQ1YsVUFBVTtRQUNWLGFBQWE7UUFDYixpQkFBaUI7UUFDakIsVUFBVTtJQUNkO0lBQ0E7UUFDSSxZQUFZO1FBQ1osVUFBVTtRQUNWLFNBQVM7SUFDYjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjs7QUFFSjtBQUNBO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxXQUFXO0lBQ1g7SUFDQTtRQUNJLFdBQVc7UUFDWCxTQUFTO1FBQ1QsWUFBWTtRQUNaLGFBQWE7UUFDYixVQUFVO0lBQ2Q7SUFDQTtRQUNJLFlBQVk7UUFDWixVQUFVO1FBQ1YsVUFBVTtRQUNWLGFBQWE7UUFDYixpQkFBaUI7UUFDakIsV0FBVztJQUNmO0lBQ0E7UUFDSSxZQUFZO1FBQ1osVUFBVTtRQUNWLFdBQVc7UUFDWCxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsVUFBVTtRQUNWLFVBQVU7UUFDVixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsV0FBVztRQUNYLFNBQVM7UUFDVCxZQUFZO1FBQ1osWUFBWTtJQUNoQjtJQUNBO1FBQ0ksV0FBVztRQUNYLFVBQVU7UUFDVixXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7QUFDbkI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7SUFDSTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtNQUNFLGFBQWE7SUFDZjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtBQUNKO0FBRUE7SUFDSTtLQUNDLGdCQUFnQjtJQUNqQjtJQUNBO1FBQ0ksWUFBWTtRQUNaLGFBQWE7UUFDYixXQUFXO1FBQ1gsV0FBVztRQUNYO1FBQ0E7WUFDSSxXQUFXO1lBQ1gsU0FBUztZQUNULFlBQVk7WUFDWixhQUFhO1lBQ2IsVUFBVTtRQUNkO1FBQ0E7WUFDSSxZQUFZO1lBQ1osU0FBUztZQUNULFVBQVU7WUFDVixZQUFZO1lBQ1osaUJBQWlCO1lBQ2pCLFVBQVU7UUFDZDtRQUNBO1lBQ0ksWUFBWTtZQUNaLFVBQVU7WUFDVixVQUFVO1lBQ1YsWUFBWTtZQUNaLGFBQWE7UUFDakI7UUFDQTtZQUNJLFdBQVc7WUFDWCxVQUFVO1lBQ1YsVUFBVTtZQUNWLFlBQVk7UUFDaEI7UUFDQTtZQUNJLFdBQVc7WUFDWCxVQUFVO1lBQ1YsU0FBUztZQUNULFlBQVk7WUFDWixZQUFZO1FBQ2hCO1FBQ0E7WUFDSSxXQUFXO1lBQ1gsV0FBVztZQUNYLFNBQVM7WUFDVCxXQUFXO1lBQ1gsV0FBVztZQUNYLGFBQWE7SUFDckI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7OztRQUdJO1lBQ0ksYUFBYTtZQUNiLG9CQUFvQjtRQUN4QjtRQUNBO1lBQ0ksYUFBYTtZQUNiLGVBQWU7VUFDakI7UUFDRjtZQUNJLGlCQUFpQjtRQUNyQjs7SUFFSjtBQUNBO1FBQ0k7WUFDSSxtQkFBbUI7UUFDdkI7SUFDSjtBQUNBO1FBQ0k7WUFDSSxtQkFBbUI7UUFDdkI7SUFDSjtBQUNBO1FBQ0k7WUFDSSxVQUFVO1FBQ2Q7SUFDSiIsImZpbGUiOiJzcmMvYXBwL2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5nYWxsZXJ5IC5yaWdodC1zaWRle1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLmdhbGxlcnl7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5nYWxsZXJ5IC5yaWdodC1zaWRlIGgxe1xyXG4gICAgZm9udC1zaXplOiA0NXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xyXG59XHJcbi5nYWxsZXJ5IC5jb250YWluZXJ7XHJcbiAgICBwYWRkaW5nOiAwIDk1cHg7XHJcbn1cclxuLmdhbGxlcnkgLmxlZnQtc2lkZXtcclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5nYWxsZXJ5IC5sZWZ0LXNpZGUgaW1ne1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5nYWxsZXJ5IC5sZWZ0LXNpZGUgLmltZzR7XHJcbiAgICB3aWR0aDogMjQ5cHg7XHJcbiAgICBoZWlnaHQ6IDIxN3B4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICByaWdodDogMTBweDtcclxufVxyXG4uZ2FsbGVyeSAubGVmdC1zaWRlIC5pbWcze1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICB0b3A6IDg3cHg7XHJcbiAgICB3aWR0aDogMjg1cHg7XHJcbiAgICBoZWlnaHQ6IDI5MHB4O1xyXG4gICAgbGVmdDogLTcwcHg7XHJcbn1cclxuLmdhbGxlcnkgLmxlZnQtc2lkZSAuaW1nMntcclxuICAgIHdpZHRoOiAzODhweDtcclxuICAgIHRvcDogMTc2cHg7XHJcbiAgICB6LWluZGV4OiAzO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgbGVmdDogNjhweDtcclxufVxyXG4uZ2FsbGVyeSAubGVmdC1zaWRlIC5pbWcxe1xyXG4gICAgei1pbmRleDogLTU7XHJcbiAgICBsZWZ0OiAtOTBweDtcclxuICAgIHRvcDogNDI1cHg7XHJcbiAgICB3aWR0aDogMjQwcHg7XHJcbn1cclxuLmdhbGxlcnkgLmxlZnQtc2lkZSAuaW1nNntcclxuICAgIHotaW5kZXg6IC00O1xyXG4gICAgbGVmdDogNzVweDtcclxuICAgIHRvcDogMTRweDtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxufVxyXG4uZ2FsbGVyeSAubGVmdC1zaWRlIC5pbWc1e1xyXG5yaWdodDogMjFweDtcclxudG9wOiAxNzBweDtcclxud2lkdGg6IDE1MHB4O1xyXG56LWluZGV4OiAtNDtcclxufVxyXG4uZ2FsbGVyeSAubGVmdC1zaWRlIC5pbWctdGl0bGV7XHJcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgxMDBkZWcsIHJnYmEoNDEsMTE3LDI0MywxKSAwJSwgcmdiYSg0NiwyNDIsMjEyLDEpIDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMTAwZGVnLCByZ2JhKDQxLDExNywyNDMsMSkgMCUsIHJnYmEoNDYsMjQyLDIxMiwxKSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMDBkZWcsIHJnYmEoNDEsMTE3LDI0MywxKSAwJSwgcmdiYSg0NiwyNDIsMjEyLDEpIDEwMCUpO1xyXG4gICAgaGVpZ2h0OiAxNzBweDtcclxuICAgIHdpZHRoOiAzNTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMzE1cHg7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIHBhZGRpbmc6IDM1cHg7XHJcbn1cclxuLmdhbGxlcnkgLmxlZnQtc2lkZSAuaW1nLXRpdGxlIGhye1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGO1xyXG4gICAgd2lkdGg6IDM1JTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcbi5nYWxsZXJ5IC5sZWZ0LXNpZGUgLmltZy10aXRsZSBoM3tcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBjb2xvcjojRkZGO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmdhbGxlcnkgLnJpZ2h0LXNpZGUgYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZDogI2ZlNTMxZDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZTUzMWQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDI5cHg7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC40cztcclxuICAgIG1hcmdpbi1ib3R0b206IDdweDtcclxufVxyXG4uZ2FsbGVyeSAucmlnaHQtc2lkZSBidXR0b246aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6I2ZlNTMxZFxyXG59XHJcbi5nYWxsZXJ5IC5yaWdodC1zaWRlIGJ1dHRvbjpmb2N1c3tcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcbi5nYWxsZXJ5IC5yaWdodC1zaWRlICBwe1xyXG4gICAgY29sb3I6IzY0NjQ2NDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5nYWxsZXJ5IC5yaWdodC1zaWRlIHNwYW57XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDc1cHg7XHJcbiAgICBjb2xvcjogI2EyYWRiNDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbn1cclxuLmdhbHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogNTQwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjEyMDBweCl7XHJcbiAgICAuZ2FsbGVyeSAubGVmdC1zaWRlIC5pbWc0e1xyXG4gICAgICAgIHdpZHRoOiAyMjBweDsgXHJcbiAgICB9XHJcbiAgICAuZ2FsbGVyeSAubGVmdC1zaWRlIC5pbWcze1xyXG4gICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgIHRvcDogODdweDtcclxuICAgICAgICB3aWR0aDogMjM2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNTVweDtcclxuICAgICAgICBsZWZ0OiAtOTZweDtcclxuICAgIH1cclxuICAgIC5nYWxsZXJ5IC5sZWZ0LXNpZGUgLmltZzJ7XHJcbiAgICAgICAgd2lkdGg6IDM0MHB4O1xyXG4gICAgICAgIHRvcDogMTc2cHg7XHJcbiAgICAgICAgei1pbmRleDogMztcclxuICAgICAgICBoZWlnaHQ6IDE5NnB4O1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgIGxlZnQ6IDFweDtcclxuICAgIH1cclxuICAgIC5nYWxsZXJ5IC5sZWZ0LXNpZGUgLmltZy10aXRsZXtcclxuICAgIHdpZHRoOiAzMzZweDtcclxuICAgIHRvcDogMzA5cHg7XHJcbiAgICBsZWZ0OiAtMjlweDtcclxuICAgIH1cclxuICBcclxuICAgIC5nYWxsZXJ5IC5yaWdodC1zaWRlIGgxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIH1cclxuICAgIFxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOjk5MnB4KXtcclxuICAgIC5nYWxsZXJ5IC5jb250YWluZXJ7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgIH1cclxuICAgIC5nYWxsZXJ5IC5sZWZ0LXNpZGUgLmltZzR7XHJcbiAgICAgICBcclxuICAgIHdpZHRoOiAyMDBweCA7XHJcbiAgICBoZWlnaHQ6IDIwOHB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICByaWdodDogLTIycHg7XHJcblxyXG4gICAgfVxyXG4gICAgLmdhbGxlcnkgLmxlZnQtc2lkZSAuaW1nM3tcclxuICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICB0b3A6IDg3cHg7XHJcbiAgICAgICAgd2lkdGg6IDE5NXB4O1xyXG4gICAgICAgIGhlaWdodDogMjI4cHg7XHJcbiAgICAgICAgbGVmdDogLTM3cHggO1xyXG4gICAgfVxyXG4gICAgLmdhbGxlcnkgLmxlZnQtc2lkZSAuaW1nMntcclxuICAgICAgICB3aWR0aDogMjk1cHg7XHJcbiAgICAgICAgdG9wOiAxNzZweDtcclxuICAgICAgICB6LWluZGV4OiAzO1xyXG4gICAgICAgIGhlaWdodDogMTY3cHg7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgbGVmdDogNDVweDtcclxuICAgIH1cclxuICAgIC5nYWxsZXJ5IC5sZWZ0LXNpZGUgLmltZy10aXRsZXtcclxuICAgICAgICB3aWR0aDogMjkwcHg7XHJcbiAgICAgICAgdG9wOiAyODBweDtcclxuICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICB9XHJcbiAgICAuZ2FsbGVyeSAucmlnaHQtc2lkZSBoMXtcclxuICAgICAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICB9XHJcbiBcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDo3NjhweCl7XHJcbi5nYWxsZXJ5e1xyXG4gbWFyZ2luLXRvcDogNTBweDsgICBcclxufVxyXG4uZ2FsbGVyeSAubGVmdC1zaWRlIC5pbWc0e1xyXG4gICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgaGVpZ2h0OiAxNjBweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgbGVmdDogMzE1cHg7XHJcbiAgICByaWdodDogYXV0bztcclxuICAgIH1cclxuICAgIC5nYWxsZXJ5IC5sZWZ0LXNpZGUgLmltZzN7XHJcbiAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgdG9wOiA3NXB4O1xyXG4gICAgICAgIHdpZHRoOiAxNzNweDtcclxuICAgICAgICBoZWlnaHQ6IDE4MnB4O1xyXG4gICAgICAgIGxlZnQ6IDcycHg7XHJcbiAgICB9XHJcbiAgICAuZ2FsbGVyeSAubGVmdC1zaWRlIC5pbWcye1xyXG4gICAgICAgIHdpZHRoOiAyNzBweDtcclxuICAgICAgICB0b3A6IDEzN3B4O1xyXG4gICAgICAgIHotaW5kZXg6IDM7XHJcbiAgICAgICAgaGVpZ2h0OiAxNDVweDtcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICBsZWZ0OiAxNTlweDtcclxuICAgIH1cclxuICAgIC5nYWxsZXJ5IC5sZWZ0LXNpZGUgLmltZy10aXRsZXtcclxuICAgICAgICB3aWR0aDogMjYwcHg7XHJcbiAgICAgICAgdG9wOiAyMjZweDtcclxuICAgICAgICBsZWZ0OiAxMTNweDtcclxuICAgICAgICBoZWlnaHQ6IDEzMnB4O1xyXG4gICAgfVxyXG4gICAgLmdhbGxlcnkgLmxlZnQtc2lkZSAuaW1nMXtcclxuICAgICAgICB6LWluZGV4OiAtNTtcclxuICAgICAgICBsZWZ0OiAzM3B4O1xyXG4gICAgICAgIHRvcDogMzE0cHg7XHJcbiAgICAgICAgd2lkdGg6IDIwNXB4O1xyXG4gICAgfVxyXG4gICAgLmdhbGxlcnkgLmxlZnQtc2lkZSAuaW1nNntcclxuICAgICAgICB6LWluZGV4OiAtNDtcclxuICAgICAgICBsZWZ0OiAxNzVweDtcclxuICAgICAgICB0b3A6IDE0cHg7XHJcbiAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgIHdpZHRoOiAyMzBweDtcclxuICAgIH1cclxuICAgIC5nYWxsZXJ5IC5sZWZ0LXNpZGUgLmltZzV7XHJcbiAgICAgICAgcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgdG9wOiAxNzBweDtcclxuICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICB6LWluZGV4OiAtNDtcclxuICAgICAgICBsZWZ0OiAzODVweDtcclxufVxyXG4uZ2FsbGVyeSAubGVmdC1zaWRlIC5pbWctdGl0bGUgaDN7XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbn1cclxuICAgIC5nYWxsZXJ5IC5yaWdodC1zaWRlIGgxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIH1cclxuICAgIC5nYWxsZXJ5IC5yaWdodC1zaWRlIHNwYW57XHJcbiAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICB9XHJcbiAgICAuZ2Fse1xyXG4gICAgICAgIGhlaWdodDogNDIwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjUwMHB4KXtcclxuICAgIC5nYWxsZXJ5e1xyXG4gICAgIG1hcmdpbi10b3A6IDUwcHg7ICAgXHJcbiAgICB9XHJcbiAgICAuZ2FsbGVyeSAubGVmdC1zaWRlIC5pbWc0e1xyXG4gICAgICAgIHdpZHRoOiAxMTFweDtcclxuICAgICAgICBoZWlnaHQ6IDExNnB4O1xyXG4gICAgICAgIGxlZnQ6IDE3NXB4O1xyXG4gICAgICAgIHJpZ2h0OiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZ2FsbGVyeSAubGVmdC1zaWRlIC5pbWcze1xyXG4gICAgICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICAgICAgdG9wOiA1MHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTIzcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTM2cHg7XHJcbiAgICAgICAgICAgIGxlZnQ6IDI1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5nYWxsZXJ5IC5sZWZ0LXNpZGUgLmltZzJ7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNjhweDtcclxuICAgICAgICAgICAgdG9wOiA5NXB4O1xyXG4gICAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDg5cHg7XHJcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgICBsZWZ0OiA4NnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZ2FsbGVyeSAubGVmdC1zaWRlIC5pbWctdGl0bGV7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNTZweDtcclxuICAgICAgICAgICAgdG9wOiAxNThweDtcclxuICAgICAgICAgICAgbGVmdDogNjZweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA4N3B4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZ2FsbGVyeSAubGVmdC1zaWRlIC5pbWcxe1xyXG4gICAgICAgICAgICB6LWluZGV4OiAtNTtcclxuICAgICAgICAgICAgbGVmdDogMTNweDtcclxuICAgICAgICAgICAgdG9wOiAyMTBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDE1OXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZ2FsbGVyeSAubGVmdC1zaWRlIC5pbWc2e1xyXG4gICAgICAgICAgICB6LWluZGV4OiAtNDtcclxuICAgICAgICAgICAgbGVmdDogOTZweDtcclxuICAgICAgICAgICAgdG9wOiAxNHB4O1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDdweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmdhbGxlcnkgLmxlZnQtc2lkZSAuaW1nNXtcclxuICAgICAgICAgICAgbGVmdDogMTk1cHg7XHJcbiAgICAgICAgICAgIHJpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICB0b3A6IDc3cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4NHB4O1xyXG4gICAgICAgICAgICB6LWluZGV4OiAtNDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgIH1cclxuICAgIC5nYWxsZXJ5IC5sZWZ0LXNpZGUgLmltZy10aXRsZSBoM3tcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgICAgXHJcbiAgICBcclxuICAgICAgICAuZ2Fse1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDAgMCAxMDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmdhbGxlcnkgLnJpZ2h0LXNpZGUgc3BhbntcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIC5nYWxsZXJ5e1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtNjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDo0NTBweCl7XHJcbiAgICAgICAgLmdhbHtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAwIDAgNTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDozNzBweCl7XHJcbiAgICAgICAgLmdhbHtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAwIDAgMjBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDozMzBweCl7XHJcbiAgICAgICAgLmdhbHtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB9XHJcbiAgICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-gallery',
                templateUrl: './gallery.component.html',
                styleUrls: ['./gallery.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);



class HeaderComponent {
    constructor() { }
    ngOnInit() {
        aos__WEBPACK_IMPORTED_MODULE_1___default.a.init();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 19, vars: 0, consts: [[1, "header"], ["src", "../../assets/img/bgKopie.png", "alt", "", 1, "bg-img"], ["src", "../../assets/img/graphic.png", "alt", "", 1, "bg-img"], [1, "container"], [1, "row"], [1, "col-lg-6", "col-md-6"], ["data-aos", "fade-right", "data-aos-duration", "1000", 1, "left-side"], [1, "btn"], [1, "fa", "fa-sort-up"], ["data-aos", "zoom-in-left", "data-aos-duration", "2000", 1, "right-side"], ["src", "../../assets/img/graphics.png", "alt", ""]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Follow the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " rules and grow ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse mugiat nuesent lupt te fegait nulla facilisi. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "find out how ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%]{\r\n    padding: 0 95px;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]{\r\n    font-family: \"Segoe UI\";\r\n    height: 750px;\r\n    margin-top: -80px;\r\n    position: relative;\r\n    overflow: hidden;\r\n    padding-top: 140px;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]   .bg-img[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    top: -176px;\r\n    right: -300px;\r\n    z-index: -3;\r\n    height: 900px;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 109%;\r\n    position: absolute;\r\n    top: 14px;\r\n    right: -17px;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-size: 60px;\r\n    font-weight: 800;\r\n    margin-top: 25px;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-size: 23px;\r\n    color:#4d5473\r\n}\r\n\r\n.header[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    background: #fe531d;\r\n    border: 1px solid #fe531d;\r\n    padding: 10px 29px;\r\n    color: #FFF;\r\n    font-weight: 600;\r\n    font-size: 13px;\r\n    border-radius: 30px;\r\n    transition: 0.4s;\r\n    margin-bottom: 7px;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{\r\n    background:transparent;\r\n    color:#fe531d\r\n}\r\n\r\n.header[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus{\r\n    outline: 0;\r\n    box-shadow: none;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\ntransform: rotate(90deg);\r\nmargin-left: 5px;\r\n}\r\n\r\n@media (min-width:1400px){\r\n    .header[_ngcontent-%COMP%]   .bg-img[_ngcontent-%COMP%]{\r\n        position: absolute;\r\n        top: -270px;\r\n        right: -300px;\r\n        z-index: -3;\r\n        height: 1020px;\r\n    }\r\n \r\n}\r\n\r\n@media (max-width:992px){\r\n    .header[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{\r\n        padding: 0;\r\n    }\r\n \r\n}\r\n\r\n@media (max-width:768px){\r\n    .header[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n        margin-top: 0;\r\n        font-size: 50px;\r\n    }\r\n    .header[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n        font-size: 20px;\r\n    }\r\n    .header[_ngcontent-%COMP%]{\r\n        height: 860px;\r\n    }\r\n    .header[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n        width: 85%;\r\n        right: auto;\r\n    }\r\n}\r\n\r\n@media (max-width:576px){\r\n.header[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{\r\n    padding:0 15px;\r\n}\r\n.header[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-size: 35px;\r\n}\r\n.header[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-size: 17px;\r\n}\r\n.header[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    padding: 8px 15px;\r\n}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsYUFBYTtJQUNiLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksZUFBZTtJQUNmO0FBQ0o7O0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QjtBQUNKOztBQUNBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7QUFFQTtBQUNBLHdCQUF3QjtBQUN4QixnQkFBZ0I7QUFDaEI7O0FBR0E7SUFDSTtRQUNJLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsYUFBYTtRQUNiLFdBQVc7UUFDWCxjQUFjO0lBQ2xCOztBQUVKOztBQUNBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7O0FBRUo7O0FBQ0E7SUFDSTtRQUNJLGFBQWE7UUFDYixlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsV0FBVztJQUNmO0FBQ0o7O0FBQ0E7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5jb250YWluZXJ7XHJcbiAgICBwYWRkaW5nOiAwIDk1cHg7XHJcbn1cclxuXHJcbi5oZWFkZXJ7XHJcbiAgICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiO1xyXG4gICAgaGVpZ2h0OiA3NTBweDtcclxuICAgIG1hcmdpbi10b3A6IC04MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBhZGRpbmctdG9wOiAxNDBweDtcclxufVxyXG4uaGVhZGVyIC5iZy1pbWd7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0xNzZweDtcclxuICAgIHJpZ2h0OiAtMzAwcHg7XHJcbiAgICB6LWluZGV4OiAtMztcclxuICAgIGhlaWdodDogOTAwcHg7XHJcbn1cclxuXHJcbi5oZWFkZXIgLnJpZ2h0LXNpZGUgaW1ne1xyXG4gICAgd2lkdGg6IDEwOSU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE0cHg7XHJcbiAgICByaWdodDogLTE3cHg7XHJcbn1cclxuLmhlYWRlciAubGVmdC1zaWRlIGgxe1xyXG4gICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuLmhlYWRlciAubGVmdC1zaWRlIHB7XHJcbiAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICBjb2xvcjojNGQ1NDczXHJcbn1cclxuLmhlYWRlciAubGVmdC1zaWRlIGJ1dHRvbntcclxuICAgIGJhY2tncm91bmQ6ICNmZTUzMWQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmU1MzFkO1xyXG4gICAgcGFkZGluZzogMTBweCAyOXB4O1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbn1cclxuLmhlYWRlciAubGVmdC1zaWRlIGJ1dHRvbjpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjojZmU1MzFkXHJcbn1cclxuLmhlYWRlciAubGVmdC1zaWRlIGJ1dHRvbjpmb2N1c3tcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uaGVhZGVyIC5sZWZ0LXNpZGUgYnV0dG9uIGl7XHJcbnRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxubWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOjE0MDBweCl7XHJcbiAgICAuaGVhZGVyIC5iZy1pbWd7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogLTI3MHB4O1xyXG4gICAgICAgIHJpZ2h0OiAtMzAwcHg7XHJcbiAgICAgICAgei1pbmRleDogLTM7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDIwcHg7XHJcbiAgICB9XHJcbiBcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDo5OTJweCl7XHJcbiAgICAuaGVhZGVyIC5jb250YWluZXJ7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuIFxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOjc2OHB4KXtcclxuICAgIC5oZWFkZXIgLmxlZnQtc2lkZSBoMXtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIH1cclxuICAgIC5oZWFkZXIgLmxlZnQtc2lkZSBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICAgIC5oZWFkZXJ7XHJcbiAgICAgICAgaGVpZ2h0OiA4NjBweDtcclxuICAgIH1cclxuICAgIC5oZWFkZXIgLnJpZ2h0LXNpZGUgaW1ne1xyXG4gICAgICAgIHdpZHRoOiA4NSU7XHJcbiAgICAgICAgcmlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6NTc2cHgpe1xyXG4uaGVhZGVyIC5jb250YWluZXJ7XHJcbiAgICBwYWRkaW5nOjAgMTVweDtcclxufVxyXG4uaGVhZGVyIC5sZWZ0LXNpZGUgaDF7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbn1cclxuLmhlYWRlciAubGVmdC1zaWRlIHB7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuLmhlYWRlciAubGVmdC1zaWRlIGJ1dHRvbntcclxuICAgIHBhZGRpbmc6IDhweCAxNXB4O1xyXG59XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
    closeMenu() {
        var show = document.getElementById('navbar-collapse');
        show.style.right = "-200px";
    }
    showMenu() {
        var show = document.getElementById('navbar-collapse');
        show.style.right = "0";
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 36, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], ["href", "#", 1, "navbar-brand"], ["src", "../../assets/img/logo.png", "alt", ""], ["id", "navbar-collapse", 1, "collapse", "navbar-collapse"], [1, "fa", "fa-close", 3, "click"], [1, "navbar-nav", "mr-auto", "links-items"], [1, "nav-item", "active"], ["href", "#", 1, "nav-link"], [1, "nav-item"], [1, "navbar-nav", "nav-menu-icon", "my-2", "my-lg-0"], [1, "nav-item", "icon-nav"], ["href", "#", 1, "lang"], ["src", "../../assets/img/united-states.png", "alt", ""], ["href", "#", 1, "cart"], ["src", "../../assets/img/cart.png", "alt", ""], ["href", "#"], ["src", "../../assets/img/search .png", "alt", ""], [1, "nav-item", "icon-nav", "display-menu", 3, "click"], ["src", "../../assets/img/icon.png", "alt", ""]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_i_click_4_listener() { return ctx.closeMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "pages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "EN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_li_click_33_listener() { return ctx.showMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".bg-light[_ngcontent-%COMP%]   .links-items[_ngcontent-%COMP%]{\r\n    margin: auto;\r\n}\r\n.bg-light[_ngcontent-%COMP%]{\r\n    background: transparent !important;\r\n    position: relative;\r\n    z-index: 99999;\r\n    height: 70px;\r\n    line-height: 70px;\r\n}\r\n.bg-light[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    transition: 0.5s;\r\n}\r\n.bg-light[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{\r\n    color: #FFF;\r\n    font-size: 15px;\r\n    margin-left: 25px;\r\n    font-weight: 600;\r\n    transition: 0.5s;\r\n    position: relative;\r\n}\r\n.bg-light[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]::before{\r\n    content: '';\r\n    position: absolute;\r\n    height: 2px;\r\n    width: 0;\r\n    background-color: #FFF;\r\n    bottom: 27px;\r\n    transition: 0.3s;\r\n}\r\n.bg-light[_ngcontent-%COMP%]   .nav-item.active[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]::before, .bg-light[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover::before{\r\n    width: 75%;\r\n}\r\n.bg-light[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 105px;\r\n}\r\n.bg-light[_ngcontent-%COMP%]   .icon-nav[_ngcontent-%COMP%]{\r\nmargin-left: 15px;\r\n}\r\n.bg-light[_ngcontent-%COMP%]   .icon-nav[_ngcontent-%COMP%]   .cart[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    margin-top: -5px ;\r\n}\r\n.bg-light[_ngcontent-%COMP%]   .icon-nav[_ngcontent-%COMP%]   .lang[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    margin-right: 5px;\r\n    margin-top: -3px;\r\n}\r\n.bg-light[_ngcontent-%COMP%]   .icon-nav[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 17px ;\r\n}\r\n.bg-light[_ngcontent-%COMP%]   .icon-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    color:#FFF;\r\n    text-decoration: none;\r\n}\r\n.bg-light[_ngcontent-%COMP%]   .icon-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    color:#FFF;\r\n}\r\n.bg-light[_ngcontent-%COMP%]   .display-menu[_ngcontent-%COMP%]{\r\n    display: none;\r\n}\r\n.fa-close[_ngcontent-%COMP%]{\r\n    display: none;\r\n}\r\n@media (max-width:992px){\r\n    .bg-light[_ngcontent-%COMP%]   .display-menu[_ngcontent-%COMP%]{\r\n        display: block;\r\n    } \r\n    .nav-menu-icon[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]{\r\n        display: inline-block;\r\n    }\r\n    .nav-menu-icon[_ngcontent-%COMP%]{  \r\n          display: block;\r\n        }\r\n    .bg-light[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]{\r\n        height: 100vh;\r\n        width: 200px;\r\n        background-color: #1a1b29;\r\n        top:0;\r\n        right:-200px;\r\n        position: fixed;\r\n        text-align: left;\r\n        z-index: 2;\r\n        transition: 0.5s;\r\n        display: block;\r\n      }\r\n      .bg-light[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{\r\n        display: block;\r\n        color:#FFF;\r\n        margin: 12px 25px;\r\n        font-size: 25px;\r\n        cursor: pointer;\r\n      }\r\n      .bg-light[_ngcontent-%COMP%]   .nav-item.active[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]::before, .bg-light[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover::before{\r\n        width: 20%;\r\n    }\r\n    .bg-light[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{\r\n        text-align: center;\r\n        margin-top: 0;\r\n        margin-bottom: 0;\r\n        padding-top: 0;\r\n        margin-left: 0;\r\n    }\r\n     \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksa0NBQWtDO0lBQ2xDLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFFBQVE7SUFDUixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBR0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLHFCQUFxQjtJQUN6QjtJQUNBO1VBQ00sY0FBYztRQUNoQjtJQUNKO1FBQ0ksYUFBYTtRQUNiLFlBQVk7UUFDWix5QkFBeUI7UUFDekIsS0FBSztRQUNMLFlBQVk7UUFDWixlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLFVBQVU7UUFDVixnQkFBZ0I7UUFDaEIsY0FBYztNQUNoQjtNQUNBO1FBQ0UsY0FBYztRQUNkLFVBQVU7UUFDVixpQkFBaUI7UUFDakIsZUFBZTtRQUNmLGVBQWU7TUFDakI7TUFDQTtRQUNFLFVBQVU7SUFDZDtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixnQkFBZ0I7UUFDaEIsY0FBYztRQUNkLGNBQWM7SUFDbEI7O0FBRUoiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmctbGlnaHQgLmxpbmtzLWl0ZW1ze1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi5iZy1saWdodHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiA5OTk5OTtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA3MHB4O1xyXG59XHJcbi5iZy1saWdodCAubmF2LWl0ZW17XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcblxyXG4uYmctbGlnaHQgLm5hdi1pdGVtIC5uYXYtbGlua3tcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmJnLWxpZ2h0IC5uYXYtaXRlbSAubmF2LWxpbms6OmJlZm9yZXtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgICBib3R0b206IDI3cHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcbi5iZy1saWdodCAubmF2LWl0ZW0uYWN0aXZlID4gLm5hdi1saW5rOjpiZWZvcmUgLC5iZy1saWdodCAubmF2LWl0ZW0gLm5hdi1saW5rOmhvdmVyOjpiZWZvcmV7XHJcbiAgICB3aWR0aDogNzUlO1xyXG59XHJcbi5iZy1saWdodCAubmF2YmFyLWJyYW5kIGltZ3tcclxuICAgIHdpZHRoOiAxMDVweDtcclxufVxyXG5cclxuXHJcbi5iZy1saWdodCAuaWNvbi1uYXZ7XHJcbm1hcmdpbi1sZWZ0OiAxNXB4O1xyXG59XHJcbi5iZy1saWdodCAuaWNvbi1uYXYgLmNhcnQgaW1ne1xyXG4gICAgbWFyZ2luLXRvcDogLTVweCA7XHJcbn1cclxuLmJnLWxpZ2h0IC5pY29uLW5hdiAubGFuZyBpbWd7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IC0zcHg7XHJcbn1cclxuXHJcbi5iZy1saWdodCAuaWNvbi1uYXYgaW1ne1xyXG4gICAgd2lkdGg6IDE3cHggO1xyXG59XHJcbi5iZy1saWdodCAuaWNvbi1uYXYgYXtcclxuICAgIGNvbG9yOiNGRkY7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLmJnLWxpZ2h0IC5pY29uLW5hdiBhOmhvdmVye1xyXG4gICAgY29sb3I6I0ZGRjtcclxufVxyXG4uYmctbGlnaHQgLmRpc3BsYXktbWVudXtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmZhLWNsb3Nle1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDo5OTJweCl7XHJcbiAgICAuYmctbGlnaHQgLmRpc3BsYXktbWVudXtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH0gXHJcbiAgICAubmF2LW1lbnUtaWNvbiAubmF2LWl0ZW17XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG4gICAgLm5hdi1tZW51LWljb257ICBcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgIC5iZy1saWdodCAubmF2YmFyLWNvbGxhcHNle1xyXG4gICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTFiMjk7XHJcbiAgICAgICAgdG9wOjA7XHJcbiAgICAgICAgcmlnaHQ6LTIwMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgICAuYmctbGlnaHQgLmZhe1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGNvbG9yOiNGRkY7XHJcbiAgICAgICAgbWFyZ2luOiAxMnB4IDI1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAuYmctbGlnaHQgLm5hdi1pdGVtLmFjdGl2ZSA+IC5uYXYtbGluazo6YmVmb3JlICwuYmctbGlnaHQgLm5hdi1pdGVtIC5uYXYtbGluazpob3Zlcjo6YmVmb3Jle1xyXG4gICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICB9XHJcbiAgICAuYmctbGlnaHQgLm5hdi1pdGVtIC5uYXYtbGlua3tcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgfVxyXG4gICAgIFxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/portfolio/portfolio.component.ts":
/*!**************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ts ***!
  \**************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PortfolioComponent {
    constructor() { }
    ngOnInit() {
        $(function () {
            var selectedClass = "";
            $(".portfolio li").click(function () {
                selectedClass = $(this).attr("data-rel");
                $(".portfolio .projects").fadeTo(50, 0.1);
                $(".portfolio .projects .pics").not("." + selectedClass).fadeOut().removeClass('animation');
                // $(".portfolio .projects .pics ").not("."+selectedClass).parent().attr("style", "display: none !important");
                setTimeout(function () {
                    $("." + selectedClass).fadeIn().addClass('animation');
                    $(".portfolio .projects").fadeTo(300, 1);
                }, 300);
            });
        });
        $('.portfolio li').click(function () {
            $('.portfolio li').removeClass("filter active");
            $(this).addClass('active');
        });
    }
}
PortfolioComponent.ɵfac = function PortfolioComponent_Factory(t) { return new (t || PortfolioComponent)(); };
PortfolioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PortfolioComponent, selectors: [["app-portfolio"]], decls: 81, vars: 0, consts: [[1, "portfolio"], [1, "container"], [1, "text-center"], ["data-rel", "all", 1, "filter", "active"], ["data-rel", "web", 1, "filter"], ["data-rel", "typo", 1, "filter"], ["data-rel", "branding", 1, "filter"], ["data-rel", "develop", 1, "filter"], [1, "row", "projects"], [1, "col-md-4", "col-12", "images"], [1, "basic-img", "pics", "animation", "all", "branding"], ["src", "../../assets/img/05 (1).png"], [1, "overlay"], [1, "basic-img", "pics", "animation", "all", "typo"], [1, "basic-img", "pics", "animation", "all", "web"], [1, "height-img", "pics", "animation", "all", "web"], ["src", "../../assets/img/07.png"], [1, "basic-img", "pics", "animation", "all", "develop"], [1, "col-md-8", "col-12", "images"], ["src", "../../assets/img/03 (3).png"], [1, "btn-more"], [1, "btn"]], template: function PortfolioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "case studies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Our Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "ALL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "WEBDESIGN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "TYPO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "BRANDING");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "DEVELOPEMENT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Branding Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "design,mockup,inspiration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Typo Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "design,mockup,inspiration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Branding Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "design,mockup,inspiration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Web Design Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "design,mockup,inspiration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Web Design Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "design,mockup,inspiration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Developement Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "design,mockup,inspiration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Developement Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "design,mockup,inspiration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "LOAD MORE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".portfolio[_ngcontent-%COMP%] {\r\noverflow: hidden;\r\npadding: 0;\r\nmargin: 0;\r\n}\r\n.portfolio[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{\r\n    padding: 0 103px;\r\n}\r\n.portfolio[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    display: block;\r\n    margin-top: 75px;\r\n    color: #a2adb4;\r\n    font-size: 14px;\r\n    letter-spacing: 2px;\r\n    text-transform: uppercase;\r\n    text-align: center;\r\n}\r\n.portfolio[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    font-size: 48px;\r\n    font-weight: 800;\r\n    margin-bottom: 55px;\r\n}\r\n.portfolio[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n}\r\n.portfolio[_ngcontent-%COMP%]   .basic-img[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 290px;\r\n    background-color: #DDD;\r\n    margin-bottom: 10px;\r\n    position: relative;\r\n}\r\n.portfolio[_ngcontent-%COMP%]   .height-img[_ngcontent-%COMP%]{\r\n    height: 590px;\r\n    width: 100%;\r\n    background: #DDD;\r\n    position: relative;\r\n    margin-bottom: 10px;\r\n}\r\n.portfolio[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]{\r\n    padding:0 6px;\r\n   \r\n}\r\n.portfolio[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    margin-bottom: 30px;\r\n    padding: 0;\r\n}\r\n.portfolio[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    cursor: pointer;\r\n    margin-left: 15px;\r\n    font-weight: 600;\r\n}\r\n.portfolio[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\r\n    color:#1f7ee8;\r\n    position: relative;\r\n}\r\n.portfolio[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]::before{\r\n    content: '';\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    height: 2px;\r\n    width: 100%;\r\n    background-color: #1f7ee8;\r\n}\r\n.portfolio[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    color: #FFF;\r\n    background: #fe531da1;\r\n    width: 100%;\r\n    height: 100%;\r\n    opacity: 0;\r\n    transition: 0.5s;\r\n}\r\n.portfolio[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    margin-top: 85px;\r\n    font-weight: 500;\r\n}\r\n.portfolio[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{\r\n    width: 35%;\r\n    background: #FFF;\r\n    height: 2px;\r\n    margin-top: 20px;\r\n}\r\n.portfolio[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    margin-top: 0;\r\n    color: #ffffffbf;\r\n}\r\n.portfolio[_ngcontent-%COMP%]   .pics[_ngcontent-%COMP%]{\r\n    transition: 0.5s;\r\n    cursor: pointer;\r\n}\r\n.portfolio[_ngcontent-%COMP%]   .pics[_ngcontent-%COMP%]:hover    > .overlay[_ngcontent-%COMP%]{\r\n    opacity: 1;\r\n}\r\n.portfolio[_ngcontent-%COMP%]   .height-img[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\r\n    margin-top: 80%;\r\n}\r\n.portfolio[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    background: #b5c4c9;\r\n    border: 1px solid #b5c4c9;\r\n    padding: 13px 25px 15px;\r\n    color: #FFF;\r\n    font-weight: 600;\r\n    font-size: 13px;\r\n    border-radius: 30px;\r\n    transition: 0.4s;\r\n    margin-top: 10px;\r\n    margin-bottom: 7px;\r\n}\r\n.portfolio[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{\r\n    background: transparent;\r\n    color:#b5c4c9;\r\n}\r\n.portfolio[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus{\r\n    outline: 0;\r\n    box-shadow: none;\r\n}\r\n.btn-more[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    margin: 35px 0 60px;\r\n}\r\n@media (max-width:992px){\r\n    .portfolio[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{\r\n        padding: 0 15px;\r\n    }\r\n   \r\n}\r\n@media (max-width:768px){\r\n    .portfolio[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-size: 35px;\r\n    }\r\n    .portfolio[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n        font-size: 12px;\r\n    }\r\n}\r\n@media (max-width:576px){\r\n    .portfolio[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n        font-size: 13px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGZvbGlvL3BvcnRmb2xpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsZ0JBQWdCO0FBQ2hCLFVBQVU7QUFDVixTQUFTO0FBQ1Q7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxhQUFhOztBQUVqQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjtBQUdBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsT0FBTztJQUNQLFdBQVc7SUFDWCxXQUFXO0lBQ1gseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2QjtBQUdBO0lBQ0k7UUFDSSxlQUFlO0lBQ25COztBQUVKO0FBQ0E7SUFDSTtJQUNBLGVBQWU7SUFDZjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKO0FBQ0E7SUFDSTtRQUNJLGVBQWU7SUFDbkI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BvcnRmb2xpby9wb3J0Zm9saW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3J0Zm9saW8ge1xyXG5vdmVyZmxvdzogaGlkZGVuO1xyXG5wYWRkaW5nOiAwO1xyXG5tYXJnaW46IDA7XHJcbn1cclxuLnBvcnRmb2xpbyAuY29udGFpbmVye1xyXG4gICAgcGFkZGluZzogMCAxMDNweDtcclxufVxyXG4ucG9ydGZvbGlvIHNwYW57XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDc1cHg7XHJcbiAgICBjb2xvcjogI2EyYWRiNDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5wb3J0Zm9saW8gaDF7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDQ4cHg7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTVweDtcclxufVxyXG4ucG9ydGZvbGlvIGltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuLnBvcnRmb2xpbyAuYmFzaWMtaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDI5MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RERDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnBvcnRmb2xpbyAuaGVpZ2h0LWltZ3tcclxuICAgIGhlaWdodDogNTkwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICNEREQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4ucG9ydGZvbGlvIC5pbWFnZXN7XHJcbiAgICBwYWRkaW5nOjAgNnB4O1xyXG4gICBcclxufVxyXG4ucG9ydGZvbGlvIHVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG4ucG9ydGZvbGlvIHVsIGxpe1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG5cclxuLnBvcnRmb2xpbyB1bCBsaS5hY3RpdmUge1xyXG4gICAgY29sb3I6IzFmN2VlODtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4ucG9ydGZvbGlvIHVsIGxpLmFjdGl2ZTo6YmVmb3Jle1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZjdlZTg7XHJcbn1cclxuLnBvcnRmb2xpbyAub3ZlcmxheXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIGJhY2tncm91bmQ6ICNmZTUzMWRhMTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuXHJcbi5wb3J0Zm9saW8gLm92ZXJsYXkgaDR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA4NXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4ucG9ydGZvbGlvIC5vdmVybGF5IGhye1xyXG4gICAgd2lkdGg6IDM1JTtcclxuICAgIGJhY2tncm91bmQ6ICNGRkY7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLnBvcnRmb2xpbyAub3ZlcmxheSBzcGFue1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIGNvbG9yOiAjZmZmZmZmYmY7XHJcbn1cclxuLnBvcnRmb2xpbyAucGljc3tcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnBvcnRmb2xpbyAucGljczpob3ZlciA+IC5vdmVybGF5e1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG4ucG9ydGZvbGlvIC5oZWlnaHQtaW1nIC5vdmVybGF5IGg0e1xyXG4gICAgbWFyZ2luLXRvcDogODAlO1xyXG59XHJcblxyXG4ucG9ydGZvbGlvIGJ1dHRvbntcclxuICAgIGJhY2tncm91bmQ6ICNiNWM0Yzk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYjVjNGM5O1xyXG4gICAgcGFkZGluZzogMTNweCAyNXB4IDE1cHg7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC40cztcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbn1cclxuLnBvcnRmb2xpbyBidXR0b246aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiNiNWM0Yzk7XHJcbn1cclxuLnBvcnRmb2xpbyBidXR0b246Zm9jdXN7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4uYnRuLW1vcmV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDM1cHggMCA2MHB4O1xyXG59XHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6OTkycHgpe1xyXG4gICAgLnBvcnRmb2xpbyAuY29udGFpbmVye1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICAgIH1cclxuICAgXHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6NzY4cHgpe1xyXG4gICAgLnBvcnRmb2xpbyBoMXtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIH1cclxuICAgIC5wb3J0Zm9saW8gc3BhbntcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6NTc2cHgpe1xyXG4gICAgLnBvcnRmb2xpbyB1bCBsaXtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-portfolio',
                templateUrl: './portfolio.component.html',
                styleUrls: ['./portfolio.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pricing/pricing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pricing/pricing.component.ts ***!
  \**********************************************/
/*! exports provided: PricingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingComponent", function() { return PricingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);



class PricingComponent {
    constructor() { }
    ngOnInit() {
        aos__WEBPACK_IMPORTED_MODULE_1___default.a.init();
    }
}
PricingComponent.ɵfac = function PricingComponent_Factory(t) { return new (t || PricingComponent)(); };
PricingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PricingComponent, selectors: [["app-pricing"]], decls: 76, vars: 0, consts: [[1, "pricing"], [1, "container"], [1, "row"], [1, "col-lg-4", "col-sm-6"], ["data-aos", "fade-right", "data-aos-duration", "1500", 1, "item", "item1"], [1, "number"], ["data-aos", "fade-up", "data-aos-duration", "1500", 1, "item", "item2"], ["data-aos", "fade-left", "data-aos-duration", "1500", 1, "item", "item3"]], template: function PricingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "PLANS AND PRICING");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Check our best offers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "BEGINNER & STARTER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "29 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Dashboard entrance ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "1x User Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "1x E-Mail Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Webhosting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Customer Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " LOAD MORE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "business");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "49 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Dashboard entrance ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "1x User Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "1x E-Mail Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Webhosting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Customer Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " LOAD MORE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "professional");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "79 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Dashboard entrance ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "1x User Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "1x E-Mail Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Webhosting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Customer Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " LOAD MORE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".pricing[_ngcontent-%COMP%]{\r\n    padding: 85px 0 70px;\r\n    background: #f3fbfd;\r\n    margin-top: 50px;\r\n    overflow: hidden;\r\n}\r\n.pricing[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{\r\n    padding: 0 95px;\r\n}\r\n.pricing[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    display: block;\r\n    color: #a2adb4;\r\n    font-size: 14px;\r\n    letter-spacing: 2px;\r\n    text-transform: uppercase;\r\n    text-align: center;\r\n}\r\n.pricing[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    font-size: 48px;\r\n    font-weight: 800;\r\n    margin-bottom: 45px;\r\n}\r\n.pricing[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{\r\n    background: #FFF;\r\n    padding: 35px;\r\n    text-align: center;\r\n    box-shadow: 0 0 7px rgba(0,0,0,0.2);\r\n    border-radius: 5px;\r\n    margin-top: 15px;\r\n}\r\n.pricing[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{\r\n    width: 90px;\r\n    height: 90px;\r\n    margin: auto;\r\n    line-height: 90px;\r\n    background: #f3fbfd;\r\n    border-radius: 50%;\r\n    font-size: 42px;\r\n    font-weight: 900;\r\n}\r\n.pricing[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    margin-bottom: 10px;\r\n    font-size: 13px;\r\n}\r\n.pricing[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    color:#646464;\r\n    font-size: 14px;\r\n    margin-top: 10px;\r\n}\r\n.pricing[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n    list-style: none;\r\n    padding: 0;\r\n}\r\n.pricing[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    color:#646464;\r\n    font-size: 14px;\r\n    margin-top: 10px;\r\n}\r\n.pricing[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before{\r\n    font-family: FontAwesome;\r\n    content: \"\\f00c\";\r\n    background: #fe531d;\r\n    color: #FFF;\r\n    padding: 2px;\r\n    border-radius: 50%;\r\n    margin-right: 7px;\r\n    font-size: 10px;\r\n}\r\n.pricing[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    background: #1f7ee8;\r\n    border: 1px solid #1f7ee8;\r\n    padding: 10px 20px 12px;\r\n    color: #FFF;\r\n    font-weight: 600;\r\n    font-size: 13px;\r\n    border-radius: 30px;\r\n    transition: 0.4s;\r\n    margin-top: 10px;\r\n    margin-bottom: 7px;\r\n}\r\n.pricing[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus{\r\n    outline: 0;\r\n    box-shadow: none;\r\n}\r\n.pricing[_ngcontent-%COMP%]   .item1[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    background: #1f7ee8;\r\n    border: 1px solid #1f7ee8;\r\n}\r\n.pricing[_ngcontent-%COMP%]   .item1[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{\r\n    background-color: transparent;\r\n    color:#1f7ee8;\r\n\r\n}\r\n.pricing[_ngcontent-%COMP%]   .item2[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    background: #8e34ee;\r\n    border: 1px solid #8e34ee;\r\n}\r\n.pricing[_ngcontent-%COMP%]   .item2[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{\r\n    background-color: transparent;\r\n    color:#8e34ee;\r\n}\r\n.pricing[_ngcontent-%COMP%]   .item3[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    background: #fe531d;\r\n    border: 1px solid #fe531d;\r\n}\r\n.pricing[_ngcontent-%COMP%]   .item3[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{\r\n    background-color: transparent;\r\n    color:#fe531d;\r\n}\r\n.pricing[_ngcontent-%COMP%]   .item1[_ngcontent-%COMP%]{\r\n\r\n  border: 5px solid;\r\n  border-image-source: linear-gradient(100deg, rgba(64,148,231,1) 0%, rgba(45,219,224,1) 100%);\r\n  border-image-slice: 1;\r\n  border-bottom: 0;\r\n  border-right: 0; \r\n  border-left: 0;\r\n}\r\n.pricing[_ngcontent-%COMP%]   .item2[_ngcontent-%COMP%]{\r\n    border: 5px solid;\r\n    border-image-source: linear-gradient(100deg, rgba(105,23,215,1) 0%, rgba(223,39,124,1) 100%);\r\n    border-image-slice: 1;\r\n    border-bottom: 0;\r\n    border-right: 0; \r\n    border-left: 0;\r\n}\r\n.pricing[_ngcontent-%COMP%]   .item3[_ngcontent-%COMP%]{\r\n    border: 5px solid;\r\n    border-image-source: linear-gradient(100deg, rgba(251,34,57,1) 0%, rgba(248,106,49,1) 100%);\r\n    border-image-slice: 1;\r\n    border-bottom: 0;\r\n    border-right: 0; \r\n    border-left: 0;\r\n}\r\n@media (max-width:992px){\r\n   .pricing[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{\r\n       padding: 0 15px;\r\n   }\r\n}\r\n@media (max-width:768px){\r\n    .pricing[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-size: 35px;\r\n    }\r\n    .pricing[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n        font-size: 12px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpY2luZy9wcmljaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0lBQ2QsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1DQUFtQztJQUNuQyxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0IsYUFBYTs7QUFFakI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLDZCQUE2QjtJQUM3QixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0IsYUFBYTtBQUNqQjtBQUNBOztFQUVFLGlCQUFpQjtFQUNqQiw0RkFBNEY7RUFDNUYscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsY0FBYztBQUNoQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLDRGQUE0RjtJQUM1RixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsMkZBQTJGO0lBQzNGLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGNBQWM7QUFDbEI7QUFDQTtHQUNHO09BQ0ksZUFBZTtHQUNuQjtBQUNIO0FBRUE7SUFDSTtJQUNBLGVBQWU7SUFDZjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcHJpY2luZy9wcmljaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJpY2luZ3tcclxuICAgIHBhZGRpbmc6IDg1cHggMCA3MHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2YzZmJmZDtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5wcmljaW5nIC5jb250YWluZXJ7XHJcbiAgICBwYWRkaW5nOiAwIDk1cHg7XHJcbn1cclxuLnByaWNpbmcgc3BhbntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6ICNhMmFkYjQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ucHJpY2luZyBoMXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0NXB4O1xyXG59XHJcbi5wcmljaW5nIC5pdGVte1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRjtcclxuICAgIHBhZGRpbmc6IDM1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgN3B4IHJnYmEoMCwwLDAsMC4yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuLnByaWNpbmcgLm51bWJlcntcclxuICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbGluZS1oZWlnaHQ6IDkwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjNmYmZkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZm9udC1zaXplOiA0MnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxufVxyXG4ucHJpY2luZyAuaXRlbSBzcGFue1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG4ucHJpY2luZyAuaXRlbSBwe1xyXG4gICAgY29sb3I6IzY0NjQ2NDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuLnByaWNpbmcgdWx7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG4ucHJpY2luZyB1bCBsaXtcclxuICAgIGNvbG9yOiM2NDY0NjQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5wcmljaW5nIHVsIGxpOjpiZWZvcmV7XHJcbiAgICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XHJcbiAgICBjb250ZW50OiBcIlxcZjAwY1wiO1xyXG4gICAgYmFja2dyb3VuZDogI2ZlNTMxZDtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA3cHg7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuLnByaWNpbmcgYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZDogIzFmN2VlODtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxZjdlZTg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHggMTJweDtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDdweDtcclxufVxyXG4ucHJpY2luZyBidXR0b246Zm9jdXN7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4ucHJpY2luZyAuaXRlbTEgYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZDogIzFmN2VlODtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxZjdlZTg7XHJcbn1cclxuLnByaWNpbmcgLml0ZW0xIGJ1dHRvbjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6IzFmN2VlODtcclxuXHJcbn1cclxuLnByaWNpbmcgLml0ZW0yIGJ1dHRvbntcclxuICAgIGJhY2tncm91bmQ6ICM4ZTM0ZWU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOGUzNGVlO1xyXG59XHJcbi5wcmljaW5nIC5pdGVtMiBidXR0b246aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiM4ZTM0ZWU7XHJcbn1cclxuLnByaWNpbmcgLml0ZW0zIGJ1dHRvbntcclxuICAgIGJhY2tncm91bmQ6ICNmZTUzMWQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmU1MzFkO1xyXG59XHJcbi5wcmljaW5nIC5pdGVtMyBidXR0b246aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiNmZTUzMWQ7XHJcbn1cclxuLnByaWNpbmcgLml0ZW0xe1xyXG5cclxuICBib3JkZXI6IDVweCBzb2xpZDtcclxuICBib3JkZXItaW1hZ2Utc291cmNlOiBsaW5lYXItZ3JhZGllbnQoMTAwZGVnLCByZ2JhKDY0LDE0OCwyMzEsMSkgMCUsIHJnYmEoNDUsMjE5LDIyNCwxKSAxMDAlKTtcclxuICBib3JkZXItaW1hZ2Utc2xpY2U6IDE7XHJcbiAgYm9yZGVyLWJvdHRvbTogMDtcclxuICBib3JkZXItcmlnaHQ6IDA7IFxyXG4gIGJvcmRlci1sZWZ0OiAwO1xyXG59XHJcbi5wcmljaW5nIC5pdGVtMntcclxuICAgIGJvcmRlcjogNXB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLWltYWdlLXNvdXJjZTogbGluZWFyLWdyYWRpZW50KDEwMGRlZywgcmdiYSgxMDUsMjMsMjE1LDEpIDAlLCByZ2JhKDIyMywzOSwxMjQsMSkgMTAwJSk7XHJcbiAgICBib3JkZXItaW1hZ2Utc2xpY2U6IDE7XHJcbiAgICBib3JkZXItYm90dG9tOiAwO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAwOyBcclxuICAgIGJvcmRlci1sZWZ0OiAwO1xyXG59XHJcbi5wcmljaW5nIC5pdGVtM3tcclxuICAgIGJvcmRlcjogNXB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLWltYWdlLXNvdXJjZTogbGluZWFyLWdyYWRpZW50KDEwMGRlZywgcmdiYSgyNTEsMzQsNTcsMSkgMCUsIHJnYmEoMjQ4LDEwNiw0OSwxKSAxMDAlKTtcclxuICAgIGJvcmRlci1pbWFnZS1zbGljZTogMTtcclxuICAgIGJvcmRlci1ib3R0b206IDA7XHJcbiAgICBib3JkZXItcmlnaHQ6IDA7IFxyXG4gICAgYm9yZGVyLWxlZnQ6IDA7XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6OTkycHgpe1xyXG4gICAucHJpY2luZyAuY29udGFpbmVye1xyXG4gICAgICAgcGFkZGluZzogMCAxNXB4O1xyXG4gICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjc2OHB4KXtcclxuICAgIC5wcmljaW5nIGgxe1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgfVxyXG4gICAgLnByaWNpbmcgc3BhbntcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PricingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pricing',
                templateUrl: './pricing.component.html',
                styleUrls: ['./pricing.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Web Design & Doveloper\Projects\angular\task ui\eldas\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map