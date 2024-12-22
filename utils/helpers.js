const cheerio = require('cheerio');
export const parseHTMLContent = (htmlContent) => {
    const $ = cheerio.load(htmlContent);
    // Example: Extracting text content of all paragraphs (p) in the HTML content
    const paragraphs = $('p').map((index, element) => $(element).text()).get();
    return paragraphs;
  };

  export function truncate( str, n, useWordBoundary ){
    if (str.length <= n) { return str; }
    const subString = str.substr(0, n-1); // the original check
    return (useWordBoundary 
      ? subString.substr(0, subString.lastIndexOf(" ")) 
      : subString) + "&hellip;";
  }