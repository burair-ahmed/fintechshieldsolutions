import React from 'react';  

const ContactMap = () => {  
    return (  
        <>  
            <div className="maps-area bg-gray overflow-hidden">  
                <div className="google-maps">  
                <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.651619617065!2d-95.56942662243064!3d29.661580256931696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640e7fb3b5ec7f5%3A0xb8f75f8687573849!2s11011%20S%20Wilcrest%20Dr%20g210%2C%20Houston%2C%20TX%2077099%2C%20USA!5e1!3m2!1sen!2s!4v1766754821729!5m2!1sen!2s"
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
