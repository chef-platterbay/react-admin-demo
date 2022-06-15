// A custom component to replace ListGuess for a list of users in the API Response
import * as React from "react"
import { Datagrid, EmailField, List, TextField, UrlField } from "react-admin";
import MyURLField from "./myURLField";

export const UserList = () => (
	  <List>
		  <Datagrid rowClick="edit">
			  <TextField source="id" />
			  <TextField source="name" />	  
			  <EmailField source="email" />			  
			  <TextField source="phone" />
			  <MyURLField source="website" />
			  <TextField source="company.name" />
		  </Datagrid>
		</List>
);
