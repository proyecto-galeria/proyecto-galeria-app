import { Component, OnInit, Input, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FileUploader, FileUploaderOptions, ParsedResponseHeaders } from 'ng2-file-upload';
import { Cloudinary } from '@cloudinary/angular-5.x';
import { environment } from '../../../environments/environment';



@Component({
  selector: 'photo-upload',
  templateUrl: 'photo-upload.component.html',
  styleUrls: ['./photo-upload.component.scss'] 
})
export class PhotoUploadComponent implements OnInit {
  

  private cloudinary_api_url = `https://api.cloudinary.com/v1_1/${environment.cloudinary.cloud_name}`;
  
  public uploader: FileUploader;
  public hasBaseDropZoneOver = false;
  
  public imageDataArray;
  
  public uploadedImageSrc: string;
  
  public shouldChangePhoto: boolean = false;
  
  constructor() { }
  

  ngOnInit() {
    
    
    const uploaderOptions: FileUploaderOptions = {
      url: `${this.cloudinary_api_url}/image/upload`,
      autoUpload: true, 
      isHTML5: true, 
      removeAfterUpload: true, 
      headers: [ 
        {
          name: 'X-Requested-With',
          value: 'XMLHttpRequest'
        }
      ]
    };
    

    const upsertResponse = fileItem => {
      

      if (fileItem.status !== 200) {

        console.log('Upload to cloudinary Failed');
        console.log(fileItem);
        return false;

      }
      
      this.uploadedImageSrc = fileItem.data.eager[0].url;
      console.log("photo url:" , this.uploadedImageSrc);
      
      this.shouldChangePhoto = false;
      

    }
    

    this.uploader = new FileUploader(uploaderOptions);
    this.uploader.onBuildItemForm = (fileItem: any, form: FormData): any => {
      
      form.append('upload_preset', environment.cloudinary.upload_preset);
      
      fileItem.withCredentials = false;
      return { fileItem, form };

    }
    
    
    this.uploader.onCompleteItem = (item: any, response: string, status: number, headers: ParsedResponseHeaders) => {

      upsertResponse(
        {
          file: item.file, status,
          data: JSON.parse(response),
        }
      );
      
    }

  }
  

  fileOverBase(e: any): void {
    
    this.hasBaseDropZoneOver = e;
    
  }
  
  
  changePhoto() {
    
    this.shouldChangePhoto = true;
    
    this.uploadedImageSrc = null;
    
  }
  
  
}
