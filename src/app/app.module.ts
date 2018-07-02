import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { Base64ToGallery } from '@ionic-native/base64-to-gallery';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MapPage } from '../pages/map/map';
import { TouchPage } from '../pages/touch/touch';
import { QrcodePage } from '../pages/qrcode/qrcode';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { TouchID } from '@ionic-native/touch-id';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';

import { File } from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    MapPage,
    TouchPage,
    QrcodePage
  ],
  imports: [
    BrowserModule,
    
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    MapPage,
    TouchPage,
    QrcodePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    BarcodeScanner,
    Base64ToGallery,
    TouchID,
    PhotoViewer,
    QRScanner,
    File,
    FileTransfer,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
