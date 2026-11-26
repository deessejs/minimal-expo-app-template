# Agent guidance

- Keep the starter focused on one Expo Router app in `apps/mobile` for Android and iOS.
- Keep application code app-local; add a workspace package only when a second real consumer exists.
- Preserve Continuous Native Generation. Do not commit generated `android/` or `ios/` directories.
- Use Oxlint, Oxfmt, TypeScript, and Expo Doctor through the documented root scripts.
- Do not add backend services, authentication, web support, or EAS cloud builds to this template.
