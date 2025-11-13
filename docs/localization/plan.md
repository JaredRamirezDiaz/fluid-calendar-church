# Plan de localización

## Objetivo

Traducir la interfaz completa de FluidCalendar al español manteniendo la base de código en inglés, garantizando consistencia de términos, mínima duplicación y capacidad de mantenimiento futura.

## Enfoque general

- **Infraestructura única de i18n.** Todas las cadenas se centralizan en `src/lib/i18n/translations.ts` mediante claves con prefijos funcionales (por ejemplo, `auth.signIn.title`).
- **Uso obligatorio de helpers.** Los componentes deben consumir textos a través del helper `t()` o del hook `useTranslation`.
- **Intercambio incremental.** Migrar pantallas de forma gradual, área por área, verificando pruebas y regresiones antes de continuar.
- **Colaboración paralela.** Varias personas pueden trabajar simultáneamente siempre que respeten la asignación de áreas y actualicen el archivo de progreso.

## Convenciones

- Claves en formato `seccion.subseccion.identificador`.
- Si se necesita interpolación, usar `{{variable}}` y pasar `replacements` al helper de traducción.
- Ninguna cadena visible debe permanecer hardcodeada; agregar comentarios `//todo` si se detecta una cadena sin equivalente aún disponible.
- Las validaciones deben reutilizar claves bajo `validation.*`.

## Flujo para cada área

1. Marcar el área como **En progreso** en `progress.md`.
2. Identificar todas las cadenas visibles y mapearlas a claves nuevas o existentes.
3. Actualizar/crear entradas en `translations.ts` (en ambos idiomas).
4. Sustituir cadenas directas en componentes por llamadas a `t()`/`useTranslation`.
5. Ejecutar pruebas relevantes (`npm run lint`, `npm run type-check`, tests específicos).
6. Actualizar el archivo de progreso con el resultado y abrir PR/merge interno.

## División por áreas

| Prioridad | Área | Alcance | Notas |
| --- | --- | --- | --- |
| 1 | Autenticación | Páginas de sign-in, sign-up, reset password, formularios y toasts | Referencia inicial para todas las nuevas claves (`auth.*`) |
| 1 | Layout y navegación | Layouts comunes, barra superior, menús, comandos | Coordinar con equipo de comandos (`src/lib/commands`) |
| 2 | Calendario | Página principal, modales de eventos, tooltips | Requiere revisar textos provenientes de proveedores externos |
| 2 | Tareas | Lista, modal, tableros, toasts | Validar estados y filtros |
| 2 | Focus Mode | Vistas de foco, acciones rápidas | Mantener consistencia con términos de tareas |
| 3 | Configuración | Secciones de settings comunes y específicas (calendarios, datos, integraciones) | Revisar tabs condicionales SAAS/open |
| 3 | Integraciones externas | UI relacionada con Google/Outlook/Caldav | Confirmar si algunos textos deben quedar en inglés (nombres propios) |
| 4 | Componentes compartidos | Botones, diálogos, toasts genéricos | Añadir claves reutilizables (`common.*`) |
| 4 | Documentación in-app | Tooltips largos, mensajes informativos | Alinear con documentación externa |
| 5 | Correos electrónicos y plantillas | Plantillas HTML/texto | Validar con equipo de comunicación |

## Dependencias y coordinaciones

- **Equipo de diseño:** validar términos preferidos y tono (formal/informal).
- **Equipo de QA:** definir checklists específicos por área.
- **Equipo de soporte:** revisar mensajes críticos antes de publicarse.

## Checklist de entrega por área

- [ ] Todas las cadenas visibles extraídas al diccionario.
- [ ] No quedan textos en inglés sin clave (`git grep '"[^"]*"'` para verificación).
- [ ] Traducciones revisadas por segunda persona.
- [ ] Pruebas automáticas y manuales ejecutadas.
- [ ] Documentado en `progress.md`.

## Escalado futuro

- Agregar `Locale` al perfil de usuario para personalización por cuenta.
- Automatizar la detección de claves faltantes en CI.
- Evaluar integración con herramientas de terceros (Crowdin, Lokalise) si se expanden idiomas.
