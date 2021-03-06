import Glyph from './glyph';

export default {
  EXIT_KEY: {
    name: 'Golden Idol',
    type: 'exit_key',
    glyph: new Glyph('i', 'gold'),
    event: 'revealExit',
  },
  WIND_RUNE: {
    name: 'Wind Rune',
    type: 'rune',
    glyph: new Glyph('w', 'skyblue'),
    event: {
      type: 'attack',
      name: 'windAttack'
    }
  },
  EARTH_RUNE: {
    name: 'Earth Rune',
    type: 'rune',
    glyph: new Glyph('e', 'brown'),
    event: {
      name: 'skyStep'
    }
  },
  ICE_RUNE: {
    name: 'Ice Rune',
    type: 'rune',
    glyph: new Glyph('i', 'white'),
    event: {
      type: 'attack',
      name: 'freezeAttack'
    }
  },
  FIRE_RUNE: {
    name: 'Fire Rune',
    type: 'rune',
    glyph: new Glyph('f', 'orange'),
    event: {
      type: 'attack',
      name: 'fireAttack'
    }
  }
}
