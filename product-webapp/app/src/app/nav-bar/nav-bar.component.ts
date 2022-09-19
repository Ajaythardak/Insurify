import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { RecommendationServiceService } from '../recommendation-service.service';
import { Userservice1Service } from '../userservice1.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit  {


  avatarUrl:any;
  imgurl = "";
  imgurlType = "";
  motors: string[] = [
    'Motor Insurance',
    'Bike Insurance',
    'Car Insurance',
    ];

    healths: string[] = [
      'Health Insurance',
      'Health Booster',
      'Personal Protect',
      ];

      renewals: string[] = [
        'Car Policy',
        'Bike Policy',
        'Health Policy',
        ];

        claims: string[] = [
          'Health Claims',
          'Motor Claims'
          ];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.XLarge)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  constructor(private breakpointObserver: BreakpointObserver,private router: Router,private service:Userservice1Service) { }
  ngOnInit(): void {
     this.getAllUsers();
  }
  
  getAllUsers():void{
    this.service.getUser().subscribe((data)=>{

        if(this.service.userEmail===null || this.service.userEmail==="")
        {
          console.log("hello");
          this.image2="../../assets/img/blank-profile-picture-973460_1280.webp";
          this.value=false
          this.value2=true
        }
        else{
        for(var i=0;i<data.length;i++){
          if(this.service.userEmail === data[i].emailId)
          {
            this.image = data[i].profilePic;
            console.log(data[i].emailId)
            this.value2=false
            this.value=true
          }
     }}

      for(var i=0; i<data.length;i++){
        if(this.service.userEmail=== data[i].emailId)
        {
          this.name1=data[i].name;
          console.log(data[i].name)
        }
      }
    })

  }
  image:any
  image2:any
  email:any
  value:boolean=true
  value2:boolean=false
  name1:any



}