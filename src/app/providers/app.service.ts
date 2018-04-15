import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class AppService {
  constructor(private httpClient: HttpClient) {}

  public fetchPortfolio(): Observable<any> {
    const apiUrl = 'api/portfolio.json'
    return this.httpClient.get(apiUrl)
  }
}
