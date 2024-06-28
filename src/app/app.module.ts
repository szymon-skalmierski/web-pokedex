import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CustomMatPaginator } from './pokemon-list/custom-mat-paginator';
import { PokemonComponent } from './pokemon-list/pokemon/pokemon.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { ShinyDirective } from './pokemon-list/pokemon-details/shiny.directive';
import { PokemonDetailsComponent } from './pokemon-list/pokemon-details/pokemon-details.component';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator';


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
    MatListModule,
    MatTableModule,
    ShinyDirective,
  ],
  providers: [{
    provide: MatPaginatorIntl, 
    useClass: CustomMatPaginator
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
