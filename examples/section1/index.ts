// 布尔类型
let isDone: boolean = true


// 数字
let decLiteral: number = 20
let hexLiteral: number = 0x14
let binaryLiteral: number = 0b10100
let octalLiteral: number = 0o24

// 字符串
let teacherName: string = 'bob'
teacherName = 'sim'

// 数组
// let list: number[] = [1, 2, 3]
let list: Array<number> = [1, 2, 3]

// 元祖类型 tuple，在读取一个 excel 或者 csv 文件的时候有用
let x: [string, number]
x = ['hello', 10]

// console.log(x[0].substr())
// typescript 3.1 之后不可访问越界元素
// console.log(x[5].toString())

// 枚举类型
enum Color {
	Red = 1,
	Green,
	Blue
}

// let c:Color = Color.Green
let colorName: string = Color[2]
console.log(colorName) // Green
// 编译后
// var Color
// (function (Color) {
// 	Color[Color['Red'] = 1] = 'Red'
// 	Color[Color['Green'] = 2] = 'Green'
// 	Color[Color['Blue'] = 3] = 'Blue'
// })(Color || (Color = {}))
// var colorName = Color[2]
// console.log(colorName) // Green

// any 类型
let notSure: any = 4
notSure = 'maybe a string instead'
notSure = false
let list1: any[] = [1, true, 'free']
list1[1] = 100

// void 没有类型
// 不返回任何值的函数
function warnUser(): void {
	console.log('This is my waring message')
}
// 声明 void 类型的变量是没有意义的
let unusable: void = undefined // or null

// null 和 undefined 所有类型的子类型
let u: undefined = undefined
let n: null = undefined
let num: number | null = 3 // 联合类型
num = null

// never 所有类型的子类型，它没有子类型
function error(message: string): never {
	throw new Error(message)
}

function fail() {
	return error('something failed')
}

function inifiniteLoop(): never {
	while (true) {

	}
}




// object
declare function create(o: object | null): void

create(0: { prop: 0 })
create(0: null)

// create(0: 42)  // 会报错
// create(0: 'string')  // 会报错
// create(0: false)  // 会报错




// 类型断言
let someValue: any = 'this is a string'
// someValue.length // 不会报错
// 强制类型转换
// let strLength:number = (<string>someValue).length // 第一种方法
let strLength: number = (someValue as string).length // 第二种方法 （推荐）
