import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupsComponent } from './groups/groups.component';
import { HomeComponent } from './home/home.component';
import { JoinfreshComponent } from './joinfresh/joinfresh.component';
import { JoingroupComponent } from './joingroup/joingroup.component';
import { JoinhrComponent } from './joinhr/joinhr.component';
import { JoinldComponent } from './joinld/joinld.component';
import { MemberComponent } from './member/member.component';
import { PhotosComponent } from './photos/photos.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:'groups',component:GroupsComponent},
  {path:"",component:HomeComponent},
  {path:'member',component:MemberComponent},
  {path:'photos',component:PhotosComponent},
  {path:'profile',component:ProfileComponent},
  {path:'joingroup',component:JoingroupComponent},
  {path:'joinfresh',component:JoinfreshComponent},
  {path:'joinhr',component:JoinhrComponent},
  {path:'joinld',component:JoinldComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
