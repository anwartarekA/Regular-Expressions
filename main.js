// Regular Expressions -----> it can access details which is difficult to rech it with ifs condetions like :-
//  1- Email 
//  2- id
//  3- Url
//  4- phone


// syntax ====> /pattern/modifiers(flages) 
// another syntax =====> RegExp('pattern' , 'modifiers')

// To match the pattern use ---> match method --> match()
// it will return array of the pattern 
// if it is not found return null

// i -- incasesensetive
// g -- global 
// m -- multiline

let str = "Hello anwar Anwar";
let strrx = /a/ig;
let another_strrx = new RegExp(/a/,'ig')
console.log(str.match(strrx));
console.log(str.match(another_strrx));

// Ranges 
/*

1- (x | y) == or
2- [0-9]
3- [^0-9] 
4- [a-z]
5- [A-Z]
6- [^a-z]
7- [^A-Z]
8- [abc]
9- [^abc]
10- [a-zA-Z]
11- [^a-zA-Z]

*/

let tld = 'com net org info code Io';
let tldRx = /(org|com|info)/i;
console.log(tld.match(tldRx)); // com 

let nums = '123456789';
let numsRe = /[2-5]/g;
let notnumsRe = /[^2-5]/g;
console.log(nums.match(numsRe));
console.log(nums.match(notnumsRe)); // [1 6 7 8 9]

let special = '1!2@3#4$5';
let specialRe = /[^1-5]/g;
console.log(special.match(specialRe)); 

let practice = 'an1 an1an an2 an8an';
let practiceRe = /an[5-8]an/ig;
console.log(practice.match(practiceRe));

let alpha = 'ABCDEFGHIJKLMNOPQRnmopjkk12345$%@#&*^';
let alphaRe = /[a-z]/ig;
let alphaRe2 = /[A-Z]/g;
let notalphaRe = /[^a-z]/ig;
let notalphaRe2 =/[^A-Z]/g;
let Rexpresion = /[a-zA-Z]/g;
let notRexpresion = /[^a-zA-Z]/g;
let special_charachers = /[^a-z^A-Z]/g;
let abc =/[acb]/ig;
let notabc = /[^acb]/ig
console.log(alpha.match(alphaRe));
console.log(alpha.match(alphaRe2));
console.log(alpha.match(notalphaRe));
console.log(alpha.match(notalphaRe2));
console.log(alpha.match(Rexpresion));
console.log(alpha.match(notRexpresion));
console.log(alpha.match(special_charachers));
console.log(alpha.match(abc));
console.log(alpha.match(notabc));


// Charachers Classes 
/*

1- . --> match all Charachers not newline or line terminator
2- \w --> match word character ecxept special Charachers
3- \W --> not match word character ecxept special Charachers
4- \d --> match the digits 
5- \D --> not match digits
6- \s --> match white-space
7- \S --> not match white-space 
8- \b --> match at begining or ending
9- \B --> not match at begining or ending
10- test() --> test the pattern and return true or false

*/

let emails = 'O@@@g...com O@g.net A@Y.com O-g.com O@s.org 1@1.com';
let text = "HELLO, LOOK AT YOU!";
let dotRe = /./g;
let word = /\w/g;
let word1 = /\W/g;
let digits = /\d/g;
let not_digits = /\D/g;
let white_space = /\s/g;
let not_white_space = /\S/g;
let beging = /\bo/ig;
let ending = /com\b/ig;
let notbeging = /\Blo/ig;
let notending = /o\B/ig;

console.log(emails.match(dotRe));
console.log(emails.match(word));
console.log(emails.match(word1));
console.log(emails.match(digits));
console.log(emails.match(not_digits));
console.log(emails.match(white_space));
console.log(emails.match(not_white_space));
console.log(emails.match(beging));
console.log(emails.match(ending));
console.log(text.match(notbeging));
console.log(text.match(notending));

let coms = /\w@\w.com/ig;
let comsandnets = /\w@\w.(com|net)/ig;

console.log(emails.match(coms));
console.log(emails.match(comsandnets));

let names = 'Anwar Kareem Belal Tarek Ahmed Mohamed Sayed Afnan Sara ';
let names_ar = /\Bar/ig;
console.log(names.match(names_ar));
console.log(names_ar.test(names));
console.log(/[0-5]/ig.test(names));

// Quantifiers 

/*

n+ --> one or more of n 
n* --> zero or more of n
n? --> zero or one
n{x} --> number of x
n{x,y} --> range from x to y
n{x,} --> at least x
$ --> is it ends with => return true or false
^ --> is it starts with => return true or false
?= --> match the follow of it
!? --> not match the follow of it

*/

let mails = 'O@nn.sa osama@gmail.com anwar@gmail.net osama@gmail.ru';
// let mailsRe =/\w+@\w+.(sa|com|net|ru)/ig;
let mailsRe = /\w+@\w+.\w+/ig;
console.log(mails.match(mailsRe));

let nums2 = '0110 10 150 05120 0560 350 00';

let nums2Re = /\b0\d*0\b/g;
console.log(nums2.match(nums2Re));

let Urls = 'https://google.com http://www.website.net web.com';
let UrlsRe = /(https?:\/\/)?(www.)?\w+.\w+/ig;
console.log(Urls.match(UrlsRe));


let serials = 'S100s S3000s SS0000s S950000s s90000s';
let threenumsRe = /\bs\d{3}s\b/ig;
let fourOrfive = /\bs\d{4,5}s\b/ig;
let leastthreeRe =/\bs\d{3,}s\b/ig;
console.log(serials.match(threenumsRe));
console.log(serials.match(fourOrfive));
console.log(serials.match(leastthreeRe));


let MyStrings = 'We Love ab Programming Languages';
let names5 = '10samaz 2AhmedZ 3Mohamed 4MoustafaZ 5GamalZ 3Mohammed';
console.log(/ges$/ig.test(MyStrings));
console.log(/^we/ig.test(MyStrings));
console.log(/^\d/ig.test(MyStrings));
console.log(names5.match(/\d\w{5}(?=z)/ig));
console.log(names5.match(/\d\w{8}(?!z)/ig));


let pharase = 'we love @ and use @';
console.log(pharase.replace('@','javascript'));
console.log(pharase.replaceAll('@','javascript'));
let patt = /@/g;
console.log(pharase.replaceAll(patt,'javascript'));
console.log(pharase.replaceAll(/@/g,'javascript'));
let emotions = 'hello!'
console.log(emotions.match(/\u0021/g))  // !


let searching = 'we love javascript';
console.log(searching.search('o'));
console.log(searching.search(/o/ig));
let char = /a/ig;

console.log(char.exec(searching));   // a
console.log(/a/ig.exec(searching));  // a
console.log(/ab/ig.exec(searching)); // null 









