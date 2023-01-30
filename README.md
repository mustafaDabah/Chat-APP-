# Chat App 

Chat app is a real-time chat application developed using React, Typescript, and Firebase.

## Requirements
Node.js

```bash
install Node js 
```

## Running the website 

```python
# clone the website 
git clone https://github.com/mustafaDabah/Chat-APP-

# install dependencies
npm install 

# Add Firebase API configuration to the firebase.ts file.

# run development mode 
npm start 

# run build mode
npm run build 
npm run preview // please make sure you installed serve package public 
```

## What about this website ?
### - Tools
 - React & Typescript
 - Tailwinds CSS
 - firebase 
 - zustand at state mangement 

### - Features
- User authentication: Users can sign in, sign up, and add a profile image.
- Chatting: Users can start chatting with other users who have signed up in the App.
- Real-time updates: Data changes are displayed in real-time, so messages are shown immediately.
- Image sharing: Users can send images to other users. 
- User search: Users can search for other users in the App. 
  
### - Folder structure
```python
  - assets/
  Contains all the assets for the project, such as images.

- features/
  Contains all the features in the App, including:
  - auth/
    - Hooks/
      Contains hooks related to authentication.
    - Sign In/
      Contains Sign In component.
    - Sign Up/
      Contains Sign Up component.
  - Chat Messages/
    - Hooks/
      Contains hooks related to Chat Messages feature.
    - Components/
      Contains Chat Messages feature components.
  - Sidebar/
    - Hooks/
      Contains hooks related to the Sidebar feature.
    - Components/
      Contains Sidebar feature components.

- hooks/
  Contains custom hooks that can be reused across the App.

- pages/
  Contains all the pages for the App.

- Public Components/
  Contains components that can be used publicly in the App.

- store/
  Contains store related code for the App, such as state management, etc.

- utils/
  Contains utility functions that can be used across the App.

```
