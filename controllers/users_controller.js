
const User = require('../models/user');

module.exports.profile = function(req, res) {

if (req.cookies.user_id) {

User.findById(req.cookies.user_id, function(err, user) {
    

if (user) {

return res.render('user_profile', {

title: "User Profile",

user: user

})

}
else{

return res.redirect('/users/sign-in');

}

});

}else{

return res.redirect('/users/sign-in');

}
}

module.exports.profile = function(req,res){
    return res.render('user_profile',{
        title:'User Profile'
    })
}
module.exports.signUp = function(req,res){
    return res.render('user_sign_up',{
        title:"Codeial| Sign Up"
    }) 
}
module.exports.signIn = function(req,res){
    return res.render('user_sign_in',{
        title:"Codeial| Sign In"
    }) 
}
module.exports.create = function(req, res) {

    if (req.body.password != req.body.confirm_password) {
    
    return res.redirect('back');
    
    }
    
    User.findOne({email: req.body.email}, function(err, user) {
    
    if(err){console.log('error in finding user in signing up'); return}
    
    if (!user) {
    
    User.create(req.body, function(err, user) {
    
    if(err){console.log('error in creating user while signing up'); return}
    
    return res.redirect('/users/sign-in');
    
    })
    
    }else{
    
    return res.redirect('back');
    
    }
    
    });
    }
    module.exports.createSession = function(req, res) {

        // steps to authenticate
        
        // find the user
        
        User.findOne({email: req.body.email}, function(err, user){
        
        if(err) {console.log('error in finding user in signing in'); return }
        
        
        if (user) {
        
        
        if (user.password != req.body.password) { return res.redirect('back');
        
        }
        
        
        res.cookie('user_id', user.id);
        
        return res.redirect('/users/profile');
        
        }else{
        
        // handle user not found
        
        return res.redirect('back');
        
        }
        });
    }