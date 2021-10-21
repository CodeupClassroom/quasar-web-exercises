const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// =========================Exercise Solutions===============================
// Problem 2
// var threeLanguages = users.filter(function(person){
//     return person.languages.length >= 3;
// })

let threeLanguages = users.filter((person) => person.languages.length > 2)

console.log(threeLanguages);

// Problem 3
// var userEmails = users.map(function(person){
//     return person.email
// })

let userEmails = users.map((person) => person.email)

console.log(userEmails)


// Problem 4
var totalExp = users.reduce(function(total,user){
    return total + user.yearsOfExperience
},0)

console.log(totalExp);

let averageExp = totalExp/users.length

console.log(averageExp)

// Problem 5
var longestEmail = users.reduce(function(longestEmail,user){
    if(longestEmail.length > user.email.length){
        return longestEmail;
    } else {
        return user.email;
    }
    // return longestEmail.length > user.email.length ? longestEmail : user.email
},"")

console.log(longestEmail);


// Problem 6
// var nameString = users.reduce(function (nString, user,index) {
//     if(index != users.length - 1){
//         return nString + (user.name + ", ")
//
//     }
//     return nString + (user.name + ".")
// },"Your instructors are : ")

var nameString = users.map(function (user) {
return user.name
}).join(", ")

console.log(nameString);






