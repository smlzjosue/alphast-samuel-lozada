import { Component, OnInit } from '@angular/core';
import { HomeService, User } from 'src/app/core/services/home/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userList: User[] = [];
  allData:  User[] = [];
  searchString = ''
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.getUserList();
  }

  getUserList() {
    this.homeService.getUsersData().subscribe(
      (resp: any) => {
        console.log(resp);
        this.userList = resp.users
        this.allData =resp.users
       
      }
    )
  }

  find(query:string) {
    console.log(query)
    this.userList =
    this.allData.filter((element) =>{
      return (
        (element.last_name.toLowerCase().startsWith(query.toLowerCase()) ? true: false) ||
        (element.first_name.toLowerCase().startsWith(query.toLowerCase()) ? true: false) ||
        (element.role.toLowerCase().startsWith(query.toLowerCase()) ? true: false) ||
        (element.email.toLowerCase().startsWith(query.toLowerCase()) ? true: false)
      )
    })
  }

}
