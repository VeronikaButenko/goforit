var arrayOfNames=[];

	for(var i = 0; i < 5; i++) {
		var k = i + 1;
		
	arrayOfNames.push(prompt("Введите 5 имен для доступа, имя №" + k));
       if(arrayOfNames.length ==0 || typeof(arrayOfNames)=='undefined' || arrayOfNames=='null' ) {
		alert(  'неправильное имя');
		break;
	}
	
}

var logName = prompt ('введите  свое имя' );

if (logName.length == 0 || typeof(logName)=='undefined' || logName=='null' ) {
		alert( 'неправильное имя');
	}

for ( i = 0; i < 5 ; i++) {
		if (arrayOfNames[i] == logName ) {
		var logarrayOfNames = 1;
		break;		
		}else{
		var logarrayOfNames = 0;
		}
	}

if ( logarrayOfNames )  {
	alert( logName +', вы успешно вошли');
	}else{
	alert(logName +' нет в списке');
}


