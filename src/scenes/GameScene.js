import 'phaser';
import logo from '../assets/logo.png';

// eslint-disable-next-line no-undef
export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  preload() {
    // load images
    this.load.image('logo', logo);
  }

  create() {
    this.add.image(400, 300, 'logo');
  }
}
