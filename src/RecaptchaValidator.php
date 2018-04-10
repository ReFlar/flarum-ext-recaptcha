<?php

namespace Flarum\ReCaptcha;

use Flarum\Foundation\AbstractValidator;

class ReCaptchaValidator extends AbstractValidator
{
    /**
     * {@inheritdoc}
     */
    protected $rules = [
        'g-recaptcha-response' => [
            'required',
            'recaptcha',
        ],
    ];
}
