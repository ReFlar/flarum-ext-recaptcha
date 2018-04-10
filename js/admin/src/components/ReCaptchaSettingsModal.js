import app from 'flarum/app';
import SettingsModal from 'flarum/components/SettingsModal';

export default class ReCaptchaSettingsModal extends SettingsModal {
  className() {
    return 'ReCaptchaSettingsModal Modal--small';
  }

  title() {
    return app.translator.trans('flarum-recaptcha.admin.recaptcha_settings.title');
  }

  form() {
    return [
      <div className="Form-group">
        <label>
          {app.translator.trans('flarum-recaptcha.admin.recaptcha_settings.sitekey_label')}
        </label>
        <input className="FormControl" bidi={this.setting('flarum-recaptcha.sitekey')} />
      </div>,
      <div className="Form-group">
        <label>
          {app.translator.trans('flarum-recaptcha.admin.recaptcha_settings.secret_label')}
        </label>
        <input className="FormControl" bidi={this.setting('flarum-recaptcha.secret')} />
      </div>,
    ];
  }
}
