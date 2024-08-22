/*==================== js ================  */







/* ===================jq ===================*/
$(document).ready(function(){
	// $('button').click(function(){
	// 	alert("hellow");
	// });


	// ex 1
	$('#btn1').on('click',function(){
		alert("hello");
	});

	// ex 2
	$('#btn2').on('dblclick',function(){
		alert("wellcome");
	});

	// ex 3
	$('#btn3').on('mouseover',function(){
		alert("Dont Click")
	});

	// ex 4
	$('#btn4h').on('click',function(){
		$('#lorem1').hide();
	});
	$('#btn4').on('click',function(){
		$('#lorem1').show();
	});
	$('#btnt').on('click',function(){
		$('#lorem1').toggle();
	});


// ex 5

	$('p').on('click',function(){
		$(this).hide();
	});


// ex 6

	$('#btnfo').on('click',function(){
		$('#lorem2').fadeOut();
	});
	$('#btnfi').on('click',function(){
		$('#lorem2').fadeIn();
	});
	$('#btnft').on('click',function(){
		$('#lorem2').fadeToggle();
	});

// ex 7
  $("#flip").on('click',function(){
    $("#panel").slideDown();
  });
   $("#btnup").on('click',function(){
    $("#panel").slideUp();
  });
    $("#btnst").on('click',function(){
    $("#panel").slideToggle();
  });

// ex 8

    $("#btn8").on('click',function(){
    $("#btn8a").slideDown(5000);
	 });
	  $("#stop").on('click',function(){
	    $("#btn8a").stop();
	 });

// ex 9

	$("#ani").on('click',function(){
    $(".ani").animate({left: '250px'});
  	});

 // ex 10

	$("#ani1").on('click',function(){
    $(".ani1").animate({
      left: '250px',
      opacity: '0.5',
      height: '200px',
      width: '200px'
    });
  });


// ex 11


	$("#ani2").on('clickl',function(){
    $(".ani2").animate({
      height: 'toggle'
    });
  });



// ex 12

$("#ani3").click(function(){
    var div = $(".ani3");
    div.animate({height: '300px', opacity: '0.4'}, "slow");
    div.animate({width: '300px', opacity: '0.8'}, "slow");
    div.animate({height: '100px', opacity: '0.4'}, "slow");
    div.animate({width: '100px', opacity: '0.8'}, "slow");
  });
// ex 13

$("#btn14").on('click',function(){
    $("p").hide("slow", function(){
      alert("The paragraph is now hidden");
    });
  });
// ex 14

$("btn14").on('click',function(){
    $("p").hide(1000);
    alert("The paragraph is now hidden");
  });

// ex 15
$("#btn15").on('click',function(){
    $("#p1").css("color", "red").slideUp(2000).slideDown(2000);
  });

// ex 16

$("#btn16").on('click',function(){
    alert("Text: " + $("#test1").text());
  });
  $("#btn16a").on('click',function(){
    alert("HTML: " + $("#test1").html());
  });


// ex 18


  $("#btn18").on('click',function(){
    $("#p18").append(" <b>Appended text</b>.");
    $("#p18a").append(" <b>Appended text</b>.");
  });

  $("#btn18a").on('click',function(){
    $("ul").append("<li>Appended item</li>");
  });

  // ex 19

   $("#btn19").on('click',function(){
    $("#p19").prepend(" <b>Appended text</b>.");
    $("#p19a").prepend(" <b>Appended text</b>.");
  });

  $("#btn19a").on('click',function(){
    $("#ul19").prepend("<li>Appended item</li>");
  });

  // ex 20
   $("#btn20").on('click',function(){
    $("#img20").before("<b>Before</b>");
  });

   $("#btn20a").on('click',function(){
    $("#img20").after("<i>After</i>");
  });

   // ex 21

    $("#btn21").on('click',function(){
    $("#div21").empty();
  });

    // ex 22

    $("#btn22").on('click',function(){
    $("#div22").remove();
  });

    // ex 23

    $("#btn23").on('click',function(){
    $("#h23, #h23a, #p23").addClass("blue");
    $("#div23").addClass("important");
  			});


// ex 24

     $("#btn24").on('click',function(){
     $("#h24a").addClass("important blue");
  			});

// ex 25

      $("#btn25").on('click',function(){
     $("#h25a").toggleClass("important blue");
  			});


// ex 26
 $("#btn26").on('click',function(){
    $(".p26").css({"background-color": "yellow", "font-size": "200%"});
  });

 // ex 27
  $("#ani27").on('click',function(){
    $(".ani27").animate({left: '250px'});
  	
  $(".ani27").animate({right: '250px'});
  	});







});

