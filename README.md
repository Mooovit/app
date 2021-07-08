# Mooovit Application
##

[![Build Status](https://travis-ci.com/Mooovit/app.svg?branch=master)](https://travis-ci.com/Mooovit/app)

Mooovit is the react native application that allow users to interact with Mooovit API to create and organize their movings

## Working locally with Expo client
```
TODO
```

## Building on your computer the application
Go into the android folder and execute this command line
```
./gradlew bundleRelease
```


## Installing tools :
```
brew install bundletool
```

You can use the default test keystore or replace it with your own one
Default keystore password : **localkeystore**
Default keystore path : **android/app/local.keystore**

```
keytool -genkeypair -v -storetype PKCS12 -keystore local.keystore -alias local-keystore -keyalg RSA -keysize 2048 -validity 10000
mv local.keystore android/app/local.keystore
```

Transform your AAB into a apks :
```
bundletool build-apks --bundle=app/build/outputs/bundle/release/app-release.aab --output=app-release.apks --ks=app/local.keystore --ks-key-alias=local-keystore --ks-pass=pass:localkeystore
```

Then you can install it into your connected android / emulator
```
 bundletool install-apks --apks=app-release.apks
```
