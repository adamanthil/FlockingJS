dp.sh.Brushes.Processing = function()
{
	var keywords = 'abstract assert boolean break byte case catch char class continue default do double else enum extends const false final finally float for goto if implements import instanceof int interface long native new null package private protected public return short static strictfp super switch synchronized this throw throws transient try void volatile while true';
  var functionsBold =	'setup draw'
  var functions =	'size strokeWeight stroke background pushMatrix popMatrix translate rotate radians rect quad bezierCurve curveVertex vertex endShape noFill color noStroke nf fill get bezierVertex ellipse dist mouseMoved sin smooth random colorMode point line noLoop loop redraw beginDraw endDraw image createGraphics triangle quad arc cos bezier PImage PFont loadImage scale println print ellipseMode atan2 atan updatePixels noise textFont textAlign text tint abs constrain createImage saturation brightness rectMode mouseDragged mouseReleased millis map hour minute second link length beginShape';
  var reservedwords =	'mouseX mouseY height width frameCount TWO_PI PI HALF_PI QUATER_PI CENTER LEFT RIGHT UP DOWN PGraphics P3D RGB HSB TRIANGLE_STRIP frameRate keyPressed key pixels CENTER_RADIUS mousePressed CORNER pmouseX pmouseY CLOSE TRIANGLES';

	this.regexList = [
		{ regex: dp.sh.RegexLib.SingleLineCComments,							css: 'comment' },		// one line comments
		{ regex: dp.sh.RegexLib.MultiLineCComments,								css: 'comment' },		// multiline comments
		{ regex: dp.sh.RegexLib.DoubleQuotedString,								css: 'string' },		// strings
		{ regex: dp.sh.RegexLib.SingleQuotedString,								css: 'string' },		// strings
		//{ regex: new RegExp('\\b([\\d]+(\\.[\\d]+)?|0x[a-f0-9]+)\\b', 'gi'),	css: 'number' },		// numbers
		{ regex: new RegExp('(?!\\@interface\\b)\\@[\\$\\w]+\\b', 'g'),			css: 'annotation' },	// annotation @anno
		{ regex: new RegExp('\\@interface\\b', 'g'),							css: 'keyword' },		// @interface keyword
		{ regex: new RegExp(this.GetKeywords(keywords), 'gm'),					css: 'keyword' },		  // processing keyword
		{ regex: new RegExp(this.GetKeywords(reservedwords), 'gm'),			css: 'reservedword' },// processing reserved words		
		{ regex: new RegExp(this.GetKeywords(functions), 'gm'),					css: 'function' },		  // processing reserved functions
		{ regex: new RegExp(this.GetKeywords(functionsBold), 'gm'),			css: 'functionBold' }		  // processing reserved functions
		];

	this.CssClass = 'dp-j';
	this.Style =	'.dp-j .annotation { color: #646464; }' +
					'.dp-j .number { color: #C00000; }';
}

dp.sh.Brushes.Processing.prototype	= new dp.sh.Highlighter();
dp.sh.Brushes.Processing.Aliases	= ['processing'];