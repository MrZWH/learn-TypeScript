function identity<T>(arg: T): T {
	return arg
}

// let output = identity<string>('myString')
let output = identity('myString')

// 泛型变量的使用
function looggingIdentity<T>(arg: T[]): T[] {
	console.log(arg.length)
	return arg
}


// 泛型类型
// let myIdentity: <T>(arg: T) => T = identity

// let myIdentity: {<T>(arg: T): T} = identity

// 泛型接口
interface GenericIdentityFn<T> {
	(arg: T): T
}
let myIdentity: GenericIdentityFn<number> = identity






// 泛型类
class GenericNumber<T> {
	zeroValue: T
	add: (x: T, y: T) => T
}

let myGenericNumber = new GenericNumber<number>()
myGenericNumber.zeroValue = 0
myGenericNumber.add = function(x, y) {
	return x + y
}

let stringNumberic = new GenericNumber<string>()
myGenericNumber.zeroValue = ''
myGenericNumber.add = function(x, y) {
	return x + y
}

console.log(stringNumberic.add(stringNumberic.zeroValue, 'test'))





// 泛型约束
interface Lengthwise {
	length: number
}

function looggingIdentity<T extends Lengthwise>(arg: T): T[] {
	console.log(arg.length)
	return arg
}

function getProperty<T, K extends keyof T>(obj: T, key: K) {
	return obj[key]
} 

let x = {a: 1, b:2}
getProperty(x, 'a')
getProperty(x, 'c')






function create<T>(c: {new(): T}): T {
	return new c()
}





class BeeKeeper {
	hasMask: boolean
}

class LionKeeper {
	nametag: string
}

class Animal {
	numLengs: number
}

class Bee extends Animal {
	keeper: BeeKeeper
}

class Lion extends Animal {
	keeper: LionKeeper
}

function createInstance<T extends Animal>(c: new() => T): T {
	return new c()
}

// 利用推导
createInstance(Lion).keeper.nametag
createInstance(Bee).keeper.hasMask