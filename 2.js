const nonConsecutiveDigits = (n) => {
    let j = ++n;
    let tab = Array.from(j.toString())
    console.log(tab);
    if (tab.some((el, id, arr) => arr.indexOf(el) !== id)) {
    	nonConsecutiveDigits(j);
    } else {
    	return j;
    }
}

  