let person = {
	name: "Naruto Uzumaki",
	jobTitle: "Ninja",
	email: "naruto@leafvillage.com", 
	isVerified: false
}
console.log(`${person.name} Verified:${person.isVerified}`)
//Change isVerified
person.isVerified=true;

//delete
delete person.name;
//new values
person.FirstName= "Naruto";
person.LastName="Uzumaki"
console.table(person);