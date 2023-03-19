type Language = 'es' | 'en';

const currentLanguageKey: Language = 'es';

export const TRANSLATOR = {
  es: {
    components: {
      buttons: {
        back: 'Atras',
        next: 'Siguiente',
        validate: 'Validar',
        finish: 'Finalizar',
        confirm: 'Confirmar',
        cancel: 'Cancelar',
        edit: 'Editar',
        save: 'Guardar',
        share: 'Compartir',
        send: 'Enviar',
        resend: 'Reenviar',
        enter: 'Ingresar',
        register: 'Registrarse',
        download: 'Descargar',
      },
      inputs: {
        selector: 'Selecione...',
        checkBox: {
          yes: 'Si',
          no: 'No',
        },
        search: 'Buscar...',
        email: {
          label: 'Mail',
          placeholder: 'Ingresa tu mail',
        },
        password: {
          label: 'Contraseña',
          placeholder: 'Ingresa tu contraseña',
          passwordsNotMatch: 'Las contraseñas no son iguales',
        },
        passwordConfirm: {
          label: 'Confirmar contraseña',
          placeholder: 'Ingresa tu contraseña nuevamente',
        },
      },
      lists: {
        emptyData: 'No hay datos',
      },
      errors: {
        apiCallErrorMessage:
          'Se ha producido un error en la aplicación. Por favor intente nuevamente mas tarde',
        globalErrorBoundary: {
          title: 'Oops,\nha ocurrido un error',
          message1: 'La app se encontró con un problema y no puede continuar',
          message2: 'Presiona el botón debajo para reiniciar la app',
          message3: 'Por favor, no dudes en contactarnos si el problema persiste',
          restart: 'Reiniciar aplicación',
          contact: 'Contactanos',
          contactForm: {
            commentLabel: 'Comentarios',
            commentPlaceholder: 'Ingresa toda la información que creas relevante...',
          },
        },
      },
      validations: {
        required: 'El campo es requerido',
        onlyNumbers: 'Solo se aceptan números',
        noNumbers: 'Debe tener al menos un número',
        noLowerCase: 'Debe tener al menos una letra minúscula',
        noUpperCase: 'Debe tener al menos una letra mayúscula',
        noSpecialCharacter: 'Debe tener al menos un caracter especial',
        otpInvalidLength: 'El campo debe tener {length} dígitos',
        emailInvalid: 'No es un formato válido de mail',
        minLength: 'Debe tener un mínimo de {min} caracteres',
        maxLength: 'Debe tener un máximo de {max} caracteres',
        passwordNotConfirmed: 'Contraseña y confirmar contraseña no son iguales',
        emptyFile: 'El archivo está vacío',
      },
      toasts: {
        goToStore: {
          text1: 'Hay una actualización disponible en la tienda',
        },
        copyToClipboard: {
          text2: 'fue copiado al portapapeles!',
        },
        download: {
          success: {
            text1: 'Descarga completada',
            text2: 'Descargaste {{file}}',
          },
          error: {
            text1: 'Descarga fallida',
            text2: 'Ocurrió un error intentando realizar la descarga',
          },
        },
      },
      forms: {
        passwordRecovery: 'Recuperar contraseña',
        emailLabel: 'Mail',
        emailPlaceholder: 'Ingresa tu mail',
        passwordLabel: 'Contraseña',
        passwordPlaceholder: 'Ingresa tu contraseña',
        passwordConfirmLabel: 'Confirmar Contraseña',
        passwordConfirmPlaceholder: 'Ingresa tu contraseña nuevamente',
      },
    },
    screens: {
      welcome: {
        title: 'Bienvenido!',
        buttons: {
          login: 'Ingresar',
          register: 'Crear cuenta',
        },
        screens: {
          login: {
            title: 'Login',
            message: 'Escribí tu mail y contraseña para ingresar a la app',
            passwordRecoveryMessage: 'Recuperar contraseña',
          },
          register: {
            screens: {
              sendEmail: {
                header: 'Registración',
                message: 'Por favor, ingresa el mail de tu nueva cuenta.',
              },
              emailVerification: {
                header: 'Verificación de mail',
                message:
                  'Hemos enviado un código de verificación al mail {{email}}. Revisa la casilla de correo y agregalo a continuación.',
                toast: {
                  title: 'Código incorrecto',
                  message: 'Ingresa 1234 para continuar con el proceso',
                },
              },
              createPassword: {
                header: 'Contraseña',
                message:
                  'Ingresa una contraseña que cumpla con los siguientes requisitos:\n- Posea al menos una letra minúscula.\n- Posea al menos una letra mayúscula.\n- Posea al menos un caracter especial.\n Posea al menos 8 caracteres.',
              },
              personalData: {
                header: 'Datos personales',
                message: 'Completa el formulario con tus datos personales',
                form: {
                  fullNameLabel: 'Nombre completo',
                  fullNamePlaceholder: 'Ingresa nombre completo',
                  addressLabel: 'Dirección',
                  addressPlaceholder: 'Ingresa dirección',
                  genderLabel: 'Género',
                },
              },
            },
          },
          passwordRecovery: {
            screens: {
              sendEmail: {
                header: 'Recuperar contraseña',
                message:
                  'Antes de recuperar la contraseña, debemos validar tu identidad. Por favor, ingresa el mail de tu cuenta.',
              },
              emailVerification: {
                header: 'Recuperar contraseña',
                message:
                  'Hemos enviado un código de verificación al mail {{email}}. Revisa la casilla de correo y agregalo a continuación.',
                toast: {
                  title: 'Código incorrecto',
                  message: 'Ingresa 1234 para continuar con el proceso',
                },
              },
              changePassword: {
                header: 'Cambiar contraseña',
                message:
                  'Ingresa una nueva contraseña que cumpla con los siguientes requisitos:\n- Posea al menos una letra minúscula.\n- Posea al menos una letra mayúscula.\n- Posea al menos un caracter especial.\n Posea al menos 8 caracteres.',
              },
            },
          },
        },
      },
      home: {
        buttons: {
          buttons: 'Tipos de botones',
          texts: 'Tipos de textos',
          loading: 'Tipos de carga',
          modals: 'Tipos de modales',
          toasts: 'Tipos de tostadas',
          forms: 'Tipos de formularios',
          about: 'Acerca de la app',
          userPreferences: 'Preferencias de usuario',
          lists: 'Tipos de listas',
        },
        screens: {
          buttons: {
            title: 'Tipos de botones',
            defaultVariant: 'Botón por defecto',
            secondaryVariant: 'Botón secundario',
            secondaryNoBorderVariant: 'Botón secundario sin bordes',
            enableButtons: 'Presiona para habilitar botones',
            disableButtons: 'Presiona para deshabilitar botones',
            iconButton: 'Botón con ícono',
            shareTemplate: 'Esto es un template para compartir',
          },
          texts: {
            header: 'Tipos de textos',
            title: 'Titulo',
            label: 'Label',
            generic: 'Texto genérico',
            hideableText: 'Texto escondible 123',
            show: 'Mostrar',
            hide: 'Esconder',
            error: 'Error',
          },
          loading: {
            header: 'Tipos de carga',
            text1: 'Este texto se suporpone con el spinner',
            text2: 'Este texto no se suporpone con el spinner',
          },
          modals: {
            header: 'Modals',
            showModal: 'Mostrar modal',
            showBottomSheet: 'Mostrar bottom sheet',
          },
          toasts: {
            header: 'Tipos de tostadas',
            buttons: {
              error: 'Mostrar error',
              warning: 'Mostrar warning',
              success: 'Mostrar exito',
              info: 'Mostrar info',
            },
            messages: {
              error1: 'Mensaje error1',
              error2: 'Mensaje error2',
              warning1: 'Mensaje warning1',
              warning2: 'Mensaje warning2',
              success1: 'Mensaje existo1',
              success2: 'Mensaje existo2',
              info1: 'Mensaje info1',
              info2: 'Mensaje info2',
            },
          },
          forms: {
            header: 'Formularios',
            form: {
              passwordLabel: 'Contraseña',
              passwordPlaceholder: 'Ingresa tu contraseña',
              firstNameLabel: 'Nombre',
              firstNamePlaceholder: 'Ingresa tu nombre',
              optionsLabel: 'Opciones',
              optionsWithSearchLabel: 'Tiene buscador',
              flagLabel: 'Booleano',
              pictureLabel: 'Foto',
              picturePlaceholder: 'Subir archivo...',
            },
            forms: {
              login: {
                goToLabel: 'Login mock',
                header: 'Login',
              },
              register: {
                goToLabel: 'Register mock',
                header: 'Registración',
                form: {
                  fullNameLabel: 'Nombre completo',
                  fullNamePlaceholder: 'Ingresá tu nombre completo',
                  submit: 'Registrarse',
                },
              },
              changePassword: {
                goToLabel: 'Cambio contraseña mock',
                header: 'Cambio contraseña',
              },
              otpCodeValidation: {
                goToLabel: 'Validación Otp mock',
                header: 'Confirmación Otp',
              },
            },
          },
          about: {
            header: 'Acerca de la App',
            environment: 'Ambiente',
            version: 'Version',
            build: 'Build',
            latestVersion: 'Última versión en la tienda',
            minimumVersion: 'Mínima versión requerida',
          },
          userPreferences: {
            header: 'Preferencias de usuario',
            themeLabel: 'Theme',
          },
          lists: {
            header: 'Listas',
            actionBar: {
              pullDown: 'Refresh manual',
              empty: 'Lista vacía',
              fetchMore: 'Fetch manual',
              search: 'Busqueda local',
            },
            emptyList: {
              header: 'Lista sin datos',
              message: 'No hay datos',
            },
            fetchMoreList: {
              header: 'Obtiene nueva página manualmente',
              fetchMore: 'Expandir',
            },
            searchList: {
              header:
                'Escribe en el campo de arriba para realizar una búsqueda y filtrar sobre la lista inferior',
            },
            pullDownList: {
              header:
                'Continua scrolleando hacia arriba cuando llegas al tope para refrescar lista (revierte la lista)',
            },
          },
        },
      },
    },
  },
}[currentLanguageKey];

export const TRANSLATION_INPUTS = TRANSLATOR.components.inputs;
export const TRANSLATION_BUTTONS = TRANSLATOR.components.buttons;
export const TRANSLATION_TOASTS = TRANSLATOR.components.toasts;
export const TRANSLATION_VALIDATIONS = TRANSLATOR.components.validations;
export const TRANSLATION_SCREENS = TRANSLATOR.screens;
