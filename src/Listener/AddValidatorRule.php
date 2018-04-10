<?php

namespace Flarum\ReCaptcha\Listener;

use Flarum\Foundation\Event\Validating;
use Flarum\ReCaptcha\ReCaptchaValidator;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Contracts\Events\Dispatcher;
use ReCaptcha\ReCaptcha;

class AddValidatorRule {
    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    /**
     * @param SettingsRepositoryInterface $settings
     */
    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }

    public function subscribe(Dispatcher $events)
    {
        $events->listen(Validating::class, [$this, 'addRule']);
    }

    public function addRule(Validating $event) {
        $secret = $this->settings->get('flarum-recaptcha.secret');
        if (! empty($secret)) {
            if ($event->type instanceof ReCaptchaValidator) {
                $event->validator->addExtension(
                    'recaptcha',
                    function($attribute, $value, $parameters) use ($secret) {
                        $recaptcha = new ReCaptcha($secret);
                        return $recaptcha->verify($value)->isSuccess();
                    }
                );
            }
        }
    }
}
