#include <stdio.h>
#include <stdlib.h>

int n;
int arr[20];

int isGood(int v[], int size) {
    for(int i=0; i<size-1; i++){
        for(int j=i+1; j<size; j++){
            if((v[i]^v[j]) == abs(v[i]-v[j])) {
                return 0;
            }
        }
    }
    return 1;
}

int generateSubsequences(int index, int subseq[], int subseqSize) {
    if(index == n) {
        if(subseqSize > 0 && isGood(subseq, subseqSize))
            return subseqSize;
        return 0;
    }

    subseq[subseqSize] = arr[index];
    int include = generateSubsequences(index + 1, subseq, subseqSize + 1);
    int exclude = generateSubsequences(index + 1, subseq, subseqSize);

    return include > exclude ? include : exclude;
}

int main() {
    int T;
    scanf("%d", &T);
    while(T--) {
        scanf("%d", &n);
        for(int i=0; i<n; i++)
            scanf("%d", &arr[i]);

        int subseq[20];
        int maxSize = generateSubsequences(0, subseq, 0);
        printf("%d\n", maxSize);
    }
    return 0;
}