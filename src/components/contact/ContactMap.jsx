import React from 'react';  

const ContactMap = () => {  
    return (  
        <>  
            <div className="maps-area bg-gray overflow-hidden">  
                <div className="google-maps">  
                <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107002.02923342277!2d-96.81902761416582!3d33.06137878361218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c21da13c59513%3A0x62aa036489cd602b!2sPlano%2C%20TX%2C%20USA!5e0!3m2!1sen!2s!4v1734298334476!5m2!1sen!2s"
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
