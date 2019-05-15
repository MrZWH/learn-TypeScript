// function printLabel(labelledObj: {label: string}) {
// 	console.log(labelledObj.label)
// }

// let myObj = {size: 10, label: 'Size 10 Object'}

// printLabel(myObj)


interface LabelledValue {
	label: string
}


function printLabel(labelledObj: LabelledValue) {
	console.log(labelledObj.label)
}

let myObj = {size: 10, label: 'Size 10 Object'}

printLabel(myObj)




// 可选属性
interface Square {
	color: string
	area: number
}

interface SquareConfig {
	color?: string
	width?: number
}

function createSquare(config: SquareConfig): Square {
	let newSquare = {
		color: 'white',
		area: 100
	}

	if(config.color) {
		newSquare.color = config.color
	}

	if (config.width) {
		newSquare.area = config.width * config.width
	}
	return newSquare
}

let mySquare = createSquare({color: 'black'})








// 只读属性
interface Point {
	readonly x: number
	readonly y: number
}

let p1: Point = {x: 10, y: 20}
p1.x = 5 // 会报错






let a: number[] = [1, 2, 3, 4]
let ro: ReadonlyArray<number> = a
ro[0] = 12 // 会报错







// 额外属性检查
interface SquareConfig {
	color?: string
	width?: number

	[propName: string]: any
}







// 函数类型
interface SearchFunc {
	(source: string, subString: string): boolean
}

let mySearch: SearchFunc
mySearch = function (src, sub): boolean {
	let result = source.search(subString)
	return result > -1
}








// 可索引类型
interface StringArray {
	[index: number]: string
}

let myArray: StringArray

myArray = ['Bob', 'Fred']

let myStr: string = myArray[0]







interface ClockInterface {
	currentTime: Date

	setTime(d: Date)
}

class Clock implements ClockInterface {
	currentTime: Date

	constructor(h: number, m: number) {

	}

	setTime(d: Date) {
		this.currentTime = d
	}
}






// 实例部分的接口类型
interface ClockInterface {
	tick()
}

// 构造器部分的接口类型
interface ClockConstructor {
	new(hour: number, minute: number): ClockInterface
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
	return new ctor(hour, minute)
}

class DigitalClock implements ClockInterface {
	constructor(h: number, m: number) {

	}

	tick() {
		console.log('beep beep')
	}
}

class AnalogClock implements ClockInterface {
	constructor(h: number, m: number) {

	}

	tick() {
		console.log('tick toc')
	}
}

let digital = createClock(DigitalClock, 12, 17)
let analog = createClock(AnalogClock, 7, 32)






// 继承接口
interface Shape {
	color: string
}

interface PenStroke {
	penWidth: number
}

interface Square extends Shape, PenStroke {
	sideLength: number
}

let squre = {} as Square
squre.color = 'blue'
squre.sideLength = 10
squre.penWidth = 5.0








// 混合类型
interface Counter {
	(start: number): string
	interval: number

	reset(): void
}

function getCounter(): Counter {
	let counter = (function (start: number) {
				
	}) as Counter

	counter.interval = 123

	counter.reset = function () {

	}

	return counter
}

let c = getCounter()
c(10)
c.reset()
c.interval = 5.0











// 接口继承类
class Control {
	private state: any
}

interface SelectableControl extends Control {
	select()
}

class Button extends Control implements SelectableControl {
	select() {}
}

class TextBox extends Control {
	select() {}

}

class ImageC implements SelectableControl {
	select() {}
	
}