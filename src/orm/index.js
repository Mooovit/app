import { ORM } from 'redux-orm';
import User from './models/User';
import Team from "./models/Team";

const orm = new ORM({
    stateSelector: state => state.orm,
});

orm.register(User);
orm.register(Team)

export default orm;
