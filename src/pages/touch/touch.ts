import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TouchID } from '@ionic-native/touch-id';
import { Camera } from '@ionic-native/camera';
import { Observable } from "rxjs/Observable";
import * as firebase from 'firebase';
import 'rxjs/add/operator/map';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { DomSanitizer } from '@angular/platform-browser';
/**
 * Generated class for the TouchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-touch',
  templateUrl: 'touch.html',
})
export class TouchPage {
  touch_res:any;
  imageSrc: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,private touchId: TouchID,private camera: Camera,private domSanitizer:DomSanitizer) {
    this.touchId.isAvailable().then(
      res => console.log('TouchID is available!'),
      err => console.error('TouchID is not available', err)
    );
  
  this.touchId.verifyFingerprint('Scan your fingerprint please').then(
      res =>{
        this.touch_res="OK"
        this.imageSrc="http://macintosh.expert/images/pictures/2.jpg"
       },
      err => console.error('Error', err)
    );

    
  }
   openGallery () {
    let cameraOptions = {
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,      
      quality: 100,
      targetWidth: 1000,
      targetHeight: 1000,
      encodingType: this.camera.EncodingType.JPEG,      
      correctOrientation: true
    }
  
    this.camera.getPicture(cameraOptions)
      .then((file_uri) =>{
         this.imageSrc =  'data:image/jpeg;base64,' +file_uri
       //  this.touch_res=file_uri
     //  this.uploadImage(file_uri)
           
        /////////////////////
      , 
      err => console.log(err)
       });  
  
   }
   uploadImage(imageString) 
   {
    var storageRef = firebase.storage().ref();

    // Points to 'images'
    var imagesRef = storageRef.child('images');
    
    // Points to 'images/space.jpg'
    // Note that you can use variables to create child values
    var fileName = 'space.jpg';
    var spaceRef = imagesRef.child(fileName);
    
    // File path is 'images/space.jpg'
    var path = spaceRef.fullPath
    
    // File name is 'space.jpg'
    var name = spaceRef.name
    
    // Points to 'images'
    var imagesRef = spaceRef.parent;

    var message = '5b6p5Y-344GX44G-44GX44Gf77yB44GK44KB44Gn44Go44GG77yB';
    imagesRef.putString(imageString, 'base64url').then(function(snapshot) {
    console.log('Uploaded a base64url string!');
});
   }
  
}
///////////////////
