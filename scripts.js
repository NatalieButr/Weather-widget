var url = 'https://api.openweathermap.org/data/2.5/weather?q=Minsk&appid=a94d0a5ac08570add4b47b8da933f247';
var body = document.querySelector('body');

fetch(url)
  .then(function(response){
    return response.json();
  })
  .then(function(res){
    console.log(res);
    var temp =  res.main.temp;
    var tempinC = KelvintoC(temp);
    var speed = res.wind.speed;
    console.log(res.wind.speed);
    var direction = res.wind.deg;
    var dir = windDirection(direction);
    var city = res.name;
    var country = res.sys.country;
    var weather = res.weather[0].main;
    var icon = res.weather[0].icon;
    var time = new Date(res.dt*1000);
    var h = (time.getHours()<10?'0':'') + time.getHours();
  	var m = (time.getMinutes()<10?'0':'') + time.getMinutes();
    var hm = h + ':' + m;
    //var all = time.getDate() + ' ' + (time.getMonth() + 1) + ' ' + time.getFullYear();
    renderHtml(city,country,hm, icon, weather, tempinC, dir, speed);
});

function windDirection(direction){
	 if (direction >=  11.25 && direction <  33.75) return 'NNE';
     if (direction >=  33.75 && direction <  56.25) return 'NE';
     if (direction >=  56.25 && direction <  78.75) return 'ENE';
     if (direction >=  78.75 && direction < 101.25) return 'E';
     if (direction >= 101.25 && direction < 123.75) return 'ESE';
     if (direction >= 123.75 && direction < 146.25) return 'SE';
     if (direction >= 146.25 && direction < 168.75) return 'SSE';
     if (direction >= 168.75 && direction < 191.25) return 'S';
     if (direction >= 191.25 && direction < 213.75) return 'SSW';
     if (direction >= 213.75 && direction < 236.25) return 'SW';
     if (direction >= 236.25 && direction < 258.75) return 'WSW';
     if (direction >= 258.75 && direction < 281.25) return 'W';
     if (direction >= 281.25 && direction < 303.75) return 'WNW';
     if (direction >= 303.75 && direction < 326.25) return 'NW';
     if (direction >= 326.25 && direction < 348.75) return 'NNW';
     else return 'N';
};

div = document.createElement('div');
div.classList.add('head');
body.appendChild(div);

function renderHtml(city,country,hm, icon, weather, tempinC, dir, speed) {
	var div2 = document.createElement('div');
	div2.classList.add('citytime');
	var p = document.createElement('p');
	p.textContent = city + ', ' + country;
	var p2 =document.createElement('p');
	p2.textContent = hm;
	div2.appendChild(p);
	div2.appendChild(p2);
	div.appendChild(div2);
	var div3 = document.createElement('div');
	div3.classList.add('centreimg');
	var image = document.createElement('IMG');
	var url = 'http://openweathermap.org/img/w/' + icon + '.png';
	image.src = url;
	div3.appendChild(image);
	div.appendChild(div3); 
	var p3 = document.createElement('p');
	p3.textContent = weather;
	div3.appendChild(p3);
	var p4 = document.createElement('p');
	p4. textContent = tempinC + '℃';
	div3.appendChild(p4);
	var div4 = document.createElement('div');
	div4.classList.add('speeddir');
	var p4 = document.createElement('p');
	p4.textContent = dir;
	var p5 = document.createElement('p');
	p5.textContent = speed + 'm/s';
	div.appendChild(div4);
	div4.appendChild(p4);
	div4.appendChild(p5);
};

function KelvintoC(temp) {
    	return temp - 273.15
    };