import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { LoginComponent } from './Components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TrackComponent } from './Components/track/track.component';
import { CommunityComponent } from './Components/community/community.component';
import { JobOppComponent } from './Components/job-opp/job-opp.component';
import { ProProfileComponent } from './Components/pro-profile/pro-profile.component';
import { DepiPointsComponent } from './Components/depi-points/depi-points.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { HomeComponent } from './Components/dashboard/home/home.component';
import { ProjectComponent } from './Components/dashboard/project/project.component';
import { QuizComponent } from './Components/dashboard/quiz/quiz.component';
import { AgendaComponent } from './Components/dashboard/agenda/agenda.component';
import { LearningComponent } from './Components/dashboard/learning/learning.component';
import { ConceptsComponent } from './Components/dashboard/concepts/concepts.component';
import { StreamingComponent } from './Components/dashboard/streaming/streaming.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    TrackComponent,
    CommunityComponent,
    JobOppComponent,
    ProProfileComponent,
    DepiPointsComponent,
    ContactUsComponent,
    NavBarComponent,
    DashboardComponent,
    HomeComponent,
    ProjectComponent,
    QuizComponent,
    AgendaComponent,
    LearningComponent,
    ConceptsComponent,
    StreamingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
