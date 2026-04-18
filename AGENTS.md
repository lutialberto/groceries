## Reusable Components Inventory

Los siguientes componentes reutilizables ya existen en el proyecto y deben usarse siempre que sea posible, adaptándolos a las necesidades de cada vista. No se debe generar código directo (por ejemplo, un botón con `TouchableOpacity` o un texto con `Text`) en las vistas si ya existe un componente reutilizable equivalente. Priorizar la reutilización y adaptación de estos componentes para mantener la coherencia visual y funcional en toda la app.

- **ButtonApp**: Botón genérico con variantes.
- **InputTextApp**: Campo de texto reutilizable para formularios, integrado con React Hook Form y soporte para valores múltiples.
- **CardApp**: Contenedor tipo tarjeta, con opción de sombra.
- **IconApp**: Wrapper para íconos Ionicons con soporte de tema.
- **ThemedText**: Componente de texto con variantes y soporte de tema.
- **ThemedView**: View con fondo adaptado al tema.
- **SpinnerApp**: Indicador de carga superpuesto.

Todos se encuentran en la carpeta `components/` y están diseñados para ser reutilizables y consistentes con el tema de la app.

## UI & Development Conventions

- **Navegación:**
  - Se utiliza bottom tab navigation como base.
  - Se sigue la convención de file router de Expo para organizar pantallas y rutas.

# AGENTS.md

Essential guidance for AI coding agents working in the groceries project. This file summarizes build/test commands, architecture, conventions, and project-specific context to ensure agents are immediately productive.

---

## Project Overview

Personal groceries app to:

- Registrar compras realizadas
- Crear y gestionar listas de compras
- Sugerir compras recomendadas según historial

**No backend:** Todos los datos se almacenan en memoria y usando almacenamiento local del dispositivo (AsyncStorage o similar). En el futuro, se planea una función de backup para sincronizar entre dispositivos.

**Estado:** Etapa de planeación. No implementar funcionalidades aún, solo definir arquitectura, flujos y requisitos.

## Build & Run Commands

- **Start (all platforms):** `npm run start` (runs `expo start`)
- **Android:** `npm run android`
- **iOS:** `npm run ios`
- **Web:** `npm run web`
- **Tests:** _No test scripts found. Add testing tools if needed._

## Architecture & Key Files

- **Entry Point:** [index.ts](index.ts) — Registers the root component.
- **Main UI:** [App.tsx](App.tsx) — Root React component using React Native primitives.
- **Expo Config:** [app.json](app.json) — Project configuration, assets, and new architecture flag.
- **Assets:** `assets/` — All referenced images/icons.

### Folder Structure Convention

El proyecto sigue una estructura modular escalable. Existen carpetas globales (en el root) como:

- `components/` — Componentes UI reutilizables
- `hooks/` — Custom hooks
- `models/` — Tipos/interfaces de datos
- `integration/` — Integraciones externas o almacenamiento
- `utils/` — Funciones utilitarias
- `constants/` — Valores fijos/configuración
- `modules/` — Módulos funcionales autocontenidos

Cada módulo dentro de `modules/` (por ejemplo, `modules/compras`, `modules/settings`) puede tener su propia estructura interna, repitiendo estas carpetas según necesidad:

```
modules/
	compras/
		components/
		hooks/
		models/
		utils/
		constants/
	settings/
		components/
		hooks/
		...
```

Esto permite que cada módulo sea autocontenible y escalable, manteniendo la organización y separación de responsabilidades.

## Project Conventions

- TypeScript enabled with strict mode, extending Expo’s base config.
- Follows Expo’s conventions for structure and configuration.
- Assets referenced in `app.json` and stored in `assets/`.
- No backend: all data is managed in memory and persisted locally.

## Environment & Pitfalls

- Requires Expo CLI and compatible Node.js version.
- `newArchEnabled: true` in `app.json` — may require up-to-date dependencies and tooling.
- No test setup or scripts by default.
- Plan for local storage (AsyncStorage or similar) for persistence.
- Future: backup/sync feature for multi-device support.

---

For further documentation, add Markdown files to a `docs/` directory or link them here.
