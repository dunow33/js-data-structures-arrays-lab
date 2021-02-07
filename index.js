const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name){
    return drivers.push(name);
}

function destructivelyPrependDriver(name){
    return drivers.unshift(name);
}

function destructivelyRemoveLastDriver(){
    return drivers.pop();
}

function destructivelyRemoveFirstDriver(){
    return drivers.shift();
}

function appendDriver(name){
    return drivers.slice().concat(name);
}

function prependDriver(name){
    var newDrivers = drivers.slice();
    newDrivers.unshift(name);
    return newDrivers;
}

function removeLastDriver(){
    var newDrivers = drivers.slice();
    newDrivers.pop();
    return newDrivers;
}

function removeFirstDriver(){
    var newDrivers = drivers.slice();
    newDrivers.shift();
    return newDrivers;
}