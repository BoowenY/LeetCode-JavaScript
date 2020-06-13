class Solution {
public:
    int climbStairs(int n) {
    double a = 1, b = 1;
    while(n--){
        b += a;
        a= b - a;
    }
    return a;
};