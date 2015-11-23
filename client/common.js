Meteor.subscribe('posts');
Meteor.subscribe('ProfileImages');
Meteor.subscribe('UserImages');

Meteor.startup(function () {
    AccountsEntry.config({
        homeRoute: '/', // path to redirect to after sign-out
        dashboardRoute: '/',
        passwordSignupFields: 'USERNAME_AND_EMAIL'
    });

    Accounts.ui.config({
        passwordSignupFields: 'USERNAME_AND_EMAIL'
    });
});

Template.registerHelper('getProfileImg', function (userId) {
    var imgObj = UserImages.findOne({userId: userId}) || null;

    console.log('Running Template.registerHelper("getProfileImg") with userId: ' + userId);
    console.log('imgObj', imgObj);
    console.log('imgObj.image', imgObj.image);

    if (imgObj && imgObj.image) {
        imgUrl = imgObj.image;
        console.log('imgUrl', imgUrl);
    }
    return imgUrl || '/img/pic.png';
});
