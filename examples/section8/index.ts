// 交叉类型
function extend<T, U>(first: T, second: U): T & U {
	let result = {} as T & U
	for(let id in first) {
		result[id] = first[id] as any
	}

	for(let id in second) {
		if(!result.hasOwnProperty(id)) {
			result[id] = second[id] as any
		}
	}

	return result
}

class Person {
	constructor(public name: string) {

	}
}

interface Loggable {
	log(): void
}

class ConsoleLogger implement Loggable {
	log() {
		// ...
	}
}

var jim = extend(new Person('jim'), new ConsoleLogger())

jim.name
jim.log()





// 联合类型
function padLeft(value: string, padding: string | number) {
	if(typeof padding === 'number') {
		return Array(padding + 1).join(' ') + value
	}

	if(typeof padding === 'string') {
		return padding + value
	}

	throw new Error('...')
}

padLeft('hello', 4)
padLeft('hello', true)



interface Bird {
	fly()
	layEggs()
}

interface Fish {
	swim()
	layEggs()
}

function getSmallPet(): Bird | Fish {
	// ...
}

let pet = getSmallPet()
pet.layEggs()
pet.swim() // 会报错，因为调方法时只能调共有方法

if ((pet as Fish).swim) {
	(pet as Fish).swim()
} else if ((pet as Bird).fly) {
	(pet as Bird).fly()
}

// 类型保护  类型谓词、typeof、instanceof
function isFish(pet: Fish | Bird): pet is Fish {
	return (pet as Fish).swim !== undefined
}

if (isFish(pet)) {
	pet.swim()
} else {
	pet.fly()
}

function isNumber(x: any):x is number {
	return typeof x === 'number'
}

function isString(x: any):x is string {
	return typeof x === 'string'
}

function padLeft(value: string, padding: string | number) {
	if (isNumber(padding)) {
		return Array(padding + 1).join(' ') + value
	}

	if (isString(padding)) {
		return padding + value
	}

	throw new Error('...')
}














// 特殊类型 null 和 undefined
let s = 'foo'
s = null
let sn: string | null = 'bar'
sn = null

sn = undefined


// 可选属性会为 undefined + 联合类型，null 不可以赋值给 undefined 类型
function f(x: number, y?:number) {
	return x + (y || 0)
}

f(1, 2)
f(1)
f(1, undefined)
f(1, null) // 会报错





class C {
	a: number
	b?: number
}

let c = new C()
c.a = 12
c.a = undefined // error
c.b = 13
c.b = undefined
c.b = null // error





function f(sn: string | null): string{
	return sn || 'default'
}



function broken(name: string | null): string {
	function postfix(epithet: string) {
		// 不加 ！typescript 会报错，有可能为 null
		// return name.charAt(0) + '. the ' + epithet
		return name!.charAt(0) + '. the ' + epithet
	}

	name = name || 'Bob'
	return postfix(name)
}








// 字符串字面量类型
// 组成一个联合类型
type Easing = 'ease-in' | 'ease-out' 'ease-in-out'

class UIElement {
	animate (dx: number, dy: number, easing: Easing) {
		if (easing === 'ease-in') {
			// ...
		} else if (easing === 'ease-out') {

		} else if (easing === 'ease-in-out') {

		} else {

		}
	}
}


let button = new UIElement()
button.animate(0, 0, 'ease-in')
button.animate(0, 0, 'uneasy') // error