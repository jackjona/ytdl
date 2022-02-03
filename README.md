# YTDL - Frontend

A simple Youtube video/audio downloader built with Node.JS & Next.JS

![Screenshot of YTDL website in dark mode](https://raw.githubusercontent.com/jackjona123/ytdl/frontend/public/screenshot.png)
![Screenshot of YTDL website in light mode](https://raw.githubusercontent.com/jackjona123/ytdl/frontend/public/screenshot-light.png)

## Branch

**Note** This branch is only for the frontend.

## How To Use:

- Copy and paste the Youtube link of your desired audio/video into the search box. Then download the desired format (mp4, mp3, mov & flv)
OR
- Search for your desired Youtube video using the search box
OR
- Replace `youtube.com` with `backend.ytdl.cf` in your browser to direct download the video

## Responsive

This web app can be both used on mobile and desktops. 

## Native Desktop Application*

**The desktop application is the website in an Electron wrapper to run natively on desktops.* \
For the macOS `.app` click [here](https://github.com/jackjona123/ytdl/releases/download/v1.0.0/YTDL.app.zip). Then extract the  `.zip`. 


## Software

### Backend

- Node.js
- Express
- Mong
- MongoDB

### Frontend

- React
- Next.JS
- TypeScript
- axios
- Chakra-UI
- Tailwind CSS

## To Develop Locally

Run: \

`yarn install` or `npm install` \

Then: \

`yarn dev` or `npm run dev` \

## Credits
- This is a fork of [bennymeier/youtube-downloader](https://github.com/bennymeier/youtube-downloader)
- The Electron app was built using [nativefier](https://github.com/nativefier/nativefier)