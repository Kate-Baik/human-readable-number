module.exports = function toReadable (number) 
{
  const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const doubles = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  const numberString = number.toString();
  

if (number === 0)  return 'zero'
  
if (number < 10) 
return ones[numberString[0]];

if (number === 10)  return 'ten'
if (number === 11)  return 'eleven'
if (number === 12)  return 'twelve'
if (number === 13)  return 'thirteen'
if (number === 14)  return 'fourteen'
if (number === 15)  return 'fifteen'
if (number === 16)  return 'sixteen'
if (number === 17)  return 'seventeen'
if (number === 18)  return 'eighteen'
if (number === 19)  return 'nineteen'
if (number === 20)  return 'twenty'
if (number === 30)  return 'thirty'
if (number === 40)  return 'forty'
if (number === 50)  return 'fifty'
if (number === 60)  return 'sixty'
if (number === 70)  return 'seventy'
if (number === 80)  return 'eighty'
if (number === 90)  return 'ninety'


if (number < 100)
    return tens[numberString[0]] + ' ' + ones[numberString[1]];

if (number === 100)  return 'one hundred'
if (number < 110)    return ones[numberString[0]] + ' ' + 'hundred' + ' ' + ones[numberString[2]];
if (number < 120)    return ones[numberString[0]] + ' ' + 'hundred' + ' ' + doubles[numberString[2]];
if (number === 120)  return 'one hundred twenty'
if (number === 130)  return 'one hundred thirty'
if (number === 140)  return 'one hundred forty'
if (number === 150)  return 'one hundred fifty'
if (number === 160)  return 'one hundred sixty'
if (number === 170)  return 'one hundred seventy'
if (number === 180)  return 'one hundred eighty'
if (number === 190)  return 'one hundred ninety'
if (number < 200)    return ones[numberString[0]] + ' ' + 'hundred' + ' ' + tens[numberString[1]] + ' ' + ones[numberString[2]];

if (number === 200)  return 'two hundred'
if (number < 210)    return ones[numberString[0]] + ' ' + 'hundred' + ' ' + ones[numberString[2]];
if (number < 220)    return ones[numberString[0]] + ' ' + 'hundred' + ' ' + doubles[numberString[2]];
if (number === 220)  return 'two hundred twenty'
if (number === 230)  return 'two hundred thirty'
if (number === 240)  return 'two hundred forty'
if (number === 250)  return 'two hundred fifty'
if (number === 260)  return 'two hundred sixty'
if (number === 270)  return 'two hundred seventy'
if (number === 280)  return 'two hundred eighty'
if (number === 290)  return 'two hundred ninety'
if (number < 300)    return ones[numberString[0]] + ' ' + 'hundred' + ' ' + tens[numberString[1]] + ' ' + ones[numberString[2]];



if (number === 300)  return 'three hundred'
if (number < 310)    return ones[numberString[0]] + ' ' + 'hundred' + ' ' + ones[numberString[2]];
if (number < 320)    return ones[numberString[0]] + ' ' + 'hundred' + ' ' + doubles[numberString[2]];
if (number === 320)  return 'three hundred twenty'
if (number === 330)  return 'three hundred thirty'
if (number === 340)  return 'three hundred forty'
if (number === 350)  return 'three hundred fifty'
if (number === 360)  return 'three hundred sixty'
if (number === 370)  return 'three hundred seventy'
if (number === 380)  return 'three hundred eighty'
if (number === 390)  return 'three hundred ninety'
if (number < 400)    return ones[numberString[0]] + ' ' + 'hundred' + ' ' + tens[numberString[1]] + ' ' + ones[numberString[2]];


if (number === 400)  return 'four hundred'
if (number < 410)    return ones[numberString[0]] + ' ' + 'hundred' + ' ' + ones[numberString[2]];
if (number < 420)    return ones[numberString[0]] + ' ' + 'hundred' + ' ' + doubles[numberString[2]];
if (number === 420)  return 'four hundred twenty'
if (number === 430)  return 'four hundred thirty'
if (number === 440)  return 'four hundred forty'
if (number === 450)  return 'four hundred fifty'
if (number === 460)  return 'four hundred sixty'
if (number === 470)  return 'four hundred seventy'
if (number === 480)  return 'four hundred eighty'
if (number === 490)  return 'four hundred ninety'
if (number < 500)    return ones[numberString[0]] + ' ' + 'hundred' + ' ' + tens[numberString[1]] + ' ' + ones[numberString[2]];


if (number === 500)  return 'five hundred'
if (number < 510)    return ones[numberString[0]] + ' ' + 'hundred' + ' ' + ones[numberString[2]];
if (number < 520)    return ones[numberString[0]] + ' ' + 'hundred' + ' ' + doubles[numberString[2]];
if (number === 520)  return 'five hundred twenty'
if (number === 530)  return 'five hundred thirty'
if (number === 540)  return 'five hundred forty'
if (number === 550)  return 'five hundred fifty'
if (number === 560)  return 'five hundred sixty'
if (number === 570)  return 'five hundred seventy'
if (number === 580)  return 'five hundred eighty'
if (number === 590)  return 'five hundred ninety'
if (number < 600)    return ones[numberString[0]] + ' ' + 'hundred' + ' ' + tens[numberString[1]] + ' ' + ones[numberString[2]];


if (number === 600)  return 'six hundred'
if (number < 610)    return ones[numberString[0]] + ' ' + 'hundred' + ' ' + ones[numberString[2]];
if (number < 620)    return ones[numberString[0]] + ' ' + 'hundred' + ' ' + doubles[numberString[2]];
if (number === 620)  return 'six hundred twenty'
if (number === 630)  return 'six hundred thirty'
if (number === 640)  return 'six hundred forty'
if (number === 650)  return 'six hundred fifty'
if (number === 660)  return 'six hundred sixty'
if (number === 670)  return 'six hundred seventy'
if (number === 680)  return 'six hundred eighty'
if (number === 690)  return 'six hundred ninety'
if (number < 700)    return ones[numberString[0]] + ' ' + 'hundred' + ' ' + tens[numberString[1]] + ' ' + ones[numberString[2]];

if (number === 700)  return 'seven hundred'
if (number < 710)    return ones[numberString[0]] + ' ' + 'hundred' + ' ' + ones[numberString[2]];
if (number < 720)    return ones[numberString[0]] + ' ' + 'hundred' + ' ' + doubles[numberString[2]];
if (number === 720)  return 'seven hundred twenty'
if (number === 730)  return 'seven hundred thirty'
if (number === 740)  return 'seven hundred forty'
if (number === 750)  return 'seven hundred fifty'
if (number === 760)  return 'seven hundred sixty'
if (number === 770)  return 'seven hundred seventy'
if (number === 780)  return 'seven hundred eighty'
if (number === 790)  return 'seven hundred ninety'
if (number < 800)    return ones[numberString[0]] + ' ' + 'hundred' + ' ' + tens[numberString[1]] + ' ' + ones[numberString[2]];


if (number === 800)  return 'eight hundred'
if (number < 810)    return ones[numberString[0]] + ' ' + 'hundred' + ' ' + ones[numberString[2]];
if (number < 820)    return ones[numberString[0]] + ' ' + 'hundred' + ' ' + doubles[numberString[2]];
if (number === 820)  return 'eight hundred twenty'
if (number === 830)  return 'eight hundred thirty'
if (number === 840)  return 'eight hundred forty'
if (number === 850)  return 'eight hundred fifty'
if (number === 860)  return 'eight hundred sixty'
if (number === 870)  return 'eight hundred seventy'
if (number === 880)  return 'eight hundred eighty'
if (number === 890)  return 'eight hundred ninety'
if (number < 900)    return ones[numberString[0]] + ' ' + 'hundred' + ' ' + tens[numberString[1]] + ' ' + ones[numberString[2]];

if (number === 900)  return 'nine hundred'
if (number < 910)    return ones[numberString[0]] + ' ' + 'hundred' + ' ' + ones[numberString[2]];
if (number < 920)    return ones[numberString[0]] + ' ' + 'hundred' + ' ' + doubles[numberString[2]];
if (number === 920)  return 'nine hundred twenty'
if (number === 930)  return 'nine hundred thirty'
if (number === 940)  return 'nine hundred forty'
if (number === 950)  return 'nine hundred fifty'
if (number === 960)  return 'nine hundred sixty'
if (number === 970)  return 'nine hundred seventy'
if (number === 980)  return 'nine hundred eighty'
if (number === 990)  return 'nine hundred ninety'
if (number < 1000)   return ones[numberString[0]] + ' ' + 'hundred' + ' ' + tens[numberString[1]] + ' ' + ones[numberString[2]];

if (number === 1000)  return 'one thousand'
  }
