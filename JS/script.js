


const persons = [
    { name: "Rafał", surname: "Biolik"},
    { name: "Jan", surname: "Kowalski"},
];


const getFullName = ({name, surname}) => `${name} ${surname}`;

persons.sort((a , b) => getFullName(a).localeCompare(getFullName(b)));






