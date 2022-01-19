import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserProfile } from './user-profile';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { clientId, clientSecret } from './clientid-client-secret holder';
import { Repo } from './repo';


@Injectable({
  providedIn: 'root'
})
export class ServceService {
   apiUrl = 'https://api.github.com/users/';
  token = `?access_token=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`
  userName = ''
  gitUser: UserProfile[] = [];
  gitRepo: Repo[] = [];
  repoName=''
  constructor(private http: HttpClient) {

  }
  getProfile(userInput: string): Observable<any> {
    let url = `https://api.github.com/users/${userInput}?client_id=${clientId}&clientSecret=${clientSecret}`
    return this.http.get<any>(url)
  }
    searchUser(searchTerm:any):Observable<any>{
    // return this.http.get(this.apiUrl+searchTerm+this.token)
    return this.http.get('https://api.github.com/users/sivernorman?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')
  }
  getRepos(reponame:string){
    this.repoName=reponame
  }
  getRepositories( ): Observable<any> {
    let url = `https://api.github.com/users/${this.repoName}/repos?client_id=${clientId}&clientSecret=${clientSecret}`
    return this.http.get<any>(url)
  }

 }


