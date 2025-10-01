// src/app/shared/services/api-core.service.ts
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../evironment/environment';

@Injectable({ providedIn: 'root' })
export class ApiCoreService {

  private baseUrl = environment.apiUrl; // Ej: 'https://localhost:7200/api'

  constructor(private http: HttpClient) { }

  private getHttpOptions(isJson: boolean = true): { headers: HttpHeaders } {
    let headers = new HttpHeaders();
    if (isJson) headers = headers.set('Content-Type', 'application/json');
    return { headers };
  }

  get<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}${endpoint}`, this.getHttpOptions());
  }

  post<T>(endpoint: string, body: any): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}${endpoint}`, body, this.getHttpOptions());
  }

  put<T>(endpoint: string, body: any): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}${endpoint}`, body, this.getHttpOptions());
  }

  deleteWithBody<T>(endpoint: string, body: any): Observable<T> {
    return this.http.request<T>('delete', `${this.baseUrl}${endpoint}`, {
      ...this.getHttpOptions(),
      body
    });
  }
}
