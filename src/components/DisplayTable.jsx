import React, { useEffect, useState } from 'react';

import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

import SongTile from './SongTile';


const DisplayTable = (props) => {

    const [email, setEmail] = useState('');

    const[formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
         
        try{
            const docRef = await addDoc(collection(db,"Emails"),{
                Email: email,
            });
            console.log("Document written with ID: ", docRef.id);
        }catch(e){
            console.log("Error adding Document: ",e)
        }
        setFormSubmitted(true);
    }
    
    console.log(props.authorization);
    
    if(!props.authorization){
        if(formSubmitted){
            return(
                <div className='text-center w-4/6 mx-auto my-12
                 bg-zinc-500 p-6 rounded-lg text-zinc-300'>
                    <p className='text-4xl text-white mb-4'>Thank You</p>
                    <p>Your response is received. You will 
                        shorlty be emailed after adding to user list.
                    </p>
                </div>
            );
        }
        else {
        return(
        <div className='flex flex-col justify-center items-center'> 
            <p className='w-5/6 bg-red-400 p-6 m-3
             text-red-900 rounded-xl'>
                Due to Spotify's API limitation, access to the 
                site is only granted to users whose email address
                has been explicitly submitted and added to the 
                user list. Once you are added to the user list, 
                you will receive an email notification. 
                Please note that you will only be able to 
                access the site after your email address has 
                been added to the user list. 
                Thank you for your understanding.  
            </p>
            <form onSubmit={ handleSubmit } className='p-6 w-5/6 flex flex-col 
                items-center text-center' name="Email-Gathering" netlify>
                <label htmlFor='email'>Enter your email 
                    related to your Spotify account below</label>
                <input className=" w-5/6 border-2 border-zinc-500 
                    rounded-md my-4" type='email' name="email" required
                    onChange={(e) => {setEmail(e.target.value)}}/>
                <input type='submit' value='Submit' className='bg-zinc-900
                    border-zinc-500 hover:bg-zinc-600 text-zinc-300 border 
                    rounded-md p-2'/>
            </form>
        </div>
        )
    }
    }
    return(
        <div className=' bg-zinc-900 w-full h-full'>
            <div className=' flex justify-center'> 
                <span className='text-amber-300  
                    text-4xl/[5rem]'>
                        Top 10 of this week
                </span>
                </div>
                <div className='flex flex-wrap justify-center'>
                {props.songs.items && props.songs.items.map((item, index) => (
                   
                    <SongTile key={index} number={index} id={item.track.id} name={item.track.name} 
                        image={item.track.album.images[0].url}/>
        
                ))}
                </div>
            </div>
    );
}

export default DisplayTable;