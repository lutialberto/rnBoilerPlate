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
      },
      toasts: {
        goToStore: {
          text1: 'Hay una actualización disponible en la tienda',
        },
        copyToClipboard: {
          text2: 'fue copiado al portapapeles!',
        },
      },
    },
    screens: {
      home: {
        buttons: {
          buttons: 'Tipos de botones',
          texts: 'Tipos de textos',
          loading: 'Tipos de carga',
          modals: 'Tipos de modales',
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
