  function indexOfIgnoreCase(str, subStr) {
    // Convert both the main string and substring to lowercase
    const lowerStr = str.toLowerCase();
    const lowerSubStr = subStr.toLowerCase();

    // Use the indexOf method to find the position of the substring
    return lowerStr.indexOf(lowerSubStr);
}



// Please do not change the code below
const str = prompt("Enter s1:");
const subStr = prompt("Enter s2:");
alert(indexOfIgnoreCase(str, subStr));

