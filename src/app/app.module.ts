import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialAppModule } from './ngmaterial.module';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule } from '@angular/forms';
import { MainHeaderComponent } from './shared/main-header/main-header.component';
import { MainFooterComponent } from './shared/main-footer/main-footer.component';
import { ConclusionComponent } from './conclusion/conclusion.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { DeclarationComponent } from './declaration/declaration.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const appRoutes: Routes = [
  { path: '', component: DeclarationComponent},
  { path: 'documents', component: DocumentationComponent},
  { path: 'conclusion', component: ConclusionComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainFooterComponent,
    ConclusionComponent,
    MainNavComponent,
    DeclarationComponent,
    DocumentationComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialAppModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
