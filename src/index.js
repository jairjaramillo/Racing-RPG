import 'phaser';
import './style/style.scss';
import config from './config/config';
import GameScene from './scenes/GameScene';

// eslint-disable-next-line no-undef
class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add('Game', GameScene);
    this.scene.start('Game');
  }
}

window.game = new Game();
