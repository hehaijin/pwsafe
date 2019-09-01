import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from "@angular/material";
@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  @ViewChild('file', {static: true}) file;
  constructor(public dialogRef: MatDialogRef<FileUploadComponent>) { }
  public files: Set<File> = new Set();
  ngOnInit() {
  }
  addFiles() {
    this.file.nativeElement.click();
  }

  onFilesAdded() {

  
    /*
    const files: { [key: string]: File } = this.file.nativeElement.files;
    for (let key in files) {
      if (!isNaN(parseInt(key))) {
        this.files.add(files[key]);
      }
    }
    */
  }

  upload() {
    let diaglogref= this.dialogRef; 
    for (var i = 0, f; f = this.file.nativeElement.files[i]; i++) {
      var reader = new FileReader();
      reader.onload = function (e) {
        // e.target.result should contain the text
        const target:any= e.target;
        diaglogref.close(JSON.parse(target.result));
      };
      reader.readAsText(f);
    }

  }
}