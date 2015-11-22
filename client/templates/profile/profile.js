Template.profile.events({
    'submit .edit-profile': function (e) {
        var file = $('#profileImage').get(0).files[0];
        console.log(file);
        return false;
    }
})
