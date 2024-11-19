import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { TrackComponent } from './Components/track/track.component';
import { CommunityComponent } from './Components/community/community.component';
import { JobOppComponent } from './Components/job-opp/job-opp.component';
import { ProProfileComponent } from './Components/pro-profile/pro-profile.component';
import { DepiPointsComponent } from './Components/depi-points/depi-points.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { AuthguardService } from './services/authguard.service';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { HomeComponent } from './Components/dashboard/home/home.component';
import { ProjectComponent } from './Components/dashboard/project/project.component';
import { QuizComponent } from './Components/dashboard/quiz/quiz.component';
import { AgendaComponent } from './Components/dashboard/agenda/agenda.component';
import { LearningComponent } from './Components/dashboard/learning/learning.component';
import { ConceptsComponent } from './Components/dashboard/concepts/concepts.component';
import { StreamingComponent } from './Components/dashboard/streaming/streaming.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component:LoginComponent, data: {title: "Login"}},
  { path: 'track', component:TrackComponent, data: {title: "Track"}, canActivate: [AuthguardService] },
  { path: 'community', component:CommunityComponent, data: {title: "Community"}, canActivate: [AuthguardService] },
  { path: 'job', component:JobOppComponent, data: {title: "Job"}, canActivate: [AuthguardService] },
  { path: 'profile', component:ProProfileComponent, data: {title: "Profile"}, canActivate: [AuthguardService] },
  { path: 'points', component:DepiPointsComponent, data: {title: "DEPI Points"}, canActivate: [AuthguardService] },
  { path: 'contact', component:ContactUsComponent, data: {title: "Contact Us"}, canActivate: [AuthguardService] },
  { path: 'dashboard', component:DashboardComponent, data: {title: "Dashboard"}, canActivate: [AuthguardService] },
  { path: 'home', component:HomeComponent, data: {title: "Dashboard-Home"}, canActivate: [AuthguardService] },
  { path: 'agenda',component:AgendaComponent, data: {title: "My Agenda"}, canActivate: [AuthguardService] },
  { path: 'project', component:ProjectComponent, data: {title: "Ongoing Projects"}, canActivate: [AuthguardService] },
  { path: 'quiz', component:QuizComponent, data: {title: "Quiz Assessments"}, canActivate: [AuthguardService] },
  { path: 'learning', component:LearningComponent, data: {title: "Learning Materials"}, canActivate: [AuthguardService] },
  { path: 'concepts', component:ConceptsComponent, data: {title: "Key Concepts"}, canActivate: [AuthguardService] },
  { path: 'streaming', component:StreamingComponent, data: {title: "Streaming Lessons"}, canActivate: [AuthguardService] }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
