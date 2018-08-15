import { Component, OnInit } from '@angular/core';

declare var swal;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = {
    emailLogin:"",
    passwordLogin:""
  } 
   visible: boolean = false;
  constructor() { 
    

  }

  ngOnInit() {
  }

  showModalLogin() {
    let signUp = <HTMLElement> document.querySelector('.signUp');
    let signIn = <HTMLElement>document.querySelector('.signIn');
    signUp.style.width = "15%";
    signIn.style.width = "85%";
    this.visible = false;
  }

  ShowModalRegister() {


    let signUp = <HTMLElement> document.querySelector('.signUp');
    let signIn = <HTMLElement>document.querySelector('.signIn');
    signIn.style.width ="15%";
    signUp.style.width = "85%";
    this.visible = true;
   /* login.classList.add('invisible');
    modal.classList.remove('invisible');*/

  }

  reloadImg(input){

    console.log("aqui Junior-> " , input.target.files)
      /**if (input.target.files && input.target.files[0]) {
        var reader = new FileReader();
    
        reader.onload = function(e) {

           document.querySelector('#labelImg').innerHTML ='<img  style="width: 75px; height: 75px; border-radius: 50%;" id="tagImg">'
           
           let  tagImg = document.getElementById("tagImg");
           console.log("AQUI esta el elemento " , tagImg)
          setTimeout(() => {
            
            tagImg.setAttribute("src", e.target.result);
          }, 100);
            //  document.querySelector('#tagImg').setAttribute("src",e.target.result )
           
        }
        reader.readAsDataURL(input.target.files[0]);
      }*/
    }

    makeLogin(){
      let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      
      if(regex.test(this.login.emailLogin)){
        swal({
          position: 'center',
          type: 'success',
          title: 'Welcome',
          showConfirmButton: false,
          timer: 1500
        }).then( ()=>{
           localStorage.setItem('currentUser', JSON.stringify(this.login))
           location.hash='home'
           
        })
      }else{
      //  let e =   document.querySelector('#emailErr')
      //  e.classList.remove("invisible")
      //  e.innerHTML ="Email wrong"
      }
     console.log("aqui junior " + JSON.stringify(this.login))

    }
}
