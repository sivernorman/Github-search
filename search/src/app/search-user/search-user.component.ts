import { Component, OnInit } from '@angular/core';
import { Repo } from '../repo';
import { RepoService } from '../repo.service';
import { ServceService } from '../servce.service';
import { UserProfile } from '../user-profile';
@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {
public userInput!:string
public userProfile:any
gitUser:UserProfile|any;
repos:Repo |any;
userName:any=''
  constructor(private getgit:ServceService,public sericeRepo:RepoService) { }

  getSearchUser(searchTerm:any){
     this.getgit.searchUser(searchTerm).subscribe(
      (success)=>{
        this.gitUser=success
        console.log(this.gitUser)
        return(this.gitUser)
      }
    )


    this.sericeRepo.getRepo(searchTerm).subscribe(
      (success)=>{
        // this.repos=success
        // console.log(this.repos)
        return(this.repos)
      }
    )
  }

  ngOnInit(): void {
    this.getSearchUser('sivernorman')
   }
getUserName(){
  // alert( this.userName)
  this.sendUserName()
  this.showRepos()
  console.log(this.repos);

}
sendUserName(){
  this.getgit.getRepos(this.userName)
  this.showRepos()
  
}
showRepos(){
  this.getgit.getRepositories().subscribe((data)=>{
    this.repos=data
  })
}
}
