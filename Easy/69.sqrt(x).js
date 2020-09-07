/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) 
{
	if (x === 1 || x === 0) 
    {
		return x;
	} 
    else 
        if (x < 0) 
        {
            return 0;
        }

	var min = 1, max = x+1;
	while (true) 
    {
		let mid = min + Number.parseInt((max-min)/2);

		if (mid*mid > x) 
        {
			max = mid-1;
		} 
        else 
        {
			if ((mid+1)*(mid+1) > x) 
            {
				return mid;
			} 
            else 
            {
				min = mid+1;
			}
		}
    }
};
