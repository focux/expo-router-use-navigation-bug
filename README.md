# useNavigation bug on web platform

When you are in a nested navigation stack and use the `useNavigation()` hook to change current screen's options using `navigation.setOptions`, it changes the parent screen options instead of the current's.

## Reproducing bug

1. npm run web
2. Go to `/bug` route in your browser
3. The nested stack title should say "Title changed" instead of "index" and the background should be orang-ish.



