//This all are class1 topic: Class1 was theoritical topic;

//Server-side vs. Client-side | Request-response model | Routing and controller concept | 
// Middleware concept | Introduction to JSON | Understanding JSON structure | 
// Best practices of JSON | Understanding HTTP client | HTTP request segments | 
// Comparison between GET and POST | When to use GET and when to use POST | 
// Request rate limiting | Response segments | Response status code | 
// URI naming best practices | HTTP cookies in detail | Uses of HTTP cookies | 
// Response best practices | Request best practices | Controller best practices | 
// Middleware best practices

//This all are class2 topic: Implemented topic;

//Server-side vs. Client-side | Request-response model | Routing and controller concept | 
// Middleware concept | Introduction to JSON | Understanding JSON structure | 
// Best practices of JSON | Understanding HTTP client | HTTP request segments | 
// Comparison between GET and POST | When to use GET and when to use POST | 
// Request rate limiting | Response segments | Response status code | 
// URI naming best practices | HTTP cookies in detail | Uses of HTTP cookies | 
// Response best practices | Request best practices | Controller best practices | 
// Middleware best practices

localStorage.setItem("them", "dark");

// console.log(localStorage.getItem("them","light"));
localStorage.removeItem("them");

const countries = ["Bangladesh", "Australia", "France", "Norway"];

const user = {
    id: 1,
    name: "Abir",
    age: 25
};

const myName = "Abir";

sessionStorage.setItem("Countries", countries);

sessionStorage.setItem("user", JSON.stringify(user));
sessionStorage.setItem("myName", myName);

console.log(sessionStorage.getItem("countries"));

console.log(JSON.parse(sessionStorage.getItem("user")));



document.cookie = "name = Abir; max-age=20";
document.cookie = "user = Rawvy; path=/about";

