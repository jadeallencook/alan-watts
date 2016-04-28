// coded by jade allen cook

// init the application
var app = angular.module('app', ['ngRoute']);

// assign variables to scope
// all business data
var business = {
    // basic info
    name: 'Alan Watts',
    tag: 'Philosopher, Writer, and Speaker',
    logo: 'http://www.placehold.it/250X500',
    phone: '(555) 555-5555',
    // physical address
    address: {
        street: '123 Vehicula Ave',
        city: 'Cursus Elit',
        state: 'Ipsum'
    },
    // social media links
    social: {
        website: 'http://www.alanwatts.com',
        facebook: '#',
        twitter: '#',
        instagram: '#',
        pintrest: '#',
        tumblr: '#'
    },
    // adds tag into title
    titleTag: true
};

// external fonts
var fonts = {
    primary: {
        name: 'Reenie Beanie',
        link: 'https://fonts.googleapis.com/css?family=Reenie+Beanie',
        secondary: 'Arial'
    }, 
    header: {
        name: 'La Belle Aurore',
        link: 'https://fonts.googleapis.com/css?family=La+Belle+Aurore',
        secondary: 'Arial'
    }
};

// universal colors
var color = {
    black: '#000',
    white: '#FFF',
    primary: '#FF0D00',
    secondary: '#018B9E',
    highlight: '#9FEE00'
};

// navbar info 
var navbar = [
    {
        title: 'home',
        link: 'home',
    }
];

// home.html
var home = {

};