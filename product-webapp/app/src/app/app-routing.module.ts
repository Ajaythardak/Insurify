import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PolicyDetailsComponent } from './policy-details/policy-details.component';
import { AddInsurancePolicyComponent } from './add-insurance-policy/add-insurance-policy.component';
import { ClaimComponent } from './claim/claim.component';
import { PoliciesComponent } from './policies/policies.component';
import { PreviewMarkupComponent } from './preview-markup/preview-markup.component';
import { RecommendationComponent } from './recommendation/recommendation.component';
 import { RegisterComponent } from './register/register.component';
import { UpdateComponent } from './update/update.component';

import { LoginComponent } from './login/login.component';
import { RenewalPolicyComponent } from './renewal-policy/renewal-policy.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { InsuranceDetailsComponent } from './insurance-details/insurance-details.component';
import { RenewalPolicyHomeComponent } from './renewal-policy-home/renewal-policy-home.component';
import { DetailsComponent } from './details/details.component';
import { PurchaseInsuranceComponent } from './purchase-insurance/purchase-insurance.component';
import { EditInsuranceComponent } from './edit-insurance/edit-insurance.component';
import { InsuranceProviderComponent } from './insurance-provider/insurance-provider.component';
import { PolicyAdvisorComponent } from './policy-advisor/policy-advisor.component';

// const routes: Routes = [{path:"",component:RecommendationComponent},{path:"register",component:RegisterComponent},{path:"",component:PolicyDetailsComponent}];

const routes: Routes = [
  {path:"",component:NavBarComponent,children:[
     {path:"",component:RecommendationComponent},
    {path:"insurance-provider",component:InsuranceProviderComponent},
    {path:"register",component:RegisterComponent},
    {path:"add-policy",component:AddInsurancePolicyComponent},
    {path:"policies", component:PoliciesComponent},
  
    {path: "renewal-update/:id", component: RenewalPolicyComponent},
    {path: "renewal-home", component: RenewalPolicyHomeComponent},
    {path:"details",component:DetailsComponent},
  // {path: "renewal", component: RenewalPolicyComponent},
    {path:"update", component:UpdateComponent},
    {path: "login", component: LoginComponent},
    {path: "nav-bar", component: NavBarComponent},
    {path:"claim",component:ClaimComponent},
    {path:"buy",component:PurchaseInsuranceComponent},
    {path:"policyDetails",component:InsuranceDetailsComponent},
    {path:"claim",component:ClaimComponent},
    {path:"InsuranceDetails",component:InsuranceDetailsComponent},
    {path:"edit-insurance",component:EditInsuranceComponent},
    {path: "policy-advisor", component: PolicyAdvisorComponent}

]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
