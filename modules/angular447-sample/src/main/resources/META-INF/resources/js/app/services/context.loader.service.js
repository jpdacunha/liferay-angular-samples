var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "@angular/http"], function (require, exports, core_1, http_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ContextLoaderService = /** @class */ (function () {
        function ContextLoaderService(http) {
            this.http = http;
            this.url = "http://localhost:8080/fr/group/ordirope/testjp?p_p_id=angularportletconfgc&p_p_lifecycle=2&p_p_state=normal&p_p_mode=view&p_p_resource_id=angularportletconfgcContext&p_p_cacheability=cacheLevelPage";
        }
        ContextLoaderService.prototype.getValues = function () {
            return this.http.get(this.url);
        };
        ContextLoaderService = __decorate([
            core_1.Injectable(),
            __metadata("design:paramtypes", [http_1.Http])
        ], ContextLoaderService);
        return ContextLoaderService;
    }());
    exports.ContextLoaderService = ContextLoaderService;
});
//# sourceMappingURL=context.loader.service.js.map