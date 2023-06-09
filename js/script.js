//Creating an array using[] aand a comma seperated list values
//index of an array starts with 0
const myColors = ["red", "green", "blue", "white", "black", "tomato"]

//access the element with an id and save in a variable
const messageList = document.getElementById("colorMessages")
messageList.children[0].innerHTML += myColors[3]

myColors[4] = "cyan"
messageList.children[1].innerHTML += myColors[4]

//push adds item to end of array
myColors.push("darksalmon")
messageList.children[2].innerHTML += myColors

myColors.pop()
messageList.children[3].innerHTML += myColors

myColors.shift()
messageList.children[4].innerHTML += myColors

myColors.unshift("hotpink")
messageList.children[5].innerHTML += myColors

myColors.splice(2, 0, "royalblue")
messageList.children[6].innerHTML += myColors

// sorting the array
myColors.sort()
messageList.children[7].innerHTML += myColors

// concatenating arrays using concat
const darkColors = ["darkseagreen", "darkgreen", "darkred"]

const allColors = myColors.concat(darkColors)
//messageList.children[8].innerHTML += allColors
//join method used to control how array is displayed as a string on page
messageList.children[8].innerHTML += allColors.join(" - ")

//searching in an array 
const searchMessage = document.getElementById("colorResponse")

/*function doYouHaveColor(colorName){
    let colorIndex = allColors.indexOf(colorName)
    if (colorIndex >= 0){
        searchMessage.innerHTML = "yes, we have " + colorName + " color"
    }else{
        searchMessage.innerHTML = "no, we do not have the color " + colorName
    }
}*/

function doYouHaveColor(colorName){
    if (allColors.includes(colorName)){
        searchMessage.innerHTML = "yes, we have the " + colorName + " color"
    }else{
        searchMessage.innerHTML = "no, we do not have the color " + colorName
    }
}


const scores = [43, 68, 35, 82]
const scoreMessageList = document.getElementById("scoreMessages").children
// create a new array passingScore out of th scores array by filtering the values bassed on the function that returns the values greater than 50
const passingScores = scores.filter(score => score > 50)
scoreMessageList[0].innerHTML += passingScores

const doubleScore = passingScores.map(score => score * 2)
scoreMessageList[1].innerHTML += doubleScore

const totalScore = doubleScore.reduce((accumulator, score) => accumulator + score)
scoreMessageList[2].innerHTML += totalScore


for (let i = 0; i < 3; i++){
    console.log("Ta")
    for (let j = 0; j < 2; j++){
        console.log("Ra")
    }
}


const coloredBoxSection = document.getElementById("coloredBoxes")
for (let color of allColors){
    coloredBoxSection.innerHTML += `<div class="box" style="background-color: ${color}"></div> `
}
