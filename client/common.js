Meteor.subscribe('posts');
Meteor.subscribe('ProfileImages');
Meteor.subscribe('UserImages');

Meteor.startup(function () {
    AccountsEntry.config({
        homeRoute: '/', // mandatory - path to redirect to after sign-out
        dashboardRoute: '/',
        passwordSignupFields: 'USERNAME_AND_EMAIL'
    });

    Accounts.ui.config({
        passwordSignupFields: 'USERNAME_AND_EMAIL'
    });
});

Template.registerHelper('getProfileImg', function (userId) {
    var imgUrl = UserImages.findOne({userId: userId}) || null;
    if (imgUrl && imgUrl.image) {
        imgUrl = imgUrl.image;
    }
    console.log('Running Template.registerHelper("getProfileImg")');
    console.log('imgUrl', imgUrl);
    console.log('imgUrl.image', imgUrl.image);
    return imgUrl || '/img/pic.png';
});
