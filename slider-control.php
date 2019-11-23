<?php

file_put_contents('link.txt', '');
$monfichier = fopen('link.txt', 'r+');
ftruncate($monfichier, 0);
fseek($monfichier,0);
				
$slide = $_GET['s'];

fputs($monfichier, $slide);

fclose($monfichier);


include $_GET["p"] . '/' . 'control.html';

?>
<script>
function loadXMLDoc(request) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
	  reload();
  };
  xhttp.open("GET", "slider-control.php?s=" + request, true);
  xhttp.send();
}
function reload() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "linker.php", true);
  xhttp.send();
}
</script>