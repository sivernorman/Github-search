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
repo:Repo |any;
  constructor(private getgit:ServceService,public sericeRepo:RepoService) { }

  getSearchUser(searchTerm:any){
    // this.getgit.searchUser(searchTerm).then((data)=>{
    //   this.gitUser= this.getgit.gitUser;
    //   console.log(data);
      
    // },(error)=>console.log(error)
    
    // );
    this.getgit.searchUser(searchTerm).subscribe(
      (success)=>{
        this.gitUser=success
        console.log(this.gitUser)
        return(this.gitUser)
      }
    )


    this.sericeRepo.getRepo(searchTerm).subscribe(
      (success)=>{
        this.repo=success
        console.log(this.repo)
        return(this.repo)
      }
    )
  }

  ngOnInit(): void {
    this.getSearchUser('sivernorman')
   }

}
