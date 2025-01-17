/*const heroImages = Array.from({ length: 123 }, (_, i) => {
    const index = String(i + 1).padStart(4, '0'); // 将数字格式化为4位数，前面补0
    return { name: `Hero ${i + 1}`, image: `./result/${index}.png` };
});*/


const heroImages = [
    { name: 'Yinglong', image: './result/0001.png', rarity: 4},
    { name: 'Sif', image: './result/0002.png', rarity: 4},
    { name: 'Freya', image: './result/0003.png', rarity: 4},
    { name: 'Nuwa', image: './result/0004.png', rarity: 4},
    { name: 'Hella', image: './result/0005.png', rarity: 4},
    { name: 'Tiantian Numing', image: './result/0006.png', rarity: 4},
    { name: 'Tianzhao', image: './result/0007.png', rarity: 4},
    { name: 'Loki', image: './result/0008.png', rarity: 4},
    { name: 'Gawain', image: './result/0009.png', rarity: 4},
    { name: 'Lancelot', image: './result/0010.png', rarity: 4},
    { name: 'Frigga', image: './result/0011.png', rarity: 4},
    { name: 'Heimdall', image: './result/0012.png', rarity: 4},
    { name: 'Merlin', image: './result/0013.png', rarity: 4},
    { name: 'Sol', image: './result/0014.png', rarity: 4},
    { name: 'Vivian', image: './result/0015.png', rarity: 4},
    { name: 'Mordred', image: './result/0016.png', rarity: 4},
    { name: 'Guinevere', image: './result/0017.png', rarity: 4},
    { name: 'Morgana', image: './result/0018.png', rarity: 4},
    { name: 'Bright Knight', image: './result/0019.png', rarity: 3},
    { name: 'Valkyrie', image: './result/0020.png', rarity: 3},
    { name: 'Hou Yi', image: './result/0021.png', rarity: 4},
    { name: 'Jinyiwei', image: './result/0022.png', rarity: 2},
    { name: 'Ghost Hunter', image: './result/0023.png', rarity: 3},
    { name: 'Double Blade Walker', image: './result/0024.png', rarity: 2},
    { name: 'Charm', image: './result/0025.png', rarity: 1},
    { name: 'Conjurer', image: './result/0026.png', rarity: 2},
    { name: 'Alchemist', image: './result/0027.png', rarity: 2},
    { name: 'Elder of Hades Hall', image: './result/0028.png', rarity: 3},
    { name: 'travelling poet', image: './result/0029.png', rarity: 2},
    { name: 'Tamamo Mae', image: './result/0030.png', rarity: 4},
    { name: 'Nightmare Warrior', image: './result/0031.png', rarity: 3},
    { name: 'Phoenix Warrior', image: './result/0032.png', rarity: 3},
    { name: 'King of Yama', image: './result/0033.png', rarity: 4},
    { name: 'Titan Fighter', image: './result/0034.png', rarity: 3},
    { name: 'Inferno Knight', image: './result/0035.png', rarity: 3},
    { name: 'Druid', image: './result/0036.png', rarity: 2},
    { name: 'Secret Blade Dancer', image: './result/0037.png', rarity: 2},
    { name: 'Magic Cavalry', image: './result/0038.png', rarity: 2},
    { name: 'Demeter', image: './result/0039.png', rarity: 4},
    { name: 'orator', image: './result/0040.png', rarity: 2},
    { name: 'wizard', image: './result/0041.png', rarity: 2},
    { name: 'Kagemusha', image: './result/0042.png', rarity: 2},
    { name: 'harpist', image: './result/0043.png', rarity: 3},
    { name: 'Desert Walker', image: './result/0044.png', rarity: 3},
    { name: 'Chang e', image: './result/0045.png', rarity: 4},
    { name: 'Ares', image: './result/0046.png', rarity: 4},
    { name: 'Artemis', image: './result/0047.png', rarity: 4},
    { name: 'Soul Chaser', image: './result/0048.png', rarity: 2},
    { name: 'Sword Master', image: './result/0049.png', rarity: 2},
    { name: 'witch', image: './result/0050.png', rarity: 1},
    { name: 'hunter', image: './result/0051.png', rarity: 1},
    { name: 'Sorcerer', image: './result/0052.png', rarity: 2},
    { name: 'Paladin', image: './result/0053.png', rarity: 2},
    { name: 'boxing champion', image: './result/0054.png', rarity: 1},
    { name: 'patrol', image: './result/0055.png', rarity: 1},
    { name: 'Dragon Knight', image: './result/0056.png', rarity: 2},
    { name: 'Secret Hunter', image: './result/0057.png', rarity: 3},
    { name: 'shogun', image: './result/0058.png', rarity: 3},
    { name: 'Hera', image: './result/0059.png', rarity: 4},
    { name: 'Apollo', image: './result/0060.png', rarity: 4},
    { name: 'Nemesis', image: './result/0061.png', rarity: 4},
    { name: 'Demon Swordsman', image: './result/0062.png', rarity: 3},
    { name: 'Gladiator', image: './result/0063.png', rarity: 2},
    { name: 'voodoo priest', image: './result/0064.png', rarity: 2},
    { name: 'Life hunter', image: './result/0065.png', rarity: 2},
    { name: 'Dancer', image: './result/0066.png', rarity: 1},
    { name: 'Wu Ji', image: './result/0067.png', rarity: 1},
    { name: 'Frostwolf Cavalry', image: './result/0068.png', rarity: 2},
    { name: 'magician', image: './result/0069.png', rarity: 2},
    { name: 'Exorcist', image: './result/0070.png', rarity: 2},
    { name: 'Immortal Swordsman', image: './result/0071.png', rarity: 3},
    { name: 'Poseidon', image: './result/0072.png', rarity: 4},
    { name: 'athena', image: './result/0073.png', rarity: 4},
    { name: 'Venus', image: './result/0074.png', rarity: 4},
    { name: 'Destroyer of the Abyss', image: './result/0075.png', rarity: 3},
    { name: 'Magic monk', image: './result/0076.png', rarity: 3},
    { name: 'assassin', image: './result/0077.png', rarity: 1},
    { name: 'mage', image: './result/0078.png', rarity: 1},
    { name: 'Doctor', image: './result/0079.png', rarity: 1},
    { name: 'Monk', image: './result/0080.png', rarity: 1},
    { name: 'royal guard', image: './result/0081.png', rarity: 3},
    { name: 'Temple Keeper', image: './result/0082.png', rarity: 3},
    { name: 'Hades', image: './result/0083.png', rarity: 4},
    { name: 'Soul Hunting Witch', image: './result/0084.png', rarity: 3},
    { name: 'Spirit Pattern Airbender', image: './result/0085.png', rarity: 3},
    { name: 'Heart Eater', image: './result/0086.png', rarity: 2},
    { name: 'messenger', image: './result/0087.png', rarity: 1},
    { name: 'mercenary', image: './result/0088.png', rarity: 1},
    { name: 'sage', image: './result/0089.png', rarity: 1},
    { name: 'artisan', image: './result/0090.png', rarity: 1},
    { name: 'prophet', image: './result/0091.png', rarity: 1},
    { name: 'Priest', image: './result/0092.png', rarity: 1},
    { name: 'Elementalist', image: './result/0093.png', rarity: 2},
    { name: 'Duke of the Night', image: './result/0094.png', rarity: 3},
    { name: 'Psychic magician', image: './result/0095.png', rarity: 3},
    { name: 'Illusion Golem', image: './result/0096.png', rarity: 3},
    { name: 'Ruler of the Sanctuary', image: './result/0097.png', rarity: 3},
    { name: 'wanderer', image: './result/0098.png', rarity: 2},
    { name: 'two-handed swordsman', image: './result/0099.png', rarity: 2},
    { name: 'swordsman', image: './result/0100.png', rarity: 1},
    { name: 'magic', image: './result/0101.png', rarity: 1},
    { name: 'shaman', image: './result/0102.png', rarity: 1},
    { name: 'Ranger', image: './result/0103.png', rarity: 1},
    { name: 'sword fighter', image: './result/0104.png', rarity: 2},
    { name: 'Raiders', image: './result/0105.png', rarity: 2},
    { name: 'eva sage', image: './result/0106.png', rarity: 3},
    { name: 'Shadow Cat Master', image: './result/0107.png', rarity: 3},
    { name: 'Mysterious Healer', image: './result/0108.png', rarity: 3},
    { name: 'Divine Master', image: './result/0109.png', rarity: 3},
    { name: 'Judge of the Soul', image: './result/0110.png', rarity: 3},
    { name: 'Heroine', image: './result/0111.png', rarity: 1},
    { name: 'Gullvig', image: './result/0112.png', rarity: 4},
    { name: 'Arrow Spirit', image: './result/0113.png', rarity: 1},
    { name: 'undead', image: './result/0114.png', rarity: 1},
    { name: 'Branded Hero', image: './result/0115.png', rarity: 3},
    { name: 'Hazy Moon Ninja', image: './result/0116.png', rarity: 3},
    { name: 'Giant armored soldier', image: './result/0117.png', rarity: 3},
    { name: 'Eden', image: './result/0118.png', rarity: 4},
    { name: 'Skati', image: './result/0119.png', rarity: 4},
    { name: 'pacificville', image: './result/0120.png', rarity: 4},
    { name: 'Iser', image: './result/0121.png', rarity: 4},
    { name: 'Fuxi', image: './result/0122.png', rarity: 4},
    { name: 'Izanami', image: './result/0123.png', rarity: 4}
];

