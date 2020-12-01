/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str)
{
    let INT_MAX=2147483648;
    let INT_MIN=-2147483648;
    var input=parseInt(str);
    if(isNaN(input))
    {
        return 0;
    }
    else
        if(input < (INT_MIN) ){
            return (INT_MIN);
        }
    else
        if(input >= (INT_MAX) ){   
            return INT_MAX-1;
        }
    else{
        return input;
    }
};
