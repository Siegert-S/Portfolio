import { Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

export const routes: Routes = [
    { path: '', component: ContentComponent },
    { path: 'legal', component: LegalNoticeComponent },
    { path: 'policy', component: PrivacyPolicyComponent },
];
