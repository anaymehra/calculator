let input = "";
$(".btn").click(function (e) {
        if ($(this).html() == '=') {
                input = eval(input);
                $(".row input").attr("value" ,"");
        }
        else if ($(this).html() == 'C') {
            input = "";
            $(".row input").attr("value" ,"");
        }
        else {
        var buttonText = $(this).text();
        input += buttonText + '';
        }
        $(".row input").attr("value" ,input);
        console.log(input); 
}) 