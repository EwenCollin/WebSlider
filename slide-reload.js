
function $sl_GET(param) {
	var vars = {};
	window.location.href.replace( location.hash, '' ).replace( 
		/[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
		function( m, key, value ) { // callback
			vars[key] = value !== undefined ? value : '';
		}
	);

	if ( param ) {
		return vars[param] ? vars[param] : null;	
	}
	return vars;
}

var sl_currentSlide = "idle";

function sl_loadXMLDoc(request) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("slide-content").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", request, true);
  xhttp.send();
}

const sl_interval = setInterval(function () {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
		if(sl_currentSlide !== this.responseText) {
			sl_loadXMLDoc("slide.php?p=" + $sl_GET('p') + "&s=" + this.responseText);
			sl_currentSlide = this.responseText;
		}
    }
  };
  xhttp.open("GET", "linker.php", true);
  xhttp.send();
}, 200);

