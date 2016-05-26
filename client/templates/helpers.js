Template.work.helpers({
    projects: function(){
        return Projects.find();
    }
});

Template.login.events({
    'submit .login-user': function(event){
        event.preventDefault();
        var username = event.target.username.value;
        var password = event.target.password.value;

        Meteor.loginWithPassword(username, password, function(err){
            if (err) {
                event.target.username.value = username;
                event.target.password.value = password;
                FlashMessages.sendError(err.reason);
            }else{
                FlashMessages.sendSuccess('You are now logged in!');
                Router.go('/admin/projects');
            }
        });
        event.target.username.value = '';
        event.target.password.value = '';
    }
});

Template.layout.events({
    'click .logout-user': function(event){
        event.preventDefault();
        Meteor.logout(function(err){
            if (err) {
                FlashMessages.sendError(err.reason);
            } else {
                FlashMessages.sendSuccess('You are now logged out!');
                Router.go('/');
            }
        });
    }
});

Template.registerHelper('formatDate', function(date){
    return moment(date).format('MMMM Do YYYY, h:mm:ss a');
});

Template.registerHelper('getSiteTitle', function(){
    return 'ABB';
});

Template.registerHelper('getAdminName', function(){
    return 'Kevin Ortiz';
});

Template.registerHelper('getAdminImage', function(){
    return '/assets/img/user.png';
});
