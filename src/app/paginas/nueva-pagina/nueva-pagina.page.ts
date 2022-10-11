import {Component, OnDestroy, OnInit} from '@angular/core';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-nueva-pagina',
  templateUrl: './nueva-pagina.page.html',
  styleUrls: ['./nueva-pagina.page.scss'],
})
export class NuevaPaginaPage implements OnInit,OnDestroy {

  constructor(private alertController: AlertController) {
    this.presentAlert();
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log('componente destruido');
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Mensaje importante',
      message: 'esto es una alerta!',
      buttons: ['pues que chido'],
    });

    await alert.present();
  }

}
