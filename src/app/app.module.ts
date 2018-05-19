import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatIconModule, MatToolbarModule, MatButtonModule, MatListModule, MatRadioModule, MatTabsModule,
  MatCardModule, MatRippleModule } from '@angular/material';

import { AppComponent } from './app.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AccountComponent } from './components/account/account.component';
import { OrdersComponent } from './components/orders/orders.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ChartComponent } from './components/chart/chart.component';
import {MarketDataService} from './services/market-data.service';


@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    DashboardComponent,
    AccountComponent,
    OrdersComponent,
    SettingsComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatRadioModule,
    MatTabsModule,
    MatCardModule,
    MatRippleModule,
    NgxChartsModule,
  ],
  providers: [MarketDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
