import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _tagsHistory: string[] = [];
  private apiKEY:string = 'cAwIOtrdVovk2KheBBHRHq5K3F1Hc2N6';
  private serviceURL:string = 'https://api.giphy.com/v1/gifs/';

  // private URL = 'api.giphy.com/v1/gifs/search?api_key=cAwIOtrdVovk2KheBBHRHq5K3F1Hc2N6&limit=10&q=dog';

  constructor (private http: HttpClient) {}

  get tagsHistory ():string[] {
    return [...this._tagsHistory];
  }

  private organizeHistory (tag:string) {
    tag = tag.toLocaleLowerCase();
    if(this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0, 10);
  }

  searchTag(tag: string):void {
    if (tag == '' || tag.length === 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
                  .set('api_key', this.apiKEY)
                  .set('limit','10')
                  .set('q', tag);

    this.http.get(`${this.serviceURL}search?`, {params})
    .subscribe((response) => {
      console.log(response);
    });
  }

}
