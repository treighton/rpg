import button1 from '../assets/images/ui/blue_button01.png'
import button2 from '../assets/images/ui/blue_button02.png'
import background from '../assets/level/background-extruded.png'
import items from '../assets/images/items.png'
import characters from '../assets/images/characters.png'
import monsters from '../assets/images/monsters.png'
import goldSound from '../assets/audio/Pickup.wav'
import enemyDeath from '../assets/audio/EnemyDeath.wav'
import playerAttack from '../assets/audio/PlayerAttack.wav'
import playerDamage from'../assets/audio/PlayerDamage.wav'
import playerDeath from '../assets/audio/PlayerDeath.wav'
import map from '../assets/level/large_level.json'

class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    // load images
    this.loadImages();
    // load spritesheets
    this.loadSpriteSheets();
    // load audio
    this.loadAudio();
    // load tilemap
    this.loadTileMap();
  }

  loadImages() {
    this.load.image('button1', button1);
    this.load.image('button2', button2);
    // load the map tileset image
    this.load.image('background', background);
  }

  loadSpriteSheets() {
    this.load.spritesheet('items', items, { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet('characters', characters, { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet('monsters', monsters, { frameWidth: 32, frameHeight: 32 });
  }

  loadAudio() {
    this.load.audio('goldSound', [goldSound]);
    this.load.audio('enemyDeath',[enemyDeath]);
    this.load.audio('playerAttack', [playerAttack]);
    this.load.audio('playerDamage', [playerDamage]);
    this.load.audio('playerDeath', [playerDeath]);
  }

  loadTileMap() {
    // map made with Tiled in JSON format
    this.load.tilemapTiledJSON('map', map);
  }

  create() {
    this.scene.start('Title');
  }
}

export default BootScene