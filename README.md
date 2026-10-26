# 🔊 Noise Ledger

> A privacy-first PWA that measures noise with your phone's microphone, logs the loud events, and exports reports anyone can verify were not altered.

🚧 **Status: early development.** The project skeleton and language detection exist; the features below are the plan, not yet working.

---

## ✨ What it is for

Documenting recurring noise at home (footsteps, dropped objects, dragged furniture, rhythmic knocking) with a history you can hand to a building manager, a landlord or a mediation service.

- 🎙️ **Measures** sound level with A and C frequency weighting and the Fast time constant
- 📍 **Logs events** above a threshold, keeping the 10 seconds *before* each one
- 🌙 **"I woke up" button**, big and usable in the dark, linked to the nearest event
- 🔗 **Tamper-evident history**: every record is chained with SHA-256, so any edit, removal or insertion is detected
- 📄 **Reports**: printable PDF, CSV and a ZIP package with the media and the full record chain
- 🧪 **Verifier**: a small Node CLI that checks an exported package
- 🌐 **Languages**: Portuguese (Brazil) and English, picked from your device

## 🔒 Privacy

- 📵 **No audio leaves your device.** No backend, no account, no CDN at runtime.
- 🗑️ **Append-only**: corrections and discarded media are new records; nothing is erased from the chain.
- 🧑‍⚖️ You record only your own space and you are responsible for how you use it. This is not legal advice.

## ⚠️ Limitations

- 📏 **Not a certified sound level meter** (IEC 61672). Values are indicative and do not replace a measurement under ABNT NBR 10151.
- 📉 Phone microphones lose accuracy below about 100 Hz.
- 📱 On iOS the screen must stay on while monitoring, so the app asks you to keep the phone charging and dimmed.

## 🛠️ Development

```bash
npm install
npm run dev        # dev server
npm test           # unit tests (Vitest)
npm run typecheck  # TypeScript
npm run build      # production build
```

Stack: TypeScript, Vite, Vitest, plain modern CSS. No UI framework.

## 📜 License

[GPL-3.0](LICENSE): free to use and modify, and any distributed derivative must stay open under the same license.
