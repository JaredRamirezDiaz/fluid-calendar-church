import { TranslationDictionary } from "./types";

export const translations: TranslationDictionary = {
  en: {
    "app.name": "FluidCalendar",
    "common.actions.tryAgain": "Try again",
    "common.actions.returnHome": "Return Home",
    "common.actions.backToSignIn": "Back to Sign In",
    "common.actions.close": "Close",
    "common.status.loading": "Loading...",
    "navigation.logoAlt": "FluidCalendar logo",
    "navigation.links.calendar": "Calendar",
    "navigation.links.tasks": "Tasks",
    "navigation.links.focus": "Focus",
    "navigation.actions.search": "Search",
    "navigation.actions.searchHint": "Search or run a command (⌘K)",
    "navigation.actions.shortcuts": "Shortcuts",
    "navigation.actions.shortcutsHint": "View keyboard shortcuts (Press ?)",
    "navigation.actions.openCommandPalette": "Open command palette",
    "navigation.theme.toggle": "Toggle theme",
    "navigation.theme.light": "Light",
    "navigation.theme.dark": "Dark",
    "navigation.theme.system": "System",
    "navigation.privacy.enable": "Enable Privacy Mode",
    "navigation.privacy.disable": "Disable Privacy Mode",
    "navigation.privacy.labelOn": "Privacy On",
    "navigation.privacy.labelOff": "Privacy",
    "navigation.user.signIn": "Sign In",
    "navigation.user.settings": "Settings",
    "navigation.user.loggingOut": "Logging out...",
    "navigation.user.logout": "Log out",
    "navigation.user.avatarAlt": "User",
    "errors.generic.title": "Something went wrong!",
    "errors.generic.description": "An unexpected error has occurred.",
    "errors.generic.metaDescription": "An error occurred",
    "errors.404.title": "404 - Page Not Found",
    "errors.404.description":
      "The page you're looking for doesn't exist or has been moved.",
    "errors.404.metaDescription":
      "The page you're looking for doesn't exist or has been moved.",
    "loading.title": "Loading {{title}}",
    "auth.signIn.metaTitle": "Sign In | FluidCalendar",
    "auth.signIn.metaDescription": "Sign in to your FluidCalendar account",
    "auth.signIn.title": "Sign in to FluidCalendar",
    "auth.signIn.cardTitle": "Welcome to FluidCalendar",
    "auth.signIn.cardDescription": "Sign in to your account to continue",
    "auth.signIn.subtitle": "Manage your calendar and tasks efficiently",
    "auth.signIn.tabs.signIn": "Sign In",
    "auth.signIn.tabs.signUp": "Create Account",
    "auth.signIn.fields.email": "Email",
    "auth.signIn.fields.password": "Password",
    "auth.signIn.fields.nameOptional": "Name (Optional)",
    "auth.signIn.placeholders.email": "name@example.com",
    "auth.signIn.placeholders.name": "Your Name",
    "auth.signIn.actions.signIn": "Sign In",
    "auth.signIn.actions.signingIn": "Signing in...",
    "auth.signIn.actions.signUp": "Create Account",
    "auth.signIn.actions.signingUp": "Creating account...",
    "auth.signIn.links.forgotPassword": "Forgot password?",
    "auth.signIn.toast.success": "Signed in successfully",
    "auth.signIn.toast.error.title": "Authentication failed",
    "auth.signIn.toast.error.description":
      "Please check your email and password and try again.",
    "auth.signIn.toast.genericError.title": "An error occurred",
    "auth.signIn.toast.genericError.description": "Please try again later.",
    "auth.signIn.toast.signupError.title": "Registration failed",
    "auth.signIn.toast.signupError.description":
      "Please try again later or contact support.",
    "auth.signIn.toast.signupSuccess.title": "Account created successfully",
    "auth.signIn.toast.signupSuccess.description":
      "You can now sign in with your credentials.",
    "auth.signIn.legalNotice":
      "By signing in, you agree to our Terms of Service and Privacy Policy.",
    "auth.resetPassword.metaTitle": "Reset Password - FluidCalendar",
    "auth.resetPassword.metaDescription":
      "Reset your FluidCalendar account password",
    "auth.resetPassword.title": "Reset Password",
    "auth.resetPassword.subtitle.request":
      "Enter your email to reset your password",
    "auth.resetPassword.subtitle.reset": "Enter your new password below",
    "auth.resetPassword.fields.email": "Email Address",
    "auth.resetPassword.fields.password": "New Password",
    "auth.resetPassword.fields.confirmPassword": "Confirm Password",
    "auth.resetPassword.placeholders.email": "name@example.com",
    "auth.resetPassword.actions.sendLink": "Send Reset Link",
    "auth.resetPassword.actions.sendingLink": "Sending Reset Link...",
    "auth.resetPassword.actions.reset": "Reset Password",
    "auth.resetPassword.actions.resetting": "Resetting Password...",
    "auth.resetPassword.toast.requestSuccess.title":
      "Password reset email sent",
    "auth.resetPassword.toast.requestSuccess.description":
      "Please check your email for further instructions.",
    "auth.resetPassword.toast.requestError.title":
      "Failed to request password reset",
    "auth.resetPassword.toast.requestError.description":
      "Please try again later.",
    "auth.resetPassword.toast.resetSuccess.title":
      "Password reset successful",
    "auth.resetPassword.toast.resetSuccess.description":
      "You can now sign in with your new password.",
    "auth.resetPassword.toast.resetError.title":
      "Failed to reset password",
    "auth.resetPassword.toast.resetError.description":
      "Please try again later.",
    "commandPalette.title": "Command Menu",
    "commandPalette.description":
      "Search commands and navigate the application",
    "commandPalette.placeholder": "Type a command or search...",
    "commandPalette.clearSearch": "Clear search",
    "commandPalette.startTyping":
      "Start typing to search commands or try these:",
    "commandPalette.showAll": "Show all commands",
    "commandPalette.empty": "No results found. Try a different search term.",
    "commandPalette.hint.quickTip": "Quick Tip",
    "commandPalette.hint.descriptionPrefix": "Press",
    "commandPalette.hint.descriptionMiddle": "(or",
    "commandPalette.hint.descriptionSuffix":
      ") to open the command palette and quickly access features.",
    "commandPalette.hint.dismiss": "Dismiss",
    "commandPalette.hint.tryNow": "Try it now",
    "commandPalette.aria.dismissHint": "Dismiss hint",
    "commandPalette.aria.close": "Close command menu",
    "commands.sections.navigation": "Navigation",
    "commands.sections.calendar": "Calendar",
    "commands.sections.tasks": "Tasks",
    "commands.sections.system": "System",
    "commands.sections.privacy": "Privacy",
    "commands.navigation": {
      "calendar": "Go to Calendar",
      "tasks": "Go to Tasks",
      "focus": "Go to Focus",
      "settings": "Go to Settings"
    },
    "commands.calendar": {
      "today": "Go to Today",
      "prev-week": "Previous Week",
      "next-week": "Next Week",
      "toggle-sidebar": "Toggle Calendar Sidebar",
      "new-event": "Create New Event"
    },
    "commands.tasks": {
      "create": "Create Task"
    },
    "commands.toggle-privacy-mode": {
      "enable": "Enable Privacy Mode",
      "disable": "Disable Privacy Mode"
    },
    "validation.email": "Please enter a valid email address",
    "validation.password.min":
      "Password must be at least 8 characters",
    "validation.password.complexity":
      "Password must contain at least one uppercase letter, one lowercase letter, and one number",
    "validation.password.match": "Passwords do not match",
  },
  es: {
    "app.name": "FluidCalendar",
    "common.actions.tryAgain": "Intentar de nuevo",
    "common.actions.returnHome": "Volver al inicio",
    "common.actions.backToSignIn": "Volver a iniciar sesión",
    "common.actions.close": "Cerrar",
    "common.status.loading": "Cargando...",
    "navigation.logoAlt": "Logo de FluidCalendar",
    "navigation.links.calendar": "Calendario",
    "navigation.links.tasks": "Tareas",
    "navigation.links.focus": "Modo enfoque",
    "navigation.actions.search": "Buscar",
    "navigation.actions.searchHint": "Busca o ejecuta un comando (⌘K)",
    "navigation.actions.shortcuts": "Atajos",
    "navigation.actions.shortcutsHint":
      "Ver atajos de teclado (Presiona ?)",
    "navigation.actions.openCommandPalette": "Abrir la paleta de comandos",
    "navigation.theme.toggle": "Cambiar tema",
    "navigation.theme.light": "Claro",
    "navigation.theme.dark": "Oscuro",
    "navigation.theme.system": "Sistema",
    "navigation.privacy.enable": "Activar modo privacidad",
    "navigation.privacy.disable": "Desactivar modo privacidad",
    "navigation.privacy.labelOn": "Privacidad activa",
    "navigation.privacy.labelOff": "Privacidad",
    "navigation.user.signIn": "Iniciar sesión",
    "navigation.user.settings": "Configuración",
    "navigation.user.loggingOut": "Cerrando sesión...",
    "navigation.user.logout": "Cerrar sesión",
    "navigation.user.avatarAlt": "Usuario",
    "errors.generic.title": "¡Algo salió mal!",
    "errors.generic.description": "Se produjo un error inesperado.",
    "errors.generic.metaDescription": "Ocurrió un error",
    "errors.404.title": "404 - Página no encontrada",
    "errors.404.description":
      "La página que buscas no existe o se ha movido.",
    "errors.404.metaDescription":
      "La página que buscas no existe o se ha movido.",
    "loading.title": "Cargando {{title}}",
    "auth.signIn.metaTitle": "Iniciar sesión | FluidCalendar",
    "auth.signIn.metaDescription":
      "Inicia sesión en tu cuenta de FluidCalendar",
    "auth.signIn.title": "Inicia sesión en FluidCalendar",
    "auth.signIn.cardTitle": "Bienvenido a FluidCalendar",
    "auth.signIn.cardDescription":
      "Inicia sesión en tu cuenta para continuar",
    "auth.signIn.subtitle":
      "Administra tu calendario y tus tareas de forma eficiente",
    "auth.signIn.tabs.signIn": "Iniciar sesión",
    "auth.signIn.tabs.signUp": "Crear cuenta",
    "auth.signIn.fields.email": "Correo electrónico",
    "auth.signIn.fields.password": "Contraseña",
    "auth.signIn.fields.nameOptional": "Nombre (opcional)",
    "auth.signIn.placeholders.email": "nombre@ejemplo.com",
    "auth.signIn.placeholders.name": "Tu nombre",
    "auth.signIn.actions.signIn": "Iniciar sesión",
    "auth.signIn.actions.signingIn": "Iniciando sesión...",
    "auth.signIn.actions.signUp": "Crear cuenta",
    "auth.signIn.actions.signingUp": "Creando cuenta...",
    "auth.signIn.links.forgotPassword": "¿Olvidaste tu contraseña?",
    "auth.signIn.toast.success": "Sesión iniciada correctamente",
    "auth.signIn.toast.error.title": "La autenticación falló",
    "auth.signIn.toast.error.description":
      "Verifica tu correo y contraseña e inténtalo de nuevo.",
    "auth.signIn.toast.genericError.title": "Ocurrió un error",
    "auth.signIn.toast.genericError.description":
      "Inténtalo nuevamente más tarde.",
    "auth.signIn.toast.signupError.title": "El registro falló",
    "auth.signIn.toast.signupError.description":
      "Inténtalo nuevamente más tarde o contacta al soporte.",
    "auth.signIn.toast.signupSuccess.title": "Cuenta creada con éxito",
    "auth.signIn.toast.signupSuccess.description":
      "Ya puedes iniciar sesión con tus credenciales.",
    "auth.signIn.legalNotice":
      "Al iniciar sesión aceptas nuestros Términos del servicio y la Política de privacidad.",
    "auth.resetPassword.metaTitle": "Restablecer contraseña - FluidCalendar",
    "auth.resetPassword.metaDescription":
      "Restablece la contraseña de tu cuenta de FluidCalendar",
    "auth.resetPassword.title": "Restablecer contraseña",
    "auth.resetPassword.subtitle.request":
      "Ingresa tu correo electrónico para restablecer la contraseña",
    "auth.resetPassword.subtitle.reset":
      "Ingresa tu nueva contraseña a continuación",
    "auth.resetPassword.fields.email": "Correo electrónico",
    "auth.resetPassword.fields.password": "Nueva contraseña",
    "auth.resetPassword.fields.confirmPassword": "Confirmar contraseña",
    "auth.resetPassword.placeholders.email": "nombre@ejemplo.com",
    "auth.resetPassword.actions.sendLink": "Enviar enlace de restablecimiento",
    "auth.resetPassword.actions.sendingLink": "Enviando enlace...",
    "auth.resetPassword.actions.reset": "Restablecer contraseña",
    "auth.resetPassword.actions.resetting": "Restableciendo contraseña...",
    "auth.resetPassword.toast.requestSuccess.title":
      "Correo de restablecimiento enviado",
    "auth.resetPassword.toast.requestSuccess.description":
      "Revisa tu correo para continuar con el proceso.",
    "auth.resetPassword.toast.requestError.title":
      "No se pudo solicitar el restablecimiento",
    "auth.resetPassword.toast.requestError.description":
      "Inténtalo nuevamente más tarde.",
    "auth.resetPassword.toast.resetSuccess.title":
      "Contraseña restablecida con éxito",
    "auth.resetPassword.toast.resetSuccess.description":
      "Ahora puedes iniciar sesión con tu nueva contraseña.",
    "auth.resetPassword.toast.resetError.title":
      "No se pudo restablecer la contraseña",
    "auth.resetPassword.toast.resetError.description":
      "Inténtalo nuevamente más tarde.",
    "commandPalette.title": "Menú de comandos",
    "commandPalette.description":
      "Busca comandos y navega por la aplicación",
    "commandPalette.placeholder": "Escribe un comando o realiza una búsqueda...",
    "commandPalette.clearSearch": "Borrar búsqueda",
    "commandPalette.startTyping":
      "Empieza a escribir para buscar comandos o prueba esto:",
    "commandPalette.showAll": "Mostrar todos los comandos",
    "commandPalette.empty":
      "No se encontraron resultados. Intenta con otra búsqueda.",
    "commandPalette.hint.quickTip": "Consejo rápido",
    "commandPalette.hint.descriptionPrefix": "Presiona",
    "commandPalette.hint.descriptionMiddle": "(o",
    "commandPalette.hint.descriptionSuffix":
      ") para abrir la paleta de comandos y acceder rápidamente a las funciones.",
    "commandPalette.hint.dismiss": "Descartar",
    "commandPalette.hint.tryNow": "Pruébalo ahora",
    "commandPalette.aria.dismissHint": "Cerrar consejo",
    "commandPalette.aria.close": "Cerrar menú de comandos",
    "commands.sections.navigation": "Navegación",
    "commands.sections.calendar": "Calendario",
    "commands.sections.tasks": "Tareas",
    "commands.sections.system": "Sistema",
    "commands.sections.privacy": "Privacidad",
    "commands.navigation": {
      "calendar": "Ir al calendario",
      "tasks": "Ir a tareas",
      "focus": "Ir a modo enfoque",
      "settings": "Ir a configuración"
    },
    "commands.calendar": {
      "today": "Ir a hoy",
      "prev-week": "Semana anterior",
      "next-week": "Semana siguiente",
      "toggle-sidebar": "Alternar barra lateral del calendario",
      "new-event": "Crear nuevo evento"
    },
    "commands.tasks": {
      "create": "Crear tarea"
    },
    "commands.toggle-privacy-mode": {
      "enable": "Activar modo privacidad",
      "disable": "Desactivar modo privacidad"
    },
    "validation.email": "Ingresa una dirección de correo válida",
    "validation.password.min":
      "La contraseña debe tener al menos 8 caracteres",
    "validation.password.complexity":
      "La contraseña debe incluir al menos una letra mayúscula, una letra minúscula y un número",
    "validation.password.match": "Las contraseñas no coinciden",
  },
};

export type TranslationKey = keyof (typeof translations)["en"];
