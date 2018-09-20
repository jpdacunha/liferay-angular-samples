var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core"], function (require, exports, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UsersComponent = /** @class */ (function () {
        function UsersComponent() {
            this.users = [];
            this.showExtended = false;
            this.loaded = false;
            this.enableAdd = true;
            this.currentClasses = {};
            this.currentStyles = {};
        }
        UsersComponent.prototype.ngOnInit = function () {
            //Endroit il faudrait apeller un service pour renseigner des properties par exemple. Meilleur endroit que dans le contructeur
            var _this = this;
            setTimeout(function () {
                _this.users = [
                    {
                        firstName: 'John',
                        lastName: 'Doe ',
                        age: 30,
                        address: {
                            street: '50 Main st',
                            city: 'Boston ',
                            state: 'MA'
                        },
                        image: 'https://loremflickr.com/100/100/paris',
                        isActive: true,
                        balance: 100,
                        registered: new Date('01/02/2018 08:30:00'),
                        hide: true
                    },
                    {
                        firstName: 'Jean-Paul',
                        lastName: 'DA CUNHA',
                        age: 38,
                        address: {
                            street: '07 rue de Maffliers',
                            city: 'Monstoult',
                            state: 'France'
                        },
                        image: 'https://loremflickr.com/100/100/people',
                        isActive: false,
                        balance: 200,
                        //C'est un piége on parle du 11 mars 2017
                        registered: new Date('03/11/2017 08:30:00'),
                        hide: true
                    },
                    {
                        firstName: 'Elena',
                        lastName: 'DA CUNHA',
                        image: 'https://loremflickr.com/100/100/girl',
                        isActive: true,
                        hide: true
                    },
                    {
                        firstName: 'Jenny',
                        lastName: 'From the block',
                        age: 30,
                        address: {
                            street: '48 Main st',
                            city: 'Boston',
                            state: 'MA'
                        },
                        image: 'https://loremflickr.com/100/100/girl',
                        isActive: true,
                        balance: 500,
                        registered: new Date('11/02/2016 10:30:00'),
                        hide: true
                    }
                ];
                _this.addUser({
                    firstName: 'David',
                    lastName: 'Jackson',
                    age: 30,
                    address: {
                        street: '48 Main st',
                        city: 'Boston',
                        state: 'MA'
                    },
                    image: 'https://loremflickr.com/100/100/man',
                    hide: true
                });
                _this.loaded = true;
            }, 2000);
            this.showExtended = true;
            this.setCurrentClasses();
            this.setCurrentStyles();
        };
        UsersComponent.prototype.addUser = function (user) {
            this.users.push(user);
        };
        UsersComponent.prototype.setCurrentClasses = function () {
            this.currentClasses = {
                'btn-success': this.enableAdd,
                'big-text': this.showExtended
            };
        };
        UsersComponent.prototype.setCurrentStyles = function () {
            this.currentStyles = {
                'padding-top': this.showExtended ? '0' : '40px',
                'font-size': this.showExtended ? '' : '40px'
            };
        };
        UsersComponent.prototype.fireEvent = function (e) {
            console.log('Button Clicked : ' + e.type);
        };
        UsersComponent.prototype.toggleHide = function (user) {
            user.hide = !user.hide;
        };
        UsersComponent = __decorate([
            core_1.Component({
                selector: 'app-users',
                templateUrl: '/o/angular-users-portlet/js/app/components/users/users.component.html',
                styleUrls: ['/o/angular-users-portlet/js/app/components/users/users.component.css']
            }),
            __metadata("design:paramtypes", [])
        ], UsersComponent);
        return UsersComponent;
    }());
    exports.UsersComponent = UsersComponent;
});
//# sourceMappingURL=users.component.js.map