import { Routes } from '@angular/router';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { LandingPageComponent } from './landing-page/landing-page.component';


export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'landing', component: LandingPageComponent },
    { path: 'legal-notice', component: LegalNoticeComponent }
];
