import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "app";
  transformationOne = [{ height: "200", width: "200" }];
  path = "/default-image.jpg";

  transformationTwo = [
    { height: "200", width: "200" },
    {
      rotation: "90",
    },
  ];
  lqip = { active: true, quality: 1 };

  handleUploadSuccess(res) {
    console.log("File upload success with response: ", res);
  }

  handleUploadError(err) {
    console.log("There was an error in upload: ", err);
  }

  handleFileInput(event) {
    console.log("This is the event on file change: ", event);
  }

  handleOnValidate(file) {
    console.log("This is the event on Validate start: ", file);
    let fileSizeInBytes = file.size;
    let mb = 10;
    let MbToBytes = mb * 1000000;
    if (fileSizeInBytes < MbToBytes) {
      return true;
    }
    return false;
  }

  handleProgress(fileProgress) {
    console.log("This is the event on progress uplode: ", fileProgress);
    return false;
  }
}
