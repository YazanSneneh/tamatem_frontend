import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrl: './label.component.css'
})
export class LabelComponent {
  @Input() label = "";
  @Input() customClass = "";

  handleClick(){
    // alert("CTA clicked")
  }
}


