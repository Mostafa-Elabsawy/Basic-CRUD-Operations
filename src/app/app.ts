import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Title } from "./components/title/title";
import { Form } from "./components/form/form";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Title, Form],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('CRUD-Operations');
}
