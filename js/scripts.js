// <!-- Jquery for two button Play, pause button -->
// <!-- <script>
//     $(document).ready(function(){
//         $("#mycarousel").carousel( { interval: 1000 } );
//         $("#carousel-pause").click(function(){
//             $("#mycarousel").carousel('pause');
//         });
//         $("#carousel-play").click(function(){
//             $("#mycarousel").carousel('cycle');
//         });
//     });
// </script> -->

// <!-- for one button play, pause -->
               $(document).ready(function(){
        $("#mycarousel").carousel( { interval: 1000 } );
        $("#carousel-pause").click(function(){
            $("#mycarousel").carousel('pause');
        });
        $("#carouselButton").click(function(){
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');                    
        }
    });
    });
// <!-- tooltipsscript -->
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});
