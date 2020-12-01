class Solution {
public:
    string convertToTitle(int n) {
        string res = "";
        while (n > 0)
        {
            int rem = n % 26; 
            n = n / 26;     
            if (rem == 0) 
            {
                rem = 26; 
                n--;  
            }
            if (rem != 0)
            {
                 res = res + char(rem+64); 
            }
        }
        reverse(res.begin(), res.end());
        return res;
    }
 
};
