var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "@angular/core", "@angular/platform-browser", "@angular/forms", "@angular/common/http", "./services/post.service", "./components/posts/posts.component", "./app.component"], function (require, exports, core_1, platform_browser_1, forms_1, http_1, post_service_1, posts_component_1, app_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AppModule = /** @class */ (function () {
        function AppModule() {
        }
        // Avoid bootstraping any component statically because we need to attach to
        // the portlet's DOM, which is different for each portlet instance and,
        // thus, cannot be determined until the page is rendered (during runtime).
        AppModule.prototype.ngDoBootstrap = function () { };
        AppModule = __decorate([
            core_1.NgModule({
                imports: [
                    platform_browser_1.BrowserModule,
                    http_1.HttpClientModule,
                    forms_1.FormsModule
                ],
                declarations: [
                    app_component_1.AppComponent,
                    posts_component_1.PostsComponent
                ],
                entryComponents: [app_component_1.AppComponent],
                bootstrap: [],
                providers: [
                    post_service_1.PostService
                ]
            })
        ], AppModule);
        return AppModule;
    }());
    exports.AppModule = AppModule;
});
//# sourceMappingURL=app.module.js.map