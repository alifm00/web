
function tri()
{
	var n = prompt("Tentukan Tinggi Segitiga");
	var out = '<div class="build title-page"><h2 class="text-center">Hasil</h2>	<div class="line-title bg-primary"></div></div><p class="text-center">';
	for(var i=0;i<n;i++)
	{
		for(var j=0;j<=i;j++)
		out+= "*";
		out+= "<br>";
	}
	out+="</p>";
	document.getElementById("game").innerHTML = out;
}