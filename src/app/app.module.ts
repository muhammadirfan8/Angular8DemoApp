import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ChartsComponent } from './charts/charts.component';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationModule } from '@progress/kendo-angular-navigation';
import { IconsModule } from '@progress/kendo-angular-icons';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DialogComponent } from './dialog/dialog.component';
import { GridModule, PDFModule, ExcelModule } from '@progress/kendo-angular-grid';
import { RatingComponent } from './grid/rating.component';
import { ChartsModule } from '@progress/kendo-angular-charts';
import 'hammerjs';
import { ExcelExportModule } from '@progress/kendo-angular-excel-export';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    ButtonsComponent,
    ChartsComponent,
    DialogComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputsModule,
    BrowserAnimationsModule,
    NavigationModule,
    IconsModule,
    IndicatorsModule,
    ButtonsModule,
    GridModule,
    ChartsModule,
    ExcelExportModule,
    DropDownsModule,
    PDFModule,
    ExcelModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
