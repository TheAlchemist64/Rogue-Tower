import ROT from '../../vendor/rot';

import { distance, checkCollision } from '../utils';
import TileMap from './map';
import Tile from './tile';
import Glyph from '../glyph';
import FloorPicker from '../floorpicker';
import Decorator from '../decorator';
import TileTypes from './tiletypes';
import ItemFactory from '../itemfactory';
import ActorFactory from '../actorfactory';

const distFromExit = 40;
const SENTINELS = 5;

function placeItem(itemName, map) {
	ItemFactory.createItem(itemName, map, ...Decorator.pick());
}

function placeEnemy(enemyName, map) {
	map.enemies.push(ActorFactory.createActor(enemyName, ...Decorator.pick()));
}

export default function generateMap(w,h){
	let map = new TileMap(w, h);
	let generator = new ROT.Map.Digger(w-1, h-1, { dugPercentage: 0.8});
	//Create Floor and Sky tiles
	generator.create((x, y, wall)=>{
		let SKY = TileTypes.SKY;
		let FLOOR = TileTypes.FLOOR;
		map.set(new Tile(x+1, y+1, wall ? SKY: FLOOR));
	});
	//Create Items
	Decorator.setRooms(generator.getRooms());
	placeItem('WIND_RUNE', map);
	placeItem('EARTH_RUNE', map);
	placeItem('ICE_RUNE', map);



	FloorPicker.setMap(map);
	map.enemies = map.enemies.concat(ActorFactory.createActors('SENTINEL', SENTINELS));
	//Create exit
	let pickExit = Decorator.pick();
	map.exit = pickExit;
	map.set(new Tile(map.exit[0], map.exit[1], TileTypes.EXIT));
	//Create start location
	let pickStart = Decorator.pick();
	map.start = {x: pickStart[0], y: pickStart[1]};
	return map;
}
