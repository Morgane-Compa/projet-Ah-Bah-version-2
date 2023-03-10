import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { CategoryComponent } from './pages/category/category.component';
import { JournalComponent } from './pages/journal/journal.component';
import { CgvComponent } from './pages/cgv/cgv.component';
import { PolitiqueComponent } from './pages/politique/politique.component';
import { MentionComponent } from './pages/mention/mention.component';
import { PanierComponent } from './pages/panier/panier.component';
import { AchatComponent } from './pages/achat/achat.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProposComponent } from './pages/propos/propos.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    CategoryComponent,
    JournalComponent,
    CgvComponent,
    PolitiqueComponent,
    MentionComponent,
    PanierComponent,
    AchatComponent,
    ContactComponent,
    ProposComponent,
    NotFoundComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
