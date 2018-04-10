<?php

namespace Flarum\ReCaptcha;

use Flarum\User\Command\RegisterUser;

class Validate
{
    /**
     * @var ReCaptchaValidator
     */
    protected $validator;

    /**
     * @param ReCaptchaValidator $validator
     */
    public function __construct(ReCaptchaValidator $validator)
    {
        $this->validator = $validator;
    }

    public function handle($command, $next)
    {
        if ($command instanceof RegisterUser) {
            $this->validator->assertValid([
                'g-recaptcha-response' => array_get($command->data, 'attributes.g-recaptcha-response')
            ]);
        }
        return $next($command);
    }
}
