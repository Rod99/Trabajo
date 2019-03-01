import { Component } from '@angular/core';
import { HeaderComponent} from './header/header.component';
import { FormComponent} from './form/form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Trabajo'; // Este es el archivo typescript. typescript es una mejora a javascript realizada por microsoft. Pero básicamente
  // funciona de la misma manera
  // Typescript funviona para aplicaciones javascript que se pueden ejecutar del lado del cliente o del servidor
}
