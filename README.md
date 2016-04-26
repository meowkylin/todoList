# todoList
## This application contains two parts.
1. **app.js** , which has a render module.
2. **api.js** , which just return json data.

**IMPORTANT**
	In order to let the app run on `localhost/api/` rather than on `localhost:3000/api/`,you must install ==nginx== and set 'nginx.conf'.

## For the First one (app.js)
After install node.js modules in package.json,you can run app.js in node.js shell.
If it prompts "app is on",that means you can visit   `localhost/api/` to use the app!


## For the second one (api.js)
### 	db
```json
{
'content':String,
'deadline':Date
}


```

## 	routes
- url: `/api/`
		desciption:index page
		method:get
		return all items in json

- url: `/api/create`
		description:create a new item
		method:post
		input: content , deadline
		return new item's db id (will be used by other routes)

- url: `/api/update/id`
		description:update the item specified by db id
		method:post
		input: content , deadline
		return this item's db id

- url: `/api/delete/id`
		description:delete the item specified by db id
		method:get
		return this item's db id
