
function setCookie(cookieName, cookieValue, daysToExpire, path, domain) {
	const date = new Date();
    date.setTime(date.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));

    let expires = "expires=" + date.toGMTString();

    document.cookie = `${cookieName}=${cookieValue}; ${expires}; path= ${path}; domain= ${domain}`
    console.log("setCookieValue: " + cookieValue)
}

function getCookieValue(cookieName) {
        var cookieValue = document.cookie.match('(^|;)\\s*' + cookieName + '\\s*=\\s*([^;]+)');
	return cookieValue ? cookieValue.pop() : '';
}

document.querySelector('.button').onclick = function () {
	console.log("getCookieValue: " + getCookieValue('Foo'));
	console.log("getCookieValue: " + getCookieValue('Goo'));
}

function deleteCookie() {
	document.cookie = "Foo='' ; max-age=0; expires=0";
    document.cookie ="Goo='' ; max-age=0; expires=0";
    console.log("Cookies delete")
	
}