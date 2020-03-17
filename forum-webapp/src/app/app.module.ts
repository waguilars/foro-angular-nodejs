import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFileUploaderModule } from 'angular-file-uploader';
import { MomentModule } from 'angular2-moment';
import { NgxHighlightJsModule } from '@nowzoo/ngx-highlight-js';

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

import { AppRoutingModule } from './app.routing';
import { UserEditComponent } from './components/user-edit/user-edit.component';

import { PanelModule } from './panel/panel.module';
import { TopicsComponent } from './components/topics/topics.component';
import { TopicDetailComponent } from './components/topic-detail/topic-detail.component';
import { UsersComponent } from './components/users/users.component';

@NgModule({
    declarations: [
        AppComponent,
        RegisterComponent,
        LoginComponent,
        HomeComponent,
        UserEditComponent,
        TopicsComponent,
        TopicDetailComponent,
        UsersComponent
    ],
    imports: [
        BrowserModule,
        PanelModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        AngularFileUploaderModule,
        MomentModule,
        NgxHighlightJsModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
