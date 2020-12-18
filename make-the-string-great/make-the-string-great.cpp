class Solution {
public:
    string makeGood(string s) {
        stack<char> stack;
        for(char t:s){
            if(stack.empty()){
                stack.push(t);
            }
            else if (abs(stack.top() - t) == 32){
                stack.pop();
            }
            else 
                stack.push(t);
        }
        string ans ="";
        while(!stack.empty()){
            ans += stack.top();
            stack.pop();
        }
        reverse (ans.begin(), ans.end());
        return ans;
    }
};
