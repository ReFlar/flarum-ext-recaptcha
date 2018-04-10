import app from 'flarum/app';

import ReCaptchaSettingsModal from 'flarum/recaptcha/components/ReCaptchaSettingsModal';

app.initializers.add('flarum-recaptcha', () => {
  app.extensionSettings['flarum-recaptcha'] = () => app.modal.show(new ReCaptchaSettingsModal());
});
