import React from 'react'
import "../css/Ogretiler.css"
import girisResimi from "../img/ogretilerGiris.jpg"
import { motion } from "framer-motion"
import saditsAllah from "../img/saditsAllah.jpeg"
import seytaninIsımleri from "../img/seytaninIsımleri.jpeg"
import teistiSatanizminBayramlari from "../img/teistiSatanizminBayramlari.jpeg"
import turklerinMusulmanOlusu from "../img/turklerinMusulmanOlusu.jpeg"
import teistikSatanizimNedir from "../img/teistikSatanizimNedir.jpeg"
import olduktenSonra from "../img/olduktenSonra.jpg"
import Header from './Header'
import { Link } from 'react-router-dom'



const Ogretiler = () => {


    const iceriklerSoldan ={
        hidden:{
            opacity:0,
            x:-80
        },
        visible:{
            opacity:1,
            x:0,
            transition:{
                delay:1,
                duration:1
            }
        }
    }
    const iceriklerSagdan ={
        hidden:{
            opacity:0,
            x:80
        },
        visible:{
            opacity:1,
            x:0,
            transition:{
                delay:1,
                duration:1
            }
        }
        
        
    }


  return (

    <>
    <Header/>
   
    <div className=' erkan bg-black px-20 py-20 '>
        <div className='flex flex-row  justify-around '>

            <motion.div className='w-[60%]   text-xl text-red-500'
            initial={{ 
                opacity: 0,
                x:-10,
            }}

            animate={{
                x:0,
                opacity:1,
            }}
            
            transition={{
                delay:.5,
                duration:1.5
            }}
            >
                
                <div className='text-[45px] my-3 text-left text-color-red gap-2' style={{ fontFamily: 'Kurale' }}  >Satanizim Nedir ?</div>

                <div className='text-2xl text-white text-left indent-8 w-full px-10'>Satanizm, Şeytan'ı temel alan bir grup ideolojik ve felsefi inançtır. Satanizmin çağdaş dini uygulamaları, birkaç tarihsel emsali olmasına rağmen, 1966 yılında Amerika Birleşik Devletleri'nde Anton LaVey tarafından ateist Şeytan Kilisesi'nin kurulmasıyla başlamıştır. Halka açık uygulamalardan önce Satanizm, bir öz kimlikten ziyade çeşitli Hristiyan grupların ideolojik rakiplerine yönelik bir suçlama olarak varlığını sürdürmekteydi. Satanizm ve Şeytan kavramı aynı zamanda sanatçılar ve şovmenler tarafından sembolik ifade için de kullanılmıştır.

                Hristiyanlık tarihinin büyük bir bölümünde çeşitli grupların Satanizm uyguladığına dair suçlamalar yapılmıştır. Orta Çağ boyunca Katolik Kilisesi'ne bağlı Engizisyon, Tapınak Şövalyeleri ve Katarlar gibi çeşitli sapkın Hristiyan mezhep ve grupların gizli Satanik ayinler gerçekleştirdiğini iddia etmiştir. Bunu izleyen Erken Modern dönemde, yaygın bir Satanik cadı komplosuna olan inanç, Avrupa ve Kuzey Amerika kolonilerinde cadı olduğu iddia edilen kişilerin toplu olarak yargılanmasıyla sonuçlanmıştır. Şeytani komploların aktif olduğu ve Protestanlık (ve tersine, Protestanların Papa'nın Deccal olduğu iddiası) ve Fransız Devrimi gibi olayların arkasında olduğu suçlamaları on sekizinci yüzyıldan yirminci yüzyıla kadar Hristiyan âleminde yapılmaya devam etmiştir. Büyük bir Şeytani komplo fikri . . .</div>
                <div className='text-white  border-red text-right my-10 px-12  '>
                    <div className='inline p-3 bg-[#AD2831]  cursor-pointer hover:bg-red-800 duration-300 rounded-[10px]  '>
                        Devamını Oku
                    </div>    
                </div> 
            </motion.div>
                <motion.div
                        initial={{ 
                            opacity: 0,
                            x:50,
                        }}
            
                        animate={{
                            x:0,
                            opacity:1,

                        }}
                        
                        transition={{
                            delay:.5,
                            duration:1.5
                        }}
                >
                    <img className=' h-[650px] flex justify-center items-center rounded-[50px]' src={girisResimi} alt='' />
                </motion.div>
        </div>
            <div>
                <motion.div className=' kolakan  my-12 w-[100%] flex justify-center items-center justify-around'
                    variants={iceriklerSoldan}
                    animate="visible"
                    initial="hidden"
                >
                    <div
                    
                    
                    > 
                    <Link to="ayinoku" >
                        <img className=' resimler rounded-[20px] w-[600px] h-[300px]' src={teistikSatanizimNedir} alt="" />
                        <div className=' resimlerAcıklamaları  my-3 text-2xl text-white'>Teistik Satanizim Nedir ?</div>
                    </Link>
                    </div>
                    
                    <div> 
                        <img className= ' resimler rounded-[20px] w-[600px] h-[300px]' src={seytaninIsımleri} alt="" />
                        <div className=' resimlerAcıklamaları  my-3 text-2xl text-white'>Şeytanın İsimleri</div>
                    </div>
                </motion.div>

                <motion.div className=' my-12 w-[100%] flex justify-center items-center justify-around'
                     variants={iceriklerSagdan}
                     animate="visible"
                     initial="hidden"
                
                >
                    <div> 
                        <img className='resimler rounded-[20px] w-[600px] h-[300px]' src={teistiSatanizminBayramlari} alt="" />
                        <div className=' resimlerAcıklamaları  my-3 text-2xl text-white'>Teistik Satanizim Bayramları</div>
                    </div>
                    <div> 
                        <img className='resimler  rounded-[20px] w-[600px] h-[300px]' src={olduktenSonra} alt="" />
                        <div className='resimlerAcıklamaları my-3 text-2xl text-white'>Öldükten Sonra Ne Olacak</div>
                    </div>
                </motion.div>


                <motion.div className=' my-12 w-[100%] flex justify-center items-center justify-around'

                   variants={iceriklerSagdan}
                   animate="visible"
                   initial="hidden"
                >
                    <div> 
                        <img className='resimler rounded-[20px] w-[600px] h-[300px]' src={turklerinMusulmanOlusu} alt="" />
                        <div className=' resimlerAcıklamaları my-3 text-2xl text-white'>Türklerin Müsülman Oluşu</div>
                    </div>
                    <div> 
                        <img className='resimler rounded-[20px] w-[600px] h-[300px]' src={saditsAllah} alt="" />
                        <div className=' resimlerAcıklamaları my-3 text-2xl text-white'>Sadist Allah</div>
                    </div>
                </motion.div>

            </div>
            
    </div>
    </>
  )
}

export default Ogretiler
