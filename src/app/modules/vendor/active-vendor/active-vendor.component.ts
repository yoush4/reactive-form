import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-active-vendor',
  templateUrl: './active-vendor.component.html',
  styleUrls: ['./active-vendor.component.scss']
})
export class ActiveVendorComponent implements OnInit {

  // activeVendorForm= new FormGroup({
  //   name:new FormControl(""),
  //   username:new FormControl(""),
  //   bio:new FormControl(""),
  //   domain:new FormControl("")
  // })
get name(){
  return this.activeVendorForm.get('name');
}
get username(){
  return this.activeVendorForm.get('username');
}
get bio(){
  return this.activeVendorForm.get('bio');
}
get domain(){
  return this.activeVendorForm.get('domain');
}


  visible:boolean=false;
  array:any = [];

  activeVendorForm = this.fb.group({
    name: ['', Validators.required],
    // username:['',Validators.compose([Validators.required, Validators.email])],
    username:['',[Validators.required, Validators.email]],
    bio:['', Validators.required],
    domain:['', Validators.required]

  })

  createActiveVendor(){
    //resetting array
    this.array=[];
    this.array.push(this.activeVendorForm.value.name);
    this.array.push(this.activeVendorForm.value.username);
    this.array.push(this.activeVendorForm.value.bio);
    this.array.push(this.activeVendorForm.value.domain);
    console.log(this.array);
    this.visible=true;
    //CALL SERVICE to send data
    //callService(this.array);
    this.activeVendorForm.reset();
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
