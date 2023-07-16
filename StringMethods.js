
let log = (strMethodName, beforeOperation, expectedOutput, actualOutput) => {
    console.log(strMethodName, ' - ', beforeOperation, ' - ', expectedOutput, ' - ', actualOutput, ' - ', `Expected = Actual? ${expectedOutput === actualOutput}`)
}

let str = "ABCD 1234"
let str1 ="    ABCDEFG         "

// String length
// let strlen = str.length
log("String Length : ", str, 9, str.length)

// String slice()
log("string slice : ", str, "1234", str.slice(5, 10))
log("string slice : negative counts from end of the string ", str, "12", str.slice(-4,-2))
// String substring()
log("substring similar to slice : ", str, "1234", str.slice(5, 10))

// String substr()
// substr() is similar to slice().The difference is that the second parameter specifies the length of the extracted part.
log("substr similar to slice : ", str, "CD 1", str.substr(2,4))

// String replace()
log("replace char in the given string : ", str, "aBCD 1234", str.replace('A', 'a'))
// String replaceAll()
log("replace all chars in the given string : ", str, "sdfghjkBCD 1234", str.replaceAll('A', 'sdfghjk'))

// String toUpperCase()
log("string toUpperCase : ", str, "ABCD 1234", str.toUpperCase())
// String toLowerCase()
log("string toLowerCase : ", str, "abcd 1234", str.toLowerCase())
// String concat()
log("combine two strings : ", str, "ABCD 1234123456", str.concat("123456"))


// trim remove white spaces
// String trim()
log("string trim:" ,str1 ,"ABCDEFG",str.trim())
// String trimStart()
log("string trimStart:" ,str1 ,"ABCDEFG         ",str1.trimStart())

// String trimEnd()
log("string trimEnd:" ,str1 ,"    ABCDEFG",str1.trimEnd())

// It pads the string with another string (multiple times) until it reaches a given length
// String padStart()
log("string padding at start with '0':",str,"000ABCD 1234",str.padStart(12,0))
// String padEnd()
log("string padding at end with '66666' :",str,"ABCD 1234666",str.padEnd(12,6))

// String charAt()
log("string charecter at given index value :", str, '2', str.charAt(6))
// String charCodeAt()
log("string charecter returns the unicode of the character at a specified index :", str, '67', str.charCodeAt(2))

// String split()
log("split the string :", str, ['ABCD 1234'], str.split())
log("split the string into array :", str, [
    'A', 'B', 'C',
    'D', ' ', '1',
    '2', '3', '4'
], str.split(''))