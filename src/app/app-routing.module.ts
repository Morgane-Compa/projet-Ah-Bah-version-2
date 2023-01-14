import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './pages/category/category.component';
import { AchatComponent } from './pages/achat/achat.component';
import { CgvComponent } from './pages/cgv/cgv.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { JournalComponent } from './pages/journal/journal.component';
import { MentionComponent } from './pages/mention/mention.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PaiementComponent } from './pages/paiement/paiement.component';
import { PanierComponent } from './pages/panier/panier.component';
import { PolitiqueComponent } from './pages/politique/politique.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProposComponent } from './pages/propos/propos.component';
import { PaiementSuccessComponent } from './pages/paiement-success/paiement-success.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"categorie",
    component:CategoryComponent
  },
  {
    path:"paiement",
    component:PaiementComponent
  },
  {
    path:"paiement-succes",
    component:PaiementSuccessComponent
  },
  {
    path:"produits",
    component:ProductsComponent
  },
  {
    path:"contact",
    component: ContactComponent
  },
  {
    path:"achat",
    component: AchatComponent
  },
  {
    path:"panier",
    component: PanierComponent
  },
  {
    path:"cgv",
    component:CgvComponent
  },
  {
    path:"journal",
    component:JournalComponent
  },
  {
    path:"mentions-legales",
    component:MentionComponent
  },
  {
    path:"politique",
    component: PolitiqueComponent
  },
  {
    path:"propos",
    component:ProposComponent
  },
  {
    path:"not-found",
    component: NotFoundComponent
  },
  {
    path: "**",
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

