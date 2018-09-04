webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-customers/add-customers.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/add-customers/add-customers.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">Please fill the customer details:</h4>\n      </div>\n      <div class=\"modal-body\">\n        <form class=\"form-horizontal\">\n          <div class=\"form-group\">\n            <div class=\"col-sm-12 col-md-6 col-lg-6\" [ngClass]=\"displayFieldCss('FirstName')\">\n              <label for=\"FirstName\" class=\"control-label required\">First Name</label>\n              <input type=\"text\" id=\"FirstName\" class=\"form-control\" formControlName=\"FirstName\">\n              <app-form-error [displayError]=\"isFieldValid('FirstName')\" errorMsg=\"Please write your first name\">\n              </app-form-error>\n            </div>\n            <div class=\"col-sm-12 col-md-6 col-lg-6\" [ngClass]=\"displayFieldCss('LastName')\">\n              <label for=\"LastName\" class=\"control-label required\">Last Name</label>\n              <input type=\"text\" id=\"LastName\" class=\"form-control\" formControlName=\"LastName\">\n              <app-form-error [displayError]=\"isFieldValid('LastName')\" errorMsg=\"Please write your last name\">\n              </app-form-error>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <div class=\"col-sm-12 col-md-6 col-lg-6\" [ngClass]=\"displayFieldCss('email')\">\n              <label for=\"email\" class=\"control-label required\">Email</label>\n              <input type=\"text\" id=\"email\" class=\"form-control\" formControlName=\"email\">\n              <app-form-error [displayError]=\"isFieldValid('email')\" errorMsg=\"Please inform your email\">\n              </app-form-error>\n            </div>\n            <div class=\"col-sm-12 col-md-6 col-lg-6\" [ngClass]=\"displayFieldCss('PhoneNumber')\">\n              <label for=\"PhoneNumber\" class=\"control-label required\">Phone Number</label>\n              <input type=\"text\" id=\"PhoneNumber\" class=\"form-control\" formControlName=\"PhoneNumber\">\n              <app-form-error [displayError]=\"isFieldValid('PhoneNumber')\" errorMsg=\"Please inform your PhoneNumber\">\n              </app-form-error>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"col-sm-12 col-md-6 col-lg-6\" [ngClass]=\"displayFieldCss('CompanyName')\">\n              <label for=\"CompanyName\" class=\"control-label required\">Current Company Name</label>\n              <input type=\"text\" id=\"CompanyName\" class=\"form-control\" formControlName=\"CompanyName\">\n              <app-form-error [displayError]=\"isFieldValid('CompanyName')\" errorMsg=\"Please inform your current company name\">\n              </app-form-error>\n            </div>\n            <div class=\"col-sm-12 col-md-6 col-lg-6\" [ngClass]=\"displayFieldCss('ExpInYears')\">\n              <label for=\"ExpInYears\" class=\"control-label required\">Experience (In Years)</label>\n              <input type=\"number\" id=\"ExpInYears\" class=\"form-control\" formControlName=\"ExpInYears\">\n              <app-form-error [displayError]=\"isFieldValid('ExpInYears')\" errorMsg=\"Please inform your years of Experience\">\n              </app-form-error>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <div class=\"col-sm-12 col-md-6 col-lg-6\" [ngClass]=\"displayFieldCss('Designation')\">\n              <label for=\"Designation\" class=\"control-label required\">Designation</label>\n              <input type=\"text\" id=\"Designation\" class=\"form-control\" formControlName=\"Designation\">\n              <app-form-error [displayError]=\"isFieldValid('Designation')\" errorMsg=\"Please inform your designation\">\n              </app-form-error>\n            </div>\n            <div class=\"col-sm-12 col-md-6 col-lg-6\" [ngClass]=\"displayFieldCss('DOJ')\">\n              <label for=\"DOJ\" class=\"control-label required\">Date of Joining</label>\n              <input type=\"number\" id=\"DOJ\" class=\"form-control\" formControlName=\"DOJ\">\n              <app-form-error [displayError]=\"isFieldValid('DOJ')\" errorMsg=\"Please inform your date of joining\">\n              </app-form-error>\n            </div>\n          </div>\n\n          <div class=\"modal-footer\">\n            <button class=\"btn btn-primary\" (click)=\"onSubmit()\">Submit</button>\n            <button class=\"btn\" (click)=\"reset()\">Reset</button>\n          </div>\n        </form>\n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/add-customers/add-customers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCustomersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sharedservices_empService__ = __webpack_require__("./src/app/sharedservices/empService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddCustomersComponent = /** @class */ (function () {
    function AddCustomersComponent(formBuilder, empService) {
        this.formBuilder = formBuilder;
        this.empService = empService;
    }
    AddCustomersComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            FirstName: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required],
            LastName: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required],
            email: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].email]],
            PhoneNumber: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required],
            CompanyName: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required],
            ExpInYears: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required],
            Designation: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required],
            DOJ: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required],
        });
    };
    AddCustomersComponent.prototype.isFieldValid = function (field) {
        return ((!this.form.get(field).valid && this.form.get(field).touched) ||
            (this.form.get(field).untouched && this.formSumitAttempt));
    };
    AddCustomersComponent.prototype.displayFieldCss = function (field) {
        return {
            'has-error': this.isFieldValid(field),
            'has-feedback': this.isFieldValid(field)
        };
    };
    AddCustomersComponent.prototype.onSubmit = function () {
        this.formSumitAttempt = true;
        if (this.form.valid) {
            console.log('form submitted');
        }
    };
    AddCustomersComponent.prototype.reset = function () {
        this.form.reset();
        this.formSumitAttempt = false;
    };
    AddCustomersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-customers',
            template: __webpack_require__("./src/app/add-customers/add-customers.component.html"),
            styles: [__webpack_require__("./src/app/add-customers/add-customers.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__sharedservices_empService__["a" /* EmpService */]])
    ], AddCustomersComponent);
    return AddCustomersComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".welcome-message{\r\n    color:red;\r\n    -webkit-text-decoration: underline overline wavy blue;\r\n            text-decoration: underline overline wavy blue;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"text-align-center\">\n  <h1 class=\"welcome-message\">\n    <marquee>Welcome to {{ title }}</marquee>\n  </h1>\n</div>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sharedservices_empService__ = __webpack_require__("./src/app/sharedservices/empService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(empService) {
        this.empService = empService;
        this.title = "Customer Management Portal!!!";
    }
    ;
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__sharedservices_empService__["a" /* EmpService */]])
    ], AppComponent);
    return AppComponent;
}());

;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__detailpage_detail_component__ = __webpack_require__("./src/app/detailpage/detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sharedservices_empService__ = __webpack_require__("./src/app/sharedservices/empService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mainPage_mainpage_component__ = __webpack_require__("./src/app/mainPage/mainpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cardView_cardview_component__ = __webpack_require__("./src/app/cardView/cardview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__add_customers_add_customers_component__ = __webpack_require__("./src/app/add-customers/add-customers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__form_error_form_error_component__ = __webpack_require__("./src/app/form-error/form-error.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var appRoutes = [
    { path: 'customer/:id', component: __WEBPACK_IMPORTED_MODULE_4__detailpage_detail_component__["a" /* DetailComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__mainPage_mainpage_component__["a" /* MainPage */] },
    { path: 'submitFlag', component: __WEBPACK_IMPORTED_MODULE_8__add_customers_add_customers_component__["a" /* AddCustomersComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__detailpage_detail_component__["a" /* DetailComponent */],
                __WEBPACK_IMPORTED_MODULE_6__mainPage_mainpage_component__["a" /* MainPage */],
                __WEBPACK_IMPORTED_MODULE_7__cardView_cardview_component__["a" /* CardView */],
                __WEBPACK_IMPORTED_MODULE_8__add_customers_add_customers_component__["a" /* AddCustomersComponent */],
                __WEBPACK_IMPORTED_MODULE_9__form_error_form_error_component__["a" /* FormErrorComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(appRoutes, { enableTracing: true })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__sharedservices_empService__["a" /* EmpService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_4__detailpage_detail_component__["a" /* DetailComponent */], __WEBPACK_IMPORTED_MODULE_6__mainPage_mainpage_component__["a" /* MainPage */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cardView/cardview.component.css":
/***/ (function(module, exports) {

module.exports = ".card {\r\n    -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n    max-width: 275px;\r\n    margin: 5px;\r\n    text-align: center;\r\n    font-family: arial;\r\n    margin-bottom: 30px;\r\n    background: #2f242a8c;\r\n    color: #fff;\r\n  }\r\n  .card:hover{\r\n    -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    opacity: 0.7;\r\n  }\r\n  .title {\r\n    color: grey;\r\n    font-size: 18px;\r\n  }\r\n  button {\r\n    border: none;\r\n    outline: 0;\r\n    display: inline-block;\r\n    padding: 8px;\r\n    color: white;\r\n    background-color: #000;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    width: 100%;\r\n    font-size: 18px;\r\n  }\r\n  a {\r\n    text-decoration: none;\r\n    font-size: 22px;\r\n    color: black;\r\n  }\r\n  button:hover, a:hover {\r\n    opacity: 0.7;\r\n  }\r\n  .card-view{\r\n      background: #944e4e;\r\n  }\r\n  .CustomerImagePath{\r\n    width:245px;\r\n    height:245px;\r\n    padding: 10px;\r\n  }"

/***/ }),

/***/ "./src/app/cardView/cardview.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container card-view\">\n    <h2 class=\"text-align-center\">Customer Card</h2>\n    <div *ngFor=\"let emp of empData\">\n        <div class=\"card col-sm-6 col-md-4 col-lg-4\" [routerLink]=\"['./customer', emp.CustomerID]\" routerLinkActive=\"active\">\n               \n            <img class=\"CustomerImagePath\" src=\"{{emp.CustomerImagePath}}\" alt=\"John\">\n            <h1>{{emp.FirstName}}&nbsp;{{emp.LastName}}</h1>\n            <p>{{emp.CustomerID}}</p>\n            <p>{{emp.Email}}</p>\n            <p>{{emp.PhoneNumber}}</p>\n            <p class=\"title\">{{emp.DOJ}}</p>\n            <p>Harvard University</p>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/cardView/cardview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sharedservices_empService__ = __webpack_require__("./src/app/sharedservices/empService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardView = /** @class */ (function () {
    function CardView(empService) {
        this.empService = empService;
        this.empData = this.empService.getAllData();
    }
    CardView = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'card-view',
            template: __webpack_require__("./src/app/cardView/cardview.component.html"),
            styles: [__webpack_require__("./src/app/cardView/cardview.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__sharedservices_empService__["a" /* EmpService */]])
    ], CardView);
    return CardView;
}());



/***/ }),

/***/ "./src/app/detailpage/detail.component.css":
/***/ (function(module, exports) {

module.exports = "table {\r\n    width:100%;\r\n    border-collapse:collapse;\r\n}\r\ntable, th, td {\r\n    border: 1px solid #ccc;\r\n    border-collapse: collapse;\r\n}\r\nth, td {\r\n    padding: 15px;\r\n    text-align: left;\r\n}\r\ntable#t01 tr:nth-child(even) {\r\n    background-color: #eee;\r\n}\r\ntable#t01 tr:nth-child(odd) {\r\n   background-color: #fff;\r\n}\r\ntable#t01 th {\r\n    background-color: #61776f;\r\n    color: white;\r\n}\r\n.edit-details{\r\n    background: #2f242a8c;\r\n    color: #fff;\r\n}\r\n.back-link{\r\n    color: #fff;\r\n    font-size: 18px;\r\n}"

/***/ }),

/***/ "./src/app/detailpage/detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container edit-details\">\n    <a class=\"back-link\" [routerLink]=\"['']\" routerLinkActive=\"active\">Back</a>\n    <h2 class=\"text-align-center\">Edit the Details:</h2>\n    <h3 class=\"text-align-center\">Customer ID: {{ empData.CustomerID }}</h3>\n    <form class=\"form-horizontal\">\n        <div class=\"form-group\">\n            <label class=\"control-label col-sm-2\" for=\"FirstName\">First Name:</label>\n            <div class=\"col-sm-10\">\n                <input type=\"text\" class=\"form-control\" id=\"FirstName\" placeholder=\"{{empData.FirstName}}\" name=\"FirstName\">\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"control-label col-sm-2\" for=\"LastName\">Last Name:</label>\n            <div class=\"col-sm-10\">\n                <input type=\"text\" class=\"form-control\" id=\"LastName\" placeholder=\"{{empData.LastName}}\" name=\"LastName\">\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"control-label col-sm-2\" for=\"email\">Email:</label>\n            <div class=\"col-sm-10\">\n                <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"{{empData.Email}}\" name=\"email\">\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"control-label col-sm-2\" for=\"PhoneNumber\">Phone Number:</label>\n            <div class=\"col-sm-10\">\n                <input type=\"number\" class=\"form-control\" id=\"PhoneNumber\" placeholder=\"{{empData.PhoneNumber}}\" name=\"PhoneNumber\">\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <div class=\"col-sm-offset-2 col-sm-10\">\n                <button type=\"submit\" class=\"btn btn-default\" (click)=\"updateProfileData()\">update profile</button>\n            </div>\n        </div>\n    </form>\n\n</div>\n\n<div class=\"container\">\n    <h2 class=\"text-align-center\">Experience: </h2>\n    <table class=\"table\" border=\"1\" id=\"t01\">\n        <tr>\n            <th>Company Name</th>\n            <th>Exp. in Years</th>\n        </tr>\n        <tr *ngFor=\"let exp of empData.ExperienceRecords\">\n            <td>{{exp.CompanyName}}</td>\n            <td>{{exp.ExpInYears}}</td>\n        </tr>\n    </table>\n\n    <a class=\"back-link\" [routerLink]=\"['']\" routerLinkActive=\"active\">Back</a>\n</div>"

/***/ }),

/***/ "./src/app/detailpage/detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sharedservices_empService__ = __webpack_require__("./src/app/sharedservices/empService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailComponent = /** @class */ (function () {
    function DetailComponent(route, empService) {
        this.route = route;
        this.empService = empService;
        this.title = "Thought Disrupt";
        this.empId = route.snapshot.params['id'];
        this.empData = this.empService.getEmpData(this.empId);
    }
    DetailComponent.prototype.updateProfileData = function () {
        var _this = this;
        this.route.queryParams.forEach(function (params) {
            _this.empData.FirstName = params['FirstName'];
            _this.empData.LastName = params['LastName'];
            _this.empData.Email = params['Email'];
            _this.empData.PhoneNumber = params['PhoneNumber'];
            // console.log(this.route.snapshot.queryParams['FirstName']);
            // console.log(this.route.snapshot.queryParams['LastName']);
            // console.log(this.route.snapshot.queryParams['Email']);
            // console.log(this.route.snapshot.queryParams['PhoneNumber']);
        });
        // console.log(this.empData);
        // alert(this.empData);
    };
    DetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'emp-detail',
            template: __webpack_require__("./src/app/detailpage/detail.component.html"),
            styles: [__webpack_require__("./src/app/detailpage/detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__sharedservices_empService__["a" /* EmpService */]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/form-error/form-error.component.css":
/***/ (function(module, exports) {

module.exports = ".error-msg {\r\n    color: #a94442;\r\n  }\r\n  .fix-error-icon {\r\n    top: 27px;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/form-error/form-error.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"displayError\" >\n  <span class=\"glyphicon glyphicon-remove form-control-feedback fix-error-icon\"></span>\n  <span class=\"sr-only\">(error)</span>\n  <div class=\"error-msg\">\n    {{ errorMsg }}\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/form-error/form-error.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormErrorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormErrorComponent = /** @class */ (function () {
    function FormErrorComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], FormErrorComponent.prototype, "errorMsg", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], FormErrorComponent.prototype, "displayError", void 0);
    FormErrorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-form-error',
            template: __webpack_require__("./src/app/form-error/form-error.component.html"),
            styles: [__webpack_require__("./src/app/form-error/form-error.component.css")]
        })
    ], FormErrorComponent);
    return FormErrorComponent;
}());



/***/ }),

/***/ "./src/app/mainPage/mainpage.component.css":
/***/ (function(module, exports) {

module.exports = "/* table {\r\n    width:100%;\r\n}\r\ntable, th, td {\r\n    border: 1px solid #000;\r\n    border-collapse: collapse;\r\n}\r\nth, td {\r\n    padding: 15px;\r\n    text-align: left;\r\n}\r\ntable#t01 tr:nth-child(even) {\r\n    background-color: #eee;\r\n}\r\ntable#t01 tr:nth-child(odd) {\r\n   background-color: #fff;\r\n}\r\ntable#t01 th {\r\n    background-color: #35dc9e;\r\n    color: white;\r\n} */\r\n\r\n.list-view{\r\n    background: #2f242a8c;\r\n    color: #fff;\r\n}\r\n\r\n.list-view:hover{\r\n   text-decoration: underline;\r\n   color: red;\r\n}\r\n\r\n.list-heading{\r\n    color: #4261d4;\r\n}\r\n\r\n.simpos{\r\n    color: #9c4c4c;\r\n    font-size: 15px;\r\n}"

/***/ }),

/***/ "./src/app/mainPage/mainpage.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <table class=\"table\" border=\"1\" style=\"border-collapse:collapse\"  id=\"t01\">\n    <tr>\n        <th>CustomerID</th>\n        <th>Full Name</th>\n        <th>DOJ</th>\n        <th>Action</th>\n    </tr>\n    <tr *ngFor=\"let emp of empData\">\n        <td>{{emp.CustomerID}}</td>\n        <td>{{emp.FirstName}}&nbsp;{{emp.LastName}}</td>\n        <td>{{emp.DOJ}}</td>\n        <td><a  [routerLink]=\"['./customer', emp.CustomerID]\" routerLinkActive=\"active\">View Details</a></td>\n    </tr>\n</table> -->\n\n\n<div class=\"container\">\n\n    <!-- <div class=\"text-align-center\">\n        <p>Click on a button to choose list view or Card view.</p>\n        <button class=\"btn\" (click)=\"listView()\"><i class=\"fa fa-bars\"></i> List View</button>\n        <button class=\"btn active\" (click)=\"gridView()\"><i class=\"fa fa-th-large\"></i> Card View</button>\n    </div> -->\n    <!-- <button class=\"btn btn-primary\" (click)=\"addCustomers()\">Add Customers</button> -->\n \n    <button type=\"button\" class=\"btn btn-primary btn-lg\" data-toggle=\"modal\" data-target=\"#myModal\">Add Customers</button>\n    <app-add-customers></app-add-customers>\n\n    <ul class=\"nav nav-tabs\">\n        <h2 class=\"list-heading\">Customer List: </h2>\n        <p class=\"simpos\" [innerText]=\"seeListCardView\"></p>\n        <li class=\"active\"><a data-toggle=\"tab\" href=\"#home\">List View</a></li>\n        <li><a data-toggle=\"tab\" href=\"#menu1\">Card View</a></li>\n    </ul>\n\n    <div class=\"tab-content\">\n        <div id=\"home\" class=\"tab-pane fade in active\">\n            <ul class=\"list-group\" *ngFor=\"let emp of empData\">\n                <li class=\"list-group-item list-group-item-action list-view\" [routerLink]=\"['./customer', emp.CustomerID]\" routerLinkActive=\"active\">{{emp.FirstName}}&nbsp;{{emp.LastName}}</li>\n            </ul>\n        </div>\n        <div id=\"menu1\" class=\"tab-pane fade\">\n            <card-view></card-view>\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/mainPage/mainpage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sharedservices_empService__ = __webpack_require__("./src/app/sharedservices/empService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainPage = /** @class */ (function () {
    function MainPage(empService) {
        this.empService = empService;
        this.seeListCardView = "Click on a button to choose list view or Card view.";
        this.empData = this.empService.getAllData();
    }
    MainPage.prototype.addCustomers = function () {
        console.log("bhoodev ggg");
    };
    MainPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'main-page',
            template: __webpack_require__("./src/app/mainPage/mainpage.component.html"),
            styles: [__webpack_require__("./src/app/mainPage/mainpage.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__sharedservices_empService__["a" /* EmpService */]])
    ], MainPage);
    return MainPage;
}());



/***/ }),

/***/ "./src/app/sharedservices/empService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmpService = /** @class */ (function () {
    function EmpService() {
        this.empData = [{
                CustomerID: "ABC1001",
                FirstName: "Rajkumar",
                LastName: "Patel",
                Email: "rajkumarp@gmail.com",
                PhoneNumber: "888271442",
                CustomerImagePath: "./assets/images/customer_photos/1.png",
                ExperienceRecords: [
                    {
                        CompanyName: "Apple",
                        ExpInYears: 11
                    },
                    {
                        CompanyName: "Wikipedia",
                        ExpInYears: 12
                    },
                    {
                        CompanyName: "samsung R&D",
                        ExpInYears: 5
                    }
                ],
                DOJ: "02/03/2017",
                Designation: "Software Engineer"
            },
            {
                CustomerID: "ABC1002",
                FirstName: "Sagar",
                LastName: "Patel",
                Email: "sagarpatel@gmail.com",
                PhoneNumber: "8882717282",
                CustomerImagePath: "./assets/images/customer_photos/2.jpg",
                DOJ: "12/05/2017",
                ExperienceRecords: [
                    {
                        CompanyName: "RObert Bosch",
                        ExpInYears: 5
                    },
                    {
                        CompanyName: "Morisson company",
                        ExpInYears: 3
                    }
                ],
                Designation: "Software Developer"
            },
            {
                CustomerID: "ABC1003",
                FirstName: "Rana",
                LastName: "Gautam",
                Email: "Ranagautam@gmail.com",
                PhoneNumber: "9882619230",
                CustomerImagePath: "./assets/images/customer_photos/3.jpg",
                DOJ: "07/04/2017",
                ExperienceRecords: [
                    {
                        CompanyName: "Manipal Global",
                        ExpInYears: 1.3
                    },
                    {
                        CompanyName: "Merittrac",
                        ExpInYears: 2
                    }
                ],
                Designation: "Architect"
            },
            {
                CustomerID: "ABC1004",
                FirstName: "Ramesh",
                LastName: "Yadav",
                Email: "rameshyadav@gmail.com",
                PhoneNumber: "9882679230",
                CustomerImagePath: "./assets/images/customer_photos/4.jpg",
                DOJ: "25/05/2017",
                ExperienceRecords: [
                    {
                        CompanyName: "samsung company",
                        ExpInYears: 1
                    },
                    {
                        CompanyName: "ericcson company",
                        ExpInYears: 2
                    }
                ],
                Designation: "Accountant"
            },
            {
                CustomerID: "ABC1005",
                FirstName: "Neenu",
                LastName: "Chacko",
                Email: "ncchacko@gmail.com",
                PhoneNumber: "9772774772",
                CustomerImagePath: "./assets/images/customer_photos/5.jpg",
                DOJ: "12/10/2017",
                ExperienceRecords: [
                    {
                        CompanyName: "MINDS",
                        ExpInYears: 1
                    },
                    {
                        CompanyName: "Manipal Hospital",
                        ExpInYears: 2.3
                    }
                ],
                Designation: "MBBS"
            },
            {
                CustomerID: "ABC1006",
                FirstName: "Sonal",
                LastName: "Katiyar",
                Email: "sonalkat@gmail.com",
                PhoneNumber: "7877733737",
                CustomerImagePath: "./assets/images/customer_photos/6.jpg",
                DOJ: "12/02/2017",
                ExperienceRecords: [
                    {
                        CompanyName: "Ericsson",
                        ExpInYears: 5
                    },
                    {
                        CompanyName: "sony world",
                        ExpInYears: 3
                    }
                ],
                Designation: "Software Developer"
            },
            {
                CustomerID: "ABC1007",
                FirstName: "Rana",
                LastName: "Singh",
                Email: "ranasingh03@gmail.com",
                PhoneNumber: "9882229230",
                CustomerImagePath: "./assets/images/customer_photos/7.jpg",
                DOJ: "07/03/2017",
                ExperienceRecords: [
                    {
                        CompanyName: "Manipal Global",
                        ExpInYears: 1.3
                    },
                    {
                        CompanyName: "Merittrac",
                        ExpInYears: 2
                    }
                ],
                Designation: "Lead Engineer"
            },
            {
                CustomerID: "ABC1008",
                FirstName: "Vinay",
                LastName: "Yadav",
                Email: "vinayyadav@gmail.com",
                PhoneNumber: "7882229230",
                CustomerImagePath: "./assets/images/customer_photos/8.png",
                DOJ: "25/05/2017",
                ExperienceRecords: [
                    {
                        CompanyName: "samsung company",
                        ExpInYears: 1
                    },
                    {
                        CompanyName: "soroco",
                        ExpInYears: 2
                    }
                ],
                Designation: "Lead Engineer"
            },
            {
                CustomerID: "ABC1009",
                FirstName: "Yogendra",
                LastName: "G",
                Email: "yogeshwon@gmail.com",
                PhoneNumber: "9272772727",
                CustomerImagePath: "./assets/images/customer_photos/9.jpg",
                DOJ: "02/05/2018",
                ExperienceRecords: [
                    {
                        CompanyName: "Aricent",
                        ExpInYears: 5
                    },
                    {
                        CompanyName: "facebook",
                        ExpInYears: 1
                    }
                ],
                Designation: "Software Developer"
            },
            {
                CustomerID: "ABC1010",
                FirstName: "Madhu",
                LastName: "Kumari",
                Email: "madhukumari@gmail.com",
                PhoneNumber: "7822223555",
                CustomerImagePath: "./assets/images/customer_photos/10.jpg",
                DOJ: "03/04/2017",
                ExperienceRecords: [
                    {
                        CompanyName: "Manipal Global",
                        ExpInYears: 1.3
                    },
                    {
                        CompanyName: "Merittrac",
                        ExpInYears: 2
                    }
                ],
                Designation: "Junior Developer"
            },
            {
                CustomerID: "ABC1011",
                FirstName: "Sayra",
                LastName: "Rehman",
                Email: "sayrarehman@gmail.com",
                PhoneNumber: "9888879230",
                CustomerImagePath: "./assets/images/customer_photos/11.jpg",
                DOJ: "25/05/2017",
                ExperienceRecords: [
                    {
                        CompanyName: "w3q",
                        ExpInYears: 1
                    },
                    {
                        CompanyName: "Talentica Software",
                        ExpInYears: 2
                    }
                ],
                Designation: "Accountant"
            }
        ];
    }
    EmpService.prototype.getAllData = function () {
        return this.empData;
    };
    EmpService.prototype.getEmpData = function (id) {
        var aData = this.empData.filter(function (oEmp) {
            return oEmp.CustomerID === id;
        });
        if (aData)
            return aData[0];
        else
            null;
    };
    EmpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], EmpService);
    return EmpService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map