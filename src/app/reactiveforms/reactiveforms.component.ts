import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.scss']
})
export class ReactiveformsComponent implements OnInit {
 sampleReactiveFrm:FormGroup;
  constructor(private fb:FormBuilder) { 
    this.sampleReactiveFrm=this.fb.group({
      username:['' ,[Validators.required,Validators.minLength(3)]],
      passwordconfirmpassword:['',[Validators.required,Validators.minLength(6)]],
      zipcode:['',[Validators.required,Validators.minLength(3)]]
      
    })
  }

  ngOnInit(): void {
  }

}
