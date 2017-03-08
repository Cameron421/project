<html>
<body>
<div id="content"></div>
<button id="button">click me</button>

<script type="text/javascript">
function generateQuote() {
	var quote = []

	quote[0] = "This is the first quote"
	quote[1] = "This is the second quote"
	quote[2] = "This is the third quote"
	quote[3] = "This is the forth quote"
	quote[4] = "This is the fifth quote"
	quote[5] = "This is the sixth quote"
	quote[6] = "This is the seventh quote"
	quote[7] = "This is the eighth quote"
	quote[8] = "This is the ninth quote"
	quote[9] = "This is the tenth quote"
	quote[10] = "This is the eleventh quote"

	var number = Math.random();
	var quotecount = quote.length;
	var randomquote = Math.floor(quotecount * number);

	var output = document.getElementById("content");
	output.innerHTML = quote[randomquote];
}

var button = document.getElementById("button");
	
button.addEventListener("click", generateQuote);

var name = []

name[0] = "Matt"
name[1] = "John"
name[2] = "Jamie"
name[3] = "Joe"
name[4] = "Nathan"

var name[0] = []
	name[0][0] = "This is the first quote"
	name[0][1] = "This is the second quote"
	name[0][2] = "This is the third quote"
	name[0][3] = "This is the forth quote"
	name[0][4] = "This is the fifth quote"
	name[0][5] = "This is the sixth quote"
	name[0][6] = "This is the seventh quote"
	name[0][7] = "This is the eighth quote"
	name[0][8] = "This is the ninth quote"
	name[0][9] = "This is the tenth quote"
	name[0][10] = "This is the eleventh quote"


</script>
</body>
</html>
