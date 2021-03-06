var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "@angular/common/http"], function (require, exports, core_1, http_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var httpOptions = {
        headers: new http_1.HttpHeaders({ 'Content-type': 'application/json' })
    };
    var PostService = /** @class */ (function () {
        function PostService(http) {
            this.http = http;
            this.postUrl = 'https://jsonplaceholder.typicode.com/posts';
        }
        PostService.prototype.getPosts = function () {
            return this.http.get(this.postUrl);
        };
        PostService = __decorate([
            core_1.Injectable(),
            __metadata("design:paramtypes", [http_1.HttpClient])
        ], PostService);
        return PostService;
    }());
    exports.PostService = PostService;
});
//# sourceMappingURL=post.service.js.map