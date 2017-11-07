import Glyph from '../glyph';

export default {
	PLAYER: {
		name: 'player',
		glyph: new Glyph('@','#fff')
	},
	WALL: {
		name: 'wall',
		glyph: new Glyph('#')
	},
	FLOOR: {
		name: 'floor',
		glyph: new Glyph(' ')
	},
	SKY: {
		name: 'sky',
		glyph: new Glyph(' ',null,'skyblue')
	},
	EXIT: {
		name: 'exit',
		glyph: new Glyph('^', 'gold')
	},
	GOLD: {
		name: 'gold',
		glyph: new Glyph('$', 'gold')
	}
}
