var randomPassword = Math.floor(Math.random()*3)+1;
var word = "";
if(randomPassword==1)
	word="Zgon w Intermarche";
else if(randomPassword==2)
	word="Opluty w sylwestra";
else if(randomPassword==3)
	word="Dziady z Bajorem";
else
	word="Błąd losowania";

word = word.toUpperCase();

var dlugosc = word.length;
var ile_porazek = 0;
var yes = new Audio("images/yes.wav");
var no = new Audio("images/no.wav");
var win = new Audio("images/tomwin.mp3");

var word1 = "";

for (i=0; i<dlugosc; i++)
{
	if (word.charAt(i)==" ") word1 = word1 + " ";
	else word1 = word1 + "-";
}

function wypisz_word() 
{
  document.getElementById("plansza").innerHTML = word1;
}

var litery = new Array(35);

litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ż";
litery[34] = "Ź"; 

function hangman()
{
	document.getElementById("szubienica").innerHTML='<img src="images/s0.jpg" alt="" />';
	var tresc="";
	
	for(i=0;i<=34;i++)
	{
		var element = "l" + i;
		tresc = tresc + '<div class ="litera" onclick="sprawdz('+i+')" id="'+element+'">'+litery[i]+'</div>';
		if((i+1)%7==0)tresc = tresc + '<div style="clear:both;"</div>'
	}
	
	document.getElementById("alfabet").innerHTML = tresc;
	
	
	wypisz_word();
}

String.prototype.ustawZnak = function(pozycja,znak)
{
	if(pozycja > this.length - 1)return this.toString();
	else return this.substr(0,pozycja)+ znak + this.substr(pozycja+1);
	
}

function sprawdz(nr)
{
	var flaga = false;
	
	for(i=0;i<dlugosc;i++)
	{
		if(word.charAt(i)==litery[nr])
		{
			word1 = word1.ustawZnak(i,litery[nr]);
			flaga = true;
			
		}
	}
	if (flaga==true)
	{
		yes.play();
		var element = "l" + nr;
		document.getElementById(element).style.background = "#003300";
		document.getElementById(element).style.color = "#00C000";
		document.getElementById(element).style.border = "3px solid #00C000";
		document.getElementById(element).style.cursor = "default";
		
		wypisz_word();
	}
	else
	{
		no.play();
		var element = "l" + nr;
		document.getElementById(element).style.background = "#330000";
		document.getElementById(element).style.color = "#C00000";
		document.getElementById(element).style.border = "3px solid #C00000";
		document.getElementById(element).style.cursor = "default";
		document.getElementById(element).setAttribute("onclick",";");
		
		ile_porazek++;
		var obraz = "images/s" + ile_porazek + ".jpg";
		document.getElementById("szubienica").innerHTML = '<img src="'+obraz+'" alt="" />';
	}
	
	if(word == word1) {
		win.play();
		document.getElementById("alfabet").innerHTML = "Essa byczku, wygrałeś. Hasło to " +word+ '<br> <br> <span class="reset" onclick="location.reload()">Wróć na początek</span>';
		document.getElementById("plansza").innerHTML = "";
	}
	
	if(ile_porazek>=9){
		document.getElementById("alfabet").innerHTML = "RIP mordo, porażka. Poprawne hasło to " +word+ '<br> <br> <span class="reset" onclick="location.reload()">Wróć na początek</span>';
	document.getElementById("plansza").innerHTML = "";
	}
}


