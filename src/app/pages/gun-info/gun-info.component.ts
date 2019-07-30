import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gun-info',
  templateUrl: './gun-info.component.html',
  styleUrls: ['./gun-info.component.css']
})
export class GunInfoComponent implements OnInit {
  public listLinkImages = [
    'assets/images/guns/img-gun-1.jpg',
    'assets/images/guns/img-gun-2.jpg',
    'assets/images/guns/img-gun-3.jpg',
    'assets/images/guns/img-gun-4.jpg',
    'assets/images/guns/img-gun-5.jpg',
    'assets/images/guns/img-gun-6.png'
  ];

  public listGunNames = ['Mini-14', 'SKS', 'AUG', 'VECTOR', 'MK14', 'M416'];

  public listDamage = [35, 65, 37, 25, 45, 37];

  public listMagazine = [20, 10, 30, 25, 20, 30];

  public listSpeed = [850, 700, 845, 600, 730, 850];

  public listMass = [6.63, 7.75, 8.8, 7.6, 8.6, 9.0];

  public ind: number;

  public objInfo = {
    name: '',
    linkImg: '',
    damage: 0,
    magazine: 0,
    speed: 0,
    mass: 0
  };

  constructor() { }

  ngOnInit() {
    this.ind = 0;
  }

  clickShowBtn(index: any) {
    this.objInfo.name = this.listGunNames[index];
    this.objInfo.linkImg = this.listLinkImages[index];
    this.objInfo.damage = this.listDamage[index];
    this.objInfo.magazine = this.listMagazine[index];
    this.objInfo.speed = this.listSpeed[index];
    this.objInfo.mass = this.listMass[index];
  }

}
