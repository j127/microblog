Template.profile.events({
    'submit .edit-profile': function (e) {
        var file = $('#profileImage').get(0).files[0];

        if (file) {
            fsFile = new FS.File(file);
            console.log('fsFile', fsFile);

            ProfileImages.insert(fsFile, function (err, result) {
                if (err) {
                    throw new Meteor.Error(err);
                } else {
                    var imageLoc = '/cfs/files/ProfileImages/' + result._id;

                    var insertObj = {
                        userId: Meteor.userId(),
                        username: Meteor.user().username,
                        image: imageLoc
                    };
                    console.log('file', file);
                    console.log('insertObj', insertObj);
                    UserImages.insert(insertObj);

                    Router.go('/');
                }
            });
        }
        return false;
    }
})
