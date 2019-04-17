var stressedImages=[
    "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/rich_media_quiz/topic/rmq_test_your_stress_iq/405rmq_getty_rf_man_squeezing_stress_ball_close_up.jpg?resize=692px:*",
    "https://www.mindwell-leeds.org.uk/media/W1siZiIsIjIwMTgvMTAvMDYvMTkvMjEvMjkvN2Q4M2M5YzEtMTVkYi00ZGNiLWEyYjItYWZjMWJiMTMyMGU1L01XX0ljb25zLVN0cmVzcy5wbmciXV0",
    "https://www.gannett-cdn.com/-mm-/eeff2cbe5d954601e3f2e8b88eb5f4e2c733406f/c=0-28-300-197/local/-/media/2018/08/15/USATODAY/usatsports/usatcollege-CollegeUSAT-567808-stress.jpg?width=580&height=326&fit=crop"
    ];

var annoyedImages=["https://www.emojirequest.com/images/AnnoyedEmoji.jpg","https://i.kym-cdn.com/entries/icons/facebook/000/008/561/moderately_annoyed.avi.jpeg.mp3.whogivesafuck.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSseB0t5EHkWYxz3Qb0GDD5N1tI-KmVr8nEdA3jYXWsvYVkcwjA"];

var enviousImages=["https://static01.nyt.com/images/2009/02/16/health/17angi_600.jpg","https://ngozikaa.files.wordpress.com/2014/10/image4.jpg","https://cdn1.iconfinder.com/data/icons/the-perfect-man-boyfriend-and-husband/295/perfect-man-004-512.png"];

var peacefulImages=["https://elak.info/wp-content/uploads/2018/08/peaceful-reflection-lake-beautiful-sky-mountains-pictures-for-desktop-unique-top-the-lake-series-1-recap-of-peaceful-reflection-lake-beautiful-sky-mountains-pictures-for-desktop.jpg","https://www.incimages.com/uploaded_files/image/970x450/getty_539043047_2000133320009280369_285351.jpg","https://cdn.thealternativedaily.com/wp-content/uploads/2015/04/tree-flowers.jpg"];

function displayImages(images){
    images.forEach(function(image){
        $('.change').append('<img src ='+ image + '>');
    });
}

function changeBackgroundColor(backgroundColor){
    $('body').css("background-image", "none");
    $('body').css('background-color', backgroundColor);
}

function changeTextColor(color){
    $('body').css('color', color);
}

function stressedMood(){
    displayImages(stressedImages);
    changeBackgroundColor("red");
}
function annoyedMood(){
    displayImages(annoyedImages);
    changeBackgroundColor();
}
function enviousMood(){
    displayImages(enviousImages);
    changeBackgroundColor();
}
function peacefulMood(){
    displayImages(peacefulImages);
    changeBackgroundColor("green");
}

$("button").click(function(){
    var input=$('input').val();
    if(input==='Stressed'){
        stressedMood();
    } else if(input==='Annoyed'){
        annoyedMood();
    } else if(input==='Envious'){
        enviousMood();
    } else if(input==='Peaceful'){
        peacefulMood();
    } else{
        $(".warning").text("PLEASE CHOOSE ONE OF THE MOODS AND TRY AGAIN");
    }
});

