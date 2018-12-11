import { Component, OnInit } from '@angular/core';
import { AdalService } from 'adal-angular4';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: any;
  profile: any;
  notifications: any;

  constructor(private adalService: AdalService, protected http: HttpClient) { }

  ngOnInit() {

    this.user = this.adalService.userInfo;

    //this.user.token = this.user.token.substring(0, 10) + '...';
  }

  public getProfile() {
    console.log('Get Profile called');
    return this.http.get(environment.config.graphProfileAPI);
  }

  public profileClicked() {
    this.getProfile().subscribe({
      next: result => { 
        console.log('Profile Response Received');
        this.profile = result;
      }
    });
  }

  public getNotifications() {
    console.log('Get Notifications called');
    const httpUrl = environment.config.notificationsAPI;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + this.user.token
      })
    };
    return this.http.get(httpUrl, httpOptions);
  }

  public notificationsClicked() {
    this.getNotifications().subscribe({
      next: result => { 
        console.log('Notifications Response Received');
        this.notifications = result;
      }
    });
  }

}
