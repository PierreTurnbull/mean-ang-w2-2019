import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MerchantService {
  private apiUrl: string;
  public merchants: any[] = [];

  constructor(private HttpClient: HttpClient) {
    this.apiUrl = `${environment.apiUrl}/merchant`
  }

  public loadData = (): Promise<any> => {
    return this.HttpClient
      .get(this.apiUrl)
      .toPromise()
      .then(this.getData)
      .catch(this.handleError)
  }

  private getData(response: any) {
    console.log(response)
    this.merchants = response.data
  }

  private handleError(error: any) {
    console.log('fuuuuuuu', error)
    return Promise.reject(error.error)
  }
}
