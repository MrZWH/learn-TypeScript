// 最佳通用类型
let x = [0, 1, null]

class Animal {
	numLegs: number
}

class Bee extends Animal {

}

class Lion extends Animal {

}

// let zoo = [new Bee(), new Lion()]
let zoo: Animal[] = [new Bee(), new Lion()]



// 上下文类型
window.onmousedown = function (mouseEvent) {
	console.log(mouseEvent.clickTime) // 这里会报错因为根据上下文推断是没有 clickTime 这个属性的
}


class Animal {
	numLegs: number
}

class Bee extends Animal {

}

class Lion extends Animal {

}

function createZoo(): Animal[] {
	return [new Bee(), new Lion()]
}