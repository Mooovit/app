import { Model, attr } from "redux-orm";

class User extends Model {
  toString() {
    return `User: ${this.id}`;
  }
}
User.modelName = "User";

User.fields = {
  id: attr(),
  name: attr(),
  email: attr(),
  current_team_id: attr(),
  tokenPermissions: attr(),
  userPermissions: attr(),
  owned_teams: attr(),
  teams: attr(),
};

export default User;
