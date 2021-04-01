const display = document.querySelector('input');
const equal = document.querySelector('.equal');
const reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
	display.value = '';
});
const getNum = () => {
	let ans = document.activeElement['value'];
	display.value += ans;
	ans = String(ans);
	let value = display.value;
	equal.addEventListener('click', () => {
		try {
			const neww = eval(value);
			display.value = 0;
			display.value = Number(neww);
		} catch {
			console.log('Well Well Done');
		}
	});
};
