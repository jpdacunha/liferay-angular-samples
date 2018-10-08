import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Injectable } from '@angular/core';
import { HttpModule} from "@angular/http";

import { ContextLoaderService } from './services/context.loader.service';
import { AppComponent }  from './app.component';

@NgModule({
	imports: [
		BrowserModule,
		HttpModule
	],
	declarations: [
		AppComponent
	],
	entryComponents: [AppComponent],
	bootstrap: [], // Do not bootstrap anything (see ngDoBootstrap() below)
	providers: [
		ContextLoaderService
	]
})
export class AppModule {

	// Avoid bootstraping any component statically because we need to attach to
	// the portlet's DOM, which is different for each portlet instance and,
	// thus, cannot be determined until the page is rendered (during runtime).

	ngDoBootstrap() {}
}