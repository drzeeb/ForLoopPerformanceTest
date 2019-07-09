import now = require('performance-now');
let arr = "gsdjhjhgwqzgzuqgduzagsdhhgjhwqgduqwgdzugashjdgjashgsdjhjhgwqzgzuqgduzagsdhhgjhwqgduqwgdzugashjdgjashgsdjhjhgwqzgzuqgduzagsdhhgjhwqgduqwgdzugashjdgjashgsdjhjhgwqzgzuqgduzagsdhhgjhwqgduqw".split('');
let startTime, endTime, a, rank=[];

console.log("\nLooping through an array with lenght " + arr.length + "\n");

function start() {
    startTime = now();
}

function end() {
    endTime = now();
}

function log(type, start, end) {
    let timeDiff = end - start;
    
    rank.push([timeDiff, type]);
    console.log(type + ": " +  timeDiff + "ms");
}

function ranking() {
    rank.sort(function(a,b) {
        return a[0]-b[0]
    });
    console.log("\nRANKING\n");
    for(let i = 0, el; el = rank[i]; i++) {
        console.log(i + ". " + el[1] + " measured time: " + el[0]);
    }
}

// Dummy-function
function c(b){a=b}

// standard for-loop
start();
for(let i = 0; i<arr.length; i++) {
    a=arr[i];
}
end();
log("standard for-loop", startTime, endTime);

// standard reverse for-loop
start();
for(let i=arr.length;i-->0;)a=arr[i];
end();
log("standard reversed for-loop", startTime, endTime);

// The swabian way as my colleagues named it
start();
for(let i=0,el;el=arr[i];i++){a=el}
end();
log("swabian way", startTime, endTime);

// map
start();
arr.map(b=>a=b);
end();
log("map", startTime, endTime);

// map2
start();
arr.map(c);
end();
log("map2", startTime, endTime);

// forEach
start();
arr.forEach(b=>a=b);
end();
log("forEach", startTime, endTime);

// forEach2
start();
arr.forEach(c);
end();
log("forEach2", startTime, endTime);

ranking();