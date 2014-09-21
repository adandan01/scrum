var app = (function($) {
            var config = $('#config'),
                app = JSON.parse(config.text());
                console.log(app);
            $(document).ready(function() {
                var router = new app.router();
            });
            return app;
        })(jQuery);
