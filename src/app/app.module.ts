import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from './translate/translate.module';

import { NavComponent } from './nav/nav.component';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { TranslatePipe } from './translate.pipe';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';



@NgModule({
  declarations: [
    AppComponent,
    
    NavComponent,
    ProductComponent,
    TranslatePipe,
    ProductAddComponent,
    ProductEditComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    TranslateModule,
    RouterModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    
  
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
