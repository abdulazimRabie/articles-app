import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { ArticleComponent } from './components/article/article.component';
import { ProfileAboutComponent } from './components/profile-about/profile-about.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PublishArticleComponent } from './components/publish-article/publish-article.component';
import { AppComponent } from './app.component';
import { authGuardGuard } from './guards/auth-guard.guard';

const routes: Routes = [
  {path: "", component: MainLayoutComponent, children: [
    {path: "", redirectTo: "home", pathMatch: "full"},
    {path: "home", component: HomeComponent},
    {path: "articles", component: ArticlesComponent},
    {path: "authors", component: AuthorsComponent},
    {path: "profile/:authorId", component: ProfileComponent, children: [
      {path: "articles", component: ArticlesComponent},
      {path: "about", component: ProfileAboutComponent},
      {path: "settings", component: SettingsComponent},
    ]},
    {path: "publish", component: PublishArticleComponent, canActivate: [authGuardGuard]},
    { path: 'article/:id', component: ArticleComponent }, // Route with articleId
  ]},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
