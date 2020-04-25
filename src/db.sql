create table users (
	id serial primary key,
	username varchar(40),
	password varchar(100),
	name varchar(45)
)

create table rols (
	id serial primary key,
	name varchar(100) unique 
)

create table users_rol (
	id serial primary key,
	user_id integer references users(id) not null,
	rols_id integer references rols(id) not null
)

create table views (
	id serial primary key,
	view_id integer references views(id),
	name varchar(100)
)

create table functionalities (
	id serial primary key,
	name varchar(100) not null,
	type integer,
	view_id integer references views(id) not null
)

create table rols_functionalities(
	id serial primary key,
	rol_id integer references rols(id) not null,
	functionality_id integer references functionalities(id) not null,
	unique(rol_id, functionality_id)
)