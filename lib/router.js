Router.configure({
    layoutTemplate: 'layout'
});

Router.map(function () {
    // Posts route
    this.route('posts', {
        path: '/',
        template: 'posts'
    });

    // About
    this.route('about');
    this.route('profile');
});
