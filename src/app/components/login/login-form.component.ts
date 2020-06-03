import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl,ReactiveFormsModule } from '@angular/forms';
import { LoginCredentils} from '../../Models/LoginCredentials.Model';
import { AuthenticationServiceService } from 'src/app/Services/authentication-service.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  constructor(private authenticationService : AuthenticationServiceService, private router : Router) { }  
  
  private client = new LoginCredentils();  
  myGroup:FormGroup;
 
  isFailed:boolean=false;

  ngOnInit() {  
    if((this.authenticationService.isLoggedIn()) )  
    {  
              this.router.navigate(['dashboard']);  

       // this.router.navigate(['/profile' , localStorage.getItem('id')]);  
    }  
    else  
    {  
          this.router.navigate(['/login']);  
    }  
  }  
  
  // create the form object.  
  form = new FormGroup({  
    email : new FormControl('' , [Validators.required,
    Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")]), 
     
    password : new FormControl('' , Validators.required)  
  });  
  
  Login(LoginInformation)  
  {  
      this.client.email = this.Email.value;  
      this.client.password = this.Password.value;  

      this.authenticationService.login(this.client).subscribe(  
        response => {  
            let  result = response.body;
            if(parseInt(result) > 0)  
            {  
              let token = response.headers.get("Authorization");  
              localStorage.setItem("token" , token);  
              localStorage.setItem("id" , result);  
              console.log("User with is : "+response.body+" is connected");
              location.reload();
            }  
            if(parseInt(result) == -1)  
            {  
              alert("please register before login Or Invalid combination of Email and password");  
            }  
             
        },  
        error => {  
             
            console.log("Error in authentication"); 
            this.isFailed=true;
           
        }  
      );  
  }  
  
  get Email(){  
      return this.form.get('email');  
  }  
  
  get Password(){  
      return this.form.get('password');  
  }  





  /*username:string=""

  isAuthent:boolean
  password:string=""
  constructor(private router:Router,private login1:Login1Service) { }

  ngOnInit() {
  }


  public handle (){
    if(this.login1.authenticate(this.username,this.password) ){
    //console.log(this.username);
    this.isAuthent=!this.isAuthent;
    this.router.navigate(['logged']);
    //this.reloadPage();
  }
  }

  reloadPage() {
    window.location.reload();
  }*/
}
