let video = {
    title: "Game of Thrones",
    actors : ["Igor", "Anton", "Irina"],
    play() {
        console.log(this)
    }
}

function test(){
    console.log(this)
}

video.f = test;

video.f();

