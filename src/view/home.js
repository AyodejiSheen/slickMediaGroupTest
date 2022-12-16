import { useEffect, useState } from 'react'
import logo from '../media/Logo.png'
import axios from 'axios'



export const Home = () => {

    const [video, setVideo] = useState([])
    const [search, setSearch] = useState("")

    const getVideo = async () => {
        try {
            const response = await axios.get('https://www.omdbapi.com/?i=tt3896198&apikey=ffd7d140')
            setVideo([...video, response.data])
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getVideo()
    }, [])


    return (
        <>

            <section className="header">
                <div className='flex justify-center lg:justify-start '>
                    <img src={logo} alt="test_app" className='logo' />
                </div>
            </section>

            <section className='hero_section flex items-center justify-center lg:justify-start '>
                <h3 className='lg:ml-[77px] w-[273px] md:w-[490px]'>Watch something incredible.</h3>
            </section>

            <section>
                <form className='flex flex-1 flex-col form mx-auto'>
                    <label className='label'>Search</label>
                    <input onChange={(e) => setSearch(e.target.value)} type="search" className="form-input w-full focus:outline-none px-4" />
                </form>
            </section>


            <section className='movie_list space-y-[18px]'>
                <p className='label'>$(Movie Category Name)</p>
                <div className='flex gap-[10px] overflow-x-scroll'>
                    {
                        video.filter((each) => {
                            if (search === "") {
                                return each
                            } else if (each.Title.toLowerCase().includes(search.toLowerCase())) {
                                return each
                            }return false;
                        }).map((each, i) => {
                            return (
                                <div key={i} className=" bg-slate-400 rounded-lg flex-none relative">
                                    <p className="absolute text-white bg-slate-900 bg-opacity-75 w-full py-8 text-center flex justify-center items-center text-[24px] each_video">{each.Title}</p>
                                    <img src={each.Poster} alt={each.Title} className="each_video" />
                                </div>
                            )
                        })
                    }
                </div>
            </section>

            <section className='movie_list space-y-[18px]'>
                <p className='label'>$(Movie Category Name)</p>
                <div className='flex gap-[13px] overflow-x-scroll'>
                    {
                        video.filter((each) => {
                            if (search === "") {
                                return each
                            } else if (each.Title.toLowerCase().includes(search.toLowerCase())) {
                                return each
                            }return false;
                        }).map((each, i) => {
                            return (
                                <div key={i} className=" bg-slate-400 rounded-lg flex-none relative">
                                    <p className="absolute text-white bg-slate-900 bg-opacity-70 w-full py-8 text-center flex justify-center items-center text-[24px] each_video">{each.Title}</p>
                                    <img src={each.Poster} alt={each.Title} className="each_video" />
                                </div>
                            )
                        })
                    }
                </div>
            </section>

        </>
    )
}