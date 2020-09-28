/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let L=0, R=x;
    while(L <= R){
        let mid= parseInt(L+(R-L)/2);
        if(mid * mid===x){
            return mid;
        }
        else if(mid * mid < x){
            L=mid+1;
            ans=mid;
        }
        else {
            R=mid-1;
        }
    }
    return ans;
};
