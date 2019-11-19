import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'video-course';
  compInfo = 'Loading';
  file: any = null;
  isFileReaderWork = false;
  content: string | ArrayBuffer = '';

  constructor() {
    console.log('MyComp.constructor');
    this.compInfo = 'Page Loaded';
  }

  fileChange($event): void {
    console.log('MyApp.fileChanged');
    this.compInfo = 'Selected a file';
    this.file = (<HTMLInputElement>document.getElementById('file')).files[0];
    this.compInfo = 'Selected file: ' + this.file.name;
    console.log(this.file);
    const fileReader = new FileReader();
    const myself = this;
    fileReader.onerror = function (e) {
      myself.compInfo = 'Error: ' + e;  // another way to assign class level variable.
    };
    fileReader.onloadend = (e) => {
      console.log('fileReader.onload');
      let temp = fileReader.result.toString();
      console.log(temp);
      temp = temp.substring(temp.indexOf(',') + 1);
      this.content = atob(temp.toString());
      console.log(this.content);
      this.isFileReaderWork = true;

      this.compInfo = this.content.toString() ;
    };
    fileReader.readAsDataURL(this.file);
  }
}
