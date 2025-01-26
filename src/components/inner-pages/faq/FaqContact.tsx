interface DataType {
   id: number;
   data_wow_delay: string;
   title: string;
   contact_1: JSX.Element;
   contact_2: JSX.Element;
}[];

const faq_contact_data: DataType[] = [
   {
      id: 1,
      data_wow_delay: ".3s",
      title: "Phone & Fax",
      contact_1: (<>Mobile : <a href="tel:+1979056780">+197 -90 - 56 - 780</a></>),
      contact_2: (<>Fax : <a href="tel:+442081234567">+44-208-1234567</a></>),
   },
   {
      id: 2,
      data_wow_delay: ".5s",
      title: "Mail Address",
      contact_1: (<>Info.company@gmail.com</>),
      contact_2: (<>Info.company@yahoo.com</>),
   },
   {
      id: 3,
      data_wow_delay: ".7s",
      title: "Our Location",
      contact_1: (<>Mobile : 85 Ketch Harbour</>),
      contact_2: (<>RoadBensalem, PA 19020</>),
   },
   {
      id: 4,
      data_wow_delay: ".9s",
      title: "Office Hour",
      contact_1: (<>Sun - Thu 09 am - 06pm</>),
      contact_2: (<>Fri - Sat 4 pm - 10pm</>),
   },
];

const FaqContact = ({ padding }: any) => {
   return (
      <section className={`contact-info-area fix section-padding ${padding ? "section-padding" : "pt-0"}`}>
         <div className="container">
            <div className="contact-info-wrapper-2">
               <div className="row g-4">
                  {faq_contact_data.map((item) => (
                     <div key={item.id} className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={item.data_wow_delay}>
                        <div className="contact-info-items">
                           <div className="icon">
                              <i className="fa-solid fa-phone"></i>
                           </div>
                           <div className="content">
                              <h3>{item.title}</h3>
                              <ul>
                                 <li>{item.contact_1}</li>
                                 <li>{item.contact_2}</li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   )
}

export default FaqContact
