import React from 'react';
import GenericModal from '~/components/containers/modals/genericModal/GenericModal';
import {IContactUsModalProps} from './IContactUsModalProps';
import GenericInput from '~/components/forms/inputs/genericInput/GenericInput';
import {useForm} from '~/hooks/forms/useForm';
import {useContactUsValidations} from './hooks/useContactUsValidations';
import {TRANSLATION_BUTTONS, TRANSLATOR} from '~/constants/Translator';
import PrimaryButton from '~/components/buttons/primaryButton/PrimaryButton';
import RNRestart from 'react-native-restart';
import MultilineInput from '~/components/forms/inputs/multilineInput/MultilineInput';
import {useDimentions} from '~/hooks/useDimentions';

const translator = TRANSLATOR.components.forms;
const translatorForm = TRANSLATOR.components.errors.globalErrorBoundary.contactForm;
const {vh} = useDimentions();

const ContactUsModal = ({onClose, showModal}: IContactUsModalProps) => {
  const {validateForm} = useContactUsValidations();
  const {errors, handleChange, handleSubmit, values} = useForm({
    defaultValues: {
      email: '',
      comment: '',
    },
    validateForm,
    onSuccess: values => {
      console.log('success', {values});
      RNRestart.Restart();
    },
    onError: (values, errors) => {
      console.log('error', {values, errors});
      RNRestart.Restart();
    },
  });

  return (
    <GenericModal isVisible={showModal} onClose={onClose}>
      <GenericInput
        value={values.email}
        onChange={value => handleChange('email', value)}
        errorMessage={errors?.email}
        label={translator.emailLabel}
        placeholder={translator.emailPlaceholder}
      />
      <MultilineInput
        value={values.comment}
        onChange={value => handleChange('comment', value)}
        errorMessage={errors?.comment}
        label={translatorForm.commentLabel}
        placeholder={translatorForm.commentPlaceholder}
        style={{height: vh * 35}}
      />
      <PrimaryButton
        onPress={handleSubmit}
        label={TRANSLATION_BUTTONS.send}
        containerStyle={{marginTop: vh * 2}}
      />
    </GenericModal>
  );
};

export default ContactUsModal;
