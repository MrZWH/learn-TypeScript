class User {
	fullName:string
	firstName:string
	lastName:string

	constructor(firstName:string, lastName:string) {
		this.firstName = firstName
		this.lastName = lastName
		this.fullName = firstName + ' ' + lastName
	}
}

interface Person {
	fullName: string
	lastName: string
}

// function greeter(person: string) {
// 	return 'hello ' + person
// }

function greeter(person: Person) {
	return 'hello ' + person.firstName + ' ' + person.lastName
}

// let user = 'zhang'

// let user = {
// 	firstName: 'zhang',
// 	lastName: 'hh'
// }

let user = new User('zhang', 'hh')

console.log(greeter(user))