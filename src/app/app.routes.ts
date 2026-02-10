import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { TermsAndConditionComponent } from './pages/terms-and-condition/terms-and-condition.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AboutComponent } from './pages/about/about.component';
import { PostCardComponent } from './layouts/post-card/post-card.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';

export const routes: Routes = [
  {path : '', component :HomeComponent}, 
  {path : 'category', component :SingleCategoryComponent},
  {path: 'post' , component :SinglePostComponent},

  {path :'about', component :  AboutComponent},
  {path: 'terms-conditions' , component :TermsAndConditionComponent},
  {path: 'contact' , component :ContactUsComponent},
];
