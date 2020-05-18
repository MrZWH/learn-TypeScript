class Greeter {
	greeting: string

	constructor(message: string) {
		this.greeting = message
	}

	greet() {
		return 'Hello ' + this.greeting
	}
}

let greeter = new Greeter('world')
greeter.greet()











class Animal {
	name: string

	constructor(name: string) {
		this.name = name
	}

	move(distance: number = 0) {
		console.log(`...`)
	}
}

class Snake extends Animal {
	constructor(name: string) {
		super(name)
	}

	move(distance: number = 5) {
		console.log('...')
		super.move(distance)
	}
}

class Horse extends Animal {
	constructor(name: string) {
		super(name)
	}

	move(distance: number = 45) {
		console.log('...')
		super.move(distance)
	}
}

let sam = new Snake('Sammy')
let tom: Animal = new Horse('Tommy')

sam.move()
tom.move()











class Animal {
	private name: string

	public constructor(name: string) {
		this.name = name
	}

	public move(distance: number = 0) {
		console.log(`...`)
	}
}

class Rhing extends Animal {
	constructor() {
		super('Rhino')
	}
}

class Employee {
	private name: string
	constructor(name: string) {
		this.name = name
	}
}

let animal = new Animal('Goot')
let rhino = new Rhino()
let employee = new Employee('Bob')

animal = rhino
animal = employee // 会报错








class Person {
	protected name: string
	protected constructor(name: string) {
		this.name = name
	}
}

class Employee extends Person {
	private department: string

	constructor(name: string, department: string) {
		super(name)
		this.department = department
	}

	getElevatorPitch() {
		return this.name + this.department
	}
}

let howard = new Employee('Howard', 'Sales')
console.log(howard.getElevatorPitch())
console.log(howard.name) // 会报错

let john = new Person('John') // 会报错










// readonly
class Person {
	readonly name: string

	constructor(name: string) {
		this.name = name
	}
}

let john = new Person('John')
john.name = 'sda' // 会报错



// 参数属性
class Person {
	constructor(readonly name: string) {
		this.name = name
	}
}

let john = new Person('John')
console.log(john.name)
john.name = 'sda' // 会报错








// 存取器
let passcode = 'secret passcode'

class Employee {
	private _fullName: string
	get fullName(): string {
		return this._fullName
	}

	set fullName(newName: string) {
		if (passcode && passcode === 'secret passcode') {
			this._fullName = newName
		} else {
			console.log('Error: Unauthorized update of employee')
		}
	}
}

let employee = new Employee()
employee.fullName = 'Bob Smith'
if (employee.fullName) {
	console.log(employee.fullName)
}









// 静态属性
class Grid {
	static origin = { x: 0, y: 0 }

	scale: number

	constructor(scale: number) {
		this.scale = scale
	}

	calculateDistanceFromOrigin(point: { x: number, y: number }) {
		let xDist = point.x - Grid.origin.x
		let yDist = point.y - Grid.origin.y

		return Math.sqrt(xDist * xDist + yDist * yDist) * this.scale
	}
}

let grid1 = new Grid(1.0)
let grid2 = new Grid(5.0)

console.log(grid1.calculateDistanceFromOrigin({ x: 3, y: 4 }))
console.log(grid2.calculateDistanceFromOrigin({ x: 3, y: 4 }))

// 单例模式
class Single {
	private static instance: Single;
	private constructor(public name: string) { }

	static getInstance() {
		if (!this.instance) {
			this.instance = new Single('zhang')
		}
		return this.instance;
	}
}

const single1 = Single.getInstance()
const single2 = Single.getInstance()
console.log(single1.name)
console.log(single2.name)








// 抽象类
// abstract class Animal {
// 	abstract makeSound(): void
// 	move(): void {
// 		console.log('...')
// 	}
// }

abstract class Department {
	name: string

	constructor(name: string) {
		this.name = name
	}

	printName(): void {
		console.log(this.name)
	}

	abstract printMeeting(): void
}

class AccountingDepartment extends Department {
	constructor() {
		super('Accounting ad Auditing')
	}

	printMeeting(): void {
		console.log('...')
	}

	genterateReports(): void {
		console.log('...')
	}
}

let department: Department
department = new AccountingDepartment()
department.printName()
department.printMeeting()
department.genterateReports() // 会报错，因为以及声明是 Department 类型










// 类的高级技巧
class Greeter {
	static standardGreeting = '...'

	greeting: string

	constructor(message?: string) {
		this.greeting = message
	}

	greet() {
		if (this.greeting) {

			return this.greeting
		} else {
			return Greeter.standardGreeting
		}
	}
}

let greeter: Greeter
greeter = new Greeter()
console.log(greeter.greet())

let greeterMaker: typeof Creeter = Greeter
greeterMaker.standardGreeting = '..'

let greeter2: Greeter = new greeterMaker()
console.log(greeter2.greet())









// 把类当作接口使用
class Point {
	x: number
	y: number
}

interface Point3d extends Point {
	z: number
}

let point3d: Point3d = { x: 1, y: 2, z: 3 }
