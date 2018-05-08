/**
 * Created by GEK on 2018/3/15.
 */
let arr = [6, 2, 1];
let dp_s = {0:{0:6},1:{1:2},2:{2:1}};
let dp_min = {0:{},1:{},2:{}};
let sm = (i,j) => {
    if(dp_s[i][j]){
        return dp_s[i][j];
    }
    if(dp_min[i][j-1] <= arr[j]){
        dp_s[i][j] = sm(i,j-1) + dp_min[i][j-1] * arr[j];
        dp_min[i][j] = dp_s[i][j];
    }else{
        dp_s[i][j] = sm(i,j-1) * (arr[j]/dp_min[i][j-1])+arr[j]*arr[j];
        dp_min[i][j] = arr[j];
    }
};
sm(0,2);
console.log(dp_s);
