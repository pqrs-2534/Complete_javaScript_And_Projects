// immediately invoked functon expression :- iife

(function chai(){
    //nameiife
    console.log("sandeep")
}());

((name) => {
    //simple iife
    console.log(`good mornning ${name}`)
})("sandeep");