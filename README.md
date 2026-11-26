# DeesseJS Minimal Expo App

A small iOS and Android starter built with Expo, Expo Router, TypeScript, and pnpm workspaces. The repository contains one app at `apps/mobile`; routes and app-specific components stay inside that app until another consumer exists.

## Requirements

- Node.js 22.13 or newer in the Node 22, 24, or 26 release lines (Node 24 is used in CI).
- pnpm 12.16.1 (the repository's `packageManager` version).
- For simulator/device builds: Xcode on macOS for iOS, or Android Studio and its Android SDK for Android.
- Expo Go from the iOS App Store or Google Play for the quick JavaScript-only path.

## Install and start

```sh
pnpm install
pnpm start
```

Scan the terminal QR code with Expo Go. On iOS, use the Camera app to open the Expo Go link; on Android, scan it from Expo Go. Use `pnpm android` or `pnpm ios` to launch a native emulator/simulator after installing its platform tools.

The example has a home route and a second route at `apps/mobile/app/details.tsx`. Add routes as files in `apps/mobile/app/`. App configuration and replaceable package identifiers are in `apps/mobile/app.json`.

### Expo Go and development builds

Expo Go includes a fixed set of native libraries. It is enough for this starter and for JavaScript changes that use modules already included in Expo Go. When adding a native library that Expo Go does not contain, or changing native configuration that needs a native rebuild, create a development build instead:

```sh
pnpm --filter @deessejs/mobile exec expo install expo-dev-client
pnpm --filter @deessejs/mobile exec expo run:android
# On macOS, use `expo run:ios` instead for an iOS development build.
```

To remove stale Metro resolution state after dependency or resolver changes, run:

```sh
pnpm --filter @deessejs/mobile exec expo start --clear
```

## Project checks

Run these from the repository root:

| Command             | Purpose                                                                                               |
| ------------------- | ----------------------------------------------------------------------------------------------------- |
| `pnpm lint`         | Oxlint on the app's JavaScript, TypeScript, and TSX source; TypeScript and React plugins are enabled. |
| `pnpm format`       | Format repository files with Oxfmt.                                                                   |
| `pnpm format:check` | Check formatting without writing files.                                                               |
| `pnpm typecheck`    | TypeScript `tsc --noEmit`.                                                                            |
| `pnpm check:expo`   | Expo Doctor configuration and dependency diagnostics.                                                 |
| `pnpm check`        | Run lint, format check, type check, and Expo Doctor.                                                  |

Expo's `expo lint` command is intentionally not used: it scaffolds/runs ESLint. Oxlint is the JS/TS/TSX linter for this repository.

## Android preview APK

The **Android preview APK** GitHub Actions workflow can be started manually from the repository's **Actions** tab using **Run workflow**. It runs EAS Build in local mode on a Linux runner. It does not use EAS cloud builds and does not publish to a store.

### One-time repository setup

The workflow needs an Expo project and an Android signing credential before its first successful run:

1. Create a project in your Expo account for the app slug `deessejs-starter` and record its project ID. You can use the Expo dashboard or the EAS CLI. Do not commit the ID.
2. Configure an Android app signing keystore for this Expo project with `EXPO_PROJECT_ID=<your-project-id> pnpm dlx eas-cli@27.11.0 credentials --platform android`. Store the credential with the Expo project so the local runner can retrieve it. Keep the keystore private; it does not belong in this repository.
3. Create these GitHub **Actions repository secrets**:
   - `EXPO_TOKEN`: an Expo access token authorized for the project.
   - `EXPO_PROJECT_ID`: the project ID from the previous step.

The checked-in app config reads `EXPO_PROJECT_ID` only when it is set. Local Expo Go development does not require either value. The workflow deliberately fails early with a message naming a missing secret. It does not create or guess an Expo project, token, or signing key.

The build profile is `preview` in `apps/mobile/eas.json`; it produces an internally distributed APK. After a successful run, download **`deessejs-android-preview-apk`** from that workflow run's **Artifacts** section. GitHub retains the artifact for 14 days. Install the APK on an Android device/emulator for testing. iOS distribution and store publishing are separate workflows and are not included here.

You can run the same local build from the repository root on a machine with EAS local-build prerequisites installed:

```sh
EXPO_PROJECT_ID=<your-project-id> pnpm build:android:local
```

## SDK and dependency policy

This template starts on the stable Expo SDK 58 selected at implementation time. Expo's installer selects compatible versions of Expo modules, React, React Native, and Expo Router; `pnpm-lock.yaml` records the resolved set. Use `pnpm --filter @deessejs/mobile exec expo install <package>` for Expo native packages, then run `pnpm check:expo`. Upgrade Expo SDKs deliberately as a coordinated change and commit the refreshed lockfile. The SDK, Node, and pnpm requirements above should be revisited during each SDK upgrade.

## Repository shape

```text
apps/mobile/          Expo app, routes, config, and EAS build profile
.github/workflows/    Manual Android local-build workflow
```

Screen styling uses NativeWind 4 utility classes directly on React Native components. Keep style declarations in class names; `apps/mobile/global.css` is the minimal Tailwind entry point required by NativeWind.

The repository uses Continuous Native Generation. Generated `android/` and `ios/` folders are ignored; keep native configuration in Expo config and config plugins unless a documented Expo requirement calls for committed native projects.
