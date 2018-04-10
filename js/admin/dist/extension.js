'use strict';

System.register('flarum/recaptcha/components/ReCaptchaSettingsModal', ['flarum/app', 'flarum/components/SettingsModal'], function (_export, _context) {
  "use strict";

  var app, SettingsModal, ReCaptchaSettingsModal;
  return {
    setters: [function (_flarumApp) {
      app = _flarumApp.default;
    }, function (_flarumComponentsSettingsModal) {
      SettingsModal = _flarumComponentsSettingsModal.default;
    }],
    execute: function () {
      ReCaptchaSettingsModal = function (_SettingsModal) {
        babelHelpers.inherits(ReCaptchaSettingsModal, _SettingsModal);

        function ReCaptchaSettingsModal() {
          babelHelpers.classCallCheck(this, ReCaptchaSettingsModal);
          return babelHelpers.possibleConstructorReturn(this, (ReCaptchaSettingsModal.__proto__ || Object.getPrototypeOf(ReCaptchaSettingsModal)).apply(this, arguments));
        }

        babelHelpers.createClass(ReCaptchaSettingsModal, [{
          key: 'className',
          value: function className() {
            return 'ReCaptchaSettingsModal Modal--small';
          }
        }, {
          key: 'title',
          value: function title() {
            return app.translator.trans('flarum-recaptcha.admin.recaptcha_settings.title');
          }
        }, {
          key: 'form',
          value: function form() {
            return [m(
              'div',
              { className: 'Form-group' },
              m(
                'label',
                null,
                app.translator.trans('flarum-recaptcha.admin.recaptcha_settings.sitekey_label')
              ),
              m('input', { className: 'FormControl', bidi: this.setting('flarum-recaptcha.sitekey') })
            ), m(
              'div',
              { className: 'Form-group' },
              m(
                'label',
                null,
                app.translator.trans('flarum-recaptcha.admin.recaptcha_settings.secret_label')
              ),
              m('input', { className: 'FormControl', bidi: this.setting('flarum-recaptcha.secret') })
            )];
          }
        }]);
        return ReCaptchaSettingsModal;
      }(SettingsModal);

      _export('default', ReCaptchaSettingsModal);
    }
  };
});;
'use strict';

System.register('flarum/recaptcha/main', ['flarum/app', 'flarum/recaptcha/components/ReCaptchaSettingsModal'], function (_export, _context) {
  "use strict";

  var app, ReCaptchaSettingsModal;
  return {
    setters: [function (_flarumApp) {
      app = _flarumApp.default;
    }, function (_flarumRecaptchaComponentsReCaptchaSettingsModal) {
      ReCaptchaSettingsModal = _flarumRecaptchaComponentsReCaptchaSettingsModal.default;
    }],
    execute: function () {

      app.initializers.add('flarum-recaptcha', function () {
        app.extensionSettings['flarum-recaptcha'] = function () {
          return app.modal.show(new ReCaptchaSettingsModal());
        };
      });
    }
  };
});