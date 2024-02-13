import { TestBed } from '@angular/core/testing';

import { ClienteService } from './cliente.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { Cliente } from '../interfaces/cliente';
import { BASE_URL_CLIENT_API } from '../env/env';

describe('ClienteService', () => {
  let service: ClienteService;
  let httpMock: HttpTestingController;
  let baseUrl = BASE_URL_CLIENT_API;
  const dataCliente: Cliente[] = [
    {
      id: 1,
      nome: 'abc',
      email: 'abc@abc',
      telefone: '1111111',
    },
  ];
  const id = Number(dataCliente[0].id);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [HttpClient],
    });
    service = TestBed.inject(ClienteService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('get all clientes', () => {
    service.getAll().subscribe((result) => expect(result).toBe(dataCliente));
    const req = httpMock.expectOne(`${baseUrl}/cliente`);
    expect(req.request.method).toEqual('GET');
    req.flush(dataCliente);
  });

  it('get by id', () => {
    const clienteTest: Cliente = {
      id: 1,
      nome: 'abc',
      email: 'abc@abc',
      telefone: '1111111',
    }
    
    service.getById(1).subscribe((result: Cliente) => expect(result).toEqual(clienteTest));
    const req = httpMock.expectOne(`${baseUrl}/cliente/${id}`);
    expect(req.request.method).toEqual('GET');
    req.flush(clienteTest);
  });

  it('should save', () => {
    const clienteSave: Cliente = 
    {
      id: 2,
      nome: 'teste',
      email: 'teste@gmail.com',
      telefone: '1111111',
    }

    service.save(clienteSave).subscribe((result: Cliente) => expect(result).toBe(clienteSave));
    const req = httpMock.expectOne(`${baseUrl}/cliente`);
    expect(req.request.method).toEqual('POST');
    req.flush(clienteSave);
  });

  it('should delete', () => {
    service.delete(2).subscribe((result) => expect(result).toEqual({}));
    const req = httpMock.expectOne(`${baseUrl}/cliente/${2}`);
    expect(req.request.method).toEqual('DELETE');
    req.flush({});
  });

  it('should update', () => {
    const clienteAtualizado: Cliente = 
    {
      nome: 'testando',
    }

    service.update(1, clienteAtualizado).subscribe((result: Cliente) => expect(result.nome).toBe('testando'));
    const req = httpMock.expectOne(`${baseUrl}/cliente/1`);
    expect(req.request.method).toEqual('PATCH');
    req.flush(clienteAtualizado);
  });
});
