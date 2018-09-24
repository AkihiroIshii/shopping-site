$(window).load(function() {
    $("#product_area .sub-img img").click(function() {
        var img_src = $(this).attr("src");
        $("#product_area .main-img img").attr("src", img_src);
    });
});