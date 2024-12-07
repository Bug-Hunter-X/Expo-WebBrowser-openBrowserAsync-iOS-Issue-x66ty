# Expo WebBrowser.openBrowserAsync iOS Issue

This repository demonstrates an issue with Expo's `WebBrowser.openBrowserAsync` function on iOS. The function opens the URL in a new tab as expected, however, it does not return the expected result, which can lead to unexpected behavior in the application.  The issue has been observed on both the iOS simulator and physical devices.  The solution provided uses a different approach to handle external URL opening, ensuring consistent and reliable behavior.

## Steps to Reproduce

1. Clone this repository.
2. Run the app on an iOS simulator or device.
3. Tap the button to open the example URL.
4. Observe that the URL opens in a new tab, but the console output is incomplete or missing the result object from `WebBrowser.openBrowserAsync`. 

## Solution

The solution provided utilizes Linking.openURL() which provides more reliable functionality across platforms, addressing the inconsistencies seen with `WebBrowser.openBrowserAsync` on iOS.

