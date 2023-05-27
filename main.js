screen_width = 0;
screen_height = 0;
glass = "";
speak_data = "";
to_number = "";

function preload() {
    loadImage("png-transparent-clear-drinking-glass-beer-glasses-cup-table-glass-water-glass-glass-wine-glass-tumbler.png", glass);
 
}

function recognition.onresult() {
    to_number = Number(content);
    if(Number.isInteger(to_number)) {
        status = "Started drawing glass";
        draw_glass = "set";
    }
}

function setup() {
    screen_width = window.innerWidth;
    screen_height = window.innerHeight;
}

function createCanvas(screen_height, screen_width) {
canvas.position(0, 150)
}

function draw() {
    if(draw_glass == "set") {
        for(to_number) {
            i = 1;
            if(i == 1) {
                i++;
            }
        }
        x = Math.floor(Math.random()*700);
        y =   x = Math.floor(Math.random()*400);
        image(glass, x, y, screen_height, screen_width)
    }
}


    document.getElementById("status").innerHTML = to_number + "Glasses drawn";
    speak_data = to_number + "Glasses drawn";
    speak()



