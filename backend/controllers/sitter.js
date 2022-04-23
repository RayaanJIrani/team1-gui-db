const sitterModel = require('../models/sitter');
const crypto = require("crypto");
const userModels = require("../models/users");

const doesSitterExist = async (email) => {
 const users = await sitterModel.find({email : email });
 return users.length === 1;
}

const updateSitter = async (id, firstName, lastName, email, password, location, price, age, experience, imgurl) => {
    //the first check is to see if the sitter exists
    //recall all of the other parameters change the values of account
    const sitter = await sitterModel.find({id:id});
    if(sitter.length === 0 ){
        return {
            error: "User account Does not exist"
        };
    }
    //checks to see if the user inputed items to change
    if((firstName == null || firstName == '') && (lastName == null || lastName == '') && (email == null || email == '') && (password == null || password == '') && (location == null || location == '') && (price == null  || price == '') && (age == null || age == '') && (experience == null || experience == "") && (imgurl == null || imgurl == '')){
        return {
            error: "No changes entered"
        };
    }
    //checks to see if another account has the email which the account is being changed to
    if(email != null && email != ''){
        const emailExists = await doesSitterExist(email);
        if(emailExists){
            return {
                error: "Changes conflict with existing user"
            };
        }
    }
    //if the password is being changed, the password is hashed
    salt = null //have to declare here.
    if(password != null){
        if(password == ''){
            password = null; //for filter usage later
        } else {
            salt = 'DB_SALT';
            console.log("Plaintext password: " + password);
            password = crypto.createHash('sha256').update(salt + password).digest('hex');
        }
    }
    console.log("Reached here 1");
    const filters = await getUpdateFilters(firstName, lastName, email, password, salt, imgurl, location, price, age, experience);
    console.log("Reached here 2");
    console.log(filters);
    const result = await sitterModel.updateSitter(id, filters);
    return result;

}

const getUpdateFilters = async (firstName, lastName, email, password, salt, imgurl, location, price, age, experience) => {
    const filters = {};
    if(firstName != null && firstName != ''){
        filters.firstName = firstName;
    }
    if(lastName != null && lastName != ''){
        filters.lastName = lastName;
    }
    if(email != null && email != ''){
        filters.email = email;
    }
    if(password != null){
        filters.password = password;
    }
    if(salt != null){
        filters.salt = salt;
    }
    if(imgurl != null && imgurl != ''){
        filters.imgurl = imgurl;
    }
    if(location != null && location != ''){
        filters.location = location;
    }
    if(price != null && price != ''){
        filters.price = price;
    }
    if(age != null && age != ''){
        filters.age = age;
    }
    if(experience != null && experience != ''){
        filters.experience = experience;
    }
    return filters;
}

module.exports = {
    doesSitterExist,
    updateSitter
}