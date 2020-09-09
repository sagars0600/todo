(function(){
    var list = document.querySelector('#list'),
        form = document.querySelector('form'),
        item = document.querySelector('#item'),
        clear = document.querySelector('#clear'),
        date = document.querySelector('#dateControl');

        clear.addEventListener('click' , function(e){
            let ul = (document.querySelector("ul").innerHTML = "");
        });

        form.addEventListener('submit' , function(e){
            e.preventDefault();
            list.innerHTML += '<li>' + item.value + '-' + date.value + '</li>'
            store();
            
        })

        list.addEventListener('click' , function(e){
            var t = e.target;
            if(t.classList.contains('checked')){
                t.parentNode.removeChild(t);
            }else{
                t.classList.add('checked');
            }
            store();
        })

        function store(){
            window.localStorage.myitems = list.innerHTML;
        }

        function getValues(){
            var storedValues = window.localStorage.myitems;
            if(!storedValues){
                list.innerHTML = '';
            } else {
                list.innerHTML = storedValues;
            }
        }
        getValues();
})();      


        $(document).ready(function() {
            var ddToday = new Date();

            var month = ddToday.getMonth() + 1;
            var day = ddToday.getDate();
            var year = ddToday.getFullYear();

            if(month < 10)
                month = '0' + month.toString();
            if(day < 10 )
                day = '0' + day.toString();

            var maxDate = year + '-' + month + '-' + day;

            $('#dateControl').attr('min' , maxDate);
        })