import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponants } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { WelcomeTextComponent } from './welcome-text/welcome-text.component';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { GetinComponent } from './getin/getin.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    FooterComponent,
    HeaderComponent,
    UserComponent,
    WelcomeTextComponent,
    routingComponants,
    BlogComponent,
    AboutComponent,
    GetinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
