import React from 'react';
import AppScreenContainer from '~/components/containers/screenContainer/AppScreenContainer';
import GenericScreenHeader from '~/components/containers/genericScreenHeader/GenericScreenHeader';
import {TRANSLATION_SCREENS} from '~/constants/Translator';
import PrimaryText from '~/components/texts/primaryText/PrimaryText';
import {BUILD, ENV, VERSION} from '~/constants/EnvConfig';
import {useAppVersion} from '~/hooks/useAppVersion';
import {getAppVersionData} from '~/services/signedIn/AppVersionService';
import Card from '~/components/containers/card/Card';

const translator = TRANSLATION_SCREENS.home.screens.about;

const AboutScreen = () => {
  const {latestVersion, minimumVersion} = useAppVersion(getAppVersionData);
  return (
    <AppScreenContainer>
      <GenericScreenHeader title={translator.header} />
      <Card>
        <PrimaryText text={`${translator.environment}: ${ENV}`} />
        <PrimaryText text={`${translator.version}: ${VERSION.name}`} />
        <PrimaryText text={`${translator.build}: ${BUILD}`} />
      </Card>
      <Card>
        <PrimaryText text={`${translator.latestVersion}: ${latestVersion.name}`} />
        <PrimaryText text={`${translator.minimumVersion}: ${minimumVersion.name}`} />
      </Card>
    </AppScreenContainer>
  );
};

export default AboutScreen;
