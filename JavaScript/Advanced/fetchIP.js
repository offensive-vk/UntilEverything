// JavaScript Program to Fetch IP Address using Async Functions.

async function fetchData(){
    try{
        console.log("Async Function Started: ");
        const res = await fetch('https://www.ifconfig.me/ip');
        const data = await res.text();

        console.log("[ Your IP Address is : " + data +" ]");
    }
    catch(err){
        console.error("Failed to fetch your IP.", err);
    }
    finally{
        console.log("Function Terminated<Fulfilled> ");
    }
}

fetchData();
console.log("Program running...");