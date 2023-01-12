/* eslint-disable react-hooks/exhaustive-deps */
//All imports
import React,{useEffect} from 'react';

//Css import
import './css/search.css';
//Image import
import search from './images/search.png';
//Formik Import
import {useFormik} from 'formik';

//import axios
import axios from 'axios';


let Search = ({userSet})=>{


    let formik = useFormik({
        initialValues:{
            username:''
        },
        onSubmit:values=>{
            axios.get(`https://api.github.com/users/${values.username}`)
            .then(res=>{
                // eslint-disable-next-line react-hooks/rules-of-hooks
                console.log(res.data)
                userSet(res.data)
                values.username = ''
            })
            .catch(err=>{
                console.log(err)
            })
        }
    })

    useEffect(()=>{
        axios.get('https://api.github.com/users/emmanuel687')
        .then(res=>{
            // eslint-disable-next-line react-hooks/rules-of-hooks
            console.log(res.data)
            userSet(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])


    return(
        <>
            <section className="search">
                <article className="search-container">
                    <form action="" className="search-form" onSubmit={formik.handleSubmit}>
                        <div className="search-form-image">
                            <img src={search} alt="" />
                            <input type="text" name="username" id="username" placeholder='Github username...' value={formik.values.username} onChange={formik.handleChange} />
                        </div>
                        <div className="search-form-submit">
                            <button type="submit">Search</button>
                        </div>
                    </form>
                </article>
            </section>
        </>
    )

};



export default Search;