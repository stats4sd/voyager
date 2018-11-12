# Vega Voyager offline installation via electron

This fork aims to take the Vega Voyager app and package using electron to install/run locally

## Test Locally

```
npm run electron-dev
```

## Build Installers

You can configure installers to be created in `electron/electron-builder.json`
Info here: https://www.electron.build/configuration/configuration

```
npm run electron-pack
```

For more information on the processes involved see:
https://getstream.io/blog/takeaways-on-building-a-react-based-app-with-electron/
https://medium.com/@kitze/%EF%B8%8F-from-react-to-an-electron-app-ready-for-production-a0468ecb1da3
https://www.electron.build/
https://github.com/electron-react-boilerplate/electron-react-boilerplate/blob/master/package.json

## Notes

Config uses extends:null as recognises react scripts included so assumes it is extending create react app
The config file is loaded from config/electron-builder.json

We also need to change the main entry point for dev and build, see in package.json and electron-pack script
(note syntax in guides change --em.main -> -c.extraMetadata)

Icons should be placed in electron/resources (**haven't added script to copy them yet**)

Currently the app is not updated, however this could be developed: https://electronjs.org/docs/tutorial/updates
