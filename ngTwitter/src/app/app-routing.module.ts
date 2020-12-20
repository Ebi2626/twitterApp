import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { BookmarksComponent } from './pages/bookmarks/bookmarks.component';
import { UserComponent } from './pages/user/user.component';
import { ListsComponent } from './pages/user/lists/lists.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: 'home',
    component: DashboardComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'explore',
    component: ExploreComponent,
    pathMatch: 'full'
  },
  {
    path: 'notification',
    component: NotificationsComponent,
    pathMatch: 'full'
  },
  {
    path: 'messages',
    component: MessagesComponent,
    pathMatch: 'full'
  }, 
  {
    path: 'bookmarks',
    component: BookmarksComponent,
    pathMatch: 'full'
  },
  {
    path: 'user',
    component: UserComponent,
    pathMatch: 'full'
  },
  {
    path: 'user/lists',
    component: ListsComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
