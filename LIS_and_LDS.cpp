#include <bits/stdc++.h>
using namespace std;

int main() {
    int t;
    cin>>t;
    while(t--){
        int n;
        cin>>n;
        vector<long long> v(n);
        long long sumF=0;
        for(int i=0;i<n;i++){
            cin>>v[i];
            sumF+=v[i];
        }
        long long low=1,high=sumF,ans=1;
        while(low<=high){
            long long mid=(low+high)/2;
            long long total=0;
            for(int i=0;i<n;i++){
                total+=min(v[i],mid);
            }
            if(total>=mid*mid){
                ans=mid;
                low=mid+1;
            }else{
                high=mid-1;
            }
        }
        cout<<ans<<"\n";
    }
    return 0;
}