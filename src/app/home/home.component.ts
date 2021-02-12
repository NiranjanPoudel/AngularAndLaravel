import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  base_url = "http://localhost/HotelManagement/hotelManagement";
  formData:FormGroup; 

  constructor(private fb: FormBuilder) {
    this.createRegister();
      }

   createRegister(){
    this.formData = this.fb.group({
        name: [''],
        address: [''],
        phone_no: [''],
        email: ['']
   });
  }

  ngOnInit(): void {

  }

  onSubmit(){
    console.log(this.formData.value);
  }

}