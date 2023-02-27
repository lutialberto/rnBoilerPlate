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
          'Se ha producido un error en la aplicación. Por favor intente mas tarde',
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
      },
      toasts: {
        goToStore: {
          text1: 'Hay una actualización disponible en la tienda',
        },
        copyToClipboard: {
          text2: 'fue copiado al portapapeles!',
        },
      },
      forms: {
        emailLabel: 'Mail',
        emailPlaceholder: 'Ingresa tu mail',
        passwordLabel: 'Contraseña',
        passwordPlaceholder: 'Ingresa tu contraseña',
        passwordConfirmLabel: 'Confirmar Contraseña',
        passwordConfirmPlaceholder: 'Ingresa tu contraseña nuevamente',
      },
    },
    screens: {
      home: {
        buttons: {
          buttons: 'Tipos de botones',
          texts: 'Tipos de textos',
          loading: 'Tipos de carga',
          modals: 'Tipos de modales',
          toasts: 'Tipos de tostadas',
          forms: 'Tipos de formularios',
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
              lastNameLabel: 'Apellido',
              lastNamePlaceholder: 'Ingresa tu apellido',
              optionsLabel: 'Opciones',
              optionsWithSearchLabel: 'Tiene buscador',
              flagLabel: 'Booleano',
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
