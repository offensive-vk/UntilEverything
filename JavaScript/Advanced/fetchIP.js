
async function fetchData(){
    try{
        console.log("Async Function Started: ");
        const res = await fetch('https://www.ifconfig.me/ip');
        const data = await res.text();

        console.log("Your IP Address is : " + data);
    }
    catch(err){
        console.error("Failed to fetch data.", err);
    }
    finally{
        console.log("Async Function Finished!");
    }
}

fetchData();
console.log("Program running...");