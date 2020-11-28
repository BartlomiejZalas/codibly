# Example App by Bartłomiej Zalas

## What it contains

The project consists of 3 modules:

- `backend` - dummy backend app written in node/express
- `frontend` - react app written in Styled Components and Redux Saga
- `frontend-alternative` - the same frontend written in JSS and Mobx-State-Tree

## How to run

### Option 1: Docker compose

Run in root directory:

```
docker-compose up --build
```
When build is finished you should be able to access the frontend on 
[http://localhost:5000](http://localhost:5000) and its alternative version on 
[http://localhost:5001](http://localhost:5001).

### Option 2: Run manually

Navigate to `/backend` and run:
```
yarn dev
```

then, in new console, navigate to `/frontend` and run:
```
yarn start
```

then, in new console, navigate to `/frontend-alternative` and run:
```
yarn start
```
You should be able to access the frontend on [http://localhost:3000](http://localhost:3001) 
and its alternative version on [http://localhost:3001](http://localhost:3001).

## Credentials
Use below credentials to login:
```
Email: codibly@codibly.com
Password: Codibly1
```
