import React from 'react';  

const ContactMap = () => {  
    return (  
        <>  
            <div className="maps-area bg-gray overflow-hidden">  
                <div className="google-maps">  
                <iframe
    src="https://www.google.com/maps/embed?pb=..."
    width="600"
    height="450"
    style={{ border: 0 }}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Google Maps Location"
></iframe>


                </div>  
            </div>  
        </>  
    );  
};  

export default ContactMap;
