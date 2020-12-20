import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MenuComponent } from './components/menu/menu.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { PostComponent } from './components/post/post.component';
import { SearchComponent } from './components/search/search.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { BookmarksComponent } from './pages/bookmarks/bookmarks.component';
import { UserComponent } from './pages/user/user.component';
import { ListsComponent } from './pages/user/lists/lists.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { GlobalTemplateComponent } from './components/global-template/global-template.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MenuComponent,
    NewPostComponent,
    PostComponent,
    SearchComponent,
    ExploreComponent,
    NotificationsComponent,
    MessagesComponent,
    BookmarksComponent,
    UserComponent,
    ListsComponent,
    PageNotFoundComponent,
    GlobalTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
