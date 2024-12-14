import React from 'react';  

const ContactMap = () => {  
    return (  
        <>  
            <div className="maps-area bg-gray overflow-hidden">  
                <div className="google-maps">  
                <iframe 
    src="https://www.google.com/maps/place/Plano,+TX,+USA/@33.0613788,-96.8190279,19165m/data=!3m2!1e3!4b1!4m6!3m5!1s0x864c21da13c59513:0x62aa036489cd602b!8m2!3d33.0198431!4d-96.6988856!16zL20vMDEzbTR2?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D" 
    width="600" 
    height="450" 
    style="border:0;" 
    allowfullscreen="" 
    loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade">
</iframe>

                </div>  
            </div>  
        </>  
    );  
};  

export default ContactMap;
