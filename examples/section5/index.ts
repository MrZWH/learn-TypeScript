function add (x: number, y: number): number {
	return x +y
}

// 定义函数类型
let myAdd:(baseValue: number, increment: number) => number = function(x: number, y:number):number {
	return x + y
}








// 可选参数




// this
interface Card {
	suit: string
	card: number
}

interface Deck {
	suits: string[]
	cards: number[]
	createCardPicker(this: Deck): () => Card
}

let deck: Deck = {
	suits: ['hearts', 'spades', 'clubs'],
	card: Array(52),
	createCardPicker: function(this: Deck) {
		return () => {
			let pickedCard = Math.floor(Math.random() * 52)
			let pickedSuit = Math.floor(pickedCard / 13)

			return {
				suit: this.suits[pickedSuit],
				card: pickedCard % 13
			}
		}
	}
}

let cardPicker = deck.createCardPicker()
let pickedCard = cardPicker()

console.log(pickedCard.card + pickedCard.suit)






interface UIElement {
	addClickListener(onclick: (this: void, e: Event) => void): void
}

class Handler {
	type: string

	onClickBad = (e: Event) => {
		this.type = e.type
	}
}

let h = new Handler()

let uiElement: UIElement = {
	addClickListener() {

	}
}

uiElement.addClickListener(h.onClickBad)








// 重载