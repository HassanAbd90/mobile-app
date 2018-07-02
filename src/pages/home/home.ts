import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { File } from '@ionic-native/file';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { normalizeURL } from 'ionic-angular';

declare var cordova: any;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  storageDirectory: string = '';
    state:String;
    lists:any;
    p:String;
    src:String;
    constructor(public navCtrl: NavController,    private platform: Platform,private transfer: FileTransfer, private file: File) {
          this.src='https://r2---sn-njv2xn3t-ow4e.googlevideo.com/videoplayback?fvip=3&lmt=1504329561858770&clen=4713363&source=youtube&ratebypass=yes&pl=24&itag=18&mime=video%2Fmp4&expire=1530109270&requiressl=yes&sparams=clen%2Cdur%2Cei%2Cgir%2Cid%2Cinitcwndbps%2Cip%2Cipbits%2Citag%2Clmt%2Cmime%2Cmm%2Cmn%2Cms%2Cmv%2Cpl%2Cratebypass%2Crequiressl%2Csource%2Cexpire&dur=89.443&id=o-AJmu5w2pOH_n7ZVM_8-VpA3iM7uuQpUoijg63ZrRlshU&ei=9kgzW8jzFsH8gQeGj5GgCA&fexp=23709359&c=WEB&mm=31%2C29&mn=sn-njv2xn3t-ow4e%2Csn-hju7en7r&key=yt6&ip=37.98.229.76&signature=4364F8C8B0ABCBCA5650FC2487151E696BB0F64C.29D825D69860FA415E0FB5990B758F41B67CDC1C&ipbits=0&ms=au%2Crdu&mv=m&mt=1530087606&initcwndbps=177500&gir=yes'
    }

    play_v(){
      this.src=this.p
      this.state='ok'
    }
    download() {
      
      /////////////////
      this.state='start D'
      const fileTransfer: FileTransferObject = this.transfer.create();
      const mime = 'video/mp4';
      const pdfFile = 'https://r2---sn-njv2xn3t-ow4e.googlevideo.com/videoplayback?fvip=3&lmt=1504329561858770&clen=4713363&source=youtube&ratebypass=yes&pl=24&itag=18&mime=video%2Fmp4&expire=1530109270&requiressl=yes&sparams=clen%2Cdur%2Cei%2Cgir%2Cid%2Cinitcwndbps%2Cip%2Cipbits%2Citag%2Clmt%2Cmime%2Cmm%2Cmn%2Cms%2Cmv%2Cpl%2Cratebypass%2Crequiressl%2Csource%2Cexpire&dur=89.443&id=o-AJmu5w2pOH_n7ZVM_8-VpA3iM7uuQpUoijg63ZrRlshU&ei=9kgzW8jzFsH8gQeGj5GgCA&fexp=23709359&c=WEB&mm=31%2C29&mn=sn-njv2xn3t-ow4e%2Csn-hju7en7r&key=yt6&ip=37.98.229.76&signature=4364F8C8B0ABCBCA5650FC2487151E696BB0F64C.29D825D69860FA415E0FB5990B758F41B67CDC1C&ipbits=0&ms=au%2Crdu&mv=m&mt=1530087606&initcwndbps=177500&gir=yes';
      // alert(this.file.dataDirectory);
      // this.storageDirectory = cordova.file.dataDirectory

      fileTransfer.download(pdfFile, this.file.dataDirectory + 'd.mp4', true)
          .then((entry) => {
             this.state=normalizeURL( this.file.dataDirectory + 'd.mp4')
             this.p=this.state
          }, (error) => {
            this.state='error :'+error
          });
      ////////////////////
      
    }
    show(){
      
      const fileTransfer: FileTransferObject = this.transfer.create();
      const mime = 'video/mp4';
      const pdfFile = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTljN19c1etiTnER0D8N_QJmQGkD-XnEMAwdywxe2ANbSMY9vabew';
      // alert(this.file.dataDirectory);
      // this.storageDirectory = cordova.file.dataDirectory

      fileTransfer.download(pdfFile, this.file.documentsDirectory + 'd.jpg', true)
          .then((entry) => {
             this.state=normalizeURL( this.file.documentsDirectory + 'd.jpg')
            
          }, (error) => {
            this.state='error :'+error
          });
      //this.lists=this.listDir()
    }
    listDir() {
      return this.file.listDir(this.file.dataDirectory, '').then((listing) => {
        console.log('Directory listing below');
        console.log(listing);
        return listing;
      });
    }
    //////////////end class
}
