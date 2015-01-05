'use strict';

(function(exports)
{
	function set(mask, pos){
		return mask|= 1 << pos
	}
	exports.set= set

	function unset(mask, pos){
		return mask &~ (1 << pos)
	}
	exports.unset= unset

	function get(mask, pos){
		return (mask & (1 << pos))? 1: 0
	}
	exports.get= get

	function toggle(mask, pos){
		return mask^= 1 << pos
	}
	exports.toggle= toggle

	function setMany(mask, arr)
	{
		var i= 0, len= arr.length
		for(; len > i; mask|= 1 << arr[i], ++i);
		return mask
	}
	exports.setMany= setMany

	function unsetMany(mask, arr)
	{
		var i= 0, len= arr.length
		for(; len > i; mask= mask&~ (1 << arr[i]), ++i);
		return mask
	}
	exports.unsetMany= unsetMany

	function toArray(mask, size)
	{
		var arr= new Array(size), i= 0
		for(; mask; arr[i]= 0===(mask & 1)? 0: 1, mask>>>= 1, ++i);
		return arr
	}
	exports.toArray= toArray

	function fromArray(arr)
	{
		var mask= 0, i= 0, len= arr.length
		for(; len>i; mask|= arr[i] << i, ++i);
		return mask;
	}
	exports.fromArray= fromArray

})(exports? exports: window.Bits)