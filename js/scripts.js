// Copyright Date insertion
const copyrightDate = new Date().getFullYear();
console.log(copyrightDate);

document.getElementById('copyright-text').innerHTML = '© ' + copyrightDate;