import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../services/userservice.service';
import { Posts, Comments } from '../models/posts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  postArray: Posts[] = [];
  displypostArray: Posts[] = [];
  commentArray: Comments[] = [];
  userIdArray: any[] = [];
  displayUserIdArray: any[] = [];

  constructor(private userService: UserserviceService) { }

  ngOnInit(): void { this.loadAllDataForDisplay(); }

  // Load array for fetching data
  loadAllDataForDisplay() {
    this.userService.getPostsdata().subscribe(res => {
      // For Storing All data (Operation perform)
      this.postArray = res;

      // Only for fetching data before after filtering
      this.displypostArray = res;

      // Collect UserId From Main Array
      res.forEach((element: any) => { this.userIdArray.push(element.userId) });

      // Get Unique UserId From Array
      this.getUniqueId();
    })
  };

  getCommentById(cmntId: number) {
    this.userService.getCommentdata(cmntId).subscribe(res => { this.commentArray = res })
  }

  getUniqueId() {
    var unique = this.userIdArray.filter((v, i, a) => a.indexOf(v) === i);
    this.displayUserIdArray = unique
  }

  //get filtered data for the array
  filerByUserId(event: any) {
    console.log(event.target.value)
    this.displypostArray = this.postArray.filter((data: any) => { return String(data.userId).match(event.target.value) })
  }

}
