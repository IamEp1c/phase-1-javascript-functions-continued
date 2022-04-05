function saturdayFun(string = 'roller-skate'){
    return `This Saturday, I want to ${string}!`
}

const mondayWork = (string = 'go to the office') => {
    return `This Monday, I will ${string}.`
}

function wrapAdjective(string = '*'){
    return function result(string2 = '||'){
        return `You are ${string}${string2}${string}!`
    }

}

// wrapAdjective(arguments passed here)