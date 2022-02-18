const person = {
    firstname: 'Jhanu',
    lastname: 'Dela Cruz',
    birthday: '01/01/2000',
}

// From milli seconds convert to years
const calculateAge = (dateString) => Math.floor((new Date() - new Date(dateString))/1000/60/60/24/365);

const getCategory = (value = 0) => {
    if (value >= 0 && value <= 12) {
        return 'Young';
    } else if ( value >= 13 && value <= 19) {
        return 'Teen';
    } else if (value >= 20 && value <= 59) {
        return 'Adult';
    }
    return 'Senior'
}

const age = calculateAge(person.birthday);
const category = getCategory(age);
const result = `Initials: ${person.firstname.charAt()}${person.lastname.charAt()},Age:${age} ${category}`;
console.log(result)