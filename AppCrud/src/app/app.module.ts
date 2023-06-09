import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';
import { BodyComponent } from './Body/body.component';
import { FooterComponent } from './Footer/footer.component';
import { ListproductComponent } from './Listproduct/listproduct.component';
import { SaveproductComponent } from './Saveproduct/saveproduct.component';
import { AboutusComponent } from './Aboutus/aboutus.component';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    ListproductComponent,
    SaveproductComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'home', component:BodyComponent},
      {path:'list', component:ListproductComponent},
      {path:'save', component:SaveproductComponent},
      {path:'about', component:AboutusComponent},
      {path: '', redirectTo: 'home',pathMatch:'full'},
      {path: '**', redirectTo: 'home',pathMatch:'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
