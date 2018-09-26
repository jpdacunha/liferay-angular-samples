import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PostService } from './services/post.service';
import { PostsComponent } from './components/posts/posts.component';

import { AppComponent }  from './app.component';

@NgModule({
	imports: [
		BrowserModule,
		HttpModule
	],
	declarations: [
		AppComponent,
		PostsComponent
	],
	entryComponents: [AppComponent],
	bootstrap: [], // Do not bootstrap anything (see ngDoBootstrap() below)
	providers: [
		PostService
	]
})
export class AppModule {

	// Avoid bootstraping any component statically because we need to attach to
	// the portlet's DOM, which is different for each portlet instance and,
	// thus, cannot be determined until the page is rendered (during runtime).

	ngDoBootstrap() {}
}