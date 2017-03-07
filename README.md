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
name[1] = "
name[2] = "
name[3] = "
name[4] = "
name[5] = "
name[6] = "
name[7] = "
name[8] = "
name[9] = "
name[10] = "

</script>
</body>
</html>
