EmployeeList = new Mongo.Collection('employee');

if(Meteor.isClient){
    Template.username.helpers({
        'player': function(){
            return EmployeeList.find({});
        },
    });

    Template.userform.events({
        'submit form': function(){
            event.preventDefault();
            var playerNameVar = event.target.playerName.value;
            EmployeeList.insert({
                name: playerNameVar,
                age: 0,
            });
            event.target.playerName.value = "";
        }
    });
}

if(Meteor.isServer){
    
}