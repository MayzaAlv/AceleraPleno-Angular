import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteListaComponent } from './components/cliente-lista/cliente-lista.component';
import { HttpClientModule } from '@angular/common/http'
import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClienteCadastroComponent } from './components/cliente-cadastro/cliente-cadastro.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AtualizarClienteComponent } from './components/atualizar-cliente/atualizar-cliente.component'

@NgModule({
  declarations: [
    AppComponent,
    ClienteListaComponent,
    ClienteCadastroComponent,
    AtualizarClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppBootstrapModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
