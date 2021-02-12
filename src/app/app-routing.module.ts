import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { RoomBookingRequestComponent } from './room-booking-request/room-booking-request.component';
import { FeedbackComponent } from './feedback/feedback.component';

const routes: Routes = [
  {"path":'',"component":HomeComponent},
  {"path":"about","component":AboutComponent},
  {"path":"contact","component":ContactComponent},
  {"path":"login","component":AuthenticationComponent},
  {"path":"room-booking","component":RoomBookingRequestComponent },
  {"path":"feedback","component":FeedbackComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
