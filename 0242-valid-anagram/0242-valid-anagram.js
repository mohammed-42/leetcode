/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) { let map = new Map(); for (let lett of s) { if (map.has(lett)) { map.set(lett, map.get(lett) + 1); } else { map.set(lett, 1); } } for (let sett of t) { if (map.has(sett) && map.get(sett) > 0) { map.set(sett, map.get(sett) - 1); } else { return false; } } for (let [key, value] of map) { if (value > 0) { return false; } } return true; };