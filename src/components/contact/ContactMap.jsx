import React from 'react';  

const ContactMap = () => {  
    return (  
        <>  
            <div className="maps-area bg-gray overflow-hidden">  
                <div className="google-maps">  
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30670.378367788395!2d-96.9102004!3d33.1502093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c3c1abc09943d%3A0xcad371b035c8fea2!2sFrisco%2C%20TX%2C%20USA!5e0!3m2!1sen!2sus!4v1691614530197!5m2!1sen!2sus" 
                        width="600" 
                        height="450" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>  
                </div>  
            </div>  
        </>  
    );  
};  

export default ContactMap;
