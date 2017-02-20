export function json2url(json) {
	const arr = []
	for (const i of Object.keys(json)) {
		arr.push(`${i}=${json[i]}`)
	}
	return arr.join('&')
}
