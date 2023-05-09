# JIFFY
GIPHY clone made with Mern Stack and GIPHY SDK/API. 

![Jiffy Home paget](https://i.paste.pics/28f7c8ee3a3c61e7580ccb547d9fe830.png)

## Libraries and frameworks I used;
React, Styled-Components, Context-Hooks (deserves to be mentioned), Node, Express, MongoDB, Multer, Adorable Avatars, Jest, Bcrypt, and JWT.

API can be found [here]( https://github.com/urlDev/mern-jiffy-api)

## Adorable avatars and Multer
Every user gets a unique avatar after registering for the app. Library [here]( https://github.com/adorableio/avatars-api-middleware)
After registering, user can upload a new avatar/image. That image will be resized and converted to webp. There's a 2MB limit for images.

## Bcrypt, JWT
When a user registers, passwords get hashed before being saved to the database, and for each login, there's a new token assigned, for secure sessions.

## Scripts
App is created with CRA so scripts are same (react-scripts);
- **npm run start**; starts the app,
- **npm run build**; build,
- **npm run test** or **npm t**; running tests,
- **npm run eject**; ejects.

## Environment Variables
- **REACT_APP_GIPHY_SDK_KEY**: Key to utilize Giphy SDK ([docs](https://developers.giphy.com/docs/api#quick-start-guide)),
- **REACT_APP_API_URL**; URL to use [API](https://github.com/urlDev/mern-jiffy-api). Recently changed because of updates in Heroku service and migrating to `fly.io`.

## Profile Update
![Jiffy Profile update](https://i.paste.pics/26b21ab1f9681d636a02fa86dd39da8c.png)

## Categories
![Jiffy Categories](https://i.paste.pics/287f7f726acc87f93c7d73dbb71424bc.png)

## Search Results
![Jiffy Search Results](https://i.paste.pics/dfbb7bb5bb322d55ca20abc782526d7d.png)

## Gif Detail Page
![Jiffy gif detail page](https://i.paste.pics/22cee156efc4366eda2605814a808213.png)

## Login Register page
![Jiffy login register](https://i.paste.pics/c349437526bb5ad39b7b609fb8e28801.png)
