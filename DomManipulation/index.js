

// main(); 
// function main () {
//     //  //createElement
//     //  const h2Node =  document.createElement('h2'); // creating the h2 element
//     //  h2Node.innerText = 'Creted using createElement method' // putting text b/w the element
//     //  h2Node.textContent = 'Using createElement method' 
//     //  document.body.appendChild(h2Node); // adding divNode which we have created as child into the body element
//     //  //every node have append and appendChild function
//     createBox()
// }

// // calling

// function createBox () {
//     const node =  createSmallBox(); 
//     const divNode  =  document.createElement('div');
//     divNode.style.height = '300px'
//     divNode.style.width = '400px'
//     divNode.style.padding = '40px';
//     divNode.style.margin = 'auto'
//     divNode.style.backgroundColor = 'Black';
//     divNode.style.color = 'white'
//     divNode.style.border= '3px solid red'
//     divNode.style.textAlign = 'center'
//     divNode.style.fontSize = '24px'
//     divNode.appendChild(node)
//     document.body.appendChild(divNode)
// }

// function createSmallBox () {
//     const divNode  =  document.createElement('div');
//     divNode.style.height = '50px'
//     divNode.style.width = '200px'
//     divNode.style.padding = '20px';
//     divNode.style.margin = 'auto'
//     divNode.style.backgroundColor = 'green';
//     divNode.style.color = 'white'
//     divNode.style.border= '3px solid yellow'
//     divNode.style.textAlign = 'center'
//     divNode.style.fontSize = '24px'
//     return divNode;
// }

// function changeColor  () {
//     const header = document.getElementById('heading');
//     header.style.background = 'red';
//     header.style.color= 'Black'
//     header.style.borderRadius = '20px'
// }


// addIngNode()

// function addIngNode () {
//         const heading =  document.createElement('h1')
//         heading.style.background = 'blue';
//         heading.style.padding ='40px';
//         heading.textContent = 'Hey I am heading'

//         const heading2 =  document.createElement('h1')
//         heading2.style.background = 'blue';
//         heading2.style.padding ='40px';
//         heading2.textContent = 'Hey I am heading2'
//         document.body.appendChild(heading);
//         document.body.append(heading2)

//         // this will take string and node with as argument
//         document.body.append('Hey I will work')

//         // appendChild always take the  node as argument
//         document.body.appendChild('Hey I will work')
        
// }


// innetHtml 

// appDevelopment =>  

// if you want to render the html string as html then you can put html string inside innerHtml property
function pushHtmlString (s) {
        // create one div and put html string on tahta
        const divNode  = document.createElement('div');
        divNode.innerHTML =  s; // this will render the html string and text as
        document.body.appendChild(divNode)
}

 const data  =  "<p style=\"text-align:justify;\"><span style=\"font-family:Arial;font-size:12px;\"><strong>The Bank Maha Pack includes Live Batches, Test Series, Video Lectures &amp; eBooks for all the upcoming Bank &amp; Insurance Exams, including SBI PO &amp; Clerk, IBPS RRB PO &amp; Clerk, IBPS PO &amp; Clerk, and many more.</strong></span><br><span style=\"font-family:Arial;font-size:12px;\"><strong>New Live Batches for All the Major Banking Exams Launched Every Week!!</strong></span></p><p style=\"text-align:justify;\">&nbsp;</p><p style=\"text-align:justify;\"><span style=\"font-family:Arial;font-size:12px;\"><strong>ABOUT BANK MAHA PACK</strong></span><br><span style=\"font-family:Arial;font-size:12px;\">If you are preparing for BANKING &amp; INSURANCE EXAMS then this is the most recommended course for you. Reduce your Preparation cost by 1/10th as you get access to 100% digital content for all exams. All Latest Study Material for these exams will be automatically added to BANK MAHA PACK every week, till the validity.</span></p><p style=\"text-align:justify;\">&nbsp;</p><p style=\"text-align:justify;\"><span style=\"font-family:Arial;font-size:12px;\"><strong>BANK महापैक के बारे में</strong></span><br><span style=\"font-family:Arial;font-size:12px;\">यदि आप BANKING &amp; INSURANCE परीक्षा की तैयारी कर रहे हैं तो यह आपके लिए सबसे अनुशंसित पाठ्यक्रम है। सभी परीक्षाओं के लिए 100% डिजिटल सामग्री तक पहुंच प्राप्त करते हुए अपनी तैयारी की लागत को 1/10वीं तक कम करें। इन परीक्षाओं के लिए सभी नवीनतम अध्ययन सामग्री वैधता तक BANK महापैक में स्वचालित रूप से जोड़ दी जाएगी।</span></p><p style=\"text-align:justify;\">&nbsp;</p><p style=\"text-align:justify;\"><span style=\"font-family:Arial;font-size:12px;\"><strong>WHAT IS INCLUDED</strong></span><br><span style=\"font-family:Arial;font-size:12px;\">You get access to Live Classes &amp; Resources on each subject for Banking, Insurance, Current Affairs, Mock Interviews, Interview Guidance &amp; Preparation &amp; much more!!</span></p><p style=\"text-align:justify;\">&nbsp;</p><p style=\"text-align:justify;\"><span style=\"font-family:Arial;font-size:12px;\"><strong>SALIENT FEATURES OF BANK MAHA PACK</strong></span></p><figure class=\"table\" style=\"width: 100%; margin: 0px;\"><table style=\"border-bottom:none;border-left:none;border-right:none;border-top:none;\"><tbody><tr><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\"><strong>SUBSCRIPTION FEATURES</strong></span></td><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\"><strong>BANK MAHA PACK</strong></span></td></tr><tr><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\">All Bank &amp; Insurance Live Classes</span></td><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\">Yes</span></td></tr><tr><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\">All Bank &amp; Insurance Test Series</span></td><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\">Yes</span></td></tr><tr><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\">Live Doubt Room</span></td><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\">Yes</span></td></tr><tr><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\">All Bank &amp; Insurance Revision Batches</span></td><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\">Yes</span></td></tr><tr><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\">All Bank &amp; Insurance Recorded Videos</span></td><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\">Yes</span></td></tr><tr><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\">All Bank &amp; Insurance eBooks</span></td><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\">Yes</span></td></tr><tr><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\">Interview Preparation</span></td><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\">Yes</span></td></tr><tr><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\">Live Webinars with Industry Experts</span></td><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\">Yes</span></td></tr></tbody></table></figure><p style=\"text-align:justify;\">&nbsp;</p><figure class=\"table\" style=\"width: 100%; margin: 0px;\"><table style=\"border-bottom:none;border-left:none;border-right:none;border-top:none;\"><tbody><tr><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\" colspan=\"5\" rowspan=\"1\"><span style=\"font-family:Arial;font-size:12px;\"><strong>MAJOR BANKING &amp; INSURANCE EXAMS COVERED IN BANK MAHA PACK</strong></span></td></tr><tr><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\"><strong>S. NO.</strong></span></td><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\"><strong>EXAM NAME</strong></span></td><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\"><strong>PRELIMS</strong></span></td><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\"><strong>MAINS</strong></span></td><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\"><strong>Interview</strong></span></td></tr><tr><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\">1</span></td><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\">IBPS RRB Clerk</span></td><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\">Yes</span></td><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\">Yes</span></td><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\">NA</span></td></tr><tr><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\">2</span></td><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\">IBPS RRB PO</span></td><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\">Yes</span></td><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\">Yes</span></td><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\">Yes</span></td></tr><tr><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\">3</span></td><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\">SBI Clerk</span></td><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\">Yes</span></td><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\">Yes</span></td><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\">NA</span></td></tr><tr><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\">4</span></td><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\">SBI PO</span></td><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\">Yes</span></td><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\">Yes</span></td><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\">Yes</span></td></tr><tr><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\">5</span></td><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\">IBPS Clerk</span></td><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\">Yes</span></td><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\">Yes</span></td><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\">NA</span></td></tr><tr><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\">6</span></td><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\">IBPS PO</span></td><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\">Yes</span></td><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\">Yes</span></td><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\">Yes</span></td></tr><tr><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\">7</span></td><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\">RBI Assistant</span></td><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\">Yes</span></td><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\">Yes</span></td><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\">NA</span></td></tr><tr><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\">9</span></td><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\">All Regional Co-Operative Bank Exams</span></td><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\">Yes</span></td><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\">Yes</span></td><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\">Yes</span></td></tr><tr><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\">10</span></td><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\">NIACL</span></td><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\">Yes</span></td><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\">Yes</span></td><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\">Yes</span></td></tr><tr><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\">11</span></td><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\">NHB</span></td><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\">Yes</span></td><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\">Yes</span></td><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\">Yes</span></td></tr><tr><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\">13</span></td><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\">LIC</span></td><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\">Yes</span></td><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\">Yes</span></td><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\"><span style=\"font-family:Arial;font-size:12px;\">Yes</span></td></tr><tr><td style=\"padding:2px 3px;text-align:center;vertical-align:bottom;\" colspan=\"5\" rowspan=\"1\"><span style=\"font-family:Arial;font-size:12px;\"><strong>*Note - Group Discussion, Descriptive English/Essays &amp; Mock Interviews will be included in the pack, where applicable.</strong></span></td></tr></tbody></table></figure><p style=\"text-align:justify;\">&nbsp;</p><p style=\"text-align:justify;\"><span style=\"font-family:Arial;font-size:12px;\"><strong>BANK MAHA PACK HIGHLIGHTS</strong></span></p><ul><li style=\"text-align:justify;\"><span style=\"font-family:Arial;font-size:12px;\">Structured Course Content (संरचित पाठ्यक्रम सामग्री)</span></li><li style=\"text-align:justify;\"><span style=\"font-family:Arial;font-size:12px;\">Recorded videos of all Live Classes (Live Classes रिकॉर्ड की गई कक्षाएं उपलब्ध हैं)</span></li><li style=\"text-align:justify;\"><span style=\"font-family:Arial;font-size:12px;\">Previous Years’ Papers for Practice of All upcoming exams (सभी आगामी परीक्षाओं के अभ्यास के लिए पिछले वर्षों के पेपर)</span></li><li style=\"text-align:justify;\"><span style=\"font-family:Arial;font-size:12px;\">Full Length Mocks based on the latest pattern with detailed solutions (विस्तृत समाधान के साथ नवीनतम पैटर्न के आधार पर फुल लेंथ मोक्स)</span></li><li style=\"text-align:justify;\"><span style=\"font-family:Arial;font-size:12px;\">Topic Level knowledge Tests (विषय स्तरीय ज्ञान परीक्षण)</span></li><li style=\"text-align:justify;\"><span style=\"font-family:Arial;font-size:12px;\">Strategy Sessions, Time Management &amp; Preparation Tips from the Experts (रणनीति सत्र, समय प्रबंधन और विशेषज्ञों से तैयारी के सुझाव)</span></li></ul><p style=\"text-align:justify;\">&nbsp;</p><img src=\"https://s3.ap-south-1.amazonaws.com/cp-storefront-prod-images/1080x480copy5141712580136.jpg\" class=\"image\" style=\"max-width: 100%; height: auto;\"><p><br>&nbsp;</p><p><span style=\"font-size:12px;\"><strong>Our Testimonials</strong></span><br><span style=\"font-size:12px;\">Meet our successful students! Don't just take our word for it! Hear their stories in their words and learn how they achieved their goals with the help of our courses.</span><br><span style=\"font-size:12px;\">From aspirants to achievers - More than 10,000 of our successful students share their journey of cracking competitive exams with Adda247. Watch their inspiring stories to learn their proven strategies.</span><br><span style=\"font-size:12px;\">Learn from their experiences and start your journey towards success today!</span><br><span style=\"font-size:12px;\">Their strategies, tips, and tricks can help you in acing your target competitive exams with Adda247.</span><br><span style=\"font-size:12px;\">The above stories bring to you the challenges our selected candidates faced during their preparation, and how Adda247 helped them in overcoming&nbsp;their fears, </span><a href=\"https://youtu.be/dLz8PBsP7Kg?list=PL4t_secZTPn6ifmvfZ09WyOeN11y5cKuZ\"><span style=\"font-size:12px;\">watch and learn</span></a><span style=\"font-size:12px;\"> how the champions did it.</span><br><span style=\"font-size:12px;\">All the Best!!!</span></p>"
// pushHtmlString(data)

inlineStyling()
function inlineStyling () {
    const divNode  = document.createElement('h2');
    divNode.style = "background:red;font-size:20px;color:white;padding:20px;text-align:center";
    divNode.textContent = 'Hey Relaxe'
    document.body.append(divNode)
}

























// dom  => document object model 
// When a browser loaded the html page  file in browser it will create Document  Object Model 
// It is like tree of objects structure


// Using dcoument
// You can delete the element from page 
// You can update the element from page
// You can create new element into the page
// You can add events(action) to the page
// You cam remove add and edit css in web page
// You can change the attributes of the element
// You can do all the  crud operations in every attributes of html element


// Document object model is use for dynamically changing the content of web page

// The document object model is a platform or language neutral interface  that allows (any programming language) javacript to dynamicalyy  , add , delete , update ,edit the web page or html element


// Insert element
// delete element
// update element
// add css 
// remove css
// add style remove style
// adding events  (action)


// This javascript file we will use for intearaction with web page 

//