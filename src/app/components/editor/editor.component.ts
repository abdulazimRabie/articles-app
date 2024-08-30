import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.css'
})
export class EditorComponent {
  form: FormGroup | any;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      editor: [''] // Initialize the form control
    });
  }

  created(event: any) {
    console.log('Editor created:', event);
  }

  changedEditor(event: any) {
    console.log('Editor content changed:', event);
  }
}
