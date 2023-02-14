//your code here
function fun(even) {
	even.preventDefault();
var inp=document.querySelector('input').value;
var arr=inp.split(",");
	arr.sort(function(a,b){return a-b});
	let cost=0;
	while (arr.length>1) {
	let curr=Number(arr[0])+Number(arr[1]);
	arr.splice(0,2);
	arr.push(curr);
		cost+=curr;
		arr.sort(function(a,b){return a-b});
	}
	var ans=document.getElementById('result').textContent=cost;
}