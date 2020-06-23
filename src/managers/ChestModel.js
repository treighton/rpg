import { uuid } from "uuidv4";
class ChestModel {
  constructor(x, y, gold, spawnerId) {
    this.id = `${spawnerId}-${uuid()}`;
    this.spawnerId = spawnerId;
    this.x = x;
    this.y = y;
    this.gold = gold;
  }
}

export default ChestModel;
