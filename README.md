# todoList
### This application contains two parts.
1. **app.js** , which has a render module.
2. **api.js** , which just return json data.

**IMPORTANT**  
	In order to let the app run on `localhost/api/` rather than on `localhost:3000/api/`,you must install ==nginx== and set 'nginx.conf'.

## For the First one (app.js)
After install node.js modules in package.json,you can run app.js in node.js shell.  
If it prompts "app is on",that means you can visit   `localhost/api/` to use the app!


## For the second one (api.js)
#### 	db schema
	{
	'content':String,
	'deadline':Date
	}
## 	routes
- `GET` `/api/`
	- index page
	- return all the todos

- `POST` `/api/create`
	- create a new item
	- you should input (String) content ,(Date) deadline
	- return new item's db id
    (will be used by other routes)

- `POST` `/api/update/id`
	- update the item specified by db id
	- you should input (String) content ,(Date) deadline
	- return this item's db id

- `GET` `/api/delete/id`
	- delete the item specified by db id
	- return this item's db id
