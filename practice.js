const isPositive=(num)=>
{
    if (num>0)
    {
        return true;
    }
    else
    {
        return false;
    }
}
console.log(isPositive(5));

const getUser=(name,age)=>{
 
    return(`Name${name} and age is${age}` )
}
    
   

console.log(getUser('tirtha',21));

const welcome=(user="Guest")
{

    console.log("Welcom,"+user);
}
getUser();
    