import { TestData } from './testdata';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApipostComponent } from './apipost/apipost.component';
import { BookService } from './book.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
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
    GetinComponent,
    ApipostComponent,
    ChildComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(TestData),
    CommonModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
