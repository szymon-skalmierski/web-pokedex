import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonComponent } from './pokemon-list/pokemon/pokemon.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonDetailsComponent } from './pokemon-list/pokemon-details/pokemon-details.component';
import { MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator';
import { CustomMatPaginator } from './pokemon-list/custom-mat-paginator';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { ShinyDirective } from './pokemon-list/pokemon-details/shiny.directive';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    PokemonListComponent,
    PokemonDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatPaginatorModule,
    MatInputModule,
    MatIconModule,
    MatTabsModule,
    ShinyDirective,
  ],
  providers: [{
    provide: MatPaginatorIntl, 
    useClass: CustomMatPaginator
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
