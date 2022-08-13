const isValidHtml = (htmlStr) => {
    let parser = new DOMParser();
    let parseAction = parser.parseFromString(htmlStr, "application/xml");
    let error = parseAction.querySelector('parsererror');
    return error ? false : true;
}