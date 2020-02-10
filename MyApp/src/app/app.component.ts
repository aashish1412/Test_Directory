/* tslint:disable */
import { Component, OnInit } from '@angular/core';
import { AppService} from './app.service';
import { NgForm} from '@angular/forms';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  subscription: Subscription;

  constructor(private appService: AppService) {
  }

  file_names = [];

   ngOnInit() {
  }
handleSubmission(form: NgForm) {
     console.log(form.value.name);

     this.appService.getComments(form.value.name)
      .subscribe(data => {
           this.file_names = data;
        },
        (error => {
          console.log(error);
        })

      );

     setInterval(() => {
       this.handleSubmission(form);
     }, 10000);
}

}
