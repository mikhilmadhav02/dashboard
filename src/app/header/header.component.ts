
import { Component ,  EventEmitter,  Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 
 @Output() buttonclick = new EventEmitter()
  onclick(){
this.buttonclick.emit()

// resize
setTimeout(()=>{
window.dispatchEvent(new Event('resize'))
},100)
  }
}
