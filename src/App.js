import * as React from "react"
// ListGuesser is react-admin's component to display Lists
import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin"
import jsonServerProvider from "ra-data-json-server"
// Use our own User listing component , instead of ListGuesses
import { UserList } from "./users";
import { PostCreate, PostEdit, PostList } from "./posts";
import PostIcon from '@mui/icons-material/Book'
import UserIcon from '@mui/icons-material/Group'
import Dashboard from "./Dashboard";
import authProvider from "./authProvider";

// The jsonServerProvider is in-built in-react-admin.
// We need to write a custom data provider for our backend
const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
  <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
    <Resource name="users" list={UserList} icon={UserIcon}/>
  </Admin>
)

export default App;