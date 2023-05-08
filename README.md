# How to run

```sh
npx expo start --clear
```

## Completed items:

- React Native app created with Expo, Expo Router, Redux Toolkit, Art Institue of Chicago API (https://api.artic.edu/)
- 2 screens: An index page + details page
- Index page fetches the same set of 6 artworks from page 1 of the API, and saved to Redux
- Details page can be accessed by clicking on any artwork items.

## Potential future items:

- App is tested on the web browser with mobile dimensions for faster development time. iOS and Android UI are not verified.
- Pagination/lazy scrolling on artworks
- Tests (probably out of scope for this take home)
- Error handling

# Expo Router Example

Use [`expo-router`](https://expo.github.io/router) to build native navigation using files in the `app/` directory.

## 🚀 How to use

```sh
npx create-react-native-app -t with-router
```

## 📝 Notes

- [Expo Router: Docs](https://expo.github.io/router)
- [Expo Router: Repo](https://github.com/expo/router)
- [Request for Comments](https://github.com/expo/router/discussions/1)
