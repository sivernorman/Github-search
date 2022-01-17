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
  // user!: UserProfile
  apiUrl = 'https://api.github.com/users/';
  token = `?access_token=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`
  userName = ''
  gitUser: UserProfile[] = [];
  gitRepo: Repo[] = [];
  constructor(private http: HttpClient) {

  }
  getProfile(userInput: string): Observable<any> {
    let url = `https://api.github.com/users/${userInput}?client_id=${clientId}&clientSecret=${clientSecret}`
    return this.http.get<any>(url)
  }
  // searchUser(searchTerm: string) {
  //   interface data {
  //     name: any;
  //     login: any;
  //     followers: any;
  //     following: any;
  //     created_at: any;
  //     public_repos: any;


  //   }
  //   return new Promise((resolve,reject)=>{

  //     this.gitUser=[];

  //     this.http.get<data>(this.apiUrl+ searchTerm + this.token).toPromise().then(
  //       (results) =>{
  //        this.gitUser.push(results);
  //         resolve();
  //          },
  //           (error)=>{
  //             reject();
  //       }

  //     );
    
  //   });
  //  }
   searchUser(searchTerm:any):Observable<any>{
    // return this.http.get(this.apiUrl+searchTerm+this.token)
    return this.http.get('https://api.github.com/users/sivernorman?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')
  }

  // userRequest(){
  //   interface ApiResponse {
  //     login: string;
  //     followers: number;
  //     following: number;
  //     created_at: Date;
  //     public_repos: number;
  //   }

  //  let promise = new Promise<void>((resolve,reject)=>{
  //   this.http.get<ApiResponse>(this.apiUrl).toPromise().then(
  //     (response)=>{
  //       this.user.login = response!.login
  //       this.user.public_repos= response!.public_repos

  //       resolve()
  //     },
  //     (error)=>{
  //       this.user.login='splinter'
  //       this.user.public_repos=90

  //       reject(error);
  //     }
  //   )
  // })
  // return promise;


  // }
  // repos():Observable<any>{
  //   return this.http.get(this.apiUrl +this.userName)
  // }

}


