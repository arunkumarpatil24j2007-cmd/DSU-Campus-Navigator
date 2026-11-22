# DSU Campus Navigator 3D

3D campus map for Dayananda Sagar University (Harohalli) with Dijkstra route finding and a step-by-step algorithm visualiser. Built with three.js; runs as a web app/PWA and as an Android app (Capacitor).

- **Web:** deployed on Vercel (serves `www/`).
- **Android APK:** built by GitHub Actions on every push to `main`; download from the **Releases → latest** page.

## Develop
```bash
npm install
npx serve www            # run the web app locally
npx cap sync android     # copy www/ into the Android project
cd android && ./gradlew assembleDebug   # needs JDK 21 + Android SDK
```
Map data © OpenStreetMap contributors (ODbL).
