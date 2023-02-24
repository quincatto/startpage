export default function Greeting(){
    const name = 'Quin';
    const currentTime = new Date();
    const currentHours = currentTime.getHours();
    let greeting: string = `Greetings, ${name}`;
    
    if (currentHours >= 5 && currentHours < 12){
        greeting = `Morning, ${name}`;
    }
    else if (currentHours >= 12 && currentHours < 18){
        greeting = `Afternoon, ${name}`;
    }
    else if (currentHours >= 18 && currentHours < 22){
        greeting = `Evening, ${name}`;
    }
    else {
        greeting = `Night, ${name}`;
    }

    return (
        <h1 className='text-shadow'>{greeting}</h1>
    )
}