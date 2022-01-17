import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Repo } from './repo';

@Injectable({
  providedIn: 'root'
})
export class RepoService {
repo:Repo[]=[]
apiUrl = 'https://api.github.com/users/';
token = `?access_token=${environment.apiKey}`

  constructor(public http:HttpClient) { }
  getRepo(searchTerm:any):Observable<any>{
    // return this.http.get(this.apiUrl+searchTerm+'/repos'+this.token)
    return this.http.get('https://api.github.com/users/repos?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')

  }
}
