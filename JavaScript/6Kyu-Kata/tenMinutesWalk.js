// 6 kyu Take a Ten Minutes Walk
// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.
// Note: you will always receive a valid array (string in COBOL) containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).
//my solution:
function isValidWalk(walk){
    let startPosition = [0,0]
    walk.map(e=>{
        if(e=='n'){startPosition[0] += 1
    }else if(e=='s'){startPosition[0] -= 1
    }else if(e=='e'){startPosition[1] += 1
    }else{startPosition[1] -= 1
    }
})
    return walk.length==10 && startPosition.toString() == "0,0"
}
//Test Cases:
// console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']))
// console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']))
// console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']))