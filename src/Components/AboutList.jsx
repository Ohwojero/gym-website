import React from 'react'
import about1 from '../Assets/about1.jpg'
import about2 from '../Assets/about2.jpg'
import about3 from '../Assets/about3.jpg'
import about4 from '../Assets/about4.jpg'
import about5 from '../Assets/about5.jpg'
import {motion} from 'framer-motion'
const AboutList = () => {

    const boutList = [
        {
          img: about1,
          title: "Foluso Ogunwale",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos libero quos debitis beatae alias dignissimos necessitatibus et, qui rerum minus dolores facere eum id a placeat. Quibusdam tempora nisi accusamus ullam? Doloremque perspiciatis enim iure ad velit, quibusdam, ut facilis maxime tenetur nobis similique repellat ducimus. Atque nostrum sequi quidem deleniti quis ad iste accusamus inventore quasi perspiciatis numquam qui, consectetur cum labore quos ipsum nisi vitae voluptates. Repellat aut voluptates quae dicta culpa, eaque laboriosam doloribus. Aperiam, reiciendis at!"
        },
    
        {
          img: about2,
          title: "Danladi Verheijen",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos libero quos debitis beatae alias dignissimos necessitatibus et, qui rerum minus dolores facere eum id a placeat. Quibusdam tempora nisi accusamus ullam? Doloremque perspiciatis enim iure ad velit, quibusdam, ut facilis maxime tenetur nobis similique repellat ducimus. Atque nostrum sequi quidem deleniti quis ad iste accusamus inventore quasi perspiciatis numquam qui, consectetur cum labore quos ipsum nisi vitae voluptates. Repellat aut voluptates quae dicta culpa, eaque laboriosam doloribus. Aperiam, reiciendis at!"
        },
    
        {
          img: about3,
          title: "Brian Tracy",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos libero quos debitis beatae alias dignissimos necessitatibus et, qui rerum minus dolores facere eum id a placeat. Quibusdam tempora nisi accusamus ullam? Doloremque perspiciatis enim iure ad velit, quibusdam, ut facilis maxime tenetur nobis similique repellat ducimus. Atque nostrum sequi quidem deleniti quis ad iste accusamus inventore quasi perspiciatis numquam qui, consectetur cum labore quos ipsum nisi vitae voluptates. Repellat aut voluptates quae dicta culpa, eaque laboriosam doloribus. Aperiam, reiciendis at!"
        },
    
        {
          img: about4,
          title: "James Brown",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos libero quos debitis beatae alias dignissimos necessitatibus et, qui rerum minus dolores facere eum id a placeat. Quibusdam tempora nisi accusamus ullam? Doloremque perspiciatis enim iure ad velit, quibusdam, ut facilis maxime tenetur nobis similique repellat ducimus. Atque nostrum sequi quidem deleniti quis ad iste accusamus inventore quasi perspiciatis numquam qui, consectetur cum labore quos ipsum nisi vitae voluptates. Repellat aut voluptates quae dicta culpa, eaque laboriosam doloribus. Aperiam, reiciendis at!"
        },
    
        {
          img: about5,
          title: "Nelson Clinton",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos libero quos debitis beatae alias dignissimos necessitatibus et, qui rerum minus dolores facere eum id a placeat. Quibusdam tempora nisi accusamus ullam? Doloremque perspiciatis enim iure ad velit, quibusdam, ut facilis maxime tenetur nobis similique repellat ducimus. Atque nostrum sequi quidem deleniti quis ad iste accusamus inventore quasi perspiciatis numquam qui, consectetur cum labore quos ipsum nisi vitae voluptates. Repellat aut voluptates quae dicta culpa, eaque laboriosam doloribus. Aperiam, reiciendis at!"
        },
      ]

  return (
    <div className='aboutlist-section py-5 mt-lg-0'>
        <div className='container'>
            <div className=''>
                {
                    boutList.map(({img, title, desc})=>{
                        return (
                            <div className='row aboutList-content'>
                                <div className='col-md-5 content-image'>
                                <motion.div initial={{opacity:1, x:-300}} whileInView={{opacity:1, x:0}} transition={{duration:1}}>
                                    <img src={img} alt="" className='img-fluid w-75' />
                                </motion.div>
                                </div>
                                <div className='col-md-7'>
                                <motion.div initial={{opacity:1, x:-300}} whileInView={{opacity:1, x:0}} transition={{duration:1}}>
                                    <h2 className='text-success'>{title}</h2>
                                    <p>{desc}</p>
                                </motion.div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default AboutList