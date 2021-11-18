import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { hero } from './hero';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent {

  model = new hero(18, '', '', '','');

submitted = false;

onSubmit() { this.submitted = true; }


get diagnostic() { return JSON.stringify(this.model); }

newHero() {
this.model = new hero(42, '', '','','');
}

showFormControls(form: any) {
  return form && form.controls.name &&
  form.controls.name.value; // Dr. IQ
}

}


