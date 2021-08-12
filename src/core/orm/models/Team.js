import { Model, fk, attr } from "redux-orm";

class Team extends Model {
  toString() {
    return `Team: ${this.id}`;
  }
  get user() {
    return this.user_id;
  }
}
Team.modelName = "Team";

Team.fields = {
  id: attr(),
  name: attr(),
  user_id: fk("User"),
};

export default Team;
