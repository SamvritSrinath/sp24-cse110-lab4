//pass in the function as a lambda, and set the delay to be 1000 MiliiSeconds(second parameter).
setInterval(() => {
	let d = new Date();
	let time = d.toLocaleTimeString();
	console.log(time);
}, 1000);
