import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  constructor(private obj:HttpClient) { }

  ngOnInit() {
    this.getrole();
  }
  userid:number;
  allrole:any[] = [];
  getrole()
  {
	  var url = "https://jobswalkin.com/web/allprofile.php";
    this.obj.get(url).subscribe(
      response=>{
        this.allrole = response as string[];
      });

}
p:number=1;
keyword:string;
info;
getdata(userid:number)
{
  this.userid=userid;
  this.personalinfo(userid);
  this.education(userid);
  this.info=true;
}

pinfo:any[]=[];
cinfo:any[]=[];
eduinfo:any[]=[];
personalinfo(id:number)
{
  var url = "https://jobswalkin.com/web/pinfo.php";
    this.obj.post(url, {"id":id}).subscribe(
      response=>{
        this.pinfo = response as string[];
      });
}
contactinfo(id:number)
{
  var url = "https://jobswalkin.com/web/cinfo.php";
    this.obj.post(url, {"id":id}).subscribe(
      response=>{
        this.cinfo = response as string[];
      });
}
education(id:number)
{
  var url = "https://jobswalkin.com/web/eduinfo.php";
    this.obj.post(url, {"id":id}).subscribe(
      response=>{
        this.eduinfo = response as string[];
      });
}
update(sts:string)
{
  var url = "https://jobswalkin.com/web/updatestatus.php";
  var input = {
	             "clientid":localStorage.getItem("tno"),
				 "status":sts,
				 "userid":this.userid
              };
    this.obj.post(url, input).subscribe(
      response=>{
        alert("Please wait for SMS");
      });
}
}
