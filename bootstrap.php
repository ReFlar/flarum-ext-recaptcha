<?php

namespace Flarum\ReCaptcha;

use Flarum\Extend;
use Flarum\Foundation\Application;
use Illuminate\Contracts\Events\Dispatcher;
use Illuminate\Contracts\Bus\Dispatcher as Bus;

return [
    (new Extend\Assets('forum'))
        ->asset(__DIR__.'/js/forum/dist/extension.js')
        ->asset(__DIR__.'/less/forum/extension.less')
        ->bootstrapper('flarum/recaptcha/main'),
    (new Extend\Assets('admin'))
        ->asset(__DIR__.'/js/admin/dist/extension.js')
        ->bootstrapper('flarum/recaptcha/main'),
    (new Extend\Locales(__DIR__.'/locale')),
    function (Application $app) {
        /** @var Dispatcher $events */
        $events = $app['events'];
        /** @var Bus $bus */
        $bus = $app[Bus::class];

        $events->subscribe(Listener\AddApiAttributes::class);
        $bus->pipeThrough([Validate::class]);
    }
];
