import * as React from 'react';
import { useMediaQuery } from '@mui/material';
import { 
	Datagrid, 
	List, 
	ReferenceField, 
	TextField, 
	EditButton,
	Edit,
	SimpleForm,
	ReferenceInput,
	SelectInput,
	TextInput,
	Create,
	useRecordContext,
	SimpleList
} from 'react-admin';

const postFilters = [
	<TextInput source='q' label='Search' alwaysOn />,
	<ReferenceInput source="userId" reference="users" label="User">
		<SelectInput optionText="name" />
	</ReferenceInput>
];

export const PostList = () => {

	// This code works for both Desktop and Mobile
	const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
	return (
		<List>
			{isSmall ? (
				<SimpleList
					primaryText={record => record.title}
					secondaryText={record => `${record.views} views`}
					tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
				/>
			) : (
				<Datagrid>
					<TextField source="id" />
					<ReferenceField source="userId" reference="users">
						<TextField source="name" />
					</ReferenceField>
					<TextField source="title" />
					<TextField source="body" />
					<EditButton />
				</Datagrid>
			)}
		</List>
	);
	// This code works only for Desktop browsers
	// <List filters={postFilters}>
	// 	<Datagrid rowClick="edit">
	// 		<TextField source="id" />
	// 		{/* Referencing Foreign Key */}
	// 		<ReferenceField source="userId" reference="users">
	// 			<TextField source="name" />
	// 		</ReferenceField>
    //         <TextField source="title" />
	// 		<EditButton />
	// 	</Datagrid>
	// </List>
}

const PostTitle = () => {
	const record = useRecordContext();
	return <span>Post {record ? `${record.title}` : ``}</span>
}

export const PostEdit = () => (
	<Edit title={<PostTitle />}>
		<SimpleForm>
			<ReferenceInput source="userId" reference="users">
				<SelectInput optionText="name" />
			</ReferenceInput>
			<TextInput source="id" />
			<TextInput source="title" />
			<TextInput multiline source="body" />
		</SimpleForm>
	</Edit>

);


export const PostCreate = () => (
	<Create>
		<SimpleForm>
			<ReferenceInput source="userId" reference="users">
				<SelectInput optionText="name" />
			</ReferenceInput>
			<TextInput source="title" />
			<TextInput multiline source="body" />
		</SimpleForm>
	</Create>

);