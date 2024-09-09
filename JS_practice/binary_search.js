function binarySearch(arr,val,lo,hi){
    while(lo<=hi){
        let mid=Math.floor(lo+hi)/2;
        if(arr[mid]==val){
            return mid;
        }
        else if(val<arr[mid]) hi=mid-1;
        else lo=mid+1;
    }
    return -1;
}

var n,arr=[];
n=parseInt(prompt("Enter the number of element:"));

for(let i=0;i<n;i++){
    arr[i]=parseInt(prompt("Enter element "+(i+1)+":"));
}

var val=parseInt(prompt("Enter value to find:"));

let result=binarySearch(arr,val,0,n-1);

console.log(result);
