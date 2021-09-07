$.ajax({
    method: 'GET',
    url: 'https://restcountries.eu/rest/v2/name/' + input,
    success: response => {
        for(const key in response){
            if(!response.hasOwnProperty[key]){
                continue;
            }

            let keyInner = '';

            switch (key) {
                case 'name':
                    keyInner = 'Называние';
                    break;
                case 'topLevelDomain':
                    keyInner = 'Домен верхнего уровня';
                    break;
                case 'alpha2Code':
                    keyInner = 'Двузначный код';
                    break;
                case 'alpha3Code':
                    keyInner = 'Трехзначный код';
                    break;
                case 'callingCodes':
                    keyInner = 'Код страны телефонного номера';
                    break;
                case 'capital':
                    keyInner = 'Столица';
                    break;
                case 'altSpellings':
                    keyInner = 'Старое называние';
                    break;
                case 'region':
                    keyInner = 'Регион';
                    break;
                case 'subregion':
                    keyInner = 'Субрегион';
                    break;
                case 'population':
                    keyInner = 'Население';
                    break;
                case 'latlng':
                    keyInner = 'Геопозиция';
                    break;
                case 'demonym':
                    keyInner = 'Демон';
                    break;
                case 'area':
                    keyInner = 'Площадь';
                    break;
                case 'timezones':
                    keyInner = 'Часовой пояс';
                    break;
                case 'borders':
                    keyInner = 'Границы';
                    break;
                case 'nativeName':
                    keyInner = 'Родное имя';
                    break;
                case 'numericCode':
                    keyInner = 'Числовой код';
                    break;
                case 'currencies':
                    keyInner = 'Валюта';
                    break;
                case 'language':
                    keyInner = 'Язык';
                    break;
                case 'translations':
                    keyInner = 'Переводы';
                    break;
                case 'flag':
                    keyInner = 'Флаг';
                    break;
                case 'regionalBlocs':
                    keyInner = 'Региональные блоки';
                    break;
            }
            const div = $('<div>').text(keyInner + ' : ' + response[key]);
            $('.main-block').append(div);

        }
    },
    error: error => {
        require(['js/vex.combined'], function (vex) {
            vex.defaultOptions.className = 'vex-theme-os';
            vex.dialog.alert('Error!!! Not Found!!!');
        });
    },
});