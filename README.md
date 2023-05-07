# ChatGPT-mobile-wrapper

This is a React Native mobile app that wraps the ChatGPT web interface (https://chat.openai.com/). It adds some customizations such as a dark mode and pull-to-refresh functionality.

## Features

- Pull-to-refresh to reload the WebView
- Injects custom JavaScript to enable forced color scheme (dark mode)
- Disables pull-to-refresh while scrolling

## Usage of experimental features
- Swipe down to trigger pull-to-refresh and reload the WebView
- The custom JavaScript will be injected to force the color scheme based on the device's settings
- While scrolling, the pull-to-refresh will be disabled to avoid accidental triggering (does not work properly, scrolling down might need a scroll up followed by scroll down to not accidentally trigger a refresh)

## Screenshots
<div style={{ textAlign: 'center' }}>
  <table>
    <thead>
      <tr>
        <th>Description</th>
        <th>Screenshot</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Start Screen</td>
        <td><img src="https://user-images.githubusercontent.com/50703696/236696337-2e90b812-de21-4c8a-b623-29ec39658a96.png" width="200" /></td>
      </tr>
      <tr>
        <td>Login Screen</td>
        <td><img src="https://user-images.githubusercontent.com/50703696/236696376-85757f6d-917c-4900-80a3-bf3631d29d0d.png" width="200" /></td>
      </tr>
      <tr>
        <td>Chat Screen</td>
        <td><img src="https://user-images.githubusercontent.com/50703696/236696397-27cefc5a-1c8b-48e9-a27f-4ca87689b9bd.png" width="200" /></td>
      </tr>
      <tr>
        <td>Chat Screen 2</td>
        <td><img src="https://user-images.githubusercontent.com/50703696/236696409-a1f311de-c30f-4dc5-adb6-9ea50f6bf180.png" width="200" /></td>
      </tr>
      <tr>
        <td>Sidebar</td>
        <td><img src="https://user-images.githubusercontent.com/50703696/236696433-22c02595-b446-4981-bf24-19070ad1eae0.png" width="200" /></td>
      </tr>
    </tbody>
  </table>
</div>





