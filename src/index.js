module.exports = function longestConsecutiveLength(array) {
	if(array < 2) return array.length;
	let tempCount = 0;
	let maxConsecutive = 0;

	array.sort((a, b) => a - b);

	for(let i = 0; i < array.length; i++) {
		if(array[i] == array[i - 1]) continue;
		if(array[i] - array[i - 1] == 1) {
			tempCount++;
		}
		else {
			tempCount++;
			if(tempCount > maxConsecutive && tempCount != 1) {
				maxConsecutive = tempCount;
			}
			tempCount = 0;
		}
	}
	if(maxConsecutive == 0) maxConsecutive++;

	return maxConsecutive;
}
