import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HeroComponent } from './components/hero/hero.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LogoComponent } from './components/logo/logo.component';
import { BecomeAuthorBtnComponent } from './components/become-author-btn/become-author-btn.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CommentsComponent } from './components/comments/comments.component';
import { ArticleComponent } from './components/article/article.component';
import { ProfileAboutComponent } from './components/profile-about/profile-about.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PublishArticleComponent } from './components/publish-article/publish-article.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeroComponent,
    MainLayoutComponent,
    ArticlesComponent,
    AuthorsComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    LogoComponent,
    BecomeAuthorBtnComponent,
    ProfileComponent,
    CommentsComponent,
    ArticleComponent,
    ProfileAboutComponent,
    SettingsComponent,
    PublishArticleComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    EditorModule
  ],
  providers: [
    provideClientHydration(),
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' }    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
